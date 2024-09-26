"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const C=require("vue"),o=C.defineComponent({__name:"TISacas",props:{size:{type:String,default:"is-default",validator(t){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(t)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(t){const l=t,r=C.computed(()=>["icon",l.size,{[l.type]:l.type&&!l.color,"is-clickable":l.clickable}]);return(a,e)=>(C.openBlock(),C.createElementBlock("svg",{class:C.normalizeClass(r.value),style:C.normalizeStyle(t.color?`color: ${t.color} !important`:void 0),width:"513",height:"512",viewBox:"0 0 513 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e[0]||(e[0]=[C.createStaticVNode('<path fill-rule="evenodd" clip-rule="evenodd" d="M243.315 31.604C221.306 33.9709 198.495 42.218 180.45 54.3311C176.582 56.9283 159.469 70.5017 142.421 84.4946L111.427 109.937L101.098 110.269C92.2362 110.555 90.068 110.928 85.8284 112.899C78.8948 116.121 74.1171 120.774 70.7761 127.562L67.9098 133.384V165.989L70.7998 171.859C74.0697 178.502 79.52 183.851 85.5382 186.326C87.6862 187.21 89.4455 188.46 89.4473 189.104C89.449 189.75 88.685 193.311 87.7486 197.018C72.9856 255.477 73.1315 323.277 88.1531 385.161C89.8341 392.087 91.2092 398.278 91.2092 398.917C91.2092 399.557 86.8966 403.3 81.6248 407.234C66.1901 418.752 61.4194 425.256 59.2908 437.682C56.0175 456.792 69.51 476.235 88.8186 480.231C92.0348 480.897 143.493 481.111 260.899 480.948L428.391 480.714L434.283 477.923C441.778 474.372 447.547 468.603 451.098 461.108C453.679 455.66 453.883 454.553 453.817 446.424C453.738 436.643 452.007 430.469 447.276 423.095C443.566 417.315 439.58 413.417 430.052 406.256C425.512 402.843 421.797 399.534 421.797 398.902C421.797 398.271 423.172 392.087 424.853 385.161C439.755 323.77 440.058 259.049 425.726 199.072C424.532 194.077 423.557 189.527 423.559 188.961C423.561 188.395 425.32 187.21 427.468 186.326C433.486 183.851 438.937 178.502 442.206 171.859L445.096 165.989V133.384L442.23 127.562C438.889 120.774 434.111 116.121 427.178 112.899C422.944 110.931 420.766 110.555 411.975 110.272L401.714 109.94L378.565 90.9841C331.508 52.4504 325.901 48.4755 308.665 41.4355C288.498 33.1981 263.48 29.435 243.315 31.604ZM272.329 58.6612C284.979 60.6052 292.807 63.067 304.546 68.7934C316.315 74.5339 319.774 76.9834 343.527 96.401L359.773 109.682L308.138 109.909C279.739 110.033 233.291 110.033 204.921 109.909L153.338 109.682L171.73 94.6558C181.846 86.3919 192.496 78.0288 195.397 76.0707C209.242 66.729 227.095 60.1638 244.634 57.9623C251.143 57.1455 264.687 57.4875 272.329 58.6612ZM417.778 137.879C419.793 139.895 419.793 159.477 417.778 161.493C416.532 162.739 400.688 162.875 256.503 162.875C112.318 162.875 96.474 162.739 95.2282 161.493C93.213 159.477 93.213 139.895 95.2282 137.879C96.474 136.633 112.318 136.498 256.503 136.498C400.688 136.498 416.532 136.633 417.778 137.879ZM397.942 196.505C407.161 231.544 411.329 271.548 409.486 307.287C408.001 336.08 404.624 357.985 397.455 385.318C392.358 404.751 392.221 405.766 394.125 409.99C395.363 412.734 398.752 415.737 410.893 424.848C424.639 435.164 426.214 436.618 427.195 439.891C428.572 444.49 426.921 449.797 423.271 452.499L420.789 454.337L257.745 454.564C80.6102 454.81 90.5349 455.073 87.2422 450.048C85.0687 446.731 84.6142 441.473 86.2311 438.347C87.0584 436.746 93.4636 431.31 102.413 424.613C117.512 413.312 120.224 410.34 120.224 405.084C120.224 403.899 118.692 397.483 116.82 390.826C102.523 339.982 99.3456 285.868 107.54 232.773C109.216 221.909 112.692 205.123 115.141 196.065L116.983 189.251H396.033L397.942 196.505ZM250.231 217.344C246.966 219.12 240.272 226.327 233.859 234.971C226.464 244.939 219.657 260.058 218.204 269.745C217.719 272.98 217.323 273.652 216.171 273.198C211.87 271.501 198.557 269.217 190.005 268.708C181.032 268.174 179.882 268.286 176.21 270.064C170.945 272.613 168.581 277.251 168.581 285.031C168.581 293.864 171.088 308.543 174.19 317.883L177.053 326.5L174.557 327.974C173.184 328.786 171.219 331.185 170.192 333.308C168.517 336.77 168.379 338.131 168.86 346.522C170.739 379.375 184.103 403.438 207.131 415.436C220.803 422.56 233.221 425.639 251.228 426.372C275.91 427.377 296.917 422.189 313.318 411.039C331.289 398.82 342.515 375.36 344.132 346.638C344.737 335.902 343.75 332.447 338.997 328.655L336.025 326.283L338.852 317.774C341.923 308.529 344.425 293.83 344.425 285.031C344.425 277.251 342.061 272.613 336.796 270.064C333.124 268.286 331.975 268.174 323.001 268.708C314.449 269.217 301.136 271.501 296.836 273.198C295.677 273.655 295.286 272.958 294.78 269.533C293.904 263.588 289.16 251.327 284.772 243.661C280.427 236.069 269.788 222.667 265.11 218.89C260.852 215.452 254.853 214.829 250.231 217.344ZM259.895 253.24C266.083 262.883 269.691 273.661 269.691 282.5C269.691 286.534 269.346 287.238 265.072 291.909C262.531 294.684 259.564 298.143 258.478 299.594L256.503 302.231L254.528 299.594C253.443 298.143 250.475 294.684 247.934 291.909C243.66 287.238 243.315 286.534 243.315 282.5C243.315 276.369 244.861 269.763 247.85 263.132C250.744 256.71 255.454 249.038 256.503 249.038C256.886 249.038 258.413 250.93 259.895 253.24ZM204.828 297.334C219.726 301.145 230.046 308.747 235.782 320.138C239.058 326.643 243.181 340.904 242.099 341.986C241.757 342.329 240.604 342.062 239.539 341.393C233.031 337.312 223.691 332.885 217.142 330.779C208.753 328.081 206.918 326.364 201.902 316.516C199.828 312.446 195.87 299.236 195.843 296.297C195.833 295.284 197.617 295.49 204.828 297.334ZM317.169 296.124C317.169 298.922 313.728 310.564 311.465 315.42C306.531 326.007 304.519 327.995 295.951 330.751C289.245 332.908 282.517 336.091 274.365 340.967C272.824 341.889 271.276 342.355 270.924 342.003C269.828 340.907 273.924 326.691 277.225 320.138C281.241 312.162 287.137 306.286 295.197 302.227C303.069 298.263 317.169 294.346 317.169 296.124ZM204.53 354.567C219.308 358.11 230.09 365.985 235.867 377.455C239.012 383.7 243.176 398.059 242.143 399.093C241.109 400.126 226.75 395.962 220.505 392.817C207.786 386.412 199.355 373.601 196.326 356.084C196.013 354.271 196.072 352.789 196.457 352.793C196.841 352.796 200.474 353.595 204.53 354.567ZM317.163 353.446C317.16 353.809 316.361 357.424 315.389 361.48C311.864 376.186 304.371 386.519 292.839 392.58C286.803 395.751 271.96 400.189 270.908 399.137C269.825 398.054 273.388 385.294 276.665 378.518C282.322 366.82 291.119 359.693 305.162 355.433C312.896 353.087 317.173 352.379 317.163 353.446Z" fill="currentColor"></path><path d="M299.801 98C299.801 101.314 297.114 104 293.801 104C290.487 104 287.801 101.314 287.801 98C287.801 94.6863 290.487 92 293.801 92C297.114 92 299.801 94.6863 299.801 98Z" fill="currentColor"></path><path d="M324.801 98C324.801 101.314 322.114 104 318.801 104C315.487 104 312.801 101.314 312.801 98C312.801 94.6863 315.487 92 318.801 92C322.114 92 324.801 94.6863 324.801 98Z" fill="currentColor"></path><path d="M224.801 98C224.801 101.314 222.114 104 218.801 104C215.487 104 212.801 101.314 212.801 98C212.801 94.6863 215.487 92 218.801 92C222.114 92 224.801 94.6863 224.801 98Z" fill="currentColor"></path><path d="M249.801 98C249.801 101.314 247.114 104 243.801 104C240.487 104 237.801 101.314 237.801 98C237.801 94.6863 240.487 92 243.801 92C247.114 92 249.801 94.6863 249.801 98Z" fill="currentColor"></path><path d="M274.801 98C274.801 101.314 272.114 104 268.801 104C265.487 104 262.801 101.314 262.801 98C262.801 94.6863 265.487 92 268.801 92C272.114 92 274.801 94.6863 274.801 98Z" fill="currentColor"></path><path d="M199.801 98C199.801 101.314 197.114 104 193.801 104C190.487 104 187.801 101.314 187.801 98C187.801 94.6863 190.487 92 193.801 92C197.114 92 199.801 94.6863 199.801 98Z" fill="currentColor"></path><path d="M304.801 79C304.801 82.3137 302.114 85 298.801 85C295.487 85 292.801 82.3137 292.801 79C292.801 75.6863 295.487 73 298.801 73C302.114 73 304.801 75.6863 304.801 79Z" fill="currentColor"></path><path d="M241.801 79C241.801 82.3137 239.114 85 235.801 85C232.487 85 229.801 82.3137 229.801 79C229.801 75.6863 232.487 73 235.801 73C239.114 73 241.801 75.6863 241.801 79Z" fill="currentColor"></path><path d="M262.801 79C262.801 82.3137 260.114 85 256.801 85C253.487 85 250.801 82.3137 250.801 79C250.801 75.6863 253.487 73 256.801 73C260.114 73 262.801 75.6863 262.801 79Z" fill="currentColor"></path><path d="M283.801 79C283.801 82.3137 281.114 85 277.801 85C274.487 85 271.801 82.3137 271.801 79C271.801 75.6863 274.487 73 277.801 73C281.114 73 283.801 75.6863 283.801 79Z" fill="currentColor"></path><path d="M220.801 79C220.801 82.3137 218.114 85 214.801 85C211.487 85 208.801 82.3137 208.801 79C208.801 75.6863 211.487 73 214.801 73C218.114 73 220.801 75.6863 220.801 79Z" fill="currentColor"></path>',12)]),6))}});exports.default=o;
