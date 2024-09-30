"use strict";const e=require("vue"),s=e.defineComponent({__name:"TIReaderSharp",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M80 44V468C80 474.627 85.3726 480 92 480H420C426.627 480 432 474.627 432 468V44C432 37.3726 426.627 32 420 32H92C85.3726 32 80 37.3726 80 44ZM272 304H160V272H272V304ZM352 224H160V192H352V224ZM352 144H160V112H352V144Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=s;
