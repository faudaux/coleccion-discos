<template>
  <div>
    <input type="text" v-bind="artist_name">
    <button type="submit">Add</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            artist_name: null
        }
    }
}
</script>

<style>

</style>