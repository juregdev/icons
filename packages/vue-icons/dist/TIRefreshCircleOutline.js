import { defineComponent as o, computed as r, openBlock as n, createElementBlock as s, normalizeClass as a, normalizeStyle as C, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIRefreshCircleOutline",
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
    const l = e, i = r(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (n(), s("svg", {
      class: a(i.value),
      style: C(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M256 48C141.163 48 48 141.163 48 256C48 370.837 141.163 464 256 464C370.837 464 464 370.837 464 256C464 141.163 370.837 48 256 48ZM256 80C353.163 80 432 158.837 432 256C432 353.163 353.163 432 256 432C158.837 432 80 353.163 80 256C80 158.837 158.837 80 256 80ZM246.101 139.101C251.484 133.717 260.16 133.634 265.645 138.852L265.899 139.101L305.9 179.101C311.283 184.484 311.366 193.16 306.148 198.645L305.9 198.899L265.899 238.9C260.432 244.367 251.568 244.367 246.101 238.9C240.717 233.516 240.634 224.84 245.852 219.355L246.101 219.1L264.122 201.079C261.842 201.031 259.376 201.005 256.718 201.001L256 201C219.549 201 190 230.549 190 267C190 303.451 219.549 333 256 333C292.086 333 321.408 304.039 321.991 268.091L322 267C322 259.268 328.268 253 336 253C343.732 253 350 259.268 350 267C350 318.915 307.915 361 256 361C204.085 361 162 318.915 162 267C162 215.085 204.085 173 256 173L258.092 173.004C258.812 173.007 259.521 173.011 260.218 173.017L246.101 158.899C240.717 153.516 240.634 144.84 245.852 139.355L246.101 139.101Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
