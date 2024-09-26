"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),r=e.defineComponent({__name:"TIHeartSharp",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(s,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M256 448L247 442C204.22 413.43 150.09 381.14 110 333.68C67.75 283.68 47.48 232.33 48 176.68C48.63 114.54 98.46 64 159.08 64C207.19 64 239.18 92 256 112.21C272.82 92 304.81 64 352.92 64C413.54 64 463.37 114.54 464 176.65C464.56 232.33 444.29 283.65 402 333.65C361.91 381.14 307.78 413.43 265 442L256 448Z",fill:"currentColor"},null,-1)]),6))}});exports.default=r;
