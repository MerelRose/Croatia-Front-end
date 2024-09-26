<template>
    <div class="container">
      <div class="error-card">
        <h1>{{ error.statusCode }}</h1>
        <p class="error-message">Oops! Something went wrong.</p>
        <NuxtLink class="home-link" to="/">Go back to home</NuxtLink>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import type { NuxtError } from '#app'
  
  const props = defineProps({
    error: Object as () => NuxtError
  })
  </script>
  
  <style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(to right, #A755A0, #FFC69E);
  }
  
  .error-card {
    background-color: #ECB3CE;
    padding: 60px 40px;
    border-radius: 12px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    text-align: center;
    max-width: 600px;
  }
  
  .error-card h1 {
    font-size: 80px;
    color: #A755A0;
    margin: 0;
  }
  
  .error-message {
    font-size: 22px;
    color: white; 
    margin: 15px 0;
  }
  
  .home-link {
    display: inline-block;
    margin-top: 25px;
    padding: 15px 30px;
    background-color: #A755A0;
    color: white;
    text-decoration: none;
    border-radius: 6px;
    transition: background-color 0.3s, transform 0.3s;
  }
  
  .home-link:hover {
    background-color: #FFC69E;
    transform: translateY(-2px);
  }
  
  .home-link:active {
    transform: translateY(0);
  }
  </style>
  