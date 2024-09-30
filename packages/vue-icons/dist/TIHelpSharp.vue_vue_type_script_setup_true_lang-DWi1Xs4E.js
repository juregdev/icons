import { defineComponent as o, computed as r, openBlock as n, createElementBlock as s, normalizeClass as a, normalizeStyle as C, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIHelpSharp",
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
    return (d, t) => (n(), s("svg", {
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
        d: "M310.277 76.8586C296.759 70.2682 276.801 66.743 255.754 67.0015C227.14 67.3921 201.748 74.8563 180.819 92.1068C163.928 106.03 152.692 120.611 146.321 135.632C141.542 146.898 140 156.527 140 167V187H180V167L180.003 166.411C180.054 161.148 180.808 156.76 183.144 151.253C186.917 142.359 194.185 132.928 206.261 122.973C219.343 112.19 236.067 107.274 256.273 106.998C271.53 106.811 285.496 109.277 292.716 112.797C302.827 117.749 311.465 123.628 318.339 131.21C327.187 140.97 332 152.505 332 167C332 183.608 327.387 195.969 317.897 207.362L317.654 207.652C309.96 216.816 300.964 224.044 280.91 237.913L277.203 240.47C240.68 265.805 228 285.663 228 319V339H268L268.002 318.397C268.061 308.828 269.556 302.971 273.159 297.422C277.591 290.599 286.015 282.952 300.982 272.66L303.207 271.126C326.307 255.171 337.298 246.385 347.958 233.765L348.631 232.963C364.021 214.487 372 193.107 372 167C372 142.161 363.252 121.197 347.974 104.345C337.179 92.4373 324.583 83.8655 310.277 76.8586ZM223.5 371C221.567 371 220 372.567 220 374.5V423.5C220 425.433 221.567 427 223.5 427H272.5C274.433 427 276 425.433 276 423.5V374.5C276 372.567 274.433 371 272.5 371H223.5Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
