<template>
  <div v-live:column="'narrow'" id="index">
      <input type="text" v-model="search" placeholder="搜索">
      <h1>博客总览</h1>
      <div class="sing-blog" v-for="item in searchblog">
        <router-link v-bind:to="'/blog/'+item.id"><h2 v-rain="">{{item.title|toUp}}</h2></router-link>
        <router-link v-bind:to="'/blog/'+item.id"><article>{{item.body|sin}}</article></router-link>
      </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      blogs:[],
      search:"",
    }
  },
  created(){
      let _self = this
      this.axios.get("https://jsonplaceholder.typicode.com/posts/")
      .then(function(data){
        _self.blogs = data.data.slice(0,10)
        console.log(_self.blogs)
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
#index{
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  left: 500px
}
#index .sing-blog{
  padding: 50px;
  margin: 20px 0px;
  box-sizing: border-box;
  background: #6677cc;
  border: 1px dotted #aaa;
}
#index a{
  color:#444;
  text-decoration: none;
}
#index input{
  padding: 8px;
  width: 800px;
  height: 30px;
  box-sizing: border-box;
}
</style>
