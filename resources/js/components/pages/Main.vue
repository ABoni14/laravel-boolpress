<template>
  <main>
    <div class="ab-container" 
      v-if="posts">
      <Post 
      v-for="post in posts"
      :key="post.id"
      :post="post"
      />

      <div class="numberPage">
        <button
          @click="getPosts(pagination.current - 1)"
          :disabled = "pagination.current === 1"> 
            <<<
        </button>

        <button
          v-for="i in pagination.last"
          :key="i"
          @click="getPosts(i)"
          :disabled = "pagination.current === i">
            {{i}}
        </button>

        <button
          @click="getPosts(pagination.current + 1)"
          :disabled = "pagination.current === pagination.last"> 
            >>>
        </button>
      </div>
    </div>

    <div v-else class="ab-container loading">LOADING!</div>
  </main>
</template>

<script>
import Post from "../partials/Post.vue"

export default {
  name: "Main",

  components:{
    Post
  },

  data(){
    return{
      apiUrl: "http://127.0.0.1:8000/api/posts?page=",
      posts: null,
      pagination:{}
    }
  },

  mounted(){
    this.getPosts();
  },

  methods:{
    getPosts(page = 1){
      this.posts = null,
      axios.get(this.apiUrl + page)
      .then(res => {
        this.posts = res.data.data;
        this.pagination = {
          current: res.data.current_page,
          last: res.data.last_page,
        };
      })
    }
  }
}
</script>

<style lang="scss" scoped>
main{
  .numberPage{
    button{
      margin: 0 2px;
      padding: 0 5px;
    }
  }
  .loading{
    text-align: center;
    margin-top: 30px;
    font-size: 40px;
    font-weight: 700;
  }
}
</style>