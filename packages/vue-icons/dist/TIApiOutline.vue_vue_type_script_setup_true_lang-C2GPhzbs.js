import { defineComponent as C, computed as i, openBlock as o, createElementBlock as r, normalizeClass as a, normalizeStyle as n, createStaticVNode as d } from "vue";
const p = /* @__PURE__ */ C({
  __name: "TIApiOutline",
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
    const L = e, t = i(() => [
      "icon",
      L.size,
      {
        [L.type]: L.type && !L.color,
        "is-clickable": L.clickable
      }
    ]);
    return (c, l) => (o(), r("svg", {
      class: a(t.value),
      style: n(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, l[0] || (l[0] = [
      d('<path d="M298.924 23L299.062 23.0018C311.752 23.2213 322.591 32.2148 325.148 44.6459L325.242 45.143L325.32 45.6428L332.032 93.4089C332.035 93.4275 332.045 93.444 332.1 93.4745L332.151 93.5002C339.941 97.2605 347.434 101.605 354.543 106.48L355.794 107.346L400.821 89.2212L400.962 89.1669C413.015 84.5771 426.606 89.2228 433.34 100.178L433.55 100.526L476.396 174.655C482.986 185.985 480.414 200.419 470.317 208.776L469.996 209.034L431.807 239.018L431.792 239.037L431.788 239.062L431.805 239.258C432.199 244.203 432.406 248.661 432.405 253.093C432.385 256.603 432.256 260.111 432.018 263.61L431.891 265.36L431.779 266.712L470.045 296.727L470.297 296.931C480.272 305.2 482.892 319.401 476.595 330.644L476.388 331.006L470.034 342H433.073L446.437 318.878L405.001 286.379C400.697 283.003 398.429 277.674 398.949 272.262L398.987 271.901L399.035 271.54C399.911 265.367 400.369 259.141 400.406 252.999C400.406 249.833 400.261 246.473 399.975 242.683L399.906 241.801L399.882 241.506C399.078 231.028 403.465 220.818 411.639 214.174L412.025 213.865L446.468 186.821L408.263 120.719L367.738 137.033C358.047 140.932 347.085 139.849 338.336 134.163L337.908 133.88L337.489 133.594C331.766 129.593 325.751 126.029 319.56 122.963L318.32 122.357C308.776 117.815 302.094 108.868 300.425 98.4002L300.351 97.916L294.32 54.9994H217.763L211.683 98.264C210.26 108.49 203.988 117.376 194.865 122.158L194.435 122.379L193.995 122.597C187.659 125.668 181.55 129.186 175.774 133.082L174.623 133.866C165.909 139.939 154.766 141.304 144.803 137.516L144.329 137.331L103.803 121.011L65.5946 187.117L99.9286 214.089C108.155 220.54 112.696 230.587 112.129 241.073L112.099 241.564L112.06 242.064C111.719 245.831 111.546 249.434 111.546 252.969C111.546 256.151 111.693 259.486 111.984 263.101L112.097 264.455C112.924 274.917 108.574 285.123 100.393 291.823L100.006 292.134L65.5626 319.176L103.768 385.278L144.294 368.966C148.076 367.444 152.053 366.681 156.016 366.655V398.742L111.21 416.778L111.07 416.832C99.0167 421.422 85.4252 416.776 78.6913 405.821L78.4809 405.473L35.6348 331.344C29.0452 320.014 31.6171 305.58 41.7145 297.223L42.035 296.965L80.1778 267.018L80.1928 266.998L80.1965 266.974L80.1849 266.846C79.7646 261.977 79.5456 257.417 79.5456 252.969C79.5456 248.438 79.7648 243.875 80.1826 239.27L41.9818 209.262C41.8306 209.143 41.6815 209.021 41.5346 208.897C31.7187 200.597 29.1891 186.515 35.4362 175.356L35.643 174.993L78.5038 100.838C85.0847 89.7412 98.6209 84.9212 110.711 89.3124L111.238 89.5101L156.224 107.624C156.259 107.638 156.298 107.634 156.401 107.562C163.478 102.688 170.893 98.3272 178.577 94.517L179.992 93.8224L186.74 45.8106L186.805 45.4149C189.01 32.797 199.746 23.4689 212.511 23.0142L213.076 23.0003L298.924 23Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M263.905 173.389C301.826 177.198 331.817 207.189 335.628 245.137C338.95 278.769 320.779 310.86 290.23 325.314C259.681 339.768 223.344 333.465 199.447 309.568C175.55 285.671 169.247 249.335 183.701 218.785C198.155 188.236 230.246 170.065 263.905 173.389ZM212.627 232.471C203.955 250.801 207.736 272.602 222.074 286.941C236.413 301.279 258.214 305.06 276.544 296.388C294.873 287.716 305.776 268.461 303.786 248.308C301.498 225.531 283.484 207.517 260.733 205.232C240.554 203.239 221.299 214.142 212.627 232.471Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M279.426 486H309.673L253.982 362H225.513L170 486H199.536L210.568 459.429H268.394L279.426 486ZM219.82 437.64L239.57 390.166L259.32 437.64H219.82Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M376.507 362H322.595V486H351.419V451.811H376.507C409.78 451.811 430.597 434.629 430.597 406.994C430.597 379.183 409.78 362 376.507 362ZM374.906 428.429H351.419V385.383H374.906C392.521 385.383 401.417 393.354 401.417 406.994C401.417 420.457 392.521 428.429 374.906 428.429Z" fill="currentColor"></path><path d="M480 486H451.176V362H480V486Z" fill="currentColor"></path>', 5)
    ]), 6));
  }
});
export {
  p as _
};
