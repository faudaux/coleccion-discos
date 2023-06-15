<template>
  <div v-if="dataReady">
    <h1>users</h1>
    <ul>
      <li v-for="userName in userNames" :key="userName">
      <h3>
        <router-link :to="'/user/' + userName.user_id">{{ userName.user_name }}</router-link>
      </h3>
      </li>
    </ul>
    <router-view/>
  </div>
</template>
<script>
import makeRequest from '@/utils/makeRequest'

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
      makeRequest('/api/users/' + userId, 'get')
      .then(data => console.log(data))
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