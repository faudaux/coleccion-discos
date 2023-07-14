<template>
  <div v-if="dataReady">
    <ul>
        <li v-for="infoItem in collectionInfo" :key="infoItem">
            <h3>
              {{ infoItem.album_title }}
            </h3>
        </li>
    </ul>
  </div>
</template>

<script>
import makeRequest from '@/utils/makeRequest'
export default {
  data() {
    return {
      dataReady: false,
      collectionInfo: {}
    }
  },
  methods: {

  },
  mounted() {
    makeRequest('/api/users/' + this.$route.params.user_id + '/collection', 'get')
    .then(data => this.collectionInfo = data)
    .then(() => this.dataReady = true)
    .catch((err) => console.log(err))
  }
} 

</script>

<style>

</style>