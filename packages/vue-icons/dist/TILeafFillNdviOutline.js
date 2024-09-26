import { defineComponent as e, computed as o, openBlock as a, createElementBlock as i, normalizeClass as p, normalizeStyle as n, createStaticVNode as c } from "vue";
const u = /* @__PURE__ */ e({
  __name: "TILeafFillNdviOutline",
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
    const t = C, r = o(() => [
      "icon",
      t.size,
      {
        [t.type]: t.type && !t.color,
        "is-clickable": t.clickable
      }
    ]);
    return (d, l) => (a(), i("svg", {
      class: p(r.value),
      style: n(C.color ? `color: ${C.color} !important` : void 0),
      width: "256",
      height: "256",
      viewBox: "0 0 256 256",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, l[0] || (l[0] = [
      c('<path d="M212.612 25.7114C215.783 24.9467 219.061 26.474 220.515 29.3932C221.276 30.9218 222.016 32.4408 222.734 33.9503C224.393 37.4397 222.91 41.6137 219.42 43.2731C216.166 44.8205 212.317 43.635 210.467 40.6386C206.982 41.1496 203.599 38.9654 202.69 35.4788C201.716 31.7398 203.957 27.9188 207.696 26.9444C209.313 26.5229 210.952 26.1118 212.612 25.7114Z" fill="currentColor"></path><path d="M222.469 50.4332C226.097 49.1038 230.116 50.9671 231.445 54.5951C232.62 57.8 233.691 60.9583 234.663 64.0705C235.814 67.7589 233.757 71.6823 230.069 72.8336C226.38 73.9849 222.457 71.9281 221.306 68.2397C220.404 65.3504 219.406 62.4072 218.307 59.4095C216.978 55.7815 218.841 51.7627 222.469 50.4332Z" fill="currentColor"></path><path d="M195.247 37.7508C196.563 41.3836 194.685 45.3956 191.052 46.7117C188.05 47.7992 185.155 48.9285 182.363 50.0968C178.798 51.5882 174.7 49.9077 173.208 46.3432C171.717 42.7787 173.397 38.6801 176.962 37.1887C179.969 35.9302 183.077 34.7186 186.286 33.556C189.919 32.2399 193.931 34.1179 195.247 37.7508Z" fill="currentColor"></path><path d="M231.967 80.4474C235.774 79.7884 239.395 82.3405 240.054 86.1478C240.646 89.5716 241.109 92.9322 241.448 96.2304C241.843 100.074 239.047 103.51 235.203 103.905C231.36 104.3 227.924 101.504 227.529 97.66C227.224 94.6903 226.805 91.6488 226.266 88.5344C225.607 84.7271 228.159 81.1064 231.967 80.4474Z" fill="currentColor"></path><path d="M166.158 49.7882C168.103 53.127 166.973 57.4102 163.634 59.355C160.903 60.9459 158.305 62.582 155.835 64.259C152.638 66.4295 148.287 65.5976 146.117 62.4009C143.946 59.2042 144.778 54.8532 147.975 52.6827C150.718 50.8203 153.589 49.0129 156.591 47.264C159.93 45.3193 164.213 46.4494 166.158 49.7882Z" fill="currentColor"></path><path d="M235.359 111.794C239.211 112.101 242.084 115.472 241.778 119.324C241.499 122.825 241.067 126.24 240.493 129.568C239.836 133.375 236.217 135.93 232.409 135.273C228.602 134.616 226.048 130.997 226.704 127.189C227.205 124.285 227.584 121.294 227.829 118.213C228.136 114.361 231.507 111.487 235.359 111.794Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M139.977 67.357C142.69 70.1085 142.658 74.5382 139.907 77.2509C138.875 78.2687 137.876 79.2961 136.911 80.3326C146.316 92.9566 152.215 106.692 155.34 120.846C157.981 132.813 158.601 144.913 157.773 156.678C158.903 156.628 160.06 156.853 161.147 157.384C162.998 158.289 164.271 159.903 164.799 161.739C164.623 158.724 166.428 155.827 169.414 154.752L173.096 153.426C176.731 152.117 180.74 154.002 182.049 157.638C183.358 161.273 181.473 165.281 177.837 166.591L174.156 167.916C170.52 169.226 166.512 167.34 165.203 163.705C165.15 163.558 165.102 163.41 165.059 163.262C165.128 164.425 164.907 165.621 164.359 166.743L161.104 173.399C159.898 175.865 157.432 177.305 154.861 177.323C150.846 196.444 143.617 213.777 136.04 226.998C134.558 229.584 131.6 230.947 128.67 230.393C99.6859 224.912 59.8346 208.428 35.4418 176.088C10.5282 143.058 2.89469 95.0699 35.8379 29.6302C37.3043 26.7172 40.589 25.2038 43.7562 25.9819C82.7228 35.5557 109.802 50.9797 127.791 69.611C128.539 68.8306 129.303 68.0558 130.083 67.2869C132.834 64.5742 137.264 64.6055 139.977 67.357ZM45.8617 40.9689C17.7164 99.9765 26.1491 140.531 46.6129 167.662C65.9648 193.319 97.0296 208.265 122.706 214.75L106.855 180.348L55.5736 161.417C52.4667 160.27 50.8778 156.821 52.0248 153.714C53.1718 150.607 56.6203 149.018 59.7273 150.165L99.7577 164.943L74.0227 109.088L50.1338 100.269C47.0269 99.1217 45.438 95.6732 46.585 92.5662C47.732 89.4592 51.1805 87.8703 54.2875 89.0173L66.9249 93.6826L54.4685 66.647C53.0825 63.639 54.3975 60.077 57.4055 58.6911C60.4135 57.3052 63.9755 58.6202 65.3614 61.6282L96.19 128.539L103.191 110.272C104.376 107.179 107.844 105.633 110.937 106.818C114.029 108.003 115.576 111.471 114.39 114.564L103.202 143.757L131.414 204.989C141.371 181.997 147.919 152.14 141.676 123.862C134.35 90.6785 109.003 57.9169 45.8617 40.9689Z" fill="currentColor"></path><path d="M230.252 142.83C233.824 144.304 235.524 148.395 234.05 151.966C232.712 155.207 231.229 158.336 229.616 161.354C227.794 164.762 223.555 166.047 220.147 164.225C216.74 162.404 215.454 158.165 217.276 154.757C218.675 152.141 219.959 149.432 221.116 146.628C222.59 143.056 226.68 141.356 230.252 142.83Z" fill="currentColor"></path><path d="M215.693 170.703C218.639 173.203 219.002 177.618 216.502 180.564C214.267 183.199 211.93 185.716 209.508 188.119C206.765 190.84 202.335 190.822 199.614 188.079C196.893 185.335 196.911 180.906 199.654 178.185C201.802 176.053 203.866 173.83 205.832 171.513C208.331 168.566 212.746 168.204 215.693 170.703Z" fill="currentColor"></path><path d="M193.549 193.071C195.761 196.239 194.987 200.6 191.82 202.813C189.02 204.769 186.171 206.613 183.29 208.349C179.98 210.343 175.681 209.277 173.686 205.968C171.692 202.658 172.758 198.359 176.068 196.364C178.691 194.784 181.276 193.11 183.807 191.342C186.974 189.129 191.336 189.904 193.549 193.071Z" fill="currentColor"></path><path d="M166.697 209.518C168.22 213.069 166.576 217.182 163.025 218.705C159.875 220.055 156.732 221.293 153.618 222.422C149.985 223.738 145.973 221.861 144.656 218.228C143.34 214.595 145.217 210.583 148.85 209.267C151.719 208.227 154.613 207.087 157.51 205.845C161.062 204.322 165.175 205.966 166.697 209.518Z" fill="currentColor"></path><path d="M206.715 64.1999C210.186 65.8973 211.624 70.0872 209.927 73.5583L208.299 76.8864C206.602 80.3575 202.412 81.7954 198.941 80.098C195.47 78.4006 194.032 74.2106 195.729 70.7395L197.357 67.4115C199.054 63.9404 203.244 62.5025 206.715 64.1999Z" fill="currentColor"></path><path d="M167.951 75.2872C171.814 75.2872 174.947 78.4196 174.947 82.2835V85.9044C174.947 89.7683 171.814 92.9007 167.951 92.9007C164.087 92.9007 160.954 89.7683 160.954 85.9044V82.2835C160.954 78.4196 164.087 75.2872 167.951 75.2872Z" fill="currentColor"></path><path d="M196.544 85C200.015 86.6974 201.453 90.8873 199.755 94.3584L196.501 101.014C194.803 104.486 190.613 105.923 187.142 104.226C183.671 102.529 182.233 98.3387 183.93 94.8676L187.185 88.2115C188.883 84.7404 193.073 83.3025 196.544 85Z" fill="currentColor"></path><path d="M167.951 97.9182C171.814 97.9182 174.947 101.05 174.947 104.914V108.535C174.947 112.399 171.814 115.532 167.951 115.532C164.087 115.532 160.954 112.399 160.954 108.535V104.914C160.954 101.05 164.087 97.9182 167.951 97.9182Z" fill="currentColor"></path><path d="M184.745 109.128C188.216 110.825 189.654 115.015 187.957 118.486L184.702 125.142C183.004 128.614 178.814 130.051 175.343 128.354C171.872 126.657 170.434 122.467 172.132 118.996L175.386 112.34C177.084 108.868 181.274 107.431 184.745 109.128Z" fill="currentColor"></path><path d="M172.946 133.256C176.417 134.953 177.855 139.143 176.158 142.615L172.903 149.271C171.205 152.742 167.016 154.18 163.544 152.482C160.073 150.785 158.635 146.595 160.333 143.124L163.588 136.468C165.285 132.997 169.475 131.559 172.946 133.256Z" fill="currentColor"></path><path d="M205.058 149.351C206.367 152.986 204.482 156.995 200.846 158.304L197.165 159.63C193.529 160.939 189.521 159.053 188.212 155.418C186.903 151.783 188.788 147.774 192.424 146.465L196.105 145.139C199.74 143.83 203.749 145.716 205.058 149.351Z" fill="currentColor"></path>', 18)
    ]), 6));
  }
});
export {
  u as default
};
