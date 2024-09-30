import { defineComponent as o, computed as C, openBlock as n, createElementBlock as r, normalizeClass as s, normalizeStyle as a, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TISyncCircleOutline",
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
    return (d, t) => (n(), r("svg", {
      class: s(i.value),
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
        d: "M256 48C141.163 48 48 141.163 48 256C48 370.837 141.163 464 256 464C370.837 464 464 370.837 464 256C464 141.163 370.837 48 256 48ZM256 80C353.163 80 432 158.837 432 256C432 353.163 353.163 432 256 432C158.837 432 80 353.163 80 256C80 158.837 158.837 80 256 80ZM367.021 242.842C373.159 238.583 381.615 239.111 387.179 244.427L387.441 244.684C393.604 250.844 393.692 260.781 387.703 267.049L387.446 267.311L363.856 290.911C357.794 296.976 348.049 297.171 341.751 291.416L341.48 291.162L316.81 267.562C310.424 261.453 310.2 251.325 316.308 244.94C321.125 239.905 328.44 238.701 334.449 241.41C329.373 214.334 310.576 191.339 284.193 181.292C253.201 169.491 218.143 177.994 196.001 202.683C190.102 209.261 179.986 209.811 173.407 203.911C166.829 198.012 166.279 187.896 172.179 181.317C203.16 146.772 252.216 134.874 295.581 151.387C334.845 166.339 362.102 201.787 367.021 242.842ZM124.821 267.573C130.304 272.811 138.593 273.401 144.707 269.342C149.68 310.385 176.963 345.802 216.236 360.731C259.656 377.236 308.756 365.284 339.733 330.67C345.626 324.085 345.065 313.97 338.48 308.077C331.895 302.184 321.78 302.745 315.887 309.33L315.219 310.068C293.042 334.243 258.334 342.499 227.606 330.819C201.115 320.749 182.256 297.639 177.226 270.439C183.295 273.342 190.788 272.186 195.692 267.06C201.8 260.675 201.576 250.547 195.19 244.438L170.52 220.838L170.249 220.584C163.951 214.829 154.206 215.024 148.144 221.089L124.554 244.689L124.297 244.951C118.308 251.219 118.396 261.156 124.559 267.316L124.821 267.573Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
