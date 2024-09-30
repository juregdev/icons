import { defineComponent as C, computed as o, openBlock as r, createElementBlock as s, normalizeClass as n, normalizeStyle as a, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ C({
  __name: "TIHarvestFill",
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
    const l = e, i = o(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (r(), s("svg", {
      class: n(i.value),
      style: a(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M256 32.0215C255.71 32.0072 255.418 32 255.125 32C245.459 32 237.625 39.8348 237.625 49.5V67H158.875V49.5C158.875 39.8348 151.04 32 141.375 32C131.71 32 123.875 39.8348 123.875 49.5V67H102C63.4019 67 32 98.402 32 137V410C32 448.598 63.4019 480 102 480H410C448.598 480 480 448.598 480 410V137C480 98.402 448.598 67 410 67H388.125V49.5C388.125 39.8348 380.29 32 370.625 32C360.96 32 353.125 39.8348 353.125 49.5V67H274.375V49.5C274.375 39.8348 266.541 32 256.875 32C256.582 32 256.29 32.0072 256 32.0215ZM239.572 445V340.809C201.221 337.875 170.751 324.405 148.844 300.644C109.822 258.323 113.622 199.313 113.803 196.821L114.838 182.557L128.988 181.513C131.46 181.332 189.993 177.498 231.976 216.839C241.746 225.994 249.754 236.638 255.999 248.71C262.245 236.638 270.253 225.994 280.023 216.839C322.007 177.499 380.541 181.332 383.011 181.513L397.161 182.557L398.196 196.821C398.377 199.313 402.177 258.323 363.155 300.644C341.248 324.405 310.778 337.876 272.427 340.809V445H410C429.299 445 445 429.299 445 410V137C445 117.701 429.299 102 410 102H388.125V119.5C388.125 129.165 380.29 137 370.625 137C360.96 137 353.125 129.165 353.125 119.5V102H274.375V119.5C274.375 129.165 266.541 137 256.875 137C256.582 137 256.29 136.993 256 136.978C255.71 136.993 255.418 137 255.125 137C245.459 137 237.625 129.165 237.625 119.5V102H158.875V119.5C158.875 129.165 151.04 137 141.375 137C131.71 137 123.875 129.165 123.875 119.5V102H102C82.7009 102 66.9999 117.701 66.9999 137V410C66.9999 429.299 82.7009 445 102 445H239.572ZM302.196 241.283C322.195 222.42 348.464 216.735 364.946 215.096C363.369 231.599 357.79 257.814 339.09 278.095C323.623 294.871 301.518 304.726 273.231 307.494C275.963 279.089 285.674 256.865 302.196 241.283ZM173.092 278.292C154.38 258.13 148.741 231.649 147.115 215.034C163.486 216.622 189.49 222.246 209.608 241.098C226.249 256.691 236.025 278.975 238.77 307.492C210.594 304.736 188.549 294.947 173.092 278.292Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
