import { defineComponent as o, computed as C, openBlock as n, createElementBlock as r, normalizeClass as s, normalizeStyle as a, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIGitCompareOutline",
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
        d: "M315.314 20.6863C309.065 14.4379 298.935 14.4379 292.686 20.6863L228.686 84.6863L228.43 84.9489C222.439 91.2153 222.525 101.152 228.686 107.314L292.686 171.314L292.949 171.57C299.215 177.561 309.152 177.475 315.314 171.314L315.57 171.051C321.561 164.785 321.475 154.848 315.314 148.686L278.627 112H340L340.728 112.006C364.693 112.394 384 131.942 384 156V354.016C356.396 361.121 336 386.179 336 416C336 451.346 364.654 480 400 480C435.346 480 464 451.346 464 416C464 386.179 443.604 361.121 416 354.016V156L415.99 154.743C415.319 113.349 381.554 80 340 80H278.627L315.314 43.3137L315.57 43.0511C321.561 36.7847 321.475 26.8479 315.314 20.6863ZM368 416C368 398.327 382.327 384 400 384C417.673 384 432 398.327 432 416C432 433.673 417.673 448 400 448C382.327 448 368 433.673 368 416ZM218.051 340.43C211.785 334.439 201.848 334.525 195.686 340.686L195.43 340.949C189.439 347.215 189.525 357.152 195.686 363.314L232.373 400H171L170.272 399.994C146.307 399.606 127 380.058 127 356V158.232C155.11 151.482 176 126.18 176 96C176 60.6538 147.346 32 112 32C76.6538 32 48 60.6538 48 96C48 125.46 67.9052 150.271 95 157.718V356L95.0102 357.257C95.6813 398.651 129.446 432 171 432H232.373L195.686 468.686L195.43 468.949C189.439 475.215 189.525 485.152 195.686 491.314C201.935 497.562 212.065 497.562 218.314 491.314L282.314 427.314L282.57 427.051C288.561 420.785 288.475 410.848 282.314 404.686L218.314 340.686L218.051 340.43ZM144 96C144 78.3269 129.673 64 112 64C94.3269 64 80 78.3269 80 96C80 113.673 94.3269 128 112 128C129.673 128 144 113.673 144 96Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
