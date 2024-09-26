"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),r=e.defineComponent({__name:"TIReloadCircleOutline",props:{size:{type:String,default:"is-default",validator(l){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(l)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(l){const t=l,o=e.computed(()=>["icon",t.size,{[t.type]:t.type&&!t.color,"is-clickable":t.clickable}]);return(n,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(l.color?`color: ${l.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M48 256C48 141.163 141.163 48 256 48C370.837 48 464 141.163 464 256C464 370.837 370.837 464 256 464C141.163 464 48 370.837 48 256ZM432 256C432 158.837 353.163 80 256 80C158.837 80 80 158.837 80 256C80 353.163 158.837 432 256 432C353.163 432 432 353.163 432 256ZM199.566 150.518C246.304 125.774 303.685 134.754 340.627 172.419L341.74 173.569L342.031 173.873L346.633 179.228L361.32 164.54C362.899 162.924 365.061 162.009 367.32 162L367.35 161.98C369.649 161.961 371.86 162.863 373.491 164.484C375.121 166.105 376.035 168.311 376.03 170.61V230.17C376.03 234.931 372.171 238.79 367.41 238.79H307.87C304.382 238.796 301.235 236.696 299.901 233.473C298.567 230.251 299.309 226.542 301.78 224.08L323.94 201.92L318.339 195.402L317.785 194.829C291.019 167.54 249.594 160.824 215.577 178.258L214.538 178.8C179.983 197.093 161.789 236.117 169.992 274.346C178.194 312.574 210.796 340.699 249.815 343.206C288.442 345.688 324.047 322.465 337.397 286.231L337.794 285.129C340.739 276.797 349.88 272.43 358.211 275.374C366.543 278.319 370.91 287.46 367.966 295.791C350.166 346.157 301.071 378.566 247.762 375.14C194.454 371.715 149.911 333.289 138.704 281.059C127.497 228.829 152.355 175.512 199.566 150.518Z",fill:"currentColor"},null,-1)]),6))}});exports.default=r;
