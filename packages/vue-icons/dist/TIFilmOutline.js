import { defineComponent as i, computed as V, openBlock as o, createElementBlock as n, normalizeClass as r, normalizeStyle as s, createElementVNode as a } from "vue";
const d = /* @__PURE__ */ i({
  __name: "TIFilmOutline",
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
    const l = e, C = V(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (H, t) => (o(), n("svg", {
      class: r(C.value),
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
        d: "M100 80H156H356H412H436C460.301 80 480 99.6995 480 124V148V204V228V284V308V364V388C480 412.301 460.301 432 436 432H412H356H156H100H76C51.6995 432 32 412.301 32 388V364V308V284V228V204V148V124C32 99.6995 51.6995 80 76 80H100ZM112 388V364C112 357.373 106.627 352 100 352H76C69.3726 352 64 357.373 64 364V388C64 394.627 69.3726 400 76 400H100C106.627 400 112 394.627 112 388ZM112 308V284C112 277.373 106.627 272 100 272H76C69.3726 272 64 277.373 64 284V308C64 314.627 69.3726 320 76 320H100C106.627 320 112 314.627 112 308ZM156 240H356C362.627 240 368 234.627 368 228V204V148V124C368 117.373 362.627 112 356 112H156C149.373 112 144 117.373 144 124V148V204V228C144 234.627 149.373 240 156 240ZM400 284V308C400 314.627 405.373 320 412 320H436C442.627 320 448 314.627 448 308V284C448 277.373 442.627 272 436 272H412C405.373 272 400 277.373 400 284ZM400 364V388C400 394.627 405.373 400 412 400H436C442.627 400 448 394.627 448 388V364C448 357.373 442.627 352 436 352H412C405.373 352 400 357.373 400 364ZM400 148V124C400 117.373 405.373 112 412 112H436C442.627 112 448 117.373 448 124V148C448 154.627 442.627 160 436 160H412C405.373 160 400 154.627 400 148ZM400 228V204C400 197.373 405.373 192 412 192H436C442.627 192 448 197.373 448 204V228C448 234.627 442.627 240 436 240H412C405.373 240 400 234.627 400 228ZM144 284V308V364V388C144 394.627 149.373 400 156 400H356C362.627 400 368 394.627 368 388V364V308V284C368 277.373 362.627 272 356 272H156C149.373 272 144 277.373 144 284ZM112 204V228C112 234.627 106.627 240 100 240H76C69.3726 240 64 234.627 64 228V204C64 197.373 69.3726 192 76 192H100C106.627 192 112 197.373 112 204ZM112 124V148C112 154.627 106.627 160 100 160H76C69.3726 160 64 154.627 64 148V124C64 117.373 69.3726 112 76 112H100C106.627 112 112 117.373 112 124Z",
        fill: "currentColor"
      }, null, -1)
    ]), 6));
  }
});
export {
  d as default
};
