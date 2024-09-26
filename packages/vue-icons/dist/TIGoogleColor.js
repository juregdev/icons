import { defineComponent as a, computed as o, openBlock as s, createElementBlock as c, normalizeClass as p, normalizeStyle as r, createStaticVNode as d } from "vue";
const C = /* @__PURE__ */ a({
  __name: "TIGoogleColor",
  props: {
    size: {
      type: String,
      default: "is-default",
      validator(t) {
        return ["is-small", "is-medium", "is-large", "is-default", "is-12", "is-14", "is-26", "is-28", "is-36"].indexOf(t) > -1;
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
  setup(t) {
    const e = t, i = o(() => [
      "icon",
      e.size,
      {
        [e.type]: e.type && !e.color,
        "is-clickable": e.clickable
      }
    ]);
    return (n, l) => (s(), c("svg", {
      class: p(i.value),
      style: r(t.color ? `color: ${t.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, l[0] || (l[0] = [
      d('<g clip-path="url(#clip0_738_124)"><path d="M506.538 261.76C506.538 244.906 505.045 228.906 502.485 213.333H261.418V309.546H399.445C393.258 341.12 375.125 367.786 348.245 385.92V449.92H430.591C478.805 405.333 506.538 339.626 506.538 261.76Z" fill="#4285F4"></path><path d="M261.398 512.001C330.518 512.001 388.331 488.961 430.571 449.921L348.225 385.921C325.185 401.281 295.958 410.668 261.398 410.668C194.625 410.668 138.091 365.654 117.825 304.854H32.918V370.774C74.9446 454.401 161.345 512.001 261.398 512.001Z" fill="#34A853"></path><path d="M117.845 304.856C112.511 289.496 109.738 273.069 109.738 256.003C109.738 238.936 112.725 222.509 117.845 207.149V141.229H32.938C15.4446 175.789 5.41797 214.616 5.41797 256.003C5.41797 297.389 15.4446 336.216 32.938 370.776L117.845 304.856Z" fill="#FBBC05"></path><path d="M261.398 101.333C299.158 101.333 332.865 114.347 359.531 139.733L432.491 66.7734C388.331 25.3867 330.518 0 261.398 0C161.345 0 74.9446 57.6001 32.918 141.227L117.825 207.147C138.091 146.347 194.625 101.333 261.398 101.333Z" fill="#EA4335"></path></g><defs><clipPath id="clip0_738_124"><rect width="512" height="512" fill="white"></rect></clipPath></defs>', 2)
    ]), 6));
  }
});
export {
  C as default
};
