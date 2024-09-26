"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),r=e.defineComponent({__name:"TICloudyFill",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(s,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M376 432H116C83.63 432 55.77 423.43 35.41 407.23C12.24 388.78 0 361.39 0 328C0 270.43 42 237.42 87.56 227.25C93.6808 225.855 98.4205 221.01 99.68 214.86C107.36 178.18 124.13 146.71 148.86 122.86C177.644 95.1887 216.073 79.8155 256 80.0001C291.5 80.0001 324.24 91.6901 350.68 113.8C368.753 129.045 383.131 148.192 392.73 169.8C394.825 174.505 399.057 177.915 404.1 178.96C431.1 184.57 455.17 196.29 473.28 212.81C498.61 235.88 512 267.42 512 304C512 340 497.62 372.88 471.51 396.59C446.36 419.43 412.44 432 376 432Z",fill:"currentColor"},null,-1)]),6))}});exports.default=r;
