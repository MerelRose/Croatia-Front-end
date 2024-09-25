<script setup lang="ts">

</script>

<template>
  <footer>
    <div class="footerMain">
      <div class="footerMainTop">
        <div class="footerPartOne">
          <div class="footerLogo">
            <a href="#CFE-home.html"><img src="@/assets/images/logo.png" class="footerLogo"></a>
          </div>
        </div>
        <div class="footerPartTwo">
          <div class="footerContent">
            <h2 class="footerTitle">CONTENT</h2>
            <ul>
              <li>
                <a href="#CFE-home.html">
                  <h3>Home</h3>
                </a>
              </li>
              <li>
                <a href="#CFE-product-overview.html">
                  <h3>Products</h3>
                </a>
              </li>
              <li>
                <a href="#CFE-add-product.html">
                  <h3>Add Your Own Products</h3>
                </a>
              </li>
              <li>
                <a href="#CFE-account-and-settings.html">
                  <h3>Account</h3>
                </a>
              </li>
            </ul>
          </div>
          <div class="footerTwoContainer">
            <h2 class="footerTitle">GET IN TOUCH</h2>
            <div class="footerContact">
              <ul>
                <li>
                  <h3>Phone number: <a href="">+123 456 7890</a></h3>
                </li>
                <li>
                  <h3>E-mail:<a href=""> siftsearch@gmail.com</a> </h3>
                </li>
                <li>
                  <h2>FOLLOW US</h2>
                  <div class="footerSocialMedia">
                    <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://www.youtube.com/"><i class="fa-brands fa-youtube"></i></a>
                    <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footerMainBottom">
        <hr><br>
        <div class="footerBottomContent">
          <div class="footerBottomOne">
            <h3>© 2024 Siftsearch. All Rights Reserved</h3>
          </div>
          <div class="footerBottomTwo">
            <a href="https://policies.google.com/">
              <h3>PRIVACY POLICY</h3>
            </a>
            <a href="https://policies.google.com/terms?hl=en-US">
              <h3>TERMS AND CONDITIONS</h3>
            </a>
          </div>
        </div>

      </div>
    </div>

  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');
.rubik-rubikFont {
  font-family: "Rubik", system-ui;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.footerMainTop h2 {
  color: var(--secondary-);
}

footer {
  font-family: "Rubik", system-ui;
}

.footerMainTop h3 {
  color: white;
  font-weight: 400;
}

.footerMainBottom h3 {
  color: var(--secondary-);

}

.footerDiv {
  display: block;
}

footer {
  background-color: var(--primary-);
  display: block;
  width: auto;
  height: fit-content;
}

.footerMain {
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.footerLogo {
  height: 80px;
}

.footerPartOne img:hover {
  background-color: rgba(0, 0, 0, 0.201);

}

.footerMainTop {
  display: flex;
  flex-direction: row;

}

footer ul {
  list-style: none;
}

.footerPartTwo {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 60%;
}

.footerPartOne {
  padding-right: 20%;
  width: 60%;
}

.footerTitle {
  margin-bottom: 10%;
}

footer hr {
  border: var(--secondary-) solid 2px;

}

.footerMainBottom {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.footerBottomContent {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.footerBottomTwo {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 450px;
}

.footerMainTop h2 {
  font-weight: 900;
  margin-top: .4rem;
}

.footerSocialMedia {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: .4rem;
  font-size: 1.5rem;
}

footer a {
  text-decoration: none;
}

.footerContact a {
  color: var(--tertiary-);
}

.footerContent li:hover,
.footerBottomTwo a:hover {
  transform: scale(1.04);
}

@media screen and (max-width: 1100px) {

  .footerPartOne,
  .footerPartTwo {
    width: 100%;
    padding-right: 0;
  }

  .footerMainTop {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footerLogo {
    height: 60px;
  }

  .footerMain {
    padding: 1%;
  }
}

@media screen and (max-width: 768px) {
  footer h3 {
    font-size: medium;
  }

  footer h2 {
    font-size: large;
  }

  .footerPartOne,
  .footerPartTwo {
    width: 100%;
  }

  .footerMainTop {
    flex-direction: column;
  }

  .footerMain {
    padding: 2%;
  }

  .footerBottomContent {
    flex-direction: column;
    align-items: center;
  }

  .footerBottomTwo {
    flex-direction: row;
    align-items: center;
  }

  .footerBottomTwo h3 {
    margin: 10px 0;
  }
}

@media screen and (max-width: 480px) {

  footer h3 {
    font-size: medium;
  }

  footer h2 {
    font-size: large;
  }

  .footerLogo {
    height: 50px;
  }

  .footerMain {
    padding: 10px;
  }

  .footerBottomContent {
    flex-direction: column;
    align-items: center;

  }

  .footerBottomTwo {
    flex-direction: row;
    width: 100%;
    text-align: center;
  }

  .footerBottomTwo h3 {
    margin-bottom: 10px;

  }

  .footerSocialMedia img {
    height: 30px;
    width: 30px;
  }

  .footerSocialMedia {
    display: flex;
    flex-direction: row;
    width: 100px;
    margin: auto;

  }
}
</style>