import { defineComponent as r, computed as n, openBlock as s, createElementBlock as a, normalizeClass as d, normalizeStyle as c, createElementVNode as i } from "vue";
const f = /* @__PURE__ */ r({
  __name: "TISideBySideFill",
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
    const l = e, o = n(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (u, t) => (s(), a("svg", {
      class: d(o.value),
      style: c(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      i("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M416 48H96C60.6538 48 32 76.6538 32 112V400C32 435.346 60.6538 464 96 464H416C451.346 464 480 435.346 480 400V112C480 76.6538 451.346 48 416 48ZM448 176C448 160 432 144 416 144H96C80 144 64 160 64 176V400C64 417.673 78.3269 432 96 432H416C433.673 432 448 417.673 448 400V176Z",
        fill: "currentColor"
      }, null, -1),
      i("path", {
        d: "M240 144H272V440H240V144Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as _
};
