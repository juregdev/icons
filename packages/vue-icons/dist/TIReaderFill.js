import { defineComponent as o, computed as r, openBlock as a, createElementBlock as n, normalizeClass as s, normalizeStyle as d, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIReaderFill",
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
    return (u, t) => (a(), n("svg", {
      class: s(i.value),
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
        d: "M368 32H144C108.67 32.0386 80.0386 60.6698 80 96V416C80.0386 451.33 108.67 479.961 144 480H368C403.33 479.961 431.961 451.33 432 416V96C431.961 60.6698 403.33 32.0386 368 32ZM256 304H176C167.163 304 160 296.837 160 288C160 279.163 167.163 272 176 272H256C264.837 272 272 279.163 272 288C272 296.837 264.837 304 256 304ZM336 224H176C167.163 224 160 216.837 160 208C160 199.163 167.163 192 176 192H336C344.837 192 352 199.163 352 208C352 216.837 344.837 224 336 224ZM336 144H176C167.163 144 160 136.837 160 128C160 119.163 167.163 112 176 112H336C344.837 112 352 119.163 352 128C352 136.837 344.837 144 336 144Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
