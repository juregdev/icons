"use strict";const e=require("vue"),n=e.defineComponent({__name:"TIDocumentAttachOutline",props:{size:{type:String,default:"is-default",validator(t){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(t)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(t){const l=t,o=e.computed(()=>["icon",l.size,{[l.type]:l.type&&!l.color,"is-clickable":l.clickable}]);return(s,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(t.color?`color: ${t.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M214.784 48C204.241 28.4113 185.138 16 160 16C120.605 16 96 47.0221 96 88V232L96.0055 232.691C96.3683 255.421 114.614 272 136 272L136.343 272.002C146.851 271.994 156.936 267.818 164.377 260.377L164.766 259.983C171.963 252.582 175.994 242.666 176.002 232.343L176 232V80L175.997 79.6851C175.829 70.9939 168.731 64 160 64C151.163 64 144 71.1634 144 80L143.999 232.521C143.946 234.484 143.143 236.356 141.75 237.75C140.283 239.217 138.285 240.029 136.211 240.001L135.746 239.997C131.368 239.878 128 236.693 128 232V88L128.003 87.3415C128.117 75.5192 131.285 65.3612 136.749 58.4714C142.16 51.6493 149.782 48 160 48C180.037 48 192 62.8547 192 87.38V226.13L191.993 227.216C191.546 262.931 169.02 288 136 288C102.643 288 80 262.428 80 226.13V144L79.997 143.685C79.8292 134.994 72.7314 128 64 128C55.1634 128 48 135.163 48 144V226.13L48.0108 227.721C48.685 277.343 80.8838 315.76 128 319.672V432L128.009 433.058C128.574 467.916 157.007 496 192 496H400L401.058 495.991C435.916 495.426 464 466.993 464 432V237.25L463.996 236.644C463.839 224.137 458.801 212.175 449.945 203.318L308.684 62.0563L308.253 61.6307C299.294 52.8972 287.274 48 274.75 48H214.784ZM223.726 80C223.878 82.023 223.968 84.0764 223.993 86.1574L224 87.38V226.13C224 270.641 198.725 306.428 160 316.891V432C160 449.496 174.042 463.713 191.471 463.996L192 464H400C417.496 464 431.713 449.958 431.996 432.529L432 432V240H320C293.755 240 272.43 218.937 272.006 192.794L272 192V80H223.726ZM304 102.627L409.373 208H320L319.685 207.997C310.994 207.829 304 200.731 304 192V102.627Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=n;
