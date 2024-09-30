import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIWalletOutline",
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
    return (C, t) => (r(), s("svg", {
      class: a(i.value),
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
        d: "M351.635 49.0659C370.755 45.6139 390.439 50.762 405.427 63.1593C420.418 75.5595 429.166 93.9345 429.357 113.373L429.36 114V129.005C459.287 134.366 482 160.531 482 192V384C482 419.346 453.346 448 418 448H98C62.6538 448 34 419.346 34 384L34 208L34 159.011C33.9785 127.307 56.5019 100.068 87.6448 94.1328L87.9481 94.078L351.145 49.156L351.635 49.0659ZM397.36 114.005V128H98C92.5754 128 87.3084 128.675 82.2784 129.945C85.5575 127.941 89.219 126.47 93.1553 125.662L93.557 125.582L356.844 80.6452L357.51 80.5231C367.3 78.8129 377.359 81.4717 385.031 87.8171C392.837 94.2738 397.357 103.875 397.36 114.005ZM418 160H98C80.3269 160 66 174.327 66 192V384C66 401.673 80.3269 416 98 416H418C435.673 416 450 401.673 450 384V192C450 174.327 435.673 160 418 160ZM338 288C338 305.673 352.327 320 370 320C387.673 320 402 305.673 402 288C402 270.327 387.673 256 370 256C352.327 256 338 270.327 338 288Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
