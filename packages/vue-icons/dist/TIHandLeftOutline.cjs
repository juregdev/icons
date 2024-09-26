"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),C=e.defineComponent({__name:"TIHandLeftOutline",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M240 0C266.245 0 287.57 21.0627 287.994 47.2062L288 48V50.7313C293.004 48.9625 298.39 48 304 48C330.245 48 351.57 69.0627 351.994 95.2062L352 96V239.791L357.755 225.941C357.94 225.494 358.146 225.056 358.371 224.628C370.945 200.737 401.254 193.139 424.742 206.488C446.912 219.081 453.087 243.33 444.015 268.73L443.735 269.5L391.025 413.5C390.941 413.731 390.851 413.959 390.756 414.186C378.257 444.002 361.93 466.669 338.654 483.196C311.81 502.256 276.836 512 232 512C183.074 512 141.034 495.234 111.229 462.862C80.3159 429.287 64 380.609 64 320V144C64 117.49 85.4903 96 112 96C117.61 96 122.996 96.9625 128 98.7313V80C128 53.4903 149.49 32 176 32C182.244 32 188.209 33.1922 193.681 35.3614C199.229 14.9835 217.865 0 240 0ZM96 320C96 423.39 148.122 480 232 480C270.557 480 299.07 472.056 320.128 457.104C337.79 444.564 350.576 426.954 360.873 402.694L361.102 402.151L413.699 258.461C418.141 246.424 416.318 238.669 409.201 234.465L408.935 234.311C400.996 229.799 391.321 231.982 387.149 238.726L386.972 239.02L350.918 325.796C349.719 328.879 347.593 331.498 344.882 333.31C342.99 334.575 340.813 335.448 338.467 335.811C336.639 336.098 334.746 336.07 332.87 335.694C328.636 334.854 325.004 332.344 322.688 328.879C321.425 326.99 320.554 324.817 320.19 322.476C320.043 321.54 319.978 320.588 320 319.629V96C320 87.1634 312.837 80 304 80C295.269 80 288.171 86.9939 288.003 95.6851L288 96V240V241C288 249.837 280.837 257 272 257C263.269 257 256.171 250.006 256.003 241.315L256 241V240V96V48C256 39.1634 248.837 32 240 32C231.269 32 224.171 38.9939 224.003 47.6851L224 48V80V240C224 248.837 216.837 256 208 256C199.269 256 192.171 249.006 192.003 240.315L192 240V80C192 71.1634 184.837 64 176 64C167.269 64 160.171 70.9939 160.003 79.6851L160 80V144V256C160 264.837 152.837 272 144 272C135.269 272 128.171 265.006 128.003 256.315L128 256V144C128 135.163 120.837 128 112 128C103.269 128 96.1708 134.994 96.003 143.685L96 144V320Z",fill:"currentColor"},null,-1)]),6))}});exports.default=C;
