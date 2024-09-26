"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),o=e.defineComponent({__name:"TIFingerPrintSharp",props:{size:{type:String,default:"is-default",validator(C){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(C)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(C){const l=C,i=e.computed(()=>["icon",l.size,{[l.type]:l.type&&!l.color,"is-clickable":l.clickable}]);return(r,t)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(i.value),style:e.normalizeStyle(C.color?`color: ${C.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t[0]||(t[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M132.47 71.66C143.55 64.94 182.74 44.89 256 44.89C340.393 44.89 379.581 71.5825 382.674 73.6895C382.789 73.7681 382.854 73.8125 382.87 73.82L396.77 82.68L413 57.47L399.78 48.91C399.26 48.53 398.72 48.15 398.18 47.79C385.5 39.54 340.54 15 256 15C168.29 15 123.25 41.48 112.59 48.71L98.9999 57.52L115.2 82.73L132.47 71.66ZM56.7899 199.58L69.1499 207.08L76.4999 193.5C93.0699 165.75 143.78 101 256 101C371 101 420 171.32 436.1 194.46L444.26 207.16L469.88 191L461.34 177.64C452.46 164.79 433.82 138.11 400.56 114.54C360.15 85.82 311.5 71.25 256 71.25C127.93 71.25 69.3099 146.36 49.9999 178.5L42.6299 191L53.9999 197.86C54.5169 198.264 55.0616 198.632 55.6299 198.96C56.0055 199.187 56.3927 199.394 56.7899 199.58ZM379.22 171.32C343.68 142.39 301.1 127.07 256 127.07C158.48 127.07 93.6899 193.07 72.6699 258.54C53.636 318.321 76.2998 404.646 77.7585 410.202L77.7999 410.36L82.1799 424.17L112.11 417.74L107.37 402.74C107.16 401.99 85.2699 319.81 101.96 267.53C110.96 239.45 129.69 212.13 153.31 192.74C181.81 169.39 217.35 157 256 157C346.58 157 397.93 227.61 412.45 265.11C423.72 294.04 421.12 326.93 406.17 347.11C400.64 354.5 390.89 363.18 376.05 362.43C342.24 360.71 336.39 344 328.26 312.18L328.195 311.926C324.316 296.685 320.305 280.929 310.39 268.18C298.25 252.43 280.59 244.82 256.11 244.82C229.78 244.82 209.84 253.5 196.73 270.54C168.13 307.82 186.73 371.47 187.52 374.15L187.74 375C189.15 378.86 223.82 471.65 316.67 494.68L331.44 497.89L339.53 469.18L324.26 465.75C250.04 447.32 219.05 371.36 216.67 365.36C213.987 355.623 212.279 345.644 211.57 335.57C210.49 321.11 211.25 301.18 221 288.43C228.15 279.11 239.64 274.61 256 274.61C285.79 274.61 290.78 289.18 298.58 319.4C306.16 348.86 316.58 389.25 374.42 392.15C396.63 393.22 416.68 383.36 430.76 364.5C451.89 336.22 455.9 292.93 440.95 254.36C429.27 224 406.74 193.82 379.22 171.32ZM180.73 243.43C155.59 271.21 150.71 313.93 154.18 342.21C161.11 390.43 179.64 428.79 212.36 463.07L222.7 472.86L201.75 494.65L190.15 483.43C153 444.43 132 400.82 124.03 346.29V345.96C119.59 309.86 126.09 258.75 157.94 223.61C181.45 197.68 214.5 184.5 256 184.5C305.11 184.5 343.68 207.32 367.74 250.43C385.17 281.72 388.63 312.9 388.74 314.18C389.434 319.351 389.768 324.563 389.74 329.78L359.74 331.98L358.31 317.29C355.665 298.594 349.604 280.544 340.43 264.04C321.79 231.15 293.41 214.43 255.92 214.43C223.52 214.43 198.17 224.14 180.73 243.43ZM309.88 395.36C330.14 411.54 357.22 417.96 390.59 414.21L404.55 412.05L410.65 441.76L394.06 443.85C386.904 444.695 379.705 445.126 372.5 445.14C340 445.14 312.37 436.14 290.26 418.25C246.063 382.64 240.911 324.755 240.644 321.751L240.64 321.71L239.33 306.71L269.86 304.48L271.09 319.36C271.092 319.379 271.096 319.418 271.103 319.478C271.4 322.253 276.362 368.509 309.88 395.36Z",fill:"currentColor"},null,-1)]),6))}});exports.default=o;
