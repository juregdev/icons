"use strict";const e=require("vue"),o=e.defineComponent({__name:"TIFilmFill",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,C=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(s,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(C.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M436 80H76C51.7109 80.0276 32.0276 99.7109 32 124V388C32.0276 412.289 51.7109 431.972 76 432H436C460.289 431.972 479.972 412.289 480 388V124C479.972 99.7109 460.289 80.0276 436 80ZM112 388C112 394.627 106.627 400 100 400H76C69.3726 400 64 394.627 64 388V364C64 357.373 69.3726 352 76 352H100C106.627 352 112 357.373 112 364V388ZM112 308C112 314.627 106.627 320 100 320H76C69.3726 320 64 314.627 64 308V284C64 277.373 69.3726 272 76 272H100C106.627 272 112 277.373 112 284V308ZM112 228C112 234.627 106.627 240 100 240H76C69.3726 240 64 234.627 64 228V204C64 197.373 69.3726 192 76 192H100C106.627 192 112 197.373 112 204V228ZM112 148C112 154.627 106.627 160 100 160H76C69.3726 160 64 154.627 64 148V124C64 117.373 69.3726 112 76 112H100C106.627 112 112 117.373 112 124V148ZM353.68 272H158.32C149.483 272 142.32 264.837 142.32 256C142.32 247.163 149.483 240 158.32 240H353.68C362.517 240 369.68 247.163 369.68 256C369.68 264.837 362.517 272 353.68 272ZM448 388C448 394.627 442.627 400 436 400H412C405.373 400 400 394.627 400 388V364C400 357.373 405.373 352 412 352H436C442.627 352 448 357.373 448 364V388ZM448 308C448 314.627 442.627 320 436 320H412C405.373 320 400 314.627 400 308V284C400 277.373 405.373 272 412 272H436C442.627 272 448 277.373 448 284V308ZM448 228C448 234.627 442.627 240 436 240H412C405.373 240 400 234.627 400 228V204C400 197.373 405.373 192 412 192H436C442.627 192 448 197.373 448 204V228ZM448 148C448 154.627 442.627 160 436 160H412C405.373 160 400 154.627 400 148V124C400 117.373 405.373 112 412 112H436C442.627 112 448 117.373 448 124V148Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=o;
