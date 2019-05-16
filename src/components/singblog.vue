<template>
    <div id="singblog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.body}}</article>
    </div>
</template>

<script>
export default {
    data(){
        return{
            id:this.$route.params.id,
            blog:{}
        }
    },
    created(){
        var _self=this
        this.axios.get("https://jsonplaceholder.typicode.com/posts/"+this.id)
        .then(function(data){
        _self.blog=data.data
        console.log(_self.blog)
      })
    }
}
</script>

<style scope>
#singblog{
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    background: #eee;
    border: 1px dotted #aaa
}
</style>
