"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),n=e.defineComponent({__name:"TIPhoneLandscapeOutline",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(s,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0 200V312V336C0 371.346 28.6538 400 64 400H448C483.346 400 512 371.346 512 336V176C512 140.654 483.346 112 448 112H64C28.6538 112 0 140.654 0 176V200ZM32 176V193.009L32.1811 193.055C45.7277 196.627 55.7588 208.859 55.9957 223.471L56 224V288C56 302.845 45.8909 315.33 32.1811 318.945L32 318.99V336C32 353.673 46.3269 368 64 368H448C465.673 368 480 353.673 480 336V176C480 158.327 465.673 144 448 144H64C46.3269 144 32 158.327 32 176Z",fill:"currentColor"},null,-1)]),6))}});exports.default=n;
