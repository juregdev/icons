import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TITrashBinFill",
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
        d: "M64 48C46.3269 48 32 62.3269 32 80V96C32 113.673 46.3269 128 64 128H448C465.673 128 480 113.673 480 96V80C480 62.3269 465.673 48 448 48H64ZM74.45 160C72.1763 159.988 70.0048 160.944 68.4782 162.629C66.9516 164.314 66.2141 166.569 66.45 168.83L92.76 421.39C92.7546 421.463 92.7546 421.537 92.76 421.61C95.6055 445.79 116.103 464.01 140.45 464H371.54C395.879 463.999 416.365 445.782 419.21 421.61V421.4L445.48 168.83C445.716 166.569 444.978 164.314 443.452 162.629C441.925 160.944 439.754 159.988 437.48 160H74.45ZM323.31 340.69C327.45 344.712 329.102 350.652 327.634 356.235C326.166 361.817 321.805 366.176 316.223 367.641C310.64 369.107 304.7 367.452 300.68 363.31L256 318.63L211.31 363.31C205.038 369.404 195.034 369.333 188.849 363.151C182.664 356.968 182.589 346.965 188.68 340.69L233.37 296L188.68 251.31C182.589 245.035 182.664 235.032 188.849 228.849C195.034 222.667 205.038 222.596 211.31 228.69L256 273.37L300.68 228.69C306.952 222.596 316.956 222.667 323.141 228.849C329.326 235.032 329.401 245.035 323.31 251.31L278.62 296L323.31 340.69Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
