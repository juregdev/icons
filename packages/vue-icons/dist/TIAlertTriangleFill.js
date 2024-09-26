import { defineComponent as o, computed as r, openBlock as n, createElementBlock as a, normalizeClass as s, normalizeStyle as c, createElementVNode as d } from "vue";
const f = /* @__PURE__ */ o({
  __name: "TIAlertTriangleFill",
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
    return (u, t) => (n(), a("svg", {
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
        d: "M277.867 90.3684C268.346 73.8772 244.543 73.8772 235.022 90.3684L74.351 368.658C64.8298 385.149 76.7313 405.763 95.7737 405.763H417.115C436.157 405.763 448.059 385.149 438.538 368.658L277.867 90.3684ZM255.318 142.836C245.175 143.007 236.461 151.527 236.965 161.81L236.972 161.917L241.632 287.731L241.636 287.953C241.868 295.242 247.678 301.148 254.977 301.485L255.341 301.497L255.629 301.5L255.861 301.498C263.409 301.376 269.505 295.28 269.627 287.732L274.284 161.973C274.895 151.512 265.959 142.833 255.629 142.833L255.318 142.836ZM255.629 329.5C245.32 329.5 236.962 337.857 236.962 348.167C236.962 358.476 245.32 366.833 255.629 366.833C265.938 366.833 274.296 358.476 274.296 348.167C274.296 337.857 265.938 329.5 255.629 329.5Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  f as default
};
