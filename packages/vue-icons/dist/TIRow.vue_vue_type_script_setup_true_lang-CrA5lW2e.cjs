"use strict";const e=require("vue"),s=e.defineComponent({__name:"TIRow",props:{size:{type:String,default:"is-default",validator(t){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(t)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(t){const l=t,o=e.computed(()=>["icon",l.size,{[l.type]:l.type&&!l.color,"is-clickable":l.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(t.color?`color: ${t.color} !important`:void 0),width:"512",height:"515",viewBox:"0 0 512 515",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{d:"M426.664 107.377H85.3307C61.8641 107.377 42.6641 126.681 42.6641 150.275V193.174V225.348V289.696V321.869V364.768C42.6641 388.362 61.8641 407.667 85.3307 407.667H426.664C450.131 407.667 469.331 388.362 469.331 364.768V321.869V289.696V225.348V193.174V150.275C469.331 126.681 450.131 107.377 426.664 107.377ZM341.331 139.551H426.664C433.064 139.551 437.331 143.84 437.331 150.275V193.174H341.331V139.551ZM202.664 139.551H309.331V193.174H202.664V139.551ZM74.6641 150.275C74.6641 143.84 78.9307 139.551 85.3307 139.551H170.664V193.174H74.6641V150.275ZM170.664 375.493H85.3307C78.9307 375.493 74.6641 371.203 74.6641 364.768V321.869H170.664V375.493ZM309.331 375.493H202.664V321.869H309.331V375.493ZM437.331 364.768C437.331 371.203 433.064 375.493 426.664 375.493H341.331V321.869H437.331V364.768Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=s;
