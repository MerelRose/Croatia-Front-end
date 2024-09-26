<template>
  <div>
    <button v-if="isLoggedIn" @click="logout">Logout</button>
    <button v-else @click="login">Login</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: false
    }
  },
  mounted() {
    const token = localStorage.getItem('token');
    if (token) {
      this.isLoggedIn = true;
    }
  },
  methods: {
    login() {
      // Login logic here
    },
    logout() {
      // Logout logic here
      localStorage.removeItem('token');
      this.isLoggedIn = false;
    }
  }
}
</script>