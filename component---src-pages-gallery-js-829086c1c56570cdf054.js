"use strict";(self.webpackChunkmehesapartman_hu=self.webpackChunkmehesapartman_hu||[]).push([[822],{5363:function(e,n,t){t.r(n),t.d(n,{default:function(){return q}});var r=t(2359),o=t(7294),a=t(6156),c=t(4699),i=t(1253),l=t(5655);var u=function(e,n){var t=(0,o.useRef)(!0);(0,o.useEffect)((function(){if(!t.current)return e();t.current=!1}),n)},s=t(9424),f=t(2260),d=t(5900),p=t.n(d),v=t(5513),b=(0,t(8870).Z)("carousel-caption"),h=t(9541),m=t(5893),y=["as","bsPrefix","className"];function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var g=o.forwardRef((function(e,n){var t=e.as,r=void 0===t?"div":t,o=e.bsPrefix,a=e.className,c=(0,i.Z)(e,y),l=p()(a,(0,h.vE)(o,"carousel-item"));return(0,m.jsx)(r,O(O({ref:n},c),{},{className:l}))}));g.displayName="CarouselItem";var j=g;function x(e,n){var t=0;return o.Children.map(e,(function(e){return o.isValidElement(e)?n(e,t++):e}))}var E=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter((function(e){return null!=e})).reduce((function(e,n){if("function"!=typeof n)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?n:function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];e.apply(this,r),n.apply(this,r)}}),null)},C=["as","disabled","onKeyDown"];function P(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function N(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?P(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function k(e){return!e||"#"===e.trim()}var S=o.forwardRef((function(e,n){var t=e.as,r=void 0===t?"a":t,o=e.disabled,a=e.onKeyDown,c=(0,i.Z)(e,C),l=function(e){var n=c.href,t=c.onClick;(o||k(n))&&e.preventDefault(),o?e.stopPropagation():null==t||t(e)};return k(c.href)&&(c.role=c.role||"button",c.href=c.href||"#"),o&&(c.tabIndex=-1,c["aria-disabled"]=!0),(0,m.jsx)(r,N(N({ref:n},c),{},{onClick:l,onKeyDown:E((function(e){" "===e.key&&(e.preventDefault(),l(e))}),a)}))}));S.displayName="SafeAnchor";var D=S,I=t(1868),Z=t(9059),L=t(3275),R=["as","bsPrefix","slide","fade","controls","indicators","indicatorLabels","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","variant","className","children"];function M(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function A(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?M(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var T={slide:!0,fade:!1,controls:!0,indicators:!0,indicatorLabels:[],defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:(0,m.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:(0,m.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var K=o.forwardRef((function(e,n){var t=(0,v.Ch)(e,{activeIndex:"onSelect"}),r=t.as,a=void 0===r?"div":r,d=t.bsPrefix,b=t.slide,y=t.fade,w=t.controls,O=t.indicators,g=t.indicatorLabels,j=t.activeIndex,E=t.onSelect,C=t.onSlide,P=t.onSlid,N=t.interval,k=t.keyboard,S=t.onKeyDown,M=t.pause,T=t.onMouseOver,K=t.onMouseOut,V=t.wrap,z=t.touch,_=t.onTouchStart,B=t.onTouchMove,X=t.onTouchEnd,F=t.prevIcon,G=t.prevLabel,H=t.nextIcon,q=t.nextLabel,J=t.variant,Q=t.className,U=t.children,W=(0,i.Z)(t,R),Y=(0,h.vE)(d,"carousel"),$=(0,h.SC)(),ee=(0,o.useRef)(null),ne=(0,o.useState)("next"),te=(0,c.Z)(ne,2),re=te[0],oe=te[1],ae=(0,o.useState)(!1),ce=(0,c.Z)(ae,2),ie=ce[0],le=ce[1],ue=(0,o.useState)(!1),se=(0,c.Z)(ue,2),fe=se[0],de=se[1],pe=(0,o.useState)(j||0),ve=(0,c.Z)(pe,2),be=ve[0],he=ve[1];fe||j===be||(ee.current?oe(ee.current):oe((j||0)>be?"next":"prev"),b&&de(!0),he(j||0)),(0,o.useEffect)((function(){ee.current&&(ee.current=null)}));var me,ye=0;!function(e,n){var t=0;o.Children.forEach(e,(function(e){o.isValidElement(e)&&n(e,t++)}))}(U,(function(e,n){++ye,n===j&&(me=e.props.interval)}));var we=(0,s.Z)(me),Oe=(0,o.useCallback)((function(e){if(!fe){var n=be-1;if(n<0){if(!V)return;n=ye-1}ee.current="prev",null==E||E(n,e)}}),[fe,be,E,V,ye]),ge=(0,l.Z)((function(e){if(!fe){var n=be+1;if(n>=ye){if(!V)return;n=0}ee.current="next",null==E||E(n,e)}})),je=(0,o.useRef)();(0,o.useImperativeHandle)(n,(function(){return{element:je.current,prev:Oe,next:ge}}));var xe=(0,l.Z)((function(){!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;var n=getComputedStyle(e);return"none"!==n.display&&"hidden"!==n.visibility&&"none"!==getComputedStyle(e.parentNode).display}(je.current)&&($?Oe():ge())})),Ee="next"===re?"start":"end";u((function(){b||(null==C||C(be,Ee),null==P||P(be,Ee))}),[be]);var Ce="".concat(Y,"-item-").concat(re),Pe="".concat(Y,"-item-").concat(Ee),Ne=(0,o.useCallback)((function(e){(0,Z.Z)(e),null==C||C(be,Ee)}),[C,be,Ee]),ke=(0,o.useCallback)((function(){de(!1),null==P||P(be,Ee)}),[P,be,Ee]),Se=(0,o.useCallback)((function(e){if(k&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void($?ge(e):Oe(e));case"ArrowRight":return e.preventDefault(),void($?Oe(e):ge(e))}null==S||S(e)}),[k,S,Oe,ge,$]),De=(0,o.useCallback)((function(e){"hover"===M&&le(!0),null==T||T(e)}),[M,T]),Ie=(0,o.useCallback)((function(e){le(!1),null==K||K(e)}),[K]),Ze=(0,o.useRef)(0),Le=(0,o.useRef)(0),Re=(0,f.Z)(),Me=(0,o.useCallback)((function(e){Ze.current=e.touches[0].clientX,Le.current=0,"hover"===M&&le(!0),null==_||_(e)}),[M,_]),Ae=(0,o.useCallback)((function(e){e.touches&&e.touches.length>1?Le.current=0:Le.current=e.touches[0].clientX-Ze.current,null==B||B(e)}),[B]),Te=(0,o.useCallback)((function(e){if(z){var n=Le.current;Math.abs(n)>40&&(n>0?Oe(e):ge(e))}"hover"===M&&Re.set((function(){le(!1)}),N||void 0),null==X||X(e)}),[z,M,Oe,ge,Re,N,X]),Ke=null!=N&&!ie&&!fe,Ve=(0,o.useRef)();(0,o.useEffect)((function(){var e,n;if(Ke){var t=$?Oe:ge;return Ve.current=window.setInterval(document.visibilityState?xe:t,null!=(e=null!=(n=we.current)?n:N)?e:void 0),function(){null!==Ve.current&&clearInterval(Ve.current)}}}),[Ke,Oe,ge,we,N,xe,$]);var ze=(0,o.useMemo)((function(){return O&&Array.from({length:ye},(function(e,n){return function(e){null==E||E(n,e)}}))}),[O,ye,E]);return(0,m.jsxs)(a,A(A({ref:je},W),{},{onKeyDown:Se,onMouseOver:De,onMouseOut:Ie,onTouchStart:Me,onTouchMove:Ae,onTouchEnd:Te,className:p()(Q,Y,b&&"slide",y&&"".concat(Y,"-fade"),J&&"".concat(Y,"-").concat(J)),children:[O&&(0,m.jsx)("div",{className:"".concat(Y,"-indicators"),children:x(U,(function(e,n){return(0,m.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=g&&g.length?g[n]:"Slide ".concat(n+1),className:n===be?"active":void 0,onClick:ze?ze[n]:void 0,"aria-current":n===be},n)}))}),(0,m.jsx)("div",{className:"".concat(Y,"-inner"),children:x(U,(function(e,n){var t=n===be;return b?(0,m.jsx)(L.Z,{in:t,onEnter:t?Ne:void 0,onEntered:t?ke:void 0,addEndListener:I.Z,children:function(n,r){return o.cloneElement(e,A(A({},r),{},{className:p()(e.props.className,t&&"entered"!==n&&Ce,("entered"===n||"exiting"===n)&&"active",("entering"===n||"exiting"===n)&&Pe)}))}}):o.cloneElement(e,{className:p()(e.props.className,t&&"active")})}))}),w&&(0,m.jsxs)(m.Fragment,{children:[(V||0!==j)&&(0,m.jsxs)(D,{className:"".concat(Y,"-control-prev"),onClick:Oe,children:[F,G&&(0,m.jsx)("span",{className:"visually-hidden",children:G})]}),(V||j!==ye-1)&&(0,m.jsxs)(D,{className:"".concat(Y,"-control-next"),onClick:ge,children:[H,q&&(0,m.jsx)("span",{className:"visually-hidden",children:q})]})]})]}))}));K.displayName="Carousel",K.defaultProps=T;var V=Object.assign(K,{Caption:b,Item:j}),z=t(7154),_=t.n(z),B=t(1471),X=o.forwardRef((function(e,n){return o.createElement(B.r,_()({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 16 16"},e,{ref:n}),o.createElement("path",{fillRule:"evenodd",d:"M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"}))}));X.displayName="ChevronCompactRight";var F=o.forwardRef((function(e,n){return o.createElement(B.r,_()({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 16 16"},e,{ref:n}),o.createElement("path",{fillRule:"evenodd",d:"M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"}))}));F.displayName="ChevronCompactLeft";var G=t(9692),H=t(5164);function q(e){var n=e.data;return o.createElement(H.Z,null,o.createElement(J,{nextIcon:o.createElement(X,{size:"75%"}),nextLabel:null,prevIcon:o.createElement(F,{size:"75%"}),prevLabel:null},n.images.edges.map((function(e){return o.createElement(V.Item,{key:e.node.id},o.createElement(r.G,{image:(0,r.d)(e.node),alt:e.node.base.split("-").join(" ").split(".")[0]}))}))))}var J=(0,G.ZP)((function(e){return o.createElement(V,e)})).attrs({className:"h-auto w-50 p-0",indicators:!1}).withConfig({displayName:"gallery__StyledCarousel",componentId:"sc-3el8bz-0"})(['&:after{content:"";bottom:0;box-shadow:0 0 5rem rgba(0,0,0,0.66);left:0;position:absolute;right:0;top:0;}@media (max-width:670px){width:75% !important;}'])}}]);
//# sourceMappingURL=component---src-pages-gallery-js-829086c1c56570cdf054.js.map