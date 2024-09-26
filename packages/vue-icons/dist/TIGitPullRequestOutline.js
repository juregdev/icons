import { defineComponent as o, computed as C, openBlock as n, createElementBlock as s, normalizeClass as r, normalizeStyle as a, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIGitPullRequestOutline",
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
        d: "M276.686 28.6863C282.935 22.4379 293.065 22.4379 299.314 28.6863C305.475 34.8479 305.561 44.7847 299.57 51.0511L299.314 51.3137L262.627 88H324C365.554 88 399.319 121.349 399.99 162.743L400 164V362.016C427.604 369.121 448 394.179 448 424C448 459.346 419.346 488 384 488C348.654 488 320 459.346 320 424C320 394.179 340.396 369.121 368 362.016V164C368 139.942 348.693 120.394 324.728 120.006L324 120H262.627L299.314 156.686C305.475 162.848 305.561 172.785 299.57 179.051L299.314 179.314C293.152 185.475 283.215 185.561 276.949 179.57L276.686 179.314L212.686 115.314C206.525 109.152 206.439 99.2153 212.43 92.9489L212.686 92.6863L276.686 28.6863ZM384 392C366.327 392 352 406.327 352 424C352 441.673 366.327 456 384 456C401.673 456 416 441.673 416 424C416 406.327 401.673 392 384 392ZM128 136C145.673 136 160 121.673 160 104C160 86.3269 145.673 72 128 72C110.327 72 96 86.3269 96 104C96 121.673 110.327 136 128 136ZM144 362.016V165.984C171.604 158.879 192 133.821 192 104C192 68.6538 163.346 40 128 40C92.6538 40 64 68.6538 64 104C64 133.821 84.3964 158.879 112 165.984V362.016C84.3964 369.121 64 394.179 64 424C64 459.346 92.6538 488 128 488C163.346 488 192 459.346 192 424C192 394.179 171.604 369.121 144 362.016ZM128 392C110.327 392 96 406.327 96 424C96 441.673 110.327 456 128 456C145.673 456 160 441.673 160 424C160 406.327 145.673 392 128 392Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
