import { defineComponent as r, computed as n, openBlock as a, createElementBlock as s, normalizeClass as d, normalizeStyle as C, createElementVNode as t } from "vue";
const p = /* @__PURE__ */ r({
  __name: "TISadOutline",
  props: {
    size: {
      type: String,
      default: "is-default",
      validator(l) {
        return ["is-small", "is-medium", "is-large", "is-default", "is-12", "is-14", "is-26", "is-28", "is-36"].indexOf(l) > -1;
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
  setup(l) {
    const e = l, i = n(() => [
      "icon",
      e.size,
      {
        [e.type]: e.type && !e.color,
        "is-clickable": e.clickable
      }
    ]);
    return (c, o) => (a(), s("svg", {
      class: d(i.value),
      style: C(l.color ? `color: ${l.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, o[0] || (o[0] = [
      t("path", {
        d: "M208 232C208 245.255 197.255 256 184 256C170.745 256 160 245.255 160 232C160 218.745 170.745 208 184 208C197.255 208 208 218.745 208 232Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        d: "M328 256C341.255 256 352 245.255 352 232C352 218.745 341.255 208 328 208C314.745 208 304 218.745 304 232C304 245.255 314.745 256 328 256Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M256 32C132.288 32 32 132.288 32 256C32 379.712 132.288 480 256 480C379.712 480 480 379.712 480 256C480 132.288 379.712 32 256 32ZM256 64C362.039 64 448 149.961 448 256C448 362.039 362.039 448 256 448C149.961 448 64 362.039 64 256C64 149.961 149.961 64 256 64Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        d: "M351.669 373.829C339.579 333.529 301.379 303.999 255.959 303.999C210.539 303.999 172.329 333.529 160.339 373.829C159.654 376.261 160.157 378.874 161.697 380.876C163.237 382.879 165.633 384.037 168.159 383.999H343.849C346.376 384.037 348.771 382.879 350.311 380.876C351.852 378.874 352.355 376.261 351.669 373.829Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
