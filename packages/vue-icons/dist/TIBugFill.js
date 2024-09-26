import { defineComponent as i, computed as o, openBlock as n, createElementBlock as r, normalizeClass as s, normalizeStyle as a, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ i({
  __name: "TIBugFill",
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
        d: "M321.711 104.09L321.391 104C302.091 98.65 280.091 95.93 256.001 95.93C232.231 95.93 210.151 98.99 190.441 104.99C176.741 109.13 164.761 94.71 171.601 82.13C188.36 51.2577 220.662 32.0238 255.791 32H256.211C290.975 32.0217 323.003 50.8636 339.911 81.24C346.781 93.54 335.281 107.89 321.711 104.09ZM400.001 272.13H463.551C472.16 272.13 479.581 278.75 480.001 287.36C480.211 291.735 478.619 296.006 475.595 299.175C472.572 302.344 468.381 304.135 464.001 304.13H400.001V320C400.015 338.398 396.488 356.626 389.611 373.69C415.401 396.77 432.001 422.32 432.001 464C432.008 468.406 430.198 472.62 426.997 475.648C423.797 478.676 419.489 480.251 415.091 480C406.526 479.383 399.916 472.216 399.991 463.63C399.911 436.2 390.821 419.22 373.821 402.68C354.137 430.695 325.138 450.805 292.001 459.42C287.209 460.657 282.115 459.608 278.203 456.578C274.291 453.548 272.001 448.878 272.001 443.93V192C272 187.623 270.207 183.438 267.038 180.418C263.869 177.399 259.602 175.809 255.231 176.02C246.621 176.45 240.001 183.84 240.001 192.45V443.93C240 448.878 237.71 453.548 233.798 456.578C229.886 459.608 224.792 460.657 220.001 459.42C186.858 450.81 157.855 430.699 138.171 402.68C121.101 419.29 112.001 436.34 112.001 464C112.001 468.355 110.227 472.522 107.087 475.54C103.946 478.557 99.712 480.164 95.3605 479.99C86.6205 479.64 80.0005 472.08 80.0005 463.34C80.1805 422 96.7405 396.64 122.411 373.69C115.533 356.626 112.006 338.398 112.021 320V304.13H48.0205C43.6402 304.135 39.4494 302.344 36.4256 299.175C33.4019 296.006 31.8097 291.735 32.0205 287.36C32.4505 278.75 39.8405 272.13 48.4505 272.13H112.001V223.93C112.007 220.437 112.154 217.003 112.441 213.63C82.6105 185.73 80.0005 149.63 80.0005 112C80.0005 107.618 81.798 103.427 84.9733 100.407C88.1486 97.3866 92.4237 95.8009 96.8005 96.02C105.401 96.46 112.001 103.85 112.001 112.46C112.001 141 114.001 160.65 122.871 176.04C130.371 161.23 141.671 148.51 156.571 138.32C181.811 121.06 216.201 111.93 256.001 111.93C324.321 111.93 370.881 134.69 390.101 175.84C398.141 160.15 400.001 140 400.001 112C400.009 107.632 401.804 103.458 404.967 100.445C408.13 97.4332 412.387 95.8452 416.751 96.05C425.361 96.46 432.001 103.85 432.001 112.46C431.981 150.83 429.301 187.58 399.73 215.46C399.91 218.227 400.001 221.05 400.001 223.93V272.13Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
