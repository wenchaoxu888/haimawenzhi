<template>
  <div class="homediv">
    <div class='home'>
      <div class="home_header">
        <div class="home_header_logo" @click="gooffw()">
        </div>
        <div class="home_center_navDIV">
          <div class="home_header_nav"><a href="http://book.haimaqingfan.com/library?category=-1&channel=-1&status=-1&word=-1&update=-1&sort=popularity">书城</a></div>
          <div class="home_header_nav"><a href='http://book.haimaqingfan.com'>关于</a></div>
        </div>
      </div>
      <!-- 搜索框-->
      <div>
        <!--<div class="home_header_search">-->
        <!--<div style="display: flex">-->
        <!--<el-input-->
        <!--placeholder="请输入作品名称，如“斗破苍穹”，也可点击右侧上传TXT文件"-->
        <!--v-model="input5"-->
        <!--class="input-with-select"-->
        <!--&gt;-->
        <!--<el-select v-model="select" slot="prepend" placeholder="请选择">-->
        <!--<el-option label="作品" value="1"></el-option>-->
        <!--</el-select>-->
        <!--<el-button slot="append" icon="el-icon-search"></el-button>-->
        <!--</el-input>-->
        <!--<el-upload-->
        <!--class="upload-demo"-->
        <!--action="https://jsonplaceholder.typicode.com/posts/"-->
        <!--:on-preview="handlePreview"-->
        <!--:on-remove="handleRemove"-->
        <!--:before-remove="beforeRemove"-->
        <!--multiple-->
        <!--:limit="3"-->
        <!--:on-exceed="handleExceed"-->
        <!--&gt;-->
        <!--<el-button icon="el-icon-upload" type="info" plain>点击上传</el-button>-->
        <!--</el-upload>-->
        <!--</div>-->
        <!--</div>-->
      </div>
      <!-- 书籍信息-->
      <div class="home_header_bookinfo">
        <div class="home_bookinfo_cover">
          <img :src="bookinfo.folderUrl"/>
        </div>
        <div class="home_bookinfo_center">
          <!-- 书名 评分 排行-->
          <div>
            <div style="display: flex; justify-content: space-between">
              <div>
                <div class="home_bookinfo_name">
                  {{bookinfo.bookName}}
                </div>
                <div class="home_bookinfo_star">
                  <div>
                    <star :size="36" :score="bookinfo.score"></star>
                  </div>
                  <div style="font-size: 14px; color: #ffffff; margin-left: 12px; line-height: 14px; margin-top: 3px">{{bookinfo.score}}</div>
                </div>
              </div>
              <div class="home_bookinfo_ranking">
                <div class="home_bookinfo_ranking_title">热度排名</div>
                <div class="home_bookinfo_ranking_num" v-if="bookinfo.heatRank<1000">{{bookinfo.heatRank}}</div>
                <div class="home_bookinfo_ranking_num" v-if="bookinfo.heatRank>1000">
                  <div style="font-size: 1.5rem; font-weight: 800; width: 100% ; text-align: center; line-height: 1.6rem">未上榜</div>
                  <div style="font-size: 12px; width: 100% ; font-weight: lighter; text-align: center; line-height: 1.5rem; color: #69BBEB">超过999名</div>
                </div>
              </div>
            </div>
            <div>

            </div>
          </div>
          <!-- 平台 简介 更新 关注-->
          <div style="display: flex;justify-content: space-between">
            <div>
              <div class="home_bookinfo_center_top">
                <div class="home_bookinfo_author">
                  <!--<div class="home_bookinfo_block"></div>-->
                  <div class="home_bookinfo_authorinfo">{{bookinfo.author}}</div>
                </div>
                <div class="home_bookinfo_author">
                  <div class="home_bookinfo_block"></div>
                  <div class="home_bookinfo_authorinfo">{{bookinfo.platform}}</div>
                </div>
                <div class="home_bookinfo_author">
                  <div class="home_bookinfo_block"></div>
                  <div class="home_bookinfo_authorinfo">{{channel[bookinfo.platform]}}</div>
                </div>
              </div>
              <div class="home_bookinfo_center_bottom">
              {{bookinfo.introduction}}
              </div>
            </div>
            <div class="home_bookinfo_center_right">
              <div class="home_bookinfo_center_right_update">
                <div style="font-size: 1rem; line-height: 2rem">数据更新于</div>
                <div style="font-size: 0.95rem; width:  6.8rem">{{ homeDay | data}}</div>
              </div>
              <div>
                <!--<el-button class="home_bookinfo_right_follow" size="small" type="primary">关注</el-button>-->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home_center_nav">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="剧情解析" name="first">
            <plot></plot>
          </el-tab-pane>
          <el-tab-pane label="人设分析" name="second">
            <PersonageSetting></PersonageSetting>
          </el-tab-pane>
          <el-tab-pane label="数据表现" name="third">
            <data-representation :heatRank="bookinfo.heatRank"></data-representation>
          </el-tab-pane>
          <el-tab-pane label="舆论分析" name="fourth">
            <PublicOpinion></PublicOpinion>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="footer">
        <div class="footercenter">
          <div class="footercenter_left">
            <div>电话：010-64759871</div>
            <div>邮箱： banquan@haimaqingfan.com</div>
          </div>
          <div class="footercenter_right">
            <div>网址：www.haimaqingfan.com</div>
            <div>地址：北京朝阳区望京SOHO T2 B座 1508</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Plot from '../components/plot.vue'
import PersonageSetting from '../components/PersonageSetting.vue'
import DataRepresentation from '../components/DataRepresentation.vue'
import PublicOpinion from '../components/PublicOpinion.vue'
import Star from '../components/star/star.vue'
import Axios from 'axios'

