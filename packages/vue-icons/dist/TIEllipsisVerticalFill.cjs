"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),s=e.defineComponent({__name:"TIEllipsisVerticalFill",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(r,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M304 96C304 122.51 282.51 144 256 144C229.49 144 208 122.51 208 96C208 69.4903 229.49 48 256 48C282.51 48 304 69.4903 304 96ZM256 304C282.51 304 304 282.51 304 256C304 229.49 282.51 208 256 208C229.49 208 208 229.49 208 256C208 282.51 229.49 304 256 304ZM256 464C282.51 464 304 442.51 304 416C304 389.49 282.51 368 256 368C229.49 368 208 389.49 208 416C208 442.51 229.49 464 256 464Z",fill:"currentColor"},null,-1)]),6))}});exports.default=s;
