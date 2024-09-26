"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const L=require("vue"),i=L.defineComponent({__name:"TIApiFill",props:{size:{type:String,default:"is-default",validator(e){return["is-small","is-medium","is-large","is-default","is-12","is-14","is-26","is-28","is-36"].indexOf(e)>-1}},type:{type:String,default:void 0},title:{type:String,default:void 0},color:{type:String,default:void 0},clickable:{type:Boolean,default:!1}},setup(e){const l=e,C=L.computed(()=>["icon",l.size,{[l.type]:l.type&&!l.color,"is-clickable":l.clickable}]);return(o,t)=>(L.openBlock(),L.createElementBlock("svg",{class:L.normalizeClass(C.value),style:L.normalizeStyle(e.color?`color: ${e.color} !important`:void 0),width:"256",height:"256",viewBox:"0 0 256 256",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t[0]||(t[0]=[L.createStaticVNode('<path d="M149.453 12.0234L149.522 12.0243C155.866 12.1343 161.285 16.6399 162.564 22.8676L162.611 23.1166L162.65 23.367L166.006 47.2968C166.007 47.3061 166.012 47.3144 166.04 47.3296L166.065 47.3425C169.96 49.2263 173.707 51.4029 177.261 53.8451L177.886 54.2788L200.398 45.1988L200.469 45.1716C206.495 42.8722 213.29 45.1997 216.657 50.6878L216.762 50.8622L238.184 87.9995C241.478 93.6755 240.192 100.907 235.144 105.093L234.984 105.222L215.89 120.244L215.883 120.253L215.881 120.266L215.889 120.364C216.086 122.841 216.19 125.075 216.189 127.295C216.179 129.054 216.115 130.811 215.996 132.564L215.932 133.44L215.876 134.118L235.008 149.155L235.134 149.257C240.121 153.399 241.431 160.514 238.283 166.147L238.18 166.328L235.003 171.835L223.22 173.339L223.205 160.252L202.488 143.971C200.336 142.279 199.202 139.61 199.462 136.898L199.482 136.718L199.505 136.537C199.943 133.444 200.172 130.325 200.191 127.248C200.191 125.662 200.118 123.979 199.975 122.08L199.941 121.638L199.929 121.49C199.527 116.241 201.72 111.126 205.807 107.797L206 107.643L223.22 94.0944L204.119 60.9788L183.858 69.1516C179.012 71.1048 173.532 70.5622 169.158 67.7137L168.943 67.5717L168.734 67.4284C165.873 65.4244 162.866 63.639 159.77 62.1029L159.15 61.799C154.379 59.5236 151.038 55.0416 150.203 49.7973L150.166 49.5547L147.151 28.0544H108.875L105.835 49.7291C105.124 54.852 101.988 59.3038 97.4266 61.6992L97.2118 61.81L96.9915 61.9194C93.8236 63.4581 90.7692 65.2205 87.8817 67.1723L87.3064 67.5651C82.9495 70.6074 77.3783 71.2911 72.397 69.3933L72.1602 69.301L51.8982 61.125L32.7953 94.2427L49.9613 107.755C54.0744 110.987 56.3444 116.02 56.0611 121.273L56.0459 121.519L56.0267 121.77C55.8559 123.657 55.7694 125.462 55.7694 127.233C55.7694 128.827 55.8431 130.498 55.9884 132.309L56.0452 132.987C56.4585 138.228 54.2836 143.342 50.1932 146.698L50.0001 146.854L32.7793 160.401L51.8807 193.517L72.1425 185.345C74.0337 184.582 76.0218 184.2 78.0031 184.187V200.262L55.6017 209.298L55.5314 209.325C49.5053 211.624 42.71 209.297 39.3433 203.809L39.2381 203.634L17.8163 166.497C14.5217 160.821 15.8076 153.59 20.856 149.403L21.0162 149.274L40.0865 134.271L40.0939 134.261L40.0958 134.249L40.09 134.185C39.8799 131.746 39.7704 129.461 39.7704 127.233C39.7704 124.963 39.88 122.677 40.0889 120.37L20.9896 105.336C20.914 105.277 20.8395 105.216 20.7661 105.154C15.8584 100.996 14.5936 93.941 17.717 88.3504L17.8204 88.1686L39.2495 51.0185C42.5397 45.4594 49.3074 43.0446 55.3522 45.2445L55.6154 45.3436L78.1074 54.4184C78.1245 54.4253 78.144 54.423 78.1958 54.387C81.734 51.9456 85.4414 49.7607 89.2833 47.8519L89.9903 47.5039L93.3645 23.451L93.3966 23.2528C94.4991 16.9315 99.8671 12.2584 106.249 12.0306L106.532 12.0236L149.453 12.0234Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M139.704 243.976H154.827L126.983 181.855H112.75L84.9948 243.976H99.7619L105.277 230.665H134.189L139.704 243.976ZM109.903 219.749L119.778 195.966L129.652 219.749H109.903Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M188.242 181.855H161.288V243.976H175.699V226.849H188.242C204.877 226.849 215.286 218.24 215.286 204.396C215.286 190.463 204.877 181.855 188.242 181.855ZM187.442 215.134H175.699V193.569H187.442C196.248 193.569 200.696 197.563 200.696 204.396C200.696 211.141 196.248 215.134 187.442 215.134Z" fill="currentColor"></path><path d="M239.985 243.976H225.574V181.855H239.985V243.976Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M69.4958 197.385H45.4972L30.4981 170.834L26.9984 155.804C31.8314 150.46 41.8974 139.573 43.4973 138.771C45.4972 137.769 50.9969 127.749 50.9969 126.247C50.9969 125.044 45.9972 115.392 43.4973 110.716L30.4981 99.6947C29.3315 98.1917 26.9984 94.0837 26.9984 89.6751C26.9984 85.2665 39.3309 66.7971 45.4972 58.1135L57.9965 53.6047L77.4953 58.1135L97.494 53.6047L99.4939 33.0645L113.493 15.5303L145.491 18.0352L156.49 38.5753L166.49 58.1135H203.988C208.821 61.2863 218.587 67.9326 218.987 69.135C219.387 70.3373 227.153 86.6692 230.986 94.6849L218.987 110.716L210.487 131.757L220.987 153.8L230.986 166.325L235.003 171.835L232.486 175.342H219.987V181.855L209.285 177.346L194.988 173.339H177.989H152.991V181.855V193.517L145.106 195.966L131.944 173.339H119.778H105.835L86.9947 206.403L77.4953 200.391L69.4958 197.385ZM167.804 123.309C165.898 104.299 150.904 89.2736 131.944 87.3655C115.116 85.7002 99.0715 94.8035 91.8451 110.108C84.6187 125.412 87.7697 143.616 99.7176 155.588C111.665 167.56 129.833 170.717 145.106 163.476C160.38 156.236 169.465 140.158 167.804 123.309ZM111.031 144.252C103.862 137.069 101.971 126.147 106.307 116.964C110.643 107.781 120.27 102.319 130.359 103.318C141.733 104.463 150.74 113.487 151.884 124.898C152.879 134.994 147.428 144.641 138.264 148.985C129.1 153.33 118.199 151.435 111.031 144.252Z" fill="currentColor"></path>',5)]),6))}});exports.default=i;
