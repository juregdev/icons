import { defineComponent as o, computed as r, openBlock as s, createElementBlock as a, normalizeClass as n, normalizeStyle as C, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ o({
  __name: "TIHeartDislikeCircleFill",
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
    const l = e, i = r(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, t) => (s(), a("svg", {
      class: n(i.value),
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
        d: "M256 48C141.31 48 48 141.31 48 256C48 370.69 141.31 464 256 464C370.69 464 464 370.69 464 256C464 141.31 370.69 48 256 48ZM279.3 347.19C274.89 350.39 270.14 353.74 264.99 357.19C259.565 360.905 252.415 360.905 246.99 357.19C207.69 330.51 190.67 312.19 181.29 300.78C161.29 276.41 151.71 251.38 151.99 224.28C151.99 224.07 151.99 223.85 151.99 223.64C152.036 222.045 153.025 220.631 154.507 220.04C155.988 219.449 157.679 219.795 158.81 220.92L279.76 341.12C280.591 341.945 281.019 343.093 280.931 344.261C280.842 345.429 280.246 346.5 279.3 347.19ZM347.3 363.31C341.052 369.553 330.928 369.553 324.68 363.31L148.68 187.31C142.704 181.019 142.83 171.112 148.966 164.976C155.102 158.84 165.009 158.714 171.3 164.69L347.3 340.69C353.546 346.935 353.551 357.06 347.31 363.31H347.3ZM333.2 297.69C332.511 298.624 331.444 299.205 330.286 299.276C329.128 299.347 327.998 298.902 327.2 298.06L203.2 174.85C202.044 173.712 201.69 171.988 202.304 170.487C202.918 168.985 204.378 168.003 206 168H207.55C227.95 168 242.55 178.64 251.66 188.42C252.782 189.631 254.359 190.32 256.01 190.32C257.661 190.32 259.238 189.631 260.36 188.42C269.47 178.64 284.07 168 304.47 168C334.78 168 359.69 193.27 360 224.33C360.26 250.26 351.48 274.3 333.2 297.69Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as default
};
