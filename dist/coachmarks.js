(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.coachmarks = factory());
}(this, (function () { 'use strict';

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);

  return css;
}

function cache() {
  return cache.addOrGet.apply(cache, arguments);
}
cache.cache = {};

cache.init = function () {
  // if (!cache.cache) {
  //   cache.cache = {};
  // }
};

cache.addOrGet = function (name, obj) {
  cache.init();
  if (typeof obj === 'undefined') {
    // Get
    return cache.get(name);
  }

  // Set
  cache.add(name, obj);

  return obj;
};

cache.get = function (name) {
  cache.init();
  return cache.cache[name];
};

cache.add = function (name, obj) {
  cache.init();
  cache.cache[name] = obj;
  return obj;
};
cache.set = cache.add;

cache.remove = function (name) {
  cache.init();
  if (name) delete cache.cache[name];
};

cache.clear = function () {
  cache.init();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = cache.cache[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var c = _step.value;

      cache.cache[c] = undefined;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

cache.default = function (name, defaultFn) {
  var obj = cache(name);

  if (obj === undefined) return cache(name, defaultFn.call());
  return obj;
};

cache.all = function () {
  cache.init();
  return cache.cache;
};

cache.allArray = function () {
  cache.init();
  var elms = [];
  for (var key in cache) {
    if (Object.prototype.hasOwnProperty.call(cache.cache, key)) {
      elms.push({ key: cache.cache[key] });
    }
  }

  return elms;
};

'use strict';

/*! LeaderLine v1.0.4 (c) anseki https://anseki.github.io/leader-line/ */
var LeaderLine=function(){"use strict";var e,t,n,a,i,o,l,r,s,u,h,p,c,d="leader-line",f=1,y=2,m=3,S=4,g={top:f,right:y,bottom:m,left:S},_=1,v=2,E=3,x=4,b=5,k={straight:_,arc:v,fluid:E,magnet:x,grid:b},w="behind",O=d+"-defs",M='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="leader-line-defs"><style><![CDATA[.leader-line{position:absolute;overflow:visible!important;pointer-events:none!important;font-size:16px}#leader-line-defs{width:0;height:0;position:absolute;left:0;top:0}.leader-line-line-path{fill:none}.leader-line-mask-bg-rect{fill:#fff}.leader-line-caps-mask-anchor,.leader-line-caps-mask-marker-shape{fill:#000}.leader-line-caps-mask-anchor{stroke:#000}.leader-line-caps-mask-line,.leader-line-plugs-face{stroke:transparent}.leader-line-line-mask-shape{stroke:#fff}.leader-line-line-outline-mask-shape{stroke:#000}.leader-line-plug-mask-shape{fill:#fff;stroke:#000}.leader-line-plug-outline-mask-shape{fill:#000;stroke:#fff}.leader-line-areaAnchor{position:absolute;overflow:visible!important}]]></style><defs><circle id="leader-line-disc" cx="0" cy="0" r="5"/><rect id="leader-line-square" x="-5" y="-5" width="10" height="10"/><polygon id="leader-line-arrow1" points="-8,-8 8,0 -8,8 -5,0"/><polygon id="leader-line-arrow2" points="-4,-8 4,0 -4,8 -7,5 -2,0 -7,-5"/><polygon id="leader-line-arrow3" points="-4,-5 8,0 -4,5"/><g id="leader-line-hand"><path style="fill: #fcfcfc" d="M9.19 11.14h4.75c1.38 0 2.49-1.11 2.49-2.49 0-.51-.15-.98-.41-1.37h1.3c1.38 0 2.49-1.11 2.49-2.49s-1.11-2.53-2.49-2.53h1.02c1.38 0 2.49-1.11 2.49-2.49s-1.11-2.49-2.49-2.49h14.96c1.37 0 2.49-1.11 2.49-2.49s-1.11-2.49-2.49-2.49H16.58C16-9.86 14.28-11.14 9.7-11.14c-4.79 0-6.55 3.42-7.87 4.73H-2.14v13.23h3.68C3.29 9.97 5.47 11.14 9.19 11.14L9.19 11.14Z"/><path style="fill: black" d="M13.95 12c1.85 0 3.35-1.5 3.35-3.35 0-.17-.02-.34-.04-.51h.07c1.85 0 3.35-1.5 3.35-3.35 0-.79-.27-1.51-.72-2.08 1.03-.57 1.74-1.67 1.74-2.93 0-.59-.16-1.15-.43-1.63h12.04c1.85 0 3.35-1.5 3.35-3.35 0-1.85-1.5-3.35-3.35-3.35H17.2C16.26-10.93 13.91-12 9.7-12 5.36-12 3.22-9.4 1.94-7.84c0 0-.29.33-.5.57-.63 0-3.58 0-3.58 0C-2.61-7.27-3-6.88-3-6.41v13.23c0 .47.39.86.86.86 0 0 2.48 0 3.2 0C2.9 10.73 5.29 12 9.19 12L13.95 12ZM9.19 10.28c-3.46 0-5.33-1.05-6.9-3.87-.15-.27-.44-.44-.75-.44 0 0-1.81 0-2.82 0V-5.55c1.06 0 3.11 0 3.11 0 .25 0 .44-.06.61-.25l.83-.95c1.23-1.49 2.91-3.53 6.43-3.53 3.45 0 4.9.74 5.57 1.72h-4.3c-.48 0-.86.38-.86.86s.39.86.86.86h22.34c.9 0 1.63.73 1.63 1.63 0 .9-.73 1.63-1.63 1.63H15.83c-.48 0-.86.38-.86.86 0 .47.39.86.86.86h2.52c.9 0 1.63.73 1.63 1.63s-.73 1.63-1.63 1.63h-3.12c-.48 0-.86.38-.86.86 0 .47.39.86.86.86h2.11c.88 0 1.63.76 1.63 1.67 0 .9-.73 1.63-1.63 1.63h-3.2c-.48 0-.86.39-.86.86 0 .47.39.86.86.86h1.36c.05.16.09.34.09.51 0 .9-.73 1.63-1.63 1.63C13.95 10.28 9.19 10.28 9.19 10.28Z"/></g><g id="leader-line-crosshair"><path d="M0-78.97c-43.54 0-78.97 35.43-78.97 78.97 0 43.54 35.43 78.97 78.97 78.97s78.97-35.43 78.97-78.97C78.97-43.54 43.55-78.97 0-78.97ZM76.51-1.21h-9.91v-9.11h-2.43v9.11h-11.45c-.64-28.12-23.38-50.86-51.5-51.5V-64.17h9.11V-66.6h-9.11v-9.91C42.46-75.86 75.86-42.45 76.51-1.21ZM-1.21-30.76h-9.11v2.43h9.11V-4.2c-1.44.42-2.57 1.54-2.98 2.98H-28.33v-9.11h-2.43v9.11H-50.29C-49.65-28-27.99-49.65-1.21-50.29V-30.76ZM-30.76 1.21v9.11h2.43v-9.11H-4.2c.42 1.44 1.54 2.57 2.98 2.98v24.13h-9.11v2.43h9.11v19.53C-27.99 49.65-49.65 28-50.29 1.21H-30.76ZM1.22 30.75h9.11v-2.43h-9.11V4.2c1.44-.42 2.56-1.54 2.98-2.98h24.13v9.11h2.43v-9.11h19.53C49.65 28 28 49.65 1.22 50.29V30.75ZM30.76-1.21v-9.11h-2.43v9.11H4.2c-.42-1.44-1.54-2.56-2.98-2.98V-28.33h9.11v-2.43h-9.11V-50.29C28-49.65 49.65-28 50.29-1.21H30.76ZM-1.21-76.51v9.91h-9.11v2.43h9.11v11.45c-28.12.64-50.86 23.38-51.5 51.5H-64.17v-9.11H-66.6v9.11h-9.91C-75.86-42.45-42.45-75.86-1.21-76.51ZM-76.51 1.21h9.91v9.11h2.43v-9.11h11.45c.64 28.12 23.38 50.86 51.5 51.5v11.45h-9.11v2.43h9.11v9.91C-42.45 75.86-75.86 42.45-76.51 1.21ZM1.22 76.51v-9.91h9.11v-2.43h-9.11v-11.45c28.12-.64 50.86-23.38 51.5-51.5h11.45v9.11h2.43v-9.11h9.91C75.86 42.45 42.45 75.86 1.22 76.51Z"/><path d="M0 83.58-7.1 96 7.1 96Z"/><path d="M0-83.58 7.1-96-7.1-96"/><path d="M83.58 0 96 7.1 96-7.1Z"/><path d="M-83.58 0-96-7.1-96 7.1Z"/></g></defs></svg>',I={disc:{elmId:"leader-line-disc",noRotate:!0,bBox:{left:-5,top:-5,width:10,height:10,right:5,bottom:5},widthR:2.5,heightR:2.5,bCircle:5,sideLen:5,backLen:5,overhead:0,outlineBase:1,outlineMax:4},square:{elmId:"leader-line-square",noRotate:!0,bBox:{left:-5,top:-5,width:10,height:10,right:5,bottom:5},widthR:2.5,heightR:2.5,bCircle:5,sideLen:5,backLen:5,overhead:0,outlineBase:1,outlineMax:4},arrow1:{elmId:"leader-line-arrow1",bBox:{left:-8,top:-8,width:16,height:16,right:8,bottom:8},widthR:4,heightR:4,bCircle:8,sideLen:8,backLen:8,overhead:8,outlineBase:2,outlineMax:1.5},arrow2:{elmId:"leader-line-arrow2",bBox:{left:-7,top:-8,width:11,height:16,right:4,bottom:8},widthR:2.75,heightR:4,bCircle:8,sideLen:8,backLen:7,overhead:4,outlineBase:1,outlineMax:1.75},arrow3:{elmId:"leader-line-arrow3",bBox:{left:-4,top:-5,width:12,height:10,right:8,bottom:5},widthR:3,heightR:2.5,bCircle:8,sideLen:5,backLen:4,overhead:8,outlineBase:1,outlineMax:2.5},hand:{elmId:"leader-line-hand",bBox:{left:-3,top:-12,width:40,height:24,right:37,bottom:12},widthR:10,heightR:6,bCircle:37,sideLen:12,backLen:3,overhead:37},crosshair:{elmId:"leader-line-crosshair",noRotate:!0,bBox:{left:-96,top:-96,width:192,height:192,right:96,bottom:96},widthR:48,heightR:48,bCircle:96,sideLen:96,backLen:96,overhead:0}},C={behind:w,disc:"disc",square:"square",arrow1:"arrow1",arrow2:"arrow2",arrow3:"arrow3",hand:"hand",crosshair:"crosshair"},L={disc:"disc",square:"square",arrow1:"arrow1",arrow2:"arrow2",arrow3:"arrow3",hand:"hand",crosshair:"crosshair"},A=[f,y,m,S],V="auto",P={x:"left",y:"top",width:"width",height:"height"},N=80,T=4,W=5,B=120,R=8,F=3.75,G=10,D=30,z=.5522847,j=.25*Math.PI,H=/^\s*(\-?[\d\.]+)\s*(\%)?\s*$/,U="http://www.w3.org/2000/svg",Z=!!document.uniqueID,Y=!(!window.chrome||!window.chrome.webstore),X="MozAppearance"in document.documentElement.style,q="-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style&&!window.navigator.msPointerEnabled,Q=!window.chrome&&"WebkitAppearance"in document.documentElement.style,K=Z||q?.2:.1,J={path:E,lineColor:"coral",lineSize:4,plugSE:[w,"arrow1"],plugSizeSE:[1,1],lineOutlineEnabled:!1,lineOutlineColor:"indianred",lineOutlineSize:.25,plugOutlineEnabledSE:[!1,!1],plugOutlineSizeSE:[1,1]},$=(h={}.toString, p={}.hasOwnProperty.toString, c=p.call(Object), function(e){var t,n;return e&&"[object Object]"===h.call(e)&&(!(t=Object.getPrototypeOf(e))||(n=t.hasOwnProperty("constructor")&&t.constructor)&&"function"==typeof n&&p.call(n)===c)}),ee=Number.isFinite||function(e){return"number"==typeof e&&window.isFinite(e)},te=function(){var e,t={ease:[.25,.1,.25,1],linear:[0,0,1,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]},n=1e3/60/2,a=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(e){setTimeout(e,n);},i=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame||function(e){clearTimeout(e);},o=Number.isFinite||function(e){return"number"==typeof e&&window.isFinite(e)},l=[],r=0;function s(){var t=Date.now(),o=!1;e&&(i.call(window,e),e=null), l.forEach(function(e){var a,i,l;if(e.framesStart){if((a=t-e.framesStart)>=e.duration&&e.count&&e.loopsLeft<=1)return l=e.frames[e.lastFrame=e.reverse?0:e.frames.length-1],e.frameCallback(l.value,!0,l.timeRatio,l.outputRatio),void(e.framesStart=null);if(a>e.duration){if(i=Math.floor(a/e.duration),e.count){if(i>=e.loopsLeft)return l=e.frames[e.lastFrame=e.reverse?0:e.frames.length-1],e.frameCallback(l.value,!0,l.timeRatio,l.outputRatio),void(e.framesStart=null);e.loopsLeft-=i}e.framesStart+=e.duration*i,a=t-e.framesStart}e.reverse&&(a=e.duration-a),l=e.frames[e.lastFrame=Math.round(a/n)],!1!==e.frameCallback(l.value,!1,l.timeRatio,l.outputRatio)?o=!0:e.framesStart=null}}), o&&(e=a.call(window,s));}function u(e,t){e.framesStart=Date.now(), null!=t&&(e.framesStart-=e.duration*(e.reverse?1-t:t)), e.loopsLeft=e.count, e.lastFrame=null, s();}return{add:function(e,a,i,o,s,h,p){var c,d,f,y,m,S,g,_,v,E,x,b,k,w=++r;function O(t,n){return{value:e(n),timeRatio:t,outputRatio:n}}if("string"==typeof s&&(s=t[s]), e=e||function(){}, i<n)d=[O(0,0),O(1,1)];else{if(f=n/i, d=[O(0,0)], 0===s[0]&&0===s[1]&&1===s[2]&&1===s[3])for(m=f;m<=1;m+=f)d.push(O(m,m));else for(m=f, S=y=f/10;S<=1;S+=y)E=(v=(_=S)*_)*_, k=3*(x=1-_)*v, (g={x:(b=3*(x*x)*_)*s[0]+k*s[2]+E,y:b*s[1]+k*s[3]+E}).x>=m&&(d.push(O(g.x,g.y)),m+=f);d.push(O(1,1));}return c={animId:w,frameCallback:a,duration:i,count:o,frames:d,reverse:!!h}, l.push(c), !1!==p&&u(c,p), w},remove:function(e){var t;l.some(function(n,a){return n.animId===e&&(t=a, n.framesStart=null, !0)})&&l.splice(t,1);},start:function(e,t,n){l.some(function(a){return a.animId===e&&(a.reverse=!!t, u(a,n), !0)});},stop:function(e,t){var n;return l.some(function(a){return a.animId===e&&(t?null!=a.lastFrame&&(n=a.frames[a.lastFrame].timeRatio):(n=(Date.now()-a.framesStart)/a.duration,a.reverse&&(n=1-n),n<0?n=0:n>1&&(n=1)),a.framesStart=null,!0)}), n},validTiming:function(e){return"string"==typeof e?t[e]:Array.isArray(e)&&[0,1,2,3].every(function(t){return o(e[t])&&e[t]>=0&&e[t]<=1})?[e[0],e[1],e[2],e[3]]:null}}}(),ne=function(e){e.SVGPathElement.prototype.getPathData&&e.SVGPathElement.prototype.setPathData||function(){var t={Z:"Z",M:"M",L:"L",C:"C",Q:"Q",A:"A",H:"H",V:"V",S:"S",T:"T",z:"Z",m:"m",l:"l",c:"c",q:"q",a:"a",h:"h",v:"v",s:"s",t:"t"},n=function(e){this._string=e, this._currentIndex=0, this._endIndex=this._string.length, this._prevCommand=null, this._skipOptionalSpaces();},a=-1!==e.navigator.userAgent.indexOf("MSIE ");n.prototype={parseSegment:function(){var e=this._string[this._currentIndex],n=t[e]?t[e]:null;if(null===n){if(null===this._prevCommand)return null;if(null===(n=("+"===e||"-"===e||"."===e||e>="0"&&e<="9")&&"Z"!==this._prevCommand?"M"===this._prevCommand?"L":"m"===this._prevCommand?"l":this._prevCommand:null))return null}else this._currentIndex+=1;this._prevCommand=n;var a=null,i=n.toUpperCase();return"H"===i||"V"===i?a=[this._parseNumber()]:"M"===i||"L"===i||"T"===i?a=[this._parseNumber(),this._parseNumber()]:"S"===i||"Q"===i?a=[this._parseNumber(),this._parseNumber(),this._parseNumber(),this._parseNumber()]:"C"===i?a=[this._parseNumber(),this._parseNumber(),this._parseNumber(),this._parseNumber(),this._parseNumber(),this._parseNumber()]:"A"===i?a=[this._parseNumber(),this._parseNumber(),this._parseNumber(),this._parseArcFlag(),this._parseArcFlag(),this._parseNumber(),this._parseNumber()]:"Z"===i&&(this._skipOptionalSpaces(),a=[]), null===a||a.indexOf(null)>=0?null:{type:n,values:a}},hasMoreData:function(){return this._currentIndex<this._endIndex},peekSegmentType:function(){var e=this._string[this._currentIndex];return t[e]?t[e]:null},initialCommandIsMoveTo:function(){if(!this.hasMoreData())return!0;var e=this.peekSegmentType();return"M"===e||"m"===e},_isCurrentSpace:function(){var e=this._string[this._currentIndex];return e<=" "&&(" "===e||"\n"===e||"\t"===e||"\r"===e||"\f"===e)},_skipOptionalSpaces:function(){for(;this._currentIndex<this._endIndex&&this._isCurrentSpace();)this._currentIndex+=1;return this._currentIndex<this._endIndex},_skipOptionalSpacesOrDelimiter:function(){return!(this._currentIndex<this._endIndex&&!this._isCurrentSpace()&&","!==this._string[this._currentIndex])&&(this._skipOptionalSpaces()&&this._currentIndex<this._endIndex&&","===this._string[this._currentIndex]&&(this._currentIndex+=1,this._skipOptionalSpaces()), this._currentIndex<this._endIndex)},_parseNumber:function(){var e=0,t=0,n=1,a=0,i=1,o=1,l=this._currentIndex;if(this._skipOptionalSpaces(), this._currentIndex<this._endIndex&&"+"===this._string[this._currentIndex]?this._currentIndex+=1:this._currentIndex<this._endIndex&&"-"===this._string[this._currentIndex]&&(this._currentIndex+=1,i=-1), this._currentIndex===this._endIndex||(this._string[this._currentIndex]<"0"||this._string[this._currentIndex]>"9")&&"."!==this._string[this._currentIndex])return null;for(var r=this._currentIndex;this._currentIndex<this._endIndex&&this._string[this._currentIndex]>="0"&&this._string[this._currentIndex]<="9";)this._currentIndex+=1;if(this._currentIndex!==r)for(var s=this._currentIndex-1,u=1;s>=r;)t+=u*(this._string[s]-"0"), s-=1, u*=10;if(this._currentIndex<this._endIndex&&"."===this._string[this._currentIndex]){if(this._currentIndex+=1, this._currentIndex>=this._endIndex||this._string[this._currentIndex]<"0"||this._string[this._currentIndex]>"9")return null;for(;this._currentIndex<this._endIndex&&this._string[this._currentIndex]>="0"&&this._string[this._currentIndex]<="9";)n*=10, a+=(this._string.charAt(this._currentIndex)-"0")/n, this._currentIndex+=1;}if(this._currentIndex!==l&&this._currentIndex+1<this._endIndex&&("e"===this._string[this._currentIndex]||"E"===this._string[this._currentIndex])&&"x"!==this._string[this._currentIndex+1]&&"m"!==this._string[this._currentIndex+1]){if(this._currentIndex+=1, "+"===this._string[this._currentIndex]?this._currentIndex+=1:"-"===this._string[this._currentIndex]&&(this._currentIndex+=1,o=-1), this._currentIndex>=this._endIndex||this._string[this._currentIndex]<"0"||this._string[this._currentIndex]>"9")return null;for(;this._currentIndex<this._endIndex&&this._string[this._currentIndex]>="0"&&this._string[this._currentIndex]<="9";)e*=10, e+=this._string[this._currentIndex]-"0", this._currentIndex+=1;}var h=t+a;return h*=i, e&&(h*=Math.pow(10,o*e)), l===this._currentIndex?null:(this._skipOptionalSpacesOrDelimiter(),h)},_parseArcFlag:function(){if(this._currentIndex>=this._endIndex)return null;var e=null,t=this._string[this._currentIndex];if(this._currentIndex+=1, "0"===t)e=0;else{if("1"!==t)return null;e=1;}return this._skipOptionalSpacesOrDelimiter(), e}};var i=function(e){if(!e||0===e.length)return[];var t=new n(e),a=[];if(t.initialCommandIsMoveTo())for(;t.hasMoreData();){var i=t.parseSegment();if(null===i)break;a.push(i);}return a},o=e.SVGPathElement.prototype.setAttribute,l=e.SVGPathElement.prototype.removeAttribute,r=e.Symbol?e.Symbol():"__cachedPathData",s=e.Symbol?e.Symbol():"__cachedNormalizedPathData",u=function(e,t,n,a,i,o,l,r,s,h){var p,c,d,f,y,m=function(e,t,n){return{x:e*Math.cos(n)-t*Math.sin(n),y:e*Math.sin(n)+t*Math.cos(n)}},S=(p=l, Math.PI*p/180),g=[];if(h)c=h[0], d=h[1], f=h[2], y=h[3];else{var _=m(e,t,-S);e=_.x, t=_.y;var v=m(n,a,-S),E=(e-(n=v.x))/2,x=(t-(a=v.y))/2,b=E*E/(i*i)+x*x/(o*o);b>1&&(i*=b=Math.sqrt(b), o*=b);var k=i*i,w=o*o,O=k*w-k*x*x-w*E*E,M=k*x*x+w*E*E,I=(r===s?-1:1)*Math.sqrt(Math.abs(O/M));f=I*i*x/o+(e+n)/2, y=I*-o*E/i+(t+a)/2, c=Math.asin(parseFloat(((t-y)/o).toFixed(9))), d=Math.asin(parseFloat(((a-y)/o).toFixed(9))), e<f&&(c=Math.PI-c), n<f&&(d=Math.PI-d), c<0&&(c=2*Math.PI+c), d<0&&(d=2*Math.PI+d), s&&c>d&&(c-=2*Math.PI), !s&&d>c&&(d-=2*Math.PI);}var C=d-c;if(Math.abs(C)>120*Math.PI/180){var L=d,A=n,V=a;d=s&&d>c?c+120*Math.PI/180*1:c+120*Math.PI/180*-1, n=f+i*Math.cos(d), a=y+o*Math.sin(d), g=u(n,a,A,V,i,o,l,0,s,[d,L,f,y]);}C=d-c;var P=Math.cos(c),N=Math.sin(c),T=Math.cos(d),W=Math.sin(d),B=Math.tan(C/4),R=4/3*i*B,F=4/3*o*B,G=[e,t],D=[e+R*N,t-F*P],z=[n+R*W,a-F*T],j=[n,a];if(D[0]=2*G[0]-D[0], D[1]=2*G[1]-D[1], h)return[D,z,j].concat(g);g=[D,z,j].concat(g).join().split(",");var H=[],U=[];return g.forEach(function(e,t){t%2?U.push(m(g[t-1],g[t],S).y):U.push(m(g[t],g[t+1],S).x),6===U.length&&(H.push(U),U=[])}), H},h=function(e){return e.map(function(e){return{type:e.type,values:Array.prototype.slice.call(e.values)}})},p=function(e){var t=[],n=null,a=null,i=null,o=null,l=null,r=null,s=null;return e.forEach(function(e){if("M"===e.type){var h=e.values[0],p=e.values[1];t.push({type:"M",values:[h,p]}),r=h,s=p,o=h,l=p}else if("C"===e.type){var c=e.values[0],d=e.values[1],f=e.values[2],y=e.values[3];h=e.values[4],p=e.values[5];t.push({type:"C",values:[c,d,f,y,h,p]}),a=f,i=y,o=h,l=p}else if("L"===e.type){h=e.values[0],p=e.values[1];t.push({type:"L",values:[h,p]}),o=h,l=p}else if("H"===e.type){h=e.values[0];t.push({type:"L",values:[h,l]}),o=h}else if("V"===e.type){p=e.values[0];t.push({type:"L",values:[o,p]}),l=p}else if("S"===e.type){f=e.values[0],y=e.values[1],h=e.values[2],p=e.values[3];"C"===n||"S"===n?(m=o+(o-a),S=l+(l-i)):(m=o,S=l),t.push({type:"C",values:[m,S,f,y,h,p]}),a=f,i=y,o=h,l=p}else if("T"===e.type){h=e.values[0],p=e.values[1];"Q"===n||"T"===n?(c=o+(o-a),d=l+(l-i)):(c=o,d=l);var m=o+2*(c-o)/3,S=l+2*(d-l)/3,g=h+2*(c-h)/3,_=p+2*(d-p)/3;t.push({type:"C",values:[m,S,g,_,h,p]}),a=c,i=d,o=h,l=p}else if("Q"===e.type){c=e.values[0],d=e.values[1],h=e.values[2],p=e.values[3],m=o+2*(c-o)/3,S=l+2*(d-l)/3,g=h+2*(c-h)/3,_=p+2*(d-p)/3;t.push({type:"C",values:[m,S,g,_,h,p]}),a=c,i=d,o=h,l=p}else if("A"===e.type){var v=e.values[0],E=e.values[1],x=e.values[2],b=e.values[3],k=e.values[4];h=e.values[5],p=e.values[6];if(0===v||0===E)t.push({type:"C",values:[o,l,h,p,h,p]}),o=h,l=p;else if(o!==h||l!==p)u(o,l,h,p,v,E,x,b,k).forEach(function(e){t.push({type:"C",values:e}),o=h,l=p})}else"Z"===e.type&&(t.push(e),o=r,l=s);n=e.type}), t};e.SVGPathElement.prototype.setAttribute=function(e,t){"d"===e&&(this[r]=null,this[s]=null),o.call(this,e,t)}, e.SVGPathElement.prototype.removeAttribute=function(e,t){"d"===e&&(this[r]=null,this[s]=null),l.call(this,e)}, e.SVGPathElement.prototype.getPathData=function(e){if(e&&e.normalize){if(this[s])return h(this[s]);this[r]?c=h(this[r]):(c=i(this.getAttribute("d")||""),this[r]=h(c));var t=p((n=[],a=null,o=null,l=null,u=null,c.forEach(function(e){var t=e.type;if("M"===t){var i=e.values[0],r=e.values[1];n.push({type:"M",values:[i,r]}),l=i,u=r,a=i,o=r}else if("m"===t)i=a+e.values[0],r=o+e.values[1],n.push({type:"M",values:[i,r]}),l=i,u=r,a=i,o=r;else if("L"===t)i=e.values[0],r=e.values[1],n.push({type:"L",values:[i,r]}),a=i,o=r;else if("l"===t)i=a+e.values[0],r=o+e.values[1],n.push({type:"L",values:[i,r]}),a=i,o=r;else if("C"===t){var s=e.values[0],h=e.values[1],p=e.values[2],c=e.values[3];i=e.values[4],r=e.values[5],n.push({type:"C",values:[s,h,p,c,i,r]}),a=i,o=r}else"c"===t?(s=a+e.values[0],h=o+e.values[1],p=a+e.values[2],c=o+e.values[3],i=a+e.values[4],r=o+e.values[5],n.push({type:"C",values:[s,h,p,c,i,r]}),a=i,o=r):"Q"===t?(s=e.values[0],h=e.values[1],i=e.values[2],r=e.values[3],n.push({type:"Q",values:[s,h,i,r]}),a=i,o=r):"q"===t?(s=a+e.values[0],h=o+e.values[1],i=a+e.values[2],r=o+e.values[3],n.push({type:"Q",values:[s,h,i,r]}),a=i,o=r):"A"===t?(i=e.values[5],r=e.values[6],n.push({type:"A",values:[e.values[0],e.values[1],e.values[2],e.values[3],e.values[4],i,r]}),a=i,o=r):"a"===t?(i=a+e.values[5],r=o+e.values[6],n.push({type:"A",values:[e.values[0],e.values[1],e.values[2],e.values[3],e.values[4],i,r]}),a=i,o=r):"H"===t?(i=e.values[0],n.push({type:"H",values:[i]}),a=i):"h"===t?(i=a+e.values[0],n.push({type:"H",values:[i]}),a=i):"V"===t?(r=e.values[0],n.push({type:"V",values:[r]}),o=r):"v"===t?(r=o+e.values[0],n.push({type:"V",values:[r]}),o=r):"S"===t?(p=e.values[0],c=e.values[1],i=e.values[2],r=e.values[3],n.push({type:"S",values:[p,c,i,r]}),a=i,o=r):"s"===t?(p=a+e.values[0],c=o+e.values[1],i=a+e.values[2],r=o+e.values[3],n.push({type:"S",values:[p,c,i,r]}),a=i,o=r):"T"===t?(i=e.values[0],r=e.values[1],n.push({type:"T",values:[i,r]}),a=i,o=r):"t"===t?(i=a+e.values[0],r=o+e.values[1],n.push({type:"T",values:[i,r]}),a=i,o=r):"Z"!==t&&"z"!==t||(n.push({type:"Z",values:[]}),a=l,o=u)}),n));return this[s]=h(t),t}if(this[r])return h(this[r]);var n,a,o,l,u,c=i(this.getAttribute("d")||"");return this[r]=h(c),c}, e.SVGPathElement.prototype.setPathData=function(e){if(0===e.length)a?this.setAttribute("d",""):this.removeAttribute("d");else{for(var t="",n=0,i=e.length;n<i;n+=1){var o=e[n];n>0&&(t+=" "),t+=o.type,o.values&&o.values.length>0&&(t+=" "+o.values.join(" "))}this.setAttribute("d",t)}}, e.SVGRectElement.prototype.getPathData=function(e){var t=this.x.baseVal.value,n=this.y.baseVal.value,a=this.width.baseVal.value,i=this.height.baseVal.value,o=this.hasAttribute("rx")?this.rx.baseVal.value:this.ry.baseVal.value,l=this.hasAttribute("ry")?this.ry.baseVal.value:this.rx.baseVal.value;o>a/2&&(o=a/2),l>i/2&&(l=i/2);var r=[{type:"M",values:[t+o,n]},{type:"H",values:[t+a-o]},{type:"A",values:[o,l,0,0,1,t+a,n+l]},{type:"V",values:[n+i-l]},{type:"A",values:[o,l,0,0,1,t+a-o,n+i]},{type:"H",values:[t+o]},{type:"A",values:[o,l,0,0,1,t,n+i-l]},{type:"V",values:[n+l]},{type:"A",values:[o,l,0,0,1,t+o,n]},{type:"Z",values:[]}];return r=r.filter(function(e){return"A"!==e.type||0!==e.values[0]&&0!==e.values[1]}),e&&!0===e.normalize&&(r=p(r)),r}, e.SVGCircleElement.prototype.getPathData=function(e){var t=this.cx.baseVal.value,n=this.cy.baseVal.value,a=this.r.baseVal.value,i=[{type:"M",values:[t+a,n]},{type:"A",values:[a,a,0,0,1,t,n+a]},{type:"A",values:[a,a,0,0,1,t-a,n]},{type:"A",values:[a,a,0,0,1,t,n-a]},{type:"A",values:[a,a,0,0,1,t+a,n]},{type:"Z",values:[]}];return e&&!0===e.normalize&&(i=p(i)),i}, e.SVGEllipseElement.prototype.getPathData=function(e){var t=this.cx.baseVal.value,n=this.cy.baseVal.value,a=this.rx.baseVal.value,i=this.ry.baseVal.value,o=[{type:"M",values:[t+a,n]},{type:"A",values:[a,i,0,0,1,t,n+i]},{type:"A",values:[a,i,0,0,1,t-a,n]},{type:"A",values:[a,i,0,0,1,t,n-i]},{type:"A",values:[a,i,0,0,1,t+a,n]},{type:"Z",values:[]}];return e&&!0===e.normalize&&(o=p(o)),o}, e.SVGLineElement.prototype.getPathData=function(){return[{type:"M",values:[this.x1.baseVal.value,this.y1.baseVal.value]},{type:"L",values:[this.x2.baseVal.value,this.y2.baseVal.value]}]}, e.SVGPolylineElement.prototype.getPathData=function(){for(var e=[],t=0;t<this.points.numberOfItems;t+=1){var n=this.points.getItem(t);e.push({type:0===t?"M":"L",values:[n.x,n.y]})}return e}, e.SVGPolygonElement.prototype.getPathData=function(){for(var e=[],t=0;t<this.points.numberOfItems;t+=1){var n=this.points.getItem(t);e.push({type:0===t?"M":"L",values:[n.x,n.y]})}return e.push({type:"Z",values:[]}),e};}();},ae=function(e){function t(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,t), i.l=!0, i.exports}var n={};return t.m=e, t.c=n, t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})}, t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n}, t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}, t.p="", t(t.s=0)}([function(e,t,n){function a(){var e=void 0,t=void 0;u&&(s.call(window,u),u=null), l.forEach(function(t){t.event&&(t.listener(t.event),t.event=null,e=!0)}), e?(h=Date.now(),t=!0):Date.now()-h<o&&(t=!0), t&&(u=r.call(window,a));}function i(e){var t=-1;return l.some(function(n,a){return n.listener===e&&(t=a,!0)}), t}Object.defineProperty(t,"__esModule",{value:!0});var o=500,l=[],r=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return setTimeout(e,1e3/60)},s=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame||function(e){return clearTimeout(e)},u=void 0,h=Date.now(),p={add:function(e){var t=void 0;return-1===i(e)?(l.push(t={listener:e}), function(e){t.event=e,u||a()}):null},remove:function(e){var t;(t=i(e))>-1&&(l.splice(t,1), !l.length&&u&&(s.call(window,u),u=null));}};t.default=p, e.exports=t.default;}]),ie={line_altColor:{iniValue:!1},line_color:{},line_colorTra:{iniValue:!1},line_strokeWidth:{},plug_enabled:{iniValue:!1},plug_enabledSE:{hasSE:!0,iniValue:!1},plug_plugSE:{hasSE:!0,iniValue:w},plug_colorSE:{hasSE:!0},plug_colorTraSE:{hasSE:!0,iniValue:!1},plug_markerWidthSE:{hasSE:!0},plug_markerHeightSE:{hasSE:!0},lineOutline_enabled:{iniValue:!1},lineOutline_color:{},lineOutline_colorTra:{iniValue:!1},lineOutline_strokeWidth:{},lineOutline_inStrokeWidth:{},plugOutline_enabledSE:{hasSE:!0,iniValue:!1},plugOutline_plugSE:{hasSE:!0,iniValue:w},plugOutline_colorSE:{hasSE:!0},plugOutline_colorTraSE:{hasSE:!0,iniValue:!1},plugOutline_strokeWidthSE:{hasSE:!0},plugOutline_inStrokeWidthSE:{hasSE:!0},position_socketXYSE:{hasSE:!0,hasProps:!0},position_plugOverheadSE:{hasSE:!0},position_path:{},position_lineStrokeWidth:{},position_socketGravitySE:{hasSE:!0},path_pathData:{},path_edge:{hasProps:!0},viewBox_bBox:{hasProps:!0},viewBox_plugBCircleSE:{hasSE:!0},lineMask_enabled:{iniValue:!1},lineMask_outlineMode:{iniValue:!1},lineMask_x:{},lineMask_y:{},lineOutlineMask_x:{},lineOutlineMask_y:{},maskBGRect_x:{},maskBGRect_y:{},capsMaskAnchor_enabledSE:{hasSE:!0,iniValue:!1},capsMaskAnchor_pathDataSE:{hasSE:!0},capsMaskAnchor_strokeWidthSE:{hasSE:!0},capsMaskMarker_enabled:{iniValue:!1},capsMaskMarker_enabledSE:{hasSE:!0,iniValue:!1},capsMaskMarker_plugSE:{hasSE:!0,iniValue:w},capsMaskMarker_markerWidthSE:{hasSE:!0},capsMaskMarker_markerHeightSE:{hasSE:!0},caps_enabled:{iniValue:!1},attach_plugSideLenSE:{hasSE:!0},attach_plugBackLenSE:{hasSE:!0}},oe={show_on:{},show_effect:{},show_animOptions:{},show_animId:{},show_inAnim:{}},le="fade",re=[],se={},ue=0,he={},pe=0;function ce(e,t){var n,a;return typeof e!=typeof t||(n=$(e)?"obj":Array.isArray(e)?"array":"")!=($(t)?"obj":Array.isArray(t)?"array":"")||("obj"===n?ce(a=Object.keys(e).sort(),Object.keys(t).sort())||a.some(function(n){return ce(e[n],t[n])}):"array"===n?e.length!==t.length||e.some(function(e,n){return ce(e,t[n])}):e!==t)}function de(e){return e?$(e)?Object.keys(e).reduce(function(t,n){return t[n]=de(e[n]), t},{}):Array.isArray(e)?e.map(de):e:e}function fe(e){var t,n,a,i=1,o=e=(e+"").trim();function l(e){var t=1,n=H.exec(e);return n&&(t=parseFloat(n[1]),n[2]?t=t>=0&&t<=100?t/100:1:(t<0||t>1)&&(t=1)), t}return(t=/^(rgba|hsla|hwb|gray|device\-cmyk)\s*\(([\s\S]+)\)$/i.exec(e))?(n=t[1].toLowerCase(),a=t[2].trim().split(/\s*,\s*/),"rgba"===n&&4===a.length?(i=l(a[3]),o="rgb("+a.slice(0,3).join(", ")+")"):"hsla"===n&&4===a.length?(i=l(a[3]),o="hsl("+a.slice(0,3).join(", ")+")"):"hwb"===n&&4===a.length?(i=l(a[3]),o="hwb("+a.slice(0,3).join(", ")+")"):"gray"===n&&2===a.length?(i=l(a[1]),o="gray("+a[0]+")"):"device-cmyk"===n&&a.length>=5&&(i=l(a[4]),o="device-cmyk("+a.slice(0,4).join(", ")+")")):(t=/^\#(?:([\da-f]{6})([\da-f]{2})|([\da-f]{3})([\da-f]))$/i.exec(e))?t[1]?(i=parseInt(t[2],16)/255,o="#"+t[1]):(i=parseInt(t[4]+t[4],16)/255,o="#"+t[3]):"transparent"===e.toLocaleLowerCase()&&(i=0), [i,o]}function ye(e){return!(!e||e.nodeType!==Node.ELEMENT_NODE||"function"!=typeof e.getBoundingClientRect)}function me(e,t){var n,a,i,o,l={};if(!(i=e.ownerDocument))return console.error("Cannot get document that contains the element."), null;if(e.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_DISCONNECTED)return console.error("A disconnected element was passed."), null;for(a in n=e.getBoundingClientRect())l[a]=n[a];if(!t){if(!(o=i.defaultView))return console.error("Cannot get window that contains the element."), null;l.left+=o.pageXOffset, l.right+=o.pageXOffset, l.top+=o.pageYOffset, l.bottom+=o.pageYOffset;}return l}function Se(e,t){var n,a,i=[],o=e;for(t=t||window;;){if(!(n=o.ownerDocument))return console.error("Cannot get document that contains the element."), null;if(!(a=n.defaultView))return console.error("Cannot get window that contains the element."), null;if(a===t)break;if(!(o=a.frameElement))return console.error("`baseWindow` was not found."), null;i.unshift(o);}return i}function ge(e,t){var n,a,i=0,o=0;return(a=Se(e,t=t||window))?a.length?(a.forEach(function(e,t){var n,a,l=me(e,t>0);i+=l.left,o+=l.top,a=(n=e).ownerDocument.defaultView.getComputedStyle(n,""),l={left:n.clientLeft+parseFloat(a.paddingLeft),top:n.clientTop+parseFloat(a.paddingTop)},i+=l.left,o+=l.top}), (n=me(e,!0)).left+=i, n.right+=i, n.top+=o, n.bottom+=o, n):me(e):null}function _e(e,t){var n=e.x-t.x,a=e.y-t.y;return Math.sqrt(n*n+a*a)}function ve(e,t,n){var a=t.x-e.x,i=t.y-e.y;return{x:e.x+a*n,y:e.y+i*n,angle:Math.atan2(i,a)/(Math.PI/180)}}function Ee(e,t,n){var a=Math.atan2(e.y-t.y,t.x-e.x);return{x:t.x+Math.cos(a)*n,y:t.y+Math.sin(a)*n*-1}}function xe(e,t,n,a,i){var o=i*i,l=o*i,r=1-i,s=r*r,u=s*r,h=u*e.x+3*s*i*t.x+3*r*o*n.x+l*a.x,p=u*e.y+3*s*i*t.y+3*r*o*n.y+l*a.y,c=e.x+2*i*(t.x-e.x)+o*(n.x-2*t.x+e.x),d=e.y+2*i*(t.y-e.y)+o*(n.y-2*t.y+e.y),f=t.x+2*i*(n.x-t.x)+o*(a.x-2*n.x+t.x),y=t.y+2*i*(n.y-t.y)+o*(a.y-2*n.y+t.y),m=r*e.x+i*t.x,S=r*e.y+i*t.y,g=r*n.x+i*a.x,_=r*n.y+i*a.y,v=90-180*Math.atan2(c-f,d-y)/Math.PI;return{x:h,y:p,fromP2:{x:c,y:d},toP1:{x:f,y:y},fromP1:{x:m,y:S},toP2:{x:g,y:_},angle:v+=v>180?-180:180}}function be(e,t,n,a,i){function o(e,t,n,a,i){return e*(e*(-3*t+9*n-9*a+3*i)+6*t-12*n+6*a)-3*t+3*n}var l,r,s,u,h,p=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],c=0;return l=(i=null==i||i>1?1:i<0?0:i)/2, [-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816].forEach(function(i,d){s=o(r=l*i+l,e.x,t.x,n.x,a.x),u=o(r,e.y,t.y,n.y,a.y),h=s*s+u*u,c+=p[d]*Math.sqrt(h)}), l*c}function ke(e,t,n,a,i){for(var o,l=.5,r=1-l;o=be(e,t,n,a,r), !(Math.abs(o-i)<=.01);)r+=(o<i?1:-1)*(l/=2);return r}function we(e,t){var n;return e.forEach(function(e){var a=t?e.map(function(e){var n={x:e.x,y:e.y};return t(n),n}):e;n||(n=[{type:"M",values:[a[0].x,a[0].y]}]),n.push(a.length?2===a.length?{type:"L",values:[a[1].x,a[1].y]}:{type:"C",values:[a[1].x,a[1].y,a[2].x,a[2].y,a[3].x,a[3].y]}:{type:"Z",values:[]})}), n}function Oe(e){var t=[],n=0;return e.forEach(function(e){var a=(2===e.length?_e:be).apply(null,e);t.push(a),n+=a}), {segsLen:t,lenAll:n}}function Me(e,t){return null==e||null==t||e.length!==t.length||e.some(function(e,n){var a=t[n];return e.type!==a.type||e.values.some(function(e,t){return e!==a.values[t]})})}function Ie(e,t,n){e.events[t]?e.events[t].indexOf(n)<0&&e.events[t].push(n):e.events[t]=[n];}function Ce(e,t,n){var a;e.events[t]&&(a=e.events[t].indexOf(n))>-1&&e.events[t].splice(a,1);}function Le(e){l&&clearTimeout(l), re.push(e), l=setTimeout(function(){re.forEach(function(e){e()}),re=[]},0);}function Ae(e,t){e.reflowTargets.indexOf(t)<0&&e.reflowTargets.push(t);}function Ve(e){e.reflowTargets.forEach(function(e){var t;t=e,setTimeout(function(){var e=t.parentNode,n=t.nextSibling;e.insertBefore(e.removeChild(t),n)},0)}), e.reflowTargets=[];}function Pe(e,t,n,a,i,o,l){var s,u,h;"auto-start-reverse"===n?("boolean"!=typeof r&&(t.setAttribute("orient","auto-start-reverse"),r=t.orientType.baseVal===SVGMarkerElement.SVG_MARKER_ORIENT_UNKNOWN),r?t.setAttribute("orient",n):((s=i.createSVGTransform()).setRotate(180,0,0),o.transform.baseVal.appendItem(s),t.setAttribute("orient","auto"),h=!0)):(t.setAttribute("orient",n),!1===r&&o.transform.baseVal.clear()), u=t.viewBox.baseVal, h?(u.x=-a.right,u.y=-a.bottom):(u.x=a.left,u.y=a.top), u.width=a.width, u.height=a.height, Z&&Ae(e,l);}function Ne(e,t){return{prop:e?"markerEnd":"markerStart",orient:t?t.noRotate?"0":e?"auto":"auto-start-reverse":null}}function Te(e,t){Object.keys(t).forEach(function(n){var a=t[n];e[n]=null!=a.iniValue?a.hasSE?[a.iniValue,a.iniValue]:a.iniValue:a.hasSE?a.hasProps?[{},{}]:[]:a.hasProps?{}:null;});}function We(e,t,n,a,i){return a!==t[n]&&(t[n]=a, i&&i.forEach(function(t){t(e,a,n)}), !0)}function Be(e){function t(e,t){return e+parseFloat(t)}var n=e.document,a=e.getComputedStyle(n.documentElement,""),i=e.getComputedStyle(n.body,""),o={x:0,y:0};return"static"!==i.position?(o.x-=[a.marginLeft,a.borderLeftWidth,a.paddingLeft,i.marginLeft,i.borderLeftWidth].reduce(t,0),o.y-=[a.marginTop,a.borderTopWidth,a.paddingTop,i.marginTop,i.borderTopWidth].reduce(t,0)):"static"!==a.position&&(o.x-=[a.marginLeft,a.borderLeftWidth].reduce(t,0),o.y-=[a.marginTop,a.borderTopWidth].reduce(t,0)), o}function Re(e){var t,n=e.document;n.getElementById(O)||(t=(new e.DOMParser).parseFromString(M,"image/svg+xml"), n.body.appendChild(t.documentElement), ne(e));}function Fe(e){var t,n,a,i,o,l,r,s,u,h,p,c,d,g,k,w,O,M,I,C=e.options,L=e.curStats,V=e.aplStats,P=L.position_socketXYSE,H=!1;function U(e,t){var n=t===f?{x:e.left+e.width/2,y:e.top}:t===y?{x:e.right,y:e.top+e.height/2}:t===m?{x:e.left+e.width/2,y:e.bottom}:{x:e.left,y:e.top+e.height/2};return n.socketId=t, n}function Z(e){return{x:e.x,y:e.y}}if(L.position_path=C.path, L.position_lineStrokeWidth=L.line_strokeWidth, L.position_socketGravitySE=t=de(C.socketGravitySE), n=[0,1].map(function(t){var n,a,i,o=C.anchorSE[t],l=e.optionIsAttach.anchorSE[t],r=!1!==l?he[o._id]:null,s=!1!==l&&r.conf.getStrokeWidth?r.conf.getStrokeWidth(r,e):0,u=!1!==l&&r.conf.getBBoxNest?r.conf.getBBoxNest(r,e,s):ge(o,e.baseWindow);return L.capsMaskAnchor_pathDataSE[t]=!1!==l&&r.conf.getPathData?r.conf.getPathData(r,e,s):(a=null!=(n=u).right?n.right:n.left+n.width,i=null!=n.bottom?n.bottom:n.top+n.height,[{type:"M",values:[n.left,n.top]},{type:"L",values:[a,n.top]},{type:"L",values:[a,i]},{type:"L",values:[n.left,i]},{type:"Z",values:[]}]),L.capsMaskAnchor_strokeWidthSE[t]=s,u}), r=-1, C.socketSE[0]&&C.socketSE[1]?(P[0]=U(n[0],C.socketSE[0]),P[1]=U(n[1],C.socketSE[1])):(C.socketSE[0]||C.socketSE[1]?(C.socketSE[0]?(o=0,l=1):(o=1,l=0),P[o]=U(n[o],C.socketSE[o]),(i=A.map(function(e){return U(n[l],e)})).forEach(function(e){var t=_e(e,P[o]);(t<r||-1===r)&&(P[l]=e,r=t)})):(i=A.map(function(e){return U(n[1],e)}),A.map(function(e){return U(n[0],e)}).forEach(function(e){i.forEach(function(t){var n=_e(e,t);(n<r||-1===r)&&(P[0]=e,P[1]=t,r=n)})})),[0,1].forEach(function(e){var t,a;C.socketSE[e]||(n[e].width||n[e].height?n[e].width||P[e].socketId!==S&&P[e].socketId!==y?n[e].height||P[e].socketId!==f&&P[e].socketId!==m||(P[e].socketId=P[e?0:1].y-n[e].top>=0?m:f):P[e].socketId=P[e?0:1].x-n[e].left>=0?y:S:(t=P[e?0:1].x-n[e].left,a=P[e?0:1].y-n[e].top,P[e].socketId=Math.abs(t)>=Math.abs(a)?t>=0?y:S:a>=0?m:f))})), L.position_path!==V.position_path||L.position_lineStrokeWidth!==V.position_lineStrokeWidth||[0,1].some(function(e){return L.position_plugOverheadSE[e]!==V.position_plugOverheadSE[e]||(o=P[e],l=V.position_socketXYSE[e],o.x!==l.x||o.y!==l.y||o.socketId!==l.socketId)||(n=t[e],a=V.position_socketGravitySE[e],(i=null==n?"auto":Array.isArray(n)?"array":"number")!==(null==a?"auto":Array.isArray(a)?"array":"number")||("array"===i?n[0]!==a[0]||n[1]!==a[1]:n!==a));var n,a,i,o,l})){switch(e.pathList.baseVal=a=[], e.pathList.animVal=null, L.position_path){case _:a.push([Z(P[0]),Z(P[1])]);break;case v:c="number"==typeof t[0]&&t[0]>0||"number"==typeof t[1]&&t[1]>0, d=j*(c?-1:1), g=Math.atan2(P[1].y-P[0].y,P[1].x-P[0].x), k=-g+d, w=Math.PI-g-d, O=_e(P[0],P[1])/Math.sqrt(2)*z, M={x:P[0].x+Math.cos(k)*O,y:P[0].y+Math.sin(k)*O*-1}, I={x:P[1].x+Math.cos(w)*O,y:P[1].y+Math.sin(w)*O*-1}, a.push([Z(P[0]),M,I,Z(P[1])]);break;case E:case x:u=[t[0],L.position_path===x?0:t[1]], h=[], p=[], P.forEach(function(e,t){var n,a,i,o,l,r=u[t];Array.isArray(r)?n={x:r[0],y:r[1]}:"number"==typeof r?n=e.socketId===f?{x:0,y:-r}:e.socketId===y?{x:r,y:0}:e.socketId===m?{x:0,y:r}:{x:-r,y:0}:(a=P[t?0:1],o=(i=L.position_plugOverheadSE[t])>0?B+(i>R?(i-R)*F:0):N+(L.position_lineStrokeWidth>T?(L.position_lineStrokeWidth-T)*W:0),e.socketId===f?((l=(e.y-a.y)/2)<o&&(l=o),n={x:0,y:-l}):e.socketId===y?((l=(a.x-e.x)/2)<o&&(l=o),n={x:l,y:0}):e.socketId===m?((l=(a.y-e.y)/2)<o&&(l=o),n={x:0,y:l}):((l=(e.x-a.x)/2)<o&&(l=o),n={x:-l,y:0})),h[t]=e.x+n.x,p[t]=e.y+n.y}), a.push([Z(P[0]),{x:h[0],y:p[0]},{x:h[1],y:p[1]},Z(P[1])]);break;case b:!function(){var e,n=1,i=2,o=3,l=4,r=[[],[]],s=[];function u(e){return e===n?o:e===i?l:e===o?n:i}function h(e){return e===i||e===l?"x":"y"}function p(e,t,a){var l={x:e.x,y:e.y};if(a){if(a===u(e.dirId))throw new Error("Invalid dirId: "+a);l.dirId=a;}else l.dirId=e.dirId;return l.dirId===n?l.y-=t:l.dirId===i?l.x+=t:l.dirId===o?l.y+=t:l.x-=t, l}function c(e,t){return t.dirId===n?e.y<=t.y:t.dirId===i?e.x>=t.x:t.dirId===o?e.y>=t.y:e.x<=t.x}function d(e,t){return t.dirId===n||t.dirId===o?e.x===t.x:e.y===t.y}function f(e){return e[0]?{contain:0,notContain:1}:{contain:1,notContain:0}}function y(e,t,n){return Math.abs(t[n]-e[n])}function m(e,t,a){return"x"===a?e.x<t.x?i:l:e.y<t.y?o:n}function S(){var e,t,n,a,l=[c(s[1],s[0]),c(s[0],s[1])],u=[h(s[0].dirId),h(s[1].dirId)];if(u[0]===u[1]){if(l[0]&&l[1])return d(s[1],s[0])||(s[0][u[0]]===s[1][u[1]]?(r[0].push(s[0]),r[1].push(s[1])):(e=s[0][u[0]]+(s[1][u[1]]-s[0][u[0]])/2,r[0].push(p(s[0],Math.abs(e-s[0][u[0]]))),r[1].push(p(s[1],Math.abs(e-s[1][u[1]]))))), !1;l[0]!==l[1]?(t=f(l), (n=y(s[t.notContain],s[t.contain],u[t.notContain]))<D&&(s[t.notContain]=p(s[t.notContain],D-n)), r[t.notContain].push(s[t.notContain]), s[t.notContain]=p(s[t.notContain],D,d(s[t.contain],s[t.notContain])?"x"===u[t.notContain]?o:i:m(s[t.notContain],s[t.contain],"x"===u[t.notContain]?"y":"x"))):(n=y(s[0],s[1],"x"===u[0]?"y":"x"), r.forEach(function(e,t){var a=0===t?1:0;e.push(s[t]),s[t]=p(s[t],D,n>=2*D?m(s[t],s[a],"x"===u[t]?"y":"x"):"x"===u[t]?o:i)}));}else{if(l[0]&&l[1])return d(s[1],s[0])?r[1].push(s[1]):d(s[0],s[1])?r[0].push(s[0]):r[0].push("x"===u[0]?{x:s[1].x,y:s[0].y}:{x:s[0].x,y:s[1].y}), !1;l[0]!==l[1]?(t=f(l), r[t.notContain].push(s[t.notContain]), s[t.notContain]=p(s[t.notContain],D,y(s[t.notContain],s[t.contain],u[t.contain])>=D?m(s[t.notContain],s[t.contain],u[t.contain]):s[t.contain].dirId)):(a=[{x:s[0].x,y:s[0].y},{x:s[1].x,y:s[1].y}], r.forEach(function(e,t){var n=0===t?1:0,i=y(a[t],a[n],u[t]);i<D&&(s[t]=p(s[t],D-i)),e.push(s[t]),s[t]=p(s[t],D,m(s[t],s[n],u[n]))}));}return!0}for(P.forEach(function(e,a){var h,c=Z(e),d=t[a];h=Array.isArray(d)?d[0]<0?[l,-d[0]]:d[0]>0?[i,d[0]]:d[1]<0?[n,-d[1]]:d[1]>0?[o,d[1]]:[e.socketId,0]:"number"!=typeof d?[e.socketId,D]:d>=0?[e.socketId,d]:[u(e.socketId),-d], c.dirId=h[0], d=h[1], r[a].push(c), s[a]=p(c,d);});S(););r[1].reverse(), r[0].concat(r[1]).forEach(function(t,n){var i={x:t.x,y:t.y};n>0&&a.push([e,i]),e=i});}();}s=[], L.position_plugOverheadSE.forEach(function(e,t){var i,o,l,r,u,h,p,c,d,m,g,_=!t;e>0?2===(i=a[o=_?0:a.length-1]).length?(s[o]=s[o]||_e.apply(null,i),s[o]>G&&(s[o]-e<G&&(e=s[o]-G),l=ve(i[0],i[1],(_?e:s[o]-e)/s[o]),a[o]=_?[l,i[1]]:[i[0],l],s[o]-=e)):(s[o]=s[o]||be.apply(null,i),s[o]>G&&(s[o]-e<G&&(e=s[o]-G),l=xe(i[0],i[1],i[2],i[3],ke(i[0],i[1],i[2],i[3],_?e:s[o]-e)),_?(r=i[0],u=l.toP1):(r=i[3],u=l.fromP2),h=Math.atan2(r.y-l.y,l.x-r.x),p=_e(l,u),l.x=r.x+Math.cos(h)*e,l.y=r.y+Math.sin(h)*e*-1,u.x=l.x+Math.cos(h)*p,u.y=l.y+Math.sin(h)*p*-1,a[o]=_?[l,l.toP1,l.toP2,i[3]]:[i[0],l.fromP1,l.fromP2,l],s[o]=null)):e<0&&(i=a[o=_?0:a.length-1],c=P[t].socketId,d=c===S||c===y?"x":"y",e<(g=-n[t]["x"===d?"width":"height"])&&(e=g),m=e*(c===S||c===f?-1:1),2===i.length?i[_?0:i.length-1][d]+=m:(_?[0,1]:[i.length-2,i.length-1]).forEach(function(e){i[e][d]+=m}),s[o]=null)}), V.position_socketXYSE=de(P), V.position_plugOverheadSE=de(L.position_plugOverheadSE), V.position_path=L.position_path, V.position_lineStrokeWidth=L.position_lineStrokeWidth, V.position_socketGravitySE=de(t), H=!0, e.events.apl_position&&e.events.apl_position.forEach(function(t){t(e,a)});}return H}function Ge(e,t){t!==e.isShown&&(!!t!=!!e.isShown&&(e.svg.style.visibility=t?"":"hidden"), e.isShown=t, e.events&&e.events.svgShow&&e.events.svgShow.forEach(function(n){n(e,t)}));}function De(t,n){var a,i,o,l,r,s,u,h,p,c,d,f,y,m,S,g,_,v,E,x,b,k,O,M,C,A,V,N,T,W,B,R,F,G,D,z,j,H,U,q,$,ee,te,ne,ae,ie,oe,le,re,se,ue,he,pe={};n.line&&(pe.line=(i=(a=t).options,o=a.curStats,l=a.events,r=!1,r=We(a,o,"line_color",i.lineColor,l.cur_line_color)||r,r=We(a,o,"line_colorTra",fe(o.line_color)[0]<1)||r,r=We(a,o,"line_strokeWidth",i.lineSize,l.cur_line_strokeWidth)||r)), (n.plug||pe.line)&&(pe.plug=(u=(s=t).options,h=s.curStats,p=s.events,c=!1,[0,1].forEach(function(e){var t,n,a,i,o,l,r,d,f=u.plugSE[e];c=We(s,h.plug_enabledSE,e,f!==w)||c,c=We(s,h.plug_plugSE,e,f)||c,c=We(s,h.plug_colorSE,e,d=u.plugColorSE[e]||h.line_color,p.cur_plug_colorSE)||c,c=We(s,h.plug_colorTraSE,e,fe(d)[0]<1)||c,f!==w&&(i=n=(t=I[L[f]]).widthR*u.plugSizeSE[e],o=a=t.heightR*u.plugSizeSE[e],Q&&(i*=h.line_strokeWidth,o*=h.line_strokeWidth),c=We(s,h.plug_markerWidthSE,e,i)||c,c=We(s,h.plug_markerHeightSE,e,o)||c,h.capsMaskMarker_markerWidthSE[e]=n,h.capsMaskMarker_markerHeightSE[e]=a),h.plugOutline_plugSE[e]=h.capsMaskMarker_plugSE[e]=f,h.plug_enabledSE[e]?(d=h.line_strokeWidth/J.lineSize*u.plugSizeSE[e],h.position_plugOverheadSE[e]=t.overhead*d,h.viewBox_plugBCircleSE[e]=t.bCircle*d,l=t.sideLen*d,r=t.backLen*d):(h.position_plugOverheadSE[e]=-h.line_strokeWidth/2,h.viewBox_plugBCircleSE[e]=l=r=0),We(s,h.attach_plugSideLenSE,e,l,p.cur_attach_plugSideLenSE),We(s,h.attach_plugBackLenSE,e,r,p.cur_attach_plugBackLenSE),h.capsMaskAnchor_enabledSE[e]=!h.plug_enabledSE[e]}),c=We(s,h,"plug_enabled",h.plug_enabledSE[0]||h.plug_enabledSE[1])||c)), (n.lineOutline||pe.line)&&(pe.lineOutline=(y=(d=t).options,m=d.curStats,S=!1,S=We(d,m,"lineOutline_enabled",y.lineOutlineEnabled)||S,S=We(d,m,"lineOutline_color",y.lineOutlineColor)||S,S=We(d,m,"lineOutline_colorTra",fe(m.lineOutline_color)[0]<1)||S,f=m.line_strokeWidth*y.lineOutlineSize,S=We(d,m,"lineOutline_strokeWidth",m.line_strokeWidth-2*f)||S,S=We(d,m,"lineOutline_inStrokeWidth",m.lineOutline_colorTra?m.lineOutline_strokeWidth+2*K:m.line_strokeWidth-f)||S)), (n.plugOutline||pe.line||pe.plug||pe.lineOutline)&&(pe.plugOutline=(_=(g=t).options,v=g.curStats,E=!1,[0,1].forEach(function(e){var t,n=v.plugOutline_plugSE[e],a=n!==w?I[L[n]]:null;E=We(g,v.plugOutline_enabledSE,e,_.plugOutlineEnabledSE[e]&&v.plug_enabled&&v.plug_enabledSE[e]&&!!a&&!!a.outlineBase)||E,E=We(g,v.plugOutline_colorSE,e,t=_.plugOutlineColorSE[e]||v.lineOutline_color)||E,E=We(g,v.plugOutline_colorTraSE,e,fe(t)[0]<1)||E,a&&a.outlineBase&&((t=_.plugOutlineSizeSE[e])>a.outlineMax&&(t=a.outlineMax),t*=2*a.outlineBase,E=We(g,v.plugOutline_strokeWidthSE,e,t)||E,E=We(g,v.plugOutline_inStrokeWidthSE,e,v.plugOutline_colorTraSE[e]?t-K/(v.line_strokeWidth/J.lineSize)/_.plugSizeSE[e]*2:t/2)||E)}),E)), (n.faces||pe.line||pe.plug||pe.lineOutline||pe.plugOutline)&&(pe.faces=(k=(x=t).curStats,O=x.aplStats,M=x.events,C=!1,!k.line_altColor&&We(x,O,"line_color",b=k.line_color,M.apl_line_color)&&(x.lineFace.style.stroke=b,C=!0),We(x,O,"line_strokeWidth",b=k.line_strokeWidth,M.apl_line_strokeWidth)&&(x.lineShape.style.strokeWidth=b+"px",C=!0,(X||Z)&&(Ae(x,x.lineShape),Z&&(Ae(x,x.lineFace),Ae(x,x.lineMaskCaps)))),We(x,O,"lineOutline_enabled",b=k.lineOutline_enabled,M.apl_lineOutline_enabled)&&(x.lineOutlineFace.style.display=b?"inline":"none",C=!0),k.lineOutline_enabled&&(We(x,O,"lineOutline_color",b=k.lineOutline_color,M.apl_lineOutline_color)&&(x.lineOutlineFace.style.stroke=b,C=!0),We(x,O,"lineOutline_strokeWidth",b=k.lineOutline_strokeWidth,M.apl_lineOutline_strokeWidth)&&(x.lineOutlineMaskShape.style.strokeWidth=b+"px",C=!0,Z&&(Ae(x,x.lineOutlineMaskCaps),Ae(x,x.lineOutlineFace))),We(x,O,"lineOutline_inStrokeWidth",b=k.lineOutline_inStrokeWidth,M.apl_lineOutline_inStrokeWidth)&&(x.lineMaskShape.style.strokeWidth=b+"px",C=!0,Z&&(Ae(x,x.lineOutlineMaskCaps),Ae(x,x.lineOutlineFace)))),We(x,O,"plug_enabled",b=k.plug_enabled,M.apl_plug_enabled)&&(x.plugsFace.style.display=b?"inline":"none",C=!0),k.plug_enabled&&[0,1].forEach(function(e){var t=k.plug_plugSE[e],n=t!==w?I[L[t]]:null,a=Ne(e,n);We(x,O.plug_enabledSE,e,b=k.plug_enabledSE[e],M.apl_plug_enabledSE)&&(x.plugsFace.style[a.prop]=b?"url(#"+x.plugMarkerIdSE[e]+")":"none",C=!0),k.plug_enabledSE[e]&&(We(x,O.plug_plugSE,e,t,M.apl_plug_plugSE)&&(x.plugFaceSE[e].href.baseVal="#"+n.elmId,Pe(x,x.plugMarkerSE[e],a.orient,n.bBox,x.svg,x.plugMarkerShapeSE[e],x.plugsFace),C=!0,X&&Ae(x,x.plugsFace)),We(x,O.plug_colorSE,e,b=k.plug_colorSE[e],M.apl_plug_colorSE)&&(x.plugFaceSE[e].style.fill=b,C=!0,(Y||Q||Z)&&!k.line_colorTra&&Ae(x,Z?x.lineMaskCaps:x.capsMaskLine)),["markerWidth","markerHeight"].forEach(function(t){var n="plug_"+t+"SE";We(x,O[n],e,b=k[n][e],M["apl_"+n])&&(x.plugMarkerSE[e][t].baseVal.value=b,C=!0)}),We(x,O.plugOutline_enabledSE,e,b=k.plugOutline_enabledSE[e],M.apl_plugOutline_enabledSE)&&(b?(x.plugFaceSE[e].style.mask="url(#"+x.plugMaskIdSE[e]+")",x.plugOutlineFaceSE[e].style.display="inline"):(x.plugFaceSE[e].style.mask="none",x.plugOutlineFaceSE[e].style.display="none"),C=!0),k.plugOutline_enabledSE[e]&&(We(x,O.plugOutline_plugSE,e,t,M.apl_plugOutline_plugSE)&&(x.plugOutlineFaceSE[e].href.baseVal=x.plugMaskShapeSE[e].href.baseVal=x.plugOutlineMaskShapeSE[e].href.baseVal="#"+n.elmId,[x.plugMaskSE[e],x.plugOutlineMaskSE[e]].forEach(function(e){e.x.baseVal.value=n.bBox.left,e.y.baseVal.value=n.bBox.top,e.width.baseVal.value=n.bBox.width,e.height.baseVal.value=n.bBox.height}),C=!0),We(x,O.plugOutline_colorSE,e,b=k.plugOutline_colorSE[e],M.apl_plugOutline_colorSE)&&(x.plugOutlineFaceSE[e].style.fill=b,C=!0,Z&&(Ae(x,x.lineMaskCaps),Ae(x,x.lineOutlineMaskCaps))),We(x,O.plugOutline_strokeWidthSE,e,b=k.plugOutline_strokeWidthSE[e],M.apl_plugOutline_strokeWidthSE)&&(x.plugOutlineMaskShapeSE[e].style.strokeWidth=b+"px",C=!0),We(x,O.plugOutline_inStrokeWidthSE,e,b=k.plugOutline_inStrokeWidthSE[e],M.apl_plugOutline_inStrokeWidthSE)&&(x.plugMaskShapeSE[e].style.strokeWidth=b+"px",C=!0)))}),C)), (n.position||pe.line||pe.plug)&&(pe.position=Fe(t)), (n.path||pe.position)&&(pe.path=(N=(A=t).curStats,T=A.aplStats,W=A.pathList.animVal||A.pathList.baseVal,B=N.path_edge,R=!1,W&&(B.x1=B.x2=W[0][0].x,B.y1=B.y2=W[0][0].y,N.path_pathData=V=we(W,function(e){e.x<B.x1&&(B.x1=e.x),e.y<B.y1&&(B.y1=e.y),e.x>B.x2&&(B.x2=e.x),e.y>B.y2&&(B.y2=e.y)}),Me(V,T.path_pathData)&&(A.linePath.setPathData(V),T.path_pathData=V,R=!0,Z?(Ae(A,A.plugsFace),Ae(A,A.lineMaskCaps)):X&&Ae(A,A.linePath),A.events.apl_path&&A.events.apl_path.forEach(function(e){e(A,V)}))),R)), pe.viewBox=(z=(F=t).curStats,j=F.aplStats,H=z.path_edge,U=z.viewBox_bBox,q=j.viewBox_bBox,$=F.svg.viewBox.baseVal,ee=F.svg.style,te=!1,G=Math.max(z.line_strokeWidth/2,z.viewBox_plugBCircleSE[0]||0,z.viewBox_plugBCircleSE[1]||0),D={x1:H.x1-G,y1:H.y1-G,x2:H.x2+G,y2:H.y2+G},F.events.new_edge4viewBox&&F.events.new_edge4viewBox.forEach(function(e){e(F,D)}),U.x=z.lineMask_x=z.lineOutlineMask_x=z.maskBGRect_x=D.x1,U.y=z.lineMask_y=z.lineOutlineMask_y=z.maskBGRect_y=D.y1,U.width=D.x2-D.x1,U.height=D.y2-D.y1,["x","y","width","height"].forEach(function(e){var t;(t=U[e])!==q[e]&&($[e]=q[e]=t,ee[P[e]]=t+("x"===e||"y"===e?F.bodyOffset[e]:0)+"px",te=!0)}),te), pe.mask=(ie=(ne=t).curStats,oe=ne.aplStats,le=!1,ie.plug_enabled?[0,1].forEach(function(e){ie.capsMaskMarker_enabledSE[e]=ie.plug_enabledSE[e]&&ie.plug_colorTraSE[e]||ie.plugOutline_enabledSE[e]&&ie.plugOutline_colorTraSE[e]}):ie.capsMaskMarker_enabledSE[0]=ie.capsMaskMarker_enabledSE[1]=!1,ie.capsMaskMarker_enabled=ie.capsMaskMarker_enabledSE[0]||ie.capsMaskMarker_enabledSE[1],ie.lineMask_outlineMode=ie.lineOutline_enabled,ie.caps_enabled=ie.capsMaskMarker_enabled||ie.capsMaskAnchor_enabledSE[0]||ie.capsMaskAnchor_enabledSE[1],ie.lineMask_enabled=ie.caps_enabled||ie.lineMask_outlineMode,(ie.lineMask_enabled&&!ie.lineMask_outlineMode||ie.lineOutline_enabled)&&["x","y"].forEach(function(e){var t="maskBGRect_"+e;We(ne,oe,t,ae=ie[t])&&(ne.maskBGRect[e].baseVal.value=ae,le=!0)}),We(ne,oe,"lineMask_enabled",ae=ie.lineMask_enabled)&&(ne.lineFace.style.mask=ae?"url(#"+ne.lineMaskId+")":"none",le=!0,Q&&Ae(ne,ne.lineMask)),ie.lineMask_enabled&&(We(ne,oe,"lineMask_outlineMode",ae=ie.lineMask_outlineMode)&&(ae?(ne.lineMaskBG.style.display="none",ne.lineMaskShape.style.display="inline"):(ne.lineMaskBG.style.display="inline",ne.lineMaskShape.style.display="none"),le=!0),["x","y"].forEach(function(e){var t="lineMask_"+e;We(ne,oe,t,ae=ie[t])&&(ne.lineMask[e].baseVal.value=ae,le=!0)}),We(ne,oe,"caps_enabled",ae=ie.caps_enabled)&&(ne.lineMaskCaps.style.display=ne.lineOutlineMaskCaps.style.display=ae?"inline":"none",le=!0,Q&&Ae(ne,ne.capsMaskLine)),ie.caps_enabled&&([0,1].forEach(function(e){var t;We(ne,oe.capsMaskAnchor_enabledSE,e,ae=ie.capsMaskAnchor_enabledSE[e])&&(ne.capsMaskAnchorSE[e].style.display=ae?"inline":"none",le=!0,Q&&Ae(ne,ne.lineMask)),ie.capsMaskAnchor_enabledSE[e]&&(Me(t=ie.capsMaskAnchor_pathDataSE[e],oe.capsMaskAnchor_pathDataSE[e])&&(ne.capsMaskAnchorSE[e].setPathData(t),oe.capsMaskAnchor_pathDataSE[e]=t,le=!0),We(ne,oe.capsMaskAnchor_strokeWidthSE,e,ae=ie.capsMaskAnchor_strokeWidthSE[e])&&(ne.capsMaskAnchorSE[e].style.strokeWidth=ae+"px",le=!0))}),We(ne,oe,"capsMaskMarker_enabled",ae=ie.capsMaskMarker_enabled)&&(ne.capsMaskLine.style.display=ae?"inline":"none",le=!0),ie.capsMaskMarker_enabled&&[0,1].forEach(function(e){var t=ie.capsMaskMarker_plugSE[e],n=t!==w?I[L[t]]:null,a=Ne(e,n);We(ne,oe.capsMaskMarker_enabledSE,e,ae=ie.capsMaskMarker_enabledSE[e])&&(ne.capsMaskLine.style[a.prop]=ae?"url(#"+ne.lineMaskMarkerIdSE[e]+")":"none",le=!0),ie.capsMaskMarker_enabledSE[e]&&(We(ne,oe.capsMaskMarker_plugSE,e,t)&&(ne.capsMaskMarkerShapeSE[e].href.baseVal="#"+n.elmId,Pe(ne,ne.capsMaskMarkerSE[e],a.orient,n.bBox,ne.svg,ne.capsMaskMarkerShapeSE[e],ne.capsMaskLine),le=!0,X&&(Ae(ne,ne.capsMaskLine),Ae(ne,ne.lineFace))),["markerWidth","markerHeight"].forEach(function(t){var n="capsMaskMarker_"+t+"SE";We(ne,oe[n],e,ae=ie[n][e])&&(ne.capsMaskMarkerSE[e][t].baseVal.value=ae,le=!0)}))}))),ie.lineOutline_enabled&&["x","y"].forEach(function(e){var t="lineOutlineMask_"+e;We(ne,oe,t,ae=ie[t])&&(ne.lineOutlineMask[e].baseVal.value=ae,le=!0)}),le), n.effect&&(ue=(re=t).curStats,he=re.aplStats,Object.keys(e).forEach(function(t){var n=e[t],a=t+"_enabled",i=t+"_options",o=ue[i];We(re,he,a,se=ue[a])?(se&&(he[i]=de(o)),n[se?"init":"remove"](re)):se&&ce(o,he[i])&&(n.remove(re),he[a]=!0,he[i]=de(o),n.init(re))})), (Y||Q)&&pe.line&&!pe.path&&Ae(t,t.lineShape), Y&&pe.plug&&!pe.line&&Ae(t,t.plugsFace), Ve(t);}function ze(e,t){return{duration:ee(e.duration)&&e.duration>0?e.duration:t.duration,timing:te.validTiming(e.timing)?e.timing:de(t.timing)}}function je(e,n,a,i){var o,l=e.curStats,r=e.aplStats,s={};function u(){["show_on","show_effect","show_animOptions"].forEach(function(e){r[e]=l[e];});}l.show_on=n, a&&t[a]&&(l.show_effect=a,l.show_animOptions=ze($(i)?i:{},t[a].defaultAnimOptions)), s.show_on=l.show_on!==r.show_on, s.show_effect=l.show_effect!==r.show_effect, s.show_animOptions=ce(l.show_animOptions,r.show_animOptions), s.show_effect||s.show_animOptions?l.show_inAnim?(o=s.show_effect?t[r.show_effect].stop(e,!0,!0):t[r.show_effect].stop(e),u(),t[r.show_effect].init(e,o)):s.show_on&&(r.show_effect&&s.show_effect&&t[r.show_effect].stop(e,!0,!0),u(),t[r.show_effect].init(e)):s.show_on&&(u(),t[r.show_effect].start(e));}function He(e,t,n){var a={props:e,optionName:n};return!(!(e.attachments.indexOf(t)<0)||t.conf.bind&&!t.conf.bind(t,a))&&(e.attachments.push(t), t.boundTargets.push(a), !0)}function Ue(e,t,n){var a=e.attachments.indexOf(t);a>-1&&e.attachments.splice(a,1), t.boundTargets.some(function(n,i){return n.props===e&&(t.conf.unbind&&t.conf.unbind(t,n),a=i,!0)})&&(t.boundTargets.splice(a,1),n||Le(function(){t.boundTargets.length||o(t)}));}function Ze(o,l){var r,s,u=o.options,h={};function p(e,t,n,a,i){var o={};return n?null!=a?(o.container=e[n],o.key=a):(o.container=e,o.key=n):(o.container=e,o.key=t), o.default=i, o.acceptsAuto=null==o.default, o}function c(e,t,n,a,i,o,l){var r,s,u,h=p(e,n,i,o,l);return null!=t[n]&&(s=(t[n]+"").toLowerCase())&&(h.acceptsAuto&&s===V||(u=a[s]))&&u!==h.container[h.key]&&(h.container[h.key]=u,r=!0), null!=h.container[h.key]||h.acceptsAuto||(h.container[h.key]=h.default,r=!0), r}function f(e,t,n,a,i,o,l,r,s){var u,h,c,d,f=p(e,n,i,o,l);if(!a){if(null==f.default)throw new Error("Invalid `type`: "+n);a=typeof f.default;}return null!=t[n]&&(f.acceptsAuto&&(t[n]+"").toLowerCase()===V||(c=h=t[n],("number"===(d=a)?ee(c):typeof c===d)&&(h=s&&"string"===a&&h?h.trim():h,1)&&(!r||r(h))))&&h!==f.container[f.key]&&(f.container[f.key]=h,u=!0), null!=f.container[f.key]||f.acceptsAuto||(f.container[f.key]=f.default,u=!0), u}if(l=l||{}, ["start","end"].forEach(function(e,t){var n=l[e],a=!1;if(n&&(ye(n)||(a=i(n,"anchor")))&&n!==u.anchorSE[t]){if(!1!==o.optionIsAttach.anchorSE[t]&&Ue(o,he[u.anchorSE[t]._id]),a&&!He(o,he[n._id],e))throw new Error("Can't bind attachment");u.anchorSE[t]=n,o.optionIsAttach.anchorSE[t]=a,s=h.position=!0}}), !u.anchorSE[0]||!u.anchorSE[1]||u.anchorSE[0]===u.anchorSE[1])throw new Error("`start` and `end` are required.");s&&(r=function(e,t){var n,a,i;if(!(n=Se(e))||!(a=Se(t)))throw new Error("Cannot get frames.");return n.length&&a.length&&(n.reverse(),a.reverse(),n.some(function(e){return a.some(function(t){return t===e&&(i=t.contentWindow,!0)})})),i||window}(!1!==o.optionIsAttach.anchorSE[0]?he[u.anchorSE[0]._id].element:u.anchorSE[0],!1!==o.optionIsAttach.anchorSE[1]?he[u.anchorSE[1]._id].element:u.anchorSE[1]))!==o.baseWindow&&(!function(n,a){var o,l,r,s,u,h,p,c,f,y,m=n.aplStats,S=a.document,g=d+"-"+n._id;function _(e){var t=l.appendChild(S.createElementNS(U,"mask"));return t.id=e,t.maskUnits.baseVal=SVGUnitTypes.SVG_UNIT_TYPE_USERSPACEONUSE,[t.x,t.y,t.width,t.height].forEach(function(e){e.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX,0)}),t}function v(e){var t=l.appendChild(S.createElementNS(U,"marker"));return t.id=e,t.markerUnits.baseVal=SVGMarkerElement.SVG_MARKERUNITS_STROKEWIDTH,t.viewBox.baseVal||t.setAttribute("viewBox","0 0 0 0"),t}function E(e){return[e.width,e.height].forEach(function(e){e.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PERCENTAGE,100)}),e}n.pathList={},Te(m,ie),Object.keys(e).forEach(function(t){var a=t+"_enabled";m[a]&&(e[t].remove(n),m[a]=!1)}),n.baseWindow&&n.svg&&n.baseWindow.document.body.removeChild(n.svg),n.baseWindow=a,Re(a),n.bodyOffset=Be(a),n.svg=o=S.createElementNS(U,"svg"),o.className.baseVal=d,o.viewBox.baseVal||o.setAttribute("viewBox","0 0 0 0"),n.defs=l=o.appendChild(S.createElementNS(U,"defs")),n.linePath=s=l.appendChild(S.createElementNS(U,"path")),s.id=u=g+"-line-path",s.className.baseVal=d+"-line-path",Q&&(s.style.fill="none"),n.lineShape=s=l.appendChild(S.createElementNS(U,"use")),s.id=h=g+"-line-shape",s.href.baseVal="#"+u,(r=l.appendChild(S.createElementNS(U,"g"))).id=p=g+"-caps",n.capsMaskAnchorSE=[0,1].map(function(){var e=r.appendChild(S.createElementNS(U,"path"));return e.className.baseVal=d+"-caps-mask-anchor",e}),n.lineMaskMarkerIdSE=[g+"-caps-mask-marker-0",g+"-caps-mask-marker-1"],n.capsMaskMarkerSE=[0,1].map(function(e){return v(n.lineMaskMarkerIdSE[e])}),n.capsMaskMarkerShapeSE=[0,1].map(function(e){var t=n.capsMaskMarkerSE[e].appendChild(S.createElementNS(U,"use"));return t.className.baseVal=d+"-caps-mask-marker-shape",t}),n.capsMaskLine=s=r.appendChild(S.createElementNS(U,"use")),s.className.baseVal=d+"-caps-mask-line",s.href.baseVal="#"+h,n.maskBGRect=s=E(l.appendChild(S.createElementNS(U,"rect"))),s.id=c=g+"-mask-bg-rect",s.className.baseVal=d+"-mask-bg-rect",Q&&(s.style.fill="white"),n.lineMask=E(_(n.lineMaskId=g+"-line-mask")),n.lineMaskBG=s=n.lineMask.appendChild(S.createElementNS(U,"use")),s.href.baseVal="#"+c,n.lineMaskShape=s=n.lineMask.appendChild(S.createElementNS(U,"use")),s.className.baseVal=d+"-line-mask-shape",s.href.baseVal="#"+u,s.style.display="none",n.lineMaskCaps=s=n.lineMask.appendChild(S.createElementNS(U,"use")),s.href.baseVal="#"+p,n.lineOutlineMask=E(_(f=g+"-line-outline-mask")),(s=n.lineOutlineMask.appendChild(S.createElementNS(U,"use"))).href.baseVal="#"+c,n.lineOutlineMaskShape=s=n.lineOutlineMask.appendChild(S.createElementNS(U,"use")),s.className.baseVal=d+"-line-outline-mask-shape",s.href.baseVal="#"+u,n.lineOutlineMaskCaps=s=n.lineOutlineMask.appendChild(S.createElementNS(U,"use")),s.href.baseVal="#"+p,n.face=o.appendChild(S.createElementNS(U,"g")),n.lineFace=s=n.face.appendChild(S.createElementNS(U,"use")),s.href.baseVal="#"+h,n.lineOutlineFace=s=n.face.appendChild(S.createElementNS(U,"use")),s.href.baseVal="#"+h,s.style.mask="url(#"+f+")",s.style.display="none",n.plugMaskIdSE=[g+"-plug-mask-0",g+"-plug-mask-1"],n.plugMaskSE=[0,1].map(function(e){return _(n.plugMaskIdSE[e])}),n.plugMaskShapeSE=[0,1].map(function(e){var t=n.plugMaskSE[e].appendChild(S.createElementNS(U,"use"));return t.className.baseVal=d+"-plug-mask-shape",t}),y=[],n.plugOutlineMaskSE=[0,1].map(function(e){return _(y[e]=g+"-plug-outline-mask-"+e)}),n.plugOutlineMaskShapeSE=[0,1].map(function(e){var t=n.plugOutlineMaskSE[e].appendChild(S.createElementNS(U,"use"));return t.className.baseVal=d+"-plug-outline-mask-shape",t}),n.plugMarkerIdSE=[g+"-plug-marker-0",g+"-plug-marker-1"],n.plugMarkerSE=[0,1].map(function(e){var t=v(n.plugMarkerIdSE[e]);return Q&&(t.markerUnits.baseVal=SVGMarkerElement.SVG_MARKERUNITS_USERSPACEONUSE),t}),n.plugMarkerShapeSE=[0,1].map(function(e){return n.plugMarkerSE[e].appendChild(S.createElementNS(U,"g"))}),n.plugFaceSE=[0,1].map(function(e){return n.plugMarkerShapeSE[e].appendChild(S.createElementNS(U,"use"))}),n.plugOutlineFaceSE=[0,1].map(function(e){var t=n.plugMarkerShapeSE[e].appendChild(S.createElementNS(U,"use"));return t.style.mask="url(#"+y[e]+")",t.style.display="none",t}),n.plugsFace=s=n.face.appendChild(S.createElementNS(U,"use")),s.className.baseVal=d+"-plugs-face",s.href.baseVal="#"+h,s.style.display="none",n.curStats.show_inAnim?(n.isShown=1,t[m.show_effect].stop(n,!0)):n.isShown||(o.style.visibility="hidden"),S.body.appendChild(o),[0,1,2].forEach(function(e){var t,a=n.options.labelSEM[e];a&&i(a,"label")&&(t=he[a._id]).conf.initSvg&&t.conf.initSvg(t,n)})}(o,r),h.line=h.plug=h.lineOutline=h.plugOutline=h.faces=h.effect=!0), h.position=c(u,l,"path",k,null,null,J.path)||h.position, h.position=c(u,l,"startSocket",g,"socketSE",0)||h.position, h.position=c(u,l,"endSocket",g,"socketSE",1)||h.position, [l.startSocketGravity,l.endSocketGravity].forEach(function(e,t){var n,a,i=!1;null!=e&&(Array.isArray(e)?ee(e[0])&&ee(e[1])&&(i=[e[0],e[1]],Array.isArray(u.socketGravitySE[t])&&(n=i,a=u.socketGravitySE[t],n.length===a.length&&n.every(function(e,t){return e===a[t]}))&&(i=!1)):((e+"").toLowerCase()===V?i=null:ee(e)&&e>=0&&(i=e),i===u.socketGravitySE[t]&&(i=!1)),!1!==i&&(u.socketGravitySE[t]=i,h.position=!0))}), h.line=f(u,l,"color",null,"lineColor",null,J.lineColor,null,!0)||h.line, h.line=f(u,l,"size",null,"lineSize",null,J.lineSize,function(e){return e>0})||h.line, ["startPlug","endPlug"].forEach(function(e,t){h.plug=c(u,l,e,C,"plugSE",t,J.plugSE[t])||h.plug,h.plug=f(u,l,e+"Color","string","plugColorSE",t,null,null,!0)||h.plug,h.plug=f(u,l,e+"Size",null,"plugSizeSE",t,J.plugSizeSE[t],function(e){return e>0})||h.plug}), h.lineOutline=f(u,l,"outline",null,"lineOutlineEnabled",null,J.lineOutlineEnabled)||h.lineOutline, h.lineOutline=f(u,l,"outlineColor",null,"lineOutlineColor",null,J.lineOutlineColor,null,!0)||h.lineOutline, h.lineOutline=f(u,l,"outlineSize",null,"lineOutlineSize",null,J.lineOutlineSize,function(e){return e>0&&e<=.48})||h.lineOutline, ["startPlugOutline","endPlugOutline"].forEach(function(e,t){h.plugOutline=f(u,l,e,null,"plugOutlineEnabledSE",t,J.plugOutlineEnabledSE[t])||h.plugOutline,h.plugOutline=f(u,l,e+"Color","string","plugOutlineColorSE",t,null,null,!0)||h.plugOutline,h.plugOutline=f(u,l,e+"Size",null,"plugOutlineSizeSE",t,J.plugOutlineSizeSE[t],function(e){return e>=1})||h.plugOutline}), ["startLabel","endLabel","middleLabel"].forEach(function(e,t){var r,s,h,p=l[e],c=u.labelSEM[t]&&!o.optionIsAttach.labelSEM[t]?he[u.labelSEM[t]._id].text:u.labelSEM[t],d=!1;if((r="string"==typeof p)&&(p=p.trim()),(r||p&&(d=i(p,"label")))&&p!==c){if(u.labelSEM[t]&&(Ue(o,he[u.labelSEM[t]._id]),u.labelSEM[t]=""),p){if(d?(s=he[(h=p)._id]).boundTargets.slice().forEach(function(e){s.conf.removeOption(s,e)}):h=new a(n.captionLabel,[p]),!He(o,he[h._id],e))throw new Error("Can't bind attachment");u.labelSEM[t]=h}o.optionIsAttach.labelSEM[t]=d}}), Object.keys(e).forEach(function(t){var n,a,i=e[t],r=t+"_enabled",s=t+"_options";function p(e){var t={};return i.optionsConf.forEach(function(n){var a=n[0],i=n[3];null==n[4]||t[i]||(t[i]=[]),("function"==typeof a?a:"id"===a?c:f).apply(null,[t,e].concat(n.slice(1)))}),t}function d(e){var n,a=t+"_animOptions";return e.hasOwnProperty("animation")?$(e.animation)?n=o.curStats[a]=ze(e.animation,i.defaultAnimOptions):(n=!!e.animation,o.curStats[a]=n?ze({},i.defaultAnimOptions):null):(n=!!i.defaultEnabled,o.curStats[a]=n?ze({},i.defaultAnimOptions):null),n}l.hasOwnProperty(t)&&(n=l[t],$(n)?(o.curStats[r]=!0,a=o.curStats[s]=p(n),i.anim&&(o.curStats[s].animation=d(n))):(a=o.curStats[r]=!!n)&&(o.curStats[s]=p({}),i.anim&&(o.curStats[s].animation=d({}))),ce(a,u[t])&&(u[t]=a,h.effect=!0))}), De(o,h);}function Ye(n,a,i){var o={options:{anchorSE:[],socketSE:[],socketGravitySE:[],plugSE:[],plugColorSE:[],plugSizeSE:[],plugOutlineEnabledSE:[],plugOutlineColorSE:[],plugOutlineSizeSE:[],labelSEM:["","",""]},optionIsAttach:{anchorSE:[!1,!1],labelSEM:[!1,!1,!1]},curStats:{},aplStats:{},attachments:[],events:{},reflowTargets:[]};Te(o.curStats,ie), Te(o.aplStats,ie), Object.keys(e).forEach(function(t){var n=e[t].stats;Te(o.curStats,n),Te(o.aplStats,n),o.options[t]=!1}), Te(o.curStats,oe), Te(o.aplStats,oe), o.curStats.show_effect=le, o.curStats.show_animOptions=de(t[le].defaultAnimOptions), Object.defineProperty(this,"_id",{value:++ue}), o._id=this._id, se[this._id]=o, 1===arguments.length&&(i=n,n=null), i=i||{}, (n||a)&&(i=de(i),n&&(i.start=n),a&&(i.end=a)), o.isShown=o.aplStats.show_on=!i.hide, this.setOptions(i);}return e={dash:{stats:{dash_len:{},dash_gap:{},dash_maxOffset:{}},anim:!0,defaultAnimOptions:{duration:1e3,timing:"linear"},optionsConf:[["type","len","number",null,null,null,function(e){return e>0}],["type","gap","number",null,null,null,function(e){return e>0}]],init:function(t){Ie(t,"apl_line_strokeWidth",e.dash.update),t.lineFace.style.strokeDashoffset=0,e.dash.update(t)},remove:function(t){var n=t.curStats;Ce(t,"apl_line_strokeWidth",e.dash.update),n.dash_animId&&(te.remove(n.dash_animId),n.dash_animId=null),t.lineFace.style.strokeDasharray="none",t.lineFace.style.strokeDashoffset=0,Te(t.aplStats,e.dash.stats)},update:function(e){var t,n=e.curStats,a=e.aplStats,i=a.dash_options,o=!1;n.dash_len=i.len||2*a.line_strokeWidth,n.dash_gap=i.gap||a.line_strokeWidth,n.dash_maxOffset=n.dash_len+n.dash_gap,o=We(e,a,"dash_len",n.dash_len)||o,(o=We(e,a,"dash_gap",n.dash_gap)||o)&&(e.lineFace.style.strokeDasharray=a.dash_len+","+a.dash_gap),n.dash_animOptions?(o=We(e,a,"dash_maxOffset",n.dash_maxOffset),a.dash_animOptions&&(o||ce(n.dash_animOptions,a.dash_animOptions))&&(n.dash_animId&&(t=te.stop(n.dash_animId),te.remove(n.dash_animId)),a.dash_animOptions=null),a.dash_animOptions||(n.dash_animId=te.add(function(e){return(1-e)*a.dash_maxOffset+"px"},function(t){e.lineFace.style.strokeDashoffset=t},n.dash_animOptions.duration,0,n.dash_animOptions.timing,!1,t),a.dash_animOptions=de(n.dash_animOptions))):a.dash_animOptions&&(n.dash_animId&&(te.remove(n.dash_animId),n.dash_animId=null),e.lineFace.style.strokeDashoffset=0,a.dash_animOptions=null)}},gradient:{stats:{gradient_colorSE:{hasSE:!0},gradient_pointSE:{hasSE:!0,hasProps:!0}},optionsConf:[["type","startColor","string","colorSE",0,null,null,!0],["type","endColor","string","colorSE",1,null,null,!0]],init:function(t){var n,a=t.baseWindow.document,i=t.defs,o=d+"-"+t._id+"-gradient";t.efc_gradient_gradient=n=i.appendChild(a.createElementNS(U,"linearGradient")),n.id=o,n.gradientUnits.baseVal=SVGUnitTypes.SVG_UNIT_TYPE_USERSPACEONUSE,[n.x1,n.y1,n.x2,n.y2].forEach(function(e){e.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX,0)}),t.efc_gradient_stopSE=[0,1].map(function(e){var n=t.efc_gradient_gradient.appendChild(a.createElementNS(U,"stop"));try{n.offset.baseVal=e}catch(t){if(t.code!==DOMException.NO_MODIFICATION_ALLOWED_ERR)throw t;n.setAttribute("offset",e)}return n}),Ie(t,"cur_plug_colorSE",e.gradient.update),Ie(t,"apl_path",e.gradient.update),t.curStats.line_altColor=!0,t.lineFace.style.stroke="url(#"+o+")",e.gradient.update(t)},remove:function(t){t.efc_gradient_gradient&&(t.defs.removeChild(t.efc_gradient_gradient),t.efc_gradient_gradient=t.efc_gradient_stopSE=null),Ce(t,"cur_plug_colorSE",e.gradient.update),Ce(t,"apl_path",e.gradient.update),t.curStats.line_altColor=!1,t.lineFace.style.stroke=t.curStats.line_color,Te(t.aplStats,e.gradient.stats)},update:function(e){var t,n,a=e.curStats,i=e.aplStats,o=i.gradient_options,l=e.pathList.animVal||e.pathList.baseVal;[0,1].forEach(function(e){a.gradient_colorSE[e]=o.colorSE[e]||a.plug_colorSE[e]}),n=l[0][0],a.gradient_pointSE[0]={x:n.x,y:n.y},n=(t=l[l.length-1])[t.length-1],a.gradient_pointSE[1]={x:n.x,y:n.y},[0,1].forEach(function(t){var n;We(e,i.gradient_colorSE,t,n=a.gradient_colorSE[t])&&(Q?(n=fe(n),e.efc_gradient_stopSE[t].style.stopColor=n[1],e.efc_gradient_stopSE[t].style.stopOpacity=n[0]):e.efc_gradient_stopSE[t].style.stopColor=n),["x","y"].forEach(function(o){(n=a.gradient_pointSE[t][o])!==i.gradient_pointSE[t][o]&&(e.efc_gradient_gradient[o+(t+1)].baseVal.value=i.gradient_pointSE[t][o]=n)})})}},dropShadow:{stats:{dropShadow_dx:{},dropShadow_dy:{},dropShadow_blur:{},dropShadow_color:{},dropShadow_opacity:{},dropShadow_x:{},dropShadow_y:{}},optionsConf:[["type","dx",null,null,null,2],["type","dy",null,null,null,4],["type","blur",null,null,null,3,function(e){return e>=0}],["type","color",null,null,null,"#000",null,!0],["type","opacity",null,null,null,.8,function(e){return e>=0&&e<=1}]],init:function(t){var n,a,i,o,l,r=t.baseWindow.document,s=t.defs,h=d+"-"+t._id+"-dropShadow",p=(n=r,a=h,l={},"boolean"!=typeof u&&(u=!!window.SVGFEDropShadowElement&&!Q),l.elmsAppend=[l.elmFilter=i=n.createElementNS(U,"filter")],i.filterUnits.baseVal=SVGUnitTypes.SVG_UNIT_TYPE_USERSPACEONUSE,i.x.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX,0),i.y.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX,0),i.width.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PERCENTAGE,100),i.height.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PERCENTAGE,100),i.id=a,u?(l.elmOffset=l.elmBlur=o=i.appendChild(n.createElementNS(U,"feDropShadow")),l.styleFlood=o.style):(l.elmBlur=i.appendChild(n.createElementNS(U,"feGaussianBlur")),l.elmOffset=o=i.appendChild(n.createElementNS(U,"feOffset")),o.result.baseVal="offsetblur",o=i.appendChild(n.createElementNS(U,"feFlood")),l.styleFlood=o.style,(o=i.appendChild(n.createElementNS(U,"feComposite"))).in2.baseVal="offsetblur",o.operator.baseVal=SVGFECompositeElement.SVG_FECOMPOSITE_OPERATOR_IN,(o=i.appendChild(n.createElementNS(U,"feMerge"))).appendChild(n.createElementNS(U,"feMergeNode")),o.appendChild(n.createElementNS(U,"feMergeNode")).in1.baseVal="SourceGraphic"),l);["elmFilter","elmOffset","elmBlur","styleFlood","elmsAppend"].forEach(function(e){t["efc_dropShadow_"+e]=p[e]}),p.elmsAppend.forEach(function(e){s.appendChild(e)}),t.face.setAttribute("filter","url(#"+h+")"),Ie(t,"new_edge4viewBox",e.dropShadow.adjustEdge),e.dropShadow.update(t)},remove:function(t){var n=t.defs;t.efc_dropShadow_elmsAppend&&(t.efc_dropShadow_elmsAppend.forEach(function(e){n.removeChild(e)}),t.efc_dropShadow_elmFilter=t.efc_dropShadow_elmOffset=t.efc_dropShadow_elmBlur=t.efc_dropShadow_styleFlood=t.efc_dropShadow_elmsAppend=null),Ce(t,"new_edge4viewBox",e.dropShadow.adjustEdge),De(t,{}),t.face.removeAttribute("filter"),Te(t.aplStats,e.dropShadow.stats)},update:function(e){var t,n,a=e.curStats,i=e.aplStats,o=i.dropShadow_options;a.dropShadow_dx=t=o.dx,We(e,i,"dropShadow_dx",t)&&(e.efc_dropShadow_elmOffset.dx.baseVal=t,n=!0),a.dropShadow_dy=t=o.dy,We(e,i,"dropShadow_dy",t)&&(e.efc_dropShadow_elmOffset.dy.baseVal=t,n=!0),a.dropShadow_blur=t=o.blur,We(e,i,"dropShadow_blur",t)&&(e.efc_dropShadow_elmBlur.setStdDeviation(t,t),n=!0),n&&De(e,{}),a.dropShadow_color=t=o.color,We(e,i,"dropShadow_color",t)&&(e.efc_dropShadow_styleFlood.floodColor=t),a.dropShadow_opacity=t=o.opacity,We(e,i,"dropShadow_opacity",t)&&(e.efc_dropShadow_styleFlood.floodOpacity=t)},adjustEdge:function(e,t){var n,a,i=e.curStats,o=e.aplStats;null!=i.dropShadow_dx&&(n=3*i.dropShadow_blur,(a={x1:t.x1-n+i.dropShadow_dx,y1:t.y1-n+i.dropShadow_dy,x2:t.x2+n+i.dropShadow_dx,y2:t.y2+n+i.dropShadow_dy}).x1<t.x1&&(t.x1=a.x1),a.y1<t.y1&&(t.y1=a.y1),a.x2>t.x2&&(t.x2=a.x2),a.y2>t.y2&&(t.y2=a.y2),["x","y"].forEach(function(n){var a,l="dropShadow_"+n;i[l]=a=t[n+"1"],We(e,o,l,a)&&(e.efc_dropShadow_elmFilter[n].baseVal.value=a)}))}}}, Object.keys(e).forEach(function(t){var n=e[t],a=n.stats;a[t+"_enabled"]={iniValue:!1},a[t+"_options"]={hasProps:!0},n.anim&&(a[t+"_animOptions"]={},a[t+"_animId"]={})}), t={none:{defaultAnimOptions:{},init:function(e,n){var a=e.curStats;a.show_animId&&(te.remove(a.show_animId),a.show_animId=null),t.none.start(e,n)},start:function(e,n){t.none.stop(e,!0)},stop:function(e,t,n){var a=e.curStats;return n=null!=n?n:e.aplStats.show_on,a.show_inAnim=!1,t&&Ge(e,n),n?1:0}},fade:{defaultAnimOptions:{duration:300,timing:"linear"},init:function(e,n){var a=e.curStats,i=e.aplStats;a.show_animId&&te.remove(a.show_animId),a.show_animId=te.add(function(e){return e},function(n,a){a?t.fade.stop(e,!0):(e.svg.style.opacity=n+"",Z&&(Ae(e,e.svg),Ve(e)))},i.show_animOptions.duration,1,i.show_animOptions.timing,null,!1),t.fade.start(e,n)},start:function(e,t){var n,a=e.curStats;a.show_inAnim&&(n=te.stop(a.show_animId)),Ge(e,1),a.show_inAnim=!0,te.start(a.show_animId,!e.aplStats.show_on,null!=t?t:n)},stop:function(e,t,n){var a,i=e.curStats;return n=null!=n?n:e.aplStats.show_on,a=i.show_inAnim?te.stop(i.show_animId):n?1:0,i.show_inAnim=!1,t&&(e.svg.style.opacity=n?"":"0",Ge(e,n)),a}},draw:{defaultAnimOptions:{duration:500,timing:[.58,0,.42,1]},init:function(e,n){var a=e.curStats,i=e.aplStats,o=e.pathList.baseVal,l=Oe(o),r=l.segsLen,s=l.lenAll;a.show_animId&&te.remove(a.show_animId),a.show_animId=te.add(function(e){var t,n,a,i,l=-1;if(0===e)n=[[o[0][0],o[0][0]]];else if(1===e)n=o;else{for(t=s*e,n=[];t>=r[++l];)n.push(o[l]),t-=r[l];t&&(2===(a=o[l]).length?n.push([a[0],ve(a[0],a[1],t/r[l])]):(i=xe(a[0],a[1],a[2],a[3],ke(a[0],a[1],a[2],a[3],t)),n.push([a[0],i.fromP1,i.fromP2,i])))}return n},function(n,a){a?t.draw.stop(e,!0):(e.pathList.animVal=n,De(e,{path:!0}))},i.show_animOptions.duration,1,i.show_animOptions.timing,null,!1),t.draw.start(e,n)},start:function(e,n){var a,i=e.curStats;i.show_inAnim&&(a=te.stop(i.show_animId)),Ge(e,1),i.show_inAnim=!0,Ie(e,"apl_position",t.draw.update),te.start(i.show_animId,!e.aplStats.show_on,null!=n?n:a)},stop:function(e,t,n){var a,i=e.curStats;return n=null!=n?n:e.aplStats.show_on,a=i.show_inAnim?te.stop(i.show_animId):n?1:0,i.show_inAnim=!1,t&&(n?(e.pathList.animVal=null,De(e,{path:!0})):(e.pathList.animVal=[[e.pathList.baseVal[0][0],e.pathList.baseVal[0][0]]],De(e,{path:!0})),Ge(e,n)),a},update:function(e){Ce(e,"apl_position",t.draw.update),e.curStats.show_inAnim?t.draw.init(e,t.draw.stop(e)):e.aplStats.show_animOptions={}}}}, function(){function t(e){return function(t){var n={};n[e]=t,this.setOptions(n)}}[["start","anchorSE",0],["end","anchorSE",1],["color","lineColor"],["size","lineSize"],["startSocketGravity","socketGravitySE",0],["endSocketGravity","socketGravitySE",1],["startPlugColor","plugColorSE",0],["endPlugColor","plugColorSE",1],["startPlugSize","plugSizeSE",0],["endPlugSize","plugSizeSE",1],["outline","lineOutlineEnabled"],["outlineColor","lineOutlineColor"],["outlineSize","lineOutlineSize"],["startPlugOutline","plugOutlineEnabledSE",0],["endPlugOutline","plugOutlineEnabledSE",1],["startPlugOutlineColor","plugOutlineColorSE",0],["endPlugOutlineColor","plugOutlineColorSE",1],["startPlugOutlineSize","plugOutlineSizeSE",0],["endPlugOutlineSize","plugOutlineSizeSE",1]].forEach(function(e){var n=e[0],a=e[1],i=e[2];Object.defineProperty(Ye.prototype,n,{get:function(){var e=null!=i?se[this._id].options[a][i]:a?se[this._id].options[a]:se[this._id].options[n];return null==e?V:de(e)},set:t(n),enumerable:!0})}),[["path",k],["startSocket",g,"socketSE",0],["endSocket",g,"socketSE",1],["startPlug",C,"plugSE",0],["endPlug",C,"plugSE",1]].forEach(function(e){var n=e[0],a=e[1],i=e[2],o=e[3];Object.defineProperty(Ye.prototype,n,{get:function(){var e,t=null!=o?se[this._id].options[i][o]:i?se[this._id].options[i]:se[this._id].options[n];return t?Object.keys(a).some(function(n){return a[n]===t&&(e=n,!0)})?e:new Error("It's broken"):V},set:t(n),enumerable:!0})}),Object.keys(e).forEach(function(n){var a=e[n];Object.defineProperty(Ye.prototype,n,{get:function(){var e,t,i=se[this._id].options[n];return $(i)?(e=i,t=a.optionsConf.reduce(function(t,n){var a,i=n[0],o=n[1],l=n[2],r=n[3],s=n[4],u=null!=s?e[r][s]:r?e[r]:e[o];return t[o]="id"===i?u?Object.keys(l).some(function(e){return l[e]===u&&(a=e,!0)})?a:new Error("It's broken"):V:null==u?V:de(u),t},{}),a.anim&&(t.animation=de(e.animation)),t):i},set:t(n),enumerable:!0})}),["startLabel","endLabel","middleLabel"].forEach(function(e,n){Object.defineProperty(Ye.prototype,e,{get:function(){var e=se[this._id],t=e.options;return t.labelSEM[n]&&!e.optionIsAttach.labelSEM[n]?he[t.labelSEM[n]._id].text:t.labelSEM[n]||""},set:t(e),enumerable:!0})})}(), Ye.prototype.setOptions=function(e){return Ze(se[this._id],e),this}, Ye.prototype.position=function(){return De(se[this._id],{position:!0}),this}, Ye.prototype.remove=function(){var t=se[this._id],n=t.curStats;Object.keys(e).forEach(function(e){var t=e+"_animId";n[t]&&te.remove(n[t])}),n.show_animId&&te.remove(n.show_animId),t.attachments.slice().forEach(function(e){Ue(t,e)}),t.baseWindow&&t.svg&&t.baseWindow.document.body.removeChild(t.svg),delete se[this._id]}, Ye.prototype.show=function(e,t){return je(se[this._id],!0,e,t),this}, Ye.prototype.hide=function(e,t){return je(se[this._id],!1,e,t),this}, o=function(e){e&&he[e._id]&&(e.boundTargets.slice().forEach(function(t){Ue(t.props,e,!0)}),e.conf.remove&&e.conf.remove(e),delete he[e._id])}, a=function(){function e(e,t){var n,a={conf:e,curStats:{},aplStats:{},boundTargets:[]},i={};e.argOptions.every(function(e){return!(!t.length||("string"==typeof e.type?typeof t[0]!==e.type:"function"!=typeof e.type||!e.type(t[0])))&&(i[e.optionName]=t.shift(),!0)}),n=t.length&&$(t[0])?de(t[0]):{},Object.keys(i).forEach(function(e){n[e]=i[e]}),e.stats&&(Te(a.curStats,e.stats),Te(a.aplStats,e.stats)),Object.defineProperty(this,"_id",{value:++pe}),Object.defineProperty(this,"isRemoved",{get:function(){return!he[this._id]}}),a._id=this._id,e.init&&!e.init(a,n)||(he[this._id]=a)}return e.prototype.remove=function(){var e=this,t=he[e._id];t&&(t.boundTargets.slice().forEach(function(e){t.conf.removeOption(t,e)}),Le(function(){var t=he[e._id];t&&(console.error("LeaderLineAttachment was not removed by removeOption"),o(t))}))},e}(), window.LeaderLineAttachment=a, i=function(e,t){return e instanceof a&&(!(e.isRemoved||t&&he[e._id].conf.type!==t)||null)}, n={pointAnchor:{type:"anchor",argOptions:[{optionName:"element",type:ye}],init:function(e,t){return e.element=n.pointAnchor.checkElement(t.element),e.x=n.pointAnchor.parsePercent(t.x,!0)||[.5,!0],e.y=n.pointAnchor.parsePercent(t.y,!0)||[.5,!0],!0},removeOption:function(e,t){var i=t.props,o={},l=e.element,r=i.options.anchorSE["start"===t.optionName?1:0];l===r&&(l=r===document.body?new a(n.pointAnchor,[l]):document.body),o[t.optionName]=l,Ze(i,o)},getBBoxNest:function(e,t){var n=ge(e.element,t.baseWindow),a=n.width,i=n.height;return n.width=n.height=0,n.left=n.right=n.left+e.x[0]*(e.x[1]?a:1),n.top=n.bottom=n.top+e.y[0]*(e.y[1]?i:1),n},parsePercent:function(e,t){var n,a,i=!1;return ee(e)?a=e:"string"==typeof e&&(n=H.exec(e))&&n[2]&&(i=0!==(a=parseFloat(n[1])/100)),null!=a&&(t||a>=0)?[a,i]:null},checkElement:function(e){if(null==e)e=document.body;else if(!ye(e))throw new Error("`element` must be Element");return e}},areaAnchor:{type:"anchor",argOptions:[{optionName:"element",type:ye},{optionName:"shape",type:"string"}],stats:{color:{},strokeWidth:{},elementWidth:{},elementHeight:{},elementLeft:{},elementTop:{},pathListRel:{},bBoxRel:{},pathData:{},viewBoxBBox:{hasProps:!0},dashLen:{},dashGap:{}},init:function(e,t){var a,i,o,l=[];return e.element=n.pointAnchor.checkElement(t.element),"string"==typeof t.color&&(e.color=t.color.trim()),"string"==typeof t.fillColor&&(e.fill=t.fillColor.trim()),ee(t.size)&&t.size>=0&&(e.size=t.size),t.dash&&(e.dash=!0,ee(t.dash.len)&&t.dash.len>0&&(e.dashLen=t.dash.len),ee(t.dash.gap)&&t.dash.gap>0&&(e.dashGap=t.dash.gap)),"circle"===t.shape?e.shape=t.shape:"polygon"===t.shape&&Array.isArray(t.points)&&t.points.length>=3&&t.points.every(function(t){var a={};return!(!(a.x=n.pointAnchor.parsePercent(t[0],!0))||!(a.y=n.pointAnchor.parsePercent(t[1],!0)))&&(l.push(a),(a.x[1]||a.y[1])&&(e.hasRatio=!0),!0)})?(e.shape=t.shape,e.points=l):(e.shape="rect",e.radius=ee(t.radius)&&t.radius>=0?t.radius:0),"rect"!==e.shape&&"circle"!==e.shape||(e.x=n.pointAnchor.parsePercent(t.x,!0)||[-.05,!0],e.y=n.pointAnchor.parsePercent(t.y,!0)||[-.05,!0],e.width=n.pointAnchor.parsePercent(t.width)||[1.1,!0],e.height=n.pointAnchor.parsePercent(t.height)||[1.1,!0],(e.x[1]||e.y[1]||e.width[1]||e.height[1])&&(e.hasRatio=!0)),a=e.element.ownerDocument,e.svg=i=a.createElementNS(U,"svg"),i.className.baseVal=d+"-areaAnchor",i.viewBox.baseVal||i.setAttribute("viewBox","0 0 0 0"),e.path=i.appendChild(a.createElementNS(U,"path")),e.path.style.fill=e.fill||"none",e.isShown=!1,i.style.visibility="hidden",a.body.appendChild(i),Re(o=a.defaultView),e.bodyOffset=Be(o),e.updateColor=function(){var t,n=e.curStats,a=e.aplStats,i=e.boundTargets.length?e.boundTargets[0].props.curStats:null;n.color=t=e.color||(i?i.line_color:J.lineColor),We(e,a,"color",t)&&(e.path.style.stroke=t)},e.updateShow=function(){Ge(e,e.boundTargets.some(function(e){return!0===e.props.isShown}))},!0},bind:function(e,t){var n=t.props;return e.color||Ie(n,"cur_line_color",e.updateColor),Ie(n,"svgShow",e.updateShow),Le(function(){e.updateColor(),e.updateShow()}),!0},unbind:function(e,t){var a=t.props;e.color||Ce(a,"cur_line_color",e.updateColor),Ce(a,"svgShow",e.updateShow),e.boundTargets.length>1&&Le(function(){e.updateColor(),e.updateShow(),n.areaAnchor.update(e)&&e.boundTargets.forEach(function(e){De(e.props,{position:!0})})})},removeOption:function(e,t){n.pointAnchor.removeOption(e,t)},remove:function(e){e.boundTargets.length&&(console.error("LeaderLineAttachment was not unbound by remove"),e.boundTargets.forEach(function(t){n.areaAnchor.unbind(e,t)})),e.svg.parentNode.removeChild(e.svg)},getStrokeWidth:function(e,t){return n.areaAnchor.update(e)&&e.boundTargets.length>1&&Le(function(){e.boundTargets.forEach(function(e){e.props!==t&&De(e.props,{position:!0})})}),e.curStats.strokeWidth},getPathData:function(e,t){var n=ge(e.element,t.baseWindow);return we(e.curStats.pathListRel,function(e){e.x+=n.left,e.y+=n.top})},getBBoxNest:function(e,t){var n=ge(e.element,t.baseWindow),a=e.curStats.bBoxRel;return{left:a.left+n.left,top:a.top+n.top,right:a.right+n.left,bottom:a.bottom+n.top,width:a.width,height:a.height}},update:function(e){var t,n,a,i,o,l,r,s,u,h,p,c,d,f,y,m,S,g,_,v,E,x,b,k,w,O,M,I,C,L,A,V,N=e.curStats,T=e.aplStats,W=e.boundTargets.length?e.boundTargets[0].props.curStats:null,B={};if(B.strokeWidth=We(e,N,"strokeWidth",null!=e.size?e.size:W?W.line_strokeWidth:J.lineSize),t=me(e.element),B.elementWidth=We(e,N,"elementWidth",t.width),B.elementHeight=We(e,N,"elementHeight",t.height),B.elementLeft=We(e,N,"elementLeft",t.left),B.elementTop=We(e,N,"elementTop",t.top),B.strokeWidth||e.hasRatio&&(B.elementWidth||B.elementHeight)){switch(e.shape){case"rect":(v={left:e.x[0]*(e.x[1]?t.width:1),top:e.y[0]*(e.y[1]?t.height:1),width:e.width[0]*(e.width[1]?t.width:1),height:e.height[0]*(e.height[1]?t.height:1)}).right=v.left+v.width,v.bottom=v.top+v.height,k=N.strokeWidth/2,x=(b=Math.min(v.width,v.height))?b/2*Math.SQRT2+k:0,(E=e.radius?e.radius<=x?e.radius:x:0)?(O=E-(w=(E-k)/Math.SQRT2),I=E*z,M=[{x:v.left-O,y:v.top+w},{x:v.left+w,y:v.top-O},{x:v.right-w,y:v.top-O},{x:v.right+O,y:v.top+w},{x:v.right+O,y:v.bottom-w},{x:v.right-w,y:v.bottom+O},{x:v.left+w,y:v.bottom+O},{x:v.left-O,y:v.bottom-w}],N.pathListRel=[[M[0],{x:M[0].x,y:M[0].y-I},{x:M[1].x-I,y:M[1].y},M[1]]],M[1].x!==M[2].x&&N.pathListRel.push([M[1],M[2]]),N.pathListRel.push([M[2],{x:M[2].x+I,y:M[2].y},{x:M[3].x,y:M[3].y-I},M[3]]),M[3].y!==M[4].y&&N.pathListRel.push([M[3],M[4]]),N.pathListRel.push([M[4],{x:M[4].x,y:M[4].y+I},{x:M[5].x+I,y:M[5].y},M[5]]),M[5].x!==M[6].x&&N.pathListRel.push([M[5],M[6]]),N.pathListRel.push([M[6],{x:M[6].x-I,y:M[6].y},{x:M[7].x,y:M[7].y+I},M[7]]),M[7].y!==M[0].y&&N.pathListRel.push([M[7],M[0]]),N.pathListRel.push([]),O=E-w+N.strokeWidth/2,M=[{x:v.left-O,y:v.top-O},{x:v.right+O,y:v.bottom+O}],N.bBoxRel={left:M[0].x,top:M[0].y,right:M[1].x,bottom:M[1].y,width:M[1].x-M[0].x,height:M[1].y-M[0].y}):(O=N.strokeWidth/2,M=[{x:v.left-O,y:v.top-O},{x:v.right+O,y:v.bottom+O}],N.pathListRel=[[M[0],{x:M[1].x,y:M[0].y}],[{x:M[1].x,y:M[0].y},M[1]],[M[1],{x:M[0].x,y:M[1].y}],[]],M=[{x:v.left-N.strokeWidth,y:v.top-N.strokeWidth},{x:v.right+N.strokeWidth,y:v.bottom+N.strokeWidth}],N.bBoxRel={left:M[0].x,top:M[0].y,right:M[1].x,bottom:M[1].y,width:M[1].x-M[0].x,height:M[1].y-M[0].y});break;case"circle":(r={left:e.x[0]*(e.x[1]?t.width:1),top:e.y[0]*(e.y[1]?t.height:1),width:e.width[0]*(e.width[1]?t.width:1),height:e.height[0]*(e.height[1]?t.height:1)}).width||r.height||(r.width=r.height=10),r.width||(r.width=r.height),r.height||(r.height=r.width),r.right=r.left+r.width,r.bottom=r.top+r.height,s=r.left+r.width/2,u=r.top+r.height/2,f=N.strokeWidth/2,y=r.width/2,m=r.height/2,h=y*Math.SQRT2+f,p=m*Math.SQRT2+f,c=h*z,d=p*z,_=[{x:s-h,y:u},{x:s,y:u-p},{x:s+h,y:u},{x:s,y:u+p}],N.pathListRel=[[_[0],{x:_[0].x,y:_[0].y-d},{x:_[1].x-c,y:_[1].y},_[1]],[_[1],{x:_[1].x+c,y:_[1].y},{x:_[2].x,y:_[2].y-d},_[2]],[_[2],{x:_[2].x,y:_[2].y+d},{x:_[3].x+c,y:_[3].y},_[3]],[_[3],{x:_[3].x-c,y:_[3].y},{x:_[0].x,y:_[0].y+d},_[0]],[]],S=h-y+N.strokeWidth/2,g=p-m+N.strokeWidth/2,_=[{x:r.left-S,y:r.top-g},{x:r.right+S,y:r.bottom+g}],N.bBoxRel={left:_[0].x,top:_[0].y,right:_[1].x,bottom:_[1].y,width:_[1].x-_[0].x,height:_[1].y-_[0].y};break;case"polygon":e.points.forEach(function(e){var n=e.x[0]*(e.x[1]?t.width:1),o=e.y[0]*(e.y[1]?t.height:1);a?(n<a.left&&(a.left=n),n>a.right&&(a.right=n),o<a.top&&(a.top=o),o>a.bottom&&(a.bottom=o)):a={left:n,right:n,top:o,bottom:o},i?N.pathListRel.push([i,{x:n,y:o}]):N.pathListRel=[],i={x:n,y:o}}),N.pathListRel.push([]),o=N.strokeWidth/2,l=[{x:a.left-o,y:a.top-o},{x:a.right+o,y:a.bottom+o}],N.bBoxRel={left:l[0].x,top:l[0].y,right:l[1].x,bottom:l[1].y,width:l[1].x-l[0].x,height:l[1].y-l[0].y}}B.pathListRel=B.bBoxRel=!0}return(B.pathListRel||B.elementLeft||B.elementTop)&&(N.pathData=we(N.pathListRel,function(e){e.x+=t.left,e.y+=t.top})),We(e,T,"strokeWidth",n=N.strokeWidth)&&(e.path.style.strokeWidth=n+"px"),Me(n=N.pathData,T.pathData)&&(e.path.setPathData(n),T.pathData=n,B.pathData=!0),e.dash&&(!B.pathData&&(!B.strokeWidth||e.dashLen&&e.dashGap)||(N.dashLen=e.dashLen||2*N.strokeWidth,N.dashGap=e.dashGap||N.strokeWidth),B.dash=We(e,T,"dashLen",N.dashLen)||B.dash,B.dash=We(e,T,"dashGap",N.dashGap)||B.dash,B.dash&&(e.path.style.strokeDasharray=T.dashLen+","+T.dashGap)),C=N.viewBoxBBox,L=T.viewBoxBBox,A=e.svg.viewBox.baseVal,V=e.svg.style,C.x=N.bBoxRel.left+t.left,C.y=N.bBoxRel.top+t.top,C.width=N.bBoxRel.width,C.height=N.bBoxRel.height,["x","y","width","height"].forEach(function(t){(n=C[t])!==L[t]&&(A[t]=L[t]=n,V[P[t]]=n+("x"===t||"y"===t?e.bodyOffset[t]:0)+"px")}),B.strokeWidth||B.pathListRel||B.bBoxRel}},mouseHoverAnchor:{type:"anchor",argOptions:[{optionName:"element",type:ye},{optionName:"showEffectName",type:"string"}],style:{backgroundImage:"url('data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cG9seWdvbiBwb2ludHM9IjI0LDAgMCw4IDgsMTEgMCwxOSA1LDI0IDEzLDE2IDE2LDI0IiBmaWxsPSJjb3JhbCIvPjwvc3ZnPg==')",backgroundSize:"",backgroundRepeat:"no-repeat",backgroundColor:"#f8f881",cursor:"default"},hoverStyle:{backgroundImage:"none",backgroundColor:"#fadf8f"},padding:{top:1,right:15,bottom:1,left:2},minHeight:15,backgroundPosition:{right:2,top:2},backgroundSize:{width:12,height:12},dirKeys:[["top","Top"],["right","Right"],["bottom","Bottom"],["left","Left"]],init:function(e,a){var i,o,l,r,s,u,h,p,c,d,f,y=n.mouseHoverAnchor,m={};if(e.element=n.pointAnchor.checkElement(a.element),p=e.element,!((d=p.ownerDocument)&&(c=d.defaultView)&&c.HTMLElement&&p instanceof c.HTMLElement))throw new Error("`element` must be HTML element");return y.style.backgroundSize=y.backgroundSize.width+"px "+y.backgroundSize.height+"px",["style","hoverStyle"].forEach(function(t){var n=y[t];e[t]=Object.keys(n).reduce(function(e,t){return e[t]=n[t],e},{})}),"inline"===(i=e.element.ownerDocument.defaultView.getComputedStyle(e.element,"")).display?e.style.display="inline-block":"none"===i.display&&(e.style.display="block"),n.mouseHoverAnchor.dirKeys.forEach(function(t){var n=t[0],a="padding"+t[1];parseFloat(i[a])<y.padding[n]&&(e.style[a]=y.padding[n]+"px")}),e.style.display&&(r=e.element.style.display,e.element.style.display=e.style.display),n.mouseHoverAnchor.dirKeys.forEach(function(t){var n="padding"+t[1];e.style[n]&&(m[n]=e.element.style[n],e.element.style[n]=e.style[n])}),(l=e.element.getBoundingClientRect()).height<y.minHeight&&(Z?(f=y.minHeight,"content-box"===i.boxSizing?f-=parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth)+parseFloat(i.paddingTop)+parseFloat(i.paddingBottom):"padding-box"===i.boxSizing&&(f-=parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth)),e.style.height=f+"px"):e.style.height=parseFloat(i.height)+(y.minHeight-l.height)+"px"),e.style.backgroundPosition=Q?l.width-y.backgroundSize.width-y.backgroundPosition.right+"px "+y.backgroundPosition.top+"px":"right "+y.backgroundPosition.right+"px top "+y.backgroundPosition.top+"px",e.style.display&&(e.element.style.display=r),n.mouseHoverAnchor.dirKeys.forEach(function(t){var n="padding"+t[1];e.style[n]&&(e.element.style[n]=m[n])}),["style","hoverStyle"].forEach(function(t){var n=e[t],i=a[t];$(i)&&Object.keys(i).forEach(function(e){"string"==typeof i[e]||ee(i[e])?n[e]=i[e]:null==i[e]&&delete n[e]})}),"function"==typeof a.onSwitch&&(h=a.onSwitch),a.showEffectName&&t[a.showEffectName]&&(e.showEffectName=s=a.showEffectName),u=a.animOptions,e.elmStyle=o=e.element.style,e.mouseenter=function(t){e.hoverStyleSave=y.getStyles(o,Object.keys(e.hoverStyle)),y.setStyles(o,e.hoverStyle),e.boundTargets.forEach(function(e){je(e.props,!0,s,u)}),h&&h(t)},e.mouseleave=function(t){y.setStyles(o,e.hoverStyleSave),e.boundTargets.forEach(function(e){je(e.props,!1,s,u)}),h&&h(t)},!0},bind:function(e,t){var a,i,o,l,r;return t.props.svg?n.mouseHoverAnchor.llShow(t.props,!1,e.showEffectName):Le(function(){n.mouseHoverAnchor.llShow(t.props,!1,e.showEffectName)}),e.enabled||(e.styleSave=n.mouseHoverAnchor.getStyles(e.elmStyle,Object.keys(e.style)),n.mouseHoverAnchor.setStyles(e.elmStyle,e.style),e.removeEventListener=(a=e.element,i=e.mouseenter,o=e.mouseleave,"onmouseenter"in a&&"onmouseleave"in a?(a.addEventListener("mouseenter",i,!1),a.addEventListener("mouseleave",o,!1),function(){a.removeEventListener("mouseenter",i,!1),a.removeEventListener("mouseleave",o,!1)}):(console.warn("mouseenter and mouseleave events polyfill is enabled."),l=function(e){e.relatedTarget&&(e.relatedTarget===this||this.compareDocumentPosition(e.relatedTarget)&Node.DOCUMENT_POSITION_CONTAINED_BY)||i.apply(this,arguments)},a.addEventListener("mouseover",l),r=function(e){e.relatedTarget&&(e.relatedTarget===this||this.compareDocumentPosition(e.relatedTarget)&Node.DOCUMENT_POSITION_CONTAINED_BY)||o.apply(this,arguments)},a.addEventListener("mouseout",r),function(){a.removeEventListener("mouseover",l,!1),a.removeEventListener("mouseout",r,!1)})),e.enabled=!0),!0},unbind:function(e,t){e.enabled&&e.boundTargets.length<=1&&(e.removeEventListener(),n.mouseHoverAnchor.setStyles(e.elmStyle,e.styleSave),e.enabled=!1),n.mouseHoverAnchor.llShow(t.props,!0,e.showEffectName)},removeOption:function(e,t){n.pointAnchor.removeOption(e,t)},remove:function(e){e.boundTargets.length&&(console.error("LeaderLineAttachment was not unbound by remove"),e.boundTargets.forEach(function(t){n.mouseHoverAnchor.unbind(e,t)}))},getBBoxNest:function(e,t){return ge(e.element,t.baseWindow)},llShow:function(e,n,a){t[a||e.curStats.show_effect].stop(e,!0,n),e.aplStats.show_on=n},getStyles:function(e,t){return t.reduce(function(t,n){return t[n]=e[n],t},{})},setStyles:function(e,t){Object.keys(t).forEach(function(n){e[n]=t[n]})}},captionLabel:{type:"label",argOptions:[{optionName:"text",type:"string"}],stats:{color:{},x:{},y:{}},textStyleProps:["fontFamily","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","kerning","letterSpacing","wordSpacing","textDecoration"],init:function(e,t){return"string"==typeof t.text&&(e.text=t.text.trim()),!!e.text&&("string"==typeof t.color&&(e.color=t.color.trim()),e.outlineColor="string"==typeof t.outlineColor?t.outlineColor.trim():"#fff",Array.isArray(t.offset)&&ee(t.offset[0])&&ee(t.offset[1])&&(e.offset={x:t.offset[0],y:t.offset[1]}),ee(t.lineOffset)&&(e.lineOffset=t.lineOffset),n.captionLabel.textStyleProps.forEach(function(n){null!=t[n]&&(e[n]=t[n])}),e.updateColor=function(t){n.captionLabel.updateColor(e,t)},e.updateSocketXY=function(t){var n,a,i,o,l=e.curStats,r=e.aplStats,s=t.curStats,u=s.position_socketXYSE[e.socketIndex];null!=u.x&&(e.offset?(l.x=u.x+e.offset.x,l.y=u.y+e.offset.y):(n=e.height/2,a=Math.max(s.attach_plugSideLenSE[e.socketIndex]||0,s.line_strokeWidth/2),i=s.position_socketXYSE[e.socketIndex?0:1],u.socketId===S||u.socketId===y?(l.x=u.socketId===S?u.x-n-e.width:u.x+n,l.y=i.y<u.y?u.y+a+n:u.y-a-n-e.height):(l.x=i.x<u.x?u.x+a+n:u.x-a-n-e.width,l.y=u.socketId===f?u.y-n-e.height:u.y+n)),We(e,r,"x",o=l.x)&&(e.elmPosition.x.baseVal.getItem(0).value=o),We(e,r,"y",o=l.y)&&(e.elmPosition.y.baseVal.getItem(0).value=o+e.height))},e.updatePath=function(t){var a,i,o=e.curStats,l=e.aplStats,r=t.pathList.animVal||t.pathList.baseVal;r&&(a=n.captionLabel.getMidPoint(r,e.lineOffset),o.x=a.x-e.width/2,o.y=a.y-e.height/2,We(e,l,"x",i=o.x)&&(e.elmPosition.x.baseVal.getItem(0).value=i),We(e,l,"y",i=o.y)&&(e.elmPosition.y.baseVal.getItem(0).value=i+e.height))},e.updateShow=function(t){n.captionLabel.updateShow(e,t)},Q&&(e.adjustEdge=function(t,a){var i=e.curStats;null!=i.x&&n.captionLabel.adjustEdge(a,{x:i.x,y:i.y,width:e.width,height:e.height},e.strokeWidth/2)}),!0)},updateColor:function(e,t){var n,a=e.curStats,i=e.aplStats,o=t.curStats;a.color=n=e.color||o.line_color,We(e,i,"color",n)&&(e.styleFill.fill=n)},updateShow:function(e,t){var n=!0===t.isShown;n!==e.isShown&&(e.styleShow.visibility=n?"":"hidden",e.isShown=n)},adjustEdge:function(e,t,n){var a={x1:t.x-n,y1:t.y-n,x2:t.x+t.width+n,y2:t.y+t.height+n};a.x1<e.x1&&(e.x1=a.x1),a.y1<e.y1&&(e.y1=a.y1),a.x2>e.x2&&(e.x2=a.x2),a.y2>e.y2&&(e.y2=a.y2)},newText:function(e,t,n,a,i){var o,l,r,u,h,p;return(o=t.createElementNS(U,"text")).textContent=e,[o.x,o.y].forEach(function(e){var t=n.createSVGLength();t.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX,0),e.baseVal.initialize(t)}),"boolean"!=typeof s&&(s="paintOrder"in o.style),i&&!s?(r=t.createElementNS(U,"defs"),o.id=a,r.appendChild(o),(h=(l=t.createElementNS(U,"g")).appendChild(t.createElementNS(U,"use"))).href.baseVal="#"+a,(u=l.appendChild(t.createElementNS(U,"use"))).href.baseVal="#"+a,(p=h.style).strokeLinejoin="round",{elmPosition:o,styleText:o.style,styleFill:u.style,styleStroke:p,styleShow:l.style,elmsAppend:[r,l]}):(p=o.style,i&&(p.strokeLinejoin="round",p.paintOrder="stroke"),{elmPosition:o,styleText:p,styleFill:p,styleStroke:i?p:null,styleShow:p,elmsAppend:[o]})},getMidPoint:function(e,t){var n,a,i,o=Oe(e),l=o.segsLen,r=o.lenAll,s=-1;if((n=r/2+(t||0))<=0)return 2===(a=e[0]).length?ve(a[0],a[1],0):xe(a[0],a[1],a[2],a[3],0);if(n>=r)return 2===(a=e[e.length-1]).length?ve(a[0],a[1],1):xe(a[0],a[1],a[2],a[3],1);for(i=[];n>l[++s];)i.push(e[s]),n-=l[s];return 2===(a=e[s]).length?ve(a[0],a[1],n/l[s]):xe(a[0],a[1],a[2],a[3],ke(a[0],a[1],a[2],a[3],n))},initSvg:function(e,t){var a,i,o=n.captionLabel.newText(e.text,t.baseWindow.document,t.svg,d+"-captionLabel-"+e._id,e.outlineColor);["elmPosition","styleFill","styleShow","elmsAppend"].forEach(function(t){e[t]=o[t]}),e.isShown=!1,e.styleShow.visibility="hidden",n.captionLabel.textStyleProps.forEach(function(t){null!=e[t]&&(o.styleText[t]=e[t])}),o.elmsAppend.forEach(function(e){t.svg.appendChild(e)}),a=o.elmPosition.getBBox(),e.width=a.width,e.height=a.height,e.outlineColor&&(i=(i=a.height/9)>10?10:i<2?2:i,o.styleStroke.strokeWidth=i+"px",o.styleStroke.stroke=e.outlineColor),e.strokeWidth=i||0,Te(e.aplStats,n.captionLabel.stats),e.updateColor(t),e.refSocketXY?e.updateSocketXY(t):e.updatePath(t),Q&&De(t,{}),e.updateShow(t)},bind:function(e,t){var a=t.props;return e.color||Ie(a,"cur_line_color",e.updateColor),(e.refSocketXY="startLabel"===t.optionName||"endLabel"===t.optionName)?(e.socketIndex="startLabel"===t.optionName?0:1,Ie(a,"apl_position",e.updateSocketXY),e.offset||(Ie(a,"cur_attach_plugSideLenSE",e.updateSocketXY),Ie(a,"cur_line_strokeWidth",e.updateSocketXY))):Ie(a,"apl_path",e.updatePath),Ie(a,"svgShow",e.updateShow),Q&&Ie(a,"new_edge4viewBox",e.adjustEdge),n.captionLabel.initSvg(e,a),!0},unbind:function(e,t){var a=t.props;e.elmsAppend&&(e.elmsAppend.forEach(function(e){a.svg.removeChild(e)}),e.elmPosition=e.styleFill=e.styleShow=e.elmsAppend=null),Te(e.curStats,n.captionLabel.stats),Te(e.aplStats,n.captionLabel.stats),e.color||Ce(a,"cur_line_color",e.updateColor),e.refSocketXY?(Ce(a,"apl_position",e.updateSocketXY),e.offset||(Ce(a,"cur_attach_plugSideLenSE",e.updateSocketXY),Ce(a,"cur_line_strokeWidth",e.updateSocketXY))):Ce(a,"apl_path",e.updatePath),Ce(a,"svgShow",e.updateShow),Q&&(Ce(a,"new_edge4viewBox",e.adjustEdge),De(a,{}))},removeOption:function(e,t){var n=t.props,a={};a[t.optionName]="",Ze(n,a)},remove:function(e){e.boundTargets.length&&(console.error("LeaderLineAttachment was not unbound by remove"),e.boundTargets.forEach(function(t){n.captionLabel.unbind(e,t)}))}},pathLabel:{type:"label",argOptions:[{optionName:"text",type:"string"}],stats:{color:{},startOffset:{},pathData:{}},init:function(e,t){return"string"==typeof t.text&&(e.text=t.text.trim()),!!e.text&&("string"==typeof t.color&&(e.color=t.color.trim()),e.outlineColor="string"==typeof t.outlineColor?t.outlineColor.trim():"#fff",ee(t.lineOffset)&&(e.lineOffset=t.lineOffset),n.captionLabel.textStyleProps.forEach(function(n){null!=t[n]&&(e[n]=t[n])}),e.updateColor=function(t){n.captionLabel.updateColor(e,t)},e.updatePath=function(t){var a,i=e.curStats,o=e.aplStats,l=t.curStats,r=t.pathList.animVal||t.pathList.baseVal;r&&(i.pathData=a=n.pathLabel.getOffsetPathData(r,l.line_strokeWidth/2+e.strokeWidth/2+e.height/4,1.25*e.height),Me(a,o.pathData)&&(e.elmPath.setPathData(a),o.pathData=a,e.bBox=e.elmPosition.getBBox(),e.updateStartOffset(t)))},e.updateStartOffset=function(t){var n,a,i,o,l=e.curStats,r=e.aplStats,s=t.curStats;l.pathData&&((2!==e.semIndex||e.lineOffset)&&(n=l.pathData.reduce(function(e,t){var n,a=t.values;switch(t.type){case"M":o={x:a[0],y:a[1]};break;case"L":n={x:a[0],y:a[1]},o&&(e+=_e(o,n)),o=n;break;case"C":n={x:a[4],y:a[5]},o&&(e+=be(o,{x:a[0],y:a[1]},{x:a[2],y:a[3]},n)),o=n}return e},0),i=0===e.semIndex?0:1===e.semIndex?n:n/2,2!==e.semIndex&&(a=Math.max(s.attach_plugBackLenSE[e.semIndex]||0,s.line_strokeWidth/2)+e.strokeWidth/2+e.height/4,i=(i+=0===e.semIndex?a:-a)<0?0:i>n?n:i),e.lineOffset&&(i=(i+=e.lineOffset)<0?0:i>n?n:i),l.startOffset=i,We(e,r,"startOffset",i)&&(e.elmOffset.startOffset.baseVal.value=i)))},e.updateShow=function(t){n.captionLabel.updateShow(e,t)},Q&&(e.adjustEdge=function(t,a){e.bBox&&n.captionLabel.adjustEdge(a,e.bBox,e.strokeWidth/2)}),!0)},getOffsetPathData:function(e,t,n){var a,i,o=3,l=[];function r(e,t){return Math.abs(e.x-t.x)<o&&Math.abs(e.y-t.y)<o}return e.forEach(function(e){var n,i,o,s,u,h,p,c,d,f,y,m,S,g,_,v,E,x,b,k,w;2===e.length?(x=e[0],b=e[1],k=t,w=Math.atan2(x.y-b.y,b.x-x.x)+.5*Math.PI,n=[{x:x.x+Math.cos(w)*k,y:x.y+Math.sin(w)*k*-1},{x:b.x+Math.cos(w)*k,y:b.y+Math.sin(w)*k*-1}],a?(o=a.points,(s=Math.atan2(o[1].y-o[0].y,o[0].x-o[1].x)-Math.atan2(e[0].y-e[1].y,e[1].x-e[0].x))>=0&&s<=Math.PI?i={type:"line",points:n,inside:!0}:(h=Ee(o[0],o[1],t),u=Ee(n[1],n[0],t),c=o[0],f=u,y=n[1],m=(d=h).x-c.x,S=d.y-c.y,g=y.x-f.x,_=y.y-f.y,v=(-S*(c.x-f.x)+m*(c.y-f.y))/(-g*S+m*_),E=(g*(c.y-f.y)-_*(c.x-f.x))/(-g*S+m*_),(p=v>=0&&v<=1&&E>=0&&E<=1?{x:c.x+E*m,y:c.y+E*S}:null)?(o[1]=p,i={type:"line",points:[p,n[1]]}):(o[1]=r(u,h)?u:h,i={type:"line",points:[u,n[1]]}),a.len=_e(o[0],o[1]))):i={type:"line",points:n},i.len=_e(i.points[0],i.points[1]),l.push(a=i)):(l.push({type:"cubic",points:function(e,t,n,a,i,o){for(var l,r,s=be(e,t,n,a)/o,u=1/(i>o?s*(i/o):s),h=[],p=0;r=(90-(l=xe(e,t,n,a,p)).angle)*(Math.PI/180),h.push({x:l.x+Math.cos(r)*i,y:l.y+Math.sin(r)*i*-1}),!(p>=1);)(p+=u)>1&&(p=1);return h}(e[0],e[1],e[2],e[3],t,16)}),a=null)}),a=null,l.forEach(function(e){var i;"line"===e.type?(e.inside&&(a.len>t?((i=a.points)[1]=Ee(i[0],i[1],-t),a.len=_e(i[0],i[1])):(a.points=null,a.len=0),e.len>t+n?((i=e.points)[0]=Ee(i[1],i[0],-(t+n)),e.len=_e(i[0],i[1])):(e.points=null,e.len=0)),a=e):a=null}),l.reduce(function(e,t){var n=t.points;return n&&(i&&r(n[0],i)||e.push({type:"M",values:[n[0].x,n[0].y]}),"line"===t.type?e.push({type:"L",values:[n[1].x,n[1].y]}):(n.shift(),n.forEach(function(t){e.push({type:"L",values:[t.x,t.y]})})),i=n[n.length-1]),e},[])},newText:function(e,t,n,a){var i,o,l,r,u,h,p,c,d,f;return(r=(l=t.createElementNS(U,"defs")).appendChild(t.createElementNS(U,"path"))).id=i=n+"-path",(h=(u=t.createElementNS(U,"text")).appendChild(t.createElementNS(U,"textPath"))).href.baseVal="#"+i,h.startOffset.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX,0),h.textContent=e,"boolean"!=typeof s&&(s="paintOrder"in u.style),a&&!s?(u.id=o=n+"-text",l.appendChild(u),(d=(p=t.createElementNS(U,"g")).appendChild(t.createElementNS(U,"use"))).href.baseVal="#"+o,(c=p.appendChild(t.createElementNS(U,"use"))).href.baseVal="#"+o,(f=d.style).strokeLinejoin="round",{elmPosition:u,elmPath:r,elmOffset:h,styleText:u.style,styleFill:c.style,styleStroke:f,styleShow:p.style,elmsAppend:[l,p]}):(f=u.style,a&&(f.strokeLinejoin="round",f.paintOrder="stroke"),{elmPosition:u,elmPath:r,elmOffset:h,styleText:f,styleFill:f,styleStroke:a?f:null,styleShow:f,elmsAppend:[l,u]})},initSvg:function(e,t){var a,i,o=n.pathLabel.newText(e.text,t.baseWindow.document,d+"-pathLabel-"+e._id,e.outlineColor);["elmPosition","elmPath","elmOffset","styleFill","styleShow","elmsAppend"].forEach(function(t){e[t]=o[t]}),e.isShown=!1,e.styleShow.visibility="hidden",n.captionLabel.textStyleProps.forEach(function(t){null!=e[t]&&(o.styleText[t]=e[t])}),o.elmsAppend.forEach(function(e){t.svg.appendChild(e)}),o.elmPath.setPathData([{type:"M",values:[0,100]},{type:"h",values:[100]}]),a=o.elmPosition.getBBox(),o.styleText.textAnchor=["start","end","middle"][e.semIndex],2!==e.semIndex||e.lineOffset||o.elmOffset.startOffset.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PERCENTAGE,50),e.height=a.height,e.outlineColor&&(i=(i=a.height/9)>10?10:i<2?2:i,o.styleStroke.strokeWidth=i+"px",o.styleStroke.stroke=e.outlineColor),e.strokeWidth=i||0,Te(e.aplStats,n.pathLabel.stats),e.updateColor(t),e.updatePath(t),e.updateStartOffset(t),Q&&De(t,{}),e.updateShow(t)},bind:function(e,t){var a=t.props;return e.color||Ie(a,"cur_line_color",e.updateColor),Ie(a,"cur_line_strokeWidth",e.updatePath),Ie(a,"apl_path",e.updatePath),e.semIndex="startLabel"===t.optionName?0:"endLabel"===t.optionName?1:2,(2!==e.semIndex||e.lineOffset)&&Ie(a,"cur_attach_plugBackLenSE",e.updateStartOffset),Ie(a,"svgShow",e.updateShow),Q&&Ie(a,"new_edge4viewBox",e.adjustEdge),n.pathLabel.initSvg(e,a),!0},unbind:function(e,t){var a=t.props;e.elmsAppend&&(e.elmsAppend.forEach(function(e){a.svg.removeChild(e)}),e.elmPosition=e.elmPath=e.elmOffset=e.styleFill=e.styleShow=e.elmsAppend=null),Te(e.curStats,n.pathLabel.stats),Te(e.aplStats,n.pathLabel.stats),e.color||Ce(a,"cur_line_color",e.updateColor),Ce(a,"cur_line_strokeWidth",e.updatePath),Ce(a,"apl_path",e.updatePath),(2!==e.semIndex||e.lineOffset)&&Ce(a,"cur_attach_plugBackLenSE",e.updateStartOffset),Ce(a,"svgShow",e.updateShow),Q&&(Ce(a,"new_edge4viewBox",e.adjustEdge),De(a,{}))},removeOption:function(e,t){var n=t.props,a={};a[t.optionName]="",Ze(n,a)},remove:function(e){e.boundTargets.length&&(console.error("LeaderLineAttachment was not unbound by remove"),e.boundTargets.forEach(function(t){n.pathLabel.unbind(e,t)}))}}}, Object.keys(n).forEach(function(e){Ye[e]=function(){return new a(n[e],Array.prototype.slice.call(arguments))}}), Ye.positionByWindowResize=!0, window.addEventListener("resize",ae.add(function(){Ye.positionByWindowResize&&Object.keys(se).forEach(function(e){De(se[e],{position:!0})})}),!1), Ye}();

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var performanceNow = createCommonjsModule(function (module) {
// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(commonjsGlobal);


});

var root = typeof window === 'undefined' ? commonjsGlobal : window;
var vendors = ['moz', 'webkit'];
var suffix = 'AnimationFrame';
var raf = root['request' + suffix];
var caf = root['cancel' + suffix] || root['cancelRequest' + suffix];

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix];
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix];
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60;

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = performanceNow()
        , next = Math.max(0, frameDuration - (_now - last));
      last = next + _now;
      setTimeout(function() {
        var cp = queue.slice(0);
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0;
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last);
            } catch(e) {
              setTimeout(function() { throw e }, 0);
            }
          }
        }
      }, Math.round(next));
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    });
    return id
  };

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true;
      }
    }
  };
}

