<template>
  <div id="header">
        <ul>
          <li><span><router-link to="/">首页</router-link></span></li>
          <li><span><router-link to="/add">写博客</router-link></span></li>
      </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style scope>
#header{
    width: 100%;
    height: 70px;
    font-size: 25px;
    background-image: url(../assets/timg.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
#header li{
    float: left;
    list-style: none;
}
span{
    font-size: 18px;
    color:deeppink;
    padding: 3px 5px 3px 5px;
    position:relative;
    top: 25px;
    margin-right: 50px;
}
li :hover{
    background:greenyellow;
}
img{
    position: relative;
    left: 40px;
}
</style>
