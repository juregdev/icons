"use strict";const e=require("vue"),C=e.defineComponent({__name:"TIGitNetworkOutline",props:{size:{type:String,default:"is-default",validator(t){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(t)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(t){const l=t,o=e.computed(()=>["icon",l.size,{[l.type]:l.type&&!l.color,"is-clickable":l.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(t.color?`color: ${t.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M128 32C92.6538 32 64 60.6538 64 96C64 126.093 84.769 151.334 112.755 158.173C116.422 192.041 133.3 220.368 160.177 240.75C182.636 257.781 211.116 268.328 240 271.201V354.016C212.396 361.121 192 386.179 192 416C192 451.346 220.654 480 256 480C291.346 480 320 451.346 320 416C320 386.179 299.604 361.121 272 354.016V271.201C300.884 268.328 329.364 257.781 351.823 240.75C378.7 220.368 395.578 192.041 399.245 158.173C427.231 151.334 448 126.093 448 96C448 60.6538 419.346 32 384 32C348.654 32 320 60.6538 320 96C320 125.48 339.932 150.305 367.055 157.733C363.721 181.308 351.668 200.707 332.487 215.252C311.62 231.077 283.377 240 256 240L255.144 239.997C228.035 239.813 200.163 230.912 179.513 215.252C160.332 200.707 148.279 181.308 144.945 157.733C172.068 150.305 192 125.48 192 96C192 60.6538 163.346 32 128 32ZM384 128C401.673 128 416 113.673 416 96C416 78.3269 401.673 64 384 64C366.327 64 352 78.3269 352 96C352 113.673 366.327 128 384 128ZM160 96C160 113.673 145.673 128 128 128C110.327 128 96 113.673 96 96C96 78.3269 110.327 64 128 64C145.673 64 160 78.3269 160 96ZM224 416C224 398.327 238.327 384 256 384C273.673 384 288 398.327 288 416C288 433.673 273.673 448 256 448C238.327 448 224 433.673 224 416Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=C;
