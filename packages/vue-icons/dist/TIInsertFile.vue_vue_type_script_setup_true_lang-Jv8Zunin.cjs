"use strict";const e=require("vue"),s=e.defineComponent({__name:"TIInsertFile",props:{size:{type:String,default:"is-default",validator(t){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(t)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(t){const l=t,o=e.computed(()=>["icon",l.size,{[l.type]:l.type&&!l.color,"is-clickable":l.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(t.color?`color: ${t.color} !important`:void 0),width:"512",height:"516",viewBox:"0 0 512 516",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{d:"M149.331 64.913C125.864 64.913 106.664 84.2173 106.664 107.812V408.101C106.664 431.695 125.864 451 149.331 451H362.664C386.131 451 405.331 431.695 405.331 408.101V163.58L307.197 64.913H149.331ZM362.664 408.101H149.331V107.812H277.331V193.609H362.664V408.101Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=s;
