"use strict";const e=require("vue"),n=e.defineComponent({__name:"TIAddOutline",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(s,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M271.997 111.685C271.829 102.994 264.731 96 256 96C247.163 96 240 103.163 240 112V240H112L111.685 240.003C102.994 240.171 96 247.269 96 256C96 264.837 103.163 272 112 272H240V400L240.003 400.315C240.171 409.006 247.269 416 256 416C264.837 416 272 408.837 272 400V272H400L400.315 271.997C409.006 271.829 416 264.731 416 256C416 247.163 408.837 240 400 240H272V112L271.997 111.685Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=n;
