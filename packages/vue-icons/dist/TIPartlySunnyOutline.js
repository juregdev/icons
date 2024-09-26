import { defineComponent as i, computed as o, openBlock as n, createElementBlock as r, normalizeClass as a, normalizeStyle as s, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ i({
  __name: "TIPartlySunnyOutline",
  props: {
    size: {
      type: String,
      default: "is-default",
      validator(e) {
        return ["is-small", "is-medium", "is-large", "is-default", "is-12", "is-14", "is-26", "is-28", "is-36"].indexOf(e) > -1;
      }
    },
    type: {
      type: String,
      default: void 0
    },
    title: {
      type: String,
      default: void 0
    },
    color: {
      type: String,
      default: void 0
    },
    clickable: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const l = e, C = o(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (n(), r("svg", {
      class: a(C.value),
      style: s(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M351.997 47.6851C351.829 38.9939 344.731 32 336 32C327.163 32 320 39.1634 320 48V80L320.003 80.3149C320.171 89.0061 327.269 96 336 96C344.837 96 352 88.8366 352 80V48L351.997 47.6851ZM284.342 170.186C294.828 174.542 304.652 180.239 313.706 187.168C334.131 202.802 349.847 224.204 359.07 247.834L360.832 248.132C367.949 249.375 374.807 251.05 381.37 253.138C398.125 236.267 404.308 211.214 396.777 188.17C388.36 162.417 364.64 144.755 337.556 144.072C316.269 143.535 296.528 153.58 284.342 170.186ZM411.709 267.015C443.597 286.91 463.413 319.671 463.987 361.333L464 363.2C464 430.434 409.414 480 340 480H106C43.6238 480 0 445.268 0 384.8C0 357.477 10.4609 334.66 29.1387 317.892C44.9019 303.74 65.8419 294.597 88.1574 291.039C88.1873 291.034 88.2108 291.011 88.2126 291.001C101.208 212.071 159.643 160 232 160C238.84 160 245.527 160.47 252.041 161.391C269.205 130.503 302.304 111.173 338.362 112.082C378.989 113.106 414.569 139.6 427.194 178.229C437.263 209.039 430.989 242.243 411.709 267.015ZM377.518 285.651C378.424 286.113 379.367 286.485 380.334 286.765C412.482 300.02 432 326.812 432 363.2C432 412.035 392.393 448 340 448H106C83.8729 448 65.1881 442.499 52.4034 432.32C39.1662 421.781 32 406.133 32 384.8C32 366.684 38.5122 352.48 50.5163 341.703C61.2158 332.098 76.146 325.498 92.3194 322.783L93.1291 322.65C106.602 320.561 117.294 310.098 119.711 296.644L119.784 296.219C130.289 232.417 175.645 192 232 192C255.869 192 276.882 199.281 294.257 212.579C309.713 224.41 321.786 240.724 328.968 258.729L329.292 259.548C333.333 269.895 342.452 277.373 353.351 279.32L353.82 279.401C362.283 280.78 370.208 282.878 377.518 285.651ZM496 192C504.837 192 512 199.163 512 208C512 216.731 505.006 223.829 496.315 223.997L496 224H464C455.163 224 448 216.837 448 208C448 199.269 454.994 192.171 463.685 192.003L464 192H496ZM211.546 83.5463C217.708 77.3847 227.645 77.2991 233.911 83.2896L234.174 83.5463L256.804 106.176C263.052 112.425 263.052 122.555 256.804 128.804C250.642 134.965 240.705 135.051 234.439 129.06L234.176 128.804L211.546 106.174C205.298 99.9253 205.298 89.7947 211.546 83.5463ZM460.454 83.5463C454.205 77.2979 444.075 77.2979 437.826 83.5463L415.196 106.176L414.94 106.439C408.949 112.705 409.035 122.642 415.196 128.804C421.445 135.052 431.575 135.052 437.824 128.804L460.454 106.174L460.71 105.911C466.701 99.6447 466.615 89.7079 460.454 83.5463Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
