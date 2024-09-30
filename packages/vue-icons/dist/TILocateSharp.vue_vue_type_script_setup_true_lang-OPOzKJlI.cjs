"use strict";const e=require("vue"),s=e.defineComponent({__name:"TILocateSharp",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M89.7013 280H32V232H89.7013C100.226 158.423 158.423 100.226 232 89.7013V32H280V89.7013C353.577 100.226 411.774 158.423 422.299 232H480V280H422.299C411.774 353.577 353.577 411.774 280 422.299V480H232V422.299C158.423 411.774 100.226 353.577 89.7013 280ZM256 136C322.274 136 376 189.726 376 256C376 322.274 322.274 376 256 376C189.726 376 136 322.274 136 256C136 189.726 189.726 136 256 136Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=s;
