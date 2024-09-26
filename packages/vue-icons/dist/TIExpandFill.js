import { defineComponent as o, computed as n, openBlock as a, createElementBlock as r, normalizeClass as s, normalizeStyle as C, createElementVNode as L } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIExpandFill",
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
    return (d, t) => (a(), r("svg", {
      class: s(i.value),
      style: C(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      L("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M192 64C200.837 64 208 71.1634 208 80C208 88.7314 201.006 95.8292 192.315 95.997L192 96H118.602L219.312 196.685C225.561 202.932 225.563 213.063 219.315 219.312C213.154 225.475 203.218 225.561 196.95 219.572L196.688 219.315L96 118.653V192C96 200.731 89.0061 207.829 80.3149 207.997L80 208C71.2686 208 64.1708 201.006 64.003 192.315L64 192V80C64 71.2686 70.9939 64.1708 79.6851 64.003L80 64H192ZM315.05 292.428C308.782 286.438 298.846 286.525 292.685 292.688C286.437 298.937 286.439 309.068 292.688 315.315L393.398 416H320L319.685 416.003C310.994 416.171 304 423.269 304 432C304 440.837 311.163 448 320 448H432L432.315 447.997C441.006 447.829 448 440.731 448 432V320L447.997 319.685C447.829 310.994 440.731 304 432 304L431.685 304.003C422.994 304.171 416 311.269 416 320V393.347L315.312 292.685L315.05 292.428ZM432 64C440.731 64 447.829 70.9939 447.997 79.6851L448 80V192C448 200.837 440.837 208 432 208C423.269 208 416.171 201.006 416.003 192.315L416 192V118.602L315.315 219.312C309.068 225.561 298.937 225.563 292.688 219.315C286.525 213.154 286.438 203.218 292.428 196.95L292.685 196.688L393.347 96H320C311.269 96 304.171 89.0061 304.003 80.3149L304 80C304 71.2686 310.994 64.1708 319.685 64.003L320 64H432ZM80 304C88.7314 304 95.8292 310.994 95.997 319.685L96 320V393.398L196.685 292.688C202.932 286.439 213.063 286.437 219.312 292.685C225.475 298.846 225.561 308.782 219.572 315.05L219.315 315.312L118.653 416H192C200.731 416 207.829 422.994 207.997 431.685L208 432C208 440.731 201.006 447.829 192.315 447.997L192 448H80C71.2686 448 64.1708 441.006 64.003 432.315L64 432V320C64 311.163 71.1634 304 80 304Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
