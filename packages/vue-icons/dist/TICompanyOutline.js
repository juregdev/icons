import { defineComponent as o, computed as r, openBlock as i, createElementBlock as a, normalizeClass as n, normalizeStyle as p, createStaticVNode as c } from "vue";
const u = /* @__PURE__ */ o({
  __name: "TICompanyOutline",
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
    const l = t, e = r(() => [
      "icon",
      l.size,
      {
        [l.type]: l.type && !l.color,
        "is-clickable": l.clickable
      }
    ]);
    return (d, C) => (i(), a("svg", {
      class: n(e.value),
      style: p(t.color ? `color: ${t.color} !important` : void 0),
      width: "512",
      height: "512",
      viewBox: "0 0 512 512",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, C[0] || (C[0] = [
      c('<path d="M91.5 52C81.835 52 74 59.835 74 69.5C74 79.165 81.835 87 91.5 87H92L92 288H81.5C71.835 288 64 295.835 64 305.5L64 441.5C64 451.165 71.835 459 81.5 459H219.5C229.165 459 237 451.165 237 441.5V352H219.5C209.835 352 202 359.835 202 369.5V424H99L99 319H109.5C119.165 319 127 311.165 127 301.5L127 87H385V235.432C397.18 236.393 408.915 238.934 420 242.852V87H420.5C430.165 87 438 79.165 438 69.5C438 59.835 430.165 52 420.5 52H91.5Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M374 256C309.487 256 257 308.487 257 373C257 437.513 309.487 490 374 490C438.513 490 491 437.513 491 373C491 308.487 438.513 256 374 256ZM375.125 310C397.493 310 415.625 328.132 415.625 350.5C415.625 372.868 397.493 391 375.125 391C352.757 391 334.625 372.868 334.625 350.5C334.625 328.132 352.757 310 375.125 310ZM374 472C346.393 472.011 320.042 460.466 301.336 440.163C306.309 414.411 350.971 409 374 409C397.029 409 441.691 414.411 446.664 440.157C427.96 460.464 401.608 472.012 374 472Z" fill="currentColor"></path><path d="M161 135C161 130.582 164.582 127 169 127H194C198.418 127 202 130.582 202 135V162C202 166.418 198.418 170 194 170H169C164.582 170 161 166.418 161 162V135Z" fill="currentColor"></path><path d="M161 212C161 207.582 164.582 204 169 204H194C198.418 204 202 207.582 202 212V239C202 243.418 198.418 247 194 247H169C164.582 247 161 243.418 161 239V212Z" fill="currentColor"></path><path d="M169 277C164.582 277 161 280.582 161 285V312C161 316.418 164.582 320 169 320H194C198.418 320 202 316.418 202 312V285C202 280.582 198.418 277 194 277H169Z" fill="currentColor"></path><path d="M235 285C235 280.582 238.582 277 243 277H268C269.943 277 271.724 277.693 273.11 278.844C261.967 290.779 252.917 304.692 246.544 320H243C238.582 320 235 316.418 235 312V285Z" fill="currentColor"></path><path d="M350 212V237.08C338.675 239.066 327.825 242.432 317.631 247H317C312.582 247 309 243.418 309 239V212C309 207.582 312.582 204 317 204H342C346.418 204 350 207.582 350 212Z" fill="currentColor"></path><path d="M130 360C130 355.582 133.582 352 138 352H163C167.418 352 171 355.582 171 360V387C171 391.418 167.418 395 163 395H138C133.582 395 130 391.418 130 387V360Z" fill="currentColor"></path><path d="M243 127C238.582 127 235 130.582 235 135V162C235 166.418 238.582 170 243 170H268C272.418 170 276 166.418 276 162V135C276 130.582 272.418 127 268 127H243Z" fill="currentColor"></path><path d="M235 212C235 207.582 238.582 204 243 204H268C272.418 204 276 207.582 276 212V239C276 243.418 272.418 247 268 247H243C238.582 247 235 243.418 235 239V212Z" fill="currentColor"></path><path d="M317 127C312.582 127 309 130.582 309 135V162C309 166.418 312.582 170 317 170H342C346.418 170 350 166.418 350 162V135C350 130.582 346.418 127 342 127H317Z" fill="currentColor"></path>', 11)
    ]), 6));
  }
});
export {
  u as default
};
