"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),s=e.defineComponent({__name:"TIPauseFill",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(r,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M160 432H208C216.837 432 224 424.837 224 416V96C224 87.1634 216.837 80 208 80H160C151.163 80 144 87.1634 144 96V416C144 424.837 151.163 432 160 432ZM304 432H352C360.837 432 368 424.837 368 416V96C368 87.1634 360.837 80 352 80H304C295.163 80 288 87.1634 288 96V416C288 424.837 295.163 432 304 432Z",fill:"currentColor"},null,-1)]),6))}});exports.default=s;
