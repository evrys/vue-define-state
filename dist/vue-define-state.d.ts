import { UnwrapNestedRefs } from "vue";
/**
 * A convenient wrapper for Vue's `reactive()`.
 * Creates a reactive copy of the original object, and also:
 *
 * - Makes all getters into computed values
 * - Binds "this" for all non-getter functions
 */
export declare function defineState<T extends object>(obj: T): UnwrapNestedRefs<T>;
