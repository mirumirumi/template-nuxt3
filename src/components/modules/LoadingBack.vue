<template>
  <div class="loading_back">
    <div class="loaders">
      <div class="ball-beat" style="transform: scale(1.13);">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import "loaders.css"  // https://connoratherton.com/loaders



// LoadDotsやめたのでこのコンポーネントもつくりなおす！



const p = withDefaults(defineProps<{
  zIndex?: number
}>(), {
  zIndex: 999
})
const zIndex = ref(p.zIndex)
</script>

<style lang="scss" scoped>
.loading_back {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  opacity: 0.666;
  cursor: default;
  content: "";
  z-index: v-bind(zIndex);
}
</style>
