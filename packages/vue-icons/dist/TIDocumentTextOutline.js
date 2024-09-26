import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as c, createElementVNode as d } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIDocumentTextOutline",
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
    const l = e, i = n(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (u, t) => (r(), s("svg", {
      class: a(i.value),
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
        d: "M242.75 32H144C108.654 32 80 60.6538 80 96V416C80 451.346 108.654 480 144 480H368C403.346 480 432 451.346 432 416V221.25C432 208.524 426.944 196.318 417.945 187.318L276.684 46.0563C267.682 37.0565 255.476 32 242.75 32ZM240 64H144C126.327 64 112 78.3269 112 96V416C112 433.673 126.327 448 144 448H368C385.673 448 400 433.673 400 416V224H288C261.755 224 240.43 202.937 240.006 176.794L240 176V64ZM377.373 192L272 86.6274V176C272 184.731 278.994 191.829 287.685 191.997L288 192H377.373ZM336 272C344.837 272 352 279.163 352 288C352 296.731 345.006 303.829 336.315 303.997L336 304H176C167.163 304 160 296.837 160 288C160 279.269 166.994 272.171 175.685 272.003L176 272H336ZM352 368C352 359.163 344.837 352 336 352H176L175.685 352.003C166.994 352.171 160 359.269 160 368C160 376.837 167.163 384 176 384H336L336.315 383.997C345.006 383.829 352 376.731 352 368Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
