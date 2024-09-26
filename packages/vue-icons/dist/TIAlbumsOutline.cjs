"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),s=e.defineComponent({__name:"TIAlbumsOutline",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M368 65C376.837 65 384 72.1634 384 81C384 89.7314 377.006 96.8292 368.315 96.997L368 97H144C135.163 97 128 89.8366 128 81C128 72.2686 134.994 65.1708 143.685 65.003L144 65H368ZM92.87 161H419.13C443.911 161 464 181.089 464 205.87V404.13C464 428.911 443.911 449 419.13 449H92.87C68.089 449 48 428.911 48 404.13V205.87C48 181.089 68.089 161 92.87 161ZM419.13 193H92.87C85.7621 193 80 198.762 80 205.87V404.13C80 411.238 85.7621 417 92.87 417H419.13C426.238 417 432 411.238 432 404.13V205.87C432 198.762 426.238 193 419.13 193ZM416 129C416 120.163 408.837 113 400 113H112L111.685 113.003C102.994 113.171 96 120.269 96 129C96 137.837 103.163 145 112 145H400L400.315 144.997C409.006 144.829 416 137.731 416 129Z",fill:"currentColor"},null,-1)]),6))}});exports.default=s;
