"use strict";const e=require("vue"),o=e.defineComponent({__name:"TIFarm",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,C=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(s,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(C.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"513",height:"512",viewBox:"0 0 513 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M196.121 46.2844C164.446 54.6294 137.345 62.1677 135.897 63.0371C132.246 65.2299 34.8542 176.033 33.1231 179.963C27.7663 192.13 39.7187 205.664 50.4465 199.578C51.9938 198.701 56.5242 194.341 60.5131 189.891L67.7663 181.8V325.465C67.7663 464.559 67.819 469.247 69.4341 472.832C70.4126 475.005 72.5508 477.457 74.6089 478.767L78.116 481H256.725C430.358 481 435.424 480.947 438.602 479.111C440.521 478.003 442.685 475.581 443.842 473.25L445.813 469.277V325.538V181.8L453.066 189.891C457.055 194.341 461.586 198.701 463.133 199.578C473.535 205.479 485.083 193.151 480.935 180.576C479.598 176.527 380.404 64.3078 376.44 62.3609C372.331 60.3434 259.135 30.8542 256.059 31.0005C254.769 31.0623 227.796 37.9404 196.121 46.2844ZM311.299 75.3544L363.61 88.9543L391.524 120.412L419.438 151.869V301.497V451.125H384.271H349.104V367.437C349.104 285.527 349.066 283.664 347.334 279.818C346.194 277.288 344.327 275.173 342.093 273.882C338.69 271.915 337.071 271.878 256.79 271.878C176.508 271.878 174.89 271.915 171.487 273.882C169.253 275.173 167.385 277.288 166.246 279.818C164.514 283.664 164.476 285.527 164.476 367.437V451.125H129.309H94.1416V301.497V151.869L121.801 120.553L149.46 89.2351L201.147 75.6103C229.575 68.1158 254.218 61.9327 255.911 61.87C257.603 61.8063 282.528 67.8748 311.299 75.3544ZM224.05 144.474C220.338 146.694 217.227 152.569 217.227 157.358C217.227 162.3 220.336 168.036 224.237 170.291C227.508 172.18 229.377 172.296 256.79 172.296C284.203 172.296 286.072 172.18 289.342 170.291C293.243 168.036 296.353 162.3 296.353 157.358C296.353 152.417 293.243 146.68 289.342 144.426C286.065 142.532 284.246 142.423 256.605 142.465C229.204 142.507 227.127 142.634 224.05 144.474ZM224.05 204.224C220.338 206.443 217.227 212.319 217.227 217.107C217.227 222.049 220.336 227.786 224.237 230.04C227.508 231.929 229.377 232.045 256.79 232.045C284.203 232.045 286.072 231.929 289.342 230.04C293.243 227.786 296.353 222.049 296.353 217.107C296.353 212.166 293.243 206.429 289.342 204.175C286.065 202.282 284.246 202.172 256.605 202.214C229.204 202.256 227.127 202.383 224.05 204.224ZM280.306 328.388L256.79 355.024L233.273 328.388L209.758 301.752H256.79H303.821L280.306 328.388ZM214.368 403.075L190.851 429.71V376.439V323.167L214.368 349.803L237.883 376.439L214.368 403.075ZM322.728 376.686V429.71L299.215 403.077L275.7 376.444L298.989 350.052C311.796 335.536 322.378 323.66 322.502 323.66C322.626 323.66 322.728 347.521 322.728 376.686ZM280.528 424.736L303.813 451.125H256.79H209.766L233.052 424.736C245.859 410.222 256.541 398.347 256.79 398.347C257.039 398.347 267.721 410.222 280.528 424.736Z",fill:"currentColor"},null,-1)]),6))}});exports._sfc_main=o;
