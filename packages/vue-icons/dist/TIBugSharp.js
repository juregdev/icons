import { defineComponent as o, computed as r, openBlock as a, createElementBlock as n, normalizeClass as s, normalizeStyle as c, createElementVNode as d } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIBugSharp",
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
    return (C, t) => (a(), n("svg", {
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
        d: "M160 116C160 32 207.94 32 256 32C304.06 32 352 32 352 116C346.05 112.71 332.14 107 321.39 104C302.09 98.65 280.09 96 256 96C219.35 96 186.12 102 160 116ZM480 272.13V304.13L400 304C400 323 396.3 357.09 389.61 373.69C415.4 396.77 432 422.32 432 464V480H400V464C400 436.35 390.9 419.29 373.83 402.68C352 448 337 464 272 464V176H240V464C177 464 160 448 138.17 402.68C121.1 419.29 112 436.34 112 464V480H80V464C80 422.31 96.6 396.76 122.39 373.69C115.7 357.09 112 323 112 304L32 304.13V272.13H112V213.2C82.59 185.36 80 149.44 80 112V96H112V112C112 140.82 114 160.57 122.87 176.04C130.37 161.23 140.67 146.51 155.57 136.32C180.81 119.06 216.2 112 256 112C324.32 112 368 128 390.1 175.84C398.14 160.15 400 140 400 112V96H432V112C432 150.44 429.42 187.25 400 215.2V272.13H480Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
