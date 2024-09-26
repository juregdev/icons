"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),H=e.defineComponent({__name:"TIVariety",props:{size:{type:String,default:"is-default",validator(C){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(C)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(C){const l=C,V=e.computed(()=>["icon",l.size,{[l.type]:l.type&&!l.color,"is-clickable":l.clickable}]);return(i,t)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(V.value),style:e.normalizeStyle(C.color?`color: ${C.color} !important`:void 0),width:"513",height:"512",viewBox:"0 0 513 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t[0]||(t[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M74.2474 31C111.282 31 141.981 57.9432 147.606 93.1887C160.074 80.8353 177.286 73.1976 196.281 73.1976H244.034V99.571C244.034 137.443 213.154 168.142 175.058 168.142H148.529V217.895C160.917 206.07 177.751 198.801 196.281 198.801H244.034V225.175C244.034 263.047 213.154 293.746 175.058 293.746H148.529V338.553C160.917 326.729 177.751 319.46 196.281 319.46H244.034V345.833C244.034 383.706 213.154 414.404 175.058 414.404H148.529V441.598C184.705 436.982 220.809 435.503 256.638 435.503C292.499 435.503 328.753 437.002 365.073 441.655V382.756H343.849C302.825 382.756 269.568 349.694 269.568 308.91V277.262H312.015C332.801 277.262 351.591 285.75 365.073 299.429V262.098H343.849C302.825 262.098 269.568 229.036 269.568 188.252V156.604H312.015C332.801 156.604 351.591 165.091 365.073 178.771V136.494H343.849C302.825 136.494 269.568 103.432 269.568 62.6482V31H312.015C349.049 31 379.749 57.9432 385.373 93.1887C397.841 80.8353 415.054 73.1976 434.048 73.1976H481.801V99.571C481.801 137.443 450.921 168.142 412.825 168.142H386.296V217.895C398.684 206.07 415.518 198.801 434.048 198.801H481.801V225.175C481.801 263.047 450.921 293.746 412.825 293.746H386.296V338.553C398.684 326.729 415.518 319.46 434.048 319.46H481.801V345.833C481.801 383.706 450.921 414.404 412.825 414.404H386.296V444.744C410.423 448.692 434.551 454.172 458.585 461.671C463.827 463.307 466.743 468.857 465.098 474.069C463.453 479.28 457.869 482.179 452.627 480.544C388.09 460.408 322.349 455.283 256.638 455.283C190.789 455.283 125.307 460.37 60.6483 480.544C55.4061 482.179 49.8227 479.28 48.1774 474.069C46.5321 468.857 49.4481 463.307 54.6903 461.671C78.8697 454.127 103.095 448.628 127.306 444.677V382.756H106.082C65.0577 382.756 31.8008 349.694 31.8008 308.91V277.262H74.2474C95.0336 277.262 113.824 285.75 127.306 299.429V262.098H106.082C65.0577 262.098 31.8008 229.036 31.8008 188.252V156.604H74.2474C95.0336 156.604 113.824 165.091 127.306 178.771V136.494H106.082C65.0577 136.494 31.8008 103.432 31.8008 62.6482V31H74.2474ZM222.81 94.2963H196.281C169.911 94.2963 148.529 115.553 148.529 141.769V147.043H175.058C201.428 147.043 222.81 125.786 222.81 99.571V94.2963ZM74.2474 52.0988H53.0241V62.6482C53.0241 91.775 76.7836 115.395 106.082 115.395H127.306V104.846C127.306 75.7189 103.546 52.0988 74.2474 52.0988ZM196.281 219.9H222.81V225.175C222.81 251.39 201.428 272.647 175.058 272.647H148.529V267.372C148.529 241.157 169.911 219.9 196.281 219.9ZM53.0241 177.702H74.2474C103.546 177.702 127.306 201.323 127.306 230.449V240.999H106.082C76.7836 240.999 53.0241 217.379 53.0241 188.252V177.702ZM196.281 340.559H222.81V345.833C222.81 372.049 201.428 393.306 175.058 393.306H148.529V388.031C148.529 361.816 169.911 340.559 196.281 340.559ZM53.0241 298.361H74.2474C103.546 298.361 127.306 321.981 127.306 351.108V361.657H106.082C76.7836 361.657 53.0241 338.037 53.0241 308.91V298.361ZM460.578 94.2963H434.048C407.678 94.2963 386.296 115.553 386.296 141.769V147.043H412.825C439.195 147.043 460.578 125.786 460.578 99.571V94.2963ZM312.015 52.0988H290.791V62.6482C290.791 91.775 314.551 115.395 343.849 115.395H365.073V104.846C365.073 75.7189 341.313 52.0988 312.015 52.0988ZM434.048 219.9H460.578V225.175C460.578 251.39 439.195 272.647 412.825 272.647H386.296V267.372C386.296 241.157 407.678 219.9 434.048 219.9ZM290.791 177.702H312.015C341.313 177.702 365.073 201.323 365.073 230.449V240.999H343.849C314.551 240.999 290.791 217.379 290.791 188.252V177.702ZM434.048 340.559H460.578V345.833C460.578 372.049 439.195 393.306 412.825 393.306H386.296V388.031C386.296 361.816 407.678 340.559 434.048 340.559ZM290.791 298.361H312.015C341.313 298.361 365.073 321.981 365.073 351.108V361.657H343.849C314.551 361.657 290.791 338.037 290.791 308.91V298.361Z",fill:"currentColor"},null,-1)]),6))}});exports.default=H;
