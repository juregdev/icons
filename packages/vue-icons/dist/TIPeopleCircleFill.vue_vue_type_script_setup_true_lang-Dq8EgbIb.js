import { defineComponent as i, computed as o, openBlock as r, createElementBlock as n, normalizeClass as s, normalizeStyle as a, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ i({
  __name: "TIPeopleCircleFill",
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
        d: "M259.9 48C142.92 46.42 47.4198 141.92 48.9998 258.9C50.5598 371.09 141.91 462.44 254.1 464C371.1 465.6 466.58 370.1 464.98 253.12C463.44 140.91 372.09 49.56 259.9 48ZM256.22 200.11C256.43 198.91 256.66 197.71 256.93 196.52C259.456 184.841 265.083 174.06 273.22 165.31C286.11 151.58 304.38 144 324.67 144C333.206 143.965 341.684 145.406 349.73 148.26C359.731 151.821 368.737 157.718 376 165.46C386.684 177.008 393.044 191.897 394 207.6C394.276 211.395 394.276 215.205 394 219C393.23 229.755 390.448 240.271 385.8 250C385.293 251.06 384.763 252.11 384.21 253.15C383.1 255.22 381.91 257.25 380.63 259.21C378.082 263.123 375.194 266.804 372 270.21C358.88 284.21 342.08 291.94 324.69 291.94C318.169 291.936 311.693 290.861 305.52 288.76C303.446 288.056 301.41 287.245 299.42 286.33C291.085 282.442 283.589 276.966 277.35 270.21C264.363 256.123 256.598 238.009 255.35 218.89C255.17 216.303 255.11 213.743 255.17 211.21C255.247 207.496 255.598 203.793 256.22 200.13V200.11ZM106.49 224.45C106.976 217.315 108.738 210.324 111.69 203.81C112.523 201.996 113.451 200.227 114.47 198.51C116.508 195.069 118.92 191.863 121.66 188.95C125.719 184.619 130.446 180.967 135.66 178.13C138.264 176.707 140.976 175.49 143.77 174.49C154.477 170.745 165.988 169.92 177.12 172.1C188.915 174.381 199.688 180.331 207.9 189.1C217.645 199.619 223.136 213.382 223.31 227.72C223.36 229.83 223.31 231.95 223.16 234.1C222.55 242.333 220.52 250.399 217.16 257.94C215.551 261.571 213.634 265.057 211.43 268.36C207.191 274.766 201.856 280.375 195.67 284.93C194.17 286 192.61 287 191 288C187.833 289.886 184.483 291.444 181 292.65C175.792 294.47 170.316 295.403 164.8 295.41C163.87 295.41 162.94 295.41 162.02 295.33C160.183 295.229 158.353 295.022 156.54 294.71C154.736 294.396 152.95 293.985 151.19 293.48C148.546 292.716 145.965 291.75 143.47 290.59C142.63 290.2 141.81 289.79 140.99 289.36C122.99 279.87 109.42 260.2 106.76 237.24C106.64 236.19 106.54 235.14 106.47 234.08C106.244 230.874 106.251 227.655 106.49 224.45ZM160.41 403.05C133.784 385.5 112.386 361.093 98.4698 332.4C97.526 330.495 98.2377 328.184 100.09 327.14C118.67 316.69 142.4 311 164.82 311C181.82 311 195.52 313 207.51 316.88C210.278 317.791 212.332 320.136 212.871 323C213.41 325.865 212.348 328.795 210.1 330.65C186.75 349.65 171.7 373.19 164.63 401.4C164.415 402.276 163.788 402.992 162.948 403.32C162.108 403.649 161.161 403.548 160.41 403.05ZM257 432C234.486 432.023 212.179 427.704 191.3 419.28C189.541 418.554 188.537 416.688 188.9 414.82C189.3 412.77 189.74 410.9 190.13 409.34C197.25 380.91 214.89 357.34 241.13 341.16C264.42 326.81 294.13 318.91 324.65 318.91C355.81 318.91 384.65 326.49 408.13 340.82C409.373 341.598 409.775 343.221 409.04 344.49C377.529 398.623 319.636 431.945 257 432Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
