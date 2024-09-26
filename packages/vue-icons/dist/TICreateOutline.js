import { defineComponent as o, computed as n, openBlock as r, createElementBlock as a, normalizeClass as s, normalizeStyle as C, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TICreateOutline",
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
    const l = e, i = n(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (r(), a("svg", {
      class: s(i.value),
      style: C(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M459.94 53.2503C456.987 50.0058 452.836 48.1104 448.45 48.0047C444.064 47.8989 439.826 49.5919 436.72 52.6903L424.35 65.0003C421.228 68.1241 421.228 73.1865 424.35 76.3103L435.69 87.6303C437.191 89.1387 439.232 89.9866 441.36 89.9866C443.488 89.9866 445.529 89.1387 447.03 87.6303L459.09 75.6303C465.19 69.5403 465.76 59.6203 459.94 53.2503ZM271.48 112C280.317 112 287.48 119.164 287.48 128C287.48 136.732 280.486 143.83 271.795 143.997L271.48 144H104C90.8777 144 80.2152 154.532 80.0032 167.603L80 168V408C80 421.123 90.5313 431.785 103.603 431.997L104 432H344C350.365 432 356.47 429.472 360.971 424.971C365.364 420.577 367.878 414.655 367.996 408.454L368 408V224C368 215.164 375.163 208 384 208C392.731 208 399.829 214.994 399.997 223.685L400 224V408C400 422.852 394.1 437.096 383.598 447.598C373.248 457.948 359.264 463.828 344.645 463.997L344 464H104C73.3813 464 48.502 439.427 48.0075 408.926L48 408V168C48 137.382 72.5731 112.502 103.074 112.008L104 112H271.48ZM218.82 270.2L399.34 90.0003C402.853 86.4975 408.537 86.4975 412.05 90.0003L422 100C425.47 103.507 425.47 109.153 422 112.66L241.8 293.2C240.71 294.295 239.357 295.09 237.87 295.51L213.02 303.86C211.645 304.268 210.158 303.89 209.144 302.876C208.13 301.862 207.753 300.375 208.16 299L216.51 274.13C216.93 272.644 217.725 271.29 218.82 270.2Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
