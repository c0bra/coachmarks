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
  // cache.init();
  if (typeof obj === 'undefined') {
    // Get
    return cache.get(name);
  }

  // Set
  cache.add(name, obj);

  return obj;
};

cache.get = function (name) {
  // cache.init();
  return cache.cache[name];
};

cache.add = function (name, obj) {
  // cache.init();
  cache.cache[name] = obj;
  return obj;
};
cache.set = cache.add;

cache.remove = function (name) {
  // cache.init();
  if (name) delete cache.cache[name];
};

cache.clear = function () {
  // cache.init();
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
  // cache.init();
  return cache.cache;
};

cache.allArray = function () {
  // cache.init();
  var elms = [];
  for (var key in cache.cache) {
    if (Object.prototype.hasOwnProperty.call(cache.cache, key)) {
      elms.push({ key: cache.cache[key] });
    }
  }

  return elms;
};

'use strict';

/*! LeaderLine v1.0.1 (c) anseki https://anseki.github.io/leader-line/ */
var LeaderLine=function(){"use strict";function e(t,n){var a,i;return typeof t!=typeof n||(a=Je(t)?"obj":Array.isArray(t)?"array":"")!=(Je(n)?"obj":Array.isArray(n)?"array":"")||("obj"===a?e(i=Object.keys(t).sort(),Object.keys(n).sort())||i.some(function(a){return e(t[a],n[a])}):"array"===a?t.length!==n.length||t.some(function(t,a){return e(t,n[a])}):t!==n)}function t(e){return e?Je(e)?Object.keys(e).reduce(function(n,a){return n[a]=t(e[a]),n},{}):Array.isArray(e)?e.map(t):e:e}function n(e){function t(e){var t=1,n=He.exec(e);return n&&(t=parseFloat(n[1]),n[2]?t=t>=0&&t<=100?t/100:1:(t<0||t>1)&&(t=1)),t}var n,a,i,o=1,r=e=(e+"").trim();return(n=/^(rgba|hsla|hwb|gray|device\-cmyk)\s*\(([\s\S]+)\)$/i.exec(e))?(a=n[1].toLowerCase(),i=n[2].trim().split(/\s*,\s*/),"rgba"===a&&4===i.length?(o=t(i[3]),r="rgb("+i.slice(0,3).join(", ")+")"):"hsla"===a&&4===i.length?(o=t(i[3]),r="hsl("+i.slice(0,3).join(", ")+")"):"hwb"===a&&4===i.length?(o=t(i[3]),r="hwb("+i.slice(0,3).join(", ")+")"):"gray"===a&&2===i.length?(o=t(i[1]),r="gray("+i[0]+")"):"device-cmyk"===a&&i.length>=5&&(o=t(i[4]),r="device-cmyk("+i.slice(0,4).join(", ")+")")):(n=/^\#(?:([\da-f]{6})([\da-f]{2})|([\da-f]{3})([\da-f]))$/i.exec(e))?n[1]?(o=parseInt(n[2],16)/255,r="#"+n[1]):(o=parseInt(n[4]+n[4],16)/255,r="#"+n[3]):"transparent"===e.toLocaleLowerCase()&&(o=0),[o,r]}function a(e,t,n){var a,i;return"onmouseenter"in e&&"onmouseleave"in e?(e.addEventListener("mouseenter",t,!1),e.addEventListener("mouseleave",n,!1),function(){e.removeEventListener("mouseenter",t,!1),e.removeEventListener("mouseleave",n,!1);}):(console.warn("mouseenter and mouseleave events polyfill is enabled."),a=function(e){e.relatedTarget&&(e.relatedTarget===this||this.compareDocumentPosition(e.relatedTarget)&Node.DOCUMENT_POSITION_CONTAINED_BY)||t.apply(this,arguments);},e.addEventListener("mouseover",a),i=function(e){e.relatedTarget&&(e.relatedTarget===this||this.compareDocumentPosition(e.relatedTarget)&Node.DOCUMENT_POSITION_CONTAINED_BY)||n.apply(this,arguments);},e.addEventListener("mouseout",i),function(){e.removeEventListener("mouseover",a,!1),e.removeEventListener("mouseout",i,!1);})}function i(e){return!(!e||e.nodeType!==Node.ELEMENT_NODE||"function"!=typeof e.getBoundingClientRect)}function o(e,t){var n,a,i,o,r={};if(!(i=e.ownerDocument))return console.error("Cannot get document that contains the element."),null;if(e.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_DISCONNECTED)return console.error("A disconnected element was passed."),null;n=e.getBoundingClientRect();for(a in n)r[a]=n[a];if(!t){if(!(o=i.defaultView))return console.error("Cannot get window that contains the element."),null;r.left+=o.pageXOffset,r.right+=o.pageXOffset,r.top+=o.pageYOffset,r.bottom+=o.pageYOffset;}return r}function r(e){var t=e.ownerDocument.defaultView.getComputedStyle(e,"");return{left:e.clientLeft+parseFloat(t.paddingLeft),top:e.clientTop+parseFloat(t.paddingTop)}}function l(e,t){var n,a,i=[],o=e;for(t=t||window;;){if(!(n=o.ownerDocument))return console.error("Cannot get document that contains the element."),null;if(!(a=n.defaultView))return console.error("Cannot get window that contains the element."),null;if(a===t)break;if(!(o=a.frameElement))return console.error("`baseWindow` was not found."),null;i.unshift(o);}return i}function s(e,t){var n,a,i=0,s=0;return t=t||window,(a=l(e,t))?a.length?(a.forEach(function(e,t){var n=o(e,t>0);i+=n.left,s+=n.top,n=r(e),i+=n.left,s+=n.top;}),n=o(e,!0),n.left+=i,n.right+=i,n.top+=s,n.bottom+=s,n):o(e):null}function u(e,t){var n,a,i;if(!(n=l(e))||!(a=l(t)))throw new Error("Cannot get frames.");return n.length&&a.length&&(n.reverse(),a.reverse(),n.some(function(e){return a.some(function(t){return t===e&&(i=t.contentWindow,!0)})})),i||window}function h(e,t){var n=e.x-t.x,a=e.y-t.y;return Math.sqrt(n*n+a*a)}function p(e,t,n){var a=t.x-e.x,i=t.y-e.y;return{x:e.x+a*n,y:e.y+i*n,angle:Math.atan2(i,a)/(Math.PI/180)}}function c(e,t,n,a){var i=t.x-e.x,o=t.y-e.y,r=a.x-n.x,l=a.y-n.y,s=(-o*(e.x-n.x)+i*(e.y-n.y))/(-r*o+i*l),u=(r*(e.y-n.y)-l*(e.x-n.x))/(-r*o+i*l);return s>=0&&s<=1&&u>=0&&u<=1?{x:e.x+u*i,y:e.y+u*o}:null}function d(e,t,n){var a=Math.atan2(e.y-t.y,t.x-e.x);return{x:t.x+Math.cos(a)*n,y:t.y+Math.sin(a)*n*-1}}function f(e,t,n,a,i){var o=i*i,r=o*i,l=1-i,s=l*l,u=s*l,h=u*e.x+3*s*i*t.x+3*l*o*n.x+r*a.x,p=u*e.y+3*s*i*t.y+3*l*o*n.y+r*a.y,c=e.x+2*i*(t.x-e.x)+o*(n.x-2*t.x+e.x),d=e.y+2*i*(t.y-e.y)+o*(n.y-2*t.y+e.y),f=t.x+2*i*(n.x-t.x)+o*(a.x-2*n.x+t.x),y=t.y+2*i*(n.y-t.y)+o*(a.y-2*n.y+t.y),m=l*e.x+i*t.x,S=l*e.y+i*t.y,g=l*n.x+i*a.x,_=l*n.y+i*a.y,v=90-180*Math.atan2(c-f,d-y)/Math.PI;return v+=v>180?-180:180,{x:h,y:p,fromP2:{x:c,y:d},toP1:{x:f,y:y},fromP1:{x:m,y:S},toP2:{x:g,y:_},angle:v}}function y(e,t,n,a,i){function o(e,t,n,a,i){return e*(e*(-3*t+9*n-9*a+3*i)+6*t-12*n+6*a)-3*t+3*n}var r,l,s,u,h,p=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],c=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],d=0;return i=null==i||i>1?1:i<0?0:i,r=i/2,p.forEach(function(i,p){l=r*i+r,s=o(l,e.x,t.x,n.x,a.x),u=o(l,e.y,t.y,n.y,a.y),h=s*s+u*u,d+=c[p]*Math.sqrt(h);}),r*d}function m(e,t,n,a,i){for(var o,r=.5,l=1-r;;){if(o=y(e,t,n,a,l),Math.abs(o-i)<=.01)break;r/=2,l+=(o<i?1:-1)*r;}return l}function S(e,t,n){var a=Math.atan2(e.y-t.y,t.x-e.x)+.5*Math.PI;return[{x:e.x+Math.cos(a)*n,y:e.y+Math.sin(a)*n*-1},{x:t.x+Math.cos(a)*n,y:t.y+Math.sin(a)*n*-1}]}function g(e,t,n,a,i,o){for(var r,l,s=y(e,t,n,a)/o,u=1/(i>o?s*(i/o):s),h=[],p=0;;){if(r=f(e,t,n,a,p),l=(90-r.angle)*(Math.PI/180),h.push({x:r.x+Math.cos(l)*i,y:r.y+Math.sin(l)*i*-1}),p>=1)break;p+=u,p>1&&(p=1);}return h}function _(e,t){var n;return e.forEach(function(e){var a=t?e.map(function(e){var n={x:e.x,y:e.y};return t(n),n}):e;n||(n=[{type:"M",values:[a[0].x,a[0].y]}]),n.push(a.length?2===a.length?{type:"L",values:[a[1].x,a[1].y]}:{type:"C",values:[a[1].x,a[1].y,a[2].x,a[2].y,a[3].x,a[3].y]}:{type:"Z",values:[]});}),n}function v(e){var t=[],n=0;return e.forEach(function(e){var a=(2===e.length?h:y).apply(null,e);t.push(a),n+=a;}),{segsLen:t,lenAll:n}}function E(e){var t;return e.reduce(function(e,n){var a,i=n.values;switch(n.type){case"M":t={x:i[0],y:i[1]};break;case"L":a={x:i[0],y:i[1]},t&&(e+=h(t,a)),t=a;break;case"C":a={x:i[4],y:i[5]},t&&(e+=y(t,{x:i[0],y:i[1]},{x:i[2],y:i[3]},a)),t=a;}return e},0)}function x(e,t){return null==e||null==t||e.length!==t.length||e.some(function(e,n){var a=t[n];return e.type!==a.type||e.values.some(function(e,t){return e!==a.values[t]})})}function b(e){var t=null!=e.right?e.right:e.left+e.width,n=null!=e.bottom?e.bottom:e.top+e.height;return[{type:"M",values:[e.left,e.top]},{type:"L",values:[t,e.top]},{type:"L",values:[t,n]},{type:"L",values:[e.left,n]},{type:"Z",values:[]}]}function k(e,t,n){e.events[t]?e.events[t].indexOf(n)<0&&e.events[t].push(n):e.events[t]=[n];}function w(e,t,n){var a;e.events[t]&&(a=e.events[t].indexOf(n))>-1&&e.events[t].splice(a,1);}function O(e){function t(){rt.forEach(function(e){e();}),rt=[];}se&&clearTimeout(se),rt.push(e),se=setTimeout(t,0);}function M(e){setTimeout(function(){var t=e.parentNode,n=e.nextSibling;t.insertBefore(t.removeChild(e),n);},0);}function I(e,t){e.reflowTargets.indexOf(t)<0&&e.reflowTargets.push(t);}function C(e){e.reflowTargets.forEach(function(e){M(e);}),e.reflowTargets=[];}function L(e,t,n,a,i,o,r){var l,s,u;"auto-start-reverse"===n?("boolean"!=typeof ue&&(t.setAttribute("orient","auto-start-reverse"),ue=t.orientType.baseVal===SVGMarkerElement.SVG_MARKER_ORIENT_UNKNOWN),ue?t.setAttribute("orient",n):(l=i.createSVGTransform(),l.setRotate(180,0,0),o.transform.baseVal.appendItem(l),t.setAttribute("orient","auto"),u=!0)):(t.setAttribute("orient",n),!1===ue&&o.transform.baseVal.clear()),s=t.viewBox.baseVal,u?(s.x=-a.right,s.y=-a.bottom):(s.x=a.left,s.y=a.top),s.width=a.width,s.height=a.height,Ue&&I(e,r);}function A(e,t){return{prop:e?"markerEnd":"markerStart",orient:t?t.noRotate?"0":e?"auto":"auto-start-reverse":null}}function V(e,t){var n,a,i={};return"boolean"!=typeof pe&&(pe=!!window.SVGFEDropShadowElement&&!qe),i.elmsAppend=[i.elmFilter=n=e.createElementNS(je,"filter")],n.filterUnits.baseVal=SVGUnitTypes.SVG_UNIT_TYPE_USERSPACEONUSE,n.x.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX,0),n.y.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX,0),n.width.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PERCENTAGE,100),n.height.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PERCENTAGE,100),n.id=t,pe?(i.elmOffset=i.elmBlur=a=n.appendChild(e.createElementNS(je,"feDropShadow")),i.styleFlood=a.style):(i.elmBlur=n.appendChild(e.createElementNS(je,"feGaussianBlur")),i.elmOffset=a=n.appendChild(e.createElementNS(je,"feOffset")),a.result.baseVal="offsetblur",a=n.appendChild(e.createElementNS(je,"feFlood")),i.styleFlood=a.style,a=n.appendChild(e.createElementNS(je,"feComposite")),a.in2.baseVal="offsetblur",a.operator.baseVal=SVGFECompositeElement.SVG_FECOMPOSITE_OPERATOR_IN,a=n.appendChild(e.createElementNS(je,"feMerge")),a.appendChild(e.createElementNS(je,"feMergeNode")),a.appendChild(e.createElementNS(je,"feMergeNode")).in1.baseVal="SourceGraphic"),i}function P(e,t){Object.keys(t).forEach(function(n){var a=t[n];e[n]=null!=a.iniValue?a.hasSE?[a.iniValue,a.iniValue]:a.iniValue:a.hasSE?a.hasProps?[{},{}]:[]:a.hasProps?{}:null;});}function N(e,t,n,a,i){return a!==t[n]&&(t[n]=a,i&&i.forEach(function(t){t(e,a,n);}),!0)}function T(e){function t(e,t){return e+=parseFloat(t)}var n=e.document,a=e.getComputedStyle(n.documentElement,""),i=e.getComputedStyle(n.body,""),o={x:0,y:0};return"static"!==i.position?(o.x-=[a.marginLeft,a.borderLeftWidth,a.paddingLeft,i.marginLeft,i.borderLeftWidth].reduce(t,0),o.y-=[a.marginTop,a.borderTopWidth,a.paddingTop,i.marginTop,i.borderTopWidth].reduce(t,0)):"static"!==a.position&&(o.x-=[a.marginLeft,a.borderLeftWidth].reduce(t,0),o.y-=[a.marginTop,a.borderTopWidth].reduce(t,0)),o}function W(e){var t,n=e.document;n.getElementById(we)||(t=(new e.DOMParser).parseFromString(Oe,"image/svg+xml"),n.body.appendChild(t.documentElement),tt(e));}function B(e,t){function n(e){var t=r.appendChild(m.createElementNS(je,"mask"));return t.id=e,t.maskUnits.baseVal=SVGUnitTypes.SVG_UNIT_TYPE_USERSPACEONUSE,[t.x,t.y,t.width,t.height].forEach(function(e){e.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX,0);}),t}function a(e){var t=r.appendChild(m.createElementNS(je,"marker"));return t.id=e,t.markerUnits.baseVal=SVGMarkerElement.SVG_MARKERUNITS_STROKEWIDTH,t.viewBox.baseVal||t.setAttribute("viewBox","0 0 0 0"),t}function i(e){return[e.width,e.height].forEach(function(e){e.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PERCENTAGE,100);}),e}var o,r,l,s,u,h,p,c,d,f,y=e.aplStats,m=t.document,S=ce+"-"+e._id;e.pathList={},P(y,at),Object.keys(ne).forEach(function(t){var n=t+"_enabled";y[n]&&(ne[t].remove(e),y[n]=!1);}),e.baseWindow&&e.svg&&e.baseWindow.document.body.removeChild(e.svg),e.baseWindow=t,W(t),e.bodyOffset=T(t),e.svg=o=m.createElementNS(je,"svg"),o.className.baseVal=ce,o.viewBox.baseVal||o.setAttribute("viewBox","0 0 0 0"),e.defs=r=o.appendChild(m.createElementNS(je,"defs")),e.linePath=s=r.appendChild(m.createElementNS(je,"path")),s.id=u=S+"-line-path",s.className.baseVal=ce+"-line-path",qe&&(s.style.fill="none"),e.lineShape=s=r.appendChild(m.createElementNS(je,"use")),s.id=h=S+"-line-shape",s.href.baseVal="#"+u,l=r.appendChild(m.createElementNS(je,"g")),l.id=p=S+"-caps",e.capsMaskAnchorSE=[0,1].map(function(){var e=l.appendChild(m.createElementNS(je,"path"));return e.className.baseVal=ce+"-caps-mask-anchor",e}),e.lineMaskMarkerIdSE=[S+"-caps-mask-marker-0",S+"-caps-mask-marker-1"],e.capsMaskMarkerSE=[0,1].map(function(t){return a(e.lineMaskMarkerIdSE[t])}),e.capsMaskMarkerShapeSE=[0,1].map(function(t){var n=e.capsMaskMarkerSE[t].appendChild(m.createElementNS(je,"use"));return n.className.baseVal=ce+"-caps-mask-marker-shape",n}),e.capsMaskLine=s=l.appendChild(m.createElementNS(je,"use")),s.className.baseVal=ce+"-caps-mask-line",s.href.baseVal="#"+h,e.maskBGRect=s=i(r.appendChild(m.createElementNS(je,"rect"))),s.id=c=S+"-mask-bg-rect",s.className.baseVal=ce+"-mask-bg-rect",qe&&(s.style.fill="white"),e.lineMask=i(n(e.lineMaskId=S+"-line-mask")),e.lineMaskBG=s=e.lineMask.appendChild(m.createElementNS(je,"use")),s.href.baseVal="#"+c,e.lineMaskShape=s=e.lineMask.appendChild(m.createElementNS(je,"use")),s.className.baseVal=ce+"-line-mask-shape",s.href.baseVal="#"+u,s.style.display="none",e.lineMaskCaps=s=e.lineMask.appendChild(m.createElementNS(je,"use")),s.href.baseVal="#"+p,e.lineOutlineMask=i(n(d=S+"-line-outline-mask")),s=e.lineOutlineMask.appendChild(m.createElementNS(je,"use")),s.href.baseVal="#"+c,e.lineOutlineMaskShape=s=e.lineOutlineMask.appendChild(m.createElementNS(je,"use")),s.className.baseVal=ce+"-line-outline-mask-shape",s.href.baseVal="#"+u,e.lineOutlineMaskCaps=s=e.lineOutlineMask.appendChild(m.createElementNS(je,"use")),s.href.baseVal="#"+p,e.face=o.appendChild(m.createElementNS(je,"g")),e.lineFace=s=e.face.appendChild(m.createElementNS(je,"use")),s.href.baseVal="#"+h,e.lineOutlineFace=s=e.face.appendChild(m.createElementNS(je,"use")),s.href.baseVal="#"+h,s.style.mask="url(#"+d+")",s.style.display="none",e.plugMaskIdSE=[S+"-plug-mask-0",S+"-plug-mask-1"],e.plugMaskSE=[0,1].map(function(t){return n(e.plugMaskIdSE[t])}),e.plugMaskShapeSE=[0,1].map(function(t){var n=e.plugMaskSE[t].appendChild(m.createElementNS(je,"use"));return n.className.baseVal=ce+"-plug-mask-shape",n}),f=[],e.plugOutlineMaskSE=[0,1].map(function(e){return n(f[e]=S+"-plug-outline-mask-"+e)}),e.plugOutlineMaskShapeSE=[0,1].map(function(t){var n=e.plugOutlineMaskSE[t].appendChild(m.createElementNS(je,"use"));return n.className.baseVal=ce+"-plug-outline-mask-shape",n}),e.plugMarkerIdSE=[S+"-plug-marker-0",S+"-plug-marker-1"],e.plugMarkerSE=[0,1].map(function(t){var n=a(e.plugMarkerIdSE[t]);return qe&&(n.markerUnits.baseVal=SVGMarkerElement.SVG_MARKERUNITS_USERSPACEONUSE),n}),e.plugMarkerShapeSE=[0,1].map(function(t){return e.plugMarkerSE[t].appendChild(m.createElementNS(je,"g"))}),e.plugFaceSE=[0,1].map(function(t){return e.plugMarkerShapeSE[t].appendChild(m.createElementNS(je,"use"))}),e.plugOutlineFaceSE=[0,1].map(function(t){var n=e.plugMarkerShapeSE[t].appendChild(m.createElementNS(je,"use"));return n.style.mask="url(#"+f[t]+")",n.style.display="none",n}),e.plugsFace=s=e.face.appendChild(m.createElementNS(je,"use")),s.className.baseVal=ce+"-plugs-face",s.href.baseVal="#"+h,s.style.display="none",e.curStats.show_inAnim?(e.isShown=1,ae[y.show_effect].stop(e,!0)):e.isShown||(o.style.visibility="hidden"),m.body.appendChild(o),[0,1,2].forEach(function(t){var n,a=e.options.labelSEM[t];a&&re(a,"label")&&(n=ut[a._id],n.conf.initSvg&&n.conf.initSvg(n,e));});}function R(e){var t=e.options,a=e.curStats,i=e.events,o=!1;return o=N(e,a,"line_color",t.lineColor,i.cur_line_color)||o,o=N(e,a,"line_colorTra",n(a.line_color)[0]<1)||o,o=N(e,a,"line_strokeWidth",t.lineSize,i.cur_line_strokeWidth)||o}function F(e){var t=e.options,a=e.curStats,i=e.events,o=!1;return[0,1].forEach(function(r){var l,s,u,h,p,c,d,f,y=t.plugSE[r];o=N(e,a.plug_enabledSE,r,y!==ke)||o,o=N(e,a.plug_plugSE,r,y)||o,o=N(e,a.plug_colorSE,r,f=t.plugColorSE[r]||a.line_color,i.cur_plug_colorSE)||o,o=N(e,a.plug_colorTraSE,r,n(f)[0]<1)||o,y!==ke&&(l=Me[Ce[y]],h=s=l.widthR*t.plugSizeSE[r],p=u=l.heightR*t.plugSizeSE[r],qe&&(h*=a.line_strokeWidth,p*=a.line_strokeWidth),o=N(e,a.plug_markerWidthSE,r,h)||o,o=N(e,a.plug_markerHeightSE,r,p)||o,a.capsMaskMarker_markerWidthSE[r]=s,a.capsMaskMarker_markerHeightSE[r]=u),a.plugOutline_plugSE[r]=a.capsMaskMarker_plugSE[r]=y,a.plug_enabledSE[r]?(f=a.line_strokeWidth/Ke.lineSize*t.plugSizeSE[r],a.position_plugOverheadSE[r]=l.overhead*f,a.viewBox_plugBCircleSE[r]=l.bCircle*f,c=l.sideLen*f,d=l.backLen*f):(a.position_plugOverheadSE[r]=-a.line_strokeWidth/2,a.viewBox_plugBCircleSE[r]=c=d=0),N(e,a.attach_plugSideLenSE,r,c,i.cur_attach_plugSideLenSE),N(e,a.attach_plugBackLenSE,r,d,i.cur_attach_plugBackLenSE),a.capsMaskAnchor_enabledSE[r]=!a.plug_enabledSE[r];}),o=N(e,a,"plug_enabled",a.plug_enabledSE[0]||a.plug_enabledSE[1])||o}function G(e){var t,a=e.options,i=e.curStats,o=!1;return o=N(e,i,"lineOutline_enabled",a.lineOutlineEnabled)||o,o=N(e,i,"lineOutline_color",a.lineOutlineColor)||o,o=N(e,i,"lineOutline_colorTra",n(i.lineOutline_color)[0]<1)||o,t=i.line_strokeWidth*a.lineOutlineSize,o=N(e,i,"lineOutline_strokeWidth",i.line_strokeWidth-2*t)||o,o=N(e,i,"lineOutline_inStrokeWidth",i.lineOutline_colorTra?i.lineOutline_strokeWidth+2*Qe:i.line_strokeWidth-t)||o}function D(e){var t=e.options,a=e.curStats,i=!1;return[0,1].forEach(function(o){var r,l=a.plugOutline_plugSE[o],s=l!==ke?Me[Ce[l]]:null;i=N(e,a.plugOutline_enabledSE,o,t.plugOutlineEnabledSE[o]&&a.plug_enabled&&a.plug_enabledSE[o]&&!!s&&!!s.outlineBase)||i,i=N(e,a.plugOutline_colorSE,o,r=t.plugOutlineColorSE[o]||a.lineOutline_color)||i,i=N(e,a.plugOutline_colorTraSE,o,n(r)[0]<1)||i,s&&s.outlineBase&&(r=t.plugOutlineSizeSE[o],r>s.outlineMax&&(r=s.outlineMax),r*=2*s.outlineBase,i=N(e,a.plugOutline_strokeWidthSE,o,r)||i,i=N(e,a.plugOutline_inStrokeWidthSE,o,a.plugOutline_colorTraSE[o]?r-Qe/(a.line_strokeWidth/Ke.lineSize)/t.plugSizeSE[o]*2:r/2)||i);}),i}function z(e){var t,n=e.curStats,a=e.aplStats,i=e.events,o=!1;return!n.line_altColor&&N(e,a,"line_color",t=n.line_color,i.apl_line_color)&&(e.lineFace.style.stroke=t,o=!0),N(e,a,"line_strokeWidth",t=n.line_strokeWidth,i.apl_line_strokeWidth)&&(e.lineShape.style.strokeWidth=t+"px",o=!0,(Ye||Ue)&&(I(e,e.lineShape),Ue&&(I(e,e.lineFace),I(e,e.lineMaskCaps)))),N(e,a,"lineOutline_enabled",t=n.lineOutline_enabled,i.apl_lineOutline_enabled)&&(e.lineOutlineFace.style.display=t?"inline":"none",o=!0),n.lineOutline_enabled&&(N(e,a,"lineOutline_color",t=n.lineOutline_color,i.apl_lineOutline_color)&&(e.lineOutlineFace.style.stroke=t,o=!0),N(e,a,"lineOutline_strokeWidth",t=n.lineOutline_strokeWidth,i.apl_lineOutline_strokeWidth)&&(e.lineOutlineMaskShape.style.strokeWidth=t+"px",o=!0,Ue&&(I(e,e.lineOutlineMaskCaps),I(e,e.lineOutlineFace))),N(e,a,"lineOutline_inStrokeWidth",t=n.lineOutline_inStrokeWidth,i.apl_lineOutline_inStrokeWidth)&&(e.lineMaskShape.style.strokeWidth=t+"px",o=!0,Ue&&(I(e,e.lineOutlineMaskCaps),I(e,e.lineOutlineFace)))),N(e,a,"plug_enabled",t=n.plug_enabled,i.apl_plug_enabled)&&(e.plugsFace.style.display=t?"inline":"none",o=!0),n.plug_enabled&&[0,1].forEach(function(r){var l=n.plug_plugSE[r],s=l!==ke?Me[Ce[l]]:null,u=A(r,s);N(e,a.plug_enabledSE,r,t=n.plug_enabledSE[r],i.apl_plug_enabledSE)&&(e.plugsFace.style[u.prop]=t?"url(#"+e.plugMarkerIdSE[r]+")":"none",o=!0),n.plug_enabledSE[r]&&(N(e,a.plug_plugSE,r,l,i.apl_plug_plugSE)&&(e.plugFaceSE[r].href.baseVal="#"+s.elmId,L(e,e.plugMarkerSE[r],u.orient,s.bBox,e.svg,e.plugMarkerShapeSE[r],e.plugsFace),o=!0,Ye&&I(e,e.plugsFace)),N(e,a.plug_colorSE,r,t=n.plug_colorSE[r],i.apl_plug_colorSE)&&(e.plugFaceSE[r].style.fill=t,o=!0,(Ze||qe||Ue)&&!n.line_colorTra&&I(e,Ue?e.lineMaskCaps:e.capsMaskLine)),["markerWidth","markerHeight"].forEach(function(l){var s="plug_"+l+"SE";N(e,a[s],r,t=n[s][r],i["apl_"+s])&&(e.plugMarkerSE[r][l].baseVal.value=t,o=!0);}),N(e,a.plugOutline_enabledSE,r,t=n.plugOutline_enabledSE[r],i.apl_plugOutline_enabledSE)&&(t?(e.plugFaceSE[r].style.mask="url(#"+e.plugMaskIdSE[r]+")",e.plugOutlineFaceSE[r].style.display="inline"):(e.plugFaceSE[r].style.mask="none",e.plugOutlineFaceSE[r].style.display="none"),o=!0),n.plugOutline_enabledSE[r]&&(N(e,a.plugOutline_plugSE,r,l,i.apl_plugOutline_plugSE)&&(e.plugOutlineFaceSE[r].href.baseVal=e.plugMaskShapeSE[r].href.baseVal=e.plugOutlineMaskShapeSE[r].href.baseVal="#"+s.elmId,[e.plugMaskSE[r],e.plugOutlineMaskSE[r]].forEach(function(e){e.x.baseVal.value=s.bBox.left,e.y.baseVal.value=s.bBox.top,e.width.baseVal.value=s.bBox.width,e.height.baseVal.value=s.bBox.height;}),o=!0),N(e,a.plugOutline_colorSE,r,t=n.plugOutline_colorSE[r],i.apl_plugOutline_colorSE)&&(e.plugOutlineFaceSE[r].style.fill=t,o=!0,Ue&&(I(e,e.lineMaskCaps),I(e,e.lineOutlineMaskCaps))),N(e,a.plugOutline_strokeWidthSE,r,t=n.plugOutline_strokeWidthSE[r],i.apl_plugOutline_strokeWidthSE)&&(e.plugOutlineMaskShapeSE[r].style.strokeWidth=t+"px",o=!0),N(e,a.plugOutline_inStrokeWidthSE,r,t=n.plugOutline_inStrokeWidthSE[r],i.apl_plugOutline_inStrokeWidthSE)&&(e.plugMaskShapeSE[r].style.strokeWidth=t+"px",o=!0)));}),o}function H(e){function n(e,t){var n=t===de?{x:e.left+e.width/2,y:e.top}:t===fe?{x:e.right,y:e.top+e.height/2}:t===ye?{x:e.left+e.width/2,y:e.bottom}:{x:e.left,y:e.top+e.height/2};return n.socketId=t,n}function a(e){return{x:e.x,y:e.y}}function i(e,t){return e.x!==t.x||e.y!==t.y||e.socketId!==t.socketId}function o(e,t){var n=null==e?"auto":Array.isArray(e)?"array":"number";return n!==(null==t?"auto":Array.isArray(t)?"array":"number")||("array"===n?e[0]!==t[0]||e[1]!==t[1]:e!==t)}var r,l,u,c=e.options,d=e.curStats,S=e.aplStats,g=d.position_socketXYSE,_=!1;if(d.position_path=c.path,d.position_lineStrokeWidth=d.line_strokeWidth,d.position_socketGravitySE=r=t(c.socketGravitySE),l=[0,1].map(function(t){var n=c.anchorSE[t],a=e.optionIsAttach.anchorSE[t],i=!1!==a?ut[n._id]:null,o=!1!==a&&i.conf.getStrokeWidth?i.conf.getStrokeWidth(i,e):0,r=!1!==a&&i.conf.getBBoxNest?i.conf.getBBoxNest(i,e,o):s(n,e.baseWindow);return d.capsMaskAnchor_pathDataSE[t]=!1!==a&&i.conf.getPathData?i.conf.getPathData(i,e,o):b(r),d.capsMaskAnchor_strokeWidthSE[t]=o,r}),function(){var e,t,a,i=-1;c.socketSE[0]&&c.socketSE[1]?(g[0]=n(l[0],c.socketSE[0]),g[1]=n(l[1],c.socketSE[1])):(c.socketSE[0]||c.socketSE[1]?(c.socketSE[0]?(t=0,a=1):(t=1,a=0),g[t]=n(l[t],c.socketSE[t]),e=Le.map(function(e){return n(l[a],e)}),e.forEach(function(e){var n=h(e,g[t]);(n<i||-1===i)&&(g[a]=e,i=n);})):(e=Le.map(function(e){return n(l[1],e)}),Le.map(function(e){return n(l[0],e)}).forEach(function(t){e.forEach(function(e){var n=h(t,e);(n<i||-1===i)&&(g[0]=t,g[1]=e,i=n);});})),[0,1].forEach(function(e){var t,n;c.socketSE[e]||(l[e].width||l[e].height?l[e].width||g[e].socketId!==me&&g[e].socketId!==fe?l[e].height||g[e].socketId!==de&&g[e].socketId!==ye||(g[e].socketId=g[e?0:1].y-l[e].top>=0?ye:de):g[e].socketId=g[e?0:1].x-l[e].left>=0?fe:me:(t=g[e?0:1].x-l[e].left,n=g[e?0:1].y-l[e].top,g[e].socketId=Math.abs(t)>=Math.abs(n)?t>=0?fe:me:n>=0?ye:de));}));}(),d.position_path!==S.position_path||d.position_lineStrokeWidth!==S.position_lineStrokeWidth||[0,1].some(function(e){return d.position_plugOverheadSE[e]!==S.position_plugOverheadSE[e]||i(g[e],S.position_socketXYSE[e])||o(r[e],S.position_socketGravitySE[e])})){switch(e.pathList.baseVal=u=[],e.pathList.animVal=null,d.position_path){case ge:u.push([a(g[0]),a(g[1])]);break;case _e:!function(){var e="number"==typeof r[0]&&r[0]>0||"number"==typeof r[1]&&r[1]>0,t=ze*(e?-1:1),n=Math.atan2(g[1].y-g[0].y,g[1].x-g[0].x),i=-n+t,o=Math.PI-n-t,l=h(g[0],g[1])/Math.sqrt(2)*De,s={x:g[0].x+Math.cos(i)*l,y:g[0].y+Math.sin(i)*l*-1},p={x:g[1].x+Math.cos(o)*l,y:g[1].y+Math.sin(o)*l*-1};u.push([a(g[0]),s,p,a(g[1])]);}();break;case ve:case Ee:!function(e){var t=[],n=[];g.forEach(function(a,i){var o,r,l,s,u,h=e[i];Array.isArray(h)?o={x:h[0],y:h[1]}:"number"==typeof h?o=a.socketId===de?{x:0,y:-h}:a.socketId===fe?{x:h,y:0}:a.socketId===ye?{x:0,y:h}:{x:-h,y:0}:(r=g[i?0:1],l=d.position_plugOverheadSE[i],s=l>0?We+(l>Be?(l-Be)*Re:0):Pe+(d.position_lineStrokeWidth>Ne?(d.position_lineStrokeWidth-Ne)*Te:0),a.socketId===de?(u=(a.y-r.y)/2,u<s&&(u=s),o={x:0,y:-u}):a.socketId===fe?(u=(r.x-a.x)/2,u<s&&(u=s),o={x:u,y:0}):a.socketId===ye?(u=(r.y-a.y)/2,u<s&&(u=s),o={x:0,y:u}):(u=(a.x-r.x)/2,u<s&&(u=s),o={x:-u,y:0})),t[i]=a.x+o.x,n[i]=a.y+o.y;}),u.push([a(g[0]),{x:t[0],y:n[0]},{x:t[1],y:n[1]},a(g[1])]);}([r[0],d.position_path===Ee?0:r[1]]);break;case xe:!function(){function e(e){return e===c?f:e===d?y:e===f?c:d}function t(e){return e===d||e===y?"x":"y"}function n(t,n,a){var i={x:t.x,y:t.y};if(a){if(a===e(t.dirId))throw new Error("Invalid dirId: "+a);i.dirId=a;}else i.dirId=t.dirId;return i.dirId===c?i.y-=n:i.dirId===d?i.x+=n:i.dirId===f?i.y+=n:i.x-=n,i}function i(e,t){return t.dirId===c?e.y<=t.y:t.dirId===d?e.x>=t.x:t.dirId===f?e.y>=t.y:e.x<=t.x}function o(e,t){return t.dirId===c||t.dirId===f?e.x===t.x:e.y===t.y}function l(e){return e[0]?{contain:0,notContain:1}:{contain:1,notContain:0}}function s(e,t,n){return Math.abs(t[n]-e[n])}function h(e,t,n){return"x"===n?e.x<t.x?d:y:e.y<t.y?f:c}var p,c=1,d=2,f=3,y=4,m=[[],[]],S=[];for(g.forEach(function(t,i){var o=a(t),l=r[i];!function(e){o.dirId=e[0],l=e[1];}(Array.isArray(l)?l[0]<0?[y,-l[0]]:l[0]>0?[d,l[0]]:l[1]<0?[c,-l[1]]:l[1]>0?[f,l[1]]:[t.socketId,0]:"number"!=typeof l?[t.socketId,Ge]:l>=0?[t.socketId,l]:[e(t.socketId),-l]),m[i].push(o),S[i]=n(o,l);});function(){var e,a,r,u,p=[i(S[1],S[0]),i(S[0],S[1])],c=[t(S[0].dirId),t(S[1].dirId)];if(c[0]===c[1]){if(p[0]&&p[1])return o(S[1],S[0])||(S[0][c[0]]===S[1][c[1]]?(m[0].push(S[0]),m[1].push(S[1])):(e=S[0][c[0]]+(S[1][c[1]]-S[0][c[0]])/2,m[0].push(n(S[0],Math.abs(e-S[0][c[0]]))),m[1].push(n(S[1],Math.abs(e-S[1][c[1]]))))),!1;p[0]!==p[1]?(a=l(p),r=s(S[a.notContain],S[a.contain],c[a.notContain]),r<Ge&&(S[a.notContain]=n(S[a.notContain],Ge-r)),m[a.notContain].push(S[a.notContain]),S[a.notContain]=n(S[a.notContain],Ge,o(S[a.contain],S[a.notContain])?"x"===c[a.notContain]?f:d:h(S[a.notContain],S[a.contain],"x"===c[a.notContain]?"y":"x"))):(r=s(S[0],S[1],"x"===c[0]?"y":"x"),m.forEach(function(e,t){var a=0===t?1:0;e.push(S[t]),S[t]=n(S[t],Ge,r>=2*Ge?h(S[t],S[a],"x"===c[t]?"y":"x"):"x"===c[t]?f:d);}));}else{if(p[0]&&p[1])return o(S[1],S[0])?m[1].push(S[1]):o(S[0],S[1])?m[0].push(S[0]):m[0].push("x"===c[0]?{x:S[1].x,y:S[0].y}:{x:S[0].x,y:S[1].y}),!1;p[0]!==p[1]?(a=l(p),m[a.notContain].push(S[a.notContain]),S[a.notContain]=n(S[a.notContain],Ge,s(S[a.notContain],S[a.contain],c[a.contain])>=Ge?h(S[a.notContain],S[a.contain],c[a.contain]):S[a.contain].dirId)):(u=[{x:S[0].x,y:S[0].y},{x:S[1].x,y:S[1].y}],m.forEach(function(e,t){var a=0===t?1:0,i=s(u[t],u[a],c[t]);i<Ge&&(S[t]=n(S[t],Ge-i)),e.push(S[t]),S[t]=n(S[t],Ge,h(S[t],S[a],c[a]));}));}return!0}(););m[1].reverse(),m[0].concat(m[1]).forEach(function(e,t){var n={x:e.x,y:e.y};t>0&&u.push([p,n]),p=n;});}();}!function(){var e=[];d.position_plugOverheadSE.forEach(function(t,n){var a,i,o,r,s,c,d,S,_,v,E,x=!n;t>0?(a=u[i=x?0:u.length-1],2===a.length?(e[i]=e[i]||h.apply(null,a),e[i]>Fe&&(e[i]-t<Fe&&(t=e[i]-Fe),o=p(a[0],a[1],(x?t:e[i]-t)/e[i]),u[i]=x?[o,a[1]]:[a[0],o],e[i]-=t)):(e[i]=e[i]||y.apply(null,a),e[i]>Fe&&(e[i]-t<Fe&&(t=e[i]-Fe),o=f(a[0],a[1],a[2],a[3],m(a[0],a[1],a[2],a[3],x?t:e[i]-t)),x?(r=a[0],s=o.toP1):(r=a[3],s=o.fromP2),c=Math.atan2(r.y-o.y,o.x-r.x),d=h(o,s),o.x=r.x+Math.cos(c)*t,o.y=r.y+Math.sin(c)*t*-1,s.x=o.x+Math.cos(c)*d,s.y=o.y+Math.sin(c)*d*-1,u[i]=x?[o,o.toP1,o.toP2,a[3]]:[a[0],o.fromP1,o.fromP2,o],e[i]=null))):t<0&&(a=u[i=x?0:u.length-1],S=g[n].socketId,_=S===me||S===fe?"x":"y",E=-l[n]["x"===_?"width":"height"],t<E&&(t=E),v=t*(S===me||S===de?-1:1),2===a.length?a[x?0:a.length-1][_]+=v:(x?[0,1]:[a.length-2,a.length-1]).forEach(function(e){a[e][_]+=v;}),e[i]=null);});}(),S.position_socketXYSE=t(g),S.position_plugOverheadSE=t(d.position_plugOverheadSE),S.position_path=d.position_path,S.position_lineStrokeWidth=d.position_lineStrokeWidth,S.position_socketGravitySE=t(r),_=!0,e.events.apl_position&&e.events.apl_position.forEach(function(t){t(e,u);});}return _}function j(e){var t,n=e.curStats,a=e.aplStats,i=e.pathList.animVal||e.pathList.baseVal,o=n.path_edge,r=!1;return i&&(o.x1=o.x2=i[0][0].x,o.y1=o.y2=i[0][0].y,n.path_pathData=t=_(i,function(e){e.x<o.x1&&(o.x1=e.x),e.y<o.y1&&(o.y1=e.y),e.x>o.x2&&(o.x2=e.x),e.y>o.y2&&(o.y2=e.y);}),x(t,a.path_pathData)&&(e.linePath.setPathData(t),a.path_pathData=t,r=!0,Ue?(I(e,e.plugsFace),I(e,e.lineMaskCaps)):Ye&&I(e,e.linePath),e.events.apl_path&&e.events.apl_path.forEach(function(n){n(e,t);}))),r}function U(e){var t,n,a=e.curStats,i=e.aplStats,o=a.path_edge,r=a.viewBox_bBox,l=i.viewBox_bBox,s=e.svg.viewBox.baseVal,u=e.svg.style,h=!1;return t=Math.max(a.line_strokeWidth/2,a.viewBox_plugBCircleSE[0]||0,a.viewBox_plugBCircleSE[1]||0),n={x1:o.x1-t,y1:o.y1-t,x2:o.x2+t,y2:o.y2+t},e.events.new_edge4viewBox&&e.events.new_edge4viewBox.forEach(function(t){t(e,n);}),r.x=a.lineMask_x=a.lineOutlineMask_x=a.maskBGRect_x=n.x1,r.y=a.lineMask_y=a.lineOutlineMask_y=a.maskBGRect_y=n.y1,r.width=n.x2-n.x1,r.height=n.y2-n.y1,["x","y","width","height"].forEach(function(t){var n;(n=r[t])!==l[t]&&(s[t]=l[t]=n,u[Ve[t]]=n+("x"===t||"y"===t?e.bodyOffset[t]:0)+"px",h=!0);}),h}function Z(e){var t,n,a=e.curStats,i=e.aplStats,o=!1;return a.plug_enabled?[0,1].forEach(function(e){a.capsMaskMarker_enabledSE[e]=a.plug_enabledSE[e]&&a.plug_colorTraSE[e]||a.plugOutline_enabledSE[e]&&a.plugOutline_colorTraSE[e];}):a.capsMaskMarker_enabledSE[0]=a.capsMaskMarker_enabledSE[1]=!1,a.capsMaskMarker_enabled=a.capsMaskMarker_enabledSE[0]||a.capsMaskMarker_enabledSE[1],a.lineMask_outlineMode=a.lineOutline_enabled,a.caps_enabled=a.capsMaskMarker_enabled||a.capsMaskAnchor_enabledSE[0]||a.capsMaskAnchor_enabledSE[1],a.lineMask_enabled=a.caps_enabled||a.lineMask_outlineMode,t=a.lineMask_enabled&&!a.lineMask_outlineMode,(t||a.lineOutline_enabled)&&["x","y"].forEach(function(t){var r="maskBGRect_"+t;N(e,i,r,n=a[r])&&(e.maskBGRect[t].baseVal.value=n,o=!0);}),N(e,i,"lineMask_enabled",n=a.lineMask_enabled)&&(e.lineFace.style.mask=n?"url(#"+e.lineMaskId+")":"none",o=!0,qe&&I(e,e.lineMask)),a.lineMask_enabled&&(N(e,i,"lineMask_outlineMode",n=a.lineMask_outlineMode)&&(n?(e.lineMaskBG.style.display="none",e.lineMaskShape.style.display="inline"):(e.lineMaskBG.style.display="inline",e.lineMaskShape.style.display="none"),o=!0),["x","y"].forEach(function(t){var r="lineMask_"+t;N(e,i,r,n=a[r])&&(e.lineMask[t].baseVal.value=n,o=!0);}),N(e,i,"caps_enabled",n=a.caps_enabled)&&(e.lineMaskCaps.style.display=e.lineOutlineMaskCaps.style.display=n?"inline":"none",o=!0,qe&&I(e,e.capsMaskLine)),a.caps_enabled&&([0,1].forEach(function(t){var r;N(e,i.capsMaskAnchor_enabledSE,t,n=a.capsMaskAnchor_enabledSE[t])&&(e.capsMaskAnchorSE[t].style.display=n?"inline":"none",o=!0,qe&&I(e,e.lineMask)),a.capsMaskAnchor_enabledSE[t]&&(x(r=a.capsMaskAnchor_pathDataSE[t],i.capsMaskAnchor_pathDataSE[t])&&(e.capsMaskAnchorSE[t].setPathData(r),i.capsMaskAnchor_pathDataSE[t]=r,o=!0),N(e,i.capsMaskAnchor_strokeWidthSE,t,n=a.capsMaskAnchor_strokeWidthSE[t])&&(e.capsMaskAnchorSE[t].style.strokeWidth=n+"px",o=!0));}),N(e,i,"capsMaskMarker_enabled",n=a.capsMaskMarker_enabled)&&(e.capsMaskLine.style.display=n?"inline":"none",o=!0),a.capsMaskMarker_enabled&&[0,1].forEach(function(t){var r=a.capsMaskMarker_plugSE[t],l=r!==ke?Me[Ce[r]]:null,s=A(t,l);N(e,i.capsMaskMarker_enabledSE,t,n=a.capsMaskMarker_enabledSE[t])&&(e.capsMaskLine.style[s.prop]=n?"url(#"+e.lineMaskMarkerIdSE[t]+")":"none",o=!0),a.capsMaskMarker_enabledSE[t]&&(N(e,i.capsMaskMarker_plugSE,t,r)&&(e.capsMaskMarkerShapeSE[t].href.baseVal="#"+l.elmId,L(e,e.capsMaskMarkerSE[t],s.orient,l.bBox,e.svg,e.capsMaskMarkerShapeSE[t],e.capsMaskLine),o=!0,Ye&&(I(e,e.capsMaskLine),I(e,e.lineFace))),["markerWidth","markerHeight"].forEach(function(r){var l="capsMaskMarker_"+r+"SE";N(e,i[l],t,n=a[l][t])&&(e.capsMaskMarkerSE[t][r].baseVal.value=n,o=!0);}));}))),a.lineOutline_enabled&&["x","y"].forEach(function(t){var r="lineOutlineMask_"+t;N(e,i,r,n=a[r])&&(e.lineOutlineMask[t].baseVal.value=n,o=!0);}),o}function Y(e,t){t!==e.isShown&&(!!t!=!!e.isShown&&(e.svg.style.visibility=t?"":"hidden"),e.isShown=t,e.events&&e.events.svgShow&&e.events.svgShow.forEach(function(n){n(e,t);}));}function X(n){var a,i=n.curStats,o=n.aplStats;Object.keys(ne).forEach(function(r){var l=ne[r],s=r+"_enabled",u=r+"_options",h=i[u];N(n,o,s,a=i[s])?(a&&(o[u]=t(h)),l[a?"init":"remove"](n)):a&&e(h,o[u])&&(l.remove(n),o[s]=!0,o[u]=t(h),l.init(n));});}function q(e,t){var n={};t.line&&(n.line=R(e)),(t.plug||n.line)&&(n.plug=F(e)),(t.lineOutline||n.line)&&(n.lineOutline=G(e)),(t.plugOutline||n.line||n.plug||n.lineOutline)&&(n.plugOutline=D(e)),(t.faces||n.line||n.plug||n.lineOutline||n.plugOutline)&&(n.faces=z(e)),(t.position||n.line||n.plug)&&(n.position=H(e)),
(t.path||n.position)&&(n.path=j(e)),n.viewBox=U(e),n.mask=Z(e),t.effect&&X(e),(Ze||qe)&&n.line&&!n.path&&I(e,e.lineShape),Ze&&n.plug&&!n.line&&I(e,e.plugsFace),C(e);}function Q(e,n){return{duration:$e(e.duration)&&e.duration>0?e.duration:n.duration,timing:et.validTiming(e.timing)?e.timing:t(n.timing)}}function K(t,n,a,i){function o(){["show_on","show_effect","show_animOptions"].forEach(function(e){s[e]=l[e];});}var r,l=t.curStats,s=t.aplStats,u={};l.show_on=n,a&&ae[a]&&(l.show_effect=a,l.show_animOptions=Q(Je(i)?i:{},ae[a].defaultAnimOptions)),u.show_on=l.show_on!==s.show_on,u.show_effect=l.show_effect!==s.show_effect,u.show_animOptions=e(l.show_animOptions,s.show_animOptions),u.show_effect||u.show_animOptions?l.show_inAnim?(r=u.show_effect?ae[s.show_effect].stop(t,!0,!0):ae[s.show_effect].stop(t),o(),ae[s.show_effect].init(t,r)):u.show_on&&(s.show_effect&&u.show_effect&&ae[s.show_effect].stop(t,!0,!0),o(),ae[s.show_effect].init(t)):u.show_on&&(o(),ae[s.show_effect].start(t));}function J(e,t,n){var a={props:e,optionName:n};return!(!(e.attachments.indexOf(t)<0)||t.conf.bind&&!t.conf.bind(t,a))&&(e.attachments.push(t),t.boundTargets.push(a),!0)}function $(e,t,n){var a=e.attachments.indexOf(t);a>-1&&e.attachments.splice(a,1),t.boundTargets.some(function(n,i){return n.props===e&&(t.conf.unbind&&t.conf.unbind(t,n),a=i,!0)})&&(t.boundTargets.splice(a,1),n||O(function(){t.boundTargets.length||le(t);}));}function ee(t,n){function a(e,t,n,a,i){var o={};return n?null!=a?(o.container=e[n],o.key=a):(o.container=e,o.key=n):(o.container=e,o.key=t),o.default=i,o.acceptsAuto=null==o.default,o}function o(e,t,n,i,o,r,l){var s,u,h,p=a(e,n,o,r,l);return null!=t[n]&&(u=(t[n]+"").toLowerCase())&&(p.acceptsAuto&&u===Ae||(h=i[u]))&&h!==p.container[p.key]&&(p.container[p.key]=h,s=!0),null!=p.container[p.key]||p.acceptsAuto||(p.container[p.key]=p.default,s=!0),s}function r(e,t,n,i,o,r,l,s,u){var h,p,c=a(e,n,o,r,l);if(!i){if(null==c.default)throw new Error("Invalid `type`: "+n);i=typeof c.default;}return null!=t[n]&&(c.acceptsAuto&&(t[n]+"").toLowerCase()===Ae||function(e,t){return"number"===t?$e(e):typeof e===t}(p=t[n],i)&&(p=u&&"string"===i&&p?p.trim():p,!0)&&(!s||s(p)))&&p!==c.container[c.key]&&(c.container[c.key]=p,h=!0),null!=c.container[c.key]||c.acceptsAuto||(c.container[c.key]=c.default,h=!0),h}var l,s,h=t.options,p={};if(n=n||{},["start","end"].forEach(function(e,a){var o=n[e],r=!1;if(o&&(i(o)||(r=re(o,"anchor")))&&o!==h.anchorSE[a]){if(!1!==t.optionIsAttach.anchorSE[a]&&$(t,ut[h.anchorSE[a]._id]),r&&!J(t,ut[o._id],e))throw new Error("Can't bind attachment");h.anchorSE[a]=o,t.optionIsAttach.anchorSE[a]=r,s=p.position=!0;}}),!h.anchorSE[0]||!h.anchorSE[1]||h.anchorSE[0]===h.anchorSE[1])throw new Error("`start` and `end` are required.");s&&(l=u(!1!==t.optionIsAttach.anchorSE[0]?ut[h.anchorSE[0]._id].element:h.anchorSE[0],!1!==t.optionIsAttach.anchorSE[1]?ut[h.anchorSE[1]._id].element:h.anchorSE[1]))!==t.baseWindow&&(B(t,l),p.line=p.plug=p.lineOutline=p.plugOutline=p.faces=p.effect=!0),p.position=o(h,n,"path",be,null,null,Ke.path)||p.position,p.position=o(h,n,"startSocket",Se,"socketSE",0)||p.position,p.position=o(h,n,"endSocket",Se,"socketSE",1)||p.position,[n.startSocketGravity,n.endSocketGravity].forEach(function(e,t){var n=!1;null!=e&&(Array.isArray(e)?$e(e[0])&&$e(e[1])&&(n=[e[0],e[1]],Array.isArray(h.socketGravitySE[t])&&function(e,t){return e.length===t.length&&e.every(function(e,n){return e===t[n]})}(n,h.socketGravitySE[t])&&(n=!1)):((e+"").toLowerCase()===Ae?n=null:$e(e)&&e>=0&&(n=e),n===h.socketGravitySE[t]&&(n=!1)),!1!==n&&(h.socketGravitySE[t]=n,p.position=!0));}),p.line=r(h,n,"color",null,"lineColor",null,Ke.lineColor,null,!0)||p.line,p.line=r(h,n,"size",null,"lineSize",null,Ke.lineSize,function(e){return e>0})||p.line,["startPlug","endPlug"].forEach(function(e,t){p.plug=o(h,n,e,Ie,"plugSE",t,Ke.plugSE[t])||p.plug,p.plug=r(h,n,e+"Color","string","plugColorSE",t,null,null,!0)||p.plug,p.plug=r(h,n,e+"Size",null,"plugSizeSE",t,Ke.plugSizeSE[t],function(e){return e>0})||p.plug;}),p.lineOutline=r(h,n,"outline",null,"lineOutlineEnabled",null,Ke.lineOutlineEnabled)||p.lineOutline,p.lineOutline=r(h,n,"outlineColor",null,"lineOutlineColor",null,Ke.lineOutlineColor,null,!0)||p.lineOutline,p.lineOutline=r(h,n,"outlineSize",null,"lineOutlineSize",null,Ke.lineOutlineSize,function(e){return e>0&&e<=.48})||p.lineOutline,["startPlugOutline","endPlugOutline"].forEach(function(e,t){p.plugOutline=r(h,n,e,null,"plugOutlineEnabledSE",t,Ke.plugOutlineEnabledSE[t])||p.plugOutline,p.plugOutline=r(h,n,e+"Color","string","plugOutlineColorSE",t,null,null,!0)||p.plugOutline,p.plugOutline=r(h,n,e+"Size",null,"plugOutlineSizeSE",t,Ke.plugOutlineSizeSE[t],function(e){return e>=1})||p.plugOutline;}),["startLabel","endLabel","middleLabel"].forEach(function(e,a){var i,o,r,l=n[e],s=h.labelSEM[a]&&!t.optionIsAttach.labelSEM[a]?ut[h.labelSEM[a]._id].text:h.labelSEM[a],u=!1;if((i="string"==typeof l)&&(l=l.trim()),(i||l&&(u=re(l,"label")))&&l!==s){if(h.labelSEM[a]&&($(t,ut[h.labelSEM[a]._id]),h.labelSEM[a]=""),l){if(u?(r=l,o=ut[r._id],o.boundTargets.slice().forEach(function(e){o.conf.removeOption(o,e);})):r=new oe(ie.captionLabel,[l]),!J(t,ut[r._id],e))throw new Error("Can't bind attachment");h.labelSEM[a]=r;}t.optionIsAttach.labelSEM[a]=u;}}),Object.keys(ne).forEach(function(a){function i(e){var t={};return c.optionsConf.forEach(function(n){var a=n[0],i=n[3];null==n[4]||t[i]||(t[i]=[]),("function"==typeof a?a:"id"===a?o:r).apply(null,[t,e].concat(n.slice(1)));}),t}function l(e){var n,i=a+"_animOptions";return e.hasOwnProperty("animation")?Je(e.animation)?n=t.curStats[i]=Q(e.animation,c.defaultAnimOptions):(n=!!e.animation,t.curStats[i]=n?Q({},c.defaultAnimOptions):null):(n=!!c.defaultEnabled,t.curStats[i]=n?Q({},c.defaultAnimOptions):null),n}var s,u,c=ne[a],d=a+"_enabled",f=a+"_options";n.hasOwnProperty(a)&&(s=n[a],Je(s)?(t.curStats[d]=!0,u=t.curStats[f]=i(s),c.anim&&(t.curStats[f].animation=l(s))):(u=t.curStats[d]=!!s)&&(t.curStats[f]=i({}),c.anim&&(t.curStats[f].animation=l({}))),e(u,h[a])&&(h[a]=u,p.effect=!0));}),q(t,p);}function te(e,n,a){var i={options:{anchorSE:[],socketSE:[],socketGravitySE:[],plugSE:[],plugColorSE:[],plugSizeSE:[],plugOutlineEnabledSE:[],plugOutlineColorSE:[],plugOutlineSizeSE:[],labelSEM:["","",""]},optionIsAttach:{anchorSE:[!1,!1],labelSEM:[!1,!1,!1]},curStats:{},aplStats:{},attachments:[],events:{},reflowTargets:[]};P(i.curStats,at),P(i.aplStats,at),Object.keys(ne).forEach(function(e){var t=ne[e].stats;P(i.curStats,t),P(i.aplStats,t),i.options[e]=!1;}),P(i.curStats,it),P(i.aplStats,it),i.curStats.show_effect=ot,i.curStats.show_animOptions=t(ae[ot].defaultAnimOptions),Object.defineProperty(this,"_id",{value:++st}),i._id=this._id,lt[this._id]=i,1===arguments.length&&(a=e,e=null),a=a||{},(e||n)&&(a=t(a),e&&(a.start=e),n&&(a.end=n)),i.isShown=i.aplStats.show_on=!a.hide,this.setOptions(a);}var ne,ae,ie,oe,re,le,se,ue,he,pe,ce="leader-line",de=1,fe=2,ye=3,me=4,Se={top:de,right:fe,bottom:ye,left:me},ge=1,_e=2,ve=3,Ee=4,xe=5,be={straight:ge,arc:_e,fluid:ve,magnet:Ee,grid:xe},ke="behind",we=ce+"-defs",Oe='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="leader-line-defs"><style><![CDATA[.leader-line{position:absolute;overflow:visible!important;pointer-events:none!important;font-size:16px}#leader-line-defs{width:0;height:0;position:absolute;left:0;top:0}.leader-line-line-path{fill:none}.leader-line-mask-bg-rect{fill:#fff}.leader-line-caps-mask-anchor,.leader-line-caps-mask-marker-shape{fill:#000}.leader-line-caps-mask-anchor{stroke:#000}.leader-line-caps-mask-line,.leader-line-plugs-face{stroke:transparent}.leader-line-line-mask-shape{stroke:#fff}.leader-line-line-outline-mask-shape{stroke:#000}.leader-line-plug-mask-shape{fill:#fff;stroke:#000}.leader-line-plug-outline-mask-shape{fill:#000;stroke:#fff}.leader-line-areaAnchor{position:absolute;overflow:visible!important}]]></style><defs><circle id="leader-line-disc" cx="0" cy="0" r="5"/><rect id="leader-line-square" x="-5" y="-5" width="10" height="10"/><polygon id="leader-line-arrow1" points="-8,-8 8,0 -8,8 -5,0"/><polygon id="leader-line-arrow2" points="-4,-8 4,0 -4,8 -7,5 -2,0 -7,-5"/><polygon id="leader-line-arrow3" points="-4,-5 8,0 -4,5"/><g id="leader-line-hand"><path style="fill: #fcfcfc" d="M9.19 11.14h4.75c1.38 0 2.49-1.11 2.49-2.49 0-.51-.15-.98-.41-1.37h1.3c1.38 0 2.49-1.11 2.49-2.49s-1.11-2.53-2.49-2.53h1.02c1.38 0 2.49-1.11 2.49-2.49s-1.11-2.49-2.49-2.49h14.96c1.37 0 2.49-1.11 2.49-2.49s-1.11-2.49-2.49-2.49H16.58C16-9.86 14.28-11.14 9.7-11.14c-4.79 0-6.55 3.42-7.87 4.73H-2.14v13.23h3.68C3.29 9.97 5.47 11.14 9.19 11.14L9.19 11.14Z"/><path style="fill: black" d="M13.95 12c1.85 0 3.35-1.5 3.35-3.35 0-.17-.02-.34-.04-.51h.07c1.85 0 3.35-1.5 3.35-3.35 0-.79-.27-1.51-.72-2.08 1.03-.57 1.74-1.67 1.74-2.93 0-.59-.16-1.15-.43-1.63h12.04c1.85 0 3.35-1.5 3.35-3.35 0-1.85-1.5-3.35-3.35-3.35H17.2C16.26-10.93 13.91-12 9.7-12 5.36-12 3.22-9.4 1.94-7.84c0 0-.29.33-.5.57-.63 0-3.58 0-3.58 0C-2.61-7.27-3-6.88-3-6.41v13.23c0 .47.39.86.86.86 0 0 2.48 0 3.2 0C2.9 10.73 5.29 12 9.19 12L13.95 12ZM9.19 10.28c-3.46 0-5.33-1.05-6.9-3.87-.15-.27-.44-.44-.75-.44 0 0-1.81 0-2.82 0V-5.55c1.06 0 3.11 0 3.11 0 .25 0 .44-.06.61-.25l.83-.95c1.23-1.49 2.91-3.53 6.43-3.53 3.45 0 4.9.74 5.57 1.72h-4.3c-.48 0-.86.38-.86.86s.39.86.86.86h22.34c.9 0 1.63.73 1.63 1.63 0 .9-.73 1.63-1.63 1.63H15.83c-.48 0-.86.38-.86.86 0 .47.39.86.86.86h2.52c.9 0 1.63.73 1.63 1.63s-.73 1.63-1.63 1.63h-3.12c-.48 0-.86.38-.86.86 0 .47.39.86.86.86h2.11c.88 0 1.63.76 1.63 1.67 0 .9-.73 1.63-1.63 1.63h-3.2c-.48 0-.86.39-.86.86 0 .47.39.86.86.86h1.36c.05.16.09.34.09.51 0 .9-.73 1.63-1.63 1.63C13.95 10.28 9.19 10.28 9.19 10.28Z"/></g><g id="leader-line-crosshair"><path d="M0-78.97c-43.54 0-78.97 35.43-78.97 78.97 0 43.54 35.43 78.97 78.97 78.97s78.97-35.43 78.97-78.97C78.97-43.54 43.55-78.97 0-78.97ZM76.51-1.21h-9.91v-9.11h-2.43v9.11h-11.45c-.64-28.12-23.38-50.86-51.5-51.5V-64.17h9.11V-66.6h-9.11v-9.91C42.46-75.86 75.86-42.45 76.51-1.21ZM-1.21-30.76h-9.11v2.43h9.11V-4.2c-1.44.42-2.57 1.54-2.98 2.98H-28.33v-9.11h-2.43v9.11H-50.29C-49.65-28-27.99-49.65-1.21-50.29V-30.76ZM-30.76 1.21v9.11h2.43v-9.11H-4.2c.42 1.44 1.54 2.57 2.98 2.98v24.13h-9.11v2.43h9.11v19.53C-27.99 49.65-49.65 28-50.29 1.21H-30.76ZM1.22 30.75h9.11v-2.43h-9.11V4.2c1.44-.42 2.56-1.54 2.98-2.98h24.13v9.11h2.43v-9.11h19.53C49.65 28 28 49.65 1.22 50.29V30.75ZM30.76-1.21v-9.11h-2.43v9.11H4.2c-.42-1.44-1.54-2.56-2.98-2.98V-28.33h9.11v-2.43h-9.11V-50.29C28-49.65 49.65-28 50.29-1.21H30.76ZM-1.21-76.51v9.91h-9.11v2.43h9.11v11.45c-28.12.64-50.86 23.38-51.5 51.5H-64.17v-9.11H-66.6v9.11h-9.91C-75.86-42.45-42.45-75.86-1.21-76.51ZM-76.51 1.21h9.91v9.11h2.43v-9.11h11.45c.64 28.12 23.38 50.86 51.5 51.5v11.45h-9.11v2.43h9.11v9.91C-42.45 75.86-75.86 42.45-76.51 1.21ZM1.22 76.51v-9.91h9.11v-2.43h-9.11v-11.45c28.12-.64 50.86-23.38 51.5-51.5h11.45v9.11h2.43v-9.11h9.91C75.86 42.45 42.45 75.86 1.22 76.51Z"/><path d="M0 83.58-7.1 96 7.1 96Z"/><path d="M0-83.58 7.1-96-7.1-96"/><path d="M83.58 0 96 7.1 96-7.1Z"/><path d="M-83.58 0-96-7.1-96 7.1Z"/></g></defs></svg>',Me={disc:{elmId:"leader-line-disc",noRotate:!0,bBox:{left:-5,top:-5,width:10,height:10,right:5,bottom:5},widthR:2.5,heightR:2.5,bCircle:5,sideLen:5,backLen:5,overhead:0,outlineBase:1,outlineMax:4},square:{elmId:"leader-line-square",noRotate:!0,bBox:{left:-5,top:-5,width:10,height:10,right:5,bottom:5},widthR:2.5,heightR:2.5,bCircle:5,sideLen:5,backLen:5,overhead:0,outlineBase:1,outlineMax:4},arrow1:{elmId:"leader-line-arrow1",bBox:{left:-8,top:-8,width:16,height:16,right:8,bottom:8},widthR:4,heightR:4,bCircle:8,sideLen:8,backLen:8,overhead:8,outlineBase:2,outlineMax:1.5},arrow2:{elmId:"leader-line-arrow2",bBox:{left:-7,top:-8,width:11,height:16,right:4,bottom:8},widthR:2.75,heightR:4,bCircle:8,sideLen:8,backLen:7,overhead:4,outlineBase:1,outlineMax:1.75},arrow3:{elmId:"leader-line-arrow3",bBox:{left:-4,top:-5,width:12,height:10,right:8,bottom:5},widthR:3,heightR:2.5,bCircle:8,sideLen:5,backLen:4,overhead:8,outlineBase:1,outlineMax:2.5},hand:{elmId:"leader-line-hand",bBox:{left:-3,top:-12,width:40,height:24,right:37,bottom:12},widthR:10,heightR:6,bCircle:37,sideLen:12,backLen:3,overhead:37},crosshair:{elmId:"leader-line-crosshair",noRotate:!0,bBox:{left:-96,top:-96,width:192,height:192,right:96,bottom:96},widthR:48,heightR:48,bCircle:96,sideLen:96,backLen:96,overhead:0}},Ie={behind:ke,disc:"disc",square:"square",arrow1:"arrow1",arrow2:"arrow2",arrow3:"arrow3",hand:"hand",crosshair:"crosshair"},Ce={disc:"disc",square:"square",arrow1:"arrow1",arrow2:"arrow2",arrow3:"arrow3",hand:"hand",crosshair:"crosshair"},Le=[de,fe,ye,me],Ae="auto",Ve={x:"left",y:"top",width:"width",height:"height"},Pe=80,Ne=4,Te=5,We=120,Be=8,Re=3.75,Fe=10,Ge=30,De=.5522847,ze=.25*Math.PI,He=/^\s*(\-?[\d\.]+)\s*(\%)?\s*$/,je="http://www.w3.org/2000/svg",Ue=!!document.uniqueID,Ze=!(!window.chrome||!window.chrome.webstore),Ye="MozAppearance"in document.documentElement.style,Xe="-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style&&!window.navigator.msPointerEnabled,qe=!window.chrome&&"WebkitAppearance"in document.documentElement.style,Qe=Ue||Xe?.2:.1,Ke={path:ve,lineColor:"coral",lineSize:4,plugSE:[ke,"arrow1"],plugSizeSE:[1,1],lineOutlineEnabled:!1,lineOutlineColor:"indianred",lineOutlineSize:.25,plugOutlineEnabledSE:[!1,!1],plugOutlineSizeSE:[1,1]},Je=function(){var e={}.toString,t={}.hasOwnProperty.toString,n=t.call(Object);return function(a){var i,o;return a&&"[object Object]"===e.call(a)&&(!(i=Object.getPrototypeOf(a))||(o=i.hasOwnProperty("constructor")&&i.constructor)&&"function"==typeof o&&t.call(o)===n)}}(),$e=Number.isFinite||function(e){return"number"==typeof e&&window.isFinite(e)},et=function(){function e(){var t=Date.now(),a=!1;n&&(r.call(window,n),n=null),s.forEach(function(e){var n,o,r;if(e.framesStart){if((n=t-e.framesStart)>=e.duration&&e.count&&e.loopsLeft<=1)return r=e.frames[e.lastFrame=e.reverse?0:e.frames.length-1],e.frameCallback(r.value,!0,r.timeRatio,r.outputRatio),void(e.framesStart=null);if(n>e.duration){if(o=Math.floor(n/e.duration),e.count){if(o>=e.loopsLeft)return r=e.frames[e.lastFrame=e.reverse?0:e.frames.length-1],e.frameCallback(r.value,!0,r.timeRatio,r.outputRatio),void(e.framesStart=null);e.loopsLeft-=o;}e.framesStart+=e.duration*o,n=t-e.framesStart;}e.reverse&&(n=e.duration-n),r=e.frames[e.lastFrame=Math.round(n/i)],!1!==e.frameCallback(r.value,!1,r.timeRatio,r.outputRatio)?a=!0:e.framesStart=null;}}),a&&(n=o.call(window,e));}function t(t,n){t.framesStart=Date.now(),null!=n&&(t.framesStart-=t.duration*(t.reverse?1-n:n)),t.loopsLeft=t.count,t.lastFrame=null,e();}var n,a={ease:[.25,.1,.25,1],linear:[0,0,1,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]},i=1e3/60/2,o=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(e){setTimeout(e,i);},r=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame||function(e){clearTimeout(e);},l=Number.isFinite||function(e){return"number"==typeof e&&window.isFinite(e)},s=[],u=0;return{add:function(e,n,o,r,l,h,p){function c(t,n){return{value:e(n),timeRatio:t,outputRatio:n}}var d,f,y,m,S,g,_,v=++u;if("string"==typeof l&&(l=a[l]),e=e||function(){},o<i)f=[c(0,0),c(1,1)];else{if(y=i/o,f=[c(0,0)],0===l[0]&&0===l[1]&&1===l[2]&&1===l[3])for(S=y;S<=1;S+=y)f.push(c(S,S));else for(m=y/10,S=y,g=m;g<=1;g+=m)_=function(e){var t=e*e,n=t*e,a=1-e,i=a*a,o=3*i*e,r=3*a*t;return{x:o*l[0]+r*l[2]+n,y:o*l[1]+r*l[3]+n}}(g),_.x>=S&&(f.push(c(_.x,_.y)),S+=y);f.push(c(1,1));}return d={animId:v,frameCallback:n,duration:o,count:r,frames:f,reverse:!!h},s.push(d),!1!==p&&t(d,p),v},remove:function(e){var t;s.some(function(n,a){return n.animId===e&&(t=a,n.framesStart=null,!0)})&&s.splice(t,1);},start:function(e,n,a){s.some(function(i){return i.animId===e&&(i.reverse=!!n,t(i,a),!0)});},stop:function(e,t){var n;return s.some(function(a){return a.animId===e&&(t?null!=a.lastFrame&&(n=a.frames[a.lastFrame].timeRatio):(n=(Date.now()-a.framesStart)/a.duration,a.reverse&&(n=1-n),n<0?n=0:n>1&&(n=1)),a.framesStart=null,!0)}),n},validTiming:function(e){return"string"==typeof e?a[e]:Array.isArray(e)&&[0,1,2,3].every(function(t){return l(e[t])&&e[t]>=0&&e[t]<=1})?[e[0],e[1],e[2],e[3]]:null}}}(),tt=function(e){e.SVGPathElement.prototype.getPathData&&e.SVGPathElement.prototype.setPathData||function(){var t={Z:"Z",M:"M",L:"L",C:"C",Q:"Q",A:"A",H:"H",V:"V",S:"S",T:"T",z:"Z",m:"m",l:"l",c:"c",q:"q",a:"a",h:"h",v:"v",s:"s",t:"t"},n=function(e){this._string=e,this._currentIndex=0,this._endIndex=this._string.length,this._prevCommand=null,this._skipOptionalSpaces();},a=-1!==e.navigator.userAgent.indexOf("MSIE ");n.prototype={parseSegment:function(){var e=this._string[this._currentIndex],n=t[e]?t[e]:null;if(null===n){if(null===this._prevCommand)return null;if(null===(n=("+"===e||"-"===e||"."===e||e>="0"&&e<="9")&&"Z"!==this._prevCommand?"M"===this._prevCommand?"L":"m"===this._prevCommand?"l":this._prevCommand:null))return null}else this._currentIndex+=1;this._prevCommand=n;var a=null,i=n.toUpperCase();return"H"===i||"V"===i?a=[this._parseNumber()]:"M"===i||"L"===i||"T"===i?a=[this._parseNumber(),this._parseNumber()]:"S"===i||"Q"===i?a=[this._parseNumber(),this._parseNumber(),this._parseNumber(),this._parseNumber()]:"C"===i?a=[this._parseNumber(),this._parseNumber(),this._parseNumber(),this._parseNumber(),this._parseNumber(),this._parseNumber()]:"A"===i?a=[this._parseNumber(),this._parseNumber(),this._parseNumber(),this._parseArcFlag(),this._parseArcFlag(),this._parseNumber(),this._parseNumber()]:"Z"===i&&(this._skipOptionalSpaces(),a=[]),null===a||a.indexOf(null)>=0?null:{type:n,values:a}},hasMoreData:function(){return this._currentIndex<this._endIndex},peekSegmentType:function(){var e=this._string[this._currentIndex];return t[e]?t[e]:null},initialCommandIsMoveTo:function(){if(!this.hasMoreData())return!0;var e=this.peekSegmentType();return"M"===e||"m"===e},_isCurrentSpace:function(){var e=this._string[this._currentIndex];return e<=" "&&(" "===e||"\n"===e||"\t"===e||"\r"===e||"\f"===e)},_skipOptionalSpaces:function(){for(;this._currentIndex<this._endIndex&&this._isCurrentSpace();)this._currentIndex+=1;return this._currentIndex<this._endIndex},_skipOptionalSpacesOrDelimiter:function(){return!(this._currentIndex<this._endIndex&&!this._isCurrentSpace()&&","!==this._string[this._currentIndex])&&(this._skipOptionalSpaces()&&this._currentIndex<this._endIndex&&","===this._string[this._currentIndex]&&(this._currentIndex+=1,this._skipOptionalSpaces()),this._currentIndex<this._endIndex)},_parseNumber:function(){var e=0,t=0,n=1,a=0,i=1,o=1,r=this._currentIndex;if(this._skipOptionalSpaces(),this._currentIndex<this._endIndex&&"+"===this._string[this._currentIndex]?this._currentIndex+=1:this._currentIndex<this._endIndex&&"-"===this._string[this._currentIndex]&&(this._currentIndex+=1,i=-1),this._currentIndex===this._endIndex||(this._string[this._currentIndex]<"0"||this._string[this._currentIndex]>"9")&&"."!==this._string[this._currentIndex])return null;for(var l=this._currentIndex;this._currentIndex<this._endIndex&&this._string[this._currentIndex]>="0"&&this._string[this._currentIndex]<="9";)this._currentIndex+=1;if(this._currentIndex!==l)for(var s=this._currentIndex-1,u=1;s>=l;)t+=u*(this._string[s]-"0"),s-=1,u*=10;if(this._currentIndex<this._endIndex&&"."===this._string[this._currentIndex]){if(this._currentIndex+=1,this._currentIndex>=this._endIndex||this._string[this._currentIndex]<"0"||this._string[this._currentIndex]>"9")return null;for(;this._currentIndex<this._endIndex&&this._string[this._currentIndex]>="0"&&this._string[this._currentIndex]<="9";)n*=10,a+=(this._string.charAt(this._currentIndex)-"0")/n,this._currentIndex+=1;}if(this._currentIndex!==r&&this._currentIndex+1<this._endIndex&&("e"===this._string[this._currentIndex]||"E"===this._string[this._currentIndex])&&"x"!==this._string[this._currentIndex+1]&&"m"!==this._string[this._currentIndex+1]){if(this._currentIndex+=1,"+"===this._string[this._currentIndex]?this._currentIndex+=1:"-"===this._string[this._currentIndex]&&(this._currentIndex+=1,o=-1),this._currentIndex>=this._endIndex||this._string[this._currentIndex]<"0"||this._string[this._currentIndex]>"9")return null;for(;this._currentIndex<this._endIndex&&this._string[this._currentIndex]>="0"&&this._string[this._currentIndex]<="9";)e*=10,e+=this._string[this._currentIndex]-"0",this._currentIndex+=1;}var h=t+a;return h*=i,e&&(h*=Math.pow(10,o*e)),r===this._currentIndex?null:(this._skipOptionalSpacesOrDelimiter(),h)},_parseArcFlag:function(){if(this._currentIndex>=this._endIndex)return null;var e=null,t=this._string[this._currentIndex];if(this._currentIndex+=1,"0"===t)e=0;else{if("1"!==t)return null;e=1;}return this._skipOptionalSpacesOrDelimiter(),e}};var i=function(e){if(!e||0===e.length)return[];var t=new n(e),a=[];if(t.initialCommandIsMoveTo())for(;t.hasMoreData();){var i=t.parseSegment();if(null===i)break;a.push(i);}return a},o=e.SVGPathElement.prototype.setAttribute,r=e.SVGPathElement.prototype.removeAttribute,l=e.Symbol?e.Symbol():"__cachedPathData",s=e.Symbol?e.Symbol():"__cachedNormalizedPathData",u=function(e,t,n,a,i,o,r,l,s,h){var p,c,d,f,y=function(e,t,n){return{x:e*Math.cos(n)-t*Math.sin(n),y:e*Math.sin(n)+t*Math.cos(n)}},m=function(e){return Math.PI*e/180}(r),S=[];if(h)p=h[0],c=h[1],d=h[2],f=h[3];else{var g=y(e,t,-m);e=g.x,t=g.y;var _=y(n,a,-m);n=_.x,a=_.y;var v=(e-n)/2,E=(t-a)/2,x=v*v/(i*i)+E*E/(o*o);x>1&&(x=Math.sqrt(x),i*=x,o*=x);var b;b=l===s?-1:1;var k=i*i,w=o*o,O=k*w-k*E*E-w*v*v,M=k*E*E+w*v*v,I=b*Math.sqrt(Math.abs(O/M));d=I*i*E/o+(e+n)/2,f=I*-o*v/i+(t+a)/2,p=Math.asin(parseFloat(((t-f)/o).toFixed(9))),c=Math.asin(parseFloat(((a-f)/o).toFixed(9))),e<d&&(p=Math.PI-p),n<d&&(c=Math.PI-c),p<0&&(p=2*Math.PI+p),c<0&&(c=2*Math.PI+c),s&&p>c&&(p-=2*Math.PI),!s&&c>p&&(c-=2*Math.PI);}var C=c-p;if(Math.abs(C)>120*Math.PI/180){var L=c,A=n,V=a;c=s&&c>p?p+120*Math.PI/180*1:p+120*Math.PI/180*-1,n=d+i*Math.cos(c),a=f+o*Math.sin(c),S=u(n,a,A,V,i,o,r,0,s,[c,L,d,f]);}C=c-p;var P=Math.cos(p),N=Math.sin(p),T=Math.cos(c),W=Math.sin(c),B=Math.tan(C/4),R=4/3*i*B,F=4/3*o*B,G=[e,t],D=[e+R*N,t-F*P],z=[n+R*W,a-F*T],H=[n,a];if(D[0]=2*G[0]-D[0],D[1]=2*G[1]-D[1],h)return[D,z,H].concat(S);S=[D,z,H].concat(S).join().split(",");var j=[],U=[];return S.forEach(function(e,t){t%2?U.push(y(S[t-1],S[t],m).y):U.push(y(S[t],S[t+1],m).x),6===U.length&&(j.push(U),U=[]);}),j},h=function(e){return e.map(function(e){return{type:e.type,values:Array.prototype.slice.call(e.values)}})},p=function(e){var t=[],n=null,a=null,i=null,o=null;return e.forEach(function(e){var r=e.type;if("M"===r){var l=e.values[0],s=e.values[1];t.push({type:"M",values:[l,s]}),i=l,o=s,n=l,a=s;}else if("m"===r){var l=n+e.values[0],s=a+e.values[1];t.push({type:"M",values:[l,s]}),i=l,o=s,n=l,a=s;}else if("L"===r){var l=e.values[0],s=e.values[1];t.push({type:"L",values:[l,s]}),n=l,a=s;}else if("l"===r){var l=n+e.values[0],s=a+e.values[1];t.push({type:"L",values:[l,s]}),n=l,a=s;}else if("C"===r){var u=e.values[0],h=e.values[1],p=e.values[2],c=e.values[3],l=e.values[4],s=e.values[5];t.push({type:"C",values:[u,h,p,c,l,s]}),n=l,a=s;}else if("c"===r){var u=n+e.values[0],h=a+e.values[1],p=n+e.values[2],c=a+e.values[3],l=n+e.values[4],s=a+e.values[5];t.push({type:"C",values:[u,h,p,c,l,s]}),n=l,a=s;}else if("Q"===r){var u=e.values[0],h=e.values[1],l=e.values[2],s=e.values[3];t.push({type:"Q",values:[u,h,l,s]}),n=l,a=s;}else if("q"===r){var u=n+e.values[0],h=a+e.values[1],l=n+e.values[2],s=a+e.values[3];t.push({type:"Q",values:[u,h,l,s]}),n=l,a=s;}else if("A"===r){var l=e.values[5],s=e.values[6];t.push({type:"A",values:[e.values[0],e.values[1],e.values[2],e.values[3],e.values[4],l,s]}),n=l,a=s;}else if("a"===r){var l=n+e.values[5],s=a+e.values[6];t.push({type:"A",values:[e.values[0],e.values[1],e.values[2],e.values[3],e.values[4],l,s]}),n=l,a=s;}else if("H"===r){var l=e.values[0];t.push({type:"H",values:[l]}),n=l;}else if("h"===r){var l=n+e.values[0];t.push({type:"H",values:[l]}),n=l;}else if("V"===r){var s=e.values[0];t.push({type:"V",values:[s]}),a=s;}else if("v"===r){var s=a+e.values[0];t.push({type:"V",values:[s]}),a=s;}else if("S"===r){var p=e.values[0],c=e.values[1],l=e.values[2],s=e.values[3];t.push({type:"S",values:[p,c,l,s]}),n=l,a=s;}else if("s"===r){var p=n+e.values[0],c=a+e.values[1],l=n+e.values[2],s=a+e.values[3];t.push({type:"S",values:[p,c,l,s]}),n=l,a=s;}else if("T"===r){var l=e.values[0],s=e.values[1];t.push({type:"T",values:[l,s]}),n=l,a=s;}else if("t"===r){var l=n+e.values[0],s=a+e.values[1];t.push({type:"T",values:[l,s]}),n=l,a=s;}else"Z"!==r&&"z"!==r||(t.push({type:"Z",values:[]}),n=i,a=o);}),t},c=function(e){var t=[],n=null,a=null,i=null,o=null,r=null,l=null,s=null;return e.forEach(function(e){if("M"===e.type){var h=e.values[0],p=e.values[1];t.push({type:"M",values:[h,p]}),l=h,s=p,o=h,r=p;}else if("C"===e.type){var c=e.values[0],d=e.values[1],f=e.values[2],y=e.values[3],h=e.values[4],p=e.values[5];t.push({type:"C",values:[c,d,f,y,h,p]}),a=f,i=y,o=h,r=p;}else if("L"===e.type){var h=e.values[0],p=e.values[1];t.push({type:"L",values:[h,p]}),o=h,r=p;}else if("H"===e.type){var h=e.values[0];t.push({type:"L",values:[h,r]}),o=h;}else if("V"===e.type){var p=e.values[0];t.push({type:"L",values:[o,p]}),r=p;}else if("S"===e.type){var m,S,f=e.values[0],y=e.values[1],h=e.values[2],p=e.values[3];"C"===n||"S"===n?(m=o+(o-a),S=r+(r-i)):(m=o,S=r),t.push({type:"C",values:[m,S,f,y,h,p]}),a=f,i=y,o=h,r=p;}else if("T"===e.type){var c,d,h=e.values[0],p=e.values[1];"Q"===n||"T"===n?(c=o+(o-a),d=r+(r-i)):(c=o,d=r);var m=o+2*(c-o)/3,S=r+2*(d-r)/3,g=h+2*(c-h)/3,_=p+2*(d-p)/3;t.push({type:"C",values:[m,S,g,_,h,p]}),a=c,i=d,o=h,r=p;}else if("Q"===e.type){var c=e.values[0],d=e.values[1],h=e.values[2],p=e.values[3],m=o+2*(c-o)/3,S=r+2*(d-r)/3,g=h+2*(c-h)/3,_=p+2*(d-p)/3;t.push({type:"C",values:[m,S,g,_,h,p]}),a=c,i=d,o=h,r=p;}else if("A"===e.type){var v=e.values[0],E=e.values[1],x=e.values[2],b=e.values[3],k=e.values[4],h=e.values[5],p=e.values[6];if(0===v||0===E)t.push({type:"C",values:[o,r,h,p,h,p]}),o=h,r=p;else if(o!==h||r!==p){var w=u(o,r,h,p,v,E,x,b,k);w.forEach(function(e){t.push({type:"C",values:e}),o=h,r=p;});}}else"Z"===e.type&&(t.push(e),o=l,r=s);n=e.type;}),t};e.SVGPathElement.prototype.setAttribute=function(e,t){"d"===e&&(this[l]=null,this[s]=null),o.call(this,e,t);},e.SVGPathElement.prototype.removeAttribute=function(e,t){"d"===e&&(this[l]=null,this[s]=null),r.call(this,e);},e.SVGPathElement.prototype.getPathData=function(e){if(e&&e.normalize){if(this[s])return h(this[s]);var t;this[l]?t=h(this[l]):(t=i(this.getAttribute("d")||""),this[l]=h(t));var n=c(p(t));return this[s]=h(n),n}if(this[l])return h(this[l]);var t=i(this.getAttribute("d")||"");return this[l]=h(t),t},e.SVGPathElement.prototype.setPathData=function(e){if(0===e.length)a?this.setAttribute("d",""):this.removeAttribute("d");else{for(var t="",n=0,i=e.length;n<i;n+=1){var o=e[n];n>0&&(t+=" "),t+=o.type,o.values&&o.values.length>0&&(t+=" "+o.values.join(" "));}this.setAttribute("d",t);}},e.SVGRectElement.prototype.getPathData=function(e){var t=this.x.baseVal.value,n=this.y.baseVal.value,a=this.width.baseVal.value,i=this.height.baseVal.value,o=this.hasAttribute("rx")?this.rx.baseVal.value:this.ry.baseVal.value,r=this.hasAttribute("ry")?this.ry.baseVal.value:this.rx.baseVal.value;o>a/2&&(o=a/2),r>i/2&&(r=i/2);var l=[{type:"M",values:[t+o,n]},{type:"H",values:[t+a-o]},{type:"A",values:[o,r,0,0,1,t+a,n+r]},{type:"V",values:[n+i-r]},{type:"A",values:[o,r,0,0,1,t+a-o,n+i]},{type:"H",values:[t+o]},{type:"A",values:[o,r,0,0,1,t,n+i-r]},{type:"V",values:[n+r]},{type:"A",values:[o,r,0,0,1,t+o,n]},{type:"Z",values:[]}];return l=l.filter(function(e){return"A"!==e.type||0!==e.values[0]&&0!==e.values[1]}),e&&!0===e.normalize&&(l=c(l)),l},e.SVGCircleElement.prototype.getPathData=function(e){var t=this.cx.baseVal.value,n=this.cy.baseVal.value,a=this.r.baseVal.value,i=[{type:"M",values:[t+a,n]},{type:"A",values:[a,a,0,0,1,t,n+a]},{type:"A",values:[a,a,0,0,1,t-a,n]},{type:"A",values:[a,a,0,0,1,t,n-a]},{type:"A",values:[a,a,0,0,1,t+a,n]},{type:"Z",values:[]}];return e&&!0===e.normalize&&(i=c(i)),i},e.SVGEllipseElement.prototype.getPathData=function(e){var t=this.cx.baseVal.value,n=this.cy.baseVal.value,a=this.rx.baseVal.value,i=this.ry.baseVal.value,o=[{type:"M",values:[t+a,n]},{type:"A",values:[a,i,0,0,1,t,n+i]},{type:"A",values:[a,i,0,0,1,t-a,n]},{type:"A",values:[a,i,0,0,1,t,n-i]},{type:"A",values:[a,i,0,0,1,t+a,n]},{type:"Z",values:[]}];return e&&!0===e.normalize&&(o=c(o)),o},e.SVGLineElement.prototype.getPathData=function(){return[{type:"M",values:[this.x1.baseVal.value,this.y1.baseVal.value]},{type:"L",values:[this.x2.baseVal.value,this.y2.baseVal.value]}]},e.SVGPolylineElement.prototype.getPathData=function(){for(var e=[],t=0;t<this.points.numberOfItems;t+=1){var n=this.points.getItem(t);e.push({type:0===t?"M":"L",values:[n.x,n.y]});}return e},e.SVGPolygonElement.prototype.getPathData=function(){for(var e=[],t=0;t<this.points.numberOfItems;t+=1){var n=this.points.getItem(t);e.push({type:0===t?"M":"L",values:[n.x,n.y]});}return e.push({type:"Z",values:[]}),e};}();},nt=function(){function e(){var t,s;n&&(o.call(window,n),n=null),r.forEach(function(e){e.event&&(e.listener(e.event),e.event=null,t=!0);}),t?(l=Date.now(),s=!0):Date.now()-l<a&&(s=!0),s&&(n=i.call(window,e));}function t(e){var t=-1;return r.some(function(n,a){return n.listener===e&&(t=a,!0)}),t}var n,a=500,i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60);},o=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame||function(e){clearTimeout(e);},r=[],l=Date.now();return{add:function(a){var i;return-1===t(a)?(r.push(i={listener:a}),function(t){i.event=t,n||e();}):null},remove:function(e){var a;(a=t(e))>-1&&(r.splice(a,1),!r.length&&n&&(o.call(window,n),n=null));}}}(),at={line_altColor:{iniValue:!1},line_color:{},line_colorTra:{iniValue:!1},line_strokeWidth:{},plug_enabled:{iniValue:!1},plug_enabledSE:{hasSE:!0,iniValue:!1},plug_plugSE:{hasSE:!0,iniValue:ke},plug_colorSE:{hasSE:!0},plug_colorTraSE:{hasSE:!0,iniValue:!1},plug_markerWidthSE:{hasSE:!0},plug_markerHeightSE:{hasSE:!0},lineOutline_enabled:{iniValue:!1},lineOutline_color:{},lineOutline_colorTra:{iniValue:!1},lineOutline_strokeWidth:{},lineOutline_inStrokeWidth:{},plugOutline_enabledSE:{hasSE:!0,iniValue:!1},plugOutline_plugSE:{hasSE:!0,iniValue:ke},plugOutline_colorSE:{hasSE:!0},plugOutline_colorTraSE:{hasSE:!0,iniValue:!1},plugOutline_strokeWidthSE:{hasSE:!0},plugOutline_inStrokeWidthSE:{hasSE:!0},position_socketXYSE:{hasSE:!0,hasProps:!0},position_plugOverheadSE:{hasSE:!0},position_path:{},position_lineStrokeWidth:{},position_socketGravitySE:{hasSE:!0},path_pathData:{},path_edge:{hasProps:!0},viewBox_bBox:{hasProps:!0},viewBox_plugBCircleSE:{hasSE:!0},lineMask_enabled:{iniValue:!1},lineMask_outlineMode:{iniValue:!1},lineMask_x:{},lineMask_y:{},lineOutlineMask_x:{},lineOutlineMask_y:{},maskBGRect_x:{},maskBGRect_y:{},capsMaskAnchor_enabledSE:{hasSE:!0,iniValue:!1},capsMaskAnchor_pathDataSE:{hasSE:!0},capsMaskAnchor_strokeWidthSE:{hasSE:!0},capsMaskMarker_enabled:{iniValue:!1},capsMaskMarker_enabledSE:{hasSE:!0,iniValue:!1},capsMaskMarker_plugSE:{hasSE:!0,iniValue:ke},capsMaskMarker_markerWidthSE:{hasSE:!0},capsMaskMarker_markerHeightSE:{hasSE:!0},caps_enabled:{iniValue:!1},attach_plugSideLenSE:{hasSE:!0},attach_plugBackLenSE:{hasSE:!0}},it={show_on:{},show_effect:{},show_animOptions:{},show_animId:{},show_inAnim:{}},ot="fade",rt=[],lt={},st=0,ut={},ht=0;return ne={dash:{stats:{dash_len:{},dash_gap:{},dash_maxOffset:{}},anim:!0,defaultAnimOptions:{duration:1e3,timing:"linear"},optionsConf:[["type","len","number",null,null,null,function(e){return e>0
}],["type","gap","number",null,null,null,function(e){return e>0}]],init:function(e){k(e,"apl_line_strokeWidth",ne.dash.update),e.lineFace.style.strokeDashoffset=0,ne.dash.update(e);},remove:function(e){var t=e.curStats;w(e,"apl_line_strokeWidth",ne.dash.update),t.dash_animId&&(et.remove(t.dash_animId),t.dash_animId=null),e.lineFace.style.strokeDasharray="none",e.lineFace.style.strokeDashoffset=0,P(e.aplStats,ne.dash.stats);},update:function(n){var a,i=n.curStats,o=n.aplStats,r=o.dash_options,l=!1;i.dash_len=r.len||2*o.line_strokeWidth,i.dash_gap=r.gap||o.line_strokeWidth,i.dash_maxOffset=i.dash_len+i.dash_gap,l=N(n,o,"dash_len",i.dash_len)||l,l=N(n,o,"dash_gap",i.dash_gap)||l,l&&(n.lineFace.style.strokeDasharray=o.dash_len+","+o.dash_gap),i.dash_animOptions?(l=N(n,o,"dash_maxOffset",i.dash_maxOffset),o.dash_animOptions&&(l||e(i.dash_animOptions,o.dash_animOptions))&&(i.dash_animId&&(a=et.stop(i.dash_animId),et.remove(i.dash_animId)),o.dash_animOptions=null),o.dash_animOptions||(i.dash_animId=et.add(function(e){return(1-e)*o.dash_maxOffset+"px"},function(e){n.lineFace.style.strokeDashoffset=e;},i.dash_animOptions.duration,0,i.dash_animOptions.timing,!1,a),o.dash_animOptions=t(i.dash_animOptions))):o.dash_animOptions&&(i.dash_animId&&(et.remove(i.dash_animId),i.dash_animId=null),n.lineFace.style.strokeDashoffset=0,o.dash_animOptions=null);}},gradient:{stats:{gradient_colorSE:{hasSE:!0},gradient_pointSE:{hasSE:!0,hasProps:!0}},optionsConf:[["type","startColor","string","colorSE",0,null,null,!0],["type","endColor","string","colorSE",1,null,null,!0]],init:function(e){var t,n=e.baseWindow.document,a=e.defs,i=ce+"-"+e._id+"-gradient";e.efc_gradient_gradient=t=a.appendChild(n.createElementNS(je,"linearGradient")),t.id=i,t.gradientUnits.baseVal=SVGUnitTypes.SVG_UNIT_TYPE_USERSPACEONUSE,[t.x1,t.y1,t.x2,t.y2].forEach(function(e){e.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX,0);}),e.efc_gradient_stopSE=[0,1].map(function(t){var a=e.efc_gradient_gradient.appendChild(n.createElementNS(je,"stop"));try{a.offset.baseVal=t;}catch(e){if(e.code!==DOMException.NO_MODIFICATION_ALLOWED_ERR)throw e;a.setAttribute("offset",t);}return a}),k(e,"cur_plug_colorSE",ne.gradient.update),k(e,"apl_path",ne.gradient.update),e.curStats.line_altColor=!0,e.lineFace.style.stroke="url(#"+i+")",ne.gradient.update(e);},remove:function(e){e.efc_gradient_gradient&&(e.defs.removeChild(e.efc_gradient_gradient),e.efc_gradient_gradient=e.efc_gradient_stopSE=null),w(e,"cur_plug_colorSE",ne.gradient.update),w(e,"apl_path",ne.gradient.update),e.curStats.line_altColor=!1,e.lineFace.style.stroke=e.curStats.line_color,P(e.aplStats,ne.gradient.stats);},update:function(e){var t,a,i=e.curStats,o=e.aplStats,r=o.gradient_options,l=e.pathList.animVal||e.pathList.baseVal;[0,1].forEach(function(e){i.gradient_colorSE[e]=r.colorSE[e]||i.plug_colorSE[e];}),a=l[0][0],i.gradient_pointSE[0]={x:a.x,y:a.y},t=l[l.length-1],a=t[t.length-1],i.gradient_pointSE[1]={x:a.x,y:a.y},[0,1].forEach(function(t){var a;N(e,o.gradient_colorSE,t,a=i.gradient_colorSE[t])&&(qe?(a=n(a),e.efc_gradient_stopSE[t].style.stopColor=a[1],e.efc_gradient_stopSE[t].style.stopOpacity=a[0]):e.efc_gradient_stopSE[t].style.stopColor=a),["x","y"].forEach(function(n){(a=i.gradient_pointSE[t][n])!==o.gradient_pointSE[t][n]&&(e.efc_gradient_gradient[n+(t+1)].baseVal.value=o.gradient_pointSE[t][n]=a);});});}},dropShadow:{stats:{dropShadow_dx:{},dropShadow_dy:{},dropShadow_blur:{},dropShadow_color:{},dropShadow_opacity:{},dropShadow_x:{},dropShadow_y:{}},optionsConf:[["type","dx",null,null,null,2],["type","dy",null,null,null,4],["type","blur",null,null,null,3,function(e){return e>=0}],["type","color",null,null,null,"#000",null,!0],["type","opacity",null,null,null,.8,function(e){return e>=0&&e<=1}]],init:function(e){var t=e.baseWindow.document,n=e.defs,a=ce+"-"+e._id+"-dropShadow",i=V(t,a);["elmFilter","elmOffset","elmBlur","styleFlood","elmsAppend"].forEach(function(t){e["efc_dropShadow_"+t]=i[t];}),i.elmsAppend.forEach(function(e){n.appendChild(e);}),e.face.setAttribute("filter","url(#"+a+")"),k(e,"new_edge4viewBox",ne.dropShadow.adjustEdge),ne.dropShadow.update(e);},remove:function(e){var t=e.defs;e.efc_dropShadow_elmsAppend&&(e.efc_dropShadow_elmsAppend.forEach(function(e){t.removeChild(e);}),e.efc_dropShadow_elmFilter=e.efc_dropShadow_elmOffset=e.efc_dropShadow_elmBlur=e.efc_dropShadow_styleFlood=e.efc_dropShadow_elmsAppend=null),w(e,"new_edge4viewBox",ne.dropShadow.adjustEdge),q(e,{}),e.face.removeAttribute("filter"),P(e.aplStats,ne.dropShadow.stats);},update:function(e){var t,n,a=e.curStats,i=e.aplStats,o=i.dropShadow_options;a.dropShadow_dx=t=o.dx,N(e,i,"dropShadow_dx",t)&&(e.efc_dropShadow_elmOffset.dx.baseVal=t,n=!0),a.dropShadow_dy=t=o.dy,N(e,i,"dropShadow_dy",t)&&(e.efc_dropShadow_elmOffset.dy.baseVal=t,n=!0),a.dropShadow_blur=t=o.blur,N(e,i,"dropShadow_blur",t)&&(e.efc_dropShadow_elmBlur.setStdDeviation(t,t),n=!0),n&&q(e,{}),a.dropShadow_color=t=o.color,N(e,i,"dropShadow_color",t)&&(e.efc_dropShadow_styleFlood.floodColor=t),a.dropShadow_opacity=t=o.opacity,N(e,i,"dropShadow_opacity",t)&&(e.efc_dropShadow_styleFlood.floodOpacity=t);},adjustEdge:function(e,t){var n,a,i=e.curStats,o=e.aplStats;null!=i.dropShadow_dx&&(n=3*i.dropShadow_blur,a={x1:t.x1-n+i.dropShadow_dx,y1:t.y1-n+i.dropShadow_dy,x2:t.x2+n+i.dropShadow_dx,y2:t.y2+n+i.dropShadow_dy},a.x1<t.x1&&(t.x1=a.x1),a.y1<t.y1&&(t.y1=a.y1),a.x2>t.x2&&(t.x2=a.x2),a.y2>t.y2&&(t.y2=a.y2),["x","y"].forEach(function(n){var a,r="dropShadow_"+n;i[r]=a=t[n+"1"],N(e,o,r,a)&&(e.efc_dropShadow_elmFilter[n].baseVal.value=a);}));}}},Object.keys(ne).forEach(function(e){var t=ne[e],n=t.stats;n[e+"_enabled"]={iniValue:!1},n[e+"_options"]={hasProps:!0},t.anim&&(n[e+"_animOptions"]={},n[e+"_animId"]={});}),ae={none:{defaultAnimOptions:{},init:function(e,t){var n=e.curStats;n.show_animId&&(et.remove(n.show_animId),n.show_animId=null),ae.none.start(e,t);},start:function(e,t){ae.none.stop(e,!0);},stop:function(e,t,n){var a=e.curStats;return n=null!=n?n:e.aplStats.show_on,a.show_inAnim=!1,t&&Y(e,n),n?1:0}},fade:{defaultAnimOptions:{duration:300,timing:"linear"},init:function(e,t){var n=e.curStats,a=e.aplStats;n.show_animId&&et.remove(n.show_animId),n.show_animId=et.add(function(e){return e},function(t,n){n?ae.fade.stop(e,!0):(e.svg.style.opacity=t+"",Ue&&(I(e,e.svg),C(e)));},a.show_animOptions.duration,1,a.show_animOptions.timing,null,!1),ae.fade.start(e,t);},start:function(e,t){var n,a=e.curStats;a.show_inAnim&&(n=et.stop(a.show_animId)),Y(e,1),a.show_inAnim=!0,et.start(a.show_animId,!e.aplStats.show_on,null!=t?t:n);},stop:function(e,t,n){var a,i=e.curStats;return n=null!=n?n:e.aplStats.show_on,a=i.show_inAnim?et.stop(i.show_animId):n?1:0,i.show_inAnim=!1,t&&(e.svg.style.opacity=n?"":"0",Y(e,n)),a}},draw:{defaultAnimOptions:{duration:500,timing:[.58,0,.42,1]},init:function(e,t){var n=e.curStats,a=e.aplStats,i=e.pathList.baseVal,o=v(i),r=o.segsLen,l=o.lenAll;n.show_animId&&et.remove(n.show_animId),n.show_animId=et.add(function(e){var t,n,a,o,s=-1;if(0===e)n=[[i[0][0],i[0][0]]];else if(1===e)n=i;else{for(t=l*e,n=[];t>=r[++s];)n.push(i[s]),t-=r[s];t&&(a=i[s],2===a.length?n.push([a[0],p(a[0],a[1],t/r[s])]):(o=f(a[0],a[1],a[2],a[3],m(a[0],a[1],a[2],a[3],t)),n.push([a[0],o.fromP1,o.fromP2,o])));}return n},function(t,n){n?ae.draw.stop(e,!0):(e.pathList.animVal=t,q(e,{path:!0}));},a.show_animOptions.duration,1,a.show_animOptions.timing,null,!1),ae.draw.start(e,t);},start:function(e,t){var n,a=e.curStats;a.show_inAnim&&(n=et.stop(a.show_animId)),Y(e,1),a.show_inAnim=!0,k(e,"apl_position",ae.draw.update),et.start(a.show_animId,!e.aplStats.show_on,null!=t?t:n);},stop:function(e,t,n){var a,i=e.curStats;return n=null!=n?n:e.aplStats.show_on,a=i.show_inAnim?et.stop(i.show_animId):n?1:0,i.show_inAnim=!1,t&&(n?(e.pathList.animVal=null,q(e,{path:!0})):(e.pathList.animVal=[[e.pathList.baseVal[0][0],e.pathList.baseVal[0][0]]],q(e,{path:!0})),Y(e,n)),a},update:function(e){w(e,"apl_position",ae.draw.update),e.curStats.show_inAnim?ae.draw.init(e,ae.draw.stop(e)):e.aplStats.show_animOptions={};}}},function(){function e(e){return function(t){var n={};n[e]=t,this.setOptions(n);}}[["start","anchorSE",0],["end","anchorSE",1],["color","lineColor"],["size","lineSize"],["startSocketGravity","socketGravitySE",0],["endSocketGravity","socketGravitySE",1],["startPlugColor","plugColorSE",0],["endPlugColor","plugColorSE",1],["startPlugSize","plugSizeSE",0],["endPlugSize","plugSizeSE",1],["outline","lineOutlineEnabled"],["outlineColor","lineOutlineColor"],["outlineSize","lineOutlineSize"],["startPlugOutline","plugOutlineEnabledSE",0],["endPlugOutline","plugOutlineEnabledSE",1],["startPlugOutlineColor","plugOutlineColorSE",0],["endPlugOutlineColor","plugOutlineColorSE",1],["startPlugOutlineSize","plugOutlineSizeSE",0],["endPlugOutlineSize","plugOutlineSizeSE",1]].forEach(function(n){var a=n[0],i=n[1],o=n[2];Object.defineProperty(te.prototype,a,{get:function(){var e=null!=o?lt[this._id].options[i][o]:i?lt[this._id].options[i]:lt[this._id].options[a];return null==e?Ae:t(e)},set:e(a),enumerable:!0});}),[["path",be],["startSocket",Se,"socketSE",0],["endSocket",Se,"socketSE",1],["startPlug",Ie,"plugSE",0],["endPlug",Ie,"plugSE",1]].forEach(function(t){var n=t[0],a=t[1],i=t[2],o=t[3];Object.defineProperty(te.prototype,n,{get:function(){var e,t=null!=o?lt[this._id].options[i][o]:i?lt[this._id].options[i]:lt[this._id].options[n];return t?Object.keys(a).some(function(n){return a[n]===t&&(e=n,!0)})?e:new Error("It's broken"):Ae},set:e(n),enumerable:!0});}),Object.keys(ne).forEach(function(n){function a(e){var n=i.optionsConf.reduce(function(n,a){var i,o=a[0],r=a[1],l=a[2],s=a[3],u=a[4],h=null!=u?e[s][u]:s?e[s]:e[r];return n[r]="id"===o?h?Object.keys(l).some(function(e){return l[e]===h&&(i=e,!0)})?i:new Error("It's broken"):Ae:null==h?Ae:t(h),n},{});return i.anim&&(n.animation=t(e.animation)),n}var i=ne[n];Object.defineProperty(te.prototype,n,{get:function(){var e=lt[this._id].options[n];return Je(e)?a(e):e},set:e(n),enumerable:!0});}),["startLabel","endLabel","middleLabel"].forEach(function(t,n){Object.defineProperty(te.prototype,t,{get:function(){var e=lt[this._id],t=e.options;return t.labelSEM[n]&&!e.optionIsAttach.labelSEM[n]?ut[t.labelSEM[n]._id].text:t.labelSEM[n]||""},set:e(t),enumerable:!0});});}(),te.prototype.setOptions=function(e){return ee(lt[this._id],e),this},te.prototype.position=function(){return q(lt[this._id],{position:!0}),this},te.prototype.remove=function(){var e=lt[this._id],t=e.curStats;Object.keys(ne).forEach(function(e){var n=e+"_animId";t[n]&&et.remove(t[n]);}),t.show_animId&&et.remove(t.show_animId),e.attachments.slice().forEach(function(t){$(e,t);}),e.baseWindow&&e.svg&&e.baseWindow.document.body.removeChild(e.svg),delete lt[this._id];},te.prototype.show=function(e,t){return K(lt[this._id],!0,e,t),this},te.prototype.hide=function(e,t){return K(lt[this._id],!1,e,t),this},le=function(e){e&&ut[e._id]&&(e.boundTargets.slice().forEach(function(t){$(t.props,e,!0);}),e.conf.remove&&e.conf.remove(e),delete ut[e._id]);},oe=function(){function e(e,n){var a,i={conf:e,curStats:{},aplStats:{},boundTargets:[]},o={};e.argOptions.every(function(e){return!(!n.length||("string"==typeof e.type?typeof n[0]!==e.type:"function"!=typeof e.type||!e.type(n[0])))&&(o[e.optionName]=n.shift(),!0)}),a=n.length&&Je(n[0])?t(n[0]):{},Object.keys(o).forEach(function(e){a[e]=o[e];}),e.stats&&(P(i.curStats,e.stats),P(i.aplStats,e.stats)),Object.defineProperty(this,"_id",{value:++ht}),Object.defineProperty(this,"isRemoved",{get:function(){return!ut[this._id]}}),i._id=this._id,e.init&&!e.init(i,a)||(ut[this._id]=i);}return e.prototype.remove=function(){var e=this,t=ut[e._id];t&&(t.boundTargets.slice().forEach(function(e){t.conf.removeOption(t,e);}),O(function(){var t=ut[e._id];t&&(console.error("LeaderLineAttachment was not removed by removeOption"),le(t));}));},e}(),window.LeaderLineAttachment=oe,re=function(e,t){return e instanceof oe&&(!(e.isRemoved||t&&ut[e._id].conf.type!==t)||null)},ie={pointAnchor:{type:"anchor",argOptions:[{optionName:"element",type:i}],init:function(e,t){return e.element=ie.pointAnchor.checkElement(t.element),e.x=ie.pointAnchor.parsePercent(t.x,!0)||[.5,!0],e.y=ie.pointAnchor.parsePercent(t.y,!0)||[.5,!0],!0},removeOption:function(e,t){var n=t.props,a={},i=e.element,o=n.options.anchorSE["start"===t.optionName?1:0];i===o&&(i=o===document.body?new oe(ie.pointAnchor,[i]):document.body),a[t.optionName]=i,ee(n,a);},getBBoxNest:function(e,t){var n=s(e.element,t.baseWindow),a=n.width,i=n.height;return n.width=n.height=0,n.left=n.right=n.left+e.x[0]*(e.x[1]?a:1),n.top=n.bottom=n.top+e.y[0]*(e.y[1]?i:1),n},parsePercent:function(e,t){var n,a,i=!1;return $e(e)?a=e:"string"==typeof e&&(n=He.exec(e))&&n[2]&&(a=parseFloat(n[1])/100,i=0!==a),null!=a&&(t||a>=0)?[a,i]:null},checkElement:function(e){if(null==e)e=document.body;else if(!i(e))throw new Error("`element` must be Element");return e}},areaAnchor:{type:"anchor",argOptions:[{optionName:"element",type:i},{optionName:"shape",type:"string"}],stats:{color:{},strokeWidth:{},elementWidth:{},elementHeight:{},elementLeft:{},elementTop:{},pathListRel:{},bBoxRel:{},pathData:{},viewBoxBBox:{hasProps:!0},dashLen:{},dashGap:{}},init:function(e,t){var n,a,i,o=[];return e.element=ie.pointAnchor.checkElement(t.element),"string"==typeof t.color&&(e.color=t.color.trim()),"string"==typeof t.fillColor&&(e.fill=t.fillColor.trim()),$e(t.size)&&t.size>=0&&(e.size=t.size),t.dash&&(e.dash=!0,$e(t.dash.len)&&t.dash.len>0&&(e.dashLen=t.dash.len),$e(t.dash.gap)&&t.dash.gap>0&&(e.dashGap=t.dash.gap)),"circle"===t.shape?e.shape=t.shape:"polygon"===t.shape&&Array.isArray(t.points)&&t.points.length>=3&&t.points.every(function(t){var n={};return!(!(n.x=ie.pointAnchor.parsePercent(t[0],!0))||!(n.y=ie.pointAnchor.parsePercent(t[1],!0)))&&(o.push(n),(n.x[1]||n.y[1])&&(e.hasRatio=!0),!0)})?(e.shape=t.shape,e.points=o):(e.shape="rect",e.radius=$e(t.radius)&&t.radius>=0?t.radius:0),"rect"!==e.shape&&"circle"!==e.shape||(e.x=ie.pointAnchor.parsePercent(t.x,!0)||[-.05,!0],e.y=ie.pointAnchor.parsePercent(t.y,!0)||[-.05,!0],e.width=ie.pointAnchor.parsePercent(t.width)||[1.1,!0],e.height=ie.pointAnchor.parsePercent(t.height)||[1.1,!0],(e.x[1]||e.y[1]||e.width[1]||e.height[1])&&(e.hasRatio=!0)),n=e.element.ownerDocument,e.svg=a=n.createElementNS(je,"svg"),a.className.baseVal=ce+"-areaAnchor",a.viewBox.baseVal||a.setAttribute("viewBox","0 0 0 0"),e.path=a.appendChild(n.createElementNS(je,"path")),e.path.style.fill=e.fill||"none",e.isShown=!1,a.style.visibility="hidden",n.body.appendChild(a),W(i=n.defaultView),e.bodyOffset=T(i),e.updateColor=function(){var t,n=e.curStats,a=e.aplStats,i=e.boundTargets.length?e.boundTargets[0].props.curStats:null;n.color=t=e.color||(i?i.line_color:Ke.lineColor),N(e,a,"color",t)&&(e.path.style.stroke=t);},e.updateShow=function(){Y(e,e.boundTargets.some(function(e){return!0===e.props.isShown}));},!0},bind:function(e,t){var n=t.props;return e.color||k(n,"cur_line_color",e.updateColor),k(n,"svgShow",e.updateShow),O(function(){e.updateColor(),e.updateShow();}),!0},unbind:function(e,t){var n=t.props;e.color||w(n,"cur_line_color",e.updateColor),w(n,"svgShow",e.updateShow),e.boundTargets.length>1&&O(function(){e.updateColor(),e.updateShow(),ie.areaAnchor.update(e)&&e.boundTargets.forEach(function(e){q(e.props,{position:!0});});});},removeOption:function(e,t){ie.pointAnchor.removeOption(e,t);},remove:function(e){e.boundTargets.length&&(console.error("LeaderLineAttachment was not unbound by remove"),e.boundTargets.forEach(function(t){ie.areaAnchor.unbind(e,t);})),e.svg.parentNode.removeChild(e.svg);},getStrokeWidth:function(e,t){return ie.areaAnchor.update(e)&&e.boundTargets.length>1&&O(function(){e.boundTargets.forEach(function(e){e.props!==t&&q(e.props,{position:!0});});}),e.curStats.strokeWidth},getPathData:function(e,t){var n=s(e.element,t.baseWindow);return _(e.curStats.pathListRel,function(e){e.x+=n.left,e.y+=n.top;})},getBBoxNest:function(e,t){var n=s(e.element,t.baseWindow),a=e.curStats.bBoxRel;return{left:a.left+n.left,top:a.top+n.top,right:a.right+n.left,bottom:a.bottom+n.top,width:a.width,height:a.height}},update:function(e){var t,n,a=e.curStats,i=e.aplStats,r=e.boundTargets.length?e.boundTargets[0].props.curStats:null,l={};if(l.strokeWidth=N(e,a,"strokeWidth",null!=e.size?e.size:r?r.line_strokeWidth:Ke.lineSize),t=o(e.element),l.elementWidth=N(e,a,"elementWidth",t.width),l.elementHeight=N(e,a,"elementHeight",t.height),l.elementLeft=N(e,a,"elementLeft",t.left),l.elementTop=N(e,a,"elementTop",t.top),l.strokeWidth||e.hasRatio&&(l.elementWidth||l.elementHeight)){switch(e.shape){case"rect":!function(){var n,i,o,r,l,s,u,h,p;n={left:e.x[0]*(e.x[1]?t.width:1),top:e.y[0]*(e.y[1]?t.height:1),width:e.width[0]*(e.width[1]?t.width:1),height:e.height[0]*(e.height[1]?t.height:1)},n.right=n.left+n.width,n.bottom=n.top+n.height,l=a.strokeWidth/2,o=(r=Math.min(n.width,n.height))?r/2*Math.SQRT2+l:0,i=e.radius?e.radius<=o?e.radius:o:0,i?(s=(i-l)/Math.SQRT2,u=i-s,p=i*De,h=[{x:n.left-u,y:n.top+s},{x:n.left+s,y:n.top-u},{x:n.right-s,y:n.top-u},{x:n.right+u,y:n.top+s},{x:n.right+u,y:n.bottom-s},{x:n.right-s,y:n.bottom+u},{x:n.left+s,y:n.bottom+u},{x:n.left-u,y:n.bottom-s}],a.pathListRel=[[h[0],{x:h[0].x,y:h[0].y-p},{x:h[1].x-p,y:h[1].y},h[1]]],h[1].x!==h[2].x&&a.pathListRel.push([h[1],h[2]]),a.pathListRel.push([h[2],{x:h[2].x+p,y:h[2].y},{x:h[3].x,y:h[3].y-p},h[3]]),h[3].y!==h[4].y&&a.pathListRel.push([h[3],h[4]]),a.pathListRel.push([h[4],{x:h[4].x,y:h[4].y+p},{x:h[5].x+p,y:h[5].y},h[5]]),h[5].x!==h[6].x&&a.pathListRel.push([h[5],h[6]]),a.pathListRel.push([h[6],{x:h[6].x-p,y:h[6].y},{x:h[7].x,y:h[7].y+p},h[7]]),h[7].y!==h[0].y&&a.pathListRel.push([h[7],h[0]]),a.pathListRel.push([]),u=i-s+a.strokeWidth/2,h=[{x:n.left-u,y:n.top-u},{x:n.right+u,y:n.bottom+u}],a.bBoxRel={left:h[0].x,top:h[0].y,right:h[1].x,bottom:h[1].y,width:h[1].x-h[0].x,height:h[1].y-h[0].y}):(u=a.strokeWidth/2,h=[{x:n.left-u,y:n.top-u},{x:n.right+u,y:n.bottom+u}],a.pathListRel=[[h[0],{x:h[1].x,y:h[0].y}],[{x:h[1].x,y:h[0].y},h[1]],[h[1],{x:h[0].x,y:h[1].y}],[]],h=[{x:n.left-a.strokeWidth,y:n.top-a.strokeWidth},{x:n.right+a.strokeWidth,y:n.bottom+a.strokeWidth}],a.bBoxRel={left:h[0].x,top:h[0].y,right:h[1].x,bottom:h[1].y,width:h[1].x-h[0].x,height:h[1].y-h[0].y});}();break;case"circle":!function(){var n,i,o,r,l,s,u,h,p,c,d,f,y;n={left:e.x[0]*(e.x[1]?t.width:1),top:e.y[0]*(e.y[1]?t.height:1),width:e.width[0]*(e.width[1]?t.width:1),height:e.height[0]*(e.height[1]?t.height:1)},n.width||n.height||(n.width=n.height=10),n.width||(n.width=n.height),n.height||(n.height=n.width),n.right=n.left+n.width,n.bottom=n.top+n.height,i=n.left+n.width/2,o=n.top+n.height/2,h=a.strokeWidth/2,p=n.width/2,c=n.height/2,r=p*Math.SQRT2+h,l=c*Math.SQRT2+h,s=r*De,u=l*De,y=[{x:i-r,y:o},{x:i,y:o-l},{x:i+r,y:o},{x:i,y:o+l}],a.pathListRel=[[y[0],{x:y[0].x,y:y[0].y-u},{x:y[1].x-s,y:y[1].y},y[1]],[y[1],{x:y[1].x+s,y:y[1].y},{x:y[2].x,y:y[2].y-u},y[2]],[y[2],{x:y[2].x,y:y[2].y+u},{x:y[3].x+s,y:y[3].y},y[3]],[y[3],{x:y[3].x-s,y:y[3].y},{x:y[0].x,y:y[0].y+u},y[0]],[]],d=r-p+a.strokeWidth/2,f=l-c+a.strokeWidth/2,y=[{x:n.left-d,y:n.top-f},{x:n.right+d,y:n.bottom+f}],a.bBoxRel={left:y[0].x,top:y[0].y,right:y[1].x,bottom:y[1].y,width:y[1].x-y[0].x,height:y[1].y-y[0].y};}();break;case"polygon":!function(){var n,i,o,r;e.points.forEach(function(e){var o=e.x[0]*(e.x[1]?t.width:1),r=e.y[0]*(e.y[1]?t.height:1);n?(o<n.left&&(n.left=o),o>n.right&&(n.right=o),r<n.top&&(n.top=r),r>n.bottom&&(n.bottom=r)):n={left:o,right:o,top:r,bottom:r},i?a.pathListRel.push([i,{x:o,y:r}]):a.pathListRel=[],i={x:o,y:r};}),a.pathListRel.push([]),o=a.strokeWidth/2,r=[{x:n.left-o,y:n.top-o},{x:n.right+o,y:n.bottom+o}],a.bBoxRel={left:r[0].x,top:r[0].y,right:r[1].x,bottom:r[1].y,width:r[1].x-r[0].x,height:r[1].y-r[0].y};}();}l.pathListRel=l.bBoxRel=!0;}return(l.pathListRel||l.elementLeft||l.elementTop)&&(a.pathData=_(a.pathListRel,function(e){e.x+=t.left,e.y+=t.top;})),N(e,i,"strokeWidth",n=a.strokeWidth)&&(e.path.style.strokeWidth=n+"px"),x(n=a.pathData,i.pathData)&&(e.path.setPathData(n),i.pathData=n,l.pathData=!0),e.dash&&(!l.pathData&&(!l.strokeWidth||e.dashLen&&e.dashGap)||(a.dashLen=e.dashLen||2*a.strokeWidth,a.dashGap=e.dashGap||a.strokeWidth),l.dash=N(e,i,"dashLen",a.dashLen)||l.dash,l.dash=N(e,i,"dashGap",a.dashGap)||l.dash,l.dash&&(e.path.style.strokeDasharray=i.dashLen+","+i.dashGap)),function(){var o=a.viewBoxBBox,r=i.viewBoxBBox,l=e.svg.viewBox.baseVal,s=e.svg.style;o.x=a.bBoxRel.left+t.left,o.y=a.bBoxRel.top+t.top,o.width=a.bBoxRel.width,o.height=a.bBoxRel.height,["x","y","width","height"].forEach(function(t){(n=o[t])!==r[t]&&(l[t]=r[t]=n,s[Ve[t]]=n+("x"===t||"y"===t?e.bodyOffset[t]:0)+"px");});}(),l.strokeWidth||l.pathListRel||l.bBoxRel}},mouseHoverAnchor:{type:"anchor",argOptions:[{optionName:"element",type:i},{optionName:"showEffectName",type:"string"}],style:{backgroundImage:"url('data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cG9seWdvbiBwb2ludHM9IjI0LDAgMCw4IDgsMTEgMCwxOSA1LDI0IDEzLDE2IDE2LDI0IiBmaWxsPSJjb3JhbCIvPjwvc3ZnPg==')",backgroundSize:"",backgroundRepeat:"no-repeat",backgroundColor:"#f8f881",cursor:"default"},hoverStyle:{backgroundImage:"none",backgroundColor:"#fadf8f"},padding:{top:1,right:15,bottom:1,left:2},minHeight:15,backgroundPosition:{right:2,top:2},backgroundSize:{width:12,height:12},dirKeys:[["top","Top"],["right","Right"],["bottom","Bottom"],["left","Left"]],init:function(e,t){var n,a,i,o,r,l,s,u=ie.mouseHoverAnchor,h={};if(e.element=ie.pointAnchor.checkElement(t.element),!function(e){var t,n;return!!((n=e.ownerDocument)&&(t=n.defaultView)&&t.HTMLElement&&e instanceof t.HTMLElement)}(e.element))throw new Error("`element` must be HTML element");return u.style.backgroundSize=u.backgroundSize.width+"px "+u.backgroundSize.height+"px",["style","hoverStyle"].forEach(function(t){var n=u[t];e[t]=Object.keys(n).reduce(function(e,t){return e[t]=n[t],e},{});}),n=e.element.ownerDocument.defaultView.getComputedStyle(e.element,""),"inline"===n.display?e.style.display="inline-block":"none"===n.display&&(e.style.display="block"),ie.mouseHoverAnchor.dirKeys.forEach(function(t){var a=t[0],i="padding"+t[1];parseFloat(n[i])<u.padding[a]&&(e.style[i]=u.padding[a]+"px");}),e.style.display&&(o=e.element.style.display,e.element.style.display=e.style.display),ie.mouseHoverAnchor.dirKeys.forEach(function(t){var n="padding"+t[1];e.style[n]&&(h[n]=e.element.style[n],e.element.style[n]=e.style[n]);}),i=e.element.getBoundingClientRect(),i.height<u.minHeight&&(Ue?function(){var t=u.minHeight;"content-box"===n.boxSizing?t-=parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth)+parseFloat(n.paddingTop)+parseFloat(n.paddingBottom):"padding-box"===n.boxSizing&&(t-=parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth)),e.style.height=t+"px";}():e.style.height=parseFloat(n.height)+(u.minHeight-i.height)+"px"),e.style.backgroundPosition=qe?i.width-u.backgroundSize.width-u.backgroundPosition.right+"px "+u.backgroundPosition.top+"px":"right "+u.backgroundPosition.right+"px top "+u.backgroundPosition.top+"px",e.style.display&&(e.element.style.display=o),ie.mouseHoverAnchor.dirKeys.forEach(function(t){var n="padding"+t[1];e.style[n]&&(e.element.style[n]=h[n]);}),["style","hoverStyle"].forEach(function(n){var a=e[n],i=t[n];Je(i)&&Object.keys(i).forEach(function(e){"string"==typeof i[e]||$e(i[e])?a[e]=i[e]:null==i[e]&&delete a[e];});}),"function"==typeof t.onSwitch&&(s=t.onSwitch),t.showEffectName&&ae[t.showEffectName]&&(e.showEffectName=r=t.showEffectName),l=t.animOptions,e.elmStyle=a=e.element.style,e.mouseenter=function(t){e.hoverStyleSave=u.getStyles(a,Object.keys(e.hoverStyle)),u.setStyles(a,e.hoverStyle),e.boundTargets.forEach(function(e){K(e.props,!0,r,l);}),s&&s(t);},e.mouseleave=function(t){u.setStyles(a,e.hoverStyleSave),e.boundTargets.forEach(function(e){K(e.props,!1,r,l);}),s&&s(t);},!0},bind:function(e,t){return t.props.svg?ie.mouseHoverAnchor.llShow(t.props,!1,e.showEffectName):O(function(){ie.mouseHoverAnchor.llShow(t.props,!1,e.showEffectName);}),e.enabled||(e.styleSave=ie.mouseHoverAnchor.getStyles(e.elmStyle,Object.keys(e.style)),ie.mouseHoverAnchor.setStyles(e.elmStyle,e.style),e.removeEventListener=a(e.element,e.mouseenter,e.mouseleave),e.enabled=!0),!0},unbind:function(e,t){e.enabled&&e.boundTargets.length<=1&&(e.removeEventListener(),ie.mouseHoverAnchor.setStyles(e.elmStyle,e.styleSave),e.enabled=!1),ie.mouseHoverAnchor.llShow(t.props,!0,e.showEffectName);},removeOption:function(e,t){ie.pointAnchor.removeOption(e,t);},remove:function(e){e.boundTargets.length&&(console.error("LeaderLineAttachment was not unbound by remove"),e.boundTargets.forEach(function(t){ie.mouseHoverAnchor.unbind(e,t);}));},getBBoxNest:function(e,t){return s(e.element,t.baseWindow)},llShow:function(e,t,n){ae[n||e.curStats.show_effect].stop(e,!0,t),e.aplStats.show_on=t;},getStyles:function(e,t){return t.reduce(function(t,n){return t[n]=e[n],t},{})},setStyles:function(e,t){Object.keys(t).forEach(function(n){e[n]=t[n];});}},captionLabel:{type:"label",argOptions:[{optionName:"text",type:"string"}],stats:{color:{},x:{},y:{}},textStyleProps:["fontFamily","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","kerning","letterSpacing","wordSpacing","textDecoration"],init:function(e,t){return"string"==typeof t.text&&(e.text=t.text.trim()),!!e.text&&("string"==typeof t.color&&(e.color=t.color.trim()),e.outlineColor="string"==typeof t.outlineColor?t.outlineColor.trim():"#fff",Array.isArray(t.offset)&&$e(t.offset[0])&&$e(t.offset[1])&&(e.offset={x:t.offset[0],y:t.offset[1]}),$e(t.lineOffset)&&(e.lineOffset=t.lineOffset),ie.captionLabel.textStyleProps.forEach(function(n){null!=t[n]&&(e[n]=t[n]);}),e.updateColor=function(t){ie.captionLabel.updateColor(e,t);},e.updateSocketXY=function(t){var n,a,i,o,r=e.curStats,l=e.aplStats,s=t.curStats,u=s.position_socketXYSE[e.socketIndex];null!=u.x&&(e.offset?(r.x=u.x+e.offset.x,r.y=u.y+e.offset.y):(n=e.height/2,a=Math.max(s.attach_plugSideLenSE[e.socketIndex]||0,s.line_strokeWidth/2),i=s.position_socketXYSE[e.socketIndex?0:1],u.socketId===me||u.socketId===fe?(r.x=u.socketId===me?u.x-n-e.width:u.x+n,r.y=i.y<u.y?u.y+a+n:u.y-a-n-e.height):(r.x=i.x<u.x?u.x+a+n:u.x-a-n-e.width,r.y=u.socketId===de?u.y-n-e.height:u.y+n)),N(e,l,"x",o=r.x)&&(e.elmPosition.x.baseVal.getItem(0).value=o),N(e,l,"y",o=r.y)&&(e.elmPosition.y.baseVal.getItem(0).value=o+e.height));},e.updatePath=function(t){var n,a,i=e.curStats,o=e.aplStats,r=t.pathList.animVal||t.pathList.baseVal;r&&(n=ie.captionLabel.getMidPoint(r,e.lineOffset),i.x=n.x-e.width/2,i.y=n.y-e.height/2,N(e,o,"x",a=i.x)&&(e.elmPosition.x.baseVal.getItem(0).value=a),N(e,o,"y",a=i.y)&&(e.elmPosition.y.baseVal.getItem(0).value=a+e.height));},e.updateShow=function(t){ie.captionLabel.updateShow(e,t);},qe&&(e.adjustEdge=function(t,n){var a=e.curStats;null!=a.x&&ie.captionLabel.adjustEdge(n,{x:a.x,y:a.y,width:e.width,height:e.height},e.strokeWidth/2);}),!0)},updateColor:function(e,t){var n,a=e.curStats,i=e.aplStats,o=t.curStats;a.color=n=e.color||o.line_color,N(e,i,"color",n)&&(e.styleFill.fill=n);},updateShow:function(e,t){var n=!0===t.isShown;n!==e.isShown&&(e.styleShow.visibility=n?"":"hidden",e.isShown=n);},adjustEdge:function(e,t,n){var a={x1:t.x-n,y1:t.y-n,x2:t.x+t.width+n,y2:t.y+t.height+n};a.x1<e.x1&&(e.x1=a.x1),a.y1<e.y1&&(e.y1=a.y1),a.x2>e.x2&&(e.x2=a.x2),a.y2>e.y2&&(e.y2=a.y2);},newText:function(e,t,n,a,i){var o,r,l,s,u,h;return o=t.createElementNS(je,"text"),o.textContent=e,[o.x,o.y].forEach(function(e){var t=n.createSVGLength();t.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX,0),e.baseVal.initialize(t);}),"boolean"!=typeof he&&(he="paintOrder"in o.style),i&&!he?(l=t.createElementNS(je,"defs"),o.id=a,l.appendChild(o),r=t.createElementNS(je,"g"),u=r.appendChild(t.createElementNS(je,"use")),u.href.baseVal="#"+a,s=r.appendChild(t.createElementNS(je,"use")),s.href.baseVal="#"+a,h=u.style,h.strokeLinejoin="round",{elmPosition:o,styleText:o.style,styleFill:s.style,styleStroke:h,styleShow:r.style,elmsAppend:[l,r]}):(h=o.style,i&&(h.strokeLinejoin="round",h.paintOrder="stroke"),{elmPosition:o,styleText:h,styleFill:h,styleStroke:i?h:null,styleShow:h,elmsAppend:[o]})},getMidPoint:function(e,t){var n,a,i,o=v(e),r=o.segsLen,l=o.lenAll,s=-1;if((n=l/2+(t||0))<=0)return a=e[0],2===a.length?p(a[0],a[1],0):f(a[0],a[1],a[2],a[3],0);if(n>=l)return a=e[e.length-1],2===a.length?p(a[0],a[1],1):f(a[0],a[1],a[2],a[3],1);for(i=[];n>r[++s];)i.push(e[s]),n-=r[s];return a=e[s],2===a.length?p(a[0],a[1],n/r[s]):f(a[0],a[1],a[2],a[3],m(a[0],a[1],a[2],a[3],n))},initSvg:function(e,t){var n,a,i=ie.captionLabel.newText(e.text,t.baseWindow.document,t.svg,ce+"-captionLabel-"+e._id,e.outlineColor);["elmPosition","styleFill","styleShow","elmsAppend"].forEach(function(t){e[t]=i[t];}),e.isShown=!1,e.styleShow.visibility="hidden",ie.captionLabel.textStyleProps.forEach(function(t){null!=e[t]&&(i.styleText[t]=e[t]);}),i.elmsAppend.forEach(function(e){t.svg.appendChild(e);}),n=i.elmPosition.getBBox(),e.width=n.width,e.height=n.height,e.outlineColor&&(a=n.height/9,a=a>10?10:a<2?2:a,i.styleStroke.strokeWidth=a+"px",i.styleStroke.stroke=e.outlineColor),e.strokeWidth=a||0,P(e.aplStats,ie.captionLabel.stats),e.updateColor(t),e.refSocketXY?e.updateSocketXY(t):e.updatePath(t),qe&&q(t,{}),e.updateShow(t);},bind:function(e,t){var n=t.props;return e.color||k(n,"cur_line_color",e.updateColor),(e.refSocketXY="startLabel"===t.optionName||"endLabel"===t.optionName)?(e.socketIndex="startLabel"===t.optionName?0:1,k(n,"apl_position",e.updateSocketXY),e.offset||(k(n,"cur_attach_plugSideLenSE",e.updateSocketXY),k(n,"cur_line_strokeWidth",e.updateSocketXY))):k(n,"apl_path",e.updatePath),k(n,"svgShow",e.updateShow),qe&&k(n,"new_edge4viewBox",e.adjustEdge),ie.captionLabel.initSvg(e,n),!0},unbind:function(e,t){var n=t.props;e.elmsAppend&&(e.elmsAppend.forEach(function(e){n.svg.removeChild(e);}),e.elmPosition=e.styleFill=e.styleShow=e.elmsAppend=null),P(e.curStats,ie.captionLabel.stats),P(e.aplStats,ie.captionLabel.stats),e.color||w(n,"cur_line_color",e.updateColor),e.refSocketXY?(w(n,"apl_position",e.updateSocketXY),e.offset||(w(n,"cur_attach_plugSideLenSE",e.updateSocketXY),w(n,"cur_line_strokeWidth",e.updateSocketXY))):w(n,"apl_path",e.updatePath),w(n,"svgShow",e.updateShow),qe&&(w(n,"new_edge4viewBox",e.adjustEdge),q(n,{}));},removeOption:function(e,t){var n=t.props,a={};a[t.optionName]="",ee(n,a);},remove:function(e){e.boundTargets.length&&(console.error("LeaderLineAttachment was not unbound by remove"),e.boundTargets.forEach(function(t){ie.captionLabel.unbind(e,t);}));}},pathLabel:{type:"label",argOptions:[{optionName:"text",type:"string"}],stats:{color:{},startOffset:{},pathData:{}},init:function(e,t){return"string"==typeof t.text&&(e.text=t.text.trim()),!!e.text&&("string"==typeof t.color&&(e.color=t.color.trim()),e.outlineColor="string"==typeof t.outlineColor?t.outlineColor.trim():"#fff",$e(t.lineOffset)&&(e.lineOffset=t.lineOffset),ie.captionLabel.textStyleProps.forEach(function(n){null!=t[n]&&(e[n]=t[n]);}),e.updateColor=function(t){ie.captionLabel.updateColor(e,t);},e.updatePath=function(t){var n,a=e.curStats,i=e.aplStats,o=t.curStats,r=t.pathList.animVal||t.pathList.baseVal;r&&(a.pathData=n=ie.pathLabel.getOffsetPathData(r,o.line_strokeWidth/2+e.strokeWidth/2+e.height/4,1.25*e.height),x(n,i.pathData)&&(e.elmPath.setPathData(n),i.pathData=n,e.bBox=e.elmPosition.getBBox(),e.updateStartOffset(t)));},e.updateStartOffset=function(t){var n,a,i,o=e.curStats,r=e.aplStats,l=t.curStats;o.pathData&&(2!==e.semIndex||e.lineOffset)&&(n=E(o.pathData),i=0===e.semIndex?0:1===e.semIndex?n:n/2,2!==e.semIndex&&(a=Math.max(l.attach_plugBackLenSE[e.semIndex]||0,l.line_strokeWidth/2)+e.strokeWidth/2+e.height/4,i+=0===e.semIndex?a:-a,i=i<0?0:i>n?n:i),e.lineOffset&&(i+=e.lineOffset,i=i<0?0:i>n?n:i),o.startOffset=i,N(e,r,"startOffset",i)&&(e.elmOffset.startOffset.baseVal.value=i));},e.updateShow=function(t){ie.captionLabel.updateShow(e,t);},qe&&(e.adjustEdge=function(t,n){
e.bBox&&ie.captionLabel.adjustEdge(n,e.bBox,e.strokeWidth/2);}),!0)},getOffsetPathData:function(e,t,n){function a(e,t){return Math.abs(e.x-t.x)<r&&Math.abs(e.y-t.y)<r}var i,o,r=3,l=[];return e.forEach(function(e){var n,o,r,s,u,p,f;2===e.length?(n=S(e[0],e[1],t),i?(r=i.points,s=Math.atan2(r[1].y-r[0].y,r[0].x-r[1].x)-Math.atan2(e[0].y-e[1].y,e[1].x-e[0].x),s>=0&&s<=Math.PI?o={type:"line",points:n,inside:!0}:(p=d(r[0],r[1],t),u=d(n[1],n[0],t),(f=c(r[0],p,u,n[1]))?(r[1]=f,o={type:"line",points:[f,n[1]]}):(r[1]=a(u,p)?u:p,o={type:"line",points:[u,n[1]]}),i.len=h(r[0],r[1]))):o={type:"line",points:n},o.len=h(o.points[0],o.points[1]),l.push(i=o)):(l.push({type:"cubic",points:g(e[0],e[1],e[2],e[3],t,16)}),i=null);}),i=null,l.forEach(function(e){var a;"line"===e.type?(e.inside&&(i.len>t?(a=i.points,a[1]=d(a[0],a[1],-t),i.len=h(a[0],a[1])):(i.points=null,i.len=0),e.len>t+n?(a=e.points,a[0]=d(a[1],a[0],-(t+n)),e.len=h(a[0],a[1])):(e.points=null,e.len=0)),i=e):i=null;}),l.reduce(function(e,t){var n=t.points;return n&&(o&&a(n[0],o)||e.push({type:"M",values:[n[0].x,n[0].y]}),"line"===t.type?e.push({type:"L",values:[n[1].x,n[1].y]}):(n.shift(),n.forEach(function(t){e.push({type:"L",values:[t.x,t.y]});})),o=n[n.length-1]),e},[])},newText:function(e,t,n,a){var i,o,r,l,s,u,h,p,c,d;return r=t.createElementNS(je,"defs"),l=r.appendChild(t.createElementNS(je,"path")),l.id=i=n+"-path",s=t.createElementNS(je,"text"),u=s.appendChild(t.createElementNS(je,"textPath")),u.href.baseVal="#"+i,u.startOffset.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX,0),u.textContent=e,"boolean"!=typeof he&&(he="paintOrder"in s.style),a&&!he?(s.id=o=n+"-text",r.appendChild(s),h=t.createElementNS(je,"g"),c=h.appendChild(t.createElementNS(je,"use")),c.href.baseVal="#"+o,p=h.appendChild(t.createElementNS(je,"use")),p.href.baseVal="#"+o,d=c.style,d.strokeLinejoin="round",{elmPosition:s,elmPath:l,elmOffset:u,styleText:s.style,styleFill:p.style,styleStroke:d,styleShow:h.style,elmsAppend:[r,h]}):(d=s.style,a&&(d.strokeLinejoin="round",d.paintOrder="stroke"),{elmPosition:s,elmPath:l,elmOffset:u,styleText:d,styleFill:d,styleStroke:a?d:null,styleShow:d,elmsAppend:[r,s]})},initSvg:function(e,t){var n,a,i=ie.pathLabel.newText(e.text,t.baseWindow.document,ce+"-pathLabel-"+e._id,e.outlineColor);["elmPosition","elmPath","elmOffset","styleFill","styleShow","elmsAppend"].forEach(function(t){e[t]=i[t];}),e.isShown=!1,e.styleShow.visibility="hidden",ie.captionLabel.textStyleProps.forEach(function(t){null!=e[t]&&(i.styleText[t]=e[t]);}),i.elmsAppend.forEach(function(e){t.svg.appendChild(e);}),i.elmPath.setPathData([{type:"M",values:[0,100]},{type:"h",values:[100]}]),n=i.elmPosition.getBBox(),i.styleText.textAnchor=["start","end","middle"][e.semIndex],2!==e.semIndex||e.lineOffset||i.elmOffset.startOffset.baseVal.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PERCENTAGE,50),e.height=n.height,e.outlineColor&&(a=n.height/9,a=a>10?10:a<2?2:a,i.styleStroke.strokeWidth=a+"px",i.styleStroke.stroke=e.outlineColor),e.strokeWidth=a||0,P(e.aplStats,ie.pathLabel.stats),e.updateColor(t),e.updatePath(t),e.updateStartOffset(t),qe&&q(t,{}),e.updateShow(t);},bind:function(e,t){var n=t.props;return e.color||k(n,"cur_line_color",e.updateColor),k(n,"cur_line_strokeWidth",e.updatePath),k(n,"apl_path",e.updatePath),e.semIndex="startLabel"===t.optionName?0:"endLabel"===t.optionName?1:2,(2!==e.semIndex||e.lineOffset)&&k(n,"cur_attach_plugBackLenSE",e.updateStartOffset),k(n,"svgShow",e.updateShow),qe&&k(n,"new_edge4viewBox",e.adjustEdge),ie.pathLabel.initSvg(e,n),!0},unbind:function(e,t){var n=t.props;e.elmsAppend&&(e.elmsAppend.forEach(function(e){n.svg.removeChild(e);}),e.elmPosition=e.elmPath=e.elmOffset=e.styleFill=e.styleShow=e.elmsAppend=null),P(e.curStats,ie.pathLabel.stats),P(e.aplStats,ie.pathLabel.stats),e.color||w(n,"cur_line_color",e.updateColor),w(n,"cur_line_strokeWidth",e.updatePath),w(n,"apl_path",e.updatePath),(2!==e.semIndex||e.lineOffset)&&w(n,"cur_attach_plugBackLenSE",e.updateStartOffset),w(n,"svgShow",e.updateShow),qe&&(w(n,"new_edge4viewBox",e.adjustEdge),q(n,{}));},removeOption:function(e,t){var n=t.props,a={};a[t.optionName]="",ee(n,a);},remove:function(e){e.boundTargets.length&&(console.error("LeaderLineAttachment was not unbound by remove"),e.boundTargets.forEach(function(t){ie.pathLabel.unbind(e,t);}));}}},Object.keys(ie).forEach(function(e){te[e]=function(){return new oe(ie[e],Array.prototype.slice.call(arguments))};}),te.positionByWindowResize=!0,window.addEventListener("resize",nt.add(function(){te.positionByWindowResize&&Object.keys(lt).forEach(function(e){q(lt[e],{position:!0});});}),!1),te}();

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

