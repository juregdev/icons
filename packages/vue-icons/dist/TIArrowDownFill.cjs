"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),r=e.defineComponent({__name:"TIArrowDownFill",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M279.997 99.6031C279.785 86.5313 269.122 76 256 76C242.745 76 232 86.7452 232 100V354.059L128.971 251.029L128.679 250.743C119.285 241.658 104.305 241.753 95.0294 251.029C85.6569 260.402 85.6569 275.598 95.0294 284.971L239.029 428.971L239.321 429.257C248.715 438.342 263.695 438.247 272.971 428.971L416.971 284.971L417.257 284.679C426.342 275.285 426.247 260.305 416.971 251.029L416.679 250.743C407.285 241.658 392.305 241.753 383.029 251.029L280 354.059V100L279.997 99.6031Z",fill:"currentColor"},null,-1)]),6))}});exports.default=r;
