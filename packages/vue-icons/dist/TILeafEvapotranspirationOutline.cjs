"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),C=e.defineComponent({__name:"TILeafEvapotranspirationOutline",props:{size:{type:String,default:"is-default",validator(t){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(t)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(t){const l=t,i=e.computed(()=>["icon",l.size,{[l.type]:l.type&&!l.color,"is-clickable":l.clickable}]);return(r,o)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(i.value),style:e.normalizeStyle(t.color?`color: ${t.color} !important`:void 0),width:"256",height:"256",viewBox:"0 0 256 256",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o[0]||(o[0]=[e.createElementVNode("path",{d:"M191.732 17.652L166.276 43.1079C164.714 44.67 164.714 47.2026 166.276 48.7647C167.838 50.3268 170.371 50.3268 171.933 48.7647L190.56 30.1373V71.9805C190.56 74.1896 192.351 75.9805 194.56 75.9805C196.769 75.9805 198.56 74.1896 198.56 71.9805V30.1373L217.187 48.7647C218.75 50.3268 221.282 50.3268 222.844 48.7647C224.406 47.2026 224.406 44.67 222.844 43.1079L197.388 17.652C195.826 16.0899 193.294 16.0899 191.732 17.652Z",fill:"currentColor"},null,-1),e.createElementVNode("path",{d:"M88.5 57.0005C88.5 57.0005 76.8384 53.8964 67.4897 50.3107C54.7612 45.4288 43.7434 38.1641 33.3101 27.1171C32.0117 25.74 30.4293 24.6937 28.403 24.2284C25.732 23.6152 23.0492 24.2657 20.9637 25.8634C18.6969 27.6 17.6057 29.8189 16.8428 32.7058C15.9385 36.1273 15.5123 41.0793 15.5003 47.3227C15.4754 60.1768 17.2076 77.4323 20.4914 95.0856C24.3618 115.892 30.133 136.178 37.6702 154.091C46.4985 175.073 57.4844 192.241 70.7483 204.499L71.1509 204.869C91.3022 223.261 117.746 232.716 143.444 231.724C168.31 230.764 189.877 220.067 201.505 201.905C210.938 204.36 220.676 206.353 230.778 207.907C235.144 208.579 239.229 205.583 239.901 201.217C240.573 196.85 237.577 192.765 233.21 192.093C224.777 190.796 216.621 189.178 208.699 187.223C214.173 172.263 214.982 155.91 210.97 139.886C206.681 144.001 201.79 147.123 196.589 149.254C198.499 160.788 197.347 172.302 193.236 182.882C156.041 171.128 123.75 151.071 91.479 120.676C88.2627 117.647 83.1997 117.799 80.1704 121.015C77.1411 124.231 77.2927 129.294 80.509 132.324C113.589 163.481 147.033 184.496 185.24 197.114C176.091 208.269 160.79 215.043 142.827 215.736C121.505 216.559 99.3984 208.74 82.4517 193.517L81.9397 193.054C60.046 173.053 44.314 135.664 36.2216 92.1596C33.1915 75.8703 31.5627 60.0035 31.5018 48.2769L31.5 47.4146L31.8103 47.6757C41.0401 55.3999 50.9004 61.0845 61.76 65.2496L62.7582 65.6285C73.2382 69.5648 86.25 73.0005 86.25 73.0005L88.5 57.0005Z",fill:"currentColor"},null,-1),e.createElementVNode("path",{d:"M100.933 85.1416L139.117 46.9578C141.46 44.6147 145.259 44.6147 147.603 46.9578L185.786 85.1416C188.129 87.4847 188.129 91.2837 185.786 93.6268C183.443 95.97 179.644 95.97 177.301 93.6268L149.36 65.6857V130.2C149.36 133.514 146.674 136.2 143.36 136.2C140.046 136.2 137.36 133.514 137.36 130.2V65.6857L109.419 93.6268C107.076 95.97 103.277 95.97 100.933 93.6268C98.5903 91.2837 98.5903 87.4847 100.933 85.1416Z",fill:"currentColor"},null,-1)]),6))}});exports.default=C;
