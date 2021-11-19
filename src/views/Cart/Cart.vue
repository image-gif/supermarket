<template>
  <div>
    <div v-for="index in 10"
         :key="index">{{index}}</div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
}
</script>

<style>
</style>