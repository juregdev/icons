"use strict";const e=require("vue"),s=e.defineComponent({__name:"TICellularFill",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M424 432H472C485.255 432 496 421.255 496 408V104C496 90.7452 485.255 80 472 80H424C410.745 80 400 90.7452 400 104V408C400 421.255 410.745 432 424 432ZM296 432H344C357.255 432 368 421.255 368 408V184C368 170.745 357.255 160 344 160H296C282.745 160 272 170.745 272 184V408C272 421.255 282.745 432 296 432ZM216 432H168C154.745 432 144 421.255 144 408V248C144 234.745 154.745 224 168 224H216C229.255 224 240 234.745 240 248V408C240 421.255 229.255 432 216 432ZM40 432H88C101.255 432 112 421.255 112 408V312C112 298.745 101.255 288 88 288H40C26.7452 288 16 298.745 16 312V408C16 421.255 26.7452 432 40 432Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=s;
