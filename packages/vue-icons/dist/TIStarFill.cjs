"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),r=e.defineComponent({__name:"TIStarFill",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(s,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M394 480C390.632 480.013 387.346 478.963 384.61 477L256 383.76L127.39 477C121.752 481.089 114.116 481.062 108.508 476.931C102.9 472.801 100.608 465.518 102.84 458.92L153 310.35L23.0002 221.2C17.2204 217.241 14.6885 209.982 16.752 203.287C18.8155 196.592 24.9945 192.018 32.0002 192H192.38L240.78 43.05C242.919 36.4528 249.065 31.9847 256 31.9847C262.935 31.9847 269.081 36.4528 271.22 43.05L319.62 192.05H480C487.015 192.047 493.214 196.613 495.291 203.313C497.368 210.014 494.837 217.286 489.05 221.25L359 310.35L409.13 458.88C410.778 463.759 409.977 469.132 406.978 473.318C403.98 477.504 399.149 479.991 394 480Z",fill:"currentColor"},null,-1)]),6))}});exports.default=r;
