"use strict";const e=require("vue"),C=e.defineComponent({__name:"TITextFill",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(s,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M292.6 407.78L172.6 87.78C169.38 79.1923 161.171 73.5027 152 73.5027C142.828 73.5027 134.619 79.1923 131.4 87.78L11.3996 407.78C7.2687 419.122 13.0478 431.674 24.3509 435.91C35.6539 440.146 48.2591 434.483 52.5996 423.22L88.7596 326.8C89.0513 326.019 89.7963 325.501 90.6296 325.5H213.37C214.203 325.501 214.948 326.019 215.24 326.8L251.4 423.22C255.74 434.483 268.345 440.146 279.648 435.91C290.951 431.674 296.731 419.122 292.6 407.78ZM106.76 278.78L150.13 163.13C150.424 162.353 151.169 161.839 152 161.839C152.831 161.839 153.575 162.353 153.87 163.13L197.24 278.8C197.469 279.413 197.383 280.1 197.01 280.639C196.637 281.177 196.025 281.499 195.37 281.5H108.63C107.975 281.499 107.362 281.177 106.989 280.639C106.616 280.1 106.53 279.413 106.76 278.8V278.78ZM400.77 169.5C359.05 169.2 321.69 193.37 305.77 230.9C301.02 242.084 306.236 255 317.42 259.75C328.603 264.5 341.52 259.284 346.27 248.1C355.15 227.21 376.04 213.66 399.59 213.5C431.91 213.28 458 240 458 272.35C458 273.159 457.358 273.823 456.55 273.85C434.63 274.46 408.63 275.92 385.43 278.65C330.68 285.09 298 314.94 298 358.5C298 381.69 306.76 402.5 322.67 417.18C337.6 430.93 358 438.5 380 438.5C411 438.5 437.69 430.5 457.94 415.28H458C457.966 423.14 462.128 430.421 468.917 434.38C475.707 438.339 484.094 438.376 490.917 434.475C497.741 430.574 501.966 423.33 502 415.47V272.47C502 216.29 457 169.91 400.77 169.5ZM380 394.5C362.47 394.5 342 385.07 342 358.5C342 347.83 345.83 340.36 354.43 334.27C362.8 328.34 375.63 324.11 390.57 322.35C411.69 319.86 435.39 318.49 455.71 317.88C456.258 317.879 456.782 318.104 457.16 318.501C457.539 318.898 457.737 319.432 457.71 319.98C455 370.1 429.46 394.5 380 394.5Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=C;
