export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params.id === "404") {
    return abortNavigation()
  }

  return navigateTo("/")
})
