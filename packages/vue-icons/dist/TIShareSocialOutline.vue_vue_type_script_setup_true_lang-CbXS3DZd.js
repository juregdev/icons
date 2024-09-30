import { defineComponent as C, computed as o, openBlock as n, createElementBlock as r, normalizeClass as a, normalizeStyle as s, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ C({
  __name: "TIShareSocialOutline",
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
    const l = e, i = o(() => [
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
        d: "M320 112C320 76.6538 348.654 48 384 48C419.346 48 448 76.6538 448 112C448 147.346 419.346 176 384 176C365.859 176 349.481 168.452 337.835 156.326L189.868 239.556C191.259 244.804 192 250.315 192 256C192 261.685 191.259 267.196 189.868 272.444L337.835 355.674C349.481 343.548 365.859 336 384 336C419.346 336 448 364.654 448 400C448 435.346 419.346 464 384 464C348.654 464 320 435.346 320 400C320 394.315 320.741 388.804 322.132 383.556L174.165 300.326C162.519 312.452 146.141 320 128 320C92.6538 320 64 291.346 64 256C64 220.654 92.6538 192 128 192C146.141 192 162.519 199.548 174.165 211.674L322.132 128.444C320.741 123.196 320 117.685 320 112ZM356.351 128.121C356.275 127.975 356.196 127.83 356.115 127.686C356.031 127.536 355.944 127.387 355.856 127.241C353.397 122.71 352 117.518 352 112C352 94.3269 366.327 80 384 80C401.673 80 416 94.3269 416 112C416 129.673 401.673 144 384 144C372.205 144 361.901 137.619 356.351 128.121ZM155.649 239.879C150.099 230.381 139.795 224 128 224C110.327 224 96 238.327 96 256C96 273.673 110.327 288 128 288C139.795 288 150.099 281.619 155.649 272.121C155.725 271.975 155.804 271.83 155.885 271.686C155.969 271.536 156.056 271.387 156.144 271.241C158.603 266.71 160 261.518 160 256C160 250.482 158.603 245.29 156.144 240.759C156.056 240.613 155.969 240.464 155.885 240.314C155.804 240.17 155.725 240.025 155.649 239.879ZM356.115 384.314C356.031 384.464 355.944 384.612 355.856 384.759C353.397 389.29 352 394.482 352 400C352 417.673 366.327 432 384 432C401.673 432 416 417.673 416 400C416 382.327 401.673 368 384 368C372.205 368 361.901 374.381 356.351 383.88C356.275 384.025 356.196 384.17 356.115 384.314Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  p as _
};
