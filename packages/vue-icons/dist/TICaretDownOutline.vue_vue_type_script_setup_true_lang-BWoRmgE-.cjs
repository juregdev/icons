"use strict";const e=require("vue"),n=e.defineComponent({__name:"TICaretDownOutline",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(s,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M97.8484 189.62L237.628 352.74C242.188 358.058 248.843 361.118 255.848 361.118C262.853 361.118 269.509 358.058 274.068 352.74L413.848 189.62C427.188 174.05 416.128 150 395.628 150H116.028C95.5284 150 84.4684 174.05 97.8484 189.62Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=n;
