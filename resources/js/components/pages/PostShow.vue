<template>
  <main class="ab-container post-show">
    <h2>{{post.title}}</h2>
    <p>{{post.content}}</p>
    <div>
      <h3 v-if="post.category">Category: {{post.category.name}}</h3>
      <h3><span
        v-for="(tag, index) in post.tags"
        :key="`tag${index}`"
      >{{tag.name}}</span></h3>
    </div>
  </main>
</template>

<script>
export default {
  name: "PostShow",
  data(){
    return{
      apiUrl: "http://127.0.0.1:8000/api/posts/",
      post:{
        title:"",
        content:"",
        category:{},
        tags:[]
      }
    }
  },

  methods:{
    getApi(){
      axios.get(this.apiUrl + this.$route.params.slug)
        .then(res => {
          this.post = res.data;
        })
    }
  },

  mounted(){
    this.getApi();
  }
}
</script>

<style lang="scss" scoped>
.post-show{
  margin-top: 20px;
  h2, p{
    margin-bottom: 10px;
  }
  div{
    h3{
      margin-bottom: 10px;
      span{
        background-color: rgb(57, 142, 240);
        border-radius: 10px;
        margin-right: 10px;
        font-size: 12px;
        padding: 5px;
      }
    }
  }
}
</style>