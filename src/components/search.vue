<template>
  <div id="search">
    <input type="text" v-model="search" placeholder="搜索">
    <div class="sing-blog" v-for="item in searchblog">
        <h2 v-rain="">{{item.title|toUp}}</h2>
        <article>{{item.body|sin}}</article>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      search:"search",
      blogs:[],
    }
  },
  created(){
      let _self = this
      this.axios.get("http://jsonplaceholder.typicode.com/posts")
      .then(function(data){
        _self.blogs = data.data.slice(0,10)
      })
  },
  computed:{
    searchblog(){
      return this.blogs.filter((blog)=>{
        return blog.title.match(this.search)
      })
    }
  }

}
</script>

<style scope>
input{
  width: 800px;
  height: 30px;
}
</style>
