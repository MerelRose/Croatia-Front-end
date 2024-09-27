<template>
  <div id="test">
    <div v-for="product in products" :key="product.id" class="product-container">
      <div class="picture-container">
        <img :src="product.image" alt="product image">
        <!-- <span class="heart-icon">&#10084;</span> -->
      </div>
      <h4 class="product-name">{{ product.title }}</h4>
      <h4>&#9733; &#9733; &#9733; &#9733; &#9733;</h4>
      <p>&euro;{{ product.price }}</p>
      <button class="product-button" @click="showProductDetails(product)">></button>
    </div>
    <div v-if="selectedProduct" class="overview-container">
      <button class="btn" @click="hideProductDetails">Close</button>
      <img :src="selectedProduct.image" alt="product image" class="overview-image">
      <h2>{{ selectedProduct.title }}</h2>
      <p>&euro;{{ selectedProduct.price }}</p>
      <p class="description-container" :class="{ expanded: showMore }">{{ selectedProduct.description }}</p>
      <button class="btn" @click="showMore = !showMore">{{ showMore ? 'Less' : 'More' }}</button>
      <!-- <span class="heart-icon">&#10084;</span> -->
      


        <form @submit.prevent="addReview">
            <div>
                    <input type="radio" id="rating-1" v-model="reviewRating" value="1">
                    <label for="rating-1"> 1 </label>
                    <input type="radio" id="rating-2" v-model="reviewRating" value="2">
                    <label for="rating-2"> 2 </label>
                    <input type="radio" id="rating-3" v-model="reviewRating" value="3">
                    <label for="rating-3"> 3 </label>
                    <input type="radio" id="rating-4" v-model="reviewRating" value="4">
                    <label for="rating-4"> 4 </label>
                    <input type="radio" id="rating-5" v-model="reviewRating" value="5">
                    <label for="rating-5"> 5 </label>
            </div>
            <input type="text" v-model="reviewUsername" placeholder="Your name (optional)">
            <input type="text" v-model="reviewText" placeholder="Write your review...">
          <button type="submit" class="btn">Add Review</button>
        </form>

        <div class="review-container">
        <h1>Reviews</h1>
        <div v-for="review in productReviews" :key="review.id">
          <p>Rating: {{ review.rating }}/5</p>
          <p>Username: {{ review.user_id }}</p>
          <p>Review: {{ review.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useFetch } from '#app';

// const user = useState('user');

const { data: products } = await useFetch('http://localhost:3000/products');

const loading = ref(true);
const reviews = ref(null);

try {
  const { data: reviewsData } = await useFetch('http://localhost:3000/reviews');
  reviews.value = reviewsData;
  loading.value = false;
} catch (error) {
  console.error(error);
  "its fucky wuky"
}

const filteredReviews = computed(() => {
  if (!reviews.value || !selectedProduct.value) return [];
  return reviews.value.filter(review => review.product_id === selectedProduct.value.id);
});

const selectedProduct = ref(null);
const showMore = ref(false);
const productReviews = ref([]);

function showProductDetails(product) {
  selectedProduct.value = product;
  fetchReviews(product.id);
}

async function fetchReviews(productId) {
  const response = await fetch(`http://localhost:3000/reviews/${productId}`);
  const data = await response.json();
  productReviews.value = data;
}

function hideProductDetails() {
  selectedProduct.value = null;
  productReviews.value = [];
}



const reviewText = ref('');
const reviewRating = ref('');
const reviewUsername = ref('');

async function addReview() {
  const review = {
    user_id: null,
    text: reviewText.value,
    rating: reviewRating.value,
    product_id: selectedProduct.value.id,
  };



  const response = await $fetch('http://localhost:3000/reviews', {
    method: 'POST',
    body: JSON.stringify(review),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    console.log('Review added successfully!');
    reviewText.value = '';
    reviewRating.value = '';
    reviewUsername.value = '';
    fetchReviews(selectedProduct.value.id);
  } else {
    console.error('Error adding review:', response.statusText);
  }
}

function calculateAverageRating(reviews, productId) {
  const productReviews = reviews.filter((review) => review.productId === productId);
  if (productReviews.length === 0) {
    return null;
  }
  const totalRating = productReviews.reduce((acc, review) => acc + review.rating, 0);
  const averageRating = totalRating / productReviews.length;
  return { averageRating: averageRating.toFixed(1), numReviews: productReviews.length };
}
</script>

<style scoped>
#test {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.rating {
  font-size: 20px;
}

.yellow {
  color: yellow;
}

.product-container {
  background-color: rgb(248, 235, 235);
  height: 22rem;
  width: 300px;
  border-radius: 25px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  padding: 25px;
  position: relative;
  transition: width 0.3s ease, height 0.3s ease;
  overflow: hidden;
  margin: 15px;
  flex: 0 0 300px;
  transition: transform 0.2s ease;
}
.product-container:hover {
  transform: scale(1.03);
}

.picture-container {
  width: 100%;
  height: 200px;
  background-color: white;
  border-radius: 25px;
  position: relative;
  padding: 10px;
}

.picture-container img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 25px;
}


.heart-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 40px;
  color: var(--secondary-);
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
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
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

.product-details {
  position: fixed;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 300px;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.overview-container {
  background-color: rgb(248, 235, 235);
  width: 450px;
  height: 700px;
  border-radius: 25px 0px 0px 0px;
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 20px;
}

.overview-image {
  width: 100%;
  height: 300px;
  background-color: #fff;
  border-radius: 25px 0px 0px 25px;
  margin: 0px 0px 10px 0px;
  object-fit: contain;
}

h2 {
  margin: 0px 0px 0px 10px;
  color: var(--text-);
}

p {
  margin: 0px 0px 0px 20px; 
  color: var(--text-);
}

h1 {
  color: var(--text-);
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.description-container {
  max-height: 35px;
  overflow: hidden;
  transition: max-height 0.5s ease;
}

.description-container.expanded {
  max-height: 500px;
}

.btn {
  border: none;
  width: 100px;
  height: 20px;
  border-radius: 10px;
  background-color: var(--primary-);
  color: white;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin: 5px;
}

.btn:hover {
  background-color: var(--tertiary-);
  transform: scale(1.05);
}

.heart-icon {
  position: absolute;
  top: 0px;
  left: 10px;
  font-size: 40px;
  color: white;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.heart-icon:hover {
  transform: scale(1.2);
}

.review-container {
  width: 410px;
  height: 90px;
  background-color: var(--secondary-);
  border-radius: 15px;
  padding: 10px;
  max-height: 200px;
  overflow-y: auto;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
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