<script setup lang="ts">

</script>

<template>
  <div id="product-container">
    <div class="picture-container">
      <span class="heart-icon">❤</span>
    </div>

    <h1 class="product-name">Lorem Ipsum</h1>
    <h4>★ ★ ★ ★ ★</h4> <br>
    <p>€ 99,99</p>
    <!-- <p>www.productsite.com</p> -->

    <button class="product-button">&gt;</button>
  </div>
</template>

<style scoped>
#product-container {
  background-color: rgb(248, 235, 235);
  height: 400px;
  width: 300px;
  border-radius: 25px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  padding: 25px;
  position: relative;
  transition: width 0.3s ease, height 0.3s ease;
  overflow: hidden;
}

.picture-container {
  width: 100%;
  height: 200px;
  background-color: var(--secondary-);
  border-radius: 25px;
  position: relative;
}


.heart-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 40px;
  color: white;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.heart-icon:hover {
  transform: scale(1.2);
}

.product-name {
  color: var(--text-);
}

p {
  color: var(--text-);
  margin-left: 5px;
  padding: 3px;
}

h4 {
  color: var(--text-);
  margin-left: 5px;
}

.product-button {
  position: absolute;
  bottom: 10px;
  right: 10px;
  border: none;
  background-color: transparent;
  padding: 10px 20px;
  font-size: larger;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.product-button:hover {
  background-color: var(--secondary-);
  transform: scale(1.05);
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .product-container {
    width: 100%;
    height: auto;
    padding: 15px;
  }

  .picture-container {
    height: 180px;
  }

  .product-button {
    font-size: medium;
    padding: 8px 16px;
  }

  .heart-icon {
    font-size: 40px;
  }
}

@media (max-width: 480px) {
  .product-container {
    width: 100%;
    height: auto;
    padding: 10px;
  }

  .picture-container {
    height: 150px;
  }

  .product-button {
    font-size: small;
    padding: 6px 12px;
  }

  h4, p {
    font-size: small;
  }

  .heart-icon {
    font-size: 18px;
  }
}
</style>