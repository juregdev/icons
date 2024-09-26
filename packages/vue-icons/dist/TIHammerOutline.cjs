"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),i=e.defineComponent({__name:"TIHammerOutline",props:{size:{type:String,default:"is-default",validator(C){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(C)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(C){const L=C,t=e.computed(()=>["icon",L.size,{[L.type]:L.type&&!L.color,"is-clickable":L.clickable}]);return(o,l)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(t.value),style:e.normalizeStyle(C.color?`color: ${C.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l[0]||(l[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M258.602 32.9234L257.537 32.9189C231.653 32.9199 206.98 42.8716 193.165 55.2407L192.436 55.9024C192.27 56.0558 192.091 56.2223 191.911 56.3909C190.273 57.9325 188.621 59.6433 186.949 61.5024C184.911 63.7689 182.936 66.1502 181.076 68.5269L180.435 69.3506C179.626 70.3991 178.996 71.2433 178.582 71.8147C169.327 84.5931 182.197 101.636 197.021 96.2322L198.117 95.8422C200.314 95.0793 202.546 94.4187 204.805 93.8624L205.846 93.6143C211.908 92.3299 218.125 91.9391 224.3 92.4545L224.871 92.5052C236.727 93.6286 251.93 99.3531 259.746 105.296L260.054 105.533L259.99 105.482C271.763 114.923 277.362 127.508 278.289 146.606C278.696 155.092 269.312 170.441 251.851 190.164C248.647 193.781 246.736 198.112 246.097 202.58C234.663 200.64 222.787 204.164 214.229 212.451L188.054 238.218L174.915 251.189C139.237 286.485 66.7821 351.886 27.4036 385.052C20.573 390.768 16.4271 399.132 16.0128 408.08C15.5985 417.029 18.9536 425.741 25.2627 432.099L64.2451 471.511C70.6136 477.9 79.2995 481.316 88.2514 480.98C97.2033 480.643 105.608 476.584 111.438 469.783L113.61 467.236C149.639 425.083 212.613 356.043 246.537 322.521L254.076 315.084L284.989 284.418C293.852 275.405 297.454 262.77 295.144 250.791C299.57 250.04 303.824 248.042 307.349 244.793L307.75 244.415L309.296 242.923C323.416 229.353 338.324 216.709 345.819 212.095L346.317 211.792C351.94 208.405 356.802 206.754 360.213 206.321L360.42 206.297L360.777 206.267C364.564 205.988 368.351 206.81 371.682 208.632L371.803 208.7L371.813 208.752C371.84 208.957 371.776 209.317 371.531 209.615L371.472 209.679L369.671 211.381C369.593 211.455 369.515 211.53 369.438 211.606C365.331 215.648 363.019 221.168 363.019 226.93C363.019 232.692 365.331 238.212 369.438 242.254L403.708 276.215L404.033 276.528C408.076 280.35 413.394 282.453 418.912 282.433L418.762 282.43C424.461 282.505 429.963 280.33 434.07 276.374L489.682 221.376C489.807 221.252 489.931 221.125 490.053 220.997C498.013 212.583 498.013 199.417 490.053 191.003C489.995 190.943 489.937 190.882 489.879 190.822C489.836 190.779 489.794 190.736 489.751 190.693C489.732 190.673 489.712 190.654 489.693 190.635L455.383 156.635L455.071 156.33C451.081 152.504 445.696 150.365 440.108 150.408L440.017 150.41L439.915 150.409C435.482 150.432 431.181 151.819 427.586 154.353L427.293 154.564L427.51 151.405L427.531 151.062C428.082 141.908 427.182 135.323 422.485 128.529L422.199 128.122C422.156 128.062 422.113 128.002 422.069 127.943C422.048 127.915 422.028 127.887 422.007 127.859C414.509 117.781 406.287 108.263 397.407 99.3786L396.286 98.2753C389.122 91.2748 380.689 84.0179 369.568 75.98C352.3 63.4991 332.653 52.3447 310.582 43.3444C294.092 36.589 276.44 33.0497 258.602 32.9234ZM257.55 64.9199C271.585 64.9118 285.487 67.6449 298.475 72.9657C318.105 80.9705 335.543 90.8706 350.823 101.915L352.417 103.076C361.848 110.002 368.9 116.177 374.825 122.052L375.981 123.217C382.892 130.233 389.372 137.736 395.344 145.64L395.64 146.034L395.658 146.342C395.682 146.922 395.668 147.725 395.607 148.829L395.464 150.98L395.332 152.919C395.084 156.829 395.086 158.975 395.457 161.964C396.183 167.824 398.408 173.115 402.661 177.457L403.115 177.909C408.759 183.369 416.118 186.134 424.274 187.111L424.984 187.194C429.595 187.71 434.2 187.042 438.394 185.329L438.733 185.187L459.729 205.992L418.978 246.295L398.832 226.332L399.094 225.902C406.466 213.58 405.259 197.377 394.938 186.543L394.56 186.154L394.189 185.779C392.484 184.097 390.582 182.627 388.524 181.402L388.082 181.144C378.749 175.755 367.966 173.416 357.239 174.454L357.051 174.474C348.88 175.362 339.155 178.619 329.043 184.845L328.654 185.086C319.915 190.55 306.443 201.746 292.849 214.427L291.219 215.954L280.84 205.578L281.195 205.16C288.306 196.751 294.071 189.042 298.705 181.462C306.58 168.581 310.808 156.659 310.252 145.064C308.905 117.337 299.467 96.1213 280.011 80.5181L279.383 80.0284C271.826 74.2253 261.335 69.0664 250.332 65.4833L249.848 65.3269L250.421 65.2678C252.769 65.0382 255.144 64.9199 257.55 64.9199ZM241.923 234.482C242.517 234.749 243.096 235.153 243.586 235.652L243.765 235.831L261.99 253.807L262.198 254.027C262.585 254.451 262.929 254.911 263.224 255.403L263.285 255.507L263.301 255.541C264.259 257.628 263.884 260.088 262.348 261.795L262.162 261.99L232.731 291.187C229.605 294.278 226.637 297.209 224.07 299.734L221.911 301.876C186.084 337.556 122.512 407.382 87.1041 449.002C87.1134 448.991 87.1043 448.993 87.0876 448.997C87.0769 448.999 87.0632 449.002 87.0491 449.002C87.0128 449.004 86.9777 448.99 86.9521 448.964L47.9786 409.561L50.4196 407.499C90.0923 373.918 158.932 311.766 195.19 276.136L236.44 235.488C237.884 234.052 240.063 233.653 241.923 234.482Z",fill:"currentColor"},null,-1)]),6))}});exports.default=i;
