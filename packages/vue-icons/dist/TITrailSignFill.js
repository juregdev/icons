import { defineComponent as o, computed as n, openBlock as r, createElementBlock as a, normalizeClass as s, normalizeStyle as c, createElementVNode as d } from "vue";
const C = /* @__PURE__ */ o({
  __name: "TITrailSignFill",
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
        d: "M491.31 324.69L432 265.37C426.011 259.35 417.862 255.976 409.37 256H272V224H416C433.674 224 448 209.673 448 192V96C448 78.3269 433.674 64 416 64H272V48C272 39.1634 264.837 32 256 32C247.164 32 240 39.1634 240 48V64H102.63C94.1386 63.9765 85.9901 67.3504 80.0004 73.37L20.6904 132.69C14.447 138.938 14.447 149.062 20.6904 155.31L80.0004 214.63C85.9901 220.65 94.1386 224.024 102.63 224H240V256H96.0004C78.3273 256 64.0004 270.327 64.0004 288V384C64.0004 401.673 78.3273 416 96.0004 416H240V464C240 472.837 247.164 480 256 480C264.837 480 272 472.837 272 464V416H409.37C417.862 416.023 426.011 412.65 432 406.63L491.31 347.31C497.554 341.062 497.554 330.938 491.31 324.69Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  C as default
};
