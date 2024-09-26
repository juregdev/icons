import { defineComponent as o, computed as r, openBlock as a, createElementBlock as n, normalizeClass as s, normalizeStyle as c, createElementVNode as d } from "vue";
const C = /* @__PURE__ */ o({
  __name: "TITextSharp",
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
    return (p, t) => (a(), n("svg", {
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
        d: "M219.75 338.87L261.94 451H309L156 61L5 451H52.06L94.25 338.87H219.75ZM157 173.71L203.25 295H110.75L157 173.71ZM405.42 183C364.19 183 327.35 207.06 311.57 244.3L305 259.52L345.33 276.7L351.89 261.48C360.79 240.48 381.8 226.93 405.42 226.93C439.97 226.93 463.18 250.2 463.18 284.84V287.14C441.06 287.73 414.53 289.19 390.91 291.98C336.39 298.41 303.85 328.21 303.85 371.7C303.85 394.86 312.57 415.7 328.41 430.29C343.28 444 363.55 451 385.51 451C416.37 451 443.01 443.67 463.18 428.36V451H507V284.84C507 225.83 464.28 183 405.42 183ZM385.51 408.07C368.05 408.07 347.66 398.23 347.66 371.7C347.66 361.05 351.48 353.59 360.04 347.51C368.38 341.59 381.16 337.36 396.04 335.61C417.82 333.04 442.35 331.66 463.04 331.09C460.88 382.58 435.47 408.07 385.51 408.07Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  C as default
};
