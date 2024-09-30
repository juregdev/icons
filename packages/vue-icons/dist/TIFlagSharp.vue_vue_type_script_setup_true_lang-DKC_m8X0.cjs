"use strict";const e=require("vue"),s=e.defineComponent({__name:"TIFlagSharp",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M102 480H64V57.37L68.69 52.69C72.14 49.23 92.78 32 160 32C197.21 32 238.83 46.71 275.55 59.68C305.12 70.13 333.05 80 352 80C394.83 80 424.72 65.75 425 65.6L448 54.46V313.89L439.16 318.31C437.71 319 403.19 336 352 336C327.86 336 297.62 328.86 265.61 321.29C229.63 312.79 192.43 304 160 304C123.13 304 110.26 309.58 102 313.11V480Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=s;
