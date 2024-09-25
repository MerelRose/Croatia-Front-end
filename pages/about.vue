<script setup lang="ts">

</script>

<template>
  <div class="_page">
    <div class="AboutOne">
      <h1>About Us</h1>
      <hr>
      <h4>Welcome to SiftSearch, a platform where product discovery, community engagement, and ethical buying
        come
        together. Created by a passionate group of Croatian students and Erasmus exchange students from the
        Netherlands,
        SiftSearch was born from our shared love for smart shopping and collaboration across borders.</h4>
    </div>

    <div class="AboutTwo">
      <div class="AboutTwoDiv AboutDiv">
        <div class="AboutTwoTxt">
          <h1>Our Mission</h1>
          <h4>At SiftSearch, we aim to empower shoppers by providing a transparent, user-driven platform
            for rating,
            commenting, and selling products. We believe that the best recommendations come from real
            people with
            real
            experiences, and our goal is to create a trustworthy environment where users can share their
            insights,
            give
            honest feedback, and find the best products based on collective wisdom.</h4>
        </div>
      </div>

      <div class="AboutTwoImg AboutImg">
        <img src="@/assets/images/togetherPic.jpg">
      </div>
    </div>

    <div class="AboutThree">
      <div class="AboutThreeImg AboutImg">
        <img src="@/assets/images/review.png">
      </div>
      <div class="AboutThreeDiv AboutDiv">
        <div class="AboutThreeTxt">

          <h1>What We Offer</h1>
          <h4><span>Product Ratings:</span> Browse thousands of products, rated by our community. Whether
            you’re searching
            for tech gadgets, fashion, or household goods, you’ll find real reviews to guide your
            purchases.
          </h4>
          <h4><span>Comment and Engage:</span> Have a product you love (or don’t)? Add your voice to the
            conversation!
            SiftSearch allows users to comment on products, fostering discussion and helping others make
            informed
            decisions.
          </h4>
          <h4><span>Buy and Sell:</span> SiftSearch isn’t just a review site—it’s a marketplace too. Find
            products you
            want to purchase, or sell your own items to a like-minded community.
          </h4>
        </div>
      </div>
    </div>

    <div class="AboutFour">
      <div class="AboutFourDiv AboutDiv">
        <div class="AboutFourTxt">
          <h1>Built by Students, for Shoppers
          </h1>
          <h4>Our international team of Croatian and Dutch students brings together different
            perspectives,
            united by a
            commitment to enhancing the online shopping experience. We’re not just building a
            platform—we’re
            building a
            community where transparency, reliability, and mutual support are at the core.
          </h4>
        </div>
      </div>

      <div class="AboutFourImg AboutImg">
        <img src="@/assets/images/flags.png">
      </div>

    </div>
    <div class="AboutFive">
      <hr>
      <h4>Join us, sift through the best products, share your thoughts, and become part of the SiftSearch
        movement!
      </h4>


    </div>
  </div>
</template>

<style scoped>
* {
  font-family: "Rubik", system-ui;
}

@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

