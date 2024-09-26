"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),r=e.defineComponent({__name:"TILogoVue",props:{size:{type:String,default:"is-default",validator(t){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(t)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(t){const l=t,i=e.computed(()=>["icon",l.size,{[l.type]:l.type&&!l.color,"is-clickable":l.clickable}]);return(n,o)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(i.value),style:e.normalizeStyle(t.color?`color: ${t.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o[0]||(o[0]=[e.createElementVNode("path",{d:"M256 313.61L409.4 47.9199H496.26L256 464.08L15.7402 47.9199H102.6L256 313.61Z",fill:"currentColor"},null,-1),e.createElementVNode("path",{d:"M200.51 47.9199L256 144.03L311.49 47.9199H390.92L256 281.61L121.08 47.9199H200.51Z",fill:"currentColor"},null,-1)]),6))}});exports.default=r;
