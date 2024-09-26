"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const C=require("vue"),o=C.defineComponent({__name:"TIBrasil",props:{size:{type:String,default:"is-default",validator(e){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(e)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(e){const t=e,i=C.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(s,l)=>(C.openBlock(),C.createElementBlock("svg",{class:C.normalizeClass(i.value),style:C.normalizeStyle(e.color?`color: ${e.color} !important`:void 0),width:"513",height:"512",viewBox:"0 0 513 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l[0]||(l[0]=[C.createElementVNode("path",{d:"M268.217 495.875C264.336 493.871 261.08 490.992 257.95 487.862C244.803 474.59 231.406 461.318 218.259 448.046C210.747 440.408 210.622 432.77 218.259 425.133C224.269 418.997 230.404 412.988 236.414 406.852C244.678 398.463 244.052 388.196 234.662 381.06C225.146 373.798 215.505 366.41 205.739 359.524C200.104 355.392 197.225 350.509 197.475 343.372C197.851 333.731 197.35 323.965 197.6 314.324C197.725 310.818 196.473 309.065 193.343 307.563C187.584 304.934 181.949 301.929 176.19 299.049C170.43 296.294 167.425 291.662 167.3 285.276C167.175 280.143 167.05 275.009 167.3 269.876C167.425 266.871 166.298 265.493 163.419 264.617C153.527 261.487 143.636 258.106 133.744 254.851C125.606 252.221 122.1 247.463 121.975 238.949C121.975 233.44 121.85 228.056 121.975 222.547C122.1 219.167 121.098 218.916 118.344 220.293C107.2 225.928 96.057 231.437 84.9136 237.071C75.8986 241.579 71.1407 240.827 64.0039 233.691C50.3563 220.043 36.7088 206.27 22.936 192.623C20.4318 190.244 18.8041 187.364 16.8008 184.484C16.8008 181.73 16.8008 178.85 16.8008 176.095C19.4301 171.463 23.4368 167.957 27.0678 164.326C37.5852 153.808 47.9774 143.291 58.62 132.899C61.1242 130.52 62.0006 128.141 61.8754 124.76C61.625 115.245 61.7502 105.729 61.7502 96.2131C62.1258 69.4187 88.9202 52.8913 112.334 65.6625C124.855 72.5489 138.127 64.16 137.375 50.5124C136.624 37.1152 139.379 34.2354 152.275 29.9784C164.796 25.8465 177.317 21.5895 189.837 17.3324C200.48 13.8266 207.366 17.2072 210.872 27.8499C214.128 37.616 217.508 47.257 220.513 57.1484C221.515 60.2785 222.892 61.2802 226.147 61.155C233.284 60.9046 240.546 61.0298 247.683 61.155C250.062 61.155 251.69 60.4038 253.443 58.7761C260.705 51.2636 268.217 43.8764 275.604 36.6144C283.993 28.2255 293.384 29.2271 299.895 39.1185C308.158 51.3888 316.422 63.7844 324.56 76.1799C325.938 78.3084 327.691 79.8109 330.069 80.9378C376.897 101.973 423.725 123.133 470.427 144.543C495.594 156.062 504.608 184.86 490.084 207.147C488.081 210.277 485.577 213.031 482.822 215.786C473.557 225.051 464.292 234.442 454.901 243.582C452.397 245.961 451.521 248.465 451.646 251.721C451.771 267.497 451.646 283.273 451.771 299.049C451.771 304.558 449.893 308.94 446.011 312.822C426.855 331.853 407.698 351.01 388.666 370.167C385.035 373.798 380.778 375.551 375.77 375.926C349.226 377.679 331.572 396.085 331.196 422.879C330.821 446.042 333.074 440.533 316.171 457.561C306.03 467.828 295.888 477.845 285.746 488.112C282.616 491.242 279.486 494.122 275.479 496C273.225 495.875 270.721 495.875 268.217 495.875ZM284.744 67.2902C278.985 73.1749 273.476 78.684 268.092 84.1932C264.711 87.699 260.83 89.3266 256.072 89.3266C241.673 89.2014 227.274 89.3266 213.001 89.3266C204.987 89.3266 200.73 86.0713 198.101 78.4336C194.971 69.4187 191.966 60.529 189.086 51.3888C188.335 48.8847 187.458 48.0082 184.829 49.0099C179.445 50.888 173.936 52.7661 168.427 54.519C166.298 55.1451 165.672 56.5223 165.297 58.6509C160.163 89.9527 129.112 105.729 100.815 91.4552C94.3041 88.1998 90.5479 90.3283 90.4227 97.5903C90.2975 109.109 90.1723 120.754 90.4227 132.273C90.5479 138.658 88.5446 143.667 83.9119 148.049C73.8953 157.69 64.2543 167.706 54.363 177.473C51.8588 179.852 51.2328 181.354 54.1126 183.983C61.625 190.995 68.887 198.382 76.0238 205.769C78.2776 208.148 79.9053 208.274 82.785 206.896C97.6847 199.259 112.835 191.746 127.86 184.234C140.38 177.973 150.647 184.234 150.773 198.257C150.773 207.898 150.898 217.664 150.773 227.305C150.773 229.934 151.524 231.061 154.153 231.938C164.545 235.193 174.812 238.699 185.205 242.205C192.467 244.709 195.972 249.592 195.972 257.355C195.972 262.989 196.098 268.624 195.972 274.258C195.847 276.637 196.724 277.889 198.852 278.89C204.862 281.77 210.872 284.9 216.882 287.905C223.142 290.91 226.147 295.793 226.147 302.805C226.022 313.573 226.273 324.341 226.022 335.109C225.897 338.364 227.024 340.242 229.653 341.995C237.917 348.005 246.055 353.89 253.943 360.275C274.227 376.928 276.356 405.099 258.952 424.632C256.197 427.762 253.192 430.892 250.062 433.647C247.307 436.026 247.808 437.528 250.187 439.907C256.698 446.167 263.209 452.553 269.344 459.064C271.723 461.568 273.1 461.067 275.229 458.939C282.365 451.551 289.502 444.039 297.14 437.153C301.898 432.896 303.901 428.388 303.275 422.128C302.899 418.497 303.651 414.615 304.026 410.984C307.407 379.557 336.33 350.885 367.882 348.005C370.386 347.755 372.264 346.878 374.017 345.125C389.668 329.349 405.319 313.698 421.095 298.047C423.224 296.044 423.975 293.915 423.975 291.036C423.85 275.134 423.975 259.233 423.85 243.206C423.85 237.572 425.603 233.065 429.734 229.058C440.878 218.165 451.896 207.022 462.914 196.003C472.806 186.112 470.677 175.469 457.906 169.71C410.453 148.174 362.874 126.513 315.295 104.978C310.036 102.599 306.155 99.3432 303.15 94.5854C297.14 85.4452 291.005 76.6807 284.744 67.2902Z",fill:"currentColor"},null,-1)]),6))}});exports.default=o;
