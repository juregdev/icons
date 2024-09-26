import { defineComponent as o, computed as n, openBlock as s, createElementBlock as L, normalizeClass as r, normalizeStyle as a, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIDocumentsOutline",
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
    return (d, t) => (s(), L("svg", {
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
        d: "M314.022 16C324.714 16.0149 334.966 20.2227 342.618 27.7429L343.018 28.1418L452.143 139.116C459.608 146.674 463.85 156.823 463.996 167.431L464 168V340C464 372.774 438.344 399.461 406.031 399.992L405.05 400H352V436C352 469.105 325.823 496 293.05 496H107C74.188 496 48 469.116 48 436L48.0003 171.906C48.1936 138.902 74.9015 112.194 108 112L160 112L160 75.9063C160.192 43.2316 186.37 16.7284 219.009 16.0137L220 16L311.978 16C311.985 16 311.993 16 312 16C312.007 16 312.015 16 312.022 16L314.022 16ZM296 47.9999L220.094 47.9997C204.77 48.0895 192.341 60.3663 192.006 75.5393L192 76V112H199.978L200 112L200.022 112H202.144C213.014 112.017 223.422 116.396 231.018 124.142L340.199 235.173C347.733 242.877 351.965 253.214 352 263.978L352 264L352 264.042L352 264.13V368H405.05C419.804 368 431.759 355.869 431.996 340.468L432 340V184H340L339.809 183.999C315.975 183.715 296.678 164.652 296.015 140.912L296.001 140.191L296 47.9999ZM419.933 152H340.151L339.883 151.994C333.428 151.758 328.242 146.572 328.006 140.117L328 139.886V58.5087L419.933 152ZM184 144L108.094 144C92.6155 144.09 80.0904 156.616 80 172V436C80 451.628 92.0518 464 107 464H293.05C307.953 464 320 451.623 320 436V280H228L227.809 279.999C203.975 279.715 184.678 260.652 184.015 236.912L184.001 236.191L184 144ZM307.933 248L216 154.509V235.886L216.006 236.117C216.242 242.572 221.428 247.758 227.883 247.994L228.151 248H307.933Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as default
};
