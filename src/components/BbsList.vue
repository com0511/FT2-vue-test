<template>
  <div>
    <h2>BBS</h2>
    <router-link :to="{ name: 'details', params: { id: 'new' }}">
      <button>새글 작성</button>
    </router-link>
    <ul>
      <BbsListItem 
        v-for="item in list"
        :item-data="item"
        :key="item.id"
      />
    </ul>
    
  </div>
</template>

<script>
import BbsListItem from './BbsListItem'
import { getTitleList, getDetails, removeTitle, updateDetails } from '../api/api'

export default {
  data() {
    return {
      id: 0,
      list: []
    }
  },
  components: {
    BbsListItem,
  },
  mounted() {
    this.getTitleList()
  },
  methods: {
    getTitleList() {
      getTitleList()
        .then(data => {
          this.list = Object.entries(data).map(item => {
              const data = {
                  id: item[0],
                  title: item[1]['title'],
                  timestamp: item[1]['timestamp']
                }
                return data
            })
        })
    },
  }
}
</script>

<style>

</style>