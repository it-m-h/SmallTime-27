import{r as e}from"./rolldown-runtime-hePW80VL.js";import{A as t,J as n,W as r,c as i,i as a,k as o,l as s,q as c,t as l,u}from"./utils-DHGSHddF.js";import{o as d,t as f}from"./jsx-runtime-DE_G_NdH.js";import{l as p,u as m}from"./ButtonBase-CmxxuxDm.js";import{t as h}from"./createSimplePaletteValueFilter-CGOTKmc2.js";import{n as g}from"./Paper-CBEkhEVK.js";var _=g,v=e(d(),1);function y(e){return t(`MuiCircularProgress`,e)}o(`MuiCircularProgress`,[`root`,`determinate`,`indeterminate`,`colorPrimary`,`colorSecondary`,`svg`,`track`,`circle`,`circleDisableShrink`]);var b=f(),x=44,S=m`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,C=m`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,w=typeof S==`string`?null:p`
        animation: ${S} 1.4s linear infinite;
      `,T=typeof C==`string`?null:p`
        animation: ${C} 1.4s ease-in-out infinite;
      `,E=e=>{let{classes:t,variant:n,color:i,disableShrink:a}=e,o={root:[`root`,n,`color${r(i)}`],svg:[`svg`],track:[`track`],circle:[`circle`,a&&`circleDisableShrink`]};return c(o,y,t)},D=u(`span`,{name:`MuiCircularProgress`,slot:`Root`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.root,t[n.variant],t[`color${r(n.color)}`]]}})(s(({theme:e})=>{let t=l(e,{animation:`none`});return{display:`inline-block`,variants:[{props:{variant:`determinate`},style:{...a(e,`transform`)}},{props:{variant:`indeterminate`},style:w||{animation:`${S} 1.4s linear infinite`}},...t?[{props:{variant:`indeterminate`},style:t}]:[],...Object.entries(e.palette).filter(h()).map(([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}}))]}})),O=u(`svg`,{name:`MuiCircularProgress`,slot:`Svg`})({display:`block`}),k=u(`circle`,{name:`MuiCircularProgress`,slot:`Circle`,overridesResolver:(e,t)=>{let{ownerState:n}=e;return[t.circle,n.disableShrink&&t.circleDisableShrink]}})(s(({theme:e})=>{let t=l(e,{animation:`none`});return{stroke:`currentColor`,variants:[{props:{variant:`determinate`},style:{...a(e,`stroke-dashoffset`)}},{props:{variant:`indeterminate`},style:{strokeDasharray:`80px, 200px`,strokeDashoffset:0}},{props:({ownerState:e})=>e.variant===`indeterminate`&&!e.disableShrink,style:T||{animation:`${C} 1.4s ease-in-out infinite`}},...t?[{props:({ownerState:e})=>e.variant===`indeterminate`&&!e.disableShrink,style:t}]:[]]}})),A=u(`circle`,{name:`MuiCircularProgress`,slot:`Track`})(s(({theme:e})=>({stroke:`currentColor`,opacity:(e.vars||e).palette.action.activatedOpacity}))),j=v.forwardRef(function(e,t){let r=i({props:e,name:`MuiCircularProgress`}),{className:a,color:o=`primary`,disableShrink:s=!1,enableTrackSlot:c=!1,min:l,max:u,size:d=40,style:f,thickness:p=3.6,value:m=r.min??0,variant:h=`indeterminate`,...g}=r,_=l??0,v=u??100,y={...r,color:o,disableShrink:s,size:d,thickness:p,value:m,variant:h,enableTrackSlot:c},S=E(y),C={},w={},T={};if(h===`determinate`){let e=2*Math.PI*((x-p)/2),t=v-_;C.strokeDasharray=e.toFixed(3),C.strokeDashoffset=t>0?`${((v-m)/t*e).toFixed(3)}px`:`${e.toFixed(3)}px`,w.transform=`rotate(-90deg)`,T[`aria-valuenow`]=m,T[`aria-valuemin`]=_,T[`aria-valuemax`]=v}return(0,b.jsx)(D,{className:n(S.root,a),style:{width:d,height:d,...w,...f},ownerState:y,ref:t,role:`progressbar`,...T,...g,children:(0,b.jsxs)(O,{className:S.svg,ownerState:y,viewBox:`${x/2} ${x/2} ${x} ${x}`,children:[c?(0,b.jsx)(A,{className:S.track,ownerState:y,cx:x,cy:x,r:(x-p)/2,fill:`none`,strokeWidth:p,"aria-hidden":`true`}):null,(0,b.jsx)(k,{className:S.circle,style:C,ownerState:y,cx:x,cy:x,r:(x-p)/2,fill:`none`,strokeWidth:p})]})})});export{_ as n,j as t};