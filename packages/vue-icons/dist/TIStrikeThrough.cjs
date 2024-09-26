"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),r=e.defineComponent({__name:"TIStrikeThrough",props:{size:{type:String,default:"is-default",validator(t){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(t)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(t){const l=t,o=e.computed(()=>["icon",l.size,{[l.type]:l.type&&!l.color,"is-clickable":l.clickable}]);return(s,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(t.color?`color: ${t.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{d:"M64 260.329H448V292.329H354.863C359.916 302.936 362.467 314.562 362.318 326.311C362.617 337.457 360.224 348.512 355.344 358.537C350.463 368.563 343.238 377.264 334.28 383.904C312.702 399.087 286.672 406.629 260.32 405.333C241.066 405.463 221.999 401.545 204.355 393.834C188.243 387.15 174.276 376.168 163.979 362.087C154.499 348.643 149.496 332.553 149.682 316.104V313.685H155.81V313.661H163.095V313.685H192.427V316.103C192.092 323.599 193.575 331.065 196.747 337.865C199.92 344.665 204.689 350.598 210.648 355.158C225.1 365.447 242.603 370.553 260.32 369.648C275.96 370.671 291.509 366.581 304.622 357.996C309.483 354.402 313.389 349.67 315.997 344.215C318.605 338.761 319.837 332.75 319.583 326.71C319.923 320.874 318.845 315.042 316.442 309.714C314.038 304.385 310.38 299.717 305.78 296.109C303.895 294.743 301.938 293.481 299.916 292.328H64V260.329ZM348.688 150.609C339.695 136.636 326.978 125.452 311.97 118.319C295.24 110.349 276.891 106.36 258.362 106.666C232.525 105.557 207.122 113.579 186.607 129.325C177.799 136.127 170.695 144.885 165.856 154.905C161.016 164.926 158.573 175.935 158.721 187.062C158.647 197.607 160.994 208.028 165.582 217.523H220.978C219.199 216.378 217.023 215.267 215.587 214.096C211.247 210.894 207.723 206.713 205.303 201.893C202.883 197.072 201.635 191.749 201.66 186.355C201.338 180.198 202.505 174.054 205.062 168.444C207.618 162.833 211.489 157.922 216.346 154.125C228.636 145.601 243.432 141.451 258.362 142.339C274.595 141.307 290.626 146.397 303.29 156.605C308.586 161.593 312.734 167.673 315.445 174.424C318.157 181.175 319.367 188.435 318.991 195.7V198.119H361.726V195.7C361.797 179.73 357.271 164.076 348.688 150.609Z",fill:"currentColor"},null,-1)]),6))}});exports.default=r;
