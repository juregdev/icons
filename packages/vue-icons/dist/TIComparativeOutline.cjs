"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),r=e.defineComponent({__name:"TIComparativeOutline",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M426 16H273H239H86C47.3 16 16 47.3 16 86V426C16 464.7 47.3 496 86 496H239H273H426C464.7 496 496 464.7 496 426V86C496 47.3 464.7 16 426 16ZM86 462C66.1 462 50 445.9 50 426V86C50 66.1 66.1 50 86 50H239V462H86ZM462 426C462 445.9 445.9 462 426 462H273V50H426C445.9 50 462 66.1 462 86V426Z",fill:"currentColor"},null,-1)]),6))}});exports.default=r;
