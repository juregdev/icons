"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),C=e.defineComponent({__name:"TISoilAnalysis",props:{size:{type:String,default:"is-default",validator(t){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(t)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(t){const l=t,o=e.computed(()=>["icon",l.size,{[l.type]:l.type&&!l.color,"is-clickable":l.clickable}]);return(s,i)=>(e.openBlock(),e.createElementBlock("svg",{class:e.normalizeClass(o.value),style:e.normalizeStyle(t.color?`color: ${t.color} !important`:void 0),width:"513",height:"512",viewBox:"0 0 513 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i[0]||(i[0]=[e.createElementVNode("path",{d:"M453.095 364.9L328.195 167.1L327.895 166.6C323.295 159.1 320.795 150.4 320.795 141.5V64H336.795H337.095C345.795 63.8 352.795 56.7 352.795 48C352.795 39.2 345.595 32 336.795 32H176.795H176.495C167.795 32.2 160.795 39.3 160.795 48C160.795 56.8 167.995 64 176.795 64H192.795V141.5V142.1C192.695 150.9 190.095 159.6 185.395 167.1L60.4952 364.9L59.5952 366.4C29.6952 416.2 65.3952 480 123.895 480H389.695H391.495C449.495 478.7 484.295 414.4 453.095 364.9ZM389.695 448H375.595C372.795 444.5 369.495 441.2 365.695 438.3V438.2C365.695 438.2 365.595 438.2 365.595 438.3C353.095 428.6 335.795 422.6 316.795 422.6C312.895 422.6 309.095 422.8 305.395 423.3C295.595 413.8 281.895 407 266.095 404.3V376.2C290.295 374.3 309.595 365.8 323.495 350.7C348.195 323.9 345.795 286.5 345.695 284.9L344.995 275.9L336.095 275.2C334.495 275.1 297.495 272.7 270.995 297.6C264.795 303.4 259.795 310.2 255.795 317.8C251.895 310.1 246.795 303.4 240.595 297.6C214.095 272.7 177.095 275.1 175.495 275.2L166.595 275.9L165.895 284.9C165.795 286.5 163.395 323.9 188.095 350.7C201.895 365.8 221.195 374.3 245.495 376.2V403.3C226.495 404.6 209.795 411.8 198.295 422.6C197.495 422.6 196.695 422.6 195.795 422.6C170.995 422.6 149.195 432.8 136.995 448.1H123.895H122.895C89.6952 447.4 69.6952 410.5 87.5952 382.1L126.995 320.1L177.295 240.1L212.495 184.3L212.895 183.6C220.695 171 224.795 156.4 224.795 141.6V64H288.795V141.5V142.3C288.895 157.1 293.195 171.7 301.095 184.2L366.295 287.5L405.795 349H405.195L425.995 382L426.495 382.9C443.695 411.4 423.195 448 389.695 448ZM266.695 355C268.395 337 274.595 322.9 284.995 313C297.595 301 314.195 297.4 324.695 296.4C323.695 306.9 320.195 323.5 308.395 336.3C298.595 347 284.595 353.2 266.695 355ZM244.895 355C227.095 353.3 213.195 347 203.395 336.5C191.595 323.7 187.995 306.9 186.995 296.4C197.295 297.4 213.795 301 226.495 312.9C236.995 322.8 243.195 336.9 244.895 355Z",fill:"currentColor"},null,-1)]),6))}});exports.default=C;
