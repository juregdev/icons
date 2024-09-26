import { defineComponent as o, computed as r, openBlock as a, createElementBlock as n, normalizeClass as s, normalizeStyle as L, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIVolumeHighSharp",
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
    return (d, t) => (a(), n("svg", {
      class: s(i.value),
      style: L(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M32 176.1H125.65L256 72V440L125.65 335.9H32V176.1ZM420.878 73.9047L429.487 87.3914C464.751 142.639 480 189.871 480 256C480 321.841 464.702 370.117 430.446 423.132L429.402 424.74L420.661 438.142L393.858 420.661L402.598 407.26C434.319 358.621 448 316.038 448 256C448 196.91 434.912 155.779 403.472 106.116L402.513 104.609L393.905 91.1218L420.878 73.9047ZM381.818 135.934L373.751 122.116L346.116 138.249L354.182 152.066L354.826 153.173C375.941 189.591 384 215.962 384 256C384 295.958 375.695 322.473 354.125 360.032L346.157 373.907L373.907 389.843L381.875 375.968L382.595 374.709C406.237 333.254 416 301.628 416 256C416 209.435 406.099 177.528 381.818 135.934ZM334.249 184.723L326.972 170.473L298.473 185.028L305.751 199.277L306.221 200.205C315.383 218.442 320 236.593 320 256C320 275.248 315.068 294.184 305.704 312.815L298.519 327.111L327.111 341.481L334.296 327.185L334.8 326.174C345.985 303.588 352 280.139 352 256C352 231.001 345.945 207.623 334.249 184.723Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