var raf_1 = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
};
var cancel = function() {
  caf.apply(root, arguments);
};
var polyfill = function(object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf;
  object.cancelAnimationFrame = caf;
};

raf_1.cancel = cancel;
raf_1.polyfill = polyfill;

var svgPath = createCommonjsModule(function (module, exports) {
/**
 * SvgPath
 * Chainable SVG path string generator with some sugar added
 * Supports Node, AMD and browser environments (EcmaScript 5+ or shims)
 * No dependencies
 * @version 0.2.1
 * @author Igor Zalutsky
 * @license MIT
 */
(function (root, factory) {
    if (typeof undefined === 'function' && undefined.amd) {
        undefined([], factory);
    } else {
        module.exports = factory();
    }
}(commonjsGlobal, function () {
    "use strict";

    var absCommands = ['M', 'Z', 'L', 'H', 'V', 'C', 'S', 'Q', 'T', 'A'];
    var relCommands = absCommands.map(function(letter){
        return letter.toLowerCase();
    });
    var commands = absCommands.concat(relCommands);

    /**
     * Creates a path builder. Can be invoked without new.
     * @returns {SvgPath}
     * @constructor
     */
    function SvgPath(){
        //TODO is this check robust enough?
        if (this instanceof SvgPath){
            this.relative = false;
            this.commands = [];
        } else {
            return new SvgPath();
        }
    }

    /**
     * Turns relative mode on (lowercase commands will be used)
     * @returns {SvgPath}
     */
    SvgPath.prototype.rel = function(){
        this.relative = true;
        return this;
    };

    /**
     * Turns relative mode off (uppercase commands will be used)
     * @returns {SvgPath}
     */
    SvgPath.prototype.abs = function(){
        this.relative = false;
        return this;
    };

    /**
     * Closes subpath (Z command)
     * @returns {SvgPath}
     */
    SvgPath.prototype.close = function(){
        return this.Z();
    };

    /**
     * Moves pen (M or m command)
     * Also accepts point, i.e. { x: 10, y: 20 }
     * @param x
     * @param y
     * @returns {SvgPath}
     */
    SvgPath.prototype.to = function(x, y){
        var point = (typeof x === 'object') ? x : { x: x, y: y };
        return this._cmd('M')(point.x, point.y);
    };

    /**
     * Draws line (L or l command)
     * Also accepts point, i.e. { x: 10, y: 20 }
     * @param x
     * @param y
     * @returns {SvgPath}
     */
    SvgPath.prototype.line = function(x, y){
        var point = (typeof x === 'object') ? x : { x: x, y: y };
        return this._cmd('L')(point.x, point.y);
    };

    /**
     * Draws horizontal line (H or h command)
     * @param x
     * @returns {SvgPath}
     */
    SvgPath.prototype.hline = function(x){
        return this._cmd('H')(x);
    };

    /**
     * Draws vertical line (V or v command)
     * @param y
     * @returns {SvgPath}
     */
    SvgPath.prototype.vline = function(y){
        return this._cmd('V')(y);
    };

    /**
     * Draws cubic bezier curve (C or c command)
     * Also accepts 2 or 3 points, i.e. { x: 10, y: 20 }
     * If last point is omitted, acts like shortcut (S or s command)
     * @param x1
     * @param y1
     * @param x2
     * @param y2
     * @param x
     * @param y
     * @returns {SvgPath}
     */
    SvgPath.prototype.bezier3 = function(x1, y1, x2, y2, x, y){
        var usePoints = (typeof x1 === 'object');
        var shortcut = usePoints ? arguments.length < 3 : arguments.length < 6;
        var p1 = { x: x1, y: y1 };
        var p2 = { x: x2, y: y2 };
        var end = shortcut ? p2 : { x: x, y: y };
        if (usePoints){
            p1 = x1;
            p2 = y1;
            end = shortcut ? p2 : x2;
        }
        if (!shortcut) {
            return this._cmd('C')(p1.x, p1.y, p2.x, p2.y, end.x, end.y);
        } else {
            return this._cmd('S')(p1.x, p1.y, end.x, end.y);
        }
    };

    /**
     * Draws quadratic bezier curve (Q or q command)
     * Also accepts 1 or 2 points, i.e. { x: 10, y: 20 }
     * If last point is omitted, acts like shortcut (T or t command)
     * @param x1
     * @param y1
     * @param x
     * @param y
     * @returns {SvgPath}
     */
    SvgPath.prototype.bezier2 = function(x1, y1, x, y){
        var usePoints = (typeof x1 === 'object');
        var shortcut = usePoints ? arguments.length < 2 : arguments.length < 4;
        var p1 = { x: x1, y: y1 };
        var end = shortcut ? p1 : { x: x, y: y };
        if (usePoints){
            p1 = x1;
            end = shortcut ? p1 : y1;
        }
        if (!shortcut) {
            return this._cmd('Q')(p1.x, p1.y, end.x, end.y);
        } else {
            return this._cmd('T')(end.x, end.y);
        }
    };

    /**
     * Draws an arc (A or a command)
     * Also accepts end point, i.e. { x: 10, y: 20 }
     * @param rx
     * @param ry
     * @param rotation
     * @param large
     * @param sweep
     * @param x
     * @param y
     * @returns {*}
     */
    SvgPath.prototype.arc = function(rx, ry, rotation, large, sweep, x, y){
        var point = (typeof x === 'object') ? x : { x: x, y: y };
        return this._cmd('A')(rx, ry, rotation, large, sweep, point.x, point.y);
    };

    /**
     * String representation of command chain
     * @returns {string}
     */
    SvgPath.prototype.str = function(){
        return this.commands.map(function(command){
            return command.toString();
        }).join(' ');
    };

    //setting letter commands
    commands.forEach(function(commandName){
        SvgPath.prototype[commandName] = function(){
            var args = Array.prototype.slice.call(arguments, 0);
            args.unshift(commandName);
            var command = new Command(args);
            this.commands.push(command);
            return this;
        };
    });

    /**
     * Gets either absolute (uppercase) or relative (lowercase) version of command depending on mode
     * @param letter
     * @returns {function}
     * @private
     */
    SvgPath.prototype._cmd = function(letter){
        var actualName = this.relative ?
            letter.toLowerCase() : letter.toUpperCase();
        //TODO maybe direct invokation is better than binding?
        return this[actualName].bind(this);
    };

    /**
     * Represents a single command
     * @param name
     * @constructor
     */
    function Command(name){
        //TODO more robust array detection
        var args = name.length > 0 && name.slice ?
            name : Array.prototype.slice.call(arguments, 0);
        this.name = args[0];
        this.args = args.slice(1);
    }

    /**
     * String representation of a command
     * @returns {string}
     */
    Command.prototype.toString = function(){
        return this.name + ' ' + this.args.join(' ');
    };

    return SvgPath;

}));
});

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();



























