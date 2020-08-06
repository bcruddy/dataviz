<template>
  <div class="home">
    <data-viz />
  </div>
</template>

<script>
import DataViz from '@/components/DataViz.vue'
import http from '@/utils/http';

export default {
  name: 'Home',
  components: {
    DataViz
  }
}
</script>
