<script setup>
    const isEditing = ref(false);

    definePageMeta({
        layout: 'newLayout'
    })
</script>

<template>
    <div class="_page">
        <div v-if="!isEditing" id="profile-view">
            <img class="profile-picture" src="https://picsum.photos/300/300">
            <p class="label">First Name:</p>
            <h2 class="name">{{ firstName ?? "John" }}</h2>
            <p class="label">Last Name:</p>
            <h2 class="name">{{ lastName ?? "Doe" }}</h2>
            <p>Email:</p>
            <p class="email">{{ email }}</p>
            <p>Password:</p>
            <p class="password">*********</p>
            <div class="date-container">
                <p>Joined:</p>
                <p class="date">January 1, 2022</p>
                <button class="button" @click="isEditing = !isEditing">Edit profile</button>
            </div>

            <h3 class="gallery-title">Your Products:</h3>
            <div class="gallery">
                <div class="image-list">
                </div>
            </div>
        </div>

        <div v-else id="edit-form">
            <form>
                <label>First Name:</label>
                <input type="text" v-model="firstName"><br><br>
                <label>Last Name:</label>
                <input type="text" v-model="lastName"><br><br>
                <label>Email:</label>
                <input type="email" v-model="email"><br><br>
                <label>Password:</label>
                <input type="password" v-model="password"><br><br>
                <button type="submit" class="button">Save</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
    ._page {
        display: flex;
        justify-content: center; 
        align-items: center;
        height: 100vh; 
        background-color: #FFC69E; 
        margin: 0;
    }

    #profile-view, #edit-form {
        background-color: #FFFFFF; 
        padding: 40px;
        border-radius: 12px;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        text-align: left;
        width: 500px;
        height: auto; 
        position: relative;
        overflow: hidden;
    }

    .profile-picture {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin: 0 auto 10px;
        display: block;
    }

    .name {
        font-size: 24px;
        margin: 5px 0;
        color: #A755A0;
    }

    .label {
        font-size: 14px;
        color: #ECB3CE;
        margin: 0;
    }

    .email {
        font-size: 16px;
        color: #555;
        margin: 5px 0;
    }

    .date-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .date {
        font-size: 14px;
        color: #ECB3CE;
        margin: 5px 0;
    }

    .button {
        background-color: #A755A0; 
        color: white;
        border: none;
        border-radius: 5px;
        padding: 5px 10px;
        cursor: pointer;
        font-size: 14px;
    }

    .button:hover {
        background-color: #933b8f; 
    }

    .gallery-title {
        font-size: 18px;
        margin: 15px 0;
        color: #A755A0; 
    }

    .gallery {
        max-height: 250px;
        overflow-y: auto;
        padding: 5px;
        border: 1px solid #ddd;
        border-radius: 8px;
        margin-top: 20px;
    }

    .image-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .image-list img {
        width: 120px;
        height: 120px;
        margin: 5px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .hidden {
        display: none;
    }
</style>
