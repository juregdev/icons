import { defineComponent as o, computed as C, openBlock as a, createElementBlock as r, normalizeClass as s, normalizeStyle as n, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIChatbubblesSharp",
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
    const l = e, i = C(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (a(), r("svg", {
      class: s(i.value),
      style: n(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M449.047 310.887C448.701 311.402 448.354 311.92 448 312.43C443.08 319.63 443.24 320.57 444.47 325.57L462.19 393.06C462.56 394.457 462.148 395.945 461.112 396.952C460.075 397.959 458.576 398.329 457.19 397.92L379.77 375.54C375.88 374.42 371 375.64 367.88 376.83C364.76 378.02 352.7 382.43 340.53 385.77C328.36 389.11 306.17 394.06 289.7 394.06C186.1 394.06 105.54 311.35 105.54 211.95C105.55 199.565 106.891 187.218 109.54 175.12C127.2 93.49 202.58 32 292.94 32C396.54 32 480.32 112.55 480 211.85C479.96 246.496 469.611 280.345 450.27 309.09C449.859 309.674 449.454 310.279 449.047 310.887ZM289.28 417.43C297.072 417.296 304.845 416.611 312.54 415.38C314.385 415.09 316.206 416.027 317.042 417.697C317.878 419.367 317.538 421.386 316.2 422.69C284.635 452.371 242.898 468.832 199.57 468.69C177.06 468.69 154.55 463.77 134.2 455.77C130.094 453.983 125.445 453.903 121.28 455.55L53.2804 479.79C51.9333 480.249 50.4438 479.957 49.369 479.025C48.2942 478.092 47.7959 476.658 48.0604 475.26L62.1504 403C62.5804 401.06 61.1804 398.15 58.7104 394.38C18.1632 333.63 24.296 253.054 73.5704 199.14C74.8022 197.792 76.7465 197.359 78.4341 198.057C80.1217 198.755 81.1916 200.435 81.1104 202.26L81.1094 202.289C80.9997 205.299 80.8904 208.3 80.8904 211.42C80.8904 257.4 95.1104 301.34 121.19 335.91C135.445 355.705 153.491 372.47 174.28 385.23C206.78 406.23 246.85 417.43 289.28 417.43Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
