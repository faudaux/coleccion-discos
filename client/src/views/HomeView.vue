<template>
  <div v-if="dataReady">
    <h1>users</h1>
    <ul>
      <li v-for="userName in userNames" :key="userName">
      <h3><a @click="this.handleUser(userName.user_id)">
        {{ userName.user_name }}
      </a>
      </h3>
      </li>
    </ul>
  </div>
</template>
<script>
// import CreateArtist from '../components/CreateArtist.vue'
import makeRequest from '../utils/makeRequest'

export default {
  components: {
  },
  data() {
    return {
      dataReady: false,
      userNames: []
    }
  },
  methods: {
    handleUser(userId){
      console.log(userId)
    }
  },
  mounted() {
    makeRequest('/api/users', 'get')
    .then(data => this.userNames = data)
    .then(() => {
      this.dataReady = true
      console.log(this.dataReady);
    })
    .catch(err => console.log(err))
  }
}
</script>

<style>

</style>