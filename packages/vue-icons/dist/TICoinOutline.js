import { defineComponent as o, computed as n, openBlock as r, createElementBlock as a, normalizeClass as s, normalizeStyle as c, createElementVNode as t } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TICoinOutline",
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
        d: "M355.962 466C346.719 466 337.372 466 328.129 466C326.486 465.076 324.637 465.384 322.891 465.178C298.961 463.432 275.647 458.811 253.977 448.129C251.717 447 250.074 447.308 247.917 448.438C236.003 455.216 223.371 460.043 209.916 462.816C203.959 464.049 197.9 464.87 191.943 465.897C185.678 465.897 179.413 465.897 173.045 465.897C166.472 464.87 159.797 464.254 153.326 462.919C132.169 458.4 113.066 449.465 96.3252 435.702C74.5518 418.037 59.557 395.545 51.4433 368.534C48.5676 358.879 47.3352 348.917 46 338.955C46 333.511 46 328.068 46 322.522C46.2054 321.392 46.5135 320.16 46.6162 319.03C48.4649 295.921 55.9623 274.764 68.6977 255.559C100.741 207.288 158.051 185.001 214.333 198.866C218.03 199.79 219.16 199.482 219.057 195.271C218.852 166.719 219.057 138.167 218.954 109.616C218.954 98.1127 223.062 88.3558 231.073 80.1395C243.706 67.1987 259.625 60.1121 276.469 55.1823C314.778 44.0902 353.497 43.3713 392.422 51.2795C412.449 55.3877 431.758 61.9608 447.985 75.0042C458.975 83.9395 465.856 95.0316 465.856 109.718C465.753 207.288 465.856 304.857 465.856 402.426C465.856 406.123 465.548 409.821 464.521 413.415C460.926 426.459 451.888 435.189 441.001 442.275C421.487 454.805 399.611 460.351 377.016 463.638C370.033 464.562 363.049 465.178 355.962 466ZM292.799 330.533C292.593 269.218 242.576 219.304 181.364 219.201C120.461 219.099 70.2382 269.732 70.6491 331.046C70.9572 391.95 120.769 441.556 181.467 441.454C242.782 441.248 293.004 391.334 292.799 330.533ZM343.124 70.6907C320.118 70.8961 298.756 73.2583 278.215 80.4476C267.431 84.1449 257.058 88.7666 248.944 97.0857C241.857 104.378 241.96 110.951 248.944 118.14C255.209 124.713 263.117 128.821 271.334 132.108C289.307 139.503 308.204 142.789 327.513 143.919C354.319 145.562 380.714 143.303 406.287 134.676C417.379 130.978 427.958 126.254 436.174 117.627C442.85 110.745 442.747 104.48 436.174 97.4965C431.244 92.2586 425.185 88.5612 418.714 85.5828C394.374 74.2853 368.389 71.1015 343.124 70.6907ZM243.603 145.665C243.603 156.962 243.911 167.438 243.501 177.914C243.193 185.514 246.376 190.958 251.922 195.579C259.523 201.844 268.252 206.158 277.496 209.136C318.167 222.18 359.146 222.385 400.125 211.293C412.141 208.006 423.644 203.179 433.401 195.066C438.742 190.649 441.823 185.411 441.412 178.017C441.001 170.622 441.309 163.227 441.309 155.935C441.309 152.649 441.309 149.26 441.309 145.459C410.395 163.638 377.016 168.979 342.713 168.979C308.102 169.081 274.62 163.946 243.603 145.665ZM441.207 368.636C436.482 371.101 432.374 373.566 428.061 375.517C403.309 386.918 377.016 391.026 350.108 392.053C336.345 392.566 322.48 391.847 308.821 389.896C305.534 389.382 303.377 389.793 301.734 393.285C298.139 400.783 293.312 407.664 288.177 414.237C283.863 419.783 278.728 424.61 273.798 430.156C286.431 434.983 299.064 437.654 311.902 439.297C341.173 443.097 370.238 442.07 398.79 434.059C411.217 430.567 423.131 425.945 433.196 417.524C437.304 414.032 441.104 410.129 441.207 404.275C441.309 392.566 441.207 380.961 441.207 368.636ZM441.207 220.845C388.827 247.65 334.702 248.369 278.728 236.045C293.62 251.656 304.507 269.218 310.977 289.451C311.491 290.889 312.518 291.094 313.853 291.3C342.919 294.586 371.676 293.457 399.92 285.343C412.039 281.851 423.747 277.229 433.504 268.91C437.304 265.726 441.001 262.029 441.207 256.791C441.412 244.775 441.207 232.758 441.207 220.845ZM441.207 294.175C440.282 294.586 439.563 294.689 439.05 295.1C421.385 305.781 401.871 311.224 381.638 314.511C361.303 317.797 340.864 318.516 320.324 316.668C317.448 316.462 316.421 316.976 316.729 320.057C318.269 334.436 316.934 348.712 313.442 362.679C312.929 364.733 313.134 365.76 315.805 366.069C343.843 369.15 371.47 367.815 398.687 360.214C411.217 356.722 423.336 351.998 433.504 343.474C437.304 340.29 441.001 336.592 441.207 331.354C441.412 319.03 441.207 306.808 441.207 294.175Z",
        fill: "currentColor"
      }, null, -1),
      t("path", {
        d: "M159.488 357.75C162.775 357.75 165.548 359.085 168.013 361.139C170.889 363.604 173.97 365.966 177.77 366.89C185.267 368.739 192.046 364.528 193.381 357.133C194.613 349.944 189.375 343.474 181.57 343.063C172.121 342.549 163.905 339.365 156.715 333.1C137.51 316.154 141.823 283.289 165.034 272.505C168.321 270.964 169.451 269.218 169.143 265.726C168.834 262.44 168.937 259.153 169.143 255.867C169.451 249.088 174.689 243.953 181.262 243.85C187.937 243.748 193.381 248.986 193.689 255.969C193.894 259.975 193.792 263.878 193.689 267.883C193.586 269.835 194.202 270.862 196.051 271.478C203.549 274.251 209.505 279.181 214.846 285.035C220.289 290.992 220.495 298.181 215.257 303.213C210.122 308.143 203.035 307.835 197.386 302.289C194.511 299.516 191.738 296.743 188.246 294.792C183.213 292.121 177.667 292.327 173.662 295.921C169.759 299.413 168.218 303.727 169.759 308.862C171.402 314.408 175.51 318.106 181.262 318.414C195.846 319.235 207.143 325.5 214.127 338.544C223.781 356.414 216.078 379.728 197.592 388.253C194.511 389.691 193.381 391.334 193.689 394.62C193.997 398.01 193.894 401.502 193.689 404.891C193.381 411.669 188.04 416.805 181.467 416.805C174.894 416.805 169.553 411.772 169.245 404.994C169.04 400.372 170.375 395.134 168.732 391.231C167.088 387.431 161.132 387.226 157.64 384.35C155.072 382.296 152.299 380.447 150.245 377.88C146.958 373.977 146.445 369.561 148.499 364.836C150.348 360.42 154.764 357.75 159.488 357.75Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
