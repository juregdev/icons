"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),n=e.defineComponent({__name:"TITvOutline",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(r,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M447.86 80H64.14C37.553 80 16 101.553 16 128.14V335.86C16 362.447 37.553 384 64.14 384H447.86C474.447 384 496 362.447 496 335.86V128.14C496 101.553 474.447 80 447.86 80ZM64.14 112H447.86C456.774 112 464 119.226 464 128.14V335.86C464 344.774 456.774 352 447.86 352H64.14C55.2261 352 48 344.774 48 335.86V128.14C48 119.226 55.2261 112 64.14 112ZM400 416C400 407.163 392.837 400 384 400H128L127.685 400.003C118.994 400.171 112 407.269 112 416C112 424.837 119.163 432 128 432H384L384.315 431.997C393.006 431.829 400 424.731 400 416Z",fill:"currentColor"},null,-1)]),6))}});exports.default=n;