export default {
  components: {
    Star,
    Plot,
    PersonageSetting,
    DataRepresentation,
    PublicOpinion
  },
  name: 'home',
  data () {
    return {
      channel: {'起点中文网': '男性向小说', '起点女生网': '女性向小说', '创世中文网': '男性向小说', '云起书院': '女性向小说', '晋江文学城': '女性向小说', '潇湘书院': '女性向小说'},
      bookinfo: '',
      activeName: 'first',
      msg: 'Welcome to Your Vue.js App',
      input5: '',
      select: '',
      homeDay: '',
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
    }
  },
  created () {
    this.book_Data()
    this.homedayData()
  },
  filters: {
    // 添加日期转换的过滤器
    data (input) {
      if (input === null || input === undefined) {
        return ''
      } else {
        var d = new Date(input)
        var year = d.getFullYear()
        var month = d.getMonth() + 1
        var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate()
        var hour = d.getHours()
        var minutes = d.getMinutes()
        return year + '年' + month + '月' + day + '日' + hour + '时' + minutes + '分'
      }
    }
  },
  methods: {
    gooffw () {
      this.$router.push({
        path: '/',
        name: 'OfficialWebsite'
      })
    },
    homedayData () {
      const that = this
      Axios({
        url: '/dataRepresentation/platformTotalData',
        method: 'get',
        params: {
          bookId: this.$route.params.id
        }
      }).then(function (res) {
        that.homeDay = res.data.data.updateAt
      })
    },
    book_Data () {
      const that = this
      Axios({
        url: '/bookSearch/getBookById',
        method: 'get',
        params: {
          bookId: this.$route.params.id,
          type: 'lucene'
        }
      }).then(function (res) {
        that.bookinfo = res.data.data
      })
    },
    handleClick (tab, event) {
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.home{
  min-width: 1000px;
  background-image: url("../images/bg.png");
  background-size: 100% 300px;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.official_header{
  width: 100%;
  min-height: 720px;
  background-image: url("../images/homebg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.home_header{
  width: 90%;
  height: 300px;
  display: flex;
  justify-content: space-between;
}
.home_header_logo{
  margin-top: 20px;
  width:9.6%;
  height: 66px;
  background-image: url("../images/logo.png");
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
  color: #fff;
}
.home_center_navDIV{
  height: 50px;
  text-decoration: none;
  font-size: 1rem;
  color: #fff;
  line-height: 20px;
  margin-top: 18px;
  display: flex;
}
.home_center_navDIV a{
  display: block;
  width: 10%;
  min-width: 100px;
  text-decoration: none;
  color: white;

}
  .el-select{
    width: 100px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  .home_header_search{
    margin-top: -190px;
    width: 40%;
    margin-right: 10%;
  }
  .upload-demo{
    margin-left: 2%;
  }
  .home_header_bookinfo{
    margin-top: -100px;
    max-width: 1024px;
    width: 80%;
    height: 220px;
    display: flex;
    justify-content: space-between;
  }
  .home_bookinfo_cover{
    width: 14%;
    max-width: 200px;
    min-width: 100px;
    height: 200px;
  }
  .home_bookinfo_cover img{
    width: 100%;
    height: 100%;
  }
  .home_bookinfo_center{
    width: 84.5%;
    height: 148px;
  }
  .home_bookinfo_center .home_bookinfo_name{
    text-align: left;
    color: white;
    font-weight: 600;
    font-size: 1.5rem;
  }
  .home_bookinfo_star{
    margin-top: 20px;
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .home_bookinfo_ranking{
    border-radius: 4px;
    max-width: 120px;
    min-width: 85px;
    width: 10%;
    height: 85px;
    background-color: white;
    margin-right: 6.5%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .home_bookinfo_ranking_title{
    color: #A2A2A2;
    font-size: 1rem;
    line-height: 34px;
  }
  .home_bookinfo_ranking_num{
    width: 100%;
    height: 50px;
    color: #369ED9;
    font-size: 2.3rem;
    font-weight: 800;
    line-height: 50px;
    display: flex;
    flex-direction: column;
  }
  .home_bookinfo_center_top{
    margin-top: 35px;
    display: flex;
  }
  .home_bookinfo_author{
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 0.87rem;
    color: #3D3D3D;
  }
  .home_bookinfo_block{
    display: inline-block;
    margin-left: 5px;
    margin-right: 15px;
    width: 1px;
    height: 15px;
    /*border: solid 1px #979797;*/
    background-color: #D8D8D8;
  }
  .home_bookinfo_authorinfo{
    margin-right: 10px;
  }
  .home_bookinfo_center_bottom{
    margin-top: 15px;
    width: 100%;
    height: 60px;
    text-align: left;
    font-size: 0.87rem;
    color: #3D3D3D;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:3;
  }
  .home_bookinfo_center_right{
    margin-top: 20px;
    min-width: 200px;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .home_bookinfo_center_right_update{
    margin-top: 30px;
    margin-bottom: 10px;
    text-align: center;
    font-size: 0.8rem;
    color: #767B8E;
  }
  .home_bookinfo_right_follow{
    width: 130px;
    background-color: #369ED9;
  }
  .home_center_nav{
    width: 80%;
    max-width: 1024px;
    text-align: left;
    margin-top: 20px;
    font-size: 1rem;
  }
  .footer{
    width: 100%;
    height: 80px;
    background-color: #262A36;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .footercenter{
    width: 60%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    text-align: left;
    color: white;
    font-size: 12px;
  }
  .footercenter_left{
    margin-top: 8px;
  }
  .footercenter_left div{
    margin-top: 10px;
  }
  .footercenter_right{
    margin-top: 8px;
  }
  .footercenter_right div{
    margin-top: 10px;
  }
</style>
