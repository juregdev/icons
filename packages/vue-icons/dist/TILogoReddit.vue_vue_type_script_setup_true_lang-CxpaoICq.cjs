"use strict";const e=require("vue"),i=e.defineComponent({__name:"TILogoReddit",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const C=l,o=e.computed(()=>["icon",C.size,{[C.type]:C.type&&!C.color,"is-clickable":C.clickable}]);return(r,t)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t[0]||(t[0]=[e.createElementVNode("path",{d:"M174.226 258.739C192.595 251.13 213.654 259.853 221.262 278.222C228.871 296.591 220.148 317.649 201.779 325.258C183.41 332.867 162.351 324.144 154.743 305.775C147.134 287.406 155.857 266.347 174.226 258.739Z",fill:"currentColor"},null,-1),e.createElementVNode("path",{d:"M288 292C288 272.118 304.117 256 324 256C343.882 256 360 272.118 360 292C360 311.882 343.882 328 324 328C304.117 328 288 311.882 288 292Z",fill:"currentColor"},null,-1),e.createElementVNode("path",{d:"M323.221 362.229L323.23 362.22L323.28 362.21C324.889 360.617 327.48 360.617 329.09 362.21L342.8 375.68C343.585 376.461 344.026 377.523 344.026 378.63C344.026 379.737 343.585 380.799 342.8 381.58C339.4 384.98 307.96 415.81 256.02 416.03C203.94 415.81 172.64 384.98 169.24 381.58C168.455 380.801 168.014 379.741 168.014 378.635C168.014 377.529 168.455 376.469 169.24 375.69L182.94 362.22C184.553 360.62 187.156 360.62 188.77 362.22L188.806 362.257C190.275 363.746 214.489 388.292 256.08 388.49C297.376 388.291 322.622 362.833 323.221 362.229Z",fill:"currentColor"},null,-1),e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M496 253.77C496 222.58 470.86 197.21 440 197.21C426.992 197.209 414.395 201.758 404.39 210.07C369.39 186.3 323.61 171.75 274.74 168.8L296.74 89.8L363.15 103C365.05 129.48 387.15 150.49 413.8 150.49C441.8 150.49 464.58 127.49 464.58 99.28C464.58 71.07 441 48 413 48C393.47 48 376.69 59.19 368.15 76.77L278.15 58.88L247.05 168.4L242.42 168.53C191.79 170.74 144.08 185.46 107.65 210.06C97.6471 201.718 85.0243 197.168 71.9996 197.21C41.1096 197.21 15.9996 222.58 15.9996 253.77C15.9098 273.977 26.6315 292.689 44.1096 302.83C43.5116 307.251 43.2142 311.708 43.2196 316.17C43.3296 355.91 65.7096 393.17 106.22 421.17C146.36 448.77 199.51 464 256 464C312.49 464 365.76 448.77 405.83 421.11C446.36 393.11 468.68 355.84 468.68 316.05C468.67 311.604 468.39 307.162 467.84 302.75C485.329 292.653 496.073 273.965 496 253.77ZM414 75C427.254 75 438 85.7452 438 99C438 112.255 427.254 123 414 123C400.745 123 390 112.255 390 99C390 85.7452 400.745 75 414 75ZM72.1396 224.06C55.8193 224.159 42.6586 237.45 42.7196 253.77C42.7438 261.813 45.9719 269.514 51.6896 275.17C58.8296 257.9 70.2596 241.9 85.7596 227.49C81.5692 225.248 76.8921 224.07 72.1396 224.06ZM390.82 399C355.08 423.59 307.22 437.14 256.05 437.14C204.88 437.14 157 423.61 121.29 399C88.2896 376.21 70.0496 346.74 70.0496 316C70.068 306.685 71.7441 297.448 74.9996 288.72C80.6796 272.98 91.1596 258.24 106.15 244.93C110.833 240.793 115.762 236.943 120.91 233.4L121.21 233.19L121.45 233.02C157.17 208.5 204.97 195.02 256.06 195.02C307.15 195.02 354.96 208.53 390.68 233.02L390.91 233.19L391.25 233.44C396.391 236.97 401.316 240.803 406 244.92C421 258.24 431.48 272.97 437.16 288.73C439.221 294.45 440.666 300.373 441.47 306.4C441.871 309.601 442.071 312.824 442.07 316.05C442.06 346.77 423.86 376.24 390.82 399ZM426.35 227.36C441.86 241.79 453.29 257.8 460.42 275.08V275.1C466.157 269.46 469.395 261.756 469.41 253.71C469.476 237.391 456.318 224.099 440 224C435.243 223.987 430.556 225.141 426.35 227.36Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=i;
