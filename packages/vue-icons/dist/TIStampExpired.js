import { defineComponent as o, computed as a, openBlock as n, createElementBlock as s, normalizeClass as r, normalizeStyle as d, createElementVNode as t } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TIStampExpired",
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
    const l = e, C = a(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (c, i) => (n(), s("svg", {
      class: r(C.value),
      style: d(e.color ? `color: ${e.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, i[0] || (i[0] = [
      t("path", {
        d: "M199.577 117.178C206.561 114.288 212.365 108.544 225.614 96.0205C240.873 81.5975 243.63 80 253.25 80C262.87 80 265.627 81.5975 280.886 96.0205C294.135 108.544 299.939 114.288 306.923 117.178C313.316 119.823 320.7 120.076 335.692 120.948C351.304 121.858 367.106 124.034 370.805 125.784C380.813 130.525 383.725 139.42 385.552 170.808C386.424 185.8 386.677 193.184 389.322 199.577C392.212 206.561 397.956 212.365 410.479 225.614C424.903 240.873 426.5 243.63 426.5 253.25C426.5 262.87 424.903 265.627 410.479 280.886C397.956 294.135 392.212 299.939 389.322 306.923C386.677 313.316 386.424 320.7 385.552 335.692C382.956 380.337 380.337 382.956 335.692 385.552C320.7 386.424 313.316 386.677 306.923 389.322C299.939 392.212 294.135 397.956 280.886 410.479C265.627 424.903 262.87 426.5 253.25 426.5C243.63 426.5 240.873 424.903 225.614 410.479C212.365 397.956 206.561 392.212 199.577 389.322C193.184 386.677 185.8 386.424 170.808 385.552C126.163 382.956 123.544 380.337 120.948 335.692C120.076 320.7 119.823 313.316 117.178 306.923C114.288 299.939 108.544 294.135 96.0205 280.886C81.5975 265.627 80 262.87 80 253.25C80 243.63 81.5975 240.873 96.0205 225.614C108.544 212.365 114.288 206.561 117.178 199.577C119.823 193.184 120.076 185.8 120.948 170.808C123.544 126.163 126.163 123.544 170.808 120.948C185.8 120.076 193.184 119.823 199.577 117.178Z",
        fill: "#A0AEC0"
      }, null, -1),
      t("path", {
        d: "M262.153 206.648C262.088 203.305 259.358 200.615 256 200.615C252.601 200.615 249.846 203.371 249.846 206.769V262.154L249.847 262.275C249.912 265.618 252.642 268.308 256 268.308H292.923L293.044 268.307C296.387 268.242 299.077 265.512 299.077 262.154L299.076 262.033C299.011 258.69 296.281 256 292.923 256H262.154V206.769L262.153 206.648Z",
        fill: "white"
      }, null, -1),
      t("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M256 176C211.832 176 176 211.832 176 256C176 300.168 211.832 336 256 336C300.168 336 336 300.168 336 256C336 211.832 300.168 176 256 176ZM256 188.308C293.371 188.308 323.692 218.629 323.692 256C323.692 293.371 293.371 323.692 256 323.692C218.629 323.692 188.308 293.371 188.308 256C188.308 218.629 218.629 188.308 256 188.308Z",
        fill: "white"
      }, null, -1)
    ]), 6));
  }
});
export {
  u as default
};
