import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as C, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIAtFill",
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
    return (d, t) => (r(), s("svg", {
      class: a(i.value),
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
        d: "M448.668 249.403C458.223 140.986 387.289 64.27 271.51 64.27C165.985 64.27 73.2919 149.439 64.0609 254.875C54.7321 361.427 133.903 448.27 240.49 448.27C275.925 448.27 295.995 444.911 324.229 433.246L325.968 432.521C334.114 429.098 337.944 419.719 334.521 411.572C331.098 403.426 321.719 399.596 313.572 403.019C289.397 413.177 273.618 416.095 243.369 416.262L240.49 416.27C152.715 416.27 88.2444 345.552 95.939 257.665C103.725 168.739 182.596 96.27 271.51 96.27C368.578 96.27 424.691 156.958 416.792 246.595C414.248 275.486 404.682 296.059 390.661 308.565C380.197 317.898 367.849 321.807 359.432 320.316C342.711 317.351 332.375 301.96 334.838 273.973L343.318 177.724L343.343 177.407C343.937 168.736 337.481 161.148 328.784 160.382C319.982 159.606 312.217 166.113 311.442 174.916L310.644 183.974C296.025 169.257 276.137 160.27 253.55 160.27C204.849 160.27 164.694 202.252 160.062 254.867C155.342 308.466 189.517 352.27 239.45 352.27C268.133 352.27 293.407 340.381 310.961 319.932C319.664 337.061 334.647 348.42 353.847 351.824C372.292 355.093 394.426 348.086 411.961 332.445C432.335 314.273 445.438 286.094 448.668 249.403ZM253.55 192.27C284.213 192.27 307.147 219.881 304.062 254.865C300.496 295.277 273.859 320.27 239.45 320.27C209.559 320.27 188.773 293.627 191.938 257.673C195.19 220.741 222.422 192.27 253.55 192.27Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
