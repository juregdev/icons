import { defineComponent as C, computed as o, openBlock as n, createElementBlock as r, normalizeClass as s, normalizeStyle as a, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ C({
  __name: "TIHelpCircleOutline",
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
    const l = e, i = o(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (n(), r("svg", {
      class: s(i.value),
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
        d: "M64 256C64 149.961 149.961 64 256 64C306.922 64 355.758 84.2285 391.764 120.235C427.771 156.242 448 205.078 448 256C448 362.039 362.039 448 256 448C149.961 448 64 362.039 64 256ZM369.137 142.863C339.131 112.857 298.435 96 256 96C167.634 96 96 167.634 96 256C96 344.366 167.634 416 256 416C344.366 416 416 344.366 416 256C416 213.565 399.143 172.869 369.137 142.863ZM255.821 144.001C268.388 143.84 280.339 145.902 288.547 149.809C297.126 153.893 304.73 158.94 311.275 165.988C320.618 176.052 326 188.649 326 203.54C326 219.09 321.107 231.904 311.733 242.901L311.129 243.602C304.882 250.779 298.414 255.851 285.368 264.662L283.428 265.967C269.719 275.161 265 283.964 265 296C265 303.732 258.732 310 251 310C243.268 310 237 303.732 237 296C237 274.822 246.202 257.444 267.193 243.145L270.057 241.214C281.152 233.706 286.185 229.71 290.424 224.737C295.553 218.72 298 212.312 298 203.54C298 190.161 289.944 181.484 276.513 175.091C272.625 173.24 264.79 171.889 256.21 171.998C244.807 172.169 235.535 174.836 228.346 180.628C226.615 182.02 225.046 183.465 223.628 184.955C219.436 189.361 216.721 193.962 215.146 198.472C214.628 199.956 214.287 201.286 214.087 202.412C214.04 202.677 214.007 202.897 213.986 203.07L213.972 203.175L213.94 203.583C213.258 211.002 206.843 216.635 199.329 216.274C191.606 215.903 185.645 209.342 186.016 201.619C186.064 200.62 186.213 199.24 186.516 197.53C186.97 194.966 187.684 192.185 188.711 189.242C191.553 181.102 196.303 173.054 203.343 165.654C205.615 163.267 208.096 160.983 210.787 158.818C223.428 148.634 238.64 144.259 255.821 144.001ZM270 348C270 359.046 261.046 368 250 368C238.954 368 230 359.046 230 348C230 336.954 238.954 328 250 328C261.046 328 270 336.954 270 348Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
