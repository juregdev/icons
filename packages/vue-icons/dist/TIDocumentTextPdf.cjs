"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),n=e.defineComponent({__name:"TIDocumentTextPdf",props:{size:{type:String,default:"is-default",validator(t){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(t)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(t){const l=t,o=e.computed(()=>["icon",l.size,{[l.type]:l.type&&!l.color,"is-clickable":l.clickable}]);return(r,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(t.color?`color: ${t.color} !important`:void 0),width:"513",height:"512",viewBox:"0 0 513 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M144.801 32H243.551C256.277 32 268.483 37.0565 277.484 46.0563L418.746 187.318C427.744 196.318 432.801 208.524 432.801 221.25V416C432.801 451.346 404.147 480 368.801 480H144.801C109.455 480 80.8008 451.346 80.8008 416V96C80.8008 60.6538 109.455 32 144.801 32ZM144.801 64H240.801V176L240.807 176.794C241.231 202.937 262.556 224 288.801 224H400.801V416C400.801 433.673 386.474 448 368.801 448H144.801C127.128 448 112.801 433.673 112.801 416V96C112.801 78.3269 127.128 64 144.801 64ZM272.801 86.6274L378.173 192H288.801L288.486 191.997C279.795 191.829 272.801 184.731 272.801 176V86.6274ZM178.325 297C185.554 297 191.831 298.219 197.158 300.657C202.484 303.019 206.593 306.448 209.485 310.943C212.376 315.362 213.822 320.581 213.822 326.6C213.822 332.619 212.376 337.838 209.485 342.257C206.593 346.676 202.484 350.105 197.158 352.543C191.831 354.905 185.554 356.086 178.325 356.086H164.4V377H141.801V297H178.325ZM176.955 338.257C181.597 338.257 185.097 337.267 187.456 335.286C189.815 333.229 190.994 330.333 190.994 326.6C190.994 322.867 189.815 319.971 187.456 317.914C185.097 315.857 181.597 314.829 176.955 314.829H164.4V338.257H176.955ZM224.841 297H262.621C271.371 297 279.133 298.638 285.905 301.914C292.677 305.19 297.928 309.838 301.656 315.857C305.385 321.876 307.249 328.924 307.249 337C307.249 345.076 305.385 352.124 301.656 358.143C297.928 364.162 292.677 368.81 285.905 372.086C279.133 375.362 271.371 377 262.621 377H224.841V297ZM261.708 358.943C268.556 358.943 274.035 357 278.144 353.114C282.329 349.229 284.421 343.857 284.421 337C284.421 330.143 282.329 324.771 278.144 320.886C274.035 317 268.556 315.057 261.708 315.057H247.44V358.943H261.708ZM341.738 332.086V314.486H381.801V297H319.139V377H341.738V349.571H377.007V332.086H341.738Z",fill:"currentColor"},null,-1)]),6))}});exports.default=n;
