<template>
  <div class="container">
    <div>
      <div class="row">
        <div class="col">
          <news :id="id" :headlines="headlines"/>
        </div>
        <div class="col">
          2 of 2
        </div>
      </div>
    </div>
    <div>
      <div class="row">
        <div class="col">
          1 of 3
        </div>
        <div class="col">
          2 of 3
        </div>
        <div class="col">
          3 of 3
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import news from '@/components/News'

export default {
  data: function () {
    return {
      id: '',
      headlines: []
    }
  },
  components: {
    news
  },
  created: function () {
    this.id = this.$route.params.id
    var self = this
    setTimeout(function () {
      self.headlines = [{date: '2018-06-05', name: 'First'}, {date: '2018-06-05', name: 'Second'}, {date: '2018-06-05', name: 'Third'}]
    }, 3000)
  }
}

</script>

<style>
</style>
