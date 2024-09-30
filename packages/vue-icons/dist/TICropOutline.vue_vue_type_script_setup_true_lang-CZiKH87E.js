import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TICropOutline",
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
        d: "M159.997 47.6851C159.829 38.9939 152.731 32 144 32C135.163 32 128 39.1634 128 48V128H48L47.6851 128.003C38.9939 128.171 32 135.269 32 144C32 152.837 39.1634 160 48 160H128V320L128.009 321.058C128.574 355.916 157.007 384 192 384H352V464L352.003 464.315C352.171 473.006 359.269 480 368 480C376.837 480 384 472.837 384 464V384H464L464.315 383.997C473.006 383.829 480 376.731 480 368C480 359.163 472.837 352 464 352H368H192L191.471 351.996C174.042 351.713 160 337.496 160 320V144V48L159.997 47.6851ZM383.991 190.942C383.426 156.084 354.993 128 320 128H208L207.685 128.003C198.994 128.171 192 135.269 192 144C192 152.837 199.163 160 208 160H320L320.529 160.004C337.958 160.287 352 174.504 352 192V304L352.003 304.315C352.171 313.006 359.269 320 368 320C376.837 320 384 312.837 384 304V192L383.991 190.942Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
