"""Static page builder: wraps every _src/pages/*.html in _src/layout.html and writes it to the site root.

Run from anywhere:  python _tools/build.py
Page files start with a front-matter comment:
    <!--
    title: Dog Boarding
    description: One sentence for search results.
    nav: services            (locations | services | events | about | new — highlights that menu)
    -->
Macros available inside pages:
    [[hero crumb="Services" emoji="🏰" eyebrow="..." title='Dog <span class="s">Boarding</span>' sub="..." img="assets/img/x.webp" alt="..." tag="..."]]
    [[book_cta]]        "Ready to book?" band with both locations + phone
    [[book_buttons]]    the three booking buttons on their own
"""
import hashlib, html, json, pathlib, re

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / '_src'
layout = (SRC / 'layout.html').read_text(encoding='utf-8')
bulldog = (SRC / 'bulldog.svg').read_text(encoding='utf-8').strip()   # loader mascot
# cache-busting version: changes whenever any CSS/JS/font file changes
VERSION = hashlib.md5(b''.join(p.read_bytes() for p in sorted((ROOT / 'assets').rglob('*')) if p.suffix in ('.css', '.js'))).hexdigest()[:8]
pup = (SRC / 'pup.svg').read_text(encoding='utf-8').strip()           # chat button icon (line-art, unused)
lacy = (SRC / 'lacy.svg').read_text(encoding='utf-8').strip()         # Lacy the Pomeranian: chat button + chat header (inline, so she can blink)
# ...and as a cached image file for the loader and page wipe (no need for two more inline copies on every page)
(ROOT / 'assets/img/lacy.svg').write_text(lacy.replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" ', 1), encoding='utf-8')
AWARD = '''<div class="award-card" data-reveal>
  <svg class="award-medal" viewBox="0 0 120 150" aria-hidden="true">
    <defs><linearGradient id="medalGold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffe69a"/><stop offset=".5" stop-color="#f5c542"/><stop offset="1" stop-color="#d4921c"/></linearGradient></defs>
    <path d="M38 78 L22 146 L42 134 L52 150 L62 86Z" fill="#43a7b8"/><path d="M82 78 L98 146 L78 134 L68 150 L58 86Z" fill="#7a2a56"/>
    <g transform="translate(60 60)">
      <path fill="url(#medalGold)" d="''' + ' '.join(f"{'M' if i == 0 else 'L'}{(52 if i % 2 == 0 else 45) * __import__('math').cos(i * __import__('math').pi / 16):.1f} {(52 if i % 2 == 0 else 45) * __import__('math').sin(i * __import__('math').pi / 16):.1f}" for i in range(32)) + '''Z"/>
      <circle r="38" fill="#fff8e1" stroke="#d4921c" stroke-width="3"/>
      <text y="5" text-anchor="middle" font-family="Fredoka, system-ui, sans-serif" font-weight="700" font-size="31" fill="#521034">6×</text>
      <!-- curved along the bottom of the medal's face so it fits inside the rim -->
      <path id="medalArc" d="M-28.5 0 A28.5 28.5 0 0 0 28.5 0" fill="none"/>
      <text font-family="Jost, system-ui, sans-serif" font-weight="700" font-size="8" letter-spacing="1.1" fill="#2e8496"><textPath href="#medalArc" startOffset="50%" text-anchor="middle">BEST IN MESA</textPath></text>
    </g>
  </svg>
  <div class="award-txt">
    <span class="award-ey">Voted six years running</span>
    <h3>Best Pet Boarding Services in Mesa</h3>
    <div class="trophies" aria-label="Six wins"><i>🏆</i><i>🏆</i><i>🏆</i><i>🏆</i><i>🏆</i><i>🏆</i></div>
  </div>
  <div class="award-logo"><img src="assets/img/award.webp" alt="Award-winning dog services" loading="lazy"></div>
</div>'''

BOOK_BUTTONS = ('<a class="btn magnetic" href="book.html?loc=mesa">Book Mesa <span class="arrow">→</span></a>'
                '<a class="btn teal magnetic" href="book.html?loc=chandler">Book Chandler <span class="arrow">→</span></a>'
                '<a class="btn ghost magnetic" href="tel:+14802071852">📞 480-207-1852</a>')
BOOK_CTA = f'''<section style="padding-top:20px"><div class="wrap"><div class="cta-band" data-reveal="scale">
  <div><h2 data-color="white" data-fur="pink">Ready to <span class="s">book?</span></h2><p>Select your nearest location to reserve your spot — or ask Lacy, our pup concierge.</p></div>
  <div class="ctas"><a class="btn light magnetic" href="book.html?loc=mesa">Book Mesa <span class="arrow">→</span></a><a class="btn light magnetic" href="book.html?loc=chandler">Book Chandler <span class="arrow">→</span></a><a class="btn ghost magnetic" style="--c:#fff" href="tel:+14802071852">📞 Call</a></div>
</div></div></section>'''

# 5-star reviews quoted (excerpted) from the public Yelp pages, with attribution — see _src/reviews.json
REVIEWS = json.loads((SRC / 'reviews.json').read_text(encoding='utf-8'))
YELP = {'mesa': 'https://www.yelp.com/biz/happy-pets-palace-and-playground-mesa', 'chandler': 'https://www.yelp.com/biz/happy-pets-palace-chandler-chandler'}
def review_card(r, i=0):
    when = f" · {r['date']}" if r['date'] else ''
    return (f'<figure class="rv" style="--i:{i % 6}"><div class="stars" aria-label="5 out of 5 stars">★★★★★</div>'
            f'<blockquote>“{html.escape(r["text"])}”</blockquote>'
            f'<figcaption><span class="av">{html.escape(r["name"][0])}</span><span><b>{html.escape(r["name"])}</b><small>{html.escape(r["from"])}{when}</small></span>'
            f'<a class="src" href="{YELP[r["loc"]]}" target="_blank" rel="noopener">{"Mesa" if r["loc"] == "mesa" else "Chandler"} · Yelp ↗</a></figcaption></figure>')
def reviews_strip():
    half = (len(REVIEWS) + 1) // 2
    rows = [REVIEWS[:half], REVIEWS[half:]]
    out = ''.join(f'<div class="rv-row{" rev" if k else ""}"><div class="rv-track">{"".join(review_card(r) for r in row * 2)}</div></div>' for k, row in enumerate(rows))
    return f'<div class="rv-marquee" aria-label="Customer reviews">{out}</div>'
def hero_reviews():
    """Rotating quotes at the top of the homepage: just what people said (no stars). core.js shows one at a time.
    Long reviews are cut at the end of a sentence; ones that can't be cut cleanly are left to the reviews page."""
    def excerpt(t, n=105):
        if len(t) <= n:
            return t
        m = re.match(r'(.{40,%d}?[.!?…])(?=\s|$)' % n, t)
        return m.group(1) if m else None
    figs = []
    for r in REVIEWS:
        q = excerpt(r['text'])
        if not q:
            continue
        attrs = ' aria-hidden="true"' if figs else ' class="on"'
        figs.append(f'<figure{attrs}><blockquote>{html.escape(q)}</blockquote>'
                    f'<figcaption>— {html.escape(r["name"])} · {html.escape(r["from"])}</figcaption></figure>')
    icons = ('<svg class="i-pause" viewBox="0 0 16 16" aria-hidden="true"><rect x="3.5" y="3" width="3" height="10" rx="1"/><rect x="9.5" y="3" width="3" height="10" rx="1"/></svg>'
             '<svg class="i-play" viewBox="0 0 16 16" aria-hidden="true"><path d="M5 3.2v9.6a.6.6 0 0 0 .9.5l7.6-4.8a.6.6 0 0 0 0-1L5.9 2.7a.6.6 0 0 0-.9.5z"/></svg>')
    return ('<div class="hero-rv" id="heroRv" role="group" aria-roledescription="carousel" aria-label="What pet parents say" data-reveal style="--i:4">'
            '<span class="hero-rv-mark" aria-hidden="true">“</span>'
            f'<div class="hero-rv-q">{"".join(figs)}</div>'
            '<div class="hero-rv-ctl">'
            f'<button class="hero-rv-btn" type="button" data-rv="pause" aria-label="Pause reviews" aria-pressed="false">{icons}</button>'
            '<button class="hero-rv-btn" type="button" data-rv="next" aria-label="Next review"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M6 3.5 10.5 8 6 12.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>'
            '</div></div>')
def reviews_grid():
    return '<div class="rv-grid">' + ''.join(review_card(r, i) for i, r in enumerate(REVIEWS)).replace('<figure class="rv"', '<figure class="rv" data-reveal') + '</div>'

def attrs(s):
    return {m.group(1): m.group(3) if m.group(3) is not None else m.group(4) for m in re.finditer(r'(\w+)=("([^"]*)"|\'([^\']*)\')', s)}

def img_size(rel):
    """Pixel size of a WebP/PNG/JPEG in the site folder (no Pillow needed), so <img> tags can carry width and
    height and the page doesn't jump when the photo arrives. None if unknown."""
    try:
        b = (ROOT / rel).read_bytes()
    except OSError:
        return None
    try:
        if b[:4] == b'RIFF' and b[8:12] == b'WEBP':
            kind = b[12:16]
            if kind == b'VP8X':
                return 1 + int.from_bytes(b[24:27], 'little'), 1 + int.from_bytes(b[27:30], 'little')
            if kind == b'VP8 ':
                return int.from_bytes(b[26:28], 'little') & 0x3FFF, int.from_bytes(b[28:30], 'little') & 0x3FFF
            if kind == b'VP8L':
                v = int.from_bytes(b[21:25], 'little')
                return (v & 0x3FFF) + 1, ((v >> 14) & 0x3FFF) + 1
        if b[:8] == b'\x89PNG\r\n\x1a\n':
            return int.from_bytes(b[16:20], 'big'), int.from_bytes(b[20:24], 'big')
        if b[:2] == b'\xff\xd8':
            i = 2
            while i < len(b) - 9:
                if b[i] != 0xFF:
                    i += 1; continue
                m = b[i + 1]
                if m in (0xC0, 0xC1, 0xC2):
                    return int.from_bytes(b[i + 7:i + 9], 'big'), int.from_bytes(b[i + 5:i + 7], 'big')
                i += 2 + int.from_bytes(b[i + 2:i + 4], 'big')
    except Exception:
        return None
    return None

def hero(a):
    plain = re.sub(r'<[^>]+>', '', a['title'])
    crumb = a.get('crumb', '')
    crumbs = '<a href="index.html">Home</a><span>›</span>' + (f'<span>{crumb}</span><span>›</span>' if crumb else '') + f'<span>{a.get("here", plain)}</span>'
    ctas = a.get('ctas', BOOK_BUTTONS)
    img = ''
    if a.get('img'):
        tag = f'<span class="tag">{a["tag"]}</span>' if a.get('tag') else ''
        wh = img_size(a['img'])
        dims = f' width="{wh[0]}" height="{wh[1]}"' if wh else ''
        img = f'''<div data-reveal="scale" style="--i:2"><div class="photo-card tilt"><img src="{a['img']}" alt="{html.escape(a.get('alt', plain))}"{dims}>{tag}</div></div>'''
    return f'''<header class="page-hero hero">
  <div class="wrap hero-grid">
    <div>
      <nav class="crumbs" aria-label="Breadcrumb">{crumbs}</nav>
      <span class="badge" data-reveal style="margin-top:18px"><span class="trophy">{a.get('emoji', '🐾')}</span>{a.get('eyebrow', '')}</span>
      <h1 class="live-title"{f' data-accent="{a["accent"]}"' if a.get('accent') else ''}>{a['title']}</h1>
      <p class="sub" data-reveal style="--i:3">{a.get('sub', '')}</p>
      <div class="ctas" data-reveal style="--i:4">{ctas}</div>
    </div>
    {img}
  </div>
</header>'''

OLD_LOGO = '<img src="assets/logo.png" alt="Happy Pets Palace &amp; Playground">'
BRANDS = {
    'current': {   # the logo the site has always used
        'icons': """<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🐾</text></svg>">""",
        'logo_head': OLD_LOGO, 'logo_foot': OLD_LOGO, 'logo_foot_cls': '', 'cta_badge': '', 'banner': '',
    },
    'rebrand': {   # the proposed new logos, shown on rebrand.html so both looks can be compared
        'icons': ('<link rel="icon" type="image/png" sizes="64x64" href="assets/img/favicon-64.png">\n'
                  '<link rel="icon" type="image/png" sizes="32x32" href="assets/img/favicon-32.png">\n'
                  '<link rel="apple-touch-icon" href="assets/img/apple-touch-icon.png">\n'
                  '<meta name="robots" content="noindex">'),   # a preview page: keep it out of search results
        'logo_head': '<img src="assets/img/logo-horizontal.png" alt="Happy Pets Palace &amp; Playground" width="1239" height="240">',
        'logo_foot': '<img src="assets/img/logo-stacked.png" alt="Happy Pets Palace &amp; Playground" width="830" height="420" loading="lazy">',
        'logo_foot_cls': ' logo-foot',
        'cta_badge': '<img class="cta-badge" src="assets/img/logo-badge.png" alt="Happy Pets Palace &amp; Playground badge" width="512" height="512" loading="lazy" data-reveal="scale">',
        'banner': '<a class="rebrand-pill" href="index.html">✨ Rebrand preview · <b>see the current logo</b></a>',
    },
}

def build(page, brand='current', out_name=None):
    B = BRANDS[brand]
    text = page.read_text(encoding='utf-8')
    m = re.match(r'\s*<!--(.*?)-->', text, re.S)
    meta = {}
    if m:
        for line in m.group(1).strip().splitlines():
            k, _, v = line.partition(':'); meta[k.strip()] = v.strip()
        text = text[m.end():]
    text = re.sub(r'\[\[hero (.*?)\]\]', lambda mm: hero(attrs(mm.group(1))), text, flags=re.S)
    text = text.replace('[[book_cta]]', BOOK_CTA).replace('[[book_buttons]]', BOOK_BUTTONS).replace('[[reviews_strip]]', reviews_strip()).replace('[[reviews_grid]]', reviews_grid()).replace('[[hero_reviews]]', hero_reviews()).replace('[[award]]', AWARD).replace('[[cta_badge]]', B['cta_badge'])
    name = page.stem
    out_name = out_name or name
    title = meta.get('title', 'Happy Pets Palace')
    out = layout
    nav = meta.get('nav', '')
    for key in ('locations', 'services', 'about'):
        out = out.replace('{{cur_%s}}' % key, ' class="cur"' if nav == key else '')
    for key in ('events', 'new'):
        out = out.replace('{{cur_%s}}' % key, ' aria-current="page"' if nav == key else '')
    out = (out.replace('{{doc_title}}', 'Happy Pets Palace' if name == 'index' else f'{title} | Happy Pets Palace')
              .replace('{{description}}', html.escape(meta.get('description', ''), quote=True))
              .replace('{{page}}', name).replace('{{bulldog}}', bulldog).replace('{{pup}}', pup).replace('{{lacy}}', lacy).replace('{{v}}', VERSION).replace('{{body}}', B['banner'] + text.strip()))
    for k in ('icons', 'logo_head', 'logo_foot', 'logo_foot_cls'):
        out = out.replace('{{%s}}' % k, B[k])
    (ROOT / f'{out_name}.html').write_text(out, encoding='utf-8')
    return out_name

if __name__ == '__main__':
    built = [build(p) for p in sorted((SRC / 'pages').glob('*.html'))]
    built.append(build(SRC / 'pages' / 'index.html', 'rebrand', 'rebrand'))   # the homepage again, with the new logos
    print('built', len(built), 'pages:', ', '.join(built))
