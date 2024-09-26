import { defineComponent as o, computed as n, openBlock as C, createElementBlock as a, normalizeClass as r, normalizeStyle as s, createElementVNode as L } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIMapOutline",
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
    return (c, t) => (C(), a("svg", {
      class: r(i.value),
      style: s(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      L("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M160.535 38.4237C160.842 38.218 161.155 38.023 161.475 37.839L161.96 37.5714C175.656 30.3155 192.014 30.12 205.88 37.0464C206.385 37.2988 206.877 37.5779 207.353 37.8823L321.044 110.619L321.145 110.665C325.349 112.502 330.143 112.444 334.303 110.508L334.496 110.413L431.775 47.0249C432.044 46.8495 432.318 46.6822 432.598 46.5234L433.02 46.2914C442.939 41.0367 454.886 41.3635 464.503 47.1525C474.12 52.9414 480 63.3456 480 74.57V370.29C480 381.777 473.846 392.345 463.946 398.033L463.593 398.231L348.734 473.797C348.427 473.998 348.114 474.189 347.795 474.369L347.311 474.631C342.314 477.225 336.973 478.884 331.536 479.608C330.398 479.865 329.215 480 328 480C327.754 480 327.509 479.994 327.266 479.983C319.111 480.335 310.885 478.607 303.406 474.796C302.898 474.537 302.403 474.251 301.926 473.939L190.911 401.491L190.83 401.454C186.588 399.554 181.726 399.593 177.516 401.562L177.331 401.65L80.2297 464.972C79.9596 465.148 79.6842 465.316 79.404 465.476L78.98 465.709C69.0609 470.963 57.1137 470.637 47.4967 464.847C37.88 459.059 32 448.654 32 437.43V141.63C32 130.241 38.0478 119.748 47.814 114.024L48.165 113.82L160.535 38.4237ZM446.576 371.123L344 438.606V141.096C346.041 140.351 348.042 139.464 349.99 138.434L350.416 138.2C350.697 138.04 350.974 137.872 351.245 137.695L448 74.646V370.288L447.516 370.55C447.196 370.73 446.883 370.922 446.576 371.123ZM306.13 138.959C308.044 139.913 310.005 140.732 312 141.415V442.301L207.554 374.141C207.075 373.828 206.579 373.541 206.069 373.282C204.093 372.275 202.065 371.415 200 370.699V71.1664L304.647 138.118C305.126 138.424 305.621 138.705 306.13 138.959ZM168 71.9499L65.4248 140.776C65.1182 140.982 64.8047 141.177 64.4847 141.361L64 141.629V437.352L160.57 374.378C160.84 374.202 161.116 374.034 161.396 373.874L161.819 373.642C163.828 372.578 165.894 371.665 168 370.905V71.9499Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as default
};
