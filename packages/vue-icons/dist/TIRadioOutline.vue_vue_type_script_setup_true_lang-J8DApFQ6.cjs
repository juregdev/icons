"use strict";const e=require("vue"),o=e.defineComponent({__name:"TIRadioOutline",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,C=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(C.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M87.6502 88.061C81.0564 82.1783 70.9422 82.7548 65.0595 89.3486C-21.6865 186.581 -21.6865 333.42 65.0595 430.652C70.9422 437.246 81.0564 437.822 87.6502 431.939C94.2441 426.057 94.8205 415.942 88.9378 409.349L86.6831 406.783C13.0283 321.689 13.7799 194.895 88.9378 110.652L89.176 110.379C94.8036 103.782 94.1537 93.8631 87.6502 88.061ZM424.347 88.061C430.941 82.1783 441.055 82.7548 446.938 89.3486C533.684 186.581 533.684 333.42 446.938 430.652C441.055 437.246 430.941 437.822 424.347 431.939C417.844 426.137 417.194 416.219 422.821 409.622L423.059 409.349C498.217 325.105 498.969 198.312 425.314 113.218L423.059 110.652C417.177 104.058 417.753 93.9437 424.347 88.061ZM121.59 134.354C127.624 127.899 137.749 127.557 144.204 133.591C150.572 139.543 150.991 149.474 145.212 155.939L144.967 156.206C90.9054 214.044 90.3648 303.561 143.346 362.032L144.967 363.794C151.002 370.25 150.66 380.375 144.204 386.409C137.749 392.443 127.624 392.101 121.59 385.646C55.4852 314.924 55.4852 205.076 121.59 134.354ZM172.287 185.623C178.156 179.017 188.269 178.42 194.875 184.289C201.391 190.077 202.061 199.994 196.448 206.603L196.21 206.877C169.555 236.88 169.288 281.926 195.41 312.23L196.21 313.143C202.079 319.75 201.481 329.863 194.875 335.732C188.269 341.6 178.156 341.003 172.287 334.397C134.593 291.968 134.593 228.052 172.287 185.623ZM255.999 292.02C273.672 292.02 287.999 277.693 287.999 260.02C287.999 242.347 273.672 228.02 255.999 228.02C238.326 228.02 223.999 242.347 223.999 260.02C223.999 277.693 238.326 292.02 255.999 292.02ZM339.73 185.623C333.861 179.017 323.748 178.42 317.142 184.289C310.536 190.158 309.938 200.271 315.807 206.877L316.607 207.791C342.729 238.094 342.462 283.141 315.807 313.143L315.57 313.417C309.956 320.026 310.626 329.943 317.142 335.732C323.748 341.6 333.861 341.003 339.73 334.397C377.424 291.968 377.424 228.052 339.73 185.623ZM390.407 134.354C384.373 127.899 374.249 127.557 367.793 133.591C361.337 139.625 360.996 149.75 367.03 156.206L368.652 157.968C421.633 216.44 421.092 305.956 367.03 363.794L366.785 364.062C361.006 370.527 361.426 380.458 367.793 386.409C374.249 392.443 384.373 392.101 390.407 385.646C456.512 314.924 456.512 205.076 390.407 134.354Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=o;
