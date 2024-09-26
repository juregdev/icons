import { defineComponent as o, computed as s, openBlock as a, createElementBlock as n, normalizeClass as r, normalizeStyle as c, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TICellStyle",
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
    const t = e, i = s(() => [
      "icon",
      t.size,
      {
        [t.type]: t.type && !t.color,
        "is-clickable": t.clickable
      }
    ]);
    return (H, l) => (a(), n("svg", {
      class: r(i.value),
      style: c(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "513",
      viewBox: "0 0 512 513",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, l[0] || (l[0] = [
      d("path", {
        d: "M426.668 424.664L445.868 501.464L377.601 460.93L307.201 501.464L324.268 424.664L262.401 362.797H343.468L379.735 288.13L409.601 362.797H490.668L426.668 424.664ZM426.668 106.797H85.3346C61.868 106.797 42.668 125.997 42.668 149.464V362.797C42.668 386.264 61.868 405.464 85.3346 405.464H245.335L232.535 392.664L213.335 373.464H202.668V320.13H317.868L341.335 271.064V224.13H437.335V288.13H426.668L439.468 320.13H469.335V149.464C469.335 125.997 450.135 106.797 426.668 106.797ZM74.668 149.464C74.668 143.064 78.9346 138.797 83.2013 138.797C83.2013 138.797 83.2013 138.797 85.3346 138.797H170.668V192.13H74.668V149.464ZM74.668 224.13H170.668V288.13H74.668V224.13ZM85.3346 373.464C78.9346 373.464 74.668 369.197 74.668 364.93C74.668 364.93 74.668 364.93 74.668 362.797V320.13H170.668V373.464H85.3346ZM309.335 192.13H202.668V138.797H309.335V192.13ZM437.335 192.13H341.335V138.797H426.668C433.068 138.797 437.335 143.064 437.335 147.33C437.335 147.33 437.335 147.33 437.335 149.464V192.13Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as default
};
