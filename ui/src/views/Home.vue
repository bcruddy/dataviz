<template>
  <div class="home">
    <data-viz />
  </div>
</template>

<script>
// @ is an alias to /src
import DataViz from '@/components/DataViz.vue'

export default {
  name: 'Home',
  components: {
    DataViz
  }
}
</script>
