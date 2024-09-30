import { defineComponent as o, computed as C, openBlock as s, createElementBlock as r, normalizeClass as a, normalizeStyle as n, createElementVNode as c } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TITextMore",
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
    const t = e, i = C(() => [
      "icon",
      t.size,
      {
        [t.type]: t.type && !t.color,
        "is-clickable": t.clickable
      }
    ]);
    return (d, l) => (s(), r("svg", {
      class: a(i.value),
      style: n(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, l[0] || (l[0] = [
      c("path", {
        d: "M289.083 405.333H331.75L225.083 106.667H182.417L75.75 405.333H118.417L148.283 320H257.083L289.083 405.333ZM163.217 277.333L203.75 166.4L244.283 277.333H163.217ZM436.283 373.333C436.283 379.662 434.407 385.849 430.89 391.112C427.374 396.374 422.376 400.476 416.529 402.898C410.682 405.32 404.248 405.953 398.04 404.719C391.833 403.484 386.131 400.436 381.656 395.961C377.181 391.486 374.133 385.784 372.898 379.576C371.663 373.369 372.297 366.935 374.719 361.088C377.141 355.24 381.243 350.243 386.505 346.726C391.767 343.21 397.954 341.333 404.283 341.333C412.77 341.333 420.91 344.705 426.911 350.706C432.912 356.707 436.283 364.846 436.283 373.333ZM436.283 288C436.283 294.329 434.407 300.516 430.89 305.778C427.374 311.041 422.376 315.142 416.529 317.564C410.682 319.986 404.248 320.62 398.04 319.385C391.833 318.15 386.131 315.103 381.656 310.628C377.181 306.152 374.133 300.45 372.898 294.243C371.663 288.036 372.297 281.601 374.719 275.754C377.141 269.907 381.243 264.909 386.505 261.393C391.767 257.877 397.954 256 404.283 256C412.77 256 420.91 259.372 426.911 265.373C432.912 271.374 436.283 279.513 436.283 288ZM436.283 202.667C436.283 208.996 434.407 215.183 430.89 220.445C427.374 225.707 422.376 229.809 416.529 232.231C410.682 234.653 404.248 235.287 398.04 234.052C391.833 232.817 386.131 229.769 381.656 225.294C377.181 220.819 374.133 215.117 372.898 208.91C371.663 202.702 372.297 196.268 374.719 190.421C377.141 184.574 381.243 179.576 386.505 176.06C391.767 172.544 397.954 170.667 404.283 170.667C412.77 170.667 420.91 174.038 426.911 180.039C432.912 186.04 436.283 194.18 436.283 202.667Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
