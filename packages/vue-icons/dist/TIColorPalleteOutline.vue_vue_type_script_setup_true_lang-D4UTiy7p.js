import { defineComponent as i, computed as o, openBlock as n, createElementBlock as r, normalizeClass as s, normalizeStyle as a, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ i({
  __name: "TIColorPalleteOutline",
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
    const l = e, C = o(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (n(), r("svg", {
      class: s(C.value),
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
        d: "M285.427 48C224.155 48 162.65 70.7879 116.014 112.127C25.3258 192.28 25.3258 324.42 116.031 404.589C158.741 442.359 217 463.139 277.575 463.98L279.527 464H281.227C341.792 464 399.683 443.992 440.659 407.557C461.571 389.114 460.448 354.318 441.046 336.204C434.611 330.257 427.112 327.017 417.594 324.88L415.852 324.503C413.915 324.098 412.337 323.823 408.188 323.123L406.864 322.899C399.686 321.659 397.888 320.792 393.842 317.196L393.601 316.981C386.419 310.602 386.419 303.398 393.552 297.063L423.85 270.165C477.429 222.821 477.429 144.379 423.822 97.0101C387.412 64.9657 338.215 48 285.427 48ZM285.427 80C330.732 80 372.377 94.361 402.656 121.011C441.825 155.621 441.825 211.579 402.633 246.21L372.305 273.135C350.835 292.202 350.835 321.798 372.303 340.863L373.157 341.619C381.657 349.036 388.742 352.214 401.612 354.464L406.733 355.339C408.177 355.594 409.021 355.762 410.148 356.007C414.904 357.04 417.739 358.238 419.267 359.65C425.276 365.26 425.69 378.091 419.444 383.6L418.393 384.527C383.552 414.966 333.741 432 281.227 432L279.643 432C225.861 431.612 174.341 413.436 137.226 380.614C60.9285 313.18 60.9285 203.52 137.223 136.089C177.955 99.983 231.89 80 285.427 80ZM176.017 208C176.017 225.673 161.69 240 144.017 240C126.344 240 112.017 225.673 112.017 208C112.017 190.327 126.344 176 144.017 176C161.69 176 176.017 190.327 176.017 208ZM152.017 343C169.69 343 184.017 328.673 184.017 311C184.017 293.327 169.69 279 152.017 279C134.344 279 120.017 293.327 120.017 311C120.017 328.673 134.344 343 152.017 343ZM256.017 144C256.017 161.673 241.69 176 224.017 176C206.344 176 192.017 161.673 192.017 144C192.017 126.327 206.344 112 224.017 112C241.69 112 256.017 126.327 256.017 144ZM256.017 415C282.527 415 304.017 393.51 304.017 367C304.017 340.49 282.527 319 256.017 319C229.507 319 208.017 340.49 208.017 367C208.017 393.51 229.507 415 256.017 415ZM360.017 144C360.017 161.673 345.69 176 328.017 176C310.344 176 296.017 161.673 296.017 144C296.017 126.327 310.344 112 328.017 112C345.69 112 360.017 126.327 360.017 144Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
