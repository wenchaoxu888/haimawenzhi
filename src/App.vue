<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'App',
  created () {
    //    正式服务器
    //    Axios.defaults.baseURL = 'http://aiapi.haimaqingfan.com'
    //    测试服务器
    Axios.defaults.baseURL = 'http://cswzapi.haimaqingfan.com'
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
::-webkit-scrollbar{
  display:none;
}
*{
  margin: 0;
  padding: 0;
}
/* 选择器样式*/
  .el-tabs__item{
    color: #8F8F8F !important;
    font-size: 1rem !important;
  }
  .el-tabs__item:hover{
    font-size: 1rem !important;
    color: #369ED9 !important;
  }
  .el-tabs__item.is-active{
    font-size: 1.2rem !important;
    color: #369ED9 !important;
  }
.home_center_nav .el-tabs__active-bar{
  height: 2px!important;
}
.platformDataEchartsStyle .el-tabs__item{
  color: #8F8F8F !important;
  font-size: 14px !important;
  line-height: 1.5rem !important;
  height: 25px !important;
}
.platformDataEchartsStyle .el-tabs__item:hover{
  font-size: 14px !important;
  color: #369ED9 !important;
  line-height: 1.5rem !important;
  height: 25px !important;
}
.platformDataEchartsStyle .el-tabs__item.is-active{
  font-size: 14px !important;
  color: #369ED9 !important;
  line-height: 1.5rem !important;
  height: 20px !important;
}
.platformDataEchartsStyle .el-tabs__nav-wrap::after{
  background-color: #fff;
}
.platformDataEchartsStyle .el-tabs__active-bar{
  height: 1px!important;
  background-color: #369ED9!important;
}
.VermicelliActive_Echarts .el-tabs__item{
  color: #8F8F8F !important;
  font-size: 14px !important;
  line-height: 1.5rem !important;
  height: 25px !important;
}
.VermicelliActive_Echarts .el-tabs__item:hover{
  font-size: 14px !important;
  color: #369ED9 !important;
  line-height: 1.5rem !important;
  height: 25px !important;
}
.VermicelliActive_Echarts .el-tabs__item.is-active{
  font-size: 14px !important;
  color: #369ED9 !important;
  line-height: 1.5rem !important;
  height: 20px !important;
}
.VermicelliActive_Echarts .el-tabs__nav-wrap::after{
  background-color: #fff;
}
.VermicelliActive_Echarts .el-tabs__active-bar{
  height: 1px!important;
  background-color: #369ED9!important;
}
.RoleDiscussion_center .el-tabs__item{
  color: #939393 !important;
  font-size: 0.85rem !important;
  line-height: 1.5rem !important;
  height: 25px !important;
}
.RoleDiscussion_center .el-tabs__item:hover{
  font-size: 0.85rem !important;
  color: #19A69C !important;
  line-height: 1.5rem !important;
  height: 25px !important;
}
.RoleDiscussion_center .el-tabs__item.is-active{
  font-size: 0.85rem !important;
  color: #19A69C !important;
  line-height: 1.5rem !important;
  height: 20px !important;
}
.RoleDiscussion_center .el-tabs__nav-wrap::after{
  background-color: #fff;
}
.RoleDiscussion_center .el-tabs__active-bar{
  height: 1px!important;
  background-color: #19A69C!important;
}
.PublicOverview_emotion_itemtitleprogress .el-progress-bar{
  margin-top: 5px;
  height: 10px !important;
  border-radius: 0;

}
.PublicOverview_emotion_itemtitleprogress .el-progress-bar__outer{
  margin-top: 5px;
  height: 10px !important;
  border-radius: 0;

}
.PublicOverview_emotion_itemtitleprogress .el-progress-bar__inner{
  border-radius: 0;
  background-color:rgba(54, 158, 217, 0.38) !important;
}
  .el-radio-button__inner{
    margin-right: 20px;
    border: solid 1px #fff !important;
    background-color: #F6F6F6;
    color: #17BCC9;
    border-radius: 50px !important;
    font-size: 0.5rem !important;
    box-shadow: 0px 0px 0px 0px !important;
    padding: 5px 13px !important;
  }
  .el-radio-button__inner.is-active{
    margin-right: 20px;
    border: solid 1px #369ED9 !important;
    border-radius: 50px !important;
    font-size: 0.5rem !important;
  }
</style>
