import { defineComponent as i, computed as o, openBlock as n, createElementBlock as r, normalizeClass as s, normalizeStyle as a, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ i({
  __name: "TIHelpBuoyFill",
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
      class: s(C.value),
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
        d: "M414.39 97.61C357.896 40.5575 275.188 18.1048 197.6 38.7581C120.011 59.4114 59.4112 120.012 38.7579 197.6C18.1045 275.188 40.5572 357.896 97.6097 414.39C154.103 471.443 236.811 493.895 314.4 473.242C391.988 452.589 452.588 391.988 473.242 314.4C493.895 236.812 471.442 154.104 414.39 97.61ZM192.13 260.18C190.392 233.589 205.312 208.704 229.586 197.708C253.859 186.713 282.406 191.909 301.248 210.751C320.091 229.594 325.287 258.141 314.291 282.414C303.296 306.687 278.411 321.608 251.82 319.87C219.775 317.745 194.255 292.224 192.13 260.18ZM432.13 193.54L335.76 199.38C334.421 199.45 333.134 198.855 332.32 197.79C327.129 190.988 321.051 184.911 314.25 179.72C313.184 178.906 312.589 177.619 312.66 176.28L318.5 79.91C318.572 78.6361 319.248 77.4731 320.319 76.7796C321.39 76.086 322.728 75.945 323.92 76.4C375.38 96.0023 416.016 136.653 435.6 188.12C436.055 189.312 435.914 190.65 435.22 191.721C434.527 192.792 433.364 193.468 432.09 193.54H432.13ZM193.54 79.91L199.38 176.28C199.45 177.619 198.855 178.906 197.79 179.72C190.988 184.911 184.911 190.988 179.72 197.79C178.906 198.855 177.619 199.45 176.28 199.38L79.9098 193.54C78.6358 193.468 77.4729 192.792 76.7793 191.721C76.0857 190.65 75.9447 189.312 76.3997 188.12C95.9926 136.645 136.645 95.9928 188.12 76.4C189.312 75.945 190.649 76.086 191.72 76.7796C192.791 77.4731 193.467 78.6361 193.54 79.91ZM79.9098 318.46L176.28 312.62C177.619 312.549 178.906 313.145 179.72 314.21C184.911 321.012 190.988 327.089 197.79 332.28C198.855 333.094 199.45 334.381 199.38 335.72L193.54 432.09C193.467 433.364 192.791 434.527 191.72 435.22C190.649 435.914 189.312 436.055 188.12 435.6C136.645 416.007 95.9926 375.355 76.3997 323.88C75.9447 322.688 76.0857 321.35 76.7793 320.279C77.4729 319.208 78.6358 318.532 79.9098 318.46ZM318.46 432.09L312.62 335.72C312.549 334.381 313.144 333.094 314.21 332.28C321.011 327.089 327.089 321.012 332.28 314.21C333.094 313.145 334.381 312.549 335.72 312.62L432.09 318.46C433.364 318.532 434.527 319.208 435.22 320.279C435.914 321.35 436.055 322.688 435.6 323.88C416.007 375.355 375.355 416.007 323.88 435.6C322.688 436.055 321.35 435.914 320.279 435.22C319.208 434.527 318.532 433.364 318.46 432.09Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