var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

function clean(name) {
  return name ? name.replace(/^mark\./, '') : null;
}

var flow$1 = function () {
  function flow(name) {
    classCallCheck(this, flow);

    name = clean(name);
    this.flow = [name];
  }

  createClass(flow, [{
    key: 'next',
    value: function next(name) {
      name = clean(name);
      this.flow.push(name);
    }
  }, {
    key: 'getNext',
    value: function getNext(name) {
      name = clean(name);

      var idx = this.flow.indexOf(name);

      if (idx === -1) throw new Error('Could not find \'' + name + '\' in this flow');

      if (idx === this.flow.length) return null;
      return this.flow[idx + 1];
    }
  }]);
  return flow;
}();

'use strict';

var COLOR = '#fff';

var elmNames = ['text', 'textContainer', 'coachTop', 'coachLeft', 'coachRight', 'coachBottom', 'glow', 'actionButton', 'svg', 'path'];

function clear() {
  hideAll();

  elmNames.forEach(function (name) {
    var node = cache(name);
    if (node instanceof Node) {
      node.remove();
      cache.remove(name);
    }
  });

  var l = cache.get('leaderLine');
  if (l) {
    l.remove();
    cache.remove('leaderLine');
  }
}

function redrawAll() {
  raf_1(function () {
    Object.keys(cache.all()).forEach(function (key) {
      var item = cache(key);
      if (!(item instanceof Node)) {
        if (item.showing) draw(key);
      }
    });
  });
}

