"use strict";const e=require("vue"),n=e.defineComponent({__name:"TILaptopOutline",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(s,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M431.86 80H80.14C53.553 80 32 101.553 32 128.14V367.86C32 380.212 36.6521 391.478 44.2998 400H16L15.6851 400.003C6.9939 400.171 0 407.269 0 416C0 424.837 7.16344 432 16 432H496L496.315 431.997C505.006 431.829 512 424.731 512 416C512 407.163 504.837 400 496 400H467.7C475.348 391.478 480 380.212 480 367.86V128.14C480 101.553 458.447 80 431.86 80ZM80.14 112H431.86C440.774 112 448 119.226 448 128.14V367.86C448 376.774 440.774 384 431.86 384H80.14C71.2261 384 64 376.774 64 367.86V128.14C64 119.226 71.2261 112 80.14 112Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=n;
