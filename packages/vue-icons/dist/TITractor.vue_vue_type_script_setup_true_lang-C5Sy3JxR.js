import { defineComponent as i, computed as r, openBlock as n, createElementBlock as a, normalizeClass as s, normalizeStyle as c, createElementVNode as e } from "vue";
const p = /* @__PURE__ */ i({
  __name: "TITractor",
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
    const l = C, o = r(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (n(), a("svg", {
      class: s(o.value),
      style: c(C.color ? `color: ${C.color} !important` : void 0),
      width: "513",
      height: "512",
      viewBox: "0 0 513 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      e("path", {
        d: "M475.855 348.111C473.192 331.185 465.803 316.578 453.602 304.635C451.712 302.745 450.938 300.941 450.938 298.277C451.024 283.67 451.282 269.064 450.853 254.457C450.251 230.056 431.52 209.263 407.463 205.654C397.496 204.194 387.443 205.139 377.476 204.967C374.641 204.967 373.524 204.366 373.61 201.272C373.782 181.339 373.696 161.491 373.696 141.558C373.696 134.168 377.047 129.872 384.264 127.896C385.896 127.467 386.67 127.037 386.67 125.233C386.584 118.187 386.584 111.228 386.67 104.182C386.67 102.206 385.896 101.776 384.092 102.034C379.195 102.55 374.469 103.495 370.087 105.729C355.309 113.29 348.091 125.662 348.005 142.159C347.919 161.749 347.919 181.425 348.091 201.015C348.091 204.194 347.404 205.139 344.139 205.053C327.814 204.881 311.489 204.881 295.164 205.053C292.071 205.053 291.126 203.936 290.353 201.187C280.901 169.396 271.364 137.691 261.827 105.9C261.483 104.698 261.225 103.409 260.796 101.862C266.81 101.862 272.567 101.69 278.238 101.948C281.331 102.12 282.104 101.003 281.932 98.0816C281.675 92.3249 281.589 86.6542 281.932 80.8975C282.19 76.9451 280.901 76 277.035 76C225.225 76.1718 173.329 76.0859 121.518 76.0859C107.341 76.0859 93.1645 76.1718 78.9875 76C76.4099 76 75.4648 76.5155 75.5507 79.265C75.7225 85.709 75.7225 92.1531 75.5507 98.5972C75.4648 101.433 76.4958 101.948 78.9875 101.862C85.1738 101.69 91.2742 102.034 97.4605 101.69C100.725 101.518 101.499 102.55 101.413 105.729C101.241 130.388 101.241 154.961 101.413 179.62C101.413 183.229 100.21 184.346 97.0309 185.291C77.6987 190.79 60.1709 199.898 44.2755 212.27C41.9557 214.075 42.0416 215.192 43.8459 217.254C47.7124 221.636 51.5788 226.104 55.0156 230.829C57.1637 233.75 58.5384 234.18 61.6315 231.688C78.3861 218.457 97.3746 210.122 118.339 206.771C155.887 200.757 190.083 209.263 219.983 232.977C248.681 255.832 264.834 285.904 268.271 322.593C269.732 337.886 268.786 353.18 268.872 368.56C268.872 371.825 269.818 372.598 272.911 372.512C287.259 372.341 301.522 372.427 315.871 372.427C322.917 372.427 322.917 372.427 324.807 379.472C325.322 381.362 325.924 383.339 326.611 385.229C337.008 415.473 366.392 436.523 398.699 436.867C431.005 437.211 460.733 416.762 471.817 386.775C474.137 380.417 475.082 373.801 476.801 367.357C476.801 362.202 476.801 357.047 476.801 351.892C476.371 350.603 476.027 349.4 475.855 348.111ZM228.49 204.881C226.256 204.881 224.365 204.366 222.475 203.163C194.379 185.463 163.705 177.558 130.54 179.534C127.533 179.706 126.931 178.847 126.931 176.098C127.017 152.469 127.017 128.841 126.931 105.213C126.931 102.206 127.962 101.69 130.626 101.776C147.209 101.862 163.877 101.862 180.46 101.862C196.957 101.862 213.368 101.948 229.864 101.776C232.614 101.776 233.731 102.635 234.504 105.299C243.955 137.261 253.578 169.138 263.202 201.015C264.147 204.194 263.803 205.139 260.28 205.053C249.712 204.709 239.058 204.795 228.49 204.881ZM323.776 344.245C323.346 346.221 322.401 346.736 320.511 346.736C312.778 346.65 305.045 346.65 297.398 346.736C295.078 346.736 294.563 345.877 294.563 343.729C294.735 332.903 294.477 321.991 292.93 311.251C292.758 309.876 292.071 307.986 294.735 307.986C310.114 308.072 325.494 307.986 341.905 307.986C332.368 319.156 326.439 330.927 323.776 344.245ZM289.923 282.296C286.658 282.296 285.197 281.351 284.08 278.257C277.98 262.018 269.216 247.412 258.046 234.18C257.273 233.321 256.672 232.376 255.984 231.431C255.898 231.345 256.07 231.173 256.242 230.657C257.531 230.657 258.906 230.657 260.28 230.657C305.646 230.657 351.013 230.657 396.379 230.657C414.68 230.657 425.248 241.14 425.248 259.355C425.248 268.205 425.248 277.055 425.248 286.42C419.749 285.217 414.68 283.413 409.353 282.897C405.229 282.468 401.104 282.21 396.894 282.21C361.151 282.21 325.58 282.124 289.923 282.296ZM399.214 411.091C370.86 411.005 347.662 387.72 347.834 359.281C348.005 331.099 371.118 308.072 399.3 307.986C427.654 307.986 450.938 331.185 450.938 359.538C450.938 387.978 427.654 411.177 399.214 411.091Z",
        fill: "currentColor"
      }, null, -1),
      e("path", {
        d: "M155.973 232.118C108.545 224.042 60.1712 252.224 43.5026 297.418C40.1517 306.44 38.6051 315.891 36.8008 325.256C36.8008 331.013 36.8008 336.684 36.8008 342.44C38.4333 350.087 39.2925 357.906 41.7842 365.381C58.6247 414.786 105.194 443.139 156.832 435.321C213.54 426.729 253.063 369.248 240.949 313.055C231.669 270.525 199.105 239.421 155.973 232.118ZM139.992 411.091C97.4608 411.177 62.6629 376.379 62.577 333.848C62.4911 291.317 97.289 256.52 139.82 256.434C182.351 256.348 217.148 291.146 217.234 333.676C217.234 376.207 182.522 411.005 139.992 411.091Z",
        fill: "currentColor"
      }, null, -1),
      e("path", {
        d: "M399.301 337.027C387.014 337.113 376.79 347.338 376.875 359.624C376.961 371.911 387.186 382.136 399.473 382.05C411.759 381.964 421.984 371.739 421.898 359.453C421.898 347.166 411.588 336.941 399.301 337.027Z",
        fill: "currentColor"
      }, null, -1),
      e("path", {
        d: "M140.594 295.184C119.801 294.496 102.101 311.509 101.242 332.989C100.469 353.868 117.911 371.911 139.391 372.427C160.269 372.942 177.883 355.758 178.485 334.45C179.086 313.571 161.988 295.871 140.594 295.184Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
