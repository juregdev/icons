"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const C=require("vue"),i=C.defineComponent({__name:"TICogOutline",props:{size:{type:String,default:"is-default",validator(e){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(e)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(e){const l=e,L=C.computed(()=>["icon",l.size,{[l.type]:l.type&&!l.color,"is-clickable":l.clickable}]);return(o,t)=>(C.openBlock(),C.createElementBlock("svg",{class:C.normalizeClass(L.value),style:C.normalizeStyle(e.color?`color: ${e.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t[0]||(t[0]=[C.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M456.7 242.27L430.62 238.07C427.164 237.488 424.488 234.724 424.02 231.25C423.52 228.05 423.02 224.84 422.32 221.74C421.626 218.326 423.198 214.852 426.22 213.12L449.31 200.3C452.927 198.451 454.599 194.197 453.21 190.38L449.21 179.38C447.824 175.548 443.762 173.388 439.81 174.38L413.92 179.38C410.464 180.049 406.977 178.381 405.33 175.27C403.83 172.47 402.23 169.667 400.53 166.86C398.689 163.867 398.971 160.032 401.23 157.34L418.52 137.4C421.296 134.447 421.424 129.885 418.82 126.78L411.33 117.78C408.744 114.643 404.196 113.989 400.83 116.27L378.14 129.9C375.147 131.674 371.352 131.31 368.75 129C366.35 126.89 363.85 124.79 361.35 122.78C358.621 120.612 357.61 116.927 358.85 113.67L368.25 88.92C369.906 85.2025 368.507 80.8342 365 78.77L354.8 72.86C351.277 70.8593 346.814 71.8086 344.41 75.07L327.77 95.91C325.857 98.6099 322.341 99.6441 319.27 98.41C319.27 98.41 313.67 96.11 309.47 94.7C306.165 93.5984 303.952 90.484 304 87L304.4 60.55C304.644 56.4788 301.812 52.8657 297.8 52.13L286.21 50.13C282.196 49.4347 278.292 51.841 277.11 55.74L268.51 80.79C267.378 84.1041 264.221 86.2963 260.72 86.2H250.92C247.426 86.2738 244.281 84.09 243.13 80.79L234.53 55.74C233.348 51.841 229.445 49.4347 225.43 50.13L213.84 52.13C209.829 52.8657 206.996 56.4788 207.24 60.55L207.64 87C207.69 90.493 205.467 93.6143 202.15 94.71C199.85 95.61 194.85 97.52 192.45 98.42C189.65 99.42 186.35 98.62 183.65 95.51L167.14 75.17C164.724 71.9225 160.264 70.9909 156.75 73L146.55 78.91C143.033 80.9356 141.61 85.2876 143.25 89L152.65 113.75C153.87 117.008 152.862 120.681 150.15 122.86C147.65 124.86 145.15 126.97 142.75 129.08C140.149 131.39 136.353 131.754 133.36 129.98L111 116.14C107.622 113.917 103.115 114.565 100.5 117.65L93.0101 126.65C90.4058 129.755 90.5346 134.317 93.3101 137.27L110.6 157.21C112.909 159.881 113.193 163.75 111.3 166.73C109.6 169.397 108 172.2 106.5 175.14C104.827 178.224 101.361 179.882 97.9101 179.25L72.0201 174.25C68.0716 173.287 64.0285 175.438 62.6201 179.25L58.6201 190.25C57.2312 194.067 58.9036 198.321 62.5201 200.17L85.5801 213C88.637 214.701 90.2209 218.201 89.4801 221.62C88.8801 224.82 88.2801 227.93 87.7801 231.13C87.2877 234.592 84.6241 237.344 81.1801 237.95L55.1001 242.15C51.0866 242.645 48.0547 246.027 48.0001 250.07V261.79C47.9498 265.874 51.0353 269.315 55.1001 269.71L81.1801 273.91C84.6366 274.492 87.3118 277.256 87.7801 280.73C88.2801 283.93 88.7801 287.14 89.4801 290.24C90.1742 293.654 88.6023 297.128 85.5801 298.86L62.4901 311.7C58.8736 313.549 57.2012 317.803 58.5901 321.62L62.5901 332.62C63.9763 336.452 68.038 338.612 71.9901 337.62L97.8801 332.62C101.336 331.951 104.823 333.619 106.47 336.73C107.97 339.53 109.57 342.333 111.27 345.14C113.111 348.133 112.829 351.968 110.57 354.66L93.2801 374.62C90.5046 377.573 90.3758 382.135 92.9801 385.24L100.47 394.24C103.057 397.377 107.605 398.031 110.97 395.75L133.66 382.12C136.653 380.346 140.449 380.71 143.05 383.02C145.45 385.13 147.95 387.23 150.45 389.24C153.179 391.408 154.19 395.093 152.95 398.35L143.55 423.1C141.921 426.822 143.34 431.174 146.85 433.22L157.05 439.13C160.573 441.131 165.036 440.181 167.44 436.92L184.23 416.28C186.33 413.68 189.73 412.58 192.43 413.68C195.83 415.08 198.13 415.88 202.33 417.29C205.647 418.386 207.87 421.507 207.82 425L207.42 451.45C207.176 455.521 210.008 459.134 214.02 459.87L225.61 461.87C229.625 462.565 233.528 460.159 234.71 456.26L243.31 431.26C244.443 427.946 247.599 425.754 251.1 425.85H260.9C264.394 425.776 267.539 427.96 268.69 431.26L277.29 456.26C278.472 460.159 282.376 462.565 286.39 461.87L297.98 459.87C301.992 459.134 304.824 455.521 304.58 451.45L304.18 425C304.13 421.507 306.353 418.386 309.67 417.29C313.87 415.88 316.67 414.78 319.27 413.78C321.87 412.78 325.07 412.78 327.57 415.88L344.57 436.82C346.987 440.093 351.475 441.031 355 439L365.2 433.09C368.737 431.066 370.164 426.69 368.5 422.97L359.1 398.22C357.882 394.959 358.889 391.284 361.6 389.1C364.1 387.1 366.6 385 369 382.89C371.602 380.58 375.397 380.216 378.39 381.99L401 395.66C404.379 397.883 408.885 397.235 411.5 394.15L418.99 385.15C421.594 382.045 421.466 377.483 418.69 374.53L401.4 354.59C399.092 351.919 398.807 348.05 400.7 345.07C402.4 342.37 404 339.567 405.5 336.66C407.173 333.576 410.639 331.918 414.09 332.55L439.98 337.55C443.929 338.513 447.972 336.362 449.38 332.55L453.38 321.55C454.769 317.733 453.097 313.479 449.48 311.63L426.39 298.81C423.333 297.109 421.749 293.609 422.49 290.19C423.09 286.99 423.69 283.88 424.19 280.68C424.683 277.218 427.346 274.466 430.79 273.86L456.87 269.66C460.884 269.166 463.915 265.783 463.97 261.74V250C463.745 246 460.679 242.74 456.7 242.27ZM256 112C321.703 111.972 379.071 156.474 395.38 220.12C396.575 224.901 395.5 229.966 392.466 233.85C389.433 237.733 384.778 240.002 379.85 240H274.61C268.856 240.001 263.545 236.912 260.7 231.91L208.6 140.2C206.141 135.879 205.831 130.66 207.761 126.078C209.69 121.495 213.641 118.071 218.45 116.81C230.707 113.594 243.328 111.978 256 112ZM112 256C111.964 217.045 127.712 179.737 155.65 152.59C159.189 149.086 164.158 147.43 169.092 148.11C174.025 148.791 178.361 151.729 180.82 156.06L233.06 248C235.868 252.917 235.868 258.953 233.06 263.87L180.39 355.57C177.912 359.888 173.565 362.807 168.629 363.465C163.694 364.124 158.734 362.447 155.21 358.93C127.547 331.83 111.971 294.726 112 256ZM256 400C243.108 400.033 230.268 398.369 217.81 395.05C213.002 393.772 209.062 390.33 207.149 385.737C205.237 381.144 205.57 375.923 208.05 371.61L260.63 280.06C263.492 275.102 268.785 272.052 274.51 272.06H379.9C384.827 272.061 389.478 274.331 392.51 278.214C395.541 282.097 396.615 287.161 395.42 291.94C379.078 355.573 321.698 400.046 256 400Z",fill:"currentColor"},null,-1)]),6))}});exports.default=i;
