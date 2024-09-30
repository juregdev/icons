"use strict";const e=require("vue"),o=e.defineComponent({__name:"TISunnyOutline",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,C=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(C.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M256 32C264.731 32 271.829 38.9939 271.997 47.6851L272 48V96C272 104.837 264.837 112 256 112C247.269 112 240.171 105.006 240.003 96.3149L240 96V48C240 39.1634 247.163 32 256 32ZM256 400C264.731 400 271.829 406.994 271.997 415.685L272 416V464C272 472.837 264.837 480 256 480C247.269 480 240.171 473.006 240.003 464.315L240 464V416C240 407.163 247.163 400 256 400ZM414.394 97.6063C408.145 91.3579 398.015 91.3579 391.766 97.6063L357.826 131.546L357.57 131.809C351.579 138.075 351.665 148.012 357.826 154.174C364.075 160.422 374.205 160.422 380.454 154.174L414.394 120.234L414.65 119.971C420.641 113.705 420.555 103.768 414.394 97.6063ZM131.546 357.826C137.795 351.578 147.925 351.578 154.174 357.826C160.335 363.988 160.421 373.925 154.43 380.191L154.174 380.454L120.234 414.394C113.985 420.642 103.855 420.642 97.6063 414.394C91.4447 408.232 91.3591 398.295 97.3496 392.029L97.6063 391.766L131.546 357.826ZM480 256C480 247.163 472.837 240 464 240H416L415.685 240.003C406.994 240.171 400 247.269 400 256C400 264.837 407.163 272 416 272H464L464.315 271.997C473.006 271.829 480 264.731 480 256ZM96 240C104.837 240 112 247.163 112 256C112 264.731 105.006 271.829 96.3149 271.997L96 272H48C39.1634 272 32 264.837 32 256C32 247.269 38.9939 240.171 47.6851 240.003L48 240H96ZM380.191 357.57C373.925 351.579 363.988 351.665 357.826 357.826C351.578 364.075 351.578 374.205 357.826 380.454L391.766 414.394L392.029 414.65C398.295 420.641 408.232 420.555 414.394 414.394C420.642 408.145 420.642 398.015 414.394 391.766L380.454 357.826L380.191 357.57ZM97.6063 97.6063C103.768 91.4447 113.705 91.3591 119.971 97.3496L120.234 97.6063L154.174 131.546C160.422 137.795 160.422 147.925 154.174 154.174C148.012 160.335 138.075 160.421 131.809 154.43L131.546 154.174L97.6063 120.234C91.3579 113.985 91.3579 103.855 97.6063 97.6063ZM256 160C202.981 160 160 202.981 160 256C160 309.019 202.981 352 256 352C309.019 352 352 309.019 352 256C352 202.981 309.019 160 256 160ZM256 192C291.346 192 320 220.654 320 256C320 291.346 291.346 320 256 320C220.654 320 192 291.346 192 256C192 220.654 220.654 192 256 192Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=o;
