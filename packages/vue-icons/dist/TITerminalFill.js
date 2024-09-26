import { defineComponent as o, computed as n, openBlock as r, createElementBlock as a, normalizeClass as s, normalizeStyle as c, createElementVNode as d } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TITerminalFill",
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
    return (u, t) => (r(), a("svg", {
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
        d: "M432 32H80C44.6698 32.0386 16.0386 60.6698 16 96V416C16.0386 451.33 44.6698 479.961 80 480H432C467.33 479.961 495.961 451.33 496 416V96C495.961 60.6698 467.33 32.0386 432 32ZM96 256C89.2061 256 83.153 251.71 80.903 245.299C78.6529 238.889 80.6965 231.756 86 227.51L150.39 176L86 124.49C81.5342 120.917 79.3136 115.234 80.1747 109.58C81.0358 103.926 84.8478 99.1609 90.1747 97.0797C95.5016 94.9986 101.534 95.9173 106 99.49L186 163.49C189.8 166.526 192.013 171.126 192.013 175.99C192.013 180.854 189.8 185.454 186 188.49L106 252.49C103.162 254.762 99.6353 256 96 256ZM256 256H192C183.163 256 176 248.837 176 240C176 231.163 183.163 224 192 224H256C264.837 224 272 231.163 272 240C272 248.837 264.837 256 256 256Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
