"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),s=e.defineComponent({__name:"TIReplaceImage",props:{size:{type:String,default:"is-default",validator(t){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(t)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(t){const l=t,o=e.computed(()=>["icon",l.size,{[l.type]:l.type&&!l.color,"is-clickable":l.clickable}]);return(a,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(t.color?`color: ${t.color} !important`:void 0),width:"512",height:"513",viewBox:"0 0 512 513",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{d:"M341.336 106.797V170.797H85.3359V213.464H341.336V277.464L426.669 192.13L341.336 106.797ZM170.669 405.464V341.464H426.669V298.797H170.669V234.797L85.3359 320.13L170.669 405.464Z",fill:"currentColor"},null,-1)]),6))}});exports.default=s;
