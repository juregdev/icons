import { defineComponent as o, computed as C, openBlock as n, createElementBlock as a, normalizeClass as r, normalizeStyle as s, createElementVNode as L } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIFlagOutline",
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
    return (c, t) => (n(), a("svg", {
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
        d: "M76.3866 47.1594C92.3516 37.9912 119.325 32 160 32C181.176 32 204.262 36.51 232.463 45.1457L235.109 45.963C244.384 48.8507 253.87 52.0549 266.756 56.5805L291.954 65.4272C305.765 70.2482 307.445 70.7107 315.713 73.158L317.387 73.6484C332.041 77.8998 343.297 80 351.958 80.0001C376.366 79.9367 400.517 75.0054 423.07 65.4633C428.632 63.1432 434.986 63.7603 439.997 67.1072C444.899 70.381 447.872 75.8354 447.996 81.6972L448 82.08L448 301.487C447.977 309.398 443.292 316.552 436.031 319.745L434.738 320.303C427.297 323.468 417.85 326.686 406.657 329.436C389.708 333.602 371.39 336 352 336C340.159 336 326.59 334.341 309.78 331.111L302.127 329.602C297.156 328.601 293.175 327.73 283.83 325.557L252.222 318.143C242.203 315.81 234.429 314.07 226.859 312.491L224.34 311.97L221.866 311.467C197.279 306.52 177.439 304 160 304C133.631 304 114.321 306.759 101.06 311.179C99.3631 311.744 97.8497 312.31 96.5096 312.868L96 313.082V464C96 472.731 89.0061 479.829 80.3149 479.997L80 480C71.2686 480 64.1708 473.006 64.003 464.315L64 464L64.0001 68.0835C64.0297 59.6818 68.4495 51.9186 75.6325 47.6001L76.0001 47.3835L76.3866 47.1594ZM160 64C139.759 64 123.485 65.6485 110.794 68.5105C104.698 69.8852 99.9016 71.4217 96.2758 72.9687L96 73.087V279.258L96.1416 279.218C112.062 274.689 132.749 272.073 158.892 272.002L160 272C180.221 272 202.363 274.851 229.414 280.346L232.77 281.035C241.884 282.929 251.12 285.012 263.786 287.984L291.792 294.554C303.145 297.19 306.025 297.764 313.838 299.301L315.697 299.662C330.739 302.556 342.507 304 352 304C368.704 304 384.478 301.935 399.02 298.361C405.188 296.845 410.663 295.183 415.361 293.515L416 293.285V102.117L415.943 102.135C395.708 108.477 374.608 111.809 353.305 111.993L352 112C339.284 112 324.799 109.22 306.631 103.842L304.293 103.142C298.003 101.238 291.236 99.0225 283.263 96.2853L278.143 94.5142L257.067 87.094C243.145 82.1981 233.373 78.9041 223.722 75.9363L223.093 75.7432C197.663 67.9562 177.413 64 160 64Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as default
};
