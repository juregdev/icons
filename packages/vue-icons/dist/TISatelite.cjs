"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const C=require("vue"),i=C.defineComponent({__name:"TISatelite",props:{size:{type:String,default:"is-default",validator(e){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(e)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(e){const t=e,o=C.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(r,l)=>(C.openBlock(),C.createElementBlock("svg",{class:C.normalizeClass(o.value),style:C.normalizeStyle(e.color?`color: ${e.color} !important`:void 0),width:"513",height:"512",viewBox:"0 0 513 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l[0]||(l[0]=[C.createElementVNode("path",{d:"M46.8008 413.5C58.8242 394.288 72.8002 376.411 85.8512 357.918C101.882 335.11 118.222 312.507 134.459 289.802C141.344 280.144 148.743 279.528 157.17 288.055C164.26 295.144 171.454 302.028 178.236 309.322C180.6 311.788 181.833 311.377 183.888 309.219C189.335 303.466 194.987 297.815 200.742 292.37C202.9 290.315 203.003 289.082 200.844 286.925C188.204 274.493 175.77 261.754 163.027 249.322C150.387 236.993 145.66 222.815 151.929 205.863C152.545 204.219 151.929 203.397 150.901 202.37C140.008 191.48 129.012 180.589 118.119 169.596C116.783 168.26 115.858 168.055 114.522 169.493C112.467 171.754 110.309 173.808 108.151 175.863C102.602 181.103 95.1 181.308 90.1673 176.377C85.2346 171.445 85.3374 163.945 90.7839 158.397C107.534 141.548 124.388 124.699 141.241 107.952C147.407 101.788 153.573 95.5206 159.842 89.4589C164.055 85.3493 169.912 84.8356 174.64 87.5069C179.264 90.1781 181.628 95.4178 180.497 100.863C179.675 104.87 176.695 107.438 174.023 110.11C168.576 115.555 168.576 115.555 173.92 121C183.477 130.555 193.137 140.11 202.591 149.767C204.03 151.308 205.263 151.925 207.524 151.103C222.939 145.555 236.504 148.945 248.116 160.349C261.373 173.397 274.526 186.548 287.475 199.801C289.941 202.267 291.277 202.164 293.538 199.699C299.087 193.843 304.842 188.192 310.597 182.541C312.344 180.897 312.549 179.973 310.7 178.123C302.992 170.726 295.593 163.123 287.989 155.521C280.795 148.226 281.412 140.315 289.633 134.459C329.3 106 368.864 77.7466 408.531 49.4931C415.725 44.3562 421.274 44.8699 427.543 51.137C438.23 61.7192 448.815 72.4041 459.399 82.9863C465.565 89.2534 466.079 94.8014 460.941 101.993C432.681 141.548 404.421 181.206 376.058 220.76C370.097 229.082 362.287 229.596 354.888 222.301C347.284 214.801 339.782 207.301 332.28 199.699C330.739 198.055 329.814 197.849 328.169 199.596C322.209 205.76 316.043 211.925 309.877 217.884C308.13 219.527 308.336 220.555 309.98 222.096C315.118 227.13 320.565 231.959 323.648 238.843C325.806 243.569 327.45 248.295 327.245 253.432C327.142 257.028 328.683 257.13 331.355 256.719C342.145 255.178 352.833 255.795 363.52 258.466C378.935 262.267 392.089 269.87 403.393 280.863C408.737 286 408.531 293.5 402.982 299.048C391.678 310.555 380.168 321.856 368.761 333.26C365.987 336.137 360.849 338.706 361.054 342.096C361.26 345.076 365.987 347.85 368.864 350.624C372.461 354.117 375.955 357.713 375.544 363.158C375.133 367.987 372.769 371.685 368.248 373.74C363.726 375.795 359.307 375.178 355.608 371.993C351.908 368.808 348.414 365.315 345.126 361.617C343.276 359.665 342.248 359.767 340.398 361.617C327.45 374.767 314.296 387.713 301.245 400.76C293.332 408.671 286.755 408.363 279.356 400.041C261.681 380.11 254.282 356.891 257.673 330.486C258.084 327.507 257.468 326.48 254.282 326.377C241.95 325.966 232.599 319.699 224.789 310.76C222.117 307.678 220.267 307.267 217.287 310.555C212.046 316.308 206.394 321.754 200.742 327.096C198.995 328.843 198.892 329.767 200.742 331.514C208.346 338.911 215.848 346.514 223.453 354.117C230.646 361.411 230.03 369.219 221.706 375.178C182.141 403.432 142.577 431.788 102.91 460.041C95.7166 465.178 90.1673 464.562 83.8987 458.398C73.314 447.918 62.832 437.336 52.2473 426.856C49.9865 424.596 48.445 422.028 46.9035 419.254C46.8008 417.302 46.8008 415.452 46.8008 413.5ZM173.817 220.041C173.715 223.329 174.948 226.308 177.414 228.671C191.185 242.541 205.058 256.308 218.828 270.178C220.267 271.617 221.192 271.925 222.733 270.281C238.765 254.048 254.899 238.021 271.135 221.891C272.677 220.349 272.677 219.425 271.135 217.986C257.262 204.219 243.492 190.349 229.618 176.582C224.378 171.343 217.287 171.343 212.046 176.582C200.433 187.986 189.027 199.493 177.517 211C175.051 213.466 173.715 216.343 173.817 220.041ZM281.309 336.343C281.206 352.987 284.084 363.363 289.633 373.021C290.66 374.87 291.38 375.795 293.435 373.74C320.462 346.617 347.489 319.596 374.619 292.576C376.469 290.726 376.058 290.007 374.002 288.877C353.758 277.781 333.205 276.959 313.063 288.055C292.202 299.562 282.028 318.055 281.309 336.343ZM354.991 118.021C354.272 118.432 353.758 118.843 353.141 119.253C341.015 127.884 328.889 136.616 316.763 145.144C314.605 146.685 314.913 147.507 316.557 149.151C331.458 163.945 346.359 178.843 361.157 193.843C363.109 195.795 363.931 195.384 365.37 193.329C373.694 181.514 382.121 169.699 390.65 157.986C391.986 156.137 392.192 155.007 390.445 153.26C379.141 142.164 367.939 130.863 356.738 119.664C356.224 119.151 355.608 118.637 354.991 118.021ZM196.22 362.233C195.809 361.719 195.295 361.103 194.781 360.589C179.778 345.589 164.774 330.692 149.873 315.589C148.435 314.151 147.51 313.74 146.174 315.692C137.439 327.918 128.704 340.144 119.969 352.37C118.941 353.808 119.147 354.528 120.38 355.76C131.89 367.062 143.296 378.466 154.601 389.973C155.936 391.308 156.861 391.308 158.403 390.178C170.529 381.445 182.655 372.815 194.781 364.185C195.295 363.774 196.117 363.363 196.22 362.233ZM406.99 134.87C407.606 134.048 408.223 133.432 408.634 132.815C417.266 120.692 425.898 108.569 434.633 96.548C435.764 95.0069 435.661 94.0822 434.325 92.7466C428.776 87.3014 423.226 81.7534 417.78 76.2055C416.547 74.9726 415.622 74.5617 413.978 75.6918C401.749 84.5274 389.52 93.2603 377.291 101.89C375.544 103.123 375.749 103.945 377.085 105.281C386.437 114.527 395.686 123.774 404.934 133.123C405.654 133.637 406.27 134.151 406.99 134.87ZM135.281 406.411C135.281 405.178 134.459 404.767 133.945 404.254C124.696 395.007 115.345 385.761 106.199 376.411C104.143 374.254 103.424 375.692 102.294 377.233C93.8668 389.048 85.5429 400.863 77.0135 412.576C75.6776 414.425 75.3693 415.555 77.219 417.302C82.6655 422.439 87.9065 427.781 93.1475 433.226C94.6889 434.767 95.7166 434.973 97.5664 433.637C109.487 425.007 121.51 416.48 133.534 407.85C134.253 407.336 134.767 406.822 135.281 406.411ZM255.515 301.925C258.495 301.822 261.373 301 263.633 298.843C275.657 286.925 287.68 275.007 299.498 262.884C304.123 258.158 303.814 251.582 299.395 246.548C297.648 244.493 295.388 242.747 293.743 240.692C291.483 237.918 289.838 237.712 287.166 240.486C273.499 254.459 259.626 268.123 245.855 281.993C243.389 284.459 238.867 286.719 239.278 289.699C239.587 292.473 243.697 294.836 246.164 297.404C248.63 300.076 251.713 301.719 255.515 301.925ZM168.576 184.801C169.09 184.493 169.399 184.288 169.707 183.98C174.742 178.945 179.778 173.911 184.813 168.98C186.252 167.644 185.122 166.822 184.299 166C173.92 155.521 163.438 145.144 153.059 134.664C151.62 133.226 150.798 133.226 149.462 134.664C144.941 139.39 140.214 144.014 135.589 148.534C134.253 149.767 133.945 150.589 135.486 152.13C145.968 162.507 156.348 172.884 166.829 183.363C167.241 183.877 167.96 184.288 168.576 184.801Z",fill:"currentColor"},null,-1),C.createElementVNode("path",{d:"M377.496 466C377.394 465.898 377.394 465.692 377.291 465.589C370.2 461.788 367.323 457.062 368.659 451.103C370.097 444.836 374.722 441.548 382.737 441.24C415.314 440.11 441.21 414.219 442.032 381.445C442.341 370.35 451.795 365.624 458.475 368.192C463.51 370.144 466.901 374.459 466.799 380.11C465.668 414.528 449.945 440.11 419.63 456.548C410.895 461.274 401.44 463.945 391.575 465.178C390.65 465.281 389.725 465.692 388.903 465.897C385.101 466 381.299 466 377.496 466Z",fill:"currentColor"},null,-1),C.createElementVNode("path",{d:"M381.093 416.788C374.413 416.891 368.864 411.856 368.453 405.281C368.042 398.706 372.769 393.055 379.449 392.233C389.109 391 391.986 388.124 393.116 378.671C393.939 371.993 399.488 367.165 406.065 367.576C412.642 367.987 417.677 373.432 417.677 380.11C417.574 399.939 401.029 416.582 381.093 416.788Z",fill:"currentColor"},null,-1)]),6))}});exports.default=i;
