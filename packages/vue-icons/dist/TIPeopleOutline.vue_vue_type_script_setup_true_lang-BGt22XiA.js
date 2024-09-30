import { defineComponent as o, computed as C, openBlock as n, createElementBlock as r, normalizeClass as s, normalizeStyle as a, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIPeopleOutline",
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
      class: s(i.value),
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
        d: "M337 80C287.35 80 251.436 118.294 255.04 169.132C258.438 217.125 294.642 256 337 256C379.338 256 415.501 217.144 418.959 169.15C422.591 118.852 386.428 80 337 80ZM337 112C367.85 112 389.336 135.083 387.042 166.847C384.724 199.019 361.474 224 337 224C312.507 224 289.236 199.012 286.96 166.87C284.672 134.598 305.865 112 337 112ZM337 288C259.865 288 194.654 328.408 177.934 395.543C173.399 413.728 185.868 432 205.18 432H468.83C488.132 432 500.554 413.762 496.088 395.591C487.545 360.739 466.312 332.868 435.709 314.056C407.853 296.932 373.207 288 337 288ZM337 320C367.525 320 396.372 327.437 418.951 341.317L419.658 341.754C441.721 355.527 456.989 374.962 463.967 399.295L464.166 400H209.863L210.239 398.717C224.869 350.086 275.273 320 337 320ZM79.0401 187.069C76.0352 144.585 106.492 112 148 112C189.336 112 219.989 145.041 216.959 187.09C214.08 227.047 183.594 260 148 260C112.389 260 81.8691 227.032 79.0401 187.069ZM185.042 184.79C186.738 161.25 170.735 144 148 144C125.031 144 109.267 160.866 110.96 184.81C112.669 208.953 130.302 228 148 228C165.681 228 183.301 208.955 185.042 184.79ZM213.665 291.454C194.278 282.572 172.595 278.55 148 278.55C85.0681 278.55 31.5845 311.679 17.8252 366.88C13.7421 383.361 25.1058 400 42.7202 400H155L155.315 399.997C164.006 399.829 171 392.731 171 384L170.997 383.685C170.829 374.994 163.732 368 155 368H50.8532L50.9664 367.676C63.5078 332.375 101.531 310.55 148 310.55C168.28 310.55 185.482 313.741 200.336 320.546L200.638 320.681C208.606 324.138 217.911 320.598 221.546 312.665C225.227 304.631 221.698 295.135 213.665 291.454Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as _
};
