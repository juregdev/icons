"use strict";const e=require("vue"),s=e.defineComponent({__name:"TICellOptions",props:{size:{type:String,default:"is-default",validator(t){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(t)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(t){const l=t,o=e.computed(()=>["icon",l.size,{[l.type]:l.type&&!l.color,"is-clickable":l.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(t.color?`color: ${t.color} !important`:void 0),width:"512",height:"513",viewBox:"0 0 512 513",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{d:"M426.668 106.797H85.3346C61.868 106.797 42.668 125.997 42.668 149.464V362.797C42.668 386.264 61.868 405.464 85.3346 405.464H426.668C450.135 405.464 469.335 386.264 469.335 362.797V149.464C469.335 125.997 450.135 106.797 426.668 106.797ZM202.668 138.797H309.335V192.13H202.668V138.797ZM170.668 373.464H85.3346C78.9346 373.464 74.668 369.197 74.668 364.93V362.797V320.13H170.668V373.464ZM170.668 288.13H74.668V224.13H170.668V288.13ZM170.668 192.13H74.668V149.464C74.668 143.064 78.9346 138.797 83.2013 138.797H170.668V192.13ZM309.335 373.464H202.668V320.13H309.335V373.464ZM437.335 362.797C437.335 369.197 433.068 373.464 428.801 373.464H341.335V320.13H437.335V362.797ZM437.335 288.13H341.335V224.13H437.335V288.13ZM437.335 192.13H341.335V138.797H426.668C433.068 138.797 437.335 143.064 437.335 147.33V192.13Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=s;
