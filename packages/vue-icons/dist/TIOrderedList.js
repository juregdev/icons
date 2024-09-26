import { defineComponent as o, computed as s, openBlock as r, createElementBlock as a, normalizeClass as n, normalizeStyle as c, createElementVNode as d } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIOrderedList",
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
    return (V, l) => (r(), a("svg", {
      class: n(i.value),
      style: c(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "516",
      viewBox: "0 0 512 516",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, l[0] || (l[0] = [
      d("path", {
        d: "M53.3359 343.971H96.0026V354.696H74.6693V376.145H96.0026V386.87H53.3359V408.319H117.336V322.522H53.3359V343.971ZM74.6693 193.826H96.0026V108.029H53.3359V129.479H74.6693V193.826ZM53.3359 236.725H91.7359L53.3359 281.768V301.073H117.336V279.624H78.9359L117.336 234.58V215.276H53.3359V236.725ZM160.003 129.479V172.377H458.669V129.479H160.003ZM160.003 386.87H458.669V343.971H160.003V386.87ZM160.003 279.624H458.669V236.725H160.003V279.624Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
