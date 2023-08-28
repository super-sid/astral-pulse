#!/usr/bin/env node

// Import necessary modules
import Vue from 'vue';
import App from './App.vue';
import router from './router';

// Create the Vue instance and router
const app = new Vue({
  el: '#app',
  render: h => h(App),
});

// Set up the router
const router = new router();

// Start the application
app.createApp();