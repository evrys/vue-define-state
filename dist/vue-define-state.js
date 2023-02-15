import { reactive as n, computed as o } from "vue";
function f(r) {
  const e = n(r);
  for (const c in e) {
    const t = Object.getOwnPropertyDescriptor(e, c);
    t && t.get && Object.defineProperty(r, c, {
      value: o(t.get.bind(e))
    });
  }
  return e;
}
export {
  f as defineState
};
//# sourceMappingURL=vue-define-state.js.map