function hideAll() {
  Object.values(cache.all()).forEach(function (val) {
    if (val.showing) val.showing = false;
  });
}

function draw(name) {
  if (name.indexOf('mark.') !== 0) name = 'mark.' + name;

  var mark = cache(name);
  if (!mark) throw new Error('Coachmark with name \'' + name + '\' not found');
  mark.showing = true;
  mark.name = name;

  var coached = coach(mark);
  var text = addText(mark.text);

  // arrow(coached, text);
  leaderLine(text, coached);
}

function coach(mark) {
  if (!mark) throw new Error('Coachmark with name \'' + name + '\' not found');

  var elm = cache.default('elm', function () {
    return document.querySelector(mark.target);
  });

  // if (elm.className.indexOf('draggable-source') === -1) elm.className += ' draggable-source';

  // elm.style.position = 'absolute';
  elm.style['z-index'] = 102;

  var borderRadius = window.getComputedStyle(elm).getPropertyValue('border-radius');
  // borderRadius = parseInt(borderRadius, 10);

  var top = elm.offsetTop;
  var left = elm.offsetLeft;
  var width = elm.offsetWidth;
  var height = elm.offsetHeight;
  var right = left + width;
  var bottom = top + height;

  var coachTop = cache.default('coachTop', function () {
    return document.createElement('div');
  });
  coachTop.className = 'coachmark-top';
  var coachLeft = cache.default('coachLeft', function () {
    return document.createElement('div');
  });
  coachLeft.className = 'coachmark-left';
  var coachRight = cache.default('coachRight', function () {
    return document.createElement('div');
  });
  coachRight.className = 'coachmark-right';
  var coachBottom = cache.default('coachBottom', function () {
    return document.createElement('div');
  });
  coachBottom.className = 'coachmark-bottom';

  coachTop.style.height = top + 'px';
  coachLeft.style.top = top + 'px';
  coachRight.style.top = coachLeft.style.top;
  coachLeft.style.height = height + 'px';
  coachRight.style.height = coachLeft.style.height;
  coachLeft.style.width = left + 'px';
  coachRight.style.left = right + 'px';
  coachBottom.style.top = bottom + 'px';

  var glow = cache.default('glow', function () {
    return document.createElement('div');
  });

  glow.className = 'coachmark-glow';
  glow.style.top = top + 'px';
  glow.style.left = left + 'px';
  glow.style.width = width + 'px';
  glow.style.height = height + 'px';
  glow.style['border-radius'] = borderRadius;
  glow.style['box-shadow'] = '0 0 ' + 20 + 'px ' + 10 + 'px #fff'; //  TODO: this style should probably be dynamic

  var actionBtn = createActionButton(mark);

  [coachTop, coachLeft, coachRight, coachBottom, glow, actionBtn].forEach(function (c) {
    if (!c.parentNode) {
      document.body.appendChild(c);
    }
  });

  // TODO: Make this a setting, to close on click anywhere
  // setTimeout(() => {
  //   document.addEventListener('click', clear, { once: true });
  // });

  return elm;
}

