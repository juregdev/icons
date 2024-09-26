import { defineComponent as o, computed as C, openBlock as n, createElementBlock as r, normalizeClass as a, normalizeStyle as s, createElementVNode as c } from "vue";
const L = /* @__PURE__ */ o({
  __name: "TIShieldCheckmarkOutline",
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
    return (d, t) => (n(), r("svg", {
      class: a(i.value),
      style: s(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      c("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M249.416 33.4181L244.627 35.5749C167.26 70.3144 131.211 81.3501 46.0766 96.6214C38.8238 97.9224 33.3973 104.009 32.9333 111.363C28.9806 174.01 37.669 230.366 57.3619 280.599C74.2064 323.567 98.6502 360.967 128.951 393.115C152.896 418.521 179.284 439.408 206.462 456.164L208.183 457.22C225.03 467.491 239.48 474.595 250.024 478.842C253.86 480.386 258.144 480.386 261.979 478.842C272.881 474.451 287.958 467.006 305.542 456.164C332.719 439.408 359.108 418.521 383.052 393.115C413.353 360.967 437.797 323.567 454.641 280.599C474.334 230.366 483.022 174.01 479.07 111.363C478.606 104.009 473.179 97.9224 465.927 96.6214C379.055 81.0385 343.292 69.8657 262.587 33.4181C258.4 31.5273 253.603 31.5273 249.416 33.4181ZM256.002 65.543L256.776 65.8908C330.082 98.6947 368.613 111.031 444.902 125.305L447.743 125.833L447.789 127.178C449.454 179.615 441.388 226.732 424.849 268.92C409.557 307.927 387.359 341.891 359.766 371.167C337.859 394.41 313.652 413.57 288.747 428.926C280.038 434.295 271.717 438.899 263.962 442.77L262.334 443.576C260.56 444.447 258.901 445.238 257.365 445.95L256.002 446.576L255.924 446.542C254.088 445.705 252.054 444.745 249.84 443.659L249.095 443.293C241.042 439.316 232.361 434.539 223.256 428.926C198.351 413.57 174.144 394.41 152.237 371.167C124.645 341.891 102.446 307.927 87.1543 268.92L86.618 267.542C70.4414 225.708 62.5669 179.045 64.2139 127.178L64.2596 125.833L64.7775 125.738C141.059 111.567 179.622 99.517 250.827 67.854L256.002 65.543ZM346.473 163.903C339.792 158.119 329.688 158.847 323.904 165.528L224.242 280.661L187.199 244.371L186.933 244.117C180.606 238.191 170.67 238.379 164.572 244.603C158.388 250.915 158.492 261.045 164.805 267.229L214.005 315.429L214.26 315.674C220.866 321.872 231.339 321.356 237.299 314.472L348.099 186.472L348.33 186.199C353.861 179.518 353.064 169.608 346.473 163.903Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  L as default
};
