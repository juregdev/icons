import { defineComponent as o, computed as a, openBlock as r, createElementBlock as n, normalizeClass as s, normalizeStyle as c, createElementVNode as d } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIHappySharp",
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
    return (C, t) => (r(), n("svg", {
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
        d: "M414.39 97.61C357.896 40.5575 275.188 18.1048 197.6 38.7581C120.011 59.4114 59.4112 120.012 38.7579 197.6C18.1045 275.188 40.5572 357.896 97.6097 414.39C154.103 471.443 236.811 493.895 314.4 473.242C391.988 452.589 452.588 391.988 473.242 314.4C493.895 236.812 471.442 154.104 414.39 97.61ZM328 208C341.255 208 352 218.745 352 232C352 245.255 341.255 256 328 256C314.745 256 304 245.255 304 232C303.984 225.63 306.507 219.516 311.012 215.012C315.516 210.507 321.63 207.984 328 208ZM184 208C197.255 208 208 218.745 208 232C208 245.255 197.255 256 184 256C170.745 256 160 245.255 160 232C159.984 225.63 162.507 219.516 167.012 215.012C171.516 210.507 177.63 207.984 184 208ZM256.05 384C210.63 384 172.3 354.51 160.33 314.17C159.29 310.65 158 304 158 304H354C354 304 352.69 310.69 351.67 314.17C339.89 354.53 301.47 384 256.05 384Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as default
};