// TODO
function flow(name) {
  var mark = cache('mark.' + name);

  if (!mark) throw new Error('Could not find coachmark named \'' + name + '\'. Make sure you create it before building a flow with it');

  var f = new flow$1(name);
  mark.flow = f;

  return f;
}

function addText(textStr) {
  var text = cache.default('text', function () {
    return document.createElement('div');
  });

  var elm = cache('elm');
  if (!elm) throw new Error('Could not get element from cache');

  var _splitScreen = splitScreen(),
      _splitScreen2 = slicedToArray(_splitScreen, 2),
      box1 = _splitScreen2[0],
      box2 = _splitScreen2[1];

  // See if the element is in box1 or box2;


  var elmMiddle = middleOf(elm);
  elmMiddle = { x: Math.floor(elmMiddle[0]), y: Math.floor(elmMiddle[1]) };

  var box = void 0;
  if (rectContains(elmMiddle, box1)) {
    box = box2;
  } else {
    box = box1;
  }

  var textContainer = cache.default('textContainer', function () {
    return document.createElement('div');
  });
  textContainer.className = 'coachmark-text-container';
  textContainer.style.top = box.top;
  textContainer.style.left = box.left;
  textContainer.style.width = box.width;
  textContainer.style.height = box.height;

  textContainer.appendChild(text);
  document.body.appendChild(textContainer);

  text.className = 'coachmark-text draggable-source';
  // const ref = (text.innerText || text.textContent);
  text.textContent = textStr;

  return text;
}

