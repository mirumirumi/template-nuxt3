<template>
  <div>
    <button @click.prevent="pusha">button</button>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()

definePageMeta({
  title: "",
  // middleware: ["navigation-guards"],
})


const pusha = () => {
  console.log("🍊")
  router.push("/aaa")
  // navigate()
}


// router.push()は使えないの？
function navigate(){
  return navigateTo({
    path: "/search",
  })
}

</script>

<style lang="scss" scoped>

</style>
