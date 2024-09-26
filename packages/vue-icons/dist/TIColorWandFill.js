import { defineComponent as o, computed as n, openBlock as r, createElementBlock as a, normalizeClass as s, normalizeStyle as d, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIColorWandFill",
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
    return (C, t) => (r(), a("svg", {
      class: s(i.value),
      style: d(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M219 151.83C214.124 146.954 207.511 144.215 200.615 144.215C193.719 144.215 187.106 146.954 182.23 151.83L151.8 182.26C146.924 187.136 144.185 193.749 144.185 200.645C144.185 207.541 146.924 214.154 151.8 219.03L208.76 276C209.51 276.751 210.528 277.173 211.59 277.173C212.652 277.173 213.67 276.751 214.42 276L276 214.42C276.751 213.67 277.173 212.652 277.173 211.59C277.173 210.528 276.751 209.51 276 208.76L219 151.83ZM75.467 300.017C77.9447 305.994 83.7792 309.891 90.2501 309.89C94.4914 309.891 98.5594 308.207 101.56 305.21L135.5 271.27C141.594 264.998 141.523 254.994 135.341 248.809C129.158 242.624 119.155 242.549 112.88 248.64L78.9301 282.58C74.356 287.157 72.9892 294.039 75.467 300.017ZM304.24 237L472.31 405.11C477.186 409.986 479.926 416.599 479.926 423.495C479.926 430.391 477.186 437.004 472.31 441.88L441.88 472.31C431.728 482.457 415.273 482.457 405.12 472.31L237 304.24C236.249 303.49 235.827 302.472 235.827 301.41C235.827 300.348 236.249 299.33 237 298.58L298.58 237C299.33 236.249 300.348 235.827 301.41 235.827C302.472 235.827 303.49 236.249 304.24 237Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
