var xo="169";var _l=0,ko=1,xl=2;var k0=1,vl=2,en=3,yn=0,me=1,Ue=2,_n=0,hi=1,pi=2,Vo=3,Ho=4,yl=5,Un=100,Ml=101,Sl=102,bl=103,El=104,wl=200,Al=201,Tl=202,Rl=203,Wr=204,Xr=205,Cl=206,Pl=207,Il=208,Ll=209,Ul=210,Dl=211,Nl=212,Fl=213,Ol=214,Yr=0,qr=1,Zr=2,mi=3,Jr=4,$r=5,Kr=6,Qr=7,V0=0,Bl=1,zl=2,xn=0,kl=1,Vl=2,Hl=3,vo=4,Gl=5,Wl=6,Xl=7;var H0=300,gi=301,_i=302,jr=303,ta=304,Qs=306,ea=1e3,Nn=1001,na=1002,De=1003,Yl=1004;var Zi=1005;var ke=1006,lr=1007;var Fn=1008;var an=1009,G0=1010,W0=1011,Bi=1012,yo=1013,On=1014,sn=1015,Gi=1016,Mo=1017,So=1018,xi=1020,X0=35902,Y0=1021,q0=1022,Ve=1023,Z0=1024,J0=1025,ui=1026,vi=1027,$0=1028,bo=1029,K0=1030,Eo=1031;var wo=1033,ys=33776,Ms=33777,Ss=33778,bs=33779,ia=35840,sa=35841,ra=35842,aa=35843,oa=36196,la=37492,ca=37496,ha=37808,ua=37809,fa=37810,da=37811,pa=37812,ma=37813,ga=37814,_a=37815,xa=37816,va=37817,ya=37818,Ma=37819,Sa=37820,ba=37821,Es=36492,Ea=36494,wa=36495,Q0=36283,Aa=36284,Ta=36285,Ra=36286;var As=2300,Ca=2301,cr=2302,Go=2400,Wo=2401,Xo=2402;var ql=3200,Zl=3201;var j0=0,Jl=1,mn="",Ce="srgb",En="srgb-linear",Ao="display-p3",js="display-p3-linear",Ts="linear",Qt="srgb",Rs="rec709",Cs="p3";var Xn=7680;var Yo=519,$l=512,Kl=513,Ql=514,tl=515,jl=516,tc=517,ec=518,nc=519,Pa=35044,Wi=35048;var qo="300 es",rn=2e3,Ps=2001,Mn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},de=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var hr=Math.PI/180,Ia=180/Math.PI;function vn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(de[i&255]+de[i>>8&255]+de[i>>16&255]+de[i>>24&255]+"-"+de[t&255]+de[t>>8&255]+"-"+de[t>>16&15|64]+de[t>>24&255]+"-"+de[e&63|128]+de[e>>8&255]+"-"+de[e>>16&255]+de[e>>24&255]+de[n&255]+de[n>>8&255]+de[n>>16&255]+de[n>>24&255]).toLowerCase()}function fe(i,t,e){return Math.max(t,Math.min(e,i))}function ic(i,t){return(i%t+t)%t}function ur(i,t,e){return(1-e)*i+e*t}function Ye(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Jt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Mt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},zt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],p=n[2],m=n[5],x=n[8],v=s[0],d=s[3],f=s[6],M=s[1],_=s[4],b=s[7],C=s[2],A=s[5],w=s[8];return r[0]=o*v+a*M+l*C,r[3]=o*d+a*_+l*A,r[6]=o*f+a*b+l*w,r[1]=c*v+h*M+u*C,r[4]=c*d+h*_+u*A,r[7]=c*f+h*b+u*w,r[2]=p*v+m*M+x*C,r[5]=p*d+m*_+x*A,r[8]=p*f+m*b+x*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,p=a*l-h*r,m=c*r-o*l,x=e*u+n*p+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/x;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=p*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=m*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(fr.makeScale(t,e)),this}rotate(t){return this.premultiply(fr.makeRotation(-t)),this}translate(t,e){return this.premultiply(fr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},fr=new zt;function el(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Is(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sc(){let i=Is("canvas");return i.style.display="block",i}var Zo={};function ws(i){i in Zo||(Zo[i]=!0,console.warn(i))}function rc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ac(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function oc(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Jo=new zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$o=new zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ai={[En]:{transfer:Ts,primaries:Rs,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Ce]:{transfer:Qt,primaries:Rs,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[js]:{transfer:Ts,primaries:Cs,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3($o),fromReference:i=>i.applyMatrix3(Jo)},[Ao]:{transfer:Qt,primaries:Cs,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3($o),fromReference:i=>i.applyMatrix3(Jo).convertLinearToSRGB()}},lc=new Set([En,js]),qt={enabled:!0,_workingColorSpace:En,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!lc.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Ai[t].toReference,s=Ai[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Ai[i].primaries},getTransfer:function(i){return i===mn?Ts:Ai[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Ai[t].luminanceCoefficients)}};function fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function dr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Yn,La=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Yn===void 0&&(Yn=Is("canvas")),Yn.width=t.width,Yn.height=t.height;let n=Yn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Yn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Is("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=fi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(fi(e[n]/255)*255):e[n]=fi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},cc=0,Ls=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cc++}),this.uuid=vn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(pr(s[o].image)):r.push(pr(s[o]))}else r=pr(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function pr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?La.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var hc=0,Pe=class i extends Mn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Nn,s=Nn,r=ke,o=Fn,a=Ve,l=an,c=i.DEFAULT_ANISOTROPY,h=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hc++}),this.uuid=vn(),this.name="",this.source=new Ls(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==H0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ea:t.x=t.x-Math.floor(t.x);break;case Nn:t.x=t.x<0?0:1;break;case na:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ea:t.y=t.y-Math.floor(t.y);break;case Nn:t.y=t.y<0?0:1;break;case na:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Pe.DEFAULT_IMAGE=null;Pe.DEFAULT_MAPPING=H0;Pe.DEFAULT_ANISOTROPY=1;var ne=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],p=l[1],m=l[5],x=l[9],v=l[2],d=l[6],f=l[10];if(Math.abs(h-p)<.01&&Math.abs(u-v)<.01&&Math.abs(x-d)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+v)<.1&&Math.abs(x+d)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,b=(m+1)/2,C=(f+1)/2,A=(h+p)/4,w=(u+v)/4,R=(x+d)/4;return _>b&&_>C?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=A/n,r=w/n):b>C?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=A/s,r=R/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=w/r,s=R/r),this.set(n,s,r,e),this}let M=Math.sqrt((d-x)*(d-x)+(u-v)*(u-v)+(p-h)*(p-h));return Math.abs(M)<.001&&(M=1),this.x=(d-x)/M,this.y=(u-v)/M,this.z=(p-h)/M,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ua=class extends Mn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Pe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ls(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},on=class extends Ua{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Us=class extends Pe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Da=class extends Pe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Sn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],p=r[o+0],m=r[o+1],x=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=p,t[e+1]=m,t[e+2]=x,t[e+3]=v;return}if(u!==v||l!==p||c!==m||h!==x){let d=1-a,f=l*p+c*m+h*x+u*v,M=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){let C=Math.sqrt(_),A=Math.atan2(C,f*M);d=Math.sin(d*A)/C,a=Math.sin(a*A)/C}let b=a*M;if(l=l*d+p*b,c=c*d+m*b,h=h*d+x*b,u=u*d+v*b,d===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],p=r[o+1],m=r[o+2],x=r[o+3];return t[e]=a*x+h*u+l*m-c*p,t[e+1]=l*x+h*p+c*u-a*m,t[e+2]=c*x+h*m+a*p-l*u,t[e+3]=h*x-a*u-l*p-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),p=l(n/2),m=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=p*h*u+c*m*x,this._y=c*m*u-p*h*x,this._z=c*h*x+p*m*u,this._w=c*h*u-p*m*x;break;case"YXZ":this._x=p*h*u+c*m*x,this._y=c*m*u-p*h*x,this._z=c*h*x-p*m*u,this._w=c*h*u+p*m*x;break;case"ZXY":this._x=p*h*u-c*m*x,this._y=c*m*u+p*h*x,this._z=c*h*x+p*m*u,this._w=c*h*u-p*m*x;break;case"ZYX":this._x=p*h*u-c*m*x,this._y=c*m*u+p*h*x,this._z=c*h*x-p*m*u,this._w=c*h*u+p*m*x;break;case"YZX":this._x=p*h*u+c*m*x,this._y=c*m*u+p*h*x,this._z=c*h*x-p*m*u,this._w=c*h*u-p*m*x;break;case"XZY":this._x=p*h*u-c*m*x,this._y=c*m*u-p*h*x,this._z=c*h*x+p*m*u,this._w=c*h*u+p*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],p=n+a+u;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>u){let m=2*Math.sqrt(1+n-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>u){let m=2*Math.sqrt(1+a-n-u);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,p=Math.sin(e*h)/c;return this._w=o*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ko.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ko.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return mr.copy(this).projectOnVector(t),this.sub(mr)}reflect(t){return this.sub(mr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},mr=new U,Ko=new Sn,Bn=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Oe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Oe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Oe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Oe):Oe.fromBufferAttribute(r,o),Oe.applyMatrix4(t.matrixWorld),this.expandByPoint(Oe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ji.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ji.copy(n.boundingBox)),Ji.applyMatrix4(t.matrixWorld),this.union(Ji)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Oe),Oe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ti),$i.subVectors(this.max,Ti),qn.subVectors(t.a,Ti),Zn.subVectors(t.b,Ti),Jn.subVectors(t.c,Ti),cn.subVectors(Zn,qn),hn.subVectors(Jn,Zn),An.subVectors(qn,Jn);let e=[0,-cn.z,cn.y,0,-hn.z,hn.y,0,-An.z,An.y,cn.z,0,-cn.x,hn.z,0,-hn.x,An.z,0,-An.x,-cn.y,cn.x,0,-hn.y,hn.x,0,-An.y,An.x,0];return!gr(e,qn,Zn,Jn,$i)||(e=[1,0,0,0,1,0,0,0,1],!gr(e,qn,Zn,Jn,$i))?!1:(Ki.crossVectors(cn,hn),e=[Ki.x,Ki.y,Ki.z],gr(e,qn,Zn,Jn,$i))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Oe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Oe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($e[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$e[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$e[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$e[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$e[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$e[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$e[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$e[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($e),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},$e=[new U,new U,new U,new U,new U,new U,new U,new U],Oe=new U,Ji=new Bn,qn=new U,Zn=new U,Jn=new U,cn=new U,hn=new U,An=new U,Ti=new U,$i=new U,Ki=new U,Tn=new U;function gr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Tn.fromArray(i,r);let a=s.x*Math.abs(Tn.x)+s.y*Math.abs(Tn.y)+s.z*Math.abs(Tn.z),l=t.dot(Tn),c=e.dot(Tn),h=n.dot(Tn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var uc=new Bn,Ri=new U,_r=new U,zn=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):uc.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ri.subVectors(t,this.center);let e=Ri.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ri,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_r.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ri.copy(t.center).add(_r)),this.expandByPoint(Ri.copy(t.center).sub(_r))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ke=new U,xr=new U,Qi=new U,un=new U,vr=new U,ji=new U,yr=new U,Na=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ke)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ke.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ke.copy(this.origin).addScaledVector(this.direction,e),Ke.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){xr.copy(t).add(e).multiplyScalar(.5),Qi.copy(e).sub(t).normalize(),un.copy(this.origin).sub(xr);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Qi),a=un.dot(this.direction),l=-un.dot(Qi),c=un.lengthSq(),h=Math.abs(1-o*o),u,p,m,x;if(h>0)if(u=o*l-a,p=o*a-l,x=r*h,u>=0)if(p>=-x)if(p<=x){let v=1/h;u*=v,p*=v,m=u*(u+o*p+2*a)+p*(o*u+p+2*l)+c}else p=r,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*l)+c;else p=-r,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*l)+c;else p<=-x?(u=Math.max(0,-(-o*r+a)),p=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+p*(p+2*l)+c):p<=x?(u=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(u=Math.max(0,-(o*r+a)),p=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+p*(p+2*l)+c);else p=o>0?-r:r,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(xr).addScaledVector(Qi,p),m}intersectSphere(t,e){Ke.subVectors(t.center,this.origin);let n=Ke.dot(this.direction),s=Ke.dot(Ke)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),h>=0?(r=(t.min.y-p.y)*h,o=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,o=(t.min.y-p.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-p.z)*u,l=(t.max.z-p.z)*u):(a=(t.max.z-p.z)*u,l=(t.min.z-p.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ke)!==null}intersectTriangle(t,e,n,s,r){vr.subVectors(e,t),ji.subVectors(n,t),yr.crossVectors(vr,ji);let o=this.direction.dot(yr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;un.subVectors(this.origin,t);let l=a*this.direction.dot(ji.crossVectors(un,ji));if(l<0)return null;let c=a*this.direction.dot(vr.cross(un));if(c<0||l+c>o)return null;let h=-a*un.dot(yr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},te=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,p,m,x,v,d){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,p,m,x,v,d)}set(t,e,n,s,r,o,a,l,c,h,u,p,m,x,v,d){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=p,f[3]=m,f[7]=x,f[11]=v,f[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/$n.setFromMatrixColumn(t,0).length(),r=1/$n.setFromMatrixColumn(t,1).length(),o=1/$n.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let p=o*h,m=o*u,x=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+x*c,e[5]=p-v*c,e[9]=-a*l,e[2]=v-p*c,e[6]=x+m*c,e[10]=o*l}else if(t.order==="YXZ"){let p=l*h,m=l*u,x=c*h,v=c*u;e[0]=p+v*a,e[4]=x*a-m,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-x,e[6]=v+p*a,e[10]=o*l}else if(t.order==="ZXY"){let p=l*h,m=l*u,x=c*h,v=c*u;e[0]=p-v*a,e[4]=-o*u,e[8]=x+m*a,e[1]=m+x*a,e[5]=o*h,e[9]=v-p*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let p=o*h,m=o*u,x=a*h,v=a*u;e[0]=l*h,e[4]=x*c-m,e[8]=p*c+v,e[1]=l*u,e[5]=v*c+p,e[9]=m*c-x,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let p=o*l,m=o*c,x=a*l,v=a*c;e[0]=l*h,e[4]=v-p*u,e[8]=x*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*u+x,e[10]=p-v*u}else if(t.order==="XZY"){let p=o*l,m=o*c,x=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=p*u+v,e[5]=o*h,e[9]=m*u-x,e[2]=x*u-m,e[6]=a*h,e[10]=v*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fc,t,dc)}lookAt(t,e,n){let s=this.elements;return Te.subVectors(t,e),Te.lengthSq()===0&&(Te.z=1),Te.normalize(),fn.crossVectors(n,Te),fn.lengthSq()===0&&(Math.abs(n.z)===1?Te.x+=1e-4:Te.z+=1e-4,Te.normalize(),fn.crossVectors(n,Te)),fn.normalize(),ts.crossVectors(Te,fn),s[0]=fn.x,s[4]=ts.x,s[8]=Te.x,s[1]=fn.y,s[5]=ts.y,s[9]=Te.y,s[2]=fn.z,s[6]=ts.z,s[10]=Te.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],p=n[9],m=n[13],x=n[2],v=n[6],d=n[10],f=n[14],M=n[3],_=n[7],b=n[11],C=n[15],A=s[0],w=s[4],R=s[8],k=s[12],g=s[1],S=s[5],N=s[9],I=s[13],B=s[2],q=s[6],z=s[10],K=s[14],W=s[3],st=s[7],V=s[11],tt=s[15];return r[0]=o*A+a*g+l*B+c*W,r[4]=o*w+a*S+l*q+c*st,r[8]=o*R+a*N+l*z+c*V,r[12]=o*k+a*I+l*K+c*tt,r[1]=h*A+u*g+p*B+m*W,r[5]=h*w+u*S+p*q+m*st,r[9]=h*R+u*N+p*z+m*V,r[13]=h*k+u*I+p*K+m*tt,r[2]=x*A+v*g+d*B+f*W,r[6]=x*w+v*S+d*q+f*st,r[10]=x*R+v*N+d*z+f*V,r[14]=x*k+v*I+d*K+f*tt,r[3]=M*A+_*g+b*B+C*W,r[7]=M*w+_*S+b*q+C*st,r[11]=M*R+_*N+b*z+C*V,r[15]=M*k+_*I+b*K+C*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],p=t[10],m=t[14],x=t[3],v=t[7],d=t[11],f=t[15];return x*(+r*l*u-s*c*u-r*a*p+n*c*p+s*a*m-n*l*m)+v*(+e*l*m-e*c*p+r*o*p-s*o*m+s*c*h-r*l*h)+d*(+e*c*u-e*a*m-r*o*u+n*o*m+r*a*h-n*c*h)+f*(-s*a*h-e*l*u+e*a*p+s*o*u-n*o*p+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],p=t[10],m=t[11],x=t[12],v=t[13],d=t[14],f=t[15],M=u*d*c-v*p*c+v*l*m-a*d*m-u*l*f+a*p*f,_=x*p*c-h*d*c-x*l*m+o*d*m+h*l*f-o*p*f,b=h*v*c-x*u*c+x*a*m-o*v*m-h*a*f+o*u*f,C=x*u*l-h*v*l-x*a*p+o*v*p+h*a*d-o*u*d,A=e*M+n*_+s*b+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/A;return t[0]=M*w,t[1]=(v*p*r-u*d*r-v*s*m+n*d*m+u*s*f-n*p*f)*w,t[2]=(a*d*r-v*l*r+v*s*c-n*d*c-a*s*f+n*l*f)*w,t[3]=(u*l*r-a*p*r-u*s*c+n*p*c+a*s*m-n*l*m)*w,t[4]=_*w,t[5]=(h*d*r-x*p*r+x*s*m-e*d*m-h*s*f+e*p*f)*w,t[6]=(x*l*r-o*d*r-x*s*c+e*d*c+o*s*f-e*l*f)*w,t[7]=(o*p*r-h*l*r+h*s*c-e*p*c-o*s*m+e*l*m)*w,t[8]=b*w,t[9]=(x*u*r-h*v*r-x*n*m+e*v*m+h*n*f-e*u*f)*w,t[10]=(o*v*r-x*a*r+x*n*c-e*v*c-o*n*f+e*a*f)*w,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*m-e*a*m)*w,t[12]=C*w,t[13]=(h*v*s-x*u*s+x*n*p-e*v*p-h*n*d+e*u*d)*w,t[14]=(x*a*s-o*v*s-x*n*l+e*v*l+o*n*d-e*a*d)*w,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*p+e*a*p)*w,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,p=r*c,m=r*h,x=r*u,v=o*h,d=o*u,f=a*u,M=l*c,_=l*h,b=l*u,C=n.x,A=n.y,w=n.z;return s[0]=(1-(v+f))*C,s[1]=(m+b)*C,s[2]=(x-_)*C,s[3]=0,s[4]=(m-b)*A,s[5]=(1-(p+f))*A,s[6]=(d+M)*A,s[7]=0,s[8]=(x+_)*w,s[9]=(d-M)*w,s[10]=(1-(p+v))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=$n.set(s[0],s[1],s[2]).length(),o=$n.set(s[4],s[5],s[6]).length(),a=$n.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Be.copy(this);let c=1/r,h=1/o,u=1/a;return Be.elements[0]*=c,Be.elements[1]*=c,Be.elements[2]*=c,Be.elements[4]*=h,Be.elements[5]*=h,Be.elements[6]*=h,Be.elements[8]*=u,Be.elements[9]*=u,Be.elements[10]*=u,e.setFromRotationMatrix(Be),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=rn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),p=(n+s)/(n-s),m,x;if(a===rn)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Ps)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=rn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),p=(e+t)*c,m=(n+s)*h,x,v;if(a===rn)x=(o+r)*u,v=-2*u;else if(a===Ps)x=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},$n=new U,Be=new te,fc=new U(0,0,0),dc=new U(1,1,1),fn=new U,ts=new U,Te=new U,Qo=new te,jo=new Sn,qe=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],p=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(fe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jo.setFromEuler(this),this.setFromQuaternion(jo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qe.DEFAULT_ORDER="XYZ";var Ds=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},pc=0,t0=new U,Kn=new Sn,Qe=new te,es=new U,Ci=new U,mc=new U,gc=new Sn,e0=new U(1,0,0),n0=new U(0,1,0),i0=new U(0,0,1),s0={type:"added"},_c={type:"removed"},Qn={type:"childadded",child:null},Mr={type:"childremoved",child:null},Me=class i extends Mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pc++}),this.uuid=vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new qe,n=new Sn,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new te},normalMatrix:{value:new zt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ds,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Kn.setFromAxisAngle(t,e),this.quaternion.multiply(Kn),this}rotateOnWorldAxis(t,e){return Kn.setFromAxisAngle(t,e),this.quaternion.premultiply(Kn),this}rotateX(t){return this.rotateOnAxis(e0,t)}rotateY(t){return this.rotateOnAxis(n0,t)}rotateZ(t){return this.rotateOnAxis(i0,t)}translateOnAxis(t,e){return t0.copy(t).applyQuaternion(this.quaternion),this.position.add(t0.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(e0,t)}translateY(t){return this.translateOnAxis(n0,t)}translateZ(t){return this.translateOnAxis(i0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qe.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?es.copy(t):es.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ci.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qe.lookAt(Ci,es,this.up):Qe.lookAt(es,Ci,this.up),this.quaternion.setFromRotationMatrix(Qe),s&&(Qe.extractRotation(s.matrixWorld),Kn.setFromRotationMatrix(Qe),this.quaternion.premultiply(Kn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(s0),Qn.child=t,this.dispatchEvent(Qn),Qn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_c),Mr.child=t,this.dispatchEvent(Mr),Mr.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qe.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qe),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(s0),Qn.child=t,this.dispatchEvent(Qn),Qn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,t,mc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,gc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),p=o(t.skeletons),m=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Me.DEFAULT_UP=new U(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ze=new U,je=new U,Sr=new U,tn=new U,jn=new U,ti=new U,r0=new U,br=new U,Er=new U,wr=new U,Ar=new ne,Tr=new ne,Rr=new ne,gn=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ze.subVectors(t,e),s.cross(ze);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ze.subVectors(s,e),je.subVectors(n,e),Sr.subVectors(t,e);let o=ze.dot(ze),a=ze.dot(je),l=ze.dot(Sr),c=je.dot(je),h=je.dot(Sr),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let p=1/u,m=(c*l-a*h)*p,x=(o*h-a*l)*p;return r.set(1-m-x,x,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,tn)===null?!1:tn.x>=0&&tn.y>=0&&tn.x+tn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,tn.x),l.addScaledVector(o,tn.y),l.addScaledVector(a,tn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ar.setScalar(0),Tr.setScalar(0),Rr.setScalar(0),Ar.fromBufferAttribute(t,e),Tr.fromBufferAttribute(t,n),Rr.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ar,r.x),o.addScaledVector(Tr,r.y),o.addScaledVector(Rr,r.z),o}static isFrontFacing(t,e,n,s){return ze.subVectors(n,e),je.subVectors(t,e),ze.cross(je).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ze.subVectors(this.c,this.b),je.subVectors(this.a,this.b),ze.cross(je).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;jn.subVectors(s,n),ti.subVectors(r,n),br.subVectors(t,n);let l=jn.dot(br),c=ti.dot(br);if(l<=0&&c<=0)return e.copy(n);Er.subVectors(t,s);let h=jn.dot(Er),u=ti.dot(Er);if(h>=0&&u<=h)return e.copy(s);let p=l*u-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(jn,o);wr.subVectors(t,r);let m=jn.dot(wr),x=ti.dot(wr);if(x>=0&&m<=x)return e.copy(r);let v=m*c-l*x;if(v<=0&&c>=0&&x<=0)return a=c/(c-x),e.copy(n).addScaledVector(ti,a);let d=h*x-m*u;if(d<=0&&u-h>=0&&m-x>=0)return r0.subVectors(r,s),a=(u-h)/(u-h+(m-x)),e.copy(s).addScaledVector(r0,a);let f=1/(d+v+p);return o=v*f,a=p*f,e.copy(n).addScaledVector(jn,o).addScaledVector(ti,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},nl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dn={h:0,s:0,l:0},ns={h:0,s:0,l:0};function Cr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var It=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=qt.workingColorSpace){if(t=ic(t,1),e=fe(e,0,1),n=fe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Cr(o,r,t+1/3),this.g=Cr(o,r,t),this.b=Cr(o,r,t-1/3)}return qt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ce){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){let n=nl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fi(t.r),this.g=fi(t.g),this.b=fi(t.b),this}copyLinearToSRGB(t){return this.r=dr(t.r),this.g=dr(t.g),this.b=dr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return qt.fromWorkingColorSpace(pe.copy(this),t),Math.round(fe(pe.r*255,0,255))*65536+Math.round(fe(pe.g*255,0,255))*256+Math.round(fe(pe.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(pe.copy(this),e);let n=pe.r,s=pe.g,r=pe.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(pe.copy(this),e),t.r=pe.r,t.g=pe.g,t.b=pe.b,t}getStyle(t=Ce){qt.fromWorkingColorSpace(pe.copy(this),t);let e=pe.r,n=pe.g,s=pe.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(dn),this.setHSL(dn.h+t,dn.s+e,dn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(dn),t.getHSL(ns);let n=ur(dn.h,ns.h,e),s=ur(dn.s,ns.s,e),r=ur(dn.l,ns.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pe=new It;It.NAMES=nl;var xc=0,bn=class extends Mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xc++}),this.uuid=vn(),this.name="",this.type="Material",this.blending=hi,this.side=yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wr,this.blendDst=Xr,this.blendEquation=Un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=mi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xn,this.stencilZFail=Xn,this.stencilZPass=Xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hi&&(n.blending=this.blending),this.side!==yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wr&&(n.blendSrc=this.blendSrc),this.blendDst!==Xr&&(n.blendDst=this.blendDst),this.blendEquation!==Un&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==mi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ze=class extends bn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.combine=V0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ae=new U,is=new Mt,se=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Pa,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)is.fromBufferAttribute(this,e),is.applyMatrix3(t),this.setXY(e,is.x,is.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix3(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix4(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyNormalMatrix(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.transformDirection(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ye(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ye(e,this.array)),e}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ye(e,this.array)),e}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ye(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ye(e,this.array)),e}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array),r=Jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Pa&&(t.usage=this.usage),t}};var Ns=class extends se{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Fs=class extends se{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ye=class extends se{constructor(t,e,n){super(new Float32Array(t),e,n)}},vc=0,Le=new te,Pr=new Me,ei=new U,Re=new Bn,Pi=new Bn,he=new U,Ee=class i extends Mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vc++}),this.uuid=vn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(el(t)?Fs:Ns)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Le.makeRotationFromQuaternion(t),this.applyMatrix4(Le),this}rotateX(t){return Le.makeRotationX(t),this.applyMatrix4(Le),this}rotateY(t){return Le.makeRotationY(t),this.applyMatrix4(Le),this}rotateZ(t){return Le.makeRotationZ(t),this.applyMatrix4(Le),this}translate(t,e,n){return Le.makeTranslation(t,e,n),this.applyMatrix4(Le),this}scale(t,e,n){return Le.makeScale(t,e,n),this.applyMatrix4(Le),this}lookAt(t){return Pr.lookAt(t),Pr.updateMatrix(),this.applyMatrix4(Pr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ye(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Re.setFromBufferAttribute(r),this.morphTargetsRelative?(he.addVectors(this.boundingBox.min,Re.min),this.boundingBox.expandByPoint(he),he.addVectors(this.boundingBox.max,Re.max),this.boundingBox.expandByPoint(he)):(this.boundingBox.expandByPoint(Re.min),this.boundingBox.expandByPoint(Re.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(Re.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Pi.setFromBufferAttribute(a),this.morphTargetsRelative?(he.addVectors(Re.min,Pi.min),Re.expandByPoint(he),he.addVectors(Re.max,Pi.max),Re.expandByPoint(he)):(Re.expandByPoint(Pi.min),Re.expandByPoint(Pi.max))}Re.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)he.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(he));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)he.fromBufferAttribute(a,c),l&&(ei.fromBufferAttribute(t,c),he.add(ei)),s=Math.max(s,n.distanceToSquared(he))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new se(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new U,l[R]=new U;let c=new U,h=new U,u=new U,p=new Mt,m=new Mt,x=new Mt,v=new U,d=new U;function f(R,k,g){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,k),u.fromBufferAttribute(n,g),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,k),x.fromBufferAttribute(r,g),h.sub(c),u.sub(c),m.sub(p),x.sub(p);let S=1/(m.x*x.y-x.x*m.y);isFinite(S)&&(v.copy(h).multiplyScalar(x.y).addScaledVector(u,-m.y).multiplyScalar(S),d.copy(u).multiplyScalar(m.x).addScaledVector(h,-x.x).multiplyScalar(S),a[R].add(v),a[k].add(v),a[g].add(v),l[R].add(d),l[k].add(d),l[g].add(d))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let R=0,k=M.length;R<k;++R){let g=M[R],S=g.start,N=g.count;for(let I=S,B=S+N;I<B;I+=3)f(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let _=new U,b=new U,C=new U,A=new U;function w(R){C.fromBufferAttribute(s,R),A.copy(C);let k=a[R];_.copy(k),_.sub(C.multiplyScalar(C.dot(k))).normalize(),b.crossVectors(A,k);let S=b.dot(l[R])<0?-1:1;o.setXYZW(R,_.x,_.y,_.z,S)}for(let R=0,k=M.length;R<k;++R){let g=M[R],S=g.start,N=g.count;for(let I=S,B=S+N;I<B;I+=3)w(t.getX(I+0)),w(t.getX(I+1)),w(t.getX(I+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new se(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);let s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,u=new U;if(t)for(let p=0,m=t.count;p<m;p+=3){let x=t.getX(p+0),v=t.getX(p+1),d=t.getX(p+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,d),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,d),a.add(h),l.add(h),c.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let p=0,m=e.count;p<m;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)he.fromBufferAttribute(t,e),he.normalize(),t.setXYZ(e,he.x,he.y,he.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,p=new c.constructor(l.length*h),m=0,x=0;for(let v=0,d=l.length;v<d;v++){a.isInterleavedBufferAttribute?m=l[v]*a.data.stride+a.offset:m=l[v]*h;for(let f=0;f<h;f++)p[x++]=c[m++]}return new se(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let p=c[h],m=t(p,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,p=c.length;u<p;u++){let m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let p=0,m=u.length;p<m;p++)h.push(u[p].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},a0=new te,Rn=new Na,ss=new zn,o0=new U,rs=new U,as=new U,os=new U,Ir=new U,ls=new U,l0=new U,cs=new U,oe=class extends Me{constructor(t=new Ee,e=new Ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){ls.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Ir.fromBufferAttribute(u,t),o?ls.addScaledVector(Ir,h):ls.addScaledVector(Ir.sub(e),h))}e.add(ls)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ss.copy(n.boundingSphere),ss.applyMatrix4(r),Rn.copy(t.ray).recast(t.near),!(ss.containsPoint(Rn.origin)===!1&&(Rn.intersectSphere(ss,o0)===null||Rn.origin.distanceToSquared(o0)>(t.far-t.near)**2))&&(a0.copy(r).invert(),Rn.copy(t.ray).applyMatrix4(a0),!(n.boundingBox!==null&&Rn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Rn)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=p.length;x<v;x++){let d=p[x],f=o[d.materialIndex],M=Math.max(d.start,m.start),_=Math.min(a.count,Math.min(d.start+d.count,m.start+m.count));for(let b=M,C=_;b<C;b+=3){let A=a.getX(b),w=a.getX(b+1),R=a.getX(b+2);s=hs(this,f,t,n,c,h,u,A,w,R),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let x=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let d=x,f=v;d<f;d+=3){let M=a.getX(d),_=a.getX(d+1),b=a.getX(d+2);s=hs(this,o,t,n,c,h,u,M,_,b),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,v=p.length;x<v;x++){let d=p[x],f=o[d.materialIndex],M=Math.max(d.start,m.start),_=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let b=M,C=_;b<C;b+=3){let A=b,w=b+1,R=b+2;s=hs(this,f,t,n,c,h,u,A,w,R),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{let x=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let d=x,f=v;d<f;d+=3){let M=d,_=d+1,b=d+2;s=hs(this,o,t,n,c,h,u,M,_,b),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}};function yc(i,t,e,n,s,r,o,a){let l;if(t.side===me?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===yn,a),l===null)return null;cs.copy(a),cs.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(cs);return c<e.near||c>e.far?null:{distance:c,point:cs.clone(),object:i}}function hs(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,rs),i.getVertexPosition(l,as),i.getVertexPosition(c,os);let h=yc(i,t,e,n,rs,as,os,l0);if(h){let u=new U;gn.getBarycoord(l0,rs,as,os,u),s&&(h.uv=gn.getInterpolatedAttribute(s,a,l,c,u,new Mt)),r&&(h.uv1=gn.getInterpolatedAttribute(r,a,l,c,u,new Mt)),o&&(h.normal=gn.getInterpolatedAttribute(o,a,l,c,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a,b:l,c,normal:new U,materialIndex:0};gn.getNormal(rs,as,os,p.normal),h.face=p,h.barycoord=u}return h}var kn=class i extends Ee{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],p=0,m=0;x("z","y","x",-1,-1,n,e,t,o,r,0),x("z","y","x",1,-1,n,e,-t,o,r,1),x("x","z","y",1,1,t,n,e,s,o,2),x("x","z","y",1,-1,t,n,-e,s,o,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(u,2));function x(v,d,f,M,_,b,C,A,w,R,k){let g=b/w,S=C/R,N=b/2,I=C/2,B=A/2,q=w+1,z=R+1,K=0,W=0,st=new U;for(let V=0;V<z;V++){let tt=V*S-I;for(let Rt=0;Rt<q;Rt++){let wt=Rt*g-N;st[v]=wt*M,st[d]=tt*_,st[f]=B,c.push(st.x,st.y,st.z),st[v]=0,st[d]=0,st[f]=A>0?1:-1,h.push(st.x,st.y,st.z),u.push(Rt/w),u.push(1-V/R),K+=1}}for(let V=0;V<R;V++)for(let tt=0;tt<w;tt++){let Rt=p+tt+q*V,wt=p+tt+q*(V+1),X=p+(tt+1)+q*(V+1),Q=p+(tt+1)+q*V;l.push(Rt,wt,Q),l.push(wt,X,Q),W+=6}a.addGroup(m,W,k),m+=W,p+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function yi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function xe(i){let t={};for(let e=0;e<i.length;e++){let n=yi(i[e]);for(let s in n)t[s]=n[s]}return t}function Mc(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function il(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}var Sc={clone:yi,merge:xe},bc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ec=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ne=class extends bn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bc,this.fragmentShader=Ec,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=yi(t.uniforms),this.uniformsGroups=Mc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Os=class extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=rn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},pn=new U,c0=new Mt,h0=new Mt,ve=class extends Os{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ia*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ia*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(pn.x,pn.y).multiplyScalar(-t/pn.z),pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pn.x,pn.y).multiplyScalar(-t/pn.z)}getViewSize(t,e){return this.getViewBounds(t,c0,h0),e.subVectors(h0,c0)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(hr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ni=-90,ii=1,Fa=class extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ve(ni,ii,t,e);s.layers=this.layers,this.add(s);let r=new ve(ni,ii,t,e);r.layers=this.layers,this.add(r);let o=new ve(ni,ii,t,e);o.layers=this.layers,this.add(o);let a=new ve(ni,ii,t,e);a.layers=this.layers,this.add(a);let l=new ve(ni,ii,t,e);l.layers=this.layers,this.add(l);let c=new ve(ni,ii,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ps)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,p,m),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Bs=class extends Pe{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:gi,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Oa=class extends on{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Bs(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new kn(5,5,5),r=new Ne({name:"CubemapFromEquirect",uniforms:yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:me,blending:_n});r.uniforms.tEquirect.value=e;let o=new oe(s,r),a=e.minFilter;return e.minFilter===Fn&&(e.minFilter=ke),new Fa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Lr=new U,wc=new U,Ac=new zt,nn=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Lr.subVectors(n,e).cross(wc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Lr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ac.getNormalMatrix(t),s=this.coplanarPoint(Lr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Cn=new zn,us=new U,zi=class{constructor(t=new nn,e=new nn,n=new nn,s=new nn,r=new nn,o=new nn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=rn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],p=s[7],m=s[8],x=s[9],v=s[10],d=s[11],f=s[12],M=s[13],_=s[14],b=s[15];if(n[0].setComponents(l-r,p-c,d-m,b-f).normalize(),n[1].setComponents(l+r,p+c,d+m,b+f).normalize(),n[2].setComponents(l+o,p+h,d+x,b+M).normalize(),n[3].setComponents(l-o,p-h,d-x,b-M).normalize(),n[4].setComponents(l-a,p-u,d-v,b-_).normalize(),e===rn)n[5].setComponents(l+a,p+u,d+v,b+_).normalize();else if(e===Ps)n[5].setComponents(a,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Cn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cn)}intersectsSprite(t){return Cn.center.set(0,0,0),Cn.radius=.7071067811865476,Cn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(us.x=s.normal.x>0?t.max.x:t.min.x,us.y=s.normal.y>0?t.max.y:t.min.y,us.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(us)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function sl(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Tc(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,h),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((m,x)=>m.start-x.start);let p=0;for(let m=1;m<u.length;m++){let x=u[p],v=u[m];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++p,u[p]=v)}u.length=p+1;for(let m=0,x=u.length;m<x;m++){let v=u[m];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Mi=class i extends Ee{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,p=e/l,m=[],x=[],v=[],d=[];for(let f=0;f<h;f++){let M=f*p-o;for(let _=0;_<c;_++){let b=_*u-r;x.push(b,-M,0),v.push(0,0,1),d.push(_/a),d.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<a;M++){let _=M+c*f,b=M+c*(f+1),C=M+1+c*(f+1),A=M+1+c*f;m.push(_,b,A),m.push(b,C,A)}this.setIndex(m),this.setAttribute("position",new ye(x,3)),this.setAttribute("normal",new ye(v,3)),this.setAttribute("uv",new ye(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Rc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Pc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ic=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Nc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fc=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Oc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kc=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Hc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Wc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$c=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Kc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Qc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jc=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,th=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ih=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sh="gl_FragColor = linearToOutputTexel( gl_FragColor );",rh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ah=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,oh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ch=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,uh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ph=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_h=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,yh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Mh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Eh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ah=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Th=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ch=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ph=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ih=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Oh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Yh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$h=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Kh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,iu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,su=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ru=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,au=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ou=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,hu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,du=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_u=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Su=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Eu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Au=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Tu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ru=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Du=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Nu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Fu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ou=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ku=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Hu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Yu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ju=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$u=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ku=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Qu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ju=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ef=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,nf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,af=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,of=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bt={alphahash_fragment:Rc,alphahash_pars_fragment:Cc,alphamap_fragment:Pc,alphamap_pars_fragment:Ic,alphatest_fragment:Lc,alphatest_pars_fragment:Uc,aomap_fragment:Dc,aomap_pars_fragment:Nc,batching_pars_vertex:Fc,batching_vertex:Oc,begin_vertex:Bc,beginnormal_vertex:zc,bsdfs:kc,iridescence_fragment:Vc,bumpmap_pars_fragment:Hc,clipping_planes_fragment:Gc,clipping_planes_pars_fragment:Wc,clipping_planes_pars_vertex:Xc,clipping_planes_vertex:Yc,color_fragment:qc,color_pars_fragment:Zc,color_pars_vertex:Jc,color_vertex:$c,common:Kc,cube_uv_reflection_fragment:Qc,defaultnormal_vertex:jc,displacementmap_pars_vertex:th,displacementmap_vertex:eh,emissivemap_fragment:nh,emissivemap_pars_fragment:ih,colorspace_fragment:sh,colorspace_pars_fragment:rh,envmap_fragment:ah,envmap_common_pars_fragment:oh,envmap_pars_fragment:lh,envmap_pars_vertex:ch,envmap_physical_pars_fragment:yh,envmap_vertex:hh,fog_vertex:uh,fog_pars_vertex:fh,fog_fragment:dh,fog_pars_fragment:ph,gradientmap_pars_fragment:mh,lightmap_pars_fragment:gh,lights_lambert_fragment:_h,lights_lambert_pars_fragment:xh,lights_pars_begin:vh,lights_toon_fragment:Mh,lights_toon_pars_fragment:Sh,lights_phong_fragment:bh,lights_phong_pars_fragment:Eh,lights_physical_fragment:wh,lights_physical_pars_fragment:Ah,lights_fragment_begin:Th,lights_fragment_maps:Rh,lights_fragment_end:Ch,logdepthbuf_fragment:Ph,logdepthbuf_pars_fragment:Ih,logdepthbuf_pars_vertex:Lh,logdepthbuf_vertex:Uh,map_fragment:Dh,map_pars_fragment:Nh,map_particle_fragment:Fh,map_particle_pars_fragment:Oh,metalnessmap_fragment:Bh,metalnessmap_pars_fragment:zh,morphinstance_vertex:kh,morphcolor_vertex:Vh,morphnormal_vertex:Hh,morphtarget_pars_vertex:Gh,morphtarget_vertex:Wh,normal_fragment_begin:Xh,normal_fragment_maps:Yh,normal_pars_fragment:qh,normal_pars_vertex:Zh,normal_vertex:Jh,normalmap_pars_fragment:$h,clearcoat_normal_fragment_begin:Kh,clearcoat_normal_fragment_maps:Qh,clearcoat_pars_fragment:jh,iridescence_pars_fragment:tu,opaque_fragment:eu,packing:nu,premultiplied_alpha_fragment:iu,project_vertex:su,dithering_fragment:ru,dithering_pars_fragment:au,roughnessmap_fragment:ou,roughnessmap_pars_fragment:lu,shadowmap_pars_fragment:cu,shadowmap_pars_vertex:hu,shadowmap_vertex:uu,shadowmask_pars_fragment:fu,skinbase_vertex:du,skinning_pars_vertex:pu,skinning_vertex:mu,skinnormal_vertex:gu,specularmap_fragment:_u,specularmap_pars_fragment:xu,tonemapping_fragment:vu,tonemapping_pars_fragment:yu,transmission_fragment:Mu,transmission_pars_fragment:Su,uv_pars_fragment:bu,uv_pars_vertex:Eu,uv_vertex:wu,worldpos_vertex:Au,background_vert:Tu,background_frag:Ru,backgroundCube_vert:Cu,backgroundCube_frag:Pu,cube_vert:Iu,cube_frag:Lu,depth_vert:Uu,depth_frag:Du,distanceRGBA_vert:Nu,distanceRGBA_frag:Fu,equirect_vert:Ou,equirect_frag:Bu,linedashed_vert:zu,linedashed_frag:ku,meshbasic_vert:Vu,meshbasic_frag:Hu,meshlambert_vert:Gu,meshlambert_frag:Wu,meshmatcap_vert:Xu,meshmatcap_frag:Yu,meshnormal_vert:qu,meshnormal_frag:Zu,meshphong_vert:Ju,meshphong_frag:$u,meshphysical_vert:Ku,meshphysical_frag:Qu,meshtoon_vert:ju,meshtoon_frag:tf,points_vert:ef,points_frag:nf,shadow_vert:sf,shadow_frag:rf,sprite_vert:af,sprite_frag:of},ot={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},Xe={basic:{uniforms:xe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:xe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new It(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:xe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:xe([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:xe([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new It(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:xe([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:xe([ot.points,ot.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:xe([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:xe([ot.common,ot.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:xe([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:xe([ot.sprite,ot.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:xe([ot.common,ot.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:xe([ot.lights,ot.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};Xe.physical={uniforms:xe([Xe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};var fs={r:0,b:0,g:0},Pn=new qe,lf=new te;function cf(i,t,e,n,s,r,o){let a=new It(0),l=r===!0?0:1,c,h,u=null,p=0,m=null;function x(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?e:t).get(_)),_}function v(M){let _=!1,b=x(M);b===null?f(a,l):b&&b.isColor&&(f(b,1),_=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(M,_){let b=x(_);b&&(b.isCubeTexture||b.mapping===Qs)?(h===void 0&&(h=new oe(new kn(1,1,1),new Ne({name:"BackgroundCubeMaterial",uniforms:yi(Xe.backgroundCube.uniforms),vertexShader:Xe.backgroundCube.vertexShader,fragmentShader:Xe.backgroundCube.fragmentShader,side:me,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Pn.copy(_.backgroundRotation),Pn.x*=-1,Pn.y*=-1,Pn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Pn.y*=-1,Pn.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(lf.makeRotationFromEuler(Pn)),h.material.toneMapped=qt.getTransfer(b.colorSpace)!==Qt,(u!==b||p!==b.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,p=b.version,m=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new oe(new Mi(2,2),new Ne({name:"BackgroundMaterial",uniforms:yi(Xe.background.uniforms),vertexShader:Xe.background.vertexShader,fragmentShader:Xe.background.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=qt.getTransfer(b.colorSpace)!==Qt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||p!==b.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,p=b.version,m=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function f(M,_){M.getRGB(fs,il(i)),n.buffers.color.setClear(fs.r,fs.g,fs.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(M,_=1){a.set(M),l=_,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,f(a,l)},render:v,addToRenderList:d}}function hf(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,o=!1;function a(g,S,N,I,B){let q=!1,z=u(I,N,S);r!==z&&(r=z,c(r.object)),q=m(g,I,N,B),q&&x(g,I,N,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,b(g,S,N,I),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(g){return i.bindVertexArray(g)}function h(g){return i.deleteVertexArray(g)}function u(g,S,N){let I=N.wireframe===!0,B=n[g.id];B===void 0&&(B={},n[g.id]=B);let q=B[S.id];q===void 0&&(q={},B[S.id]=q);let z=q[I];return z===void 0&&(z=p(l()),q[I]=z),z}function p(g){let S=[],N=[],I=[];for(let B=0;B<e;B++)S[B]=0,N[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:N,attributeDivisors:I,object:g,attributes:{},index:null}}function m(g,S,N,I){let B=r.attributes,q=S.attributes,z=0,K=N.getAttributes();for(let W in K)if(K[W].location>=0){let V=B[W],tt=q[W];if(tt===void 0&&(W==="instanceMatrix"&&g.instanceMatrix&&(tt=g.instanceMatrix),W==="instanceColor"&&g.instanceColor&&(tt=g.instanceColor)),V===void 0||V.attribute!==tt||tt&&V.data!==tt.data)return!0;z++}return r.attributesNum!==z||r.index!==I}function x(g,S,N,I){let B={},q=S.attributes,z=0,K=N.getAttributes();for(let W in K)if(K[W].location>=0){let V=q[W];V===void 0&&(W==="instanceMatrix"&&g.instanceMatrix&&(V=g.instanceMatrix),W==="instanceColor"&&g.instanceColor&&(V=g.instanceColor));let tt={};tt.attribute=V,V&&V.data&&(tt.data=V.data),B[W]=tt,z++}r.attributes=B,r.attributesNum=z,r.index=I}function v(){let g=r.newAttributes;for(let S=0,N=g.length;S<N;S++)g[S]=0}function d(g){f(g,0)}function f(g,S){let N=r.newAttributes,I=r.enabledAttributes,B=r.attributeDivisors;N[g]=1,I[g]===0&&(i.enableVertexAttribArray(g),I[g]=1),B[g]!==S&&(i.vertexAttribDivisor(g,S),B[g]=S)}function M(){let g=r.newAttributes,S=r.enabledAttributes;for(let N=0,I=S.length;N<I;N++)S[N]!==g[N]&&(i.disableVertexAttribArray(N),S[N]=0)}function _(g,S,N,I,B,q,z){z===!0?i.vertexAttribIPointer(g,S,N,B,q):i.vertexAttribPointer(g,S,N,I,B,q)}function b(g,S,N,I){v();let B=I.attributes,q=N.getAttributes(),z=S.defaultAttributeValues;for(let K in q){let W=q[K];if(W.location>=0){let st=B[K];if(st===void 0&&(K==="instanceMatrix"&&g.instanceMatrix&&(st=g.instanceMatrix),K==="instanceColor"&&g.instanceColor&&(st=g.instanceColor)),st!==void 0){let V=st.normalized,tt=st.itemSize,Rt=t.get(st);if(Rt===void 0)continue;let wt=Rt.buffer,X=Rt.type,Q=Rt.bytesPerElement,at=X===i.INT||X===i.UNSIGNED_INT||st.gpuType===yo;if(st.isInterleavedBufferAttribute){let rt=st.data,vt=rt.stride,St=st.offset;if(rt.isInstancedInterleavedBuffer){for(let Ft=0;Ft<W.locationSize;Ft++)f(W.location+Ft,rt.meshPerAttribute);g.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ft=0;Ft<W.locationSize;Ft++)d(W.location+Ft);i.bindBuffer(i.ARRAY_BUFFER,wt);for(let Ft=0;Ft<W.locationSize;Ft++)_(W.location+Ft,tt/W.locationSize,X,V,vt*Q,(St+tt/W.locationSize*Ft)*Q,at)}else{if(st.isInstancedBufferAttribute){for(let rt=0;rt<W.locationSize;rt++)f(W.location+rt,st.meshPerAttribute);g.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let rt=0;rt<W.locationSize;rt++)d(W.location+rt);i.bindBuffer(i.ARRAY_BUFFER,wt);for(let rt=0;rt<W.locationSize;rt++)_(W.location+rt,tt/W.locationSize,X,V,tt*Q,tt/W.locationSize*rt*Q,at)}}else if(z!==void 0){let V=z[K];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(W.location,V);break;case 3:i.vertexAttrib3fv(W.location,V);break;case 4:i.vertexAttrib4fv(W.location,V);break;default:i.vertexAttrib1fv(W.location,V)}}}}M()}function C(){R();for(let g in n){let S=n[g];for(let N in S){let I=S[N];for(let B in I)h(I[B].object),delete I[B];delete S[N]}delete n[g]}}function A(g){if(n[g.id]===void 0)return;let S=n[g.id];for(let N in S){let I=S[N];for(let B in I)h(I[B].object),delete I[B];delete S[N]}delete n[g.id]}function w(g){for(let S in n){let N=n[S];if(N[g.id]===void 0)continue;let I=N[g.id];for(let B in I)h(I[B].object),delete I[B];delete N[g.id]}}function R(){k(),o=!0,r!==s&&(r=s,c(r.object))}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:k,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:d,disableUnusedAttributes:M}}function uf(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x];e.update(m,n,1)}function l(c,h,u,p){if(u===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<c.length;x++)o(c[x],h[x],p[x]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,p,0,u);let x=0;for(let v=0;v<u;v++)x+=h[v];for(let v=0;v<p.length;v++)e.update(x,n,p[v])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ff(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Ve&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let R=w===Gi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==an&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==sn&&!R)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(p===!0){let w=t.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=x>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:d,maxAttributes:f,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:C,maxSamples:A}}function df(i){let t=this,e=null,n=0,s=!1,r=!1,o=new nn,a=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){let m=u.length!==0||p||n!==0||s;return s=p,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){e=h(u,p,0)},this.setState=function(u,p,m){let x=u.clippingPlanes,v=u.clipIntersection,d=u.clipShadows,f=i.get(u);if(!s||x===null||x.length===0||r&&!d)r?h(null):c();else{let M=r?0:n,_=M*4,b=f.clippingState||null;l.value=b,b=h(x,p,_,m);for(let C=0;C!==_;++C)b[C]=e[C];f.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,p,m,x){let v=u!==null?u.length:0,d=null;if(v!==0){if(d=l.value,x!==!0||d===null){let f=m+v*4,M=p.matrixWorldInverse;a.getNormalMatrix(M),(d===null||d.length<f)&&(d=new Float32Array(f));for(let _=0,b=m;_!==v;++_,b+=4)o.copy(u[_]).applyMatrix4(M,a),o.normal.toArray(d,b),d[b+3]=o.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,d}}function pf(i){let t=new WeakMap;function e(o,a){return a===jr?o.mapping=gi:a===ta&&(o.mapping=_i),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===jr||a===ta)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Oa(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var zs=class extends Os{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ci=4,u0=[.125,.215,.35,.446,.526,.582],Dn=20,Ur=new zs,f0=new It,Dr=null,Nr=0,Fr=0,Or=!1,Ln=(1+Math.sqrt(5))/2,si=1/Ln,d0=[new U(-Ln,si,0),new U(Ln,si,0),new U(-si,0,Ln),new U(si,0,Ln),new U(0,Ln,-si),new U(0,Ln,si),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Si=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Dr=this._renderer.getRenderTarget(),Nr=this._renderer.getActiveCubeFace(),Fr=this._renderer.getActiveMipmapLevel(),Or=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=g0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=m0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Dr,Nr,Fr),this._renderer.xr.enabled=Or,t.scissorTest=!1,ds(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gi||t.mapping===_i?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Dr=this._renderer.getRenderTarget(),Nr=this._renderer.getActiveCubeFace(),Fr=this._renderer.getActiveMipmapLevel(),Or=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:Gi,format:Ve,colorSpace:En,depthBuffer:!1},s=p0(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=p0(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mf(r)),this._blurMaterial=gf(r,t,e)}return s}_compileMaterial(t){let e=new oe(this._lodPlanes[0],t);this._renderer.compile(e,Ur)}_sceneToCubeUV(t,e,n,s){let a=new ve(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(f0),h.toneMapping=xn,h.autoClear=!1;let m=new Ze({name:"PMREM.Background",side:me,depthWrite:!1,depthTest:!1}),x=new oe(new kn,m),v=!1,d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,v=!0):(m.color.copy(f0),v=!0);for(let f=0;f<6;f++){let M=f%3;M===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):M===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let _=this._cubeSize;ds(s,M*_,f>2?_:0,_,_),h.setRenderTarget(s),v&&h.render(x,a),h.render(t,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=p,h.autoClear=u,t.background=d}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===gi||t.mapping===_i;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=g0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=m0());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new oe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;ds(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ur)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=d0[(s-r-1)%d0.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new oe(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Dn-1),v=r/x,d=isFinite(r)?1+Math.floor(h*v):Dn;d>Dn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Dn}`);let f=[],M=0;for(let w=0;w<Dn;++w){let R=w/v,k=Math.exp(-R*R/2);f.push(k),w===0?M+=k:w<d&&(M+=2*k)}for(let w=0;w<f.length;w++)f[w]=f[w]/M;p.envMap.value=t.texture,p.samples.value=d,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:_}=this;p.dTheta.value=x,p.mipInt.value=_-n;let b=this._sizeLods[s],C=3*b*(s>_-ci?s-_+ci:0),A=4*(this._cubeSize-b);ds(e,C,A,3*b,2*b),l.setRenderTarget(e),l.render(u,Ur)}};function mf(i){let t=[],e=[],n=[],s=i,r=i-ci+1+u0.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-ci?l=u0[o-i+ci-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,p=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,x=6,v=3,d=2,f=1,M=new Float32Array(v*x*m),_=new Float32Array(d*x*m),b=new Float32Array(f*x*m);for(let A=0;A<m;A++){let w=A%3*2/3-1,R=A>2?0:-1,k=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];M.set(k,v*x*A),_.set(p,d*x*A);let g=[A,A,A,A,A,A];b.set(g,f*x*A)}let C=new Ee;C.setAttribute("position",new se(M,v)),C.setAttribute("uv",new se(_,d)),C.setAttribute("faceIndex",new se(b,f)),t.push(C),s>ci&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function p0(i,t,e){let n=new on(i,t,e);return n.texture.mapping=Qs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ds(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function gf(i,t,e){let n=new Float32Array(Dn),s=new U(0,1,0);return new Ne({name:"SphericalGaussianBlur",defines:{n:Dn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function m0(){return new Ne({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function g0(){return new Ne({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function To(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function _f(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===jr||l===ta,h=l===gi||l===_i;if(c||h){let u=t.get(a),p=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new Si(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let m=a.image;return c&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new Si(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function xf(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ws("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function vf(i,t,e,n){let s={},r=new WeakMap;function o(u){let p=u.target;p.index!==null&&t.remove(p.index);for(let x in p.attributes)t.remove(p.attributes[x]);for(let x in p.morphAttributes){let v=p.morphAttributes[x];for(let d=0,f=v.length;d<f;d++)t.remove(v[d])}p.removeEventListener("dispose",o),delete s[p.id];let m=r.get(p);m&&(t.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(u,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function l(u){let p=u.attributes;for(let x in p)t.update(p[x],i.ARRAY_BUFFER);let m=u.morphAttributes;for(let x in m){let v=m[x];for(let d=0,f=v.length;d<f;d++)t.update(v[d],i.ARRAY_BUFFER)}}function c(u){let p=[],m=u.index,x=u.attributes.position,v=0;if(m!==null){let M=m.array;v=m.version;for(let _=0,b=M.length;_<b;_+=3){let C=M[_+0],A=M[_+1],w=M[_+2];p.push(C,A,A,w,w,C)}}else if(x!==void 0){let M=x.array;v=x.version;for(let _=0,b=M.length/3-1;_<b;_+=3){let C=_+0,A=_+1,w=_+2;p.push(C,A,A,w,w,C)}}else return;let d=new(el(p)?Fs:Ns)(p,1);d.version=v;let f=r.get(u);f&&t.remove(f),r.set(u,d)}function h(u){let p=r.get(u);if(p){let m=u.index;m!==null&&p.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function yf(i,t,e){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function l(p,m){i.drawElements(n,m,r,p*o),e.update(m,n,1)}function c(p,m,x){x!==0&&(i.drawElementsInstanced(n,m,r,p*o,x),e.update(m,n,x))}function h(p,m,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,p,0,x);let d=0;for(let f=0;f<x;f++)d+=m[f];e.update(d,n,1)}function u(p,m,x,v){if(x===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<p.length;f++)c(p[f]/o,m[f],v[f]);else{d.multiDrawElementsInstancedWEBGL(n,m,0,r,p,0,v,0,x);let f=0;for(let M=0;M<x;M++)f+=m[M];for(let M=0;M<v.length;M++)e.update(f,n,v[M])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Mf(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Sf(i,t,e){let n=new WeakMap,s=new ne;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,p=n.get(a);if(p===void 0||p.count!==u){let k=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",k)};p!==void 0&&p.texture.dispose();let m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],_=0;m===!0&&(_=1),x===!0&&(_=2),v===!0&&(_=3);let b=a.attributes.position.count*_,C=1;b>t.maxTextureSize&&(C=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let A=new Float32Array(b*C*4*u),w=new Us(A,b,C,u);w.type=sn,w.needsUpdate=!0;let R=_*4;for(let g=0;g<u;g++){let S=d[g],N=f[g],I=M[g],B=b*C*4*g;for(let q=0;q<S.count;q++){let z=q*R;m===!0&&(s.fromBufferAttribute(S,q),A[B+z+0]=s.x,A[B+z+1]=s.y,A[B+z+2]=s.z,A[B+z+3]=0),x===!0&&(s.fromBufferAttribute(N,q),A[B+z+4]=s.x,A[B+z+5]=s.y,A[B+z+6]=s.z,A[B+z+7]=0),v===!0&&(s.fromBufferAttribute(I,q),A[B+z+8]=s.x,A[B+z+9]=s.y,A[B+z+10]=s.z,A[B+z+11]=I.itemSize===4?s.w:1)}}p={count:u,texture:w,size:new Mt(b,C)},n.set(a,p),a.addEventListener("dispose",k)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];let x=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function bf(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var ks=class extends Pe{constructor(t,e,n,s,r,o,a,l,c,h=ui){if(h!==ui&&h!==vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ui&&(n=On),n===void 0&&h===vi&&(n=xi),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:De,this.minFilter=l!==void 0?l:De,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},rl=new Pe,_0=new ks(1,1),al=new Us,ol=new Da,ll=new Bs,x0=[],v0=[],y0=new Float32Array(16),M0=new Float32Array(9),S0=new Float32Array(4);function wi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=x0[s];if(r===void 0&&(r=new Float32Array(s),x0[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function tr(i,t){let e=v0[t];e===void 0&&(e=new Int32Array(t),v0[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ef(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function wf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;i.uniform2fv(this.addr,t),ce(e,t)}}function Af(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(le(e,t))return;i.uniform3fv(this.addr,t),ce(e,t)}}function Tf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;i.uniform4fv(this.addr,t),ce(e,t)}}function Rf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ce(e,t)}else{if(le(e,n))return;S0.set(n),i.uniformMatrix2fv(this.addr,!1,S0),ce(e,n)}}function Cf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ce(e,t)}else{if(le(e,n))return;M0.set(n),i.uniformMatrix3fv(this.addr,!1,M0),ce(e,n)}}function Pf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ce(e,t)}else{if(le(e,n))return;y0.set(n),i.uniformMatrix4fv(this.addr,!1,y0),ce(e,n)}}function If(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Lf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;i.uniform2iv(this.addr,t),ce(e,t)}}function Uf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;i.uniform3iv(this.addr,t),ce(e,t)}}function Df(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;i.uniform4iv(this.addr,t),ce(e,t)}}function Nf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ff(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;i.uniform2uiv(this.addr,t),ce(e,t)}}function Of(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;i.uniform3uiv(this.addr,t),ce(e,t)}}function Bf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;i.uniform4uiv(this.addr,t),ce(e,t)}}function zf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(_0.compareFunction=tl,r=_0):r=rl,e.setTexture2D(t||r,s)}function kf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ol,s)}function Vf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ll,s)}function Hf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||al,s)}function Gf(i){switch(i){case 5126:return Ef;case 35664:return wf;case 35665:return Af;case 35666:return Tf;case 35674:return Rf;case 35675:return Cf;case 35676:return Pf;case 5124:case 35670:return If;case 35667:case 35671:return Lf;case 35668:case 35672:return Uf;case 35669:case 35673:return Df;case 5125:return Nf;case 36294:return Ff;case 36295:return Of;case 36296:return Bf;case 35678:case 36198:case 36298:case 36306:case 35682:return zf;case 35679:case 36299:case 36307:return kf;case 35680:case 36300:case 36308:case 36293:return Vf;case 36289:case 36303:case 36311:case 36292:return Hf}}function Wf(i,t){i.uniform1fv(this.addr,t)}function Xf(i,t){let e=wi(t,this.size,2);i.uniform2fv(this.addr,e)}function Yf(i,t){let e=wi(t,this.size,3);i.uniform3fv(this.addr,e)}function qf(i,t){let e=wi(t,this.size,4);i.uniform4fv(this.addr,e)}function Zf(i,t){let e=wi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Jf(i,t){let e=wi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function $f(i,t){let e=wi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Kf(i,t){i.uniform1iv(this.addr,t)}function Qf(i,t){i.uniform2iv(this.addr,t)}function jf(i,t){i.uniform3iv(this.addr,t)}function td(i,t){i.uniform4iv(this.addr,t)}function ed(i,t){i.uniform1uiv(this.addr,t)}function nd(i,t){i.uniform2uiv(this.addr,t)}function id(i,t){i.uniform3uiv(this.addr,t)}function sd(i,t){i.uniform4uiv(this.addr,t)}function rd(i,t,e){let n=this.cache,s=t.length,r=tr(e,s);le(n,r)||(i.uniform1iv(this.addr,r),ce(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||rl,r[o])}function ad(i,t,e){let n=this.cache,s=t.length,r=tr(e,s);le(n,r)||(i.uniform1iv(this.addr,r),ce(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ol,r[o])}function od(i,t,e){let n=this.cache,s=t.length,r=tr(e,s);le(n,r)||(i.uniform1iv(this.addr,r),ce(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||ll,r[o])}function ld(i,t,e){let n=this.cache,s=t.length,r=tr(e,s);le(n,r)||(i.uniform1iv(this.addr,r),ce(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||al,r[o])}function cd(i){switch(i){case 5126:return Wf;case 35664:return Xf;case 35665:return Yf;case 35666:return qf;case 35674:return Zf;case 35675:return Jf;case 35676:return $f;case 5124:case 35670:return Kf;case 35667:case 35671:return Qf;case 35668:case 35672:return jf;case 35669:case 35673:return td;case 5125:return ed;case 36294:return nd;case 36295:return id;case 36296:return sd;case 35678:case 36198:case 36298:case 36306:case 35682:return rd;case 35679:case 36299:case 36307:return ad;case 35680:case 36300:case 36308:case 36293:return od;case 36289:case 36303:case 36311:case 36292:return ld}}var Ba=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Gf(e.type)}},za=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cd(e.type)}},ka=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Br=/(\w+)(\])?(\[|\.)?/g;function b0(i,t){i.seq.push(t),i.map[t.id]=t}function hd(i,t,e){let n=i.name,s=n.length;for(Br.lastIndex=0;;){let r=Br.exec(n),o=Br.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){b0(e,c===void 0?new Ba(a,i,t):new za(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new ka(a),b0(e,u)),e=u}}}var di=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);hd(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function E0(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var ud=37297,fd=0;function dd(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function pd(i){let t=qt.getPrimaries(qt.workingColorSpace),e=qt.getPrimaries(i),n;switch(t===e?n="":t===Cs&&e===Rs?n="LinearDisplayP3ToLinearSRGB":t===Rs&&e===Cs&&(n="LinearSRGBToLinearDisplayP3"),i){case En:case js:return[n,"LinearTransferOETF"];case Ce:case Ao:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function w0(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+dd(i.getShaderSource(t),o)}else return s}function md(i,t){let e=pd(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function gd(i,t){let e;switch(t){case kl:e="Linear";break;case Vl:e="Reinhard";break;case Hl:e="Cineon";break;case vo:e="ACESFilmic";break;case Wl:e="AgX";break;case Xl:e="Neutral";break;case Gl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ps=new U;function _d(){qt.getLuminanceCoefficients(ps);let i=ps.x.toFixed(4),t=ps.y.toFixed(4),e=ps.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xd(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Di).join(`
`)}function vd(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function yd(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Di(i){return i!==""}function A0(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function T0(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Md=/^[ \t]*#include +<([\w\d./]+)>/gm;function Va(i){return i.replace(Md,bd)}var Sd=new Map;function bd(i,t){let e=Bt[t];if(e===void 0){let n=Sd.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Va(e)}var Ed=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function R0(i){return i.replace(Ed,wd)}function wd(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function C0(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ad(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===k0?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===vl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===en&&(t="SHADOWMAP_TYPE_VSM"),t}function Td(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case gi:case _i:t="ENVMAP_TYPE_CUBE";break;case Qs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Rd(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case _i:t="ENVMAP_MODE_REFRACTION";break}return t}function Cd(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case V0:t="ENVMAP_BLENDING_MULTIPLY";break;case Bl:t="ENVMAP_BLENDING_MIX";break;case zl:t="ENVMAP_BLENDING_ADD";break}return t}function Pd(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Id(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Ad(e),c=Td(e),h=Rd(e),u=Cd(e),p=Pd(e),m=xd(e),x=vd(r),v=s.createProgram(),d,f,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Di).join(`
`),d.length>0&&(d+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Di).join(`
`),f.length>0&&(f+=`
`)):(d=[C0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Di).join(`
`),f=[C0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xn?"#define TONE_MAPPING":"",e.toneMapping!==xn?Bt.tonemapping_pars_fragment:"",e.toneMapping!==xn?gd("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,md("linearToOutputTexel",e.outputColorSpace),_d(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Di).join(`
`)),o=Va(o),o=A0(o,e),o=T0(o,e),a=Va(a),a=A0(a,e),a=T0(a,e),o=R0(o),a=R0(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,f=["#define varying in",e.glslVersion===qo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let _=M+d+o,b=M+f+a,C=E0(s,s.VERTEX_SHADER,_),A=E0(s,s.FRAGMENT_SHADER,b);s.attachShader(v,C),s.attachShader(v,A),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(S){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(v).trim(),I=s.getShaderInfoLog(C).trim(),B=s.getShaderInfoLog(A).trim(),q=!0,z=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,C,A);else{let K=w0(s,C,"vertex"),W=w0(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+N+`
`+K+`
`+W)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(I===""||B==="")&&(z=!1);z&&(S.diagnostics={runnable:q,programLog:N,vertexShader:{log:I,prefix:d},fragmentShader:{log:B,prefix:f}})}s.deleteShader(C),s.deleteShader(A),R=new di(s,v),k=yd(s,v)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let k;this.getAttributes=function(){return k===void 0&&w(this),k};let g=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=s.getProgramParameter(v,ud)),g},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=fd++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=A,this}var Ld=0,Ha=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ga(t),e.set(t,n)),n}},Ga=class{constructor(t){this.id=Ld++,this.code=t,this.usedTimes=0}};function Ud(i,t,e,n,s,r,o){let a=new Ds,l=new Ha,c=new Set,h=[],u=s.logarithmicDepthBuffer,p=s.reverseDepthBuffer,m=s.vertexTextures,x=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(g){return c.add(g),g===0?"uv":`uv${g}`}function f(g,S,N,I,B){let q=I.fog,z=B.geometry,K=g.isMeshStandardMaterial?I.environment:null,W=(g.isMeshStandardMaterial?e:t).get(g.envMap||K),st=W&&W.mapping===Qs?W.image.height:null,V=v[g.type];g.precision!==null&&(x=s.getMaxPrecision(g.precision),x!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",x,"instead."));let tt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Rt=tt!==void 0?tt.length:0,wt=0;z.morphAttributes.position!==void 0&&(wt=1),z.morphAttributes.normal!==void 0&&(wt=2),z.morphAttributes.color!==void 0&&(wt=3);let X,Q,at,rt;if(V){let be=Xe[V];X=be.vertexShader,Q=be.fragmentShader}else X=g.vertexShader,Q=g.fragmentShader,l.update(g),at=l.getVertexShaderID(g),rt=l.getFragmentShaderID(g);let vt=i.getRenderTarget(),St=B.isInstancedMesh===!0,Ft=B.isBatchedMesh===!0,Ut=!!g.map,Ct=!!g.matcap,P=!!W,ge=!!g.aoMap,it=!!g.lightMap,_t=!!g.bumpMap,yt=!!g.normalMap,kt=!!g.displacementMap,Tt=!!g.emissiveMap,T=!!g.metalnessMap,y=!!g.roughnessMap,O=g.anisotropy>0,Z=g.clearcoat>0,j=g.dispersion>0,J=g.iridescence>0,bt=g.sheen>0,lt=g.transmission>0,dt=O&&!!g.anisotropyMap,Gt=Z&&!!g.clearcoatMap,et=Z&&!!g.clearcoatNormalMap,pt=Z&&!!g.clearcoatRoughnessMap,Dt=J&&!!g.iridescenceMap,Nt=J&&!!g.iridescenceThicknessMap,mt=bt&&!!g.sheenColorMap,Vt=bt&&!!g.sheenRoughnessMap,Ot=!!g.specularMap,$t=!!g.specularColorMap,L=!!g.specularIntensityMap,ut=lt&&!!g.transmissionMap,Y=lt&&!!g.thicknessMap,$=!!g.gradientMap,ct=!!g.alphaMap,ft=g.alphaTest>0,Ht=!!g.alphaHash,re=!!g.extensions,Se=xn;g.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(Se=i.toneMapping);let Wt={shaderID:V,shaderType:g.type,shaderName:g.name,vertexShader:X,fragmentShader:Q,defines:g.defines,customVertexShaderID:at,customFragmentShaderID:rt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:x,batching:Ft,batchingColor:Ft&&B._colorsTexture!==null,instancing:St,instancingColor:St&&B.instanceColor!==null,instancingMorph:St&&B.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:vt===null?i.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:En,alphaToCoverage:!!g.alphaToCoverage,map:Ut,matcap:Ct,envMap:P,envMapMode:P&&W.mapping,envMapCubeUVHeight:st,aoMap:ge,lightMap:it,bumpMap:_t,normalMap:yt,displacementMap:m&&kt,emissiveMap:Tt,normalMapObjectSpace:yt&&g.normalMapType===Jl,normalMapTangentSpace:yt&&g.normalMapType===j0,metalnessMap:T,roughnessMap:y,anisotropy:O,anisotropyMap:dt,clearcoat:Z,clearcoatMap:Gt,clearcoatNormalMap:et,clearcoatRoughnessMap:pt,dispersion:j,iridescence:J,iridescenceMap:Dt,iridescenceThicknessMap:Nt,sheen:bt,sheenColorMap:mt,sheenRoughnessMap:Vt,specularMap:Ot,specularColorMap:$t,specularIntensityMap:L,transmission:lt,transmissionMap:ut,thicknessMap:Y,gradientMap:$,opaque:g.transparent===!1&&g.blending===hi&&g.alphaToCoverage===!1,alphaMap:ct,alphaTest:ft,alphaHash:Ht,combine:g.combine,mapUv:Ut&&d(g.map.channel),aoMapUv:ge&&d(g.aoMap.channel),lightMapUv:it&&d(g.lightMap.channel),bumpMapUv:_t&&d(g.bumpMap.channel),normalMapUv:yt&&d(g.normalMap.channel),displacementMapUv:kt&&d(g.displacementMap.channel),emissiveMapUv:Tt&&d(g.emissiveMap.channel),metalnessMapUv:T&&d(g.metalnessMap.channel),roughnessMapUv:y&&d(g.roughnessMap.channel),anisotropyMapUv:dt&&d(g.anisotropyMap.channel),clearcoatMapUv:Gt&&d(g.clearcoatMap.channel),clearcoatNormalMapUv:et&&d(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&d(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&d(g.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&d(g.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&d(g.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&d(g.sheenRoughnessMap.channel),specularMapUv:Ot&&d(g.specularMap.channel),specularColorMapUv:$t&&d(g.specularColorMap.channel),specularIntensityMapUv:L&&d(g.specularIntensityMap.channel),transmissionMapUv:ut&&d(g.transmissionMap.channel),thicknessMapUv:Y&&d(g.thicknessMap.channel),alphaMapUv:ct&&d(g.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(yt||O),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!z.attributes.uv&&(Ut||ct),fog:!!q,useFog:g.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:p,skinning:B.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:wt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:Se,decodeVideoTexture:Ut&&g.map.isVideoTexture===!0&&qt.getTransfer(g.map.colorSpace)===Qt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Ue,flipSided:g.side===me,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:re&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&g.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Wt.vertexUv1s=c.has(1),Wt.vertexUv2s=c.has(2),Wt.vertexUv3s=c.has(3),c.clear(),Wt}function M(g){let S=[];if(g.shaderID?S.push(g.shaderID):(S.push(g.customVertexShaderID),S.push(g.customFragmentShaderID)),g.defines!==void 0)for(let N in g.defines)S.push(N),S.push(g.defines[N]);return g.isRawShaderMaterial===!1&&(_(S,g),b(S,g),S.push(i.outputColorSpace)),S.push(g.customProgramCacheKey),S.join()}function _(g,S){g.push(S.precision),g.push(S.outputColorSpace),g.push(S.envMapMode),g.push(S.envMapCubeUVHeight),g.push(S.mapUv),g.push(S.alphaMapUv),g.push(S.lightMapUv),g.push(S.aoMapUv),g.push(S.bumpMapUv),g.push(S.normalMapUv),g.push(S.displacementMapUv),g.push(S.emissiveMapUv),g.push(S.metalnessMapUv),g.push(S.roughnessMapUv),g.push(S.anisotropyMapUv),g.push(S.clearcoatMapUv),g.push(S.clearcoatNormalMapUv),g.push(S.clearcoatRoughnessMapUv),g.push(S.iridescenceMapUv),g.push(S.iridescenceThicknessMapUv),g.push(S.sheenColorMapUv),g.push(S.sheenRoughnessMapUv),g.push(S.specularMapUv),g.push(S.specularColorMapUv),g.push(S.specularIntensityMapUv),g.push(S.transmissionMapUv),g.push(S.thicknessMapUv),g.push(S.combine),g.push(S.fogExp2),g.push(S.sizeAttenuation),g.push(S.morphTargetsCount),g.push(S.morphAttributeCount),g.push(S.numDirLights),g.push(S.numPointLights),g.push(S.numSpotLights),g.push(S.numSpotLightMaps),g.push(S.numHemiLights),g.push(S.numRectAreaLights),g.push(S.numDirLightShadows),g.push(S.numPointLightShadows),g.push(S.numSpotLightShadows),g.push(S.numSpotLightShadowsWithMaps),g.push(S.numLightProbes),g.push(S.shadowMapType),g.push(S.toneMapping),g.push(S.numClippingPlanes),g.push(S.numClipIntersection),g.push(S.depthPacking)}function b(g,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),g.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),g.push(a.mask)}function C(g){let S=v[g.type],N;if(S){let I=Xe[S];N=Sc.clone(I.uniforms)}else N=g.uniforms;return N}function A(g,S){let N;for(let I=0,B=h.length;I<B;I++){let q=h[I];if(q.cacheKey===S){N=q,++N.usedTimes;break}}return N===void 0&&(N=new Id(i,S,g,r),h.push(N)),N}function w(g){if(--g.usedTimes===0){let S=h.indexOf(g);h[S]=h[h.length-1],h.pop(),g.destroy()}}function R(g){l.remove(g)}function k(){l.dispose()}return{getParameters:f,getProgramCacheKey:M,getUniforms:C,acquireProgram:A,releaseProgram:w,releaseShaderCache:R,programs:h,dispose:k}}function Dd(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Nd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function P0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function I0(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,p,m,x,v,d){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:p,material:m,groupOrder:x,renderOrder:u.renderOrder,z:v,group:d},i[t]=f):(f.id=u.id,f.object=u,f.geometry=p,f.material=m,f.groupOrder=x,f.renderOrder=u.renderOrder,f.z=v,f.group=d),t++,f}function a(u,p,m,x,v,d){let f=o(u,p,m,x,v,d);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):e.push(f)}function l(u,p,m,x,v,d){let f=o(u,p,m,x,v,d);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,p){e.length>1&&e.sort(u||Nd),n.length>1&&n.sort(p||P0),s.length>1&&s.sort(p||P0)}function h(){for(let u=t,p=i.length;u<p;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Fd(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new I0,i.set(n,[o])):s>=r.length?(o=new I0,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Od(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new It};break;case"SpotLight":e={position:new U,direction:new U,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function Bd(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var zd=0;function kd(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Vd(i){let t=new Od,e=Bd(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let s=new U,r=new te,o=new te;function a(c){let h=0,u=0,p=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let m=0,x=0,v=0,d=0,f=0,M=0,_=0,b=0,C=0,A=0,w=0;c.sort(kd);for(let k=0,g=c.length;k<g;k++){let S=c[k],N=S.color,I=S.intensity,B=S.distance,q=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=N.r*I,u+=N.g*I,p+=N.b*I;else if(S.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(S.sh.coefficients[z],I);w++}else if(S.isDirectionalLight){let z=t.get(S);if(z.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let K=S.shadow,W=e.get(S);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,n.directionalShadow[m]=W,n.directionalShadowMap[m]=q,n.directionalShadowMatrix[m]=S.shadow.matrix,M++}n.directional[m]=z,m++}else if(S.isSpotLight){let z=t.get(S);z.position.setFromMatrixPosition(S.matrixWorld),z.color.copy(N).multiplyScalar(I),z.distance=B,z.coneCos=Math.cos(S.angle),z.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),z.decay=S.decay,n.spot[v]=z;let K=S.shadow;if(S.map&&(n.spotLightMap[C]=S.map,C++,K.updateMatrices(S),S.castShadow&&A++),n.spotLightMatrix[v]=K.matrix,S.castShadow){let W=e.get(S);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,n.spotShadow[v]=W,n.spotShadowMap[v]=q,b++}v++}else if(S.isRectAreaLight){let z=t.get(S);z.color.copy(N).multiplyScalar(I),z.halfWidth.set(S.width*.5,0,0),z.halfHeight.set(0,S.height*.5,0),n.rectArea[d]=z,d++}else if(S.isPointLight){let z=t.get(S);if(z.color.copy(S.color).multiplyScalar(S.intensity),z.distance=S.distance,z.decay=S.decay,S.castShadow){let K=S.shadow,W=e.get(S);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,W.shadowCameraNear=K.camera.near,W.shadowCameraFar=K.camera.far,n.pointShadow[x]=W,n.pointShadowMap[x]=q,n.pointShadowMatrix[x]=S.shadow.matrix,_++}n.point[x]=z,x++}else if(S.isHemisphereLight){let z=t.get(S);z.skyColor.copy(S.color).multiplyScalar(I),z.groundColor.copy(S.groundColor).multiplyScalar(I),n.hemi[f]=z,f++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=p;let R=n.hash;(R.directionalLength!==m||R.pointLength!==x||R.spotLength!==v||R.rectAreaLength!==d||R.hemiLength!==f||R.numDirectionalShadows!==M||R.numPointShadows!==_||R.numSpotShadows!==b||R.numSpotMaps!==C||R.numLightProbes!==w)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=d,n.point.length=x,n.hemi.length=f,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=b+C-A,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,R.directionalLength=m,R.pointLength=x,R.spotLength=v,R.rectAreaLength=d,R.hemiLength=f,R.numDirectionalShadows=M,R.numPointShadows=_,R.numSpotShadows=b,R.numSpotMaps=C,R.numLightProbes=w,n.version=zd++)}function l(c,h){let u=0,p=0,m=0,x=0,v=0,d=h.matrixWorldInverse;for(let f=0,M=c.length;f<M;f++){let _=c[f];if(_.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),u++}else if(_.isSpotLight){let b=n.spot[m];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(d),m++}else if(_.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(d),o.identity(),r.copy(_.matrixWorld),r.premultiply(d),o.extractRotation(r),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){let b=n.point[p];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(d),p++}else if(_.isHemisphereLight){let b=n.hemi[v];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(d),v++}}}return{setup:a,setupView:l,state:n}}function L0(i){let t=new Vd(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Hd(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new L0(i),t.set(s,[a])):r>=o.length?(a=new L0(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Wa=class extends bn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ql,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Xa=class extends bn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Gd=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wd=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Xd(i,t,e){let n=new zi,s=new Mt,r=new Mt,o=new ne,a=new Wa({depthPacking:Zl}),l=new Xa,c={},h=e.maxTextureSize,u={[yn]:me,[me]:yn,[Ue]:Ue},p=new Ne({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:Gd,fragmentShader:Wd}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let x=new Ee;x.setAttribute("position",new se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new oe(x,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=k0;let f=this.type;this.render=function(A,w,R){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||A.length===0)return;let k=i.getRenderTarget(),g=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),N=i.state;N.setBlending(_n),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let I=f!==en&&this.type===en,B=f===en&&this.type!==en;for(let q=0,z=A.length;q<z;q++){let K=A[q],W=K.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let st=W.getFrameExtents();if(s.multiply(st),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,W.mapSize.y=r.y)),W.map===null||I===!0||B===!0){let tt=this.type!==en?{minFilter:De,magFilter:De}:{};W.map!==null&&W.map.dispose(),W.map=new on(s.x,s.y,tt),W.map.texture.name=K.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();let V=W.getViewportCount();for(let tt=0;tt<V;tt++){let Rt=W.getViewport(tt);o.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),N.viewport(o),W.updateMatrices(K,tt),n=W.getFrustum(),b(w,R,W.camera,K,this.type)}W.isPointLightShadow!==!0&&this.type===en&&M(W,R),W.needsUpdate=!1}f=this.type,d.needsUpdate=!1,i.setRenderTarget(k,g,S)};function M(A,w){let R=t.update(v);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new on(s.x,s.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,R,p,v,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,R,m,v,null)}function _(A,w,R,k){let g=null,S=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(S!==void 0)g=S;else if(g=R.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let N=g.uuid,I=w.uuid,B=c[N];B===void 0&&(B={},c[N]=B);let q=B[I];q===void 0&&(q=g.clone(),B[I]=q,w.addEventListener("dispose",C)),g=q}if(g.visible=w.visible,g.wireframe=w.wireframe,k===en?g.side=w.shadowSide!==null?w.shadowSide:w.side:g.side=w.shadowSide!==null?w.shadowSide:u[w.side],g.alphaMap=w.alphaMap,g.alphaTest=w.alphaTest,g.map=w.map,g.clipShadows=w.clipShadows,g.clippingPlanes=w.clippingPlanes,g.clipIntersection=w.clipIntersection,g.displacementMap=w.displacementMap,g.displacementScale=w.displacementScale,g.displacementBias=w.displacementBias,g.wireframeLinewidth=w.wireframeLinewidth,g.linewidth=w.linewidth,R.isPointLight===!0&&g.isMeshDistanceMaterial===!0){let N=i.properties.get(g);N.light=R}return g}function b(A,w,R,k,g){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&g===en)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);let I=t.update(A),B=A.material;if(Array.isArray(B)){let q=I.groups;for(let z=0,K=q.length;z<K;z++){let W=q[z],st=B[W.materialIndex];if(st&&st.visible){let V=_(A,st,k,g);A.onBeforeShadow(i,A,w,R,I,V,W),i.renderBufferDirect(R,null,I,V,A,W),A.onAfterShadow(i,A,w,R,I,V,W)}}}else if(B.visible){let q=_(A,B,k,g);A.onBeforeShadow(i,A,w,R,I,q,null),i.renderBufferDirect(R,null,I,q,A,null),A.onAfterShadow(i,A,w,R,I,q,null)}}let N=A.children;for(let I=0,B=N.length;I<B;I++)b(N[I],w,R,k,g)}function C(A){A.target.removeEventListener("dispose",C);for(let R in c){let k=c[R],g=A.target.uuid;g in k&&(k[g].dispose(),delete k[g])}}}var Yd={[Yr]:qr,[Zr]:Kr,[Jr]:Qr,[mi]:$r,[qr]:Yr,[Kr]:Zr,[Qr]:Jr,[$r]:mi};function qd(i){function t(){let L=!1,ut=new ne,Y=null,$=new ne(0,0,0,0);return{setMask:function(ct){Y!==ct&&!L&&(i.colorMask(ct,ct,ct,ct),Y=ct)},setLocked:function(ct){L=ct},setClear:function(ct,ft,Ht,re,Se){Se===!0&&(ct*=re,ft*=re,Ht*=re),ut.set(ct,ft,Ht,re),$.equals(ut)===!1&&(i.clearColor(ct,ft,Ht,re),$.copy(ut))},reset:function(){L=!1,Y=null,$.set(-1,0,0,0)}}}function e(){let L=!1,ut=!1,Y=null,$=null,ct=null;return{setReversed:function(ft){ut=ft},setTest:function(ft){ft?at(i.DEPTH_TEST):rt(i.DEPTH_TEST)},setMask:function(ft){Y!==ft&&!L&&(i.depthMask(ft),Y=ft)},setFunc:function(ft){if(ut&&(ft=Yd[ft]),$!==ft){switch(ft){case Yr:i.depthFunc(i.NEVER);break;case qr:i.depthFunc(i.ALWAYS);break;case Zr:i.depthFunc(i.LESS);break;case mi:i.depthFunc(i.LEQUAL);break;case Jr:i.depthFunc(i.EQUAL);break;case $r:i.depthFunc(i.GEQUAL);break;case Kr:i.depthFunc(i.GREATER);break;case Qr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=ft}},setLocked:function(ft){L=ft},setClear:function(ft){ct!==ft&&(i.clearDepth(ft),ct=ft)},reset:function(){L=!1,Y=null,$=null,ct=null}}}function n(){let L=!1,ut=null,Y=null,$=null,ct=null,ft=null,Ht=null,re=null,Se=null;return{setTest:function(Wt){L||(Wt?at(i.STENCIL_TEST):rt(i.STENCIL_TEST))},setMask:function(Wt){ut!==Wt&&!L&&(i.stencilMask(Wt),ut=Wt)},setFunc:function(Wt,be,Je){(Y!==Wt||$!==be||ct!==Je)&&(i.stencilFunc(Wt,be,Je),Y=Wt,$=be,ct=Je)},setOp:function(Wt,be,Je){(ft!==Wt||Ht!==be||re!==Je)&&(i.stencilOp(Wt,be,Je),ft=Wt,Ht=be,re=Je)},setLocked:function(Wt){L=Wt},setClear:function(Wt){Se!==Wt&&(i.clearStencil(Wt),Se=Wt)},reset:function(){L=!1,ut=null,Y=null,$=null,ct=null,ft=null,Ht=null,re=null,Se=null}}}let s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,p=[],m=null,x=!1,v=null,d=null,f=null,M=null,_=null,b=null,C=null,A=new It(0,0,0),w=0,R=!1,k=null,g=null,S=null,N=null,I=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,z=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(K)[1]),q=z>=1):K.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),q=z>=2);let W=null,st={},V=i.getParameter(i.SCISSOR_BOX),tt=i.getParameter(i.VIEWPORT),Rt=new ne().fromArray(V),wt=new ne().fromArray(tt);function X(L,ut,Y,$){let ct=new Uint8Array(4),ft=i.createTexture();i.bindTexture(L,ft),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ht=0;Ht<Y;Ht++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ut,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(ut+Ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return ft}let Q={};Q[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),at(i.DEPTH_TEST),r.setFunc(mi),it(!1),_t(ko),at(i.CULL_FACE),P(_n);function at(L){c[L]!==!0&&(i.enable(L),c[L]=!0)}function rt(L){c[L]!==!1&&(i.disable(L),c[L]=!1)}function vt(L,ut){return h[L]!==ut?(i.bindFramebuffer(L,ut),h[L]=ut,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ut),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ut),!0):!1}function St(L,ut){let Y=p,$=!1;if(L){Y=u.get(ut),Y===void 0&&(Y=[],u.set(ut,Y));let ct=L.textures;if(Y.length!==ct.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,Ht=ct.length;ft<Ht;ft++)Y[ft]=i.COLOR_ATTACHMENT0+ft;Y.length=ct.length,$=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,$=!0);$&&i.drawBuffers(Y)}function Ft(L){return m!==L?(i.useProgram(L),m=L,!0):!1}let Ut={[Un]:i.FUNC_ADD,[Ml]:i.FUNC_SUBTRACT,[Sl]:i.FUNC_REVERSE_SUBTRACT};Ut[bl]=i.MIN,Ut[El]=i.MAX;let Ct={[wl]:i.ZERO,[Al]:i.ONE,[Tl]:i.SRC_COLOR,[Wr]:i.SRC_ALPHA,[Ul]:i.SRC_ALPHA_SATURATE,[Il]:i.DST_COLOR,[Cl]:i.DST_ALPHA,[Rl]:i.ONE_MINUS_SRC_COLOR,[Xr]:i.ONE_MINUS_SRC_ALPHA,[Ll]:i.ONE_MINUS_DST_COLOR,[Pl]:i.ONE_MINUS_DST_ALPHA,[Dl]:i.CONSTANT_COLOR,[Nl]:i.ONE_MINUS_CONSTANT_COLOR,[Fl]:i.CONSTANT_ALPHA,[Ol]:i.ONE_MINUS_CONSTANT_ALPHA};function P(L,ut,Y,$,ct,ft,Ht,re,Se,Wt){if(L===_n){x===!0&&(rt(i.BLEND),x=!1);return}if(x===!1&&(at(i.BLEND),x=!0),L!==yl){if(L!==v||Wt!==R){if((d!==Un||_!==Un)&&(i.blendEquation(i.FUNC_ADD),d=Un,_=Un),Wt)switch(L){case hi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pi:i.blendFunc(i.ONE,i.ONE);break;case Vo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ho:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Vo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ho:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}f=null,M=null,b=null,C=null,A.set(0,0,0),w=0,v=L,R=Wt}return}ct=ct||ut,ft=ft||Y,Ht=Ht||$,(ut!==d||ct!==_)&&(i.blendEquationSeparate(Ut[ut],Ut[ct]),d=ut,_=ct),(Y!==f||$!==M||ft!==b||Ht!==C)&&(i.blendFuncSeparate(Ct[Y],Ct[$],Ct[ft],Ct[Ht]),f=Y,M=$,b=ft,C=Ht),(re.equals(A)===!1||Se!==w)&&(i.blendColor(re.r,re.g,re.b,Se),A.copy(re),w=Se),v=L,R=!1}function ge(L,ut){L.side===Ue?rt(i.CULL_FACE):at(i.CULL_FACE);let Y=L.side===me;ut&&(Y=!Y),it(Y),L.blending===hi&&L.transparent===!1?P(_n):P(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);let $=L.stencilWrite;o.setTest($),$&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),kt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function it(L){k!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),k=L)}function _t(L){L!==_l?(at(i.CULL_FACE),L!==g&&(L===ko?i.cullFace(i.BACK):L===xl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):rt(i.CULL_FACE),g=L}function yt(L){L!==S&&(q&&i.lineWidth(L),S=L)}function kt(L,ut,Y){L?(at(i.POLYGON_OFFSET_FILL),(N!==ut||I!==Y)&&(i.polygonOffset(ut,Y),N=ut,I=Y)):rt(i.POLYGON_OFFSET_FILL)}function Tt(L){L?at(i.SCISSOR_TEST):rt(i.SCISSOR_TEST)}function T(L){L===void 0&&(L=i.TEXTURE0+B-1),W!==L&&(i.activeTexture(L),W=L)}function y(L,ut,Y){Y===void 0&&(W===null?Y=i.TEXTURE0+B-1:Y=W);let $=st[Y];$===void 0&&($={type:void 0,texture:void 0},st[Y]=$),($.type!==L||$.texture!==ut)&&(W!==Y&&(i.activeTexture(Y),W=Y),i.bindTexture(L,ut||Q[L]),$.type=L,$.texture=ut)}function O(){let L=st[W];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function dt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Gt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Dt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Nt(L){Rt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Rt.copy(L))}function mt(L){wt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),wt.copy(L))}function Vt(L,ut){let Y=l.get(ut);Y===void 0&&(Y=new WeakMap,l.set(ut,Y));let $=Y.get(L);$===void 0&&($=i.getUniformBlockIndex(ut,L.name),Y.set(L,$))}function Ot(L,ut){let $=l.get(ut).get(L);a.get(ut)!==$&&(i.uniformBlockBinding(ut,$,L.__bindingPointIndex),a.set(ut,$))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},W=null,st={},h={},u=new WeakMap,p=[],m=null,x=!1,v=null,d=null,f=null,M=null,_=null,b=null,C=null,A=new It(0,0,0),w=0,R=!1,k=null,g=null,S=null,N=null,I=null,Rt.set(0,0,i.canvas.width,i.canvas.height),wt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:at,disable:rt,bindFramebuffer:vt,drawBuffers:St,useProgram:Ft,setBlending:P,setMaterial:ge,setFlipSided:it,setCullFace:_t,setLineWidth:yt,setPolygonOffset:kt,setScissorTest:Tt,activeTexture:T,bindTexture:y,unbindTexture:O,compressedTexImage2D:Z,compressedTexImage3D:j,texImage2D:pt,texImage3D:Dt,updateUBOMapping:Vt,uniformBlockBinding:Ot,texStorage2D:Gt,texStorage3D:et,texSubImage2D:J,texSubImage3D:bt,compressedTexSubImage2D:lt,compressedTexSubImage3D:dt,scissor:Nt,viewport:mt,reset:$t}}function U0(i,t,e,n){let s=Zd(n);switch(e){case Y0:return i*t;case Z0:return i*t;case J0:return i*t*2;case $0:return i*t/s.components*s.byteLength;case bo:return i*t/s.components*s.byteLength;case K0:return i*t*2/s.components*s.byteLength;case Eo:return i*t*2/s.components*s.byteLength;case q0:return i*t*3/s.components*s.byteLength;case Ve:return i*t*4/s.components*s.byteLength;case wo:return i*t*4/s.components*s.byteLength;case ys:case Ms:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ss:case bs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sa:case aa:return Math.max(i,16)*Math.max(t,8)/4;case ia:case ra:return Math.max(i,8)*Math.max(t,8)/2;case oa:case la:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ua:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case fa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case da:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case pa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ma:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ga:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case _a:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case xa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case va:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ya:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ma:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Sa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ba:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Es:case Ea:case wa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Q0:case Aa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ta:case Ra:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zd(i){switch(i){case an:case G0:return{byteLength:1,components:1};case Bi:case W0:case Gi:return{byteLength:2,components:1};case Mo:case So:return{byteLength:2,components:4};case On:case yo:case sn:return{byteLength:4,components:1};case X0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Jd(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Mt,h=new WeakMap,u,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(T,y){return m?new OffscreenCanvas(T,y):Is("canvas")}function v(T,y,O){let Z=1,j=Tt(T);if((j.width>O||j.height>O)&&(Z=O/Math.max(j.width,j.height)),Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let J=Math.floor(Z*j.width),bt=Math.floor(Z*j.height);u===void 0&&(u=x(J,bt));let lt=y?x(J,bt):u;return lt.width=J,lt.height=bt,lt.getContext("2d").drawImage(T,0,0,J,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+J+"x"+bt+")."),lt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function d(T){return T.generateMipmaps&&T.minFilter!==De&&T.minFilter!==ke}function f(T){i.generateMipmap(T)}function M(T,y,O,Z,j=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let J=y;if(y===i.RED&&(O===i.FLOAT&&(J=i.R32F),O===i.HALF_FLOAT&&(J=i.R16F),O===i.UNSIGNED_BYTE&&(J=i.R8)),y===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.R8UI),O===i.UNSIGNED_SHORT&&(J=i.R16UI),O===i.UNSIGNED_INT&&(J=i.R32UI),O===i.BYTE&&(J=i.R8I),O===i.SHORT&&(J=i.R16I),O===i.INT&&(J=i.R32I)),y===i.RG&&(O===i.FLOAT&&(J=i.RG32F),O===i.HALF_FLOAT&&(J=i.RG16F),O===i.UNSIGNED_BYTE&&(J=i.RG8)),y===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RG8UI),O===i.UNSIGNED_SHORT&&(J=i.RG16UI),O===i.UNSIGNED_INT&&(J=i.RG32UI),O===i.BYTE&&(J=i.RG8I),O===i.SHORT&&(J=i.RG16I),O===i.INT&&(J=i.RG32I)),y===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RGB8UI),O===i.UNSIGNED_SHORT&&(J=i.RGB16UI),O===i.UNSIGNED_INT&&(J=i.RGB32UI),O===i.BYTE&&(J=i.RGB8I),O===i.SHORT&&(J=i.RGB16I),O===i.INT&&(J=i.RGB32I)),y===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),O===i.UNSIGNED_INT&&(J=i.RGBA32UI),O===i.BYTE&&(J=i.RGBA8I),O===i.SHORT&&(J=i.RGBA16I),O===i.INT&&(J=i.RGBA32I)),y===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),y===i.RGBA){let bt=j?Ts:qt.getTransfer(Z);O===i.FLOAT&&(J=i.RGBA32F),O===i.HALF_FLOAT&&(J=i.RGBA16F),O===i.UNSIGNED_BYTE&&(J=bt===Qt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function _(T,y){let O;return T?y===null||y===On||y===xi?O=i.DEPTH24_STENCIL8:y===sn?O=i.DEPTH32F_STENCIL8:y===Bi&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===On||y===xi?O=i.DEPTH_COMPONENT24:y===sn?O=i.DEPTH_COMPONENT32F:y===Bi&&(O=i.DEPTH_COMPONENT16),O}function b(T,y){return d(T)===!0||T.isFramebufferTexture&&T.minFilter!==De&&T.minFilter!==ke?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function C(T){let y=T.target;y.removeEventListener("dispose",C),w(y),y.isVideoTexture&&h.delete(y)}function A(T){let y=T.target;y.removeEventListener("dispose",A),k(y)}function w(T){let y=n.get(T);if(y.__webglInit===void 0)return;let O=T.source,Z=p.get(O);if(Z){let j=Z[y.__cacheKey];j.usedTimes--,j.usedTimes===0&&R(T),Object.keys(Z).length===0&&p.delete(O)}n.remove(T)}function R(T){let y=n.get(T);i.deleteTexture(y.__webglTexture);let O=T.source,Z=p.get(O);delete Z[y.__cacheKey],o.memory.textures--}function k(T){let y=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let j=0;j<y.__webglFramebuffer[Z].length;j++)i.deleteFramebuffer(y.__webglFramebuffer[Z][j]);else i.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)i.deleteFramebuffer(y.__webglFramebuffer[Z]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let O=T.textures;for(let Z=0,j=O.length;Z<j;Z++){let J=n.get(O[Z]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(O[Z])}n.remove(T)}let g=0;function S(){g=0}function N(){let T=g;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),g+=1,T}function I(T){let y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function B(T,y){let O=n.get(T);if(T.isVideoTexture&&yt(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){let Z=T.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{wt(O,T,y);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+y)}function q(T,y){let O=n.get(T);if(T.version>0&&O.__version!==T.version){wt(O,T,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+y)}function z(T,y){let O=n.get(T);if(T.version>0&&O.__version!==T.version){wt(O,T,y);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+y)}function K(T,y){let O=n.get(T);if(T.version>0&&O.__version!==T.version){X(O,T,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+y)}let W={[ea]:i.REPEAT,[Nn]:i.CLAMP_TO_EDGE,[na]:i.MIRRORED_REPEAT},st={[De]:i.NEAREST,[Yl]:i.NEAREST_MIPMAP_NEAREST,[Zi]:i.NEAREST_MIPMAP_LINEAR,[ke]:i.LINEAR,[lr]:i.LINEAR_MIPMAP_NEAREST,[Fn]:i.LINEAR_MIPMAP_LINEAR},V={[$l]:i.NEVER,[nc]:i.ALWAYS,[Kl]:i.LESS,[tl]:i.LEQUAL,[Ql]:i.EQUAL,[ec]:i.GEQUAL,[jl]:i.GREATER,[tc]:i.NOTEQUAL};function tt(T,y){if(y.type===sn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===ke||y.magFilter===lr||y.magFilter===Zi||y.magFilter===Fn||y.minFilter===ke||y.minFilter===lr||y.minFilter===Zi||y.minFilter===Fn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,W[y.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,W[y.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,W[y.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,st[y.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,st[y.minFilter]),y.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,V[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===De||y.minFilter!==Zi&&y.minFilter!==Fn||y.type===sn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Rt(T,y){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",C));let Z=y.source,j=p.get(Z);j===void 0&&(j={},p.set(Z,j));let J=I(y);if(J!==T.__cacheKey){j[J]===void 0&&(j[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),j[J].usedTimes++;let bt=j[T.__cacheKey];bt!==void 0&&(j[T.__cacheKey].usedTimes--,bt.usedTimes===0&&R(y)),T.__cacheKey=J,T.__webglTexture=j[J].texture}return O}function wt(T,y,O){let Z=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=i.TEXTURE_3D);let j=Rt(T,y),J=y.source;e.bindTexture(Z,T.__webglTexture,i.TEXTURE0+O);let bt=n.get(J);if(J.version!==bt.__version||j===!0){e.activeTexture(i.TEXTURE0+O);let lt=qt.getPrimaries(qt.workingColorSpace),dt=y.colorSpace===mn?null:qt.getPrimaries(y.colorSpace),Gt=y.colorSpace===mn||lt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let et=v(y.image,!1,s.maxTextureSize);et=kt(y,et);let pt=r.convert(y.format,y.colorSpace),Dt=r.convert(y.type),Nt=M(y.internalFormat,pt,Dt,y.colorSpace,y.isVideoTexture);tt(Z,y);let mt,Vt=y.mipmaps,Ot=y.isVideoTexture!==!0,$t=bt.__version===void 0||j===!0,L=J.dataReady,ut=b(y,et);if(y.isDepthTexture)Nt=_(y.format===vi,y.type),$t&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,Nt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Nt,et.width,et.height,0,pt,Dt,null));else if(y.isDataTexture)if(Vt.length>0){Ot&&$t&&e.texStorage2D(i.TEXTURE_2D,ut,Nt,Vt[0].width,Vt[0].height);for(let Y=0,$=Vt.length;Y<$;Y++)mt=Vt[Y],Ot?L&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,mt.width,mt.height,pt,Dt,mt.data):e.texImage2D(i.TEXTURE_2D,Y,Nt,mt.width,mt.height,0,pt,Dt,mt.data);y.generateMipmaps=!1}else Ot?($t&&e.texStorage2D(i.TEXTURE_2D,ut,Nt,et.width,et.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,pt,Dt,et.data)):e.texImage2D(i.TEXTURE_2D,0,Nt,et.width,et.height,0,pt,Dt,et.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ot&&$t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Nt,Vt[0].width,Vt[0].height,et.depth);for(let Y=0,$=Vt.length;Y<$;Y++)if(mt=Vt[Y],y.format!==Ve)if(pt!==null)if(Ot){if(L)if(y.layerUpdates.size>0){let ct=U0(mt.width,mt.height,y.format,y.type);for(let ft of y.layerUpdates){let Ht=mt.data.subarray(ft*ct/mt.data.BYTES_PER_ELEMENT,(ft+1)*ct/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,ft,mt.width,mt.height,1,pt,Ht,0,0)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,mt.width,mt.height,et.depth,pt,mt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Nt,mt.width,mt.height,et.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,mt.width,mt.height,et.depth,pt,Dt,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,Nt,mt.width,mt.height,et.depth,0,pt,Dt,mt.data)}else{Ot&&$t&&e.texStorage2D(i.TEXTURE_2D,ut,Nt,Vt[0].width,Vt[0].height);for(let Y=0,$=Vt.length;Y<$;Y++)mt=Vt[Y],y.format!==Ve?pt!==null?Ot?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,Nt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?L&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,mt.width,mt.height,pt,Dt,mt.data):e.texImage2D(i.TEXTURE_2D,Y,Nt,mt.width,mt.height,0,pt,Dt,mt.data)}else if(y.isDataArrayTexture)if(Ot){if($t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Nt,et.width,et.height,et.depth),L)if(y.layerUpdates.size>0){let Y=U0(et.width,et.height,y.format,y.type);for(let $ of y.layerUpdates){let ct=et.data.subarray($*Y/et.data.BYTES_PER_ELEMENT,($+1)*Y/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,et.width,et.height,1,pt,Dt,ct)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,pt,Dt,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,et.width,et.height,et.depth,0,pt,Dt,et.data);else if(y.isData3DTexture)Ot?($t&&e.texStorage3D(i.TEXTURE_3D,ut,Nt,et.width,et.height,et.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,pt,Dt,et.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,et.width,et.height,et.depth,0,pt,Dt,et.data);else if(y.isFramebufferTexture){if($t)if(Ot)e.texStorage2D(i.TEXTURE_2D,ut,Nt,et.width,et.height);else{let Y=et.width,$=et.height;for(let ct=0;ct<ut;ct++)e.texImage2D(i.TEXTURE_2D,ct,Nt,Y,$,0,pt,Dt,null),Y>>=1,$>>=1}}else if(Vt.length>0){if(Ot&&$t){let Y=Tt(Vt[0]);e.texStorage2D(i.TEXTURE_2D,ut,Nt,Y.width,Y.height)}for(let Y=0,$=Vt.length;Y<$;Y++)mt=Vt[Y],Ot?L&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,pt,Dt,mt):e.texImage2D(i.TEXTURE_2D,Y,Nt,pt,Dt,mt);y.generateMipmaps=!1}else if(Ot){if($t){let Y=Tt(et);e.texStorage2D(i.TEXTURE_2D,ut,Nt,Y.width,Y.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Dt,et)}else e.texImage2D(i.TEXTURE_2D,0,Nt,pt,Dt,et);d(y)&&f(Z),bt.__version=J.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function X(T,y,O){if(y.image.length!==6)return;let Z=Rt(T,y),j=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+O);let J=n.get(j);if(j.version!==J.__version||Z===!0){e.activeTexture(i.TEXTURE0+O);let bt=qt.getPrimaries(qt.workingColorSpace),lt=y.colorSpace===mn?null:qt.getPrimaries(y.colorSpace),dt=y.colorSpace===mn||bt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Gt=y.isCompressedTexture||y.image[0].isCompressedTexture,et=y.image[0]&&y.image[0].isDataTexture,pt=[];for(let $=0;$<6;$++)!Gt&&!et?pt[$]=v(y.image[$],!0,s.maxCubemapSize):pt[$]=et?y.image[$].image:y.image[$],pt[$]=kt(y,pt[$]);let Dt=pt[0],Nt=r.convert(y.format,y.colorSpace),mt=r.convert(y.type),Vt=M(y.internalFormat,Nt,mt,y.colorSpace),Ot=y.isVideoTexture!==!0,$t=J.__version===void 0||Z===!0,L=j.dataReady,ut=b(y,Dt);tt(i.TEXTURE_CUBE_MAP,y);let Y;if(Gt){Ot&&$t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Vt,Dt.width,Dt.height);for(let $=0;$<6;$++){Y=pt[$].mipmaps;for(let ct=0;ct<Y.length;ct++){let ft=Y[ct];y.format!==Ve?Nt!==null?Ot?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,0,0,ft.width,ft.height,Nt,ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,Vt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,0,0,ft.width,ft.height,Nt,mt,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,Vt,ft.width,ft.height,0,Nt,mt,ft.data)}}}else{if(Y=y.mipmaps,Ot&&$t){Y.length>0&&ut++;let $=Tt(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Vt,$.width,$.height)}for(let $=0;$<6;$++)if(et){Ot?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,pt[$].width,pt[$].height,Nt,mt,pt[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Vt,pt[$].width,pt[$].height,0,Nt,mt,pt[$].data);for(let ct=0;ct<Y.length;ct++){let Ht=Y[ct].image[$].image;Ot?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,0,0,Ht.width,Ht.height,Nt,mt,Ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,Vt,Ht.width,Ht.height,0,Nt,mt,Ht.data)}}else{Ot?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Nt,mt,pt[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Vt,Nt,mt,pt[$]);for(let ct=0;ct<Y.length;ct++){let ft=Y[ct];Ot?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,0,0,Nt,mt,ft.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,Vt,Nt,mt,ft.image[$])}}}d(y)&&f(i.TEXTURE_CUBE_MAP),J.__version=j.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function Q(T,y,O,Z,j,J){let bt=r.convert(O.format,O.colorSpace),lt=r.convert(O.type),dt=M(O.internalFormat,bt,lt,O.colorSpace);if(!n.get(y).__hasExternalTextures){let et=Math.max(1,y.width>>J),pt=Math.max(1,y.height>>J);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,J,dt,et,pt,y.depth,0,bt,lt,null):e.texImage2D(j,J,dt,et,pt,0,bt,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),_t(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,j,n.get(O).__webglTexture,0,it(y)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,j,n.get(O).__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(T,y,O){if(i.bindRenderbuffer(i.RENDERBUFFER,T),y.depthBuffer){let Z=y.depthTexture,j=Z&&Z.isDepthTexture?Z.type:null,J=_(y.stencilBuffer,j),bt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=it(y);_t(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,J,y.width,y.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,J,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,J,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,T)}else{let Z=y.textures;for(let j=0;j<Z.length;j++){let J=Z[j],bt=r.convert(J.format,J.colorSpace),lt=r.convert(J.type),dt=M(J.internalFormat,bt,lt,J.colorSpace),Gt=it(y);O&&_t(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,dt,y.width,y.height):_t(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt,dt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,dt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function rt(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),B(y.depthTexture,0);let Z=n.get(y.depthTexture).__webglTexture,j=it(y);if(y.depthTexture.format===ui)_t(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(y.depthTexture.format===vi)_t(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function vt(T){let y=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){let Z=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){let j=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",j)};Z.addEventListener("dispose",j),y.__depthDisposeCallback=j}y.__boundDepthTexture=Z}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");rt(y.__webglFramebuffer,T)}else if(O){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=i.createRenderbuffer(),at(y.__webglDepthbuffer[Z],T,!1);else{let j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,J)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),at(y.__webglDepthbuffer,T,!1);else{let Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,j)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function St(T,y,O){let Z=n.get(T);y!==void 0&&Q(Z.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&vt(T)}function Ft(T){let y=T.texture,O=n.get(T),Z=n.get(y);T.addEventListener("dispose",A);let j=T.textures,J=T.isWebGLCubeRenderTarget===!0,bt=j.length>1;if(bt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=y.version,o.memory.textures++),J){O.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[lt]=[];for(let dt=0;dt<y.mipmaps.length;dt++)O.__webglFramebuffer[lt][dt]=i.createFramebuffer()}else O.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let lt=0;lt<y.mipmaps.length;lt++)O.__webglFramebuffer[lt]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(bt)for(let lt=0,dt=j.length;lt<dt;lt++){let Gt=n.get(j[lt]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&_t(T)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let lt=0;lt<j.length;lt++){let dt=j[lt];O.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[lt]);let Gt=r.convert(dt.format,dt.colorSpace),et=r.convert(dt.type),pt=M(dt.internalFormat,Gt,et,dt.colorSpace,T.isXRRenderTarget===!0),Dt=it(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,pt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,O.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),at(O.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),tt(i.TEXTURE_CUBE_MAP,y);for(let lt=0;lt<6;lt++)if(y.mipmaps&&y.mipmaps.length>0)for(let dt=0;dt<y.mipmaps.length;dt++)Q(O.__webglFramebuffer[lt][dt],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,dt);else Q(O.__webglFramebuffer[lt],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);d(y)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let lt=0,dt=j.length;lt<dt;lt++){let Gt=j[lt],et=n.get(Gt);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),tt(i.TEXTURE_2D,Gt),Q(O.__webglFramebuffer,T,Gt,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,0),d(Gt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(lt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,Z.__webglTexture),tt(lt,y),y.mipmaps&&y.mipmaps.length>0)for(let dt=0;dt<y.mipmaps.length;dt++)Q(O.__webglFramebuffer[dt],T,y,i.COLOR_ATTACHMENT0,lt,dt);else Q(O.__webglFramebuffer,T,y,i.COLOR_ATTACHMENT0,lt,0);d(y)&&f(lt),e.unbindTexture()}T.depthBuffer&&vt(T)}function Ut(T){let y=T.textures;for(let O=0,Z=y.length;O<Z;O++){let j=y[O];if(d(j)){let J=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,bt=n.get(j).__webglTexture;e.bindTexture(J,bt),f(J),e.unbindTexture()}}}let Ct=[],P=[];function ge(T){if(T.samples>0){if(_t(T)===!1){let y=T.textures,O=T.width,Z=T.height,j=i.COLOR_BUFFER_BIT,J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(T),lt=y.length>1;if(lt)for(let dt=0;dt<y.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let dt=0;dt<y.length;dt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[dt]);let Gt=n.get(y[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,O,Z,0,0,O,Z,j,i.NEAREST),l===!0&&(Ct.length=0,P.length=0,Ct.push(i.COLOR_ATTACHMENT0+dt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ct.push(J),P.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ct))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let dt=0;dt<y.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,bt.__webglColorRenderbuffer[dt]);let Gt=n.get(y[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function it(T){return Math.min(s.maxSamples,T.samples)}function _t(T){let y=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function yt(T){let y=o.render.frame;h.get(T)!==y&&(h.set(T,y),T.update())}function kt(T,y){let O=T.colorSpace,Z=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==En&&O!==mn&&(qt.getTransfer(O)===Qt?(Z!==Ve||j!==an)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function Tt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=S,this.setTexture2D=B,this.setTexture2DArray=q,this.setTexture3D=z,this.setTextureCube=K,this.rebindTextures=St,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=_t}function $d(i,t){function e(n,s=mn){let r,o=qt.getTransfer(s);if(n===an)return i.UNSIGNED_BYTE;if(n===Mo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===So)return i.UNSIGNED_SHORT_5_5_5_1;if(n===X0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===G0)return i.BYTE;if(n===W0)return i.SHORT;if(n===Bi)return i.UNSIGNED_SHORT;if(n===yo)return i.INT;if(n===On)return i.UNSIGNED_INT;if(n===sn)return i.FLOAT;if(n===Gi)return i.HALF_FLOAT;if(n===Y0)return i.ALPHA;if(n===q0)return i.RGB;if(n===Ve)return i.RGBA;if(n===Z0)return i.LUMINANCE;if(n===J0)return i.LUMINANCE_ALPHA;if(n===ui)return i.DEPTH_COMPONENT;if(n===vi)return i.DEPTH_STENCIL;if(n===$0)return i.RED;if(n===bo)return i.RED_INTEGER;if(n===K0)return i.RG;if(n===Eo)return i.RG_INTEGER;if(n===wo)return i.RGBA_INTEGER;if(n===ys||n===Ms||n===Ss||n===bs)if(o===Qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ys)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ms)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ss)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ys)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ms)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ss)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ia||n===sa||n===ra||n===aa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ia)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ra)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===aa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oa||n===la||n===ca)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===oa||n===la)return o===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ca)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ha||n===ua||n===fa||n===da||n===pa||n===ma||n===ga||n===_a||n===xa||n===va||n===ya||n===Ma||n===Sa||n===ba)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ha)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ua)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fa)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===da)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pa)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ma)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ga)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_a)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xa)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===va)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ya)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ma)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sa)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ba)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Es||n===Ea||n===wa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Es)return o===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ea)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Q0||n===Aa||n===Ta||n===Ra)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Es)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Aa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ta)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ra)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ya=class extends ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},He=class extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}},Kd={type:"move"},Ni=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new He,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new He,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new He,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let d=e.getJointPose(v,n),f=this._getHandJoint(c,v);d!==null&&(f.matrix.fromArray(d.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=d.radius),f.visible=d!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),m=.02,x=.005;c.inputState.pinching&&p>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Kd)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new He;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Qd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jd=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,qa=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new Pe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ne({vertexShader:Qd,fragmentShader:jd,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new oe(new Mi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Za=class extends Mn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,p=null,m=null,x=null,v=new qa,d=e.getContextAttributes(),f=null,M=null,_=[],b=[],C=new Mt,A=null,w=new ve;w.layers.enable(1),w.viewport=new ne;let R=new ve;R.layers.enable(2),R.viewport=new ne;let k=[w,R],g=new Ya;g.layers.enable(1),g.layers.enable(2);let S=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=_[X];return Q===void 0&&(Q=new Ni,_[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=_[X];return Q===void 0&&(Q=new Ni,_[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=_[X];return Q===void 0&&(Q=new Ni,_[X]=Q),Q.getHandSpace()};function I(X){let Q=b.indexOf(X.inputSource);if(Q===-1)return;let at=_[Q];at!==void 0&&(at.update(X.inputSource,X.frame,c||o),at.dispatchEvent({type:X.type,data:X.inputSource}))}function B(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",q);for(let X=0;X<_.length;X++){let Q=b[X];Q!==null&&(b[X]=null,_[X].disconnect(Q))}S=null,N=null,v.reset(),t.setRenderTarget(f),m=null,p=null,u=null,s=null,M=null,wt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",B),s.addEventListener("inputsourceschange",q),d.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){let Q={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new on(m.framebufferWidth,m.framebufferHeight,{format:Ve,type:an,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let Q=null,at=null,rt=null;d.depth&&(rt=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=d.stencil?vi:ui,at=d.stencil?xi:On);let vt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(s,e),p=u.createProjectionLayer(vt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),M=new on(p.textureWidth,p.textureHeight,{format:Ve,type:an,depthTexture:new ks(p.textureWidth,p.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),wt.setContext(s),wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function q(X){for(let Q=0;Q<X.removed.length;Q++){let at=X.removed[Q],rt=b.indexOf(at);rt>=0&&(b[rt]=null,_[rt].disconnect(at))}for(let Q=0;Q<X.added.length;Q++){let at=X.added[Q],rt=b.indexOf(at);if(rt===-1){for(let St=0;St<_.length;St++)if(St>=b.length){b.push(at),rt=St;break}else if(b[St]===null){b[St]=at,rt=St;break}if(rt===-1)break}let vt=_[rt];vt&&vt.connect(at)}}let z=new U,K=new U;function W(X,Q,at){z.setFromMatrixPosition(Q.matrixWorld),K.setFromMatrixPosition(at.matrixWorld);let rt=z.distanceTo(K),vt=Q.projectionMatrix.elements,St=at.projectionMatrix.elements,Ft=vt[14]/(vt[10]-1),Ut=vt[14]/(vt[10]+1),Ct=(vt[9]+1)/vt[5],P=(vt[9]-1)/vt[5],ge=(vt[8]-1)/vt[0],it=(St[8]+1)/St[0],_t=Ft*ge,yt=Ft*it,kt=rt/(-ge+it),Tt=kt*-ge;if(Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Tt),X.translateZ(kt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),vt[10]===-1)X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let T=Ft+kt,y=Ut+kt,O=_t-Tt,Z=yt+(rt-Tt),j=Ct*Ut/y*T,J=P*Ut/y*T;X.projectionMatrix.makePerspective(O,Z,j,J,T,y),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function st(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let Q=X.near,at=X.far;v.texture!==null&&(v.depthNear>0&&(Q=v.depthNear),v.depthFar>0&&(at=v.depthFar)),g.near=R.near=w.near=Q,g.far=R.far=w.far=at,(S!==g.near||N!==g.far)&&(s.updateRenderState({depthNear:g.near,depthFar:g.far}),S=g.near,N=g.far);let rt=X.parent,vt=g.cameras;st(g,rt);for(let St=0;St<vt.length;St++)st(vt[St],rt);vt.length===2?W(g,w,R):g.projectionMatrix.copy(w.projectionMatrix),V(X,g,rt)};function V(X,Q,at){at===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(at.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ia*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(X){l=X,p!==null&&(p.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(g)};let tt=null;function Rt(X,Q){if(h=Q.getViewerPose(c||o),x=Q,h!==null){let at=h.views;m!==null&&(t.setRenderTargetFramebuffer(M,m.framebuffer),t.setRenderTarget(M));let rt=!1;at.length!==g.cameras.length&&(g.cameras.length=0,rt=!0);for(let St=0;St<at.length;St++){let Ft=at[St],Ut=null;if(m!==null)Ut=m.getViewport(Ft);else{let P=u.getViewSubImage(p,Ft);Ut=P.viewport,St===0&&(t.setRenderTargetTextures(M,P.colorTexture,p.ignoreDepthValues?void 0:P.depthStencilTexture),t.setRenderTarget(M))}let Ct=k[St];Ct===void 0&&(Ct=new ve,Ct.layers.enable(St),Ct.viewport=new ne,k[St]=Ct),Ct.matrix.fromArray(Ft.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray(Ft.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),St===0&&(g.matrix.copy(Ct.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),rt===!0&&g.cameras.push(Ct)}let vt=s.enabledFeatures;if(vt&&vt.includes("depth-sensing")){let St=u.getDepthInformation(at[0]);St&&St.isValid&&St.texture&&v.init(t,St,s.renderState)}}for(let at=0;at<_.length;at++){let rt=b[at],vt=_[at];rt!==null&&vt!==void 0&&vt.update(rt,Q,c||o)}tt&&tt(X,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),x=null}let wt=new sl;wt.setAnimationLoop(Rt),this.setAnimationLoop=function(X){tt=X},this.dispose=function(){}}},In=new qe,tp=new te;function ep(i,t){function e(d,f){d.matrixAutoUpdate===!0&&d.updateMatrix(),f.value.copy(d.matrix)}function n(d,f){f.color.getRGB(d.fogColor.value,il(i)),f.isFog?(d.fogNear.value=f.near,d.fogFar.value=f.far):f.isFogExp2&&(d.fogDensity.value=f.density)}function s(d,f,M,_,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(d,f):f.isMeshToonMaterial?(r(d,f),u(d,f)):f.isMeshPhongMaterial?(r(d,f),h(d,f)):f.isMeshStandardMaterial?(r(d,f),p(d,f),f.isMeshPhysicalMaterial&&m(d,f,b)):f.isMeshMatcapMaterial?(r(d,f),x(d,f)):f.isMeshDepthMaterial?r(d,f):f.isMeshDistanceMaterial?(r(d,f),v(d,f)):f.isMeshNormalMaterial?r(d,f):f.isLineBasicMaterial?(o(d,f),f.isLineDashedMaterial&&a(d,f)):f.isPointsMaterial?l(d,f,M,_):f.isSpriteMaterial?c(d,f):f.isShadowMaterial?(d.color.value.copy(f.color),d.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(d,f){d.opacity.value=f.opacity,f.color&&d.diffuse.value.copy(f.color),f.emissive&&d.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(d.map.value=f.map,e(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.bumpMap&&(d.bumpMap.value=f.bumpMap,e(f.bumpMap,d.bumpMapTransform),d.bumpScale.value=f.bumpScale,f.side===me&&(d.bumpScale.value*=-1)),f.normalMap&&(d.normalMap.value=f.normalMap,e(f.normalMap,d.normalMapTransform),d.normalScale.value.copy(f.normalScale),f.side===me&&d.normalScale.value.negate()),f.displacementMap&&(d.displacementMap.value=f.displacementMap,e(f.displacementMap,d.displacementMapTransform),d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias),f.emissiveMap&&(d.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,d.emissiveMapTransform)),f.specularMap&&(d.specularMap.value=f.specularMap,e(f.specularMap,d.specularMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);let M=t.get(f),_=M.envMap,b=M.envMapRotation;_&&(d.envMap.value=_,In.copy(b),In.x*=-1,In.y*=-1,In.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(In.y*=-1,In.z*=-1),d.envMapRotation.value.setFromMatrix4(tp.makeRotationFromEuler(In)),d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=f.reflectivity,d.ior.value=f.ior,d.refractionRatio.value=f.refractionRatio),f.lightMap&&(d.lightMap.value=f.lightMap,d.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,d.lightMapTransform)),f.aoMap&&(d.aoMap.value=f.aoMap,d.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,d.aoMapTransform))}function o(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,f.map&&(d.map.value=f.map,e(f.map,d.mapTransform))}function a(d,f){d.dashSize.value=f.dashSize,d.totalSize.value=f.dashSize+f.gapSize,d.scale.value=f.scale}function l(d,f,M,_){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.size.value=f.size*M,d.scale.value=_*.5,f.map&&(d.map.value=f.map,e(f.map,d.uvTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function c(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.rotation.value=f.rotation,f.map&&(d.map.value=f.map,e(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function h(d,f){d.specular.value.copy(f.specular),d.shininess.value=Math.max(f.shininess,1e-4)}function u(d,f){f.gradientMap&&(d.gradientMap.value=f.gradientMap)}function p(d,f){d.metalness.value=f.metalness,f.metalnessMap&&(d.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,d.metalnessMapTransform)),d.roughness.value=f.roughness,f.roughnessMap&&(d.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,d.roughnessMapTransform)),f.envMap&&(d.envMapIntensity.value=f.envMapIntensity)}function m(d,f,M){d.ior.value=f.ior,f.sheen>0&&(d.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),d.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(d.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,d.sheenColorMapTransform)),f.sheenRoughnessMap&&(d.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,d.sheenRoughnessMapTransform))),f.clearcoat>0&&(d.clearcoat.value=f.clearcoat,d.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(d.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,d.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(d.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===me&&d.clearcoatNormalScale.value.negate())),f.dispersion>0&&(d.dispersion.value=f.dispersion),f.iridescence>0&&(d.iridescence.value=f.iridescence,d.iridescenceIOR.value=f.iridescenceIOR,d.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(d.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,d.iridescenceMapTransform)),f.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),f.transmission>0&&(d.transmission.value=f.transmission,d.transmissionSamplerMap.value=M.texture,d.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(d.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,d.transmissionMapTransform)),d.thickness.value=f.thickness,f.thicknessMap&&(d.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=f.attenuationDistance,d.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(d.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(d.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=f.specularIntensity,d.specularColor.value.copy(f.specularColor),f.specularColorMap&&(d.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,d.specularColorMapTransform)),f.specularIntensityMap&&(d.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,d.specularIntensityMapTransform))}function x(d,f){f.matcap&&(d.matcap.value=f.matcap)}function v(d,f){let M=t.get(f).light;d.referencePosition.value.setFromMatrixPosition(M.matrixWorld),d.nearDistance.value=M.shadow.camera.near,d.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function np(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,_){let b=_.program;n.uniformBlockBinding(M,b)}function c(M,_){let b=s[M.id];b===void 0&&(x(M),b=h(M),s[M.id]=b,M.addEventListener("dispose",d));let C=_.program;n.updateUBOMapping(M,C);let A=t.render.frame;r[M.id]!==A&&(p(M),r[M.id]=A)}function h(M){let _=u();M.__bindingPointIndex=_;let b=i.createBuffer(),C=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,C,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,b),b}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(M){let _=s[M.id],b=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let A=0,w=b.length;A<w;A++){let R=Array.isArray(b[A])?b[A]:[b[A]];for(let k=0,g=R.length;k<g;k++){let S=R[k];if(m(S,A,k,C)===!0){let N=S.__offset,I=Array.isArray(S.value)?S.value:[S.value],B=0;for(let q=0;q<I.length;q++){let z=I[q],K=v(z);typeof z=="number"||typeof z=="boolean"?(S.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,N+B,S.__data)):z.isMatrix3?(S.__data[0]=z.elements[0],S.__data[1]=z.elements[1],S.__data[2]=z.elements[2],S.__data[3]=0,S.__data[4]=z.elements[3],S.__data[5]=z.elements[4],S.__data[6]=z.elements[5],S.__data[7]=0,S.__data[8]=z.elements[6],S.__data[9]=z.elements[7],S.__data[10]=z.elements[8],S.__data[11]=0):(z.toArray(S.__data,B),B+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,_,b,C){let A=M.value,w=_+"_"+b;if(C[w]===void 0)return typeof A=="number"||typeof A=="boolean"?C[w]=A:C[w]=A.clone(),!0;{let R=C[w];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return C[w]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function x(M){let _=M.uniforms,b=0,C=16;for(let w=0,R=_.length;w<R;w++){let k=Array.isArray(_[w])?_[w]:[_[w]];for(let g=0,S=k.length;g<S;g++){let N=k[g],I=Array.isArray(N.value)?N.value:[N.value];for(let B=0,q=I.length;B<q;B++){let z=I[B],K=v(z),W=b%C,st=W%K.boundary,V=W+st;b+=st,V!==0&&C-V<K.storage&&(b+=C-V),N.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=K.storage}}}let A=b%C;return A>0&&(b+=C-A),M.__size=b,M.__cache={},this}function v(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function d(M){let _=M.target;_.removeEventListener("dispose",d);let b=o.indexOf(_.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function f(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Vs=class{constructor(t={}){let{canvas:e=sc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let m=new Uint32Array(4),x=new Int32Array(4),v=null,d=null,f=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ce,this.toneMapping=xn,this.toneMappingExposure=1;let _=this,b=!1,C=0,A=0,w=null,R=-1,k=null,g=new ne,S=new ne,N=null,I=new It(0),B=0,q=e.width,z=e.height,K=1,W=null,st=null,V=new ne(0,0,q,z),tt=new ne(0,0,q,z),Rt=!1,wt=new zi,X=!1,Q=!1,at=new te,rt=new te,vt=new U,St=new ne,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ut=!1;function Ct(){return w===null?K:1}let P=n;function ge(E,D){return e.getContext(E,D)}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xo}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",ft,!1),P===null){let D="webgl2";if(P=ge(D,E),P===null)throw ge(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let it,_t,yt,kt,Tt,T,y,O,Z,j,J,bt,lt,dt,Gt,et,pt,Dt,Nt,mt,Vt,Ot,$t,L;function ut(){it=new xf(P),it.init(),Ot=new $d(P,it),_t=new ff(P,it,t,Ot),yt=new qd(P),_t.reverseDepthBuffer&&yt.buffers.depth.setReversed(!0),kt=new Mf(P),Tt=new Dd,T=new Jd(P,it,yt,Tt,_t,Ot,kt),y=new pf(_),O=new _f(_),Z=new Tc(P),$t=new hf(P,Z),j=new vf(P,Z,kt,$t),J=new bf(P,j,Z,kt),Nt=new Sf(P,_t,T),et=new df(Tt),bt=new Ud(_,y,O,it,_t,$t,et),lt=new ep(_,Tt),dt=new Fd,Gt=new Hd(it),Dt=new cf(_,y,O,yt,J,p,l),pt=new Xd(_,J,_t),L=new np(P,kt,_t,yt),mt=new uf(P,it,kt),Vt=new yf(P,it,kt),kt.programs=bt.programs,_.capabilities=_t,_.extensions=it,_.properties=Tt,_.renderLists=dt,_.shadowMap=pt,_.state=yt,_.info=kt}ut();let Y=new Za(_,P);this.xr=Y,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let E=it.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=it.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(E){E!==void 0&&(K=E,this.setSize(q,z,!1))},this.getSize=function(E){return E.set(q,z)},this.setSize=function(E,D,H=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=E,z=D,e.width=Math.floor(E*K),e.height=Math.floor(D*K),H===!0&&(e.style.width=E+"px",e.style.height=D+"px"),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set(q*K,z*K).floor()},this.setDrawingBufferSize=function(E,D,H){q=E,z=D,K=H,e.width=Math.floor(E*H),e.height=Math.floor(D*H),this.setViewport(0,0,E,D)},this.getCurrentViewport=function(E){return E.copy(g)},this.getViewport=function(E){return E.copy(V)},this.setViewport=function(E,D,H,G){E.isVector4?V.set(E.x,E.y,E.z,E.w):V.set(E,D,H,G),yt.viewport(g.copy(V).multiplyScalar(K).round())},this.getScissor=function(E){return E.copy(tt)},this.setScissor=function(E,D,H,G){E.isVector4?tt.set(E.x,E.y,E.z,E.w):tt.set(E,D,H,G),yt.scissor(S.copy(tt).multiplyScalar(K).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(E){yt.setScissorTest(Rt=E)},this.setOpaqueSort=function(E){W=E},this.setTransparentSort=function(E){st=E},this.getClearColor=function(E){return E.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(E=!0,D=!0,H=!0){let G=0;if(E){let F=!1;if(w!==null){let nt=w.texture.format;F=nt===wo||nt===Eo||nt===bo}if(F){let nt=w.texture.type,ht=nt===an||nt===On||nt===Bi||nt===xi||nt===Mo||nt===So,gt=Dt.getClearColor(),xt=Dt.getClearAlpha(),Pt=gt.r,Lt=gt.g,Et=gt.b;ht?(m[0]=Pt,m[1]=Lt,m[2]=Et,m[3]=xt,P.clearBufferuiv(P.COLOR,0,m)):(x[0]=Pt,x[1]=Lt,x[2]=Et,x[3]=xt,P.clearBufferiv(P.COLOR,0,x))}else G|=P.COLOR_BUFFER_BIT}D&&(G|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),H&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),dt.dispose(),Gt.dispose(),Tt.dispose(),y.dispose(),O.dispose(),J.dispose(),$t.dispose(),L.dispose(),bt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Lo),Y.removeEventListener("sessionend",Uo),wn.stop()};function $(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let E=kt.autoReset,D=pt.enabled,H=pt.autoUpdate,G=pt.needsUpdate,F=pt.type;ut(),kt.autoReset=E,pt.enabled=D,pt.autoUpdate=H,pt.needsUpdate=G,pt.type=F}function ft(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ht(E){let D=E.target;D.removeEventListener("dispose",Ht),re(D)}function re(E){Se(E),Tt.remove(E)}function Se(E){let D=Tt.get(E).programs;D!==void 0&&(D.forEach(function(H){bt.releaseProgram(H)}),E.isShaderMaterial&&bt.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,H,G,F,nt){D===null&&(D=Ft);let ht=F.isMesh&&F.matrixWorld.determinant()<0,gt=dl(E,D,H,G,F);yt.setMaterial(G,ht);let xt=H.index,Pt=1;if(G.wireframe===!0){if(xt=j.getWireframeAttribute(H),xt===void 0)return;Pt=2}let Lt=H.drawRange,Et=H.attributes.position,Zt=Lt.start*Pt,Kt=(Lt.start+Lt.count)*Pt;nt!==null&&(Zt=Math.max(Zt,nt.start*Pt),Kt=Math.min(Kt,(nt.start+nt.count)*Pt)),xt!==null?(Zt=Math.max(Zt,0),Kt=Math.min(Kt,xt.count)):Et!=null&&(Zt=Math.max(Zt,0),Kt=Math.min(Kt,Et.count));let ee=Kt-Zt;if(ee<0||ee===1/0)return;$t.setup(F,G,gt,H,xt);let we,Xt=mt;if(xt!==null&&(we=Z.get(xt),Xt=Vt,Xt.setIndex(we)),F.isMesh)G.wireframe===!0?(yt.setLineWidth(G.wireframeLinewidth*Ct()),Xt.setMode(P.LINES)):Xt.setMode(P.TRIANGLES);else if(F.isLine){let At=G.linewidth;At===void 0&&(At=1),yt.setLineWidth(At*Ct()),F.isLineSegments?Xt.setMode(P.LINES):F.isLineLoop?Xt.setMode(P.LINE_LOOP):Xt.setMode(P.LINE_STRIP)}else F.isPoints?Xt.setMode(P.POINTS):F.isSprite&&Xt.setMode(P.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Xt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))Xt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let At=F._multiDrawStarts,ue=F._multiDrawCounts,Yt=F._multiDrawCount,Fe=xt?Z.get(xt).bytesPerElement:1,Wn=Tt.get(G).currentProgram.getUniforms();for(let Ae=0;Ae<Yt;Ae++)Wn.setValue(P,"_gl_DrawID",Ae),Xt.render(At[Ae]/Fe,ue[Ae])}else if(F.isInstancedMesh)Xt.renderInstances(Zt,ee,F.count);else if(H.isInstancedBufferGeometry){let At=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ue=Math.min(H.instanceCount,At);Xt.renderInstances(Zt,ee,ue)}else Xt.render(Zt,ee)};function Wt(E,D,H){E.transparent===!0&&E.side===Ue&&E.forceSinglePass===!1?(E.side=me,E.needsUpdate=!0,qi(E,D,H),E.side=yn,E.needsUpdate=!0,qi(E,D,H),E.side=Ue):qi(E,D,H)}this.compile=function(E,D,H=null){H===null&&(H=E),d=Gt.get(H),d.init(D),M.push(d),H.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),E!==H&&E.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights();let G=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let nt=F.material;if(nt)if(Array.isArray(nt))for(let ht=0;ht<nt.length;ht++){let gt=nt[ht];Wt(gt,H,F),G.add(gt)}else Wt(nt,H,F),G.add(nt)}),M.pop(),d=null,G},this.compileAsync=function(E,D,H=null){let G=this.compile(E,D,H);return new Promise(F=>{function nt(){if(G.forEach(function(ht){Tt.get(ht).currentProgram.isReady()&&G.delete(ht)}),G.size===0){F(E);return}setTimeout(nt,10)}it.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let be=null;function Je(E){be&&be(E)}function Lo(){wn.stop()}function Uo(){wn.start()}let wn=new sl;wn.setAnimationLoop(Je),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(E){be=E,Y.setAnimationLoop(E),E===null?wn.stop():wn.start()},Y.addEventListener("sessionstart",Lo),Y.addEventListener("sessionend",Uo),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(D),D=Y.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,D,w),d=Gt.get(E,M.length),d.init(D),M.push(d),rt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),wt.setFromProjectionMatrix(rt),Q=this.localClippingEnabled,X=et.init(this.clippingPlanes,Q),v=dt.get(E,f.length),v.init(),f.push(v),Y.enabled===!0&&Y.isPresenting===!0){let nt=_.xr.getDepthSensingMesh();nt!==null&&sr(nt,D,-1/0,_.sortObjects)}sr(E,D,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(W,st),Ut=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Ut&&Dt.addToRenderList(v,E),this.info.render.frame++,X===!0&&et.beginShadows();let H=d.state.shadowsArray;pt.render(H,E,D),X===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=v.opaque,F=v.transmissive;if(d.setupLights(),D.isArrayCamera){let nt=D.cameras;if(F.length>0)for(let ht=0,gt=nt.length;ht<gt;ht++){let xt=nt[ht];No(G,F,E,xt)}Ut&&Dt.render(E);for(let ht=0,gt=nt.length;ht<gt;ht++){let xt=nt[ht];Do(v,E,xt,xt.viewport)}}else F.length>0&&No(G,F,E,D),Ut&&Dt.render(E),Do(v,E,D);w!==null&&(T.updateMultisampleRenderTarget(w),T.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(_,E,D),$t.resetDefaultState(),R=-1,k=null,M.pop(),M.length>0?(d=M[M.length-1],X===!0&&et.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function sr(E,D,H,G){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||wt.intersectsSprite(E)){G&&St.setFromMatrixPosition(E.matrixWorld).applyMatrix4(rt);let ht=J.update(E),gt=E.material;gt.visible&&v.push(E,ht,gt,H,St.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||wt.intersectsObject(E))){let ht=J.update(E),gt=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),St.copy(E.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),St.copy(ht.boundingSphere.center)),St.applyMatrix4(E.matrixWorld).applyMatrix4(rt)),Array.isArray(gt)){let xt=ht.groups;for(let Pt=0,Lt=xt.length;Pt<Lt;Pt++){let Et=xt[Pt],Zt=gt[Et.materialIndex];Zt&&Zt.visible&&v.push(E,ht,Zt,H,St.z,Et)}}else gt.visible&&v.push(E,ht,gt,H,St.z,null)}}let nt=E.children;for(let ht=0,gt=nt.length;ht<gt;ht++)sr(nt[ht],D,H,G)}function Do(E,D,H,G){let F=E.opaque,nt=E.transmissive,ht=E.transparent;d.setupLightsView(H),X===!0&&et.setGlobalState(_.clippingPlanes,H),G&&yt.viewport(g.copy(G)),F.length>0&&Yi(F,D,H),nt.length>0&&Yi(nt,D,H),ht.length>0&&Yi(ht,D,H),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function No(E,D,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[G.id]===void 0&&(d.state.transmissionRenderTarget[G.id]=new on(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?Gi:an,minFilter:Fn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));let nt=d.state.transmissionRenderTarget[G.id],ht=G.viewport||g;nt.setSize(ht.z,ht.w);let gt=_.getRenderTarget();_.setRenderTarget(nt),_.getClearColor(I),B=_.getClearAlpha(),B<1&&_.setClearColor(16777215,.5),_.clear(),Ut&&Dt.render(H);let xt=_.toneMapping;_.toneMapping=xn;let Pt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),d.setupLightsView(G),X===!0&&et.setGlobalState(_.clippingPlanes,G),Yi(E,H,G),T.updateMultisampleRenderTarget(nt),T.updateRenderTargetMipmap(nt),it.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let Et=0,Zt=D.length;Et<Zt;Et++){let Kt=D[Et],ee=Kt.object,we=Kt.geometry,Xt=Kt.material,At=Kt.group;if(Xt.side===Ue&&ee.layers.test(G.layers)){let ue=Xt.side;Xt.side=me,Xt.needsUpdate=!0,Fo(ee,H,G,we,Xt,At),Xt.side=ue,Xt.needsUpdate=!0,Lt=!0}}Lt===!0&&(T.updateMultisampleRenderTarget(nt),T.updateRenderTargetMipmap(nt))}_.setRenderTarget(gt),_.setClearColor(I,B),Pt!==void 0&&(G.viewport=Pt),_.toneMapping=xt}function Yi(E,D,H){let G=D.isScene===!0?D.overrideMaterial:null;for(let F=0,nt=E.length;F<nt;F++){let ht=E[F],gt=ht.object,xt=ht.geometry,Pt=G===null?ht.material:G,Lt=ht.group;gt.layers.test(H.layers)&&Fo(gt,D,H,xt,Pt,Lt)}}function Fo(E,D,H,G,F,nt){E.onBeforeRender(_,D,H,G,F,nt),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(_,D,H,G,E,nt),F.transparent===!0&&F.side===Ue&&F.forceSinglePass===!1?(F.side=me,F.needsUpdate=!0,_.renderBufferDirect(H,D,G,F,E,nt),F.side=yn,F.needsUpdate=!0,_.renderBufferDirect(H,D,G,F,E,nt),F.side=Ue):_.renderBufferDirect(H,D,G,F,E,nt),E.onAfterRender(_,D,H,G,F,nt)}function qi(E,D,H){D.isScene!==!0&&(D=Ft);let G=Tt.get(E),F=d.state.lights,nt=d.state.shadowsArray,ht=F.state.version,gt=bt.getParameters(E,F.state,nt,D,H),xt=bt.getProgramCacheKey(gt),Pt=G.programs;G.environment=E.isMeshStandardMaterial?D.environment:null,G.fog=D.fog,G.envMap=(E.isMeshStandardMaterial?O:y).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?D.environmentRotation:E.envMapRotation,Pt===void 0&&(E.addEventListener("dispose",Ht),Pt=new Map,G.programs=Pt);let Lt=Pt.get(xt);if(Lt!==void 0){if(G.currentProgram===Lt&&G.lightsStateVersion===ht)return Bo(E,gt),Lt}else gt.uniforms=bt.getUniforms(E),E.onBeforeCompile(gt,_),Lt=bt.acquireProgram(gt,xt),Pt.set(xt,Lt),G.uniforms=gt.uniforms;let Et=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Et.clippingPlanes=et.uniform),Bo(E,gt),G.needsLights=ml(E),G.lightsStateVersion=ht,G.needsLights&&(Et.ambientLightColor.value=F.state.ambient,Et.lightProbe.value=F.state.probe,Et.directionalLights.value=F.state.directional,Et.directionalLightShadows.value=F.state.directionalShadow,Et.spotLights.value=F.state.spot,Et.spotLightShadows.value=F.state.spotShadow,Et.rectAreaLights.value=F.state.rectArea,Et.ltc_1.value=F.state.rectAreaLTC1,Et.ltc_2.value=F.state.rectAreaLTC2,Et.pointLights.value=F.state.point,Et.pointLightShadows.value=F.state.pointShadow,Et.hemisphereLights.value=F.state.hemi,Et.directionalShadowMap.value=F.state.directionalShadowMap,Et.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Et.spotShadowMap.value=F.state.spotShadowMap,Et.spotLightMatrix.value=F.state.spotLightMatrix,Et.spotLightMap.value=F.state.spotLightMap,Et.pointShadowMap.value=F.state.pointShadowMap,Et.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Lt,G.uniformsList=null,Lt}function Oo(E){if(E.uniformsList===null){let D=E.currentProgram.getUniforms();E.uniformsList=di.seqWithValue(D.seq,E.uniforms)}return E.uniformsList}function Bo(E,D){let H=Tt.get(E);H.outputColorSpace=D.outputColorSpace,H.batching=D.batching,H.batchingColor=D.batchingColor,H.instancing=D.instancing,H.instancingColor=D.instancingColor,H.instancingMorph=D.instancingMorph,H.skinning=D.skinning,H.morphTargets=D.morphTargets,H.morphNormals=D.morphNormals,H.morphColors=D.morphColors,H.morphTargetsCount=D.morphTargetsCount,H.numClippingPlanes=D.numClippingPlanes,H.numIntersection=D.numClipIntersection,H.vertexAlphas=D.vertexAlphas,H.vertexTangents=D.vertexTangents,H.toneMapping=D.toneMapping}function dl(E,D,H,G,F){D.isScene!==!0&&(D=Ft),T.resetTextureUnits();let nt=D.fog,ht=G.isMeshStandardMaterial?D.environment:null,gt=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:En,xt=(G.isMeshStandardMaterial?O:y).get(G.envMap||ht),Pt=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Lt=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Et=!!H.morphAttributes.position,Zt=!!H.morphAttributes.normal,Kt=!!H.morphAttributes.color,ee=xn;G.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ee=_.toneMapping);let we=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Xt=we!==void 0?we.length:0,At=Tt.get(G),ue=d.state.lights;if(X===!0&&(Q===!0||E!==k)){let Ie=E===k&&G.id===R;et.setState(G,E,Ie)}let Yt=!1;G.version===At.__version?(At.needsLights&&At.lightsStateVersion!==ue.state.version||At.outputColorSpace!==gt||F.isBatchedMesh&&At.batching===!1||!F.isBatchedMesh&&At.batching===!0||F.isBatchedMesh&&At.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&At.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&At.instancing===!1||!F.isInstancedMesh&&At.instancing===!0||F.isSkinnedMesh&&At.skinning===!1||!F.isSkinnedMesh&&At.skinning===!0||F.isInstancedMesh&&At.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&At.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&At.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&At.instancingMorph===!1&&F.morphTexture!==null||At.envMap!==xt||G.fog===!0&&At.fog!==nt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==et.numPlanes||At.numIntersection!==et.numIntersection)||At.vertexAlphas!==Pt||At.vertexTangents!==Lt||At.morphTargets!==Et||At.morphNormals!==Zt||At.morphColors!==Kt||At.toneMapping!==ee||At.morphTargetsCount!==Xt)&&(Yt=!0):(Yt=!0,At.__version=G.version);let Fe=At.currentProgram;Yt===!0&&(Fe=qi(G,D,F));let Wn=!1,Ae=!1,rr=!1,ie=Fe.getUniforms(),ln=At.uniforms;if(yt.useProgram(Fe.program)&&(Wn=!0,Ae=!0,rr=!0),G.id!==R&&(R=G.id,Ae=!0),Wn||k!==E){_t.reverseDepthBuffer?(at.copy(E.projectionMatrix),ac(at),oc(at),ie.setValue(P,"projectionMatrix",at)):ie.setValue(P,"projectionMatrix",E.projectionMatrix),ie.setValue(P,"viewMatrix",E.matrixWorldInverse);let Ie=ie.map.cameraPosition;Ie!==void 0&&Ie.setValue(P,vt.setFromMatrixPosition(E.matrixWorld)),_t.logarithmicDepthBuffer&&ie.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ie.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),k!==E&&(k=E,Ae=!0,rr=!0)}if(F.isSkinnedMesh){ie.setOptional(P,F,"bindMatrix"),ie.setOptional(P,F,"bindMatrixInverse");let Ie=F.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),ie.setValue(P,"boneTexture",Ie.boneTexture,T))}F.isBatchedMesh&&(ie.setOptional(P,F,"batchingTexture"),ie.setValue(P,"batchingTexture",F._matricesTexture,T),ie.setOptional(P,F,"batchingIdTexture"),ie.setValue(P,"batchingIdTexture",F._indirectTexture,T),ie.setOptional(P,F,"batchingColorTexture"),F._colorsTexture!==null&&ie.setValue(P,"batchingColorTexture",F._colorsTexture,T));let ar=H.morphAttributes;if((ar.position!==void 0||ar.normal!==void 0||ar.color!==void 0)&&Nt.update(F,H,Fe),(Ae||At.receiveShadow!==F.receiveShadow)&&(At.receiveShadow=F.receiveShadow,ie.setValue(P,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(ln.envMap.value=xt,ln.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&D.environment!==null&&(ln.envMapIntensity.value=D.environmentIntensity),Ae&&(ie.setValue(P,"toneMappingExposure",_.toneMappingExposure),At.needsLights&&pl(ln,rr),nt&&G.fog===!0&&lt.refreshFogUniforms(ln,nt),lt.refreshMaterialUniforms(ln,G,K,z,d.state.transmissionRenderTarget[E.id]),di.upload(P,Oo(At),ln,T)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(di.upload(P,Oo(At),ln,T),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ie.setValue(P,"center",F.center),ie.setValue(P,"modelViewMatrix",F.modelViewMatrix),ie.setValue(P,"normalMatrix",F.normalMatrix),ie.setValue(P,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let Ie=G.uniformsGroups;for(let or=0,gl=Ie.length;or<gl;or++){let zo=Ie[or];L.update(zo,Fe),L.bind(zo,Fe)}}return Fe}function pl(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function ml(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,D,H){Tt.get(E.texture).__webglTexture=D,Tt.get(E.depthTexture).__webglTexture=H;let G=Tt.get(E);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,D){let H=Tt.get(E);H.__webglFramebuffer=D,H.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(E,D=0,H=0){w=E,C=D,A=H;let G=!0,F=null,nt=!1,ht=!1;if(E){let xt=Tt.get(E);if(xt.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(P.FRAMEBUFFER,null),G=!1;else if(xt.__webglFramebuffer===void 0)T.setupRenderTarget(E);else if(xt.__hasExternalTextures)T.rebindTextures(E,Tt.get(E.texture).__webglTexture,Tt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Et=E.depthTexture;if(xt.__boundDepthTexture!==Et){if(Et!==null&&Tt.has(Et)&&(E.width!==Et.image.width||E.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(E)}}let Pt=E.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(ht=!0);let Lt=Tt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Lt[D])?F=Lt[D][H]:F=Lt[D],nt=!0):E.samples>0&&T.useMultisampledRTT(E)===!1?F=Tt.get(E).__webglMultisampledFramebuffer:Array.isArray(Lt)?F=Lt[H]:F=Lt,g.copy(E.viewport),S.copy(E.scissor),N=E.scissorTest}else g.copy(V).multiplyScalar(K).floor(),S.copy(tt).multiplyScalar(K).floor(),N=Rt;if(yt.bindFramebuffer(P.FRAMEBUFFER,F)&&G&&yt.drawBuffers(E,F),yt.viewport(g),yt.scissor(S),yt.setScissorTest(N),nt){let xt=Tt.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+D,xt.__webglTexture,H)}else if(ht){let xt=Tt.get(E.texture),Pt=D||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,xt.__webglTexture,H||0,Pt)}R=-1},this.readRenderTargetPixels=function(E,D,H,G,F,nt,ht){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=Tt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ht!==void 0&&(gt=gt[ht]),gt){yt.bindFramebuffer(P.FRAMEBUFFER,gt);try{let xt=E.texture,Pt=xt.format,Lt=xt.type;if(!_t.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-G&&H>=0&&H<=E.height-F&&P.readPixels(D,H,G,F,Ot.convert(Pt),Ot.convert(Lt),nt)}finally{let xt=w!==null?Tt.get(w).__webglFramebuffer:null;yt.bindFramebuffer(P.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(E,D,H,G,F,nt,ht){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=Tt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ht!==void 0&&(gt=gt[ht]),gt){let xt=E.texture,Pt=xt.format,Lt=xt.type;if(!_t.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_t.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=E.width-G&&H>=0&&H<=E.height-F){yt.bindFramebuffer(P.FRAMEBUFFER,gt);let Et=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Et),P.bufferData(P.PIXEL_PACK_BUFFER,nt.byteLength,P.STREAM_READ),P.readPixels(D,H,G,F,Ot.convert(Pt),Ot.convert(Lt),0);let Zt=w!==null?Tt.get(w).__webglFramebuffer:null;yt.bindFramebuffer(P.FRAMEBUFFER,Zt);let Kt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await rc(P,Kt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Et),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,nt),P.deleteBuffer(Et),P.deleteSync(Kt),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,D=null,H=0){E.isTexture!==!0&&(ws("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,E=arguments[1]);let G=Math.pow(2,-H),F=Math.floor(E.image.width*G),nt=Math.floor(E.image.height*G),ht=D!==null?D.x:0,gt=D!==null?D.y:0;T.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,H,0,0,ht,gt,F,nt),yt.unbindTexture()},this.copyTextureToTexture=function(E,D,H=null,G=null,F=0){E.isTexture!==!0&&(ws("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,E=arguments[1],D=arguments[2],F=arguments[3]||0,H=null);let nt,ht,gt,xt,Pt,Lt;H!==null?(nt=H.max.x-H.min.x,ht=H.max.y-H.min.y,gt=H.min.x,xt=H.min.y):(nt=E.image.width,ht=E.image.height,gt=0,xt=0),G!==null?(Pt=G.x,Lt=G.y):(Pt=0,Lt=0);let Et=Ot.convert(D.format),Zt=Ot.convert(D.type);T.setTexture2D(D,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,D.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,D.unpackAlignment);let Kt=P.getParameter(P.UNPACK_ROW_LENGTH),ee=P.getParameter(P.UNPACK_IMAGE_HEIGHT),we=P.getParameter(P.UNPACK_SKIP_PIXELS),Xt=P.getParameter(P.UNPACK_SKIP_ROWS),At=P.getParameter(P.UNPACK_SKIP_IMAGES),ue=E.isCompressedTexture?E.mipmaps[F]:E.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,ue.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ue.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,gt),P.pixelStorei(P.UNPACK_SKIP_ROWS,xt),E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,F,Pt,Lt,nt,ht,Et,Zt,ue.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,F,Pt,Lt,ue.width,ue.height,Et,ue.data):P.texSubImage2D(P.TEXTURE_2D,F,Pt,Lt,nt,ht,Et,Zt,ue),P.pixelStorei(P.UNPACK_ROW_LENGTH,Kt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ee),P.pixelStorei(P.UNPACK_SKIP_PIXELS,we),P.pixelStorei(P.UNPACK_SKIP_ROWS,Xt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,At),F===0&&D.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),yt.unbindTexture()},this.copyTextureToTexture3D=function(E,D,H=null,G=null,F=0){E.isTexture!==!0&&(ws("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,E=arguments[2],D=arguments[3],F=arguments[4]||0);let nt,ht,gt,xt,Pt,Lt,Et,Zt,Kt,ee=E.isCompressedTexture?E.mipmaps[F]:E.image;H!==null?(nt=H.max.x-H.min.x,ht=H.max.y-H.min.y,gt=H.max.z-H.min.z,xt=H.min.x,Pt=H.min.y,Lt=H.min.z):(nt=ee.width,ht=ee.height,gt=ee.depth,xt=0,Pt=0,Lt=0),G!==null?(Et=G.x,Zt=G.y,Kt=G.z):(Et=0,Zt=0,Kt=0);let we=Ot.convert(D.format),Xt=Ot.convert(D.type),At;if(D.isData3DTexture)T.setTexture3D(D,0),At=P.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)T.setTexture2DArray(D,0),At=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,D.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,D.unpackAlignment);let ue=P.getParameter(P.UNPACK_ROW_LENGTH),Yt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Fe=P.getParameter(P.UNPACK_SKIP_PIXELS),Wn=P.getParameter(P.UNPACK_SKIP_ROWS),Ae=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ee.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ee.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,xt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Pt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Lt),E.isDataTexture||E.isData3DTexture?P.texSubImage3D(At,F,Et,Zt,Kt,nt,ht,gt,we,Xt,ee.data):D.isCompressedArrayTexture?P.compressedTexSubImage3D(At,F,Et,Zt,Kt,nt,ht,gt,we,ee.data):P.texSubImage3D(At,F,Et,Zt,Kt,nt,ht,gt,we,Xt,ee),P.pixelStorei(P.UNPACK_ROW_LENGTH,ue),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Yt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Fe),P.pixelStorei(P.UNPACK_SKIP_ROWS,Wn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ae),F===0&&D.generateMipmaps&&P.generateMipmap(At),yt.unbindTexture()},this.initRenderTarget=function(E){Tt.get(E).__webglFramebuffer===void 0&&T.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),yt.unbindTexture()},this.resetState=function(){C=0,A=0,w=null,yt.reset(),$t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Ao?"display-p3":"srgb",e.unpackColorSpace=qt.workingColorSpace===js?"display-p3":"srgb"}};var ki=class extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qe,this.environmentIntensity=1,this.environmentRotation=new qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ja=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Pa,this.updateRanges=[],this.version=0,this.uuid=vn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},_e=new U,Hs=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ye(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ye(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ye(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ye(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ye(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),s=Jt(s,this.array),r=Jt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new se(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Vi=class extends bn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ri,Ii=new U,ai=new U,oi=new U,li=new Mt,Li=new Mt,cl=new te,ms=new U,Ui=new U,gs=new U,D0=new Mt,zr=new Mt,N0=new Mt,Gs=class extends Me{constructor(t=new Vi){if(super(),this.isSprite=!0,this.type="Sprite",ri===void 0){ri=new Ee;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ja(e,5);ri.setIndex([0,1,2,0,2,3]),ri.setAttribute("position",new Hs(n,3,0,!1)),ri.setAttribute("uv",new Hs(n,2,3,!1))}this.geometry=ri,this.material=t,this.center=new Mt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ai.setFromMatrixScale(this.matrixWorld),cl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),oi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ai.multiplyScalar(-oi.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;_s(ms.set(-.5,-.5,0),oi,o,ai,s,r),_s(Ui.set(.5,-.5,0),oi,o,ai,s,r),_s(gs.set(.5,.5,0),oi,o,ai,s,r),D0.set(0,0),zr.set(1,0),N0.set(1,1);let a=t.ray.intersectTriangle(ms,Ui,gs,!1,Ii);if(a===null&&(_s(Ui.set(-.5,.5,0),oi,o,ai,s,r),zr.set(0,1),a=t.ray.intersectTriangle(ms,gs,Ui,!1,Ii),a===null))return;let l=t.ray.origin.distanceTo(Ii);l<t.near||l>t.far||e.push({distance:l,point:Ii.clone(),uv:gn.getInterpolation(Ii,ms,Ui,gs,D0,zr,N0,new Mt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function _s(i,t,e,n,s,r){li.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Li.x=r*li.x-s*li.y,Li.y=s*li.x+r*li.y):Li.copy(li),i.copy(t),i.x+=Li.x,i.y+=Li.y,i.applyMatrix4(cl)}var Ws=class extends Pe{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ge=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],p=n[s+1]-h,m=(o-h)/p;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Mt:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new U,s=[],r=[],o=[],a=new U,l=new te;for(let m=0;m<=t;m++){let x=m/t;s[m]=this.getTangentAt(x,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),p<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(fe(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,x))}o[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(fe(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(m=-m);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],m*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Xs=class extends Ge{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Mt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=l-this.aX,m=c-this.aY;l=p*h-m*u+this.aX,c=p*u+m*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},$a=class extends Xs{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ro(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let p=(o-r)/c-(a-r)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+u)+(l-a)/u;p*=h,m*=h,s(o,a,p,m)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var xs=new U,kr=new Ro,Vr=new Ro,Hr=new Ro,Hi=class extends Ge{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(xs.subVectors(s[0],s[1]).add(s[0]),c=xs);let u=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(xs.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=xs),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(u),m),v=Math.pow(u.distanceToSquared(p),m),d=Math.pow(p.distanceToSquared(h),m);v<1e-4&&(v=1),x<1e-4&&(x=v),d<1e-4&&(d=v),kr.initNonuniformCatmullRom(c.x,u.x,p.x,h.x,x,v,d),Vr.initNonuniformCatmullRom(c.y,u.y,p.y,h.y,x,v,d),Hr.initNonuniformCatmullRom(c.z,u.z,p.z,h.z,x,v,d)}else this.curveType==="catmullrom"&&(kr.initCatmullRom(c.x,u.x,p.x,h.x,this.tension),Vr.initCatmullRom(c.y,u.y,p.y,h.y,this.tension),Hr.initCatmullRom(c.z,u.z,p.z,h.z,this.tension));return n.set(kr.calc(l),Vr.calc(l),Hr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function F0(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function ip(i,t){let e=1-i;return e*e*t}function sp(i,t){return 2*(1-i)*i*t}function rp(i,t){return i*i*t}function Fi(i,t,e,n){return ip(i,t)+sp(i,e)+rp(i,n)}function ap(i,t){let e=1-i;return e*e*e*t}function op(i,t){let e=1-i;return 3*e*e*i*t}function lp(i,t){return 3*(1-i)*i*i*t}function cp(i,t){return i*i*i*t}function Oi(i,t,e,n,s){return ap(i,t)+op(i,e)+lp(i,n)+cp(i,s)}var Ka=class extends Ge{constructor(t=new Mt,e=new Mt,n=new Mt,s=new Mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Mt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Oi(t,s.x,r.x,o.x,a.x),Oi(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Qa=class extends Ge{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Oi(t,s.x,r.x,o.x,a.x),Oi(t,s.y,r.y,o.y,a.y),Oi(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ja=class extends Ge{constructor(t=new Mt,e=new Mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Mt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},to=class extends Ge{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},eo=class extends Ge{constructor(t=new Mt,e=new Mt,n=new Mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Mt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Fi(t,s.x,r.x,o.x),Fi(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ys=class extends Ge{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Fi(t,s.x,r.x,o.x),Fi(t,s.y,r.y,o.y),Fi(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},no=class extends Ge{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Mt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(F0(a,l.x,c.x,h.x,u.x),F0(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Mt().fromArray(s))}return this}},hp=Object.freeze({__proto__:null,ArcCurve:$a,CatmullRomCurve3:Hi,CubicBezierCurve:Ka,CubicBezierCurve3:Qa,EllipseCurve:Xs,LineCurve:ja,LineCurve3:to,QuadraticBezierCurve:eo,QuadraticBezierCurve3:Ys,SplineCurve:no});var qs=class i extends Ee{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,p=(e-t)/s,m=new U,x=new Mt;for(let v=0;v<=s;v++){for(let d=0;d<=n;d++){let f=r+d/n*o;m.x=u*Math.cos(f),m.y=u*Math.sin(f),l.push(m.x,m.y,m.z),c.push(0,0,1),x.x=(m.x/e+1)/2,x.y=(m.y/e+1)/2,h.push(x.x,x.y)}u+=p}for(let v=0;v<s;v++){let d=v*(n+1);for(let f=0;f<n;f++){let M=f+d,_=M,b=M+n+1,C=M+n+2,A=M+1;a.push(_,b,A),a.push(b,C,A)}}this.setIndex(a),this.setAttribute("position",new ye(l,3)),this.setAttribute("normal",new ye(c,3)),this.setAttribute("uv",new ye(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Zs=class i extends Ee{constructor(t=new Ys(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new U,l=new U,c=new Mt,h=new U,u=[],p=[],m=[],x=[];v(),this.setIndex(x),this.setAttribute("position",new ye(u,3)),this.setAttribute("normal",new ye(p,3)),this.setAttribute("uv",new ye(m,2));function v(){for(let _=0;_<e;_++)d(_);d(r===!1?e:0),M(),f()}function d(_){h=t.getPointAt(_/e,h);let b=o.normals[_],C=o.binormals[_];for(let A=0;A<=s;A++){let w=A/s*Math.PI*2,R=Math.sin(w),k=-Math.cos(w);l.x=k*b.x+R*C.x,l.y=k*b.y+R*C.y,l.z=k*b.z+R*C.z,l.normalize(),p.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function f(){for(let _=1;_<=e;_++)for(let b=1;b<=s;b++){let C=(s+1)*(_-1)+(b-1),A=(s+1)*_+(b-1),w=(s+1)*_+b,R=(s+1)*(_-1)+b;x.push(C,A,R),x.push(A,w,R)}}function M(){for(let _=0;_<=e;_++)for(let b=0;b<=s;b++)c.x=_/e,c.y=b/s,m.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new hp[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var io=class extends bn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=j0,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Js=class extends io{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return fe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new It(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new It(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new It(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function vs(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function up(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var bi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},so=class extends bi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Go,endingEnd:Go}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Wo:r=t,a=2*e-n;break;case Xo:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Wo:o=t,l=2*n-e;break;case Xo:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,m=this._weightNext,x=(n-e)/(s-e),v=x*x,d=v*x,f=-p*d+2*p*v-p*x,M=(1+p)*d+(-1.5-2*p)*v+(-.5+p)*x+1,_=(-1-m)*d+(1.5+m)*v+.5*x,b=m*d-m*v;for(let C=0;C!==a;++C)r[C]=f*o[h+C]+M*o[c+C]+_*o[l+C]+b*o[u+C];return r}},ro=class extends bi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let p=0;p!==a;++p)r[p]=o[c+p]*u+o[l+p]*h;return r}},ao=class extends bi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},We=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=vs(e,this.TimeBufferType),this.values=vs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:vs(t.times,Array),values:vs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ao(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ro(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new so(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case As:e=this.InterpolantFactoryMethodDiscrete;break;case Ca:e=this.InterpolantFactoryMethodLinear;break;case cr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return As;case this.InterpolantFactoryMethodLinear:return Ca;case this.InterpolantFactoryMethodSmooth:return cr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&up(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===cr,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,p=u-n,m=u+n;for(let x=0;x!==n;++x){let v=e[u+x];if(v!==e[p+x]||v!==e[m+x]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,p=o*n;for(let m=0;m!==n;++m)e[p+m]=e[u+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};We.prototype.TimeBufferType=Float32Array;We.prototype.ValueBufferType=Float32Array;We.prototype.DefaultInterpolation=Ca;var Vn=class extends We{constructor(t,e,n){super(t,e,n)}};Vn.prototype.ValueTypeName="bool";Vn.prototype.ValueBufferType=Array;Vn.prototype.DefaultInterpolation=As;Vn.prototype.InterpolantFactoryMethodLinear=void 0;Vn.prototype.InterpolantFactoryMethodSmooth=void 0;var oo=class extends We{};oo.prototype.ValueTypeName="color";var lo=class extends We{};lo.prototype.ValueTypeName="number";var co=class extends bi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Sn.slerpFlat(r,0,o,c-a,o,c,l);return r}},$s=class extends We{InterpolantFactoryMethodLinear(t){return new co(this.times,this.values,this.getValueSize(),t)}};$s.prototype.ValueTypeName="quaternion";$s.prototype.InterpolantFactoryMethodSmooth=void 0;var Hn=class extends We{constructor(t,e,n){super(t,e,n)}};Hn.prototype.ValueTypeName="string";Hn.prototype.ValueBufferType=Array;Hn.prototype.DefaultInterpolation=As;Hn.prototype.InterpolantFactoryMethodLinear=void 0;Hn.prototype.InterpolantFactoryMethodSmooth=void 0;var ho=class extends We{};ho.prototype.ValueTypeName="vector";var uo=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=c.length;u<p;u+=2){let m=c[u],x=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return x}return null}}},fp=new uo,fo=class{constructor(t){this.manager=t!==void 0?t:fp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};fo.DEFAULT_MATERIAL_NAME="__DEFAULT";var po=class extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var Gr=new te,O0=new U,B0=new U,mo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zi,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;O0.setFromMatrixPosition(t.matrixWorld),e.position.copy(O0),B0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(B0),e.updateMatrixWorld(),Gr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Gr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var go=class extends mo{constructor(){super(new zs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ei=class extends po{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new go}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ks=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=z0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=z0();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function z0(){return performance.now()}var Co="\\[\\]\\.:\\/",dp=new RegExp("["+Co+"]","g"),Po="[^"+Co+"]",pp="[^"+Co.replace("\\.","")+"]",mp=/((?:WC+[\/:])*)/.source.replace("WC",Po),gp=/(WCOD+)?/.source.replace("WCOD",pp),_p=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Po),xp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Po),vp=new RegExp("^"+mp+gp+_p+xp+"$"),yp=["material","materials","bones","map"],_o=class{constructor(t,e,n){let s=n||jt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},jt=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(dp,"")}static parseTrackName(t){let e=vp.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);yp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};jt.Composite=_o;jt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};jt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};jt.prototype.GetterByBindingType=[jt.prototype._getValue_direct,jt.prototype._getValue_array,jt.prototype._getValue_arrayElement,jt.prototype._getValue_toArray];jt.prototype.SetterByBindingTypeAndVersioning=[[jt.prototype._setValue_direct,jt.prototype._setValue_direct_setNeedsUpdate,jt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_array,jt.prototype._setValue_array_setNeedsUpdate,jt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_arrayElement,jt.prototype._setValue_arrayElement_setNeedsUpdate,jt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_fromArray,jt.prototype._setValue_fromArray_setNeedsUpdate,jt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Rp=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xo);var nr=class extends oe{constructor(t,e,n=!1,s=!1,r=1e4){let o=new Ee;super(o,e),this.isMarchingCubes=!0;let a=this,l=new Float32Array(12*3),c=new Float32Array(12*3),h=new Float32Array(12*3);this.enableUvs=n,this.enableColors=s,this.init=function(M){this.resolution=M,this.isolation=80,this.size=M,this.size2=this.size*this.size,this.size3=this.size2*this.size,this.halfsize=this.size/2,this.delta=2/this.size,this.yd=this.size,this.zd=this.size2,this.field=new Float32Array(this.size3),this.normal_cache=new Float32Array(this.size3*3),this.palette=new Float32Array(this.size3*3),this.count=0;let _=r*3;this.positionArray=new Float32Array(_*3);let b=new se(this.positionArray,3);b.setUsage(Wi),o.setAttribute("position",b),this.normalArray=new Float32Array(_*3);let C=new se(this.normalArray,3);if(C.setUsage(Wi),o.setAttribute("normal",C),this.enableUvs){this.uvArray=new Float32Array(_*2);let A=new se(this.uvArray,2);A.setUsage(Wi),o.setAttribute("uv",A)}if(this.enableColors){this.colorArray=new Float32Array(_*3);let A=new se(this.colorArray,3);A.setUsage(Wi),o.setAttribute("color",A)}o.boundingSphere=new zn(new U,1)};function u(M,_,b){return M+(_-M)*b}function p(M,_,b,C,A,w,R,k,g,S){let N=(b-R)/(k-R),I=a.normal_cache;l[_+0]=C+N*a.delta,l[_+1]=A,l[_+2]=w,c[_+0]=u(I[M+0],I[M+3],N),c[_+1]=u(I[M+1],I[M+4],N),c[_+2]=u(I[M+2],I[M+5],N),h[_+0]=u(a.palette[g*3+0],a.palette[S*3+0],N),h[_+1]=u(a.palette[g*3+1],a.palette[S*3+1],N),h[_+2]=u(a.palette[g*3+2],a.palette[S*3+2],N)}function m(M,_,b,C,A,w,R,k,g,S){let N=(b-R)/(k-R),I=a.normal_cache;l[_+0]=C,l[_+1]=A+N*a.delta,l[_+2]=w;let B=M+a.yd*3;c[_+0]=u(I[M+0],I[B+0],N),c[_+1]=u(I[M+1],I[B+1],N),c[_+2]=u(I[M+2],I[B+2],N),h[_+0]=u(a.palette[g*3+0],a.palette[S*3+0],N),h[_+1]=u(a.palette[g*3+1],a.palette[S*3+1],N),h[_+2]=u(a.palette[g*3+2],a.palette[S*3+2],N)}function x(M,_,b,C,A,w,R,k,g,S){let N=(b-R)/(k-R),I=a.normal_cache;l[_+0]=C,l[_+1]=A,l[_+2]=w+N*a.delta;let B=M+a.zd*3;c[_+0]=u(I[M+0],I[B+0],N),c[_+1]=u(I[M+1],I[B+1],N),c[_+2]=u(I[M+2],I[B+2],N),h[_+0]=u(a.palette[g*3+0],a.palette[S*3+0],N),h[_+1]=u(a.palette[g*3+1],a.palette[S*3+1],N),h[_+2]=u(a.palette[g*3+2],a.palette[S*3+2],N)}function v(M){let _=M*3;a.normal_cache[_]===0&&(a.normal_cache[_+0]=a.field[M-1]-a.field[M+1],a.normal_cache[_+1]=a.field[M-a.yd]-a.field[M+a.yd],a.normal_cache[_+2]=a.field[M-a.zd]-a.field[M+a.zd])}function d(M,_,b,C,A){let w=C+1,R=C+a.yd,k=C+a.zd,g=w+a.yd,S=w+a.zd,N=C+a.yd+a.zd,I=w+a.yd+a.zd,B=0,q=a.field[C],z=a.field[w],K=a.field[R],W=a.field[g],st=a.field[k],V=a.field[S],tt=a.field[N],Rt=a.field[I];q<A&&(B|=1),z<A&&(B|=2),K<A&&(B|=8),W<A&&(B|=4),st<A&&(B|=16),V<A&&(B|=32),tt<A&&(B|=128),Rt<A&&(B|=64);let wt=Mp[B];if(wt===0)return 0;let X=a.delta,Q=M+X,at=_+X,rt=b+X;wt&1&&(v(C),v(w),p(C*3,0,A,M,_,b,q,z,C,w)),wt&2&&(v(w),v(g),m(w*3,3,A,Q,_,b,z,W,w,g)),wt&4&&(v(R),v(g),p(R*3,6,A,M,at,b,K,W,R,g)),wt&8&&(v(C),v(R),m(C*3,9,A,M,_,b,q,K,C,R)),wt&16&&(v(k),v(S),p(k*3,12,A,M,_,rt,st,V,k,S)),wt&32&&(v(S),v(I),m(S*3,15,A,Q,_,rt,V,Rt,S,I)),wt&64&&(v(N),v(I),p(N*3,18,A,M,at,rt,tt,Rt,N,I)),wt&128&&(v(k),v(N),m(k*3,21,A,M,_,rt,st,tt,k,N)),wt&256&&(v(C),v(k),x(C*3,24,A,M,_,b,q,st,C,k)),wt&512&&(v(w),v(S),x(w*3,27,A,Q,_,b,z,V,w,S)),wt&1024&&(v(g),v(I),x(g*3,30,A,Q,at,b,W,Rt,g,I)),wt&2048&&(v(R),v(N),x(R*3,33,A,M,at,b,K,tt,R,N)),B<<=4;let vt,St,Ft,Ut=0,Ct=0;for(;er[B+Ct]!=-1;)vt=B+Ct,St=vt+1,Ft=vt+2,f(l,c,h,3*er[vt],3*er[St],3*er[Ft]),Ct+=3,Ut++;return Ut}function f(M,_,b,C,A,w){let R=a.count*3;if(a.positionArray[R+0]=M[C],a.positionArray[R+1]=M[C+1],a.positionArray[R+2]=M[C+2],a.positionArray[R+3]=M[A],a.positionArray[R+4]=M[A+1],a.positionArray[R+5]=M[A+2],a.positionArray[R+6]=M[w],a.positionArray[R+7]=M[w+1],a.positionArray[R+8]=M[w+2],a.material.flatShading===!0){let k=(_[C+0]+_[A+0]+_[w+0])/3,g=(_[C+1]+_[A+1]+_[w+1])/3,S=(_[C+2]+_[A+2]+_[w+2])/3;a.normalArray[R+0]=k,a.normalArray[R+1]=g,a.normalArray[R+2]=S,a.normalArray[R+3]=k,a.normalArray[R+4]=g,a.normalArray[R+5]=S,a.normalArray[R+6]=k,a.normalArray[R+7]=g,a.normalArray[R+8]=S}else a.normalArray[R+0]=_[C+0],a.normalArray[R+1]=_[C+1],a.normalArray[R+2]=_[C+2],a.normalArray[R+3]=_[A+0],a.normalArray[R+4]=_[A+1],a.normalArray[R+5]=_[A+2],a.normalArray[R+6]=_[w+0],a.normalArray[R+7]=_[w+1],a.normalArray[R+8]=_[w+2];if(a.enableUvs){let k=a.count*2;a.uvArray[k+0]=M[C+0],a.uvArray[k+1]=M[C+2],a.uvArray[k+2]=M[A+0],a.uvArray[k+3]=M[A+2],a.uvArray[k+4]=M[w+0],a.uvArray[k+5]=M[w+2]}a.enableColors&&(a.colorArray[R+0]=b[C+0],a.colorArray[R+1]=b[C+1],a.colorArray[R+2]=b[C+2],a.colorArray[R+3]=b[A+0],a.colorArray[R+4]=b[A+1],a.colorArray[R+5]=b[A+2],a.colorArray[R+6]=b[w+0],a.colorArray[R+7]=b[w+1],a.colorArray[R+8]=b[w+2]),a.count+=3}this.addBall=function(M,_,b,C,A,w){let R=Math.sign(C);C=Math.abs(C);let k=w!=null,g=new It(M,_,b);if(k)try{g=w instanceof It?w:Array.isArray(w)?new It(Math.min(Math.abs(w[0]),1),Math.min(Math.abs(w[1]),1),Math.min(Math.abs(w[2]),1)):new It(w)}catch{g=new It(M,_,b)}let S=this.size*Math.sqrt(C/A),N=b*this.size,I=_*this.size,B=M*this.size,q=Math.floor(N-S);q<1&&(q=1);let z=Math.floor(N+S);z>this.size-1&&(z=this.size-1);let K=Math.floor(I-S);K<1&&(K=1);let W=Math.floor(I+S);W>this.size-1&&(W=this.size-1);let st=Math.floor(B-S);st<1&&(st=1);let V=Math.floor(B+S);V>this.size-1&&(V=this.size-1);let tt,Rt,wt,X,Q,at,rt,vt,St,Ft,Ut;for(wt=q;wt<z;wt++)for(Q=this.size2*wt,vt=wt/this.size-b,St=vt*vt,Rt=K;Rt<W;Rt++)for(X=Q+this.size*Rt,rt=Rt/this.size-_,Ft=rt*rt,tt=st;tt<V;tt++)if(at=tt/this.size-M,Ut=C/(1e-6+at*at+Ft+St)-A,Ut>0){this.field[X+tt]+=Ut*R;let Ct=Math.sqrt((tt-B)*(tt-B)+(Rt-I)*(Rt-I)+(wt-N)*(wt-N))/S,P=1-Ct*Ct*Ct*(Ct*(Ct*6-15)+10);this.palette[(X+tt)*3+0]+=g.r*P,this.palette[(X+tt)*3+1]+=g.g*P,this.palette[(X+tt)*3+2]+=g.b*P}},this.addPlaneX=function(M,_){let b=this.size,C=this.yd,A=this.zd,w=this.field,R,k,g,S,N,I,B,q=b*Math.sqrt(M/_);for(q>b&&(q=b),R=0;R<q;R++)if(I=R/b,S=I*I,N=M/(1e-4+S)-_,N>0)for(k=0;k<b;k++)for(B=R+k*C,g=0;g<b;g++)w[A*g+B]+=N},this.addPlaneY=function(M,_){let b=this.size,C=this.yd,A=this.zd,w=this.field,R,k,g,S,N,I,B,q,z=b*Math.sqrt(M/_);for(z>b&&(z=b),k=0;k<z;k++)if(I=k/b,S=I*I,N=M/(1e-4+S)-_,N>0)for(B=k*C,R=0;R<b;R++)for(q=B+R,g=0;g<b;g++)w[A*g+q]+=N},this.addPlaneZ=function(M,_){let b=this.size,C=this.yd,A=this.zd,w=this.field,R,k,g,S,N,I,B,q,z=b*Math.sqrt(M/_);for(z>b&&(z=b),g=0;g<z;g++)if(I=g/b,S=I*I,N=M/(1e-4+S)-_,N>0)for(B=A*g,k=0;k<b;k++)for(q=B+k*C,R=0;R<b;R++)w[q+R]+=N},this.setCell=function(M,_,b,C){let A=this.size2*b+this.size*_+M;this.field[A]=C},this.getCell=function(M,_,b){let C=this.size2*b+this.size*_+M;return this.field[C]},this.blur=function(M=1){let _=this.field,b=_.slice(),C=this.size,A=this.size2;for(let w=0;w<C;w++)for(let R=0;R<C;R++)for(let k=0;k<C;k++){let g=A*k+C*R+w,S=b[g],N=1;for(let I=-1;I<=1;I+=2){let B=I+w;if(!(B<0||B>=C))for(let q=-1;q<=1;q+=2){let z=q+R;if(!(z<0||z>=C))for(let K=-1;K<=1;K+=2){let W=K+k;if(W<0||W>=C)continue;let st=A*W+C*z+B,V=b[st];N++,S+=M*(V-S)/N}}}_[g]=S}},this.reset=function(){for(let M=0;M<this.size3;M++)this.normal_cache[M*3]=0,this.field[M]=0,this.palette[M*3]=this.palette[M*3+1]=this.palette[M*3+2]=0},this.update=function(){this.count=0;let M=this.size-2;for(let _=1;_<M;_++){let b=this.size2*_,C=(_-this.halfsize)/this.halfsize;for(let A=1;A<M;A++){let w=b+this.size*A,R=(A-this.halfsize)/this.halfsize;for(let k=1;k<M;k++){let g=(k-this.halfsize)/this.halfsize,S=w+k;d(g,R,C,S,this.isolation)}}}this.geometry.setDrawRange(0,this.count),o.getAttribute("position").needsUpdate=!0,o.getAttribute("normal").needsUpdate=!0,this.enableUvs&&(o.getAttribute("uv").needsUpdate=!0),this.enableColors&&(o.getAttribute("color").needsUpdate=!0),this.count/3>r&&console.warn("THREE.MarchingCubes: Geometry buffers too small for rendering. Please create an instance with a higher poly count.")},this.init(t)}},Mp=new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]),er=new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,-1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,-1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,-1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,-1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,-1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);function ul(i,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],p=["setX","setY","setZ","setW"];for(let M=0,_=a.length;M<_;M++){let b=a[M],C=i.attributes[b];l[b]=new C.constructor(new C.array.constructor(C.count*C.itemSize),C.itemSize,C.normalized);let A=i.morphAttributes[b];A&&(c[b]||(c[b]=[]),A.forEach((w,R)=>{let k=new w.array.constructor(w.count*w.itemSize);c[b][R]=new w.constructor(k,w.itemSize,w.normalized)}))}let m=t*.5,x=Math.log10(1/t),v=Math.pow(10,x),d=m*v;for(let M=0;M<r;M++){let _=n?n.getX(M):M,b="";for(let C=0,A=a.length;C<A;C++){let w=a[C],R=i.getAttribute(w),k=R.itemSize;for(let g=0;g<k;g++)b+=`${~~(R[u[g]](_)*v+d)},`}if(b in e)h.push(e[b]);else{for(let C=0,A=a.length;C<A;C++){let w=a[C],R=i.getAttribute(w),k=i.morphAttributes[w],g=R.itemSize,S=l[w],N=c[w];for(let I=0;I<g;I++){let B=u[I],q=p[I];if(S[q](o,R[B](_)),k)for(let z=0,K=k.length;z<K;z++)N[z][q](o,k[z][B](_))}}e[b]=o,h.push(o),o++}}let f=i.clone();for(let M in i.attributes){let _=l[M];if(f.setAttribute(M,new _.constructor(_.array.slice(0,o*_.itemSize),_.itemSize,_.normalized)),M in c)for(let b=0;b<c[M].length;b++){let C=c[M][b];f.morphAttributes[M][b]=new C.constructor(C.array.slice(0,o*C.itemSize),C.itemSize,C.normalized)}}return f.setIndex(h),f}var Gn=Math.PI*2,Sp=(i,t,e)=>Math.min(e,Math.max(t,i));function ir(i,t,e=0){i.rotY+=i.velY*t,i.rotX+=i.velX*t;let n=Math.exp(-t*2.4);i.velY=e+(i.velY-e)*n,i.velX*=n}function Io(i,{reduced:t=!1,lite:e=!1,onPulse:n=()=>{},onReady:s=()=>{},build:r,pose:o,initial:a={},fitAspect:l=1,halo:c=.72,haloSize:h=6.5,pulseSpin:u=Gn*2.4,studio:p="strips"}){let m=e?1.5:2,x=Math.min(window.devicePixelRatio||1,m),v=new Vs({canvas:i,antialias:x<2,alpha:!0,powerPreference:"high-performance"});v.setPixelRatio(x),v.outputColorSpace=Ce,v.toneMapping=vo,v.toneMappingExposure=1.2;let d=new ki,f=new ve(32,1,.1,100);f.position.set(0,0,8.2);let M=new Si(v),_=Ep(p);d.environment=M.fromScene(_,.02).texture,_.traverse(it=>{it.geometry?.dispose(),it.material?.dispose()}),M.dispose();let{chrome:b,rim:C,uniforms:A,rimUniforms:w}=bp(),R=new He,k=new He,g=new He,S=new He;d.add(R),R.add(k),k.add(g),g.add(S);let N=new Ei("#a9c8ff",2.6);N.position.set(-4,1.5,-3);let I=new Ei("#d6ccff",2.6);I.position.set(4,-1,-3);let B=new Ei("#ffffff",1.1);B.position.set(1,4,5),d.add(N,I,B);let q=new Gs(new Vi({map:wp(),transparent:!0,opacity:.38,depthWrite:!1,blending:pi}));q.scale.setScalar(h),q.position.z=-2,d.add(q);let z=new qs(.96,1,128),K=[];function W(){let it=K.find(_t=>!_t.active);if(!it){let _t=new oe(z,new Ze({color:14214911,transparent:!0,depthWrite:!1,blending:pi,side:Ue}));d.add(_t),it={mesh:_t,active:!1,t:0},K.push(it)}it.active=!0,it.t=0,it.mesh.visible=!0}let st=o,V={rotX:0,rotY:0,velX:0,velY:0,tiltX:0,tiltY:0,tTiltX:0,tTiltY:0,scale:t?1:.35,scaleVel:0,pulse:0,glow:0,squash:-1,dragging:!1,visible:!1,ready:!1,...a};Promise.resolve(r({lite:e})).then(async({geometry:it,source:_t})=>{let yt=new oe(it,b),kt=new oe(it,C);if(kt.renderOrder=1,S.add(yt,kt),_t&&(i.dataset.source=_t),v.extensions.has("KHR_parallel_shader_compile"))try{await v.compileAsync(d,f)}catch{}V.ready=!0,t||(V.glow=1,V.scaleVel=2),i.closest("[data-stage]")?.classList.add("is-ready"),Ut(),s()});let tt=null;i.addEventListener("pointerdown",it=>{i.setPointerCapture(it.pointerId);let _t=performance.now();tt={lx:it.clientX,ly:it.clientY,lt:_t,t:_t,moved:0},V.dragging=!0,Ut()}),i.addEventListener("pointermove",it=>{if(!tt)return;let _t=performance.now(),yt=it.clientX-tt.lx,kt=it.clientY-tt.ly,Tt=Math.max(_t-tt.lt,8)/1e3;tt.moved+=Math.abs(yt)+Math.abs(kt),V.rotY+=yt*.008,V.rotX=Sp(V.rotX+kt*.006,-.9,.9),V.velY=yt*.008/Tt,V.velX=kt*.006/Tt,tt.lx=it.clientX,tt.ly=it.clientY,tt.lt=_t},{passive:!0});let Rt=it=>{if(!tt)return;let _t=performance.now()-tt.t<350;tt.moved<8&&_t&&it.type==="pointerup"&&wt(),performance.now()-tt.lt>80&&(V.velX=0,V.velY=0),tt=null,V.dragging=!1};i.addEventListener("pointerup",Rt),i.addEventListener("pointercancel",Rt),i.addEventListener("keydown",it=>{Ut(),it.key==="Enter"||it.key===" "?(it.preventDefault(),wt()):it.key==="ArrowLeft"?(V.velY-=3,it.preventDefault()):it.key==="ArrowRight"?(V.velY+=3,it.preventDefault()):it.key==="ArrowUp"?(V.velX-=2,it.preventDefault()):it.key==="ArrowDown"&&(V.velX+=2,it.preventDefault())}),t||window.addEventListener("pointermove",it=>{!V.visible||it.pointerType==="touch"||(V.tTiltY=(it.clientX/window.innerWidth-.5)*.8,V.tTiltX=(it.clientY/window.innerHeight-.5)*.5)},{passive:!0});function wt(){V.squash>=0&&V.squash<.12||(V.squash=0,V.glow=1,t||(V.pulse=1,V.velY+=u*(V.velY<0?-1:1),W()),n(),Ut())}let X=0,Q=0,at=()=>{X=i.clientWidth,Q=i.clientHeight,!(!X||!Q)&&(v.setSize(X,Q,!1),f.aspect=X/Q,f.updateProjectionMatrix(),R.scale.setScalar(Math.min(1,f.aspect/l)),Ut())};new ResizeObserver(at).observe(i),at(),new IntersectionObserver(([it])=>{V.visible=it.isIntersecting,Ut()},{threshold:0}).observe(i),document.addEventListener("visibilitychange",Ut);let rt=new Ks,vt=0,St=0,Ft=0;function Ut(){V.visible&&!document.hidden&&!vt&&(rt.getDelta(),vt=requestAnimationFrame(Ct))}function Ct(){if(vt=0,!V.visible||document.hidden)return;let it=rt.getDelta(),_t=Math.min(it,1/20),yt=rt.elapsedTime;A.uTime.value=yt,x>1&&!t&&(Ft++,it>1/34&&St++,Ft===90&&(St>45&&(x=Math.max(1,x-.5),v.setPixelRatio(x),at()),Ft=0,St=0));let kt=!1;V.dragging||(kt=st(V,yt,_t,t)),g.rotation.set(V.rotX,V.rotY,0);let Tt=1-Math.exp(-_t*4);V.tiltX+=(V.tTiltX-V.tiltX)*Tt,V.tiltY+=(V.tTiltY-V.tiltY)*Tt,k.rotation.set(V.tiltX,V.tiltY,0),k.position.y=t?0:Math.sin(yt*1.1)*.06;let T=t?.05:.12;if(V.squash>=0)if(V.squash+=_t,V.squash<T){let O=V.squash/T;V.scale=1-(t?.04:.2)*O*O,V.scaleVel=0}else V.squash-_t<T&&(V.scaleVel=t?0:5),V.squash>T+1.6&&(V.squash=-1);if(V.squash<0||V.squash>=T){let O=-140*(V.scale-1)-9*V.scaleVel;V.scaleVel+=O*_t,V.scale+=V.scaleVel*_t}S.scale.setScalar(V.scale),V.pulse*=Math.exp(-_t*2.6),V.glow*=Math.exp(-_t*3),A.uPulse.value=V.pulse,w.uIntensity.value=.6+V.glow*2,q.material.opacity=.3+V.glow*.5+(t?0:Math.sin(yt*1.3)*.04),q.material.color.setHSL((c+(t?0:Math.sin(yt*.2)*.06)+1)%1,.45,.62);for(let O of K){if(!O.active)continue;O.t+=_t;let Z=O.t/1.1;O.mesh.scale.setScalar(1.2+Z*3.4),O.mesh.material.opacity=Math.max(0,1-Z)*.7,Z>=1&&(O.active=!1,O.mesh.visible=!1)}v.render(d,f),t&&kt&&V.ready&&!V.dragging&&V.squash<0&&V.glow<.01&&Math.abs(V.velY)<.01&&Math.abs(V.velX)<.01||(vt=requestAnimationFrame(Ct))}Ut();function P(){V.visible=!1,vt&&cancelAnimationFrame(vt),v.dispose(),v.forceContextLoss()}function ge(it,_t=()=>{}){st=it,_t(V,rt.elapsedTime),at(),Ut()}return{pulse:wt,dispose:P,setPose:ge,resize:at}}function bp(){let i={uTime:{value:0},uPulse:{value:0}},t=`
    float w = sin(position.x * 2.4 - uTime * 9.0) * 0.65 + sin(position.y * 3.1 + uTime * 7.0) * 0.35;
    transformed.z += w * uPulse * 0.28;
    transformed.xy *= 1.0 + w * uPulse * 0.035;`,e=new Js({color:16777215,metalness:1,roughness:.06,clearcoat:1,clearcoatRoughness:.03,envMapIntensity:1.6});e.onBeforeCompile=r=>{r.uniforms.uTime=i.uTime,r.uniforms.uPulse=i.uPulse,r.vertexShader=`uniform float uTime;
uniform float uPulse;
`+r.vertexShader.replace("#include <begin_vertex>","#include <begin_vertex>"+t)};let n={...i,uC1:{value:new It("#9fc2ff")},uC2:{value:new It("#ffffff")},uC3:{value:new It("#c6b5ff")},uIntensity:{value:.6}},s=new Ne({uniforms:n,transparent:!0,depthWrite:!1,blending:pi,vertexShader:`
      uniform float uTime; uniform float uPulse;
      varying vec3 vN; varying vec3 vV; varying vec3 vW;
      void main() {
        vec3 objectNormal = normal;
        vec3 transformed = position;
        ${t}
        vec4 mv = modelViewMatrix * vec4(transformed, 1.0);
        vN = normalize(normalMatrix * objectNormal);
        vV = normalize(-mv.xyz);
        vW = normalize((modelMatrix * vec4(objectNormal, 0.0)).xyz);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform vec3 uC1; uniform vec3 uC2; uniform vec3 uC3; uniform float uIntensity;
      varying vec3 vN; varying vec3 vV; varying vec3 vW;
      void main() {
        float f = pow(1.0 - clamp(abs(dot(normalize(vN), normalize(vV))), 0.0, 1.0), 2.4);
        float t = vW.x * 0.5 + 0.5;
        vec3 col = mix(uC1, uC2, smoothstep(0.1, 0.7, t));
        col = mix(col, uC3, smoothstep(0.55, 1.0, vW.y * 0.5 + 0.5) * 0.6);
        gl_FragColor = vec4(col * f * uIntensity, 1.0);
      }`});return{chrome:e,rim:s,uniforms:i,rimUniforms:n}}function Ep(i){let t=new ki,e=new oe(new kn(20,20,20),new Ze({color:724244,side:me}));t.add(e);let n=(s,r,o,a,l,c)=>{let h=new oe(new Mi(s,r),new Ze({color:o,side:Ue}));h.material.color.multiplyScalar(a),h.position.set(...l),h.lookAt(...c),t.add(h)};if(n(12,3,16777215,5,[0,8,1],[0,0,0]),n(2,14,14674175,4.5,[-8.5,0,2],[0,0,0]),n(2,14,15855103,5,[8.5,0,1],[0,0,0]),n(6,2,16777215,3,[3,-6,-6],[0,0,0]),n(9,1.2,9090303,1.6,[0,-8,2],[0,0,0]),i==="soft")return n(10,5,16777215,4.2,[-3,2,9],[0,0,0]),n(6,3,14674175,2.6,[4,3.5,7],[0,0,0]),n(4,9,15134463,2.4,[5,-1,8],[0,0,0]),n(14,.9,16777215,3,[0,4.2,8],[0,0,0]),t;n(1.1,12,16777215,4,[-5.5,0,8],[0,0,0]),n(.5,12,16777215,6,[-2.2,0,9],[0,0,0]),n(2.4,12,14673919,2.2,[1.4,0,9.5],[0,0,0]),n(.4,12,13623551,5,[4.2,0,8.6],[0,0,0]),n(1.2,12,14998783,3.5,[6.6,0,7],[0,0,0]),n(14,1.4,16777215,2.5,[0,3.2,9],[0,0,0]);for(let s=0;s<6;s++){let r=s/6*Gn;n(.5,.5,16777215,8,[Math.cos(r)*9,Math.sin(r*2)*4,Math.sin(r)*9],[0,0,0])}return t}function wp(){let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,.35)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128);let n=new Ws(i);return n.colorSpace=Ce,n}var Xi=[.1032,.0423,.0488,-.0823,.0532,.0484,.1109,.0576,.0457,-.0735,.0401,.0445,-.045,-.0445,.0442,-.0834,.0686,.0439,.1043,.0269,.0437,-.067,.0236,.043,-.0615,.0049,.043,-.056,-.0126,.043,.236,-.006,.0429,-.0516,-.028,.0429,.1185,.0708,.0417,.2162,-.0708,.0415,-.2876,.0697,.0411,.2557,.0708,.041,.2513,.0554,.041,-.292,.0532,.041,-.2963,.0379,.041,-.3007,.0225,.041,.1021,.0093,.041,.2382,.0082,.041,-.3106,-.0126,.041,.2294,-.0225,.041,.225,-.0379,.041,.2206,-.0532,.041,-.326,-.0675,.041,.0801,-.0697,.041,.247,.0401,.0407,.2426,.0247,.0407,-.3051,.0071,.0407,.0977,-.0071,.0407,.0933,-.0225,.0407,-.315,-.028,.0407,.0889,-.0379,.0407,-.3194,-.0434,.0407,.0845,-.0543,.0407,.3743,.0532,.0401,.371,.0379,.0393,.0889,.0434,.0375,-.0472,-.0576,.0375,.3721,.0664,.0374,-.0955,.0477,.0373,.3655,.0258,.0371,-.0922,.0774,.0351,-.3348,-.0774,.0351,.0977,.0587,.0349,-.0746,.0774,.0349,-.0318,-.0434,.0342,-.2788,.0785,.034,.1284,.0785,.034,-.3205,-.0785,.034,.0713,-.0785,.034,.2063,-.0785,.034,.3589,.0148,.0338,.2656,.0785,.0337,-.2952,.0796,.0329,.248,.0796,.0329,.0878,-.0785,.0329,.225,-.0785,.0329,.247,-.0093,.0326,.3655,.0763,.0323,-.0505,-.0686,.0323,.1098,.0785,.0317,.0922,.0159,.0307,.248,.0016,.0307,.3512,.0071,.0304,-.1921,.0818,.0304,.0779,.0423,.0297,.3852,.0554,.0296,-.1054,.0423,.0292,-.0329,-.0543,.0287,-.0999,.084,.0285,-.0845,.084,.0285,.1185,.084,.0285,.3633,.0609,.0285,-.3435,-.084,.0285,.2151,-.084,.0285,-.27,.084,.0281,.0626,-.084,.0281,.3776,.0752,.0279,.3721,.0181,.0279,.1372,.084,.0278,-.0516,-.0785,.0277,-.022,-.0423,.0275,-.2865,.0851,.0274,.2568,.0851,.0274,.2733,.0851,.0274,-.3282,-.0851,.0274,-.3128,-.0851,.0274,.079,-.0851,.0274,.1976,-.0851,.0274,-.3776,.0851,.0272,-.1921,.0719,.0271,.3578,.0829,.027,.3435,5e-4,.0269,.2316,-.0851,.0264,-.068,.0851,.0264,.0944,-.0851,.0264,-.3029,.0862,.0263,.2415,.0862,.0263,-.101,.073,.0263,.36,.0521,.0263,-.3117,-.0752,.0263,.0911,.0653,.0256,-.383,.0763,.0253,-.2009,.0862,.0253,.2557,-.0115,.0253,.1273,.0873,.0252,.2327,-.073,.0252,-.1844,.0873,.0247,-.112,.0368,.0242,.0691,.0401,.0242,-.2777,.0884,.0241,-.0922,.0884,.0241,-.0768,.0884,.0241,-.304,.0774,.0241,.0702,-.0884,.0241,.2063,-.0884,.0241,.2228,-.0884,.0241,.0988,.0774,.0241,.0845,.0598,.0241,-.0263,-.0346,.0241,-.0241,-.051,.0241,-.034,-.0631,.0241,-.0428,-.0741,.0241,-.191,.0631,.024,.3512,.0884,.0237,.3359,-.0049,.0237,-.3512,-.0884,.0236,-.3874,.0675,.0235,-.3688,.0884,.0233,-.0538,-.0873,.0232,-.2952,.0895,.023,-.2634,.0895,.023,-.1076,.0895,.023,.1438,.0895,.023,.2491,.0895,.023,.2645,.0895,.023,.0977,-.0774,.023,-.337,-.0895,.023,-.3205,-.0895,.023,.0549,-.0895,.023,.0867,-.0895,.023,-.0143,-.0401,.0226,.1032,.0851,.0225,.3863,.0741,.0225,.0746,.0499,.0225,.371,.0093,.0225,.281,.0895,.0222,.1899,-.0895,.0221,-.3095,.0905,.022,-.2085,.0905,.022,-.1943,.0905,.022,.2371,.0796,.022,.3929,.0565,.022,.0834,.0159,.022,.2568,.0016,.022,-.3073,-.0905,.022,.2371,-.0905,.022,.0999,-.0905,.0219,-.3918,.0609,.0212,.0922,.0741,.021,.0779,.0565,.021,.3282,-.0082,.021,-.0263,-.0587,.021,-.0362,-.0708,.021,-.3622,.0916,.0209,-.2711,.0916,.0209,-.0999,.0916,.0209,-.0856,.0916,.0209,-.0648,.0916,.0209,.1163,.0916,.0209,.1339,.0916,.0209,.2349,.0916,.0209,.3446,.0916,.0209,.3556,.0631,.0209,.2371,-.0796,.0209,-.3062,-.0807,.0209,-.3446,-.0916,.0209,.0626,-.0916,.0209,.2129,-.0916,.0209,-.383,.0905,.0207,.383,.0807,.0202,-.1174,.0313,.0202,.3776,.0126,.0202,-.1548,-.0916,.0201,-.1921,.0554,.02,.0626,.0368,.0198,.2634,-.0137,.0198,-.3765,.0927,.0198,-.2887,.0927,.0198,-.2568,.0927,.0198,-.18,.0927,.0198,.1504,.0927,.0198,.2557,.0927,.0198,.2711,.0927,.0198,-.3578,-.0927,.0198,-.3304,-.0927,.0198,-.3139,-.0927,.0198,.0757,-.0927,.0198,.0933,-.0927,.0198,.1965,-.0927,.0198,.2283,-.0927,.0198,-.2151,.0927,.0195,-.371,.0807,.0194,-.3765,.0741,.0194,.2557,-.0192,.0194,-.0077,-.0379,.0194,-.0165,-.0488,.0194,-.0461,-.0851,.0194,.0483,-.0927,.0192,.3216,-.0115,.0189,-.3161,.0927,.0187,-.3556,.0938,.0187,-.3029,.0938,.0187,-.2821,.0938,.0187,-.202,.0938,.0187,-.1877,.0938,.0187,-.113,.0938,.0187,-.0724,.0938,.0187,.1229,.0938,.0187,.2415,.0938,.0187,.2865,.0938,.0187,-.1087,.073,.0187,.3523,.0532,.0187,.2393,-.073,.0187,.1021,-.0829,.0187,.1833,-.0938,.0187,.0856,.0697,.0186,-.3809,.0675,.0186,.067,.0466,.0186,-.3962,.0554,.0184,-.056,-.0938,.0184,-.1537,-.0851,.0182,.1054,-.0938,.0182,.338,.0938,.018,.2437,-.0938,.018,-.3852,.0609,.0179,-.1218,.0258,.0179,.3304,-.0016,.0179,-.0395,-.0796,.0179,-.2502,.0938,.0177,-.3007,-.0938,.0177,-.3699,.0949,.0176,-.349,.0949,.0176,-.2261,.0949,.0176,-.0944,.0949,.0176,-.0801,.0949,.0176,.1394,.0949,.0176,.2777,.0949,.0176,.3501,.0949,.0176,-.3106,.0774,.0176,.3348,-.0115,.0176,.315,-.0137,.0176,-.3029,-.0752,.0176,-.3512,-.0949,.0176,-.3238,-.0949,.0176,-.1602,-.0949,.0176,.068,-.0949,.0176,.0823,-.0949,.0176,.203,-.0949,.0176,.2184,-.0949,.0176,-.3424,.0949,.0174,-.3227,.0949,.0174,.056,.0346,.0174,.2294,.0949,.0172,-.1493,-.0949,.0172,-.3633,.0851,.0171,.0933,.0818,.0171,.079,.0642,.0171,-.0011,-.0335,.0171,-.0099,-.0445,.0171,-.0187,-.0554,.0171,-.0285,-.0675,.0171,-.0494,-.0916,.0171,.27,-.0148,.0168,-.1526,-.0785,.0167,-.2437,.0949,.0166,-.1251,.0192,.0166,-.1273,.0115,.0166,-.1295,.0038,.0166,-.3359,.096,.0165,-.3293,.096,.0165,-.2974,.096,.0165,-.2766,.096,.0165,-.2667,.096,.0165,-.2371,.096,.0165,-.1965,.096,.0165,-.1745,.096,.0165,-.1076,.096,.0165,.1284,.096,.0165,.1559,.096,.0165,.247,.096,.0165,.2612,.096,.0165,.292,.096,.0165,.3304,.096,.0165,.2316,.0829,.0165,.3984,.0543,.0165,.0516,.0302,.0165,.3051,-.0159,.0165,.1043,-.0774,.0165,-.3644,-.096,.0165,-.3402,-.096,.0165,.0428,-.096,.0165,.0538,-.096,.0165,.1888,-.096,.0165,.2338,-.096,.0165,.0988,.0895,.0163,-.2129,.0862,.0163,.3896,.0796,.0163,.0702,.0543,.0163,.0615,.0434,.0163,.0472,.0258,.0163,.0428,.0203,.0163,.0384,.0148,.0163,.034,.0093,.0163,.3765,.006,.0163,.0296,.0038,.0163,.0252,-.0016,.0163,-.1317,-.0038,.0163,.0209,-.0071,.0163,-.1339,-.0115,.0163,.0165,-.0126,.0163,.0121,-.0181,.0163,-.1361,-.0192,.0163,.0077,-.0236,.0163,-.1383,-.0269,.0163,-.0209,-.0291,.0163,.0033,-.0291,.0163,-.1405,-.0346,.0163,-.1427,-.0423,.0163,-.1449,-.0499,.0163,-.1471,-.0576,.0163,-.1493,-.0653,.0163,.1778,-.096,.0163,-.1504,-.0708,.016,.2755,-.0159,.0157,-.3863,.0949,.0155,.3402,.0884,.0155,.0878,.0774,.0155,.0735,.0598,.0155,.3249,-.0038,.0155,-.022,-.062,.0155,-.0318,-.0741,.0155,.2996,-.0159,.0154,-.3644,.0971,.0154,-.3128,.0971,.0154,-.3073,.0971,.0154,-.292,.0971,.0154,-.2612,.0971,.0154,-.2316,.0971,.0154,-.2206,.0971,.0154,-.2118,.0971,.0154,-.2063,.0971,.0154,-.1833,.0971,.0154,-.1174,.0971,.0154,-.1021,.0971,.0154,-.0889,.0971,.0154,-.068,.0971,.0154,.1152,.0971,.0154,.1339,.0971,.0154,.1449,.0971,.0154,.2349,.0971,.0154,.2524,.0971,.0154,.2667,.0971,.0154,.2974,.0971,.0154,.3029,.0971,.0154,.3084,.0971,.0154,.3139,.0971,.0154,.3194,.0971,.0154,.3249,.0971,.0154,.3424,.0971,.0154,.3501,.0631,.0154,.0768,.0159,.0154,.2634,.0016,.0154,.281,-.0159,.0154,.2865,-.0159,.0154,.292,-.0159,.0154,.2426,-.0774,.0154,-.3007,-.0807,.0154,-.3457,-.0971,.0154,-.3348,-.0971,.0154,-.3183,-.0971,.0154,-.3106,-.0971,.0154,-.3051,-.0971,.0154,-.1657,-.0971,.0154,-.1548,-.0971,.0154,.0593,-.0971,.0154,.0878,-.0971,.0154,.0966,-.0971,.0154,.2085,-.0971,.0154,.2239,-.0971,.0154,.2393,-.0971,.0154,.248,-.0971,.0154,-.4006,.051,.0153,-.0604,.096,.0152,-.1866,.0521,.0152,.1098,-.0971,.0149,-.2524,.0884,.0148,.3863,.0851,.0148,-.3655,.0796,.0148,-.1954,.051,.0148,.382,.0093,.0148,-.2963,-.0971,.0146,.0373,-.0971,.0143,-.3798,.0982,.0143,-.3743,.0982,.0143,-.3589,.0982,.0143,-.3183,.0982,.0143,-.2865,.0982,.0143,-.2557,.0982,.0143,-.191,.0982,.0143,-.0757,.0982,.0143,.1504,.0982,.0143,.1613,.0982,.0143,.225,.0982,.0143,.2722,.0982,.0143,.2821,.0982,.0143,.3578,.0971,.0143,.3479,.0697,.0143,.3995,.0653,.0143,.3995,.0455,.0143,.3282,-.0159,.0143,.3194,-.017,.0143,-.3699,-.0982,.0143,-.3589,-.0982,.0143,-.3293,-.0982,.0143,-.1449,-.0982,.0143,.0483,-.0982,.0143,.0724,-.0982,.0143,.0779,-.0982,.0143,.1021,-.0982,.0143,.1723,-.0982,.0143,.1943,-.0982,.0143,.214,-.0982,.0143,.0812,.0719,.014,-.3721,.0708,.014,-.3765,.0653,.014,-.0033,-.0412,.014,-.0121,-.0521,.014,-.0417,-.0884,.014,-.191,.0488,.0136,-.0593,-.0982,.0133,-.3677,.0752,.0132,-.3809,.0587,.0132,-.3841,.0554,.0132,-.3885,.0521,.0132,.0637,.051,.0132,.0549,.0401,.0132,.3874,.0137,.0132,.3282,.0027,.0132,.2601,-.0236,.0132,-.034,-.0807,.0132,-.0373,-.084,.0132,-.1635,-.0916,.0132,.2535,-.0982,.0132,-.3534,.0993,.0132,-.3468,.0993,.0132,-.3402,.0993,.0132,-.3326,.0993,.0132,-.326,.0993,.0132,-.3029,.0993,.0132,-.281,.0993,.0132,-.2733,.0993,.0132,-.2502,.0993,.0132,-.2415,.0993,.0132,-.2162,.0993,.0132,-.202,.0993,.0132,-.1789,.0993,.0132,-.113,.0993,.0132,-.0977,.0993,.0132,-.0845,.0993,.0132,-.0637,.0993,.0132,.1196,.0993,.0132,.1251,.0993,.0132,.2393,.0993,.0132,.2568,.0993,.0132,.2876,.0993,.0132,.3337,.0993,.0132,.3468,.0993,.0132,-.3337,.0916,.0132,-.2404,.0916,.0132,-.2349,.0916,.0132,.2283,.0796,.0132,-.1141,.073,.0132,.4017,.0587,.0132,.3468,.0543,.0132,.2722,-.0192,.0132,.2952,-.0192,.0132,.2448,-.073,.0132,-.1482,-.0763,.0132,.1076,-.0807,.0132,-.1482,-.0818,.0132,.2448,-.0818,.0132,-.3534,-.0993,.0132,-.3007,-.0993,.0132,-.1712,-.0993,.0132,.0329,-.0993,.0132,.0637,-.0993,.0132,.0922,-.0993,.0132,.1811,-.0993,.0132,.1998,-.0993,.0132,.2283,-.0993,.0132,.2437,-.0993,.0132,-.1701,.0982,.0128,.1668,.0993,.0125,-.3754,-.0993,.0125,.1679,-.0993,.0125,.0944,.0905,.0124,-.2173,.0851,.0124,.09,.0851,.0124,.3907,.084,.0124,-.36,.0818,.0124,-.214,.0818,.0124,.394,.0807,.0124,.0757,.0675,.0124,.0494,.0346,.0124,.0483,.0203,.0124,.0439,.0148,.0124,.0395,.0093,.0124,.3809,.0049,.0124,.0351,.0038,.0124,.3776,.0016,.0124,.0307,-.0016,.0124,.3205,-.0038,.0124,.0252,-.0082,.0124,.0121,-.0115,.0124,.0209,-.0137,.0124,.0077,-.017,.0124,.0165,-.0192,.0124,.0033,-.0225,.0124,.0121,-.0247,.0124,.0077,-.0302,.0124,.0033,-.0357,.0124,-.0066,-.0477,.0124,-.0154,-.0587,.0124,-.0252,-.0708,.0124,-.3666,-.0916,.0124,-.0439,-.0927,.0124,.0395,-.0927,.0124,-.292,-.0982,.0123,.1141,-.0982,.0123,-.3699,.1004,.0121,-.2985,.1004,.0121,-.2689,.1004,.0121,-.2645,.1004,.0121,-.2459,.1004,.0121,-.2371,.1004,.0121,-.2283,.1004,.0121,-.2239,.1004,.0121,-.1976,.1004,.0121,-.1866,.1004,.0121,-.1745,.1004,.0121,-.1207,.1004,.0121,-.1087,.1004,.0121,-.0933,.1004,.0121,-.0801,.1004,.0121,-.0713,.1004,.0121,.1295,.1004,.0121,.1372,.1004,.0121,.1416,.1004,.0121,.1548,.1004,.0121,.2294,.1004,.0121,.2437,.1004,.0121,.248,.1004,.0121,.2612,.1004,.0121,.2766,.1004,.0121,.292,.1004,.0121,.3282,.1004,.0121,.338,.1004,.0121,.3512,.1004,.0121,-.3293,.0905,.0121,-.3424,.0895,.0121,-.3161,.0774,.0121,.4028,.0543,.0121,.2952,-.0126,.0121,.3348,-.017,.0121,.3139,-.0192,.0121,.2766,-.0203,.0121,.281,-.0203,.0121,.2854,-.0203,.0121,.2898,-.0203,.0121,.2996,-.0203,.0121,.304,-.0203,.0121,-.2974,-.0752,.0121,-.2974,-.084,.0121,-.3655,-.1004,.0121,-.349,-.1004,.0121,-.3424,-.1004,.0121,-.338,-.1004,.0121,-.3249,-.1004,.0121,-.315,-.1004,.0121,-.1624,-.1004,.0121,-.158,-.1004,.0121,-.1515,-.1004,.0121,.0406,-.1004,.0121,.0527,-.1004,.0121,.068,-.1004,.0121,.0823,-.1004,.0121,.1065,-.1004,.0121,.1767,-.1004,.0121,.1855,-.1004,.0121,.1899,-.1004,.0121,.2041,-.1004,.0121,.2184,-.1004,.0121,.2327,-.1004,.0121,-.1756,-.1004,.0119,.0285,-.1004,.0119,.2206,.0993,.0117,.1613,.0938,.0117,.3359,.0873,.0117,.3391,.084,.0117,.067,.0576,.0117,.0582,.0466,.0117,.045,.0302,.0117,.0527,.0247,.0117,.0395,.0236,.0117,.0351,.0181,.0117,.0307,.0126,.0117,.0263,.0071,.0117,.022,.0016,.0117,.3238,5e-4,.0117,.0176,-.0038,.0117,-.0176,-.0258,.0117,-.0209,-.0664,.0117,.1756,-.0916,.0117,-.1405,-.0993,.0117,-.3995,.0466,.0115,.2579,-.1004,.0112,-.3776,.1015,.011,-.3655,.1015,.011,-.3611,.1015,.011,-.3567,.1015,.011,-.3501,.1015,.011,-.3435,.1015,.011,-.337,.1015,.011,-.3293,.1015,.011,-.3227,.1015,.011,-.3161,.1015,.011,-.3117,.1015,.011,-.3073,.1015,.011,-.2941,.1015,.011,-.2898,.1015,.011,-.2843,.1015,.011,-.2777,.1015,.011,-.2601,.1015,.011,-.2535,.1015,.011,-.2327,.1015,.011,-.2195,.1015,.011,-.2129,.1015,.011,-.2085,.1015,.011,-.1932,.1015,.011,-.1822,.1015,.011,-.1163,.1015,.011,-.1043,.1015,.011,-.0889,.1015,.011,-.067,.1015,.011,.1141,.1015,.011,.146,.1015,.011,.1591,.1015,.011,.1635,.1015,.011,.1701,.1015,.011,.2338,.1015,.011,.2524,.1015,.011,.2656,.1015,.011,.27,.1015,.011,.2843,.1015,.011,.2963,.1015,.011,.3007,.1015,.011,.3051,.1015,.011,.3095,.1015,.011,.3139,.1015,.011,.3183,.1015,.011,.3227,.1015,.011,.3424,.1015,.011,.3029,.0927,.011,.3073,.0927,.011,.3117,.0927,.011,.3161,.0927,.011,.2261,.0829,.011,.3457,.0631,.011,-.405,.051,.011,-.1976,.0477,.011,.0724,.0159,.011,.2678,.0016,.011,.2799,-.0115,.011,.2843,-.0115,.011,.2887,-.0115,.011,.3216,-.0203,.011,.247,-.0763,.011,.1098,-.0774,.011,-.2963,-.0796,.011,-.3798,-.1004,.011,.1635,-.1004,.011,-.3721,-.1015,.011,-.3611,-.1015,.011,-.3567,-.1015,.011,-.3337,-.1015,.011,-.3205,-.1015,.011,-.3106,-.1015,.011,-.3062,-.1015,.011,-.1679,-.1015,.011,-.1471,-.1015,.011,-.0571,-.1015,.011,.0362,-.1015,.011,.045,-.1015,.011,.0571,-.1015,.011,.0746,-.1015,.011,.0867,-.1015,.011,.0955,-.1015,.011,.0999,-.1015,.011,.1965,-.1015,.011,.2085,-.1015,.011,.2228,-.1015,.011,.2371,-.1015,.011,.247,-.1015,.011,.2513,-.1015,.011,-.3896,.0982,.0109,.3885,.0884,.0109,.0845,.0807,.0109,-.3622,.0774,.0109,.0702,.0631,.0109,.3852,.0071,.0109,-.0285,-.0774,.0109,-.1679,-.0927,.0109,-.371,-.0938,.0109,-.0582,.1004,.0108,-.1833,.0488,.0108,-.18,-.1015,.0104,.1745,.1015,.0101,.0955,.0949,.0101,-.2491,.0851,.0101,.0801,.0763,.0101,-.3688,.0686,.0101,-.3732,.0631,.0101,-.4039,.0466,.0101,0,-.0434,.0101,-.0088,-.0543,.0101,-.0384,-.0905,.0101,.2535,-.0938,.0101,-.1712,-.0949,.0101,.0329,-.0949,.0101,-.045,-.0971,.0101,.1174,-.1004,.0101,.0241,-.1015,.0099,-.3743,.1026,.0099,-.3337,.1026,.0099,-.3194,.1026,.0099,-.304,.1026,.0099,-.2744,.1026,.0099,-.2568,.1026,.0099,-.2491,.1026,.0099,-.2426,.1026,.0099,-.2052,.1026,.0099,-.2009,.1026,.0099,-.1899,.1026,.0099,-.1778,.1026,.0099,-.112,.1026,.0099,-.101,.1026,.0099,-.0966,.1026,.0099,-.0856,.1026,.0099,-.0768,.1026,.0099,-.0626,.1026,.0099,.1174,.1026,.0099,.1218,.1026,.0099,.1262,.1026,.0099,.1328,.1026,.0099,.1493,.1026,.0099,.2228,.1026,.0099,.2371,.1026,.0099,.2557,.1026,.0099,.2733,.1026,.0099,.2799,.1026,.0099,.2887,.1026,.0099,.3315,.1026,.0099,.3457,.1026,.0099,-.124,.1015,.0099,.3578,.1015,.0099,-.1668,.0971,.0099,-.3359,.0884,.0099,-.2393,.0884,.0099,-.2338,.0884,.0099,.3435,.0697,.0099,.4039,.0653,.0099,.405,.0576,.0099,.3435,.0532,.0099,.4039,.0455,.0099,.292,-.0104,.0099,.3282,-.0203,.0099,.3172,-.0214,.0099,.2711,-.0225,.0099,.293,-.0225,.0099,.3073,-.0225,.0099,-.1449,-.0774,.0099,.248,-.0796,.0099,.1109,-.0818,.0099,-.1449,-.0829,.0099,-.3765,-.1026,.0099,-.3688,-.1026,.0099,-.3523,-.1026,.0099,-.3457,-.1026,.0099,-.3304,-.1026,.0099,-.3029,-.1026,.0099,-.2985,-.1026,.0099,-.1723,-.1026,.0099,-.1548,-.1026,.0099,.0318,-.1026,.0099,.0483,-.1026,.0099,.0604,-.1026,.0099,.0648,-.1026,.0099,.0713,-.1026,.0099,.0779,-.1026,.0099,.09,-.1026,.0099,.1032,-.1026,.0099,.1668,-.1026,.0099,.1712,-.1026,.0099,.18,-.1026,.0099,.1932,-.1026,.0099,.2009,-.1026,.0099,.2118,-.1026,.0099,.2261,-.1026,.0099,.2404,-.1026,.0099,.2546,-.1026,.0099,-.169,.1015,.0098,-.2887,-.1004,.0098,-.383,-.1015,.0098,.1602,-.1015,.0098,.2612,-.1015,.0098,-.0626,-.1004,.0094,.2173,.1004,.0094,-.1921,.0445,.0094,-.1372,-.1004,.0094,.1668,.0949,.0093,.0911,.0916,.0093,.3918,.0873,.0093,.0867,.0862,.0093,.3359,.084,.0093,.3951,.084,.0093,-.2184,.0818,.0093,-.3589,.0785,.0093,-.3633,.0741,.0093,.0768,.0741,.0093,.0724,.0686,.0093,.0637,.0576,.0093,-.3776,.0565,.0093,-.3809,.0532,.0093,.0604,.0532,.0093,-.3863,.0488,.0093,-.2009,.0488,.0093,.0549,.0466,.0093,.0516,.0423,.0093,.0461,.0357,.0093,.0417,.0302,.0093,.0362,.0236,.0093,.0516,.0192,.0093,.0318,.0181,.0093,.0472,.0137,.0093,.0274,.0126,.0093,.3907,.0115,.0093,.0428,.0082,.0093,.023,.0071,.0093,.3249,.0049,.0093,.3841,.0038,.0093,.0384,.0027,.0093,.0187,.0016,.0093,.3205,5e-4,.0093,.3809,5e-4,.0093,.034,-.0027,.0093,.0143,-.0038,.0093,.011,-.0082,.0093,.0285,-.0093,.0093,.0241,-.0148,.0093,.0044,-.0159,.0093,.0198,-.0203,.0093,0,-.0214,.0093,.0154,-.0258,.0093,.011,-.0313,.0093,.0066,-.0368,.0093,-.0033,-.0488,.0093,-.0121,-.0598,.0093,-.0165,-.0653,.0093,-.022,-.0719,.0093,-.0307,-.0829,.0093,-.034,-.0862,.0093,-.1668,-.0895,.0093,-.3699,-.0905,.0093,.1723,-.0916,.0093,-.0406,-.0938,.0093,.1679,-.0949,.0093,.2568,-.096,.0093,-.3809,.1037,.0088,-.371,.1037,.0088,-.3534,.1037,.0088,-.3468,.1037,.0088,-.3402,.1037,.0088,-.326,.1037,.0088,-.3007,.1037,.0088,-.2974,.1037,.0088,-.281,.1037,.0088,-.2711,.1037,.0088,-.2678,.1037,.0088,-.2645,.1037,.0088,-.2459,.1037,.0088,-.2393,.1037,.0088,-.236,.1037,.0088,-.2294,.1037,.0088,-.2261,.1037,.0088,-.2228,.1037,.0088,-.2162,.1037,.0088,-.1976,.1037,.0088,-.1866,.1037,.0088,-.1745,.1037,.0088,-.1207,.1037,.0088,-.1087,.1037,.0088,-.0933,.1037,.0088,-.0823,.1037,.0088,-.0735,.1037,.0088,-.0702,.1037,.0088,.1295,.1037,.0088,.1361,.1037,.0088,.1394,.1037,.0088,.1427,.1037,.0088,.1526,.1037,.0088,.1559,.1037,.0088,.1668,.1037,.0088,.2261,.1037,.0088,.2294,.1037,.0088,.2404,.1037,.0088,.2437,.1037,.0088,.247,.1037,.0088,.259,.1037,.0088,.2623,.1037,.0088,.2766,.1037,.0088,.292,.1037,.0088,.326,.1037,.0088,.3348,.1037,.0088,.338,.1037,.0088,.349,.1037,.0088,.3523,.1037,.0088,.1076,.1026,.0088,.3644,.1015,.0088,-.1251,.0982,.0088,-.3326,.0873,.0088,-.3293,.0873,.0088,-.3424,.0862,.0088,-.2283,.0862,.0088,.2239,.0796,.0088,-.3194,.0774,.0088,-.1185,.073,.0088,.4061,.0543,.0088,.4061,.051,.0088,-.1965,.0445,.0088,-.1866,.0445,.0088,.2952,-.0093,.0088,.3348,-.0203,.0088,.3139,-.0225,.0088,.2744,-.0236,.0088,.2777,-.0236,.0088,.281,-.0236,.0088,.2843,-.0236,.0088,.2876,-.0236,.0088,.2963,-.0236,.0088,.2996,-.0236,.0088,.3029,-.0236,.0088,.2491,-.073,.0088,-.2941,-.0752,.0088,-.2941,-.0829,.0088,-.292,-.1026,.0088,-.3655,-.1037,.0088,-.349,-.1037,.0088,-.3424,-.1037,.0088,-.3391,-.1037,.0088,-.3271,-.1037,.0088,-.3238,-.1037,.0088,-.3172,-.1037,.0088,-.3139,-.1037,.0088,-.1767,-.1037,.0088,-.1646,-.1037,.0088,-.1613,-.1037,.0088,-.158,-.1037,.0088,-.1515,-.1037,.0088,-.1438,-.1037,.0088,.0274,-.1037,.0088,.0395,-.1037,.0088,.0516,-.1037,.0088,.068,-.1037,.0088,.0812,-.1037,.0088,.1065,-.1037,.0088,.1098,-.1037,.0088,.1635,-.1037,.0088,.1745,-.1037,.0088,.1833,-.1037,.0088,.1866,-.1037,.0088,.1899,-.1037,.0088,.2041,-.1037,.0088,.2151,-.1037,.0088,.2184,-.1037,.0088,.2294,-.1037,.0088,.2327,-.1037,.0088,.2437,-.1037,.0088,-.2162,.0785,.0086,-.3743,.0598,.0086,.3172,-.0016,.0086,.0318,-.006,.0086,.2634,-.0269,.0086,.0044,-.0401,.0086,.0373,-.0895,.0086,.1778,.1026,.0084,-.3995,.0434,.0084,-.1833,-.1026,.0084,-.3907,.1015,.0078,-.0549,.1015,.0078,.0922,.0949,.0078,.3896,.0916,.0078,.3984,.0829,.0078,.0812,.0818,.0078,.067,.0642,.0078,-.4072,.0466,.0078,-.1822,.0455,.0078,.3885,.006,.0078,.3216,.0038,.0078,.3798,-.0027,.0078,.0077,-.0093,.0078,-.0176,-.0686,.0078,-.0252,-.0785,.0078,-.1712,-.0916,.0078,-.0417,-.0971,.0078,.2601,-.0971,.0078,.0241,-.0982,.0078,.2645,-.1015,.0078,-.3776,.1048,.0077,-.3677,.1048,.0077,-.3644,.1048,.0077,-.3611,.1048,.0077,-.3578,.1048,.0077,-.3501,.1048,.0077,-.3435,.1048,.0077,-.337,.1048,.0077,-.3304,.1048,.0077,-.3227,.1048,.0077,-.3161,.1048,.0077,-.3128,.1048,.0077,-.3095,.1048,.0077,-.2941,.1048,.0077,-.2909,.1048,.0077,-.2876,.1048,.0077,-.2843,.1048,.0077,-.2777,.1048,.0077,-.2612,.1048,.0077,-.2535,.1048,.0077,-.2327,.1048,.0077,-.2195,.1048,.0077,-.2129,.1048,.0077,-.2096,.1048,.0077,-.1943,.1048,.0077,-.1833,.1048,.0077,-.1174,.1048,.0077,-.1054,.1048,.0077,-.09,.1048,.0077,-.067,.1048,.0077,.113,.1048,.0077,.146,.1048,.0077,.1591,.1048,.0077,.1624,.1048,.0077,.1701,.1048,.0077,.1734,.1048,.0077,.2327,.1048,.0077,.2502,.1048,.0077,.2656,.1048,.0077,.2689,.1048,.0077,.2832,.1048,.0077,.2952,.1048,.0077,.2985,.1048,.0077,.3018,.1048,.0077,.3051,.1048,.0077,.3084,.1048,.0077,.3117,.1048,.0077,.315,.1048,.0077,.3183,.1048,.0077,.3216,.1048,.0077,.3413,.1048,.0077,.3029,.0895,.0077,.3062,.0895,.0077,.3095,.0895,.0077,.3128,.0895,.0077,.3161,.0895,.0077,.2228,.0829,.0077,.3424,.0631,.0077,-.4083,.0521,.0077,.0691,.0159,.0077,.2711,.0016,.0077,.2799,-.0082,.0077,.2832,-.0082,.0077,.2865,-.0082,.0077,.3205,-.0236,.0077,.2502,-.0763,.0077,.113,-.0774,.0077,-.293,-.0785,.0077,.0209,-.1026,.0077,.1152,-.1037,.0077,-.3732,-.1048,.0077,-.3622,-.1048,.0077,-.3589,-.1048,.0077,-.3556,-.1048,.0077,-.3359,-.1048,.0077,-.3205,-.1048,.0077,-.3106,-.1048,.0077,-.3073,-.1048,.0077,-.169,-.1048,.0077,-.1482,-.1048,.0077,-.0582,-.1048,.0077,-.0549,-.1048,.0077,.0351,-.1048,.0077,.0428,-.1048,.0077,.0549,-.1048,.0077,.0746,-.1048,.0077,.0845,-.1048,.0077,.0933,-.1048,.0077,.0966,-.1048,.0077,.0999,-.1048,.0077,.1965,-.1048,.0077,.2074,-.1048,.0077,.2217,-.1048,.0077,.236,-.1048,.0077,.247,-.1048,.0077,.2502,-.1048,.0077,.1207,-.0993,.0074,-.3863,-.1026,.0074,.2162,.1037,.007,.1646,.0905,.007,.0867,.0895,.007,.3951,.0873,.007,.3326,.084,.007,-.2217,.0818,.007,.3359,.0807,.007,-.3556,.0785,.007,.0768,.0774,.007,-.3589,.0752,.007,.0724,.0719,.007,-.3633,.0708,.007,-.3677,.0653,.007,.0637,.0609,.007,-.3776,.0532,.007,.0549,.0499,.007,-.2009,.0455,.007,.0461,.039,.007,.0417,.0335,.007,.0362,.0269,.007,.0318,.0214,.007,.056,.0214,.007,.0274,.0159,.007,.0516,.0159,.007,.023,.0104,.007,.0472,.0104,.007,.0187,.0049,.007,.0428,.0049,.007,.3841,5e-4,.007,.0143,-5e-4,.007,.0384,-5e-4,.007,.0044,-.0126,.007,.0285,-.0126,.007,0,-.0181,.007,.0241,-.0181,.007,-.0143,-.0225,.007,.0198,-.0236,.007,.0154,-.0291,.007,.011,-.0346,.007,.0011,-.0466,.007,-.0033,-.0521,.007,-.0077,-.0576,.007,-.0121,-.0631,.007,-.022,-.0752,.007,-.0307,-.0862,.007,-.3699,-.0873,.007,.1723,-.0884,.007,-.3732,-.0905,.007,.2568,-.0927,.007,-.0373,-.0938,.007,-.1657,.1026,.0069,-.3841,-.0982,.0069,-.1822,-.0982,.0069,-.2854,-.0993,.0069,.157,-.1015,.0069,-.3743,.1059,.0066,-.3337,.1059,.0066,-.3194,.1059,.0066,-.3062,.1059,.0066,-.2744,.1059,.0066,-.2579,.1059,.0066,-.2502,.1059,.0066,-.2426,.1059,.0066,-.2063,.1059,.0066,-.203,.1059,.0066,-.191,.1059,.0066,-.18,.1059,.0066,-.1141,.1059,.0066,-.1021,.1059,.0066,-.0988,.1059,.0066,-.0867,.1059,.0066,-.079,.1059,.0066,-.0637,.1059,.0066,.1163,.1059,.0066,.1196,.1059,.0066,.1229,.1059,.0066,.1262,.1059,.0066,.1328,.1059,.0066,.1493,.1059,.0066,.2217,.1059,.0066,.236,.1059,.0066,.2535,.1059,.0066,.2722,.1059,.0066,.2799,.1059,.0066,.2865,.1059,.0066,.3293,.1059,.0066,.3446,.1059,.0066,.3578,.1048,.0066,-.1273,.1026,.0066,-.1635,.0982,.0066,-.1635,.0949,.0066,-.3359,.0851,.0066,-.2404,.0851,.0066,-.2371,.0851,.0066,-.2338,.0851,.0066,.3402,.0697,.0066,.4072,.0664,.0066,.4083,.0598,.0066,.3402,.0554,.0066,.3402,.0521,.0066,.4072,.0455,.0066,.2898,-.0071,.0066,.3282,-.0236,.0066,.3172,-.0247,.0066,.2711,-.0258,.0066,.2909,-.0258,.0066,.3062,-.0258,.0066,-.1416,-.0763,.0066,-.1416,-.0796,.0066,.2513,-.0796,.0066,.1141,-.0807,.0066,-.1416,-.0829,.0066,.2612,-.1048,.0066,-.3787,-.1059,.0066,-.3699,-.1059,.0066,-.3523,-.1059,.0066,-.3457,-.1059,.0066,-.3326,-.1059,.0066,-.304,-.1059,.0066,-.3007,-.1059,.0066,-.2974,-.1059,.0066,-.1734,-.1059,.0066,-.1548,-.1059,.0066,.0307,-.1059,.0066,.0461,-.1059,.0066,.0582,-.1059,.0066,.0615,-.1059,.0066,.0648,-.1059,.0066,.0713,-.1059,.0066,.0779,-.1059,.0066,.0878,-.1059,.0066,.1032,-.1059,.0066,.1668,-.1059,.0066,.1701,-.1059,.0066,.1778,-.1059,.0066,.1932,-.1059,.0066,.1998,-.1059,.0066,.2107,-.1059,.0066,.225,-.1059,.0066,.2393,-.1059,.0066,.2535,-.1059,.0066,.214,.1004,.0064,.1778,.0993,.0064,-.1921,.0412,.0064,-.1339,-.1004,.0064,.1207,-.1026,.0064,-.1361,-.1037,.0064,-.0637,-.1037,.0064,-.394,.1004,.0062,.0933,.0982,.0062,.3929,.0905,.0062,-.2195,.0785,.0062,-.3699,.0609,.0062,.0571,.0543,.0062,-.3798,.0499,.0062,-.4061,.0434,.0062,.0483,.0434,.0062,.0384,.0313,.0062,.3874,.0027,.0062,.3172,.0016,.0062,.0351,-.006,.0062,.0077,-.0401,.0062,-.1701,-.0884,.0062,.0307,-.0916,.0062,.158,-.0982,.0062,.2634,-.0982,.0062,.0209,-.0993,.0062,-.0428,-.1004,.0062,-.2854,-.1026,.0062,-.382,.107,.0055,-.371,.107,.0055,-.3545,.107,.0055,-.3468,.107,.0055,-.3402,.107,.0055,-.3271,.107,.0055,-.3029,.107,.0055,-.2996,.107,.0055,-.281,.107,.0055,-.2711,.107,.0055,-.2678,.107,.0055,-.2645,.107,.0055,-.247,.107,.0055,-.2393,.107,.0055,-.236,.107,.0055,-.2294,.107,.0055,-.2261,.107,.0055,-.2228,.107,.0055,-.2162,.107,.0055,-.1998,.107,.0055,-.1877,.107,.0055,-.1767,.107,.0055,-.1734,.107,.0055,-.1229,.107,.0055,-.1109,.107,.0055,-.0955,.107,.0055,-.0834,.107,.0055,-.0757,.107,.0055,-.0724,.107,.0055,-.0604,.107,.0055,.1295,.107,.0055,.1361,.107,.0055,.1394,.107,.0055,.1427,.107,.0055,.1526,.107,.0055,.1559,.107,.0055,.1657,.107,.0055,.1767,.107,.0055,.225,.107,.0055,.2283,.107,.0055,.2393,.107,.0055,.2426,.107,.0055,.2459,.107,.0055,.2568,.107,.0055,.2601,.107,.0055,.2755,.107,.0055,.2898,.107,.0055,.3249,.107,.0055,.3326,.107,.0055,.3359,.107,.0055,.3479,.107,.0055,.3512,.107,.0055,-.3863,.1059,.0055,-.1262,.1059,.0055,.1065,.1059,.0055,-.0549,.1048,.0055,.1811,.1048,.0055,.3644,.1048,.0055,.0999,.1037,.0055,.3699,.1037,.0055,.0966,.1015,.0055,.382,.0993,.0055,-.1284,.0982,.0055,-.3973,.0971,.0055,.2151,.096,.0055,.3874,.096,.0055,.0889,.0949,.0055,.1734,.0949,.0055,.1701,.0927,.0055,-.1273,.0916,.0055,-.1635,.0895,.0055,-.4006,.0884,.0055,.0834,.0884,.0055,-.0461,.0862,.0055,.1635,.0862,.0055,.3227,.0862,.0055,.3984,.0862,.0055,-.1646,.0851,.0055,.0812,.0851,.0055,-.3326,.084,.0055,-.3293,.084,.0055,-.3424,.0829,.0055,-.2294,.0829,.0055,-.2459,.0818,.0055,-.4028,.0807,.0055,.4028,.0807,.0055,-.3512,.0796,.0055,.2206,.0796,.0055,-.3227,.0774,.0055,-.1229,.0774,.0055,.0735,.0763,.0055,-.0428,.0752,.0055,.2195,.0752,.0055,-.1679,.0741,.0055,.158,.0741,.0055,.2941,.0741,.0055,-.405,.073,.0055,-.3238,.073,.0055,-.2491,.073,.0055,-.1218,.073,.0055,-.36,.0719,.0055,.0691,.0708,.0055,.2184,.0708,.0055,-.2502,.0686,.0055,.067,.0675,.0055,-.3644,.0664,.0055,.1559,.0664,.0055,.292,.0664,.0055,-.326,.0653,.0055,-.124,.0653,.0055,-.0395,.0642,.0055,-.1712,.0631,.0055,.2162,.0631,.0055,-.4083,.062,.0055,-.3271,.0609,.0055,-.2524,.0609,.0055,.0604,.0598,.0055,.1537,.0587,.0055,.2898,.0587,.0055,-.4094,.0576,.0055,-.1262,.0576,.0055,.4094,.0565,.0055,.214,.0554,.0055,-.3743,.0543,.0055,-.3293,.0532,.0055,-.2546,.0532,.0055,-.1273,.0532,.0055,-.0362,.0532,.0055,.4094,.0532,.0055,.1515,.051,.0055,.2129,.051,.0055,.2876,.051,.0055,-.2063,.0499,.0055,.4094,.0499,.0055,-.4105,.0488,.0055,-.1767,.0488,.0055,.0516,.0488,.0055,.338,.0477,.0055,-.383,.0466,.0055,-.2041,.0466,.0055,-.3315,.0455,.0055,-.2568,.0455,.0055,-.1789,.0455,.0055,-.1295,.0455,.0055,.1493,.0434,.0055,.2107,.0434,.0055,.337,.0434,.0055,-.1998,.0423,.0055,-.0329,.0423,.0055,-.394,.0412,.0055,-.1965,.0412,.0055,-.1866,.0412,.0055,-.3995,.0401,.0055,.2843,.0401,.0055,.3359,.039,.0055,.4072,.039,.0055,-.3337,.0379,.0055,-.259,.0379,.0055,-.1317,.0379,.0055,.0428,.0379,.0055,.1471,.0357,.0055,.2085,.0357,.0055,.4061,.0346,.0055,.2821,.0324,.0055,-.3359,.0302,.0055,-.2612,.0302,.0055,-.1339,.0302,.0055,-.0285,.028,.0055,.1449,.028,.0055,.2063,.028,.0055,-.337,.0258,.0055,.0329,.0258,.0055,.2799,.0247,.0055,-.2634,.0225,.0055,-.1361,.0225,.0055,.0285,.0203,.0055,.1427,.0203,.0055,.2041,.0203,.0055,-.3391,.0181,.0055,.3995,.0181,.0055,-.0252,.017,.0055,.0549,.017,.0055,.2777,.017,.0055,.3271,.0159,.0055,-.2656,.0148,.0055,-.1383,.0148,.0055,.0241,.0148,.0055,.1405,.0126,.0055,.202,.0126,.0055,.3962,.0126,.0055,-.1032,.0115,.0055,.0505,.0115,.0055,-.3413,.0104,.0055,.0198,.0093,.0055,.2755,.0093,.0055,.394,.0093,.0055,-.1163,.0082,.0055,.0648,.0082,.0055,.1394,.0082,.0055,.3227,.0082,.0055,-.2678,.0071,.0055,-.1405,.0071,.0055,-.022,.006,.0055,.0461,.006,.0055,.1998,.0049,.0055,.0154,.0038,.0055,.0637,.0038,.0055,-.3435,.0027,.0055,-.1416,.0027,.0055,-.1185,5e-4,.0055,.0417,5e-4,.0055,.1372,5e-4,.0055,-.27,-5e-4,.0055,.011,-.0016,.0055,-.0988,-.0027,.0055,.1976,-.0027,.0055,.383,-.0027,.0055,.0615,-.0038,.0055,-.3457,-.0049,.0055,-.1438,-.0049,.0055,-.0187,-.0049,.0055,.0088,-.0049,.0055,.3018,-.0049,.0055,.293,-.006,.0055,.2963,-.006,.0055,-.1207,-.0071,.0055,.135,-.0071,.0055,.3776,-.0071,.0055,-.2722,-.0082,.0055,-.3468,-.0093,.0055,.3743,-.0093,.0055,.1954,-.0104,.0055,.0318,-.0115,.0055,.0593,-.0115,.0055,-.146,-.0126,.0055,.3688,-.0126,.0055,-.0955,-.0137,.0055,.0011,-.0137,.0055,-.1229,-.0148,.0055,.1328,-.0148,.0055,.1943,-.0148,.0055,-.2744,-.0159,.0055,-.0154,-.0159,.0055,-.349,-.017,.0055,.0274,-.017,.0055,-.0033,-.0192,.0055,.0571,-.0192,.0055,-.2755,-.0203,.0055,-.1482,-.0203,.0055,.3501,-.0203,.0055,-.1251,-.0225,.0055,.023,-.0225,.0055,.1306,-.0225,.0055,.1921,-.0225,.0055,.3424,-.0225,.0055,.3348,-.0236,.0055,.338,-.0236,.0055,-.3512,-.0247,.0055,.3139,-.0258,.0055,.3238,-.0258,.0055,.0549,-.0269,.0055,.2744,-.0269,.0055,.2777,-.0269,.0055,.281,-.0269,.0055,.2843,-.0269,.0055,.2876,-.0269,.0055,.2941,-.0269,.0055,.2974,-.0269,.0055,.3007,-.0269,.0055,.3095,-.0269,.0055,-.2777,-.028,.0055,-.1504,-.028,.0055,-.0911,-.028,.0055,.0187,-.028,.0055,-.1273,-.0302,.0055,.1284,-.0302,.0055,.1899,-.0302,.0055,.0538,-.0313,.0055,-.3534,-.0324,.0055,.0143,-.0335,.0055,-.2799,-.0357,.0055,-.1526,-.0357,.0055,-.1295,-.0379,.0055,.1262,-.0379,.0055,.1877,-.0379,.0055,.2623,-.0379,.0055,-.0878,-.039,.0055,.0516,-.039,.0055,-.3556,-.0401,.0055,-.2821,-.0434,.0055,-.1548,-.0434,.0055,-.1317,-.0455,.0055,.0044,-.0455,.0055,.124,-.0455,.0055,.1855,-.0455,.0055,.2601,-.0455,.0055,.0494,-.0466,.0055,-.3578,-.0477,.0055,-.1559,-.0477,.0055,-.0845,-.0499,.0055,-.2843,-.051,.0055,0,-.051,.0055,-.3589,-.0521,.0055,-.1339,-.0532,.0055,.1218,-.0532,.0055,.1833,-.0532,.0055,.2579,-.0532,.0055,.0472,-.0543,.0055,-.158,-.0554,.0055,-.0044,-.0565,.0055,-.2865,-.0587,.0055,-.3611,-.0598,.0055,-.1361,-.0609,.0055,.1196,-.0609,.0055,.1811,-.0609,.0055,.2557,-.0609,.0055,-.0088,-.062,.0055,.045,-.062,.0055,-.1602,-.0631,.0055,-.0801,-.0642,.0055,.1185,-.0653,.0055,.2546,-.0653,.0055,-.2887,-.0664,.0055,-.3633,-.0675,.0055,-.0132,-.0675,.0055,-.1383,-.0686,.0055,.1789,-.0686,.0055,.0428,-.0697,.0055,-.2898,-.0708,.0055,-.1624,-.0708,.0055,.1163,-.073,.0055,.1778,-.073,.0055,.2524,-.073,.0055,-.0187,-.0741,.0055,-.2909,-.0752,.0055,-.0768,-.0752,.0055,-.2909,-.0818,.0055,-.0252,-.0818,.0055,.0373,-.084,.0055,.1734,-.084,.0055,-.0274,-.0851,.0055,.2546,-.0873,.0055,.034,-.0884,.0055,-.0724,-.0895,.0055,-.0318,-.0895,.0055,.169,-.0895,.0055,-.1745,-.0916,.0055,.1657,-.0916,.0055,-.3787,-.0927,.0055,-.034,-.0927,.0055,-.2865,-.0938,.0055,-.1778,-.0938,.0055,.0263,-.0938,.0055,.2601,-.0938,.0055,-.382,-.0949,.0055,.1613,-.0949,.0055,-.135,-.096,.0055,-.0384,-.0971,.0055,-.067,-.1015,.0055,-.1866,-.1026,.0055,-.0461,-.1037,.0055,.157,-.1048,.0055,.2656,-.1048,.0055,-.3852,-.1059,.0055,-.292,-.1059,.0055,.022,-.1059,.0055,-.3666,-.107,.0055,-.349,-.107,.0055,-.3424,-.107,.0055,-.3391,-.107,.0055,-.3293,-.107,.0055,-.326,-.107,.0055,-.3172,-.107,.0055,-.3139,-.107,.0055,-.18,-.107,.0055,-.1767,-.107,.0055,-.1657,-.107,.0055,-.1624,-.107,.0055,-.1591,-.107,.0055,-.1515,-.107,.0055,-.1449,-.107,.0055,.0263,-.107,.0055,.0384,-.107,.0055,.0494,-.107,.0055,.068,-.107,.0055,.0812,-.107,.0055,.1065,-.107,.0055,.1098,-.107,.0055,.1624,-.107,.0055,.1734,-.107,.0055,.1811,-.107,.0055,.1844,-.107,.0055,.1877,-.107,.0055,.203,-.107,.0055,.214,-.107,.0055,.2173,-.107,.0055,.2283,-.107,.0055,.2316,-.107,.0055,.2426,-.107,.0055,.2568,-.107,.0055,.3326,.0807,.0047,-.3556,.0752,.0047,-.371,.0576,.0047,.3183,.0049,.0047,-.3732,-.0873,.0047,.2678,-.1015,.0045,-.1855,-.1059,.0045,-.3787,.1081,.0044,-.3677,.1081,.0044,-.3644,.1081,.0044,-.3611,.1081,.0044,-.3578,.1081,.0044,-.3512,.1081,.0044,-.3435,.1081,.0044,-.337,.1081,.0044,-.3304,.1081,.0044,-.3238,.1081,.0044,-.3161,.1081,.0044,-.3128,.1081,.0044,-.3095,.1081,.0044,-.2963,.1081,.0044,-.293,.1081,.0044,-.2898,.1081,.0044,-.2865,.1081,.0044,-.2777,.1081,.0044,-.2612,.1081,.0044,-.2546,.1081,.0044,-.2327,.1081,.0044,-.2195,.1081,.0044,-.2129,.1081,.0044,-.2096,.1081,.0044,-.1965,.1081,.0044,-.1844,.1081,.0044,-.1196,.1081,.0044,-.1076,.1081,.0044,-.0922,.1081,.0044,-.0691,.1081,.0044,.112,.1081,.0044,.146,.1081,.0044,.1591,.1081,.0044,.1624,.1081,.0044,.169,.1081,.0044,.1723,.1081,.0044,.2316,.1081,.0044,.2491,.1081,.0044,.2634,.1081,.0044,.2667,.1081,.0044,.2832,.1081,.0044,.293,.1081,.0044,.2963,.1081,.0044,.2996,.1081,.0044,.3029,.1081,.0044,.3062,.1081,.0044,.3095,.1081,.0044,.3128,.1081,.0044,.3161,.1081,.0044,.3194,.1081,.0044,.3391,.1081,.0044,.2162,.107,.0044,.3029,.0862,.0044,.3062,.0862,.0044,.3095,.0862,.0044,.3128,.0862,.0044,.3161,.0862,.0044,.2195,.0829,.0044,.3391,.0631,.0044,-.4116,.0532,.0044,-.4039,.0401,.0044,.0659,.0159,.0044,.2744,.0016,.0044,.2799,-.0049,.0044,.2832,-.0049,.0044,.2865,-.0049,.0044,.3205,-.0269,.0044,.2535,-.0763,.0044,.1163,-.0774,.0044,-.2898,-.0785,.0044,.124,-.0993,.0044,.0176,-.1015,.0044,-.3896,-.1026,.0044,-.1383,-.107,.0044,.1152,-.107,.0044,-.3754,-.1081,.0044,-.3633,-.1081,.0044,-.36,-.1081,.0044,-.3567,-.1081,.0044,-.3359,-.1081,.0044,-.3227,-.1081,.0044,-.3106,-.1081,.0044,-.3073,-.1081,.0044,-.1701,-.1081,.0044,-.1482,-.1081,.0044,-.0593,-.1081,.0044,-.056,-.1081,.0044,.034,-.1081,.0044,.0417,-.1081,.0044,.0527,-.1081,.0044,.0746,-.1081,.0044,.0845,-.1081,.0044,.0911,-.1081,.0044,.0944,-.1081,.0044,.0977,-.1081,.0044,.1965,-.1081,.0044,.2063,-.1081,.0044,.2206,-.1081,.0044,.2349,-.1081,.0044,.2459,-.1081,.0044,.2491,-.1081,.0044,-.1646,.1059,.004,-.3929,.1048,.004,.2129,.1048,.004,-.0516,.1037,.004,.09,.0982,.004,.1778,.096,.004,.3918,.0949,.004,.3962,.0905,.004,.4017,.0851,.004,.0779,.084,.004,.0757,.0807,.004,-.2228,.0785,.004,-.2195,.0752,.004,.0637,.0664,.004,.0571,.0576,.004,-.3765,.0499,.004,.0483,.0466,.004,-.4105,.0445,.004,-.18,.0423,.004,.0384,.0346,.004,.3918,.0038,.004,.3139,.0016,.004,.3874,-5e-4,.004,.0055,-.006,.004,.0384,-.006,.004,.382,-.006,.004,.0351,-.0093,.004,.2667,-.0302,.004,.011,-.0401,.004,.0077,-.0434,.004,-.0143,-.0708,.004,-.022,-.0807,.004,-.1701,-.0851,.004,-.1734,-.0884,.004,-.3765,-.0895,.004,.2579,-.0895,.004,.022,-.0949,.004,.2634,-.0949,.004,-.2832,-.096,.004,.1229,-.096,.004,-.3874,-.0971,.004,-.1855,-.0971,.004,.1548,-.0982,.004,.2667,-.0982,.004,-.2821,-.0993,.004,-.0395,-.1004,.004,.1537,-.1015,.004,.0176,-.1048,.004,-.3885,-.1059,.004,.1207,-.1059,.004,.1811,.0982,.0035,-.203,.0423,.0035,-.1328,-.1048,.0035,-.067,-.1048,.0035,-.3754,.1092,.0033,-.3337,.1092,.0033,-.3205,.1092,.0033,-.3062,.1092,.0033,-.2744,.1092,.0033,-.2579,.1092,.0033,-.2513,.1092,.0033,-.2437,.1092,.0033,-.2063,.1092,.0033,-.203,.1092,.0033,-.1932,.1092,.0033,-.1811,.1092,.0033,-.1163,.1092,.0033,-.1043,.1092,.0033,-.101,.1092,.0033,-.0889,.1092,.0033,-.0801,.1092,.0033,-.0659,.1092,.0033,.1152,.1092,.0033,.1185,.1092,.0033,.1218,.1092,.0033,.1251,.1092,.0033,.1328,.1092,.0033,.1493,.1092,.0033,.2206,.1092,.0033,.2349,.1092,.0033,.2524,.1092,.0033,.27,.1092,.0033,.2788,.1092,.0033,.2865,.1092,.0033,.3282,.1092,.0033,.3424,.1092,.0033,.3578,.1081,.0033,-.1306,.1037,.0033,.2107,.1015,.0033,-.1602,.0993,.0033,-.1602,.096,.0033,-.3359,.0818,.0033,-.2404,.0818,.0033,-.2371,.0818,.0033,-.2338,.0818,.0033,.337,.0697,.0033,.4105,.0675,.0033,.4116,.0609,.0033,.337,.0565,.0033,.337,.0532,.0033,.4105,.0455,.0033,-.1921,.0379,.0033,.2898,-.0038,.0033,.3282,-.0269,.0033,.3172,-.028,.0033,.2711,-.0291,.0033,.2909,-.0291,.0033,.304,-.0291,.0033,-.1383,-.0763,.0033,-.1383,-.0796,.0033,.2546,-.0796,.0033,.1174,-.0807,.0033,-.1383,-.0829,.0033,-.1306,-.1004,.0033,.2612,-.1081,.0033,-.3798,-.1092,.0033,-.3721,-.1092,.0033,-.3534,-.1092,.0033,-.3457,-.1092,.0033,-.3326,-.1092,.0033,-.304,-.1092,.0033,-.3007,-.1092,.0033,-.2974,-.1092,.0033,-.1734,-.1092,.0033,-.1559,-.1092,.0033,.0296,-.1092,.0033,.045,-.1092,.0033,.056,-.1092,.0033,.0593,-.1092,.0033,.0626,-.1092,.0033,.0713,-.1092,.0033,.0779,-.1092,.0033,.0878,-.1092,.0033,.101,-.1092,.0033,.1657,-.1092,.0033,.169,-.1092,.0033,.1767,-.1092,.0033,.191,-.1092,.0033,.1998,-.1092,.0033,.2096,-.1092,.0033,.2239,-.1092,.0033,.2382,-.1092,.0033,.2524,-.1092,.0033,-.3973,.1015,.0031,.0922,.1015,.0031,.0856,.0949,.0031,.0834,.0916,.0031,.1701,.0895,.0031,.0691,.0741,.0031,-.3567,.0719,.0031,-.36,.0686,.0031,-.3644,.0631,.0031,.0604,.0631,.0031,-.3666,.0598,.0031,.0538,.0554,.0031,.0516,.0521,.0031,-.3787,.0466,.0031,.045,.0445,.0031,-.383,.0434,.0031,.0428,.0412,.0031,-.4072,.0401,.0031,.0351,.0324,.0031,.0329,.0291,.0031,.0285,.0236,.0031,.0241,.0181,.0031,.0549,.0137,.0031,.0198,.0126,.0031,.0505,.0082,.0031,.3194,.0082,.0031,.0154,.0071,.0031,.0461,.0027,.0031,.011,.0016,.0031,.0417,-.0027,.0031,.0011,-.0104,.0031,.0318,-.0148,.0031,-.0033,-.0159,.0031,.0274,-.0203,.0031,.023,-.0258,.0031,.0187,-.0313,.0031,.0143,-.0368,.0031,.0044,-.0488,.0031,0,-.0543,.0031,-.0044,-.0598,.0031,-.0088,-.0653,.0031,-.0187,-.0774,.0031,.169,-.0862,.0031,-.0274,-.0884,.0031,.0296,-.0884,.0031,.157,-.0949,.0031,-.034,-.096,.0031,.0176,-.0982,.0031,-.2821,-.1037,.0031,-.0417,-.1037,.0031,.2689,-.1048,.0031,-.1295,.107,.0025,-.1317,.1004,.0025,.3951,.0938,.0025,.3995,.0895,.0025,.3293,.0807,.0025,.0724,.0796,.0025,.3326,.0774,.0025,-.3523,.0752,.0025,-.3732,.051,.0025,.0593,.0181,.0025,.3951,.006,.0025,.315,.0049,.0025,.3907,5e-4,.0025,.3863,-.0038,.0025,-.011,-.0192,.0025,-.3732,-.084,.0025,.0329,-.0851,.0025,.1624,-.0905,.0025,.2612,-.0905,.0025,.124,-.1048,.0025,.1537,-.1059,.0025,-.383,.1103,.0022,-.3721,.1103,.0022,-.3545,.1103,.0022,-.3479,.1103,.0022,-.3402,.1103,.0022,-.3271,.1103,.0022,-.3029,.1103,.0022,-.2996,.1103,.0022,-.2832,.1103,.0022,-.2711,.1103,.0022,-.2678,.1103,.0022,-.2645,.1103,.0022,-.248,.1103,.0022,-.2404,.1103,.0022,-.2371,.1103,.0022,-.2294,.1103,.0022,-.2261,.1103,.0022,-.2228,.1103,.0022,-.2162,.1103,.0022,-.1998,.1103,.0022,-.1899,.1103,.0022,-.1778,.1103,.0022,-.1745,.1103,.0022,-.1712,.1103,.0022,-.124,.1103,.0022,-.113,.1103,.0022,-.0977,.1103,.0022,-.0856,.1103,.0022,-.0768,.1103,.0022,-.0735,.1103,.0022,-.0626,.1103,.0022,-.0593,.1103,.0022,.1284,.1103,.0022,.1361,.1103,.0022,.1394,.1103,.0022,.1427,.1103,.0022,.1526,.1103,.0022,.1559,.1103,.0022,.1657,.1103,.0022,.1756,.1103,.0022,.2239,.1103,.0022,.2272,.1103,.0022,.2382,.1103,.0022,.2415,.1103,.0022,.2448,.1103,.0022,.2557,.1103,.0022,.259,.1103,.0022,.2733,.1103,.0022,.2898,.1103,.0022,.3227,.1103,.0022,.3315,.1103,.0022,.3348,.1103,.0022,.3457,.1103,.0022,.349,.1103,.0022,.3523,.1103,.0022,-.3874,.1092,.0022,-.1668,.1092,.0022,-.056,.1092,.0022,.1054,.1092,.0022,.3611,.1092,.0022,-.3907,.1081,.0022,.1021,.1081,.0022,.3644,.1081,.0022,.0988,.107,.0022,.3699,.107,.0022,.1844,.1059,.0022,.3743,.1059,.0022,.3776,.1048,.0022,.1844,.1026,.0022,.383,.1026,.0022,-.4006,.0982,.0022,-.1317,.0971,.0022,-.0461,.0971,.0022,-.045,.0938,.0022,-.4028,.0927,.0022,-.1591,.0927,.0022,-.1306,.0916,.0022,-.0439,.0905,.0022,-.4039,.0895,.0022,-.1602,.0895,.0022,-.1295,.0873,.0022,-.0428,.0873,.0022,.2162,.0862,.0022,-.405,.0851,.0022,-.1613,.0851,.0022,-.1284,.084,.0022,-.0417,.0829,.0022,.3216,.0829,.0022,-.4061,.0818,.0022,.326,.0818,.0022,-.3326,.0807,.0022,-.3293,.0807,.0022,-.1624,.0807,.0022,-.1273,.0807,.0022,.2996,.0807,.0022,-.3424,.0796,.0022,-.3391,.0796,.0022,-.2305,.0796,.0022,-.0406,.0796,.0022,.2173,.0796,.0022,-.3457,.0785,.0022,-.4072,.0774,.0022,-.326,.0774,.0022,-.1635,.0774,.0022,-.1262,.0774,.0022,.2985,.0774,.0022,-.2448,.0763,.0022,-.0395,.0763,.0022,.2162,.0763,.0022,.4094,.0752,.0022,-.4083,.0741,.0022,-.3271,.0741,.0022,-.1646,.0741,.0022,.1613,.0741,.0022,.2974,.0741,.0022,-.2459,.073,.0022,-.1251,.073,.0022,-.0384,.0719,.0022,.2151,.0719,.0022,.4105,.0719,.0022,-.4094,.0697,.0022,-.3282,.0697,.0022,-.1657,.0697,.0022,-.1262,.0697,.0022,.1602,.0697,.0022,.2963,.0697,.0022,-.247,.0686,.0022,-.0373,.0686,.0022,.214,.0675,.0022,-.4105,.0664,.0022,-.3293,.0664,.0022,-.2173,.0664,.0022,-.1668,.0664,.0022,-.1273,.0664,.0022,.1591,.0664,.0022,.2952,.0664,.0022,.3359,.0664,.0022,-.0362,.0653,.0022,-.248,.0642,.0022,.2129,.0642,.0022,-.4116,.0631,.0022,-.1679,.0631,.0022,-.3304,.062,.0022,-.1284,.062,.0022,.158,.062,.0022,.2941,.062,.0022,-.2491,.0609,.0022,-.2151,.0609,.0022,-.0351,.0609,.0022,.2118,.0598,.0022,-.4127,.0587,.0022,-.169,.0587,.0022,-.1295,.0587,.0022,.157,.0587,.0022,.293,.0587,.0022,-.3315,.0576,.0022,-.034,.0576,.0022,.4127,.0576,.0022,-.2502,.0565,.0022,.2107,.0565,.0022,-.1701,.0554,.0022,-.3326,.0543,.0022,-.1306,.0543,.0022,-.0329,.0543,.0022,.1559,.0543,.0022,.292,.0543,.0022,.4127,.0543,.0022,-.2513,.0532,.0022,-.2118,.0532,.0022,-.1712,.0521,.0022,.2096,.0521,.0022,.1548,.051,.0022,.2909,.051,.0022,.4127,.051,.0022,-.4138,.0499,.0022,-.3337,.0499,.0022,-.1317,.0499,.0022,-.0318,.0499,.0022,-.2524,.0488,.0022,.3348,.0488,.0022,.2085,.0477,.0022,-.3348,.0466,.0022,-.1328,.0466,.0022,-.0307,.0466,.0022,.1537,.0466,.0022,.2898,.0466,.0022,-.2535,.0455,.0022,.2074,.0445,.0022,.3337,.0445,.0022,-.0296,.0434,.0022,.1526,.0434,.0022,.2887,.0434,.0022,-.3359,.0423,.0022,-.1339,.0423,.0022,.4116,.0423,.0022,-.2546,.0412,.0022,.2063,.0401,.0022,.2876,.0401,.0022,.3326,.0401,.0022,-.3896,.039,.0022,-.337,.039,.0022,-.135,.039,.0022,-.0285,.039,.0022,.1515,.039,.0022,.4105,.039,.0022,-.394,.0379,.0022,-.2557,.0379,.0022,-.1987,.0379,.0022,-.1866,.0379,.0022,-.4006,.0368,.0022,-.3973,.0368,.0022,.2052,.0368,.0022,-.0274,.0357,.0022,.1504,.0357,.0022,.2865,.0357,.0022,.3315,.0357,.0022,-.338,.0346,.0022,-.1361,.0346,.0022,.4094,.0346,.0022,-.2568,.0335,.0022,-.0263,.0324,.0022,.2041,.0324,.0022,.2854,.0324,.0022,.3304,.0324,.0022,-.3391,.0313,.0022,-.1372,.0313,.0022,.1493,.0313,.0022,-.2579,.0302,.0022,.4083,.0302,.0022,-.0252,.0291,.0022,.203,.0291,.0022,.1482,.028,.0022,.2843,.028,.0022,-.3402,.0269,.0022,-.1383,.0269,.0022,.3282,.0269,.0022,.4072,.0269,.0022,-.259,.0258,.0022,-.0241,.0247,.0022,.202,.0247,.0022,.2832,.0247,.0022,-.1394,.0236,.0022,.1471,.0236,.0022,-.3413,.0225,.0022,-.2601,.0225,.0022,-.023,.0214,.0022,.2009,.0214,.0022,.326,.0214,.0022,.405,.0214,.0022,.146,.0203,.0022,.2821,.0203,.0022,-.3424,.0192,.0022,-.1405,.0192,.0022,-.2612,.0181,.0022,-.022,.0181,.0022,.1998,.017,.0022,.281,.017,.0022,-.1416,.0159,.0022,.1449,.0159,.0022,-.3435,.0148,.0022,-.2623,.0148,.0022,-.0209,.0137,.0022,.1987,.0137,.0022,.0626,.0126,.0022,.1438,.0126,.0022,.2799,.0126,.0022,-.3446,.0115,.0022,-.1427,.0115,.0022,-.112,.0115,.0022,-.1065,.0115,.0022,-.2634,.0104,.0022,-.0198,.0104,.0022,.0615,.0093,.0022,.1976,.0093,.0022,.2788,.0093,.0022,-.1438,.0082,.0022,-.113,.0082,.0022,.1427,.0082,.0022,-.3457,.0071,.0022,-.2645,.0071,.0022,-.1054,.0071,.0022,-.0187,.0071,.0022,.1965,.006,.0022,.0604,.0049,.0022,.2777,.0049,.0022,-.3468,.0038,.0022,-.1449,.0038,.0022,-.1141,.0038,.0022,-.1043,.0038,.0022,.1416,.0038,.0022,-.2656,.0027,.0022,-.0176,.0027,.0022,.1954,.0016,.0022,-.1152,5e-4,.0022,-.1032,5e-4,.0022,.0593,5e-4,.0022,.1405,5e-4,.0022,-.3479,-5e-4,.0022,-.2667,-5e-4,.0022,-.146,-5e-4,.0022,-.0165,-5e-4,.0022,.3051,-5e-4,.0022,.1943,-.0016,.0022,.3007,-.0016,.0022,-.1021,-.0027,.0022,.0582,-.0027,.0022,.293,-.0027,.0022,.2963,-.0027,.0022,-.349,-.0038,.0022,-.1471,-.0038,.0022,-.1163,-.0038,.0022,-.0154,-.0038,.0022,.1394,-.0038,.0022,-.2678,-.0049,.0022,.1932,-.006,.0022,-.1174,-.0071,.0022,-.101,-.0071,.0022,.0571,-.0071,.0022,.1383,-.0071,.0022,-.3501,-.0082,.0022,-.2689,-.0082,.0022,-.1482,-.0082,.0022,-.0143,-.0082,.0022,.1921,-.0093,.0022,-.0999,-.0104,.0022,.056,-.0104,.0022,-.1493,-.0115,.0022,-.1185,-.0115,.0022,-.0132,-.0115,.0022,.1372,-.0115,.0022,-.3512,-.0126,.0022,-.27,-.0126,.0022,-.0988,-.0137,.0022,.191,-.0137,.0022,-.1196,-.0148,.0022,-.0121,-.0148,.0022,.0549,-.0148,.0022,.1361,-.0148,.0022,-.3523,-.0159,.0022,-.2711,-.0159,.0022,-.1504,-.0159,.0022,-.0977,-.0181,.0022,.0538,-.0181,.0022,.1899,-.0181,.0022,.3655,-.0181,.0022,-.1515,-.0192,.0022,-.1207,-.0192,.0022,.135,-.0192,.0022,-.3534,-.0203,.0022,-.2722,-.0203,.0022,-.0966,-.0214,.0022,.1888,-.0214,.0022,.3578,-.0214,.0022,-.1218,-.0225,.0022,.0527,-.0225,.0022,.1339,-.0225,.0022,.3545,-.0225,.0022,-.3545,-.0236,.0022,-.1526,-.0236,.0022,.3501,-.0236,.0022,-.2733,-.0247,.0022,-.0955,-.0247,.0022,.3468,-.0247,.0022,.0516,-.0258,.0022,.1877,-.0258,.0022,.3424,-.0258,.0022,-.1537,-.0269,.0022,-.1229,-.0269,.0022,.1328,-.0269,.0022,.3348,-.0269,.0022,.338,-.0269,.0022,-.3556,-.028,.0022,-.2744,-.028,.0022,-.0944,-.028,.0022,.3315,-.028,.0022,.1866,-.0291,.0022,.3139,-.0291,.0022,.3238,-.0291,.0022,-.124,-.0302,.0022,.0505,-.0302,.0022,.1317,-.0302,.0022,.2744,-.0302,.0022,.2777,-.0302,.0022,.281,-.0302,.0022,.2843,-.0302,.0022,.2876,-.0302,.0022,.2941,-.0302,.0022,.2974,-.0302,.0022,.3007,-.0302,.0022,.3073,-.0302,.0022,.3106,-.0302,.0022,-.3567,-.0313,.0022,-.1548,-.0313,.0022,-.2755,-.0324,.0022,-.0933,-.0324,.0022,.1855,-.0335,.0022,-.1559,-.0346,.0022,-.1251,-.0346,.0022,.0494,-.0346,.0022,.1306,-.0346,.0022,.2667,-.0346,.0022,-.3578,-.0357,.0022,-.2766,-.0357,.0022,-.0922,-.0357,.0022,.1844,-.0368,.0022,-.1262,-.0379,.0022,.0483,-.0379,.0022,.1295,-.0379,.0022,.2656,-.0379,.0022,-.3589,-.039,.0022,-.157,-.039,.0022,-.0911,-.039,.0022,-.2777,-.0401,.0022,.1833,-.0412,.0022,-.158,-.0423,.0022,-.1273,-.0423,.0022,.0472,-.0423,.0022,.1284,-.0423,.0022,.2645,-.0423,.0022,-.36,-.0434,.0022,-.2788,-.0434,.0022,-.09,-.0434,.0022,.1822,-.0445,.0022,-.1284,-.0455,.0022,.0461,-.0455,.0022,.1273,-.0455,.0022,.2634,-.0455,.0022,-.3611,-.0466,.0022,-.1591,-.0466,.0022,-.0889,-.0466,.0022,-.2799,-.0477,.0022,.1811,-.0488,.0022,-.1295,-.0499,.0022,-.0878,-.0499,.0022,.045,-.0499,.0022,.1262,-.0499,.0022,.2623,-.0499,.0022,-.3622,-.051,.0022,-.281,-.051,.0022,-.1602,-.051,.0022,.18,-.0521,.0022,-.1306,-.0532,.0022,.0439,-.0532,.0022,.1251,-.0532,.0022,.2612,-.0532,.0022,-.1613,-.0543,.0022,-.0867,-.0543,.0022,-.3633,-.0554,.0022,-.2821,-.0554,.0022,.1789,-.0565,.0022,-.1317,-.0576,.0022,-.0856,-.0576,.0022,.0428,-.0576,.0022,.124,-.0576,.0022,.2601,-.0576,.0022,-.3644,-.0587,.0022,-.2832,-.0587,.0022,-.1624,-.0587,.0022,.1778,-.0598,.0022,-.1328,-.0609,.0022,-.0845,-.0609,.0022,.0417,-.0609,.0022,.1229,-.0609,.0022,.259,-.0609,.0022,-.1635,-.062,.0022,-.3655,-.0631,.0022,-.2843,-.0631,.0022,-.0834,-.0642,.0022,.1767,-.0642,.0022,-.1339,-.0653,.0022,.0406,-.0653,.0022,.1218,-.0653,.0022,.2579,-.0653,.0022,-.3666,-.0664,.0022,-.2854,-.0664,.0022,-.1646,-.0664,.0022,.1756,-.0675,.0022,-.135,-.0686,.0022,-.0823,-.0686,.0022,.0395,-.0686,.0022,-.1657,-.0697,.0022,.1207,-.0697,.0022,.2568,-.0697,.0022,-.3677,-.0708,.0022,-.2865,-.0708,.0022,-.0812,-.0719,.0022,.1745,-.0719,.0022,-.1361,-.073,.0022,.0384,-.073,.0022,.1196,-.073,.0022,.2557,-.073,.0022,-.3688,-.0741,.0022,-.1668,-.0741,.0022,-.2876,-.0752,.0022,-.0801,-.0752,.0022,.0362,-.0785,.0022,.1723,-.0785,.0022,-.079,-.0796,.0022,-.2876,-.0818,.0022,-.0779,-.0829,.0022,-.0768,-.0862,.0022,-.0757,-.0895,.0022,-.0746,-.0938,.0022,-.1899,-.1015,.0022,-.2865,-.1081,.0022,.2667,-.1081,.0022,-.3863,-.1092,.0022,-.292,-.1092,.0022,-.1844,-.1092,.0022,-.0494,-.1092,.0022,.0209,-.1092,.0022,.158,-.1092,.0022,-.3688,-.1103,.0022,-.3501,-.1103,.0022,-.3424,-.1103,.0022,-.3391,-.1103,.0022,-.3293,-.1103,.0022,-.326,-.1103,.0022,-.3194,-.1103,.0022,-.3161,-.1103,.0022,-.1811,-.1103,.0022,-.1778,-.1103,.0022,-.1668,-.1103,.0022,-.1635,-.1103,.0022,-.1602,-.1103,.0022,-.1526,-.1103,.0022,-.1449,-.1103,.0022,-.1416,-.1103,.0022,-.0527,-.1103,.0022,.0252,-.1103,.0022,.0373,-.1103,.0022,.0483,-.1103,.0022,.0659,-.1103,.0022,.0812,-.1103,.0022,.1043,-.1103,.0022,.1076,-.1103,.0022,.1109,-.1103,.0022,.1613,-.1103,.0022,.1723,-.1103,.0022,.18,-.1103,.0022,.1833,-.1103,.0022,.1866,-.1103,.0022,.203,-.1103,.0022,.2129,-.1103,.0022,.2162,-.1103,.0022,.2272,-.1103,.0022,.2305,-.1103,.0022,.2415,-.1103,.0022,.2557,-.1103,.0022];var fl=(i,t,e)=>t+(e-t)*Math.abs(Math.sin(i.rotY));function Bp(i,t={}){let{reduced:e=!1,spin:n=!1}=t,s=(a,l,c)=>(ir(a,c,e?0:fl(a,.9,2.6)),a.rotX+=(.1-a.rotX)*(1-Math.exp(-c*1.4)),!0),r=(a,l,c)=>{if(ir(a,c,0),!e){Math.abs(a.velY)>.6?a.turn=Math.round(a.rotY/Gn):l>a.nextFlip&&(a.turn+=1,a.nextFlip=l+9);let u=a.turn*Gn+Math.sin(l*.55)*.42;a.rotY+=(u-a.rotY)*(1-Math.exp(-c*1.5))}let h=e?.12:.12+Math.sin(l*.7)*.08;return a.rotX+=(h-a.rotX)*(1-Math.exp(-c*1.4)),Math.abs(a.rotX-h)<.002},o=Io(i,{...t,build:Ap,initial:{rotY:e?-.25:-Gn-.9,rotX:.12,turn:0,nextFlip:12},fitAspect:1.7,studio:"soft",halo:.62,haloSize:6,pose:n?s:r});return o.toHero=()=>o.setPose(r,(a,l)=>{a.velY=0,a.turn=Math.ceil(a.rotY/Gn),a.nextFlip=l+9}),o}function zp(i,t={}){let{reduced:e=!1}=t;return Io(i,{...t,build:Tp,initial:{rotY:e?-.35:-2.4,rotX:.1},fitAspect:1.3,halo:.62,haloSize:5.2,pose(n,s,r){ir(n,r,e?0:fl(n,.16,.6));let o=e?.1:.1+Math.sin(s*.5)*.06;return n.rotX+=(o-n.rotX)*(1-Math.exp(-r*1.4)),Math.abs(n.rotX-o)<.002}})}function Ap({lite:i}){let t=i?110:150,e=new nr(t,new Ze,!1,!1,i?16e4:3e5);e.isolation=80;let n=16;for(let a=0;a<Xi.length;a+=3){let l=Xi[a+2]*1.25;e.addBall(.5+Xi[a],.5+Xi[a+1],.5,(e.isolation+n)*l*l*.3,n)}e.update();let s=e.count,r=new Ee;r.setAttribute("position",new se(e.positionArray.slice(0,s*3),3)),r.setAttribute("normal",new se(e.normalArray.slice(0,s*3),3)),e.geometry.dispose(),r.center(),r.computeBoundingBox();let o=r.boundingBox.max.x-r.boundingBox.min.x;return r.scale(6.2/o,6.2/o,6.2/o),r.computeBoundingSphere(),{geometry:r,source:"metaballs"}}function Tp({lite:i}){let s=[];for(let v=0;v<240;v++){let d=v/240*Math.PI*2,f=Math.sin(d),M=Math.cos(d),_=1+f*f;s.push(new U(M/_,1.5*f*M/_,.26*f))}let o=new Hi(s,!0,"centripetal"),a=i?320:520,l=i?28:44,c=new Zs(o,a,.15,l,!0),h=(v,d,f)=>Math.exp(-(((v-d+1.5)%1-.5)**2)/(2*f*f)),u=v=>{let d=.5+.5*Math.cos(v*Math.PI*4),f=.78+.62*d*d;for(let M of[.1,.37,.6,.86])f+=.32*h(v,M,.018);return f},p=c.attributes.position,m=new U,x=new U;for(let v=0;v<=a;v++){let d=v%a/a;o.getPointAt(d,m);let f=u(d);for(let M=0;M<=l;M++){let _=v*(l+1)+M;x.fromBufferAttribute(p,_).sub(m).multiplyScalar(f).add(m),p.setXYZ(_,x.x,x.y,x.z)}}return c.deleteAttribute("normal"),c.deleteAttribute("uv"),c=ul(c,1e-5),c.computeVertexNormals(),c.scale(1.85,1.85,1.85),c.computeBoundingSphere(),{geometry:c,source:"tube"}}export{zp as initEternal,Bp as initWordmark};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
