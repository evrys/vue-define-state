# vue-define-state [![latest release](https://img.shields.io/npm/v/vue-define-state.svg)](https://www.npmjs.com/package/vue-define-state)

An alternative way to define local component state with the Vue 3 composition API. This package exports a `defineState` function which wraps Vue's [reactive](https://vuejs.org/guide/essentials/reactivity-fundamentals.html#declaring-reactive-state), turning all provided `get` methods into [computed properties](https://vuejs.org/guide/essentials/computed.html).

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
  }
})

const update = debounce((e: Event) => {
  state.input = (e.target as HTMLInputElement).value
}, 100)
</script>

<template>
  <div class="editor">
    <textarea class="input" :value="state.input" @input="state.update"></textarea>
    <div class="output" v-html="state.output"></div>
  </div>
</template>
```

## Why?

If you used [vue-class-component](https://class-component.vuejs.org/) extensively in Vue 2, `defineState` makes it easier to upgrade old code to the Vue 3 composition API.

I personally find this syntax a little more succinct and easier to work with than manually calling `ref` and `computed`, especially when working with larger components. It's similar to [useLocalObservable](https://mobx.js.org/react-integration.html#using-local-observable-state-in-observer-components) from Mobx.
