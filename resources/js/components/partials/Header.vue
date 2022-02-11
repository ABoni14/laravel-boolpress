<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link :to="{name: 'home'}">Home</router-link>
        </li>
        <li>
          <router-link :to="{name: 'blog'}">Blog</router-link>
        </li>
        <li>
          <router-link :to="{name: 'about'}">About us</router-link>
        </li>
        <li>
          <router-link :to="{name: 'contact'}">Contact</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss" scoped>
header{
  width: 100%;
  height: 80px;
  background-color: rgb(49, 189, 165);
  display: flex;
  justify-content: center;
  align-items: center;
  ul{
    list-style: none;
    li{
      display: inline-block;
      padding: 0 20px;
      a{
        text-decoration: none;
        color: black;
        padding: 10px 20px;
        font-weight: 700;
        &:hover, &.active{
          background-color: white;
          border-radius: 10px;
        }
        &.active{
          color: rgb(57, 142, 240);
        }
      }
    }
  }
}
</style>