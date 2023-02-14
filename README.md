# vue-define-state

An alternative way to define local component state with the Vue 3 composition API. This package exports a `defineState` function which wraps Vue's [reactive](https://vuejs.org/guide/essentials/reactivity-fundamentals.html#declaring-reactive-state), adding two features:

 - Makes all getters into computed values
 - Binds "this" for all non-getter functions

## Example

Here's how you would write the [Markdown example](https://vuejs.org/examples/#markdown) from the Vue website using `defineState` instead:

```vue
<script setup lang="ts">
import { marked } from 'marked'
import { debounce } from 'lodash-es'
import { defineState } from 'vue-define-state'

const state = defineState({
  input: '# hello',

  get output() {
    return marked(this.input)
  },

  update(e: Event) {
    this.input = (e.target as HTMLInputElement).value
  }
})

state.update = debounce(state.update, 100)
</script>

<template>
  <div class="editor">
    <textarea class="input" :value="state.input" @input="state.update"></textarea>
    <div class="output" v-html="state.output"></div>
  </div>
</template>
```

## Why?

I used [vue-class-component](https://class-component.vuejs.org/) extensively in Vue 2; `defineState` made it quite easy to upgrade old code to the Vue 3 composition API.

I personally find this syntax a little more succinct and easier to work with than manually calling `ref` and `computed`, especially when working with larger components. It's similar to [useLocalObservable](https://mobx.js.org/react-integration.html#using-local-observable-state-in-observer-components) from Mobx.
