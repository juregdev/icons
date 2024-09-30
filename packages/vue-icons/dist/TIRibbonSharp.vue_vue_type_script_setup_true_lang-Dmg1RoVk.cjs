"use strict";const e=require("vue"),n=e.defineComponent({__name:"TIRibbonSharp",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(s,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M256 8C176.6 8 112 72.6 112 152C112 231.4 176.6 296 256 296C335.4 296 400 231.4 400 152C400 72.6 335.4 8 256 8ZM256 232C211.817 232 176 196.183 176 152C176 107.817 211.817 72 256 72C300.183 72 336 107.817 336 152C335.95 196.162 300.162 231.95 256 232ZM256.02 200C282.53 200 304.02 178.51 304.02 152C304.02 125.49 282.53 104 256.02 104C229.51 104 208.02 125.49 208.02 152C208.02 178.51 229.51 200 256.02 200ZM314.82 317.88C350.929 304.997 381.875 280.733 403 248.74L492 408H377L319 504L273.7 407.5L314.82 317.88ZM240.49 327.31C245.6 327.76 250.78 328 256 328C262.525 327.996 269.045 327.632 275.53 326.91L193 504L135 408H20L109.2 248.94C138.75 293.689 187.078 322.537 240.49 327.31Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=n;
