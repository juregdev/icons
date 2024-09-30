"use strict";const C=require("vue"),o=C.defineComponent({__name:"TIBirthdayCakeOutline",props:{size:{type:String,default:"is-default",validator(e){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(e)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(e){const t=e,i=C.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(s,l)=>(C.openBlock(),C.createElementBlock("svg",{class:C.normalizeClass(i.value),style:C.normalizeStyle(e.color?`color: ${e.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l[0]||(l[0]=[C.createElementVNode("path",{d:"M497 477.767H471.054V362.806C479.006 356.242 483.535 346.934 483.535 336.997V298.324C483.535 277.254 464.762 260.111 441.686 260.111H422.104V166.1C422.104 150.384 409.321 137.598 393.608 137.598H391.83V127.311C409.554 121.097 422.304 104.205 422.304 84.38C422.304 77.724 420.369 66.482 405.282 38.395C397.505 23.917 389.841 11.742 389.517 11.23C386.77 6.87503 381.98 4.23303 376.83 4.23303C371.68 4.23303 366.891 6.87503 364.143 11.23C363.82 11.742 356.156 23.918 348.378 38.395C333.29 66.482 331.356 77.724 331.356 84.38C331.356 104.204 344.106 121.097 361.83 127.311V137.598H360.052C344.339 137.598 331.556 150.384 331.556 166.1V260.111H301.275V166.1C301.275 150.384 288.491 137.598 272.778 137.598H271V127.311C288.723 121.097 301.473 104.205 301.473 84.38C301.473 77.724 299.538 66.482 284.451 38.395C276.675 23.917 269.011 11.742 268.688 11.231C265.94 6.87503 261.15 4.23303 256 4.23303C250.85 4.23303 246.061 6.87503 243.313 11.23C242.99 11.742 235.326 23.918 227.548 38.395C212.46 66.482 210.526 77.724 210.526 84.38C210.526 104.204 223.276 121.097 241 127.311V137.598H239.222C223.509 137.598 210.725 150.384 210.725 166.1V260.111H180.444V166.1C180.444 150.384 167.661 137.598 151.948 137.598H150.17V127.311C167.894 121.097 180.644 104.205 180.644 84.38C180.644 77.724 178.709 66.482 163.622 38.395C155.845 23.917 148.181 11.742 147.857 11.23C145.11 6.87503 140.32 4.23303 135.17 4.23303C130.02 4.23303 125.231 6.87503 122.483 11.23C122.16 11.742 114.496 23.918 106.718 38.395C91.63 66.482 89.695 77.724 89.695 84.38C89.695 104.204 102.445 121.097 120.169 127.311V137.598H118.391C102.678 137.598 89.895 150.384 89.895 166.1V260.111H70.313C47.238 260.111 28.464 277.254 28.464 298.324V336.997C28.464 346.934 32.993 356.242 40.945 362.806V477.767H15C6.716 477.767 0 484.483 0 492.767C0 501.051 6.716 507.767 15 507.767H497C505.284 507.767 512 501.051 512 492.767C512 484.483 505.284 477.767 497 477.767ZM361.356 84.391C361.449 79.6 367.891 65.135 376.833 48.813C385.77 65.126 392.208 79.585 392.304 84.388C392.3 92.923 385.36 99.866 376.83 99.866C368.298 99.866 361.356 92.919 361.356 84.391ZM361.556 167.598H392.105V260.025H361.556V167.598ZM240.526 84.391C240.619 79.6 247.061 65.136 256.002 48.814C264.939 65.126 271.377 79.585 271.473 84.388C271.469 92.923 264.53 99.866 256 99.866C247.468 99.866 240.526 92.919 240.526 84.391ZM240.725 167.598H271.275V260.025H240.725V167.598ZM119.695 84.391C119.788 79.6 126.23 65.135 135.172 48.813C144.109 65.126 150.547 79.585 150.643 84.388C150.639 92.923 143.699 99.866 135.169 99.866C126.637 99.866 119.695 92.919 119.695 84.391ZM119.895 167.598H150.444V260.025H119.895V167.598ZM441.054 477.767H70.945V371.47C73.291 371.2 75.63 370.727 77.933 370.045L115.799 358.836C137.682 352.36 161.782 352.36 183.663 358.836L213.551 367.684C227.238 371.736 241.618 373.761 255.998 373.761C270.379 373.761 284.76 371.736 298.446 367.684L328.334 358.836C350.214 352.359 374.316 352.359 396.198 358.836L434.063 370.045C436.366 370.727 438.706 371.2 441.052 371.47V477.767H441.054ZM453.535 336.997C453.535 338.246 452.525 339.263 451.679 339.894C449.787 341.306 446.404 342.411 442.581 341.28L404.715 330.071C377.342 321.967 347.193 321.967 319.819 330.071L289.931 338.919C268.051 345.395 243.949 345.397 222.067 338.919L192.179 330.071C178.491 326.018 164.114 323.993 149.731 323.993C135.352 323.993 120.968 326.019 107.284 330.071L69.417 341.28C65.595 342.412 62.211 341.305 60.32 339.894C59.473 339.262 58.464 338.246 58.464 336.997V298.324C58.464 294.439 63.33 290.111 70.313 290.111H441.687C448.669 290.111 453.536 294.439 453.536 298.324V336.997H453.535Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=o;
