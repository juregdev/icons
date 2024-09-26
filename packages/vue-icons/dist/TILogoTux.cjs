"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const C=require("vue"),o=C.defineComponent({__name:"TILogoTux",props:{size:{type:String,default:"is-default",validator(e){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(e)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(e){const l=e,i=C.computed(()=>["icon",l.size,{[l.type]:l.type&&!l.color,"is-clickable":l.clickable}]);return(r,t)=>(C.openBlock(),C.createElementBlock("svg",{class:C.normalizeClass(i.value),style:C.normalizeStyle(e.color?`color: ${e.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t[0]||(t[0]=[C.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M443.66 405.05C442.2 404.26 440.81 403.51 439.66 402.85C433.19 399.02 426.66 392.33 427.81 385.02C430.23 369.08 430.7 361.55 427.32 356.23C425.501 353.389 422.81 351.213 419.65 350.03V349.97C421.06 347.41 421.91 344.31 422.48 339.85C423.92 328.85 417.48 295.85 408.78 269.15C400.7 244.47 379.54 219.15 364.08 200.59L360.47 196.25C336.59 167.32 336.13 158.06 333.92 113.58C333.6 107.11 333.23 99.78 332.75 91.58C329.87 41.43 304 16 256 16C230.8 16 211.38 23.15 198.28 37.26C187.79 48.55 182 64 182 80.78C182 110.3 184 133.78 184.15 135.07C185.55 170.77 185.15 176.29 175.84 192.62C173.61 196.55 167.46 203.49 160.95 210.83C152.47 220.4 142.86 231.24 137.59 240.05C133.82 246.36 131.71 252.68 129.48 259.38C126.08 269.59 122.22 281.16 111.33 295.95C98.76 313.02 95.81 325.56 100.33 343.4C95.39 349.85 95.5 357.77 95.58 363.63C95.7207 365.665 95.62 367.709 95.28 369.72C92.99 377.31 82.86 379.12 73.28 379.9C71.7 380.02 70.18 380.11 68.73 380.19C61.47 380.58 55.2 380.93 51.6 386.49C48.13 391.85 50.48 400.29 53.74 411.97C54.46 414.55 55.2 417.22 55.93 420.03C57.76 427.03 55.77 430.51 53.25 434.87C50.81 439.08 48.04 443.87 48.04 452.42C48.04 467.09 68.04 470.42 91.09 474.36C98.45 475.6 106.09 476.89 113.72 478.6C125.344 481.254 136.74 484.825 147.8 489.28C157.52 493.01 165.2 495.96 174.23 495.96C190.41 495.96 202.48 486.19 214.15 476.75L216.3 475C221.83 470.51 237.8 471 250.64 471.36C254.1 471.46 257.37 471.56 260.29 471.56H266.51C279.99 471.48 298.45 471.38 308.74 474.06C312.49 475.06 314.94 477.78 318.03 481.25C323.9 487.81 331.2 496 351.42 496C370.81 496 380.97 487.29 392.74 477.2C399.9 471.07 407.3 464.72 417.81 459.34C421.73 457.34 425.43 455.47 428.89 453.73C451.53 442.35 464 436.08 464 425.91C464 416 451.76 409.41 443.66 405.05ZM211.11 88.38C216.698 88.6006 221.61 92.1461 223.58 97.38C225.53 102.93 225.39 107.8 223.79 110.32C223.79 110.32 223.57 109.32 223.43 108.88C222.43 105.314 220.133 102.25 216.99 100.29C214.343 98.5803 211.105 98.0478 208.05 98.82C203.79 99.95 199.64 103.82 199.14 117.61C193.98 107.14 196.83 99.61 200.06 94.61C202.37 90.88 207.53 88.28 211.11 88.38ZM193.61 463.38C192 479.24 175.2 479 170.09 478.59C160.28 477.77 148.43 473.9 136.96 470.16C132.44 468.69 127.77 467.16 123.23 465.82C110.03 461.93 93.11 459.08 79.51 456.82C76.29 456.27 73.24 455.76 70.46 455.27C67.68 454.78 65.85 454 65.26 452.97C64.26 451.32 65.64 447.72 67.19 443.56C69.27 438 72.11 430.34 72 421C72 417.09 70.53 412.7 69.16 408.44C67.54 403.44 65.88 398.27 67.23 395.82C68.46 393.59 73.98 393.33 78.83 393.33H81.09C84.64 393.33 87.71 393.39 89.84 392.8C96.35 390.99 104.7 385.88 107.65 378.92C108.55 376.75 109.02 371.98 109.65 364.92C110.02 360.8 110.39 356.55 110.87 354.34C111.11 353.194 111.899 352.24 112.98 351.79C114.63 351.02 119.76 349.88 131.61 355.87C142.79 361.52 154.49 381.71 165.81 401.24C169.37 407.38 172.73 413.18 176.11 418.6C190.15 441.14 194.94 450.2 193.61 463.4V463.38ZM322.45 431.82C321.249 435.577 319.727 439.224 317.9 442.72C317.775 443.004 317.448 443.138 317.159 443.026C316.87 442.914 316.721 442.594 316.82 442.3C318.532 436.314 319.245 430.088 318.93 423.87C318.68 419.14 318.53 416.28 316.27 415.36C314.01 414.44 312.01 416.19 306.82 420.9C305.72 421.9 304.46 423.04 303.04 424.3C292.24 433.77 276.16 444.98 247.43 447.67C230.59 449.26 219.84 443.04 216.51 439.53C216.115 439.109 215.568 438.864 214.992 438.849C214.415 438.834 213.856 439.051 213.44 439.45C212.85 440.055 212.652 440.942 212.93 441.74C215.05 448.58 214.13 454 212.44 457.93C211.49 460.13 210.59 459.98 210.44 457.59C210.19 452.95 209.44 447.71 207.44 443.4C204.33 436.46 200.44 429.06 198.55 425.52V425.47C201.79 423.98 207.41 420.64 209.92 414.59C212.43 408.54 214.4 396.59 200.1 382.85C193.82 376.8 178 365.69 164.04 355.85C153.14 348.2 141.87 340.29 140.39 338.34C135.9 332.45 134.02 329.04 133.45 318.69C133.52 316.39 133.58 314.1 133.64 311.8L133.91 309.31C133.948 309.022 134.194 308.806 134.485 308.806C134.776 308.806 135.022 309.022 135.06 309.31C135.47 312.598 136.139 315.848 137.06 319.03C138.14 322.76 139.46 326.61 140.68 328.21C143.87 332.43 148.24 335.6 152.35 336.7C154.035 337.288 155.9 337.02 157.35 335.98C160.28 333.65 160 328.38 159.54 319.64C159.07 310.64 158.43 298.3 161.39 285.09C167.01 260.09 172.3 252.58 179 243.09C179.86 241.87 180.75 240.62 181.65 239.3C183.09 237.22 184.65 235.2 186.32 233.07C193.79 223.46 202.25 212.58 200.24 192.12C199.73 186.93 199.48 183.29 199.38 180.73C199.316 180.248 199.608 179.79 200.072 179.644C200.536 179.499 201.037 179.708 201.26 180.14L201.75 180.91L202.96 182.91C207.82 190.91 216.6 205.48 228.06 205.48C228.851 205.479 229.641 205.408 230.42 205.27C253.81 201.34 282.32 175.02 282.59 174.76C285.71 171.76 285.43 168.62 284.23 166.85C282.785 164.783 280.062 164.057 277.78 165.13C274.49 166.53 270.64 168.28 266.56 170.13C252.74 176.4 229.56 186.88 224.31 184.47C221.916 183.147 219.777 181.41 217.99 179.34C217.534 179.025 217.42 178.401 217.735 177.945C218.05 177.489 218.674 177.375 219.13 177.69C224.72 179.98 228.68 179.14 233.33 177.61L234.33 177.27C243.7 174.18 248.53 172.5 265.09 165.19C270.324 162.735 275.765 160.751 281.35 159.26C285.35 158.26 287.77 157.63 289.06 154.92C290.293 152.648 290.098 149.867 288.56 147.79C287.03 145.92 284.49 145.22 281.56 145.89C278.34 146.64 276.86 148.89 275.15 150.38C272.75 152.43 270.15 154.54 257.96 159.03C230.96 169.03 223.38 169.64 212.75 162.46C202.91 155.77 197.6 149.23 197.6 146.46C197.6 144.33 203.05 140.76 206.31 138.62C207.64 137.75 208.9 136.93 209.93 136.16C214.27 132.94 222.93 124.77 223.31 124.43C228.71 119.02 241.22 122.25 248.31 127.01C248.802 127.378 249.425 127.526 250.03 127.42C250.6 127.31 251.101 126.973 251.418 126.487C251.734 126 251.84 125.406 251.71 124.84C247.51 107.38 251.58 97.5 255.71 92.29C259.961 86.973 266.383 83.8573 273.19 83.81C286 83.81 294.95 93.81 294.95 108.23C294.95 119.23 292.13 125.02 289.47 128.53C289.168 128.921 288.713 129.165 288.22 129.199C287.727 129.234 287.243 129.056 286.89 128.71C286.309 128.122 286.209 127.21 286.65 126.51C288.864 122.714 290.02 118.394 290 114C290.025 109.542 288.253 105.261 285.085 102.125C281.916 98.9883 277.618 97.26 273.16 97.33C269.22 97.33 259.68 98.83 256.39 112.77C255.586 116.406 255.471 120.161 256.05 123.84L256.13 124.55C257.03 131.93 271.43 137.06 283.36 140.06C294.72 142.91 296.36 146.28 292.2 159.69C288.04 173.1 295.31 185.92 297.9 189.26C301.062 193.141 303.845 197.317 306.21 201.73C308.933 207.002 311.15 212.52 312.83 218.21C315 225 316.88 230.86 323.46 239.43C334.53 253.83 341.12 288.07 338.46 317.43C338.25 319.84 337.93 321.72 337.69 323.1C337.26 325.63 336.97 327.3 338.35 328.48C339.73 329.66 341.51 329.18 345.61 327.85L349.04 326.76C353.175 325.58 357.375 324.645 361.62 323.96C362.306 323.853 362.899 323.421 363.21 322.8C366.64 315.89 367.06 307.58 367.21 300.33C367.21 299.457 367.23 298.527 367.27 297.54C367.46 289.77 367.72 278.61 364.32 265.54C364.143 265.007 364.432 264.432 364.965 264.255C365.498 264.078 366.073 264.367 366.25 264.9C369.674 273.057 371.917 281.66 372.91 290.45C375.46 313.03 371.01 322.54 370.97 322.62C370.761 323.04 370.746 323.531 370.928 323.963C371.111 324.396 371.473 324.727 371.92 324.87C374.588 325.827 376.976 327.432 378.87 329.54C380.33 331.2 379.8 331.94 377.73 331.16C373.646 329.635 369.32 328.859 364.96 328.87C354.56 328.87 346.87 333.82 343.45 338.06C340.26 342 339.75 345.73 339.62 349.33L339.56 349.38C332.08 348.63 326.62 350.59 322.09 355.59L322.01 355.68C315.75 363.43 318.01 380.31 320.72 394.16C322 400.61 326.31 419.68 322.45 431.84V431.82ZM418.55 441.89C402.84 448.6 393.12 456.4 384.55 463.28C378.9 467.81 373.55 472.09 367.27 475.42C357.15 480.76 342.36 481.95 334 467.72C331.63 463.72 333.29 457.86 335.58 449.77C338.63 439.02 342.81 424.31 339.29 405.12C338.35 400 337.52 395.61 336.8 391.81C334 377 332.9 371.43 334 367C334.63 364.55 337.43 364 339.87 364C340.75 364.008 341.628 364.071 342.5 364.19C343.831 368.726 346.231 372.875 349.5 376.29C355.2 382.15 363.13 385.12 373.06 385.14C375.16 385.31 399 386.69 409.6 362.74C411.06 362.92 413.25 363.44 413.9 365.04C415.18 368.23 413.63 373.95 412.38 378.54C411.48 381.85 410.7 384.7 410.75 386.91C411.06 402.91 421.75 409.69 436.58 419.07C438.37 420.2 440.24 421.38 442.13 422.61C444.02 423.84 445 425 445 426C444.48 430.79 425 439.16 418.55 441.91V441.89Z",fill:"currentColor"},null,-1)]),6))}});exports.default=o;
