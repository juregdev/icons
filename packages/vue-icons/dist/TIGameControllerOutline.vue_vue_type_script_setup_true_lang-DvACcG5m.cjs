"use strict";const C=require("vue"),o=C.defineComponent({__name:"TIGameControllerOutline",props:{size:{type:String,default:"is-default",validator(e){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(e)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(e){const l=e,i=C.computed(()=>["icon",l.size,{[l.type]:l.type&&!l.color,"is-clickable":l.clickable}]);return(n,t)=>(C.openBlock(),C.createElementBlock("svg",{class:C.normalizeClass(i.value),style:C.normalizeStyle(e.color?`color: ${e.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t[0]||(t[0]=[C.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M129.556 83.9589C139.505 81.2792 149.772 79.947 160.081 79.9989L161.082 80.0056C166.128 80.0703 171.153 80.5862 176.432 81.5223C180.33 82.2134 184.263 83.1071 188.913 84.321L190.586 84.763C192.32 85.2266 196.807 86.4748 200.228 87.427L205.539 88.8935C223.683 93.7791 237.625 96 256 96C274.782 96 288.922 93.6803 307.661 88.5643C308.207 88.4153 309.71 87.9968 311.55 87.4846L311.55 87.4844L311.558 87.4824L311.562 87.4812C314.537 86.6528 318.388 85.5807 320.495 85.0067L322.983 84.3436C327.607 83.1349 331.516 82.2436 335.391 81.5513C341.111 80.5293 346.53 79.9987 351.923 79.9989C362.29 79.9488 372.61 81.3974 382.616 84.3164C408.394 91.9366 429.349 110.785 446.155 139.903C461.256 166.066 473.303 200.938 483.132 245.373L483.444 246.789C493.68 293.411 497.862 330.822 495.241 359.756C492.004 395.485 477.969 419.886 451.244 429.014C434.453 434.739 417.454 432.153 401.087 422.637C387.909 414.976 375.201 402.946 362.182 386.725L361.544 385.937C340.467 360.12 315.721 351.91 256 351.91C195.299 351.91 169.687 360.481 148.65 386.735L147.966 387.582C134.991 403.603 122.857 415.171 110.151 422.647C93.8301 432.249 76.782 434.751 59.6677 428.827C34.6795 420.161 20.9984 395.586 17.1599 359.997C13.8816 329.603 17.6533 290.307 27.7166 245.335C37.6826 200.817 49.72 166.032 64.7548 139.933C81.551 110.777 102.471 91.9306 128.27 84.3147L129.556 83.9589ZM160 111.999L159.92 111.998C152.209 111.96 144.532 112.993 137.109 115.069L137.25 115.03L136.303 115.32C102.823 125.923 77.8395 169.303 59.5032 249.847L58.944 252.324C40.3737 335.313 46.3071 390.324 70.1439 398.59C85.1472 403.784 101.727 394.029 123.694 366.705L124.542 365.656C152.599 331.27 187.234 319.91 256 319.91C325.088 319.91 358.784 331.366 387.138 366.695L387.782 367.494C409.002 393.701 426.394 403.678 440.909 398.729C466.991 389.821 471.444 340.665 451.888 252.286C433.599 169.61 407.953 125.175 373.599 115.02C366.61 112.981 359.361 111.963 352 111.999C348.525 111.999 344.967 112.347 341.02 113.052C338.041 113.585 334.867 114.31 330.932 115.341L329.591 115.696C328.034 116.113 323.775 117.298 320.401 118.238C319.366 118.526 318.415 118.791 317.649 119.003L314.843 119.772C294.161 125.348 277.57 128 256 128C233.998 128 217.167 125.24 195.897 119.435C195.265 119.262 193.602 118.799 191.627 118.25L191.625 118.249C188.941 117.502 185.682 116.595 183.652 116.039L181.641 115.496C177.378 114.369 174.001 113.59 170.845 113.031C166.949 112.34 163.433 111.999 160 111.999ZM292 244C303.046 244 312 235.046 312 224C312 212.954 303.046 204 292 204C280.954 204 272 212.954 272 224C272 235.046 280.954 244 292 244ZM317.518 275.642C320.61 283.122 327.906 288 336 288C347.026 288 355.973 279.076 356 268.05C356.02 259.956 351.16 252.648 343.688 249.537C336.217 246.425 327.606 248.124 321.876 253.84C316.145 259.556 314.425 268.162 317.518 275.642ZM336 200C347.046 200 356 191.046 356 180C356 168.954 347.046 160 336 160C324.954 160 316 168.954 316 180C316 191.046 324.954 200 336 200ZM400 224C400 235.046 391.046 244 380 244C368.954 244 360 235.046 360 224C360 212.954 368.954 204 380 204C391.046 204 400 212.954 400 224ZM160 160C168.731 160 175.829 166.994 175.997 175.685L176 176V208H208C216.837 208 224 215.163 224 224C224 232.731 217.006 239.829 208.315 239.997L208 240H176V272C176 280.837 168.837 288 160 288C151.269 288 144.171 281.006 144.003 272.315L144 272V240H112C103.164 240 96.0001 232.837 96.0001 224C96.0001 215.269 102.994 208.171 111.685 208.003L112 208H144V176C144 167.163 151.164 160 160 160Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=o;
