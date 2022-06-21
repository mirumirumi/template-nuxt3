<template>
  <div class="root">
    <input type="text" ref="search" class="input" placeholder="Search for..." 
      v-model="query"
      @keydown.enter.prevent="move"
    >
    <PartsSvgIcon :icon="'search'" :color="'#bbbbba'" />
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const query = ref("")
const search = ref()

const emit = defineEmits<{
  (e: "closeSearchBox"): void,
}>()

onMounted(() => {
  search.value.focus()
})

const move = () => {
  router.push({ path: '/search', query: { q: query.value } })
  emit("closeSearchBox")
}
</script>

<style lang="scss" scoped>
.root {
  position: relative;
  width: 100%;
  height: 100%;
  input {
    padding: 0.395em 2em 0.355em 1.3em;
    line-height: 2.1;
    border: 1.9px solid #e5e5e5;
    border-radius: 31px;
    &:focus {
      border-color: #e9b18d !important;
    }
  }
  svg {
    right: 1.7em;
  }
}
</style>
