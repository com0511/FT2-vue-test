<template>
  <div>
    <router-link to="/">뒤로가기</router-link>
    <ul>
      <li>제목 : <input type="text" :class="{inputBorder : isNew}" :readonly="isNew" v-model="title"/></li>
      <li>내용 : <input type="text" v-model="description"/></li>
      <li :class="{visble: !isNew}">등록일 : <input type="text" class="inputBorder" :readonly="isNew" v-model="timestamp"/></li>
      <button :class="{visble: isNew}" @click="addContent()">등록</button>
      <button :class="{visble: !isNew}" @click="updateContent(id)">수정완료</button>
      <button :class="{visble: !isNew}" @click="removeContent(id)">글 삭제</button>
    </ul>
  </div>
</template>

<script>
import { getDetails, addBbs, updateDetails, removeContent } from '../api/api'
import firebase from 'firebase'

export default {
  name: "bbsDetails",
  data() {
    return {
      isNew: false,
      count: 0,
      id: '',
      title: '',
      description: '',
      timestamp: ''
    }
  },
  mounted() {
    this.id = this.$route.params.id
    this.newCheck()
    
  },
  methods: {
    newCheck () {
      if (this.id !== 'new') {
        this.isNew = true
        this.details()
      } else {
        this.isNew = false
      }
    },
    details () {
      const id = this.$route.params.id
      getDetails(id)
        .then(data => {
          this.title = data.title
          this.description = data.description
          this.timestamp = data.timestamp
        }  
      )
    },
    addContent () {
      const titleObj = {
          title: this.title,
          timestamp: this.today()
        }
      const desObj = {
          description: this.description,
        }
      addBbs(titleObj, desObj)
        .then(data => {
            location.href = '/'
          }  
        )
    },
    updateContent (id) {
      const updateDescription = this.description
      updateDetails(id, this.description)
        .then(() => {
          location.href = '/'
        }
      )
    },
    removeContent (id) {
      removeContent(id)
        .then(data => {
          location.href = '/'
        })
    },
    today () {
      var today = new Date()
      var dd = today.getDate()
      var mm = today.getMonth()+1
      var yyyy = today.getFullYear()

      if(dd<10) {
          dd='0'+dd
      } 

      if(mm<10) {
          mm='0'+mm
      } 

      return today = `${yyyy}-${mm}-${dd}`
    }
  }
}
</script>

<style scoped>
  .visble {
    visibility: hidden;
  }

  .inputBorder {
    border: 0px
  }
</style>