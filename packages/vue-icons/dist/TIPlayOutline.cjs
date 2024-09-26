"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),n=e.defineComponent({__name:"TIPlayOutline",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(r,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M96 111.074V401.074C96 430.427 126.055 449.988 151.203 434.971L399.117 286.593C421.615 273.134 421.615 239.013 399.114 225.553L151.217 77.1849C126.055 62.1598 96 81.7208 96 111.074ZM134.797 104.651L382.683 253.013C384.425 254.054 384.425 258.093 382.686 259.133L134.783 407.505C131.957 409.192 128 406.617 128 401.074V111.074C128 105.531 131.957 102.955 134.797 104.651Z",fill:"currentColor"},null,-1)]),6))}});exports.default=n;
