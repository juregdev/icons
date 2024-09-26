import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as C, createElementVNode as d } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIShieldOutline",
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
    return (c, t) => (r(), s("svg", {
      class: a(i.value),
      style: C(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      d("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M249.414 33.4181L244.625 35.5749C167.258 70.3144 131.209 81.3501 46.0746 96.6214C38.8218 97.9224 33.3954 104.009 32.9314 111.363C28.9787 174.01 37.667 230.366 57.36 280.599C74.2044 323.567 98.6483 360.967 128.949 393.115C152.894 418.521 179.282 439.408 206.46 456.164L208.181 457.22C225.028 467.491 239.478 474.595 250.023 478.842C253.858 480.386 258.142 480.386 261.977 478.842C272.879 474.451 287.956 467.006 305.54 456.164C332.717 439.408 359.106 418.521 383.051 393.115C413.351 360.967 437.795 323.567 454.639 280.599C474.332 230.366 483.021 174.01 479.068 111.363C478.604 104.009 473.177 97.9224 465.925 96.6214C379.053 81.0385 343.29 69.8657 262.585 33.4181C258.398 31.5273 253.601 31.5273 249.414 33.4181ZM256 65.543L256.774 65.8908C330.08 98.6947 368.611 111.031 444.9 125.305L447.741 125.833L447.787 127.178C449.452 179.615 441.386 226.732 424.847 268.92C409.555 307.927 387.357 341.891 359.764 371.167C337.857 394.41 313.65 413.57 288.745 428.926C280.036 434.295 271.715 438.899 263.96 442.77L262.332 443.576C260.558 444.447 258.899 445.238 257.363 445.95L256 446.576L255.922 446.542C254.086 445.705 252.053 444.745 249.838 443.659L249.093 443.293C241.04 439.316 232.359 434.539 223.254 428.926C198.349 413.57 174.142 394.41 152.236 371.167C124.643 341.891 102.444 307.927 87.1524 268.92L86.6161 267.542C70.4394 225.708 62.565 179.045 64.2119 127.178L64.2576 125.833L64.7755 125.738C141.057 111.567 179.62 99.517 250.825 67.854L256 65.543Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
