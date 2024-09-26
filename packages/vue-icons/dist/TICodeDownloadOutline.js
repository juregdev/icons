import { defineComponent as i, computed as n, openBlock as a, createElementBlock as r, normalizeClass as s, normalizeStyle as d, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ i({
  __name: "TICodeDownloadOutline",
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
    const l = e, o = n(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (L, t) => (a(), r("svg", {
      class: s(o.value),
      style: d(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M172.041 133.464C166.222 126.814 156.114 126.14 149.464 131.959L21.4639 243.959L21.2038 244.192C14.1797 250.606 14.2665 261.744 21.4639 268.041L149.464 380.041L149.739 380.277C156.39 385.841 166.302 385.095 172.041 378.536L172.277 378.261C177.841 371.61 177.095 361.698 170.536 355.959L56.298 256L170.536 156.041L170.806 155.8C177.204 149.946 177.78 140.023 172.041 133.464ZM362.261 131.724C355.61 126.16 345.698 126.905 339.959 133.464L339.723 133.739C334.159 140.39 334.905 150.302 341.464 156.041L455.701 256L341.464 355.959L341.194 356.201C334.797 362.054 334.22 371.977 339.959 378.536C345.778 385.186 355.886 385.86 362.536 380.041L490.536 268.041L490.796 267.809C497.82 261.395 497.734 250.257 490.536 243.959L362.536 131.959L362.261 131.724ZM308.695 276.778C314.948 270.534 325.079 270.542 331.323 276.795C337.479 282.962 337.557 292.899 331.562 299.16L331.305 299.423L267.305 363.323C261.145 369.473 251.222 369.558 244.958 363.579L244.695 363.323L180.695 299.423C174.442 293.179 174.434 283.049 180.677 276.795C186.834 270.629 196.771 270.536 203.042 276.521L203.305 276.778L240 313.416V160C240 151.164 247.163 144 256 144C264.731 144 271.829 150.994 271.997 159.685L272 160V313.415L308.695 276.778Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as default
};
