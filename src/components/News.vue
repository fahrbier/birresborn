<template>

  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{ id }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
      <div v-for="item in headlines" :key="item.name">
        <h6>{{ item.date }}</h6>
        <h3>{{ item.name }}</h3>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  props: ['id', 'headlines']
}
</script>

<style>

</style>
