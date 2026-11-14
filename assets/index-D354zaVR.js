(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,ee=1029,te=1030,O=1031,ne=1033,k=33776,A=33777,re=33778,ie=33779,j=35840,ae=35841,oe=35842,se=35843,ce=36196,le=37492,ue=37496,de=37488,M=37489,fe=37490,pe=37491,me=37808,he=37809,ge=37810,_e=37811,ve=37812,ye=37813,be=37814,xe=37815,Se=37816,Ce=37817,we=37818,Te=37819,Ee=37820,De=37821,Oe=36492,ke=36494,Ae=36495,je=36283,Me=36284,Ne=36285,Pe=36286,Fe=2300,N=2301,Ie=2302,Le=2303,Re=2400,P=2401,ze=2402,F=3200,Be=`srgb`,Ve=`srgb-linear`,He=`linear`,Ue=`srgb`,We=7680,Ge=35044,Ke=2e3;function qe(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Je(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ye(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Xe(){let e=Ye(`canvas`);return e.style.display=`block`,e}var Ze={};function Qe(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function $e(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function I(...e){e=$e(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function L(...e){e=$e(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function et(...e){let t=e.join(` `);t in Ze||(Ze[t]=!0,I(...e))}function tt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var nt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},rt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},it=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),at=Math.PI/180,ot=180/Math.PI;function st(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(it[e&255]+it[e>>8&255]+it[e>>16&255]+it[e>>24&255]+`-`+it[t&255]+it[t>>8&255]+`-`+it[t>>16&15|64]+it[t>>24&255]+`-`+it[n&63|128]+it[n>>8&255]+`-`+it[n>>16&255]+it[n>>24&255]+it[r&255]+it[r>>8&255]+it[r>>16&255]+it[r>>24&255]).toLowerCase()}function ct(e,t,n){return Math.max(t,Math.min(n,e))}function lt(e,t){return(e%t+t)%t}function ut(e,t,n){return(1-n)*e+n*t}function dt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function ft(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var pt=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},mt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:I(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ht.copy(this).projectOnVector(e),this.sub(ht)}reflect(e){return this.sub(ht.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ht=new R,gt=new mt,z=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return et(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(_t.makeScale(e,t)),this}rotate(e){return et(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(_t.makeRotation(-e)),this}translate(e,t){return et(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(_t.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},_t=new z,vt=new z().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yt=new z().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bt(){let e={enabled:!0,workingColorSpace:Ve,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=St(e.r),e.g=St(e.g),e.b=St(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Ct(e.r),e.g=Ct(e.g),e.b=Ct(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?He:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return et(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return et(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ve]:{primaries:t,whitePoint:r,transfer:He,toXYZ:vt,fromXYZ:yt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Be},outputColorSpaceConfig:{drawingBufferColorSpace:Be}},[Be]:{primaries:t,whitePoint:r,transfer:Ue,toXYZ:vt,fromXYZ:yt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Be}}}),e}var xt=bt();function St(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Ct(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var wt,Tt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{wt===void 0&&(wt=Ye(`canvas`)),wt.width=e.width,wt.height=e.height;let t=wt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=wt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ye(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=St(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(St(t[e]/255)*255):t[e]=St(t[e]);return{data:t,width:e.width,height:e.height}}return I(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Et=0,Dt=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Et++}),this.uuid=st(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Ot(r[t].image)):e.push(Ot(r[t]))}else e=Ot(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Ot(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Tt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(I(`Texture: Unable to serialize Texture.`),{})}var kt=0,At=new R,jt=class r extends rt{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kt++}),this.uuid=st(),this.name=``,this.source=new Dt(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new z,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(At).x}get height(){return this.source.getSize(At).y}get depth(){return this.source.getSize(At).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){I(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){I(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};jt.DEFAULT_IMAGE=null,jt.DEFAULT_MAPPING=300,jt.DEFAULT_ANISOTROPY=1;var Mt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Nt=class extends rt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t),this.textures=[];let r=new jt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Dt(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Pt=class extends Nt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ft=class extends jt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},It=class extends jt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Lt=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Rt.setFromMatrixColumn(e,0).length(),i=1/Rt.setFromMatrixColumn(e,1).length(),a=1/Rt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bt,e,Vt)}lookAt(e,t,n){let r=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),Ht.crossVectors(n,Wt),Ht.lengthSq()===0&&(Math.abs(n.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),Ht.crossVectors(n,Wt)),Ht.normalize(),Ut.crossVectors(Wt,Ht),r[0]=Ht.x,r[4]=Ut.x,r[8]=Wt.x,r[1]=Ht.y,r[5]=Ut.y,r[9]=Wt.y,r[2]=Ht.z,r[6]=Ut.z,r[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],ee=r[13],te=r[2],O=r[6],ne=r[10],k=r[14],A=r[3],re=r[7],ie=r[11],j=r[15];return i[0]=a*x+o*T+s*te+c*A,i[4]=a*S+o*E+s*O+c*re,i[8]=a*C+o*D+s*ne+c*ie,i[12]=a*w+o*ee+s*k+c*j,i[1]=l*x+u*T+d*te+f*A,i[5]=l*S+u*E+d*O+f*re,i[9]=l*C+u*D+d*ne+f*ie,i[13]=l*w+u*ee+d*k+f*j,i[2]=p*x+m*T+h*te+g*A,i[6]=p*S+m*E+h*O+g*re,i[10]=p*C+m*D+h*ne+g*ie,i[14]=p*w+m*ee+h*k+g*j,i[3]=_*x+v*T+y*te+b*A,i[7]=_*S+v*E+y*O+b*re,i[11]=_*C+v*D+y*ne+b*ie,i[15]=_*w+v*ee+y*k+b*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,ee=d*g-f*h,te=_*ee-v*D+y*E+b*T-x*w+S*C;if(te===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/te;return e[0]=(o*ee-s*D+c*E)*O,e[1]=(r*D-n*ee-i*E)*O,e[2]=(m*S-h*x+g*b)*O,e[3]=(d*x-u*S-f*b)*O,e[4]=(s*T-a*ee-c*w)*O,e[5]=(t*ee-r*T+i*w)*O,e[6]=(h*y-p*S-g*v)*O,e[7]=(l*S-d*y+f*v)*O,e[8]=(a*D-o*T+c*C)*O,e[9]=(n*T-t*D-i*C)*O,e[10]=(p*x-m*y+g*_)*O,e[11]=(u*y-l*x-f*_)*O,e[12]=(o*w-a*E-s*C)*O,e[13]=(t*E-n*w+r*C)*O,e[14]=(m*v-p*b-h*_)*O,e[15]=(l*b-u*v+d*_)*O,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Rt.set(r[0],r[1],r[2]).length(),o=Rt.set(r[4],r[5],r[6]).length(),s=Rt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),zt.copy(this);let c=1/a,l=1/o,u=1/s;return zt.elements[0]*=c,zt.elements[1]*=c,zt.elements[2]*=c,zt.elements[4]*=l,zt.elements[5]*=l,zt.elements[6]*=l,zt.elements[8]*=u,zt.elements[9]*=u,zt.elements[10]*=u,t.setFromRotationMatrix(zt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ke,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ke,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Rt=new R,zt=new Lt,Bt=new R(0,0,0),Vt=new R(1,1,1),Ht=new R,Ut=new R,Wt=new R,Gt=new Lt,Kt=new mt,qt=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-ct(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(ct(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:I(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gt.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gt,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kt.setFromEuler(this),this.setFromQuaternion(Kt,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qt.DEFAULT_ORDER=`XYZ`;var Jt=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},Yt=0,Xt=new R,Zt=new mt,Qt=new Lt,$t=new R,en=new R,tn=new R,nn=new mt,rn=new R(1,0,0),an=new R(0,1,0),on=new R(0,0,1),sn={type:`added`},cn={type:`removed`},ln={type:`childadded`,child:null},un={type:`childremoved`,child:null},dn=class e extends rt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yt++}),this.uuid=st(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new R,n=new qt,r=new mt,i=new R(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Lt},normalMatrix:{value:new z}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jt,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zt.setFromAxisAngle(e,t),this.quaternion.multiply(Zt),this}rotateOnWorldAxis(e,t){return Zt.setFromAxisAngle(e,t),this.quaternion.premultiply(Zt),this}rotateX(e){return this.rotateOnAxis(rn,e)}rotateY(e){return this.rotateOnAxis(an,e)}rotateZ(e){return this.rotateOnAxis(on,e)}translateOnAxis(e,t){return Xt.copy(e).applyQuaternion(this.quaternion),this.position.add(Xt.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rn,e)}translateY(e){return this.translateOnAxis(an,e)}translateZ(e){return this.translateOnAxis(on,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$t.copy(e):$t.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),en.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qt.lookAt(en,$t,this.up):Qt.lookAt($t,en,this.up),this.quaternion.setFromRotationMatrix(Qt),r&&(Qt.extractRotation(r.matrixWorld),Zt.setFromRotationMatrix(Qt),this.quaternion.premultiply(Zt.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(L(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sn),ln.child=e,this.dispatchEvent(ln),ln.child=null):L(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cn),un.child=e,this.dispatchEvent(un),un.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sn),ln.child=e,this.dispatchEvent(ln),ln.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(en,e,tn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(en,nn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};dn.DEFAULT_UP=new R(0,1,0),dn.DEFAULT_MATRIX_AUTO_UPDATE=!0,dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fn=class extends dn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},pn={type:`move`},mn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new fn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},hn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gn={h:0,s:0,l:0},_n={h:0,s:0,l:0};function vn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var B=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Be){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=xt.workingColorSpace){if(e=lt(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=vn(i,r,e+1/3),this.g=vn(i,r,e),this.b=vn(i,r,e-1/3)}return xt.colorSpaceToWorking(this,r),this}setStyle(e,t=Be){function n(t){t!==void 0&&parseFloat(t)<1&&I(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:I(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);I(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Be){let n=hn[e.toLowerCase()];return n===void 0?I(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=St(e.r),this.g=St(e.g),this.b=St(e.b),this}copyLinearToSRGB(e){return this.r=Ct(e.r),this.g=Ct(e.g),this.b=Ct(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Be){return xt.workingToColorSpace(yn.copy(this),e),Math.round(ct(yn.r*255,0,255))*65536+Math.round(ct(yn.g*255,0,255))*256+Math.round(ct(yn.b*255,0,255))}getHexString(e=Be){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(yn.copy(this),t);let n=yn.r,r=yn.g,i=yn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=Be){xt.workingToColorSpace(yn.copy(this),e);let t=yn.r,n=yn.g,r=yn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(gn),this.setHSL(gn.h+e,gn.s+t,gn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gn),e.getHSL(_n);let n=ut(gn.h,_n.h,t),r=ut(gn.s,_n.s,t),i=ut(gn.l,_n.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new B;B.NAMES=hn;var bn=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new B(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},xn=class extends dn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qt,this.environmentIntensity=1,this.environmentRotation=new qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Sn=new R,Cn=new R,wn=new R,Tn=new R,En=new R,Dn=new R,On=new R,kn=new R,An=new R,jn=new R,Mn=new Mt,Nn=new Mt,Pn=new Mt,Fn=class e{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Sn.subVectors(e,t),r.cross(Sn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Sn.subVectors(r,t),Cn.subVectors(n,t),wn.subVectors(e,t);let a=Sn.dot(Sn),o=Sn.dot(Cn),s=Sn.dot(wn),c=Cn.dot(Cn),l=Cn.dot(wn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Tn)!==null&&Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Tn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Tn.x),s.addScaledVector(a,Tn.y),s.addScaledVector(o,Tn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Mn.setScalar(0),Nn.setScalar(0),Pn.setScalar(0),Mn.fromBufferAttribute(e,t),Nn.fromBufferAttribute(e,n),Pn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Mn,i.x),a.addScaledVector(Nn,i.y),a.addScaledVector(Pn,i.z),a}static isFrontFacing(e,t,n,r){return Sn.subVectors(n,t),Cn.subVectors(e,t),Sn.cross(Cn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),Sn.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;En.subVectors(r,n),Dn.subVectors(i,n),kn.subVectors(e,n);let s=En.dot(kn),c=Dn.dot(kn);if(s<=0&&c<=0)return t.copy(n);An.subVectors(e,r);let l=En.dot(An),u=Dn.dot(An);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(En,a);jn.subVectors(e,i);let f=En.dot(jn),p=Dn.dot(jn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Dn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return On.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(On,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(En,a).addScaledVector(Dn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},In=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Rn):Rn.fromBufferAttribute(r,t),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),zn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),zn.copy(e.boundingBox)),zn.applyMatrix4(e.matrixWorld),this.union(zn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Kn),qn.subVectors(this.max,Kn),Bn.subVectors(e.a,Kn),Vn.subVectors(e.b,Kn),Hn.subVectors(e.c,Kn),Un.subVectors(Vn,Bn),Wn.subVectors(Hn,Vn),Gn.subVectors(Bn,Hn);let t=[0,-Un.z,Un.y,0,-Wn.z,Wn.y,0,-Gn.z,Gn.y,Un.z,0,-Un.x,Wn.z,0,-Wn.x,Gn.z,0,-Gn.x,-Un.y,Un.x,0,-Wn.y,Wn.x,0,-Gn.y,Gn.x,0];return!Xn(t,Bn,Vn,Hn,qn)||(t=[1,0,0,0,1,0,0,0,1],!Xn(t,Bn,Vn,Hn,qn))?!1:(Jn.crossVectors(Un,Wn),t=[Jn.x,Jn.y,Jn.z],Xn(t,Bn,Vn,Hn,qn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ln=[new R,new R,new R,new R,new R,new R,new R,new R],Rn=new R,zn=new In,Bn=new R,Vn=new R,Hn=new R,Un=new R,Wn=new R,Gn=new R,Kn=new R,qn=new R,Jn=new R,Yn=new R;function Xn(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Yn.fromArray(e,a);let o=i.x*Math.abs(Yn.x)+i.y*Math.abs(Yn.y)+i.z*Math.abs(Yn.z),s=t.dot(Yn),c=n.dot(Yn),l=r.dot(Yn);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Zn=new R,Qn=new pt,$n=0,er=class extends rt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$n++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ge,this.updateRanges=[],this.gpuType=h,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qn.fromBufferAttribute(this,t),Qn.applyMatrix3(e),this.setXY(t,Qn.x,Qn.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zn.fromBufferAttribute(this,t),Zn.applyMatrix3(e),this.setXYZ(t,Zn.x,Zn.y,Zn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zn.fromBufferAttribute(this,t),Zn.applyMatrix4(e),this.setXYZ(t,Zn.x,Zn.y,Zn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zn.fromBufferAttribute(this,t),Zn.applyNormalMatrix(e),this.setXYZ(t,Zn.x,Zn.y,Zn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zn.fromBufferAttribute(this,t),Zn.transformDirection(e),this.setXYZ(t,Zn.x,Zn.y,Zn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=dt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dt(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dt(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dt(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),r=ft(r,this.array),i=ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:`dispose`})}},tr=class extends er{constructor(e,t,n){super(new Uint16Array(e),t,n)}},nr=class extends er{constructor(e,t,n){super(new Uint32Array(e),t,n)}},rr=class extends er{constructor(e,t,n){super(new Float32Array(e),t,n)}},ir=new In,ar=new R,or=new R,sr=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?ir.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ar.subVectors(e,this.center);let t=ar.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(ar,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(or.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ar.copy(e.center).add(or)),this.expandByPoint(ar.copy(e.center).sub(or))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},cr=0,lr=new Lt,ur=new dn,dr=new R,fr=new In,pr=new In,mr=new R,hr=class e extends rt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cr++}),this.uuid=st(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(qe(e)?nr:tr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new z().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return lr.makeRotationFromQuaternion(e),this.applyMatrix4(lr),this}rotateX(e){return lr.makeRotationX(e),this.applyMatrix4(lr),this}rotateY(e){return lr.makeRotationY(e),this.applyMatrix4(lr),this}rotateZ(e){return lr.makeRotationZ(e),this.applyMatrix4(lr),this}translate(e,t,n){return lr.makeTranslation(e,t,n),this.applyMatrix4(lr),this}scale(e,t,n){return lr.makeScale(e,t,n),this.applyMatrix4(lr),this}lookAt(e){return ur.lookAt(e),ur.updateMatrix(),this.applyMatrix4(ur.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new rr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&I(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){L(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];fr.setFromBufferAttribute(n),this.morphTargetsRelative?(mr.addVectors(this.boundingBox.min,fr.min),this.boundingBox.expandByPoint(mr),mr.addVectors(this.boundingBox.max,fr.max),this.boundingBox.expandByPoint(mr)):(this.boundingBox.expandByPoint(fr.min),this.boundingBox.expandByPoint(fr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&L(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){L(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(fr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];pr.setFromBufferAttribute(n),this.morphTargetsRelative?(mr.addVectors(fr.min,pr.min),fr.expandByPoint(mr),mr.addVectors(fr.max,pr.max),fr.expandByPoint(mr)):(fr.expandByPoint(pr.min),fr.expandByPoint(pr.max))}fr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)mr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(mr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)mr.fromBufferAttribute(a,t),o&&(dr.fromBufferAttribute(e,t),mr.add(dr)),r=Math.max(r,n.distanceToSquared(mr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&L(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){L(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new er(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new R,s[e]=new R;let c=new R,l=new R,u=new R,d=new pt,f=new pt,p=new pt,m=new R,h=new R;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new R,y=new R,b=new R,x=new R;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new er(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new R,i=new R,a=new R,o=new R,s=new R,c=new R,l=new R,u=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mr.fromBufferAttribute(e,t),mr.normalize(),e.setXYZ(t,mr.x,mr.y,mr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new er(a,r,i)}if(this.index===null)return I(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},gr=0,_r=class extends rt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gr++}),this.uuid=st(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new B(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=We,this.stencilZFail=We,this.stencilZPass=We,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){I(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){I(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new B().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new pt().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},vr=new R,yr=new R,br=new R,xr=new R,Sr=new R,Cr=new R,wr=new R,Tr=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=vr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vr.copy(this.origin).addScaledVector(this.direction,t),vr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){yr.copy(e).add(t).multiplyScalar(.5),br.copy(t).sub(e).normalize(),xr.copy(this.origin).sub(yr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(br),o=xr.dot(this.direction),s=-xr.dot(br),c=xr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(yr).addScaledVector(br,d),f}intersectSphere(e,t){vr.subVectors(e.center,this.origin);let n=vr.dot(this.direction),r=vr.dot(vr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,vr)!==null}intersectTriangle(e,t,n,r,i){Sr.subVectors(t,e),Cr.subVectors(n,e),wr.crossVectors(Sr,Cr);let a=this.direction.dot(wr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;xr.subVectors(this.origin,e);let s=o*this.direction.dot(Cr.crossVectors(xr,Cr));if(s<0)return null;let c=o*this.direction.dot(Sr.cross(xr));if(c<0||s+c>a)return null;let l=-o*xr.dot(wr);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Er=class extends _r{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new B(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qt,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Dr=new Lt,Or=new Tr,kr=new sr,Ar=new R,jr=new R,Mr=new R,Nr=new R,Pr=new R,Fr=new R,Ir=new R,Lr=new R,V=class extends dn{constructor(e=new hr,t=new Er){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Fr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Pr.fromBufferAttribute(s,e),a?Fr.addScaledVector(Pr,r):Fr.addScaledVector(Pr.sub(t),r))}t.add(Fr)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(i),Or.copy(e.ray).recast(e.near),!(kr.containsPoint(Or.origin)===!1&&(Or.intersectSphere(kr,Ar)===null||Or.origin.distanceToSquared(Ar)>(e.far-e.near)**2))&&(Dr.copy(i).invert(),Or.copy(e.ray).applyMatrix4(Dr),(n.boundingBox===null||Or.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Or)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=zr(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=zr(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=zr(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=zr(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Rr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Lr.copy(s),Lr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Lr);return l<n.near||l>n.far?null:{distance:l,point:Lr.clone(),object:e}}function zr(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,jr),e.getVertexPosition(c,Mr),e.getVertexPosition(l,Nr);let u=Rr(e,t,n,r,jr,Mr,Nr,Ir);if(u){let e=new R;Fn.getBarycoord(Ir,jr,Mr,Nr,e),i&&(u.uv=Fn.getInterpolatedAttribute(i,s,c,l,e,new pt)),a&&(u.uv1=Fn.getInterpolatedAttribute(a,s,c,l,e,new pt)),o&&(u.normal=Fn.getInterpolatedAttribute(o,s,c,l,e,new R),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new R,materialIndex:0};Fn.getNormal(jr,Mr,Nr,t.normal),u.face=t,u.barycoord=e}return u}var Br=class extends jt{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Vr=new R,Hr=new R,Ur=new z,Wr=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Vr.subVectors(n,t).cross(Hr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Vr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ur.getNormalMatrix(e),r=this.coplanarPoint(Vr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Gr=new sr,Kr=new pt(.5,.5),qr=new R,Jr=class{constructor(e=new Wr,t=new Wr,n=new Wr,r=new Wr,i=new Wr,a=new Wr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ke,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){return Gr.center.set(0,0,0),Gr.radius=.7071067811865476+Kr.distanceTo(e.center),Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(qr.x=r.normal.x>0?e.max.x:e.min.x,qr.y=r.normal.y>0?e.max.y:e.min.y,qr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Yr=class extends _r{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new B(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Xr=new R,Zr=new R,Qr=new Lt,$r=new Tr,ei=new sr,ti=new R,ni=new R,ri=class extends dn{constructor(e=new hr,t=new Yr){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Xr.fromBufferAttribute(t,e-1),Zr.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Xr.distanceTo(Zr);e.setAttribute(`lineDistance`,new rr(n,1))}else I(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ei.copy(n.boundingSphere),ei.applyMatrix4(r),ei.radius+=i,e.ray.intersectsSphere(ei)===!1)return;Qr.copy(r).invert(),$r.copy(e.ray).applyMatrix4(Qr);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=ii(this,e,$r,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=ii(this,e,$r,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=ii(this,e,$r,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=ii(this,e,$r,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function ii(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(Xr.fromBufferAttribute(s,i),Zr.fromBufferAttribute(s,a),n.distanceSqToSegment(Xr,Zr,ti,ni)>r)return;ti.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(ti);if(!(c<t.near||c>t.far))return{distance:c,point:ni.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var ai=new R,oi=new R,si=class extends ri{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)ai.fromBufferAttribute(t,e),oi.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+ai.distanceTo(oi);e.setAttribute(`lineDistance`,new rr(n,1))}else I(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},ci=class extends _r{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new B(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},li=new Lt,ui=new Tr,di=new sr,fi=new R,pi=class extends dn{constructor(e=new hr,t=new ci){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),di.copy(n.boundingSphere),di.applyMatrix4(r),di.radius+=i,e.ray.intersectsSphere(di)===!1)return;li.copy(r).invert(),ui.copy(e.ray).applyMatrix4(li);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);fi.fromBufferAttribute(l,n),mi(fi,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)fi.fromBufferAttribute(l,a),mi(fi,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function mi(e,t,n,r,i,a,o){let s=ui.distanceSqToPoint(e);if(s<n){let n=new R;ui.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var hi=class extends jt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},gi=class extends jt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},_i=class extends jt{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},vi=class extends _i{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},yi=class extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},bi=class e extends hr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new rr(c,3)),this.setAttribute(`normal`,new rr(l,3)),this.setAttribute(`uv`,new rr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new R;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},xi=class e extends hr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new R,l=new pt;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new rr(a,3)),this.setAttribute(`normal`,new rr(o,3)),this.setAttribute(`uv`,new rr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Si=class e extends hr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new rr(u,3)),this.setAttribute(`normal`,new rr(d,3)),this.setAttribute(`uv`,new rr(f,2));function _(){let a=new R,_=new R,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new pt,m=new R,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ci=class e extends hr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new rr(i,3)),this.setAttribute(`normal`,new rr(i.slice(),3)),this.setAttribute(`uv`,new rr(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new R,r=new R,i=new R;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new R;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new R;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new R,t=new R,n=new R,r=new R,o=new pt,s=new pt,c=new pt;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},wi=new R,Ti=new R,Ei=new R,Di=new Fn,Oi=class extends hr{constructor(e=null,t=1){if(super(),this.type=`EdgesGeometry`,this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=1e4,r=Math.cos(at*t),i=e.getIndex(),a=e.getAttribute(`position`),o=i?i.count:a.count,s=[0,0,0],c=[`a`,`b`,`c`],l=[,,,],u={},d=[];for(let e=0;e<o;e+=3){i?(s[0]=i.getX(e),s[1]=i.getX(e+1),s[2]=i.getX(e+2)):(s[0]=e,s[1]=e+1,s[2]=e+2);let{a:t,b:o,c:f}=Di;if(t.fromBufferAttribute(a,s[0]),o.fromBufferAttribute(a,s[1]),f.fromBufferAttribute(a,s[2]),Di.getNormal(Ei),l[0]=`${Math.round(t.x*n)},${Math.round(t.y*n)},${Math.round(t.z*n)}`,l[1]=`${Math.round(o.x*n)},${Math.round(o.y*n)},${Math.round(o.z*n)}`,l[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,l[0]!==l[1]&&l[1]!==l[2]&&l[2]!==l[0])for(let e=0;e<3;e++){let t=(e+1)%3,n=l[e],i=l[t],a=Di[c[e]],o=Di[c[t]],f=`${n}_${i}`,p=`${i}_${n}`;p in u&&u[p]?(Ei.dot(u[p].normal)<=r&&(d.push(a.x,a.y,a.z),d.push(o.x,o.y,o.z)),u[p]=null):f in u||(u[f]={index0:s[e],index1:s[t],normal:Ei.clone()})}}for(let e in u)if(u[e]){let{index0:t,index1:n}=u[e];wi.fromBufferAttribute(a,t),Ti.fromBufferAttribute(a,n),d.push(wi.x,wi.y,wi.z),d.push(Ti.x,Ti.y,Ti.z)}this.setAttribute(`position`,new rr(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ki=class e extends Ci{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Ai=class e extends hr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new rr(p,3)),this.setAttribute(`normal`,new rr(m,3)),this.setAttribute(`uv`,new rr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},ji=class e extends hr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new R,p=new pt;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new rr(s,3)),this.setAttribute(`normal`,new rr(c,3)),this.setAttribute(`uv`,new rr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Mi=class e extends hr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new R,d=new R,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new rr(p,3)),this.setAttribute(`normal`,new rr(m,3)),this.setAttribute(`uv`,new rr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Ni(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Fi(i))i.isRenderTargetTexture?(I(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Fi(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Pi(e){let t={};for(let n=0;n<e.length;n++){let r=Ni(e[n]);for(let e in r)t[e]=r[e]}return t}function Fi(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Ii(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Li(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xt.workingColorSpace}var Ri={clone:Ni,merge:Pi},zi=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bi=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vi=class extends _r{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zi,this.fragmentShader=Bi,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ni(e.uniforms),this.uniformsGroups=Ii(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new B().setHex(r.value);break;case`v2`:this.uniforms[n].value=new pt().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new R().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Mt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new z().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Lt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Hi=class extends Vi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Ui=class extends _r{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new B(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new B(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qt,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Wi=class extends _r{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=F,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Gi=class extends _r{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ki(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}var qi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Ji=class extends qi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Re,endingEnd:Re}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case P:i=e,o=2*t-n;break;case ze:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case P:a=e,s=2*n-t;break;case ze:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Yi=class extends qi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Xi=class extends qi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Zi=class extends qi{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=(n-t)/(r-t),S,C,w,T,E;for(let e=0;e<8;e++){S=x*x,C=S*x,w=1-x,T=w*w,E=T*w;let e=E*t+3*T*x*g+3*w*S*y+C*r-n;if(Math.abs(e)<1e-10)break;let i=3*T*(g-t)+6*w*x*(y-g)+3*S*(r-y);if(Math.abs(i)<1e-10)break;x-=e/i,x=Math.max(0,Math.min(1,x))}i[p]=E*o+3*T*x*_+3*w*S*b+C*m}return i}},Qi=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ki(t,this.TimeBufferType),this.values=Ki(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ki(e.times,Array),values:Ki(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ji(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Zi(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Fe:t=this.InterpolantFactoryMethodDiscrete;break;case N:t=this.InterpolantFactoryMethodLinear;break;case Ie:t=this.InterpolantFactoryMethodSmooth;break;case Le:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return I(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fe;case this.InterpolantFactoryMethodLinear:return N;case this.InterpolantFactoryMethodSmooth:return Ie;case this.InterpolantFactoryMethodBezier:return Le}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(L(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(L(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){L(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){L(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Je(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){L(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ie,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Qi.prototype.ValueTypeName=``,Qi.prototype.TimeBufferType=Float32Array,Qi.prototype.ValueBufferType=Float32Array,Qi.prototype.DefaultInterpolation=N;var $i=class extends Qi{constructor(e,t,n){super(e,t,n)}};$i.prototype.ValueTypeName=`bool`,$i.prototype.ValueBufferType=Array,$i.prototype.DefaultInterpolation=Fe,$i.prototype.InterpolantFactoryMethodLinear=void 0,$i.prototype.InterpolantFactoryMethodSmooth=void 0;var ea=class extends Qi{constructor(e,t,n,r){super(e,t,n,r)}};ea.prototype.ValueTypeName=`color`;var ta=class extends Qi{constructor(e,t,n,r){super(e,t,n,r)}};ta.prototype.ValueTypeName=`number`;var na=class extends qi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)mt.slerpFlat(i,0,a,c-o,a,c,s);return i}},ra=class extends Qi{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new na(this.times,this.values,this.getValueSize(),e)}};ra.prototype.ValueTypeName=`quaternion`,ra.prototype.InterpolantFactoryMethodSmooth=void 0;var ia=class extends Qi{constructor(e,t,n){super(e,t,n)}};ia.prototype.ValueTypeName=`string`,ia.prototype.ValueBufferType=Array,ia.prototype.DefaultInterpolation=Fe,ia.prototype.InterpolantFactoryMethodLinear=void 0,ia.prototype.InterpolantFactoryMethodSmooth=void 0;var aa=class extends Qi{constructor(e,t,n,r){super(e,t,n,r)}};aa.prototype.ValueTypeName=`vector`;var oa=class extends dn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new B(e),this.intensity=t}dispose(){this.dispatchEvent({type:`dispose`})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},sa=class extends oa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new B(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ca=new Lt,la=new R,ua=new R,da=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=l,this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jr,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;la.setFromMatrixPosition(e.matrixWorld),t.position.copy(la),ua.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ua),t.updateMatrixWorld(),ca.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ca,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===2001||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ca)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},fa=new R,pa=new mt,ma=new R,ha=class extends dn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=Ke,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(fa,pa,ma),ma.x===1&&ma.y===1&&ma.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fa,pa,ma.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(fa,pa,ma),ma.x===1&&ma.y===1&&ma.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fa,pa,ma.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ga=new R,_a=new pt,va=new pt,ya=class extends ha{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ot*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(at*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ot*2*Math.atan(Math.tan(at*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ga.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ga.x,ga.y).multiplyScalar(-e/ga.z),ga.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ga.x,ga.y).multiplyScalar(-e/ga.z)}getViewSize(e,t){return this.getViewBounds(e,_a,va),t.subVectors(va,_a)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(at*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ba=class extends da{constructor(){super(new ya(90,1,.5,500)),this.isPointLightShadow=!0}},xa=class extends oa{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new ba}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Sa=class extends ha{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ca=class extends da{constructor(){super(new Sa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},wa=class extends oa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new Ca}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ta=-90,Ea=1,Da=class extends dn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ya(Ta,Ea,e,t);r.layers=this.layers,this.add(r);let i=new ya(Ta,Ea,e,t);i.layers=this.layers,this.add(i);let a=new ya(Ta,Ea,e,t);a.layers=this.layers,this.add(a);let o=new ya(Ta,Ea,e,t);o.layers=this.layers,this.add(o);let s=new ya(Ta,Ea,e,t);s.layers=this.layers,this.add(s);let c=new ya(Ta,Ea,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Oa=class extends ya{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ka=`\\[\\]\\.:\\/`,Aa=RegExp(`[\\[\\]\\.:\\/]`,`g`),ja=`[^\\[\\]\\.:\\/]`,Ma=`[^`+ka.replace(`\\.`,``)+`]`,Na=`((?:WC+[\\/:])*)`.replace(`WC`,ja),Pa=`(WCOD+)?`.replace(`WCOD`,Ma),Fa=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,ja),Ia=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,ja),La=RegExp(`^`+Na+Pa+Fa+Ia+`$`),Ra=[`material`,`materials`,`bones`,`map`],za=class{constructor(e,t,n){let r=n||Ba.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ba=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Aa,``)}static parseTrackName(e){let t=La.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ra.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){I(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){L(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){L(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){L(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){L(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){L(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){L(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){L(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;L(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){L(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){L(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ba.Composite=za,Ba.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ba.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ba.prototype.GetterByBindingType=[Ba.prototype._getValue_direct,Ba.prototype._getValue_array,Ba.prototype._getValue_arrayElement,Ba.prototype._getValue_toArray],Ba.prototype.SetterByBindingTypeAndVersioning=[[Ba.prototype._setValue_direct,Ba.prototype._setValue_direct_setNeedsUpdate,Ba.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ba.prototype._setValue_array,Ba.prototype._setValue_array_setNeedsUpdate,Ba.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ba.prototype._setValue_arrayElement,Ba.prototype._setValue_arrayElement_setNeedsUpdate,Ba.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ba.prototype._setValue_fromArray,Ba.prototype._setValue_fromArray_setNeedsUpdate,Ba.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function Va(e,t,n,r){let i=Ha(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case ee:return e*t/i.components*i.byteLength;case te:return e*t*2/i.components*i.byteLength;case O:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case ne:return e*t*4/i.components*i.byteLength;case k:case A:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case re:case ie:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ae:case se:return Math.max(e,16)*Math.max(t,8)/4;case j:case oe:return Math.max(e,8)*Math.max(t,8)/2;case ce:case le:case de:case M:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ue:case fe:case pe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case me:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case he:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ge:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case _e:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ye:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case be:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case xe:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Se:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case we:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Te:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ee:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case De:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Oe:case ke:case Ae:return Math.ceil(e/4)*Math.ceil(t/4)*16;case je:case Me:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ne:case Pe:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Ha(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`185`}})),typeof window<`u`&&(window.__THREE__?I(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`185`);function Ua(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Wa(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Ga={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},H={common:{diffuse:{value:new B(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new z},alphaMap:{value:null},alphaMapTransform:{value:new z},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new z}},envmap:{envMap:{value:null},envMapRotation:{value:new z},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new z}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new z}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new z},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new z},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new z},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new z}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new z}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new z}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new B(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new B(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new z},alphaTest:{value:0},uvTransform:{value:new z}},sprite:{diffuse:{value:new B(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new z},alphaMap:{value:null},alphaMapTransform:{value:new z},alphaTest:{value:0}}},Ka={basic:{uniforms:Pi([H.common,H.specularmap,H.envmap,H.aomap,H.lightmap,H.fog]),vertexShader:Ga.meshbasic_vert,fragmentShader:Ga.meshbasic_frag},lambert:{uniforms:Pi([H.common,H.specularmap,H.envmap,H.aomap,H.lightmap,H.emissivemap,H.bumpmap,H.normalmap,H.displacementmap,H.fog,H.lights,{emissive:{value:new B(0)},envMapIntensity:{value:1}}]),vertexShader:Ga.meshlambert_vert,fragmentShader:Ga.meshlambert_frag},phong:{uniforms:Pi([H.common,H.specularmap,H.envmap,H.aomap,H.lightmap,H.emissivemap,H.bumpmap,H.normalmap,H.displacementmap,H.fog,H.lights,{emissive:{value:new B(0)},specular:{value:new B(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ga.meshphong_vert,fragmentShader:Ga.meshphong_frag},standard:{uniforms:Pi([H.common,H.envmap,H.aomap,H.lightmap,H.emissivemap,H.bumpmap,H.normalmap,H.displacementmap,H.roughnessmap,H.metalnessmap,H.fog,H.lights,{emissive:{value:new B(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ga.meshphysical_vert,fragmentShader:Ga.meshphysical_frag},toon:{uniforms:Pi([H.common,H.aomap,H.lightmap,H.emissivemap,H.bumpmap,H.normalmap,H.displacementmap,H.gradientmap,H.fog,H.lights,{emissive:{value:new B(0)}}]),vertexShader:Ga.meshtoon_vert,fragmentShader:Ga.meshtoon_frag},matcap:{uniforms:Pi([H.common,H.bumpmap,H.normalmap,H.displacementmap,H.fog,{matcap:{value:null}}]),vertexShader:Ga.meshmatcap_vert,fragmentShader:Ga.meshmatcap_frag},points:{uniforms:Pi([H.points,H.fog]),vertexShader:Ga.points_vert,fragmentShader:Ga.points_frag},dashed:{uniforms:Pi([H.common,H.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ga.linedashed_vert,fragmentShader:Ga.linedashed_frag},depth:{uniforms:Pi([H.common,H.displacementmap]),vertexShader:Ga.depth_vert,fragmentShader:Ga.depth_frag},normal:{uniforms:Pi([H.common,H.bumpmap,H.normalmap,H.displacementmap,{opacity:{value:1}}]),vertexShader:Ga.meshnormal_vert,fragmentShader:Ga.meshnormal_frag},sprite:{uniforms:Pi([H.sprite,H.fog]),vertexShader:Ga.sprite_vert,fragmentShader:Ga.sprite_frag},background:{uniforms:{uvTransform:{value:new z},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ga.background_vert,fragmentShader:Ga.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new z}},vertexShader:Ga.backgroundCube_vert,fragmentShader:Ga.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ga.cube_vert,fragmentShader:Ga.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ga.equirect_vert,fragmentShader:Ga.equirect_frag},distance:{uniforms:Pi([H.common,H.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ga.distance_vert,fragmentShader:Ga.distance_frag},shadow:{uniforms:Pi([H.lights,H.fog,{color:{value:new B(0)},opacity:{value:1}}]),vertexShader:Ga.shadow_vert,fragmentShader:Ga.shadow_frag}};Ka.physical={uniforms:Pi([Ka.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new z},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new z},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new z},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new z},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new z},sheen:{value:0},sheenColor:{value:new B(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new z},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new z},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new z},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new z},attenuationDistance:{value:0},attenuationColor:{value:new B(0)},specularColor:{value:new B(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new z},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new z},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new z}}]),vertexShader:Ga.meshphysical_vert,fragmentShader:Ga.meshphysical_frag};var qa={r:0,b:0,g:0},Ja=new Lt,Ya=new z;Ya.set(-1,0,0,0,1,0,0,0,1);function Xa(e,t,n,r,i,a){let o=new B(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new V(new bi(1,1,1),new Vi({name:`BackgroundCubeMaterial`,uniforms:Ni(Ka.backgroundCube.uniforms),vertexShader:Ka.backgroundCube.vertexShader,fragmentShader:Ka.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ja.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ya),l.material.toneMapped=xt.getTransfer(i.colorSpace)!==Ue,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new V(new Ai(2,2),new Vi({name:`BackgroundMaterial`,uniforms:Ni(Ka.background.uniforms),vertexShader:Ka.background.vertexShader,fragmentShader:Ka.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=xt.getTransfer(i.colorSpace)!==Ue,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(qa,Li(e)),n.buffers.color.setClear(qa.r,qa.g,qa.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Za(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Qa(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function $a(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(I(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&I(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function eo(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Wr,s=new z,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var to=4,no=[.125,.215,.35,.446,.526,.582],ro=20,io=256,ao=new Sa,oo=new B,so=null,co=0,lo=0,uo=!1,fo=new R,po=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=fo}=i;so=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(so,co,lo),this._renderer.xr.enabled=uo,e.scissorTest=!1,go(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),so=this._renderer.getRenderTarget(),co=this._renderer.getActiveCubeFace(),lo=this._renderer.getActiveMipmapLevel(),uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:o,minFilter:o,generateMipmaps:!1,type:g,format:w,colorSpace:Ve,depthBuffer:!1},r=ho(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ho(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=mo(r)),this._blurMaterial=vo(r,e,t),this._ggxMaterial=_o(r,e,t)}return r}_compileMaterial(e){let t=new V(new hr,e);this._renderer.compile(t,ao)}_sceneToCubeUV(e,t,n,r,i){let a=new ya(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(oo),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new V(new bi,new Er({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(oo),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;go(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yo());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;go(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,ao)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-to?n-d+to:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,go(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,ao),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,go(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,ao)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&L(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):ro;m>ro&&I(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ro}`);let h=[],g=0;for(let e=0;e<ro;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];go(t,3*v*(r>_-to?r-_+to:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,ao)}};function mo(e){let t=[],n=[],r=[],i=e,a=e-to+1+no.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-to?s=no[o-e+to-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new hr;h.setAttribute(`position`,new er(f,3)),h.setAttribute(`uv`,new er(p,2)),h.setAttribute(`faceIndex`,new er(m,1)),r.push(new V(h,null)),i>to&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function ho(e,t,n){let r=new Pt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function go(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function _o(e,t,n){return new Vi({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:io,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function vo(e,t,n){let r=new Float32Array(ro),i=new R(0,1,0);return new Vi({name:`SphericalGaussianBlur`,defines:{n:ro,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:xo(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function yo(){return new Vi({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:xo(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function bo(){return new Vi({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function xo(){return`

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
	`}var So=class extends Pt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new hi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new bi(5,5,5),i=new Vi({name:`CubemapFromEquirect`,uniforms:Ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new V(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new Da(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Co(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new So(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new po(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new po(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function wo(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&et(`WebGLRenderer: `+e+` extension not supported.`),t}}}function To(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?nr:tr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Eo(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Do(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:L(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Oo(e,t,n){let r=new WeakMap,i=new Mt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new Ft(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new pt(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function ko(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Ao={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function jo(e,t,n,r,i,a){let o=new Pt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,depthTexture:i?new _i(t,n):void 0}),s=new Pt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new hr;c.setAttribute(`position`,new rr([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute(`uv`,new rr([0,2,0,0,2,0],2));let l=new Hi({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new V(c,l),d=new Sa(-1,1,1,-1,0,1),f=null,p=null,m=!1,h,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(m||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),h=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=h,m=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(f!==e.outputColorSpace||p!==e.toneMapping){f=e.outputColorSpace,p=e.toneMapping,l.defines={},xt.getTransfer(f)===`srgb`&&(l.defines.SRGB_TRANSFER=``);let t=Ao[p];t&&(l.defines[t]=``),l.needsUpdate=!0}l.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(u,d),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),s.dispose(),c.dispose(),l.dispose()}}var Mo=new jt,No=new _i(1,1),Po=new Ft,Fo=new It,Io=new hi,Lo=[],Ro=[],zo=new Float32Array(16),Bo=new Float32Array(9),Vo=new Float32Array(4);function Ho(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Lo[i];if(a===void 0&&(a=new Float32Array(i),Lo[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Uo(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Wo(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Go(e,t){let n=Ro[t];n===void 0&&(n=new Int32Array(t),Ro[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Ko(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function qo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Uo(n,t))return;e.uniform2fv(this.addr,t),Wo(n,t)}}function Jo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Uo(n,t))return;e.uniform3fv(this.addr,t),Wo(n,t)}}function Yo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Uo(n,t))return;e.uniform4fv(this.addr,t),Wo(n,t)}}function Xo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Uo(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Wo(n,t)}else{if(Uo(n,r))return;Vo.set(r),e.uniformMatrix2fv(this.addr,!1,Vo),Wo(n,r)}}function Zo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Uo(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Wo(n,t)}else{if(Uo(n,r))return;Bo.set(r),e.uniformMatrix3fv(this.addr,!1,Bo),Wo(n,r)}}function Qo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Uo(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Wo(n,t)}else{if(Uo(n,r))return;zo.set(r),e.uniformMatrix4fv(this.addr,!1,zo),Wo(n,r)}}function $o(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function es(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Uo(n,t))return;e.uniform2iv(this.addr,t),Wo(n,t)}}function ts(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Uo(n,t))return;e.uniform3iv(this.addr,t),Wo(n,t)}}function ns(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Uo(n,t))return;e.uniform4iv(this.addr,t),Wo(n,t)}}function rs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function is(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Uo(n,t))return;e.uniform2uiv(this.addr,t),Wo(n,t)}}function as(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Uo(n,t))return;e.uniform3uiv(this.addr,t),Wo(n,t)}}function os(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Uo(n,t))return;e.uniform4uiv(this.addr,t),Wo(n,t)}}function ss(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(No.compareFunction=n.isReversedDepthBuffer()?518:515,a=No):a=Mo,n.setTexture2D(t||a,i)}function cs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Fo,i)}function ls(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Io,i)}function us(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Po,i)}function ds(e){switch(e){case 5126:return Ko;case 35664:return qo;case 35665:return Jo;case 35666:return Yo;case 35674:return Xo;case 35675:return Zo;case 35676:return Qo;case 5124:case 35670:return $o;case 35667:case 35671:return es;case 35668:case 35672:return ts;case 35669:case 35673:return ns;case 5125:return rs;case 36294:return is;case 36295:return as;case 36296:return os;case 35678:case 36198:case 36298:case 36306:case 35682:return ss;case 35679:case 36299:case 36307:return cs;case 35680:case 36300:case 36308:case 36293:return ls;case 36289:case 36303:case 36311:case 36292:return us}}function fs(e,t){e.uniform1fv(this.addr,t)}function ps(e,t){let n=Ho(t,this.size,2);e.uniform2fv(this.addr,n)}function ms(e,t){let n=Ho(t,this.size,3);e.uniform3fv(this.addr,n)}function hs(e,t){let n=Ho(t,this.size,4);e.uniform4fv(this.addr,n)}function gs(e,t){let n=Ho(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function _s(e,t){let n=Ho(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function vs(e,t){let n=Ho(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function ys(e,t){e.uniform1iv(this.addr,t)}function bs(e,t){e.uniform2iv(this.addr,t)}function xs(e,t){e.uniform3iv(this.addr,t)}function Ss(e,t){e.uniform4iv(this.addr,t)}function Cs(e,t){e.uniform1uiv(this.addr,t)}function ws(e,t){e.uniform2uiv(this.addr,t)}function Ts(e,t){e.uniform3uiv(this.addr,t)}function Es(e,t){e.uniform4uiv(this.addr,t)}function Ds(e,t,n){let r=this.cache,i=t.length,a=Go(n,i);Uo(r,a)||(e.uniform1iv(this.addr,a),Wo(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?No:Mo;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Os(e,t,n){let r=this.cache,i=t.length,a=Go(n,i);Uo(r,a)||(e.uniform1iv(this.addr,a),Wo(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Fo,a[e])}function ks(e,t,n){let r=this.cache,i=t.length,a=Go(n,i);Uo(r,a)||(e.uniform1iv(this.addr,a),Wo(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Io,a[e])}function As(e,t,n){let r=this.cache,i=t.length,a=Go(n,i);Uo(r,a)||(e.uniform1iv(this.addr,a),Wo(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Po,a[e])}function js(e){switch(e){case 5126:return fs;case 35664:return ps;case 35665:return ms;case 35666:return hs;case 35674:return gs;case 35675:return _s;case 35676:return vs;case 5124:case 35670:return ys;case 35667:case 35671:return bs;case 35668:case 35672:return xs;case 35669:case 35673:return Ss;case 5125:return Cs;case 36294:return ws;case 36295:return Ts;case 36296:return Es;case 35678:case 36198:case 36298:case 36306:case 35682:return Ds;case 35679:case 36299:case 36307:return Os;case 35680:case 36300:case 36308:case 36293:return ks;case 36289:case 36303:case 36311:case 36292:return As}}var Ms=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ds(t.type)}},Ns=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=js(t.type)}},Ps=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Fs=/(\w+)(\])?(\[|\.)?/g;function Is(e,t){e.seq.push(t),e.map[t.id]=t}function Ls(e,t,n){let r=e.name,i=r.length;for(Fs.lastIndex=0;;){let a=Fs.exec(r),o=Fs.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Is(n,l===void 0?new Ms(s,e,t):new Ns(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Ps(s),Is(n,e)),n=e}}}var Rs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Ls(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function zs(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Bs=37297,Vs=0;function Hs(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Us=new z;function Ws(e){xt._getMatrix(Us,xt.workingColorSpace,e);let t=`mat3( ${Us.elements.map(e=>e.toFixed(4))} )`;switch(xt.getTransfer(e)){case He:return[t,`LinearTransferOETF`];case Ue:return[t,`sRGBTransferOETF`];default:return I(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Gs(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Hs(e.getShaderSource(t),r)}return i}function Ks(e,t){let n=Ws(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var qs={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Js(e,t){let n=qs[t];return n===void 0?(I(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Ys=new R;function Xs(){return xt.getLuminanceCoefficients(Ys),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Ys.x.toFixed(4)}, ${Ys.y.toFixed(4)}, ${Ys.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Zs(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(ec).join(`
`)}function Qs(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function $s(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function ec(e){return e!==``}function tc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var rc=/^[ \t]*#include +<([\w\d./]+)>/gm;function ic(e){return e.replace(rc,oc)}var ac=new Map;function oc(e,t){let n=Ga[t];if(n===void 0){let e=ac.get(t);if(e!==void 0)n=Ga[e],I(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return ic(n)}var sc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cc(e){return e.replace(sc,lc)}function lc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function uc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var dc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function fc(e){return dc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var pc={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function mc(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:pc[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var hc={302:`ENVMAP_MODE_REFRACTION`};function gc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:hc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var _c={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function vc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:_c[e.combine]||`ENVMAP_BLENDING_NONE`}function yc(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function bc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=fc(n),l=mc(n),u=gc(n),d=vc(n),f=yc(n),p=Zs(n),m=Qs(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(ec).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(ec).join(`
`),_.length>0&&(_+=`
`)):(g=[uc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(ec).join(`
`),_=[uc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Ga.tonemapping_pars_fragment,n.toneMapping===0?``:Js(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Ga.colorspace_pars_fragment,Ks(`linearToOutputTexel`,n.outputColorSpace),Xs(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(ec).join(`
`)),o=ic(o),o=tc(o,n),o=nc(o,n),s=ic(s),s=tc(s,n),s=nc(s,n),o=cc(o),s=cc(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=zs(i,i.VERTEX_SHADER,y),S=zs(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Gs(i,x,`vertex`),n=Gs(i,S,`fragment`);L(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):I(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Rs(i,h),T=$s(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Bs)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Vs++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var xc=0,Sc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Cc(e),t.set(e,n)),n}},Cc=class{constructor(e){this.id=xc++,this.code=e,this.usedTimes=0}};function wc(e){return e===1030||e===37490||e===36285}function Tc(e,t,n,r,i,a){let o=new Jt,s=new Sc,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&I(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,ee,te,O;if(C){let e=Ka[C];D=e.vertexShader,ee=e.fragmentShader}else{D=i.vertexShader,ee=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),te=e.id,O=t.id}let ne=e.getRenderTarget(),k=e.state.buffers.depth.getReversed(),A=h.isInstancedMesh===!0,re=h.isBatchedMesh===!0,ie=!!i.map,j=!!i.matcap,ae=!!x,oe=!!i.aoMap,se=!!i.lightMap,ce=!!i.bumpMap&&i.wireframe===!1,le=!!i.normalMap,ue=!!i.displacementMap,de=!!i.emissiveMap,M=!!i.metalnessMap,fe=!!i.roughnessMap,pe=i.anisotropy>0,me=i.clearcoat>0,he=i.dispersion>0,ge=i.iridescence>0,_e=i.sheen>0,ve=i.transmission>0,ye=pe&&!!i.anisotropyMap,be=me&&!!i.clearcoatMap,xe=me&&!!i.clearcoatNormalMap,Se=me&&!!i.clearcoatRoughnessMap,Ce=ge&&!!i.iridescenceMap,we=ge&&!!i.iridescenceThicknessMap,Te=_e&&!!i.sheenColorMap,Ee=_e&&!!i.sheenRoughnessMap,De=!!i.specularMap,Oe=!!i.specularColorMap,ke=!!i.specularIntensityMap,Ae=ve&&!!i.transmissionMap,je=ve&&!!i.thicknessMap,Me=!!i.gradientMap,Ne=!!i.alphaMap,Pe=i.alphaTest>0,Fe=!!i.alphaHash,N=!!i.extensions,Ie=0;i.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ie=e.toneMapping);let Le={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:ee,defines:i.defines,customVertexShaderID:te,customFragmentShaderID:O,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:re,batchingColor:re&&h._colorsTexture!==null,instancing:A,instancingColor:A&&h.instanceColor!==null,instancingMorph:A&&h.morphTexture!==null,outputColorSpace:ne===null?e.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:xt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ie,matcap:j,envMap:ae,envMapMode:ae&&x.mapping,envMapCubeUVHeight:S,aoMap:oe,lightMap:se,bumpMap:ce,normalMap:le,displacementMap:ue,emissiveMap:de,normalMapObjectSpace:le&&i.normalMapType===1,normalMapTangentSpace:le&&i.normalMapType===0,packedNormalMap:le&&i.normalMapType===0&&wc(i.normalMap.format),metalnessMap:M,roughnessMap:fe,anisotropy:pe,anisotropyMap:ye,clearcoat:me,clearcoatMap:be,clearcoatNormalMap:xe,clearcoatRoughnessMap:Se,dispersion:he,iridescence:ge,iridescenceMap:Ce,iridescenceThicknessMap:we,sheen:_e,sheenColorMap:Te,sheenRoughnessMap:Ee,specularMap:De,specularColorMap:Oe,specularIntensityMap:ke,transmission:ve,transmissionMap:Ae,thicknessMap:je,gradientMap:Me,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ne,alphaTest:Pe,alphaHash:Fe,combine:i.combine,mapUv:ie&&m(i.map.channel),aoMapUv:oe&&m(i.aoMap.channel),lightMapUv:se&&m(i.lightMap.channel),bumpMapUv:ce&&m(i.bumpMap.channel),normalMapUv:le&&m(i.normalMap.channel),displacementMapUv:ue&&m(i.displacementMap.channel),emissiveMapUv:de&&m(i.emissiveMap.channel),metalnessMapUv:M&&m(i.metalnessMap.channel),roughnessMapUv:fe&&m(i.roughnessMap.channel),anisotropyMapUv:ye&&m(i.anisotropyMap.channel),clearcoatMapUv:be&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:xe&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:we&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&m(i.sheenRoughnessMap.channel),specularMapUv:De&&m(i.specularMap.channel),specularColorMapUv:Oe&&m(i.specularColorMap.channel),specularIntensityMapUv:ke&&m(i.specularIntensityMap.channel),transmissionMapUv:Ae&&m(i.transmissionMap.channel),thicknessMapUv:je&&m(i.thicknessMap.channel),alphaMapUv:Ne&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(le||pe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ie||Ne),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&le===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:k,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ie,decodeVideoTexture:ie&&i.map.isVideoTexture===!0&&xt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:de&&i.emissiveMap.isVideoTexture===!0&&xt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:N&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(N&&i.extensions.multiDraw===!0||re)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Ka[t];n=Ri.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new bc(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Ec(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Dc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Oc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function kc(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t,a){n.length>1&&n.sort(e||Dc),r.length>1&&r.sort(t||Oc),i.length>1&&i.sort(t||Oc),a&&(n.reverse(),r.reverse(),i.reverse())}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Ac(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new kc,e.set(t,[i])):n>=r.length?(i=new kc,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function jc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new R,color:new B};break;case`SpotLight`:n={position:new R,direction:new R,color:new B,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new R,color:new B,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new R,skyColor:new B,groundColor:new B};break;case`RectAreaLight`:n={color:new B,position:new R,halfWidth:new R,halfHeight:new R}}return e[t.id]=n,n}}}function Mc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Nc=0;function Pc(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Fc(e){let t=new jc,n=Mc(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new R);let i=new R,a=new Lt,o=new Lt;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(Pc);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=H.LTC_FLOAT_1,r.rectAreaLTC2=H.LTC_FLOAT_2):(r.rectAreaLTC1=H.LTC_HALF_1,r.rectAreaLTC2=H.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=Nc++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function Ic(e){let t=new Fc(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Lc(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Ic(e),t.set(n,[a])):r>=i.length?(a=new Ic(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Rc=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zc=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Bc=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],Vc=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Hc=new Lt,Uc=new R,Wc=new R;function Gc(e,t,n){let i=new Jr,a=new pt,s=new pt,c=new Mt,l=new Wi,u=new Gi,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:Rc,fragmentShader:zc}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new hr;y.setAttribute(`position`,new er(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new V(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(I(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){I(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){I(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Pt(a.x,a.y,{format:te,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new _i(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new So(a.x),p.map.depthTexture=new vi(a.x,m)):(p.map=new Pt(a.x,a.y),p.map.depthTexture=new _i(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}let x=p.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<x;t++){if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Uc.setFromMatrixPosition(d.matrixWorld),e.position.copy(Uc),Wc.copy(e.position),Wc.add(Bc[t]),e.up.copy(Vc[t]),e.lookAt(Wc),e.updateMatrixWorld(),n.makeTranslation(-Uc.x,-Uc.y,-Uc.z),Hc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Hc,e.coordinateSystem,e.reversedDepth)}else p.updateMatrices(d);i=p.getFrustum(),E(n,l,p.camera,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Pt(a.x,a.y,{format:te,type:g})),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value=n.mapSize,_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value=n.mapSize,v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||i.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)E(c[e],r,a,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Kc(e,t){function n(){let t=!1,n=new Mt,r=null,i=new Mt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?M(e.DEPTH_TEST):fe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=nt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?M(e.STENCIL_TEST):fe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new B(0,0,0),T=0,E=!1,D=null,ee=null,te=null,O=null,ne=null,k=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),A=!1,re=0,ie=e.getParameter(e.VERSION);ie.indexOf(`WebGL`)===-1?ie.indexOf(`OpenGL ES`)!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),A=re>=2):(re=parseFloat(/^WebGL (\d)/.exec(ie)[1]),A=re>=1);let j=null,ae={},oe=e.getParameter(e.SCISSOR_BOX),se=e.getParameter(e.VIEWPORT),ce=new Mt().fromArray(oe),le=new Mt().fromArray(se);function ue(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let de={};de[e.TEXTURE_2D]=ue(e.TEXTURE_2D,e.TEXTURE_2D,1),de[e.TEXTURE_CUBE_MAP]=ue(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[e.TEXTURE_2D_ARRAY]=ue(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),de[e.TEXTURE_3D]=ue(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),M(e.DEPTH_TEST),o.setFunc(3),be(!1),xe(1),M(e.CULL_FACE),ve(0);function M(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function fe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function pe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function me(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function he(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ge={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ge[103]=e.MIN,ge[104]=e.MAX;let _e={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ve(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(fe(e.BLEND),g=!1);return}if(g===!1&&(M(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:L(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:L(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:L(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:L(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ge[n],ge[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(_e[r],_e[i],_e[o],_e[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ye(t,n){t.side===2?fe(e.CULL_FACE):M(e.CULL_FACE);let r=t.side===1;n&&(r=!r),be(r),t.blending===1&&t.transparent===!1?ve(0):ve(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Ce(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?M(e.SAMPLE_ALPHA_TO_COVERAGE):fe(e.SAMPLE_ALPHA_TO_COVERAGE)}function be(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function xe(t){t===0?fe(e.CULL_FACE):(M(e.CULL_FACE),t!==ee&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),ee=t}function Se(t){t!==te&&(A&&e.lineWidth(t),te=t)}function Ce(t,n,r){t?(M(e.POLYGON_OFFSET_FILL),(O!==n||ne!==r)&&(O=n,ne=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):fe(e.POLYGON_OFFSET_FILL)}function we(t){t?M(e.SCISSOR_TEST):fe(e.SCISSOR_TEST)}function Te(t){t===void 0&&(t=e.TEXTURE0+k-1),j!==t&&(e.activeTexture(t),j=t)}function Ee(t,n,r){r===void 0&&(r=j===null?e.TEXTURE0+k-1:j);let i=ae[r];i===void 0&&(i={type:void 0,texture:void 0},ae[r]=i),(i.type!==t||i.texture!==n)&&(j!==r&&(e.activeTexture(r),j=r),e.bindTexture(t,n||de[t]),i.type=t,i.texture=n)}function De(){let t=ae[j];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Oe(){try{e.compressedTexImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function ke(){try{e.compressedTexImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ae(){try{e.texSubImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function je(){try{e.texSubImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ne(){try{e.compressedTexSubImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Pe(){try{e.texStorage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Fe(){try{e.texStorage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function N(){try{e.texImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ie(){try{e.texImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Le(t){return d[t]===void 0?e.getParameter(t):d[t]}function Re(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function P(t){ce.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ce.copy(t))}function ze(t){le.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),le.copy(t))}function F(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Be(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ve(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},j=null,ae={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new B(0,0,0),T=0,E=!1,D=null,ee=null,te=null,O=null,ne=null,ce.set(0,0,e.canvas.width,e.canvas.height),le.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:M,disable:fe,bindFramebuffer:pe,drawBuffers:me,useProgram:he,setBlending:ve,setMaterial:ye,setFlipSided:be,setCullFace:xe,setLineWidth:Se,setPolygonOffset:Ce,setScissorTest:we,activeTexture:Te,bindTexture:Ee,unbindTexture:De,compressedTexImage2D:Oe,compressedTexImage3D:ke,texImage2D:N,texImage3D:Ie,pixelStorei:Re,getParameter:Le,updateUBOMapping:F,uniformBlockBinding:Be,texStorage2D:Pe,texStorage3D:Fe,texSubImage2D:Ae,texSubImage3D:je,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ne,scissor:P,viewport:ze,reset:Ve}}function qc(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new pt,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Ye(`canvas`)}function T(e,t,n){let r=1,i=Le(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),I(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&I(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function D(e){return e.generateMipmaps}function ee(e){l.generateMipmap(e)}function te(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function O(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];I(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||I(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?He:xt.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function ne(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,I(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function k(e,t){return D(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function A(e){let t=e.target;t.removeEventListener(`dispose`,A),ie(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function re(e){let t=e.target;t.removeEventListener(`dispose`,re),ae(t)}function ie(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&j(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function j(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function ae(e){let t=f.get(e);if(e.depthTexture&&(e.depthTexture.dispose(),f.remove(e.depthTexture)),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let n=e.textures;for(let e=0,t=n.length;e<t;e++){let t=f.get(n[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(n[e])}f.remove(e)}let oe=0;function se(){oe=0}function ce(){return oe}function le(e){oe=e}function ue(){let e=oe;return e>=p.maxTextures&&I(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+p.maxTextures),oe+=1,e}function de(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function M(e,t){let n=f.get(e);if(e.isVideoTexture&&N(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)I(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)I(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Se(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function fe(e,t){let n=f.get(e);if(e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version){Se(n,e,t);return}e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t)}function pe(e,t){let n=f.get(e);if(e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version){Se(n,e,t);return}d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function me(e,t){let n=f.get(e);if(e.isCubeDepthTexture!==!0&&e.version>0&&n.__version!==e.version){Ce(n,e,t);return}d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let he={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},ge={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},_e={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function ve(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&I(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,he[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,he[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,he[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,ge[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,ge[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,_e[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function ye(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,A));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=de(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&j(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function be(e,t,n){return Math.floor(Math.floor(e/n)/t)}function xe(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=be(r.start,t.width,4),c=be(n.start,t.width,4);r.start<=o+1&&s===c&&be(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function Se(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=ye(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=xt.getPrimaries(xt.workingColorSpace),n=t.colorSpace===``?null:xt.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=T(t.image,!1,p.maxTextureSize);e=Ie(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=O(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);ve(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=k(t,e);if(t.isDepthTexture)u=ne(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&xe(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023){if(s!==null){if(g){if(v){if(t.layerUpdates.size>0){let e=Va(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}t.clearLayerUpdates()}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0)}else I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data)}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}}else if(t.isDataArrayTexture){if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v){if(t.layerUpdates.size>0){let n=Va(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data)}else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_){if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=Le(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=Le(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);D(t)&&ee(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function Ce(e,t,n){if(t.image.length!==6)return;let r=ye(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=xt.getPrimaries(xt.workingColorSpace),o=t.colorSpace===``?null:xt.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=T(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=Ie(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=O(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=k(t,h);ve(l.TEXTURE_CUBE_MAP,t);let C;if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=Le(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}D(t)&&ee(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function we(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=O(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),Fe(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,Pe(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function Te(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=ne(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;Fe(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Pe(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Pe(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=O(i.internalFormat,a,o,i.normalized,i.colorSpace);Fe(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Pe(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Pe(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function Ee(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);if(i.__renderTarget=t,(!i.__webglTexture||t.depthTexture.image.width!==t.width||t.depthTexture.image.height!==t.height)&&(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),r){if(i.__webglInit===void 0&&(i.__webglInit=!0,t.depthTexture.addEventListener(`dispose`,A)),i.__webglTexture===void 0){i.__webglTexture=l.createTexture(),d.bindTexture(l.TEXTURE_CUBE_MAP,i.__webglTexture),ve(l.TEXTURE_CUBE_MAP,t.depthTexture);let e=m.convert(t.depthTexture.format),n=m.convert(t.depthTexture.type),r;t.depthTexture.format===1026?r=l.DEPTH_COMPONENT24:t.depthTexture.format===1027&&(r=l.DEPTH24_STENCIL8);for(let i=0;i<6;i++)l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,r,t.width,t.height,0,e,n,null)}}else M(t.depthTexture,0);let a=i.__webglTexture,o=Pe(t),s=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,c=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)Fe(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else if(t.depthTexture.format===1027)Fe(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function De(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)Ee(t.__webglFramebuffer[n],e,n);else{let n=e.texture.mipmaps;n&&n.length>0?Ee(t.__webglFramebuffer[0],e,0):Ee(t.__webglFramebuffer,e,0)}}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),Te(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else{let n=e.texture.mipmaps;if(n&&n.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),Te(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}}d.bindFramebuffer(l.FRAMEBUFFER,null)}function Oe(e,t,n){let r=f.get(e);t!==void 0&&we(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&De(e)}function ke(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,re);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&Fe(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=O(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=Pe(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),Te(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),ve(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps&&t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)we(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else we(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);D(t)&&ee(l.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),ve(o,r),we(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),D(r)&&ee(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),ve(i,t),t.mipmaps&&t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)we(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else we(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);D(t)&&ee(i),d.unbindTexture()}e.depthBuffer&&De(e)}function Ae(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(D(r)){let t=te(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),ee(t),d.unbindTexture()}}}let je=[],Me=[];function Ne(e){if(e.samples>0){if(Fe(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer);let c=e.texture.mipmaps;c&&c.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(je.length=0,Me.length=0,je.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.resolveDepthBuffer===!1&&(je.push(a),Me.push(a),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,Me)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,je))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.resolveDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function Pe(e){return Math.min(p.maxSamples,e.samples)}function Fe(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function N(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Ie(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(xt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&I(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):L(`WebGLTextures: Unsupported texture color space:`,n)),t}function Le(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ue,this.resetTextureUnits=se,this.getTextureUnits=ce,this.setTextureUnits=le,this.setTexture2D=M,this.setTexture2DArray=fe,this.setTexture3D=pe,this.setTextureCube=me,this.rebindTextures=Oe,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Fe,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function Jc(e,t){function n(n,r=``){let i,a=xt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Yc=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xc=`
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

}`,Zc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new yi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Vi({vertexShader:Yc,fragmentShader:Xc,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new V(new Ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qc=class extends rt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new Zc,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],ee=new pt,te=null,O=new ya;O.viewport=new Mt;let ne=new ya;ne.viewport=new Mt;let k=[O,ne],A=new Oa,re=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new mn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new mn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new mn,C[e]=t),t.getHandSpace()};function j(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ae(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,ae),r.removeEventListener(`inputsourceschange`,oe);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}re=null,ie=null,_.reset();for(let e in v)delete v[e];e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(te),e.setSize(ee.width,ee.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&I(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&I(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,ae),r.addEventListener(`inputsourceschange`,oe),b.xrCompatible!==!0&&await t.makeXRCompatible(),te=e.getPixelRatio(),e.getSize(ee),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Pt(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new _i(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Pt(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),pe.setContext(r),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function oe(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let se=new R,ce=new R;function le(e,t,n){se.setFromMatrixPosition(t.matrixWorld),ce.setFromMatrixPosition(n.matrixWorld);let r=se.distanceTo(ce),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ue(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),A.near=ne.near=O.near=t,A.far=ne.far=O.far=n,(re!==A.near||ie!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),re=A.near,ie=A.far),A.layers.mask=e.layers.mask|6,O.layers.mask=A.layers.mask&-5,ne.layers.mask=A.layers.mask&-3;let i=e.parent,a=A.cameras;ue(A,i);for(let e=0;e<a.length;e++)ue(a[e],i);a.length===2?le(A,O,ne):A.projectionMatrix.copy(O.projectionMatrix),de(e,A,i)};function de(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ot*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(A)},this.getCameraTexture=function(e){return v[e]};let M=null;function fe(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==A.cameras.length&&(A.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=k[n];o===void 0&&(o=new ya,o.layers.enable(n),o.viewport=new Mt,k[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),i===!0&&A.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new yi,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}M&&M(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let pe=new Ua;pe.setAnimationLoop(fe),this.setAnimationLoop=function(e){M=e},this.dispose=function(){}}},$c=new Lt,el=new z;el.set(-1,0,0,0,1,0,0,0,1);function tl(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Li(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4($c.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(el),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function nl(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return L(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?I(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):I(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var rl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),il=null;function al(){return il===null&&(il=new Br(rl,16,16,te,g),il.name=`DFG_LUT`,il.minFilter=o,il.magFilter=o,il.wrapS=t,il.wrapT=t,il.generateMipmaps=!1,il.needsUpdate=!0),il}var ol=class{constructor(e={}){let{canvas:t=Xe(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([ne,O,ee]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D=new R,te=null,k=null,A=[],re=[],ie=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,ae=!1,oe=null,se=null,ce=null,le=null;this._outputColorSpace=Be;let ue=0,de=0,M=null,fe=-1,pe=null,me=new Mt,he=new Mt,ge=null,_e=new B(0),ve=0,ye=t.width,be=t.height,xe=1,Se=null,Ce=null,we=new Mt(0,0,ye,be),Te=new Mt(0,0,ye,be),Ee=!1,De=new Jr,Oe=!1,ke=!1,Ae=new Lt,je=new R,Me=new Mt,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Pe=!1;function Fe(){return M===null?xe:1}let N=n;function Ie(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r185`),t.addEventListener(`webglcontextlost`,dt,!1),t.addEventListener(`webglcontextrestored`,ft,!1),t.addEventListener(`webglcontextcreationerror`,pt,!1),N===null){let t=`webgl2`;if(N=Ie(t,e),N===null)throw Ie(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}}catch(e){throw L(`WebGLRenderer: `+e.message),e}let Le,Re,P,ze,F,Ve,He,Ue,We,Ge,qe,Je,Ye,Ze,$e,et,nt,rt,it,at,ot,st,ct;function lt(){Le=new wo(N),Le.init(),ot=new Jc(N,Le),Re=new $a(N,Le,e,ot),P=new Kc(N,Le),Re.reversedDepthBuffer&&h&&P.buffers.depth.setReversed(!0),se=N.createFramebuffer(),ce=N.createFramebuffer(),le=N.createFramebuffer(),ze=new Do(N),F=new Ec,Ve=new qc(N,Le,P,F,Re,ot,ze),He=new Co(j),Ue=new Wa(N),st=new Za(N,Ue),We=new To(N,Ue,ze,st),Ge=new ko(N,We,Ue,st,ze),rt=new Oo(N,Re,Ve),$e=new eo(F),qe=new Tc(j,He,Le,Re,st,$e),Je=new tl(j,F),Ye=new Ac,Ze=new Lc(Le),nt=new Xa(j,He,P,Ge,x,s),et=new Gc(j,Ge,Re),ct=new nl(N,ze,Re,P),it=new Qa(N,Le,ze),at=new Eo(N,Le,ze),ze.programs=qe.programs,j.capabilities=Re,j.extensions=Le,j.properties=F,j.renderLists=Ye,j.shadowMap=et,j.state=P,j.info=ze}lt(),S!==1009&&(ie=new jo(S,t.width,t.height,o,r,i));let ut=new Qc(j,N);this.xr=ut,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Le.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(e){e!==void 0&&(xe=e,this.setSize(ye,be,!1))},this.getSize=function(e){return e.set(ye,be)},this.setSize=function(e,n,r=!0){if(ut.isPresenting){I(`WebGLRenderer: Can't change size while VR device is presenting.`);return}ye=e,be=n,t.width=Math.floor(e*xe),t.height=Math.floor(n*xe),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ie!==null&&ie.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(ye*xe,be*xe).floor()},this.setDrawingBufferSize=function(e,n,r){ye=e,be=n,xe=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009){L(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){I(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ie.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(me)},this.getViewport=function(e){return e.copy(we)},this.setViewport=function(e,t,n,r){e.isVector4?we.set(e.x,e.y,e.z,e.w):we.set(e,t,n,r),P.viewport(me.copy(we).multiplyScalar(xe).round())},this.getScissor=function(e){return e.copy(Te)},this.setScissor=function(e,t,n,r){e.isVector4?Te.set(e.x,e.y,e.z,e.w):Te.set(e,t,n,r),P.scissor(he.copy(Te).multiplyScalar(xe).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(e){P.setScissorTest(Ee=e)},this.setOpaqueSort=function(e){Se=e},this.setTransparentSort=function(e){Ce=e},this.getClearColor=function(e){return e.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=C.has(t)}if(e){let e=M.texture.type,t=w.has(e),n=nt.getClearColor(),r=nt.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,N.clearBufferuiv(N.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,N.clearBufferiv(N.COLOR,0,E))}else r|=N.COLOR_BUFFER_BIT}t&&(r|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&N.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),oe=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,dt,!1),t.removeEventListener(`webglcontextrestored`,ft,!1),t.removeEventListener(`webglcontextcreationerror`,pt,!1),nt.dispose(),Ye.dispose(),Ze.dispose(),F.dispose(),He.dispose(),Ge.dispose(),st.dispose(),ct.dispose(),qe.dispose(),ut.dispose(),ut.removeEventListener(`sessionstart`,yt),ut.removeEventListener(`sessionend`,bt),St.stop()};function dt(e){e.preventDefault(),Qe(`WebGLRenderer: Context Lost.`),ae=!0}function ft(){Qe(`WebGLRenderer: Context Restored.`),ae=!1;let e=ze.autoReset,t=et.enabled,n=et.autoUpdate,r=et.needsUpdate,i=et.type;lt(),ze.autoReset=e,et.enabled=t,et.autoUpdate=n,et.needsUpdate=r,et.type=i}function pt(e){L(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function mt(e){let t=e.target;t.removeEventListener(`dispose`,mt),ht(t)}function ht(e){gt(e),F.remove(e)}function gt(e){let t=F.get(e).programs;t!==void 0&&(t.forEach(function(e){qe.releaseProgram(e)}),e.isShaderMaterial&&qe.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ne);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Nt(e,t,n,r,i);P.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=We.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;st.setup(i,r,s,n,c);let h,g=it;if(c!==null&&(h=Ue.get(c),g=at,g.setIndex(h)),i.isMesh)r.wireframe===!0?(P.setLineWidth(r.wireframeLinewidth*Fe()),g.setMode(N.LINES)):g.setMode(N.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),P.setLineWidth(e*Fe()),i.isLineSegments?g.setMode(N.LINES):i.isLineLoop?g.setMode(N.LINE_LOOP):g.setMode(N.LINE_STRIP)}else i.isPoints?g.setMode(N.POINTS):i.isSprite&&g.setMode(N.TRIANGLES);if(i.isBatchedMesh){if(Le.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ue.get(c).bytesPerElement:1,o=F.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(N,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function z(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Ot(e,t,n),e.side=0,e.needsUpdate=!0,Ot(e,t,n),e.side=2):Ot(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),k=Ze.get(n),k.init(t),re.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];z(a,n,e),r.add(a)}else z(t,n,e),r.add(t)}}),k=re.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){F.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Le.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let _t=null;function vt(e){_t&&_t(e)}function yt(){St.stop()}function bt(){St.start()}let St=new Ua;St.setAnimationLoop(vt),typeof self<`u`&&St.setContext(self),this.setAnimationLoop=function(e){_t=e,ut.setAnimationLoop(e),e===null?St.stop():St.start()},ut.addEventListener(`sessionstart`,yt),ut.addEventListener(`sessionend`,bt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){L(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ae===!0)return;oe!==null&&oe.renderStart(e,t);let n=ut.enabled===!0&&ut.isPresenting===!0,r=ie!==null&&(M===null||n)&&ie.begin(j,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ie===null||ie.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(t),t=ut.getCamera()),e.isScene===!0&&e.onBeforeRender(j,e,t,M),k=Ze.get(e,re.length),k.init(t),k.state.textureUnits=Ve.getTextureUnits(),re.push(k),Ae.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),De.setFromProjectionMatrix(Ae,Ke,t.reversedDepth),ke=this.localClippingEnabled,Oe=$e.init(this.clippingPlanes,ke),te=Ye.get(e,A.length),te.init(),A.push(te),ut.enabled===!0&&ut.isPresenting===!0){let e=j.xr.getDepthSensingMesh();e!==null&&Ct(e,t,-1/0,j.sortObjects)}Ct(e,t,0,j.sortObjects),te.finish(),j.sortObjects===!0&&te.sort(Se,Ce,t.reversedDepth),Pe=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,Pe&&nt.addToRenderList(te,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Oe===!0&&$e.beginShadows();let i=k.state.shadowsArray;if(et.render(i,e,t),Oe===!0&&$e.endShadows(),(r&&ie.hasRenderPass())===!1){let n=te.opaque,r=te.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Tt(n,r,e,a)}Pe&&nt.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];wt(te,e,n,n.viewport)}}else r.length>0&&Tt(n,r,e,t),Pe&&nt.render(e),wt(te,e,t)}M!==null&&de===0&&(Ve.updateMultisampleRenderTarget(M),Ve.updateRenderTargetMipmap(M)),r&&ie.end(j),e.isScene===!0&&e.onAfterRender(j,e,t),st.resetDefaultState(),fe=-1,pe=null,re.pop(),re.length>0?(k=re[re.length-1],Ve.setTextureUnits(k.state.textureUnits),Oe===!0&&$e.setGlobalState(j.clippingPlanes,k.state.camera)):k=null,A.pop(),te=A.length>0?A[A.length-1]:null,oe!==null&&oe.renderEnd()};function Ct(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)k.pushLightProbeGrid(e);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||De.intersectsSprite(e)){r&&Me.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ae);let t=Ge.update(e),i=e.material;i.visible&&te.push(e,t,i,n,Me.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||De.intersectsObject(e))){let t=Ge.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),Me.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Me.copy(e.boundingSphere.center)),Me.applyMatrix4(e.matrixWorld).applyMatrix4(Ae)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&te.push(e,t,s,n,Me.z,o)}}else i.visible&&te.push(e,t,i,n,Me.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Ct(i[e],t,n,r)}function wt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),Oe===!0&&$e.setGlobalState(j.clippingPlanes,n),r&&P.viewport(me.copy(r)),i.length>0&&Et(i,t,n),a.length>0&&Et(a,t,n),o.length>0&&Et(o,t,n),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function Tt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=Le.has(`EXT_color_buffer_half_float`)||Le.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new Pt(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,Re.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace})}let a=k.state.transmissionRenderTarget[r.id],o=r.viewport||me;a.setSize(o.z*j.transmissionResolutionScale,o.w*j.transmissionResolutionScale);let s=j.getRenderTarget(),u=j.getActiveCubeFace(),d=j.getActiveMipmapLevel();j.setRenderTarget(a),j.getClearColor(_e),ve=j.getClearAlpha(),ve<1&&j.setClearColor(16777215,.5),j.clear(),Pe&&nt.render(n);let f=j.toneMapping;j.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),Oe===!0&&$e.setGlobalState(j.clippingPlanes,r),Et(e,n,r),Ve.updateMultisampleRenderTarget(a),Ve.updateRenderTargetMipmap(a),Le.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Dt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Ve.updateMultisampleRenderTarget(a),Ve.updateRenderTargetMipmap(a))}j.setRenderTarget(s,u,d),j.setClearColor(_e,ve),p!==void 0&&(r.viewport=p),j.toneMapping=f}function Et(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Dt(o,t,n,s,l,c)}}function Dt(e,t,n,r,i,a){e.onBeforeRender(j,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(j,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=2):j.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(j,t,n,r,i,a)}function Ot(e,t,n){t.isScene!==!0&&(t=Ne);let r=F.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=qe.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=qe.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=He.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,mt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return At(e,s),d}else s.uniforms=qe.getUniforms(e),oe!==null&&e.isNodeMaterial&&oe.build(e,n,s),e.onBeforeCompile(s,j),d=qe.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=$e.uniform),At(e,s),r.needsLights=It(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=k.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function kt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Rs.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function At(e,t){let n=F.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function jt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function Nt(e,t,n,r,i){t.isScene!==!0&&(t=Ne),Ve.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?j.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:xt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=He.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=j.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=F.get(r),y=k.state.lights;if(Oe===!0&&(ke===!0||e!==pe)){let t=e===pe&&r.id===fe;$e.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==$e.numPlanes||v.numIntersection!==$e.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=k.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Ot(r,t,i),oe&&r.isNodeMaterial&&oe.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(P.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==fe&&(fe=r.id,C=!0),v.needsLights){let e=jt(k.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||pe!==e){P.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(N,`projectionMatrix`,e.projectionMatrix),T.setValue(N,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(N,je.setFromMatrixPosition(e.matrixWorld)),Re.logarithmicDepthBuffer&&T.setValue(N,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(N,`isOrthographic`,e.isOrthographicCamera===!0),pe!==e&&(pe=e,C=!0,w=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&T.setValue(N,`directionalShadowMap`,y.state.directionalShadowMap,Ve),y.state.spotShadowMap.length>0&&T.setValue(N,`spotShadowMap`,y.state.spotShadowMap,Ve),y.state.pointShadowMap.length>0&&T.setValue(N,`pointShadowMap`,y.state.pointShadowMap,Ve)),i.isSkinnedMesh){T.setOptional(N,i,`bindMatrix`),T.setOptional(N,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(N,`boneTexture`,e.boneTexture,Ve))}i.isBatchedMesh&&(T.setOptional(N,i,`batchingTexture`),T.setValue(N,`batchingTexture`,i._matricesTexture,Ve),T.setOptional(N,i,`batchingIdTexture`),T.setValue(N,`batchingIdTexture`,i._indirectTexture,Ve),T.setOptional(N,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(N,`batchingColorTexture`,i._colorsTexture,Ve));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&rt.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(N,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=al()),C){if(T.setValue(N,`toneMappingExposure`,j.toneMappingExposure),v.needsLights&&Ft(E,w),a&&r.fog===!0&&Je.refreshFogUniforms(E,a),Je.refreshMaterialUniforms(E,r,xe,be,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Rs.upload(N,kt(v),E,Ve)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Rs.upload(N,kt(v),E,Ve),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(N,`center`,i.center),T.setValue(N,`modelViewMatrix`,i.modelViewMatrix),T.setValue(N,`normalMatrix`,i.normalMatrix),T.setValue(N,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];ct.update(n,x),ct.bind(n,x)}}return x}function Ft(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function It(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return de},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=F.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),F.get(e.texture).__webglTexture=t,F.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=F.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,ue=t,de=n;let r=null,i=!1,a=!1;if(e){let o=F.get(e);if(o.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(N.FRAMEBUFFER,o.__webglFramebuffer),me.copy(e.viewport),he.copy(e.scissor),ge=e.scissorTest,P.viewport(me),P.scissor(he),P.setScissorTest(ge),fe=-1;return}if(o.__webglFramebuffer===void 0)Ve.setupRenderTarget(e);else if(o.__hasExternalTextures)Ve.rebindTextures(e,F.get(e.texture).__webglTexture,F.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&F.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Ve.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=F.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Ve.useMultisampledRTT(e)===!1?F.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,me.copy(e.viewport),he.copy(e.scissor),ge=e.scissorTest}else me.copy(we).multiplyScalar(xe).floor(),he.copy(Te).multiplyScalar(xe).floor(),ge=Ee;if(n!==0&&(r=se),P.bindFramebuffer(N.FRAMEBUFFER,r)&&P.drawBuffers(e,r),P.viewport(me),P.scissor(he),P.setScissorTest(ge),i){let r=F.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=F.get(e.textures[t]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=F.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,t.__webglTexture,n)}fe=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=F.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){P.bindFramebuffer(N.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s),!Re.textureFormatReadable(c)){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Re.textureTypeReadable(l)){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&N.readPixels(t,n,r,i,ot.convert(c),ot.convert(l),a)}finally{let e=M===null?null:F.get(M).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=F.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){P.bindFramebuffer(N.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s),!Re.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Re.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,d),N.bufferData(N.PIXEL_PACK_BUFFER,a.byteLength,N.STREAM_READ),N.readPixels(t,n,r,i,ot.convert(l),ot.convert(u),0);let f=M===null?null:F.get(M).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,f);let p=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await tt(N,p,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,d),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,a),N.deleteBuffer(d),N.deleteSync(p),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Ve.setTexture2D(e,0),N.copyTexSubImage2D(N.TEXTURE_2D,n,0,0,o,s,i,a),P.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=ot.convert(t.format),_=ot.convert(t.type),v;t.isData3DTexture?(Ve.setTexture3D(t,0),v=N.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Ve.setTexture2DArray(t,0),v=N.TEXTURE_2D_ARRAY):(Ve.setTexture2D(t,0),v=N.TEXTURE_2D),P.activeTexture(N.TEXTURE0),P.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,t.flipY),P.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),P.pixelStorei(N.UNPACK_ALIGNMENT,t.unpackAlignment);let y=P.getParameter(N.UNPACK_ROW_LENGTH),b=P.getParameter(N.UNPACK_IMAGE_HEIGHT),x=P.getParameter(N.UNPACK_SKIP_PIXELS),S=P.getParameter(N.UNPACK_SKIP_ROWS),C=P.getParameter(N.UNPACK_SKIP_IMAGES);P.pixelStorei(N.UNPACK_ROW_LENGTH,h.width),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,h.height),P.pixelStorei(N.UNPACK_SKIP_PIXELS,l),P.pixelStorei(N.UNPACK_SKIP_ROWS,u),P.pixelStorei(N.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=F.get(e),r=F.get(t),h=F.get(n.__renderTarget),g=F.get(r.__renderTarget);P.bindFramebuffer(N.READ_FRAMEBUFFER,h.__webglFramebuffer),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,F.get(e).__webglTexture,i,d+n),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,F.get(t).__webglTexture,a,m+n)),N.blitFramebuffer(l,u,o,s,f,p,o,s,N.DEPTH_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||F.has(e)){let n=F.get(e),r=F.get(t);P.bindFramebuffer(N.READ_FRAMEBUFFER,ce),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,le);for(let e=0;e<c;e++)w?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,n.__webglTexture,i),T?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,r.__webglTexture,a),i===0?T?N.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):N.copyTexSubImage2D(v,a,f,p,l,u,o,s):N.blitFramebuffer(l,u,o,s,f,p,o,s,N.COLOR_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?N.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h);P.pixelStorei(N.UNPACK_ROW_LENGTH,y),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,b),P.pixelStorei(N.UNPACK_SKIP_PIXELS,x),P.pixelStorei(N.UNPACK_SKIP_ROWS,S),P.pixelStorei(N.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&N.generateMipmap(v),P.unbindTexture()},this.initRenderTarget=function(e){F.get(e).__webglFramebuffer===void 0&&Ve.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Ve.setTextureCube(e,0):e.isData3DTexture?Ve.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Ve.setTexture2DArray(e,0):Ve.setTexture2D(e,0),P.unbindTexture()},this.resetState=function(){ue=0,de=0,M=null,P.reset(),st.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ke}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}};function sl(){if(typeof window>`u`||!(`speechSynthesis`in window)||typeof SpeechSynthesisUtterance>`u`)return null;let e=window.speechSynthesis,t=()=>{let t=e.getVoices(),n=e=>e.lang.replace(`_`,`-`).toLowerCase();return t.find(e=>n(e)===`pt-br`)??t.find(e=>n(e).startsWith(`pt`))};return{speak(n,r){let i=new SpeechSynthesisUtterance(n);i.lang=`pt-BR`,i.rate=.95,i.volume=r;let a=t();a&&(i.voice=a),e.speak(i)},cancel(){e.cancel()}}}function cl(e){let t=e.replace(/[\p{Extended_Pictographic}\u2190-\u21ff\u2600-\u27bf\u221e\ufe0f]/gu,``).replace(/\s*·\s*/g,`, `).replace(/\s+/g,` `).trim(),n=t.replace(/[^\p{L}]/gu,``);return n&&n===n.toUpperCase()?t.charAt(0)+t.slice(1).toLowerCase():t}var ll=class{voice;now;enabled=!0;muted=!1;volume=1;spokenAt=new Map;constructor(e=sl(),t=()=>performance.now()/1e3){this.voice=e,this.now=t}get supported(){return this.voice!==null}say(e,t=20){if(!e||!this.enabled||this.muted||this.volume<=0||!this.voice)return!1;let n=cl(e);if(!n)return!1;let r=this.now(),i=this.spokenAt.get(n);return i!==void 0&&r-i<t?!1:(this.spokenAt.set(n,r),this.voice.cancel(),this.voice.speak(n,this.volume),!0)}stop(){this.voice?.cancel()}},ul={build:60/84/2,boss:60/132/2},U=null,dl=[64,U,67,U,69,67,U,U,72,U,69,U,67,U,64,U,69,U,67,64,U,62,U,U,62,U,67,U,64,U,U,U,60,U,64,U,67,U,69,U,67,U,64,U,62,U,U,U,64,U,62,60,U,62,U,64,60,U,U,U,U,U,U,U],fl=[48,45,41,43],pl=[69,U,U,72,U,U,71,U,69,U,U,U,64,U,U,U,69,U,U,72,U,U,74,U,76,U,74,U,72,U,71,U],ml=[45,41,43,40],hl={build:dl.length,boss:pl.length};function gl(e){return 440*2**((e-69)/12)}function _l(e,t,n,r,i=1){return{frequency:gl(e),duration:t,gain:n,wave:r,bend:i}}function vl(e,t){let n=hl[e],r=(t%n+n)%n,i=Math.floor(r/8)%4,a=r%8,o=[];if(e===`build`){(a===0||a===4)&&o.push(_l(fl[i],1.3,.05,`sine`));let e=dl[r];return e!==null&&o.push(_l(e,.55,.035,`triangle`)),o}o.push(_l(ml[i],.18,.03,`square`)),(a===0||a===4)&&o.push(_l(40,.3,.07,`sine`,.45));let s=pl[r];return s!==null&&o.push(_l(s,.2,.022,`square`)),o}function yl(e,t){return e?t?`boss`:`build`:null}var bl=.25,xl=class{context=null;master=null;noiseBuffer=null;ambient=null;musicBus=null;musicTheme=null;musicStep=0;musicNext=0;muted=!1;musicEnabled=!0;volume=.45;resume(){if(!this.context){let e=window.AudioContext??window.webkitAudioContext;if(!e)return;this.context=new e,this.master=this.context.createGain(),this.master.connect(this.context.destination),this.musicBus=this.context.createGain(),this.musicBus.connect(this.master),this.noiseBuffer=this.createNoiseBuffer(this.context),this.applyGain(),this.startAmbient(this.context,this.master)}this.context.state===`suspended`&&this.context.resume()}setMuted(e){this.muted=e,this.applyGain()}setVolume(e){this.volume=Math.max(0,Math.min(1,e)),this.applyGain()}applyGain(){this.master&&(this.master.gain.value=this.muted?0:this.volume)}setAmbience(e,t,n){this.ambient&&(this.ambient.surface.gain.value=Math.max(0,e)*.045,this.ambient.cave.gain.value=Math.max(0,t)*.07,this.ambient.boss.gain.value=Math.max(0,n)*.09)}setMusic(e){e!==this.musicTheme&&(this.musicTheme=e,this.musicStep=0,this.context&&(this.musicNext=this.context.currentTime+.12))}updateMusic(){let e=this.context,t=this.musicBus,n=this.musicTheme;if(!e||!t||!n||!this.musicEnabled||this.muted)return;let r=e.currentTime;for(this.musicNext<r&&(this.musicNext=r+.05);this.musicNext<r+bl;){for(let e of vl(n,this.musicStep))this.tone(this.musicNext,e.wave,e.frequency,e.frequency*e.bend,e.duration,e.gain,t);this.musicNext+=ul[n],this.musicStep++}}play(e){if(this.muted||!this.context||!this.master)return;let t=this.context.currentTime;switch(e){case`break`:this.noise(t,.18,.5,1800,400);break;case`place`:this.tone(t,`square`,220,160,.1,.2);break;case`hit`:this.tone(t,`square`,340,120,.09,.28),this.noise(t,.1,.25,2400,900);break;case`smash`:this.tone(t,`sine`,150,45,.32,.6),this.tone(t,`triangle`,784,1175,.22,.3),this.tone(t+.06,`triangle`,1175,1568,.26,.22),this.noise(t,.16,.38,3200,600);break;case`hurt`:this.tone(t,`sawtooth`,200,90,.28,.3);break;case`step`:this.noise(t,.07,.12,900,300);break;case`slam`:this.tone(t,`sine`,110,32,.7,.75),this.noise(t,.5,.5,700,120);break;case`roar`:this.tone(t,`sawtooth`,90,55,1.4,.5),this.tone(t+.05,`square`,60,40,1.2,.3);break;case`summon`:this.tone(t,`triangle`,300,900,.7,.35);break;case`explode`:this.noise(t,.7,.6,500,80),this.tone(t,`sine`,140,40,.5,.5);break;case`stagger`:this.tone(t,`sine`,90,38,.5,.48),this.tone(t,`triangle`,520,180,.5,.3),this.noise(t,.28,.42,1400,180);break;case`plate`:this.tone(t,`square`,680,220,.12,.22),this.tone(t,`triangle`,420,180,.18,.18),this.noise(t,.08,.2,3200,800);break;case`victory`:this.tone(t,`triangle`,392,392,.35,.32),this.tone(t+.18,`triangle`,523,523,.35,.32),this.tone(t+.36,`triangle`,659,659,.7,.32);break;case`death`:this.tone(t,`sawtooth`,240,60,1.1,.35);break;case`eat`:this.noise(t,.12,.18,1400,500),this.tone(t,`triangle`,220,340,.16,.22);break;case`splash`:this.noise(t,.26,.32,1600,280),this.tone(t,`sine`,210,80,.18,.14)}}tone(e,t,n,r,i,a,o=this.master){let s=this.context,c=o;if(!s||!c)return;let l=s.createOscillator(),u=s.createGain();l.type=t,l.frequency.setValueAtTime(n,e),l.frequency.exponentialRampToValueAtTime(Math.max(20,r),e+i),u.gain.setValueAtTime(1e-4,e),u.gain.exponentialRampToValueAtTime(a,e+.012),u.gain.exponentialRampToValueAtTime(1e-4,e+i),l.connect(u).connect(c),l.start(e),l.stop(e+i+.05)}noise(e,t,n,r,i){let a=this.context,o=this.master;if(!a||!o||!this.noiseBuffer)return;let s=a.createBufferSource();s.buffer=this.noiseBuffer;let c=a.createBiquadFilter();c.type=`lowpass`,c.frequency.setValueAtTime(r,e),c.frequency.exponentialRampToValueAtTime(Math.max(60,i),e+t);let l=a.createGain();l.gain.setValueAtTime(n,e),l.gain.exponentialRampToValueAtTime(1e-4,e+t),s.connect(c).connect(l).connect(o),s.start(e),s.stop(e+t+.05)}createNoiseBuffer(e){let t=e.createBuffer(1,e.sampleRate*2,e.sampleRate),n=t.getChannelData(0);for(let e=0;e<n.length;e++)n[e]=Math.random()*2-1;return t}startAmbient(e,t){if(this.ambient||!this.noiseBuffer)return;let n=e.createGain(),r=e.createGain(),i=e.createGain();n.gain.value=0,r.gain.value=0,i.gain.value=0,n.connect(t),r.connect(t),i.connect(t),this.loopNoise(e,n,900,280),this.loopTone(e,n,`triangle`,196,.18),this.loopTone(e,r,`sine`,48,.55),this.loopTone(e,r,`sine`,72,.28),this.loopNoise(e,r,220,70),this.loopTone(e,i,`sawtooth`,36,.45),this.loopTone(e,i,`triangle`,55,.35),this.loopTone(e,i,`sine`,82,.2),this.ambient={surface:n,cave:r,boss:i}}loopNoise(e,t,n,r){if(!this.noiseBuffer)return;let i=e.createBufferSource();i.buffer=this.noiseBuffer,i.loop=!0;let a=e.createBiquadFilter();a.type=`lowpass`,a.frequency.value=n,a.Q.value=.7;let o=e.createOscillator(),s=e.createGain();o.type=`sine`,o.frequency.value=.07,s.gain.value=Math.abs(n-r)*.5,o.connect(s).connect(a.frequency),a.frequency.value=(n+r)*.5,i.connect(a).connect(t),i.start(),o.start()}loopTone(e,t,n,r,i){let a=e.createOscillator(),o=e.createGain();a.type=n,a.frequency.value=r,o.gain.value=i,a.connect(o).connect(t),a.start()}},Sl={stagger:.07,phase:.15,defeat:.15},Cl=class{remaining=0;get active(){return this.remaining>0}trigger(e){this.remaining=Math.max(this.remaining,e)}update(e){if(this.remaining<=0)return!1;let t=this.remaining-e;return this.remaining=t>1e-6?t:0,!0}clear(){this.remaining=0}},wl=class{max;invulnerabilityWindow;current;immune=!1;invulnerability=0;onDamage=null;onDeath=null;constructor(e,t=.4){this.max=e,this.invulnerabilityWindow=t,this.current=e}get dead(){return this.current<=0}get fraction(){return Math.max(0,this.current/this.max)}update(e){this.invulnerability>0&&(this.invulnerability=Math.max(0,this.invulnerability-e))}damage(e,t={}){return this.immune||this.dead||e<=0||this.invulnerability>0&&!t.bypassInvulnerability?!1:(this.current=Math.max(0,this.current-e),t.bypassInvulnerability||(this.invulnerability=this.invulnerabilityWindow),this.onDamage?.(e),this.dead&&this.onDeath?.(),!0)}heal(e){if(this.immune||this.dead||e<=0)return 0;let t=this.current;return this.current=Math.min(this.max,this.current+e),this.current-t}reset(){this.current=this.max,this.invulnerability=0}setCurrent(e){this.current=Math.max(0,Math.min(this.max,e)),this.invulnerability=0}};function Tl(e,t,n,r){let i=t/2;return r.minX=e.x-i,r.minY=e.y,r.minZ=e.z-i,r.maxX=e.x+i,r.maxY=e.y+n,r.maxZ=e.z+i,r}function El(){return{minX:0,minY:0,minZ:0,maxX:0,maxY:0,maxZ:0}}function Dl(e,t,n,r){let i=0,a=r,o=[[e.x,t.x,n.minX,n.maxX],[e.y,t.y,n.minY,n.maxY],[e.z,t.z,n.minZ,n.maxZ]];for(let[e,t,n,r]of o){if(Math.abs(t)<1e-8){if(e<n||e>r)return null;continue}let o=1/t,s=(n-e)*o,c=(r-e)*o;if(s>c&&([s,c]=[c,s]),i=Math.max(i,s),a=Math.min(a,c),i>a)return null}return i}var W=function(e){return e[e.Air=0]=`Air`,e[e.Stone=1]=`Stone`,e[e.Dirt=2]=`Dirt`,e[e.Grass=3]=`Grass`,e[e.Sand=4]=`Sand`,e[e.Gravel=5]=`Gravel`,e[e.Cobblestone=6]=`Cobblestone`,e[e.Log=7]=`Log`,e[e.Leaves=8]=`Leaves`,e[e.Planks=9]=`Planks`,e[e.CoalOre=10]=`CoalOre`,e[e.IronOre=11]=`IronOre`,e[e.GoldOre=12]=`GoldOre`,e[e.CrystalOre=13]=`CrystalOre`,e[e.Bedrock=14]=`Bedrock`,e[e.Lava=15]=`Lava`,e[e.Obsidian=16]=`Obsidian`,e[e.RunicStone=17]=`RunicStone`,e[e.DarkBrick=18]=`DarkBrick`,e[e.Glowstone=19]=`Glowstone`,e[e.Mushroom=20]=`Mushroom`,e[e.Torch=21]=`Torch`,e[e.Water=22]=`Water`,e[e.Bed=23]=`Bed`,e[e.BirchLog=24]=`BirchLog`,e[e.BirchLeaves=25]=`BirchLeaves`,e[e.SentinelTrophy=26]=`SentinelTrophy`,e[e.WardenTrophy=27]=`WardenTrophy`,e[e.White=28]=`White`,e[e.Red=29]=`Red`,e[e.Orange=30]=`Orange`,e[e.Yellow=31]=`Yellow`,e[e.Green=32]=`Green`,e[e.Blue=33]=`Blue`,e[e.Purple=34]=`Purple`,e[e.Pink=35]=`Pink`,e[e.Glass=36]=`Glass`,e[e.SentinelBanner=37]=`SentinelBanner`,e[e.WardenLantern=38]=`WardenLantern`,e[e.Moss=39]=`Moss`,e[e.Flower=40]=`Flower`,e[e.Chest=41]=`Chest`,e[e.BeaconTrophy=42]=`BeaconTrophy`,e[e.BeaconLantern=43]=`BeaconLantern`,e[e.Carrot=44]=`Carrot`,e[e.CarrotSprout=45]=`CarrotSprout`,e[e.CarrotGrowing=46]=`CarrotGrowing`,e[e.CarrotRipe=47]=`CarrotRipe`,e[e.Black=48]=`Black`,e[e.Gray=49]=`Gray`,e[e.Brown=50]=`Brown`,e[e.LightBlue=51]=`LightBlue`,e[e.Lime=52]=`Lime`,e[e.Cyan=53]=`Cyan`,e[e.Magenta=54]=`Magenta`,e[e.Peach=55]=`Peach`,e[e.Cream=56]=`Cream`,e[e.Navy=57]=`Navy`,e[e.Teal=58]=`Teal`,e[e.Coral=59]=`Coral`,e[e.Lavender=60]=`Lavender`,e[e.Mint=61]=`Mint`,e[e.Chocolate=62]=`Chocolate`,e[e.Painting=63]=`Painting`,e[e.Hay=64]=`Hay`,e[e.GoldenCarrot=65]=`GoldenCarrot`,e}({}),G=function(e){return e[e.Stone=0]=`Stone`,e[e.Dirt=1]=`Dirt`,e[e.GrassTop=2]=`GrassTop`,e[e.GrassSide=3]=`GrassSide`,e[e.Sand=4]=`Sand`,e[e.Gravel=5]=`Gravel`,e[e.Cobblestone=6]=`Cobblestone`,e[e.LogSide=7]=`LogSide`,e[e.LogTop=8]=`LogTop`,e[e.Leaves=9]=`Leaves`,e[e.Planks=10]=`Planks`,e[e.CoalOre=11]=`CoalOre`,e[e.IronOre=12]=`IronOre`,e[e.GoldOre=13]=`GoldOre`,e[e.CrystalOre=14]=`CrystalOre`,e[e.Bedrock=15]=`Bedrock`,e[e.Lava=16]=`Lava`,e[e.Obsidian=17]=`Obsidian`,e[e.RunicTop=18]=`RunicTop`,e[e.RunicSide=19]=`RunicSide`,e[e.DarkBrick=20]=`DarkBrick`,e[e.Glowstone=21]=`Glowstone`,e[e.Mushroom=22]=`Mushroom`,e[e.Torch=23]=`Torch`,e[e.TorchFlame=24]=`TorchFlame`,e[e.Water=25]=`Water`,e[e.Bed=26]=`Bed`,e[e.BedEnd=27]=`BedEnd`,e[e.BirchLogSide=28]=`BirchLogSide`,e[e.BirchLogTop=29]=`BirchLogTop`,e[e.BirchLeaves=30]=`BirchLeaves`,e[e.White=31]=`White`,e[e.Red=32]=`Red`,e[e.Orange=33]=`Orange`,e[e.Yellow=34]=`Yellow`,e[e.Green=35]=`Green`,e[e.Blue=36]=`Blue`,e[e.Purple=37]=`Purple`,e[e.Pink=38]=`Pink`,e[e.Glass=39]=`Glass`,e[e.SentinelTrophy=40]=`SentinelTrophy`,e[e.WardenTrophy=41]=`WardenTrophy`,e[e.SentinelBanner=42]=`SentinelBanner`,e[e.WardenLantern=43]=`WardenLantern`,e[e.Moss=44]=`Moss`,e[e.Flower=45]=`Flower`,e[e.Chest=46]=`Chest`,e[e.BeaconTrophy=47]=`BeaconTrophy`,e[e.BeaconLantern=48]=`BeaconLantern`,e[e.Black=49]=`Black`,e[e.Gray=50]=`Gray`,e[e.Brown=51]=`Brown`,e[e.LightBlue=52]=`LightBlue`,e[e.Lime=53]=`Lime`,e[e.Cyan=54]=`Cyan`,e[e.Magenta=55]=`Magenta`,e[e.Peach=56]=`Peach`,e[e.Cream=57]=`Cream`,e[e.Navy=58]=`Navy`,e[e.Teal=59]=`Teal`,e[e.Coral=60]=`Coral`,e[e.Lavender=61]=`Lavender`,e[e.Mint=62]=`Mint`,e[e.Chocolate=63]=`Chocolate`,e}({});function K(e,t,n,r={}){return{id:e,name:t,tiles:n,opaque:r.opaque??!0,solid:r.solid??!0,hardness:r.hardness??.4,contactDamage:r.contactDamage??0,glow:r.glow??0,drop:r.drop===void 0?e:r.drop,heal:r.heal??0}}var Ol=[K(0,`Ar`,[0,0,0],{opaque:!1,solid:!1,hardness:1/0,drop:null}),K(1,`Pedra`,[0,0,0],{hardness:.45,drop:6}),K(2,`Terra`,[1,1,1],{hardness:.25}),K(3,`Grama`,[2,3,1],{hardness:.28,drop:2}),K(4,`Areia`,[4,4,4],{hardness:.2}),K(5,`Cascalho`,[5,5,5],{hardness:.25}),K(6,`Pedregulho`,[6,6,6],{hardness:.5}),K(7,`Tronco`,[8,7,8],{hardness:.55}),K(8,`Folhas`,[9,9,9],{hardness:.12,drop:null}),K(24,`Tronco de bétula`,[29,28,29],{hardness:.5}),K(25,`Folhas de bétula`,[30,30,30],{hardness:.1,drop:null}),K(9,`Tábuas`,[10,10,10],{hardness:.4}),K(10,`Carvão`,[11,11,11],{hardness:.7}),K(11,`Ferro`,[12,12,12],{hardness:.85}),K(12,`Ouro`,[13,13,13],{hardness:.95}),K(13,`Cristal`,[14,14,14],{hardness:1.1,glow:.35,heal:8}),K(14,`Rocha inquebrável`,[15,15,15],{hardness:1/0,drop:null}),K(15,`Lava`,[16,16,16],{hardness:1/0,contactDamage:7,glow:.85,drop:null}),K(16,`Obsidiana`,[17,17,17],{hardness:3.2}),K(17,`Pedra rúnica`,[18,19,20],{hardness:2.4,glow:.4}),K(18,`Tijolos escuros`,[20,20,20],{hardness:1.4}),K(19,`Pedra luminosa`,[21,21,21],{hardness:.4,glow:1}),K(20,`Cogumelo`,[22,22,22],{hardness:.08,solid:!1,heal:4}),K(21,`Tocha`,[24,23,23],{hardness:.08,opaque:!1,solid:!1,glow:.95}),K(22,`Água`,[25,25,25],{hardness:1/0,opaque:!1,solid:!1,drop:null}),K(23,`Cama`,[26,27,26],{hardness:.12}),K(26,`Troféu do Sentinela`,[40,40,20],{glow:.5}),K(27,`Troféu do Guardião`,[41,41,20],{glow:.7}),K(28,`Branco`,[31,31,31],{hardness:.25}),K(29,`Vermelho`,[32,32,32],{hardness:.25}),K(30,`Laranja`,[33,33,33],{hardness:.25}),K(31,`Amarelo`,[34,34,34],{hardness:.25}),K(32,`Verde`,[35,35,35],{hardness:.25}),K(33,`Azul`,[36,36,36],{hardness:.25}),K(34,`Roxo`,[37,37,37],{hardness:.25}),K(35,`Rosa`,[38,38,38],{hardness:.25}),K(36,`Vidro`,[39,39,39],{opaque:!1,hardness:.2}),K(37,`Emblema do Sentinela`,[42,42,20],{glow:.3}),K(38,`Lanterna do Guardião`,[43,43,20],{glow:1}),K(39,`Musgo`,[44,44,44],{hardness:.3}),K(40,`Flor`,[45,45,45],{hardness:.12,heal:2}),K(41,`Baú`,[46,46,10],{hardness:.35}),K(42,`Troféu do Faroleiro`,[47,47,44],{glow:.6}),K(43,`Lanterna do Farol`,[48,48,44],{glow:1}),K(44,`Cenoura`,[33,33,33],{opaque:!1,solid:!1,hardness:.08}),K(45,`Cenoura nascendo`,[2,2,2],{opaque:!1,solid:!1,hardness:.08,drop:44}),K(46,`Cenoura crescendo`,[35,35,35],{opaque:!1,solid:!1,hardness:.08,drop:44}),K(47,`Cenoura pronta`,[33,33,35],{opaque:!1,solid:!1,hardness:.08,drop:44}),K(48,`Preto`,[49,49,49],{hardness:.25}),K(49,`Cinza`,[50,50,50],{hardness:.25}),K(50,`Marrom`,[51,51,51],{hardness:.25}),K(51,`Azul claro`,[52,52,52],{hardness:.25}),K(52,`Verde limão`,[53,53,53],{hardness:.25}),K(53,`Azul piscina`,[54,54,54],{hardness:.25}),K(54,`Rosa forte`,[55,55,55],{hardness:.25}),K(55,`Pêssego`,[56,56,56],{hardness:.25}),K(56,`Creme`,[57,57,57],{hardness:.25}),K(57,`Azul escuro`,[58,58,58],{hardness:.25}),K(58,`Verde água`,[59,59,59],{hardness:.25}),K(59,`Coral`,[60,60,60],{hardness:.25}),K(60,`Lilás`,[61,61,61],{hardness:.25}),K(61,`Menta`,[62,62,62],{hardness:.25}),K(62,`Chocolate`,[63,63,63],{hardness:.25}),K(63,`Quadro rosa`,[34,38,51],{hardness:1/0,drop:null}),K(64,`Feno`,[34,34,51],{hardness:.2}),K(65,`Cenoura dourada`,[34,13,34],{opaque:!1,solid:!1,hardness:.08})].sort((e,t)=>e.id-t.id),kl=Ol.length,Al=new Uint8Array(kl),jl=new Uint8Array(kl),Ml=new Uint8Array(kl),Nl=new Float32Array(kl),Pl=new Uint8Array(kl),Fl=new Uint8Array(kl),Il=new Uint8Array(kl);for(let e of Ol)Al[e.id]=+!!e.opaque,jl[e.id]=+!!e.solid,Ml[e.id]=e.id===0?0:1,Nl[e.id]=e.glow,Pl[e.id]=e.tiles[0],Fl[e.id]=e.tiles[1],Il[e.id]=e.tiles[2];function Ll(e){return Ol[e]??Ol[0]}function Rl(e){return jl[e]===1}function zl(e){return Ll(e).heal>0}function Bl(e){return e===10}function Vl(e){return e===22}function Hl(e){return e===9}function Ul(e){return e===23}function Wl(e){return e===41}function Gl(e){return e===44}function Kl(e){return e===65}function ql(e){return e===45||e===46||e===47}function Jl(e){return e===45?46:e===46?47:null}function Yl(e){return e===2||e===3||e===39}function Xl(e){if(e===0||e===14||e===22||e===15||ql(e)||Gl(e)||Kl(e)||e===63)return!1;let t=Ll(e);return t.solid&&Number.isFinite(t.hardness)}var Zl=.001,Ql=class{width;height;stepHeight;position=new R;velocity=new R;onGround=!1;fallPeak=0;constructor(e,t,n=0){this.width=e,this.height=t,this.stepHeight=n}get halfWidth(){return this.width/2}move(e,t){let n=this.velocity.x*t,r=this.velocity.y*t,i=this.velocity.z*t,a=this.position.x,o=this.position.y,s=this.position.z;this.moveAxis(e,0,n),this.moveAxis(e,2,i);let c=this.position.x,l=this.position.z;(Math.abs(c-(a+n))>Zl||Math.abs(l-(s+i))>Zl)&&this.onGround&&this.stepHeight>0&&this.tryStepUp(e,a,o,s,n,i,c,l),this.onGround=!1,this.moveAxis(e,1,r),this.fallPeak=this.onGround?this.position.y:Math.max(this.fallPeak,this.position.y)}tryStepUp(e,t,n,r,i,a,o,s){let c=Math.hypot(o-t,s-r);if(this.position.set(t,n+this.stepHeight,r),this.intersectsWorld(e)){this.position.set(o,n,s);return}if(this.moveAxis(e,0,i),this.moveAxis(e,2,a),Math.hypot(this.position.x-t,this.position.z-r)<=c+Zl){this.position.set(o,n,s);return}this.moveAxis(e,1,-this.stepHeight)}moveAxis(e,t,n){if(n===0)return;let r=Math.ceil(Math.abs(n)/.45);for(let i=0;i<r&&!this.moveAxisStep(e,t,n/r);i++);}moveAxisStep(e,t,n){let r=this.position;t===0?r.x+=n:t===1?r.y+=n:r.z+=n;let i=this.halfWidth,a=Math.floor(r.x-i+Zl),o=Math.floor(r.x+i-Zl),s=Math.floor(r.y+Zl),c=Math.floor(r.y+this.height-Zl),l=Math.floor(r.z-i+Zl),u=Math.floor(r.z+i-Zl),d=n>0?1/0:-1/0,f=!1;for(let r=s;r<=c;r++)for(let i=l;i<=u;i++)for(let s=a;s<=o;s++){if(!Rl(e.getBlock(s,r,i)))continue;let a=t===0?s:t===1?r:i;d=n>0?Math.min(d,a):Math.max(d,a),f=!0}return f?(t===0?(r.x=n>0?d-i-Zl:d+1+i+Zl,this.velocity.x=0):t===2?(r.z=n>0?d-i-Zl:d+1+i+Zl,this.velocity.z=0):n>0?(r.y=d-this.height-Zl,this.velocity.y=0):(r.y=d+1,this.velocity.y=0,this.onGround=!0),!0):!1}intersectsWorld(e){let t=this.halfWidth,n=Math.floor(this.position.x-t+Zl),r=Math.floor(this.position.x+t-Zl),i=Math.floor(this.position.y+Zl),a=Math.floor(this.position.y+this.height-Zl),o=Math.floor(this.position.z-t+Zl),s=Math.floor(this.position.z+t-Zl);for(let t=i;t<=a;t++)for(let i=o;i<=s;i++)for(let a=n;a<=r;a++)if(Rl(e.getBlock(a,t,i)))return!0;return!1}forEachOverlappingBlock(e,t){let n=this.halfWidth,r=Math.floor(this.position.x-n),i=Math.floor(this.position.x+n),a=Math.floor(this.position.y),o=Math.floor(this.position.y+this.height),s=Math.floor(this.position.z-n),c=Math.floor(this.position.z+n);for(let n=a;n<=o;n++)for(let a=s;a<=c;a++)for(let o=r;o<=i;o++)t(e.getBlock(o,n,a))}unstick(e,t=64){for(let n=0;n<t&&this.intersectsWorld(e);n++)this.position.y+=1}},$l=class{object3D=new fn;body;team;health=null;removed=!1;damageMultiplier=1;clearedOnDeath=!0;box=El();constructor(e,t,n,r=0){this.body=new Ql(e,t,r),this.team=n}get position(){return this.body.position}get velocity(){return this.body.velocity}getBox(){return Tl(this.position,this.body.width,this.body.height,this.box)}getCenter(e){return e.set(this.position.x,this.position.y+this.body.height/2,this.position.z)}hitFlash(){}syncTransform(){this.object3D.position.copy(this.position)}onRemoved(){}},eu=.25;function tu(e,t,n,r=0){let i=n.x-t.x,a=n.z-t.z,o=Math.hypot(i,a);if(o<eu)return!1;let s=Math.floor(n.y+.05)+r,c=Math.floor(n.x),l=Math.floor(n.z),u=Math.max(0,o-3);for(let n=u;n<o;n+=eu){let r=Math.floor(t.x+i*n/o),u=Math.floor(t.z+a*n/o);if((r!==c||u!==l)&&Rl(e.getBlock(r,s,u)))return!0}return!1}function nu(e){return e.slots.some(e=>e.block!==null&&e.count>0&&Rl(e.block))}var ru=256;function iu(e,t){return`${e},${t}`}function au(e,t,n){return`${e},${t},${n}`}var ou=class e{cx;cz;voxels=new Uint8Array(32768);heightMap=new Uint8Array(ru);sectionFill=new Int32Array(8);generated=!1;constructor(e,t){this.cx=e,this.cz=t}static index(e,t,n){return(t*16+n)*16+e}get(t,n,r){return n<0||n>=128?W.Air:this.voxels[e.index(t,n,r)]}set(t,n,r,i){if(n<0||n>=128)return!1;let a=e.index(t,n,r),o=this.voxels[a];if(o===i)return!1;this.voxels[a]=i;let s=n>>4;this.sectionFill[s]+=(Ml[i]??0)-(Ml[o]??0);let c=r*16+t;if(i!==W.Air)n>this.heightMap[c]&&(this.heightMap[c]=n);else if(n===this.heightMap[c]){let i=n-1;for(;i>0&&this.voxels[e.index(t,i,r)]===W.Air;)i--;this.heightMap[c]=i}return!0}heightAt(e,t){return this.heightMap[t*16+e]}isSectionEmpty(e){return this.sectionFill[e]===0}},q={centerX:0,centerZ:0,radius:22,wall:3,floorY:20,ceilingY:38},su=q.floorY+1,cu={x:q.centerX,y:q.floorY+2,z:q.centerZ},J={x:q.centerX,z:q.centerZ-(q.radius+4),shaft:2},lu={x:72,z:48},uu={x:-52,z:28},du={centerX:uu.x-10,centerZ:uu.z,radius:14},fu={x:du.centerX,z:du.centerZ},pu={x:J.x+.5,y:su,z:q.centerZ-(q.radius-4)+.5};function mu(e,t){return Math.hypot(e-q.centerX,t-q.centerZ)}function hu(e,t,n){return t>q.floorY&&t<q.ceilingY+2&&mu(e,n)<q.radius-.5}function gu(e,t){let n=q.radius+q.wall+2,r=e*16,i=t*16;return mu(Math.max(r,Math.min(q.centerX,r+16-1)),Math.max(i,Math.min(q.centerZ,i+16-1)))<=n}function _u(e,t){let n=e*16,r=n+16-1,i=t*16,a=i+16-1,o=J.shaft+6,s=J.x-o,c=J.x+o,l=J.z-o,u=q.centerZ-(q.radius-5);return n<=c&&r>=s&&i<=u&&a>=l}function vu(e,t){return Math.hypot(e-du.centerX,t-du.centerZ)}function yu(e,t){return vu(e,t)<du.radius-.5}function bu(){let{centerX:e,centerZ:t,radius:n}=du,r=[];for(let i=0;i<8;i++){let a=Math.PI*2*i/8,o=Math.round(e+Math.cos(a)*(n-1)),s=Math.round(t+Math.sin(a)*(n-1));Math.hypot(o-uu.x,s-uu.z)>=5&&r.push({x:o,z:s,index:i})}return r}function xu(e,t,n,r){if(Math.max(Math.abs(e),Math.abs(t))!==n)return!1;let i=(r%4+4)%4;return i===0?t===n:i===1?e===n:i===2?t===-n:e===-n}function Su(e,t){return Math.abs(e-fu.x)<=1&&Math.abs(t-fu.z)<=1}function Cu(e,t){let n=du.radius+3,r=e*16,i=t*16;return vu(Math.max(r,Math.min(du.centerX,r+16-1)),Math.max(i,Math.min(du.centerZ,i+16-1)))<=n}var Y={x:20,z:88,radius:12};function wu(e,t){return Math.hypot(e-Y.x,t-Y.z)}function Tu(e,t){return wu(e,t)<Y.radius-.5}function Eu(e,t){return e===Y.x&&t===Y.z}function Du(e,t){let n=Y.radius+2,r=e*16,i=t*16;return wu(Math.max(r,Math.min(Y.x,r+16-1)),Math.max(i,Math.min(Y.z,i+16-1)))<=n}function Ou(e,t){let n=e*16,r=n+16-1,i=t*16,a=i+16-1;return n<=lu.x+4&&r>=lu.x-4&&i<=lu.z+4&&a>=lu.z-4}var ku=new R,Au=new R,ju=1.2;function Mu(e,t,n,r=.45){ku.copy(e.position).sub(t),ku.y=0,ku.lengthSq()<1e-6&&ku.set(Math.random()-.5,0,Math.random()-.5),ku.normalize().multiplyScalar(n),e.velocity.x+=ku.x,e.velocity.z+=ku.z,e.velocity.y=Math.max(e.velocity.y,n*r)}function Nu(e,t,n,r,i){return!e.health||e.health.dead||!e.health.damage(t)?!1:(n&&r>0&&Mu(e.body,n,r),i&&(e.getCenter(Au),i.burst(Au,{count:8,color:16733508,speed:3,spread:.5,life:.4})),!0)}function Pu(e,t,n,r){let i=e.armor;return e.health.damage(t*(e.gentle?.45:1)*(1-i))?(i>0&&e.onPlateAbsorb?.(t*i),n&&r>0&&Mu(e.body,n,r),!0):!1}function Fu(e){let t=e.terrainRadius??0;if(t<=0)return;let{world:n,center:r}=e,i=Math.floor(r.x-t),a=Math.ceil(r.x+t),o=Math.floor(r.y-t),s=Math.ceil(r.y+t),c=Math.floor(r.z-t),l=Math.ceil(r.z+t),u=new R,d=0;for(let f=o;f<=s;f++)for(let o=c;o<=l;o++)for(let s=i;s<=a;s++){if(Math.hypot(s+.5-r.x,f+.5-r.y,o+.5-r.z)>t)continue;let i=n.getBlock(s,f,o);i===W.Air||n.edits.has(`${s},${f},${o}`)||f<=q.floorY||i===W.Glowstone&&hu(s+.5,f+.5,o+.5)||Ll(i).hardness>ju||(n.setBlock(s,f,o,W.Air),d<14&&Math.random()<.25&&(d+=1,u.set(s+.5,f+.5,o+.5),e.particles.burst(u,{count:3,color:e.atlas.tileColors[Fl[i]],speed:5,life:.8})))}}function Iu(e,t,n,r,i){let a=Math.hypot(e.position.x-t.x,e.position.y+.9-t.y,e.position.z-t.z);if(a>n)return!1;let o=1-a/n;return Pu(e,r*(.35+.65*o),t,i*o)}var Lu=class extends $l{options;outcome=`pending`;radius=1;hitPlayerAlready=!1;ring;constructor(e){super(1,.2,`boss`),this.options=e,this.ring=new V(new ji(.72,1,64),new Er({color:e.color??16742972,transparent:!0,opacity:.85,side:2,depthWrite:!1})),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=.08,this.ring.renderOrder=2,this.object3D.add(this.ring)}update(e){this.radius+=this.options.speed*e.dt;let t=this.radius/this.options.maxRadius;if(this.ring.scale.setScalar(this.radius),this.ring.material.opacity=.85*(1-t),t>=1){e.entities.remove(this);return}if(this.hitPlayerAlready)return;let n=e.player,r=Math.hypot(n.position.x-this.position.x,n.position.z-this.position.z),i=n.position.y<this.position.y+1.2&&n.body.onGround;Math.abs(r-this.radius)<1.3&&(this.hitPlayerAlready=!0,this.outcome=i?this.shelters(e.world,n.position)?`blocked`:`hit`:`jumped`,this.options.onPass?.(this.outcome!==`hit`,this.outcome),this.outcome===`hit`&&Pu(n,this.options.damage,this.position,this.options.knockback))}shelters(e,t){return tu(e,this.position,t)}approaching(e){if(this.removed||this.hitPlayerAlready||Math.abs(e.y-this.position.y)>3)return!1;let t=Math.hypot(e.x-this.position.x,e.z-this.position.z),n=t-this.radius-1.3;return t<this.options.maxRadius&&n>=-.2&&n/this.options.speed<=.65}onRemoved(){this.ring.geometry.dispose(),this.ring.material.dispose()}},Ru=class{object3D=new fn;outline;fill;constructor(e=16726832){let t=-Math.PI/2;this.outline=new V(new ji(.92,1,48),new Er({color:e,transparent:!0,opacity:.85,side:2,depthWrite:!1})),this.outline.rotation.x=t,this.fill=new V(new xi(1,48),new Er({color:e,transparent:!0,opacity:.28,side:2,depthWrite:!1})),this.fill.rotation.x=t,this.object3D.add(this.outline,this.fill),this.object3D.visible=!1,this.object3D.renderOrder=2}show(e,t,n,r){this.object3D.position.set(e,t+.06,n),this.outline.scale.setScalar(r),this.object3D.visible=!0,this.setProgress(0)}setProgress(e){let t=this.outline.scale.x*Math.max(.001,e);this.fill.scale.setScalar(t)}hide(){this.object3D.visible=!1}dispose(){this.outline.geometry.dispose(),this.outline.material.dispose(),this.fill.geometry.dispose(),this.fill.material.dispose()}},zu={blocked:`O muro segurou a onda! Agora saia do círculo antes de ele encher.`,jumped:`Pular também vale! Agora saia do círculo antes de ele encher.`,hit:`Sem problema! Nas lutas, um muro de blocos segura a onda. Agora saia do círculo.`},Bu=class extends $l{hint;complete;stage=`wave`;timer=0;wave=null;telegraph=new Ru;circleX=0;circleZ=0;circleActive=!1;dummy;constructor(e,t,n,r,i){super(1.4,2.5,`boss`),this.hint=r,this.complete=i,this.position.set(e,t,n),this.health=new wl(100),this.health.immune=!0,this.health.onDamage=()=>{this.stage===`hit`&&(this.stage=`done`)},this.dummy=new V(new bi(1.4,2.5,1.4),new Ui({color:13284716})),this.dummy.position.y=1.25,this.object3D.add(this.dummy,this.telegraph.object3D),this.hint(`Treino sem dano · Espaço: pule a onda que vem até você`)}get objective(){return this.stage===`wave`?`1/3 · Espaço: pule a onda`:this.stage===`wall`?`Bônus · Coloque um bloco entre você e o boneco`:this.stage===`circle`?`2/3 · Saia do círculo vermelho`:`3/3 · BATA AGORA! Mire no boneco e segure o esquerdo`}update(e){if(this.stage===`done`){e.entities.remove(this),this.complete();return}let t=e.player;if((t.position.y<this.position.y-3||t.position.distanceTo(this.position)>16)&&(t.position.set(this.position.x+3,this.position.y,this.position.z),t.velocity.set(0,0,0),t.body.fallPeak=t.position.y),this.timer+=e.dt,this.stage===`wave`){if(this.timer<3||this.wave&&!this.wave.removed)return;this.timer=0,this.sendWave(e,e=>{if(!e){this.hint(`Sem problema! Aperte Espaço quando a onda chegar.`);return}this.timer=0,nu(t.inventory)?(this.stage=`wall`,this.hint(`Bônus: coloque um bloco entre você e o boneco. A onda não passa pelo muro.`)):(this.stage=`circle`,this.hint(`Boa! Agora saia do círculo antes de ele encher.`))})}else if(this.stage===`wall`){if(this.timer<6||this.wave&&!this.wave.removed)return;this.timer=0,this.sendWave(e,(e,t)=>{this.stage=`circle`,this.timer=0,t!==`pending`&&this.hint(zu[t])})}else if(this.stage===`circle`){if(this.circleActive||(this.circleX=t.position.x,this.circleZ=t.position.z,this.circleActive=!0,this.timer=0,this.telegraph.show(this.circleX-this.position.x,0,this.circleZ-this.position.z,2)),this.telegraph.setProgress(Math.min(1,this.timer/3)),this.timer<3)return;this.telegraph.hide(),this.circleActive=!1,this.timer=0,Math.hypot(t.position.x-this.circleX,t.position.z-this.circleZ)>2?(this.stage=`hit`,this.health.immune=!1,this.dummy.material.color.setHex(9033865),this.hint(`BATA AGORA! Chegue perto, mire no boneco e use o esquerdo.`),e.sfx.play(`stagger`)):this.hint(`Tente de novo: ande para fora do círculo vermelho.`)}}sendWave(e,t){this.wave=new Lu({maxRadius:12,speed:3,damage:0,knockback:0,onPass:t}),this.wave.position.copy(this.position),e.entities.add(this.wave),e.sfx.play(`stagger`)}onRemoved(){this.telegraph.dispose(),this.dummy.geometry.dispose(),this.dummy.material.dispose()}},Vu=20,Hu=.35,Uu=8,Wu=class extends $l{options;life=Uu;spin=new R(Math.random()*4-2,Math.random()*4-2,Math.random()*4-2);constructor(e){super(.9,.9,`boss`),this.options=e;let t=new V(new ki(.55,0),new Ui({color:6972768,flatShading:!0}));t.position.y=.45,this.object3D.add(t)}launchAt(e,t){this.velocity.set((e.x-this.position.x)/t,(e.y-this.position.y)/t+.5*Vu*t,(e.z-this.position.z)/t)}update(e){let{dt:t}=e;if(this.life-=t,this.life<=0){this.detonate(e);return}this.velocity.y-=Vu*t;let n=this.velocity.length()*t,r=Math.max(1,Math.ceil(n/Hu)),i=t/r;for(let t=0;t<r;t++){if(this.position.addScaledVector(this.velocity,i),this.hitsPlayer(e)){Pu(e.player,this.options.directDamage,this.position,7),this.detonate(e);return}if(Rl(e.world.getBlock(Math.floor(this.position.x),Math.floor(this.position.y),Math.floor(this.position.z)))){this.detonate(e);return}}this.object3D.rotation.x+=this.spin.x*t,this.object3D.rotation.y+=this.spin.y*t,this.object3D.rotation.z+=this.spin.z*t}hitsPlayer(e){let t=e.player.position;return Math.abs(t.x-this.position.x)<.9&&Math.abs(t.z-this.position.z)<.9&&this.position.y>t.y-.5&&this.position.y<t.y+2.2}detonate(e){e.sfx.play(`explode`),e.particles.burst(this.position,{count:26,color:9076856,speed:7,spread:.8,life:.9}),Fu({world:e.world,particles:e.particles,atlas:e.atlas,center:this.position,radius:this.options.blastRadius,terrainRadius:this.options.terrainRadius}),Iu(e.player,this.position,this.options.blastRadius,this.options.blastDamage,6),e.entities.remove(this)}};function Gu(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Ku(e,t,n){let r=Math.imul(e,668265261)^Math.imul(t,374761393)^Math.imul(n,2654435761);return r=Math.imul(r^r>>>15,2246822507),r=Math.imul(r^r>>>13,3266489909),((r^r>>>16)>>>0)/4294967296}function qu(e){let t=Math.PI*2,n=((e+Math.PI)%t+t)%t-Math.PI;return n===-Math.PI?Math.PI:n}function Ju(e,t,n){return e<t?t:e>n?n:e}function Yu(e,t,n){return e+(t-e)*n}function Xu(e,t,n,r){return Yu(e,t,1-Math.exp(-n*r))}function Zu(e,t){return e+Math.random()*(t-e)}var Qu=4538194,$u=3288381,ed=13;function td(e,t,n,r){return new V(new bi(e,t,n),new Ui({color:r,flatShading:!0}))}var nd=class{root=new fn;torso;head;leftArm;rightArm;leftLeg;rightLeg;cores=[];eyes=[];bodyParts=[];aura;baseEmissive=new B(9133302).multiplyScalar(.06);walkPhase=0;armRaise=0;crouch=0;flashTimer=0;flashColor=7807522;constructor(){this.torso=new fn,this.torso.position.y=3.1,this.root.add(this.torso);let e=td(2.6,2.2,1.6,Qu),t=td(2,.9,1.4,$u);t.position.y=-1.5,this.torso.add(e,t),this.head=td(1.4,1.2,1.3,Qu),this.head.position.y=1.7,this.torso.add(this.head);for(let e of[-1,1]){let t=new V(new bi(.32,.18,.08),new Er({color:16747068}));t.position.set(e*.34,.1,.68),this.head.add(t),this.eyes.push(t)}this.leftArm=this.buildArm(-1),this.rightArm=this.buildArm(1),this.torso.add(this.leftArm,this.rightArm),this.leftLeg=this.buildLeg(-1),this.rightLeg=this.buildLeg(1),this.root.add(this.leftLeg,this.rightLeg);for(let e=0;e<3;e++){let t=new V(new Mi(.3,10,8),new Er({color:9133302}));t.position.set((e-1)*.75,.4-Math.abs(e-1)*.5,-.85),this.torso.add(t),this.cores.push(t)}this.bodyParts.push(e,t,this.head),this.applyBaseEmissive(),this.aura=new xa(9133302,ed,30,2),this.aura.position.set(0,2.6,3.6),this.root.add(this.aura)}buildArm(e){let t=new fn;t.position.set(e*1.75,.7,0);let n=td(.9,2.4,.9,Qu);n.position.y=-1.1;let r=td(1.2,1,1.2,$u);return r.position.y=-2.5,t.add(n,r),this.bodyParts.push(n,r),t}dispose(){this.root.traverse(e=>{if(e instanceof V){e.geometry.dispose();for(let t of Array.isArray(e.material)?e.material:[e.material])t.dispose()}}),this.aura.dispose()}buildLeg(e){let t=new fn;t.position.set(e*.65,1.9,0);let n=td(.95,2,.95,$u);n.position.y=-1;let r=td(1.1,.5,1.4,Qu);return r.position.set(0,-2.1,.15),t.add(n,r),this.bodyParts.push(n,r),t}setPhaseColor(e){for(let t of this.cores)t.material.color.setHex(e);for(let t of this.eyes)t.material.color.setHex(e);this.aura.color.setHex(e),this.baseEmissive.setHex(e).multiplyScalar(.06),this.applyBaseEmissive()}applyBaseEmissive(){for(let e of this.bodyParts)e.material.emissive.copy(this.baseEmissive)}setArmRaise(e){this.armRaise=e}setCrouch(e){this.crouch=e}setCoreScale(e){for(let t of this.cores)t.scale.setScalar(e)}flash(e=.14,t=7807522){this.flashTimer=e,this.flashColor=t}update(e,t,n){this.walkPhase+=e*t*1.6;let r=Math.min(t/3,1),i=Math.sin(this.walkPhase)*.6*r;this.leftLeg.rotation.x=i,this.rightLeg.rotation.x=-i;let a=Yu(-i*.7,2.5,this.armRaise);this.leftArm.rotation.x=a,this.rightArm.rotation.x=a,this.leftArm.rotation.z=this.armRaise*.2,this.rightArm.rotation.z=-this.armRaise*.2,this.torso.rotation.x=Xu(this.torso.rotation.x,this.crouch*.65,10,e),this.torso.position.y=3.1-this.crouch*.5+Math.sin(n*1.6)*.05,this.head.rotation.x=-this.crouch*.4;let o=1+Math.sin(n*4)*.08;if(this.setCoreScale(o*(1+this.crouch*.55)),this.aura.intensity=ed*o*(1+this.crouch*.9),this.flashTimer>0){if(this.flashTimer=Math.max(0,this.flashTimer-e),this.flashTimer>0)for(let e of this.bodyParts)e.material.emissive.setHex(this.flashColor);else this.applyBaseEmissive()}}},rd=class{states;boss;state;name;time=0;constructor(e,t,n){this.states=e,this.boss=n,this.name=t,this.state=e[t],this.state.enter?.(n)}get current(){return this.name}change(e){e!==this.name&&(this.state.exit?.(this.boss),this.name=e,this.state=this.states[e],this.time=0,this.state.enter?.(this.boss))}update(e){this.time+=e;let t=this.state.update(this.boss,e,this.time);t&&this.change(t)}},id=1.1,ad=.8,od=.5,sd=2.2,cd=9,ld=6,ud=class extends $l{timer=0;erupted=!1;telegraph=new Ru(16751918);column;constructor(e,t,n){super(sd*2,cd,`boss`),this.position.set(e,t,n),this.telegraph.show(0,0,0,sd),this.object3D.add(this.telegraph.object3D),this.column=new V(new Si(sd*.85,sd,cd,20,1,!0),new Er({color:16742943,transparent:!0,opacity:.75,side:2,depthWrite:!1})),this.column.position.y=cd/2,this.column.visible=!1,this.object3D.add(this.column)}update(e){if(this.timer+=e.dt*(e.player.gentle?.65:1),this.timer<id){this.telegraph.setProgress(this.timer/id);return}this.erupted||(this.erupted=!0,this.telegraph.hide(),this.column.visible=!0,e.sfx.play(`explode`),e.particles.burst(this.position,{count:24,color:16751918,speed:9,spread:sd,life:1,gravity:10}));let t=this.timer-id;if(t<ad){let n=Math.min(1,t/.18);this.column.scale.set(1,n,1),this.column.position.y=cd*n/2,this.damagePlayer(e);return}let n=(t-ad)/od;this.column.material.opacity=.75*(1-n),n>=1&&e.entities.remove(this)}damagePlayer(e){let t=e.player;Math.hypot(t.position.x-this.position.x,t.position.z-this.position.z)>sd||t.position.y>this.position.y+cd||Pu(t,ld,this.position,5)&&e.sfx.play(`hurt`)}onRemoved(){this.telegraph.dispose(),this.column.geometry.dispose(),this.column.material.dispose()}},dd=26,fd=7;function pd(e,t,n,r,i,a,o=`always`){let s=Math.hypot(n,r),c=s>.01?n/s*i:0,l=s>.01?r/s*i:0,{velocity:u,body:d}=e;u.x=Xu(u.x,c,8,a),u.z=Xu(u.z,l,8,a),u.y-=dd*a;let f=o===`always`||o===`moving`&&s>.01;d.onGround&&f&&Math.hypot(u.x,u.z)<i*.35&&(u.y=fd),d.move(t,a)}function md(e){return Rl(e)&&Ll(e).contactDamage===0}function hd(e){return Rl(e)||Ll(e).contactDamage>0}function gd(e,t,n,r){let i=e(t,n,r),a=e(t,n+1,r),o=e(t,n+2,r),s=e(t,n-1,r),c=e(t,n-2,r),l=!md(s)&&!md(c),u=hd(i)&&!hd(a)&&!hd(o),d=!hd(i)&&!hd(a);return{voidAhead:l,open:!l&&(d||u)}}function _d(e,t,n,r,i=1){let a=Math.hypot(t,n);if(a<.01)return{x:t,z:n};let o=t/a,s=n/a,c=Math.floor(e.y),l=gd(r,Math.floor(e.x+o),c,Math.floor(e.z+s));if(l.open)return{x:t,z:n};let u=i>=0?1:-1,d=-s*u,f=o*u,p=s*u,m=-o*u,h=gd(r,Math.floor(e.x+d),c,Math.floor(e.z+f)),g=gd(r,Math.floor(e.x+p),c,Math.floor(e.z+m));return h.open?{x:d*a,z:f*a}:g.open?{x:p*a,z:m*a}:l.voidAhead?{x:-t,z:-n}:{x:t,z:n}}var vd=1;function yd(){let e=vd;return vd=vd===1?-1:1,e}var bd=3.4,xd=2,Sd=1.5,Cd=1.25,wd=1.7,Td=4,Ed=1.1,Dd=45,Od=class e extends $l{cooldown=0;life;flank;body3D;constructor(e,t,n,r={}){super(.9,1.7,`boss`,1.1),this.position.set(e,t,n),this.life=r.lifetime??Dd,this.clearedOnDeath=r.clearedOnDeath??!0,this.flank=r.flank??yd(),this.health=new wl(r.health??18,.2);let i=r.color??4932697,a=r.headColor??(r.color===void 0?3814470:i-1118481),o=r.eyeColor??16747068;this.body3D=new fn;let s=new V(new bi(.9,1.1,.7),new Ui({color:i,flatShading:!0}));s.position.y=1.1;let c=new V(new bi(.6,.5,.6),new Ui({color:a,flatShading:!0}));c.position.y=1.9;let l=new V(new bi(.42,.1,.05),new Er({color:o}));l.position.set(0,1.92,.31),this.body3D.add(s,c,l),this.object3D.add(this.body3D)}update(e){let{dt:t,world:n,player:r}=e;if(this.health?.update(t),this.health?.dead){this.die(e);return}if(this.life-=t,this.life<=0){this.die(e);return}this.cooldown=Math.max(0,this.cooldown-t);let i=r.position.x-this.position.x,a=r.position.z-this.position.z,o=Math.hypot(i,a),s=0,c=0;if(o>Sd){let e=_d(this.position,i/o,a/o,(e,t,r)=>n.getBlock(e,t,r),this.flank);s=e.x,c=e.z}else if(o>.001&&o<Cd){let e=(Cd-o)/Cd;s=-(i/o)*e*2,c=-(a/o)*e*2}let[l,u]=this.separationFrom(e);s+=l*1.5,c+=u*1.5,o>.4&&(this.body3D.rotation.y=Math.atan2(i,a)),pd(this,n,s,c,bd,t);let d=Math.abs(r.position.y-this.position.y);o<xd&&d<2.4&&this.cooldown===0&&(this.cooldown=Ed,Pu(r,Td,this.position,5)&&e.sfx.play(`hurt`)),this.body3D.position.y=Math.sin(e.elapsed*9)*.05}separationFrom(t){let n=0,r=0;for(let i of t.entities.entities){if(i===this||i.removed||!(i instanceof e))continue;let t=this.position.x-i.position.x,a=this.position.z-i.position.z,o=Math.hypot(t,a);if(o>wd)continue;if(o<.001){n+=Math.random()-.5,r+=Math.random()-.5;continue}let s=(wd-o)/wd;n+=t/o*s,r+=a/o*s}return[n,r]}die(e){e.particles.burst(this.position,{count:18,color:6971261,speed:4,spread:.8,life:.7}),e.sfx.play(`break`),e.entities.remove(this)}},kd=`Guardião das Profundezas`,Ad=3,jd=5.2,Md=30,Nd=2.9,Pd=3.2,Fd=16,Id=[{label:`Fase I`,speed:1,color:9133302,staggerTime:3.2},{label:`Fase II`,speed:1.15,color:3718648,staggerTime:2.7},{label:`Fase III`,speed:1.4,color:16734766,staggerTime:2.2}],Ld=class extends $l{model=new nd;telegraph=new Ru;onPhaseChange=null;onDefeated=null;onShake=null;onStagger=null;context;phase=0;attackCooldown=1.2;machine=null;target=new R;chargeDirection=new R;facing=0;walkSpeed=0;visualOffsetY=0;collapse=0;slamImpacted=!1;throwsLeft=0;throwTimer=0;throwAim=new R;pillarsLeft=0;pillarTimer=0;forceMelee=!1;landingTelegraph=new Ru;constructor(){super(Ad,jd,`boss`,1.2),this.health=new wl(520,.12),this.position.set(cu.x+.5,su,cu.z+.5),this.object3D.add(this.model.root,this.telegraph.object3D),this.landingTelegraph.hide(),this.model.setPhaseColor(Id[0].color),this.telegraph.hide()}get stateName(){return this.machine?.current??`awaken`}get phaseLabel(){return Id[this.phase].label}get speedMultiplier(){return Id[this.phase].speed}get staggerTime(){return Id[this.phase].staggerTime}update(e){this.context=e;let t=e.dt*(e.player.gentle?.65:1),n=this.machine??=new rd(Rd,`awaken`,this);this.health?.update(t),this.health?.dead&&n.current!==`dying`?n.change(`dying`):this.checkPhaseTransition(),n.update(t),this.model.update(t,this.walkSpeed,e.elapsed),this.faceTarget(t),this.mountLandingTelegraph()}syncTransform(){this.object3D.position.set(this.position.x,this.position.y+this.visualOffsetY,this.position.z),this.object3D.rotation.y=this.facing,this.object3D.rotation.z=this.collapse*1.35}onRemoved(){this.model.dispose(),this.landingTelegraph.object3D.removeFromParent(),this.telegraph.dispose(),this.landingTelegraph.dispose()}walkToward(e,t,n,r=.6){let i=e.x-this.position.x,a=e.z-this.position.z,o=Math.hypot(i,a);o>r?(this.velocity.x=Xu(this.velocity.x,i/o*t,6,n),this.velocity.z=Xu(this.velocity.z,a/o*t,6,n)):(this.velocity.x=Xu(this.velocity.x,0,10,n),this.velocity.z=Xu(this.velocity.z,0,10,n)),this.applyPhysics(n)}stopMoving(e){this.velocity.x=Xu(this.velocity.x,0,12,e),this.velocity.z=Xu(this.velocity.z,0,12,e),this.applyPhysics(e)}applyPhysics(e){this.velocity.y-=Md*e,this.body.move(this.context.world,e),this.walkSpeed=Math.hypot(this.velocity.x,this.velocity.z),this.containInArena(),this.shovePlayer(e)}shovePlayer(e){let t=this.context.player,n=1.95,r=t.position.x-this.position.x,i=t.position.z-this.position.z,a=Math.hypot(r,i);if(a>n)return;let o=a<.001?this.facing+Math.PI:Math.atan2(i,r),s=(n-a)*26;t.velocity.x+=Math.cos(o)*s*e,t.velocity.z+=Math.sin(o)*s*e}distanceToPlayer(){let e=this.context.player.position;return Math.hypot(e.x-this.position.x,e.z-this.position.z)}predictPlayer(e,t){let n=this.context.player;return t.set(n.position.x+n.velocity.x*e,n.position.y,n.position.z+n.velocity.z*e)}getChestPosition(e){return e.set(this.position.x,this.position.y+3.4,this.position.z)}hitFlash(){this.model.flash()}openStaggerWindow(){this.damageMultiplier=2,this.model.setCrouch(1),this.model.flash(.32,15324671),this.context.sfx.play(`stagger`),this.onShake?.(.55),this.getChestPosition(this.target),this.context.particles.burst(this.target,{count:28,color:15324671,speed:5.8,spread:1.2,life:.9,gravity:-5,upwardBias:1}),this.context.particles.burst(this.target,{count:14,color:Id[this.phase].color,speed:4.2,spread:.8,life:.7,gravity:-3}),this.onStagger?.()}spawnShockwave(e,t,n){let r=new Lu({maxRadius:t,speed:n,damage:e,knockback:8,color:Id[this.phase].color});r.position.set(this.position.x,this.position.y,this.position.z),this.context.entities.add(r)}pickAttack(){if(this.forceMelee)return this.forceMelee=!1,this.distanceToPlayer()<9?`slam`:`charge`;let e=this.distanceToPlayer(),t=[];return e<11&&t.push(`slam`,`slam`,`slam`),e>7&&t.push(`charge`,`charge`,`charge`),this.phase>=1&&(e>6&&t.push(`boulder`),this.countMinions()<3&&t.push(`summon`)),this.phase>=2&&t.push(`pillars`,`pillars`),t.length===0&&t.push(`slam`),t[Math.floor(Math.random()*t.length)]}startCharge(){this.predictPlayer(.35,this.target),this.chargeDirection.set(this.target.x-this.position.x,0,this.target.z-this.position.z).normalize()}advanceCharge(e){let t=Fd*this.speedMultiplier;this.velocity.x=this.chargeDirection.x*t,this.velocity.z=this.chargeDirection.z*t;let n=this.position.x,r=this.position.z;this.applyPhysics(e);let i=Math.hypot(this.position.x-n,this.position.z-r),a=this.context.player,o=this.distanceToPlayer(),s=Math.abs(a.position.y-this.position.y);return o<3&&s<5?(Pu(a,11,this.position,12)&&(this.context.sfx.play(`slam`),this.onShake?.(.5)),!0):i<t*e*.45&&(this.context.sfx.play(`explode`),this.onShake?.(.75),this.context.particles.burst(this.getChestPosition(this.target),{count:22,color:9076856,speed:6,life:.8}),!0)}throwBoulder(){let e=new Wu({directDamage:9,blastDamage:7,blastRadius:3.6,terrainRadius:2.4});this.getChestPosition(this.target),e.position.set(this.target.x,this.target.y,this.target.z),e.launchAt(this.throwAim,.95),this.context.entities.add(e),this.context.sfx.play(`hit`)}prepareNextBoulder(){this.throwTimer=.48,this.predictPlayer(.95,this.throwAim),this.throwAim.y=su,this.landingTelegraph.show(this.throwAim.x,this.throwAim.y,this.throwAim.z,2.8),this.landingTelegraph.setProgress(0)}summonMinions(e){for(let t=0;t<e;t++){let n=Math.PI*2*t/e+Math.random(),r=4.5,i=this.position.x+Math.cos(n)*r,a=this.position.z+Math.sin(n)*r,o=new Od(i,this.position.y+.5,a);o.body.unstick(this.context.world,6),this.context.entities.add(o),this.context.particles.burst(o.position,{count:14,color:Id[this.phase].color,speed:4,life:.6})}this.context.sfx.play(`summon`)}spawnPillar(){this.predictPlayer(Zu(.2,.9),this.target);let e=new ud(this.target.x,su,this.target.z);this.context.entities.add(e)}slamImpact(){let e=this.context;e.sfx.play(`slam`),this.onShake?.(.9),this.getChestPosition(this.target),e.particles.burst(this.position,{count:30,color:10260351,speed:7,spread:2.5,life:.9}),Iu(e.player,this.position,5.5,9,9),this.spawnShockwave(8,16+this.phase*3,13+this.phase*2)}clearAltar(){let e=this.context.world;for(let t=cu.y-1;t<=cu.y+1;t++)for(let n=cu.z-2;n<=cu.z+2;n++)for(let r=cu.x-2;r<=cu.x+2;r++)e.getBlock(r,t,n)!==W.Obsidian&&(e.edits.has(`${r},${t},${n}`)||e.restoreStructure(r,t,n,W.Air))}setVisualOffset(e){this.visualOffsetY=e}setCollapse(e){this.collapse=e}countMinions(){let e=0;for(let t of this.context.entities.entities)!t.removed&&t instanceof Od&&(e+=1);return e}checkPhaseTransition(){let e=this.health?.fraction??1,t=e<=.33?2:+(e<=.66);t<=this.phase||!this.machine||this.machine.current!==`awaken`&&this.machine.current!==`phaseShift`&&(this.phase=t,this.model.setPhaseColor(Id[t].color),this.onPhaseChange?.(t+1,Id[t].label),this.machine.change(`phaseShift`))}faceTarget(e){let t=this.context.player.position,n=Math.atan2(t.x-this.position.x,t.z-this.position.z)-this.facing;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;this.facing+=n*Math.min(1,e*5)}containInArena(){let e=q.radius-2.5,t=this.position.x-q.centerX,n=this.position.z-q.centerZ,r=Math.hypot(t,n);if(r<=e)return;let i=e/r;this.position.x=q.centerX+t*i,this.position.z=q.centerZ+n*i}markSlamImpacted(){this.slamImpacted=!0}get hasSlamImpacted(){return this.slamImpacted}resetSlam(){this.slamImpacted=!1}setThrows(e){this.throwsLeft=e,this.throwTimer=0,e>0&&this.prepareNextBoulder()}tickThrows(e){return this.throwsLeft<=0||(this.throwTimer-=e,this.landingTelegraph.setProgress(1-Ju(this.throwTimer/.48,0,1)),this.throwTimer<=0&&(--this.throwsLeft,this.throwBoulder(),this.throwsLeft>0?this.prepareNextBoulder():this.landingTelegraph.hide()),!1)}forceMeleeNext(){this.forceMelee=!0}mountLandingTelegraph(){let e=this.object3D.parent;!e||this.landingTelegraph.object3D.parent===e||e.add(this.landingTelegraph.object3D)}setPillars(e){this.pillarsLeft=e,this.pillarTimer=0}tickPillars(e){return this.pillarsLeft<=0||(this.pillarTimer-=e,this.pillarTimer<=0&&(this.pillarTimer=.5,--this.pillarsLeft,this.spawnPillar()),!1)}},Rd={awaken:{enter(e){e.damageMultiplier=0,e.setVisualOffset(-6),e.clearAltar(),e.context.sfx.play(`roar`),e.onShake?.(.6)},update(e,t,n){let r=Ju(n/2.4,0,1);if(e.setVisualOffset(-6*(1-r)**2),e.stopMoving(t),r>=1)return e.damageMultiplier=1,e.attackCooldown=1,`chase`}},chase:{enter(e){e.model.setArmRaise(0),e.model.setCrouch(0),e.telegraph.hide()},update(e,t){if(e.walkToward(e.context.player.position,Nd*e.speedMultiplier,t,Pd),e.attackCooldown-=t,e.attackCooldown<=0)return e.pickAttack()}},slam:{enter(e){e.resetSlam(),e.telegraph.show(0,0,0,5.5)},update(e,t,n){let r=.95/e.speedMultiplier;if(e.stopMoving(t),n<r){e.model.setArmRaise(n/r),e.telegraph.setProgress(n/r);return}if(e.hasSlamImpacted||(e.markSlamImpacted(),e.telegraph.hide(),e.model.setArmRaise(0),e.slamImpact()),n>r+.45)return`stagger`},exit(e){e.model.setArmRaise(0),e.telegraph.hide()}},charge:{enter(e){e.startCharge(),e.model.setCrouch(1),e.telegraph.show(0,0,0,3.2)},update(e,t,n){let r=.7/e.speedMultiplier;if(n<r){e.stopMoving(t),e.telegraph.setProgress(n/r),n<r*.5&&e.startCharge();return}if(e.telegraph.hide(),e.advanceCharge(t)||n>r+1.6)return`stagger`},exit(e){e.model.setCrouch(0),e.telegraph.hide()}},boulder:{enter(e){e.setThrows(3),e.model.setArmRaise(.5)},update(e,t){if(e.stopMoving(t),e.tickThrows(t))return`stagger`},exit(e){e.model.setArmRaise(0),e.landingTelegraph.hide()}},summon:{enter(e){e.model.setArmRaise(.8),e.summonMinions(2),e.onShake?.(.3)},update(e,t,n){if(e.stopMoving(t),n>1.2)return e.forceMeleeNext(),e.attackCooldown=.8/e.speedMultiplier,`chase`},exit(e){e.model.setArmRaise(0)}},pillars:{enter(e){e.setPillars(5),e.model.setArmRaise(.65),e.context.sfx.play(`summon`)},update(e,t){if(e.stopMoving(t),e.tickPillars(t))return e.attackCooldown=1.5/e.speedMultiplier,`chase`},exit(e){e.model.setArmRaise(0)}},stagger:{enter(e){e.openStaggerWindow()},update(e,t,n){if(e.stopMoving(t),Math.random()<t*8&&e.context.particles.burst(e.getChestPosition(new R),{count:5,color:15324671,speed:2.4,life:.75,gravity:-4}),n>e.staggerTime)return e.attackCooldown=.9/e.speedMultiplier,`chase`},exit(e){e.damageMultiplier=1,e.model.setCrouch(0)}},phaseShift:{enter(e){e.damageMultiplier=0,e.model.setArmRaise(1),e.context.sfx.play(`roar`),e.onShake?.(.8),e.spawnShockwave(6,20,18)},update(e,t,n){if(e.stopMoving(t),e.model.setArmRaise(1-Ju((n-1.2)/.6,0,1)),n>1.9)return e.damageMultiplier=1,e.attackCooldown=.6,`chase`}},dying:{enter(e){e.damageMultiplier=0,e.telegraph.hide(),e.context.sfx.play(`death`),e.onShake?.(.7)},update(e,t,n){e.stopMoving(t),e.setCollapse(Ju(n/2.2,0,1)),Math.random()<t*10&&e.context.particles.burst(e.getChestPosition(new R),{count:4,color:16757355,speed:4,spread:2,life:1.1}),n>2.6&&(e.onDefeated?.(),e.context.entities.remove(e))}}},zd=class{entities;callbacks;boss=null;defeated=!1;discovered=!1;cacheClaimed=!1;ruinFound=!1;constructor(e,t){this.entities=e,this.callbacks=t}get active(){return this.boss!==null&&!this.boss.removed}canSummon(e){return!this.active&&mu(e.x,e.z)<q.radius&&e.y>q.floorY-2&&e.y<q.ceilingY}summon(){let e=new Ld;return e.onPhaseChange=(e,t)=>this.callbacks.onPhase(e,t),e.onShake=e=>this.callbacks.onShake(e),e.onStagger=()=>this.callbacks.onStagger(),e.onDefeated=()=>{this.defeated=!0,this.callbacks.onVictory()},this.boss=this.entities.add(e),this.callbacks.onSummon(kd),e}update(){this.boss?.removed&&(this.boss=null)}tryDiscover(e){this.discovered||hu(e.position.x,e.position.y,e.position.z)&&(this.discovered=!0,e.setSpawn(pu.x,pu.y,pu.z))}beginNewRun(){this.defeated=!1,this.discovered=!1,this.cacheClaimed=!1,this.ruinFound=!1,this.boss=null}reset(e){for(let t of e.entities.entities)t.team===`boss`&&t.clearedOnDeath&&e.entities.remove(t);e.entities.flushRemoved(),this.boss=null,e.world.generator.shrineUnlocked&&this.rebuildAltar(e.world)}rebuildAltar(e){for(let t=-2;t<=2;t++)for(let n=-2;n<=2;n++){let r=cu.x+n,i=cu.z+t;e.restoreStructure(r,q.floorY+1,i,W.Obsidian);let a=Math.abs(n)<=1&&Math.abs(t)<=1;e.restoreStructure(r,q.floorY+2,i,a?W.RunicStone:W.Air),e.restoreStructure(r,q.floorY+3,i,n===0&&t===0?W.CrystalOre:W.Air)}}guideStage(e){return this.active?`fight`:this.defeated?`done`:hu(e.x,e.y,e.z)?`altar`:this.nearStairs(e)?`stairs`:`surface`}guideTarget(e){let t=this.guideStage(e);return t===`fight`?null:t===`done`?this.cacheClaimed||Math.hypot(e.x-lu.x,e.z-lu.z)<6?null:{x:lu.x+.5,y:e.y,z:lu.z+.5}:t===`altar`?{x:cu.x+.5,y:cu.y,z:cu.z+.5}:t===`stairs`?{x:J.x+.5,y:q.floorY+1,z:J.z+.5}:this.ruinFound?{x:J.x+.5,y:e.y,z:J.z+.5}:{x:fu.x+.5,y:e.y,z:fu.z+.5}}objectiveText(e){switch(this.guideStage(e)){case`surface`:return this.ruinFound?`Siga a bússola até o santuário`:`Encontre a ruína a oeste ou o santuário ao norte`;case`stairs`:return`Desça as escadas até o Guardião`;case`altar`:return`Botão direito no altar: enfrentar o Guardião`;case`fight`:return`Bata quando ele estiver vulnerável. Coma para recuperar vida`;case`done`:return this.cacheClaimed?`Explore, construa ou volte ao altar para lutar de novo`:Math.hypot(e.x-lu.x,e.z-lu.z)<6?`Chegue perto para pegar os materiais`:`Há uma recompensa a leste — siga a bússola`;default:return null}}tryDiscoverRuin(e){return this.ruinFound||vu(e.x,e.z)>du.radius?!1:(this.ruinFound=!0,!0)}tryClaim(e){return this.cacheClaimed||!this.defeated||Math.hypot(e.x-lu.x,e.z-lu.z)>4.5?!1:(this.cacheClaimed=!0,!0)}describeAltarDirection(e){let t=this.guideTarget(e);if(!t)return``;let n=t.x-e.x,r=t.z-e.z,i=Math.hypot(n,r),a=Math.round(e.y-t.y);if(i<6&&Math.abs(a)<4)return`O altar está aqui`;let o=Math.abs(n)>Math.abs(r)?n>0?`leste`:`oeste`:r>0?`sul`:`norte`,s=a>2?`${a} blocos abaixo`:a<-2?`${-a} blocos acima`:`na mesma altura`;return`Altar: ${Math.round(i)}m ${o}, ${s}`}nearStairs(e){let t=e.x-J.x,n=e.z-J.z,r=Math.hypot(t,n),i=Math.max(Math.abs(t),Math.abs(n))<=J.shaft+2&&e.y<q.ceilingY+16;return r<8||i}},Bd=Math.sqrt(3),Vd=Math.sqrt(5),Hd=.5*(Bd-1),Ud=(3-Bd)/6,Wd=1/3,Gd=1/6;(Vd-1)/4,(5-Vd)/20;var Kd=e=>Math.floor(e)|0,qd=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]),Jd=new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]);function Yd(e=Math.random){let t=Zd(e),n=new Float64Array(t).map(e=>qd[e%12*2]),r=new Float64Array(t).map(e=>qd[e%12*2+1]);return function(e,i){let a=0,o=0,s=0,c=(e+i)*Hd,l=Kd(e+c),u=Kd(i+c),d=(l+u)*Ud,f=l-d,p=u-d,m=e-f,h=i-p,g,_;m>h?(g=1,_=0):(g=0,_=1);let v=m-g+Ud,y=h-_+Ud,b=m-1+2*Ud,x=h-1+2*Ud,S=l&255,C=u&255,w=.5-m*m-h*h;if(w>=0){let e=S+t[C],i=n[e],o=r[e];w*=w,a=w*w*(i*m+o*h)}let T=.5-v*v-y*y;if(T>=0){let e=S+g+t[C+_],i=n[e],a=r[e];T*=T,o=T*T*(i*v+a*y)}let E=.5-b*b-x*x;if(E>=0){let e=S+1+t[C+1],i=n[e],a=r[e];E*=E,s=E*E*(i*b+a*x)}return 70*(a+o+s)}}function Xd(e=Math.random){let t=Zd(e),n=new Float64Array(t).map(e=>Jd[e%12*3]),r=new Float64Array(t).map(e=>Jd[e%12*3+1]),i=new Float64Array(t).map(e=>Jd[e%12*3+2]);return function(e,a,o){let s,c,l,u,d=(e+a+o)*Wd,f=Kd(e+d),p=Kd(a+d),m=Kd(o+d),h=(f+p+m)*Gd,g=f-h,_=p-h,v=m-h,y=e-g,b=a-_,x=o-v,S,C,w,T,E,D;y>=b?b>=x?(S=1,C=0,w=0,T=1,E=1,D=0):y>=x?(S=1,C=0,w=0,T=1,E=0,D=1):(S=0,C=0,w=1,T=1,E=0,D=1):b<x?(S=0,C=0,w=1,T=0,E=1,D=1):y<x?(S=0,C=1,w=0,T=0,E=1,D=1):(S=0,C=1,w=0,T=1,E=1,D=0);let ee=y-S+Gd,te=b-C+Gd,O=x-w+Gd,ne=y-T+2*Gd,k=b-E+2*Gd,A=x-D+2*Gd,re=y-1+3*Gd,ie=b-1+3*Gd,j=x-1+3*Gd,ae=f&255,oe=p&255,se=m&255,ce=.6-y*y-b*b-x*x;if(ce<0)s=0;else{let e=ae+t[oe+t[se]];ce*=ce,s=ce*ce*(n[e]*y+r[e]*b+i[e]*x)}let le=.6-ee*ee-te*te-O*O;if(le<0)c=0;else{let e=ae+S+t[oe+C+t[se+w]];le*=le,c=le*le*(n[e]*ee+r[e]*te+i[e]*O)}let ue=.6-ne*ne-k*k-A*A;if(ue<0)l=0;else{let e=ae+T+t[oe+E+t[se+D]];ue*=ue,l=ue*ue*(n[e]*ne+r[e]*k+i[e]*A)}let de=.6-re*re-ie*ie-j*j;if(de<0)u=0;else{let e=ae+1+t[oe+1+t[se+1]];de*=de,u=de*de*(n[e]*re+r[e]*ie+i[e]*j)}return 32*(s+c+l+u)}}function Zd(e){let t=new Uint8Array(512);for(let e=0;e<256;e++)t[e]=e;for(let n=0;n<255;n++){let r=n+~~(e()*(256-n)),i=t[n];t[n]=t[r],t[r]=i}for(let e=256;e<512;e++)t[e]=t[e-256];return t}var Qd=60;function $d(e){return Math.max(e,Qd)}function ef(){let{x:e,z:t,radius:n}=Y;return Array.from({length:4},(r,i)=>{let a=Math.PI*2*i/4;return{x:Math.round(e+Math.cos(a)*(n-1)),z:Math.round(t+Math.sin(a)*(n-1))}})}function tf(e,t,n){let{x:r,z:i,radius:a}=Y;for(let o=i-a;o<=i+a;o++)for(let s=r-a;s<=r+a;s++){let c=Math.hypot(s-r,o-i);if(c>a)continue;let l=t(s,o),u=Math.min(l,e)-2,d=Math.max(l,e)+8,f=Math.abs(c-(a-1))<.7;for(let t=u;t<=d;t++)t<e?n(s,t,o,t<e-1?W.Stone:W.Dirt):t===e?n(s,t,o,f?W.Cobblestone:W.Moss):n(s,t,o,W.Air)}for(let{x:t,z:r}of ef())n(t,e+1,r,W.Moss),n(t,e+2,r,W.Glowstone);n(r,e+1,i,W.Moss),n(r,e+2,i,W.Moss),n(r,e+3,i,W.Glowstone),n(r,e+4,i,W.Glowstone)}var nf={doorX:18,doorZ:10,depth:7},rf={x:48,z:-32},af=2.4;function of(e,t,n,r,i,a){let o=e*16,s=t*16;return o+16>n&&o<=r&&s+16>i&&s<=a}function sf(e){return Math.min(e,116)}function cf(e){return[{x:nf.doorX,y:e+1,z:nf.doorZ},{x:nf.doorX,y:e+2,z:nf.doorZ}]}function lf(e){return{x:nf.doorX,y:e+2,z:nf.doorZ-1}}function uf(e){return{x:15,y:e+1,z:nf.doorZ}}function df(e){return{x:rf.x+3,y:e+1,z:rf.z}}function ff(e,t){let n=cf(t),r=n.some(t=>e.getBlock(t.x,t.y,t.z)!==W.Air),i=r?W.Air:W.Planks;for(let t of n)e.setBlock(t.x,t.y,t.z,i);return r?`open`:`shut`}function pf(e,t,n,r,i,a,o,s){for(let c=r;c<=i;c++)for(let r=a;r<=o;r++)for(let i=t;i<=n;i++)e(i,c,r,s)}function mf(e,t){for(let n=12;n<=17;n++)e(n,t,nf.doorZ,W.Yellow);e(uf(t).x,t+1,nf.doorZ,W.GoldenCarrot),e(17,t+2,nf.doorZ-1,W.Torch);for(let n=nf.doorZ-2;n<=nf.doorZ+2;n++)for(let r=t+1;r<=t+3;r++)e(nf.doorX,r,n,W.Planks);let n=lf(t);e(n.x,n.y,n.z,W.Painting);for(let n of cf(t))e(n.x,n.y,n.z,W.Planks);for(let n=1;n<=nf.depth;n++){let r=nf.doorX+n,i=t-n;for(let t=nf.doorZ-1;t<=nf.doorZ+1;t++)e(r,i,t,W.Planks),e(r,i+1,t,W.Air),e(r,i+2,t,W.Air),e(r,i-1,t,W.Stone)}let r=t-nf.depth,i=nf.doorX+nf.depth,a=i+6,o=nf.doorZ-3,s=nf.doorZ+3;pf(e,i,a,r-1,r,o,s,W.Planks),pf(e,i,a,r+4,r+4,o,s,W.Planks);for(let t=r+1;t<=r+3;t++)for(let n=o;n<=s;n++)for(let c=i;c<=a;c++){let l=c===i||c===a||n===o||n===s,u=c===i&&n===nf.doorZ&&t<=r+2;e(c,t,n,l&&!u?W.Planks:W.Air)}e(i+1,r+1,o+1,W.Bed),e(a-1,r+1,o+1,W.Chest),e(i+1,r+2,s-1,W.Torch),e(a-1,r+2,s-1,W.Torch),e(i+1,r+2,o+1,W.Torch);for(let t=nf.doorZ+1;t<=nf.doorZ+2;t++)for(let n=i+3;n<=i+4;n++)e(n,r+1,t,W.Hay)}function hf(e,t,n,r,i,a){for(let o=n-2;o<=n+2;o++)for(let s=t-2;s<=t+2;s++){e(s,r,o,W.Planks),e(s,r+3,o,W.Planks);for(let c=r+1;c<=r+2;c++){let r=s===t-2||s===t+2||o===n-2||o===n+2;e(s,c,o,r&&(s!==i||o!==a)?W.Cobblestone:W.Air)}}e(t,r+1,n,W.Bed),e(t,r+2,n-1,W.Torch)}function gf(e,t){let{x:n,z:r}=rf;for(let i=r-10;i<=r+10;i++)for(let a=n-10;a<=n+10;a++)if(!(Math.hypot(a-n,i-r)>11)){e(a,t-1,i,W.Dirt),e(a,t,i,W.Grass);for(let n=t+1;n<=t+6;n++)e(a,n,i,W.Air)}for(let i=-6;i<=6;i++)e(n+i,t,r,W.Planks),e(n,t,r+i,W.Planks);hf(e,n-6,r-4,t,n-4,r-4),hf(e,n+6,r-4,t,n+4,r-4),hf(e,n,r+6,t,n,r+4);let i=df(t);e(i.x,i.y,i.z,W.GoldenCarrot)}function _f(e,t,n,r){of(n,r,12,nf.doorX+nf.depth+6,nf.doorZ-3,nf.doorZ+3)&&mf(e,sf(t(nf.doorX,nf.doorZ))),of(n,r,rf.x-11,rf.x+11,rf.z-11,rf.z+11)&&gf(e,sf(t(rf.x,rf.z)))}var vf=8,yf=4,bf=class{seed;height2D;detail2D;caveA;caveB;cavern;ore;constructor(e){this.seed=e;let t=Gu(e);this.height2D=Yd(t),this.detail2D=Yd(t),this.caveA=Xd(t),this.caveB=Xd(t),this.cavern=Xd(t),this.ore=Xd(t)}generate(e){let t=e.cx*16,n=e.cz*16;for(let r=0;r<16;r++)for(let i=0;i<16;i++)this.buildColumn(e,i,r,t+i,n+r);this.plantTrees(e,t,n),this.plantMushrooms(e,t,n),this.plantCarrots(e,t,n),gu(e.cx,e.cz)&&this.carveArena(e,t,n),(gu(e.cx,e.cz)||_u(e.cx,e.cz))&&this.carveEntrance(e,t,n),Ou(e.cx,e.cz)&&this.buildCache(e,t,n),Cu(e.cx,e.cz)&&this.buildRuin(e,t,n),Du(e.cx,e.cz)&&this.buildGrove(e,t,n),_f((r,i,a,o)=>this.setWorld(e,t,n,r,i,a,o),(e,t)=>this.surfaceHeight(e,t),e.cx,e.cz),e.generated=!0}surfaceHeight(e,t){let n=this.fbm(this.height2D,e*.0032,t*.0032,4),r=this.fbm(this.detail2D,e*.014,t*.014,3),i=Math.abs(this.height2D(e*.006,t*.006));return Math.round(64+n*16+r*5+i*7)}buildColumn(e,t,n,r,i){let a=Math.min(this.surfaceHeight(r,i),116),o=a>=60?W.Grass:W.Sand,s=a>=60?W.Dirt:W.Sand;for(let c=0;c<=a;c++){if(c===0||Ku(r*31+c,i*17+c,this.seed)<(3-c)/3.4){e.set(t,c,n,W.Bedrock);continue}let l;if(l=c===a?o:c>a-yf?s:W.Stone,this.isCave(r,c,i,a)){e.set(t,c,n,c<=vf?W.Lava:W.Air);continue}l===W.Stone&&(l=this.oreAt(r,c,i)),e.set(t,c,n,l)}for(let r=a+1;r<60;r++)e.get(t,r,n)===W.Air&&e.set(t,r,n,W.Water)}isCave(e,t,n,r){if(t<4||t>r-2)return!1;let i=this.caveA(e*.028,t*.05,n*.028),a=this.caveB(e*.028,t*.05,n*.028);return i*i+a*a<.022||t<34&&this.cavern(e*.021,t*.034,n*.021)>.62}oreAt(e,t,n){return t<26&&this.ore(e*.1+131,t*.1,n*.1)>.9?W.CrystalOre:t<30&&this.ore(e*.09+71,t*.09,n*.09)>.88?W.GoldOre:t<54&&this.ore(e*.08+31,t*.08,n*.08)>.84?W.IronOre:t<74&&this.ore(e*.07,t*.07,n*.07)>.8?W.CoalOre:t<16&&this.ore(e*.06+211,t*.06,n*.06)>.86?W.Gravel:W.Stone}plantTrees(e,t,n){for(let r=-2;r<18;r++)for(let i=-2;i<18;i++){let a=t+i,o=n+r,s=Ku(a,o,this.seed^31249);if(s<.988||mu(a,o)<q.radius+q.wall||Math.hypot(a-J.x,o-J.z)<10||vu(a,o)<du.radius+3)continue;let c=this.surfaceHeight(a,o);c<61||c>108||this.isCave(a,c,o,c)||this.buildTree(e,t,n,a,o,c,s)}}plantCarrots(e,t,n){for(let r=0;r<16;r++)for(let i=0;i<16;i++){let a=t+i,o=n+r;if(mu(a,o)<q.radius+16||Math.hypot(a-J.x,o-J.z)<16||Math.hypot(a-uu.x,o-uu.z)<36||Math.hypot(a-Y.x,o-Y.z)<28||Math.hypot(a-lu.x,o-lu.z)<18)continue;let s=this.surfaceHeight(a,o);if(s<1||s+1>=128||e.get(i,s,r)!==W.Grass||e.get(i,s+1,r)!==W.Air)continue;let c=Math.hypot(a,o)<42?.055:.012;Ku(a,o,this.seed^789514)>=c||e.set(i,s+1,r,W.CarrotRipe)}}plantMushrooms(e,t,n){for(let r=0;r<16;r++)for(let i=0;i<16;i++){let a=t+i,o=n+r;if(mu(a,o)<q.radius+q.wall||Math.hypot(a-J.x,o-J.z)<12)continue;let s=Math.min(this.surfaceHeight(a,o),116),c=Math.min(s-2,56);for(let t=10;t<=c;t++){if(e.get(i,t,r)!==W.Air)continue;let n=e.get(i,t-1,r);n!==W.Air&&n!==W.Lava&&n!==W.Water&&n!==W.Mushroom&&(Ku(a*13+t,o*19+t,this.seed^129)>=.014||e.set(i,t,r,W.Mushroom))}}}buildTree(e,t,n,r,i,a,o){let s=o>.995,c=s?W.BirchLog:W.Log,l=s?W.BirchLeaves:W.Leaves,u=(s?6:4)+Math.floor(o*1e3)%3,d=a+u;for(let o=1;o<=u;o++)this.setWorld(e,t,n,r,a+o,i,c);for(let a=-2;a<=1;a++){let o=s?a>=0?1:2:a>=1?1:2;for(let s=-o;s<=o;s++)for(let c=-o;c<=o;c++)c===0&&s===0&&a<=0||Math.abs(c)===o&&Math.abs(s)===o&&o>1||this.setWorld(e,t,n,r+c,d+a,i+s,l)}}setWorld(e,t,n,r,i,a,o){let s=r-t,c=a-n;s<0||s>=16||c<0||c>=16||i<0||i>=128||(o!==W.Leaves&&o!==W.BirchLeaves||e.get(s,i,c)===W.Air)&&e.set(s,i,c,o)}carveArena(e,t,n){let{radius:r,wall:i,floorY:a,ceilingY:o}=q,s=r+i;for(let c=0;c<16;c++)for(let l=0;l<16;l++){let u=t+l,d=n+c,f=mu(u,d);if(f>s)continue;let p=f<r;for(let t=a-i;t<=o+i;t++)p&&t>a&&t<o?e.set(l,t,c,W.Air):(p||f<=s)&&e.set(l,t,c,W.DarkBrick);if(!p)continue;let m=Math.atan2(d-q.centerZ,u-q.centerX);for(let t=0;t<4;t++){let n=Math.PI/4*(1+2*t),r=q.centerX+Math.cos(n)*15,i=q.centerZ+Math.sin(n)*15;Math.hypot(u-r,d-i)<=2.6&&e.set(l,a,c,W.Lava)}Math.abs(f-(r-2))<.6&&Math.abs(Math.sin(m*6))>.985&&(e.set(l,a,c,W.Glowstone),e.set(l,o,c,W.Glowstone)),f<8&&Math.abs(f-6.5)<.6&&Math.abs(Math.cos(m*4))>.99&&e.set(l,o,c,W.Glowstone),this.buildAltar(e,l,c,u,d)}}carveEntrance(e,t,n){let r=Math.min(this.surfaceHeight(J.x,J.z),118),i=J.shaft,a=i+1,o=a+1;for(let s=-o;s<=o;s++)for(let c=-o;c<=o;c++)this.buildEntranceColumn(e,t,n,c,s,r,i,a);this.carveDoorway(e,t,n),this.buildShrineMarkers(e,t,n,r,o)}buildEntranceColumn(e,t,n,r,i,a,o,s){let c=J.x+r,l=J.z+i,u=Math.max(Math.abs(r),Math.abs(i)),d=Math.min(this.surfaceHeight(c,l),a);for(let r=a+1;r<=a+8&&r<128;r++)this.paint(e,t,n,c,r,l,W.Air);if(u>s){this.paint(e,t,n,c,a,l,W.Obsidian);return}for(let r=Math.min(d,a)-2;r<a;r++)r<1||u>=o&&this.paint(e,t,n,c,r,l,W.DarkBrick);for(let d=q.floorY;d<=a;d++){let f=W.Air;u===s?f=i===s&&Math.abs(r)<=1&&d>=su&&d<su+3?W.Air:d===a?W.Obsidian:d%4==0?W.Glowstone:W.DarkBrick:d===q.floorY?f=W.DarkBrick:d===a?f=u>=o?W.Obsidian:W.Air:d>q.floorY&&d<su?f=W.DarkBrick:d>su&&d<a&&xu(r,i,o,a-d)&&(f=W.Obsidian),this.paint(e,t,n,c,d,l,f)}}carveDoorway(e,t,n){let r=q.centerZ-(q.radius-3),i=J.z+J.shaft+1;for(let a=i;a<=r;a++){for(let r=J.x-1;r<=J.x+1;r++){this.paint(e,t,n,r,q.floorY,a,W.Obsidian);for(let i=su;i<su+3;i++)this.paint(e,t,n,r,i,a,W.Air)}this.paint(e,t,n,J.x-2,su,a,W.Glowstone),this.paint(e,t,n,J.x+2,su,a,W.Glowstone)}}buildShrineMarkers(e,t,n,r,i){for(let a of[-1,1])for(let o of[-1,1]){let s=J.x+a*i,c=J.z+o*i;for(let i=1;i<=6;i++){let a=i===6||i===3?W.Glowstone:W.Obsidian;this.paint(e,t,n,s,r+i,c,a)}this.paint(e,t,n,s,r+7,c,W.RunicStone)}}paint(e,t,n,r,i,a,o){let s=r-t,c=a-n;s<0||s>=16||c<0||c>=16||i<0||i>=128||e.set(s,i,c,o)}buildAltar(e,t,n,r,i){let a=Math.abs(r-q.centerX),o=Math.abs(i-q.centerZ);a>2||o>2||(e.set(t,q.floorY+1,n,W.Obsidian),a<=1&&o<=1&&e.set(t,q.floorY+2,n,W.RunicStone),a===0&&o===0&&e.set(t,q.floorY+3,n,W.CrystalOre))}buildGrove(e,t,n){tf($d(this.surfaceHeight(Y.x,Y.z)),(e,t)=>this.surfaceHeight(e,t),(r,i,a,o)=>{let s=r-t,c=a-n;s<0||s>=16||c<0||c>=16||i<0||i>=128||e.set(s,i,c,o)})}buildRuin(e,t,n){let r=Math.max(this.surfaceHeight(uu.x,uu.z),60);this.carveRuinCourtyard(e,t,n,r),this.buildRuinPosts(e,t,n,r),this.buildRuinStatue(e,t,n,r),this.buildRuinHut(e,t,n,r)}carveRuinCourtyard(e,t,n,r){let{centerX:i,centerZ:a,radius:o}=du;for(let s=a-o;s<=a+o;s++)for(let c=i-o;c<=i+o;c++){let l=Math.hypot(c-i,s-a);if(l>o)continue;let u=this.surfaceHeight(c,s),d=Math.min(u,r)-2,f=Math.max(u,r)+10,p=Math.abs(l-(o-1))<.7,m=(c+s)%5==0;for(let i=d;i<=f;i++)i<r?this.setWorld(e,t,n,c,i,s,i<r-1?W.Stone:W.Dirt):i===r?this.setWorld(e,t,n,c,i,s,p||m?W.Cobblestone:W.Grass):this.setWorld(e,t,n,c,i,s,W.Air)}}buildRuinPosts(e,t,n,r){for(let{x:i,z:a,index:o}of bu())this.setWorld(e,t,n,i,r+1,a,W.Cobblestone),this.setWorld(e,t,n,i,r+2,a,W.Cobblestone),o%2==0&&this.setWorld(e,t,n,i,r+3,a,W.Glowstone)}buildRuinStatue(e,t,n,r){for(let i=-1;i<=1;i++)for(let a=-1;a<=1;a++){let o=fu.x+a,s=fu.z+i;this.setWorld(e,t,n,o,r+1,s,W.Cobblestone);let c=a===0&&i===0,l=Math.abs(a)+Math.abs(i)===1;c?(this.setWorld(e,t,n,o,r+2,s,W.RunicStone),this.setWorld(e,t,n,o,r+3,s,W.Cobblestone),this.setWorld(e,t,n,o,r+4,s,W.RunicStone),this.setWorld(e,t,n,o,r+5,s,W.Glowstone)):l&&this.setWorld(e,t,n,o,r+2,s,W.Cobblestone)}}buildRuinHut(e,t,n,r){for(let i=-2;i<=2;i++)for(let a=-2;a<=2;a++){let o=uu.x+a,s=uu.z+i,c=Math.max(Math.abs(a),Math.abs(i));this.setWorld(e,t,n,o,r,s,c===0?W.Planks:W.Cobblestone),c===2&&!(a===2&&Math.abs(i)<=1)&&(this.setWorld(e,t,n,o,r+1,s,W.Cobblestone),(a+i)%2!=0&&this.setWorld(e,t,n,o,r+2,s,W.Cobblestone))}this.setWorld(e,t,n,uu.x,r+1,uu.z,W.Bed),this.setWorld(e,t,n,uu.x-1,r+1,uu.z,W.IronOre),this.setWorld(e,t,n,uu.x,r+1,uu.z-1,W.CoalOre),this.setWorld(e,t,n,uu.x+1,r+1,uu.z,W.Mushroom),this.setWorld(e,t,n,uu.x,r+2,uu.z+1,W.Torch)}buildCache(e,t,n){let r=this.surfaceHeight(lu.x,lu.z);for(let i=-2;i<=2;i++)for(let a=-2;a<=2;a++){let o=lu.x+a,s=lu.z+i,c=Math.max(Math.abs(a),Math.abs(i));this.setWorld(e,t,n,o,r,s,W.Obsidian),c===2&&this.setWorld(e,t,n,o,r+1,s,W.Cobblestone),c===0&&(this.setWorld(e,t,n,o,r+1,s,W.Glowstone),this.setWorld(e,t,n,o,r+2,s,W.CrystalOre)),c===1&&(a+i)%2==0&&this.setWorld(e,t,n,o,r+1,s,W.Mushroom)}}fbm(e,t,n,r){let i=1,a=1,o=0,s=0;for(let c=0;c<r;c++)o+=e(t*a,n*a)*i,s+=i,i*=.5,a*=2;return o/s}};function xf(e){return e===`quick`?4:1}var Sf=[{id:`plains`,name:`Planície`,length:40,mobChance:0,mobTint:7049038,extras:[{id:W.Planks,chance:.22},{id:W.Mushroom,chance:.18}],blocks:[{id:W.Grass,weight:30},{id:W.Dirt,weight:22},{id:W.Log,weight:16},{id:W.Planks,weight:18},{id:W.Leaves,weight:6}]},{id:`woods`,name:`Floresta`,length:40,mobChance:0,mobTint:5914672,extras:[{id:W.Planks,chance:.25},{id:W.Mushroom,chance:.16}],blocks:[{id:W.Log,weight:24},{id:W.BirchLog,weight:16},{id:W.Planks,weight:28},{id:W.Dirt,weight:14},{id:W.Leaves,weight:6},{id:W.BirchLeaves,weight:4}]},{id:`garden`,name:`Jardim`,length:40,mobChance:0,mobTint:7049038,extras:[{id:W.Chest,chance:.1,neighbor:!0},{id:W.Mushroom,chance:.12}],blocks:[{id:W.Moss,weight:30},{id:W.Grass,weight:16},{id:W.Dirt,weight:14},{id:W.Flower,weight:16},{id:W.Log,weight:12},{id:W.Leaves,weight:4}]},{id:`underground`,name:`Cavernas`,length:120,mobChance:0,mobTint:6975096,extras:[{id:W.CoalOre,chance:.18},{id:W.Chest,chance:.07,neighbor:!0}],blocks:[{id:W.Stone,weight:32},{id:W.Cobblestone,weight:24},{id:W.CoalOre,weight:18},{id:W.Gravel,weight:12},{id:W.IronOre,weight:10},{id:W.Dirt,weight:4}]},{id:`wastes`,name:`Deserto`,length:80,mobChance:0,mobTint:12886890,extras:[{id:W.CoalOre,chance:.1},{id:W.Chest,chance:.05,neighbor:!0}],blocks:[{id:W.Sand,weight:40},{id:W.Gravel,weight:22},{id:W.Cobblestone,weight:20},{id:W.Sand,weight:10},{id:W.Stone,weight:8}]},{id:`ore`,name:`Minérios`,length:100,mobChance:.045,mobTint:9083562,unlock:`ruin`,extras:[{id:W.IronOre,chance:.15},{id:W.Chest,chance:.08,neighbor:!0}],blocks:[{id:W.Stone,weight:28},{id:W.IronOre,weight:24},{id:W.CoalOre,weight:20},{id:W.GoldOre,weight:12},{id:W.Cobblestone,weight:16}]},{id:`ember`,name:`Brasas`,length:100,mobChance:.06,mobTint:5909026,extras:[{id:W.Lava,chance:.08,neighbor:!0},{id:W.Water,chance:.04,neighbor:!0},{id:W.Chest,chance:.06,neighbor:!0}],blocks:[{id:W.DarkBrick,weight:28},{id:W.Glowstone,weight:18},{id:W.Obsidian,weight:16},{id:W.Stone,weight:22},{id:W.GoldOre,weight:10},{id:W.CoalOre,weight:6}]},{id:`deep`,name:`Profundezas`,length:120,mobChance:.08,mobTint:4864112,unlock:`shrine`,extras:[{id:W.CrystalOre,chance:.05},{id:W.Chest,chance:.07,neighbor:!0}],blocks:[{id:W.Obsidian,weight:24},{id:W.RunicStone,weight:16},{id:W.CrystalOre,weight:14},{id:W.GoldOre,weight:16},{id:W.DarkBrick,weight:18},{id:W.Glowstone,weight:12}]},{id:`after`,name:`Exploração livre`,length:0,unlock:`beacon`,mobChance:.07,mobTint:13214247,extras:[{id:W.Mushroom,chance:.06},{id:W.Chest,chance:.04,neighbor:!0}],blocks:[{id:W.Stone,weight:16},{id:W.Dirt,weight:10},{id:W.Log,weight:10},{id:W.IronOre,weight:12},{id:W.GoldOre,weight:10},{id:W.CrystalOre,weight:8},{id:W.Glowstone,weight:8},{id:W.Obsidian,weight:8},{id:W.Cobblestone,weight:10},{id:W.DarkBrick,weight:8}]}],Cf=[];{let e=0;for(let t of Sf)Cf.push(e),e+=t.length}function wf(e,t,n){return e===0&&t===72&&n===0}function Tf(e,t=`classic`){let n=Math.max(0,e);for(let e=0;e<Sf.length;e++){let r=Sf[e],i=Cf[e]/xf(t);if(r.length===0||n<i+r.length/xf(t))return{phase:r,index:e,local:n-i}}let r=Sf.length-1;return{phase:Sf[r],index:r,local:n-Cf[r]}}function Ef(e,t=`classic`){let n=0;for(let r of Sf){if(r.unlock===e)return n/xf(t);n+=r.length}return n/xf(t)}function Df(e){return e<=2?[{id:W.Dirt,count:6},{id:W.Planks,count:6},{id:W.Mushroom,count:2}]:e<=4?[{id:W.Cobblestone,count:8},{id:W.CoalOre,count:3},{id:W.Planks,count:4}]:e===5?[{id:W.IronOre,count:3},{id:W.CoalOre,count:4},{id:W.Planks,count:4}]:[{id:W.GoldOre,count:2},{id:W.Glowstone,count:2},{id:W.Mushroom,count:2}]}function Of(e,t=`classic`){let{index:n}=Tf(e,t),r=!1,i=!1,a=!1;for(let e=0;e<=n;e++)Sf[e].unlock===`ruin`&&(r=!0),Sf[e].unlock===`shrine`&&(i=!0),Sf[e].unlock===`beacon`&&(a=!0);return{ruin:r,shrine:i,beacon:a}}function kf(e,t){let n=0;for(let t of e)n+=t.weight;let r=t*n;for(let t of e)if(r-=t.weight,r<=0)return t.id;return e[e.length-1].id}function Af(){return W.Grass}function jf(e,t=`classic`){let{phase:n,local:r}=Tf(e,t);return n.length===0?`${n.name}`:`${n.name} ${Math.min(r,n.length/xf(t))} / ${n.length/xf(t)}`}var Mf=60,Nf={sentinel:`As tochas da ruína acenderam.`,warden:`A escada do santuário agora brilha.`,beacon:`O farol acendeu de verdade.`};function Pf(e,t){if(e===`sentinel`){let e=Math.max(t(uu.x,uu.z),Mf);return bu().map(({x:t,z:n,index:r})=>({x:t,y:e+(r%2==0?4:3),z:n,id:W.Torch}))}if(e===`warden`){let e=Math.min(t(J.x,J.z),118),{shaft:n}=J,r=[];for(let t=e-1;t>su;t--)if((e-t)%4==0)for(let i=-n;i<=n;i++)for(let a=-n;a<=n;a++)xu(a,i,n,e-t)&&r.push({x:J.x+a,y:t,z:J.z+i,id:W.Glowstone});return r}let n=$d(t(Y.x,Y.z));return[{x:Y.x,y:n+5,z:Y.z,id:W.Glowstone},{x:Y.x,y:n+6,z:Y.z,id:W.Glowstone},{x:Y.x,y:n+7,z:Y.z,id:W.Torch},...ef().map(({x:e,z:t})=>({x:e,y:n+3,z:t,id:W.Torch}))]}function Ff(e,t){let n=0;for(let r of Pf(t,(t,n)=>e.generator.surfaceHeight(t,n)))e.stampStructure(r.x,r.y,r.z,r.id)&&n++;return n}var If=class{seed;mode;ruinUnlocked=!1;shrineUnlocked=!1;cacheUnlocked=!1;beaconUnlocked=!1;adventure;victories=new Set;signs=null;constructor(e,t=`adventure`){this.seed=e,this.mode=t,this.adventure=t===`adventure`?new bf(e):null,this.adventure&&this.applyUnlocks({ruin:!0,shrine:!0,cache:!0,beacon:!0})}generate(e){this.adventure?this.adventure.generate(e):this.generateOneBlock(e);let t=e.cx*16,n=e.cz*16;for(let r of this.victorySignsIn(e.cx,e.cz))e.set(r.x-t,r.y,r.z-n,r.id);e.generated=!0}victorySignsIn(e,t){if(!this.signs){let e=(e,t)=>this.surfaceHeight(e,t);this.signs=[...this.victories].filter(e=>this.structureOf(e)).flatMap(t=>Pf(t,e))}return this.signs.filter(n=>n.x>>4===e&&n.z>>4===t&&n.y>=0&&n.y<128)}applyVictories(e){this.victories.clear();for(let t of[`sentinel`,`warden`,`beacon`])e[t]&&this.victories.add(t);this.signs=null}structureOf(e){return e===`sentinel`?this.ruinUnlocked:e===`warden`?this.shrineUnlocked:this.beaconUnlocked}generateOneBlock(e){let t=e.cx*16,n=e.cz*16;this.placeOneBlock(e,t,n),this.shrineUnlocked&&gu(e.cx,e.cz)&&this.carveArena(e,t,n),this.shrineUnlocked&&(gu(e.cx,e.cz)||_u(e.cx,e.cz))&&this.carveEntrance(e,t,n),this.cacheUnlocked&&Ou(e.cx,e.cz)&&this.buildCache(e,t,n),this.ruinUnlocked&&Cu(e.cx,e.cz)&&this.buildRuin(e,t,n),this.beaconUnlocked&&Du(e.cx,e.cz)&&this.buildGrove(e,t,n)}surfaceHeight(e,t){return this.adventure?.surfaceHeight(e,t)??72}applyUnlocks(e){this.ruinUnlocked=e.ruin,this.shrineUnlocked=e.shrine,this.cacheUnlocked=e.cache,this.beaconUnlocked=e.beacon,this.signs=null}placeOneBlock(e,t,n){this.paint(e,t,n,0,71,0,W.Bedrock),this.paint(e,t,n,0,72,0,Af())}carveArena(e,t,n){let{radius:r,wall:i,floorY:a,ceilingY:o}=q,s=r+i;for(let c=0;c<16;c++)for(let l=0;l<16;l++){let u=t+l,d=n+c,f=mu(u,d);if(f>s)continue;let p=f<r;for(let t=a-i;t<=o+i;t++)p&&t>a&&t<o?e.set(l,t,c,W.Air):p&&t===a?e.set(l,t,c,W.DarkBrick):(p||f<=s)&&e.set(l,t,c,W.Bedrock);if(!p)continue;let m=Math.atan2(d-q.centerZ,u-q.centerX);for(let t=0;t<4;t++){let n=Math.PI/4*(1+2*t),r=q.centerX+Math.cos(n)*15,i=q.centerZ+Math.sin(n)*15;Math.hypot(u-r,d-i)<=2.6&&e.set(l,a,c,W.Lava)}Math.abs(f-(r-2))<.6&&Math.abs(Math.sin(m*6))>.985&&e.set(l,a,c,W.Glowstone),this.buildAltar(e,l,c,u,d)}}carveEntrance(e,t,n){let r=Math.min(this.surfaceHeight(J.x,J.z),118),i=J.shaft,a=i+1,o=a+1;for(let s=-o;s<=o;s++)for(let c=-o;c<=o;c++)this.buildEntranceColumn(e,t,n,c,s,r,i,a);this.carveDoorway(e,t,n),this.buildShrineMarkers(e,t,n,r,o)}buildEntranceColumn(e,t,n,r,i,a,o,s){let c=J.x+r,l=J.z+i,u=Math.max(Math.abs(r),Math.abs(i)),d=Math.min(this.surfaceHeight(c,l),a);for(let r=a+1;r<=a+8&&r<128;r++)this.paint(e,t,n,c,r,l,W.Air);if(u>s){this.paint(e,t,n,c,a,l,W.Obsidian);return}for(let r=Math.min(d,a)-2;r<a;r++)r<1||u>=o&&this.paint(e,t,n,c,r,l,W.Bedrock);for(let d=q.floorY;d<=a;d++){let f=W.Air;u===s?f=i===s&&Math.abs(r)<=1&&d>=su&&d<su+3?W.Air:d===a?W.Obsidian:W.Bedrock:d===q.floorY?f=W.DarkBrick:d===a?f=u>=o?W.Obsidian:W.Air:d>q.floorY&&d<su?f=W.Bedrock:d>su&&d<a&&xu(r,i,o,a-d)&&(f=W.Obsidian),this.paint(e,t,n,c,d,l,f)}}carveDoorway(e,t,n){let r=q.centerZ-(q.radius-3),i=J.z+J.shaft+1;for(let a=i;a<=r;a++){for(let r=J.x-1;r<=J.x+1;r++){this.paint(e,t,n,r,q.floorY,a,W.Obsidian);for(let i=su;i<su+3;i++)this.paint(e,t,n,r,i,a,W.Air)}this.paint(e,t,n,J.x-2,su,a,W.Glowstone),this.paint(e,t,n,J.x+2,su,a,W.Glowstone)}}buildShrineMarkers(e,t,n,r,i){for(let a of[-1,1])for(let o of[-1,1]){let s=J.x+a*i,c=J.z+o*i;for(let i=1;i<=6;i++){let a=i===6||i===3?W.Glowstone:W.Obsidian;this.paint(e,t,n,s,r+i,c,a)}this.paint(e,t,n,s,r+7,c,W.RunicStone)}}paint(e,t,n,r,i,a,o){let s=r-t,c=a-n;s<0||s>=16||c<0||c>=16||i<0||i>=128||e.set(s,i,c,o)}buildAltar(e,t,n,r,i){let a=Math.abs(r-q.centerX),o=Math.abs(i-q.centerZ);a>2||o>2||(e.set(t,q.floorY+1,n,W.Obsidian),a<=1&&o<=1&&e.set(t,q.floorY+2,n,W.RunicStone),a===0&&o===0&&e.set(t,q.floorY+3,n,W.CrystalOre))}buildGrove(e,t,n){tf($d(this.surfaceHeight(Y.x,Y.z)),(e,t)=>this.surfaceHeight(e,t),(r,i,a,o)=>this.setWorld(e,t,n,r,i,a,o))}buildRuin(e,t,n){let r=Math.max(this.surfaceHeight(uu.x,uu.z),60);this.carveRuinCourtyard(e,t,n,r),this.buildRuinPosts(e,t,n,r),this.buildRuinStatue(e,t,n,r),this.buildRuinHut(e,t,n,r)}carveRuinCourtyard(e,t,n,r){let{centerX:i,centerZ:a,radius:o}=du;for(let s=a-o;s<=a+o;s++)for(let c=i-o;c<=i+o;c++){let l=Math.hypot(c-i,s-a);if(l>o)continue;let u=this.surfaceHeight(c,s),d=Math.min(u,r)-2,f=Math.max(u,r)+10,p=Math.abs(l-(o-1))<.7,m=(c+s)%5==0;for(let i=d;i<=f;i++)i<r?this.setWorld(e,t,n,c,i,s,i<r-1?W.Stone:W.Dirt):i===r?this.setWorld(e,t,n,c,i,s,p||m?W.Cobblestone:W.Grass):this.setWorld(e,t,n,c,i,s,W.Air)}}buildRuinPosts(e,t,n,r){for(let{x:i,z:a,index:o}of bu())this.setWorld(e,t,n,i,r+1,a,W.Cobblestone),this.setWorld(e,t,n,i,r+2,a,W.Cobblestone),o%2==0&&this.setWorld(e,t,n,i,r+3,a,W.Glowstone)}buildRuinStatue(e,t,n,r){for(let i=-1;i<=1;i++)for(let a=-1;a<=1;a++){let o=fu.x+a,s=fu.z+i;this.setWorld(e,t,n,o,r+1,s,W.Cobblestone);let c=a===0&&i===0,l=Math.abs(a)+Math.abs(i)===1;c?(this.setWorld(e,t,n,o,r+2,s,W.RunicStone),this.setWorld(e,t,n,o,r+3,s,W.Cobblestone),this.setWorld(e,t,n,o,r+4,s,W.RunicStone),this.setWorld(e,t,n,o,r+5,s,W.Glowstone)):l&&this.setWorld(e,t,n,o,r+2,s,W.Cobblestone)}}buildRuinHut(e,t,n,r){for(let i=-2;i<=2;i++)for(let a=-2;a<=2;a++){let o=uu.x+a,s=uu.z+i,c=Math.max(Math.abs(a),Math.abs(i));this.setWorld(e,t,n,o,r,s,c===0?W.Planks:W.Cobblestone),c===2&&!(a===2&&Math.abs(i)<=1)&&(this.setWorld(e,t,n,o,r+1,s,W.Cobblestone),(a+i)%2!=0&&this.setWorld(e,t,n,o,r+2,s,W.Cobblestone))}this.setWorld(e,t,n,uu.x,r+1,uu.z,W.Bed),this.setWorld(e,t,n,uu.x-1,r+1,uu.z,W.IronOre),this.setWorld(e,t,n,uu.x,r+1,uu.z-1,W.CoalOre),this.setWorld(e,t,n,uu.x+1,r+1,uu.z,W.Mushroom),this.setWorld(e,t,n,uu.x,r+2,uu.z+1,W.Torch)}buildCache(e,t,n){let r=this.surfaceHeight(lu.x,lu.z);for(let i=-2;i<=2;i++)for(let a=-2;a<=2;a++){let o=lu.x+a,s=lu.z+i,c=Math.max(Math.abs(a),Math.abs(i));this.setWorld(e,t,n,o,r,s,W.Obsidian),c===2&&this.setWorld(e,t,n,o,r+1,s,W.Cobblestone),c===0&&(this.setWorld(e,t,n,o,r+1,s,W.Glowstone),this.setWorld(e,t,n,o,r+2,s,W.CrystalOre)),c===1&&(a+i)%2==0&&this.setWorld(e,t,n,o,r+1,s,W.Mushroom)}}setWorld(e,t,n,r,i,a,o){let s=r-t,c=a-n;s<0||s>=16||c<0||c>=16||i<0||i>=128||e.set(s,i,c,o)}};function Lf(e){let t={slam:0,charge:0,shard:0};if(e.distance<10&&(t.slam=e.distance<6?4:2),e.distance>6&&(t.charge=e.distance>10?4:2),e.phase>=1&&e.distance>5&&(t.shard=1.2),e.lastAttack&&t[e.lastAttack]>0&&(t[e.lastAttack]*=.4),e.lastWaveJumped===!0?(t.slam*=.45,t.charge>0&&(t.charge*=1.45)):e.lastWaveJumped===!1&&t.slam>0&&(t.slam*=1.4),e.gentle){let n=e.distance<8?`slam`:`charge`;t[n]>0&&(t[n]*=1.5)}return t.slam<=0&&t.charge<=0&&t.shard<=0&&(t.slam=1),t}function Rf(e,t=Math.random){let n=Lf(e),r=t()*(n.slam+n.charge+n.shard);return(r-=n.slam)<0?`slam`:(r-=n.charge)<0?`charge`:`shard`}var zf=`Sentinela das Ruínas`,Bf=2.2,Vf=4,Hf=30,Uf=2.6,Wf=2.8,Gf=12,Kf=.77,qf=[{label:`Fase I`,speed:1,color:13934615,staggerTime:3.6},{label:`Fase II`,speed:1.12,color:8165948,staggerTime:3.2}],Jf=class extends $l{model=new nd;telegraph=new Ru(13934615);landingTelegraph=new Ru(13934615);onPhaseChange=null;onDefeated=null;onShake=null;onStagger=null;context;phase=0;attackCooldown=1.1;machine=null;target=new R;chargeDirection=new R;throwAim=new R;facing=0;walkSpeed=0;visualOffsetY=0;collapse=0;slamImpacted=!1;throwsLeft=0;throwTimer=0;lastAttack=null;lastWaveJumped=null;floorY;constructor(e){super(Bf,Vf,`boss`,1.1),this.floorY=e,this.health=new wl(200,.14),this.position.set(fu.x+.5,e+1,fu.z+.5),this.model.root.scale.setScalar(Kf),this.object3D.add(this.model.root,this.telegraph.object3D),this.landingTelegraph.hide(),this.model.setPhaseColor(qf[0].color),this.telegraph.hide()}get stateName(){return this.machine?.current??`awaken`}get phaseLabel(){return qf[this.phase].label}get speedMultiplier(){return qf[this.phase].speed}get staggerTime(){return qf[this.phase].staggerTime}update(e){this.context=e;let t=e.dt*(e.player.gentle?.65:1),n=this.machine??=new Yf(Xf,`awaken`,this);this.health?.update(t),this.health?.dead&&n.current!==`dying`?n.change(`dying`):this.checkPhaseTransition(),n.update(t),this.model.update(t,this.walkSpeed,e.elapsed),this.faceTarget(t),this.mountLandingTelegraph()}syncTransform(){this.object3D.position.set(this.position.x,this.position.y+this.visualOffsetY,this.position.z),this.object3D.rotation.y=this.facing,this.object3D.rotation.z=this.collapse*1.35}onRemoved(){this.model.dispose(),this.landingTelegraph.object3D.removeFromParent(),this.telegraph.dispose(),this.landingTelegraph.dispose()}walkToward(e,t,n,r=.6){let i=e.x-this.position.x,a=e.z-this.position.z,o=Math.hypot(i,a);o>r?(this.velocity.x=Xu(this.velocity.x,i/o*t,6,n),this.velocity.z=Xu(this.velocity.z,a/o*t,6,n)):(this.velocity.x=Xu(this.velocity.x,0,10,n),this.velocity.z=Xu(this.velocity.z,0,10,n)),this.applyPhysics(n)}stopMoving(e){this.velocity.x=Xu(this.velocity.x,0,12,e),this.velocity.z=Xu(this.velocity.z,0,12,e),this.applyPhysics(e)}applyPhysics(e){this.velocity.y-=Hf*e,this.body.move(this.context.world,e),this.walkSpeed=Math.hypot(this.velocity.x,this.velocity.z),this.containInCourtyard(),this.shovePlayer(e)}shovePlayer(e){let t=this.context.player,n=1.55,r=t.position.x-this.position.x,i=t.position.z-this.position.z,a=Math.hypot(r,i);if(a>n)return;let o=a<.001?this.facing+Math.PI:Math.atan2(i,r),s=(n-a)*22;t.velocity.x+=Math.cos(o)*s*e,t.velocity.z+=Math.sin(o)*s*e}distanceToPlayer(){let e=this.context.player.position;return Math.hypot(e.x-this.position.x,e.z-this.position.z)}predictPlayer(e,t){let n=this.context.player;return t.set(n.position.x+n.velocity.x*e,n.position.y,n.position.z+n.velocity.z*e)}getChestPosition(e){return e.set(this.position.x,this.position.y+2.6,this.position.z)}hitFlash(){this.model.flash()}openStaggerWindow(){this.damageMultiplier=2,this.model.setCrouch(1),this.model.flash(.32,16639626),this.context.sfx.play(`stagger`),this.onShake?.(.4),this.getChestPosition(this.target),this.context.particles.burst(this.target,{count:22,color:16639626,speed:5,spread:1,life:.85,gravity:-5,upwardBias:1}),this.context.particles.burst(this.target,{count:10,color:qf[this.phase].color,speed:3.6,spread:.7,life:.65,gravity:-3}),this.onStagger?.()}spawnShockwave(e,t,n){let r=new Lu({maxRadius:t,speed:n,damage:e,knockback:7,color:qf[this.phase].color,onPass:e=>{this.lastWaveJumped=e}});r.position.set(this.position.x,this.position.y,this.position.z),this.context.entities.add(r)}pickAttack(){let e=Rf({distance:this.distanceToPlayer(),phase:this.phase,lastAttack:this.lastAttack,lastWaveJumped:this.lastWaveJumped,gentle:this.context.player.gentle});return this.lastAttack=e,e}startCharge(){this.predictPlayer(.3,this.target),this.chargeDirection.set(this.target.x-this.position.x,0,this.target.z-this.position.z).normalize()}advanceCharge(e){let t=Gf*this.speedMultiplier;this.velocity.x=this.chargeDirection.x*t,this.velocity.z=this.chargeDirection.z*t;let n=this.position.x,r=this.position.z;this.applyPhysics(e);let i=Math.hypot(this.position.x-n,this.position.z-r),a=this.context.player,o=this.distanceToPlayer(),s=Math.abs(a.position.y-this.position.y);return o<2.6&&s<4?(Pu(a,7,this.position,9)&&(this.context.sfx.play(`slam`),this.onShake?.(.4)),!0):i<t*e*.45&&(this.context.sfx.play(`explode`),this.onShake?.(.5),!0)}throwShard(){let e=new Wu({directDamage:6,blastDamage:5,blastRadius:2.4,terrainRadius:0});this.getChestPosition(this.target),e.position.set(this.target.x,this.target.y,this.target.z),e.launchAt(this.throwAim,.85),this.context.entities.add(e),this.context.sfx.play(`hit`)}prepareNextShard(){this.throwTimer=.5,this.predictPlayer(.85,this.throwAim),this.throwAim.y=this.floorY+1,this.landingTelegraph.show(this.throwAim.x,this.throwAim.y,this.throwAim.z,2.2),this.landingTelegraph.setProgress(0)}slamImpact(){this.context.sfx.play(`slam`),this.onShake?.(.7),this.context.particles.burst(this.position,{count:22,color:10260351,speed:6,spread:2,life:.8}),Iu(this.context.player,this.position,4.2,6,7),this.spawnShockwave(6,11+this.phase*2,12)}clearStatue(){let e=this.context.world,t=this.floorY+6;for(let n=fu.z-1;n<=fu.z+1;n++)for(let r=fu.x-1;r<=fu.x+1;r++)for(let i=this.floorY+1;i<=t;i++)Su(r,n)&&e.getBlock(r,i,n)!==W.Air&&(e.edits.has(`${r},${i},${n}`)||e.restoreStructure(r,i,n,W.Air))}setVisualOffset(e){this.visualOffsetY=e}setCollapse(e){this.collapse=e}markSlamImpacted(){this.slamImpacted=!0}get hasSlamImpacted(){return this.slamImpacted}resetSlam(){this.slamImpacted=!1}setThrows(e){this.throwsLeft=e,this.throwTimer=0,e>0&&this.prepareNextShard()}tickThrows(e){return this.throwsLeft<=0||(this.throwTimer-=e,this.landingTelegraph.setProgress(1-Ju(this.throwTimer/.5,0,1)),this.throwTimer<=0&&(--this.throwsLeft,this.throwShard(),this.throwsLeft>0?this.prepareNextShard():this.landingTelegraph.hide()),!1)}checkPhaseTransition(){let e=+((this.health?.fraction??1)<=.5);e<=this.phase||!this.machine||this.machine.current!==`awaken`&&this.machine.current!==`phaseShift`&&(this.phase=e,this.model.setPhaseColor(qf[e].color),this.onPhaseChange?.(e+1,qf[e].label),this.machine.change(`phaseShift`))}faceTarget(e){let t=this.context.player.position,n=Math.atan2(t.x-this.position.x,t.z-this.position.z)-this.facing;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;this.facing+=n*Math.min(1,e*5)}containInCourtyard(){let e=du.radius-2.2,t=this.position.x-du.centerX,n=this.position.z-du.centerZ,r=Math.hypot(t,n);if(r<=e)return;let i=e/r;this.position.x=du.centerX+t*i,this.position.z=du.centerZ+n*i}mountLandingTelegraph(){let e=this.object3D.parent;!e||this.landingTelegraph.object3D.parent===e||e.add(this.landingTelegraph.object3D)}},Yf=class{states;host;state;name;time=0;constructor(e,t,n){this.states=e,this.host=n,this.name=t,this.state=e[t],this.state.enter?.(n)}get current(){return this.name}change(e){e!==this.name&&(this.state.exit?.(this.host),this.name=e,this.state=this.states[e],this.time=0,this.state.enter?.(this.host))}update(e){this.time+=e;let t=this.state.update(this.host,e,this.time);t&&this.change(t)}},Xf={awaken:{enter(e){e.damageMultiplier=0,e.setVisualOffset(-5),e.clearStatue(),e.context.sfx.play(`roar`),e.onShake?.(.45)},update(e,t,n){let r=Ju(n/2,0,1);if(e.setVisualOffset(-5*(1-r)**2),e.stopMoving(t),r>=1)return e.damageMultiplier=1,e.attackCooldown=.9,`chase`}},chase:{enter(e){e.model.setArmRaise(0),e.model.setCrouch(0),e.telegraph.hide()},update(e,t){if(e.walkToward(e.context.player.position,Uf*e.speedMultiplier,t,Wf),e.attackCooldown-=t,e.attackCooldown<=0)return e.pickAttack()}},slam:{enter(e){e.resetSlam(),e.telegraph.show(0,0,0,4.2)},update(e,t,n){let r=1/e.speedMultiplier;if(e.stopMoving(t),n<r){e.model.setArmRaise(n/r),e.telegraph.setProgress(n/r);return}if(e.hasSlamImpacted||(e.markSlamImpacted(),e.telegraph.hide(),e.model.setArmRaise(0),e.slamImpact()),n>r+.4)return`stagger`},exit(e){e.model.setArmRaise(0),e.telegraph.hide()}},charge:{enter(e){e.startCharge(),e.model.setCrouch(1),e.telegraph.show(0,0,0,2.6)},update(e,t,n){let r=.75/e.speedMultiplier;if(n<r){e.stopMoving(t),e.telegraph.setProgress(n/r),n<r*.5&&e.startCharge();return}if(e.telegraph.hide(),e.advanceCharge(t)||n>r+1.4)return`stagger`},exit(e){e.model.setCrouch(0),e.telegraph.hide()}},shard:{enter(e){e.setThrows(2),e.model.setArmRaise(.5)},update(e,t){if(e.stopMoving(t),e.tickThrows(t))return`stagger`},exit(e){e.model.setArmRaise(0),e.landingTelegraph.hide()}},stagger:{enter(e){e.openStaggerWindow()},update(e,t,n){if(e.stopMoving(t),Math.random()<t*8&&e.context.particles.burst(e.getChestPosition(new R),{count:4,color:16639626,speed:2.2,life:.7,gravity:-4}),n>e.staggerTime)return e.attackCooldown=.85/e.speedMultiplier,`chase`},exit(e){e.damageMultiplier=1,e.model.setCrouch(0)}},phaseShift:{enter(e){e.damageMultiplier=0,e.model.setArmRaise(1),e.context.sfx.play(`roar`),e.onShake?.(.55),e.spawnShockwave(5,14,16)},update(e,t,n){if(e.stopMoving(t),e.model.setArmRaise(1-Ju((n-1)/.5,0,1)),n>1.6)return e.damageMultiplier=1,e.attackCooldown=.55,`chase`}},dying:{enter(e){e.damageMultiplier=0,e.telegraph.hide(),e.landingTelegraph.hide(),e.context.sfx.play(`death`),e.onShake?.(.5)},update(e,t,n){e.stopMoving(t),e.setCollapse(Ju(n/1.8,0,1)),Math.random()<t*10&&e.context.particles.burst(e.getChestPosition(new R),{count:4,color:12891220,speed:3.6,spread:1.6,life:1}),n>2.1&&(e.onDefeated?.(),e.context.entities.remove(e))}}};function Zf(e){return Math.max(e,60)}var Qf=class{entities;callbacks;boss=null;defeated=!1;constructor(e,t){this.entities=e,this.callbacks=t}get active(){return this.boss!==null&&!this.boss.removed}canSummon(e){return!this.active&&yu(e.x,e.z)}summon(e){let t=new Jf(Zf(e.generator.surfaceHeight(uu.x,uu.z)));return t.onPhaseChange=(e,t)=>this.callbacks.onPhase(e,t),t.onShake=e=>this.callbacks.onShake(e),t.onStagger=()=>this.callbacks.onStagger(),t.onDefeated=()=>{this.defeated=!0,this.callbacks.onDefeated()},this.boss=this.entities.add(t),this.callbacks.onSummon(zf),t}update(){this.boss?.removed&&(this.boss=null)}beginNewRun(){this.defeated=!1,this.boss=null}reset(e){for(let t of e.entities.entities)t.team===`boss`&&t.clearedOnDeath&&e.entities.remove(t);e.entities.flushRemoved(),this.boss=null,e.world.generator.ruinUnlocked&&this.rebuildStatue(e.world)}rebuildStatue(e){let t=Zf(e.generator.surfaceHeight(uu.x,uu.z));for(let n=-1;n<=1;n++)for(let r=-1;r<=1;r++){let i=fu.x+r,a=fu.z+n;for(let n=t+1;n<=t+6;n++)e.restoreStructure(i,n,a,W.Air);e.restoreStructure(i,t+1,a,W.Cobblestone);let o=r===0&&n===0,s=Math.abs(r)+Math.abs(n)===1;o?(e.restoreStructure(i,t+2,a,W.RunicStone),e.restoreStructure(i,t+3,a,W.Cobblestone),e.restoreStructure(i,t+4,a,W.RunicStone),e.restoreStructure(i,t+5,a,W.Glowstone)):s&&e.restoreStructure(i,t+2,a,W.Cobblestone)}}},$f=.65,ep=.45,tp=.65,np=class extends $l{options;outcome=`pending`;time=0;angle;scale=1;lastAhead=null;bar;constructor(e){super(1,.2,`boss`),this.options=e,this.angle=e.startAngle;let t=new bi(e.length,.32,.32);t.translate(e.length/2,ep,0),this.bar=new V(t,new Er({color:e.color,transparent:!0,opacity:.2,depthWrite:!1})),this.bar.renderOrder=2,this.object3D.add(this.bar)}get sweeping(){return this.time>=this.options.warmUp}get angularSpeed(){return Math.PI*2/this.options.sweep}update(e){this.scale=e.player.gentle?$f:1;let t=e.dt*this.scale;if(this.time+=t,!this.sweeping){this.bar.material.opacity=.18+.14*Math.sin(this.time*18);return}if(this.time>=this.options.warmUp+this.options.sweep){e.entities.remove(this);return}this.bar.material.opacity=.9,this.angle+=this.options.direction*this.angularSpeed*t,this.outcome===`pending`&&this.checkPlayer(e)}approaching(e){if(this.removed||!this.sweeping||this.outcome!==`pending`||!this.inReach(e))return!1;let t=this.aheadOf(e);return t>=-.05&&t/(this.angularSpeed*this.scale)<=tp}shelters(e,t){return tu(e,this.position,t)}syncTransform(){this.object3D.position.copy(this.position),this.object3D.rotation.y=this.angle}onRemoved(){this.bar.geometry.dispose(),this.bar.material.dispose()}checkPlayer(e){let t=e.player;if(!this.inReach(t.position)){this.lastAhead=null;return}let n=this.aheadOf(t.position),r=this.lastAhead!==null&&this.lastAhead>0&&n<=0&&this.lastAhead-n<Math.PI;if(this.lastAhead=n,!r)return;let i=t.position.y<this.position.y+1.2&&t.body.onGround;this.outcome=i?this.shelters(e.world,t.position)?`blocked`:`hit`:`jumped`,this.outcome===`hit`&&Pu(t,this.options.damage,this.position,this.options.knockback)}inReach(e){return Math.hypot(e.x-this.position.x,e.z-this.position.z)<=this.options.length&&Math.abs(e.y-this.position.y)<2}aheadOf(e){return qu(Math.atan2(-(e.z-this.position.z),e.x-this.position.x)-this.angle)*this.options.direction}},rp=`Faroleiro do Vazio`,ip=14,ap=1.1,op=2.4,sp=4.4,cp=30,lp=2.7,up=3,dp=.86,fp=[{label:`Fase I`,speed:1,color:9420618,staggerTime:3.4,beamSweep:3.2},{label:`Fase II`,speed:1.18,color:15127914,staggerTime:2.8,beamSweep:2.6}],pp=class extends $l{model=new nd;telegraph=new Ru(9420618);onPhaseChange=null;onDefeated=null;onShake=null;onStagger=null;context;phase=0;attackCooldown=1;lastAttack=null;beam=null;machine=null;facing=0;walkSpeed=0;visualOffsetY=0;collapse=0;slamImpacted=!1;summoned=!1;floorY;constructor(e){super(op,sp,`boss`,1.1),this.floorY=e,this.health=new wl(240,.14),this.position.set(Y.x+.5,e+1,Y.z+.5),this.model.root.scale.setScalar(dp),this.object3D.add(this.model.root,this.telegraph.object3D),this.model.setPhaseColor(fp[0].color),this.telegraph.hide()}get stateName(){return this.machine?.current??`awaken`}get speedMultiplier(){return fp[this.phase].speed}get staggerTime(){return fp[this.phase].staggerTime}update(e){this.context=e;let t=e.dt*(e.player.gentle?.65:1),n=this.machine??=new mp(hp,`awaken`,this);this.health?.update(t),this.health?.dead&&n.current!==`dying`?n.change(`dying`):this.checkPhaseTransition(),n.update(t),this.model.update(t,this.walkSpeed,e.elapsed),this.faceTarget(t)}syncTransform(){this.object3D.position.set(this.position.x,this.position.y+this.visualOffsetY,this.position.z),this.object3D.rotation.y=this.facing,this.object3D.rotation.z=this.collapse*1.35}onRemoved(){this.model.dispose(),this.telegraph.dispose()}hitFlash(){this.model.flash()}walkToward(e,t,n,r=.6){let i=e.x-this.position.x,a=e.z-this.position.z,o=Math.hypot(i,a);o>r?(this.velocity.x=Xu(this.velocity.x,i/o*t,6,n),this.velocity.z=Xu(this.velocity.z,a/o*t,6,n)):(this.velocity.x=Xu(this.velocity.x,0,10,n),this.velocity.z=Xu(this.velocity.z,0,10,n)),this.applyPhysics(n)}stopMoving(e){this.velocity.x=Xu(this.velocity.x,0,12,e),this.velocity.z=Xu(this.velocity.z,0,12,e),this.applyPhysics(e)}distanceToPlayer(){return Math.hypot(this.context.player.position.x-this.position.x,this.context.player.position.z-this.position.z)}pickAttack(){return this.phase>=1&&this.distanceToPlayer()>7?`summon`:this.lastAttack===`slam`?`beam`:`slam`}startBeam(){let e=this.context.player.position,t=Math.atan2(-(e.z-this.position.z),e.x-this.position.x);this.beam=new np({length:ip,warmUp:ap,sweep:fp[this.phase].beamSweep,damage:5,knockback:4,color:fp[this.phase].color,startAngle:t+Math.PI,direction:Math.random()<.5?1:-1}),this.beam.position.set(this.position.x,this.position.y,this.position.z),this.context.entities.add(this.beam),this.context.sfx.play(`summon`)}get beamDone(){return this.beam===null||this.beam.removed}endBeam(){this.beam&&!this.beam.removed&&this.context.entities.remove(this.beam),this.beam=null}resetSlam(){this.slamImpacted=!1}get hasSlamImpacted(){return this.slamImpacted}markSlamImpacted(){this.slamImpacted=!0}slamImpact(){this.context.sfx.play(`slam`),this.onShake?.(.65),this.context.particles.burst(this.position,{count:18,color:fp[this.phase].color,speed:6,spread:2,life:.8}),Iu(this.context.player,this.position,4.2,6,7);let e=new Lu({maxRadius:11+this.phase*2,speed:12,damage:6,knockback:7,color:fp[this.phase].color});e.position.set(this.position.x,this.position.y,this.position.z),this.context.entities.add(e)}resetSummon(){this.summoned=!1}get hasSummoned(){return this.summoned}markSummoned(){this.summoned=!0}summonSprouts(){for(let e of[-2.4,2.4])this.context.entities.add(new Od(this.position.x,this.position.y,this.position.z+e,{color:7192394,headColor:3107642,eyeColor:16773544,lifetime:24,health:12}));this.context.sfx.play(`roar`)}openStaggerWindow(){this.damageMultiplier=2,this.model.setCrouch(1),this.model.flash(.32,16052392),this.context.sfx.play(`stagger`),this.onShake?.(.4),this.onStagger?.()}clearBeacon(){let e=this.context.world;for(let t=this.floorY+1;t<=this.floorY+7;t++)e.getBlock(Y.x,t,Y.z)!==W.Air&&(e.edits.has(`${Y.x},${t},${Y.z}`)||e.restoreStructure(Y.x,t,Y.z,W.Air))}setVisualOffset(e){this.visualOffsetY=e}setCollapse(e){this.collapse=e}applyPhysics(e){this.velocity.y-=cp*e,this.body.move(this.context.world,e),this.walkSpeed=Math.hypot(this.velocity.x,this.velocity.z),this.contain()}contain(){let e=Y.radius-2.2,t=this.position.x-Y.x,n=this.position.z-Y.z,r=Math.hypot(t,n);if(r<=e)return;let i=e/r;this.position.x=Y.x+t*i,this.position.z=Y.z+n*i}checkPhaseTransition(){let e=+((this.health?.fraction??1)<=.5);e<=this.phase||!this.machine||this.machine.current!==`awaken`&&this.machine.current!==`phaseShift`&&(this.phase=e,this.model.setPhaseColor(fp[e].color),this.onPhaseChange?.(e+1,fp[e].label),this.machine.change(`phaseShift`))}faceTarget(e){let t=this.context.player.position,n=Math.atan2(t.x-this.position.x,t.z-this.position.z)-this.facing;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;this.facing+=n*Math.min(1,e*5)}},mp=class{states;host;state;name;time=0;constructor(e,t,n){this.states=e,this.host=n,this.name=t,this.state=e[t],this.state.enter?.(n)}get current(){return this.name}change(e){e!==this.name&&(this.state.exit?.(this.host),this.name=e,this.state=this.states[e],this.time=0,this.state.enter?.(this.host))}update(e){this.time+=e;let t=this.state.update(this.host,e,this.time);t&&this.change(t)}},hp={awaken:{enter(e){e.damageMultiplier=0,e.setVisualOffset(-4),e.clearBeacon(),e.context.sfx.play(`roar`),e.onShake?.(.4)},update(e,t,n){let r=Ju(n/1.6,0,1);if(e.setVisualOffset(-4*(1-r)**2),e.stopMoving(t),r>=1)return e.damageMultiplier=1,e.attackCooldown=.7,`chase`}},chase:{enter(e){e.model.setArmRaise(0),e.model.setCrouch(0),e.telegraph.hide()},update(e,t){if(e.walkToward(e.context.player.position,lp*e.speedMultiplier,t,up),e.attackCooldown-=t,e.attackCooldown<=0)return e.pickAttack()}},slam:{enter(e){e.lastAttack=`slam`,e.resetSlam(),e.telegraph.show(0,0,0,4.2)},update(e,t,n){let r=.9/e.speedMultiplier;if(e.stopMoving(t),n<r){e.model.setArmRaise(n/r),e.telegraph.setProgress(n/r);return}if(e.hasSlamImpacted||(e.markSlamImpacted(),e.telegraph.hide(),e.model.setArmRaise(0),e.slamImpact()),n>r+.35)return`stagger`},exit(e){e.model.setArmRaise(0),e.telegraph.hide()}},beam:{enter(e){e.lastAttack=`beam`,e.startBeam(),e.model.setArmRaise(1)},update(e,t,n){if(e.stopMoving(t),e.model.setArmRaise(.6+.4*Math.sin(n*6)),e.beamDone)return`stagger`},exit(e){e.endBeam(),e.model.setArmRaise(0)}},summon:{enter(e){e.lastAttack=`summon`,e.resetSummon(),e.model.setArmRaise(1),e.telegraph.show(0,0,0,3.2)},update(e,t,n){let r=.7/e.speedMultiplier;if(e.stopMoving(t),e.telegraph.setProgress(Math.min(1,n/r)),!(n<r)&&(e.hasSummoned||(e.markSummoned(),e.summonSprouts()),n>r+.35))return`stagger`},exit(e){e.model.setArmRaise(0),e.telegraph.hide()}},stagger:{enter(e){e.openStaggerWindow()},update(e,t,n){if(e.stopMoving(t),n>e.staggerTime)return e.attackCooldown=.7/e.speedMultiplier,`chase`},exit(e){e.damageMultiplier=1,e.model.setCrouch(0)}},phaseShift:{enter(e){e.damageMultiplier=0,e.context.sfx.play(`roar`),e.onShake?.(.5),e.slamImpact()},update(e,t,n){if(e.stopMoving(t),n>1.2)return e.damageMultiplier=1,e.attackCooldown=.45,`chase`}},dying:{enter(e){e.damageMultiplier=0,e.telegraph.hide(),e.context.sfx.play(`death`),e.onShake?.(.5)},update(e,t,n){e.stopMoving(t),e.setCollapse(Ju(n/1.6,0,1)),n>1.8&&(e.onDefeated?.(),e.context.entities.remove(e))}}},gp=class{entities;callbacks;boss=null;defeated=!1;constructor(e,t){this.entities=e,this.callbacks=t}get active(){return this.boss!==null&&!this.boss.removed}canSummon(e){return!this.active&&Tu(e.x,e.z)}summon(e){let t=new pp($d(e.generator.surfaceHeight(Y.x,Y.z)));return t.onPhaseChange=(e,t)=>this.callbacks.onPhase(e,t),t.onShake=e=>this.callbacks.onShake(e),t.onStagger=()=>this.callbacks.onStagger(),t.onDefeated=()=>{this.defeated=!0,this.callbacks.onDefeated()},this.boss=this.entities.add(t),this.callbacks.onSummon(rp),t}update(){this.boss?.removed&&(this.boss=null)}beginNewRun(){this.defeated=!1,this.boss=null}reset(e){for(let t of e.entities.entities)t.team===`boss`&&t.clearedOnDeath&&e.entities.remove(t);e.entities.flushRemoved(),this.boss=null,e.world.generator.beaconUnlocked&&this.rebuildBeacon(e.world)}rebuildBeacon(e){let t=$d(e.generator.surfaceHeight(Y.x,Y.z));e.restoreStructure(Y.x,t+1,Y.z,W.Moss),e.restoreStructure(Y.x,t+2,Y.z,W.Moss),e.restoreStructure(Y.x,t+3,Y.z,W.Glowstone),e.restoreStructure(Y.x,t+4,Y.z,W.Glowstone),this.defeated&&Ff(e,`beacon`)}},_p=El(),vp=class{scene;entities=[];constructor(e){this.scene=e}add(e){return this.entities.push(e),this.scene.add(e.object3D),e.syncTransform(),e}remove(e){e.removed=!0}update(e){for(let t of this.entities)t.removed||t.update(e);for(let e=this.entities.length-1;e>=0;e--){let t=this.entities[e];if(!t.removed){t.syncTransform();continue}t.onRemoved(),this.scene.remove(t.object3D),this.entities.splice(e,1)}}raycast(e,t,n,r,i=0){let a=null;for(let o of this.entities){if(o.removed||o.health===null||r!==void 0&&o.team!==r)continue;let s=o.getBox();i>0&&(_p.minX=s.minX-i,_p.minY=s.minY-i,_p.minZ=s.minZ-i,_p.maxX=s.maxX+i,_p.maxY=s.maxY+i,_p.maxZ=s.maxZ+i);let c=Dl(e,t,i>0?_p:s,n);c!==null&&(!a||c<a.distance)&&(a={entity:o,distance:c})}return a}flushRemoved(){for(let e=this.entities.length-1;e>=0;e--){let t=this.entities[e];t.removed&&(t.onRemoved(),this.scene.remove(t.object3D),this.entities.splice(e,1))}}clear(){for(let e of this.entities)e.onRemoved(),this.scene.remove(e.object3D);this.entities.length=0}},yp=function(e){return e[e.Wood=0]=`Wood`,e[e.Iron=1]=`Iron`,e[e.Gold=2]=`Gold`,e}({}),bp={0:{name:`Martelo`,mineSpeed:1,damage:1},1:{name:`Martelo de ferro`,mineSpeed:1.75,damage:1.1},2:{name:`Martelo de ouro`,mineSpeed:2,damage:1.55}},xp=function(e){return e[e.None=0]=`None`,e[e.Iron=1]=`Iron`,e[e.Gold=2]=`Gold`,e}({}),Sp={0:{name:``,reduction:0},1:{name:`Armadura de ferro`,reduction:.28},2:{name:`Armadura de ouro`,reduction:.42}};function Cp(e){return e===0||e===1||e===2}function wp(e){return e===W.IronOre?1:e===W.GoldOre?2:null}function Tp(e){return wp(e)!==null}var Ep=[{id:`torch`,name:`4 tochas`,ingredient:W.CoalOre,cost:1,icon:W.Torch,output:W.Torch,amount:4},{id:`bed`,name:`Cama`,ingredient:W.Planks,cost:4,icon:W.Bed,output:W.Bed,amount:1},{id:`iron-hammer`,name:`Martelo de ferro`,ingredient:W.IronOre,cost:3,icon:W.IronOre,hammer:yp.Iron},{id:`gold-hammer`,name:`Martelo de ouro`,ingredient:W.GoldOre,cost:3,icon:W.GoldOre,hammer:yp.Gold},{id:`iron-armor`,name:`Armadura de ferro`,ingredient:W.IronOre,cost:4,icon:W.IronOre,plates:xp.Iron},{id:`gold-armor`,name:`Armadura de ouro`,ingredient:W.GoldOre,cost:4,icon:W.GoldOre,plates:xp.Gold}];function Dp(e,t){if(e.creative||e.dead)return`Disponível na Sobrevivência`;if(t.hammer!==void 0&&e.hammerTier>=t.hammer)return`Você já tem`;if(t.plates!==void 0){if(e.plates>=t.plates)return`Você já tem`;if(e.hammerTier<t.plates)return`Faça o martelo deste metal primeiro`}return e.inventory.count(t.ingredient)<t.cost?`Precisa de ${t.cost} ${Ll(t.ingredient).name.toLowerCase()}`:null}function Op(e,t){let n=Ep.find(e=>e.id===t);return!n||Dp(e,n)||!e.inventory.remove(n.ingredient,n.cost)?!1:(n.output!==void 0&&e.inventory.add(n.output,n.amount),n.hammer!==void 0&&(e.hammerTier=n.hammer),n.plates!==void 0&&(e.plates=n.plates),!0)}var kp=[{block:W.White,name:`Branco`,hex:`#e2e4de`},{block:W.Cream,name:`Creme`,hex:`#ffecb8`},{block:W.Yellow,name:`Amarelo`,hex:`#e9cd43`},{block:W.Orange,name:`Laranja`,hex:`#e18534`},{block:W.Peach,name:`Pêssego`,hex:`#ffba94`},{block:W.Coral,name:`Coral`,hex:`#ff7060`},{block:W.Red,name:`Vermelho`,hex:`#c3413c`},{block:W.Pink,name:`Rosa`,hex:`#e591b7`},{block:W.Magenta,name:`Rosa forte`,hex:`#d648a8`},{block:W.Purple,name:`Roxo`,hex:`#8c58bb`},{block:W.Lavender,name:`Lilás`,hex:`#baa0f0`},{block:W.Blue,name:`Azul`,hex:`#447dcf`},{block:W.LightBlue,name:`Azul claro`,hex:`#7ec4f0`},{block:W.Navy,name:`Azul escuro`,hex:`#24408c`},{block:W.Cyan,name:`Azul piscina`,hex:`#40d2d6`},{block:W.Teal,name:`Verde água`,hex:`#209684`},{block:W.Mint,name:`Menta`,hex:`#a8f0c4`},{block:W.Lime,name:`Verde limão`,hex:`#9ad648`},{block:W.Green,name:`Verde`,hex:`#529c63`},{block:W.Brown,name:`Marrom`,hex:`#8c5630`},{block:W.Chocolate,name:`Chocolate`,hex:`#5c3420`},{block:W.Gray,name:`Cinza`,hex:`#94969c`},{block:W.Black,name:`Preto`,hex:`#26262a`}];function Ap(){return kp.map(e=>e.block)}var jp={"🌳 Natureza":[W.Grass,W.Dirt,W.Moss,W.Sand,W.Log,W.BirchLog,W.Leaves,W.BirchLeaves,W.Carrot,W.GoldenCarrot,W.Hay],"🏠 Construção":[W.Stone,W.Cobblestone,W.Planks,W.DarkBrick,W.Obsidian,W.Glass],Cores:Ap(),"✨ Decoração":[W.Glowstone,W.Torch,W.Bed,W.Chest]};function Mp(e,t,n,r){let i=document.createElement(`div`);i.className=`block-grid`;for(let{block:a,count:o}of t){let t=document.createElement(`button`);t.type=`button`;let s=Ll(a).name;t.setAttribute(`aria-label`,s),t.setAttribute(`aria-pressed`,String(a===r));let c=document.createElement(`canvas`);c.width=c.height=48;let l=c.getContext(`2d`);l.imageSmoothingEnabled=!1;let u=Fl[a];l.drawImage(e.canvas,u%8*16,Math.floor(u/8)*16,16,16,0,0,48,48);let d=document.createElement(`span`);d.textContent=s+(o===void 0?` ∞`:` ×${o}`),t.append(c,d),t.onclick=()=>n(a),i.append(t)}return i}function Np(e,t,n){let r=document.createElement(`div`);r.className=`recipe-grid`;for(let i of Ep){let a=Mp(e,[{block:i.icon}],()=>n(i.id)),o=a.querySelector(`button`),s=a.querySelector(`span`),c=Dp(t,i);if(o.disabled=c!==null,o.removeAttribute(`aria-pressed`),o.setAttribute(`aria-label`,`Criar `+i.name),i.hammer!==void 0||i.plates!==void 0){let e=a.querySelector(`canvas`).getContext(`2d`);e.clearRect(0,0,48,48),e.fillStyle=i.hammer===2||i.plates===2?`#ffc748`:`#bbcbd6`,e.strokeStyle=`#283445`,e.lineWidth=3,i.hammer===void 0?(e.beginPath(),e.moveTo(7,4),e.lineTo(17,4),e.lineTo(24,12),e.lineTo(31,4),e.lineTo(41,4),e.lineTo(37,22),e.lineTo(37,44),e.lineTo(11,44),e.lineTo(11,22),e.closePath(),e.fill(),e.stroke()):(e.fillRect(6,5,36,17),e.strokeRect(6,5,36,17),e.fillStyle=`#986335`,e.fillRect(20,22,8,23),e.strokeRect(20,22,8,23))}s.textContent=i.name;let l=document.createElement(`span`);l.textContent=`${i.cost} ${Ll(i.ingredient).name} · você tem ${t.inventory.count(i.ingredient)}`;let u=document.createElement(`small`);u.textContent=c??`Criar`,o.append(l,u),r.append(a)}return r}var Pp=50,Fp=class{past=[];future=[];get canUndo(){return this.past.length>0}get canRedo(){return this.future.length>0}clear(){this.past.length=this.future.length=0}record(e){this.future.length=0,!(wf(e.x,e.y,e.z)||Su(e.x,e.z)||Math.abs(e.x-cu.x)<=2&&Math.abs(e.z-cu.z)<=2&&Math.abs(e.y-cu.y)<=3)&&(this.past.push({...e}),this.past.length>Pp&&this.past.shift())}undo(e,t){return this.restore(e,t,!1)}redo(e,t){return this.restore(e,t,!0)}restore(e,t,n){let r=n?this.future:this.past,i=r.at(-1);if(!i)return!1;e.ensureChunk(i.x>>4,i.z>>4);let a=n?i.before:i.after,o=n?i.after:i.before;if(e.getBlock(i.x,i.y,i.z)!==a)return this.clear(),!1;if(Rl(o)&&t(i.x,i.y,i.z)||!e.setBlock(i.x,i.y,i.z,o))return!1;if(!n){let t=`${i.x},${i.y},${i.z}`;i.previousEdit===void 0?e.edits.delete(t):e.edits.set(t,i.previousEdit)}return r.pop(),(n?this.past:this.future).push(i),!0}};function Ip(e){return e===1?`Mire no chão. Aperte o botão direito para colocar.`:`Mire no bloco. Clique com o esquerdo para remover.`}function Lp(e){let t=document.getElementById(`build-lesson`);if(t.classList.toggle(`hidden`,e===0),!e)return;t.dataset.step=String(e);let n=t.querySelector(`span`);n.textContent=Ip(e)}function Rp(e,t,n,r){if(!Yl(e.getBlock(t,n,r)))return null;let i=n+1;return i>=128||e.getBlock(t,i,r)!==W.Air?null:{x:t,y:i,z:r}}function zp(e,t,n,r,i=12){let a=Math.floor(t)-i,o=Math.floor(t)+i,s=Math.floor(r)-i,c=Math.floor(r)+i,l=Math.max(1,Math.floor(n)-6),u=Math.min(127,Math.floor(n)+8),d=0;for(let t=l;t<=u;t++)for(let n=s;n<=c;n++)for(let r=a;r<=o;r++){let i=Jl(e.getBlock(r,t,n));i!==null&&e.setBlock(r,t,n,i)&&(d+=1)}return d}function Bp(e,t,n,r){let i=Math.floor(t.x),a=Math.floor(t.y),o=Math.floor(t.z),s=Math.sign(n.x),c=Math.sign(n.y),l=Math.sign(n.z),u=s===0?1/0:Math.abs(1/n.x),d=c===0?1/0:Math.abs(1/n.y),f=l===0?1/0:Math.abs(1/n.z),p=Vp(t.x,i,s,u),m=Vp(t.y,a,c,d),h=Vp(t.z,o,l,f),g=0,_=0,v=0,y=0;for(;y<=r;){let t=e.getBlock(i,a,o);if(t!==W.Air&&t!==W.Water)return{x:i,y:a,z:o,nx:g,ny:_,nz:v,block:t,distance:y};p<m&&p<h?(y=p,p+=u,i+=s,g=-s,_=0,v=0):m<h?(y=m,m+=d,a+=c,g=0,_=-c,v=0):(y=h,h+=f,o+=l,g=0,_=0,v=-l)}return null}function Vp(e,t,n,r){return n===0?1/0:(n>0?t+1-e:e-t)*r}var Hp=class{slots=Array.from({length:9},()=>({block:null,count:0}));selected=0;unlimited=!1;reserve=new Map;onOverflow=null;get selectedSlot(){return this.slots[this.selected]}select(e){this.selected=(e%9+9)%9}cycle(e){this.select(this.selected+Math.sign(e))}add(e,t=1){let n=t;for(let t of this.slots){if(n===0)break;if(t.block!==e||t.count>=64)continue;let r=64-t.count,i=Math.min(r,n);t.count+=i,n-=i}for(let t of this.slots){if(n===0)break;t.block!==null&&t.count>0||(t.block=e,t.count=Math.min(64,n),n-=t.count)}return n>0&&(this.reserve.set(e,(this.reserve.get(e)??0)+n),this.onOverflow?.()),0}takeSelected(e=1){let t=this.selectedSlot;if(t.block===null||t.count<e)return null;let n=t.block;return this.unlimited?n:(t.count-=e,t.count<=0&&(t.block=null),n)}count(e){return this.slots.reduce((t,n)=>t+(n.block===e?n.count:0),0)+(this.reserve.get(e)??0)}remove(e,t){if(!Number.isSafeInteger(t)||t<=0||this.count(e)<t)return!1;let n=t;for(let t of this.slots){if(t.block!==e)continue;let r=Math.min(t.count,n);if(t.count-=r,n-=r,t.count||(t.block=null),!n)return!0}let r=(this.reserve.get(e)??0)-n;return r>0?this.reserve.set(e,r):this.reserve.delete(e),!0}clear(){this.reserve.clear();for(let e of this.slots)e.block=null,e.count=0}equipReserve(e){let t=this.reserve.get(e)??0;if(!t)return;let n=this.selectedSlot,r={...n};this.reserve.delete(e),n.block=e,n.count=Math.min(64,t),t>64&&this.reserve.set(e,t-64),r.block!==null&&r.count>0&&this.reserve.set(r.block,(this.reserve.get(r.block)??0)+r.count)}load(e,t){this.clear();for(let t=0;t<9;t++){let n=e[t];!n||n.block===null||n.count<=0||(this.slots[t].block=n.block,this.slots[t].count=Math.min(64,n.count))}this.select(t)}},Up=.6,Wp=1.8,Gp=1.62,Kp=5.5,qp=.24,Jp=class{body=new Ql(Up,Wp,1.05);health=new wl(20,.5);inventory=new Hp;spawn=new R;yaw=0;pitch=0;creative=!1;peaceful=!1;edgeProtection=!0;gentle=!0;flying=!1;sprinting=!1;swimming=!1;swing=0;hammerTier=yp.Wood;plates=xp.None;onPlateAbsorb=null;get mineSpeed(){return bp[this.hammerTier].mineSpeed}get meleeDamage(){return bp[this.hammerTier].damage}get armor(){return Sp[this.plates].reduction}get position(){return this.body.position}get velocity(){return this.body.velocity}get dead(){return this.health.dead}getEyePosition(e){return e.set(this.position.x,this.position.y+Gp,this.position.z)}getForward(e){let t=Math.cos(this.pitch);return e.set(-Math.sin(this.yaw)*t,Math.sin(this.pitch),-Math.cos(this.yaw)*t).normalize()}startSwing(){this.swing<=0&&(this.swing=qp)}setSpawn(e,t,n){this.spawn.set(e,t,n)}respawn(){this.position.copy(this.spawn),this.velocity.set(0,0,0),this.body.fallPeak=this.spawn.y,this.body.onGround=!1,this.health.reset(),this.health.invulnerability=5,this.flying=!1,this.swimming=!1,this.pitch=0}},Yp=.18,Xp=.55,Zp=class{player;world;atlas;particles;sfx;target=null;progress=0;previewEnabled=!0;placementHint=``;preview=new V(new bi(1.005,1.005,1.005),new Er({color:9563587,transparent:!0,opacity:.32,depthWrite:!1}));fightsEnabled=!0;paintMode=!1;paintBlock=W.Red;onPainted=null;onCarrotPlanted=null;onPaintingUsed=null;onAltarActivated=null;onStatueActivated=null;onBeaconActivated=null;onConsumed=null;onConsumableFound=null;onUpgradeFound=null;onTorchFuelFound=null;onBedFound=null;onChestOpened=null;onBlockPlaced=null;onBuildEdit=null;onEntityUse=null;onSpawnSet=null;onHammerFeedback=null;onOneBlockMined=null;origin=new R;direction=new R;breakPoint=new R;highlight;crack;placeCooldown=0;mineCooldown=0;useHeld=!1;targetKey=``;constructor(e,t,n,r,i,a){this.player=e,this.world=t,this.atlas=n,this.particles=r,this.sfx=i,this.highlight=new si(new Oi(new bi(1.002,1.002,1.002)),new Yr({color:0,transparent:!0,opacity:.55})),this.highlight.visible=!1,this.highlight.frustumCulled=!1,a.add(this.highlight),this.crack=new V(new bi(1.01,1.01,1.01),new Er({color:0,transparent:!0,opacity:0})),this.crack.visible=!1,a.add(this.crack),this.preview.visible=!1,a.add(this.preview)}update(e,t,n){this.placeCooldown=Math.max(0,this.placeCooldown-e),this.mineCooldown=Math.max(0,this.mineCooldown-e),this.placementHint=``,this.player.getEyePosition(this.origin),this.player.getForward(this.direction),this.target=Bp(this.world,this.origin,this.direction,Kp);let r=this.target?`${this.target.x},${this.target.y},${this.target.z}`:``;r!==this.targetKey&&(this.targetKey=r,this.progress=0);let i=!1,a;this.target&&!n&&(t.isMouseDown(0)||t.wasMousePressed(0))?this.mineCooldown===0&&(a=this.target.block,i=this.mine(e,this.target),i||(a=void 0)):this.progress=0;let o=t.isMouseDown(2)||t.wasMousePressed(2);return o?t.wasMousePressed(2)&&this.onEntityUse?.()&&(this.useHeld=!0):this.useHeld=!1,o&&!this.useHeld&&this.placeCooldown===0&&this.target?.block===W.Painting&&!n?(this.placeCooldown=Yp,this.onPaintingUsed?.(this.target),this.player.startSwing(),this.sfx.play(`place`)):this.paintMode&&o&&!this.useHeld&&this.placeCooldown===0&&this.target&&!n?this.paintTarget(this.target)&&(this.placeCooldown=.12):o&&!this.useHeld&&this.placeCooldown===0&&this.useItem(this.target),this.updateVisuals(),{targetDistance:this.target?.distance??1/0,brokeBlock:i,brokenBlock:a}}mine(e,t){let n=Ll(t.block);if(!Number.isFinite(n.hardness)||(this.progress+=this.player.creative?1:e*this.player.mineSpeed/n.hardness,this.player.startSwing(),this.breakPoint.set(t.x+.5,t.y+.5,t.z+.5),Math.random()<e*12&&this.particles.burst(this.breakPoint,{count:2,color:this.atlas.tileColors[Fl[t.block]],speed:1.6,spread:.9,life:.35}),this.progress<1))return!1;if(this.world.generator.mode===`oneblock`&&wf(t.x,t.y,t.z)?this.onOneBlockMined?.(t):this.editBlock(t.x,t.y,t.z,W.Air),this.progress=0,this.player.creative&&(this.mineCooldown=Yp),this.particles.burst(this.breakPoint,{count:16,color:this.atlas.tileColors[Fl[t.block]],speed:3.4,spread:.9,life:.7}),n.drop!==null&&!this.player.creative){let e=+(t.block===W.CarrotRipe);this.player.inventory.add(n.drop,1+e);let r=Ll(n.drop);r.heal>0&&this.onConsumableFound?.(r.name),Tp(n.drop)&&this.onUpgradeFound?.(r.name),Bl(n.drop)&&this.onTorchFuelFound?.(r.name),Ul(n.drop)&&this.onBedFound?.(r.name)}return this.sfx.play(`break`),!0}get aimingAltar(){return this.target!==null&&this.isAltarBlock(this.target)}get aimingStatue(){return this.target!==null&&this.isStatueBlock(this.target)}get aimingBeacon(){return this.target!==null&&this.isBeaconBlock(this.target)}get holdingConsumable(){let e=this.player.inventory.selectedSlot.block;return e!==null&&zl(e)}get holdingUpgradeOre(){let e=this.player.inventory.selectedSlot.block;return e!==null&&Tp(e)}get holdingTorchFuel(){let e=this.player.inventory.selectedSlot.block;return e!==null&&Bl(e)}get holdingBedMaterial(){let e=this.player.inventory.selectedSlot.block;return e!==null&&Hl(e)}get aimingBed(){return this.target!==null&&Ul(this.target.block)}get aimingChest(){return this.target!==null&&!this.player.creative&&Wl(this.target.block)&&!wf(this.target.x,this.target.y,this.target.z)}paintTarget(e){return Xl(e.block)?e.block!==this.paintBlock&&!this.editBlock(e.x,e.y,e.z,this.paintBlock)?!1:(this.onPainted?.(this.paintBlock),this.player.startSwing(),this.sfx.play(`place`),this.breakPoint.set(e.x+.5,e.y+.5,e.z+.5),this.particles.burst(this.breakPoint,{count:8,color:this.atlas.tileColors[Fl[this.paintBlock]]??new B(this.paintBlock===W.White?16777215:16757575),speed:1.4,spread:.55,life:.35}),!0):(this.placementHint=`Esse não pinta. Escolha um bloco firme.`,!1)}useItem(e){if(this.fightsEnabled&&e&&this.isAltarBlock(e)){this.placeCooldown=Yp,this.player.startSwing(),this.onAltarActivated?.();return}if(this.fightsEnabled&&e&&this.isStatueBlock(e)){this.placeCooldown=Yp,this.player.startSwing(),this.onStatueActivated?.();return}if(this.fightsEnabled&&e&&this.isBeaconBlock(e)){this.placeCooldown=Yp,this.player.startSwing(),this.onBeaconActivated?.();return}if(e&&Ul(e.block)){this.restAt(e);return}if(e&&this.aimingChest){if(this.placeCooldown=Yp,!this.editBlock(e.x,e.y,e.z,W.Air))return;this.onChestOpened?.(),this.player.startSwing(),this.sfx.play(`place`);return}let t=this.player.inventory.selectedSlot.block;if(t!==null&&Kl(t)){this.placeCooldown=Yp,this.onHammerFeedback?.(`Dê a cenoura dourada ao coelhinho.`);return}if(t!==null&&Gl(t)){if(this.tryPlantCarrot(e))return;this.placeCooldown=Yp,this.onHammerFeedback?.(`Plante na terra ou dê a cenoura ao coelhinho.`);return}if(!this.player.creative){if(this.tryConsume())return;if(this.holdingUpgradeOre||this.holdingTorchFuel){this.placeCooldown=Xp,this.onHammerFeedback?.(`Aperte C para criar itens.`);return}}if(!e)return;let n=e.x+e.nx,r=e.y+e.ny,i=e.z+e.nz,a=this.world.getBlock(n,r,i);if(a!==W.Air&&a!==W.Water||this.intersectsPlayer(n,r,i))return;let o=this.player.inventory.selectedSlot.block;o===null||zl(o)||Tp(o)||Bl(o)||(this.placeCooldown=Yp,this.editBlock(n,r,i,o)&&(this.player.inventory.takeSelected(),this.onBlockPlaced?.(o),this.player.startSwing(),this.sfx.play(`place`)))}tryPlantCarrot(e){if(!e)return!1;let t=Yl(e.block)?Rp(this.world,e.x,e.y,e.z):null,n=Rp(this.world,e.x+e.nx,e.y+e.ny-1,e.z+e.nz),r=t??n;return!r||(this.placeCooldown=Yp,!this.editBlock(r.x,r.y,r.z,W.CarrotSprout))?!1:(this.player.inventory.takeSelected(),this.onCarrotPlanted?.(),this.onBlockPlaced?.(W.CarrotSprout),this.player.startSwing(),this.sfx.play(`place`),!0)}tryConsume(){let e=this.player.inventory.selectedSlot;if(this.player.dead||e.block===null||!zl(e.block))return!1;this.placeCooldown=Xp;let t=Ll(e.block).heal,n=this.player.health.heal(t);return n<=0?(this.onConsumed?.(0),!0):(this.player.inventory.takeSelected(),this.player.startSwing(),this.sfx.play(`eat`),this.player.getEyePosition(this.origin),this.particles.burst(this.origin,{count:10,color:8257434,speed:1.6,spread:.45,life:.4,gravity:6}),this.onConsumed?.(n),!0)}tossSelected(){let e=this.player.inventory.selectedSlot;if(e.block===null||e.count<=0)return!1;this.player.getForward(this.direction),this.direction.y=0,this.direction.lengthSq()<1e-6&&this.direction.set(0,0,-1),this.direction.normalize();let t=this.player.position,n=Math.floor(t.x+this.direction.x*1.45),r=Math.floor(t.z+this.direction.z*1.45),i=Math.floor(t.y+.2);for(let t of[0,1,-1]){let a=i+t,o=this.world.getBlock(n,a,r);if(o!==W.Air&&o!==W.Water||this.intersectsPlayer(n,a,r))continue;let s=e.block;if(this.editBlock(n,a,r,s))return this.player.inventory.takeSelected(1),this.onBlockPlaced?.(s),this.player.startSwing(),this.sfx.play(`place`),!0}return this.onHammerFeedback?.(`Não há espaço para soltar`),!1}restAt(e){this.placeCooldown=Xp;let t=e.x+.5,n=e.y+1,r=e.z+.5,i=this.player.spawn;if(Math.hypot(i.x-t,i.y-n,i.z-r)<.2){this.onHammerFeedback?.(`Você já descansa aqui`);return}this.player.setSpawn(t,n,r),this.player.startSwing(),this.sfx.play(`eat`),this.onSpawnSet?.()}isAltarBlock(e){return e.block!==W.RunicStone&&e.block!==W.CrystalOre?!1:Math.abs(e.x-cu.x)<=2&&Math.abs(e.z-cu.z)<=2&&Math.abs(e.y-cu.y)<=2}isBeaconBlock(e){return Eu(e.x,e.z)?e.block===W.Glowstone||e.block===W.Moss:!1}isStatueBlock(e){return Su(e.x,e.z)?e.block===W.RunicStone||e.block===W.Glowstone||e.block===W.CrystalOre||e.block===W.Cobblestone:!1}editBlock(e,t,n,r){let i=this.world.getBlock(e,t,n),a=this.world.edits.get(`${e},${t},${n}`);return this.world.setBlock(e,t,n,r)?(this.onBuildEdit?.({x:e,y:t,z:n,before:i,after:r,previousEdit:a}),!0):!1}intersectsPlayer(e,t,n){let r=this.player.position,i=Up/2;return e+1>r.x-i&&e<r.x+i&&t+1>r.y&&t<r.y+1.8&&n+1>r.z-i&&n<r.z+i}updateVisuals(){if(this.updatePreview(),!this.target||this.target.distance<.15){this.highlight.visible=!1,this.crack.visible=!1;return}let e=this.breakPoint.set(this.target.x+.5,this.target.y+.5,this.target.z+.5);this.highlight.position.copy(e),this.highlight.visible=!0;let t=this.crack.material;this.crack.visible=this.progress>.02,this.crack.position.copy(e),t.opacity=this.progress*.6}updatePreview(){if(this.preview.visible=!1,this.paintMode||(this.placementHint=``),this.paintMode)return;let e=this.target,t=this.player.inventory.selectedSlot,n=t.block;if(!this.previewEnabled||!e||n===null||t.count<=0||zl(n)||Tp(n)||Bl(n)||this.aimingAltar||this.aimingStatue||this.aimingBeacon||this.aimingBed||this.aimingChest)return;let r=e.x+e.nx,i=e.y+e.ny,a=e.z+e.nz,o=this.world.getBlock(r,i,a);i<0||i>=128?this.placementHint=`Limite do mundo: escolha outro lugar`:this.world.getChunk(r>>4,a>>4)?this.intersectsPlayer(r,i,a)?this.placementHint=`Afaste-se um pouco para colocar aqui`:o!==W.Air&&o!==W.Water&&(this.placementHint=`Este espaço está ocupado`):this.placementHint=`Espere o terreno carregar`,this.preview.material.color.setHex(this.placementHint?16747123:9563587),this.preview.material.opacity=this.placementHint?.1:.25,this.preview.position.set(r+.5,i+.5,a+.5),this.preview.visible=!0}},Qp=3.8,$p=1.1,em=2.6,tm=1.2,nm=class extends $l{following=!1;home;wander={x:0,z:0};wanderTimer=0;settled=!0;strayTime=0;nibble=0;giant=0;justShrunk=!1;visualScale=1;body3D=new fn;legs=[];ears=[];constructor(e){super(.7,.8,`neutral`,$p),this.home={...e},this.position.set(e.x,e.y,e.z),this.wander={x:e.x,z:e.z},this.clearedOnDeath=!1,this.health=new wl(1,0),this.health.immune=!0;let t=Math.random;Math.random=()=>.5;try{this.buildModel()}finally{Math.random=t}for(let e=0;e<92;e++)t()}update(e){let{dt:t,world:n,player:r}=e;if(!n.getChunk(Math.floor(this.position.x)>>4,Math.floor(this.position.z)>>4))return;let i=this.following?r.position:this.home,a=i.x-this.position.x,o=i.z-this.position.z,s=Math.hypot(a,o);this.following?this.settled=!1:s<=1.2&&Math.abs(this.position.y-this.home.y)<.75&&(this.settled=!0);let c=!this.following&&!this.settled;if(this.strayTime=c?this.strayTime+t:0,this.position.y<0||s>18||this.strayTime>8){(!this.following||r.body.onGround)&&this.teleport(i);return}let l=i.x,u=i.z,d=this.following?em:.3;if(this.settled){if(this.wanderTimer-=t,this.wanderTimer<=0){this.wanderTimer=2+Math.random()*2.5;let e=Math.random()*Math.PI*2,t=Math.random()*tm;this.wander={x:this.home.x+Math.cos(e)*t,z:this.home.z+Math.sin(e)*t}}l=this.wander.x,u=this.wander.z}let f=l-this.position.x,p=u-this.position.z,m=Math.hypot(f,p),h=0,g=0;if(m>d){let e=_d(this.position,f/m,p/m,(e,t,r)=>n.getBlock(e,t,r));h=e.x,g=e.z}this.body.stepHeight=this.settled?0:$p,pd(this,n,h,g,this.settled?Qp*.45:Qp,t,this.settled?`never`:`moving`);let _=Math.hypot(this.velocity.x,this.velocity.z);_>.2?this.body3D.rotation.y=Math.atan2(this.velocity.x,this.velocity.z):this.following&&s>.4&&(this.body3D.rotation.y=Math.atan2(a,o));let v=_>.2?Math.sin(e.elapsed*14)*.5:0;this.legs.forEach((e,t)=>{e.rotation.x=t%3==0?v:-v}),this.nibble>0&&(this.nibble=Math.max(0,this.nibble-t)),this.tickGiant(t);let y=this.nibble>0?Math.abs(Math.sin(e.elapsed*16))*.34:0;this.body3D.position.y=y;let b=this.nibble>0?Math.sin(e.elapsed*18)*.45:0;this.ears.forEach((e,t)=>{e.rotation.z=(t===0?-.08:.08)+b})}feed(){this.nibble=1.6}growBig(){this.giant=25,this.nibble=1.6,this.justShrunk=!1}tickGiant(e){this.giant>0&&(this.giant=Math.max(0,this.giant-e),this.giant===0&&(this.justShrunk=!0));let t=this.giant>0&&this.giant<2,n=this.giant<=0?1:t?1+(af-1)*(this.giant/2):af,r=1-Math.exp(-e*3.2);this.visualScale+=(n-this.visualScale)*r,this.body3D.scale.setScalar(this.visualScale)}get nibbling(){return this.nibble>0}teleport(e){this.position.set(e.x,e.y+.1,e.z),this.velocity.set(0,0,0),this.settled=!this.following,this.strayTime=0}buildModel(){let e=new Ui({color:16775154,flatShading:!0}),t=new Ui({color:16234440,flatShading:!0}),n=new Ui({color:16748459,flatShading:!0}),r=new Er({color:2825508}),i=new V(new bi(.52,.42,.72),e);i.position.y=.46;let a=new V(new bi(.42,.38,.4),e);a.position.set(0,.7,.42);let o=new V(new bi(.22,.14,.08),e);o.position.set(0,.58,.64);let s=new V(new bi(.1,.08,.06),n);s.position.set(0,.6,.7);let c=new V(new bi(.07,.08,.04),r);c.position.set(-.1,.76,.62);let l=new V(new bi(.07,.08,.04),r);l.position.set(.1,.76,.62);let u=new V(new bi(.16,.16,.16),e);u.position.set(0,.52,-.4),this.body3D.add(i,a,o,s,c,l,u);for(let n of[-1,1]){let r=new fn,i=new V(new bi(.12,.42,.08),e),a=new V(new bi(.07,.28,.04),t);a.position.set(0,-.02,.04),r.add(i,a),r.position.set(n*.12,1.05,.38),this.ears.push(r),this.body3D.add(r)}for(let[t,n]of[[-.16,.22],[.16,.22],[-.16,-.22],[.16,-.22]]){let r=new V(new bi(.12,.26,.12),e);r.geometry.translate(0,-.13,0),r.position.set(t,.28,n),this.legs.push(r),this.body3D.add(r)}this.object3D.add(this.body3D)}},rm=7;function im(e){let t=Math.random;Math.random=()=>.5;try{e()}finally{Math.random=t}}var am=class extends $l{homeX;homeY;homeZ;cheer=0;wanderX;wanderZ;wanderTimer=0;model=new fn;constructor(e,t,n){super(.6,1.5,`neutral`,1),this.homeX=e,this.homeY=t,this.homeZ=n,this.wanderX=e,this.wanderZ=n,this.position.set(e,t,n),this.clearedOnDeath=!1,this.health=new wl(1,0),this.health.immune=!0,im(()=>this.buildModel())}wave(){this.cheer=1.4}update(e){let{dt:t,world:n}=e;if(!n.getChunk(Math.floor(this.position.x)>>4,Math.floor(this.position.z)>>4))return;if(this.cheer>0&&(this.cheer=Math.max(0,this.cheer-t)),this.wanderTimer-=t,this.wanderTimer<=0){this.wanderTimer=3+Math.random()*3;let e=Math.random()*Math.PI*2,t=Math.random()*rm;this.wanderX=this.homeX+Math.cos(e)*t,this.wanderZ=this.homeZ+Math.sin(e)*t}let r=this.wanderX-this.position.x,i=this.wanderZ-this.position.z,a=Math.hypot(r,i),o=a>.4?_d(this.position,r/a,i/a,(e,t,r)=>n.getBlock(e,t,r)):{x:0,z:0};pd(this,n,o.x,o.z,1.6,t,`moving`),this.position.y<this.homeY-4&&this.position.set(this.homeX,this.homeY,this.homeZ),Math.hypot(this.velocity.x,this.velocity.z)>.2&&(this.model.rotation.y=Math.atan2(this.velocity.x,this.velocity.z)),this.model.position.y=this.cheer>0?Math.abs(Math.sin(e.elapsed*14))*.18:0}buildModel(){let e=new Ui({color:4882120,flatShading:!0}),t=new Ui({color:1578e4,flatShading:!0}),n=new Ui({color:5912616,flatShading:!0}),r=new V(new bi(.46,.62,.32),e);r.position.y=.62;let i=new V(new bi(.36,.36,.36),t);i.position.y=1.2;let a=new V(new bi(.4,.12,.4),n);a.position.y=1.4,this.model.add(r,i,a),this.object3D.add(this.model)}},om=class extends $l{state=`wander`;giftClock=8;friends=[];model=new fn;arm=new fn;flower;target=null;walkLeft=0;puff=new R;wanderX;wanderZ;anchorX;anchorZ;constructor(e,t,n){super(.9,2.1,`neutral`,1.05),this.anchorX=e,this.anchorZ=n,this.wanderX=e,this.wanderZ=n,this.position.set(e,t,n),this.clearedOnDeath=!1,this.health=new wl(1,0),this.health.immune=!0,this.flower=new V(new bi(.16,.16,.16),new Ui({color:14826299,flatShading:!0})),im(()=>this.buildModel())}update(e){let{dt:t,world:n}=e;if(!n.getChunk(Math.floor(this.position.x)>>4,Math.floor(this.position.z)>>4))return;this.state===`wander`&&(this.giftClock-=t,this.giftClock<=0&&this.beginGift());let r=this.goal(),i=r.x-this.position.x,a=r.z-this.position.z,o=Math.hypot(i,a),s=o<1.6;this.state===`walk`&&(this.walkLeft-=t,s?this.state=`give`:this.walkLeft<=0&&this.finishGift()),this.state===`give`?(this.giftClock-=t,this.arm.rotation.x=-1.15,this.flower.visible=!0,this.target&&this.target.cheer<=0&&this.target.wave(),this.puff.set(this.position.x,this.position.y+1.7,this.position.z),e.particles.burst(this.puff,{count:2,color:14826299,speed:1.2,spread:.25,life:.45,gravity:2,upwardBias:.6}),this.giftClock<=0&&this.finishGift()):(this.arm.rotation.x=0,this.flower.visible=!1);let c=this.state!==`give`&&o>.8?_d(this.position,i/o,a/o,(e,t,r)=>n.getBlock(e,t,r)):{x:0,z:0};pd(this,n,c.x,c.z,1.8,t,`moving`),Math.hypot(this.velocity.x,this.velocity.z)>.2&&(this.model.rotation.y=Math.atan2(this.velocity.x,this.velocity.z))}beginGift(){let e=this.friends.find(e=>!e.removed);if(!e){this.giftClock=4;return}this.target=e,this.state=`walk`,this.walkLeft=8,this.giftClock=1.8}finishGift(){this.state=`wander`,this.giftClock=9,this.walkLeft=0,this.target=null,this.arm.rotation.x=0,this.flower.visible=!1}goal(){if((this.state===`walk`||this.state===`give`)&&this.target)return{x:this.target.position.x,z:this.target.position.z};if(Math.hypot(this.wanderX-this.position.x,this.wanderZ-this.position.z)<.8){let e=this.giftClock*1.7;this.wanderX=this.anchorX+Math.cos(e)*3,this.wanderZ=this.anchorZ+Math.sin(e)*3}return{x:this.wanderX,z:this.wanderZ}}buildModel(){let e=new Ui({color:14015974,flatShading:!0}),t=new Ui({color:9085108,flatShading:!0}),n=new Er({color:8308976}),r=new V(new bi(.9,.9,.55),e);r.position.y=1.15;let i=new V(new bi(.5,.42,.46),e);i.position.y=1.85;let a=new V(new bi(.12,.28,.12),t);a.position.set(0,1.7,.28);let o=new V(new bi(.08,.08,.04),n);o.position.set(-.12,1.92,.24);let s=o.clone();s.position.x=.12,this.arm.position.set(.55,1.35,.1);let c=new V(new bi(.22,.7,.22),e);c.position.y=-.2,this.flower.position.set(0,-.55,.16),this.flower.visible=!1,this.arm.add(c,this.flower),this.model.add(r,i,a,o,s,this.arm),this.object3D.add(this.model)}},sm=3.8,cm=.48,lm=7,um=1.5,dm=4.5,fm=.6,pm=class{player;entities;particles;sfx;world;aimed=null;onHit=null;cooldown=0;origin=new R;direction=new R;impact=new R;constructor(e,t,n,r,i){this.player=e,this.entities=t,this.particles=n,this.sfx=r,this.world=i}update(e,t){this.cooldown=Math.max(0,this.cooldown-e),this.player.swing=Math.max(0,this.player.swing-e),this.player.getEyePosition(this.origin),this.player.getForward(this.direction);let n=this.player.gentle?fm:0,r=this.entities.raycast(this.origin,this.direction,sm,`boss`,n),i=this.world?Bp(this.world,this.origin,this.direction,sm):null;if(this.aimed=r&&(!i||i.distance>=r.distance)?r.entity:null,!this.aimed||!(t.isMouseDown(0)||t.wasMousePressed(0))||this.cooldown>0)return;this.cooldown=cm,this.player.startSwing();let a=!this.player.body.onGround&&this.player.velocity.y<-.1,o=lm*this.player.meleeDamage*(a?um:1)*this.aimed.damageMultiplier;if(!Nu(this.aimed,o,this.origin,dm,this.particles))return;let s=this.aimed.damageMultiplier>1;this.sfx.play(s?`smash`:`hit`),this.aimed.hitFlash(),this.aimed.getCenter(this.impact),this.onHit?.(s),this.particles.burst(this.impact,{count:s?20:a?14:8,color:s?15324671:a?16769162:16738890,speed:s?5.2:3.4,spread:s?.95:.6,life:.5})}},mm=`mineboss.settings`,hm=.0022,gm={light:{label:`Leve`,distance:4,pixelRatio:1,particles:.35,lights:4},balanced:{label:`Equilibrada`,distance:6,pixelRatio:1.5,particles:.7,lights:8},high:{label:`Caprichada`,distance:8,pixelRatio:2,particles:1,lights:12}},_m={volume:.45,muted:!1,sensitivity:1,reducedMotion:!1,reducedEffects:!1,quality:`balanced`,narrator:!0,music:!0};function vm(e,t,n,r){return typeof e==`number`&&Number.isFinite(e)?Math.max(n,Math.min(r,e)):t}function ym(){try{let e=JSON.parse(localStorage.getItem(mm)??`{}`);return!e||typeof e!=`object`?{..._m}:{volume:vm(e.volume,.45,0,1),muted:e.muted===!0,sensitivity:vm(e.sensitivity,1,.4,2.2),reducedMotion:e.reducedMotion===!0,reducedEffects:e.reducedEffects===!0,quality:e.quality===`light`||e.quality===`high`?e.quality:`balanced`,narrator:e.narrator!==!1,music:e.music!==!1}}catch{return{..._m}}}function bm(e){try{localStorage.setItem(mm,JSON.stringify(e))}catch{}}var xm=function(e){return e[e.First=0]=`First`,e[e.Back=1]=`Back`,e}({}),Sm=3.5,Cm=.32,wm=.55,Tm=new R,Em=new R;function Dm(e){return+(e===0)}function Om(e,t,n,r,i,a,o,s,c){if(a===0)return{x:e+o,y:t+s,z:n,yaw:r,pitch:i};let l=Math.cos(i),u=Math.sin(r)*l,d=-Math.sin(i),f=Math.cos(r)*l,p=c?km(c,e,t,n,u,d,f):Sm;return{x:e+u*p,y:t+d*p,z:n+f*p,yaw:r,pitch:i}}function km(e,t,n,r,i,a,o){let s=0,c=Sm;Tm.set(t,n,r),Em.set(i,a,o);for(let t=0;t<6&&c>.05;t++){let t=Bp(e,Tm,Em,c);if(!t)return Sm;if(Rl(t.block))return Math.max(wm,s+t.distance-Cm);let n=t.distance+.05;s+=n,c-=n,Tm.addScaledVector(Em,n)}return Sm}var Am=Math.PI/2-.001,jm=[`KeyW`,`KeyA`,`KeyS`,`KeyD`,`ArrowUp`,`ArrowLeft`,`ArrowDown`,`ArrowRight`],Mm=(e,...t)=>t.some(t=>e.isDown(t));function Nm(e){return{forward:!!Mm(e,`KeyW`,`ArrowUp`)-+!!Mm(e,`KeyS`,`ArrowDown`),strafe:!!Mm(e,`KeyD`,`ArrowRight`)-+!!Mm(e,`KeyA`,`ArrowLeft`)}}function Pm(e){return Mm(e,...jm)}var Fm=4.6,Im=6.4,Lm=6,Rm=1.2,zm=1,Bm=45,Vm=9,Hm=28,Um=9,Wm=3.2,Gm=5.4,Km=6,qm=4,Jm=.9,Ym=class{player;world;camera;forward=new R;right=new R;eye=new R;bobPhase=0;bobAmount=0;guardedDescentY=null;flyForwardTime=0;lookScale=1;reducedMotion=!1;edgeBlocked=!1;view=0;cycleView(){return this.view=Dm(this.view),this.view}constructor(e,t,n){this.player=e,this.world=t,this.camera=n}look(e){if(e.mouseDX===0&&e.mouseDY===0)return;let t=hm*this.lookScale;this.player.yaw-=e.mouseDX*t,this.player.pitch=Ju(this.player.pitch-e.mouseDY*t,-Am,Am)}update(e,t){let n=this.player;this.edgeBlocked=!1,n.creative&&t.wasPressed(`KeyF`)&&(n.flying=!n.flying,n.velocity.y=0);let{forward:r,strafe:i}=Nm(t),a=Mm(t,`ShiftLeft`,`ShiftRight`);n.sprinting=!n.flying&&a&&r>0,this.flyForwardTime=n.flying&&r>0?this.flyForwardTime+e:0,this.forward.set(-Math.sin(n.yaw),0,-Math.cos(n.yaw)),this.right.set(-this.forward.z,0,this.forward.x);let o=this.forward.x*r+this.right.x*i,s=this.forward.z*r+this.right.z*i,c=Math.hypot(o,s),l=!n.flying&&this.bodyInWater();n.swimming=l;let u=Ju((this.flyForwardTime-Rm)/zm,0,1),d=n.flying?Lm+8*u:l?Wm:n.sprinting?Im:Fm,f=c>0?o/c*d:0,p=c>0?s/c*d:0,m=n.flying||l||n.body.onGround?Bm:Vm;if(n.velocity.x=Xu(n.velocity.x,f,m/d,e),n.velocity.z=Xu(n.velocity.z,p,m/d,e),n.flying){let r=!!t.isDown(`Space`)-+!!a;n.velocity.y=Xu(n.velocity.y,r*Lm,12,e)}else if(l){let r=!!t.isDown(`Space`)-+!!a;n.velocity.y=Xu(n.velocity.y,r*Gm-1.2,8,e),n.velocity.y=Math.max(n.velocity.y-Km*e*.15,-6)}else n.velocity.y=Math.max(n.velocity.y-Hm*e,-60),t.isDown(`Space`)&&n.body.onGround&&(n.velocity.y=Um,n.body.onGround=!1);let h=!n.body.onGround,g=n.body.fallPeak,_=n.creative?128:qm;(n.body.onGround||n.flying||l||!n.edgeProtection||n.velocity.y>0||this.guardedDescentY!==null&&(n.position.y>this.guardedDescentY+.05||n.position.y<this.guardedDescentY-_-.05))&&(this.guardedDescentY=null);let v=n.edgeProtection&&!n.flying&&!l&&n.velocity.y<=0&&(n.body.onGround||this.guardedDescentY!==null),y=n.position.y;if(v){let t=Math.floor(n.position.y-.1),r=Math.max(0,Math.floor((this.guardedDescentY??n.position.y)-.1)-_),i=(e,n)=>{for(let i of[-.25,.25])for(let a of[-.25,.25])for(let o=t;o>=r;o--){let t=this.world.getBlock(Math.floor(e+i),o,Math.floor(n+a));if(Ll(t).contactDamage>0)break;if(Rl(t))return!0}return!1},a=n.position.x+n.velocity.x*e,o=n.position.z+n.velocity.z*e;Math.abs(n.velocity.x)>.001&&!i(a,n.position.z)&&(n.velocity.x=0,this.edgeBlocked=!0),Math.abs(n.velocity.z)>.001&&!i(n.position.x+n.velocity.x*e,o)&&(n.velocity.z=0,this.edgeBlocked=!0)}n.body.move(this.world,e),v&&!h&&!n.body.onGround&&(this.guardedDescentY=y),n.body.onGround&&(this.guardedDescentY=null),l?n.body.fallPeak=n.position.y:h&&n.body.onGround&&!n.flying&&this.applyFallDamage(g-n.position.y),this.applyContactDamage(e),this.updateCamera(e,c>0)}bodyInWater(){let e=!1;return this.player.body.forEachOverlappingBlock(this.world,t=>{Vl(t)&&(e=!0)}),e}applyFallDamage(e){if(this.player.peaceful||e<=qm)return;let t=Math.round((e-qm)*Jm);t>0&&this.player.health.damage(t,{bypassInvulnerability:!0})}applyContactDamage(e){if(this.player.peaceful)return;let t=0;this.player.body.forEachOverlappingBlock(this.world,e=>{t=Math.max(t,Ll(e).contactDamage)}),t>0&&this.player.health.damage(t*e,{bypassInvulnerability:!0})}updateCamera(e,t){let n=this.player,r=Math.hypot(n.velocity.x,n.velocity.z),i=t&&!n.flying&&n.body.onGround&&r>.5;this.bobPhase+=e*r*1.9,this.bobAmount=Xu(this.bobAmount,i?Math.min(r/Im,1):0,8,e);let a=this.reducedMotion||this.view!==0?0:Math.sin(this.bobPhase*2)*.045*this.bobAmount,o=this.reducedMotion||this.view!==0?0:Math.cos(this.bobPhase)*.035*this.bobAmount;n.getEyePosition(this.eye);let s=Om(this.eye.x,this.eye.y,this.eye.z,n.yaw,n.pitch,this.view,o,a,this.view===0?null:this.world);this.camera.position.set(s.x,s.y,s.z),this.camera.rotation.set(s.pitch,s.yaw,0,`YXZ`)}},X=16;function Xm([e,t,n],r){return[e+r,t+r,n+r]}function Zm(e,t,n){return Xm(e,(t()-.5)*n)}function Z(e,t){return(n,r)=>{for(let i=0;i<X;i++)for(let a=0;a<X;a++)n(a,i,Zm(e,r,t))}}function Qm(...e){return(t,n)=>{for(let r of e)r(t,n)}}function $m(e,t,n,r){return(i,a)=>{for(let o=0;o<t;o++){let t=a()*X,o=a()*X,s=n*(.6+a()*.8);for(let n=Math.floor(o-s);n<=o+s;n++)for(let c=Math.floor(t-s);c<=t+s;c++)(c-t)**2+(n-o)**2>s*s||i((c+X)%X,(n+X)%X,Zm(e,a,r))}}}function eh(e,t){return(n,r)=>{for(let i=0;i<X;i++)for(let a=0;a<X;a++){let o=Math.floor(i/8)%2==0?0:8,s=i%8==0||(a+o)%16==0||(a+o)%16==8;n(a,i,Zm(s?t:e,r,s?6:16))}}}var th=(e,t)=>{let n=[134,96,67],r=[92,150,66];for(let i=0;i<X;i++){let a=3+Math.floor(t()*3);for(let o=0;o<X;o++)e(i,o,Zm(o<a?r:n,t,o<a?22:26))}},nh=(e,t)=>{let n=[166,132,84],r=[120,92,54];for(let i=0;i<X;i++)for(let a=0;a<X;a++){let o=Math.hypot(a-7.5,i-7.5),s=Math.sin(o*1.9)>0?n:r;e(a,i,Zm(s,t,14))}},rh=(e,t)=>{let n=[104,78,47];for(let r=0;r<X;r++){let i=Math.sin(r*1.7)*12;for(let a=0;a<X;a++)e(r,a,Zm(Xm(n,i),t,18))}},ih=(e,t)=>{let n=[214,208,190],r=[52,46,40];for(let i=0;i<X;i++){let a=i===3||i===10;for(let o=0;o<X;o++)e(i,o,Zm(a?r:n,t,a?10:16))}},ah=(e,t)=>{let n=[226,220,200],r=[168,152,118];for(let i=0;i<X;i++)for(let a=0;a<X;a++){let o=Math.hypot(a-7.5,i-7.5);e(a,i,Zm(o<3.2?r:n,t,12))}},oh=(e,t)=>{let n=[118,168,86];for(let r=0;r<X;r++)for(let i=0;i<X;i++){let a=(Math.sin(i*1.1)+Math.cos(r*1.4))*12;e(i,r,Zm(Xm(n,a),t,36))}},sh=(e,t)=>{let n=[58,110,48];for(let r=0;r<X;r++)for(let i=0;i<X;i++){let a=(Math.sin(i*1.3)+Math.cos(r*1.7))*10;e(i,r,Zm(Xm(n,a),t,40))}},ch=(e,t)=>{let n=[163,124,74];for(let r=0;r<X;r++){let i=r%4==0;for(let a=0;a<X;a++)e(a,r,Zm(Xm(n,i?-34:0),t,i?8:18))}},lh=(e,t)=>{let n=[168,62,58],r=[214,196,168];for(let i=0;i<X;i++)for(let a=0;a<X;a++){let o=i%5==0||a===0||a===X-1;e(a,i,Zm(o?r:n,t,o?10:18))}},uh=(e,t)=>{let n=[168,62,58],r=[232,220,198];for(let i=0;i<X;i++)for(let a=0;a<X;a++)e(a,i,Zm(i<6?r:n,t,16))},dh=(e,t)=>{for(let n=0;n<X;n++)for(let r=0;r<X;r++){let i=Math.sin(r*.8+n*.5)+Math.cos(n*1.1)>.4;e(r,n,Zm(i?[252,186,62]:[206,74,20],t,26))}};function fh(e){return(t,n)=>{let r=[46,44,56],i=[176,120,246];for(let a=0;a<X;a++)for(let o=0;o<X;o++){let s=o-7.5,c=a-7.5,l=e===`top`?Math.abs(Math.abs(s)-Math.abs(c))<1.2&&Math.abs(s)<6:Math.abs(s)<1.2&&Math.abs(c)<5||Math.abs(c)<1.2&&Math.abs(s)<5;t(o,a,Zm(l?i:r,n,l?30:12))}}}var ph=(e,t)=>{let n=[18,16,14],r=[132,90,46],i=[86,56,28],a=[244,148,42],o=[255,228,110];for(let s=0;s<X;s++)for(let c=0;c<X;c++){let l=Math.abs(c-7.5),u=s>=6&&l<1.6;s<7&&l<2.8-s*.18?e(c,s,Zm(s<3?o:a,t,28)):u?e(c,s,Zm(l<.7?r:i,t,16)):e(c,s,n)}};function mh(e,t){return(n,r)=>{for(let i=0;i<X;i++)for(let a=0;a<X;a++){let o=Math.abs(a-7.5),s=Math.abs(i-7.5),c=t?o+s<6:i>3&&i<10&&a>3&&a<12||a>6&&a<9&&i<13||i===13&&a>3&&a<12;n(a,i,Zm(c?e:[40,44,59],r,12))}}}function hh(e){for(let t=0;t<X;t++)for(let n=0;n<X;n++){let r=Math.floor(t/4)%2==0?[158,110,62]:[136,90,48];e(n,t,t>6&&t<9||n>6&&n<10&&t>4&&t<11?[88,58,34]:r)}}var gh={[G.Stone]:Z([128,128,132],22),[G.Dirt]:Z([134,96,67],28),[G.GrassTop]:Qm(Z([92,150,66],30),$m([112,172,78],6,2,20)),[G.GrassSide]:th,[G.Sand]:Z([219,205,150],20),[G.Gravel]:Qm(Z([120,116,114],26),$m([158,152,148],10,2,24)),[G.Cobblestone]:Qm(Z([98,98,102],14),$m([138,138,142],9,2.6,26)),[G.LogSide]:rh,[G.LogTop]:nh,[G.Leaves]:sh,[G.Planks]:ch,[G.CoalOre]:Qm(Z([128,128,132],22),$m([36,34,38],4,2.2,18)),[G.IronOre]:Qm(Z([128,128,132],22),$m([206,158,120],4,2.2,22)),[G.GoldOre]:Qm(Z([128,128,132],22),$m([238,200,74],4,2.1,26)),[G.CrystalOre]:Qm(Z([104,100,118],20),$m([158,226,246],5,2.3,34)),[G.Bedrock]:Qm(Z([64,64,68],30),$m([38,38,42],8,2.4,20)),[G.Lava]:dh,[G.Obsidian]:Qm(Z([32,24,46],14),$m([64,48,90],5,2,18)),[G.RunicTop]:fh(`top`),[G.RunicSide]:fh(`side`),[G.DarkBrick]:eh([58,56,66],[38,36,46]),[G.Glowstone]:Qm(Z([228,190,96],20),$m([255,240,176],7,2.2,24)),[G.Mushroom]:Qm(Z([168,42,38],18),$m([236,226,210],6,1.8,14)),[G.Torch]:ph,[G.TorchFlame]:Qm(Z([236,132,36],20),$m([255,226,96],5,2.2,28)),[G.Water]:Qm(Z([38,108,186],14),$m([120,198,236],7,2.6,28)),[G.Bed]:lh,[G.BedEnd]:uh,[G.BirchLogSide]:ih,[G.BirchLogTop]:ah,[G.BirchLeaves]:oh,[G.White]:Z([226,228,222],10),[G.Red]:Z([195,65,60],10),[G.Orange]:Z([225,133,52],10),[G.Yellow]:Z([233,205,67],10),[G.Green]:Z([82,156,99],10),[G.Blue]:Z([68,125,207],10),[G.Purple]:Z([140,88,187],10),[G.Pink]:Z([229,145,183],10),[G.Glass]:e=>{for(let t=0;t<X;t++)for(let n=0;n<X;n++)(n===0||t===0||n===X-1||t===X-1||n+t===9&&n>2&&n<7)&&e(n,t,[181,225,238])},[G.SentinelTrophy]:mh([244,201,71],!1),[G.WardenTrophy]:mh([126,221,245],!0),[G.SentinelBanner]:Qm(Z([67,113,87],10),mh([204,175,73],!1)),[G.WardenLantern]:Qm(Z([93,162,193],10),mh([170,230,245],!0)),[G.Moss]:Qm(Z([78,122,62],22),$m([108,156,74],8,2.1,16)),[G.Flower]:Qm(Z([86,140,64],16),$m([232,112,146],5,1.7,12),$m([240,214,86],3,1.4,10)),[G.Chest]:hh,[G.BeaconTrophy]:mh([186,214,96],!1),[G.BeaconLantern]:Qm(Z([92,122,64],10),mh([214,230,120],!1)),[G.Black]:Z([38,38,42],8),[G.Gray]:Z([148,150,156],8),[G.Brown]:Z([140,86,48],8),[G.LightBlue]:Z([126,196,240],8),[G.Lime]:Z([154,214,72],8),[G.Cyan]:Z([64,210,214],8),[G.Magenta]:Z([214,72,168],8),[G.Peach]:Z([255,186,148],8),[G.Cream]:Z([255,236,196],8),[G.Navy]:Z([36,64,140],8),[G.Teal]:Z([32,150,132],8),[G.Coral]:Z([255,112,96],8),[G.Lavender]:Z([186,160,240],8),[G.Mint]:Z([168,240,196],8),[G.Chocolate]:Z([92,52,32],8)};function _h(e){let t=[];for(let n of Object.keys(gh)){let r=Number(n),i=e.getImageData(r%8*X,Math.floor(r/8)*X,X,X),a=0,o=0,s=0;for(let e=0;e<i.data.length;e+=4)a+=i.data[e],o+=i.data[e+1],s+=i.data[e+2];let c=i.data.length/4;t[r]=new B(a/c/255,o/c/255,s/c/255)}return t}function vh(){let e=document.createElement(`canvas`);e.width=128,e.height=128;let t=e.getContext(`2d`);if(!t)throw Error(`2D canvas context unavailable`);for(let[e,n]of Object.entries(gh)){let r=Number(e),i=t.createImageData(X,X);n((e,t,[n,r,a])=>{let o=(t*X+e)*4;i.data[o]=n,i.data[o+1]=r,i.data[o+2]=a,i.data[o+3]=255},Gu(24301+r*7919)),t.putImageData(i,r%8*X,Math.floor(r/8)*X)}let n=new gi(e);return n.magFilter=r,n.minFilter=r,n.generateMipmaps=!1,n.colorSpace=Be,n.needsUpdate=!0,{texture:n,canvas:e,tileColors:_h(t)}}function yh(e){return new Ui({map:e.texture,vertexColors:!0,alphaTest:.5})}function bh(e){return new Ui({map:e.texture,vertexColors:!0,transparent:!0,opacity:.52,depthWrite:!1,side:2})}var xh=900,Sh=class{density=1;positions=new Float32Array(xh*3);colors=new Float32Array(xh*3);velocities=new Float32Array(xh*3);life=new Float32Array(xh);maxLife=new Float32Array(xh);gravity=new Float32Array(xh);geometry=new hr;points;scratch=new B;cursor=0;constructor(e){this.positions.fill(-1e3),this.geometry.setAttribute(`position`,new er(this.positions,3)),this.geometry.setAttribute(`color`,new er(this.colors,3)),this.geometry.setDrawRange(0,xh);let t=new ci({size:.14,vertexColors:!0,sizeAttenuation:!0,transparent:!0,depthWrite:!1});this.points=new pi(this.geometry,t),this.points.frustumCulled=!1,e.add(this.points)}clear(){this.life.fill(0),this.positions.fill(-1e3),this.geometry.attributes.position.needsUpdate=!0}burst(e,t={}){let n=Math.ceil((t.count??12)*this.density),r=t.speed??3,i=t.spread??.25,a=t.life??.8,o=t.gravity??18,s=t.upwardBias??.6;this.scratch.set(t.color??16777215);for(let t=0;t<n;t++){let t=this.cursor;this.cursor=(this.cursor+1)%xh;let n=t*3;this.positions[n]=e.x+(Math.random()-.5)*i,this.positions[n+1]=e.y+(Math.random()-.5)*i,this.positions[n+2]=e.z+(Math.random()-.5)*i;let c=Math.random()*Math.PI*2,l=Math.acos(2*Math.random()-1),u=r*(.4+Math.random()*.6);this.velocities[n]=Math.sin(l)*Math.cos(c)*u,this.velocities[n+1]=Math.abs(Math.cos(l))*u*s+u*.2,this.velocities[n+2]=Math.sin(l)*Math.sin(c)*u;let d=.75+Math.random()*.5;this.colors[n]=this.scratch.r*d,this.colors[n+1]=this.scratch.g*d,this.colors[n+2]=this.scratch.b*d,this.life[t]=a*(.7+Math.random()*.6),this.maxLife[t]=this.life[t],this.gravity[t]=o}}update(e){let t=!1;for(let n=0;n<xh;n++){if(this.life[n]<=0)continue;t=!0,this.life[n]-=e;let r=n*3;if(this.life[n]<=0){this.positions[r]=-1e3,this.positions[r+1]=-1e3,this.positions[r+2]=-1e3;continue}this.velocities[r+1]-=this.gravity[n]*e,this.positions[r]+=this.velocities[r]*e,this.positions[r+1]+=this.velocities[r+1]*e,this.positions[r+2]+=this.velocities[r+2]*e;let i=Math.min(1,this.life[n]/this.maxLife[n]/.35);this.colors[r]*=i<1?.94:1,this.colors[r+1]*=i<1?.94:1,this.colors[r+2]*=i<1?.94:1}t&&(this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.color.needsUpdate=!0)}},Ch=12,wh=26,Th=class{limit=Ch;lights=[];scratch=[];constructor(e){for(let t=0;t<Ch;t++){let t=new xa(16757082,0,16,2);t.visible=!1,e.add(t),this.lights.push(t)}}update(e,t,n,r){this.scratch.length=0,e.forEachNearbyTorch(t,r,wh,e=>{let i=Math.hypot(e.x+.5-t,e.y+.7-n,e.z+.5-r);i>wh||this.scratch.push({x:e.x,y:e.y,z:e.z,distance:i})}),this.scratch.sort((e,t)=>e.distance-t.distance);for(let e=0;e<this.lights.length;e++){let t=this.lights[e],n=e<this.limit?this.scratch[e]:void 0;if(!n){t.intensity=0,t.visible=!1;continue}t.visible=!0,t.intensity=16,t.position.set(n.x+.5,n.y+.72,n.z+.5)}}clear(){for(let e of this.lights)e.intensity=0,e.visible=!1}};function Eh(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new hr,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Dh(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Dh(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Dh(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new er(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var Oh={[yp.Wood]:{body:12024642,edge:15186028,band:5720120,socket:3681317,gem:16108150},[yp.Iron]:{body:8756399,edge:14872048,band:3427425,socket:2306368,gem:6678239},[yp.Gold]:{body:14392373,edge:16769940,band:8409134,socket:5058606,gem:8647883}};function kh(e,t={}){let n=Oh[e],r=[],i=(e,t,n,i,a,o,s)=>{let c=new bi(e,t,n),l=new B(s),u=[.78,.64,1,.48,.92,.7],d=new Float32Array(72);for(let e=0;e<6;e++){let t=l.clone().multiplyScalar(u[e]);for(let n=0;n<4;n++)t.toArray(d,(e*4+n)*3)}c.setAttribute(`color`,new er(d,3)),c.translate(i,a,o),r.push(c)};i(.105,.9,.105,0,-.08,0,9789493),i(.025,.43,.007,-.024,.05,.056,13011788),i(.012,.24,.008,.025,.13,.056,6372903),i(.145,.1,.14,0,.19,0,n.band),i(.13,.36,.13,0,-.31,0,4797743);for(let e=0;e<5;e++)i(.143,.024,.143,0,-.16-e*.067,0,9200208);i(.17,.07,.16,0,-.52,0,n.band),i(.12,.025,.115,0,-.566,0,n.edge);let a=.39;i(.55,.29,.27,0,a,0,n.body),i(.48,.025,.235,0,.5475,0,n.edge);for(let e of[-1,1])i(.075,.33,.305,e*.27,a,0,n.band),i(.055,.275,.255,e*.335,a,0,n.edge),i(.018,.205,.185,e*.371,a,0,n.body),i(.145,.175,.012,e*.155,a,.141,n.edge),i(.033,.033,.019,e*.22,.48,.152,n.socket),i(.033,.033,.019,e*.22,.30000000000000004,.152,n.socket);if(i(.125,.34,.306,0,a,0,n.band),i(.105,.15,.03,0,a,.169,n.socket),i(.071,.09,.022,0,a,.195,n.gem),i(.042,.125,.019,0,a,.194,n.gem),i(.023,.035,.006,-.014,.41200000000000003,.209,16774095),t.glove!==!1){i(.19,.16,.185,.025,-.285,.018,12024657),i(.07,.12,.075,-.06,-.245,.108,13933159);for(let e=0;e<3;e++)i(.11,.012,.008,.055,-.24-e*.043,.115,8737592);i(.2,.065,.19,.034,-.4,.019,2641252),i(.195,.25,.18,.04,-.55,.013,4488855)}let o=Eh(r,!1);for(let e of r)e.dispose();return t.gripAtOrigin&&o.translate(0,.35,0),o.computeBoundingSphere(),o}var Ah=[232,184,142],jh=[204,148,108],Mh=[210,132,96],Nh=[176,110,86],Ph=[58,36,22],Fh=[90,56,36],Ih=[255,252,246],Lh=[62,40,28],Rh=[90,56,36],zh=[196,130,96],Q=Ah,Bh=jh,Vh=Mh,Hh=Nh,$=Ph,Uh=Fh,Wh=Ih,Gh=Lh,Kh=Rh,qh=zh,Jh=[[$,$,$,$,$,$,$,$],[$,$,Q,Q,Q,Q,$,$],[Q,Q,Kh,Q,Q,Kh,Q,Q],[Q,Wh,Gh,Q,Q,Gh,Wh,Q],[Q,Wh,Wh,Q,Q,Wh,Wh,Q],[Q,Q,Q,Vh,Vh,Q,Q,Q],[Q,Q,Q,Hh,Hh,Q,Q,Q],[Q,Q,Q,Q,Q,Q,Q,Q]],Yh=[[$,$,$,Uh,Uh,$,$,$],[$,$,$,Uh,Uh,$,$,$],[$,$,$,$,$,$,$,$],[$,$,$,$,$,$,$,$],[$,$,$,$,$,$,$,$],[$,$,$,$,$,$,$,$],[$,$,$,$,$,$,$,$],[$,$,$,$,$,$,$,$]],Xh=Array.from({length:8},()=>Array.from({length:8},()=>Q)),Zh=[[$,$,$,Uh,Uh,$,$,$],[$,$,$,$,$,$,$,$],[$,$,$,$,$,$,$,$],[$,$,$,$,$,$,$,$],[$,$,$,$,$,$,$,$],[$,$,$,$,$,$,$,$],[$,$,Bh,Bh,Bh,Bh,$,$],[$,$,Bh,Bh,Bh,Bh,$,$]],Qh=[[$,$,$,$,$,$,$,$],[$,$,$,$,$,$,$,$],[$,$,$,Q,Q,$,$,$],[Q,Q,Q,qh,qh,Q,Q,Q],[Q,Q,Q,qh,qh,Q,Q,Q],[Q,Q,Q,Q,Q,Q,Q,Q],[Q,Q,Bh,Bh,Bh,Bh,Q,Q],[Q,Q,Bh,Bh,Bh,Bh,Q,Q]];function $h(e){let t=e.length,n=e[0].length,i=new Uint8Array(n*t*4);for(let r=0;r<t;r++)for(let a=0;a<n;a++){let o=((t-1-r)*n+a)*4,[s,c,l]=e[r][a];i[o]=s,i[o+1]=c,i[o+2]=l,i[o+3]=255}let a=new Br(i,n,t,w);return a.magFilter=r,a.minFilter=r,a.generateMipmaps=!1,a.colorSpace=Be,a.needsUpdate=!0,a}function eg(){return[Qh,Qh,Yh,Xh,Zh,Jh].map(e=>new Er({map:$h(e)}))}var tg={position:new R(.04,-.62,.02),rotation:new qt(Math.PI+.2,.9,.15),scale:.42},ng=14725257,rg=4034513,ig=2846376,ag=3820139,og=4863784,sg={[xp.Iron]:{body:10134704,trim:14476268},[xp.Gold]:{body:13936714,trim:16769162}},cg=.5/16;function lg(e){let t=e%8,n=Math.floor(e/8);return{u0:(t+cg)/8,u1:(t+1-cg)/8,v0:1-(n+1-cg)/8,v1:1-(n+cg)/8}}function ug(e,t){let n=[Fl[t],Fl[t],Pl[t],Il[t],Fl[t],Fl[t]],r=e.getAttribute(`uv`),i=[[0,1],[1,1],[0,0],[1,0]];for(let e=0;e<6;e++){let{u0:t,u1:a,v0:o,v1:s}=lg(n[e]);for(let n=0;n<4;n++)r.setXY(e*4+n,t+i[n][0]*(a-t),o+i[n][1]*(s-o))}r.needsUpdate=!0}function dg(e,t,n,r,i,a,o,s){let c=new V(new bi(t,n,r),new Ui({color:i}));return c.position.set(a,o,s),e.add(c),c}var fg=class{root=new fn;leftLeg=new fn;rightLeg=new fn;leftArm=new fn;rightArm=new fn;armor=[];hair=[];hammer;held;walkPhase=0;walkAmount=0;plates=xp.None;tier=yp.Wood;heldBlock=null;constructor(e){let t=.74,n=1.28;this.leftLeg.position.set(-.12,t,0),this.rightLeg.position.set(.12,t,0),this.root.add(this.leftLeg,this.rightLeg),dg(this.leftLeg,.2,.7,.22,ag,0,-.35,0),dg(this.rightLeg,.2,.7,.22,ag,0,-.35,0),dg(this.leftLeg,.22,.14,.26,og,0,-.64,-.02),dg(this.rightLeg,.22,.14,.26,og,0,-.64,-.02),this.suitPiece(this.leftLeg,.24,.42,.08,0,-.22,-.12,!1),this.suitPiece(this.rightLeg,.24,.42,.08,0,-.22,-.12,!1),this.suitPiece(this.leftLeg,.24,.16,.28,0,-.6,-.02,!0),this.suitPiece(this.rightLeg,.24,.16,.28,0,-.6,-.02,!0);let r=new fn;r.position.y=1.02,this.root.add(r),dg(r,.46,.56,.26,rg,0,0,0),dg(r,.2,.16,.04,ig,0,.08,-.14),this.suitPiece(r,.52,.5,.1,0,.02,-.14,!1),this.suitPiece(r,.52,.5,.1,0,.02,.16,!1),this.suitPiece(r,.5,.08,.3,0,.26,0,!0);let i=new fn;i.position.y=1.58,this.root.add(i);let a=new V(new bi(.44,.44,.44),eg());i.add(a),this.suitPiece(i,.56,.2,.56,0,.24,0,!0),this.suitPiece(i,.52,.28,.08,-.24,.02,0,!1),this.suitPiece(i,.52,.28,.08,.24,.02,0,!1),this.suitPiece(i,.52,.28,.1,0,.02,.22,!1),this.leftArm.position.set(-.34,n,0),this.rightArm.position.set(.34,n,0),this.root.add(this.leftArm,this.rightArm),dg(this.leftArm,.16,.58,.16,ng,0,-.32,0),dg(this.rightArm,.16,.58,.16,ng,0,-.32,0),dg(this.leftArm,.18,.16,.18,rg,0,-.06,0),dg(this.rightArm,.18,.16,.18,rg,0,-.06,0),this.suitPiece(this.leftArm,.22,.14,.22,0,-.04,0,!0),this.suitPiece(this.rightArm,.22,.14,.22,0,-.04,0,!0),this.suitPiece(this.leftArm,.2,.36,.08,0,-.28,-.1,!1),this.suitPiece(this.rightArm,.2,.36,.08,0,-.28,-.1,!1),dg(this.rightArm,.2,.16,.2,ng,.03,-.62,.02),this.hammer=new V(kh(yp.Wood,{glove:!1,gripAtOrigin:!0}),new Ui({vertexColors:!0})),this.hammer.scale.setScalar(tg.scale),this.hammer.position.copy(tg.position),this.hammer.rotation.copy(tg.rotation),this.rightArm.add(this.hammer);let o=new bi(.26,.26,.26);this.held=new V(o,new Er({map:e.texture,alphaTest:.5})),this.held.position.set(.02,-.58,-.16),this.held.visible=!1,this.rightArm.add(this.held),this.root.visible=!1}setVisible(e){this.root.visible=e}setPlates(e){if(e===this.plates)return;this.plates=e;let t=e!==xp.None,n=t?sg[e]:null;for(let e of this.armor)e.mesh.visible=t,n&&(e.mesh.material.color.setHex(e.trim?n.trim:n.body),e.mesh.material.emissive.setHex(e.trim?n.trim:n.body),e.mesh.material.emissiveIntensity=.22);for(let e of this.hair)e.visible=!t}setTier(e){e!==this.tier&&(this.tier=e,this.hammer.geometry.dispose(),this.hammer.geometry=kh(e,{glove:!1,gripAtOrigin:!0}))}setHeld(e){e!==this.heldBlock&&(this.heldBlock=e,this.held.visible=e!==null,this.hammer.visible=e===null,e!==null&&ug(this.held.geometry,e))}update(e,t){let n=t.reducedMotion?.16:.62,r=t.moving?Math.min(t.speed/4.6,1):0;this.walkAmount+=(r-this.walkAmount)*Math.min(1,e*8),this.walkPhase+=e*Math.max(t.speed,.01)*7;let i=Math.sin(this.walkPhase)*n*this.walkAmount;this.leftLeg.rotation.x=i,this.rightLeg.rotation.x=-i,this.leftArm.rotation.x=-i*.75;let a=t.swingDuration>0?1-Math.min(1,t.swing/t.swingDuration):1,o=t.swing>0?Math.sin(Math.min(1,a)*Math.PI):0;this.rightArm.rotation.z=.22,this.rightArm.rotation.x=o>.01?-1.2*o:i*.75-.28;let s=t.reducedMotion?0:Math.abs(Math.sin(this.walkPhase))*.045*this.walkAmount;this.root.position.set(t.x,t.y+s,t.z),this.root.rotation.y=t.yaw}suitPiece(e,t,n,r,i,a,o,s){let c=dg(e,t,n,r,sg[xp.Iron].body,i,a,o);c.visible=!1,this.armor.push({mesh:c,trim:s})}},pg=new R(.48,-.46,-.88),mg=new qt(.08,-.38,.27),hg=.72,gg=1,_g=-.85,vg=-.16,yg=.48,bg=new R(-.42,-.38,-.74),xg=new qt(.18,.55,.08),Sg=new R(0,-.58,-.4),Cg=new qt(.35,0,0),wg={[xp.Iron]:{light:14476268,mid:10134704,dark:4081746},[xp.Gold]:{light:16769162,mid:13936714,dark:9071136}},Tg=.5/16;function Eg(e){let t=e%8,n=Math.floor(e/8);return{u0:(t+Tg)/8,u1:(t+1-Tg)/8,v0:1-(n+1-Tg)/8,v1:1-(n+Tg)/8}}function Dg(e,t){let n=[Fl[t],Fl[t],Pl[t],Il[t],Fl[t],Fl[t]],r=e.getAttribute(`uv`),i=[[0,1],[1,1],[0,0],[1,0]];for(let e=0;e<6;e++){let{u0:t,u1:a,v0:o,v1:s}=Eg(n[e]);for(let n=0;n<4;n++){let c=e*4+n;r.setXY(c,t+i[n][0]*(a-t),o+i[n][1]*(s-o))}}r.needsUpdate=!0}function Og(e,t){let n=new B(t),r=[.74,.62,1,.42,.88,.7],i=new Float32Array(e.attributes.position.count*3);for(let e=0;e<6;e++){let t=n.clone().multiplyScalar(r[e]);for(let n=0;n<4;n++){let r=(e*4+n)*3;i[r]=t.r,i[r+1]=t.g,i[r+2]=t.b}}e.setAttribute(`color`,new er(i,3))}function kg(e,t,n,r){let i=new bi(e,t,n);Og(i,r);let a=new V(i,new Er({vertexColors:!0,fog:!1}));return a.renderOrder=10,a}var Ag=class{camera;root=new fn;heldRoot=new fn;vestRoot=new fn;heldMesh;hammer=new V(kh(yp.Wood),new Er({vertexColors:!0,fog:!1}));vestMetal=new Map;swayPhase=0;plateFlash=0;tier=yp.Wood;plates=xp.None;heldBlock=null;firstPerson=!0;vestFlash=null;constructor(e,t){this.camera=e,this.root.add(this.hammer),this.root.position.copy(pg),this.root.rotation.copy(mg),this.root.scale.setScalar(hg),e.add(this.root);let n=new bi(.22,.22,.22);this.heldMesh=new V(n,new Er({map:t.texture,alphaTest:.5,fog:!1})),this.heldMesh.renderOrder=10,this.heldRoot.add(this.heldMesh),this.heldRoot.position.copy(bg),this.heldRoot.rotation.copy(xg),this.heldRoot.visible=!1,e.add(this.heldRoot),this.buildVest(),this.vestRoot.position.copy(Sg),this.vestRoot.rotation.copy(Cg),this.vestRoot.visible=!1,e.add(this.vestRoot);for(let e of[this.root,this.heldRoot,this.vestRoot])e.traverse(e=>e.layers.set(gg))}setFirstPerson(e){e!==this.firstPerson&&(this.firstPerson=e,this.applyVisibility())}render(e,t){if(!this.firstPerson)return;let n=this.camera.layers.mask,r=e.autoClear,i=e.info.autoReset,a=t.background;try{e.autoClear=!1,e.info.autoReset=!1,t.background=null,e.clearDepth(),this.camera.layers.set(gg),e.render(t,this.camera)}finally{this.camera.layers.mask=n,e.autoClear=r,e.info.autoReset=i,t.background=a}}setHeld(e){e!==this.heldBlock&&(this.heldBlock=e,this.applyVisibility(),e!==null&&Dg(this.heldMesh.geometry,e))}setPlates(e){if(e===this.plates||(this.plates=e,this.applyVisibility(),e===xp.None))return;let t=wg[e];for(let[e,n]of this.vestMetal)Og(e.geometry,t[n]),e.geometry.attributes.color.needsUpdate=!0}setTier(e){e!==this.tier&&(this.tier=e,this.hammer.geometry.dispose(),this.hammer.geometry=kh(e))}applyVisibility(){this.root.visible=this.firstPerson,this.heldRoot.visible=this.firstPerson&&this.heldBlock!==null,this.vestRoot.visible=this.firstPerson&&this.plates!==xp.None}buildVest(){let e=12173512,t=5922920,n=(e,t,n,r,i,a,o,s)=>{let c=kg(e,t,n,r);c.position.set(i,a,o),c.renderOrder=9,this.vestMetal.set(c,s),this.vestRoot.add(c)};n(.42,.28,.14,9147034,0,0,0,`mid`),n(.44,.04,.16,e,0,.14,.01,`light`),n(.16,.1,.12,t,-.2,.16,0,`dark`),n(.16,.1,.12,t,.2,.16,0,`dark`),n(.08,.2,.03,e,0,.02,.08,`light`),this.vestFlash=new V(new bi(.46,.32,.18),new Er({color:16777215,transparent:!0,opacity:0,depthTest:!1,fog:!1})),this.vestFlash.renderOrder=11,this.vestRoot.add(this.vestFlash)}flashPlates(){this.plates!==xp.None&&(this.plateFlash=.24,this.vestFlash&&this.vestFlash.material.color.setHex(this.plates===xp.Gold?16769162:15265526))}update(e,t,n,r){let i=n>0?1-Math.min(1,t/n):1,a=i<.18?0:i<.52?(i-.18)/.34:(1-i)/.48,o=Math.sin(Math.max(0,a)*Math.PI/2),s=i<.18?Math.sin(i/.18*Math.PI):0;this.swayPhase+=e*r*1.8;let c=Math.min(r/6,1);this.root.position.set(pg.x+Math.cos(this.swayPhase)*.014*c-o*.15,pg.y+Math.abs(Math.sin(this.swayPhase))*.012*c-o*.1+s*.035,pg.z+Math.sin(this.swayPhase)*.008*c-o*.16+s*.025),this.root.rotation.x=Yu(mg.x,mg.x+_g,o)+s*.12,this.root.rotation.y=Yu(mg.y,mg.y+vg,o),this.root.rotation.z=Yu(mg.z,mg.z+yg,o),this.heldRoot.position.set(bg.x-Math.cos(this.swayPhase)*.016*c+o*.03,bg.y+Math.abs(Math.sin(this.swayPhase))*.014*c-o*.05,bg.z-o*.04),this.heldRoot.rotation.x=xg.x+o*.35;let l=this.plateFlash>0?this.plateFlash/.24:0;this.plateFlash>0&&(this.plateFlash=Math.max(0,this.plateFlash-e)),this.vestFlash&&(this.vestFlash.material.opacity=l*.65),this.vestRoot.scale.setScalar(1+l*.14),this.vestRoot.position.set(Sg.x+Math.cos(this.swayPhase)*.008*c,Sg.y+Math.abs(Math.sin(this.swayPhase))*.01*c+l*.03,Sg.z+l*.05)}},jg=class{root;nameLabel;phaseLabel;vulnerableLabel;fill;chip;fraction=1;vulnerable=!1;constructor(e){this.root=e,this.nameLabel=e.querySelector(`.boss-bar-name`),this.phaseLabel=e.querySelector(`.boss-bar-phase`),this.vulnerableLabel=e.querySelector(`.boss-bar-vulnerable`),this.fill=e.querySelector(`.boss-bar-fill`),this.chip=e.querySelector(`.boss-bar-chip`)}show(e){this.nameLabel.textContent=e,this.root.classList.remove(`hidden`)}hide(){this.root.classList.add(`hidden`),this.setVulnerable(!1)}setPhase(e){this.phaseLabel.textContent!==e&&(this.phaseLabel.textContent=e)}setVulnerable(e){e!==this.vulnerable&&(this.vulnerable=e,this.root.classList.toggle(`vulnerable`,e),this.vulnerableLabel.classList.toggle(`hidden`,!e))}update(e){let t=Math.max(0,Math.min(1,e));t!==this.fraction&&(this.fraction=t,this.fill.style.transform=`scaleX(${t})`,this.chip.style.transform=`scaleX(${t})`)}};function Mg(e){let t=document.getElementById(e);if(!t)throw Error(`Missing UI element #${e}`);return t}var Ng=class{root=Mg(`compass`);arrow=Mg(`compass-arrow`);label=Mg(`compass-label`);update(e,t,n){this.root.classList.toggle(`hidden`,!e),e&&(this.arrow.style.transform=`rotate(${t}rad)`,this.label.textContent!==n&&(this.label.textContent=n))}},Pg=class{root;visible=!1;accumulator=0;constructor(e){this.root=e}toggle(){this.visible=!this.visible,this.root.classList.toggle(`hidden`,!this.visible)}update(e,t){this.visible&&(this.accumulator+=e,!(this.accumulator<.2)&&(this.accumulator=0,this.root.textContent=t().join(`
`)))}},Fg=40,Ig=class{atlas;slots=[];activeIndex=-1;constructor(e,t){this.atlas=t;for(let t=0;t<9;t++){let t=document.createElement(`div`);t.className=`slot`;let n=document.createElement(`canvas`);n.width=Fg,n.height=Fg;let r=document.createElement(`span`);r.className=`count`,t.append(n,r),e.append(t);let i=n.getContext(`2d`);if(!i)throw Error(`2D canvas context unavailable`);i.imageSmoothingEnabled=!1,this.slots.push({root:t,context:i,count:r,renderedBlock:null})}}update(e){this.activeIndex!==e.selected&&(this.slots[this.activeIndex]?.root.classList.remove(`active`),this.slots[e.selected].root.classList.add(`active`),this.activeIndex=e.selected);for(let t=0;t<this.slots.length;t++){let n=this.slots[t],r=e.slots[t],i=r.count>0?r.block:null;n.renderedBlock!==i&&(n.renderedBlock=i,n.context.clearRect(0,0,Fg,Fg),i!==null&&this.drawIcon(n.context,i));let a=e.unlimited&&i!==null?`∞`:r.count>1?String(r.count):``;n.count.textContent!==a&&(n.count.textContent=a)}}drawIcon(e,t){let n=Fl[t],r=n%8*16,i=Math.floor(n/8)*16;e.drawImage(this.atlas.canvas,r,i,16,16,0,0,Fg,Fg)}},Lg=10,Rg=[`idle`,`block`,`attack`,`altar`,`heal`,`craft`,`smith`,`rest`];function zg(e){let t=document.getElementById(e);if(!t)throw Error(`Missing UI element #${e}`);return t}function Bg(e,t){if(e===null||t<=0)return``;let n=Ll(e).name;return zl(e)?n+` · direito: comer`:Ul(e)?n+` · coloque e clique para descansar`:Wl(e)?n+` · coloque e clique com o direito para abrir`:Bl(e)||e===11||e===12?n+` · C: criar itens`:Hl(e)?n+` · direito: colocar · C: criar cama`:n+` · direito: colocar`}var Vg=class{reducedEffects=!1;bossBar;compass;debug;root=zg(`hud`);healthRoot=zg(`health`);hintRoot=zg(`hint`);objectiveRoot=zg(`objective`);hammerRoot=zg(`hammer-label`);slotHintRoot=zg(`slot-hint`);seedRoot=zg(`seed-label`);phaseRoot=zg(`phase-label`);waterVeil=zg(`water-veil`);crosshair=zg(`crosshair`);flash=zg(`damage-flash`);hotbar;hearts=[];lastHealth=-1;lastHammer=-1;lastPlates=xp.None;lastHint=``;flashTimer=0;hintTimer=0;crosshairMode=`idle`;constructor(e){this.hotbar=new Ig(zg(`hotbar`),e),this.bossBar=new jg(zg(`boss-bar`)),this.compass=new Ng,this.debug=new Pg(zg(`debug`));for(let e=0;e<Lg;e++){let e=document.createElement(`div`);e.className=`heart`,this.healthRoot.append(e),this.hearts.push(e)}}setVisible(e){this.root.classList.toggle(`hidden`,!e)}update(e,t,n,r,i){this.hotbar.update(t),this.updateHealth(n),this.updateLoadout(t,r,i),this.flashTimer>0&&(this.flashTimer=Math.max(0,this.flashTimer-e),this.flashTimer===0&&(this.flash.style.opacity=`0`)),this.hintTimer>0&&(this.hintTimer=Math.max(0,this.hintTimer-e),this.hintTimer===0&&this.hintRoot.classList.remove(`show`))}flashDamage(e=1){this.flash.classList.remove(`heal`,`plate`),this.flash.style.opacity=String(this.reducedEffects?.12:Math.min(.9,.35+e*.2)),this.flashTimer=.35}flashHeal(){this.flash.classList.remove(`plate`),this.flash.classList.add(`heal`),this.flash.style.opacity=this.reducedEffects?`0.1`:`0.55`,this.flashTimer=.35}flashPlates(){this.flash.classList.remove(`heal`),this.flash.classList.add(`plate`),this.flash.style.opacity=this.reducedEffects?`0.1`:`0.5`,this.flashTimer=.28}get hintVisible(){return this.hintTimer>0}showHint(e,t=4){this.hintRoot.textContent!==e&&(this.hintRoot.textContent=e),this.hintRoot.classList.add(`show`),this.hintTimer=t}hideHint(){this.hintTimer=0,this.hintRoot.classList.remove(`show`)}setCrosshair(e){if(e!==this.crosshairMode){this.crosshairMode=e;for(let t of Rg)this.crosshair.classList.toggle(t,t===e)}}setUnderwater(e){this.waterVeil.classList.toggle(`show`,e)}setSeed(e){let t=`Mundo ${e}`;this.seedRoot.textContent!==t&&(this.seedRoot.textContent=t)}setPhase(e){this.phaseRoot.textContent!==e&&(this.phaseRoot.textContent=e)}setObjective(e){if(!e){this.objectiveRoot.classList.remove(`show`);return}this.objectiveRoot.textContent!==e&&(this.objectiveRoot.textContent=e),this.objectiveRoot.classList.add(`show`)}updateLoadout(e,t,n){(t!==this.lastHammer||n!==this.lastPlates)&&(this.lastHammer=t,this.lastPlates=n,this.hammerRoot.textContent=n===xp.None?bp[t].name:`${bp[t].name} · ${Sp[n].name.toLowerCase()}`);let r=e.selectedSlot,i=e.unlimited&&r.block!==null?`${Ll(r.block).name} ∞`:Bg(r.block,r.count);i!==this.lastHint&&(this.lastHint=i,this.slotHintRoot.textContent=i)}updateHealth(e){let t=Math.max(0,Math.ceil(e*2)/2);if(t!==this.lastHealth){this.lastHealth=t;for(let e=0;e<Lg;e++){let n=t-e*2,r=this.hearts[e];r.classList.toggle(`empty`,n<=0),r.classList.toggle(`half`,n>0&&n<2)}}}},Hg=class{root;title;text;button;secondary;controls;settings;volume;mute;sensitivity;volumeValue;sensitivityValue;reducedMotion;reducedEffects;quality;narrator;music;extras=document.createElement(`div`);back=document.createElement(`button`);action=null;secondaryAction=null;current={..._m};escapeAction=null;onSettingsChange=null;constructor(){this.root=document.getElementById(`overlay`),this.title=this.root.querySelector(`.title`),this.text=document.getElementById(`overlay-text`),this.button=document.getElementById(`overlay-button`),this.secondary=document.getElementById(`overlay-secondary`),this.controls=document.getElementById(`controls`),this.settings=document.getElementById(`settings`),this.volume=document.getElementById(`setting-volume`),this.mute=document.getElementById(`setting-mute`),this.sensitivity=document.getElementById(`setting-sensitivity`),this.volumeValue=document.getElementById(`setting-volume-value`),this.sensitivityValue=document.getElementById(`setting-sensitivity-value`),this.reducedMotion=document.getElementById(`setting-motion`),this.reducedEffects=document.getElementById(`setting-effects`),this.quality=document.getElementById(`setting-quality`),this.narrator=document.getElementById(`setting-narrator`),this.music=document.getElementById(`setting-music`),this.root.setAttribute(`role`,`dialog`),this.root.setAttribute(`aria-modal`,`true`),this.title.id=`overlay-title`,this.root.setAttribute(`aria-labelledby`,this.title.id),this.extras.className=`play-extras`,this.controls.before(this.extras),this.back.textContent=`Voltar aos modos`,this.back.classList.add(`hidden`),this.secondary.parentElement?.append(this.back),this.button.addEventListener(`click`,()=>this.action?.()),this.secondary.addEventListener(`click`,()=>this.secondaryAction?.()),this.volume.addEventListener(`input`,()=>this.commit()),this.sensitivity.addEventListener(`input`,()=>this.commit()),this.mute.addEventListener(`change`,()=>this.commit()),this.reducedMotion.addEventListener(`change`,()=>this.commit()),this.reducedEffects.addEventListener(`change`,()=>this.commit()),this.quality.addEventListener(`change`,()=>this.commit()),this.narrator.addEventListener(`change`,()=>this.commit()),this.music.addEventListener(`change`,()=>this.commit()),window.addEventListener(`keydown`,e=>{if(this.visible){if(e.code===`Escape`)e.preventDefault(),e.stopImmediatePropagation(),this.escapeAction?.();else if(e.code===`Tab`){let t=[...this.root.querySelectorAll(`button, input, select`)].filter(e=>!e.closest(`.hidden`)&&!e.hasAttribute(`disabled`)),n=t[0],r=t.at(-1);e.shiftKey&&document.activeElement===n?(e.preventDefault(),r?.focus()):!e.shiftKey&&document.activeElement===r&&(e.preventDefault(),n?.focus())}}})}get visible(){return!this.root.classList.contains(`hidden`)}bindSettings(e){this.current=e,this.syncInputs()}show(e,t,n){this.extras.replaceChildren(),this.back.classList.add(`hidden`),this.back.onclick=null,this.title.textContent=e.title,this.text.textContent=e.text,this.button.textContent=e.button,this.secondary.textContent=e.secondary??`Nova partida`,this.secondary.classList.toggle(`hidden`,e.secondary===void 0),this.controls.classList.toggle(`hidden`,e.showControls===!1),this.settings.classList.toggle(`hidden`,e.showSettings!==!0),this.action=t,this.secondaryAction=n??null,this.escapeAction=e.onEscape??n??t,this.syncInputs(),this.root.classList.remove(`hidden`),this.button.focus({preventScroll:!0})}setBackAction(e,t=`Voltar aos modos`){this.back.textContent=t,this.back.classList.remove(`hidden`),this.back.onclick=e,this.escapeAction=e}addAction(e,t,n={}){let r=document.createElement(`button`);if(r.type=`button`,r.textContent=e,r.disabled=n.disabled===!0,n.icon){r.classList.add(`menu-card`);let e=document.createElement(`span`);e.className=`menu-icon`,e.textContent=n.icon,e.setAttribute(`aria-hidden`,`true`),r.prepend(e)}if(n.description){let e=document.createElement(`small`);e.textContent=n.description,r.append(e)}r.onclick=t,this.extras.append(r)}addContent(e){this.extras.append(e)}hide(){this.root.contains(document.activeElement)&&document.activeElement?.blur(),this.root.classList.add(`hidden`)}syncInputs(){this.volume.value=String(Math.round(this.current.volume*100)),this.mute.checked=this.current.muted,this.sensitivity.value=String(Math.round(this.current.sensitivity*100)),this.reducedMotion.checked=this.current.reducedMotion,this.reducedEffects.checked=this.current.reducedEffects,this.quality.value=this.current.quality,this.narrator.checked=this.current.narrator,this.music.checked=this.current.music,this.refreshLabels()}commit(){this.current={volume:Number(this.volume.value)/100,muted:this.mute.checked,sensitivity:Number(this.sensitivity.value)/100,reducedMotion:this.reducedMotion.checked,reducedEffects:this.reducedEffects.checked,quality:this.quality.value,narrator:this.narrator.checked,music:this.music.checked},this.refreshLabels(),bm(this.current),this.onSettingsChange?.(this.current)}refreshLabels(){this.volumeValue.textContent=`${Math.round(this.current.volume*100)}%`,this.sensitivityValue.textContent=`${this.current.sensitivity.toFixed(1)}×`}},Ug=class e{paintButton;buildButton;mode=!1;color=W.Red;onChange=null;buttons=new Map;constructor(e,t,n){this.paintButton=t,this.buildButton=n;for(let t of kp){let n=document.createElement(`button`);n.type=`button`,n.className=`paint-color`,n.style.background=t.hex,n.setAttribute(`aria-label`,t.name),n.title=t.name,n.addEventListener(`click`,()=>{this.color=t.block,this.mode=!0,this.refresh(),this.onChange?.()}),this.buttons.set(t.block,n),e.append(n)}t.addEventListener(`click`,()=>{this.mode=!0,this.refresh(),this.onChange?.()}),n.addEventListener(`click`,()=>{this.mode=!1,this.refresh(),this.onChange?.()}),this.refresh()}static fromDocument(){let t=document.getElementById(`paint-colors`),n=document.getElementById(`mode-paint`),r=document.getElementById(`mode-build`);if(!(t instanceof HTMLElement)||!(n instanceof HTMLButtonElement)||!(r instanceof HTMLButtonElement))throw Error(`Missing paint palette`);return new e(t,n,r)}setMode(e){this.mode=e,this.refresh()}refresh(){this.paintButton.setAttribute(`aria-pressed`,String(this.mode)),this.buildButton.setAttribute(`aria-pressed`,String(!this.mode)),this.paintButton.classList.toggle(`is-on`,this.mode),this.buildButton.classList.toggle(`is-on`,!this.mode);for(let[e,t]of this.buttons)t.setAttribute(`aria-pressed`,String(this.mode&&e===this.color)),t.classList.toggle(`is-on`,this.mode&&e===this.color)}},Wg=18,Gg=Wg**3;function Kg(e,t,n){return((t+1)*Wg+(n+1))*Wg+(e+1)}var qg=8,Jg=1,Yg=2,Xg=1,Zg=2,Qg=class{world;scene;materials;waterMaterial;renderDistance=qg;workers=[];workerLoad=[];meshes=new Map;waterMeshes=new Map;pending=new Map;queue=[];queued=new Set;meshedChunks=new Set;volumePool=[];offsets=[];nextJobId=1;discardBeforeJobId=0;lastChunkX=NaN;lastChunkZ=NaN;constructor(e,t,n,r){this.world=e,this.scene=t,this.materials=n,this.waterMaterial=r;let i=Math.max(1,Math.min(4,(navigator.hardwareConcurrency??4)-1));for(let e=0;e<i;e++){let t=new Worker(new URL(``+new URL(`mesher.worker-BxH8iNmP.js`,import.meta.url).href,``+import.meta.url),{type:`module`});t.onmessage=t=>this.handleMeshResult(t.data,e),this.workers.push(t),this.workerLoad.push(0)}for(let e=-9;e<=9;e++)for(let t=-9;t<=9;t++){let n=Math.hypot(t,e);n<=9&&this.offsets.push({dx:t,dz:e,distance:n})}this.offsets.sort((e,t)=>e.distance-t.distance)}get queuedJobs(){return this.queue.length}get activeJobs(){return this.pending.size}get loadedChunks(){return this.world.chunks.size}setRenderDistance(e){e!==this.renderDistance&&(this.renderDistance=Math.max(2,Math.min(qg,e)),this.lastChunkX=this.lastChunkZ=NaN)}preload(e,t,n){let r=Math.floor(e/16),i=Math.floor(t/16);for(let e=-n-1;e<=n+1;e++)for(let t=-n-1;t<=n+1;t++)this.world.ensureChunk(r+t,i+e);for(let e=-n;e<=n;e++)for(let t=-n;t<=n;t++)this.enqueueChunk(r+t,i+e);this.dispatch()}update(e,t){let n=Math.floor(e/16),r=Math.floor(t/16);this.generateAround(n,r),this.meshAround(n,r);for(let e of this.world.takeDirtySections())this.enqueueSection(e.cx,e.cz,e.sy);(n!==this.lastChunkX||r!==this.lastChunkZ)&&(this.unloadFar(n,r),this.lastChunkX=n,this.lastChunkZ=r),this.dispatch()}regenerateWhere(e){let t=[];for(let n of[...this.world.chunks.values()])e(n.cx,n.cz)&&(t.push({cx:n.cx,cz:n.cz}),this.evictChunk(n.cx,n.cz));let n=new Set;for(let{cx:e,cz:r}of t){this.world.ensureChunk(e,r);for(let t=-1;t<=1;t++)for(let i=-1;i<=1;i++)this.world.ensureChunk(e+i,r+t),n.add(iu(e+i,r+t))}for(let e of n){let[t,n]=e.split(`,`).map(Number);this.meshedChunks.delete(e),this.enqueueChunk(t,n)}this.dispatch()}reset(){this.discardBeforeJobId=this.nextJobId,this.queue.length=0,this.queued.clear(),this.pending.clear(),this.meshedChunks.clear(),this.lastChunkX=NaN,this.lastChunkZ=NaN,this.clearMeshMap(this.meshes),this.clearMeshMap(this.waterMeshes)}dispose(){for(let e of this.workers)e.terminate();this.clearMeshMap(this.meshes),this.clearMeshMap(this.waterMeshes)}generateAround(e,t){let n=Xg;for(let{dx:r,dz:i}of this.offsets){if(Math.hypot(r,i)>this.renderDistance+Jg)break;if(n===0)return;let a=e+r,o=t+i;this.world.chunks.has(iu(a,o))||(this.world.ensureChunk(a,o),--n)}}meshAround(e,t){for(let{dx:n,dz:r,distance:i}of this.offsets){if(i>this.renderDistance)break;this.enqueueChunk(e+n,t+r)}}enqueueChunk(e,t){let n=iu(e,t);if(this.meshedChunks.has(n))return;let r=this.world.getChunk(e,t);if(r?.generated&&!(!this.world.getChunk(e-1,t)||!this.world.getChunk(e+1,t)||!this.world.getChunk(e,t-1)||!this.world.getChunk(e,t+1))){this.meshedChunks.add(n);for(let n=0;n<8;n++)r.isSectionEmpty(n)||this.enqueueSection(e,t,n)}}enqueueSection(e,t,n){let r=au(e,t,n),i=this.pending.get(r);if(i){i.stale=!0;return}this.queued.has(r)||(this.queued.add(r),this.queue.push(r))}dispatch(){for(;this.queue.length>0;){let e=this.pickWorker();if(e<0)return;let t=this.queue.shift();this.queued.delete(t);let[n,r,i]=t.split(`,`).map(Number);if(!this.world.getChunk(n,r))continue;let a=this.volumePool.pop()??new Uint8Array(Gg);this.fillVolume(a,n,r,i);let o={jobId:this.nextJobId++,key:t,volume:a};this.pending.set(t,{key:t,jobId:o.jobId,stale:!1}),this.workerLoad[e]+=1,this.workers[e].postMessage(o,[a.buffer])}}pickWorker(){let e=-1,t=Zg;for(let n=0;n<this.workers.length;n++)this.workerLoad[n]<t&&(e=n,t=this.workerLoad[n]);return e}fillVolume(e,t,n,r){let i=this.world.getChunk(t,n),a=t*16,o=n*16,s=r*16;for(let t=-1;t<=16;t++)for(let n=-1;n<=16;n++)for(let r=-1;r<=16;r++){let c=i!==void 0&&r>=0&&r<16&&n>=0&&n<16&&s+t>=0&&s+t<128;e[Kg(r,t,n)]=c?i.get(r,s+t,n):this.world.getBlock(a+r,s+t,o+n)}}handleMeshResult(e,t){if(--this.workerLoad[t],this.volumePool.push(e.volume),e.jobId<this.discardBeforeJobId){this.dispatch();return}let n=this.pending.get(e.key);if(!n||n.jobId!==e.jobId){this.dispatch();return}this.pending.delete(e.key);let[r,i,a]=e.key.split(`,`).map(Number);this.world.getChunk(r,i)&&(this.applyMesh(e,r,i,a),n.stale&&this.enqueueSection(r,i,a)),this.dispatch()}applyMesh(e,t,n,r){if(e.indices.length===0&&e.waterIndices.length===0){this.removeMesh(this.meshes,e.key),this.removeMesh(this.waterMeshes,e.key);return}if(e.indices.length>0){let i=new hr;i.setAttribute(`position`,new er(e.positions,3)),i.setAttribute(`normal`,new er(e.normals,3)),i.setAttribute(`uv`,new er(e.uvs,2)),i.setAttribute(`color`,new er(e.colors,3)),i.setIndex(new er(e.indices,1));let a=e.indices.length-e.litIndexCount;e.litIndexCount>0&&i.addGroup(0,e.litIndexCount,0),a>0&&i.addGroup(e.litIndexCount,a,1),i.computeBoundingSphere(),this.upsertMesh(this.meshes,e.key,i,this.materials,t,n,r)}else this.removeMesh(this.meshes,e.key);if(e.waterIndices.length>0){let i=new hr;i.setAttribute(`position`,new er(e.waterPositions,3)),i.setAttribute(`normal`,new er(e.waterNormals,3)),i.setAttribute(`uv`,new er(e.waterUvs,2)),i.setAttribute(`color`,new er(e.waterColors,3)),i.setIndex(new er(e.waterIndices,1)),i.computeBoundingSphere(),this.upsertMesh(this.waterMeshes,e.key,i,this.waterMaterial,t,n,r)}else this.removeMesh(this.waterMeshes,e.key)}upsertMesh(e,t,n,r,i,a,o){let s=e.get(t);if(s){s.geometry.dispose(),s.geometry=n;return}let c=new V(n,r);c.position.set(i*16,o*16,a*16),c.matrixAutoUpdate=!1,c.updateMatrix(),this.scene.add(c),e.set(t,c)}removeMesh(e,t){let n=e.get(t);n&&(this.scene.remove(n),n.geometry.dispose(),e.delete(t))}clearMeshMap(e){for(let t of e.values())this.scene.remove(t),t.geometry.dispose();e.clear()}evictChunk(e,t){for(let n=0;n<8;n++){let r=au(e,t,n);if(this.removeMesh(this.meshes,r),this.removeMesh(this.waterMeshes,r),this.pending.delete(r),this.queued.has(r)){this.queued.delete(r);let e=this.queue.indexOf(r);e>=0&&this.queue.splice(e,1)}}this.meshedChunks.delete(iu(e,t)),this.world.unloadChunk(e,t)}unloadFar(e,t){let n=this.renderDistance+Yg;for(let r of[...this.world.chunks.values()])if(!(Math.hypot(r.cx-e,r.cz-t)<=n)){for(let e=0;e<8;e++){let t=au(r.cx,r.cz,e);this.removeMesh(this.meshes,t),this.removeMesh(this.waterMeshes,t)}this.meshedChunks.delete(iu(r.cx,r.cz)),this.world.unloadChunk(r.cx,r.cz)}}};function $g(e){let t=e.gentle?.4:1;e.deathsSinceBreak>0&&(t*=.6),e.health<=8&&(t*=.7);let n=e.gentle?.4:1;return Math.max(.25,Math.min(n,t))}function e_(e){return e.extras?.some(e=>e.id===W.Mushroom)===!0}var t_=[[1,0],[-1,0],[0,1],[0,-1]],n_=class{seed;broken=0;gentle=!0;allowMobs=!0;pace=`classic`;goals=new Set;pendingMob=0;deathsSinceBreak=0;reliefMushroom=!1;onWarning=null;constructor(e){this.seed=e}reset(e,t=`classic`){this.pace=t,this.goals.clear(),this.seed=e,this.broken=0,this.pendingMob=0,this.deathsSinceBreak=0,this.reliefMushroom=!1}noteDeath(){this.deathsSinceBreak+=1,this.reliefMushroom=!0}load(e){this.pendingMob=0,this.deathsSinceBreak=0,this.reliefMushroom=!1,this.broken=Math.max(0,e.broken|0),this.pace=e.pace??`classic`,this.goals.clear();for(let t of e.goals??[])this.goals.add(t)}snapshot(){return{broken:this.broken,phase:this.phaseIndex,pace:this.pace,goals:[...this.goals]}}get phase(){return Tf(this.broken,this.pace).phase}get phaseIndex(){return Tf(this.broken,this.pace).index}get label(){return jf(this.broken,this.pace)}get ruinUnlocked(){return Of(this.broken,this.pace).ruin}get shrineUnlocked(){return Of(this.broken,this.pace).shrine}get ruinAt(){return Ef(`ruin`,this.pace)}get shrineAt(){return Ef(`shrine`,this.pace)}get beaconUnlocked(){return Of(this.broken,this.pace).beacon}get beaconAt(){return Ef(`beacon`,this.pace)}goalProgress(e){let t=0,n=0;for(let[r,i]of e.edits){let[e,a,o]=r.split(`,`).map(Number);Math.abs(e)>8||Math.abs(o)>8||!Rl(i)||Ll(i).contactDamage||(a===72&&(e!==0||o!==0)&&t++,a>72&&a<=78&&[W.Planks,W.Log,W.Cobblestone,W.Glass,W.Moss].includes(i)&&n++)}return[{id:`platform`,label:`Amplie a ilha: 8 blocos de chão`,current:t,target:8,reward:W.Planks,count:16},{id:`shelter`,label:`Comece um abrigo: 16 peças acima do chão`,current:n,target:16,reward:W.Glass,count:8}]}claimGoals(e,t){let n=[];for(let r of this.goalProgress(e))this.goals.has(r.id)||r.current<r.target||(this.goals.add(r.id),t.inventory.add(r.reward,r.count),n.push(r.label));return n}placeInitial(e){e.setBlock(0,71,0,W.Bedrock),e.setBlock(0,72,0,Af())}break(e,t,n){let r=Of(this.broken,this.pace);this.broken+=1;let i=Of(this.broken,this.pace),a=this.phase,o=kf(a.blocks,Ku(this.broken,11,this.seed));e.setBlock(0,72,0,o),this.applyExtras(e,t,a);let s=null;i.beacon&&!r.beacon?s=`beacon`:i.shrine&&!r.shrine?s=`shrine`:i.ruin&&!r.ruin&&(s=`ruin`);let c=this.trySpawnMob(n,a,t);return this.deathsSinceBreak=0,{next:o,unlocked:s,spawnedMob:c}}applyExtras(e,t,n){if(t.health.current<=8&&(this.reliefMushroom=!0),n.extras){for(let r of n.extras)if(!(Ku(this.broken,r.id*19+(r.neighbor?7:3),this.seed)>=r.chance)&&!(this.gentle&&r.id===W.Lava)){if(r.neighbor){this.placeNeighbor(e,r.id);continue}t.inventory.add(r.id,1)}}this.reliefMushroom&&e_(n)&&t.inventory.add(W.Mushroom,1),this.reliefMushroom=!1}placeNeighbor(e,t){let n=Math.floor(Ku(this.broken,t,this.seed)*t_.length);for(let r=0;r<t_.length;r++){let[i,a]=t_[(n+r)%t_.length],o=0+i,s=0+a;if(e.getBlock(o,72,s)===W.Air){e.setBlock(o,72,s,t);return}}}trySpawnMob(e,t,n){if(!this.allowMobs||t.mobChance<=0||this.pendingMob>0)return!1;let r=$g({gentle:this.gentle,deathsSinceBreak:this.deathsSinceBreak,health:n.health.current});if(Ku(this.broken,97,this.seed)>=t.mobChance*r)return!1;let i=0;for(let t of e.entities)!t.removed&&t instanceof Od&&!t.clearedOnDeath&&(i+=1);return i>=4?!1:(this.pendingMob=this.gentle?3:2,this.onWarning?.(),!1)}cancelWarning(){this.pendingMob=0}update(e,t,n,r){if(this.pendingMob<=0||(this.pendingMob-=e,this.pendingMob>0))return;let i=this.phase,a=n.entities.filter(e=>!e.removed&&e instanceof Od&&!e.clearedOnDeath);if(a.length>=4){this.pendingMob=1;return}let o=this.mobSpawn(t,r,a);if(!o){this.pendingMob=1;return}n.add(new Od(o.x,o.y,o.z,{lifetime:90,color:i.mobTint,clearedOnDeath:!1}))}mobSpawn(e,t,n=[]){let r=Math.floor(Ku(this.broken,53,this.seed)*t_.length);for(let i=0;i<t_.length;i++){let[a,o]=t_[(r+i)%t_.length],s=0+a,c=0+o;if(t&&Math.hypot(t.position.x-s-.5,t.position.z-c-.5)<1||n.some(e=>Math.hypot(e.position.x-s-.5,e.position.z-c-.5)<1))continue;let l=e.getBlock(s,72,c),u=e.getBlock(s,73,c);if(Rl(l)&&Ll(l).contactDamage===0&&u===W.Air&&e.getBlock(s,74,c)===W.Air)return{x:s+.5,y:73,z:c+.5};let d=e.getBlock(s,71,c);if(l===W.Air&&u===W.Air&&Rl(d)&&Ll(d).contactDamage===0)return{x:s+.5,y:72,z:c+.5}}return null}};function r_(e,t,n){return`${e},${t},${n}`}var i_=class extends Map{byChunk=new Map;set(e,t){super.set(e,t);let n=a_(e),r=this.byChunk.get(n);return r||(r=new Map,this.byChunk.set(n,r)),r.set(e,t),this}delete(e){let t=super.delete(e),n=a_(e),r=this.byChunk.get(n);return r&&(r.delete(e),r.size===0&&this.byChunk.delete(n)),t}clear(){super.clear(),this.byChunk.clear()}};function a_(e){let t=e.indexOf(`,`),n=e.lastIndexOf(`,`),r=Number(e.slice(0,t)),i=Number(e.slice(n+1));return iu(r>>4,i>>4)}var o_=class{generator;chunks=new Map;torches=new i_;edits=new i_;onEdit=null;dirty=new Map;constructor(e){this.generator=e}getChunk(e,t){return this.chunks.get(iu(e,t))}ensureChunk(e,t){let n=iu(e,t),r=this.chunks.get(n);if(!r){r=new ou(e,t),this.generator.generate(r),this.chunks.set(n,r);for(let n of this.generator.victorySignsIn(e,t))n.id===W.Torch&&this.trackTorch(n.x,n.y,n.z,W.Air,W.Torch);this.applyEditsToChunk(r)}return r}unloadChunk(e,t){this.chunks.delete(iu(e,t));let n=this.torches.byChunk.get(iu(e,t));if(n)for(let e of[...n.keys()])this.torches.delete(e)}clear(){this.chunks.clear(),this.dirty.clear(),this.torches.clear(),this.edits.clear()}reseed(e,t=this.generator.mode){this.generator=new If(e,t),this.clear()}getBlock(e,t,n){if(t<0)return this.generator.mode===`adventure`?W.Bedrock:W.Air;if(t>=128)return W.Air;let r=e>>4,i=n>>4,a=this.chunks.get(iu(r,i));return a?a.get(e-r*16,t,n-i*16):W.Air}restoreStructure(e,t,n,r){let i=this.edits.get(r_(e,t,n));if(i!==void 0&&i!==W.Air)return!1;let a=this.setBlock(e,t,n,r);return this.edits.delete(r_(e,t,n)),a}stampStructure(e,t,n,r){return!this.edits.has(r_(e,t,n))&&this.restoreStructure(e,t,n,r)}setBlock(e,t,n,r){if(t<0||t>=128)return!1;let i=e>>4,a=n>>4,o=this.chunks.get(iu(i,a));if(!o)return!1;let s=e-i*16,c=n-a*16,l=o.get(s,t,c);return o.set(s,t,c,r)?(this.trackTorch(e,t,n,l,r),this.edits.set(r_(e,t,n),r),this.markDirtyAround(i,a,s,t,c),this.onEdit?.(),!0):!1}forEachNearbyTorch(e,t,n,r){let i=Math.floor(e/16),a=Math.floor(t/16),o=Math.ceil(n/16);for(let e=-o;e<=o;e++)for(let t=-o;t<=o;t++){let n=this.torches.byChunk.get(iu(i+t,a+e));if(n)for(let e of n.values())r(e)}}surfaceY(e,t){let n=e>>4,r=t>>4,i=this.chunks.get(iu(n,r));return i?i.heightAt(e-n*16,t-r*16):-1}takeDirtySections(){if(this.dirty.size===0)return[];let e=[...this.dirty.values()];return this.dirty.clear(),e}exportEdits(){let e=[];for(let[t,n]of this.edits){let[r,i,a]=t.split(`,`).map(Number);e.push({x:r,y:i,z:a,id:n})}return e}importEdits(e){this.edits.clear();for(let t of e)this.edits.set(r_(t.x,t.y,t.z),t.id)}applyEditsToChunk(e){let t=this.edits.byChunk.get(iu(e.cx,e.cz));if(t)for(let[n,r]of t){let[t,i,a]=n.split(`,`).map(Number),o=e.get(t-e.cx*16,i,a-e.cz*16);e.set(t-e.cx*16,i,a-e.cz*16,r)&&this.trackTorch(t,i,a,o,r)}}trackTorch(e,t,n,r,i){let a=`${e},${t},${n}`;r===W.Torch&&this.torches.delete(a),i===W.Torch&&this.torches.set(a,{x:e,y:t,z:n})}markDirty(e,t,n){n<0||n>=8||this.chunks.has(iu(e,t))&&this.dirty.set(`${e},${t},${n}`,{cx:e,cz:t,sy:n})}markDirtyAround(e,t,n,r,i){let a=r>>4;this.markDirty(e,t,a),r%16==0&&this.markDirty(e,t,a-1),(r+1)%16==0&&this.markDirty(e,t,a+1),n===0&&this.markDirty(e-1,t,a),n===15&&this.markDirty(e+1,t,a),i===0&&this.markDirty(e,t-1,a),i===15&&this.markDirty(e,t+1,a)}},s_=new Set([`F3`,`Tab`,`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`]),c_=class{seconds;held=0;constructor(e){this.seconds=e}update(e,t){if(e){let e=this.held;return this.held+=t,e<this.seconds&&this.held>=this.seconds?`fire`:null}let n=this.held;return this.held=0,n>0&&n<this.seconds?`tap`:null}},l_=class{canvas;held=new Set;pressed=new Set;buttonsHeld=new Set;buttonsPressed=new Set;requestId=0;requesting=!1;mouseDX=0;mouseDY=0;wheelDelta=0;locked=!1;onLockChange=null;onLockError=null;constructor(e){this.canvas=e,window.addEventListener(`keydown`,this.handleKeyDown),window.addEventListener(`keyup`,this.handleKeyUp),window.addEventListener(`blur`,this.handleBlur),document.addEventListener(`pointerlockchange`,this.handlePointerLockChange),document.addEventListener(`pointerlockerror`,this.handleLockError),e.addEventListener(`click`,()=>{this.locked||this.requestLock()}),e.addEventListener(`mousedown`,e=>{this.locked&&(this.buttonsHeld.add(e.button),this.buttonsPressed.add(e.button))}),window.addEventListener(`mouseup`,e=>this.buttonsHeld.delete(e.button)),window.addEventListener(`mousemove`,e=>{this.locked&&(this.mouseDX+=e.movementX,this.mouseDY+=e.movementY)}),e.addEventListener(`wheel`,e=>{this.locked&&(this.wheelDelta+=e.deltaY)},{passive:!0}),e.addEventListener(`contextmenu`,e=>e.preventDefault())}requestLock(){if(this.locked||this.requesting)return;this.reset(),this.requesting=!0;let e=++this.requestId;try{this.canvas.requestPointerLock()?.catch(t=>{e===this.requestId&&this.handleLockError()})}catch{this.handleLockError()}}releaseLock(){++this.requestId,this.requesting=!1,this.reset(),document.pointerLockElement===this.canvas&&document.exitPointerLock()}reset(){this.held.clear(),this.buttonsHeld.clear(),this.endFrame()}isDown(e){return this.held.has(e)}wasPressed(e){return this.pressed.has(e)}isMouseDown(e){return this.buttonsHeld.has(e)}wasMousePressed(e){return this.buttonsPressed.has(e)}endFrame(){this.pressed.clear(),this.buttonsPressed.clear(),this.mouseDX=this.mouseDY=this.wheelDelta=0}handleKeyDown=e=>{this.locked&&s_.has(e.code)&&e.preventDefault(),!e.repeat&&(this.held.add(e.code),this.pressed.add(e.code))};handleKeyUp=e=>{this.held.delete(e.code)};handleBlur=()=>{this.reset(),this.onLockChange?.(!1)};handleLockError=()=>{this.requesting&&(this.requesting=!1,this.reset(),this.onLockError?.())};handlePointerLockChange=()=>{let e=document.pointerLockElement===this.canvas;if(e&&!this.requesting&&!this.locked){document.exitPointerLock();return}this.locked=e,this.requesting=!1,this.reset(),this.onLockChange?.(this.locked)}},u_=class{tick;rafId=0;last=0;running=!1;fpsAccum=0;fpsFrames=0;fps=0;constructor(e){this.tick=e}start(){this.running||(this.running=!0,this.last=performance.now(),this.rafId=requestAnimationFrame(this.frame))}stop(){this.running=!1,cancelAnimationFrame(this.rafId)}frame=e=>{if(!this.running)return;this.rafId=requestAnimationFrame(this.frame);let t=Math.max(0,(e-this.last)/1e3),n=Math.min(t,.1);this.last=e,this.fpsAccum+=t,this.fpsFrames+=1,this.fpsAccum>=.5&&(this.fps=this.fpsFrames/this.fpsAccum,this.fpsAccum=0,this.fpsFrames=0),this.tick(n)}},d_=`mineboss.best-run`;function f_(e){let t=Math.floor(e.elapsed/60),n=Math.floor(e.elapsed%60).toString().padStart(2,`0`),r=e.deaths===1?`1 tentativa`:`${e.deaths} tentativas`,i=e.blocksMined===1?`1 bloco coletado`:`${e.blocksMined} blocos coletados`;return`${t}:${n} · ${r} · ${e.plates===xp.None?bp[e.hammer].name:`${bp[e.hammer].name} · ${Sp[e.plates].name.toLowerCase()}`} · ${i}`}function p_(e,t){return e.elapsed===t.elapsed?e.deaths===t.deaths?e.blocksMined>t.blocksMined:e.deaths<t.deaths:e.elapsed<t.elapsed}function m_(e=`adventure-normal`){try{let t=localStorage.getItem(`${d_}.${e}`);if(!t)return null;let n=JSON.parse(t);if(typeof n.elapsed!=`number`||typeof n.deaths!=`number`||typeof n.blocksMined!=`number`)return null;let r=n.hammer;return r!==yp.Wood&&r!==yp.Iron&&r!==yp.Gold?null:{elapsed:Math.max(0,n.elapsed),deaths:Math.max(0,n.deaths),hammer:r,plates:Cp(n.plates)?n.plates:xp.None,blocksMined:Math.max(0,n.blocksMined)}}catch{return null}}function h_(e,t=`adventure-normal`){try{localStorage.setItem(`${d_}.${t}`,JSON.stringify(e))}catch{}}function g_(e,t=`adventure-normal`){let n=m_(t);return!n||p_(e,n)?(h_(e,t),{best:e,isNewBest:!0}):{best:n,isNewBest:!1}}var __=e=>e===`adventure`?`Aventura`:`OneBlock`,v_=[{id:`eat`,text:`Sua vida está baixa. Botão direito: comer e recuperar vida`,ready:e=>e.health<=8&&e.hasHeal},{id:`platform`,text:`Use o direito para colocar terra e ampliar a ilha.`,ready:e=>e.mode===`oneblock`&&!e.platformDone&&e.hasDirtOrGrass},{id:`shelter`,text:`Comece um abrigo: coloque tábuas ou troncos acima do chão.`,ready:e=>e.mode===`oneblock`&&!e.shelterDone&&e.hasPlanksOrLog},{id:`torch`,text:`C: use carvão para criar tochas`,ready:e=>e.hasTorchFuel&&!e.hasTorch},{id:`ruin`,text:`Encontre o Sentinela: siga a bússola ou use Visitar no menu`,ready:e=>e.ruinUnlocked&&!e.ruinFound}];function y_(e,t){if(!e.enabled||e.fighting)return null;for(let n of v_)if(!(t.has(n.id)||!n.ready(e)))return{id:n.id,text:n.text};return null}function b_(e){let t=new Set(e.shownHints??[]);return e.hintedConsumable&&t.add(`eat`),e.hintedTorch&&t.add(`torch`),[...t]}var x_=`mineboss.run`;function S_(e){return e===yp.Wood||e===yp.Iron||e===yp.Gold}function C_(e){return e===null||Number.isInteger(e)&&e>=0&&e<Ol.length}function w_(e,t){try{if(e.length>2e7)return null;let n=JSON.parse(e),r=n.version===1?`adventure`:n.version===2?`oneblock`:n.mode;if(r!==`adventure`&&r!==`oneblock`||t&&r!==t||![1,2,3,4,5].includes(n.version??0))return null;n.mode=r,n.version===1&&(n.oneBlock={broken:0,phase:0}),n.version=5;let i=e=>typeof e==`number`&&Number.isFinite(e),a=e=>i(e)&&Number.isSafeInteger(e)&&e>=0,o=e=>i(e)&&Math.abs(e)<=1e6;if(!Number.isSafeInteger(n.seed)||!i(n.elapsed)||n.elapsed<0||!a(n.deaths)||!a(n.blocksMined))return null;let s=n.player;if(!s||!n.arena||!n.oneBlock||!Array.isArray(n.edits)||![s.x,s.y,s.z,s.spawnX,s.spawnY,s.spawnZ].every(o)||![s.yaw,s.pitch,s.health].every(i)||s.health<0||s.health>20||!S_(s.hammer)||s.plates!==void 0&&!Cp(s.plates)||s.flying!==void 0&&typeof s.flying!=`boolean`)return null;let c=(e,t)=>Array.isArray(e)&&(t?e.length===9:e.length<=Ol.length)&&e.every(e=>e&&(e.block===null||Number.isInteger(e.block)&&C_(e.block))&&a(e.count)&&(!t||e.count<=64)),l=e=>a(e)&&e<9;if(!c(s.slots,!0)||!l(s.selected)||n.reserve!==void 0&&!c(n.reserve,!1)||n.survival&&(!c(n.survival.slots,!0)||!c(n.survival.reserve,!1)||!l(n.survival.selected))||n.creativePalette&&(!c(n.creativePalette.slots,!0)||!c(n.creativePalette.reserve,!1)||!l(n.creativePalette.selected))||n.home&&![n.home.x,n.home.y,n.home.z].every(o)||n.updatedAt!==void 0&&!a(n.updatedAt)||n.creative&&(r!==`adventure`||!n.survival))return null;for(let e of[`creative`,`gentle`,`edgeProtection`,`guidance`,`tutorialDone`])if(n[e]!==void 0&&typeof n[e]!=`boolean`)return null;if(typeof n.arena.defeated!=`boolean`||typeof n.arena.discovered!=`boolean`)return null;for(let e of[`cacheClaimed`,`ruinFound`,`ruinDefeated`,`beaconDefeated`])if(n.arena[e]!==void 0&&typeof n.arena[e]!=`boolean`)return null;if(!a(n.oneBlock.broken)||n.oneBlock.broken>1e9||!a(n.oneBlock.phase)||n.oneBlock.pace!==void 0&&![`classic`,`quick`].includes(n.oneBlock.pace)||n.oneBlock.goals!==void 0&&(!Array.isArray(n.oneBlock.goals)||n.oneBlock.goals.some(e=>![`platform`,`shelter`].includes(e)))||n.trophies!==void 0&&(!Array.isArray(n.trophies)||n.trophies.some(e=>e!==26&&e!==27&&e!==42))||n.builds!==void 0&&(!Array.isArray(n.builds)||n.builds.some(e=>![`house`,`tower`,`pen`].includes(e)))||n.pet!==void 0&&(![n.pet.x,n.pet.y,n.pet.z].every(o)||typeof n.pet.following!=`boolean`)||n.shownHints!==void 0&&(!Array.isArray(n.shownHints)||n.shownHints.length>32||n.shownHints.some(e=>typeof e!=`string`||e.length===0||e.length>32))||n.edits.length>3e5)return null;for(let e of n.edits)if(!e||![e.x,e.y,e.z].every(e=>o(e)&&Number.isInteger(e))||e.y<0||e.y>=128||!Number.isInteger(e.id)||!C_(e.id))return null;return n}catch{return null}}function T_(e=`adventure`){try{let t=localStorage.getItem(`${x_}.${e}`)??localStorage.getItem(x_);return(t?w_(t,e):null)??E_(e)}catch{return null}}function E_(e){try{let t=localStorage.getItem(`${x_}.${e}.previous`);return t?w_(t,e):null}catch{return null}}function D_(e){try{let t=JSON.stringify(e);if(!w_(t,e.mode))return!1;let n=`${x_}.${e.mode}`,r=localStorage.getItem(n),i=r?w_(r,e.mode):null,a=E_(e.mode),o=!a||!e.updatedAt||e.updatedAt-(a.updatedAt??0)>=6e4||i?.seed!==e.seed;return r&&r!==t&&i&&o&&localStorage.setItem(`${n}.previous`,r),localStorage.setItem(n,t),!0}catch{return!1}}var O_=`mineboss.session`,k_=new Set([`session_start`,`pointer_lock`,`first_move`,`first_look`,`lesson`,`block_placed`,`block_removed`,`craft`,`build`,`objective`,`panel`,`practice`,`encounter`,`death`,`victory`,`save`,`loaded`,`idle`,`perf`,`mark`,`session_stop`]),A_=new Set([`x`,`y`,`z`,`mouseDX`,`mouseDY`,`movementX`,`movementY`]);function j_(e){return typeof e==`number`&&Number.isFinite(e)}function M_(e){if(!e||typeof e!=`object`)return!1;let t=e;return!(t.mode!==`adventure`&&t.mode!==`oneblock`||typeof t.creative!=`boolean`||typeof t.gentle!=`boolean`||typeof t.quality!=`string`||typeof t.reducedMotion!=`boolean`||t.pace!==void 0&&t.pace!==`classic`&&t.pace!==`quick`)}function N_(e){if(!e||typeof e!=`object`)return!1;let t=e;for(let e of Object.keys(t))if(A_.has(e))return!1;return!(!j_(t.t)||t.t<0||typeof t.type!=`string`||!k_.has(t.type))}function P_(){return{placed:0,removed:0,deaths:0,crafts:0,help:0,cheer:0,quit:0}}function F_(e){if(!e.length)return null;let t=[...e].sort((e,t)=>e-t),n=Math.floor(t.length/2);return t.length%2?t[n]:(t[n-1]+t[n])/2}function I_(e,t){return e===`mark`||e===`pointer_lock`&&t.ok===!1||e===`save`&&t.ok===!1}var L_=class{enabled=!1;events=[];omitted=0;context=null;startedAt=null;counts=P_();fpsSamples=[];lastKey=``;sawMove=!1;sawLook=!1;idleSeconds=0;idle=!1;idleStartedAt=null;longestIdle=0;perfSeconds=0;now;constructor(e=()=>Date.now()){this.now=e,this.restore()}get hasData(){return this.events.length>0||this.omitted>0}enable(){this.enabled=!0,this.persist(!0)}stop(){this.enabled&&this.record(`session_stop`),this.enabled=!1,this.idle=!1,this.idleSeconds=0,this.persist(!0)}clear(){this.enabled=!1,this.events=[],this.omitted=0,this.context=null,this.startedAt=null,this.counts=P_(),this.fpsSamples=[],this.lastKey=``,this.sawMove=!1,this.sawLook=!1,this.idleSeconds=0,this.idle=!1,this.idleStartedAt=null,this.longestIdle=0,this.perfSeconds=0;try{localStorage.removeItem(O_)}catch{}}begin(e){this.enabled&&(this.startedAt===null&&(this.startedAt=this.now()),this.context=e,this.record(`session_start`))}record(e,t={}){if(!this.enabled||e===`session_start`&&this.events.some(e=>e.type===`session_start`)||e===`first_move`&&this.sawMove||e===`first_look`&&this.sawLook)return;let n=`${e}:${t.text??t.id??t.step??``}`;if((e===`objective`||e===`panel`)&&n===this.lastKey)return;this.tally(e,t),e===`first_move`&&(this.sawMove=!0),e===`first_look`&&(this.sawLook=!0);let r=I_(e,t);if(!(this.events.length<4e3||r)){this.omitted+=1,this.persist(this.omitted%25==0);return}this.startedAt===null&&(this.startedAt=this.now());let i={t:this.elapsed(),type:e};for(let[e,n]of Object.entries(t))n===void 0||A_.has(e)||(i[e]=n);this.events.push(i),this.lastKey=e===`objective`||e===`panel`?n:``,this.persist(r||e===`session_start`||this.events.length%25==0)}flush(){this.persist(!0)}observe(e){if(this.enabled){if(!e.playing||!e.locked){this.endIdle(),this.idleSeconds=0;return}e.moving&&this.record(`first_move`),e.looking&&this.record(`first_look`),e.moving||e.looking?(this.endIdle(),this.idleSeconds=0):(this.idleSeconds+=e.dt,!this.idle&&this.idleSeconds>=8&&(this.idle=!0,this.idleStartedAt=this.elapsed(),this.record(`idle`,{active:!0}))),this.perfSeconds+=e.dt,this.perfSeconds>=30&&e.fps>0&&(this.perfSeconds=0,this.record(`perf`,{fps:Math.round(e.fps*10)/10}))}}summary(){let e=e=>this.events.find(t=>t.type===e)?.t??null;return{pointerLocked:this.events.some(e=>e.type===`pointer_lock`&&e.ok===!0),timeToMove:e(`first_move`),timeToLook:e(`first_look`),lessonDone:this.events.some(e=>e.type===`lesson`&&e.step===`done`),blocksPlaced:this.counts.placed,blocksRemoved:this.counts.removed,crafted:this.counts.crafts>0,practice:this.events.some(e=>e.type===`practice`),encounter:this.events.some(e=>e.type===`encounter`),deaths:this.counts.deaths,saved:this.events.some(e=>e.type===`save`&&e.ok===!0),reloaded:this.events.some(e=>e.type===`loaded`),helpMarks:this.counts.help,cheerMarks:this.counts.cheer,quitMarks:this.counts.quit,longestIdle:Math.max(this.longestIdle,this.idle&&this.idleStartedAt!==null?this.elapsed()-this.idleStartedAt:0),medianFps:F_(this.fpsSamples)}}toExport(){return this.persist(!0),{version:1,startedAt:this.startedAt===null?null:new Date(this.startedAt).toISOString(),context:this.context,events:this.events,omitted:this.omitted,summary:this.summary()}}elapsed(){return this.startedAt===null&&(this.startedAt=this.now()),Math.max(0,(this.now()-this.startedAt)/1e3)}tally(e,t){e===`block_placed`&&(this.counts.placed+=1),e===`block_removed`&&(this.counts.removed+=1),e===`death`&&(this.counts.deaths+=1),e===`craft`&&(this.counts.crafts+=1),e===`mark`&&t.kind===`help`&&(this.counts.help+=1),e===`mark`&&t.kind===`cheer`&&(this.counts.cheer+=1),e===`mark`&&t.kind===`quit`&&(this.counts.quit+=1),e===`perf`&&j_(t.fps)&&this.fpsSamples.push(t.fps)}endIdle(){this.idle&&(this.idleStartedAt!==null&&(this.longestIdle=Math.max(this.longestIdle,this.elapsed()-this.idleStartedAt)),this.idle=!1,this.idleStartedAt=null,this.record(`idle`,{active:!1}))}persist(e=!1){if(e)try{localStorage.setItem(O_,JSON.stringify({version:1,enabled:this.enabled,startedAt:this.startedAt,context:this.context,events:this.events,omitted:this.omitted,counts:this.counts,fpsSamples:this.fpsSamples.slice(-200),longestIdle:this.longestIdle,sawMove:this.sawMove,sawLook:this.sawLook}))}catch{}}restore(){try{let e=localStorage.getItem(O_);if(!e)return;let t=JSON.parse(e);if(t.version!==1||!Array.isArray(t.events)||!t.events.every(N_))return;this.enabled=t.enabled===!0,this.startedAt=j_(t.startedAt)?t.startedAt:null,this.context=t.context&&M_(t.context)?t.context:null,this.events=t.events,this.omitted=j_(t.omitted)&&t.omitted>=0?t.omitted:0,this.counts={...P_(),...t.counts??{}},this.fpsSamples=Array.isArray(t.fpsSamples)?t.fpsSamples.filter(e=>j_(e)):[],this.longestIdle=j_(t.longestIdle)?t.longestIdle:0,this.sawMove=t.sawMove===!0,this.sawLook=t.sawLook===!0;let n=this.events.at(-1);n&&(n.type===`objective`||n.type===`panel`)&&(this.lastKey=`${n.type}:${n.text??n.id??``}`)}catch{}}},R_=[`house`,`tower`,`pen`],z_=4,B_=49,V_=5,H_=.6;function U_(e,t,n,r){let i=e.edits.get(`${t},${n},${r}`);return i!==void 0&&Rl(i)}function W_(e,t,n,r){if(!U_(e,t,n,r))return null;let i=n,a=n;for(;a-i<6&&U_(e,t,a+1,r);)a++;for(;a-i<6&&U_(e,t,i-1,r);)i--;return a-i+1>=6?{kind:`tower`,x:t,y:i,z:r}:null}function G_(e,t,n,r){let i=(t,n,r)=>Rl(e.getBlock(t,n,r));if(i(t,n,r))return null;let a=n;for(let e=0;e<3&&!i(t,a-1,r);e++)a--;if(!i(t,a-1,r))return null;let o=(e,t)=>i(e-1,a,t)&&i(e+1,a,t)||i(e,a,t-1)&&i(e,a,t+1),s=[],c=new Set,l=[[t,r]],u=0,d=0,f=0;for(;l.length;){let[t,n]=l.pop(),r=`${t},${n}`;if(!c.has(r)){if(c.add(r),i(t,a,n)){u++,U_(e,t,a,n)&&d++,i(t,a+2,n)&&f++;continue}if(!o(t,n)){if(s.push([t,n]),s.length>B_)return null;l.push([t+1,n],[t-1,n],[t,n+1],[t,n-1])}}}if(s.length<z_||d<u*H_)return null;let p=0,m=0;for(let[t,n]of s)for(let r=a+2;r<=a+V_;r++)if(i(t,r,n)){p++,U_(e,t,r,n)&&m++;break}let h=s.reduce((e,[t,n])=>[e[0]+t,e[1]+n],[0,0]).map(e=>e/s.length),[g,_]=s.reduce((e,t)=>Math.hypot(t[0]-h[0],t[1]-h[1])<Math.hypot(e[0]-h[0],e[1]-h[1])?t:e);return p>=s.length*.75&&m>=p*H_?{kind:`house`,x:g,y:a,z:_}:p<=s.length*.25&&f<u*.5?{kind:`pen`,x:g,y:a,z:_}:null}function K_(e,t,n,r){let i=W_(e,t,n,r);if(i)return i;for(let[i,a,o]of[[1,0,0],[-1,0,0],[0,0,1],[0,0,-1],[0,-1,0]]){let s=G_(e,t+i,n+a,r+o);if(s)return s}return null}var q_=class{found=new Set;pending=null;notice(e,t,n,r){let i=K_(e,t,n,r);return!i||this.found.has(i.kind)?null:i.kind===`pen`?(this.pending={build:i,wait:12},null):(this.found.add(i.kind),i)}update(e,t){if(!this.pending||(this.pending.wait-=t,this.pending.wait>0))return null;let{build:n}=this.pending;this.pending=null;let r=G_(e,n.x,n.y,n.z);return r?.kind!==`pen`||this.found.has(`pen`)?null:(this.found.add(`pen`),r)}load(e=[]){this.found.clear(),this.pending=null;for(let t of e)R_.includes(t)&&this.found.add(t)}},J_=[{id:`house`,name:`Casa colorida`,icon:`🏠`,steps:[`Faça um chão de 5 por 5 blocos.`,`Levante as paredes. Deixe a entrada e duas janelas.`,`Cubra com um telhado e coloque vidro nas janelas.`],materials:[W.Planks,W.Blue,W.White,W.Glass,W.Bed,W.Torch]},{id:`bridge`,name:`Ponte`,icon:`🌉`,steps:[`Faça um caminho de tábuas com 3 blocos de largura.`,`Coloque bordas dos dois lados.`,`Enfeite a entrada com postes e luzes.`],materials:[W.Planks,W.Log,W.Glowstone]},{id:`castle`,name:`Castelo`,icon:`🏰`,steps:[`Faça uma base quadrada de pedra.`,`Levante as paredes e deixe o portão aberto.`,`Faça torres mais altas nos cantos e decore o topo.`],materials:[W.Cobblestone,W.DarkBrick,W.Glowstone,W.Red]},{id:`tower`,name:`Torre`,icon:`🗼`,steps:[`Faça um chão de 3 por 3 pedras.`,`Levante as paredes e deixe a porta aberta.`,`Faça um terraço no topo e coloque uma luz.`],materials:[W.Cobblestone,W.Planks,W.Torch,W.Glowstone]},{id:`pen`,name:`Curral`,icon:`🪵`,steps:[`Faça um chão de 5 por 5.`,`Faça a cerca com troncos e deixe um portão.`,`Coloque luzes nos cantos.`],materials:[W.Dirt,W.Log,W.Planks,W.Torch]}];function Y_(e,t){let n=new Map,r=(e,r,i,a,o)=>{o<=t&&n.set(`${e},${r},${i}`,{x:e,y:r,z:i,color:a,stage:o})};if(e===`house`)for(let e=0;e<5;e++)for(let t=0;t<5;t++){if(r(e,0,t,`#bd8d51`,0),e===0||e===4||t===0||t===4)for(let n=1;n<=3;n++){let i=t===4&&e===2&&n<3,a=n===2&&(e===0&&t===2||e===4&&t===2);!i&&!a&&r(e,n,t,`#559dc5`,1),a&&r(e,n,t,`#a5e6ed`,2)}r(e,4,t,`#e9dcca`,2)}else if(e===`bridge`)for(let e=0;e<3;e++)for(let t=0;t<7;t++)r(e,0,t,`#bd8d51`,0),e!==1&&r(e,1,t,`#94734a`,1),e!==1&&(t===0||t===6)&&(r(e,2,t,`#755037`,2),r(e,3,t,`#ffd97c`,2));else if(e===`castle`)for(let e=0;e<7;e++)for(let t=0;t<7;t++){if(r(e,0,t,`#8b97a0`,0),e===0||e===6||t===0||t===6)for(let n=1;n<=3;n++)t===6&&e===3&&n<3||r(e,n,t,`#a4a6a9`,1);if((e<2||e>4)&&(t<2||t>4))for(let n=1;n<=5;n++)r(e,n,t,n===5?`#e5c578`:`#7d8594`,2);else(e===0||e===6||t===0||t===6)&&(e+t)%2==0&&r(e,4,t,`#7d8594`,2)}else if(e===`tower`)for(let e=0;e<3;e++)for(let t=0;t<3;t++){if(r(e,0,t,`#8b97a0`,0),e===0||e===2||t===0||t===2)for(let n=1;n<=4;n++)t===2&&e===1&&n<3||r(e,n,t,`#a4a6a9`,1);r(e,5,t,e===1&&t===1?`#ffd97c`:`#7d8594`,2)}else if(e===`pen`)for(let e=0;e<5;e++)for(let t=0;t<5;t++){r(e,0,t,`#6b8f4e`,0);let n=e===0||e===4||t===0||t===4;n&&(t!==4||e!==2)&&r(e,1,t,`#755037`,1),n&&(e===0||e===4)&&(t===0||t===4)&&(r(e,2,t,`#94734a`,2),r(e,3,t,`#ffd97c`,2))}return[...n.values()].sort((e,t)=>e.x+e.z-(t.x+t.z)||e.y-t.y)}function X_(e,t){let n=document.createElement(`figure`);n.className=`build-idea`;let r=`http://www.w3.org/2000/svg`,i=document.createElementNS(r,`svg`);i.setAttribute(`viewBox`,`0 0 360 290`),i.setAttribute(`role`,`img`),i.setAttribute(`aria-label`,`${e.name}: ${e.steps[t]}`);let a=(e,t,n=1)=>{let a=document.createElementNS(r,`polygon`);a.setAttribute(`points`,e),a.setAttribute(`fill`,t),a.setAttribute(`stroke`,`#162c3d`),a.setAttribute(`stroke-width`,`1`),a.setAttribute(`opacity`,String(n)),i.append(a)};for(let n of Y_(e.id,t)){let e=180+(n.x-n.z)*18,t=120+(n.x+n.z)*9-n.y*19;a(`${e},${t} ${e+18},${t+9} ${e},${t+18} ${e-18},${t+9}`,n.color),a(`${e-18},${t+9} ${e},${t+18} ${e},${t+37} ${e-18},${t+28}`,n.color,.75),a(`${e},${t+18} ${e+18},${t+9} ${e+18},${t+28} ${e},${t+37}`,n.color,.9)}let o=document.createElement(`figcaption`);return o.textContent=`Você pode mudar as cores e o tamanho. A ideia é sua!`,n.append(i,o),n}var Z_={house:`Paredes em volta, uma porta e um telhado por cima`,tower:`6 blocos, um em cima do outro`,pen:`Uma cerca baixa e fechada, com um portão de 1 bloco`},Q_={house:`Casa com paredes e telhado`,tower:`Torre bem alta`,pen:`Curral cercado`},$_={house:`Que casa linda!`,tower:`Que torre alta!`,pen:`Curral pronto!`},ev=[{boss:`sentinel`,trophy:W.SentinelTrophy,icon:`🗿`,name:`Sentinela`},{boss:`warden`,trophy:W.WardenTrophy,icon:`💎`,name:`Guardião`},{boss:`beacon`,trophy:W.BeaconTrophy,icon:`🌿`,name:`Faroleiro`}],tv=`Um bichinho chegou ao seu curral! Clique nele com o botão direito para ele seguir você.`;function nv(e,t){return t?`${$_[e]} ${tv}`:`${$_[e]} Ela entrou no seu álbum.`}function rv(e){let t=R_.map(t=>{let n=J_.find(e=>e.id===t),r=e.builds.has(t),i=r?t===`pen`&&e.pet?`Curral com um bichinho`:Q_[t]:Z_[t];return{icon:n.icon,label:n.name,done:r,detail:i}}),n=ev.map(({boss:t,trophy:n,icon:r,name:i})=>{let a=e.trophies.has(n);return{icon:r,label:i,done:a,detail:a?Nf[t]:`Figurinha do álbum`}}),r=[{title:`Construções`,items:t},{title:`Troféus`,items:n}];return e.islandGoals&&r.push({title:`Metas da ilha`,items:e.islandGoals.map(e=>({icon:`🏝`,label:e.label,done:e.done,detail:e.done?`Concluído`:`${Math.min(e.current,e.target)}/${e.target} · prêmio: ${e.reward}`}))}),r}function iv(e){let t=e.flatMap(e=>e.items);return{done:t.filter(e=>e.done).length,total:t.length}}function av(e){let t=document.createElement(`div`);t.className=`album`;for(let n of e){let e=document.createElement(`h3`);e.textContent=n.title;let r=document.createElement(`ul`);for(let e of n.items){let t=document.createElement(`li`);t.classList.toggle(`done`,e.done);let n=document.createElement(`span`);n.className=`album-icon`,n.textContent=e.done?e.icon:`○`;let i=document.createElement(`span`),a=document.createElement(`strong`);a.textContent=e.label;let o=document.createElement(`small`);o.textContent=e.detail,i.append(a,o),t.append(n,i),r.append(t)}t.append(e,r)}return t}var ov=`O muro protege você`;function sv(e,t,n,r=!1,i=!1){return n?{icon:`↑`,key:`Espaço`,text:`Pule a onda!`,kind:`warning`}:i?{icon:`↑`,key:`Espaço`,text:`Pule o feixe!`,kind:`warning`}:r?{icon:`🧱`,key:``,text:ov,kind:`build`}:t===`wall`?{icon:`🧱`,key:`Direito`,text:`Coloque um bloco entre você e o boneco`,kind:`build`}:t===`wave`?{icon:`↑`,key:`Espaço`,text:`Pule quando a onda chegar`,kind:`move`}:t===`circle`?{icon:`↔`,key:`W A S D`,text:`Saia do círculo`,kind:`warning`}:t===`hit`||e===`stagger`?{icon:`🔨`,key:`Esquerdo`,text:`BATA AGORA!`,kind:`attack`}:e?e===`dying`?{icon:`★`,key:``,text:`Você conseguiu!`,kind:`attack`}:e===`awaken`||e===`phaseShift`?{icon:`👀`,key:``,text:`Prepare-se!`,kind:`move`}:e===`beam`?{icon:`✦`,key:`Espaço`,text:`Feixe de luz! Pule ou fique atrás de um bloco`,kind:`warning`}:{icon:`↔`,key:`W A S D`,text:e===`charge`?`Saia da frente!`:[`slam`,`pillars`,`boulder`,`shard`].includes(e)?`Afaste-se dos círculos!`:cv,kind:`warning`}:null}var cv=`Desvie e espere a abertura`;function lv(e){return e&&e.text!==cv&&e.text!==`O muro protege você`?e.text:null}function uv(e){let t=document.getElementById(`action-label`),n=JSON.stringify(e);if(t.dataset.cue===n||(t.dataset.cue=n,t.replaceChildren(),t.classList.toggle(`hidden`,e===null),!e))return;t.dataset.kind=e.kind;let r=document.createElement(`span`);r.className=`cue-icon`,r.textContent=e.icon,r.setAttribute(`aria-hidden`,`true`);let i=document.createElement(`span`);if(i.textContent=e.text,t.append(r,i),e.key){let n=document.createElement(`kbd`);n.textContent=e.key,t.append(n)}}function dv(e){let t=e.mode===`oneblock`?e.oneBlockMark:``,n=!e.creative||e.fighting?``:e.flying?`✈ Shift desce · F pousa`:`✈ F: voar`,r=e.creative?!e.tutorialDone:e.elapsed<90,i=``;return e.fighting?i=`Espaço: pular · Esc: pausar`:r&&(i=e.creative?`B: blocos · Z: desfazer · Esc: menu`:`B: mochila · C: criar · H: ajuda · Esc: menu`),{phase:t,playHelp:i,flight:n}}function fv(e,t){let n=document.getElementById(e);n.textContent!==t&&(n.textContent=t)}function pv(e){if(e!==void 0)return W[e]??String(e)}var mv=9418976,hv=592657,gv=1723002,_v=76,vv=84,yv=42,bv=0,xv=0,Sv=2.4,Cv=1337,wv=12,Tv=.4,Ev=2,Dv=`Um muro de blocos segura a onda: coloque um bloco entre você e o chefão`,Ov=`Pule o feixe ou fique atrás de um bloco: ele não atravessa o muro`,kv=class{canvas;renderer;scene=new xn;camera;input;loop;state=`menu`;sunLight;skyLight;lamp;fog;skyColor=new B(mv);caveColor=new B(hv);waterColor=new B(gv);blendedColor=new B;eyeScratch=new R;sfx=new xl;narrator=new ll;spokenLesson=0;spokenFightCue=null;atlas=vh();world;chunks;particles;torchLights;entities;player=new Jp;controller;combat;interaction;viewModel;playerModel;arena;ruin;grove;survival;practice=null;fightCreative=!1;creativePalette;tutorialDone=!1;home;fightReturn=null;buildHistory=new Fp;trophies=new Set;builds=new q_;pet=null;petHome=null;petFollowing=!1;guidance=!0;buildLesson=0;mode=`adventure`;oneBlock;hud;palette;overlay=new Hg;session=new L_;reducedMotion=!1;quality=`balanced`;guideText=null;elapsed=0;trauma=0;stepDistance=0;pendingDeath=!1;hintedConsumable=!1;hintedUpgrade=!1;hintedTorch=!1;hintedBed=!1;hintedPlates=!1;hintedStagger=!1;shownHints=new Set;guideTimer=0;deaths=0;blocksMined=0;seed=Cv;saveTimer=0;saveSoon=!1;wasInWater=!1;voidFall=!1;tossHold=new c_(Tv);hitStop=new Cl;carrotClock=0;villageReady=!1;villagers=[];golem=null;lastBossState=null;hintedWall=!1;context;constructor(e){this.canvas=e,this.player.peaceful=!0,this.renderer=new ol({canvas:e,antialias:!0,powerPreference:`high-performance`}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=Be,this.camera=new ya(_v,1,.1,520),this.camera.rotation.order=`YXZ`,this.scene.add(this.camera),this.fog=new bn(mv,40,170),this.scene.fog=this.fog,this.scene.background=this.skyColor.clone(),this.skyLight=new sa(12441599,4866869,1.15),this.scene.add(this.skyLight),this.sunLight=new wa(16774102,1.05),this.sunLight.position.set(.55,1,.3).normalize(),this.scene.add(this.sunLight),this.lamp=new xa(16766883,0,42,2),this.scene.add(this.lamp);let t=yh(this.atlas),n=new Er({map:this.atlas.texture,vertexColors:!0}),r=bh(this.atlas);this.world=new o_(new If(this.seed)),this.oneBlock=new n_(this.seed),this.oneBlock.allowMobs=!1,document.documentElement.classList.add(`peaceful`),this.chunks=new Qg(this.world,this.scene,[t,n],r),this.particles=new Sh(this.scene),this.torchLights=new Th(this.scene),this.entities=new vp(this.scene),this.controller=new Ym(this.player,this.world,this.camera),this.combat=new pm(this.player,this.entities,this.particles,this.sfx,this.world),this.interaction=new Zp(this.player,this.world,this.atlas,this.particles,this.sfx,this.scene),this.interaction.fightsEnabled=!1,this.viewModel=new Ag(this.camera,this.atlas),this.playerModel=new fg(this.atlas),this.scene.add(this.playerModel.root),this.hud=new Vg(this.atlas),this.palette=Ug.fromDocument(),this.palette.onChange=()=>{this.interaction.paintMode=this.palette.mode,this.interaction.paintBlock=this.palette.color,this.hud.showHint(this.palette.mode?`Botão direito pinta o bloco.`:`Agora você constrói com blocos.`,2.4)},this.combat.onHit=e=>{this.hud.showHint(e?`Acertou! Ele está vulnerável!`:`Acertou!`,.7),e&&this.hitStop.trigger(Sl.stagger)},this.arena=new zd(this.entities,{onSummon:e=>{this.hud.bossBar.show(e),this.hud.bossBar.setPhase(`Fase I`),this.sfx.play(`roar`)},onPhase:(e,t)=>{if(this.hud.bossBar.setPhase(t),e===2){this.hud.showHint(`Desvie das pedras e dos monstrinhos. Bata quando ele ficar vulnerável.`,3.5);return}this.hud.showHint(`${t}: ele está mais forte`,2.5)},onVictory:()=>this.win(),onShake:e=>this.shake(e),onStagger:()=>this.hintStagger()}),this.ruin=new Qf(this.entities,{onSummon:e=>{this.hud.bossBar.show(e),this.hud.bossBar.setPhase(`Fase I`),this.sfx.play(`roar`)},onPhase:(e,t)=>{this.hud.bossBar.setPhase(t),this.hud.showHint(`${t}: ele joga pedras — saia dos círculos`,3.2)},onDefeated:()=>{this.rewardBoss(W.SentinelTrophy),this.finishFight(),this.ruin.rebuildStatue(this.world),this.lightVictorySign(`sentinel`),this.session?.record(`victory`,{boss:`sentinel`}),this.showBossVictory(`Sentinela vencido!`,`sentinel`),this.hud.bossBar.hide(),this.hud.showHint(this.mode===`adventure`||this.oneBlock.shrineUnlocked?`Você venceu o Sentinela! O santuário fica ao norte`:`Você venceu o Sentinela! Continue explorando o bloco`,4.2),this.saveSoon=!0},onShake:e=>this.shake(e),onStagger:()=>this.hintStagger()}),this.grove=new gp(this.entities,{onSummon:e=>{this.hud.bossBar.show(e),this.hud.bossBar.setPhase(`Fase I`),this.sfx.play(`roar`)},onPhase:(e,t)=>{this.hud.bossBar.setPhase(t),this.hud.showHint(`${t}: brotos vão sair do chão. Bata quando ele ficar vulnerável.`,3.2)},onDefeated:()=>{this.rewardBoss(W.BeaconTrophy),this.finishFight(),this.grove.rebuildBeacon(this.world),this.lightVictorySign(`beacon`),this.session?.record(`victory`,{boss:`beacon`}),this.showBossVictory(`Faroleiro vencido!`,`beacon`),this.hud.bossBar.hide(),this.hud.showHint(`Você venceu o Faroleiro! A lanterna do farol está nos materiais`,4.2),this.saveSoon=!0},onShake:e=>this.shake(e),onStagger:()=>this.hintStagger()}),this.context={dt:0,world:this.world,player:this.player,particles:this.particles,entities:this.entities,atlas:this.atlas,sfx:this.sfx,elapsed:0},this.input=new l_(e),this.input.onLockChange=e=>{e&&this.session?.record(`pointer_lock`,{ok:!0}),this.handleLockChange(e)},this.input.onLockError=()=>{this.session?.record(`pointer_lock`,{ok:!1}),this.state===`playing`&&(this.pause(),this.overlay.show({title:`Vamos ativar o mouse`,text:`Clique na aba do jogo para ativá-la e tente abaixo. Se o navegador pedir, permita usar o mouse.`,button:`Ativar mouse`,secondary:`Voltar à pausa`,showControls:!1},()=>this.startPlaying(),()=>this.showPaused()))},document.getElementById(`mouse-activate`).onclick=()=>this.input.requestLock(),this.loop=new u_(e=>this.tick(e));let i=ym();this.applySettings(i),this.overlay.bindSettings(i),this.overlay.onSettingsChange=e=>this.applySettings(e),this.interaction.onBlockPlaced=e=>{this.session?.record(`block_placed`,{block:pv(e)}),this.buildLesson===1&&(this.buildLesson=2,this.session?.record(`lesson`,{step:2})),this.mode===`oneblock`&&this.oneBlock.claimGoals(this.world,this.player).length&&(this.hud.showHint(`Você conseguiu! Novos materiais na mochila.`,5),this.saveSoon=!0)},this.interaction.onBuildEdit=e=>{this.player.creative&&!this.inEncounter&&this.buildHistory.record(e),Rl(e.after)&&this.noticeBuild(e.x,e.y,e.z)},this.interaction.onEntityUse=()=>this.tapPet(),this.interaction.onPaintingUsed=()=>this.useSecretDoor(),this.player.inventory.onOverflow=()=>this.hud.showHint(`Barra cheia: material guardado na mochila. Aperte B.`,4),this.oneBlock.onWarning=()=>this.hud.showHint(`⚠ Um monstrinho está chegando! Afaste-se do bloco.`,3),window.addEventListener(`pagehide`,()=>{this.session?.flush(),this.state!==`menu`&&this.persistSave({atSpawn:this.player.dead})}),window.addEventListener(`beforeunload`,e=>{this.state===`playing`&&(e.preventDefault(),e.returnValue=``)}),this.interaction.onAltarActivated=()=>this.tryStartFight(),this.interaction.onStatueActivated=()=>this.tryStartRuinFight(),this.interaction.onBeaconActivated=()=>this.tryStartGroveFight(),this.interaction.onOneBlockMined=()=>this.handleOneBlockMined(),this.interaction.onConsumed=e=>{if(e<=0){this.hud.showHint(`Sua vida já está cheia`,1.6);return}this.hud.flashHeal()},this.interaction.onConsumableFound=e=>{this.hintedConsumable||(this.rememberHint(`eat`),this.hud.showHint(`Botão direito: comer ${e} e recuperar vida`,3.5))},this.interaction.onUpgradeFound=e=>{if(!this.hintedUpgrade){this.hintedUpgrade=!0,this.hud.showHint(`C: criar um martelo com 3 ${e}`,3.5);return}if(e.includes(`Gold`)&&this.player.hammerTier>=yp.Gold&&this.player.plates<xp.Gold){this.hud.showHint(`C: criar armadura com 4 ${e}`,3.5);return}this.player.hammerTier<yp.Iron||this.player.plates>=xp.Iron||this.hud.showHint(`C: criar armadura com 4 ${e}`,3.5)},this.interaction.onHammerFeedback=e=>this.hud.showHint(e,2.4),this.interaction.onTorchFuelFound=e=>{this.hintedTorch||(this.rememberHint(`torch`),this.hud.showHint(`C: use ${e} para criar tochas`,3.5))},this.interaction.onBedFound=()=>{this.hintedBed||(this.hintedBed=!0,this.hud.showHint(`Coloque a cama e clique nela com o botão direito para descansar`,3.8))},this.interaction.onChestOpened=()=>{let e=Df(this.mode===`oneblock`?this.oneBlock.phaseIndex:0);for(let t of e)this.player.inventory.add(t.id,t.count);let t=e.map(e=>`${e.count} ${Ll(e.id).name}`).join(`, `);this.hud.showHint(`O baú trouxe ${t}.`,3.6),this.saveSoon=!0},this.interaction.onSpawnSet=()=>{this.hud.showHint(`Você vai voltar aqui ao renascer`,2.6),this.saveSoon=!0},this.player.health.onDamage=e=>{this.hud.flashDamage(e/6),this.sfx.play(`hurt`),this.shake(Math.min(.4,e/24))},this.player.onPlateAbsorb=()=>{this.viewModel.flashPlates(),this.hud.flashPlates(),this.sfx.play(`plate`),!this.hintedPlates&&(this.hintedPlates=!0,this.hud.showHint(`Sua armadura protegeu você`,3.2))},this.player.health.onDeath=()=>{this.pendingDeath=!0},this.world.onEdit=()=>{this.saveSoon=!0},window.addEventListener(`resize`,this.resize),this.resize();let a=T_(this.mode);a?this.applySave(a):this.prepareWorld(),this.updateSessionBanner(),this.showMenu()}prepareWorld(){this.syncGeneratorUnlocks();let e=this.mode===`adventure`?10:bv,t=this.mode===`adventure`?10:xv;this.chunks.preload(e,t,2),this.player.setSpawn(e+.5,this.mode===`adventure`?this.world.surfaceY(e,t)+1:73,t+.5),this.player.respawn(),this.home={x:this.player.spawn.x,y:this.player.spawn.y,z:this.player.spawn.z},this.player.yaw=0,this.player.pitch=this.mode===`oneblock`?-1.38:0,this.player.inventory.clear(),this.player.inventory.select(0),this.mode===`adventure`?(this.player.inventory.add(W.Cobblestone,32),this.player.inventory.add(W.Planks,16),this.player.inventory.add(W.Bed,1),this.player.inventory.add(W.Mushroom,4),this.player.inventory.add(W.CoalOre,8),this.player.inventory.add(W.Carrot,8),this.player.yaw=Math.atan2(-(J.x-e),-(J.z-t))):(this.player.inventory.add(W.Dirt,4),this.player.inventory.add(W.Mushroom,2),this.player.inventory.add(W.Carrot,8)),this.ensureBunny(),this.controller.update(1e-4,this.input)}showMenu(){if(this.state=`menu`,this.hud.setVisible(!1),!this.firstVisit){this.showWorldChoice();return}this.overlay.show({title:`Coelhinho Craft Pintar`,text:`Pinte, construa e brinque com o coelhinho fofinho.`,button:`▶ Jogar`,secondary:`Outros modos`,showControls:!1,onEscape:()=>{}},()=>this.startQuickBuild(),()=>this.showWorldChoice()),this.addMenuExtras()}get firstVisit(){return!T_(`adventure`)&&!T_(`oneblock`)}showWorldChoice(){this.overlay.show({title:`Coelhinho Craft Pintar`,text:`Escolha um lugar para brincar. Cada um guarda uma partida.
Mundo: grama, árvores e cenouras. Ilha: um bloquinho para crescer.`,button:`🌳 Aventura`,secondary:`🏝 Ilha`,showControls:!1,onEscape:()=>{}},()=>this.showModeMenu(`adventure`),()=>this.showModeMenu(`oneblock`)),this.firstVisit&&this.overlay.setBackAction(()=>this.showMenu(),`Voltar`),this.addMenuExtras()}startQuickBuild(){this.newGame(`adventure`),this.setCreative(!0),this.openCatalog()}addMenuExtras(){this.overlay.addAction(`Som e conforto`,()=>{this.overlay.show({title:`Som e conforto`,text:`Ajuste a imagem, a câmera e o som.`,button:`Voltar`,showControls:!1,showSettings:!0,onEscape:()=>this.showMenu()},()=>this.showMenu())},{icon:`⚙`}),this.overlay.addAction(this.session?.enabled?`Registro ligado`:`Registrar esta partida`,()=>{this.session?.enabled?this.session?.stop():this.session?.enable(),this.updateSessionBanner(),this.showMenu()},{icon:`📋`,description:this.session?.enabled?`A observação continua neste navegador`:`Grava o que acontece nesta partida`})}showModeMenu(e){let t=T_(e);if(this.overlay.show({title:__(e),text:e===`adventure`?`Um mundo de grama, árvores e cenouras para pintar e construir.`:`Uma ilha pequenininha. Quebre o bloco e faça ela crescer.`,button:t?`Continuar`:`Jogar`,secondary:t?`Nova partida`:`Voltar`,showControls:!1},()=>{t?(this.applySave(t),this.startPlaying()):this.chooseStyle(e)},()=>t?this.confirmNewGame(e):this.showWorldChoice()),this.overlay.setBackAction(()=>this.showWorldChoice()),this.overlay.addAction(`Cuidar dos mundos`,()=>this.showWorldOptions(e),{icon:`💾`}),t?.updatedAt){let e=document.createElement(`p`);e.textContent=`Salvo em ${new Date(t.updatedAt).toLocaleString(`pt-BR`)}`,this.overlay.addContent(e)}}confirmNewGame(e){this.overlay.show({title:`Nova partida`,text:`Substituir a partida de ${__(e)}? O outro modo será preservado.`,button:`Criar partida`,secondary:`Voltar`,showControls:!1},()=>this.chooseStyle(e),()=>this.showModeMenu(e))}startPlaying(){this.sfx.resume(),this.overlay.hide(),this.hud.setVisible(!0),this.state=`playing`,this.session?.begin(this.sessionContext()),this.input.requestLock(),document.getElementById(`mouse-prompt`).classList.toggle(`hidden`,this.input.locked),this.inEncounter||this.practice?this.hud.hideHint():this.player.peaceful?this.hud.showHint(`Siga o caminho amarelo até o quadro rosa.`,5):this.mode===`oneblock`&&!this.oneBlock.ruinUnlocked?this.hud.showHint(`Use o direito para colocar terra e ampliar a ilha.`,5):this.player.creative?this.hud.showHint(`B: escolha blocos. Esc: construir, base e chefões.`,4):this.arena.ruinFound?!this.player.creative&&!this.hintedBed&&this.player.inventory.slots.some(e=>e.block===W.Bed)&&(this.hintedBed=!0,this.hud.showHint(`Coloque a cama e clique nela com o botão direito para descansar`,3.8)):(this.rememberHint(`ruin`),this.hud.showHint(`Encontre o Sentinela: siga a bússola ou use Visitar no menu`,4.2)),this.persistSave()}pause(){if(this.state!==`playing`)return;this.persistSave(),this.state=`paused`,document.getElementById(`mouse-prompt`).classList.add(`hidden`),this.input.releaseLock();let e=this.inEncounter||!!this.practice;this.overlay.show({title:`Vamos brincar?`,onEscape:()=>this.startPlaying(),text:this.player.peaceful?`Continue pintando e brincando com o coelhinho.`:e?`Continue ou saia da batalha.`:this.mode===`oneblock`&&!this.oneBlock.ruinUnlocked?`Seu bloco infinito está esperando.`:`Continue construindo ou visite o chefão quando quiser.`,button:`Continuar`,secondary:`Modos de jogo`,showControls:!1},()=>this.startPlaying(),()=>this.showMenu()),this.logPanel(`pause`),this.addPlayActions()}die(){if(this.state===`dead`)return;this.pendingDeath=!1,this.deaths+=1,this.oneBlock.noteDeath(),this.session?.record(`death`),this.state=`dead`,this.sfx.play(`death`),this.input.releaseLock(),this.hud.bossBar.hide();let e=this.ruin.active,t=this.grove.active,n=this.voidFall;this.voidFall=!1,this.arena.reset(this.context),this.ruin.reset(this.context),this.grove.reset(this.context),this.entities.clear(),this.oneBlock.cancelWarning(),this.finishFight(),this.ensureSafeSpawn(),this.persistSave({atSpawn:!0}),this.overlay.show({title:`Vamos tentar de novo?`,text:this.deathText(e,t,n),button:`Renascer`,secondary:`Modos de jogo`,showControls:!1,showSettings:!0},()=>{let e=this.player.flying;this.player.respawn(),this.player.flying=this.player.creative&&e,this.world.generator.shrineUnlocked&&!this.arena.defeated&&this.arena.rebuildAltar(this.context.world),this.world.generator.ruinUnlocked&&!this.ruin.defeated&&this.ruin.rebuildStatue(this.context.world),this.world.generator.beaconUnlocked&&!this.grove.defeated&&this.grove.rebuildBeacon(this.context.world),this.arena.discovered&&(this.player.yaw=Math.atan2(-(cu.x-this.player.spawn.x),-(cu.z-this.player.spawn.z))),this.startPlaying()},()=>this.showMenu()),this.overlay.addAction(`Voltar à base`,()=>{this.goHome(),this.startPlaying()})}win(){this.session?.record(`victory`,{boss:`warden`}),this.rewardBoss(W.WardenTrophy),this.finishFight(),this.arena.rebuildAltar(this.world),this.unlockCacheIsland(),this.lightVictorySign(`warden`),this.state=`victory`,this.sfx.play(`victory`),this.input.releaseLock(),this.hud.bossBar.hide(),this.persistSave(),this.overlay.show({title:`Você venceu!`,text:this.victoryText(),button:`Voltar à base`,secondary:`Continuar explorando`,showControls:!1,showSettings:!0},()=>{this.goHome(),this.startPlaying()},()=>this.startPlaying())}newGame(e,t=`classic`){this.mode=e,this.practice=null,this.fightCreative=!1,this.creativePalette=void 0,this.tutorialDone=!1,this.guidance=!0,this.home=void 0,this.fightReturn=null,this.buildHistory.clear(),this.buildLesson=0,this.survival=void 0,this.trophies.clear(),this.builds.load(),this.pet=null,this.petHome=null,this.petFollowing=!1,this.player.creative=!1,this.player.health.immune=!1,this.player.inventory.unlimited=!1,this.player.gentle=!0,this.player.edgeProtection=!0,this.player.flying=!1,this.player.pitch=0,this.sfx.resume(),this.input.requestLock(),this.pendingDeath=!1,this.elapsed=0,this.trauma=0,this.stepDistance=0,this.saveTimer=0,this.saveSoon=!1,this.wasInWater=!1,this.voidFall=!1,this.deaths=0,this.blocksMined=0,this.hintedConsumable=!1,this.hintedUpgrade=!1,this.hintedTorch=!1,this.hintedBed=!1,this.hintedPlates=!1,this.hintedStagger=!1,this.shownHints.clear(),this.guideTimer=0,this.player.hammerTier=yp.Wood,this.player.plates=xp.None,this.viewModel.setTier(yp.Wood),this.viewModel.setPlates(xp.None),this.viewModel.setHeld(null),this.entities.clear(),this.arena.beginNewRun(),this.ruin.beginNewRun(),this.grove.beginNewRun(),this.particles.clear(),this.torchLights.clear(),this.chunks.reset(),this.seed=Math.random()*2147483647|0,this.world.reseed(this.seed,this.mode),this.oneBlock.reset(this.seed,t),this.player.swing=0,this.hud.bossBar.hide(),this.hud.hideHint(),this.hud.setObjective(null),this.hud.compass.update(!1,0,``),this.prepareWorld(),this.startPlaying()}get inEncounter(){return this.arena.active||this.ruin.active||this.grove.active}tryStartFight(){this.player.peaceful||this.inEncounter||!this.world.generator.shrineUnlocked||!this.arena.canSummon(this.player.position)||this.confirmFight(!1)}tryStartRuinFight(){this.player.peaceful||this.inEncounter||!this.world.generator.ruinUnlocked||!this.ruin.canSummon(this.player.position)||this.confirmFight(!0)}tryStartGroveFight(){this.player.peaceful||this.inEncounter||!this.world.generator.beaconUnlocked||!this.grove.canSummon(this.player.position)||this.confirmBeaconFight()}watchBossBeats(){let e=this.arena.boss??this.ruin.boss??this.grove.boss,t=e&&!e.removed?e.stateName:null;t!==this.lastBossState&&(this.lastBossState=t,t===`phaseShift`?this.hitStop.trigger(Sl.phase):t===`dying`&&this.hitStop.trigger(Sl.defeat))}watchWaves(){if(!this.inEncounter){this.hintedWall=!1;return}if(this.hintedWall||!nu(this.player.inventory))return;let e=this.entities.entities.find(e=>(e instanceof Lu||e instanceof np)&&e.outcome===`hit`);if(!e)return;this.hintedWall=!0;let t=e instanceof np?Ov:Dv;this.hud.showHint(t,4.5),this.narrator?.say(t)}hintStagger(){this.hintedStagger=!0,this.hud.showHint(`BATA AGORA! O chefão está vulnerável!`,3.4)}rememberHint(e){this.shownHints??=new Set,this.shownHints.add(e),e===`eat`&&(this.hintedConsumable=!0),e===`torch`&&(this.hintedTorch=!0)}inventoryHas(e){for(let t of this.player.inventory.slots)if(t.block!==null&&t.count>0&&e(t.block))return!0;for(let[t,n]of this.player.inventory.reserve)if(n>0&&e(t))return!0;return!1}updateCoach(e){if(!this.guidance||this.inEncounter||this.practice){this.guideTimer=0;return}if(this.hud.hintVisible){this.guideTimer=0;return}if(this.guideTimer+=e,this.guideTimer<4)return;this.guideTimer=0;let t=y_({enabled:this.guidance,fighting:!1,health:this.player.health.current,hasHeal:this.inventoryHas(zl),mode:this.mode,hasDirtOrGrass:this.inventoryHas(e=>e===W.Dirt||e===W.Grass),hasPlanksOrLog:this.inventoryHas(e=>e===W.Planks||e===W.Log),hasTorchFuel:this.inventoryHas(Bl),hasTorch:this.inventoryHas(e=>e===W.Torch),platformDone:this.oneBlock.goals.has(`platform`),shelterDone:this.oneBlock.goals.has(`shelter`),ruinUnlocked:!this.player.peaceful&&(this.mode===`adventure`||this.oneBlock.ruinUnlocked),ruinFound:this.player.peaceful||this.arena.ruinFound},this.shownHints);t&&(this.rememberHint(t.id),this.hud.showHint(t.text,4.2),this.narrator?.say(t.text),this.saveSoon=!0)}deathText(e,t,n){return n&&!e&&!t?`Você caiu! Seus itens estão guardados. Renasça e amplie sua ilha.`:e?`Seus itens continuam com você. Renasça perto e tente o Sentinela de novo quando quiser.`:t?`Seus itens continuam com você. Renasça perto e tente o Faroleiro de novo quando quiser.`:this.arena.defeated?`Seus itens estão seguros. Renasça para continuar.`:`Seus itens estão seguros. Renasça e escolha quando tentar de novo.`}handleLockChange(e){if(document.getElementById(`mouse-prompt`).classList.toggle(`hidden`,e||this.state!==`playing`),e&&this.state!==`playing`){this.input.releaseLock();return}!e&&this.state===`playing`&&this.pause()}tick(e){this.state===`playing`&&(this.input.locked?this.updateWorld(e):this.input.wasPressed(`Escape`)&&this.pause()),this.sfx.setMusic(yl(this.state===`playing`&&this.input.locked,this.inEncounter)),this.sfx.updateMusic(),this.updateAtmosphere(e),this.renderer.render(this.scene,this.camera),this.viewModel.render(this.renderer,this.scene),this.input.endFrame()}updateWorld(e){if(this.input.wasPressed(`Escape`)){this.pause();return}if(this.input.wasPressed(`KeyB`)&&!this.practice){this.openCatalog();return}if(this.input.wasPressed(`KeyC`)&&!this.player.creative&&!this.inEncounter&&!this.practice){this.showRecipes();return}if(this.input.wasPressed(`KeyH`)){this.showHelp();return}if(this.input.wasPressed(`KeyP`)){this.palette.setMode(!this.palette.mode),this.palette.onChange?.();return}this.input.wasPressed(`KeyV`)&&this.cycleCameraView(),this.input.wasPressed(`KeyZ`)&&this.undoBuild(this.input.isDown(`ShiftLeft`)||this.input.isDown(`ShiftRight`)),this.input.wasPressed(`KeyY`)&&this.undoBuild(!0),this.elapsed+=e,this.session?.observe({dt:e,playing:this.state===`playing`,locked:this.input.locked,moving:Pm(this.input),looking:this.input.mouseDX!==0||this.input.mouseDY!==0,fps:this.loop.fps}),this.handleHotbarInput();let t=this.tossHold.update(this.input.isDown(`KeyQ`)&&!this.practice,e);t===`fire`?this.interaction.tossSelected():t===`tap`&&this.hud.showHint(`Segure Q para soltar um bloco`,2),this.input.wasPressed(`F3`)&&this.hud.debug.toggle(),this.player.health.immune=this.player.peaceful||this.player.creative||this.practice!==null,this.interaction.paintMode=this.palette.mode,this.interaction.paintBlock=this.palette.color,this.oneBlock.gentle=this.player.gentle,this.mode===`oneblock`&&this.oneBlock.update(e,this.world,this.entities,this.player),this.controller.look(this.input),this.controller.update(e,this.input),this.mode===`oneblock`&&!this.player.flying&&this.player.position.y<12&&(this.player.peaceful?(this.player.respawn(),this.player.flying=!1,this.hud.showHint(`O coelhinho trouxe você de volta para a ilha.`,2.6)):(this.voidFall=!0,this.player.health.damage(this.player.health.max,{bypassInvulnerability:!0})));let n=!this.player.peaceful||this.inEncounter||this.practice!==null;n&&this.combat.update(e,this.input);let r=!this.practice||this.practice.stage===`wall`;this.interaction.previewEnabled=!this.inEncounter&&r;let i=r?this.interaction.update(e,this.input,n&&this.combat.aimed!==null):{brokeBlock:!1,brokenBlock:void 0};if(this.carrotClock+=e,this.carrotClock>=7&&(this.carrotClock=0,zp(this.world,this.player.position.x,this.player.position.y,this.player.position.z)),this.state!==`playing`||(i.brokeBlock&&(this.blocksMined+=1,this.session?.record(`block_removed`,{block:pv(i.brokenBlock)}),this.buildLesson===2&&(this.buildLesson=0,this.tutorialDone=!0,this.saveSoon=!0,this.session?.record(`lesson`,{step:`done`}),this.hud.showHint(`Muito bem! Você já sabe escolher, colocar e remover blocos.`,5))),this.context.dt=e,this.context.elapsed=this.elapsed,this.hitStop.update(e)||(this.entities.update(this.context),this.watchBossBeats(),this.watchWaves()),this.state!==`playing`))return;this.arena.update(),this.ruin.update(),this.grove.update(),this.tendPet(),this.tendVillage();let a=this.builds.update(this.world,e);a&&this.celebrateBuild(a),this.world.generator.shrineUnlocked&&!this.player.creative&&this.arena.tryDiscover(this.player),this.tryDiscoverRuin(),this.tryClaimCache(),this.player.health.update(e),this.chunks.update(this.player.position.x,this.player.position.z),this.particles.update(e),this.torchLights.update(this.world,this.player.position.x,this.player.position.y+1.2,this.player.position.z),this.applyShake(e),this.updateFootsteps(e);let o=this.player.flying?0:Math.hypot(this.player.velocity.x,this.player.velocity.z);this.viewModel.setTier(this.player.hammerTier),this.viewModel.setFirstPerson(this.controller.view===xm.First),this.viewModel.update(e,this.player.swing,qp,this.reducedMotion?0:o),this.playerModel.setVisible(this.controller.view!==xm.First),this.playerModel.setTier(this.player.hammerTier),this.playerModel.setPlates(this.player.plates),this.playerModel.update(e,{x:this.player.position.x,y:this.player.position.y,z:this.player.position.z,yaw:this.player.yaw,moving:o>.4&&this.player.body.onGround&&!this.player.flying,speed:o,swing:this.player.swing,swingDuration:qp,reducedMotion:this.reducedMotion}),this.updateHud(e),this.updateCoach(e),this.updateSave(e),this.pendingDeath&&(this.die(),this.chunks.update(this.player.position.x,this.player.position.z))}handleHotbarInput(){for(let e=0;e<9;e++)this.input.wasPressed(`Digit${e+1}`)&&this.player.inventory.select(e);this.input.wheelDelta!==0&&this.player.inventory.cycle(this.input.wheelDelta)}updateHud(e){this.hud.update(e,this.player.inventory,this.player.health.current,this.player.hammerTier,this.player.plates),this.viewModel.setPlates(this.player.plates),this.hud.setSeed(this.seed),fv(`carrot-count`,`Cenouras: ${this.player.inventory.count(W.Carrot)}`);let t=this.player.peaceful?`${this.oneBlock.label} · ilha para pintar`:this.oneBlock.ruinUnlocked?this.oneBlock.shrineUnlocked?this.oneBlock.beaconUnlocked?`Ilhas liberadas`:`Farol: ${this.oneBlock.broken}/${this.oneBlock.beaconAt}`:`Santuário: ${this.oneBlock.broken}/${this.oneBlock.shrineAt}`:`Ruína: ${this.oneBlock.broken}/${this.oneBlock.ruinAt}`,n=this.inEncounter||!!this.practice,r=dv({mode:this.mode,creative:this.player.creative,flying:this.player.flying,fighting:n,tutorialDone:this.tutorialDone,elapsed:this.elapsed,oneBlockMark:`${this.oneBlock.label} · ${t}`});this.hud.setPhase(r.phase);let i=n?0:this.buildLesson;Lp(i),i!==this.spokenLesson&&(this.spokenLesson=i,i&&this.narrator?.say(Ip(i),0)),fv(`flight-status`,r.flight),fv(`play-help`,r.playHelp);let a=this.player.inventory.selectedSlot,o=a.count>0?a.block:null;this.viewModel.setHeld(o),this.playerModel.setHeld(o);let s=this.arena.boss??this.ruin.boss??this.grove.boss;s&&!s.removed?(this.hud.bossBar.update(s.health?.fraction??0),this.hud.bossBar.setVulnerable(s.stateName===`stagger`)):(this.arena.defeated||this.ruin.defeated)&&(this.inEncounter||this.hud.bossBar.hide()),this.updateCrosshair(),this.updateGuide(),this.hud.debug.update(e,()=>this.debugLines())}applySettings(e){this.sfx.setVolume(e.volume),this.sfx.setMuted(e.muted),this.sfx.musicEnabled=e.music,this.narrator.enabled=e.narrator,this.narrator.muted=e.muted,this.narrator.volume=Math.min(1,e.volume*2),(!e.narrator||e.muted)&&this.narrator.stop(),this.controller.lookScale=e.sensitivity,this.quality=e.quality,this.reducedMotion=this.controller.reducedMotion=e.reducedMotion,this.hud.reducedEffects=e.reducedEffects;let t=gm[e.quality];this.chunks.setRenderDistance(t.distance),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,t.pixelRatio)),this.particles.density=e.reducedEffects?Math.min(.2,t.particles):t.particles,this.torchLights.limit=t.lights,document.documentElement.classList.toggle(`calm-effects`,e.reducedMotion||e.reducedEffects),this.resize()}updateCrosshair(){let e=this.inEncounter||!!this.practice,t=this.interaction.target,n=this.mode===`oneblock`&&t!==null&&wf(t.x,t.y,t.z),r=this.arena.boss??this.ruin.boss??this.grove.boss,i=!1,a=!1,o=!1;for(let e of this.entities.entities)!(e instanceof Lu||e instanceof np)||!e.approaching(this.player.position)||(e.shelters(this.world,this.player.position)?o=!0:e instanceof np?a=!0:i=!0);let s=sv(r&&!r.removed?r.stateName:void 0,this.practice?.stage,i,o,a),c=lv(s);c!==this.spokenFightCue&&(this.spokenFightCue=c,this.narrator?.say(c,Ev)),s?uv(s):this.controller.edgeBlocked?uv({icon:`✋`,key:`Espaço`,text:`Proteção de borda: queda à frente`,kind:`warning`}):this.interaction.placementHint?uv({icon:`!`,key:``,text:this.interaction.placementHint,kind:`warning`}):this.buildLesson?uv(null):!this.player.peaceful&&this.combat.aimed?uv({icon:`🔨`,key:`Esquerdo`,text:`Bater`,kind:`attack`}):!this.player.peaceful&&(this.interaction.aimingAltar||this.interaction.aimingStatue||this.interaction.aimingBeacon)?uv({icon:`👑`,key:`Direito`,text:`Visitar chefão`,kind:`build`}):this.palette.mode&&t?uv({icon:`🎨`,key:`Direito`,text:`Pintar este bloco`,kind:`build`}):Kl(this.player.inventory.selectedSlot.block??-1)?uv({icon:`✨`,key:`Direito`,text:`Dar ao coelhinho`,kind:`build`}):Gl(this.player.inventory.selectedSlot.block??-1)?uv({icon:`🥕`,key:`Direito`,text:`Plantar ou dar ao coelhinho`,kind:`build`}):this.interaction.aimingBed?uv({icon:`☾`,key:`Direito`,text:`Descansar`,kind:`build`}):this.interaction.aimingChest?uv({icon:`📦`,key:`Direito`,text:`Abrir baú`,kind:`build`}):this.interaction.holdingConsumable?uv({icon:`♥`,key:`Direito`,text:`Comer`,kind:`build`}):n?uv({icon:`🔨`,key:`Esquerdo`,text:`Segure para pegar blocos`,kind:`build`}):this.interaction.holdingTorchFuel||this.interaction.holdingUpgradeOre?uv({icon:`🔨`,key:`C`,text:`Criar itens`,kind:`build`}):uv(t?{icon:`🧱`,key:`Direito`,text:`Colocar · esquerdo remove`,kind:`build`}:null),this.combat.aimed?this.hud.setCrosshair(`attack`):e?this.hud.setCrosshair(`idle`):this.interaction.aimingAltar||this.interaction.aimingStatue||this.interaction.aimingBeacon?this.hud.setCrosshair(`altar`):this.interaction.holdingConsumable?this.hud.setCrosshair(`heal`):this.interaction.holdingUpgradeOre?this.hud.setCrosshair(`smith`):this.interaction.aimingBed?this.hud.setCrosshair(`rest`):this.interaction.aimingChest||this.interaction.holdingTorchFuel||this.interaction.holdingBedMaterial&&!this.interaction.target?this.hud.setCrosshair(`craft`):this.interaction.target?this.hud.setCrosshair(`block`):this.hud.setCrosshair(`idle`)}updateGuide(){let e=this.player.position;if(this.practice){this.setGuideObjective(null),this.hud.compass.update(!1,0,``);return}if(this.player.peaceful&&!this.inEncounter){let e=this.palette.mode?`Escolha uma cor e pinte o bloco`:`Pinte, construa e dê cenoura ao coelhinho`;this.setGuideObjective(this.guidance?e:null),this.hud.compass.update(!1,0,``);return}if(this.player.creative&&!this.inEncounter){this.setGuideObjective(this.guidance?`Construa do seu jeito · Esc: sua base e chefões`:null),this.hud.compass.update(!1,0,``);return}if(!this.guidance&&!this.inEncounter){this.setGuideObjective(`Construa do seu jeito · B: blocos e mochila`),this.hud.compass.update(!1,0,``);return}if(this.inEncounter){this.setGuideObjective(null),this.hud.compass.update(!1,0,``);return}if((this.mode===`adventure`||this.oneBlock.ruinUnlocked)&&!this.ruin.defeated&&this.arena.guideStage(e)===`surface`){this.setGuideObjective(this.arena.ruinFound?`Botão direito na estátua: enfrentar o Sentinela`:`Encontre o Sentinela: siga a bússola ou use Visitar no menu`),this.pointCompass(e,fu.x+.5,e.y,fu.z+.5);return}if((this.mode===`adventure`||this.oneBlock.beaconUnlocked)&&this.ruin.defeated&&this.arena.defeated&&!this.grove.defeated){this.setGuideObjective(`O farol está ao sul. Botão direito na luz para enfrentar o Faroleiro`),this.pointCompass(e,Y.x+.5,e.y,Y.z+.5);return}if(this.mode===`adventure`||this.oneBlock.shrineUnlocked||this.arena.defeated){this.setGuideObjective(this.arena.objectiveText(e));let t=this.arena.guideTarget(e);if(!t){this.hud.compass.update(!1,0,``);return}this.pointCompass(e,t.x,t.y,t.z);return}this.setGuideObjective(`Quebre o bloco infinito`),this.hud.compass.update(!1,0,``)}pointCompass(e,t,n,r){let i=t-e.x,a=r-e.z,o=qu(Math.atan2(-i,-a)-this.player.yaw),s=Math.round(Math.hypot(i,a)),c=Math.round(e.y-n),l=c>2?`${c} abaixo`:c<-2?`${-c} acima`:`mesma altura`;this.hud.compass.update(!0,o,`${s}m · ${l}`)}debugLines(){let e=this.player.position,t=this.arena.boss;return[`fps      ${this.loop.fps.toFixed(0)}`,`pos      ${e.x.toFixed(1)} ${e.y.toFixed(1)} ${e.z.toFixed(1)}`,`chunk    ${Math.floor(e.x/16)} ${Math.floor(e.z/16)}`,`chunks   ${this.chunks.loadedChunks} loaded`,`mesh     ${this.chunks.activeJobs} active / ${this.chunks.queuedJobs} queued`,`draws    ${this.renderer.info.render.calls}`,`tris     ${this.renderer.info.render.triangles}`,`entities ${this.entities.entities.length}`,`boss     ${t?`${t.stateName} p${t.phase+1}`:`dormant`}`,`ruin     ${this.ruin.boss?`${this.ruin.boss.stateName} p${this.ruin.boss.phase+1}`:this.ruin.defeated?`fallen`:`dormant`}`,`hammer   ${bp[this.player.hammerTier].name}${this.player.plates===xp.None?``:` + ${Sp[this.player.plates].name}`}`,`seed     ${this.seed}`,`phase    ${this.oneBlock.label} (${this.oneBlock.broken})`,`ground   ${this.player.body.onGround?`yes`:`no`}${this.player.flying?` (flying)`:``}`]}updateFootsteps(e){if(this.player.flying)return;let t=this.player.swimming;if(!t&&!this.player.body.onGround)return;let n=Math.hypot(this.player.velocity.x,t?this.player.velocity.y:0,this.player.velocity.z);this.stepDistance+=n*e;let r=t?Sv*1.15:Sv;this.stepDistance<r||(this.stepDistance=0,this.sfx.play(t?`splash`:`step`))}shake(e){this.trauma=Ju(this.trauma+e,0,1)}applyShake(e){if(this.reducedMotion){this.trauma=0;return}if(this.trauma<=0)return;this.trauma=Math.max(0,this.trauma-e*1.4);let t=this.trauma*this.trauma;this.camera.position.x+=(Math.random()-.5)*t*.9,this.camera.position.y+=(Math.random()-.5)*t*.9,this.camera.rotation.z+=(Math.random()-.5)*t*.12}updateAtmosphere(e){let t=Ju((this.camera.position.y-yv)/26,0,1);this.blendedColor.copy(this.caveColor).lerp(this.skyColor,t);let n=this.eyeInWater();n&&this.blendedColor.copy(this.waterColor),this.fog.color.copy(this.blendedColor),this.scene.background.copy(this.blendedColor),this.fog.near=n?1.4:16+t*36,this.fog.far=n?16:90+t*80,this.sunLight.intensity=n?.18:.1+t*.95,this.skyLight.intensity=n?.28:.42+t*.73,this.lamp.position.copy(this.camera.position),this.lamp.intensity=n?22:34*(1-t),this.lamp.color.setHex(n?8308991:16766883);let r=+!!this.inEncounter,i=n?.35:1;this.sfx.setAmbience(t*(1-r*.35)*i,(1-t)*(1-r*.2)*i,r),this.hud.setUnderwater(n);let a=this.state===`playing`&&this.player.sprinting&&!this.player.swimming&&!this.player.flying&&!this.reducedMotion?vv:_v;Math.abs(this.camera.fov-a)>.05&&(this.camera.fov=Xu(this.camera.fov,a,10,e),this.camera.updateProjectionMatrix()),this.updateWaterEntry()}eyeInWater(){return this.player.getEyePosition(this.eyeScratch),Vl(this.world.getBlock(Math.floor(this.eyeScratch.x),Math.floor(this.eyeScratch.y),Math.floor(this.eyeScratch.z)))}updateWaterEntry(){let e=this.player.swimming||this.eyeInWater();e&&!this.wasInWater&&(this.sfx.play(`splash`),this.particles.burst(this.camera.position,{count:14,color:8304360,speed:2.2,spread:.45,life:.45,gravity:8,upwardBias:.2})),this.wasInWater=e}tryDiscoverRuin(){this.player.peaceful||this.ruin.active||this.arena.active||this.practice||this.mode===`oneblock`&&!this.oneBlock.ruinUnlocked||this.arena.tryDiscoverRuin(this.player.position)&&(this.hud.showHint(`Você encontrou o Sentinela! Botão direito na estátua para escolher a luta`,4.2),this.saveSoon=!0)}tryClaimCache(){if(!this.world.generator.cacheUnlocked||!this.arena.tryClaim(this.player.position))return;this.player.setSpawn(this.player.position.x,this.player.position.y,this.player.position.z);let e=this.player.inventory.add(W.Mushroom,6)+this.player.inventory.add(W.CrystalOre,2)+this.player.inventory.add(W.Torch,8)+this.player.inventory.add(W.GoldOre,3);this.sfx.play(`summon`),this.player.getEyePosition(this.eyeScratch),this.particles.burst(this.eyeScratch,{count:18,color:16769162,speed:2.4,spread:.55,life:.55,gravity:6}),this.hud.showHint(e>0?`Recompensa guardada na mochila. Você vai renascer aqui.`:`Você encontrou materiais! Vai renascer aqui.`,4.5),this.saveSoon=!0}updateSave(e){this.saveTimer+=e,(this.saveSoon&&this.saveTimer>=1||this.saveTimer>=wv)&&(this.saveSoon=!1,this.saveTimer=0,this.persistSave())}persistSave(e={}){if(this.player.dead&&!e.atSpawn)return;let t=D_(this.snapshotRun(e.atSpawn===!0));this.session?.record(`save`,{ok:t}),document.getElementById(`save-status`).textContent=t?`✓ Mundo salvo neste navegador`:`⚠ Não foi possível salvar. Exporte seu mundo pelo menu.`}snapshotRun(e){let t=this.fightReturn,n=t?.position??(e?this.player.spawn:this.player.position),r=t?.spawn??this.player.spawn,i=this.fightCreative&&this.creativePalette?this.creativePalette:this.inventorySnapshot();return{version:5,updatedAt:Date.now(),home:this.home,guidance:this.guidance,tutorialDone:this.tutorialDone,creativePalette:this.player.creative?this.inventorySnapshot():this.creativePalette,creative:this.player.creative||this.fightCreative,gentle:this.player.gentle,edgeProtection:this.player.edgeProtection,reserve:i.reserve,survival:this.fightCreative?this.inventorySnapshot():this.survival,trophies:[...this.trophies],builds:[...this.builds?.found??[]],pet:this.petHome?{...this.petHome,following:this.petFollowing}:void 0,mode:this.mode,seed:this.seed,elapsed:this.elapsed,deaths:this.deaths,blocksMined:this.blocksMined,hintedConsumable:this.hintedConsumable,hintedUpgrade:this.hintedUpgrade,hintedTorch:this.hintedTorch,hintedBed:this.hintedBed,hintedPlates:this.hintedPlates,hintedStagger:this.hintedStagger,shownHints:[...this.shownHints??[]],player:{flying:t?.flying??this.player.flying,x:n.x,y:n.y,z:n.z,yaw:t?.yaw??this.player.yaw,pitch:t?.pitch??(e?0:this.player.pitch),spawnX:r.x,spawnY:r.y,spawnZ:r.z,health:e?this.player.health.max:this.player.health.current,hammer:this.player.hammerTier,plates:this.player.plates,selected:i.selected,slots:i.slots.map(e=>({block:e.block,count:e.count}))},arena:{defeated:this.arena.defeated,discovered:this.arena.discovered,cacheClaimed:this.arena.cacheClaimed,ruinFound:this.arena.ruinFound,ruinDefeated:this.ruin.defeated,beaconDefeated:this.grove.defeated},oneBlock:this.oneBlock.snapshot(),edits:this.world.exportEdits()}}applySave(e){this.session?.record(`loaded`);let t=this.world.onEdit;this.world.onEdit=null,this.practice=null,this.fightCreative=!1,this.fightReturn=null,this.buildHistory.clear(),this.buildLesson=0,this.hud.hideHint(),this.hud.setObjective(null),this.hud.compass.update(!1,0,``),this.player.creative=e.creative===!0&&e.mode===`adventure`,this.player.gentle=e.gentle!==!1,this.player.edgeProtection=e.edgeProtection!==!1,this.player.health.immune=!!this.player.peaceful||this.player.creative,this.player.inventory.unlimited=this.player.creative,this.survival=e.survival,this.creativePalette=e.creativePalette,this.guidance=e.guidance!==!1,this.tutorialDone=e.tutorialDone===!0,this.home=e.home??{x:e.player.spawnX,y:e.player.spawnY,z:e.player.spawnZ},this.trophies.clear();for(let t of e.trophies??[])this.trophies.add(t);this.builds?.load(e.builds),this.pet=null,this.petHome=e.pet?{x:e.pet.x,y:e.pet.y,z:e.pet.z}:null,this.petFollowing=e.pet?.following===!0,this.mode=e.mode,this.pendingDeath=!1,this.saveSoon=!1,this.saveTimer=0,this.hud.bossBar.hide(),this.seed=e.seed,this.elapsed=e.elapsed,this.deaths=e.deaths,this.blocksMined=e.blocksMined,this.hintedConsumable=e.hintedConsumable,this.hintedUpgrade=e.hintedUpgrade,this.hintedTorch=e.hintedTorch,this.hintedBed=e.hintedBed===!0,this.hintedPlates=e.hintedPlates===!0,this.hintedStagger=e.hintedStagger===!0,this.shownHints??=new Set,this.shownHints.clear();for(let t of b_(e))this.shownHints.add(t);this.guideTimer=0,this.entities.clear(),this.arena.beginNewRun(),this.ruin.beginNewRun(),this.grove.beginNewRun(),this.arena.defeated=e.arena.defeated,this.arena.discovered=e.arena.discovered,this.arena.cacheClaimed=e.arena.cacheClaimed===!0,this.arena.ruinFound=e.arena.ruinFound===!0,this.ruin.defeated=e.arena.ruinDefeated===!0,this.grove.defeated=e.arena.beaconDefeated===!0,this.particles.clear(),this.torchLights.clear(),this.chunks.reset(),this.world.reseed(e.seed,this.mode),this.oneBlock.reset(e.seed),this.oneBlock.load(e.oneBlock),this.syncGeneratorUnlocks(),this.world.importEdits(e.edits),this.player.inventory.load(e.player.slots,e.player.selected);for(let t of e.reserve??[])t.block!==null&&this.player.inventory.reserve.set(t.block,t.count);this.player.hammerTier=e.player.hammer,this.player.plates=e.player.plates??(e.player.plated?xp.Iron:xp.None),this.viewModel.setTier(e.player.hammer),this.viewModel.setPlates(this.player.plates),this.player.setSpawn(e.player.spawnX,e.player.spawnY,e.player.spawnZ),this.player.position.set(e.player.x,e.player.y,e.player.z),this.player.velocity.set(0,0,0),this.player.body.fallPeak=e.player.y,this.player.body.onGround=!1,this.player.health.setCurrent(Math.max(1,e.player.health)),this.player.yaw=e.player.yaw,this.player.pitch=e.player.pitch,this.player.flying=!1,this.player.swing=0,this.chunks.preload(e.player.x,e.player.z,2),this.world.generator.shrineUnlocked&&!this.arena.defeated&&this.arena.rebuildAltar(this.world),this.world.generator.ruinUnlocked&&!this.ruin.defeated&&this.ruin.rebuildStatue(this.world),this.mode===`oneblock`&&(this.world.ensureChunk(0,0),Rl(this.world.getBlock(0,72,0))||this.world.setBlock(0,72,0,W.Dirt)),this.player.health.invulnerability=5,this.player.creative&&(this.player.flying=e.player.flying!==!1),(this.player.position.y<0||this.player.body.intersectsWorld(this.world))&&(this.ensureSafeSpawn(),this.player.respawn()),this.controller.update(1e-4,this.input),this.world.onEdit=t,this.ensureBunny()}currentRun(){return{elapsed:this.elapsed,deaths:this.deaths,hammer:this.player.hammerTier,plates:this.player.plates,blocksMined:this.blocksMined}}victoryText(){let e=this.currentRun(),{best:t,isNewBest:n}=g_(e,`${this.mode}-${this.player.gentle?`gentle`:`normal`}`),r=[`Você venceu o Guardião! ${Nf.warden} Seu troféu está nos materiais. Decore sua base!`,``,f_(e)];return n?r.push(`Novo recorde`):r.push(`Recorde: ${f_(t)}`),r.join(`
`)}inventorySnapshot(){return{slots:this.player.inventory.slots.map(e=>({...e})),selected:this.player.inventory.selected,reserve:this.reserveSnapshot()}}reserveSnapshot(){return[...this.player.inventory.reserve].map(([e,t])=>({block:e,count:t}))}setCreative(e){if(this.mode===`adventure`&&this.player.creative!==e){if(e){if(this.survival=this.inventorySnapshot(),this.player.inventory.clear(),this.creativePalette){this.player.inventory.load(this.creativePalette.slots,this.creativePalette.selected);for(let e of this.creativePalette.reserve)e.block!==null&&this.player.inventory.reserve.set(e.block,e.count)}else for(let e of[W.Planks,W.Cobblestone,W.Glowstone,W.Log,W.Leaves,W.Bed,W.Carrot])this.player.inventory.add(e,e===W.Carrot?16:64);this.player.health.reset(),this.player.inventory.count(W.Carrot)||this.player.inventory.add(W.Carrot,16)}else{this.creativePalette=this.inventorySnapshot();let e=this.survival;if(this.player.inventory.clear(),e){this.player.inventory.load(e.slots,e.selected);for(let t of e.reserve)t.block!==null&&this.player.inventory.reserve.set(t.block,t.count)}this.survival=void 0,this.player.flying=!1,this.player.body.fallPeak=this.player.position.y,this.player.health.invulnerability=5}this.player.creative=e,this.player.inventory.unlimited=e,this.player.health.immune=!!this.player.peaceful||e}}chooseStyle(e){if(e===`oneblock`){this.newGame(e,`quick`);return}this.overlay.show({title:`Como quer brincar?`,text:`Construção livre: blocos sem fim e voo. Explorar: pegue terra, madeira e cenouras. Dá para pintar nos dois.`,button:`Construção livre ∞`,secondary:`Explorar`,showControls:!1},()=>this.startQuickBuild(),()=>this.newGame(e)),this.overlay.setBackAction(()=>this.showModeMenu(e))}confirmClassicOneBlock(){let e=T_(`oneblock`)?` Isso substitui a ilha atual.`:``;this.overlay.show({title:`Ilha devagar`,text:`Uma ilha maior para construir com calma.${e}`,button:`Criar partida`,secondary:`Voltar`,showControls:!1},()=>this.newGame(`oneblock`,`classic`),()=>this.showWorldOptions(`oneblock`))}cycleCameraView(e=!1){this.controller.cycleView();let t=this.controller.view===xm.First;if(this.viewModel.setFirstPerson(t),this.playerModel.setVisible(!t),e){this.state=`playing`,this.pause();return}this.hud.showHint(this.cameraViewDescription(),2.4)}cameraViewDescription(){return this.controller.view===xm.Back?`Por trás: veja a armadura`:`Primeira pessoa`}showPaused(){this.state=`playing`,this.pause()}stopForPanel(){document.getElementById(`mouse-prompt`).classList.add(`hidden`),this.state=`paused`,this.input.releaseLock(),this.persistSave()}addPlayActions(){if(this.practice){this.overlay.addAction(`Sair do treino`,()=>this.stopPractice(),{icon:`🏠`}),this.overlay.addAction(`Ver personagem`,()=>this.cycleCameraView(!0),{icon:`🧍`,description:this.cameraViewDescription()}),this.overlay.addAction(`Como brincar`,()=>this.showHelp(),{icon:`?`}),this.overlay.addAction(`Registro da sessão`,()=>this.showSessionPanel());return}if(this.inEncounter)this.overlay.addAction(`Sair da batalha`,()=>{this.session?.record(`encounter`,{action:`leave`}),this.arena.reset(this.context),this.ruin.reset(this.context),this.grove.reset(this.context),this.finishFight(),this.goHome(),this.startPlaying()},{icon:`🏠`,description:`Voltar com seus itens`});else{this.overlay.addAction(this.player.creative?`Construir`:`Mochila e criação`,()=>this.showBuildingTools(),{icon:`🧱`,description:`Blocos e ideias`}),this.player.peaceful||this.overlay.addAction(`Chefões`,()=>this.showBossMenu(),{icon:`👑`,description:`Treinar ou enfrentar`}),this.overlay.addAction(`Minha base`,()=>this.showHomeMenu(),{icon:`🏠`,description:`Seu lugar no mundo`});let{done:e,total:t}=iv(this.albumSections());this.overlay.addAction(`Álbum`,()=>this.showAlbum(),{icon:`📒`,description:`${e} de ${t} figurinhas`})}this.overlay.addAction(`Ver personagem`,()=>this.cycleCameraView(!0),{icon:`🧍`,description:this.cameraViewDescription()}),this.overlay.addAction(`Como brincar`,()=>this.showHelp(),{icon:`?`,description:`Uma ajuda rápida`}),this.overlay.addAction(`Mais opções`,()=>this.showMoreOptions()),this.overlay.addAction(`Registro da sessão`,()=>this.showSessionPanel())}showBuildingTools(){this.stopForPanel(),this.overlay.show({title:this.player.creative?`Vamos construir!`:`Mochila e criação`,text:this.player.creative?`O contorno verde mostra onde colocar. Z desfaz; Y refaz.`:`Escolha seus materiais ou crie itens.`,button:`Voltar ao jogo`,secondary:`Menu`,showControls:!1},()=>this.startPlaying(),()=>this.showPaused()),this.overlay.addAction(this.player.creative?`Escolher blocos`:`Abrir mochila`,()=>this.openCatalog(),{icon:`🧱`}),this.player.creative?(this.overlay.addAction(`Ideias para construir`,()=>this.showBuildIdeas(),{icon:`🏰`}),this.overlay.addAction(`Desfazer`,()=>{this.undoBuild(),this.showBuildingTools()},{icon:`↶`,disabled:!this.buildHistory.canUndo}),this.overlay.addAction(`Refazer`,()=>{this.undoBuild(!0),this.showBuildingTools()},{icon:`↷`,disabled:!this.buildHistory.canRedo})):this.overlay.addAction(`Criar itens`,()=>this.showRecipes(),{icon:`🔨`}),this.overlay.addAction(`Álbum`,()=>this.showAlbum(),{icon:`📒`,description:this.mode===`oneblock`?`Construções, troféus e metas da ilha`:`Construções e troféus`})}showBossMenu(){this.logPanel(`boss`),this.stopForPanel(),this.overlay.show({title:`Chefões`,text:`Você escolhe quando enfrentar. O treino não tira vida.`,button:`Voltar ao jogo`,secondary:`Menu`,showControls:!1},()=>this.startPlaying(),()=>this.showPaused()),this.world.generator.ruinUnlocked?(this.overlay.addAction(`Treinar com segurança`,()=>this.startPractice(),{icon:`🎯`,description:`Pular, desviar e bater`}),this.overlay.addAction(`Visitar o Sentinela`,()=>this.confirmFight(!0),{icon:`🗿`,description:`Chefão das ruínas`})):this.overlay.addAction(`Sentinela`,()=>{},{icon:`🔒`,description:`${this.oneBlock.broken}/${this.oneBlock.ruinAt} blocos`,disabled:!0}),this.world.generator.shrineUnlocked&&this.overlay.addAction(`Visitar o Guardião`,()=>this.confirmFight(!1),{icon:`💎`,description:`Chefão do santuário`}),this.world.generator.beaconUnlocked?this.overlay.addAction(`Visitar o Faroleiro`,()=>this.confirmBeaconFight(),{icon:`🌿`,description:`Chefão do farol`}):this.mode===`oneblock`&&this.oneBlock.shrineUnlocked&&this.overlay.addAction(`Faroleiro`,()=>{},{icon:`🔒`,description:`${this.oneBlock.broken}/${this.oneBlock.beaconAt} blocos`,disabled:!0})}showHomeMenu(){this.logPanel(`home`),this.stopForPanel(),this.overlay.show({title:`Minha base`,text:`Volte para casa ou escolha um novo lugar para ela.`,button:`Voltar ao jogo`,secondary:`Menu`,showControls:!1},()=>this.startPlaying(),()=>this.showPaused()),this.overlay.addAction(`Voltar à base`,()=>{this.goHome(),this.startPlaying()},{icon:`🏠`}),this.overlay.addAction(`Marcar minha base`,()=>this.markHome(),{icon:`📍`,description:`Usar o chão onde estou`})}showWorldOptions(e){this.overlay.show({title:`Cuidar dos mundos`,text:`Peça ajuda a um adulto para trocar ou recuperar seu mundo.`,button:`Voltar`,showControls:!1,onEscape:()=>this.showModeMenu(e)},()=>this.showModeMenu(e)),this.overlay.addAction(`Importar mundo`,()=>this.importWorld()),E_(e)&&this.overlay.addAction(`Recuperar cópia anterior`,()=>this.confirmRecovery(e)),e===`oneblock`&&this.overlay.addAction(`Nova partida no ritmo clássico`,()=>this.confirmClassicOneBlock(),{description:`Uma ilha mais devagar para construir`})}showMoreOptions(){this.stopForPanel();let e=this.inEncounter||!!this.practice;this.overlay.show({title:`Mais opções`,text:`Ajuste o jogo e cuide da sua partida.`,button:`Voltar à pausa`,secondary:`Continuar jogo`,showSettings:!0,showControls:!1},()=>this.showPaused(),()=>this.startPlaying()),e||(this.mode===`adventure`&&this.overlay.addAction(this.player.creative?`Explorar o mundo`:`Construção livre ∞`,()=>{this.player.creative&&this.goHome(),this.setCreative(!this.player.creative),this.showMoreOptions()}),this.player.peaceful||this.overlay.addAction(`Dificuldade: ${this.player.gentle?`Tranquila`:`Normal`}`,()=>{this.player.gentle=!this.player.gentle,this.showMoreOptions()}),this.overlay.addAction(`Proteção de borda: ${this.player.edgeProtection?`ligada`:`desligada`}`,()=>{this.player.edgeProtection=!this.player.edgeProtection,this.showMoreOptions()}),this.overlay.addAction(`Guia: ${this.guidance?`ligado`:`desligado`}`,()=>{this.guidance=!this.guidance,this.showMoreOptions()})),!e&&E_(this.mode)&&this.overlay.addAction(`Recuperar cópia anterior`,()=>this.confirmRecovery(this.mode)),this.overlay.addAction(`Exportar mundo`,()=>this.exportWorld()),e||this.overlay.addAction(`Importar mundo`,()=>this.importWorld())}openCatalog(e=`🌳 Natureza`){this.logPanel(`catalog`),this.stopForPanel();let t=this.player.creative;if(this.overlay.show({title:t?`Escolha um bloco`:`Sua mochila`,text:t?`Escolha uma figura. Depois, use o botão direito para colocar e o esquerdo para remover.`:`Os materiais que não couberam na barra ficam aqui. Escolha um para usar no espaço selecionado.`,button:`Voltar ao jogo`,secondary:`Menu`,showControls:!1},()=>this.startPlaying(),()=>this.showPaused()),t){for(let e of Object.keys(jp))this.overlay.addAction(e,()=>this.openCatalog(e));let t=[...jp[e]??[]];e===`✨ Decoração`&&(t.push(...this.trophies),this.trophies.has(W.SentinelTrophy)&&t.push(W.SentinelBanner),this.trophies.has(W.WardenTrophy)&&t.push(W.WardenLantern),this.trophies.has(W.BeaconTrophy)&&t.push(W.BeaconLantern)),this.overlay.addContent(Mp(this.atlas,t.map(e=>({block:e})),e=>{Object.assign(this.player.inventory.selectedSlot,{block:e,count:64}),this.tutorialDone||(this.buildLesson=1,this.session?.record(`lesson`,{step:1})),this.startPlaying()},this.player.inventory.selectedSlot.block)),this.overlay.addAction(`Ideias para construir`,()=>this.showBuildIdeas())}else if(this.overlay.addContent(Mp(this.atlas,this.reserveSnapshot(),e=>{this.player.inventory.equipReserve(e),this.startPlaying()})),!this.player.inventory.reserve.size){let e=document.createElement(`p`);e.textContent=`A mochila está vazia. Seus materiais estão na barra do jogo.`,this.overlay.addContent(e)}}showRecipes(){this.logPanel(`recipes`),this.stopForPanel(),this.overlay.show({title:`Criar itens`,text:`Escolha o que quer fazer. Os materiais da barra e da mochila contam juntos.`,button:`Voltar ao jogo`,secondary:`Menu`,showControls:!1},()=>this.startPlaying(),()=>this.showPaused()),this.overlay.addContent(Np(this.atlas,this.player,e=>{Op(this.player,e)&&(this.session?.record(`craft`,{recipe:e}),this.viewModel.setTier(this.player.hammerTier),this.viewModel.setPlates(this.player.plates),this.sfx.play(`place`),this.persistSave()),this.showRecipes()}))}albumSections(){return rv({builds:this.builds?.found??new Set,trophies:this.trophies,pet:!!this.petHome,islandGoals:this.mode===`oneblock`?this.oneBlock.goalProgress(this.world).map(e=>({label:e.label,current:e.current,target:e.target,done:this.oneBlock.goals.has(e.id),reward:`${e.count} ${Ll(e.reward).name}`})):null})}showAlbum(){this.logPanel(`album`),this.stopForPanel();let e=this.albumSections(),{done:t,total:n}=iv(e);this.overlay.show({title:`Álbum`,text:`${t} de ${n} figurinhas. Construa do seu jeito: o álbum reconhece casa, torre e curral, e cada prêmio é dado uma vez.`,button:`Voltar ao jogo`,secondary:`Menu`,showControls:!1},()=>this.startPlaying(),()=>this.showPaused()),this.overlay.addContent(av(e)),this.overlay.addAction(`Ideias para construir`,()=>this.showBuildIdeas(),{icon:`🏰`})}noticeBuild(e,t,n){if(this.inEncounter||this.practice)return;let r=this.builds.notice(this.world,e,t,n);r&&this.celebrateBuild(r)}celebrateBuild(e){let t=e.kind===`pen`&&!this.petHome;t&&(this.petHome={x:e.x+.5,y:e.y,z:e.z+.5},this.petFollowing=!1);let n=nv(e.kind,t);this.hud.showHint(n,6),this.narrator?.say(n),this.sfx.play(`victory`),this.session?.record(`build`,{id:e.kind}),this.saveSoon=!0}ensureBunny(){if(this.player.peaceful&&(this.player.health.immune=!0,this.player.health.current<this.player.health.max&&this.player.health.reset()),!this.player.peaceful||this.petHome)return;let e=this.player.spawn;this.petHome={x:e.x+1.1,y:e.y,z:e.z},this.petFollowing=!0}useSecretDoor(){if(this.mode!==`adventure`)return;let e=sf(this.world.generator.surfaceHeight(nf.doorX,nf.doorZ)),t=ff(this.world,e)===`open`?`A porta secreta abriu!`:`A porta secreta fechou.`;this.hud.showHint(t,2.4),this.narrator?.say(t),this.saveSoon=!0}tendVillage(){if(!this.player.peaceful||this.mode!==`adventure`||this.villageReady||!this.world.getChunk(rf.x>>4,rf.z>>4))return;this.villageReady=!0;let e=sf(this.world.generator.surfaceHeight(rf.x,rf.z))+1,t=[[rf.x-2,rf.z],[rf.x+2,rf.z],[rf.x,rf.z+2],[rf.x,rf.z-2]];for(let[n,r]of t)this.villagers.push(this.entities.add(new am(n+.5,e,r+.5)));this.golem=this.entities.add(new om(rf.x+.5,e,rf.z+.5)),this.golem.friends=this.villagers}tryFeedPet(e){let t=this.player.inventory;if(!t)return!1;let n=t.selectedSlot;if(!n||n.count<=0)return!1;let r=n.block??-1,i=Kl(r);if(!i&&!Gl(r))return!1;this.player.inventory.takeSelected(),i?e.growBig():e.feed();let a=i?`Uau! O coelhinho ficou gigante!`:`Nhac! O coelhinho adorou a cenoura!`;return this.hud.showHint(a,2.8),this.narrator?.say(a),this.sfx.play(`eat`),this.player.startSwing(),this.particles.burst(e.position,{count:14,color:i?16765274:16747220,speed:2.2,spread:.7,life:.7,gravity:4,upwardBias:.8}),this.saveSoon=!0,!0}tendPet(){let e=this.petHome;if(e){if(!this.pet||this.pet.removed){if(!this.world.getChunk(Math.floor(e.x)>>4,Math.floor(e.z)>>4))return;this.pet=this.entities.add(new nm(e))}if(this.pet.following=this.petFollowing&&!this.inEncounter&&!this.practice,this.pet.justShrunk){this.pet.justShrunk=!1;let e=`O coelhinho voltou ao tamanho normal.`;this.hud.showHint(e,2.4),this.narrator?.say(e)}}}tapPet(){let e=this.pet;if(!e||e.removed||this.inEncounter||this.practice)return!1;let t=new R,n=new R;this.player.getEyePosition(t),this.player.getForward(n);let r=this.entities.raycast(t,n,Kp,`neutral`,this.player.gentle?fm:.25);if(!r||r.entity!==e)return!1;let i=this.interaction.target;if(i&&i.distance<r.distance)return!1;if(this.tryFeedPet(e))return!0;this.petFollowing=!this.petFollowing;let a=this.petFollowing?`O coelhinho vai com você`:`O coelhinho espera aqui`;return this.hud.showHint(a,3),this.narrator?.say(a),this.sfx.play(`eat`),this.player.startSwing(),this.saveSoon=!0,!0}showBuildIdeas(){this.stopForPanel(),this.overlay.show({title:`O que vamos construir?`,text:`Veja uma ideia por etapas e construa do seu jeito.`,button:`Voltar ao jogo`,secondary:`Construir`,showControls:!1},()=>this.startPlaying(),()=>this.showBuildingTools());for(let e of J_)this.overlay.addAction(e.name,()=>this.showBuildIdea(e.id,0),{icon:e.icon,description:`${e.steps.length} etapas com figuras`})}showBuildIdea(e,t){let n=J_.find(t=>t.id===e);this.overlay.show({title:n.name,text:`${t+1}/${n.steps.length} · ${n.steps[t]}`,button:t<n.steps.length-1?`Próxima etapa`:`Escolher materiais`,secondary:`Outras ideias`,showControls:!1,onEscape:()=>this.showBuildIdeas()},()=>t<n.steps.length-1?this.showBuildIdea(e,t+1):this.openCatalog(),()=>this.showBuildIdeas()),this.overlay.addContent(X_(n,t)),t>0&&this.overlay.addAction(`Etapa anterior`,()=>this.showBuildIdea(e,t-1)),this.overlay.addAction(`Usar estes materiais`,()=>{this.player.creative&&(n.materials.forEach((e,t)=>Object.assign(this.player.inventory.slots[t],{block:e,count:64})),this.player.inventory.select(0),this.startPlaying())},{icon:`🧱`})}showHelp(){this.logPanel(`help`),this.stopForPanel();let e=this.mode===`oneblock`?`1. Olhe para baixo: o bloco infinito está sob seus pés.
2. Segure o botão esquerdo para quebrá-lo.
3. Escolha terra na barra e use o direito para ampliar a ilha.
4. Um baú ao lado abre com o botão direito.`:this.player.creative?`1. Aperte B e escolha um bloco.
2. Mire no chão e use o direito para colocar.
3. Clique com o esquerdo para remover.`:`1. Use o esquerdo para pegar blocos.
2. Use o direito para colocar ou usar.
3. Aperte B para abrir a mochila.`,t=this.player.peaceful?`P pinta. Siga o caminho amarelo e clique no quadro rosa. A cenoura dourada deixa o coelhinho gigante.`:this.mode===`oneblock`&&!this.oneBlock.ruinUnlocked?`O Sentinela aparece depois de ${this.oneBlock.ruinAt} blocos quebrados.`:`Para o chefão: Esc > Chefões > Visitar o Sentinela. Pule as ondas e bata quando aparecer BATA AGORA!`;this.overlay.show({title:`Como brincar`,text:`${e}\n\nPara andar: W A S D ou as setas, e o mouse para olhar.\nV mostra o personagem por trás. Aperte de novo para voltar.\n${t}`,button:`Voltar ao jogo`,secondary:`Menu`,showControls:!1},()=>this.startPlaying(),()=>this.showPaused()),this.player.creative&&(this.overlay.addAction(`Praticar construção`,()=>{this.tutorialDone=!1,this.buildLesson=0,this.openCatalog()}),this.overlay.addAction(`Pular tutorial`,()=>{this.tutorialDone=!0,this.buildLesson=0,this.startPlaying()})),this.overlay.addAction(`Mais controles e receitas`,()=>this.showAdvancedHelp())}showAdvancedHelp(){this.stopForPanel(),this.overlay.show({title:`Controles e receitas`,text:`V mostra o personagem por trás. Aperte de novo para a primeira pessoa.
F liga o voo na construção livre; Espaço sobe e Shift desce. Segurar W acelera.
Segure Q para soltar um bloco.
Z desfaz e Y refaz na construção livre, fora das lutas.
Cogumelo ou cristal: botão direito para comer.
1 carvão faz 4 tochas.
C abre a tela de criar: 4 tábuas fazem uma cama.
3 ferros ou ouros melhoram o martelo; mais 4 fazem armadura.
Esc abre o menu e salva. Exporte o mundo para guardar uma cópia.`,button:`Voltar ao jogo`,secondary:`Ajuda resumida`,showControls:!0},()=>this.startPlaying(),()=>this.showHelp())}startPractice(){this.session?.record(`practice`,{action:`start`}),this.stopForPanel(),this.fightReturn={position:this.player.position.clone(),spawn:this.player.spawn.clone(),yaw:this.player.yaw,pitch:this.player.pitch,flying:this.player.flying},this.fightCreative=this.player.creative,this.setCreative(!1),this.buildHistory.clear(),this.buildLesson=0;let e=du.centerX+7.5,t=du.centerZ+7.5;this.chunks.preload(e,t,2),this.player.setSpawn(e,this.world.generator.surfaceHeight(e,t)+1,t),this.ensureSafeSpawn(),this.player.respawn(),this.player.yaw=Math.PI/2,this.practice=new Bu(this.player.position.x-3,this.player.position.y,this.player.position.z,e=>this.hud.showHint(e,4),()=>this.stopPractice(!0)),this.entities.add(this.practice),this.startPlaying()}stopPractice(e=!1){this.session?.record(`practice`,{action:e?`complete`:`leave`}),this.practice=null;for(let e of this.entities.entities)(e instanceof Bu||e.team===`boss`&&e.clearedOnDeath)&&this.entities.remove(e);this.finishFight(),this.goHome(),this.stopForPanel(),this.overlay.show({title:e?`Treino concluído!`:`Treino encerrado`,text:e?`Você pulou, desviou e acertou! Pode visitar o chefão quando quiser.`:`Sua construção está esperando. Pode treinar outra vez quando quiser.`,button:`Voltar ao jogo`,secondary:`Menu`,showControls:!1},()=>this.startPlaying(),()=>this.showPaused())}confirmFight(e){let t=e?`sentinel`:`warden`;this.session?.record(`encounter`,{action:`invite`,boss:t}),this.stopForPanel(),this.overlay.show({title:e?`Enfrentar o Sentinela?`:`Enfrentar o Guardião?`,text:`Dificuldade ${this.player.gentle?`Tranquila`:`Normal`}. Pule as ondas e saia dos círculos. Quando ele ficar vulnerável, bata!\nDurante a luta, voo e invulnerabilidade ficam desligados. Seus itens e construções são preservados.`,button:`Enfrentar chefão`,secondary:`Agora não`,showControls:!1},()=>{this.session?.record(`encounter`,{action:`start`,boss:t}),this.buildLesson=0,this.hud.hideHint(),this.fightReturn={position:this.player.position.clone(),spawn:this.player.spawn.clone(),yaw:this.player.yaw,pitch:this.player.pitch,flying:this.player.flying},this.buildHistory.clear(),this.fightCreative=this.player.creative,this.setCreative(!1),e?this.player.setSpawn(fu.x+7.5,this.world.generator.surfaceHeight(fu.x,fu.z)+1,fu.z+.5):this.player.setSpawn(pu.x,pu.y,pu.z),this.ensureSafeSpawn(),this.player.respawn(),this.player.yaw=e?Math.PI/2:Math.PI,e?this.ruin.summon(this.world):this.arena.summon(),this.setGuideObjective(`Pule e desvie · bata quando aparecer BATA AGORA!`),this.hud.compass.update(!1,0,``),this.sfx.play(`summon`),this.startPlaying()},()=>this.startPlaying())}confirmBeaconFight(){this.session?.record(`encounter`,{action:`invite`,boss:`beacon`}),this.stopForPanel(),this.overlay.show({title:`Enfrentar o Faroleiro?`,text:`Dificuldade ${this.player.gentle?`Tranquila`:`Normal`}. Pule as ondas e o feixe de luz, ou fique atrás de um bloco. Quando ele ficar vulnerável, bata!\nDurante a luta, voo e invulnerabilidade ficam desligados. Seus itens e construções são preservados.`,button:`Enfrentar chefão`,secondary:`Agora não`,showControls:!1},()=>{this.session?.record(`encounter`,{action:`start`,boss:`beacon`}),this.buildLesson=0,this.hud.hideHint(),this.fightReturn={position:this.player.position.clone(),spawn:this.player.spawn.clone(),yaw:this.player.yaw,pitch:this.player.pitch,flying:this.player.flying},this.buildHistory.clear(),this.fightCreative=this.player.creative,this.setCreative(!1),this.player.setSpawn(Y.x+6.5,this.world.generator.surfaceHeight(Y.x,Y.z)+1,Y.z+.5),this.ensureSafeSpawn(),this.player.respawn(),this.player.yaw=Math.PI/2,this.grove.summon(this.world),this.setGuideObjective(`Pule e desvie · bata quando aparecer BATA AGORA!`),this.hud.compass.update(!1,0,``),this.sfx.play(`summon`),this.startPlaying()},()=>this.startPlaying())}finishFight(){this.hud.bossBar.hide(),this.hud.hideHint(),this.setGuideObjective(null);for(let e of this.entities.entities)e!==this.arena.boss&&e!==this.ruin.boss&&e!==this.grove.boss&&e.team===`boss`&&e.clearedOnDeath&&this.entities.remove(e);this.fightCreative&&(this.fightCreative=!1,this.setCreative(!0)),this.player.health.immune=!!this.player.peaceful||this.player.creative,this.player.health.invulnerability=5,this.fightReturn&&=(this.player.flying=this.player.creative&&this.fightReturn.flying===!0,this.player.spawn.copy(this.fightReturn.spawn),null)}rewardBoss(e){if(this.trophies.has(e))return;this.trophies.add(e),this.player.inventory.add(e,1);let t=e===W.SentinelTrophy?W.SentinelBanner:e===W.WardenTrophy?W.WardenLantern:W.BeaconLantern;this.player.inventory.add(t,8),this.player.creative||(this.player.inventory.add(W.Glowstone,16),this.player.inventory.add(W.Planks,32)),this.saveSoon=!0}showBossVictory(e,t){this.state=`victory`,this.input.releaseLock(),this.persistSave();let n=t===`beacon`?`O farol permite lutar de novo.`:`A estátua permite lutar de novo.`,r=`Você conseguiu! ${Nf[t]} Seu troféu está nos materiais. Decore sua base ou continue a aventura. ${n}`;this.overlay.show({title:e,text:r,button:`Voltar à base`,secondary:`Continuar explorando`,showControls:!1},()=>{this.goHome(),this.startPlaying()},()=>this.startPlaying())}markHome(){let e=this.player.position,t=this.world.getBlock(Math.floor(e.x),Math.floor(e.y-.1),Math.floor(e.z));if(!this.player.body.onGround||!Rl(t)||Ll(t).contactDamage>0){this.overlay.show({title:`Pouse para marcar sua base`,text:`Escolha um chão firme e desligue o voo com F. Depois marque sua base aqui.`,button:`Voltar ao jogo`,showControls:!1},()=>this.startPlaying());return}this.home={x:e.x,y:e.y,z:e.z},this.player.spawn.copy(e),this.persistSave(),this.startPlaying(),this.hud.showHint(`Sua base está marcada! Esc: Voltar à base.`,5)}goHome(){if(this.inEncounter||this.practice)return;let e=this.home??this.player.spawn,t=this.player.spawn.clone(),n=this.player.flying;this.player.setSpawn(e.x,e.y,e.z),this.ensureSafeSpawn(),this.player.respawn(),this.player.spawn.copy(t),this.player.flying=this.player.creative&&n,this.player.pitch=0,this.controller.update(1e-4,this.input)}undoBuild(e=!1){if(!this.player.creative||this.inEncounter)return;let t=this.buildHistory[e?`redo`:`undo`](this.world,(e,t,n)=>this.interaction.intersectsPlayer(e,t,n));t&&this.buildLesson===2&&(this.buildLesson=1),this.hud.showHint(t?e?`Bloco refeito! Y refaz mais.`:`Bloco desfeito! Z desfaz mais; Y refaz.`:`Nenhuma ação disponível aqui. Se há um bloco em você, afaste-se e tente de novo.`,3)}ensureSafeSpawn(){let e=this.player.spawn;this.chunks.preload(e.x,e.z,2);let t=(e,t,n)=>{let r=this.world.getBlock(e,t-1,n);return Rl(r)&&Ll(r).contactDamage===0&&[0,1].every(r=>{let i=this.world.getBlock(e,t+r,n);return!Rl(i)&&Ll(i).contactDamage===0})},n=Math.floor(e.x),r=Math.floor(e.y),i=Math.floor(e.z);for(let e=0;e<=8;e++)for(let a=0;a<=12;a++)for(let o=-e;o<=e;o++)for(let s=-e;s<=e;s++)if(Math.max(Math.abs(o),Math.abs(s))===e){for(let e of a===0?[r]:[r+a,r-a])if(!(e<(this.mode===`oneblock`?13:1)||e>125)&&t(n+o,e,i+s)){this.player.setSpawn(n+o+.5,e,i+s+.5);return}}for(let e=125;e>1;e--)if([0,1,2].every(t=>this.world.getBlock(n,e+t,i)===W.Air)){this.world.setBlock(n,e,i,W.Cobblestone),this.player.setSpawn(n+.5,e+1,i+.5);return}}confirmRecovery(e){let t=E_(e);t&&this.overlay.show({title:`Recuperar cópia anterior?`,text:`Voltar à cópia de ${__(e)}${t.updatedAt?` salva em `+new Date(t.updatedAt).toLocaleString(`pt-BR`):``}? O outro modo continua igual.`,button:`Recuperar mundo`,secondary:`Cancelar`,showControls:!1},()=>{if(!D_(t)){this.hud.showHint(`Não foi possível recuperar. Exporte o mundo e libere espaço.`,6);return}this.applySave(t),this.startPlaying()},()=>this.showModeMenu(e))}exportWorld(){let e=this.snapshotRun(this.player.dead),t=URL.createObjectURL(new Blob([JSON.stringify(e)],{type:`application/json`})),n=document.createElement(`a`);n.href=t,n.download=`mineboss-${this.mode}-${this.seed}.json`,n.click(),window.setTimeout(()=>URL.revokeObjectURL(t),1e3)}importWorld(){let e=document.createElement(`input`);e.type=`file`,e.accept=`.json,application/json`,e.onchange=async()=>{let t=e.files?.[0];if(!t)return;let n=null;try{t.size<=2e7&&(n=w_(await t.text()))}catch{}if(!n){this.overlay.show({title:`Arquivo inválido`,text:`Seu mundo atual não foi alterado. Escolha uma cópia exportada pelo MineBoss.`,button:`Voltar`,showControls:!1},()=>this.showMenu());return}let r=n;this.overlay.show({title:`Importar mundo?`,text:`Este arquivo substitui somente a partida de ${__(r.mode)}. Exporte a partida atual antes se quiser guardá-la.`,button:`Importar`,secondary:`Cancelar`,showControls:!1},()=>{if(!D_(r)){document.getElementById(`save-status`).textContent=`⚠ Importação não salva: armazenamento indisponível.`;return}this.applySave(r),this.startPlaying()},()=>this.showMenu())},e.click()}handleOneBlockMined(){let e=this.oneBlock.break(this.world,this.player,this.entities);e.unlocked===`ruin`?(this.revealStructure(Cu,du.centerX,du.centerZ,du.radius+6),this.hud.showHint(`Uma ilha apareceu! Siga a bússola até o Sentinela`,4.5)):e.unlocked===`shrine`?(this.revealStructure((e,t)=>gu(e,t)||_u(e,t),J.x,J.z,36),this.hud.showHint(`O santuário apareceu ao norte! Há um chefão lá embaixo`,4.8)):e.unlocked===`beacon`&&(this.revealStructure(Du,Y.x,Y.z,Y.radius+4),this.hud.showHint(`Um farol apareceu ao sul! Siga a bússola até o Faroleiro`,4.5)),e.spawnedMob&&this.sfx.play(`roar`),this.saveSoon=!0}syncGeneratorUnlocks(){this.world.generator.applyUnlocks({ruin:this.mode===`adventure`||this.oneBlock.ruinUnlocked,shrine:this.mode===`adventure`||this.oneBlock.shrineUnlocked,cache:this.mode===`adventure`||this.arena.defeated,beacon:this.mode===`adventure`||this.oneBlock.beaconUnlocked}),this.world.generator.applyVictories({sentinel:this.ruin.defeated,warden:this.arena.defeated,beacon:this.grove.defeated})}lightVictorySign(e){this.syncGeneratorUnlocks(),Ff(this.world,e)}unlockCacheIsland(){this.world.generator.cacheUnlocked||(this.world.generator.cacheUnlocked=!0,this.revealStructure(Ou,lu.x,lu.z,8))}revealStructure(e,t,n,r){this.syncGeneratorUnlocks(),this.chunks.regenerateWhere(e),this.chunks.preload(t,n,Math.max(2,Math.ceil(r/16))),this.chunks.preload(this.player.position.x,this.player.position.z,2)}sessionContext(){return{mode:this.mode,creative:this.player.creative,gentle:this.player.gentle,quality:this.quality,reducedMotion:this.reducedMotion,pace:this.mode===`oneblock`?this.oneBlock.pace:void 0}}logPanel(e){this.session?.record(`panel`,{id:e})}setGuideObjective(e){e&&e!==this.guideText&&this.narrator?.say(e),this.guideText=e,this.hud.setObjective(e),e&&this.session?.record(`objective`,{text:e})}updateSessionBanner(){document.getElementById(`session-status`)?.classList.toggle(`hidden`,!this.session?.enabled)}showSessionPanel(){this.stopForPanel();let e=this.session?.enabled;this.overlay.show({title:`Registro da sessão`,text:e?`Marque o que a criança fez. O arquivo fica neste navegador e não entra no save do mundo.`:`O registro está parado. Você pode baixar ou apagar o arquivo.`,button:`Voltar à pausa`,showControls:!1},()=>this.showPaused()),e&&(this.overlay.addAction(`Pediu ajuda`,()=>this.markSession(`help`)),this.overlay.addAction(`Animou`,()=>this.markSession(`cheer`)),this.overlay.addAction(`Largou`,()=>this.markSession(`quit`))),this.overlay.addAction(`Baixar registro`,()=>this.downloadSession()),e&&this.overlay.addAction(`Parar registro`,()=>{this.session?.stop(),this.updateSessionBanner(),this.showSessionPanel()}),this.session?.hasData&&this.overlay.addAction(`Apagar registro`,()=>this.confirmClearSession())}markSession(e){this.session?.record(`mark`,{kind:e,objective:this.guideText??void 0}),this.hud.showHint(e===`help`?`Marcado: pediu ajuda`:e===`cheer`?`Marcado: animou`:`Marcado: largou`,2),this.showSessionPanel()}downloadSession(){let e=URL.createObjectURL(new Blob([JSON.stringify(this.session?.toExport(),null,2)],{type:`application/json`})),t=document.createElement(`a`);t.href=e,t.download=`mineboss-session.json`,t.click(),window.setTimeout(()=>URL.revokeObjectURL(e),1e3)}confirmClearSession(){this.overlay.show({title:`Apagar registro?`,text:`Apaga só o diário desta sessão. O mundo salvo continua neste navegador.`,button:`Apagar registro`,secondary:`Voltar`,showControls:!1},()=>{this.session?.clear(),this.updateSessionBanner(),this.showPaused()},()=>this.showSessionPanel())}resize=()=>{let e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1)}},Av={graphics:`Preparando os gráficos…`,world:`Abrindo o terreno…`,done:`Pronto`,failed:`Não foi possível abrir o mundo. Precisa de WebGL2.`},jv=300,Mv=700;function Nv(){return window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches===!0}function Pv(e){return Math.round(Math.min(1,Math.max(0,e))*100)}function Fv(e){return new Promise(t=>window.setTimeout(t,e))}var Iv=class e{root;started=performance.now();constructor(e){this.root=e}static fromDocument(){let t=document.getElementById(`boot-screen`);if(!t)throw Error(`Missing #boot-screen`);return new e(t)}set(e,t){this.root.dataset.step=e,this.root.setAttribute(`aria-busy`,e===`done`||e===`failed`?`false`:`true`);let n=this.root.querySelector(`[data-testid="boot-step"]`);n&&(n.textContent=Av[e]);let r=Pv(t);this.root.querySelector(`.boot-progress`)?.setAttribute(`aria-valuenow`,String(r));let i=this.root.querySelector(`.boot-progress-fill`);i&&(i.style.width=`${r}%`)}async finish(){if(this.set(`done`,1),Nv()){this.root.remove();return}let e=Math.max(0,Mv-(performance.now()-this.started));e&&await Fv(e),this.root.classList.add(`leaving`),await Fv(jv),this.root.remove()}fail(){this.set(`failed`,1)}};function Lv(){return new Promise(e=>requestAnimationFrame(()=>e()))}async function Rv(){let e=Iv.fromDocument();e.set(`graphics`,.14),await Lv();let t=document.getElementById(`viewport`);if(!(t instanceof HTMLCanvasElement))throw e.fail(),Error(`Missing #viewport canvas element`);let n;try{n=new kv(t)}catch(t){e.fail(),console.error(`[boot] graphics`,t);return}e.set(`world`,.78),await Lv(),n.loop.start(),e.set(`world`,.94),await Lv(),await e.finish()}Rv();