//# sourceMappingURL=performance-now.js.map
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

      return this;
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

// Spacing between line and node
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
    if (val && val.showing) val.showing = false;
  });
}

function draw(name) {
  if (name.indexOf('mark.') !== 0) name = 'mark.' + name;

  var mark = cache(name);
  if (!mark) {
    console.error('Coachmark with name \'' + name + '\' not found');
    return;
  }

  mark.showing = true;
  mark.name = name;

  var coached = coach(mark);
  var text = addText(mark.text);

  // arrow(coached, text);
  leaderLine(text, coached);
}

function coach(mark) {
  if (!mark) {
    console.error('No mark specified');
    return;
  }

  var elm = document.querySelector(mark.target);
  if (!elm) {
    console.error('Couldn\'t find element \'' + mark.target + '\' for mark ' + mark.name);
    return;
  }

  cache.set('elm', elm);

  // if (elm.className.indexOf('draggable-source') === -1) elm.className += ' draggable-source';

  // elm.style.position = 'absolute';
  // elm.style['z-index'] = 102;

  var borderRadius = window.getComputedStyle(elm).getPropertyValue('border-radius');
  // borderRadius = parseInt(borderRadius, 10);

  var rect = elm.getBoundingClientRect();

  var top = rect.top;
  var left = rect.left;
  var width = rect.width;
  var height = rect.height;
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
  var elm = cache('elm');
  if (!elm) return;

  var text = cache.default('text', function () {
    return document.createElement('div');
  });

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
  textContainer.style.top = box.top + 'px';
  textContainer.style.left = box.left + 'px';
  textContainer.style.width = box.width + 'px';
  textContainer.style.height = box.height + 'px';

  textContainer.appendChild(text);
  document.body.appendChild(textContainer);

  text.className = 'coachmark-text draggable-source';
  // const ref = (text.innerText || text.textContent);
  text.textContent = textStr;

  return text;
}

