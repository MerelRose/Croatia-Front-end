<script setup lang="ts">
const modalReg = ref(false);
const modalLog = ref(false);
</script>

<template>
  <div class="headerWrapper">
    <header>
      <a href="#/" class="logo"><img src="@/assets/images/logo.png" alt="Logo"></a>
      <div class="hamburger" onclick="document.querySelector('.navbar').classList.toggle('show')">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div class="header-right">
        <a @click="modalLog = !modalLog" class="active" href="#">Log In</a>
        <a href="#" @click="modalReg = !modalReg">Register</a>
      </div>
    </header>

    <div class="navbar">
      <div class="nav-links">
        <NuxtLink to="/"><i class="fa-solid fa-house" style="color: #ffffff;"></i> Home</NuxtLink>
        <NuxtLink to="/products/overview"><i class="fa-solid fa-star" style="color: #ffffff;"></i> Products</NuxtLink>
        <NuxtLink to="/about"><i class="fa-solid fa-tag" style="color: #ffffff;"></i> About</NuxtLink>
        <a id="logInHide">Log In</a>
        <a id="signInHide">Sign In</a>
      </div>

      <div class="search-bar">
        <input type="text" placeholder="Search...">
        <button type="submit"><i style="color: #ffffff;" class="fa-regular fa-magnifying-glass"></i></button>
      </div>
    </div>
  </div>

  <AppModalRegister v-if="modalReg" />
  <AppModalLogin v-if="modalLog" />
</template>

<style scoped>
.headerWrapper {
  position: sticky;
  top: 0;
  z-index: 10;
}

header {
  background-color: #784774;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header a {
  text-decoration: none;
  padding: 10px;
  border-radius: 10px;
  color: white;
}

header a:hover {
  background-color: #543252;
}

.header-right {
  display: flex;
  align-items: center;
  gap: .8rem;
}

.header-right a {
  color: white;
  font-size: 17px;
  background-color: #694066;
}

img {
  height: 40px;
  width: auto;
}

.navbar {
  position: sticky;
  top: 84px;
  background-color: #c68da8;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar a {
  text-decoration: none;
  color: white;
  padding: 8px;
}

.navbar a:hover {
  background-color: #ab758e;
  border-radius: 10px;
}

.search-bar {
  display: flex;
  align-items: center;
  border-radius: 10px;
  gap: .3rem;
}

.search-bar input[type="text"] {
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
}

.search-bar button {
  padding: 10px 13px;
  background-color: #543252;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.search-bar button:hover {
  background-color: #3a213a;
}

#magnifying-glass {
  height: 15px;
  width: auto;
}

.hamburger {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.hamburger div {
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 4px;
}

.nav-links {
  display: flex;
  gap: .6rem;
}
#logInHide,#signInHide{
  display: none;
}

@media screen and (max-width: 750px) {
  header {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  #logInHide,#signInHide{
    display: block;
  }

  .header-right {
    display: none;
  }

  .navbar {
    top: 84px;
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    width: 100%;
  }

  .nav-links a {
    margin-right: 0;
    margin-bottom: 10px;
    width: 100%;
    text-align: left;
    font-size: 15px;
  }

  .search-bar {
    margin-top: 10px;
    width: 100%;
  }

  .search-bar input[type="text"] {
    width: 100%;
  }

  .search-bar button {
    width: 30%;
    margin-left: 0;
    margin-top: 0px;
  }

  .hamburger {
    display: flex;
  }

  .navbar.show .nav-links {
    display: flex;
  }
}

.content {
  padding: 20px;
}
</style>