"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),n=e.defineComponent({__name:"TILogoWebComponent",props:{size:{type:String,default:"is-default",validator(t){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(t)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(t){const l=t,i=e.computed(()=>["icon",l.size,{[l.type]:l.type&&!l.color,"is-clickable":l.clickable}]);return(r,o)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(i.value),style:e.normalizeStyle(t.color?`color: ${t.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o[0]||(o[0]=[e.createElementVNode("path",{d:"M103.74 256L223.74 464H136L16 256L136 48H223.74L103.74 256Z",fill:"currentColor"},null,-1),e.createElementVNode("path",{d:"M376 48L496 256L376 464H239.74L195.9 388H332.11L408.26 256L332.11 124H195.9L239.74 48H376Z",fill:"currentColor"},null,-1)]),6))}});exports.default=n;