function leaderLine(from, to) {
  if (!from || !to) return;

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

// Draw arrow from one node to another
function createActionButton(mark) {
  var icon = 'X';
  var action = clear;

  var flow = cache('flow');
  if (mark.flow) flow = cache.set('flow', mark.flow);

  if (flow) {
    var next = flow.getNext(mark.name);
    if (next) {
      icon = nextButtonHTML();
      action = function action() {
        draw(next);
      };
    } else cache.remove('flow');
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

/* Calculations Methods */

// function dist(pt1, pt2) {
//   return Math.sqrt(
//     Math.pow(pt2[0] - pt1[0], 2)
//     *
//     Math.pow(pt2[1] - pt1[1], 2)
//   );
// }

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

___$insertStyle(".coachmark {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  /*background: #000;*/\n  /*opacity: 0.60;*/\n  z-index: 100; }\n\n.coachmark-top,\n.coachmark-left,\n.coachmark-right,\n.coachmark-bottom {\n  position: fixed;\n  background: #000;\n  opacity: 0.66;\n  margin: 0;\n  padding: 0; }\n\n.coachmark-top {\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 100%; }\n\n.coachmark-left {\n  left: 0; }\n\n.coachmark-right {\n  right: 0; }\n\n.coachmark-bottom {\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%; }\n\n.coachmark-glow {\n  position: absolute;\n  /*z-index: 101;*/\n  /*box-shadow: 0 0 120px 50px #fff;*/ }\n\n.coachmark-text-container {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 5vmin; }\n\n.coachmark-text {\n  font-size: 15vmin;\n  font-family: 'Short Stack', cursive;\n  line-height: 15vmin;\n  color: #fefefe;\n  text-shadow: 2px 2px #333;\n  z-index: 2; }\n\n.coachmark-svg {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 1; }\n\n.coachmark-line, .leader-line-line-path {\n  stroke: #fff;\n  stroke-width: 1vmin;\n  stroke-linecap: round; }\n\npath.coachmark-line {\n  stroke-width: 1vmin;\n  stroke-linecap: round; }\n\n.coachmark-action-btn {\n  z-index: 9999;\n  border-radius: 50%;\n  border: 3px solid #fff;\n  height: 56px;\n  width: 56px;\n  position: fixed;\n  top: 0;\n  right: 0;\n  color: #fff;\n  margin: 5vmin;\n  font-size: 36px;\n  line-height: 51px;\n  text-align: center;\n  cursor: pointer;\n  box-shadow: 0 2px 2px 0 rgba(255, 255, 255, 0.12), 0 1px 5px 0 rgba(255, 255, 255, 0.12), 0 3px 1px -2px rgba(255, 255, 255, 0.2);\n  font-family: sans-serif; }\n\n.coachmark-next-button use {\n  fill: #fff; }\n\n/* Override Leader-Line Settings */\n.leader-line-plugs-face {\n  marker-end: url(#arrowhead0) !important;\n  stroke-width: 1px; }\n\n.leader-line path {\n  filter: 'url(#coachmark-chalk)'; }\n\npath.coachmark-marker {\n  stroke: #fff;\n  stroke-width: 1.33vmin;\n  stroke-linecap: round; }\n");

function injectFonts() {
  var link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('href', 'https://fonts.googleapis.com/css?family=Short+Stack');
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

function noop() {}

function assign(tar, src) {
	for (var k in src) tar[k] = src[k];
	return tar;
}

function appendNode(node, target) {
	target.appendChild(node);
}

function insertNode(node, target, anchor) {
	target.insertBefore(node, anchor);
}

function detachNode(node) {
	node.parentNode.removeChild(node);
}

function createElement(name) {
	return document.createElement(name);
}

function createText(data) {
	return document.createTextNode(data);
}

function blankObject() {
	return Object.create(null);
}

function destroy(detach) {
	this.destroy = noop;
	this.fire('destroy');
	this.set = noop;

	this._fragment.d(detach !== false);
	this._fragment = null;
	this._state = {};
}

function _differs(a, b) {
	return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}

function fire(eventName, data) {
	var handlers =
		eventName in this._handlers && this._handlers[eventName].slice();
	if (!handlers) return;

	for (var i = 0; i < handlers.length; i += 1) {
		var handler = handlers[i];

		if (!handler.__calling) {
			handler.__calling = true;
			handler.call(this, data);
			handler.__calling = false;
		}
	}
}

function get$1() {
	return this._state;
}

function init$1(component, options) {
	component._handlers = blankObject();
	component._bind = options._bind;

	component.options = options;
	component.root = options.root || component;
	component.store = component.root.store || options.store;
}

function on(eventName, handler) {
	var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
	handlers.push(handler);

	return {
		cancel: function() {
			var index = handlers.indexOf(handler);
			if (~index) handlers.splice(index, 1);
		}
	};
}

function set$1(newState) {
	this._set(assign({}, newState));
	if (this.root._lock) return;
	this.root._lock = true;
	callAll(this.root._beforecreate);
	callAll(this.root._oncreate);
	callAll(this.root._aftercreate);
	this.root._lock = false;
}

function _set(newState) {
	var oldState = this._state,
		changed = {},
		dirty = false;

	for (var key in newState) {
		if (this._differs(newState[key], oldState[key])) changed[key] = dirty = true;
	}
	if (!dirty) return;

	this._state = assign(assign({}, oldState), newState);
	this._recompute(changed, this._state);
	if (this._bind) this._bind(changed, this._state);

	if (this._fragment) {
		this.fire("state", { changed: changed, current: this._state, previous: oldState });
		this._fragment.p(changed, this._state);
		this.fire("update", { changed: changed, current: this._state, previous: oldState });
	}
}

function callAll(fns) {
	while (fns && fns.length) fns.shift()();
}

function _mount(target, anchor) {
	this._fragment[this._fragment.i ? 'i' : 'm'](target, anchor || null);
}

var proto = {
	destroy,
	get: get$1,
	fire,
	on,
	set: set$1,
	_recompute: noop,
	_set,
	_mount,
	_differs
};

/* src/components/Overlay.html generated by Svelte v2.7.0 */
function data() {
	return {
		shown: false
	};
}

var methods = {
	show: function show(element) {
		var rect = elm.getBoundingClientRect();

		var top = rect.top;
		var left = rect.left;
		var width = rect.width;
		var height = rect.height;
		var right = left + width;
		var bottom = top + height;

		this.refs.top.style.height = top + 'px';
		this.refs.left.style.top = top + 'px';
		this.refs.right.style.top = this.refs.left.style.top;
		this.refs.left.style.height = height + 'px';
		this.refs.right.style.height = this.refs.left.style.height;
		this.refs.left.style.width = left + 'px';
		this.refs.right.style.left = right + 'px';
		this.refs.bottom.style.top = bottom + 'px';

		this.set({ shown: true });
	},
	hide: function hide() {
		this.set({ shown: false });
	}
};

function add_css() {
	var style = createElement("style");
	style.id = 'svelte-1u07vpg-style';
	style.textContent = ".hidden.svelte-1u07vpg{display:none}.coachmark-top.svelte-1u07vpg,.coachmark-left.svelte-1u07vpg,.coachmark-right.svelte-1u07vpg,.coachmark-bottom.svelte-1u07vpg{position:fixed;background:#000;opacity:0.66;margin:0;padding:0}.coachmark-top.svelte-1u07vpg{top:0;left:0;right:0;width:100%}.coachmark-left.svelte-1u07vpg{left:0}.coachmark-right.svelte-1u07vpg{right:0}.coachmark-bottom.svelte-1u07vpg{bottom:0;left:0;right:0;width:100%}";
	appendNode(style, document.head);
}

function create_main_fragment(component, ctx) {
	var div, div_class_value, text, div_1, text_1, div_2, text_2, div_3;

	return {
		c: function c() {
			div = createElement("div");
			text = createText("\n");
			div_1 = createElement("div");
			text_1 = createText("\n");
			div_2 = createElement("div");
			text_2 = createText("\n");
			div_3 = createElement("div");
			div.className = div_class_value = "coachmark-top " + (ctx.shown ? 'hidden' : '') + " svelte-1u07vpg";
			div_1.className = "coachmark-right svelte-1u07vpg";
			div_2.className = "coachmark-bottom svelte-1u07vpg";
			div_3.className = "coachmark-left svelte-1u07vpg";
		},
		m: function m(target, anchor) {
			insertNode(div, target, anchor);
			component.refs.top = div;
			insertNode(text, target, anchor);
			insertNode(div_1, target, anchor);
			component.refs.right = div_1;
			insertNode(text_1, target, anchor);
			insertNode(div_2, target, anchor);
			component.refs.bottom = div_2;
			insertNode(text_2, target, anchor);
			insertNode(div_3, target, anchor);
			component.refs.left = div_3;
		},
		p: function p(changed, ctx) {
			if (changed.shown && div_class_value !== (div_class_value = "coachmark-top " + (ctx.shown ? 'hidden' : '') + " svelte-1u07vpg")) {
				div.className = div_class_value;
			}
		},
		d: function d(detach) {
			if (detach) {
				detachNode(div);
			}

			if (component.refs.top === div) component.refs.top = null;
			if (detach) {
				detachNode(text);
				detachNode(div_1);
			}

			if (component.refs.right === div_1) component.refs.right = null;
			if (detach) {
				detachNode(text_1);
				detachNode(div_2);
			}

			if (component.refs.bottom === div_2) component.refs.bottom = null;
			if (detach) {
				detachNode(text_2);
				detachNode(div_3);
			}

			if (component.refs.left === div_3) component.refs.left = null;
		}
	};
}

function Overlay(options) {
	init$1(this, options);
	this.refs = {};
	this._state = assign(data(), options.data);
	this._intro = true;

	if (!document.getElementById("svelte-1u07vpg-style")) add_css();

	this._fragment = create_main_fragment(this, this._state);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);
	}
}

assign(Overlay.prototype, proto);
assign(Overlay.prototype, methods);

console.log(Overlay);

document.addEventListener('DOMContentLoaded', function () {
  var overlay = new Overlay({
    target: document.querySelector('body'),
    data: { name: 'world' }
  });

  console.log('overlay', overlay);
});

// Run on module load
init();

window.CoachmarkCache = cache;

var index = {
  // Add a coachmark
  add: function add(name) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (!(typeof name === 'string')) {
      config = name;
      name = Math.random().toString(36).substr(2);
    }

    if (!config.text) {
      console.log('No text specified');
      return;
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
