<script setup lang="ts">

const user = useState('user', () => null);
const userForm = ref({
  email: '',
  password: ''
});

let id = null;

async function handleForm() {
  try {
    await useFetch('http://localhost:3000/login', {
      method: "POST",
      body: userForm.value
    }).then(response => {
      id = response.data._rawValue.userId;
    });

    await useFetch('http://localhost:3000/users/' + id).then(response => {
      console.log(response.data._rawValue);
    });
  } catch (error) {
    console.error(error);
  }
}
</script>

<template>
  <div id="overlay" class="overlay">
    <div id="login-pop-up" class="pop-up-wrapper">
      <div class="pop-up-container-picture">
        <svg width="175px" height="175px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 9.56757V14.4324C3.5 16.7258 3.5 17.8724 4.22162 18.5849C4.87718 19.2321 5.89572 19.2913 7.81827 19.2968C7.81303 19.262 7.80803 19.2271 7.80324 19.192C7.68837 18.3484 7.68839 17.2759 7.68841 15.9453L7.68841 15.8919C7.68841 15.4889 8.01933 15.1622 8.42754 15.1622C8.83575 15.1622 9.16667 15.4889 9.16667 15.8919C9.16667 17.2885 9.16824 18.2626 9.26832 18.9975C9.36554 19.7114 9.54337 20.0895 9.81613 20.3588C10.0889 20.6281 10.4718 20.8037 11.195 20.8996C11.9394 20.9985 12.926 21 14.3406 21H15.3261C16.7407 21 17.7273 20.9985 18.4717 20.8996C19.1948 20.8037 19.5778 20.6281 19.8505 20.3588C20.1233 20.0895 20.3011 19.7114 20.3983 18.9975C20.4984 18.2626 20.5 17.2885 20.5 15.8919V8.10811C20.5 6.71149 20.4984 5.73743 20.3983 5.0025C20.3011 4.28855 20.1233 3.91048 19.8505 3.6412C19.5778 3.37192 19.1948 3.19635 18.4717 3.10036C17.7273 3.00155 16.7407 3 15.3261 3H14.3406C12.926 3 11.9394 3.00155 11.195 3.10036C10.4718 3.19635 10.0889 3.37192 9.81613 3.6412C9.54337 3.91048 9.36554 4.28855 9.26832 5.0025C9.16824 5.73743 9.16667 6.71149 9.16667 8.10811C9.16667 8.51113 8.83575 8.83784 8.42754 8.83784C8.01933 8.83784 7.68841 8.51113 7.68841 8.10811L7.68841 8.05472C7.68839 6.72409 7.68837 5.65156 7.80324 4.80803C7.80803 4.77288 7.81303 4.73795 7.81827 4.70325C5.89572 4.70867 4.87718 4.76792 4.22162 5.41515C3.5 6.12759 3.5 7.27425 3.5 9.56757ZM13.385 14.9484L15.8487 12.516C16.1374 12.231 16.1374 11.769 15.8487 11.484L13.385 9.05157C13.0963 8.76659 12.6283 8.76659 12.3397 9.05157C12.051 9.33655 12.051 9.79859 12.3397 10.0836L13.5417 11.2703H6.45652C6.04831 11.2703 5.71739 11.597 5.71739 12C5.71739 12.403 6.04831 12.7297 6.45652 12.7297H13.5417L12.3397 13.9164C12.051 14.2014 12.051 14.6635 12.3397 14.9484C12.6283 15.2334 13.0963 15.2334 13.385 14.9484Z" fill="#A755A0"></path> </g></svg>
      </div>
      <div class="pop-up-container">
        <h1 class="title">Login</h1>
        <form @submit.prevent="handleForm" class="form">
          <label for="mail">E-mail:</label><br />
          <input required v-model="userForm.email" type="text" id="mail" name="mail" class="input" /><br />
          <label for="pass">Password:</label><br />
          <input required v-model="userForm.password" type="password" id="pass" name="pass" class="input" /><br />
          <div class="button-container">
            <button @click.prevent="$emit('toggleSelf'); $emit('toggleCounterPart')" class="submit-button" type="submit">Register</button>
            <input type="submit" class="submit-button" value="Login">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;
  align-items: center;
  justify-content: center;
}

.pop-up-wrapper {
  display: flex;
  position: relative;
  z-index: 10000;
  transform: translateY(-100px);
  transition: all 0.3s ease;
  width: fit-content;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
}

.button-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
}

/*.login-btn {*/
/*    padding: 10px 20px;*/
/*    background-color: var(--primary-);*/
/*    color: white;*/
/*    border: none;*/
/*    border-radius: 10px;*/
/*    cursor: pointer;*/
/*    font-size: 16px;*/
/*    position: absolute;*/
/*    top: 20px;*/
/*    right: 20px;*/
/*    z-index: 100;*/
/*    box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);*/
/*}*/

.pop-up-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.pop-up-container-picture {
  height: 350px;
  width: 200px;
  background-color: var(--tertiary-);
  border-radius: 30px 0px 0px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
}

.pop-up-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 350px;
  width: 650px;
  background-color: rgb(248, 235, 235);
  border-radius: 0px 30px 30px 0px;
  padding: 15px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
}

.title {
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
  color: var(--text-);
}

input {
  border-radius: 15px;
  width: 100%;
  max-width: 700px;
  height: 40px;
  border: none;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  font-size: 18px;
  color: var(--text-);
}

label {
  color: var(--text-);
}

.submit-button {
  width: 100%;
  max-width: 180px;
  height: 40px;
  border: none;
  border-radius: 15px;
  background-color: var(--primary-);
  color: white;
  font-weight: bold;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  /* transition: background-color 0.3s ease, transform 0.3s ease; */
}

.submit-button:hover {
  background-color: #8A4B8B;
  transform: scale(1.05);
}

.submit-button {
  width: 48%;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

@media (max-width: 768px) {
  .pop-up-wrapper {
    flex-direction: column;
  }

  .pop-up-container-picture {
    width: 100%;
    border-radius: 30px 30px 0px 0px;
  }

  .pop-up-container {
    width: 100%;
    border-radius: 0px 0px 30px 30px;
  }
}
</style>