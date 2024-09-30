"use strict";const e=require("vue"),o=e.defineComponent({__name:"TIGroupOutline",props:{size:{type:String,default:"is-default",validator(C){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(C)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(C){const l=C,i=e.computed(()=>["icon",l.size,{[l.type]:l.type&&!l.color,"is-clickable":l.clickable}]);return(r,t)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(i.value),style:e.normalizeStyle(C.color?`color: ${C.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t[0]||(t[0]=[e.createStaticVNode('<path fill-rule="evenodd" clip-rule="evenodd" d="M347.54 198.25V181.538C347.54 146.861 328.157 116.626 299.657 101.097C309.778 90.351 316.001 75.893 316.001 60C316.001 26.916 289.085 0 256.001 0C222.917 0 196.001 26.916 196.001 60C196.001 75.893 202.224 90.351 212.346 101.097C183.846 116.626 164.463 146.861 164.463 181.538V198.25C164.463 206.534 171.179 213.25 179.463 213.25H332.54C340.824 213.25 347.54 206.534 347.54 198.25ZM226.001 60C226.001 43.458 239.459 30 256.001 30C272.543 30 286.001 43.458 286.001 60C286.001 76.542 272.543 90 256.001 90C239.459 90 226.001 76.542 226.001 60ZM194.462 183.25C194.462 145.391 223.692 120 256.001 120C288.136 120 317.54 145.19 317.54 183.25H194.462Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M168.077 512H15C6.716 512 0 505.284 0 497V480.288C0 445.611 19.383 415.376 47.884 399.847C37.762 389.101 31.539 374.643 31.539 358.75C31.539 325.666 58.455 298.75 91.539 298.75C124.623 298.75 151.539 325.666 151.539 358.75C151.539 374.643 145.316 389.101 135.194 399.847C163.694 415.376 183.077 445.611 183.077 480.288V497C183.077 505.284 176.361 512 168.077 512ZM91.539 328.75C74.997 328.75 61.539 342.208 61.539 358.75C61.539 375.292 74.997 388.75 91.539 388.75C108.081 388.75 121.539 375.292 121.539 358.75C121.539 342.208 108.081 328.75 91.539 328.75ZM153.077 482C153.077 443.943 123.676 418.75 91.539 418.75C59.23 418.75 30 444.141 30 482H153.077Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M480.462 358.75C480.462 374.643 474.239 389.101 464.117 399.847C492.617 415.376 512 445.611 512 480.288V497C512 505.284 505.284 512 497 512H343.924C335.64 512 328.924 505.284 328.924 497V480.288C328.924 445.61 348.307 415.376 376.807 399.847C366.685 389.101 360.462 374.643 360.462 358.75C360.462 325.666 387.378 298.75 420.462 298.75C453.546 298.75 480.462 325.666 480.462 358.75ZM420.461 328.75C403.919 328.75 390.461 342.208 390.461 358.75C390.461 375.292 403.919 388.75 420.461 388.75C437.003 388.75 450.461 375.292 450.461 358.75C450.461 342.208 437.003 328.75 420.461 328.75ZM358.923 482H482C482 443.94 452.597 418.75 420.461 418.75C388.153 418.75 358.923 444.141 358.923 482Z" fill="currentColor"></path><path d="M255.181 388.75C276.337 388.75 297.002 385.487 316.599 379.049C324.47 376.462 332.946 380.748 335.531 388.618C338.116 396.488 333.832 404.965 325.961 407.55C303.337 414.981 279.523 418.749 255.18 418.749C231.692 418.749 208.657 415.23 186.717 408.291C178.819 405.793 174.441 397.364 176.939 389.466C179.436 381.568 187.863 377.193 195.764 379.688C214.775 385.701 234.766 388.75 255.181 388.75Z" fill="currentColor"></path><path d="M117.73 124.31C101.164 140.279 87.0806 158.843 75.8716 179.488C64.2555 200.883 56.2035 223.609 51.9395 247.036C50.2685 256.217 57.3135 264.724 66.7145 264.724C73.8225 264.724 80.1366 259.649 81.4546 252.408C85.1486 232.115 92.1405 212.397 102.236 193.803C111.979 175.86 124.196 159.746 138.55 145.91C144.514 140.161 144.689 130.665 138.94 124.7C133.19 118.736 123.695 118.561 117.73 124.31Z" fill="currentColor"></path><path d="M373.06 124.7C378.809 118.736 388.305 118.56 394.27 124.31C410.836 140.278 424.919 158.843 436.128 179.488C447.744 200.883 455.796 223.609 460.06 247.036C461.543 255.185 456.138 262.996 447.988 264.479C439.827 265.963 432.027 260.549 430.545 252.408C426.851 232.116 419.86 212.398 409.764 193.803C400.022 175.859 387.804 159.746 373.45 145.91C367.485 140.161 367.311 130.665 373.06 124.7Z" fill="currentColor"></path>',6)]),6))}});exports._sfc_main=o;
