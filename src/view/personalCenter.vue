<template>
  <div class="Personagecenter">
    <!-- 头部-->
    <div class="personheader">
      <div class="home_header">
        <div class="home_header_logo" @click="gooffw()">
        </div>
        <div class="home_center_navDIV">
          <div class="home_header_nav"><a href="http://book.haimaqingfan.com/library?category=-1&channel=-1&status=-1&word=-1&update=-1&sort=popularity">书城</a></div>
          <div class="home_header_nav"><a href='http://book.haimaqingfan.com'>关于</a></div>
          <div class=""></div>
        </div>
      </div>
    </div>
    <!-- 个人中心-->
    <div class="personCenter">
      <div class="personCenter_left">
        <!-- 我添加的作品-->
        <div class="personCenter_left_add">
          <div class="personCenter_left_add_title">
            <div class="plot_block"></div>
            <div class="overview_title_first">我添加的作品</div>
            <div class="overview_title_second">部分作品准备时间较长请耐心等待</div>
          </div>
          <div v-if="uploadlistbol" class="personCenter_left_add_center">
            <!-- 循环判断书籍是否分析完成-->
            <div v-for="(item, index) in uploadList"  :key="index"  v-if="item.status === 0" class="personCenter_left_add_item" @click="gobookinfo(item.bookId)">
              <div class="personCenter_left_add_item_bookCover">
                <img :src="item.folderUrl"/>
              </div>
              <div class="personCenter_left_add_item_bookName">
                {{item.bookName}}
              </div>
              <div class="personCenter_left_add_item_state">
                数据准备中
              </div>
            </div>
            <div v-for="(item, index) in uploadList"  :key="index"  v-if="item.status === 1" class="personCenter_left_add_item1" @click="gobookinfo(item.bookId)">
              <div class="personCenter_left_add_item1_bookCover">
                <img :src="item.folderUrl"/>
              </div>
              <div class="personCenter_left_add_item1_bookName">
                {{item.bookName}}
              </div>
              <div class="personCenter_left_add_item1_state">
                数据分析完成
              </div>
            </div>
          </div>
          <div v-else="" class="personCenter_left_add_center">
            <div style="text-align: center; line-height: 200px; width: 100%; color: #666666">暂无数据请添加书籍</div>
          </div>
        </div>
        <!-- 我关注的作品-->
        <div class="personCenter_left_follow">
          <div class="personCenter_left_add_title">
            <div class="plot_block"></div>
            <div class="overview_title_first">我关注的作品</div>
            <div class="overview_title_second">每部作品数据将持续更新</div>
          </div>
          <div v-if="solicitudeListbol" class="personCenter_left_add_center" @click="gobookinfo(item.bookId)">
            <div v-for="(item, index) in solicitudeList" :key="index" class="personCenter_left_add_item2">
              <div class="personCenter_left_add_item2_bookCover">
                <img :src="item.folderUrl"/>
              </div>
              <div class="personCenter_left_add_item2_bookName">
                {{item.bookName}}
              </div>
            </div>
          </div>
          <div v-else="" class="personCenter_left_add_center">
            <div style="text-align: center; line-height: 200px; width: 100%; color: #666666">暂无数据快去关注吧</div>
          </div>
        </div>
      </div>
      <div class="personCenter_right">
        <div class="personCenter_right_imgicon">
          <img src="../images/iconpeople.jpeg"/>
        </div>
        <div class="personCenter_right_userName">
          {{userName}}
        </div>
        <div class="personCenter_right_Logout" @click="gologout">登出</div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      tokenbol: false,
      userName: localStorage.phoneNum,
      uploadList: [],
      solicitudeList: [],
      uploadlistbol: true,
      solicitudeListbol: true
    }
  },
  mounted () {
  },
  created () {
    this.getbookuploadList()
    this.getbooksolicitudeList()
  },
  methods: {
    //    判断是否登录
    bollogin () {
      if (localStorage.token === undefined || localStorage.token === null) {
        this.tokenbol = false
      } else if (localStorage.token) {
        this.tokenbol = true
      }
    },
    gooffw () {
      this.$router.push({
        path: '/',
        name: 'OfficialWebsite'
      })
    },
    gologout () {
      const that = this
      Axios({
        url: '/user/loginout',
        method: 'post'
      }).then(function (res) {
        if (res.data.code === '200') {
          localStorage.removeItem('token')
          that.$router.push({
            path: '/',
            name: 'OfficialWebsite'
          })
        }
      })
    },
    //  获取上传的书籍列表
    getbookuploadList () {
      const that = this
      Axios({
        url: '/auth/personal/uploadList',
        method: 'get'
      }).then(function (res) {
        if (res.data.data.length === 0) {
          that.uploadlistbol = false
        } else if (res.data.data.length > 0) {
          that.uploadlistbol = true
          that.uploadList = res.data.data
        }
      })
    },
    //  获取关注的书籍列表
    getbooksolicitudeList () {
      const that = this
      Axios({
        url: '/auth/personal/solicitudeList',
        method: 'get'
      }).then(function (res) {
        if (res.data.data.length === 0) {
          that.solicitudeListbol = false
        } else if (res.data.data.length > 0) {
          that.solicitudeListbol = true
          that.solicitudeList = res.data.data
        }
      })
    },
    gobookinfo (a) {
      this.$router.push({name: 'home', params: {id: a, type: 'user'}})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Personagecenter{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .personheader{
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .home_header{
    width: 96%;
    height: 100px;
    display: flex;
    justify-content: space-between;
  }
  .home_header_logo{
    margin-top: 20px;
    width:9.6%;
    height: 66px;
    background-image: url("../images/pensonLogo.png");
    background-size: 100%;
    background-repeat: no-repeat;
    margin-right: 2%;
    cursor: pointer;
  }
  .home_header_nav{
    width: 50%;
    margin-left: 2%;
    line-height: 20px;
    margin-top: 18px;
    font-size: 1rem;
    color: #494949;
  }
  .home_center_navDIV{
    height: 50px;
    text-decoration: none;
    font-size: 1rem;
    color: #494949;
    line-height: 20px;
    margin-top: 18px;
    display: flex;
  }
  .home_center_navDIV a{
    display: block;
    width: 10%;
    min-width: 100px;
    text-decoration: none;
    color: #494949;
  }
  .personCenter{
    width: 80%;
    max-width: 1080px;
    height: 600px;
    display: flex;
    justify-content: space-between;
  }
  .personCenter_left{
    width: 75%;
    height: 600px;
  }
  .personCenter_left_add{
    margin-bottom: 30px;
    margin-left: 1%;
    width: 95%;
    border-radius: 3px;
    min-height: 260px;
    box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.03);
  }
  .personCenter_left_follow{
    margin-bottom: 30px;
    margin-left: 1%;
    width: 95%;
    border-radius: 3px;
    min-height: 260px;
    box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.03);
  }
  .personCenter_left_add_title{
    padding-top: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .plot_block{
    width: 3px;
    height: 10px;
    background-color: #369ED9;
  }
  .overview_title_first{
    font-size: 0.95rem;
    margin-left: 5px;
    color: #292929;
  }
  .overview_title_second{
    font-size: 0.5rem;
    color: #767B8E;
  }
  .personCenter_right{
    width: 25%;
    height: 290px;
    box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.03);
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .personCenter_right_imgicon{
    margin-top: 40px;
    width: 120px;
    height: 120px;
    background-color: #3a8ee6;
    border-radius: 50%;
  }
  .personCenter_right_imgicon img {
    width: 100%;
    height: 100%;
  }
  .personCenter_right_userName{
    margin-top: 30px;
    width: 100%;
    text-align: center;
    color: #2B2C2E;
    font-size: 1.8rem;
  }
  .personCenter_right_Logout{
    width: 100%;
    margin-top: 10px;
    color: #9B9B9B;
    cursor: pointer;
  }
  .personCenter_left_add_center{
    margin-top: 20px;
    width: 96%;
    padding-left: 4%;
    display: flex;
    flex-wrap: wrap;
  }
  .personCenter_left_add_item{
    width: 12.5%;
    height: 130px;
    margin-right: 4%;
    margin-bottom: 70px;
    position: relative;
  }
  .personCenter_left_add_item_bookCover{
    width: 100%;
    height: 130px;
  }
  .personCenter_left_add_item_bookCover img{
    width: 100%;
    height: 100%;
  }
  .personCenter_left_add_item:after{
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-image: url("../images/Group_3111.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    content: attr(data-text);
    transition: all 1s ease;
    transform: translateY(0%);
    color: #FFF;
  }
  .personCenter_left_add_item_bookName{
    text-align: left;
    font-size: 16px;
    line-height: 20px;
    color: #555555;
    height: 40px;
    font-weight: 800;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
  }
  .personCenter_left_add_item_state{
    text-align: left;
    font-size: 12px;
    color: #B8B8B8;
  }
  .personCenter_left_add_item1{
    width: 12.5%;
    height: 130px;
    margin-right: 4%;
    margin-bottom: 70px;
    position: relative;
  }
  .personCenter_left_add_item1_bookCover{
    width: 100%;
    height: 130px;
  }
  .personCenter_left_add_item1_bookCover img{
    width: 100%;
    height: 100%;
  }
  .personCenter_left_add_item1:after{
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-image: url("../images/Group_right.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    content: attr(data-text);
    transition: all 1s ease;
    transform: translateY(0%);
    color: #FFF;
  }
  .personCenter_left_add_item1_bookName{
    text-align: left;
    font-size: 16px;
    line-height: 20px;
    color: #555555;
    height: 40px;
    font-weight: 800;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
  }
  .personCenter_left_add_item1_state{
    text-align: left;
    font-size: 12px;
    color: #B8B8B8;
  }
  .personCenter_left_add_item2{
    width: 12.5%;
    height: 130px;
    margin-right: 4%;
    margin-bottom: 30px;
    background-color: #3a8ee6;
    box-shadow: 2px 2px 2px #ccc;
    position: relative;
  }
  .personCenter_left_add_item2_bookCover img{
    width: 100%;
    height: 100%;
  }
  .personCenter_left_add_item2_bookName{
    text-align: left;
    font-size: 16px;
    line-height: 20px;
    color: #555555;
    height: 40px;
    font-weight: 800;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
  }
  .personCenter_left_add_item2_state{
    text-align: left;
    font-size: 12px;
    color: #B8B8B8;
  }
</style>
