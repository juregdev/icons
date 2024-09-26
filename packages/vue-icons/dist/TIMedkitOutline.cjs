"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),n=e.defineComponent({__name:"TIMedkitOutline",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(r,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M383.994 79.2062C383.57 53.0627 362.245 32 336 32H176L175.206 32.0064C149.063 32.4303 128 53.7554 128 80V96H80C44.6538 96 16 124.654 16 160V416C16 451.346 44.6538 480 80 480H432C467.346 480 496 451.346 496 416V160C496 124.654 467.346 96 432 96H384V80L383.994 79.2062ZM352 96V80C352 71.2686 345.006 64.1708 336.315 64.003L336 64H176C167.269 64 160.171 70.9939 160.003 79.6851L160 80V96H352ZM144 128H80C62.3269 128 48 142.327 48 160V416C48 433.673 62.3269 448 80 448H432C449.673 448 464 433.673 464 416V160C464 142.327 449.673 128 432 128H368H144ZM256 192C264.731 192 271.829 198.994 271.997 207.685L272 208V272H336C344.837 272 352 279.163 352 288C352 296.731 345.006 303.829 336.315 303.997L336 304H272V368C272 376.837 264.837 384 256 384C247.269 384 240.171 377.006 240.003 368.315L240 368V304H176C167.163 304 160 296.837 160 288C160 279.269 166.994 272.171 175.685 272.003L176 272H240V208C240 199.163 247.163 192 256 192Z",fill:"currentColor"},null,-1)]),6))}});exports.default=n;
