import { defineComponent as o, computed as C, openBlock as s, createElementBlock as n, normalizeClass as r, normalizeStyle as a, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIHeadsetFill",
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
    return (d, t) => (s(), n("svg", {
      class: r(i.value),
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
        d: "M411.16 97.46C368.43 55.86 311.88 32 256 32C200.12 32 143.57 55.86 100.84 97.46C56.45 140.67 32 197 32 256C32 282.67 40.75 317.09 64.88 381.55C89.01 446.01 137 473 157.27 477.41C163.08 478.68 169.89 480 176 480C186.528 480.009 196.874 477.25 206 472L220 464C235.07 455.18 239.47 435.87 230.8 420.65L143.88 268.08C139.696 260.706 132.736 255.313 124.55 253.103C116.365 250.894 107.636 252.052 100.31 256.32L86.62 264.32C81.3584 267.402 76.6305 271.316 72.62 275.91C71.6034 277.103 69.9837 277.592 68.4767 277.162C66.9697 276.731 65.8529 275.46 65.62 273.91C64.612 267.992 64.0704 262.003 64 256C64 205.69 85 157.52 123.16 120.39C160 84.55 208.39 64 256 64C303.61 64 352 84.55 388.84 120.39C427 157.52 448 205.69 448 256C447.91 262.005 447.348 267.993 446.32 273.91C446.087 275.46 444.97 276.731 443.463 277.162C441.956 277.592 440.337 277.103 439.32 275.91C435.309 271.316 430.582 267.402 425.32 264.32L411.63 256.32C404.304 252.052 395.575 250.894 387.39 253.103C379.204 255.313 372.244 260.706 368.06 268.08L281.2 420.65C272.53 435.87 276.93 455.18 292 464L306 472C315.126 477.25 325.472 480.009 336 480C342.11 480 348.92 478.68 354.73 477.41C375 473 423 446 447.12 381.55C471.24 317.1 480 282.67 480 256C480 197 455.55 140.67 411.16 97.46Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
