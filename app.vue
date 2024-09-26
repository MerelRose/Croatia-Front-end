<script setup>
  useHead({
    script: [
      {
        src: 'https://kit.fontawesome.com/dd14f00971.js',
        crossorigin: 'anonymous'
      },

      {
        src: 'https://unpkg.com/axios/dist/axios.min.js',
        crossorigin: 'anonymous'
      }
    ]
  })
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
