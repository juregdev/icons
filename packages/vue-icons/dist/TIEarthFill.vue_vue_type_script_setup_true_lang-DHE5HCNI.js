import { defineComponent as i, computed as o, openBlock as r, createElementBlock as n, normalizeClass as s, normalizeStyle as a, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ i({
  __name: "TIEarthFill",
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
    return (d, l) => (r(), n("svg", {
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
        d: "M414.39 97.7399C357.896 40.6874 275.188 18.2346 197.6 38.888C120.011 59.5413 59.4112 120.141 38.7579 197.73C18.1045 275.318 40.5572 358.026 97.6097 414.52C154.103 471.572 236.811 494.025 314.4 473.372C391.988 452.718 452.588 392.118 473.242 314.53C493.895 236.942 471.442 154.233 414.39 97.7399ZM63.9998 256.13C63.9926 239.137 66.2457 222.219 70.6998 205.82C78.0398 221.62 88.6998 235.27 95.9498 251.48C105.32 272.32 130.48 266.54 141.59 284.8C151.45 301.01 140.92 321.51 148.3 338.47C153.66 350.78 166.3 353.47 175.02 362.47C183.93 371.55 183.74 383.99 185.1 395.83C186.634 409.741 189.124 423.53 192.55 437.1C192.55 437.2 192.55 437.31 192.63 437.41C117.8 411.13 63.9998 339.8 63.9998 256.13ZM256 448.13C245.277 448.126 234.574 447.23 224 445.45C224.11 442.74 224.16 440.21 224.43 438.45C226.86 422.55 234.82 407 245.56 395.1C256.17 383.36 270.71 375.42 279.67 362.1C288.45 349.1 291.08 331.6 287.46 316.41C282.13 293.97 251.64 286.48 235.2 274.31C225.75 267.31 217.34 256.49 204.93 255.61C199.21 255.21 194.42 256.44 188.75 254.98C183.55 253.63 179.47 250.83 173.93 251.56C163.58 252.92 157.05 263.98 145.93 262.48C135.38 261.07 124.51 248.72 122.11 238.67C119.03 225.75 129.25 221.56 140.2 220.41C144.77 219.93 149.9 219.41 154.29 221.09C160.07 223.23 162.8 228.89 167.99 231.75C177.72 237.09 179.69 228.56 178.2 219.92C175.97 206.98 173.37 201.71 184.91 192.8C192.91 186.66 199.75 182.22 198.47 171.19C197.71 164.71 194.16 161.78 197.47 155.33C199.98 150.42 206.87 145.99 211.36 143.06C222.95 135.5 261.01 136.06 245.46 114.9C240.89 108.69 232.46 97.5899 224.46 96.0699C214.46 94.1799 210.02 105.34 203.05 110.26C195.85 115.35 181.83 121.13 174.62 113.26C164.92 102.67 181.05 99.1999 184.62 91.7999C186.27 88.3499 184.62 83.5599 181.84 79.0499C185.446 77.5299 189.113 76.1199 192.84 74.8199C195.175 76.5449 197.946 77.5839 200.84 77.8199C207.53 78.2599 213.84 74.6399 219.68 79.1999C226.16 84.1999 230.83 90.5199 239.43 92.0799C247.75 93.5899 256.56 88.7399 258.62 80.2199C259.87 75.0399 258.62 69.5699 257.42 64.2199C294.82 64.4351 331.332 75.6357 362.42 96.4299C360.42 95.6699 358.03 95.7599 355.08 97.1299C349.01 99.9499 340.41 107.13 339.7 114.25C338.89 122.33 350.81 123.47 356.47 123.47C364.97 123.47 373.58 119.67 370.84 109.85C369.65 105.59 368.03 101.16 365.42 98.4799C371.694 102.833 377.704 107.555 383.42 112.62C383.33 112.71 383.24 112.79 383.15 112.89C377.39 118.89 370.7 123.64 366.76 130.94C363.98 136.08 360.85 138.52 355.22 139.85C352.12 140.58 348.58 140.85 345.98 142.93C338.74 148.63 342.86 162.33 349.72 166.44C358.39 171.63 371.25 169.19 377.79 161.78C382.9 155.98 385.91 145.91 395.1 145.92C399.146 145.911 403.032 147.496 405.92 150.33C409.72 154.27 408.97 157.95 409.78 162.87C411.21 171.61 418.92 166.87 423.61 162.46C427.028 168.544 430.113 174.81 432.85 181.23C427.69 188.66 423.59 196.76 411.18 188.1C403.75 182.91 399.18 175.38 389.85 173.04C381.7 171.04 373.35 173.12 365.3 174.51C356.15 176.1 345.3 176.8 338.36 183.73C331.65 190.41 328.1 199.35 320.96 206.06C307.15 219.06 301.32 233.25 310.26 251.63C318.86 269.3 336.85 278.89 356.26 277.63C375.33 276.36 395.14 265.3 394.59 293.01C394.39 302.82 396.44 309.61 399.45 318.72C402.24 327.12 402.05 335.26 402.69 343.93C403.298 354.082 404.886 364.152 407.43 374C371.107 420.766 315.215 448.127 256 448.13Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
