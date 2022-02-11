<template>
  <div class="post">
    <div class="top">
      <h4><router-link :to="{name: 'post-show', params:{slug: post.slug}}" class="title">{{post.title}}</router-link></h4>
      <div class="data">{{changeDate}}</div>
    </div>
    <div class="bottom">
      <p>{{breakText}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",

  props:{
    "post": Object
  },

  computed:{
    breakText(){
      return this.post.content.substr(0, 50) + "...";
    },

    changeDate(){
      const d = new Date(this.post.created_at);
      let day = d.getDate();
      let month = d.getMonth() + 1;
      const year = d.getFullYear();
      if(day < 10) day = "0" + day;
      if(month < 10) month = "0" + month;
      return `${day}/${month}/${year}`;
    }
  }
}
</script>

<style lang="scss" scoped>
.post{
  padding: 10px;
  margin: 15px 0;
  border: 2px solid rgb(32, 92, 182);
  border-radius: 12px;
  .top{
    border-bottom: 2px solid rgb(32, 92, 182);
    padding-bottom: 15px;
    h4{
      font-weight: 700;
      padding-bottom: 10px;
      .title{
        text-decoration: none;
        color: black;
        &:hover{
          text-decoration: underline;
        }
      }
    }
    .data{
    font-size: 12px;
    font-style: italic;
    }
  }
  .bottom{
    padding-top: 15px;
  }
  &:hover{
    background-color: rgb(32, 92, 182);
    color: white;
    border: 2px solid white;
    .top{
      border-bottom: 2px solid white;
      .title{
        color: white;
    }
    } 
    
  }
}
</style>