import { defineComponent as r, computed as a, openBlock as n, createElementBlock as C, normalizeClass as s, normalizeStyle as c, createElementVNode as t } from "vue";
const p = /* @__PURE__ */ r({
  __name: "TIMoveGrabber",
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
    const l = e, i = a(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, o) => (n(), C("svg", {
      class: s(i.value),
      style: c(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, o[0] || (o[0] = [
      t("path", {
        d: "M256.043 85.0002C252.178 84.9786 248.307 86.4414 245.359 89.3887C245.04 89.7077 244.738 90.0375 244.454 90.3769L197.391 137.421C191.536 143.272 191.536 152.76 197.391 158.611C203.244 164.463 212.736 164.463 218.59 158.611L241 136.21V187H70C61.7157 187 55 193.716 55 202C55 210.284 61.7157 217 70 217H442C450.284 217 457 210.284 457 202C457 193.716 450.284 187 442 187H271V136.21L293.41 158.611C299.264 164.463 308.755 164.463 314.609 158.611C320.464 152.759 320.464 143.272 314.609 137.421L267.544 90.3742C267.26 90.0358 266.959 89.707 266.641 89.3889C263.715 86.4635 259.879 85.0006 256.043 85.0002Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        d: "M256.043 427C252.178 427.021 248.307 425.559 245.359 422.611C245.04 422.292 244.738 421.963 244.454 421.623L197.391 374.579C191.536 368.728 191.536 359.24 197.391 353.389C203.244 347.537 212.736 347.537 218.59 353.389L241 375.79V325H70C61.7157 325 55 318.284 55 310C55 301.716 61.7157 295 70 295H442C450.284 295 457 301.716 457 310C457 318.284 450.284 325 442 325H271V375.79L293.41 353.389C299.264 347.537 308.755 347.537 314.609 353.389C320.464 359.241 320.464 368.728 314.609 374.579L267.544 421.626C267.26 421.964 266.959 422.293 266.641 422.611C263.715 425.537 259.879 426.999 256.043 427Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        d: "M70 241C61.7157 241 55 247.716 55 256C55 264.284 61.7157 271 70 271H442C450.284 271 457 264.284 457 256C457 247.716 450.284 241 442 241H70Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
