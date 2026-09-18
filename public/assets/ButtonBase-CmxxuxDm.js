import{r as e,t}from"./rolldown-runtime-hePW80VL.js";import{$ as n,A as r,J as i,Q as a,X as o,Z as s,c,et as l,k as u,l as d,nt as f,q as p,rt as m,tt as h,u as g,x as _}from"./utils-DHGSHddF.js";import{o as v,t as y}from"./jsx-runtime-DE_G_NdH.js";import{c as b,d as x,m as ee,s as te,u as S}from"./createSimplePaletteValueFilter-CGOTKmc2.js";var C=t((e=>{var t=typeof Symbol==`function`&&Symbol.for,n=t?Symbol.for(`react.element`):60103,r=t?Symbol.for(`react.portal`):60106,i=t?Symbol.for(`react.fragment`):60107,a=t?Symbol.for(`react.strict_mode`):60108,o=t?Symbol.for(`react.profiler`):60114,s=t?Symbol.for(`react.provider`):60109,c=t?Symbol.for(`react.context`):60110,l=t?Symbol.for(`react.async_mode`):60111,u=t?Symbol.for(`react.concurrent_mode`):60111,d=t?Symbol.for(`react.forward_ref`):60112,f=t?Symbol.for(`react.suspense`):60113,p=t?Symbol.for(`react.suspense_list`):60120,m=t?Symbol.for(`react.memo`):60115,h=t?Symbol.for(`react.lazy`):60116,g=t?Symbol.for(`react.block`):60121,_=t?Symbol.for(`react.fundamental`):60117,v=t?Symbol.for(`react.responder`):60118,y=t?Symbol.for(`react.scope`):60119;function b(e){if(typeof e==`object`&&e){var t=e.$$typeof;switch(t){case n:switch(e=e.type,e){case l:case u:case i:case o:case a:case f:return e;default:switch(e&&=e.$$typeof,e){case c:case d:case h:case m:case s:return e;default:return t}}case r:return t}}}function x(e){return b(e)===u}e.AsyncMode=l,e.ConcurrentMode=u,e.ContextConsumer=c,e.ContextProvider=s,e.Element=n,e.ForwardRef=d,e.Fragment=i,e.Lazy=h,e.Memo=m,e.Portal=r,e.Profiler=o,e.StrictMode=a,e.Suspense=f,e.isAsyncMode=function(e){return x(e)||b(e)===l},e.isConcurrentMode=x,e.isContextConsumer=function(e){return b(e)===c},e.isContextProvider=function(e){return b(e)===s},e.isElement=function(e){return typeof e==`object`&&!!e&&e.$$typeof===n},e.isForwardRef=function(e){return b(e)===d},e.isFragment=function(e){return b(e)===i},e.isLazy=function(e){return b(e)===h},e.isMemo=function(e){return b(e)===m},e.isPortal=function(e){return b(e)===r},e.isProfiler=function(e){return b(e)===o},e.isStrictMode=function(e){return b(e)===a},e.isSuspense=function(e){return b(e)===f},e.isValidElementType=function(e){return typeof e==`string`||typeof e==`function`||e===i||e===u||e===o||e===a||e===f||e===p||typeof e==`object`&&!!e&&(e.$$typeof===h||e.$$typeof===m||e.$$typeof===s||e.$$typeof===c||e.$$typeof===d||e.$$typeof===_||e.$$typeof===v||e.$$typeof===y||e.$$typeof===g)},e.typeOf=b})),w=t(((e,t)=>{t.exports=C()})),T=t(((e,t)=>{var n=w(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};s[n.ForwardRef]=a,s[n.Memo]=o;function c(e){return n.isMemo(e)?o:s[e.$$typeof]||r}var l=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;function h(e,t,n){if(typeof t!=`string`){if(m){var r=p(t);r&&r!==m&&h(e,r,n)}var a=u(t);d&&(a=a.concat(d(t)));for(var o=c(e),s=c(t),g=0;g<a.length;++g){var _=a[g];if(!i[_]&&!(n&&n[_])&&!(s&&s[_])&&!(o&&o[_])){var v=f(t,_);try{l(e,_,v)}catch{}}}}return e}t.exports=h})),E=e(v());T();var D=function(e,t){var r=arguments;if(t==null||!n.call(t,`css`))return E.createElement.apply(void 0,r);var i=r.length,s=Array(i);s[0]=o,s[1]=a(e,t);for(var c=2;c<i;c++)s[c]=r[c];return E.createElement.apply(null,s)};(function(e){var t;t||=e.JSX||={}})(D||={});var O=l(function(e,t){var n=e.styles,r=f([n],void 0,E.useContext(s)),i=E.useRef();return h(function(){var e=t.key+`-global`,n=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),a=!1,o=document.querySelector(`style[data-emotion="`+e+` `+r.name+`"]`);return t.sheet.tags.length&&(n.before=t.sheet.tags[0]),o!==null&&(a=!0,o.setAttribute(`data-emotion`,e),n.hydrate([o])),i.current=[n,a],function(){n.flush()}},[t]),h(function(){var e=i.current,n=e[0];if(e[1]){e[1]=!1;return}r.next!==void 0&&m(t,r.next,!0),n.tags.length&&(n.before=n.tags[n.tags.length-1].nextElementSibling,n.flush()),t.insert(``,r,n,!1)},[t,r.name]),null});function k(){return f([...arguments])}function A(){var e=k.apply(void 0,arguments),t=`animation-`+e.name;return{name:t,styles:`@keyframes `+t+`{`+e.styles+`}`,anim:1,toString:function(){return`_EMO_`+this.name+`_`+this.styles+`_EMO_`}}}var j=x;function M(e){try{return e.matches(`:focus-visible`)}catch{}return!1}function ne(e){let{focusableWhenDisabled:t,disabled:n,composite:r=!1,tabIndex:i=0,isNativeButton:a}=e,o=r&&t!==!1,s=r&&t===!1;return E.useMemo(()=>{let e={onKeyDown(e){n&&t&&e.key!==`Tab`&&e.preventDefault()}};return r||(e.tabIndex=i,!a&&n&&(e.tabIndex=t?i:-1)),(a&&(t||o)||!a&&n)&&(e[`aria-disabled`]=n),a&&(!t||s)&&(e.disabled=n),e},[r,n,t,o,s,a,i])}var re={};function ie(e){let{nativeButton:t,nativeButtonProp:n,internalNativeButton:r=t,allowInferredHostMismatch:i=!1,disabled:a,type:o,hasFormAction:s=!1,tabIndex:c=0,focusableWhenDisabled:l,stopEventPropagation:u=!1,onBeforeKeyDown:d,onBeforeKeyUp:f}=e,p=E.useRef(null),m=l===!0,h=ne({focusableWhenDisabled:m,disabled:a,isNativeButton:t,tabIndex:c}),g=E.useCallback(()=>{let e=p.current;return e==null?t:e.tagName===`BUTTON`||!!(e.tagName===`A`&&e.href)},[t]),_=E.useMemo(()=>{let e=m?{}:{tabIndex:a?-1:c};return t?(e.type=o===void 0&&!s?`button`:o,m||(e.disabled=a)):(e.role=`button`,!m&&a&&(e[`aria-disabled`]=a)),m?{...e,...h}:e},[a,m,h,s,t,c,o]);return{getButtonProps:E.useCallback((e=re)=>{let{onClick:t,onKeyDown:n,onKeyUp:r,...i}=e,o=e=>{if(u&&e.stopPropagation(),a){e.preventDefault();return}t?.(e)},s=e=>{if(m&&h.onKeyDown(e),!a&&(d?.(e),n?.(e),!(e.target!==e.currentTarget||g()))){if(e.key===` `){e.preventDefault();return}e.key===`Enter`&&(e.preventDefault(),e.currentTarget.click())}},c=e=>{a||(f?.(e),r?.(e),e.target===e.currentTarget&&!g()&&e.key===` `&&!e.defaultPrevented&&e.currentTarget.click())};return{..._,...i,onClick:o,onKeyDown:s,onKeyUp:c}},[_,a,m,h,g,d,f,u]),rootRef:p}}var N=class e{static create(){return new e}static use(){let t=b(e.create).current,[n,r]=E.useState(!1);return t.shouldMount=n,t.setShouldMount=r,E.useEffect(t.mountEffect,[n]),t}constructor(){this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){return this.mounted||(this.mounted=oe(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())};start(...e){this.mount().then(()=>this.ref.current?.start(...e))}stop(...e){this.mount().then(()=>this.ref.current?.stop(...e))}pulsate(...e){this.mount().then(()=>this.ref.current?.pulsate(...e))}};function ae(){return N.use()}function oe(){let e,t,n=new Promise((n,r)=>{e=n,t=r});return n.resolve=e,n.reject=t,n}var P=[];function F(e){E.useEffect(e,P)}var I=class e{static create(){return new e}currentId=null;start(e,t){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,t()},e)}clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)};disposeEffect=()=>this.clear};function L(){let e=b(I.create).current;return F(e.disposeEffect),e}var R=y();function z(e){let{className:t,classes:n,pulsate:r=!1,rippleX:a,rippleY:o,rippleSize:s,in:c,onExited:l,timeout:u}=e,[d,f]=E.useState(!1),p=L(),m=E.useRef(!1),h=E.useRef(l);h.current=l;let g=l!=null,_=i(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),v={width:s,height:s,top:-(s/2)+o,left:-(s/2)+a},y=i(n.child,d&&n.childLeaving,r&&n.childPulsate);return!c&&!d&&f(!0),E.useEffect(()=>{!c&&g?m.current||(m.current=!0,p.start(u,()=>{m.current=!1,h.current?.()})):(m.current=!1,p.clear())},[p,g,c,u]),(0,R.jsx)(`span`,{className:_,style:v,children:(0,R.jsx)(`span`,{className:y})})}var B=u(`MuiTouchRipple`,[`root`,`ripple`,`rippleVisible`,`ripplePulsate`,`child`,`childLeaving`,`childPulsate`]),V=550,H={},U=[],W=()=>{};function G(e,t){let n=new Set(t),r=new Map,i=[];for(let t of e)n.has(t)?i.length>0&&(r.set(t,i),i=[]):i.push(t);let a=[];for(let e of t){let t=r.get(e);t&&a.push(...t),a.push(e)}return a.push(...i),a}function K({event:e,element:t,center:n}){let r=t?t.getBoundingClientRect():{width:0,height:0,left:0,top:0},i,a;if(n||e===void 0||e.clientX===0&&e.clientY===0||!e.clientX&&!e.touches)i=Math.round(r.width/2),a=Math.round(r.height/2);else{let{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;i=Math.round(t-r.left),a=Math.round(n-r.top)}let o;if(n)o=Math.sqrt((2*r.width**2+r.height**2)/3),o%2==0&&(o+=1);else{let e=Math.max(Math.abs((t?t.clientWidth:0)-i),i)*2+2,n=Math.max(Math.abs((t?t.clientHeight:0)-a),a)*2+2;o=Math.sqrt(e**2+n**2)}return{rippleX:i,rippleY:a,rippleSize:o}}var q=A`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,J=A`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,se=A`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`;function Y(e){if(e.motion.reducedMotion===`always`)return null;let t=k`
    &.${B.rippleVisible} {
      animation-name: ${q};
      animation-duration: ${V}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    &.${B.ripplePulsate} {
      animation-duration: ${e.transitions.duration.shorter}ms;
    }

    & .${B.childLeaving} {
      animation-name: ${J};
      animation-duration: ${V}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    & .${B.childPulsate} {
      animation-name: ${se};
      animation-duration: 2500ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
      animation-iteration-count: infinite;
      animation-delay: 200ms;
    }
  `;return e.motion.reducedMotion===`system`?k`
      @media (prefers-reduced-motion: no-preference) {
        ${t}
      }
    `:t}var ce=g(`span`,{name:`MuiTouchRipple`,slot:`Root`})({overflow:`hidden`,pointerEvents:`none`,position:`absolute`,zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:`inherit`}),X=g(z,{name:`MuiTouchRipple`,slot:`Ripple`})`
  opacity: 0;
  position: absolute;

  &.${B.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
  }

  /*
   * Order matters: 'child', 'childLeaving' and 'childPulsate' apply to the same
   * element with equal specificity, so the later rule wins. 'child' must come
   * before 'childLeaving' so the leaving 'opacity: 0' takes precedence. A focus
   * (pulsate) ripple keeps 'pulsateKeyframe' (no opacity animation) on exit, so
   * it relies on this static 'opacity: 0' to disappear on blur instead of
   * lingering until removal.
   */
  & .${B.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${B.childLeaving} {
    opacity: 0;
  }

  & .${B.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
  }

  ${({theme:e})=>Y(e)}
`,le=E.forwardRef(function(e,t){let n=c({props:e,name:`MuiTouchRipple`}),r=ee(),a=te(r.motion.reducedMotion,!1),{center:o=!1,classes:s=H,className:l,...u}=n,[d,f]=E.useState({items:U,order:U}),p=d.items,m=E.useRef(0),h=E.useRef(null),g=E.useRef(!1);F(()=>(g.current=!0,()=>{g.current=!1})),E.useEffect(()=>{h.current&&=(h.current(),null)},[p]);let _=E.useRef(!1),v=L(),y=E.useRef(null),b=E.useRef(null),x=j(e=>{g.current&&f(t=>{let n=t.items.filter(t=>t.key!==e);return{items:n,order:G(t.order.filter(t=>t!==e),n.filter(e=>!e.exiting).map(e=>e.key))}})}),S=j(e=>{let{pulsate:t,rippleX:n,rippleY:r,rippleSize:i,cb:a}=e,o=m.current;m.current+=1,f(e=>{let a=[...e.items,{key:o,pulsate:t,rippleX:n,rippleY:r,rippleSize:i,exiting:!1}];return{items:a,order:G(e.order,a.filter(e=>!e.exiting).map(e=>e.key))}}),h.current=a}),C=j((e=H,t=H,n=W)=>{let{pulsate:r=!1,center:i=o||t.pulsate,fakeElement:a=!1}=t;if(e?.type===`mousedown`&&_.current){_.current=!1;return}e?.type===`touchstart`&&(_.current=!0);let{rippleX:s,rippleY:c,rippleSize:l}=K({event:e,element:a?null:b.current,center:i});e?.touches?y.current===null&&(y.current=()=>{S({pulsate:r,rippleX:s,rippleY:c,rippleSize:l,cb:n})},v.start(80,()=>{y.current&&=(y.current(),null)})):S({pulsate:r,rippleX:s,rippleY:c,rippleSize:l,cb:n})}),w=j(()=>{C(H,{pulsate:!0})}),T=j((e,t)=>{if(v.clear(),e?.type===`touchend`&&y.current){y.current(),y.current=null,v.start(0,()=>{T(e,t)});return}y.current=null,f(e=>{let t=e.items.findIndex(e=>!e.exiting);if(t===-1)return e;let n=e.items.slice();return n[t]={...n[t],exiting:!0},{items:n,order:G(e.order,n.filter(e=>!e.exiting).map(e=>e.key))}}),h.current=t});E.useImperativeHandle(t,()=>({pulsate:w,start:C,stop:T}),[w,C,T]);let D=new Map(p.map(e=>[e.key,e])),O=d.order.map(e=>D.get(e)).filter(Boolean);return(0,R.jsx)(ce,{className:i(B.root,s.root,l),ref:b,...u,children:O.map(e=>(0,R.jsx)(X,{classes:{ripple:i(s.ripple,B.ripple),rippleVisible:i(s.rippleVisible,B.rippleVisible),ripplePulsate:i(s.ripplePulsate,B.ripplePulsate),child:i(s.child,B.child),childLeaving:i(s.childLeaving,B.childLeaving),childPulsate:i(s.childPulsate,B.childPulsate)},timeout:a.shouldReduceMotion?0:V,pulsate:e.pulsate,rippleX:e.rippleX,rippleY:e.rippleY,rippleSize:e.rippleSize,in:!e.exiting,onExited:()=>x(e.key)},e.key))})});function ue(e){return r(`MuiButtonBase`,e)}var Z=u(`MuiButtonBase`,[`root`,`disabled`,`focusVisible`]),de=e=>{let{disabled:t,focusVisible:n,focusVisibleClassName:r,suppressFocusVisible:i,classes:a}=e,o=p({root:[`root`,t&&`disabled`,n&&!i&&`focusVisible`]},ue,a);return n&&!i&&r&&(o.root+=` ${r}`),o},fe=g(`button`,{name:`MuiButtonBase`,slot:`Root`})(d(({theme:e})=>({display:`inline-flex`,alignItems:`center`,justifyContent:`center`,position:`relative`,boxSizing:`border-box`,WebkitTapHighlightColor:`transparent`,backgroundColor:`transparent`,outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:`pointer`,userSelect:`none`,verticalAlign:`middle`,MozAppearance:`none`,WebkitAppearance:`none`,textDecoration:`none`,color:`inherit`,"&::-moz-focus-inner":{borderStyle:`none`},[`&.${Z.disabled}`]:{pointerEvents:`none`,cursor:`default`},"@media print":{colorAdjust:`exact`},variants:[{props:{internalDisabledThemeFocusVisible:!1},style:e.focusVisible&&{..._,[`&.${Z.focusVisible}`]:e.focusVisible}}]}))),pe=E.forwardRef(function(e,t){let n=c({props:e,name:`MuiButtonBase`}),{action:r,centerRipple:a=!1,children:o,className:s,component:l=`button`,disabled:u=!1,disableRipple:d=!1,disableTouchRipple:f=!1,focusRipple:p=!1,focusVisibleClassName:m,focusableWhenDisabled:h,suppressFocusVisible:g=!1,internalNativeButton:_,internalDisabledThemeFocusVisible:v=!1,LinkComponent:y=`a`,nativeButton:b,onBlur:x,onClick:ee,onContextMenu:te,onDragLeave:C,onFocus:w,onFocusVisible:T,onKeyDown:D,onKeyUp:O,onMouseDown:k,onMouseLeave:A,onMouseUp:ne,onTouchEnd:re,onTouchMove:N,onTouchStart:oe,tabIndex:P=0,TouchRippleProps:F,touchRippleRef:I,type:L,...z}=n,B=!!(z.href||z.to),V=!!z.formAction,H=l;H===`button`&&B&&(H=y);let U=typeof H==`string`?H===`button`:_??!1,W=b??U,G=ae(),K=S(G.ref,I),[q,J]=E.useState(!1);(u||g)&&q&&J(!1);let se=j(e=>{p&&!e.repeat&&q&&e.key===` `&&G.stop(e,()=>{G.start(e)})}),Y=j(e=>{p&&e.key===` `&&q&&!e.defaultPrevented&&G.stop(e,()=>{G.pulsate(e)})}),{getButtonProps:ce,rootRef:X}=ie({nativeButton:W,nativeButtonProp:b,internalNativeButton:U,allowInferredHostMismatch:B||typeof H==`string`,disabled:u,type:L,hasFormAction:V,tabIndex:P,onBeforeKeyDown:se,onBeforeKeyUp:Y}),{onClick:ue,onKeyDown:Z,onKeyUp:pe,...me}=ce({onClick:ee,onKeyDown:D,onKeyUp:O});E.useImperativeHandle(r,()=>({focusVisible:()=>{J(!0),X.current.focus()}}),[X]);let he=G.shouldMount&&!d&&!u;E.useEffect(()=>{q&&p&&!d&&G.pulsate()},[d,p,q,G]);let ge=Q(G,`start`,k,f),_e=Q(G,`stop`,te,f),ve=Q(G,`stop`,C,f),ye=Q(G,`stop`,ne,f),be=Q(G,`stop`,e=>{q&&e.preventDefault(),A&&A(e)},f),xe=Q(G,`start`,oe,f),Se=Q(G,`stop`,re,f),Ce=Q(G,`stop`,N,f),we=Q(G,`stop`,e=>{M(e.target)||J(!1),x&&x(e)},!1),Te=j(e=>{X.current||=e.currentTarget,!g&&M(e.target)&&(J(!0),T&&T(e)),w&&w(e)}),$={};B&&($.tabIndex=u?-1:P,u&&($[`aria-disabled`]=u),$.type=L);let Ee=S(t,X),De={...n,centerRipple:a,component:l,disabled:u,disableRipple:d,disableTouchRipple:f,focusRipple:p,suppressFocusVisible:g,tabIndex:P,focusVisible:q,internalDisabledThemeFocusVisible:v},Oe=de(De);return(0,R.jsxs)(fe,{as:H,className:i(Oe.root,s),ownerState:De,onBlur:we,onClick:ue,onContextMenu:_e,onFocus:Te,onKeyDown:Z,onKeyUp:pe,onMouseDown:ge,onMouseLeave:be,onMouseUp:ye,onDragLeave:ve,onTouchEnd:Se,onTouchMove:Ce,onTouchStart:xe,ref:Ee,...B?$:me,...z,children:[o,he?(0,R.jsx)(le,{ref:K,center:a,...F}):null]})});function Q(e,t,n,r=!1){return j(i=>(n&&n(i),r||e[t](i),!0))}export{F as a,O as c,L as i,k as l,Z as n,M as o,I as r,j as s,pe as t,A as u};