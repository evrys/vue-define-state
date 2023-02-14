import { reactive as c, computed as o } from "vue";
function f(n) {
  const t = c(n);
  for (const r in t) {
    const e = Object.getOwnPropertyDescriptor(t, r);
    e && e.get && Object.defineProperty(n, r, {
      value: o(e.get.bind(t))
    });
  }
  for (const r in t) {
    const e = Object.getOwnPropertyDescriptor(t, r);
    e && !e.get && typeof e.value == "function" && Object.defineProperty(n, r, {
      value: e.value.bind(t)
    });
  }
  return t;
}
export {
  f as defineState
};
