"use strict";const e=require("vue"),n=e.defineComponent({__name:"TICartOutline",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(s,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M121 64C128.648 64 135.209 69.4086 136.693 76.8785L136.757 77.2194L142.894 112L447.229 112C454.423 111.995 461.239 115.217 465.802 120.779C470.269 126.225 472.113 133.352 470.863 140.267L470.779 140.708L441.979 284.71C439.758 295.808 430.092 303.828 418.821 303.997L418.44 304H176.776L182.423 336H425C433.731 336 440.829 342.994 440.997 351.685L441 352C441 360.731 434.006 367.829 425.315 367.997L425 368H169C161.352 368 154.791 362.591 153.307 355.122L153.243 354.781L107.576 96H57C48.2686 96 41.1708 89.0061 41.003 80.3149L41 80C41 71.2686 47.9939 64.1708 56.6851 64.003L57 64H121ZM171.129 272H411.886L437.487 143.999L148.541 144L171.129 272ZM153 416C153 398.327 167.327 384 185 384C202.673 384 217 398.327 217 416C217 433.673 202.673 448 185 448C167.327 448 153 433.673 153 416ZM377 416C377 398.327 391.327 384 409 384C426.673 384 441 398.327 441 416C441 433.673 426.673 448 409 448C391.327 448 377 433.673 377 416Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=n;
