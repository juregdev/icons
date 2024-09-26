import { defineComponent as o, computed as r, openBlock as n, createElementBlock as s, normalizeClass as C, normalizeStyle as a, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIEyedropFill",
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
    return (c, t) => (n(), s("svg", {
      class: C(i.value),
      style: a(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      d("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M461.05 51C448.916 38.8856 432.486 32.0565 415.34 32H414.58C397.793 32.1263 381.779 39.0754 370.22 51.25C369.837 51.6433 369.479 52.0608 369.15 52.5L315.15 122.26C309.53 129.36 302.41 130.94 298.37 126.9L296.47 125C277.714 106.244 247.306 106.244 228.55 125C209.794 143.756 209.794 174.164 228.55 192.92L238.46 202.83C238.836 203.205 239.047 203.714 239.047 204.245C239.047 204.776 238.836 205.285 238.46 205.66L58.7 385.38C54 390.05 46.9 399.85 38.85 431C34.79 446.71 32.34 460.66 32.24 461.24C31.4247 465.895 32.7093 470.673 35.7494 474.292C38.7894 477.91 43.2738 480 48 480C48.8846 480.001 49.7678 479.928 50.64 479.78C51.22 479.68 65.08 477.35 80.77 473.34C111.84 465.4 121.82 458.1 126.62 453.34L306.39 273.55C307.17 272.775 308.43 272.775 309.21 273.55L319.13 283.47C337.888 302.226 368.299 302.223 387.055 283.465C405.811 264.707 405.808 234.296 387.05 215.54L385.46 214C380.46 209 382.94 201.89 389.78 196.86L459.53 142.92C460.044 142.508 460.535 142.067 461 141.6C473.108 129.753 479.954 113.54 480 96.6C480.051 79.4743 473.224 63.0453 461.05 51ZM250.78 283.9C247.86 286.82 234.6 291.82 227.39 284.61C220.18 277.4 225.15 264.19 228.08 261.26L261.08 228.26C261.455 227.884 261.964 227.673 262.495 227.673C263.026 227.673 263.535 227.884 263.91 228.26L283.75 248.09C284.126 248.465 284.337 248.974 284.337 249.505C284.337 250.036 284.126 250.545 283.75 250.92L250.78 283.9Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as default
};
