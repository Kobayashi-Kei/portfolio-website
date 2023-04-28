<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import './index.css'

import Header from "@/components/Header.vue";

/**
 * firebase sdk
 */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7zJTCl84wqfki23czpc_AiCH7QRGG8cY",
  authDomain: "portfolio-fddb8.firebaseapp.com",
  projectId: "portfolio-fddb8",
  storageBucket: "portfolio-fddb8.appspot.com",
  messagingSenderId: "598902708103",
  appId: "1:598902708103:web:d03ccebf8d5131c0d8e522",
  measurementId: "G-LTT75MB62Z"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

</script>

<template>
<div class="bg-white pb-6 sm:pb-8 lg:pb-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">

    <Header />

    <RouterView />

  </div>
</div>
</template>

<style scoped>
</style>
