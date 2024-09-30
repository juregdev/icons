"use strict";const e=require("vue"),s=e.defineComponent({__name:"TIListCircleSharp",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M256 48C141.31 48 48 141.31 48 256C48 370.69 141.31 464 256 464C370.69 464 464 370.69 464 256C464 141.31 370.69 48 256 48ZM192 335.5C192 344.337 184.837 351.5 176 351.5H160C151.163 351.5 144 344.337 144 335.5V319.5C144 310.663 151.163 303.5 160 303.5H176C184.837 303.5 192 310.663 192 319.5V335.5ZM192 264.5C192 273.337 184.837 280.5 176 280.5H160C151.163 280.5 144 273.337 144 264.5V248.5C144 239.663 151.163 232.5 160 232.5H176C184.837 232.5 192 239.663 192 248.5V264.5ZM192 192.5C192 201.337 184.837 208.5 176 208.5H160C151.163 208.5 144 201.337 144 192.5V176.5C144 167.663 151.163 160.5 160 160.5H176C184.837 160.5 192 167.663 192 176.5V192.5ZM368 343.5H212.67V311.5H368V343.5ZM368 272.5H212.67V240.5H368V272.5ZM368 200.5H212.67V168.5H368V200.5Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=s;
