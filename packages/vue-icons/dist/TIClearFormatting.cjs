"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),r=e.defineComponent({__name:"TIClearFormatting",props:{size:{type:String,default:"is-default",validator(t){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(t)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(t){const l=t,o=e.computed(()=>["icon",l.size,{[l.type]:l.type&&!l.color,"is-clickable":l.clickable}]);return(s,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(t.color?`color: ${t.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{d:"M244.907 215.253L219.307 189.44L187.734 158.08L137.174 106.667L114.561 130.133L176.001 192L99.4141 405.333H142.081L172.587 320H282.241L312.747 405.333H355.414L336.427 351.787L389.761 405.333L412.587 382.72L311.254 281.6L244.907 215.253ZM187.734 277.333L207.361 222.72L261.761 277.333H187.734ZM199.681 124.8L206.081 106.667H248.747L286.081 211.2L199.681 124.8Z",fill:"currentColor"},null,-1)]),6))}});exports.default=r;
