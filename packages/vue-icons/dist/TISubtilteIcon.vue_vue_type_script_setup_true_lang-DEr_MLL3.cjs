"use strict";const e=require("vue"),s=e.defineComponent({__name:"TISubtilteIcon",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(c,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"20",height:"21",viewBox:"0 0 20 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("ellipse",{cx:"4.55452",cy:"15.6302",rx:"3.33333",ry:"3.33333",fill:"#FF4560"},null,-1),e.createElementVNode("ellipse",{cx:"15.4452",cy:"15.9173",rx:"3.33333",ry:"3.33333",fill:"#45B1FF"},null,-1),e.createElementVNode("ellipse",{cx:"4.55452",cy:"5.02669",rx:"3.33333",ry:"3.33333",fill:"#FEB019"},null,-1),e.createElementVNode("ellipse",{cx:"15.4452",cy:"5.02669",rx:"3.33333",ry:"3.33333",fill:"#00DF8F"},null,-1)]),6))}});exports._sfc_main=s;
