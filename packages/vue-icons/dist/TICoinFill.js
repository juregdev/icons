import { defineComponent as o, computed as n, openBlock as r, createElementBlock as a, normalizeClass as s, normalizeStyle as c, createElementVNode as t } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TICoinFill",
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
    const e = C, i = n(() => [
      "icon",
      e.size,
      {
        [e.type]: e.type && !e.color,
        "is-clickable": e.clickable
      }
    ]);
    return (d, l) => (r(), a("svg", {
      class: s(i.value),
      style: c(C.color ? `color: ${C.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, l[0] || (l[0] = [
      t("path", {
        d: "M46 319.939C46.9244 314.289 47.5407 308.537 48.876 302.99C62.1263 247.216 96.2279 211.06 152.105 198.015C195.862 187.744 236.126 197.81 270.331 227.392C306.076 258.309 321.689 298.471 316.45 345.207C311.109 393.38 285.533 428.817 242.495 451.414C226.677 459.734 209.729 464.151 191.959 465.281C191.137 465.281 190.418 465.692 189.596 465.897C184.666 465.897 179.736 465.897 174.805 465.897C173.984 465.692 173.265 465.384 172.443 465.281C148.716 463.843 126.94 456.55 107.218 443.505C79.7934 425.325 61.3046 400.365 51.6494 368.831C48.6706 358.97 47.438 348.802 46 338.735C46 332.47 46 326.204 46 319.939ZM182.817 292.822C183.433 292.924 184.769 293.13 186.104 293.438C191.548 294.876 195.04 298.882 198.841 302.682C203.771 307.51 210.961 307.715 215.789 303.196C220.822 298.574 221.233 291.281 216.611 285.94C211.167 279.674 205.004 274.333 197.095 271.457C194.835 270.635 194.321 269.3 194.424 267.143C194.527 263.342 194.629 259.439 194.424 255.639C194.116 248.859 188.877 243.724 182.304 243.621C175.524 243.518 170.183 248.654 169.875 255.741C169.67 259.542 169.67 263.445 169.875 267.245C169.978 269.608 169.259 270.84 166.999 271.765C157.241 275.976 150.667 283.474 147.175 293.438C140.293 312.748 152.927 339.146 175.422 341.611C178.503 341.92 181.687 342.228 184.769 343.049C191.959 344.796 196.067 351.78 194.013 358.354C191.856 365.441 184.974 368.934 177.784 366.571C174.189 365.441 171.416 362.976 168.54 360.717C162.788 356.094 155.495 356.608 150.975 361.949C146.559 367.188 147.175 374.172 152.516 379.205C156.83 383.314 161.76 386.395 167.307 388.45C169.361 389.169 169.978 390.299 169.875 392.353C169.772 396.462 169.67 400.57 169.875 404.679C170.183 411.458 175.524 416.594 182.098 416.594C188.672 416.594 194.013 411.561 194.424 404.782C194.629 401.495 194.629 398.208 194.424 394.921C194.219 391.531 194.938 389.58 198.533 387.936C212.605 381.465 220.925 365.647 218.768 350.548C216.508 334.421 203.668 320.658 188.364 318.09C185.18 317.576 181.79 317.473 178.708 316.652C172.854 315.214 169.156 309.462 169.875 303.607C170.697 297.649 175.935 292.924 182.817 292.822Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        d: "M330.625 465.897C323.024 465.076 315.423 464.459 307.822 463.535C298.167 462.302 288.717 460.145 279.37 457.475C279.472 455.934 280.808 455.523 281.732 454.804C302.07 439.191 316.861 419.059 327.851 396.153C329.495 392.661 331.344 391.737 334.939 391.942C364.007 392.867 392.357 388.861 419.782 378.897C426.458 376.432 432.929 373.556 438.887 369.653C440.325 368.728 441.352 367.907 441.352 365.852C441.249 355.375 441.249 344.796 441.249 333.908C432.416 347.569 418.652 353.321 404.683 358.149C383.934 365.339 362.261 366.982 340.485 367.188C338.123 367.188 337.712 366.366 338.123 364.312C341.41 349.829 342.642 335.14 341.615 320.349C341.41 316.857 343.464 317.473 345.416 317.371C369.04 316.754 392.254 313.673 414.646 306.072C422.966 303.299 430.978 299.909 438.476 295.287C440.428 294.054 441.352 292.924 441.249 290.459C441.044 282.653 441.249 274.846 441.147 267.143C441.147 266.116 441.763 264.678 440.633 264.164C439.298 263.548 437.963 264.678 437.038 265.602C431.594 270.635 425.431 274.641 418.755 277.928C402.628 285.632 385.578 289.329 367.911 291.281C358.974 292.308 349.935 292.103 340.896 292.513C339.15 292.616 337.507 292.822 336.89 290.254C332.782 273.716 326.003 258.309 316.758 243.929C316.45 243.518 316.45 242.902 316.245 242.183C331.036 243.826 345.621 244.032 360.207 242.799C384.14 240.848 407.456 236.328 429.54 226.365C441.147 221.126 441.249 221.126 441.147 208.389C441.147 202.637 441.147 196.885 441.147 191.133C441.147 190.825 441.044 190.62 440.941 190.311C439.298 189.901 437.962 190.722 436.935 191.75C423.788 204.384 407.251 209.93 390.097 213.731C358.05 220.715 325.9 220.921 293.75 213.628C291.387 213.114 289.436 212.087 287.69 210.546C271.769 196.269 253.896 185.073 233.456 178.499C229.45 177.164 225.341 176.034 221.233 175.007C219.384 174.596 218.87 173.672 218.87 171.925C218.973 149.944 218.562 127.963 219.076 105.879C219.487 90.2666 229.039 79.7896 241.16 71.3669C256.875 60.479 274.439 54.6243 292.723 51.0292C331.549 43.3256 370.17 44.25 408.278 55.3433C425.328 60.2736 441.352 67.4637 454.089 80.5086C461.998 88.6231 466.004 98.1757 465.901 109.577C465.798 181.889 465.901 254.201 465.901 326.512C465.901 350.959 465.49 375.405 466.004 399.851C466.415 417.005 458.814 429.433 445.461 438.986C428.821 450.901 409.716 456.858 389.892 460.967C379.106 463.227 368.116 464.767 357.023 465.281C356.098 465.281 355.071 465.281 354.352 466C346.443 465.897 338.534 465.897 330.625 465.897ZM342.129 70.6479C323.948 70.8533 305.87 72.3941 288.203 77.2217C274.542 81.0222 261.394 85.7471 250.609 95.2996C241.468 103.517 241.57 111.426 250.609 119.54C259.854 127.86 271.05 132.688 282.759 136.078C320.661 146.966 358.666 147.274 396.774 137.413C410.435 133.818 423.685 129.093 434.47 119.438C443.406 111.631 443.406 103.414 434.573 95.505C428.307 89.8557 420.809 86.1579 413.105 82.9738C390.303 73.6266 366.473 70.8533 342.129 70.6479Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
