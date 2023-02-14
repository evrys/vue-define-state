<!--
From https://vuejs.org/examples/#markdown
A simple markdown editor.
-->

<script setup lang="ts">
import { marked } from 'marked'
import { debounce } from 'lodash-es'
import { defineState } from '../src/defineState'

const state = defineState({
  input: '# hello',

  get output() {
    return marked(this.input)
  },
})


const update = debounce((e: Event) => {
  state.input = (e.target as HTMLInputElement).value
}, 100)
</script>

<template>
  <div class="editor">
    <textarea class="input" :value="state.input" @input="update"></textarea>
    <div class="output" v-html="state.output"></div>
  </div>
</template>

<style>
body {
  margin: 0;
}

.editor {
  height: 100vh;
  display: flex;
}

.input,
.output {
  overflow: auto;
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 20px;
}

.input {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>