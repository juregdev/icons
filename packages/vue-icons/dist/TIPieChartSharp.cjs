"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),r=e.defineComponent({__name:"TIPieChartSharp",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(s,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M51.541 347.5L58.051 362.09L272.051 266.37V32H256.051C180.114 31.9829 109.34 70.4387 68.0356 134.159C26.7313 197.88 20.5222 278.188 51.541 347.5ZM304.051 287.11V66.46C403.601 81.9 480.051 168.19 480.051 272C480.051 386.69 386.741 480 272.051 480C199.707 479.972 132.557 442.411 94.671 380.78L304.051 287.11Z",fill:"currentColor"},null,-1)]),6))}});exports.default=r;
