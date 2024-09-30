"use strict";const e=require("vue"),o=e.defineComponent({__name:"TISnowOutline",props:{size:{type:String,default:"is-default",validator(C){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(C)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(C){const l=C,i=e.computed(()=>["icon",l.size,{[l.type]:l.type&&!l.color,"is-clickable":l.clickable}]);return(n,t)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(i.value),style:e.normalizeStyle(C.color?`color: ${C.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t[0]||(t[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M255.993 16C264.724 16 271.822 22.9939 271.99 31.6851L271.993 32V78.68C283.779 76.6993 295.136 72.5149 305.453 66.2966C313.021 61.7351 322.855 64.1725 327.416 71.7406C331.978 79.3088 329.54 89.1419 321.972 93.7034C306.649 102.939 289.606 108.814 271.993 111.017V228.287L373.558 169.649C366.76 153.496 363.236 135.857 363.555 117.718C363.709 108.988 370.827 102.015 379.52 102L379.835 102.002C388.565 102.156 395.538 109.274 395.553 117.967L395.55 118.282C395.335 130.495 397.443 142.406 401.564 153.479L441.983 130.144C449.635 125.725 459.421 128.347 463.839 136C468.201 143.555 465.701 153.188 458.275 157.684L457.983 157.856L417.56 181.195C425.085 190.302 434.342 198.085 445.023 204.008C452.75 208.293 455.541 218.032 451.255 225.76C446.969 233.488 437.231 236.278 429.503 231.992C413.643 223.197 400.137 211.325 389.555 197.363L287.993 256L389.555 314.637C400.137 300.675 413.643 288.803 429.503 280.008C437.231 275.722 446.969 278.512 451.255 286.24C455.541 293.968 452.75 303.707 445.023 307.992C434.342 313.915 425.085 321.698 417.56 330.805L457.983 354.144C465.635 358.562 468.257 368.347 463.839 376C459.477 383.555 449.885 386.207 442.278 382.023L441.983 381.856L401.564 358.521C397.562 369.272 395.459 380.813 395.537 392.653L395.55 393.718C395.706 402.553 388.67 409.842 379.835 409.997C370.999 410.153 363.711 403.117 363.555 394.282C363.236 376.143 366.76 358.504 373.558 342.351L271.993 283.713V401.001C289.373 403.187 306.405 408.948 321.95 418.284C329.526 422.833 331.979 432.662 327.429 440.238C322.939 447.715 313.305 450.201 305.771 445.89L305.475 445.716C295.007 439.43 283.64 435.304 271.993 433.339V480C271.993 488.837 264.829 496 255.993 496C247.261 496 240.163 489.006 239.996 480.315L239.993 480V433.339C228.684 435.247 217.64 439.191 207.426 445.173L206.51 445.716C198.935 450.266 189.106 447.813 184.556 440.238C180.007 432.662 182.46 422.833 190.035 418.284C205.58 408.948 222.613 403.187 239.993 401.001V283.713L138.427 342.351C145.226 358.504 148.75 376.143 148.43 394.282C148.274 403.117 140.986 410.153 132.151 409.997C123.421 409.844 116.447 402.726 116.433 394.033L116.435 393.718C116.65 381.505 114.543 369.594 110.421 358.521L70.0027 381.856C62.35 386.275 52.5645 383.653 48.1463 376C43.7846 368.445 46.2839 358.812 53.7108 354.316L54.0027 354.144L94.4258 330.805C86.9006 321.698 77.6433 313.915 66.9628 307.992C59.2351 303.707 56.4447 293.968 60.7304 286.24C65.016 278.512 74.7548 275.722 82.4825 280.008C98.3426 288.803 111.848 300.675 122.431 314.637L223.993 256L122.431 197.363C111.848 211.325 98.3426 223.197 82.4825 231.992C74.7548 236.278 65.016 233.488 60.7304 225.76C56.4447 218.032 59.2351 208.293 66.9628 204.008C77.6433 198.085 86.9006 190.302 94.4258 181.195L54.0027 157.856C46.35 153.438 43.728 143.653 48.1463 136C52.5079 128.445 62.1 125.793 69.7073 129.977L70.0027 130.144L110.421 153.479C114.423 142.728 116.526 131.187 116.448 119.347L116.435 118.282C116.279 109.447 123.316 102.158 132.151 102.002C140.986 101.847 148.274 108.883 148.43 117.718C148.75 135.857 145.226 153.496 138.427 169.649L239.993 228.287V111.015C222.364 108.809 205.33 102.935 190.013 93.7034C182.445 89.1419 180.008 79.3088 184.569 71.7406C189.131 64.1725 198.964 61.7351 206.532 66.2966C216.844 72.512 228.196 76.6953 239.993 78.6772V32C239.993 23.1634 247.156 16 255.993 16Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=o;
