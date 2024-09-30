import { defineComponent as i, computed as o, openBlock as C, createElementBlock as n, normalizeClass as r, normalizeStyle as s, createElementVNode as a } from "vue";
const p = /* @__PURE__ */ i({
  __name: "TIReceiptOutline",
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
    const l = e, L = o(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (c, t) => (C(), n("svg", {
      class: r(L.value),
      style: s(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, t[0] || (t[0] = [
      a("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M495.997 50.6651C495.75 38.9723 483.375 31.443 472.843 36.7107L448.007 49.1316L423.154 36.7089L422.789 36.532C418.383 34.4675 413.267 34.5177 408.895 36.685L383.758 49.1437L358.958 36.7161L358.59 36.5374C354.151 34.453 348.991 34.5172 344.597 36.7287L320.011 49.1027L295.522 36.7379L295.156 36.5589C290.744 34.4702 285.61 34.5076 281.221 36.6772L255.987 49.1487L231.167 36.7152L230.799 36.5371C226.374 34.4592 221.231 34.5166 216.845 36.7098L192 49.1316L167.156 36.7098L166.836 36.5541C156.268 31.5457 144 39.2455 144 51.0207V323.021L47.6399 323.021C39.2734 323.078 31.257 326.426 25.3314 332.352C19.4063 338.277 16.0588 346.292 16 354.658L16.0024 357.15C16.0461 374.727 16.6424 388.06 18.1493 400.162L18.3345 401.608C20.4632 417.784 24.2756 431.235 30.4617 442.646C45.0554 469.565 71.8048 483.021 112 483.021H400L401.588 483.008C453.875 482.16 496 439.51 496 387.021V275.021V51.0207L495.997 50.6651ZM464 275.021V76.9117L455.168 81.3306C450.785 83.5225 445.648 83.5824 441.224 81.51L440.857 81.3324L415.97 68.8927L390.826 81.3563C386.449 83.5261 381.327 83.5738 376.918 81.5027L376.552 81.3252L351.805 68.9247L327.194 81.3126C322.785 83.5316 317.606 83.5884 313.158 81.4838L312.789 81.3034L288.234 68.9057L263.03 81.3641C258.656 83.5261 253.542 83.5712 249.14 81.5033L248.774 81.3261L223.992 68.9117L199.156 81.3315C194.773 83.5228 189.635 83.5821 185.212 81.5092L184.845 81.3315L176 76.9086V323.021L320 323.021C328.732 323.021 335.83 330.015 335.997 338.706L336 339.021V387.021C336 422.367 364.654 451.021 400 451.021C434.993 451.021 463.427 422.937 463.992 388.079L464 387.021V275.021ZM48.0004 355.021C47.9998 392.042 50.7478 412.923 58.5936 427.395C67.0456 442.985 82.4796 450.862 111.128 451.018L112 451.021H328.448L328.078 450.608C313.421 434.042 304.399 412.375 304.013 388.608L304 387.021V355.021H48.0004ZM416 131.021C424.837 131.021 432 138.184 432 147.021C432 155.752 425.007 162.85 416.315 163.018L416 163.021H224C215.164 163.021 208 155.857 208 147.021C208 138.289 214.994 131.191 223.686 131.024L224 131.021H416ZM432 227.021C432 218.184 424.837 211.021 416 211.021H288L287.686 211.024C278.994 211.191 272 218.289 272 227.021C272 235.857 279.164 243.021 288 243.021H416L416.315 243.018C425.007 242.85 432 235.752 432 227.021Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
