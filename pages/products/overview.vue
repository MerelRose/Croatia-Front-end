<script setup lang="ts">

</script>

<template>
  <div class="overview-image">
    <span class="heart-icon">❤</span>
  </div>

  <h1>Lorem Ipsum</h1>
  <h2>★ ★ ★ ★ ★</h2>
  <h1>€ 99,99</h1>
  <h2>Poduct description:</h2>
  <div class="description-container" id="description">
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis cum optio fugit deleniti quidem. Quaerat, unde. Aliquid beatae, qui minus fugit, deserunt ullam blanditiis eum eligendi sit odit saepe quas!
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo rem esse ullam, adipisci excepturi in eaque accusantium possimus, sed quam voluptatum sint nobis tempora perferendis cumque cupiditate quas odit fugit?
    </p>
  </div>
  <button class="btn" id="readMoreBtn" onclick="toggleDescription()">Read more</button> <br><br>
  <h2>Reviews</h2>
  <div class="review-container"></div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

* {
  font-family: "Rubik", system-ui;
}

body {
  margin: 0;
}

.content {
  margin: 0;
  padding: 0;
}

.banner {
  width: 100%;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 50px;
}

.card {
  flex: 1 1 30%;
  max-width: 30%;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  display: flex;
  flex-direction: column;
}

.card:hover {
  box-shadow: 0 10px 18px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 16px;
}

.text {
  width: 70%;
  margin: 90px auto auto auto;
  text-align: center;
}

.text h3 {
  color: #8f4b8a;
  font-size: 27px;
}

.line1 {
  background-color: #ECB3CE;
  height: 3px;
  margin-bottom: 50px;
}

.card img {
  border-radius: 10px 10px 0 0;
  width: 100%;
  height: auto;
}

.card h4 {
  color: #ddab87;
  font-size: 23px;
}

.solid_banner {
  width: 100%;
  height: 400px;
  background-color: #ECB3CE;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  gap: 20px;
}

.solid_banner h3 {
  font-size: 30px;
  margin-bottom: 40px;
  color: #8f4b8a;
}

.solid_banner ul {
  padding: 0;
  margin: 0;
}

.solid_banner ul li {
  font-size: 20px;
  margin: 15px 0;
  color: white;

}

.phone_photo {
  position: relative;
  flex-shrink: 0;
  display: flex;
  justify-content: flex-end;
}

.phone_photo img {
  height: auto;
  width: 700px;
  position: absolute;
  top: -230px;
  right: 0;
}

.list_solid_banner {
  width: 40%;
  margin-left: 20px;
}

.company_name {
  font-weight: bolder;
  color: #ddab87;
}

@media screen and (max-width: 1024px) {
  .card {
    max-width: 45%;
  }

  .solid_banner {
    flex-direction: column;
    align-items: center;
  }

  .phone_photo img {
    width: 250px;
    top: -60px;
    right: 0;
  }

  .solid_banner {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 20px;

  }

  .list_solid_banner {
    width: 100%;
    text-align: center;
    margin-left: 0;
  }

  .phone_photo {
    display: block;
    justify-content: center;
    width: 250px;
  }

  .phone_photo img {
    width: 250px;
    height: auto;
    position: static;
    top: auto;
  }

  .solid_banner ul li {
    font-size: 18px;
  }
}


@media screen and (max-width: 768px) {

  .card {
    min-width: 90%;
  }

  .text {
    width: 90%;
  }

  .solid_banner ul li {
    font-size: 18px;
  }

  .phone_photo img {
    width: 180px;
    top: -30px;
  }

  .solid_banner {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .solid_banner ul {
    margin-top: 20px;
  }

  .phone_photo {
    display: none;

  }

  .list_solid_banner {
    width: 100%;
    margin-left: 0;
    text-align: center;

  }
}
</style>