"use strict";const e=require("vue"),o=e.defineComponent({__name:"TIEyeOffOutline",props:{size:{type:String,default:"is-default",validator(C){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(C)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(C){const l=C,i=e.computed(()=>["icon",l.size,{[l.type]:l.type&&!l.color,"is-clickable":l.clickable}]);return(n,t)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(i.value),style:e.normalizeStyle(C.color?`color: ${C.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t[0]||(t[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M433 448C428.756 448.007 424.684 446.319 421.69 443.31L69.6904 91.31C63.714 85.0194 63.8408 75.1115 69.9764 68.976C76.1119 62.8404 86.0198 62.7136 92.3104 68.69L444.31 420.69C448.883 425.266 450.251 432.145 447.775 438.122C445.3 444.099 439.47 447.997 433 448ZM256.66 384C215.17 384 175.16 371.72 137.74 347.5C103.67 325.5 73.0004 293.99 49.0404 256.5V256.42C68.9804 227.85 90.8204 203.69 114.28 184.21C114.709 183.851 114.969 183.329 114.995 182.771C115.022 182.212 114.813 181.668 114.42 181.27L94.5004 161.38C93.7664 160.64 92.587 160.588 91.7904 161.26C66.8704 182.26 43.7404 208.02 22.7104 238.18C15.3105 248.801 15.0577 262.839 22.0704 273.72C48.4804 315.05 82.4704 349.86 120.35 374.37C163 402 208.9 416 256.66 416C282.44 415.92 308.037 411.672 332.46 403.42C333.115 403.198 333.609 402.653 333.766 401.979C333.923 401.305 333.72 400.599 333.23 400.11L311.65 378.53C310.64 377.544 309.184 377.164 307.82 377.53C291.108 381.834 273.918 384.008 256.66 384ZM392.57 138.07C431.05 162.92 465.38 197.68 491.84 238.6C498.67 249.177 498.71 262.764 491.94 273.38C473.187 302.88 450.041 329.345 423.3 351.86C422.503 352.523 421.331 352.467 420.6 351.73L400.7 331.84C400.305 331.441 400.096 330.893 400.125 330.332C400.153 329.771 400.417 329.247 400.85 328.89C425.898 308.151 447.535 283.609 464.97 256.16C465.007 256.113 465.007 256.047 464.97 256C440.95 218.88 409.92 187.4 375.21 165C337.24 140.43 297.35 128 256.66 128C239.702 128.012 222.82 130.262 206.45 134.69C205.071 135.075 203.592 134.694 202.57 133.69L181.02 112.14C180.53 111.654 180.325 110.95 180.477 110.277C180.63 109.604 181.119 109.057 181.77 108.83C205.837 100.383 231.154 96.0453 256.66 96C303 96 350 110.55 392.57 138.07ZM257 160C249.81 159.996 242.641 160.801 235.63 162.4C234.909 162.55 234.328 163.084 234.119 163.791C233.91 164.497 234.107 165.262 234.63 165.78L347.22 278.34C347.739 278.864 348.503 279.06 349.21 278.851C349.916 278.642 350.451 278.062 350.6 277.34C357.094 248.859 350.267 218.972 332.051 196.135C313.835 173.299 286.212 159.999 257 160ZM164.791 233.149C165.498 232.94 166.262 233.136 166.78 233.66L279.4 346.28C279.924 346.798 280.121 347.563 279.912 348.269C279.703 348.976 279.122 349.51 278.4 349.66C246.194 357.032 212.46 347.325 189.098 323.962C165.736 300.6 156.028 266.866 163.4 234.66C163.55 233.939 164.085 233.358 164.791 233.149Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=o;
