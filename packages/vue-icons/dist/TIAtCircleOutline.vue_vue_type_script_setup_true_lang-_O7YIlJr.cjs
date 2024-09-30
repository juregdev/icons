"use strict";const e=require("vue"),C=e.defineComponent({__name:"TIAtCircleOutline",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M256.08 48.0801C141.243 48.0801 48.08 141.244 48.08 256.08C48.08 370.917 141.243 464.08 256.08 464.08C370.927 464.08 464.08 370.937 464.08 256.08C464.08 141.244 370.917 48.0801 256.08 48.0801ZM256.08 80.0801C353.243 80.0801 432.08 158.917 432.08 256.08C432.08 353.263 353.254 432.08 256.08 432.08C158.917 432.08 80.08 353.244 80.08 256.08C80.08 158.917 158.917 80.0801 256.08 80.0801ZM266.14 130.21C341.344 130.21 387.758 180.874 381.556 251.985C379.429 276.207 370.769 295.002 357.197 307.235C345.299 317.958 330.159 322.816 317.246 320.54C305.962 318.513 296.799 312.505 290.607 303.529L290.438 303.281L290.427 303.293C279.199 314.221 264.252 320.582 247.517 320.832L246.49 320.84C212.592 320.84 189.468 290.875 192.613 254.785C195.416 222.616 220.693 197.853 249.467 193.383C273.674 189.544 299.817 198.097 312.015 212.395L312.381 212.83L316.236 217.494L309.896 267.867L309.875 268.129C308.649 283.557 313.767 291.321 321.887 292.923L322.15 292.973C326.193 293.685 332.737 291.585 338.451 286.436C346.519 279.164 352.131 266.984 353.663 249.544C358.437 194.8 324.917 158.21 266.14 158.21C212.283 158.21 164.328 202.698 159.567 257.257C154.887 310.892 193.709 353.88 246.62 353.88C265.542 353.88 277.158 351.854 296.112 345.102C303.396 342.507 311.404 346.309 313.998 353.592C316.593 360.876 312.792 368.884 305.508 371.478C283.552 379.299 268.759 381.88 246.62 381.88C177.189 381.88 125.573 324.726 131.673 254.823C137.69 185.87 197.689 130.21 266.14 130.21ZM277.558 223.032C270.104 220.56 261.818 219.774 253.809 221.044C237.258 223.615 222.145 238.421 220.507 257.215C218.702 277.935 230.204 292.84 246.49 292.84C266.069 292.84 281.16 278.549 283.233 254.784C283.297 254.055 283.415 253.344 283.583 252.655L283.597 252.601L286.778 227.323C284.445 225.827 281.449 224.366 278.046 223.197L277.558 223.032Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=C;
