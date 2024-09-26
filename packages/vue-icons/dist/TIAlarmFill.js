import { defineComponent as o, computed as C, openBlock as r, createElementBlock as a, normalizeClass as n, normalizeStyle as s, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIAlarmFill",
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
    return (d, t) => (r(), a("svg", {
      class: n(i.value),
      style: s(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M153.59 110.46C157.841 106.254 160.138 100.463 159.927 94.4868C159.717 88.5111 157.016 82.8959 152.48 79C141.189 69.3637 126.844 64.0482 112 64L108.73 64.09H108.25C74.4005 66.15 48.0005 95.55 48.0705 131C48.0705 149.872 55.9631 159.924 62.2626 167.947L62.3905 168.11C65.9763 172.661 71.3119 175.492 77.0905 175.91C77.1708 175.91 77.2683 175.915 77.4031 175.921H77.4031H77.4033C77.7047 175.936 78.1924 175.96 79.0905 175.96C84.2849 175.952 89.2512 173.825 92.8405 170.07L153.59 110.46ZM403.79 64.11L400.52 64.01H400C385.143 64.0487 370.782 69.3648 359.48 79.01C354.951 82.9056 352.255 88.5165 352.044 94.4871C351.833 100.458 354.127 106.245 358.37 110.45L419.14 170.1C422.738 173.869 427.721 176.001 432.93 176C434.21 176 434.65 176 434.93 175.95C440.705 175.529 446.037 172.698 449.62 168.15C455.98 160.1 463.9 150.07 463.94 131.04C464 95.55 437.6 66.15 403.79 64.11ZM256.07 96C159.07 96 80.0704 174.95 80.0704 272C80.0361 313.148 94.4833 352.995 120.88 384.56L84.7605 420.69C80.6207 424.712 78.9683 430.652 80.4362 436.235C81.9042 441.817 86.265 446.176 91.8478 447.641C97.4306 449.107 103.37 447.452 107.39 443.31L143.51 407.19C208.686 461.605 303.455 461.605 368.63 407.19L404.76 443.31C408.781 447.452 414.72 449.107 420.303 447.641C425.886 446.176 430.247 441.817 431.715 436.235C433.183 430.652 431.53 424.712 427.39 420.69L391.26 384.56C417.662 352.998 432.11 313.149 432.07 272C432.07 175 353.12 96 256.07 96ZM272.07 272C272.07 280.837 264.907 288 256.07 288H176.07C167.234 288 160.07 280.837 160.07 272C160.07 263.163 167.234 256 176.07 256H240.07V160C240.07 151.163 247.234 144 256.07 144C264.907 144 272.07 151.163 272.07 160V272Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
