<script setup lang="ts">

</script>

<template>
  <div class="_page">
    <img src="../assets/images/digital.jpg" class="banner">

    <div class="text">
      <h3>Discover & Share Honest Reviews</h3>
      <p>Welcome to <span class="company_name">siftsearch</span>, the ultimate platform where users like you can
        rate products, share
        detailed reviews, and upload your own products for others to evaluate. Find genuine feedback to help
        guide your next purchase, or contribute your voice to help others make informed decisions.</p>

      <hr class="line1">

      <div class="cards">
        <div class="card">
          <img src="../assets/images/first_card-transformed.png">
          <div class="container">
            <h4><b>Rate Products</b></h4>
            <p>Have you tried a product recently? Rate it based on your experience. Your
              feedback helps others make smarter choices and ensures top-quality products rise
              to the top.</p>
          </div>
        </div>
        <div class="card">
          <img src="../assets/images/second_card.jpeg">
          <div class="container">
            <h4><b>Write Detailed Reviews</b></h4>
            <p>Share your insights! Whether you loved or hated a product, your detailed review
              can help others understand its strengths and weaknesses. Join our community of
              honest reviewers.</p>
          </div>
        </div>
        <div class="card">
          <img src="../assets/images/third_card.png">
          <div class="container">
            <h4><b>Upload & Share Your Own Products</b></h4>
            <p>Got a product of your own? Showcase it to our community! Let users review and
              rate your item and build trust among potential
              customers.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="solid_banner">
      <div class="list_solid_banner">
        <h3>Why Review With Us?</h3>
        <ul>
          <li><b> Feedback</b>: Get and share genuine, unfiltered opinions.</li>
          <li><b>Trustworthy Ratings</b>: All ratings come directly from users who have experience with the
            product.</li>
          <li><b>Community-Driven</b>: Our platform is powered by people, for people. Help others by sharing
            your knowledge.</li>
        </ul>
      </div>
      <div class="phone_photo">
        <img src="../assets/images/phone.png">
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

* {
  font-family: "Rubik", system-ui;
}

body {
  margin: 0;
}

._page {
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