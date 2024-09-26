import { defineComponent as a, computed as r, openBlock as n, createElementBlock as s, normalizeClass as c, normalizeStyle as d, createElementVNode as o } from "vue";
const L = /* @__PURE__ */ a({
  __name: "TILogoCapacitor",
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
    const t = e, i = r(() => [
      "icon",
      t.size,
      {
        [t.type]: t.type && !t.color,
        "is-clickable": t.clickable
      }
    ]);
    return (p, l) => (n(), s("svg", {
      class: c(i.value),
      style: d(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, l[0] || (l[0] = [
      o("path", {
        d: "M372.37 208.72L480 101.09L410.67 32L303.07 139.42L196 32.54L126.71 101.85L409.93 385.08L479.23 315.78L372.37 208.72Z",
        fill: "currentColor"
      }, null, -1),
      o("path", {
        d: "M101.85 126.69L32.55 196L139.42 303.06L32 410.67L101.08 480L208.77 372.36L315.77 479.23L385.07 409.93L101.85 126.69Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  L as default
};
