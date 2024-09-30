import { defineComponent as i, computed as o, openBlock as n, createElementBlock as r, normalizeClass as s, normalizeStyle as a, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ i({
  __name: "TISnowFill",
  props: {
    size: {
      type: String,
      default: "is-default",
      validator(C) {
        return ["is-small", "is-medium", "is-large", "is-default", "is-12", "is-14", "is-26", "is-28", "is-36"].indexOf(C) > -1;
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
  setup(C) {
    const e = C, t = o(() => [
      "icon",
      e.size,
      {
        [e.type]: e.type && !e.color,
        "is-clickable": e.clickable
      }
    ]);
    return (d, l) => (n(), r("svg", {
      class: s(t.value),
      style: a(C.color ? `color: ${C.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, l[0] || (l[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M461.001 349L427.001 329.36C433.153 323.023 440.21 317.631 447.941 313.36C458.461 307.429 462.233 294.126 456.392 283.556C450.551 272.985 437.281 269.1 426.661 274.85C411.9 283.02 398.819 293.912 388.111 306.95L300.001 256L388.091 205.14C398.796 218.181 411.877 229.073 426.641 237.24C433.527 241.122 441.966 241.012 448.747 236.951C455.529 232.89 459.611 225.503 459.44 217.6C459.269 209.697 454.872 202.494 447.921 198.73C440.192 194.456 433.135 189.065 426.981 182.73L460.981 163.09C468.062 159.304 472.518 151.961 472.607 143.931C472.695 135.902 468.402 128.462 461.406 124.521C454.41 120.58 445.822 120.763 439.001 125L405.001 144.63C402.579 136.129 401.427 127.318 401.581 118.48C401.709 112.635 399.506 106.979 395.457 102.761C391.408 98.5428 385.847 96.1102 380.001 96H379.591C367.599 95.9979 357.814 105.6 357.591 117.59C357.281 134.449 360.165 151.214 366.091 167L278.001 217.89V116.18C294.645 113.429 310.617 107.549 325.071 98.85C335.479 92.5788 338.832 79.0578 332.561 68.65C326.29 58.2422 312.769 54.8888 302.361 61.16C294.784 65.7137 286.575 69.1207 278.001 71.27V38C278.001 25.8497 268.151 16 256.001 16C243.851 16 234.001 25.8497 234.001 38V71.27C225.426 69.1207 217.217 65.7137 209.641 61.16C202.908 57.1032 194.523 56.9465 187.643 60.7488C180.764 64.5511 176.435 71.7347 176.288 79.5938C176.141 87.4528 180.198 94.7933 186.931 98.85C201.385 107.549 217.357 113.429 234.001 116.18V217.89L145.911 167C151.846 151.209 154.737 134.437 154.431 117.57C154.207 105.58 144.423 95.9779 132.431 95.98H132.001C126.166 96.0877 120.613 98.5096 116.563 102.712C112.514 106.915 110.301 112.555 110.411 118.39C110.572 127.24 109.423 136.066 107.001 144.58L73.0009 125C66.1868 120.935 57.712 120.855 50.8218 124.789C43.9317 128.723 39.6936 136.062 39.7307 143.997C39.7678 151.931 44.0742 159.23 51.0009 163.1L85.0009 182.74C78.8463 189.075 71.7902 194.466 64.0609 198.74C57.1098 202.504 52.7123 209.707 52.5414 217.61C52.3705 225.513 56.4524 232.9 63.2343 236.961C70.0161 241.022 78.4552 241.132 85.3409 237.25C100.102 229.08 113.183 218.188 123.891 205.15L212.001 256L123.911 306.86C113.203 293.822 100.122 282.93 85.3609 274.76C78.4752 270.878 70.0361 270.988 63.2543 275.049C56.4724 279.11 52.3905 286.497 52.5614 294.4C52.7323 302.303 57.1298 309.506 64.0809 313.27C71.8102 317.544 78.8663 322.935 85.0209 329.27L51.0009 349C44.0742 352.87 39.7678 360.169 39.7307 368.103C39.6936 376.038 43.9317 383.377 50.8218 387.311C57.712 391.245 66.1868 391.165 73.0009 387.1L107.001 367.47C109.422 375.971 110.575 384.782 110.421 393.62C110.209 405.756 119.866 415.77 132.001 416H132.411C144.403 416.002 154.187 406.4 154.411 394.41C154.721 377.551 151.837 360.786 145.911 345L234.001 294.11V395.82C217.357 398.571 201.385 404.451 186.931 413.15C176.523 419.421 173.17 432.942 179.441 443.35C185.712 453.758 199.233 457.111 209.641 450.84C217.217 446.286 225.426 442.879 234.001 440.73V474C234.001 486.15 243.851 496 256.001 496C268.151 496 278.001 486.15 278.001 474V440.73C286.575 442.879 294.784 446.286 302.361 450.84C312.769 457.111 326.29 453.758 332.561 443.35C338.832 432.942 335.479 419.421 325.071 413.15C310.617 404.451 294.645 398.571 278.001 395.82V294.11L366.091 345C360.156 360.791 357.265 377.563 357.571 394.43C357.794 406.42 367.579 416.022 379.571 416.02H380.001C385.836 415.912 391.389 413.49 395.438 409.288C399.487 405.085 401.701 399.445 401.591 393.61C401.43 384.76 402.579 375.934 405.001 367.42L439.001 387.05C445.82 391.429 454.495 391.704 461.579 387.766C468.662 383.827 473.006 376.314 472.885 368.21C472.764 360.106 468.198 352.726 461.001 349Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
