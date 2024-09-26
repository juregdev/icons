"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const C=require("vue"),i=C.defineComponent({__name:"TICogFill",props:{size:{type:String,default:"is-default",validator(e){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(e)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(e){const L=e,t=C.computed(()=>["icon",L.size,{[L.type]:L.type&&!L.color,"is-clickable":L.clickable}]);return(o,l)=>(C.openBlock(),C.createElementBlock("svg",{class:C.normalizeClass(t.value),style:C.normalizeStyle(e.color?`color: ${e.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l[0]||(l[0]=[C.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M464 249.93C463.721 244.777 459.766 240.577 454.64 239.99L429 235.84C426.631 235.451 424.8 233.551 424.5 231.17C424.01 228.02 423.5 224.75 422.8 221.65C422.338 219.338 423.394 216.988 425.43 215.8L448.21 203.15C452.892 200.763 455.043 195.246 453.21 190.32L449.26 179.42C447.466 174.476 442.241 171.672 437.13 172.91L411.58 177.91C409.237 178.329 406.889 177.195 405.76 175.1C404.27 172.31 402.65 169.47 400.96 166.68C399.702 164.642 399.878 162.03 401.4 160.18L418.4 140.54C421.972 136.704 422.139 130.812 418.79 126.78L411.37 117.87C408.026 113.819 402.16 112.955 397.79 115.87L375.42 129.3C373.384 130.52 370.789 130.264 369.03 128.67C366.56 126.5 364.03 124.41 361.66 122.48C359.793 121.007 359.097 118.494 359.94 116.27L369.2 91.87C371.287 87.0508 369.435 81.4321 364.89 78.8L354.8 72.91C350.251 70.2867 344.456 71.5059 341.35 75.74L325 96.28C323.787 98.1215 321.438 98.843 319.4 98C318.79 97.75 313.63 95.64 309.62 94.3C307.362 93.5642 305.846 91.4444 305.88 89.07L306.27 63C306.558 57.7335 302.887 53.0734 297.7 52.12L286.25 50.12C281.09 49.2286 276.067 52.2937 274.5 57.29L266 82.1C265.207 84.3608 263.034 85.8409 260.64 85.75H250.89C248.516 85.7987 246.379 84.319 245.59 82.08L237.13 57.41C235.59 52.3757 230.549 49.2704 225.36 50.16L213.89 52.16C208.737 53.1055 205.079 57.7172 205.33 62.95L205.73 89.11C205.746 91.5212 204.176 93.6565 201.87 94.36C199.58 95.25 194.61 97.15 192.35 97.99C190.35 98.71 188.17 97.92 186.41 95.89L170.15 75.89C167.06 71.6294 161.256 70.3831 156.69 73L146.63 78.83C142.033 81.4685 140.169 87.1512 142.31 92L151.56 116.34C152.387 118.566 151.703 121.072 149.86 122.57C147.43 124.57 144.94 126.57 142.46 128.79C140.712 130.371 138.138 130.631 136.11 129.43L114 115.74C109.607 112.883 103.775 113.74 100.39 117.74L92.9999 126.63C89.601 130.638 89.7604 136.561 93.3699 140.38L110.45 160C112.006 161.815 112.189 164.436 110.9 166.45C109.19 169.17 107.56 172.03 106.08 174.89C104.944 177.001 102.578 178.139 100.22 177.71L74.7099 172.78C69.5965 171.546 64.3716 174.348 62.5699 179.29L58.5699 190.17C56.74 195.101 58.8881 200.622 63.5699 203.02L86.3499 215.67C88.4546 216.832 89.5356 219.246 88.9999 221.59L88.7599 222.86C88.2399 225.65 87.7599 228.29 87.2999 231.1C86.9737 233.449 85.1739 235.321 82.8399 235.74L57.1499 239.89C51.9527 240.528 48.0363 244.924 47.9999 250.16V261.74C47.9696 267.003 51.9269 271.436 57.1599 272L82.8399 276.14C85.2101 276.525 87.0426 278.427 87.3399 280.81C87.8299 283.97 88.3399 287.23 89.0399 290.33C89.5023 292.642 88.4458 294.992 86.4099 296.18L63.6399 308.85C58.9575 311.237 56.8073 316.754 58.6399 321.68L62.6399 332.58C64.4375 337.521 69.6591 340.323 74.7699 339.09L100.32 334.14C102.664 333.715 105.015 334.85 106.14 336.95C107.64 339.75 109.25 342.58 110.94 345.37C112.205 347.406 112.027 350.023 110.5 351.87L93.4999 371.5C89.8847 375.307 89.6704 381.211 92.9999 385.27L100.41 394.18C103.751 398.235 109.621 399.1 113.99 396.18L136.36 382.75C138.396 381.53 140.991 381.786 142.75 383.38C145.23 385.55 147.75 387.64 150.12 389.57C151.985 391.044 152.684 393.554 151.85 395.78L142.58 420.18C140.493 424.999 142.345 430.618 146.89 433.25L157 439.09C161.547 441.715 167.341 440.501 170.45 436.27L187 415.92C188.4 414.19 190.6 413.42 192.23 414.08C195.71 415.52 198.04 416.33 202.17 417.71C204.428 418.448 205.946 420.565 205.92 422.94L205.52 448.99C205.241 454.254 208.907 458.908 214.09 459.87L225.54 461.87C230.702 462.771 235.73 459.702 237.29 454.7L245.79 429.93C246.58 427.667 248.755 426.186 251.15 426.28H260.9C263.274 426.228 265.413 427.709 266.2 429.95L274.67 454.62C276.017 459.016 280.072 462.021 284.67 462.03C285.267 462.031 285.863 461.978 286.45 461.87L297.92 459.87C303.073 458.924 306.731 454.313 306.48 449.08L306.08 422.92C306.064 420.555 307.581 418.452 309.83 417.72C313.67 416.43 316.37 415.39 318.74 414.47L319.34 414.24C322.44 413.17 323.94 414.47 324.81 415.55L341.56 436.18C344.668 440.405 350.455 441.619 355 439L365.07 433.17C369.63 430.536 371.485 424.897 369.38 420.07L360.14 395.73C359.304 393.506 359.985 390.997 361.83 389.5C364.26 387.5 366.75 385.5 369.23 383.28C370.989 381.694 373.578 381.442 375.61 382.66L398 396.06C402.392 398.922 408.227 398.064 411.61 394.06L419.01 385.16C422.409 381.152 422.249 375.229 418.64 371.41L401.58 351.74C400.024 349.925 399.841 347.304 401.13 345.29C402.84 342.58 404.47 339.72 405.95 336.85C407.09 334.744 409.453 333.607 411.81 334.03L437.29 339C442.403 340.234 447.628 337.432 449.43 332.49L453.38 321.61C455.209 316.681 453.06 311.164 448.38 308.77L425.58 296.1C423.506 294.927 422.445 292.534 422.97 290.21L423.21 288.94C423.73 286.15 424.21 283.51 424.67 280.7C424.996 278.351 426.796 276.479 429.13 276.06L454.82 271.92C460.031 271.291 463.962 266.888 464 261.64V249.93ZM181.55 343.93C179.022 348.326 174.538 351.241 169.495 351.768C164.451 352.294 159.462 350.368 156.08 346.59C109.399 294.975 109.581 216.339 156.5 164.94C159.899 161.163 164.907 159.25 169.959 159.799C175.011 160.347 179.491 163.291 182 167.71L227.65 248.06C230.439 252.936 230.439 258.924 227.65 263.8L181.55 343.93ZM256 391.11C246.484 391.112 236.994 390.107 227.69 388.11C222.774 387.012 218.676 383.637 216.655 379.022C214.634 374.408 214.933 369.108 217.46 364.75L263.46 284.75C266.276 279.843 271.502 276.818 277.16 276.82H369.3C374.334 276.812 379.07 279.203 382.053 283.258C385.035 287.313 385.907 292.547 384.4 297.35C366.91 351.67 316 391.11 256 391.11ZM263.51 227.21L218 147.07C215.499 142.706 215.223 137.411 217.259 132.811C219.295 128.211 223.398 124.854 228.31 123.77C237.415 121.851 246.695 120.886 256 120.89C316 120.89 366.91 160.33 384.37 214.68C385.877 219.483 385.005 224.716 382.023 228.772C379.04 232.827 374.304 235.218 369.27 235.21H277.27C271.576 235.221 266.317 232.164 263.51 227.21Z",fill:"currentColor"},null,-1)]),6))}});exports.default=i;
