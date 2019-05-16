<template>
  <div id="addblog">
    <h1>写博客</h1>
    <form v-if=!submmit>
      <div class="title">
        <label for="title">博客标题</label>
        <input type="text" name="title" v-model="blog.title" id="title">
      </div>
      <label for="txt">博客内容</label>
      <textarea id="txt" cols="30" rows="10" v-model="blog.txt"></textarea>
      <div id="checkbox">
        <label>Vue.js</label><input type="checkbox" value="Vue.js" v-model="blog.kind">
        <label>Node.js</label><input type="checkbox" value="Node.js" v-model="blog.kind">
        <label>React.js</label><input type="checkbox" value="React.js" v-model="blog.kind">
        <label>Angluar4</label><input type="checkbox" value="Angluar4" v-model="blog.kind">
      </div>
      <label class="auth">作者:&nbsp;<input type="text" v-model="blog.author" width="10px"></label><br>
      <button @click="view">预览</button><button @click.prevent="post">提交博客</button>
    </form>
    <div id="view" v-if="submmit">
      <div>
        <h3>您的博客发布成功</h3>
      </div>
      <div>
      <p>博客标题:</p>{{blog.title}}
      <p>博客内容:</p>{{blog.txt}}<br>
      <p>分类:</p>
      <ul v-for="item in blog.kind" >
        <li>{{item}}</li>
      </ul><br>
      <p>作者:{{blog.author}}</p>
      </div>
    </div>  
  </div>
</template>

<script>
export default {
  data () {
    return {
      blog:{
        title:"",
        txt:"",
        kind:[],
        author:"",
      },
      submmit:false,
    }
  },
  methods: {
    post(){
      var _self=this
      this.axios.post("https://vue-demo-85ab7.firebaseio.com/posts.json",this.blog)
      .then(function(data){
        console.log(data);
        _self.submmit=true;
      });
    },
    view(){
      this.submmit=true;
    }
  }
}
</script>

<style scope>
*{
  font-size: 18px;
  color:deeppink;
}
#addblog *{
  box-sizing: border-box;
}
#addblog{
  position: relative;
  margin: 100px,auto;
  max-width: 600px;
  padding: 20px;
  left: 600px;
  top: 100px;

}
h1{
  color: crimson;
  font-size:60px;
}
.title{
  margin-bottom: 20px;
}
label{
  display: block;
  margin: 20px,0,10px;
}
input[type="txt"],textarea{
  display: block;
  width: 100%;
  padding: 8px;
  border-radius: 4px;
}
textarea{
  width: 400px;
}
#checkbox>label{
  display: inline-block;
  margin-top: 0px;
}
#checkbox>input{
  display: inline-block;
  margin-top: 10px;
  margin-right: 10px;
  width:15px;
  outline-style: none;
  border-style: none;
  height: 15px;
}
button{
  display:inline-block;
  margin: 20px,0px;
  background: crimson;
  color: aliceblue;
  border: 0px;
  margin: 10px;
  padding: 14px;
  border-radius:4px;
  font-size: 18px;
  cursor: pointer;
  width: 100px;
  margin-left: 20px;
  margin-right: 100px;
}
.auth{
  display: inline-block;
  margin-top: 20px;
  
}
#view{
  padding: 10px,20px;
  border: 1px dotted#ccc;
  margin: 30px,0;
}
#view ul li{
  list-style: none;
  float: left;
  margin-right: 10px;
}
#view>h3{
  margin-top: 10px;
}
p{
  color: magenta;
}
</style>
