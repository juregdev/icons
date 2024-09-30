import { defineComponent as o, computed as r, openBlock as n, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIShareFill",
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
    return (p, t) => (n(), s("svg", {
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
        d: "M324.69 139.31L272 86.63V176H240V86.63L187.31 139.31C181.019 145.286 171.112 145.16 164.976 139.024C158.84 132.889 158.714 122.981 164.69 116.69L244.69 36.69C250.938 30.4466 261.062 30.4466 267.31 36.69L347.31 116.69C353.286 122.981 353.16 132.889 347.024 139.024C340.888 145.16 330.981 145.286 324.69 139.31ZM240 176H136C105.086 176.033 80.0331 201.086 80 232V424C80.0331 454.914 105.086 479.967 136 480H376C406.914 479.967 431.967 454.914 432 424V232C431.967 201.086 406.914 176.033 376 176H272V321C272 329.837 264.837 337 256 337C247.163 337 240 329.837 240 321V176Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
