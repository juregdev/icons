import { defineComponent as o, computed as r, openBlock as a, createElementBlock as n, normalizeClass as s, normalizeStyle as c, createElementVNode as d } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIFileTrayFill",
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
    const l = e, i = r(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (C, t) => (a(), n("svg", {
      class: s(i.value),
      style: c(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      d("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M479.66 268.7L447.66 116.89C441.48 83.77 417.68 64 384 64H128C111.2 64 97.0001 68.69 85.9001 77.94C74.8001 87.19 67.5301 100.25 64.3201 116.83L32.3201 268.7C32.1039 269.787 31.9967 270.892 32.0001 272V384C32.0001 419.346 60.6539 448 96.0001 448H416C451.346 448 480 419.346 480 384V272C479.997 270.891 479.883 269.786 479.66 268.7ZM95.6601 123.3C95.6601 123.2 95.6601 123.11 95.6601 123.02C99.2101 104.59 109.47 96.02 127.95 96.02H384C402.61 96.02 412.87 104.57 416.27 122.93C416.27 123.06 416.32 123.19 416.34 123.32L443.27 251.2C443.517 252.38 443.219 253.609 442.458 254.544C441.698 255.479 440.556 256.021 439.35 256.02H320C311.215 255.976 304.055 263.055 304 271.84C304 298.35 282.51 319.84 256 319.84C229.49 319.84 208 298.35 208 271.84C207.979 267.618 206.281 263.577 203.281 260.606C200.28 257.636 196.222 255.979 192 256H72.6501C71.4445 256.001 70.3025 255.459 69.5419 254.524C68.7812 253.589 68.4829 252.36 68.7301 251.18L95.6601 123.3Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
