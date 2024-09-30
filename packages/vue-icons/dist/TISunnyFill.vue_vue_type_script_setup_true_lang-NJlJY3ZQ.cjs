"use strict";const e=require("vue"),o=e.defineComponent({__name:"TISunnyFill",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,C=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(C.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M256 118C243.85 118 234 108.15 234 96V48C234 35.8497 243.85 26 256 26C268.15 26 278 35.8497 278 48V96C278 108.15 268.15 118 256 118ZM256 486C243.85 486 234 476.15 234 464V416C234 403.85 243.85 394 256 394C268.15 394 278 403.85 278 416V464C278 476.15 268.15 486 256 486ZM348.819 151.282C352.224 159.5 360.244 164.859 369.14 164.86C374.974 164.867 380.57 162.549 384.69 158.42L418.63 124.48C427.029 115.857 426.938 102.085 418.426 93.5735C409.915 85.0619 396.143 84.9712 387.52 93.37L353.58 127.31C347.292 133.603 345.413 143.064 348.819 151.282ZM108.92 425.08C100.021 425.079 91.9997 419.717 88.5958 411.495C85.192 403.274 87.0763 393.811 93.37 387.52L127.31 353.58C132.842 347.9 141.003 345.636 148.671 347.655C156.338 349.673 162.327 355.662 164.345 363.329C166.364 370.997 164.1 379.158 158.42 384.69L124.48 418.63C120.358 422.765 114.758 425.086 108.92 425.08ZM416 278H464C476.15 278 486 268.15 486 256C486 243.85 476.15 234 464 234H416C403.85 234 394 243.85 394 256C394 268.15 403.85 278 416 278ZM96 278H48C35.8497 278 26 268.15 26 256C26 243.85 35.8497 234 48 234H96C108.15 234 118 243.85 118 256C118 268.15 108.15 278 96 278ZM387.52 418.63C391.642 422.765 397.242 425.086 403.08 425.08C411.979 425.079 420 419.717 423.404 411.495C426.808 403.274 424.924 393.811 418.63 387.52L384.69 353.58C376.067 345.181 362.295 345.272 353.784 353.784C345.272 362.295 345.181 376.067 353.58 384.69L387.52 418.63ZM142.86 164.86C137.026 164.871 131.428 162.553 127.31 158.42L93.37 124.48C84.9712 115.857 85.0619 102.085 93.5735 93.5735C102.085 85.0619 115.857 84.9712 124.48 93.37L158.42 127.31C164.708 133.603 166.587 143.064 163.181 151.282C159.776 159.5 151.756 164.859 142.86 164.86ZM154 256C154 312.333 199.667 358 256 358C312.306 357.934 357.934 312.306 358 256C358 199.667 312.333 154 256 154C199.667 154 154 199.667 154 256Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=o;
