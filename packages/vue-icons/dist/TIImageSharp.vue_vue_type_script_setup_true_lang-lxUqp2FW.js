import { defineComponent as o, computed as r, openBlock as a, createElementBlock as n, normalizeClass as s, normalizeStyle as c, createElementVNode as d } from "vue";
const m = /* @__PURE__ */ o({
  __name: "TIImageSharp",
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
    return (p, t) => (a(), n("svg", {
      class: s(i.value),
      style: c(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      d("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M456 64H56C42.7452 64 32 74.7452 32 88V424C32 437.255 42.7452 448 56 448H456C469.255 448 480 437.255 480 424V88C480 74.7452 469.255 64 456 64ZM331.62 128.2C351.751 126.355 370.88 137.321 379.461 155.625C388.042 173.928 384.235 195.647 369.941 209.941C355.647 224.235 333.928 228.042 315.625 219.461C297.321 210.88 286.355 191.751 288.2 171.62C290.312 148.571 308.571 130.312 331.62 128.2ZM76 416C69.3726 416 64 410.627 64 404V316.37L192.64 202L289.59 298.75L172.37 416H76ZM448 404C448 410.627 442.627 416 436 416H217.63L367.16 266.47L448 333.84V404Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  m as _
};
