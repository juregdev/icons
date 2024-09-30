"use strict";const e=require("vue"),i=e.defineComponent({__name:"TILogoAmazon",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,C)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},C[0]||(C[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M304.24 325.92C295.624 335.457 285.918 343.949 275.32 351.22C255.099 363.168 232.114 369.641 208.63 370C187.864 369.547 167.761 362.606 151.14 350.15C123.422 324.81 112.772 285.776 123.78 249.87C134.258 218.323 158.168 193.036 189.08 180.81C223.047 170.604 258.312 165.366 293.78 165.26V128C291.406 111.067 277.967 97.8331 261 95.72C250.432 94.2808 239.671 95.6893 229.83 99.8C215.8 106.401 205.734 119.265 202.7 134.47C200.437 139.229 195.334 141.955 190.12 141.19L139.22 136.69C134.551 135.428 131.191 131.353 130.84 126.53C134.914 101.629 147.931 79.0695 167.45 63.08C193.292 43.0767 225.174 32.4679 257.85 33C288.127 33.2771 317.572 42.9452 342.12 60.67C362.689 78.0491 374.03 103.989 372.82 130.89V259.8C373.45 270.644 376.166 281.265 380.82 291.08L396.69 314.31C398.39 317.86 398.39 321.99 396.69 325.54L349.7 365.25C345.707 367.419 340.852 367.25 337.02 364.81C324.772 353.02 313.787 339.986 304.24 325.92ZM293.64 209.09C278.917 208.794 264.197 209.761 249.64 211.98C231.846 215.977 216.657 227.489 208 243.54C200.851 261.086 201.979 280.917 211.07 297.54C222.329 311.606 241.511 316.57 258.18 309.73C277.573 297.294 290.535 276.978 293.64 254.15V209.09Z",fill:"currentColor"},null,-1),e.createElementVNode("path",{d:"M387.15 389.44C403.267 386.311 419.755 385.56 436.09 387.21L436.76 387.34C442.118 388.638 445.415 394.028 444.13 399.39C440.93 415.295 435.851 430.764 429 445.47C428.588 446.806 429.328 448.224 430.66 448.65C431.42 448.887 432.247 448.75 432.89 448.28C452.421 432.579 463.846 408.919 464 383.86C464.5 377.481 460.079 371.762 453.78 370.64C429.833 366.514 405.212 371.648 384.91 385C383.776 385.825 383.521 387.411 384.34 388.55C384.987 389.421 386.119 389.779 387.15 389.44Z",fill:"currentColor"},null,-1),e.createElementVNode("path",{d:"M48.4797 379.73C88.411 426.614 141.782 460.097 201.37 475.65C254.97 486.638 310.664 480.607 360.67 458.4C385.608 446.929 408.242 431.001 427.46 411.4C429.17 408.478 428.291 404.728 425.46 402.87C422.881 401.919 420.05 401.901 417.46 402.82C380.858 421.836 341.548 435.105 300.91 442.16C258.293 446.86 215.179 443.869 173.62 433.33C131.112 419.25 90.9636 398.858 54.5197 372.84C52.6207 372.224 50.5372 372.797 49.2198 374.297C47.9024 375.797 47.6036 377.936 48.4597 379.74L48.4797 379.73Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=i;
