<template>
  <div class="tesla-profile">
    <h1>Nikola Tesla</h1>
    <p>Born in 1856 in Smiljan, Croatia</p>
    <p>Inventor and engineer, best known for his work on electricity and magnetism</p>
    <img :src="imageUrl" alt="Nikola Tesla">
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: 'images/nikola-tesla.jpg'
    }
  }
}
</script>