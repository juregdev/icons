"use strict";const e=require("vue"),s=e.defineComponent({__name:"TIParagraphOutdent",props:{size:{type:String,default:"is-default",validator(t){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(t)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(t){const l=t,o=e.computed(()=>["icon",l.size,{[l.type]:l.type&&!l.color,"is-clickable":l.clickable}]);return(a,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(t.color?`color: ${t.color} !important`:void 0),width:"512",height:"516",viewBox:"0 0 512 516",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{d:"M64 258.174L128 322.522V193.826L64 258.174ZM64 408.319H448V365.421H64V408.319ZM64 150.928H448V108.029H64V150.928ZM192 236.725H448V193.826H192V236.725ZM192 322.522H448V279.624H192V322.522Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=s;
