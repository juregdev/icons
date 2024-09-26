"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const L=require("vue"),i=L.defineComponent({__name:"TIThumbsDownOutline",props:{size:{type:String,default:"is-default",validator(e){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(e)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(e){const C=e,t=L.computed(()=>["icon",C.size,{[C.type]:C.type&&!C.color,"is-clickable":C.clickable}]);return(o,l)=>(L.openBlock(),L.createElementBlock("svg",{class:L.normalizeClass(t.value),style:L.normalizeStyle(e.color?`color: ${e.color} !important`:void 0),width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l[0]||(l[0]=[L.createElementVNode("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M112.353 32L177.074 35.0338L178.25 35.1411C182.813 35.5861 187.093 36.3699 191.063 37.4817C191.195 37.4488 191.33 37.4156 191.467 37.3822C194.777 36.5769 198.829 35.7984 203.689 35.0889L205.104 34.8874C218.207 33.068 235.02 32.001 256 32.001C280.332 32.001 301.025 35.8004 319.608 43.112C332.462 48.1693 343.193 54.2496 355.872 63.1087L357.142 64.001H416C459.741 64.001 495.283 99.1055 495.99 142.678L496 144.001V192.001C496 235.742 460.896 271.284 417.323 271.99L416 272.001L386.089 272.001C380.813 272.03 375.9 274.602 372.867 278.865L372.664 279.155L371.872 280.798L371.226 282.115L369.966 284.647C368.808 286.956 367.473 289.564 365.954 292.48L364.496 295.264C357.977 307.653 349.577 322.871 339.077 341.104L337.856 343.221C330.845 355.364 321.908 369.548 310.74 386.445L308.705 389.515C307.017 392.058 305.278 394.663 303.477 397.348L299.938 402.603C292.359 413.814 278.022 434.838 273.162 441.965C272.188 443.393 271.595 444.263 271.513 444.384L268.264 449.196C260.749 460.372 256.331 467.287 254.539 470.711L254.311 471.156C251.601 476.577 246.061 480.001 240 480.001C200.436 480.001 178.101 447.564 190.898 411.008L191.431 409.492C193.214 404.461 195.06 399.588 197.689 392.889L202.773 380.006L203.658 377.737C210.729 359.504 214.625 346.922 216.715 333.644L216.878 332.574L95.3014 322.996C69.2237 322.586 48.0003 299.3 48.0003 273.001L48.0005 272.746C48.0351 266.241 49.3625 260.043 51.7385 254.397C31.4694 249.021 16.431 230.742 16.0092 208.838L16 208.066L16.0092 207.159C16.3297 190.518 25.0988 175.947 38.2059 167.559C34.3986 160.829 32.1654 153.089 32.0089 144.833L32.0012 144.175L32.0003 143.956C32.0623 121.849 47.0366 103.252 67.3952 97.6946C65.3132 92.4654 64.1217 86.7828 64.0089 80.8328L64.0012 80.175L64.0003 79.9562C64.0744 53.5021 85.5013 32.0752 111.955 32.0011L112.353 32ZM210.98 111.9C219 119.755 223.806 130.539 223.995 143.238L224 144.001C224 157.089 219.125 168.128 210.851 176.118C218.876 183.983 223.794 194.706 223.994 207.22L224 208.001C224 221.123 218.849 232.257 210.33 240.294C218.857 248.081 223.813 258.962 223.995 272.256L224 273.001C224 283.598 220.639 292.897 214.856 300.315L226.291 301.216L226.343 301.218C234.513 301.534 240.864 306.235 244.942 312.749L245.158 313.099C248.387 318.412 250.047 324.905 249.356 331.023C247.142 350.333 242.455 366.298 233.148 390.197L231.908 393.36L227.759 403.862C224.846 411.271 222.961 416.263 221.102 421.577C216.574 434.511 220.438 443.829 231.257 446.902L231.447 446.954L232.164 445.823C234.511 442.136 237.438 437.695 241.07 432.29L245.988 425.016L246.832 423.779L246.838 423.769L246.846 423.757C252.479 415.496 269.501 390.534 275.785 381.186L277.782 378.21C278.659 376.901 279.52 375.61 280.368 374.338L282.046 371.815C293.61 354.399 302.756 339.963 309.743 327.913L312.521 323.093C322.272 306.116 330.09 291.932 336.17 280.376L336.891 279.002C338.736 275.479 340.3 272.426 341.599 269.829L342.525 267.966C342.9 267.204 343.226 266.536 343.503 265.959L344.091 264.723C344.359 264.138 344.663 263.569 345.001 263.02C353.653 248.949 368.883 240.281 385.459 240.007L386 240.001H416C442.245 240.001 463.57 218.938 463.994 192.795L464 192.001V144.001C464 117.756 442.938 96.4314 416.794 96.0075L416 96.0011H352C348.619 96.0011 345.324 94.9297 342.59 92.9408L340.989 91.7834C328.581 82.8615 319.127 77.3102 307.892 72.8901C293.365 67.1745 276.98 64.1115 257.089 64.004L256 64.001C242.73 64.001 231.4 64.4492 221.875 65.2385C223.209 69.5059 223.932 74.1907 223.996 79.2737L224 80.001C224 92.671 219.057 103.776 210.98 111.9ZM174.9 66.967L111.711 64.0051L111.416 64.0148C102.879 64.3672 96.0597 71.3693 96.0005 79.979L96.0003 79.952L96.0002 80.0459L96.0005 79.979L96.0033 80.2621L96.0123 80.5451C96.3386 89.0234 103.227 95.8076 111.726 95.9971L111.816 95.9981L175.75 94.0011L176.359 93.9982C185.649 93.85 192 87.9453 192 80.0011L191.998 79.6771C191.946 75.5541 191.03 73.2196 189.312 71.612L189.138 71.4536C186.656 69.2676 181.906 67.5798 174.604 66.94L174.9 66.967ZM175.032 258.982L95.8553 257.002L95.6828 257.004C87.0253 257.173 80.0463 264.218 80.0003 272.831L80.0035 273.33C80.1798 282.408 87.6303 290.611 95.4417 290.988L95.6853 290.996L175.092 287.025L175.394 287.004C185.898 286.199 191.843 280.885 191.997 273.305L191.999 273.041L191.998 272.695C191.888 264.696 187.24 260.294 175.413 259.021L175.032 258.982ZM63.9193 192.002L175.444 193.993L175.665 194.006C185.868 194.616 191.876 200.059 191.998 207.731L191.999 208.048L191.997 208.306C191.845 215.794 186.059 221.067 175.834 221.969L175.303 222.01L63.9303 223.999L63.7305 223.997C55.2304 223.805 48.3414 217.02 48.0125 208.54L48.0033 208.257L48.0006 207.981C48.0648 199.266 55.051 192.199 63.7346 192.005L63.9193 192.002ZM48.0006 207.981L48.0002 208.051L48.0003 207.951L48.0006 207.981ZM79.8993 128.002L175.445 129.992L175.725 130.007C186.429 130.606 191.879 135.661 191.998 143.712L192 144.053L191.998 144.317C191.861 152.162 186.59 157.079 175.904 157.968L175.301 158.012L79.8983 159.999L79.7256 159.997C71.2271 159.808 64.3386 153.023 64.0123 144.545L64.0033 144.262L64.0005 143.979C64.0604 135.264 71.0466 128.196 79.7297 128.005L79.8993 128.002ZM64.0005 143.979L64.0002 144.046L64.0003 143.952L64.0005 143.979Z",fill:"currentColor"},null,-1)]),6))}});exports.default=i;
