import { defineComponent as o, computed as C, openBlock as n, createElementBlock as a, normalizeClass as r, normalizeStyle as s, createElementVNode as c } from "vue";
const V = /* @__PURE__ */ o({
  __name: "TIPhenologicalEvent",
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
    const l = e, i = C(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (n(), a("svg", {
      class: r(i.value),
      style: s(e.color ? `color: ${e.color} !important` : void 0),
      width: "513",
      height: "512",
      viewBox: "0 0 513 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M256.801 32.0215C256.511 32.0072 256.219 32 255.925 32C246.26 32 238.425 39.8348 238.425 49.5V67H159.676V49.5C159.676 39.8348 151.841 32 142.176 32C132.51 32 124.676 39.8348 124.676 49.5V67H102.801C64.2027 67 32.8008 98.402 32.8008 137V410C32.8008 448.598 64.2027 480 102.801 480H410.801C449.399 480 480.801 448.598 480.801 410V137C480.801 98.402 449.399 67 410.801 67H388.926V49.5C388.926 39.8348 381.091 32 371.426 32C361.761 32 353.926 39.8348 353.926 49.5V67H275.176V49.5C275.176 39.8348 267.341 32 257.676 32C257.383 32 257.091 32.0072 256.801 32.0215ZM240.373 445V340.809C202.022 337.875 171.552 324.405 149.645 300.644C110.623 258.323 114.423 199.313 114.604 196.821L115.639 182.557L129.788 181.513C132.26 181.332 190.794 177.498 232.777 216.839C242.547 225.994 250.555 236.638 256.8 248.71C263.046 236.638 271.054 225.994 280.824 216.839C322.808 177.499 381.341 181.332 383.812 181.513L397.962 182.557L398.997 196.821C399.177 199.313 402.978 258.323 363.955 300.644C342.049 324.405 311.579 337.876 273.228 340.809V445H410.801C430.1 445 445.801 429.299 445.801 410V137C445.801 117.701 430.1 102 410.801 102H388.926V119.5C388.926 129.165 381.091 137 371.426 137C361.761 137 353.926 129.165 353.926 119.5V102H275.176V119.5C275.176 129.165 267.341 137 257.676 137C257.383 137 257.091 136.993 256.801 136.978C256.511 136.993 256.219 137 255.925 137C246.26 137 238.425 129.165 238.425 119.5V102H159.676V119.5C159.676 129.165 151.841 137 142.176 137C132.51 137 124.676 129.165 124.676 119.5V102H102.801C83.5017 102 67.8007 117.701 67.8007 137V410C67.8007 429.299 83.5017 445 102.801 445H240.373ZM302.997 241.283C322.996 222.42 349.265 216.735 365.747 215.096C364.17 231.599 358.591 257.814 339.891 278.095C324.424 294.871 302.319 304.726 274.032 307.494C276.764 279.089 286.475 256.865 302.997 241.283ZM173.892 278.292C155.181 258.13 149.542 231.649 147.916 215.034C164.286 216.622 190.29 222.246 210.409 241.098C227.05 256.691 236.825 278.975 239.571 307.492C211.394 304.736 189.35 294.947 173.892 278.292Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  V as default
};
