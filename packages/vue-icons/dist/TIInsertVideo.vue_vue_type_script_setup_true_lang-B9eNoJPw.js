import { defineComponent as o, computed as s, openBlock as n, createElementBlock as r, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIInsertVideo",
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
    return (C, l) => (n(), r("svg", {
      class: a(i.value),
      style: c(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "513",
      viewBox: "0 0 512 513",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, l[0] || (l[0] = [
      d("path", {
        d: "M320 171.232V341.899H106.667V171.232H320ZM362.667 224.565V149.899C362.667 144.241 360.419 138.814 356.418 134.814C352.418 130.813 346.991 128.565 341.333 128.565H85.3333C79.6754 128.565 74.2492 130.813 70.2484 134.814C66.2476 138.814 64 144.241 64 149.899V363.232C64 368.89 66.2476 374.316 70.2484 378.317C74.2492 382.318 79.6754 384.565 85.3333 384.565H341.333C346.991 384.565 352.418 382.318 356.418 378.317C360.419 374.316 362.667 368.89 362.667 363.232V288.565L411.52 337.419C414.504 340.427 418.316 342.479 422.471 343.312C426.625 344.146 430.934 343.723 434.848 342.098C438.761 340.474 442.102 337.72 444.444 334.189C446.787 330.658 448.025 326.509 448 322.272V190.645C448.025 186.408 446.787 182.259 444.444 178.728C442.102 175.197 438.761 172.443 434.848 170.819C430.934 169.194 426.625 168.771 422.471 169.605C418.316 170.438 414.504 172.49 411.52 175.499L362.667 224.565Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