.rubik-rubikFont {
  font-family: "Rubik", system-ui;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

._page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.AboutOne {
  margin: auto;
  text-align: center;
  width: 60%;
}

h4 {
  font-weight: 400;
}

.AboutTwo {
  width: 70%;
  margin-top: 5%;
  display: flex;
  flex-direction: row;
}

.AboutTwoTxt {
  width: 70%;
  float: left;
  text-align: left;
}

.AboutTwoDiv {
  padding: 7%;
  width: 70%;
  float: left;
  background-color: var(--primary-);
}

.AboutTwoImg img {
  width: 500px;
  height: auto;
  position: relative;
  right: 25%;
  top: 15%;
  box-shadow: 15px 15px var(--tertiary-);
}

.AboutTwo h1,
.AboutThree h1,
.AboutFour h1 {
  margin-bottom: 8%;

}

.AboutTwoTxt h1 {
  color: var(--secondary-);
}

.AboutTwoTxt h4 {
  color: white;
}

.AboutThree {
  margin-top: 10%;
  width: 70%;
  display: flex;
  flex-direction: row;
}

.AboutThreeDiv {
  padding: 7%;
  width: 90%;
  float: left;
  background-color: var(--secondary-);
}

.AboutThreeImg img {
  width: 500px;
  height: 300px;
  position: relative;
  left: 10%;
  box-shadow: -15px 15px var(--tertiary-);
  top: 20%;
}

.AboutThreeTxt {
  text-align: left;
}

.AboutThreeTxt span {
  font-weight: bolder;
  font-size: larger;
  color: var(--primary-);
}

.AboutThreeTxt h4 {
  margin-bottom: 2%;

}

.AboutThreeTxt h1 {
  color: var(--primary-);
}

.AboutFour {
  margin-top: 10%;
  width: 70%;

  display: flex;
  flex-direction: row;
}

.AboutFourDiv {
  height:450px;
  padding: 7%;
  width: 95%;
  float: left;
  background-color: var(--tertiary-);
}

.AboutFourImg img {
  width: 500px;
  height: 300px;
  box-shadow: 15px 15px var(--secondary-);
  position: relative;
  right: 5%;
  top: 9%;
}

.AboutFourTxt {
  text-align: left;
}

.AboutFourTxt h1 {
  color: var(--primary-);
}

.AboutFive {
  margin-top: 10%;
}

.AboutOne hr,
.AboutFive hr {
  border: 3px solid var(--tertiary-);
  border-radius: 5px;
  width: 40%;
  margin: auto;
}

.AboutOne h4 {
  padding: 4%;
}

.AboutOne h1 {
  margin-bottom: 3%;
  font-size: 50px;
  color: var(--primary-);
}

.AboutFive h4 {
  padding: 4%;
}

.AboutFive {
  width: 60%;
}

.AboutDiv {
  border-radius: 50px;
}

.AboutMain img {
  border-radius: 20px;
}

@media (max-width:1200px) {
  .AboutTwoTxt{
    width:auto;
  }
  .AboutTwo,
  .AboutThree,
  .AboutFour {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .AboutDiv{
    width:auto;
  }
  .AboutThreeImg{
    margin-right:70px;
  }
  .AboutImg {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .AboutTwoImg img,
  .AboutThreeImg img,
  .AboutFourImg img {
    width: 70%;
    height: auto;
    max-width: 100%;
    margin-bottom: 20px;
    top:0;
    right:0;
  }
  .AboutFourDiv{
    height:auto;
  }
  .AboutDiv {
    width: 90%;
  }

  .AboutMain h4 {
    font-size: small;
  }

  .AboutMain h1 {
    font-size: 25px;

  }
}

@media (max-width: 1024px) {

  .AboutTwo,
  .AboutThree,
  .AboutFour {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .AboutImg {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .AboutTwoImg img,
  .AboutThreeImg img,
  .AboutFourImg img {
    width: 50%;

    max-width: 100%;
    margin-bottom: 20px;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
  }
  .AboutTwoImg img{
    height:240px;
    width:380px;
  }
  .AboutThreeImg img{
    height:200px;
    width:450px;
    margin-left:60px;
  }
  .AboutFourImg img{
    height:180px;
    width:390px;
  }
  .AboutTwoDiv,
  .AboutThreeDiv,
  .AboutFourDiv {
    padding: 5%;
  }

  .AboutTwoTxt,
  .AboutThreeTxt,
  .AboutFourTxt {
    width: 100%;
  }
  .AboutTwo h1,
  .AboutThree h1,
  .AboutFour h1 {
    margin-bottom: 3%;

  }

}

@media (max-width: 768px) {

  .AboutMain h4 {
    font-size: x-small;
  }

  .AboutMain h1 {
    font-size: 20px;

  }

  .AboutTwoImg img,
  .AboutThreeImg img,
  .AboutFourImg img {
    width: 70%;
    height:auto;
    max-width: 100%;
    margin-bottom: 20px;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
  }
  .AboutOne {
    width: 90%;
  }

  .AboutTwo,
  .AboutThree,
  .AboutFour {
    width: 90%;
    margin-top: 8%;
  }

  .AboutFive {
    width: 90%;
  }

  h4 {
    font-size: 14px;
  }

  h1 {
    font-size: 36px;
  }

  .AboutOne h1 {
    font-size: 40px;
  }

  .AboutTwoTxt,
  .AboutThreeTxt,
  .AboutFourTxt {
    width: 100%;
  }

  .AboutDiv {
    padding: 5%;
    height:auto;

  }
}

@media (max-width: 480px) {
  .AboutOne {
    width: 95%;
  }
  .AboutTwoImg img,
  .AboutThreeImg img,
  .AboutFourImg img {
    width: 90%;
    height:auto;
    max-width: 100%;
    margin-bottom: 20px;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
  }
  .AboutTwo,
  .AboutThree,
  .AboutFour {
    width: 80%;
    flex-direction: column;
  }

  .AboutTwoTxt,
  .AboutThreeTxt,
  .AboutFourTxt {
    width: 100%;
    text-align: center;
  }

  h1 {
    font-size: 28px;
  }

  h4 {
    font-size: 12px;
  }

  .AboutTwoDiv,
  .AboutThreeDiv,
  .AboutFourDiv {
    width: 100%;
    height:auto;
  }

  .AboutFive {
    width: 95%;
  }
}
</style>