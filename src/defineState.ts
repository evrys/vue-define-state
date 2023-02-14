import { computed, reactive, UnwrapNestedRefs } from "vue"

/**
 * A convenient wrapper for Vue's `reactive()`. 
 * Creates a reactive copy of the original object, and
 * also converts all getters into computed values.
 */
export function defineState<T extends object>(obj: T): UnwrapNestedRefs<T> {
  const reactiveObj = reactive(obj)

  // Make all getters into computed values
  // See https://stackoverflow.com/questions/75357694/are-vue-3-reactive-object-getters-made-into-computed-values/75358517
  // eslint-disable-next-line guard-for-in
  for (const key in reactiveObj) {
    const desc = Object.getOwnPropertyDescriptor(reactiveObj, key)
    if (desc && desc.get) {
      Object.defineProperty(obj, key, {
        value: computed(desc.get.bind(reactiveObj))
      })
    }
  }


  return reactiveObj
}