function leaderLine(from, to) {
  var line = cache.get('leaderLine');
  if (line) {
    line.remove();
  }

  line = new LeaderLine(
  // from, to,
  LeaderLine.areaAnchor(from, { color: 'transparency' }), LeaderLine.areaAnchor(to, { color: 'transparency' }), {
    endPlugColor: COLOR,
    startPlugColor: COLOR,
    // endPlug: 'arrow2',
    endPlugSize: 0.5
    // markerEnd: 'url(#coachmark-arrow)',
  });
  cache.set('leaderLine', line);

  window.line = line;
  line.path = 'magnet'; // magnet, fluid, arc, straight, grid
  line.position();

  // Put filter on lines after they've been drawn
  var lines = document.querySelectorAll('.leader-line-line-path');
  Array.prototype.forEach.call(lines, function (line) {
    // TODO: I've disabled the chalk roughness for now, until I can find a way to make the text rough as well
    // line.setAttribute('filter', 'url(#coachmark-chalk)');
  });
}

function createActionButton(mark) {
  var icon = 'X';
  var action = clear;

  if (mark.flow) {
    var next = mark.flow.getNext(mark.name);
    if (next) {
      icon = nextButtonHTML();
      action = function action() {
        draw(next);
      };
    }
  }

  var close = cache.default('actionButton', function () {
    return document.createElement('div');
  });
  close.setAttribute('class', 'coachmark-action-btn');
  close.innerHTML = icon;
  close.addEventListener('click', function () {
    action();
  });

  return close;
}

