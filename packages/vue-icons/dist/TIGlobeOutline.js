import { defineComponent as i, computed as o, openBlock as n, createElementBlock as r, normalizeClass as s, normalizeStyle as a, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ i({
  __name: "TIGlobeOutline",
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
    const l = e, t = o(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, C) => (n(), r("svg", {
      class: s(t.value),
      style: a(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, C[0] || (C[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M256 32C132.293 32 32 132.293 32 256C32 379.707 132.293 480 256 480C379.707 480 480 379.707 480 256C480 132.293 379.707 32 256 32ZM176.448 81.2061C160.689 88.3907 146.07 97.644 132.941 108.619C139.75 113.089 146.828 117.172 154.139 120.853C160.626 106.157 168.124 92.8198 176.448 81.2061ZM64.6573 240C68.0569 198.798 84.4678 161.283 109.771 131.575C120.256 138.884 131.325 145.368 142.872 150.979C134.384 178.109 129.033 208.344 127.673 240H64.6573ZM64.6573 272C68.0569 313.202 84.4678 350.717 109.771 380.425C120.256 373.116 131.325 366.632 142.872 361.021C134.384 333.891 129.033 303.656 127.673 272H64.6573ZM159.703 272C160.969 299.155 165.432 325.262 172.569 348.872C194.04 341.644 216.706 337.206 240 335.809V272H159.703ZM272 272V335.809C295.294 337.206 317.96 341.644 339.431 348.872C346.568 325.262 351.031 299.155 352.297 272H272ZM352.297 240H272V176.191C295.294 174.794 317.96 170.356 339.431 163.128C346.568 186.738 351.031 212.845 352.297 240ZM384.327 272C382.967 303.656 377.616 333.891 369.128 361.021C380.675 366.632 391.744 373.116 402.229 380.425C427.532 350.717 443.943 313.202 447.343 272H384.327ZM447.343 240H384.327C382.967 208.344 377.616 178.109 369.128 150.979C380.675 145.368 391.744 138.884 402.229 131.575C427.532 161.283 443.943 198.798 447.343 240ZM240 240H159.703C160.969 212.845 165.432 186.738 172.569 163.128C194.04 170.356 216.706 174.794 240 176.191V240ZM132.941 403.381C146.07 414.356 160.689 423.609 176.448 430.794C168.124 419.18 160.626 405.843 154.139 391.147C146.828 394.828 139.75 398.911 132.941 403.381ZM183.692 378.894C186.244 384.605 188.976 390.086 191.876 395.307C206.149 421.003 223.19 437.997 240 444.734V367.874C220.545 369.202 201.633 372.941 183.692 378.894ZM320.124 395.307C305.851 421.003 288.81 437.997 272 444.734V367.874C291.455 369.202 310.367 372.941 328.308 378.894C325.756 384.605 323.024 390.086 320.124 395.307ZM328.308 133.106C310.367 139.059 291.455 142.798 272 144.126V67.2658C288.81 74.0031 305.851 90.9973 320.124 116.693C323.024 121.914 325.756 127.395 328.308 133.106ZM240 144.126V67.2658C223.19 74.0031 206.149 90.9973 191.876 116.693C188.976 121.914 186.244 127.395 183.692 133.106C201.633 139.059 220.545 142.798 240 144.126ZM357.861 391.147C351.374 405.843 343.876 419.18 335.552 430.794C351.311 423.609 365.93 414.356 379.059 403.381C372.25 398.911 365.172 394.828 357.861 391.147ZM357.861 120.853C365.172 117.172 372.25 113.089 379.059 108.619C365.93 97.644 351.311 88.3907 335.552 81.2061C343.876 92.8198 351.374 106.157 357.861 120.853Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
