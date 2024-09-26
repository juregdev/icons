import { defineComponent as o, computed as C, openBlock as n, createElementBlock as r, normalizeClass as s, normalizeStyle as a, createElementVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TINotificationsOffCircleFill",
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
        d: "M256 48C141.31 48 48 141.31 48 256C48 370.69 141.31 464 256 464C370.69 464 464 370.69 464 256C464 141.31 370.69 48 256 48ZM146.83 313C163.16 293.66 174.69 285.53 174.69 232.2C174.69 229.7 174.757 227.28 174.89 224.94C174.941 223.299 175.989 221.856 177.533 221.3C179.078 220.744 180.805 221.188 181.89 222.42L279.89 329.29C280.959 330.458 281.238 332.147 280.602 333.597C279.965 335.047 278.534 335.986 276.95 335.99H158C146.18 336 140.06 321 146.83 313ZM295.76 356.41C293.53 375.14 276.92 384 256 384C235.08 384 218.49 375.14 216.25 356.42C216.131 355.288 216.499 354.16 217.262 353.316C218.026 352.472 219.112 351.994 220.25 352H291.78C292.914 351.999 293.996 352.48 294.755 353.323C295.514 354.166 295.879 355.292 295.76 356.42V356.41ZM362.76 373.83C356.221 379.772 346.103 379.288 340.16 372.75L148.16 160.75C142.345 154.196 142.884 144.184 149.368 138.291C155.852 132.398 165.87 132.817 171.84 139.23L363.84 351.23C366.697 354.371 368.188 358.518 367.985 362.759C367.783 366.999 365.903 370.986 362.76 373.84V373.83ZM361 323.21L216.49 165.53C215.618 164.584 215.254 163.277 215.511 162.017C215.769 160.757 216.617 159.697 217.79 159.17C219.1 158.59 220.4 158.05 221.68 157.54C224.636 156.307 226.932 153.88 228 150.86C231.72 138.6 242.15 128 256 128C269.85 128 280.29 138.6 284 150.86C285.073 153.883 287.377 156.31 290.34 157.54C311.55 165.98 337.34 183.35 337.34 232.21C337.34 285.54 348.88 293.67 365.21 313.01C366.901 315.058 367.871 317.606 367.97 320.26C368.09 321.965 367.113 323.559 365.539 324.225C363.965 324.892 362.141 324.484 361 323.21Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as default
};
