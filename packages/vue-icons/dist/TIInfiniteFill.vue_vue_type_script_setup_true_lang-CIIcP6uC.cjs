"use strict";const e=require("vue"),C=e.defineComponent({__name:"TIInfiniteFill",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M194.663 154.256C174.413 142.474 152.767 136 130 136C62.7395 136 8 189.628 8 256C8 322.372 62.7395 376 130 376C164.265 376 196.16 362.204 223.787 338.077C233.77 329.358 234.796 314.197 226.077 304.213C217.358 294.23 202.197 293.204 192.213 301.923L191.579 302.473C172.336 319.079 151.478 328 130 328C89.0314 328 56 295.639 56 256C56 216.361 89.0314 184 130 184C156.199 184 181.397 198.661 204.466 224.116C212.997 233.529 220.565 243.705 227.025 253.871C229.274 257.411 231.213 260.676 232.827 263.57C233.169 264.182 233.477 264.744 233.752 265.253L234.28 266.245L234.606 266.878C234.645 266.955 234.688 267.039 234.735 267.131L235.538 268.668C236.04 269.614 236.614 270.667 237.257 271.82L237.671 272.559C239.626 276.03 241.891 279.825 244.462 283.871C252.299 296.205 261.465 308.529 271.966 320.116C285.751 335.328 300.84 348.146 317.337 357.744C337.587 369.526 359.233 376 382 376C449.26 376 504 322.372 504 256C504 189.628 449.26 136 382 136C348.546 136 316.039 150.125 288.401 173.76C278.328 182.375 277.146 197.525 285.76 207.599C294.375 217.672 309.525 218.854 319.599 210.24C339.139 193.529 361.069 184 382 184C422.969 184 456 216.361 456 256C456 295.639 422.969 328 382 328C355.801 328 330.603 313.339 307.534 287.884C299.003 278.471 291.435 268.295 284.975 258.129C282.726 254.589 280.787 251.324 279.173 248.43C278.831 247.818 278.523 247.256 278.248 246.747L277.72 245.755L277.393 245.121C277.354 245.044 277.312 244.96 277.265 244.869L276.462 243.332C275.96 242.386 275.386 241.333 274.743 240.18L274.329 239.441C272.374 235.97 270.109 232.175 267.538 228.129C259.701 215.795 250.535 203.471 240.034 191.884C226.249 176.672 211.16 163.854 194.663 154.256Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=C;
