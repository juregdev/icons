import { defineComponent as o, computed as C, openBlock as n, createElementBlock as s, normalizeClass as r, normalizeStyle as a, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIOptionsOutline",
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
    return (d, t) => (n(), s("svg", {
      class: r(i.value),
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
        d: "M290.731 144H64C55.1634 144 48 136.837 48 128C48 119.269 54.9939 112.171 63.6851 112.003L64 112H290.731C297.321 93.3569 315.1 80 336 80C356.9 80 374.679 93.3569 381.269 112H448C456.837 112 464 119.163 464 128C464 136.731 457.006 143.829 448.315 143.997L448 144H381.269C374.679 162.643 356.9 176 336 176C315.1 176 297.321 162.643 290.731 144ZM320 128C320 136.837 327.163 144 336 144C344.837 144 352 136.837 352 128C352 119.163 344.837 112 336 112C327.163 112 320 119.163 320 128ZM464 384C464 375.163 456.837 368 448 368H381.269C374.679 349.357 356.9 336 336 336C315.1 336 297.321 349.357 290.731 368H64L63.6851 368.003C54.9939 368.171 48 375.269 48 384C48 392.837 55.1634 400 64 400H290.731C297.321 418.643 315.1 432 336 432C356.9 432 374.679 418.643 381.269 400H448L448.315 399.997C457.006 399.829 464 392.731 464 384ZM320 384C320 392.837 327.163 400 336 400C344.837 400 352 392.837 352 384C352 375.163 344.837 368 336 368C327.163 368 320 375.163 320 384ZM464 256C464 247.163 456.837 240 448 240H221.269C214.679 221.357 196.9 208 176 208C155.101 208 137.321 221.357 130.731 240H64L63.6851 240.003C54.9939 240.171 48 247.269 48 256C48 264.837 55.1634 272 64 272H130.731C137.321 290.643 155.101 304 176 304C196.9 304 214.679 290.643 221.269 272H448L448.315 271.997C457.006 271.829 464 264.731 464 256ZM176 272C167.163 272 160 264.837 160 256C160 247.163 167.163 240 176 240C184.837 240 192 247.163 192 256C192 264.837 184.837 272 176 272Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
