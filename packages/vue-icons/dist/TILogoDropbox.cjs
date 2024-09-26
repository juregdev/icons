"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),r=e.defineComponent({__name:"TILogoDropbox",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,i=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(s,o)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(i.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o[0]||(o[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M256.32 126.24L136.16 204.49L256.32 282.73L136.16 361L16 282.08L136.16 203.84L16 126.24L136.16 48L256.32 126.24ZM135.52 385.76L255.68 307.51L375.84 385.76L255.68 464L135.52 385.76ZM256.32 282.08L376.48 203.84L256.32 126.24L375.84 48L496 126.24L375.84 204.49L496 282.73L375.84 361L256.32 282.08Z",fill:"currentColor"},null,-1)]),6))}});exports.default=r;
