import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeClass as a, normalizeStyle as C, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIWifiFill",
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
    return (d, t) => (r(), s("svg", {
      class: a(i.value),
      style: C(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M462 170.86C344.79 66.2802 167.77 66.2802 50.5602 170.86C44.7679 175.808 42.1092 183.505 43.6129 190.973C45.1165 198.441 50.5466 204.509 57.8024 206.829C65.0583 209.15 73.0019 207.359 78.5602 202.15C179.825 111.836 332.725 111.836 433.99 202.15C442.636 209.882 455.913 209.141 463.645 200.495C471.377 191.849 470.636 178.572 461.99 170.84L462 170.86ZM104.48 238.62C145.608 200.052 199.898 178.622 256.28 178.7C312.663 178.622 366.952 200.052 408.08 238.62C413.748 243.697 416.226 251.444 414.557 258.868C412.888 266.293 407.333 272.233 400.037 274.396C392.741 276.559 384.846 274.605 379.4 269.29C310.104 204.504 202.456 204.504 133.16 269.29C127.715 274.605 119.819 276.559 112.523 274.396C105.227 272.233 99.6724 266.293 98.0032 258.868C96.334 251.444 98.812 243.697 104.48 238.62ZM165.94 299.3C217.469 253.495 295.121 253.495 346.65 299.3V299.28C355.321 306.987 356.102 320.264 348.395 328.935C340.688 337.606 327.411 338.387 318.74 330.68C283.127 299.028 229.464 299.028 193.85 330.68C188.262 335.788 180.358 337.493 173.161 335.142C165.964 332.792 160.59 326.749 159.095 319.328C157.6 311.906 160.215 304.254 165.94 299.3ZM288.28 388.41C288.28 406.083 273.953 420.41 256.28 420.41C238.607 420.41 224.28 406.083 224.28 388.41C224.28 370.737 238.607 356.41 256.28 356.41C273.953 356.41 288.28 370.737 288.28 388.41Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
