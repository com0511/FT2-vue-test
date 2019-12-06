<template>
  <li>
    <span>{{index}}</span>
    <router-link :to="{ name: 'details', params: { id: id }}">{{title}}</router-link>
    <span>{{timestamp}}</span>
  </li>
</template>

<script>

export default {
  name: "bbsListItem",
  components : {
  },
  props:['itemData'],
  data() {
    return {
      index: this.itemData.index,
      id: this.itemData.id,
      title: this.itemData.title,
      timestamp: this.itemData.timestamp
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
  
</style>