function nextButtonHTML() {
  var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); // ok
  svg.setAttribute('class', 'coachmark-next-button');
  var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  g.setAttribute('transform', 'scale(0.065), translate(100, 140)');
  var use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  use.setAttribute('xlink:href', '#right-arrow');
  g.appendChild(use);
  svg.appendChild(g);
  return svg.outerHTML;
}

function middleOf(node) {
  var rect = node;
  if (node instanceof Node) {
    rect = elementRect(node);
  }

  return [rect.left + rect.width / 2, rect.top + rect.height / 2];
}

function rectContains(_ref2, _ref3) {
  var x = _ref2.x,
      y = _ref2.y;
  var left = _ref3.left,
      top = _ref3.top,
      width = _ref3.width,
      height = _ref3.height;

  return left <= x && x <= left + width && top <= y && y <= top + height;
}

function splitScreen() {
  var w = document.body.offsetWidth;
  var h = document.body.offsetHeight;

  var box1 = void 0;
  var box2 = void 0;

  // Split vertically
  if (w > h) {
    var boxWidth = Math.floor(w / 2);
    box1 = {
      top: 0,
      left: 0,
      height: h,
      width: boxWidth
    };
    box2 = {
      top: 0,
      left: boxWidth,
      height: h,
      width: w - boxWidth
    };
  } else {
    var boxHeight = Math.floor(h / 2);
    box1 = {
      top: 0,
      left: 0,
      height: boxHeight,
      width: w
    };
    box2 = {
      top: boxHeight,
      left: 0,
      height: h - boxHeight,
      width: w
    };
  }

  return [box1, box2];
}

