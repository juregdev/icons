"use strict";const e=require("vue"),i=e.defineComponent({__name:"TILogoOctocat",props:{size:{type:String,default:"is-default",validator(C){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(C)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(C){const l=C,o=e.computed(()=>["icon",l.size,{[l.type]:l.type&&!l.color,"is-clickable":l.clickable}]);return(n,t)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(C.color?`color: ${C.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t[0]||(t[0]=[e.createElementVNode("path",{d:"M172.86 290.12C163.11 290.12 154.75 294.68 148 303.99C141.25 313.3 137.93 324.57 137.93 337.99C137.93 351.41 141.36 362.9 148 372.11C154.64 381.32 163 386 172.86 386C181.96 386 189.86 381.34 196.54 372.13C203.22 362.92 206.61 351.55 206.61 338.01C206.61 324.47 203.18 313.2 196.54 304.01C189.9 294.82 182 290.12 172.86 290.12Z",fill:"currentColor"},null,-1),e.createElementVNode("path",{d:"M340.32 290.12C330.68 290.12 322.21 294.68 315.46 303.99C308.71 313.3 305.39 324.57 305.39 337.99C305.39 351.41 308.82 362.9 315.46 372.11C322.1 381.32 330.57 386 340.32 386C349.43 386 357.32 381.34 364.11 372.13C370.9 362.92 374.18 351.55 374.18 338.01C374.18 324.47 370.75 313.2 364.11 304.01C357.47 294.82 349.54 290.12 340.32 290.12Z",fill:"currentColor"},null,-1),e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M459.36 165C459.347 165 459.377 164.79 459.434 164.377C459.873 161.238 461.951 146.369 459.68 122.53C457.32 95.53 451.68 70.75 442.43 48C442.43 48 437.71 48.87 428.71 51.14C419.71 53.41 405 58 384.89 67.18C365.07 76.38 344.18 88.62 322.43 103.47C307.64 99.24 285.57 97.08 256 97.08C227.82 97.08 205.75 99.24 189.57 103.47C141.79 69.99 101.753 51.5 69.46 48C60.2533 70.7533 54.54 95.67 52.32 122.75C49.75 149.75 52.75 165.33 52.75 165.33C26.71 193.82 16 234.88 16 268.78C16 295 16.75 318.72 22.54 339.78C28.54 360.69 36.14 377.78 45.14 390.92C54.4516 404.208 65.8919 415.867 79 425.43C92.39 435.51 104.71 442.77 115.86 447.32C127.11 452.08 139.86 455.55 154.43 458.04C165.228 460.129 176.141 461.578 187.11 462.38C187.11 462.38 217.11 464 256.11 464C295.11 464 325 462.38 325 462.38C335.969 461.551 346.88 460.089 357.68 458C370.86 455.873 383.76 452.277 396.14 447.28C407.29 442.62 419.61 435.47 433.14 425.39C446.242 415.841 457.651 404.163 466.89 390.84C475.89 377.73 483.49 360.61 489.49 339.7C495.49 318.79 496 294.89 496 268.67C496 235.85 485.29 194.25 459.36 165ZM389.29 418.07C359.39 432.26 315.46 438 257.18 438H254.93C196.64 438 152.71 432.37 123.36 418.07C94.01 403.77 79.11 374.62 79.11 330.64C79.11 304.32 88.32 282.98 106.43 266.64C114.36 259.64 124 254.72 136 251.8C148 248.88 158.93 248.8 169.21 249.09C174.699 249.324 181.392 250.009 189.239 250.812L189.24 250.812C195.803 251.484 203.172 252.238 211.32 252.88C216.951 253.324 222.147 253.81 227.042 254.268C237.698 255.266 246.928 256.13 256.11 256.13C264.296 256.13 274.223 255.204 287.562 253.959C294.641 253.299 302.681 252.549 311.93 251.8C338.61 249.64 358.54 248.55 371.39 250.71C384.57 252.88 396.04 257.43 405.79 266.64C424.75 283.753 434.25 305.087 434.29 330.64C434.18 374.62 419.07 403.88 389.29 418.07Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=i;
