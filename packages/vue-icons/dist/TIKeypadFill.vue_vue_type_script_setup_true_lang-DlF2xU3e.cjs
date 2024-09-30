"use strict";const e=require("vue"),o=e.defineComponent({__name:"TIKeypadFill",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,C=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(s,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(C.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M208 64C208 37.4903 229.49 16 256 16C282.51 16 304 37.4903 304 64C304 90.5097 282.51 112 256 112C229.49 112 208 90.5097 208 64ZM256 144C229.49 144 208 165.49 208 192C208 218.51 229.49 240 256 240C282.51 240 304 218.51 304 192C304 165.49 282.51 144 256 144ZM208 320C208 293.49 229.49 272 256 272C282.51 272 304 293.49 304 320C304 346.51 282.51 368 256 368C229.49 368 208 346.51 208 320ZM208 448C208 421.49 229.49 400 256 400C282.51 400 304 421.49 304 448C304 474.51 282.51 496 256 496C229.49 496 208 474.51 208 448ZM384 272C357.49 272 336 293.49 336 320C336 346.51 357.49 368 384 368C410.51 368 432 346.51 432 320C432 293.49 410.51 272 384 272ZM336 192C336 165.49 357.49 144 384 144C410.51 144 432 165.49 432 192C432 218.51 410.51 240 384 240C357.49 240 336 218.51 336 192ZM384 16C357.49 16 336 37.4903 336 64C336 90.5097 357.49 112 384 112C410.51 112 432 90.5097 432 64C432 37.4903 410.51 16 384 16ZM80 320C80 293.49 101.49 272 128 272C154.51 272 176 293.49 176 320C176 346.51 154.51 368 128 368C101.49 368 80 346.51 80 320ZM128 144C101.49 144 80 165.49 80 192C80 218.51 101.49 240 128 240C154.51 240 176 218.51 176 192C176 165.49 154.51 144 128 144ZM80 64C80 37.4903 101.49 16 128 16C154.51 16 176 37.4903 176 64C176 90.5097 154.51 112 128 112C101.49 112 80 90.5097 80 64Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=o;
