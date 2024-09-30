"use strict";const e=require("vue"),o=e.defineComponent({__name:"TIVolumeMuteOutline",props:{size:{type:String,default:"is-default",validator(C){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(C)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(C){const l=C,i=e.computed(()=>["icon",l.size,{[l.type]:l.type&&!l.color,"is-clickable":l.clickable}]);return(n,t)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(i.value),style:e.normalizeStyle(C.color?`color: ${C.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t[0]||(t[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M75.0511 68.4296C68.7847 62.4391 58.8479 62.5247 52.6863 68.6863C46.4379 74.9347 46.4379 85.0653 52.6863 91.3137L404.686 443.314L404.949 443.57C411.215 449.561 421.152 449.475 427.314 443.314C433.562 437.065 433.562 426.935 427.314 420.686L75.3137 68.6863L75.0511 68.4296ZM224 170.72V136.92L207.31 150.58C205.72 151.889 203.396 151.776 201.94 150.32L184.89 133.26C184.092 132.462 183.668 131.363 183.723 130.236C183.778 129.108 184.307 128.056 185.18 127.34L217.12 101.19C217.331 101.009 217.552 100.839 217.78 100.68C225.224 95.1746 235.177 94.4617 243.33 98.85C251.225 103.21 256.091 111.551 256 120.57V194.72C255.997 196.337 255.021 197.793 253.527 198.41C252.032 199.028 250.313 198.684 249.17 197.54L225.17 173.54C224.422 172.792 224.002 171.778 224 170.72ZM224 375.08L145.93 311.16C140.198 306.505 133.034 303.975 125.65 304H64V208H114.72C116.337 207.997 117.793 207.021 118.41 205.527C119.028 204.032 118.684 202.313 117.54 201.17L93.54 177.17C92.7917 176.422 91.7777 176.002 90.72 176H56C42.7452 176 32 186.745 32 200V312C32 325.255 42.7452 336 56 336H125.76L217.12 410.8C217.331 410.981 217.552 411.151 217.78 411.31C225.32 416.892 235.427 417.553 243.63 413C251.362 408.597 256.098 400.347 256 391.45V341.28C255.998 340.222 255.578 339.208 254.83 338.46L230.83 314.46C229.687 313.316 227.968 312.972 226.473 313.59C224.979 314.207 224.003 315.663 224 317.28V375.08ZM334.25 184.73C346.19 208.12 352 231.44 352 256C351.987 266.782 350.786 277.53 348.42 288.05C348.118 289.489 347.051 290.646 345.642 291.064C344.232 291.481 342.707 291.092 341.67 290.05L322.01 270.38C320.364 268.733 319.517 266.452 319.69 264.13C319.897 261.377 320 258.667 320 256C320 236.62 315.34 218.06 305.75 199.27C301.928 191.429 305.091 181.971 312.861 178.007C320.631 174.042 330.145 177.033 334.25 184.73ZM416 256C416 204.81 402.92 172.11 381.82 135.94C377.311 128.436 367.608 125.949 360.045 130.36C352.482 134.771 349.869 144.44 354.18 152.06C373.07 184.44 384 211.83 384 256C384 279.83 380.71 298.88 374.63 316.65C373.633 319.54 374.37 322.746 376.53 324.91L393.3 341.67C394.241 342.614 395.59 343.028 396.899 342.773C398.207 342.518 399.302 341.628 399.82 340.4C410.09 315.88 416 289.91 416 256ZM429.49 87.39C459.81 134.89 480 181.74 480 256C480 307 470.88 348.22 449.4 390.39C448.817 391.532 447.722 392.325 446.455 392.523C445.188 392.721 443.904 392.299 443 391.39L425.18 373.55C423.986 372.349 423.678 370.527 424.41 369C439.1 338.12 448 303.45 448 256C448 189.5 429.82 147.38 402.49 104.61C397.735 97.1542 399.924 87.2552 407.38 82.5C414.836 77.7448 424.735 79.9342 429.49 87.39Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=o;