/* NOTE: not in use currently
function middleOfEdge(node, edge) {
  const rect = elementRect(node);

  const width = rect.width;
  const height = rect.height;
  const middleX = rect.width / 2;
  const middleY = rect.height / 2;
  let x = rect.left + middleX;
  let y = rect.top + middleY;

  switch (edge) {
    case 'top':
      x = rect.left + middleX;
      y = rect.top - lineOffset;
      break;
    case 'right':
      x = rect.left + width + lineOffset;
      y = rect.top + middleY;
      break;
    case 'bottom':
      x = rect.left + middleX;
      y = rect.top + height + lineOffset;
      break;
    case 'left':
      x = rect.left - lineOffset;
      y = rect.top + middleY;
      break;
    default:
      // do nothing
  }

  return [x, y];
}
*/

function elementRect(node, offsetParent) {
  if (offsetParent === true) offsetParent = node.offsetParent;

  var rect = node.getBoundingClientRect();
  var prect = offsetParent ? offsetParent.getBoundingClientRect() : { left: 0, top: 0 };

  return {
    left: rect.left - prect.left,
    top: rect.top - prect.top,
    width: rect.width,
    height: rect.height
  };
}

// function dirToViewportMid(pos) {
//   const mid = viewportMid();
//   return [
//     pos[0] > mid[0] ? -1 : 1,
//     pos[1] > mid[1] ? -1 : 1,
//   ];
// }

/* NOTE: not in use currently
function intersectionEdge(point, rect) {
  const slope = (rect.top - point.y) / (rect.left - point.x);
  const hsw = slope * rect.width / 2;
  const hsh = (rect.height / 2) / slope;
  const hh = rect.height / 2;
  const hw = rect.width / 2;
  // const TOPLEFT = {x: rect.x - hw, y: rect.y + hh};
  // const BOTTOMLEFT = {x: rect.x - hw, y: rect.y - hh};
  // const BOTTOMRIGHT = {x: rect.x + hw, y: rect.y - hh};
  // const TOPRIGHT = {x: rect.x + hw, y: rect.y + hh};
  if (-hh <= hsw && hsw <= hh) {
      // line intersects
    if (rect.left >= point.x) {
          // right edge;
      return 'right'; // [TOPRIGHT, BOTTOMRIGHT];
    } else if (rect.left < point.x) {
          // left edge
      return 'left'; // [TOPLEFT, BOTTOMLEFT];
    }
  }
  if (-hw <= hsh && hsh <= hw) {
    if (rect.top < point.y) {
          // top edge
      return 'top'; // [TOPLEFT, TOPRIGHT];
    } else if (rect.top > point.y) {
          // bottom edge
      return 'bottom'; // [BOTTOMLEFT, BOTTOMRIGHT];
    }
  }
}
*/

___$insertStyle(".coachmark {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  /*background: #000;*/\n  /*opacity: 0.60;*/\n  z-index: 100; }\n\n.coachmark-top,\n.coachmark-left,\n.coachmark-right,\n.coachmark-bottom {\n  position: fixed;\n  background: #000;\n  opacity: 0.66;\n  margin: 0;\n  padding: 0; }\n\n.coachmark-top {\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 100%; }\n\n.coachmark-left {\n  left: 0; }\n\n.coachmark-right {\n  right: 0; }\n\n.coachmark-bottom {\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%; }\n\n.coachmark-glow {\n  position: absolute;\n  /*z-index: 101;*/\n  /*box-shadow: 0 0 120px 50px #fff;*/ }\n\n.coachmark-text-container {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 5vmin; }\n\n.coachmark-text {\n  font-size: 15vmin;\n  font-family: 'Indie Flower', cursive;\n  line-height: 15vmin;\n  color: #fefefe;\n  text-shadow: 2px 2px #333;\n  z-index: 2; }\n\n.coachmark-svg {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 1; }\n\n.coachmark-line, .leader-line-line-path {\n  stroke: #fff;\n  stroke-width: 1vmin;\n  stroke-linecap: round; }\n\npath.coachmark-line {\n  stroke-width: 1vmin;\n  stroke-linecap: round; }\n\n.coachmark-action-btn {\n  z-index: 9999;\n  border-radius: 50%;\n  border: 3px solid #fff;\n  height: 56px;\n  width: 56px;\n  position: fixed;\n  top: 0;\n  right: 0;\n  color: #fff;\n  margin: 5vmin;\n  font-size: 36px;\n  line-height: 51px;\n  text-align: center;\n  cursor: pointer;\n  box-shadow: 0 2px 2px 0 rgba(255, 255, 255, 0.12), 0 1px 5px 0 rgba(255, 255, 255, 0.12), 0 3px 1px -2px rgba(255, 255, 255, 0.2); }\n\n.coachmark-next-button use {\n  fill: #fff; }\n\n/* Override Leader-Line Settings */\n.leader-line-plugs-face {\n  marker-end: url(#arrowhead0) !important;\n  stroke-width: 1px; }\n\n.leader-line path {\n  filter: 'url(#coachmark-chalk)'; }\n\npath.coachmark-marker {\n  stroke: #fff;\n  stroke-width: 1.33vmin;\n  stroke-linecap: round; }\n");

function injectFonts() {
  var link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('href', 'https://fonts.googleapis.com/css?family=Indie+Flower');
  document.head.appendChild(link);
  return link;
}

var svg = "  <defs>\n    <filter id=\"coachmark-chalk\" x=\"0\" y=\"0\" height=\"5000px\" width=\"5000px\" color-interpolation-filters=\"sRGB\" filterUnits=\"userSpaceOnUse\">\n      <feTurbulence baseFrequency=\"0.133\" seed=\"500\" result=\"result1\" numOctaves=\"1\" type=\"turbulence\"/>\n      <feOffset result=\"result2\" dx=\"0\" dy=\"0\"/>\n      <feDisplacementMap scale=\"5\" yChannelSelector=\"G\" in2=\"result1\" xChannelSelector=\"R\" in=\"SourceGraphic\"/>\n      <feGaussianBlur stdDeviation=\"0.5\"/>\n    </filter>\n    <filter id=\"coachmark-chalk-rough\" filterUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" height=\"5000px\" width=\"5000px\">\n      <feTurbulence baseFrequency=\"0.2\" numOctaves=\"3\" type=\"fractalNoise\" />\n      <feDisplacementMap  scale=\"8\"  xChannelSelector=\"R\" in=\"SourceGraphic\" />\n    </filter>\n    <marker id=\"arrow\" class=\"coachmark-line\" markerWidth=\"500\" markerHeight=\"800\" refX=\"9.5\" refY=\"4.5\" orient=\"auto\" overflow=\"visible\" markerUnits=\"userSpaceOnUse\">\n      <!--<path d=\"M0,0 L0,6 L9,3 z\" stroke=\"#fff\" fill=\"#fff\" />-->\n      <!--<polyline points=\"-2,-2 0,0 -2,2\" stroke=\"#fff\" fill=\"none\" vector-effect=\"non-scaling-stroke\" />-->\n\n      <!-- <polyline points=\"1 1, 9 5, 1 7\" fill=\"none\" /> -->\n      <polyline points=\"1 1.5, 10 4.5, 2 7\" fill=\"none\" stroke-linecap=\"round\" />\n    </marker>\n\n    <marker id=\"arrowhead0\" viewBox=\"0 0 60 60\" refX=\"50\" refY=\"30\" markerUnits=\"strokeWidth\" markerWidth=\"8\" markerHeight=\"10\" orient=\"auto\" overflow=\"visible\">\n      <path d=\"M 0 0 L 60 30 L 0 60\" fill=\"none\" class=\"coachmark-marker\" />\n    </marker>\n\n    <!-- NOTE: arrowhead is not being used -->\n    <!-- <marker id=\"arrowhead\" viewBox=\"0 0 10 10\" refX=\"3\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto\">\n      <path d=\"M 0 0 L 10 5 L 0 10 z\" />\n    </marker> -->\n\n    <filter id=\"coachmark-drop-shadow\" x=\"0\" y=\"0\" height=\"5000px\" width=\"5000px\">\n       <feOffset result=\"offOut\" in=\"SourceAlpha\" dx=\"0\" dy=\"5\" />\n       <feGaussianBlur result=\"blurOut\" in=\"offOut\" stdDeviation=\"3\" />\n       <feBlend in=\"SourceGraphic\" in2=\"blurOut\" mode=\"normal\" />\n    </filter>\n\n    <filter id=\"test-filter\">\n      <feMorphology operator=\"dilate\" radius=\"4\" in=\"SourceAlpha\" result=\"BEVEL_10\" />\n      <feConvolveMatrix order=\"3,3\" kernelMatrix=\n   \"1 0 0\n   0 1 0\n   0 0 1\" in=\"BEVEL_10\" result=\"BEVEL_20\" />\n      <feOffset dx=\"10\" dy=\"10\" in=\"BEVEL_20\" result=\"BEVEL_30\"/>\n      <feComposite operator=\"out\" in=\"BEVEL_20\" in2=\"BEVEL_10\" result=\"BEVEL_30\"/>\n      <feFlood flood-color=\"#fff\" result=\"COLOR-red\" />\n      <feComposite in=\"COLOR-red\" in2=\"BEVEL_30\" operator=\"in\" result=\"BEVEL_40\" />\n\n      <feMerge result=\"BEVEL_50\">\n         <feMergeNode in=\"BEVEL_40\" />\n         <feMergeNode in=\"SourceGraphic\" />\n      </feMerge>\n    </filter>\n\n    <path id=\"right-arrow\" d=\"M 345.23509 500.5 L 594.16634 251.00371 L 344.26968 1.468574 L 205.81581 1.525764 L 397.12537 194.51019 L 0.49999607 194.58168 L 0.62293607 305.57099 L 399.73581 305.59147 L 206.36939 500.5 L 345.23509 500.5 z \"/>\n  </defs>\n";

function injectSVG() {
  var s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  s.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  s.setAttribute('width', 0);
  s.setAttribute('height', 0);
  s.innerHTML = svg;
  document.body.insertBefore(s, document.body.firstChild);
  return s;
}

// Run on module load
init();

window.CoachmarkCache = cache.cache;

var index = {
  // Add a coachmark
  add: function add(name) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (!(typeof name === 'string')) {
      config = name;
      name = Math.random().toString(36).substr(2);
    }

    cache('mark.' + name, config);
  },

  // Show a coachmark given a name
  show: function show(name) {
    clear();
    draw(name);
  },

  cache: function cache$$1() {
    return cache.cache;
  },
  draw: draw,
  redrawAll: redrawAll,
  flow: flow
};

function init() {
  document.addEventListener('DOMContentLoaded', function () {
    // injectCSS();
    injectFonts();
    injectSVG();
    addListeners();
  });
}

function addListeners() {
  window.addEventListener('resize', function () {
    requestAnimationFrame(function () {
      redrawAll();
    });
  });
}

return index;

})));
//# sourceMappingURL=coachmarks.js.map
