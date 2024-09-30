import { defineComponent as r, computed as n, openBlock as s, createElementBlock as a, normalizeClass as C, normalizeStyle as d, createElementVNode as o } from "vue";
const L = /* @__PURE__ */ r({
  __name: "TIFunnelNot",
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
    return (c, t) => (s(), a("svg", {
      class: C(i.value),
      style: d(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      o("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M466.025 48L46.082 48.0001C34.3507 47.9766 23.682 54.7933 18.7738 65.4485C13.8656 76.1037 15.6185 88.6423 23.2607 97.5429L191.983 294.067C191.994 294.079 192 294.096 192 294.112L192.001 413.163C191.899 423.512 198.462 432.753 208.266 436.067L288.488 462.762C295.789 465.205 303.851 463.97 310.108 459.436L310.453 459.181C316.386 454.718 319.913 447.751 319.999 440.327L320 440L319.999 294.17C319.999 294.153 320.005 294.137 320.017 294.124L488.741 97.5407C496.369 88.657 498.13 76.1435 493.249 65.4971C488.367 54.8508 477.737 48.0185 466.025 48ZM50.374 79.9991H461.626L295.641 273.391C290.787 279.098 288.081 286.328 288.001 293.83L288 428.874L224 407.578L224 293.888L223.992 293.366C223.822 286.063 221.163 279.036 216.456 273.45L50.374 79.9991Z",
        fill: "currentColor"
      }, null, -1),
      o("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M388.656 195C329.295 195 281 243.295 281 302.656C281 362.017 329.295 410.312 388.656 410.312C448.017 410.312 496.312 362.017 496.312 302.656C496.312 243.295 448.017 195 388.656 195ZM427.635 329.927C429.817 332 430.702 335.093 429.948 338.006C429.194 340.919 426.919 343.194 424.006 343.948C421.093 344.702 418 343.817 415.927 341.635L388.656 314.369L361.385 341.635C358.129 344.728 353.001 344.663 349.825 341.487C346.65 338.311 346.584 333.183 349.677 329.927L376.943 302.656L349.677 275.385C346.584 272.129 346.65 267.001 349.825 263.825C353.001 260.65 358.129 260.584 361.385 263.677L388.656 290.943L415.927 263.677C419.183 260.584 424.311 260.65 427.487 263.825C430.663 267.001 430.728 272.129 427.635 275.385L400.369 302.656L427.635 329.927Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  L as _
};
