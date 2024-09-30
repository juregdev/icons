"use strict";const C=require("vue"),i=C.defineComponent({__name:"TICorn",props:{size:{type:String,default:"is-default",validator(e){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(e)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(e){const l=e,L=C.computed(()=>["icon",l.size,{[l.type]:l.type&&!l.color,"is-clickable":l.clickable}]);return(o,t)=>(C.openBlock(),C.createElementBlock("svg",{class:C.normalizeClass(L.value),style:C.normalizeStyle(e.color?`color: ${e.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t[0]||(t[0]=[C.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M86.7812 36.8652C80.5178 37.9066 69.777 41.5733 65.0508 44.2831C41.1269 57.9997 31.0363 84.8614 36.4085 120.525C42.664 162.049 68.125 212.216 107.626 260.852C117.262 272.717 138.805 296.761 147.415 305.261L153.911 311.673L145.285 315.807C109.148 333.123 85.6421 361.327 78.283 396.201C75.2933 410.368 76.8426 437.761 81.1102 446.197C84.2181 452.34 91.0661 455.038 97.4037 452.619C101.32 451.123 103.462 448.816 109.305 439.8C113.659 433.082 124.785 422.145 130.935 418.538C139.203 413.687 144.619 412.234 156.155 411.769C176.935 410.932 190.823 415.219 242.991 438.57C290.692 459.923 315.578 468.429 346.137 473.823C361.423 476.522 392.198 476.759 403.563 474.267C430.01 468.466 448.76 456.446 461.09 437.385C481.211 406.28 481.995 360.822 463.405 303.166C459.244 290.26 449.912 267.31 437.243 238.832C423.615 208.196 418.072 194.063 414.692 181.337C412.312 172.369 411.947 169.542 411.863 159.385C411.765 147.395 413.044 141.031 417.148 133.09C421.551 124.571 431.126 114.86 442.942 106.93C451.437 101.229 453.649 98.2361 453.649 92.4468C453.649 88.5116 450.825 83.2742 447.713 81.4348C440.234 77.0169 411.927 75.5773 396.655 78.8381C362.483 86.1351 334.018 109.353 316.17 144.486L310.798 155.062L298.241 142.759C264.748 109.943 237.315 88.7335 201.105 67.6586C165.311 46.8254 130.707 35.7521 102.183 36.0042C96.2466 36.056 89.3157 36.4438 86.7812 36.8652ZM124.62 65.2303C133.184 67.0955 151.556 73.0463 156.364 75.5108L159.165 76.9469L143.194 92.8993L127.224 108.852L105.67 87.3104C93.8139 75.4616 84.301 65.5817 84.529 65.3537C84.757 65.1258 87.1706 64.4341 89.8934 63.8166C96.7552 62.2614 114.263 62.9738 124.62 65.2303ZM86.4167 106.054C97.9383 117.568 107.365 127.4 107.365 127.903C107.365 128.404 100.206 135.695 91.4573 144.103L75.5498 159.39L72.4661 151.4C65.3392 132.931 62.2097 118.653 62.1026 104.118C62.0352 94.9882 63.4955 85.1196 64.9143 85.1196C65.22 85.1196 74.8961 94.5401 86.4167 106.054ZM209.605 104.486C219.177 110.822 233.929 121.647 239.308 126.281L242.149 128.729L218.367 152.471L194.583 176.212L170.341 152.039L146.099 127.865L165.74 108.777L185.381 89.6869L192.698 93.9131C196.723 96.2369 204.33 100.995 209.605 104.486ZM399.965 108.511C394.826 114.81 393.135 117.391 389.624 124.299C384.463 134.449 382.697 142.206 382.615 155.067C382.47 178.06 388.081 196.007 412.496 250.625C431.621 293.409 438.9 312.785 444.08 334.686C452.441 370.042 451.715 396.933 441.848 417.33C437.267 426.8 426.593 437.475 417.123 442.055C392.221 454.1 357.454 452.822 312.89 438.222C298.711 433.577 280.203 426.017 250.418 412.703C195.8 388.288 177.853 382.677 154.86 382.822C136.493 382.939 123.486 387.785 108.311 400.166L104.791 403.039L105.338 400.166C106.673 393.161 111.409 382.277 116.309 374.95C132.33 350.999 161.895 333.48 196.742 327.285C207.513 325.371 230.124 324.722 242.167 325.982C288.287 330.809 330.751 351.654 369.675 388.575C373.827 392.515 378.074 396.185 379.111 396.731C380.149 397.278 383.107 397.725 385.687 397.725C393.225 397.725 397.529 393.101 397.506 385.031C397.492 380.241 396.402 378.672 382.632 363.629C349.827 327.789 330.569 286.826 325.787 242.718C324.241 228.463 325.226 205.62 327.949 192.535C336.942 149.322 362.508 116.675 394.927 107.005C398.49 105.943 401.728 105.053 402.124 105.028C402.521 105.002 401.549 106.569 399.965 108.511ZM286.873 169.327C300.945 183.711 301.805 184.779 301.369 187.33C301.114 188.821 300.426 193.414 299.842 197.536L298.779 205.031L279.925 223.87L261.072 242.708L237.114 218.752L213.158 194.794L237.708 170.233L262.257 145.672L267.086 149.854C269.741 152.154 278.645 160.918 286.873 169.327ZM151.184 170.821L174.722 194.348L150.845 218.235L126.969 242.123L121.22 234.649C111.667 222.227 103.39 210.267 95.6585 197.709L88.3174 185.786L107.549 166.541C118.126 155.956 126.975 147.295 127.214 147.295C127.452 147.295 138.238 157.882 151.184 170.821ZM223.195 281.458L204.308 300.345L197.071 301.466C193.09 302.083 188.571 302.862 187.026 303.201C184.277 303.802 183.805 303.399 164.789 284.252C154.104 273.493 145.361 264.199 145.361 263.6C145.361 263.001 156.256 251.662 169.571 238.401L193.78 214.291L217.93 238.431L242.082 262.571L223.195 281.458ZM300.26 255.745C301.604 265.109 305.371 282.111 307.323 287.622C307.659 288.572 301.768 283.232 294.23 275.755L280.527 262.161L289.136 253.518C293.871 248.765 297.96 244.877 298.223 244.877C298.485 244.877 299.402 249.768 300.26 255.745ZM286.996 307.768C286.518 307.927 284.28 307.453 282.022 306.714C274.008 304.092 261.343 301.558 246.884 299.68L242.621 299.127L252.065 290.204L261.509 281.282L274.686 294.381C281.933 301.584 287.472 307.609 286.996 307.768Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=i;
