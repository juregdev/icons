"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const C=require("vue"),i=C.defineComponent({__name:"TIKeyOutline",props:{size:{type:String,default:"is-default",validator(L){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(L)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(L){const e=L,t=C.computed(()=>["icon",e.size,{[e.type]:e.type&&!e.color,"is-clickable":e.clickable}]);return(o,l)=>(C.openBlock(),C.createElementBlock("svg",{class:C.normalizeClass(t.value),style:C.normalizeStyle(L.color?`color: ${L.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l[0]||(l[0]=[C.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M340 64C281.285 64 235.033 108.946 234.114 165.451L234.1 167.167L234.106 171.019C234.173 184.839 234.845 191.888 237.088 198.654L237.314 199.319C239.135 204.56 238.108 210.361 234.622 214.655L234.071 215.308L193.797 262.574L158.421 304.006L138.394 327.404C96.2418 376.591 71.1251 405.469 65.7941 410.599C65.66 410.728 65.5237 410.855 65.3852 410.979C64.5027 411.771 64 412.896 64 414.07C64 416.805 66.2245 421.239 69.1623 424.31L69.7249 424.892C73.7452 429.004 81.2906 435.878 87.6085 440.931L88.0685 441.297C89.7209 442.608 91.2676 443.778 92.6713 444.782L93.251 445.194L94.7689 443.674C95.6629 442.775 96.5218 441.905 97.3533 441.057L99.1814 439.183L103.321 434.864C105.121 432.976 106.866 431.141 107.248 430.745L107.966 430.002C108.511 429.44 109.044 428.897 109.578 428.358L110.452 427.483L110.463 427.367C110.521 426.576 110.48 425.428 110.311 423.906L110.27 423.548L110.162 422.712C110.034 421.774 109.873 420.764 109.626 419.322L108.935 415.298C108.484 412.6 108.327 411.365 108.169 409.41C107.77 404.485 108.136 400.203 109.994 395.867C115.12 383.906 122.318 378.552 133.904 376.113C137.37 375.383 140.743 375.402 144.553 375.887L145.618 376.032C147.077 376.242 148.234 376.449 150.225 376.857L155.267 377.914L156.418 378.143C158.611 378.564 160.098 378.759 161.093 378.771L161.478 378.771C163.339 378.742 164.265 378.234 167.926 374.856L169.551 373.345C171.097 371.895 171.971 370.922 172.414 370.245L172.512 370.088L172.344 369.615C172.162 369.124 171.935 368.578 171.511 367.61L170.035 364.283C169.027 361.986 168.393 360.392 167.761 358.478C164.127 347.478 165.429 336.832 174.305 328.139C180.212 322.353 187.664 319.927 195.497 320.615C200.252 321.033 204.317 322.349 209.577 324.689L211.047 325.354L214.732 327.059C216.075 327.671 216.88 328.013 217.586 328.273L217.818 328.356L218.074 328.444L218.196 328.386C218.335 328.317 218.481 328.24 218.635 328.155L218.872 328.02L219.119 327.873C220.54 327.01 222.154 325.722 223.721 324.185C224.581 323.341 225.389 322.459 226.102 321.598L226.45 321.169L226.658 320.902L223.662 314.77C223.247 313.911 222.884 313.145 222.529 312.376C218.42 303.462 216.608 296.849 218.186 289.239L218.319 288.634C220.504 279.267 231.575 267.88 241.901 265.635C245.771 264.794 248.998 265.084 253.634 266.063L255.163 266.398C256.659 266.737 258.079 267.093 260.102 267.635L268.371 269.893C269.707 270.25 270.692 270.501 271.582 270.711L272.533 270.927L272.885 270.718L273.426 270.38L273.715 270.194C274.456 269.713 275.254 269.164 276.33 268.397L279.712 265.971L280.141 265.666C281.511 264.7 282.679 263.912 283.843 263.188C288.298 260.414 293.831 260.001 298.648 262.083C311.96 267.837 323.874 270.17 340 270.17C399.783 270.17 448 223.807 448 166.97C448 110.187 399.838 64 340 64ZM204.596 370.325L204.586 370.76C204.286 381.357 199.903 388.689 191.605 396.532L191.173 396.938L189.877 398.14C185.677 402.011 182.633 404.384 178.795 406.458C173.296 409.43 167.383 410.849 160.697 410.769C157.357 410.726 154.138 410.302 150.086 409.511L148.566 409.206L143.632 408.172C142.304 407.903 141.589 407.779 140.791 407.668L140.4 407.617L140.138 407.588L140.215 408.196C140.292 408.756 140.402 409.453 140.572 410.463L141.325 414.851C141.575 416.343 141.756 417.528 141.92 418.771L141.964 419.111C142.613 424.178 142.711 428.583 141.99 433.008C140.987 439.159 138.414 444.708 134.016 449.182L133.623 449.574C132.901 450.284 132.201 450.986 131.475 451.729L129.605 453.667C128.012 455.339 124.269 459.275 122.588 461.012L120.281 463.381C117.283 466.439 113.969 469.746 110.029 473.597L108.69 474.903C103.671 479.729 97.547 480.744 91.6119 479.593C88.5552 479 85.6472 477.838 82.5658 476.198C78.4723 474.019 73.904 470.868 68.8197 466.872L68.1815 466.368C60.3114 460.124 50.9715 451.588 46.0377 446.43C37.8914 437.913 32 426.17 32 414.07C32 404.156 36.0752 394.694 43.2359 387.881L43.7616 387.389L44.1168 387.032C50.2624 380.761 81.1606 345.085 128.06 290.271L153.194 260.861L204.481 200.697L204.395 200.299C202.656 192.228 202.15 183.545 202.104 170.586L202.1 168.944L202.1 167.17C202.1 92.0707 263.132 32 340 32C417.219 32 480 92.2073 480 166.97C480 241.767 417.182 302.17 340 302.17C323.424 302.17 309.593 300.068 295.629 295.231L294.738 294.918L294.415 294.802L294.086 295.034C293.298 295.589 292.588 296.077 291.885 296.544L291.146 297.03C286.7 299.918 282.741 301.853 278.299 302.805C274.429 303.646 271.202 303.356 266.566 302.377L265.037 302.042C263.541 301.703 262.121 301.347 260.098 300.805L251.829 298.547L251.333 298.416L251.591 298.981C251.953 299.767 252.352 300.601 252.874 301.668L254.904 305.802L255.143 306.297C256.003 308.09 256.681 309.597 257.273 311.071C259.437 316.468 260.393 320.936 259.249 326.305C256.291 340.184 237.539 358.577 221.352 360.462C216.723 361.002 212.363 360.299 207.776 358.743L207.033 358.486C205.586 357.975 204.339 357.47 202.617 356.701L201.425 356.162L201.496 356.329C201.886 357.254 202.171 357.986 202.477 358.837L202.706 359.487C203.978 363.142 204.679 366.599 204.596 370.325ZM368 96C394.51 96 416 117.49 416 144C416 170.51 394.51 192 368 192C341.49 192 320 170.51 320 144C320 117.49 341.49 96 368 96ZM368 128C359.163 128 352 135.163 352 144C352 152.837 359.163 160 368 160C376.837 160 384 152.837 384 144C384 135.163 376.837 128 368 128Z",fill:"currentColor"},null,-1)]),6))}});exports.default=i;
