"use strict";const C=require("vue"),o=C.defineComponent({__name:"TIDocumentEdit",props:{size:{type:String,default:"is-default",validator(e){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(e)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(e){const t=e,i=C.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(r,l)=>(C.openBlock(),C.createElementBlock("svg",{class:C.normalizeClass(i.value),style:C.normalizeStyle(e.color?`color: ${e.color} !important`:void 0),width:"513",height:"512",viewBox:"0 0 513 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l[0]||(l[0]=[C.createStaticVNode('<path d="M238.927 165.479C244.704 165.464 250.482 165.448 256.26 165.448C273.308 165.434 290.364 165.455 307.427 165.512C311.6 165.512 315.624 165.064 319.167 162.567C321.986 160.61 324.114 157.811 325.245 154.571C326.376 151.33 326.453 147.815 325.464 144.529C324.519 141.145 322.49 138.165 319.689 136.045C316.888 133.924 313.469 132.78 309.956 132.789C299.439 132.739 288.921 132.755 278.407 132.772H278.398C273.145 132.78 267.893 132.789 262.642 132.789H204.239C196.394 132.789 190.428 136.834 188.005 143.536C183.981 154.668 191.751 165.31 204.26 165.448C215.816 165.541 227.371 165.51 238.927 165.479Z" fill="currentColor"></path><path d="M135.648 203.639C138.774 203.62 141.903 203.601 145.026 203.658C155.016 203.882 162.21 210.67 162.338 219.903C162.466 228.889 155.635 236.072 145.848 236.425C136.061 236.777 125.943 236.787 115.963 236.425C106.23 236.072 99.2601 228.751 99.4735 219.881C99.687 210.617 106.849 203.872 116.839 203.669C120.064 203.611 123.273 203.627 126.479 203.643H126.488C127.979 203.651 129.469 203.658 130.959 203.658C132.519 203.658 134.081 203.649 135.643 203.639H135.648Z" fill="currentColor"></path><path d="M126.153 307.587C127.765 307.574 129.377 307.561 130.988 307.561C132.48 307.565 133.973 307.576 135.465 307.587C138.661 307.61 141.855 307.634 145.034 307.583C154.832 307.369 161.94 300.741 162.303 291.744C162.666 282.746 155.953 275.307 146.219 274.891C136.005 274.443 125.737 274.443 115.523 274.891C106.035 275.307 99.2891 282.672 99.5132 291.402C99.7374 300.496 106.792 307.273 116.483 307.561C119.707 307.64 122.93 307.613 126.153 307.587Z" fill="currentColor"></path><path d="M135.831 132.767L135.833 132.767C139.151 132.746 142.473 132.724 145.803 132.788C155.089 133.002 162.165 139.929 162.357 148.798C162.414 150.939 162.043 153.07 161.264 155.066C160.486 157.061 159.317 158.881 157.826 160.418C156.334 161.955 154.55 163.179 152.579 164.017C150.608 164.855 148.49 165.291 146.348 165.299C135.973 165.598 125.599 165.598 115.225 165.299C110.979 165.209 106.942 163.444 103.993 160.389C101.043 157.334 99.422 153.236 99.4821 148.99C99.5438 144.67 101.304 140.548 104.382 137.516C107.46 134.483 111.609 132.785 115.929 132.788C119.244 132.682 122.559 132.717 125.877 132.753L125.879 132.753C127.539 132.771 129.199 132.788 130.861 132.788C132.517 132.788 134.174 132.778 135.831 132.767Z" fill="currentColor"></path><path d="M125.844 378.537C127.447 378.526 129.049 378.515 130.657 378.515C132.268 378.515 133.877 378.525 135.482 378.535C138.864 378.556 142.234 378.577 145.599 378.505C155.141 378.27 162.271 371.13 162.313 362.207C162.356 353.284 155.514 346.176 146.101 345.92C136.011 345.664 125.921 345.664 115.832 345.92C106.418 346.101 99.4806 353.241 99.4806 362.111C99.4486 371.162 106.642 378.291 116.163 378.515C119.422 378.579 122.635 378.558 125.844 378.537Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M450.854 166.304L450.859 166.309C457.518 172.979 464.178 179.648 470.852 186.304C473.11 188.552 473.832 191.307 474.566 194.102L474.65 194.424C474.7 194.613 474.75 194.802 474.801 194.992V202.666C474.246 207.469 471.407 210.884 468.119 214.161C459.038 223.215 449.972 232.285 440.906 241.354C424.837 257.429 408.769 273.504 392.618 289.491C390.814 291.165 389.395 293.21 388.461 295.486C387.526 297.762 387.098 300.215 387.207 302.673C387.287 322.297 387.271 341.923 387.255 361.549V361.561C387.235 386.304 387.215 411.048 387.388 435.788C387.432 440.334 386.568 444.844 384.847 449.052C383.126 453.26 380.582 457.082 377.364 460.294C374.146 463.506 370.319 466.043 366.108 467.756C361.896 469.47 357.385 470.325 352.839 470.273H70.8127C59.4565 470.273 50.5872 465.63 43.4469 456.995C39.5192 452.235 38.5372 446.578 37.8008 440.783V70.4258C37.9481 66.4406 38.9161 62.5287 40.6442 58.9347C42.3723 55.3408 44.8234 52.142 47.8442 49.5385C53.3759 44.5467 60.4143 41.5421 67.8456 41H352.807C369.414 41 381.582 50.2109 386.363 66.0711C387.072 68.6818 387.392 71.3827 387.313 74.0867V121.465C387.313 124.03 387.313 125.292 387.873 125.632C388.416 125.962 389.483 125.428 391.582 124.378C398.723 120.856 405.949 121.635 411.659 127.26C424.787 140.198 437.818 153.249 450.85 166.3L450.852 166.302L450.854 166.304ZM128.864 436.482C202.266 436.418 275.662 436.45 349.05 436.578C352.86 436.588 353.725 435.638 353.672 431.945C353.493 422.654 353.523 413.362 353.553 404.07C353.564 400.554 353.576 397.038 353.576 393.522V327.776C350.604 330.71 347.663 333.607 344.747 336.478L344.731 336.494C336.875 344.23 329.203 351.787 321.61 359.411C318.169 363.009 313.774 365.552 308.941 366.743C302.678 368.283 296.428 369.972 290.178 371.661C286.287 372.713 282.395 373.765 278.501 374.78C276.464 375.312 274.427 375.843 272.39 376.375L272.381 376.377C258.09 380.107 243.796 383.839 229.469 387.407C226.9 388.143 224.169 388.082 221.636 387.232C219.103 386.382 216.888 384.783 215.284 382.646C212.594 379.018 209.702 378.078 205.678 378.495C204.401 378.599 203.117 378.571 201.847 378.409C197.773 378.028 193.992 376.126 191.258 373.082C188.524 370.037 187.038 366.074 187.096 361.983C187.063 357.891 188.608 353.943 191.411 350.961C194.214 347.98 198.059 346.193 202.145 345.974C205.837 345.721 209.539 345.682 213.235 345.856C215.775 345.963 216.938 345.248 217.589 342.601C220.208 331.878 223.022 321.18 226.032 310.507C226.864 307.593 225.776 307.54 223.534 307.54C216.992 307.636 210.449 307.689 203.906 307.54C196.265 307.369 190.394 303.249 188.057 296.749C184.012 285.414 191.921 274.933 204.792 274.741C215.743 274.57 226.704 274.645 237.655 274.741C238.703 274.8 239.752 274.623 240.723 274.224C241.694 273.825 242.564 273.214 243.269 272.436C246.523 269.079 249.843 265.784 253.161 262.492L253.162 262.49C254.992 260.674 256.821 258.859 258.638 257.035C264.988 250.654 271.318 244.263 277.753 237.766L277.756 237.763L278.437 237.076C277.131 236.398 275.906 236.476 274.739 236.55C274.38 236.573 274.026 236.595 273.677 236.595H207.108C204.966 236.633 202.825 236.498 200.705 236.19C197.793 235.823 195.047 234.629 192.794 232.748C190.541 230.868 188.875 228.38 187.993 225.581C184.001 214.321 192.166 203.733 204.974 203.733C239.533 203.648 274.096 203.648 308.663 203.733C309.767 203.794 310.872 203.61 311.896 203.193C312.92 202.776 313.839 202.136 314.587 201.321C326.704 189.111 338.889 176.958 351.142 164.861C351.972 164.123 352.626 163.21 353.058 162.187C353.49 161.164 353.689 160.058 353.64 158.949C353.512 132.216 353.512 105.476 353.64 78.7295C353.65 75.6556 353.053 74.695 349.744 74.695C257.998 74.7875 166.255 74.7875 74.5163 74.695C71.3784 74.695 70.4605 75.3568 70.4605 78.6334C70.5388 196.685 70.5388 314.737 70.4605 432.789C70.4605 435.788 71.2823 436.546 74.2495 436.546C87.7424 436.443 101.265 436.457 114.747 436.472H114.806C119.498 436.477 124.185 436.482 128.864 436.482ZM269.032 343.326C271.072 342.779 273.099 342.237 275.107 341.704C270.949 337.546 266.885 333.473 262.796 329.375C260.714 327.288 258.625 325.194 256.514 323.08C256 325.013 255.483 326.942 254.967 328.868C253.503 334.333 252.044 339.779 250.655 345.248C250.613 345.414 250.536 345.62 250.452 345.844L250.452 345.845C250.049 346.924 249.495 348.407 251.978 347.788C257.714 346.356 263.426 344.827 269.032 343.326ZM309.965 324.553C337.715 296.61 365.54 268.736 393.44 240.929C395.553 238.816 395.147 237.823 393.258 236.062C382.82 225.794 372.424 215.473 362.221 204.982C359.99 202.698 358.944 203.167 356.991 205.152C350.17 212.085 343.277 218.934 336.383 225.783L336.382 225.784C333.395 228.752 330.408 231.721 327.426 234.696L273.645 288.275C273.588 288.329 273.532 288.383 273.476 288.436C273.403 288.504 273.331 288.571 273.26 288.638C272.077 289.741 271.14 290.615 273.068 292.544C281.005 300.311 288.847 308.173 296.691 316.037L296.716 316.062C299.707 319.061 302.699 322.06 305.696 325.054C306.11 325.43 306.56 325.806 307.235 326.369L307.241 326.374C307.522 326.609 307.842 326.876 308.215 327.189C308.712 326.256 309.298 325.373 309.965 324.553ZM420.87 213.381C424.883 209.155 428.938 204.992 433.208 201.001C434.99 199.304 434.841 198.343 433.165 196.614C425.73 189.277 418.348 181.882 410.967 174.488C407.805 171.32 404.642 168.152 401.476 164.99C401.086 164.592 400.676 164.213 400.225 163.796L400.223 163.794L400.221 163.792L400.039 163.624L399.884 163.48C399.764 163.368 399.64 163.252 399.513 163.132C399.04 163.461 398.588 163.818 398.157 164.2C396.559 165.783 394.968 167.372 393.376 168.962L393.368 168.971C390.337 171.997 387.306 175.025 384.229 178.011C382.762 179.432 383.633 180.187 384.488 180.928C384.653 181.072 384.818 181.215 384.965 181.362C388.761 185.173 392.564 188.985 396.367 192.796C403.213 199.658 410.06 206.52 416.867 213.381C418.436 215.004 419.365 214.961 420.87 213.381Z" fill="currentColor"></path>',6)]),6))}});exports._sfc_main=o;
