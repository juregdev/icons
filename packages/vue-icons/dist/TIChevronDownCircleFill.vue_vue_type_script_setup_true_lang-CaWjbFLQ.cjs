"use strict";const e=require("vue"),n=e.defineComponent({__name:"TIChevronDownCircleFill",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(s,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M464 256C464 141.13 370.87 48 256 48C141.13 48 48 141.13 48 256C48 370.87 141.13 464 256 464C370.87 464 464 370.87 464 256ZM363.31 227.31L267.31 323.31C261.062 329.553 250.938 329.553 244.69 323.31L148.69 227.31C142.714 221.019 142.84 211.111 148.976 204.976C155.112 198.84 165.019 198.714 171.31 204.69L256 289.37L340.69 204.69C346.981 198.714 356.888 198.84 363.024 204.976C369.16 211.111 369.286 221.019 363.31 227.31Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=n;
