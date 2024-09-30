import { defineComponent as o, computed as e, openBlock as a, createElementBlock as i, normalizeClass as p, normalizeStyle as n, createStaticVNode as c } from "vue";
const s = /* @__PURE__ */ o({
  __name: "TIHorizontal",
  props: {
    size: {
      type: String,
      default: "is-default",
      validator(t) {
        return ["is-small", "is-medium", "is-large", "is-default", "is-12", "is-14", "is-26", "is-28", "is-36"].indexOf(t) > -1;
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
  setup(t) {
    const l = t, r = e(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, C) => (a(), i("svg", {
      class: p(r.value),
      style: n(t.color ? `color: ${t.color} !important` : void 0),
      width: "13",
      height: "10",
      viewBox: "0 0 13 10",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, C[0] || (C[0] = [
      c('<path d="M0 0.53125C0 0.272367 0.209867 0.0625 0.46875 0.0625C0.727633 0.0625 0.9375 0.272367 0.9375 0.53125V9.4375C0.9375 9.69638 0.727633 9.90625 0.46875 9.90625C0.209867 9.90625 0 9.69638 0 9.4375V0.53125Z" fill="currentColor"></path><path d="M12.0625 0.53125C12.0625 0.272367 12.2724 0.0625 12.5312 0.0625C12.7901 0.0625 13 0.272367 13 0.53125V9.4375C13 9.69638 12.7901 9.90625 12.5312 9.90625C12.2724 9.90625 12.0625 9.69638 12.0625 9.4375V0.53125Z" fill="currentColor"></path><path d="M10.875 1.0625C11.1511 1.0625 11.375 0.838642 11.375 0.5625C11.375 0.286358 11.1511 0.0625 10.875 0.0625C10.5989 0.0625 10.375 0.286358 10.375 0.5625C10.375 0.838642 10.5989 1.0625 10.875 1.0625Z" fill="currentColor"></path><path d="M11.375 9.40625C11.375 9.68239 11.1511 9.90625 10.875 9.90625C10.5989 9.90625 10.375 9.68239 10.375 9.40625C10.375 9.13011 10.5989 8.90625 10.875 8.90625C11.1511 8.90625 11.375 9.13011 11.375 9.40625Z" fill="currentColor"></path><path d="M9.125 1.0625C9.40114 1.0625 9.625 0.838642 9.625 0.5625C9.625 0.286358 9.40114 0.0625 9.125 0.0625C8.84886 0.0625 8.625 0.286358 8.625 0.5625C8.625 0.838642 8.84886 1.0625 9.125 1.0625Z" fill="currentColor"></path><path d="M9.625 9.40625C9.625 9.68239 9.40114 9.90625 9.125 9.90625C8.84886 9.90625 8.625 9.68239 8.625 9.40625C8.625 9.13011 8.84886 8.90625 9.125 8.90625C9.40114 8.90625 9.625 9.13011 9.625 9.40625Z" fill="currentColor"></path><path d="M7.375 1.0625C7.65114 1.0625 7.875 0.838642 7.875 0.5625C7.875 0.286358 7.65114 0.0625 7.375 0.0625C7.09886 0.0625 6.875 0.286358 6.875 0.5625C6.875 0.838642 7.09886 1.0625 7.375 1.0625Z" fill="currentColor"></path><path d="M7.875 9.40625C7.875 9.68239 7.65114 9.90625 7.375 9.90625C7.09886 9.90625 6.875 9.68239 6.875 9.40625C6.875 9.13011 7.09886 8.90625 7.375 8.90625C7.65114 8.90625 7.875 9.13011 7.875 9.40625Z" fill="currentColor"></path><path d="M5.625 1.0625C5.90114 1.0625 6.125 0.838642 6.125 0.5625C6.125 0.286358 5.90114 0.0625 5.625 0.0625C5.34886 0.0625 5.125 0.286358 5.125 0.5625C5.125 0.838642 5.34886 1.0625 5.625 1.0625Z" fill="currentColor"></path><path d="M6.125 9.40625C6.125 9.68239 5.90114 9.90625 5.625 9.90625C5.34886 9.90625 5.125 9.68239 5.125 9.40625C5.125 9.13011 5.34886 8.90625 5.625 8.90625C5.90114 8.90625 6.125 9.13011 6.125 9.40625Z" fill="currentColor"></path><path d="M3.875 1.0625C4.15114 1.0625 4.375 0.838642 4.375 0.5625C4.375 0.286358 4.15114 0.0625 3.875 0.0625C3.59886 0.0625 3.375 0.286358 3.375 0.5625C3.375 0.838642 3.59886 1.0625 3.875 1.0625Z" fill="currentColor"></path><path d="M4.375 9.40625C4.375 9.68239 4.15114 9.90625 3.875 9.90625C3.59886 9.90625 3.375 9.68239 3.375 9.40625C3.375 9.13011 3.59886 8.90625 3.875 8.90625C4.15114 8.90625 4.375 9.13011 4.375 9.40625Z" fill="currentColor"></path><path d="M2.125 1.0625C2.40114 1.0625 2.625 0.838642 2.625 0.5625C2.625 0.286358 2.40114 0.0625 2.125 0.0625C1.84886 0.0625 1.625 0.286358 1.625 0.5625C1.625 0.838642 1.84886 1.0625 2.125 1.0625Z" fill="currentColor"></path><path d="M2.625 9.40625C2.625 9.68239 2.40114 9.90625 2.125 9.90625C1.84886 9.90625 1.625 9.68239 1.625 9.40625C1.625 9.13011 1.84886 8.90625 2.125 8.90625C2.40114 8.90625 2.625 9.13011 2.625 9.40625Z" fill="currentColor"></path><path d="M1.69936 4.64046C1.60573 4.73383 1.56014 4.85694 1.56259 4.9793C1.56014 5.10165 1.60573 5.22477 1.69936 5.31814L3.42701 7.04087C3.6095 7.22284 3.90535 7.22284 4.08784 7.04087C4.27032 6.85891 4.27032 6.56389 4.08784 6.38193L3.18238 5.47905H9.8278L8.91216 6.39208C8.72968 6.57405 8.72968 6.86907 8.91216 7.05103C9.09465 7.23299 9.3905 7.23299 9.57298 7.05103L11.3006 5.32829C11.3943 5.23492 11.4399 5.11181 11.4374 4.98945C11.4399 4.8671 11.3943 4.74398 11.3006 4.65061L9.57298 2.92788C9.3905 2.74591 9.09465 2.74591 8.91216 2.92788C8.72968 3.10984 8.72968 3.40486 8.91216 3.58682L9.87525 4.54717L3.11457 4.54717L4.08784 3.57667C4.27032 3.3947 4.27032 3.09968 4.08784 2.91772C3.90535 2.73576 3.6095 2.73576 3.42701 2.91772L1.69936 4.64046Z" fill="currentColor"></path>', 15)
    ]), 6));
  }
});
export {
  s as _
};
