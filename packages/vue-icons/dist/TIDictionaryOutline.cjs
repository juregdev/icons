"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const L=require("vue"),o=L.defineComponent({__name:"TIDictionaryOutline",props:{size:{type:String,default:"is-default",validator(e){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(e)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(e){const l=e,i=L.computed(()=>["icon",l.size,{[l.type]:l.type&&!l.color,"is-clickable":l.clickable}]);return(n,t)=>(L.openBlock(),L.createElementBlock("svg",{class:L.normalizeClass(i.value),style:L.normalizeStyle(e.color?`color: ${e.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 347 416",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t[0]||(t[0]=[L.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M38.9497 1.98575L31.8134 3.84692L25.55 7.6115L19.2867 11.375L13.803 17.3333L8.32041 23.2917L5.26681 29.796L2.21321 36.3014L1.10715 42.1319L0 47.9624V208V368.038L1.10715 373.868L2.21321 379.699L5.26681 386.204L8.32041 392.708L13.803 398.667L19.2867 404.625L25.55 408.389L31.8134 412.153L38.9497 414.014L46.0859 415.875L196.543 415.937L347 416V208V0L196.543 0.0628319L46.0859 0.124581L38.9497 1.98575ZM312.3 173.333V312L179.735 312.026L47.1703 312.052L43.375 312.941L39.5797 313.832L37.1398 314.614L34.7 315.396V182.143V48.8908L35.857 45.8413L37.013 42.7917L39.3812 40.2166L41.7484 37.6404L45.0016 36.1963L48.2547 34.7512L180.277 34.7089L312.3 34.6667V173.333ZM88.5783 154.409L69.4 204.816V223.742V242.667H86.75H104.1V234V225.333H121.45H138.8V234V242.667H156.15H173.5V223.709V204.752L153.33 154.376L133.159 104H120.458H107.757L88.5783 154.409ZM224.19 139.774L220.119 140.801L214.56 143.615L209.001 146.43L203.659 151.766L198.317 157.103L194.855 164.406L191.392 171.708V190.667V209.625L194.855 216.928L198.317 224.23L203.81 229.719L209.304 235.207L216.614 238.666L223.923 242.125H234.355H244.787L252.56 238.142L260.331 234.157L266.163 236.824L271.994 239.491L279.405 241.06L286.817 242.629L290.884 242.648L294.95 242.667V225.485V208.303L288.902 207.679L282.854 207.056L280.347 205.414L277.839 203.773L277.429 187.741L277.019 171.708L273.576 164.406L270.133 157.103L264.64 151.615L259.146 146.127L252.106 142.836L245.067 139.545L236.664 139.146L228.261 138.746L224.19 139.774ZM126.169 179.57L130.125 189.599V190.133V190.667H120.963H111.801L113.223 187.146L114.646 183.625L117.634 175.683L120.623 167.74L121.417 168.641L122.213 169.542L126.169 179.57ZM240.238 175.993L242.9 178.651V190.667V202.682L240.238 205.34L237.577 208H234.225H230.873L228.212 205.34L225.55 202.682V190.667V178.651L228.212 175.993L230.873 173.333H234.225H237.577L240.238 175.993ZM312.3 364V381.333H180.514H48.7275L45.187 379.856L41.6476 378.378L38.7588 374.949L35.8711 371.519L35.1641 367.76L34.4582 364L35.1641 360.24L35.8711 356.481L38.7556 353.055L41.6411 349.63L44.9473 348.191L48.2547 346.751L180.277 346.709L312.3 346.667V364Z",fill:"currentColor"},null,-1)]),6))}});exports.default=o;
