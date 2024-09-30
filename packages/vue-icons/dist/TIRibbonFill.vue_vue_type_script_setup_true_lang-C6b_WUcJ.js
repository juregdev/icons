import { defineComponent as o, computed as C, openBlock as n, createElementBlock as r, normalizeClass as s, normalizeStyle as a, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIRibbonFill",
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
    return (d, t) => (n(), r("svg", {
      class: s(i.value),
      style: a(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M256.25 16C176.83 16 112.25 80.59 112.25 160C112.25 239.41 176.86 304 256.25 304C335.64 304 400.25 239.4 400.25 160C400.25 80.6 335.66 16 256.25 16ZM256.25 240C212.067 240 176.25 204.183 176.25 160C176.25 115.817 212.067 80 256.25 80C300.432 80 336.25 115.817 336.25 160C336.195 204.16 300.41 239.945 256.25 240ZM256.25 208C282.765 208 304.26 186.51 304.26 160C304.26 133.49 282.765 112 256.25 112C229.734 112 208.24 133.49 208.24 160C208.24 186.51 229.734 208 256.25 208ZM406.1 262.71L477.63 391.88C480.146 396.153 480.661 401.314 479.04 406C476.76 412.52 471.71 416 465.04 416H386.27C380.62 415.97 375.38 418.45 372.49 423.3L333.96 487.88C331.116 492.785 325.928 495.86 320.26 496C314.33 495.67 308.19 491.72 305.74 486.31L275.47 419.72C274.509 417.625 274.509 415.215 275.47 413.12L312.33 332.02C314.063 328.248 317.188 325.292 321.05 323.77C352.504 311.232 379.688 289.911 399.36 262.35C400.154 261.237 401.463 260.607 402.828 260.68C404.194 260.753 405.428 261.519 406.1 262.71ZM256.21 336.08C260.51 336.08 264.77 335.923 268.99 335.61C270.394 335.513 271.747 336.161 272.55 337.318C273.354 338.474 273.49 339.967 272.91 341.25L206.8 486.4C204.33 491.81 198.18 495.67 192.24 496C186.576 495.91 181.367 492.88 178.49 488L139.83 423.33C136.953 418.6 131.742 415.795 126.21 416H48.2096C42.4172 415.993 37.038 412.999 33.9796 408.08C31.0896 403.2 31.5196 397.2 34.2596 392.2L106.26 262.8C106.93 261.597 108.172 260.823 109.548 260.751C110.923 260.68 112.239 261.322 113.03 262.45C142.915 304.216 189.543 330.855 240.7 335.39C245.81 335.84 250.98 336.08 256.21 336.08Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
