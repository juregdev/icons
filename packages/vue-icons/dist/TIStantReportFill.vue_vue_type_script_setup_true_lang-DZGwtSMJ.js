import { defineComponent as r, computed as C, openBlock as n, createElementBlock as d, normalizeClass as a, normalizeStyle as s, createElementVNode as t } from "vue";
const p = /* @__PURE__ */ r({
  __name: "TIStantReportFill",
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
    return (c, o) => (n(), d("svg", {
      class: a(i.value),
      style: s(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, o[0] || (o[0] = [
      t("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M87 158.765C87 118.098 121.607 85 164.14 85C206.673 85 241.28 118.098 241.28 158.765C241.28 178.141 232.452 203.896 215.071 235.316C201.09 260.551 184.9 283.37 176.501 294.724C173.618 298.658 169.032 300.983 164.154 300.983C159.276 300.983 154.69 298.658 151.807 294.724C143.394 283.37 127.219 260.551 113.237 235.316C95.8277 203.887 87 178.132 87 158.765ZM133.284 162.14C133.284 179.181 147.099 192.996 164.14 192.996C181.173 192.977 194.977 179.173 194.996 162.14C194.996 145.099 181.181 131.284 164.14 131.284C147.099 131.284 133.284 145.099 133.284 162.14Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M274.285 158.765C274.285 118.098 308.892 85 351.425 85C393.958 85 428.565 118.098 428.565 158.765C428.565 178.141 419.737 203.896 402.356 235.316C388.375 260.551 372.185 283.37 363.787 294.724C360.903 298.658 356.317 300.983 351.439 300.983C346.561 300.983 341.975 298.658 339.092 294.724C330.679 283.37 314.504 260.551 300.522 235.316C283.113 203.887 274.285 178.132 274.285 158.765ZM320.569 162.14C320.569 179.181 334.384 192.996 351.425 192.996C368.458 192.977 382.262 179.173 382.281 162.14C382.281 145.099 368.466 131.284 351.425 131.284C334.384 131.284 320.569 145.099 320.569 162.14Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M161 426C182.269 426 200.436 412.72 207.662 394H305.338C312.564 412.72 330.731 426 352 426C379.614 426 402 403.614 402 376C402 348.386 379.614 326 352 326C330.354 326 311.921 339.754 304.964 359H208.036C201.079 339.754 182.646 326 161 326C133.386 326 111 348.386 111 376C111 403.614 133.386 426 161 426ZM379 376C379 390.912 366.912 403 352 403C337.088 403 325 390.912 325 376C325 361.088 337.088 349 352 349C366.912 349 379 361.088 379 376Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
