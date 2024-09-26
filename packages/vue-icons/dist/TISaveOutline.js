import { defineComponent as o, computed as n, openBlock as a, createElementBlock as r, normalizeClass as s, normalizeStyle as C, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TISaveOutline",
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
    return (d, t) => (a(), r("svg", {
      class: s(i.value),
      style: C(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M358.3 32C370.829 32 382.852 36.8955 391.813 45.6306L392.244 46.0563L465.945 119.758C474.802 128.617 479.839 140.582 479.996 153.094L480 153.7L480 417.828C479.898 451.779 452.674 479.34 418.808 479.989L417.78 480H94.22C77.716 480 61.889 473.447 50.2209 461.779C38.7063 450.265 32.1733 434.7 32.0034 418.431L32 417.78V94.22C32 77.716 38.5528 61.889 50.2209 50.2209C61.7354 38.7063 77.3002 32.1733 93.5689 32.0034L94.22 32H358.3ZM358.3 64H94.22C86.2011 64 78.5139 67.1827 72.8483 72.8483C67.3007 78.3959 64.1337 85.8817 64.0041 93.7193L64 94.22V417.78C64 425.799 67.1827 433.486 72.8483 439.152C78.3959 444.699 85.8817 447.866 93.7193 447.996L94.22 448L417.732 448C434.261 447.95 447.679 434.697 447.994 418.278L448 417.78V153.7C448 149.59 446.422 145.646 443.602 142.677L443.316 142.384L369.618 68.685C366.714 65.7821 362.808 64.1101 358.71 64.0052L358.3 64ZM256 272C300.183 272 336 307.817 336 351.98C336.027 373.211 327.604 393.58 312.592 408.592C297.58 423.604 277.211 432.027 256 432C211.817 432 176 396.183 176 352C176 307.817 211.817 272 256 272ZM256 304C229.49 304 208 325.49 208 352C208 378.51 229.49 400 256.02 400C268.75 400.016 280.963 394.966 289.965 385.965C298.966 376.963 304.016 364.75 304 352C304 325.49 282.51 304 256 304ZM304 80C321.496 80 335.713 94.0418 335.996 111.471L336 112V176C336 193.496 321.958 207.713 304.529 207.996L304 208H112C94.5036 208 80.2869 193.958 80.0043 176.529L80 176V112C80 94.5036 94.0418 80.2869 111.471 80.0043L112 80H304ZM304 112H112V176H304V112Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
