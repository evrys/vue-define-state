import { UnwrapNestedRefs } from "vue";
/**
 * A convenient wrapper for Vue's `reactive()`.
 * Creates a reactive copy of the original object, and
 * also converts all getters into computed values.
 */
export declare function defineState<T extends object>(obj: T): UnwrapNestedRefs<T>;
