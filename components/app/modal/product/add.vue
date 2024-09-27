<script setup lang="ts">

</script>

<template>
  <div class="form-popup" id="myForm">
    <form class="form-container" enctype="multipart/form-data">
      <h1>Upload your own product!</h1>

      <label for="imageUpload"><b>Product Image</b></label>
      <br />
      <input type="file" id="imageUpload" name="image" accept="image/*" onchange="window.gunctions.previewImage(event)">
      <br /><br />

      <img id="imagePreview" src="" alt="Image Preview" style="display:none; max-width: 100%; height: auto;">
      <br /><br />

      <label for="name"><b>Name</b></label>
      <br />
      <input type="text" placeholder="Enter Name" name="name" id="name" required>
      <br />

      <label for="price"><b>Price</b></label>
      <br />
      <input type="number" placeholder="Enter Price" name="price" id="price" required>

      <label for="category"><b>Category</b></label>
      <select name="category" id="category">
      </select>
      <br /><br />

      <button type="submit" class="btn">Upload</button>
      <button type="button" class="btn cancel" onclick="document.getElementById('myForm').style.display = 'none';">Close</button>
    </form>
  </div>

  <div class="mask"></div>
</template>

<style scoped>
*{
  color:var(--text-);
}

.open-button {
  background-color: var(--primary-);
  color: white;
  padding: 16px 20px;
  border: none;
  cursor: pointer;
  opacity: 0.8;
  position: fixed;
  bottom: 23px;
  right: 28px;
  width: 280px;
}

.form-popup {
  display: none;
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 3px solid var(--primary-);
  border-radius: 7%;
  z-index: 9;
}

.form-container {
  max-width: 300px;
  padding: 10px;
  background-color: var(--tertiary-);
  border-radius: 7%;
}

.form-container input[type=text] {
  width: 90%;
  padding: 15px;
  margin: 5px 0 22px 0;
  border: none;
  background: white;
  border-radius: 15%;
}

.form-container input[type=text]:focus {
  background-color: #ddd;
  outline: none;
}

.form-container .btn {
  background-color: var(--primary-);
  color: white;
  padding: 16px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  margin-bottom: 10px;
  opacity: 0.8;
  border-radius: 10%;
}

.form-container .cancel {
  background-color: var(--primary-);
  border-radius: 10%;
}

.form-container .btn:hover,
.open-button:hover {
  opacity: 1;
}
</style>