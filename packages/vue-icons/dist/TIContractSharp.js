import { defineComponent as o, computed as r, openBlock as a, createElementBlock as n, normalizeClass as s, normalizeStyle as c, createElementVNode as d } from "vue";
const f = /* @__PURE__ */ o({
  __name: "TIContractSharp",
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
    return (p, t) => (a(), n("svg", {
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
        d: "M79.9976 57.3726L57.373 80.0029L169.399 192H80.0005V224H224V80H192V169.347L79.9976 57.3726ZM432 320V288H288V432H320V342.653L432.003 454.627L454.628 431.997L342.602 320H432ZM320 169.398V80H288V224H432V192H342.654L454.628 79.9971L431.998 57.3726L320 169.398ZM224 288V432H192V342.602L80.0033 454.627L57.373 432.003L169.347 320H80.0005V288H224Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as default
};
