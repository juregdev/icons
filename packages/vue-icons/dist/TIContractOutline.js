import { defineComponent as o, computed as n, openBlock as r, createElementBlock as C, normalizeClass as a, normalizeStyle as s, createElementVNode as L } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIContractOutline",
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
    return (c, t) => (r(), C("svg", {
      class: a(i.value),
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
        d: "M91.0497 68.4282C84.7824 62.4385 74.8457 62.5253 68.6849 68.6877C62.4373 74.9369 62.4385 85.0676 68.6877 91.3151L169.398 192H96L95.6851 192.003C86.9939 192.171 80 199.269 80 208C80 216.837 87.1634 224 96 224H208L208.315 223.997C217.006 223.829 224 216.731 224 208V96L223.997 95.6851C223.829 86.9939 216.731 80 208 80L207.685 80.003C198.994 80.1708 192 87.2686 192 96V169.347L91.3123 68.6849L91.0497 68.4282ZM432 304C432 295.163 424.837 288 416 288H304L303.685 288.003C294.994 288.171 288 295.269 288 304V416L288.003 416.315C288.171 425.006 295.269 432 304 432L304.315 431.997C313.006 431.829 320 424.731 320 416V342.653L420.688 443.315L420.95 443.572C427.218 449.561 437.154 449.475 443.315 443.312C449.563 437.063 449.561 426.932 443.312 420.685L342.602 320H416L416.315 319.997C425.006 319.829 432 312.731 432 304ZM304 80C312.731 80 319.829 86.9939 319.997 95.6851L320 96V169.398L420.685 68.6877C426.932 62.4385 437.063 62.4373 443.312 68.6849C449.475 74.8457 449.561 84.7824 443.572 91.0497L443.315 91.3123L342.653 192H416C424.731 192 431.829 198.994 431.997 207.685L432 208C432 216.731 425.006 223.829 416.315 223.997L416 224H304C295.269 224 288.171 217.006 288.003 208.315L288 208V96C288 87.1634 295.163 80 304 80ZM208 288C216.731 288 223.829 294.994 223.997 303.685L224 304V416C224 424.837 216.837 432 208 432C199.269 432 192.171 425.006 192.003 416.315L192 416V342.602L91.3151 443.312C85.0676 449.561 74.9369 449.563 68.6877 443.315C62.5253 437.154 62.4385 427.218 68.4282 420.95L68.6849 420.688L169.347 320H96C87.2686 320 80.1708 313.006 80.003 304.315L80 304C80 295.269 86.9939 288.171 95.6851 288.003L96 288H208Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as default
};
