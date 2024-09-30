"use strict";const e=require("vue"),o=e.defineComponent({__name:"TILanguageOutline",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const C=l,i=e.computed(()=>["icon",C.size,{[C.type]:C.type&&!C.color,"is-clickable":C.clickable}]);return(n,t)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(i.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t[0]||(t[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M207.997 63.6851C207.829 54.9939 200.731 48 192 48C183.163 48 176 55.1634 176 64V96H48L47.6851 96.003C38.9939 96.1708 32 103.269 32 112C32 120.837 39.1634 128 48 128H192H259.697C257.972 133.171 256.05 138.638 253.928 144.351C243.681 171.936 230.946 199.513 215.634 225.145C209.903 234.738 203.911 243.878 197.658 252.506C197.329 252.083 197 251.658 196.672 251.232C180.844 230.698 167.191 210.722 155.755 192.121C151.771 185.64 148.355 179.806 145.511 174.721L144.938 173.693C144.383 172.692 143.879 171.773 143.428 170.938L142.791 169.75L142.077 168.395C137.953 160.753 128.452 157.781 120.691 161.767C112.83 165.804 109.73 175.448 113.767 183.309C113.819 183.41 113.882 183.531 113.955 183.673L115.272 186.144C115.948 187.394 116.718 188.795 117.582 190.341L118.003 191.09C120.969 196.369 124.467 202.328 128.495 208.879L129.377 210.31C141.195 229.423 155.185 249.826 171.328 270.768C173.25 273.261 175.182 275.721 177.124 278.148C154.057 304.763 129.406 327.726 104.781 346.974C95.9984 353.84 87.8651 359.718 80.5981 364.603C78.471 366.033 76.5568 367.284 74.8719 368.355L73.9756 368.922C73.5454 369.192 73.1557 369.435 72.8076 369.649L71.5778 370.396C64.1942 374.963 61.7871 384.62 66.2207 392.132C70.7119 399.742 80.5219 402.271 88.1321 397.779C88.6118 397.496 89.3901 397.024 90.4498 396.362L92.026 395.369C93.5948 394.371 95.3173 393.251 97.1846 392.007L98.4509 391.16C106.337 385.859 115.088 379.534 124.488 372.186C149.53 352.611 174.547 329.471 198.115 302.754C206.334 311.793 214.611 320.241 222.835 328.081C228.359 333.347 233.512 338.002 238.198 342.031L239.589 343.221C241.38 344.743 242.977 346.067 244.365 347.189L244.779 347.522C245.434 348.049 245.92 348.432 246.227 348.669L246.509 348.881C253.491 354.03 263.343 352.676 268.669 345.773C274.066 338.776 272.77 328.729 265.773 323.331L265.078 322.782L263.36 321.388C262.705 320.85 262 320.263 261.246 319.627L260.317 318.841C255.719 314.932 250.542 310.283 244.915 304.919C236.208 296.619 227.423 287.574 218.722 277.817C227.328 266.494 235.45 254.372 243.105 241.556C259.508 214.097 273.043 184.791 283.925 155.493C287.605 145.587 290.726 136.352 293.309 128H336L336.315 127.997C345.006 127.829 352 120.731 352 112C352 103.163 344.837 96 336 96H281.64C281.405 95.9948 281.171 95.9948 280.938 96H208V64L207.997 63.6851ZM353.294 217.697C358.78 204.897 376.8 204.769 382.536 217.313L382.706 217.697L478.706 441.697C482.187 449.819 478.425 459.225 470.303 462.706C462.282 466.144 453.01 462.518 449.427 454.605L449.294 454.303L426.021 400H309.979L286.706 454.303C283.269 462.323 274.054 466.092 266.002 462.833L265.697 462.706C257.677 459.269 253.908 450.054 257.167 442.002L257.294 441.697L353.294 217.697ZM412.307 368L368 264.617L323.693 368H412.307Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=o;
