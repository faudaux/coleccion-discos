<template>
  <div v-if="dataReady">
    <ul>
        <li>
            <h3>
              {{  }}
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
    makeRequest('api/users/' + this.$route.params.user_id + '/collections', 'get')
    .then(data => this.collectionInfo = data)
    .then(() => this.dataReady = true)
    .catch((err) => console.log(err))
  }
} 

</script>

<style>

</style>