<template>
  <div class="search">
    <div class="home_header">
      <div class="home_header_logo" @click="gooffw()">
      </div>
      <div class="home_center_navDIV">
        <div class="home_header_nav"><a href="http://book.haimaqingfan.com/library?category=-1&channel=-1&status=-1&word=-1&update=-1&sort=popularity">书城</a></div>
        <div class="home_header_nav"><a href='http://book.haimaqingfan.com'>关于</a></div>
        <div class="home_header_nav">
          <div class="home_header_nav_login" @click="gologin" v-if="tokenbol">登录</div>
          <div class="home_header_nav_login" v-else="" @click="gopersonalcenter">个人中心</div>
        </div>
      </div>
    </div>
    <div class="search_box">
      <div class="official_header_bookinfo_search">
        <div class="official_header_bookinfo_search_title">作品</div>
        <div class="official_header_bookinfo_search_center">
          <div class="official_header_bookinfo_search_InputDiv">
            <input class="official_header_bookinfo_search_Input" v-model="searchInput" placeholder="请输入作品链接"/>
          </div>
          <!-- 上传文件-->
          <div>
            <!--<el-upload-->
            <!--class="upload-demo"-->
            <!--action="https://jsonplaceholder.typicode.com/posts/"-->
            <!--:on-preview="handlePreview"-->
            <!--:on-remove="handleRemove"-->
            <!--:before-remove="beforeRemove"-->
            <!--multiple-->
            <!--:limit="3"-->
            <!--:on-exceed="handleExceed">-->
            <!--<div class="updataICON"></div>-->
            <!--</el-upload>-->
          </div>
          <div class="searchICON" @click="gosearchHandler()">

          </div>
        </div>
      </div>
    </div>
    <!-- 搜索结果列表-->
    <div v-if="booklistBol" class="search_list">
        <div class="search_list_info">
          <div class="search_list_info_searchICON">
            <img src="../images/searchicon_03.png"/>
          </div>
          <div>"{{searchbookName}}"的</div>
          <div style="font-size: 20px; font-weight: 800">{{totalNum}}</div>
          <div>条搜索结果</div>
        </div>
        <div class="search_list_center">
          <!-- 搜索列表-->
          <div class="searchCenter_left">
            <div v-for="(item, index) in searchList" :key="index" class="search_item">
              <div class="search_item_left">
                <div class="search_item_bookCover"  @click="gohome(item.bookId)">
                  <img :src="item.folderUrl"/>
                </div>
                <div class="search_item_bookInfo">
                  <div class="search_item_bookInfo_bookname" @click="gohome(item.bookId)">{{item.bookName}}</div>
                  <div class="search_item_bookInfo_stars">
                    <star :size="36" :score="item.score"></star>
                  </div>
                  <div class="search_item_bookInfo_Authors"  @click="gohome(item.bookId)">
                    <div class="search_item_bookAuthor">{{item.author}}</div>
                    <div class="search_item_bookInfoBlock"></div>
                    <div class="search_item_bookAuthor">{{item.platform}}</div>
                    <div class="search_item_bookInfoBlock"></div>
                    <div class="search_item_bookAuthor">{{channel[item.platform]}}</div>
                  </div>
                  <div class="search_item_bookInfo_bookintroduce">{{item.introduction}}
                  </div>
                </div>
              </div>
              <div class="search_item_right">
                <div class="search_item_rightTitle">热度排名</div>
                <div class="search_item_rightNum" v-if="item.heatRank<1000">{{item.heatRank}}</div>
                <div class="search_item_rightNum" v-if="item.heatRank>1000">
                  <div style="font-size: 1.5rem; font-weight: 800; width: 100% ; text-align: center; line-height: 1.6rem">未上榜</div>
                  <div style="font-size: 12px; width: 100% ; font-weight: lighter; text-align: center; line-height: 1.5rem; color: #69BBEB">超过999名</div>
                </div>
              </div>
            </div>
          </div>
          <!-- 上传url还有txt文件-->
          <div class="searchCenter_right">
            <div style="width: 35%; min-width: 380px; height: auto; padding-bottom: 20px; border: solid 1px #D3D3D3;">
              <div class="searchCenter_right_title">
                <div class="searchCenter_right_titleBookName">搜索“{{searchbookName}}”结果不匹配 ?</div>
                <div class="searchCenter_right_titleCenter">还可以选择上传作品TXT文件或输入网站链接精确查找</div>
              </div>
              <!-- 上传url-->
              <div class="searchCenter_right_link">
                <div class="searchCenter_right_link_header">
                  <div class="searchCenter_right_linktitle">精确链接：</div>
                  <div>
                    <el-tooltip placement="right" effect="light">
                      <div slot="content">
                        <div style="color: #2B2C2E; line-height: 30px ; font-weight: 800; font-size: 14px">请输入目标作品的详情页面链接，示例如下</div>
                        <div style="color: #00A69D; line-height: 35px"><span style="color: #2B2C2E">起点中文网:</span> https://book.qidian.com/info/1005305925</div>
                        <div style="color: #00A69D; line-height: 35px"><span style="color: #2B2C2E">起点中文网:</span> https://book.qidian.com/info/1005305925</div>
                        <div style="color: #00A69D; line-height: 35px"><span style="color: #2B2C2E">起点中文网:</span> https://book.qidian.com/info/1005305925</div>
                        <div style="color: #00A69D; line-height: 35px"><span style="color: #2B2C2E">起点中文网:</span> https://book.qidian.com/info/1005305925</div>
                      </div>
                      <div class="searchCenter_right_linkimg" >
                        <img src="../images/Question.png"/>
                      </div>
                    </el-tooltip>
                  </div>
                  <div style="width: 70%; text-align: right; margin-right: 7%">
                    <el-button type="primary" size="mini" @click="uploadUrl()">搜索</el-button>
                  </div>
                </div>
                <div style="width: 90%; margin-left: 3%; margin-top: 5px">
                  <el-input v-model="inputLink" placeholder="请输入内容" size="medium"></el-input>
                </div>
              </div>
              <div class="searchCenter_right_linkBlock"></div>
              <!-- 上传txt-->
              <div class="searchCenter_right_link">
                <div class="searchCenter_right_link_header">
                  <div class="searchCenter_right_linktitle">上传TXT：</div>
                </div>
                <div style="width: 90%; margin-left: 3%; margin-top: 5px">
                  <el-upload
                    class="upload-demo"
                    drag
                    :headers="myHeaders"
                    :limit="2"
                    :on-success="uploadsuccess"
                    :on-exceed="handleExceed"
                    action="http://cswzapi.haimaqingfan.com/auth/upload/txt"
                    :before-upload="beforeAvatarUpload"
                    multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">只能上传txt文件，不超过15M且不小于15kb</div>
                  </el-upload>
                </div>
              </div>
            </div>

            <!-- 作品相关-->
            <div class="searchCenter_right_related">
              <div class="searchCenter_right_related_title">作品相关</div>
              <div class="searchCenter_right_related_center">
                <div class="searchCenter_right_related_item" v-for="(item, index) in bookAbout" :key="index">
                  <div class="searchCenter_right_related_bookcover" @click="gohome(item.bookId)">
                    <img :src="item.folderUrl"/>
                  </div>
                  <div class="searchCenter_right_related_bookName" @click="gohome(item.bookId)">{{item.bookName}}</div>
                  <div class="searchCenter_right_related_star">
                    <star :size="24" :score="item.score"></star>
                  </div>
                  <div class="searchCenter_right_related_star">
                    {{item.score}}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <!-- 搜索结果为null-->
    <div v-else="" class="NosearchCenter">
      <div class="NosearchCenter_left">
        <div class="NosearchCenter_left_title">
          <div class="NosearchCenter_left_titleBookName">搜索“{{searchbookName}}”结果不匹配 ?</div>
          <div class="NosearchCenter_left_titleCenter">还可以选择上传作品TXT文件或输入网站链接精确查找</div>
        </div>
        <!-- 搜索url-->
        <div class="NosearchCenter_left_link">
          <div class="NosearchCenter_left_link_header">
            <div class="NosearchCenter_left_linktitle">精确链接：</div>
            <div>
              <el-tooltip placement="right" effect="light">
                <div slot="content">
                  <div style="color: #2B2C2E; line-height: 30px ; font-weight: 800; font-size: 14px">请输入目标作品的详情页面链接，示例如下</div>
                  <div style="color: #00A69D; line-height: 35px"><span style="color: #2B2C2E">起点中文网:</span> https://book.qidian.com/info/1005305925</div>
                  <div style="color: #00A69D; line-height: 35px"><span style="color: #2B2C2E">起点中文网:</span> https://book.qidian.com/info/1005305925</div>
                  <div style="color: #00A69D; line-height: 35px"><span style="color: #2B2C2E">起点中文网:</span> https://book.qidian.com/info/1005305925</div>
                  <div style="color: #00A69D; line-height: 35px"><span style="color: #2B2C2E">起点中文网:</span> https://book.qidian.com/info/1005305925</div>
                </div>
                <div class="NosearchCenter_left_linkimg" >
                  <img src="../images/Question.png"/>
                </div>
              </el-tooltip>
            </div>
            <div style="width: 70%; text-align: right; margin-right: 7%">
              <el-button type="primary" size="mini"  @click="uploadUrl()">搜索</el-button>
            </div>
          </div>
          <div style="width: 90%; margin-left: 3%; margin-top: 25px">
            <el-input v-model="inputLink" placeholder="请输入内容" size="medium"></el-input>
          </div>
        </div>
        <div class="NosearchCenter_left_linkBlock"></div>
        <!-- 搜索txt-->
        <div class="NosearchCenter_left_link">
          <div class="NosearchCenter_left_link_header">
            <div class="NosearchCenter_left_linktitle">上传TXT：</div>
          </div>
          <div style="width: 90%; margin-left: 3%; margin-top: 5px">
            <el-upload
              class="upload-demo"
              drag
              :headers="myHeaders"
              :limit="2"
              :on-success="uploadsuccess"
              :on-exceed="handleExceed"
              action="http://cswzapi.haimaqingfan.com/auth/upload/txt"
              :before-upload="beforeAvatarUpload"
              multiple>
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              <div class="el-upload__tip" slot="tip">只能上传txt文件，不超过15M且不小于15kb</div>
            </el-upload>
          </div>
        </div>
      </div>
      <div class="NosearchCenter_right">
        <div class="NosearchCenter_right_Center_title">最热作品</div>
        <div class="NosearchCenter_right_Center">
          <div class="NosearchCenter_right_item" v-for="(item, index) in hottestBooklist" :key="index">
            <div class="NosearchCenter_right_item_bookCover" @click="gohome(item.bookId)">
              <img :src="item.folderUrl"/>
            </div>
            <div class="NosearchCenter_right_item_bookName"  @click="gohome(item.bookId)">{{item.bookName}}</div>
            <div class="NosearchCenter_right_item_bookStar">
              <star :size="24" :score="item.score"></star>
            </div>
            <div class="NosearchCenter_right_item_bookStar">
              {{item.score}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="booklistBol" class="search_page">
        <el-button-group>
          <el-button v-if="currentPage <= 1" size="small" type="primary" icon="el-icon-arrow-left" disabled>上一页</el-button>
          <el-button v-else="" size="small" type="primary" icon="el-icon-arrow-left" @click="PreviouspageHandler">上一页</el-button>
          <el-button size="small" disabled round>第{{currentPage}}页(共{{totalPage}}页)</el-button>
          <el-button size="small" type="primary"  @click="nextpageHandler">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>
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
</template>

<script>
import Star from '../components/star/star.vue'
import Axios from 'axios'
export default {
  name: 'HelloWorld',
  components: {
    Star
  },
  data () {
    return {
      tokenbol: true,
      myHeaders: {AccessToken: localStorage.token},
      channel: {'起点中文网': '男性向小说', '起点女生网': '女性向小说', '创世中文网': '男性向小说', '云起书院': '女性向小说', '晋江文学城': '女性向小说', '潇湘书院': '女性向小说'},
      searchInput: '',
      searchbookName: '',
      searchList: [],
      searchsrore: '',
      searchdoc: '',
      searchshardIndex: '',
      currentPage: 1,
      totalPage: '--',
      PreviouspageArray: [],
      totalNum: '',
      inputLink: '',
      bookAbout: [],
      booklistBol: '',
      hottestBooklist: []
    }
  },
  created () {
    this.searchbookName = decodeURIComponent(this.$route.query.sc)
    this.searchInput = this.searchbookName
    this.getsearchList(this.searchbookName, 10, 1, '', '', '')
    this.getbookAbout(this.searchbookName)
    this.tokenbol_FUN()
  },
  mounted () {
  },
  methods: {
    //  判断是否登录
    tokenbol_FUN () {
      if (localStorage.token === undefined) {
        this.tokenbol = true
      } else {
        this.tokenbol = false
      }
    },
    //  进入个人中心页面
    gopersonalcenter () {
      this.$router.push({name: 'personalcenter'})
    },
    gologin () {
      this.$refs.userRef.showHandler()
    },
    // 上一页
    PreviouspageHandler () {
      console.log(this.PreviouspageArray)
      if (this.currentPage === 2) {
        this.getsearchList(this.searchbookName, 10, 1, '', '', '')
      } else {
        let currentPage = --this.currentPage
        this.getsearchList(this.searchbookName, 10, currentPage, this.PreviouspageArray[this.currentPage - 2]['score'], this.PreviouspageArray[this.currentPage - 2]['doc'], this.PreviouspageArray[this.currentPage - 2]['shardIndex'])
      }
    },
    // 下一页
    nextpageHandler () {
      let currentPage = ++this.currentPage
      this.getsearchList(this.searchbookName, 10, currentPage, this.searchsrore, this.searchdoc, this.searchshardIndex)
    },
    // 回首页
    gooffw () {
      this.$router.push({
        path: '/',
        name: 'OfficialWebsite'
      })
    },
    // 获取搜索列表
    getsearchList (searchcontent, pageSize, pageNum, srore, doc, shardIndex) {
      const that = this
      Axios({
        url: '/auth/bookSearch/searchBook',
        method: 'get',
        params: {
          search: searchcontent,
          pageSize: pageSize,
          currentPage: pageNum,
          score: srore,
          doc: doc,
          shardIndex: shardIndex
        }
      }).then(function (res) {
        if (res.data.data === null) {
          that.booklistBol = false
          that.gethottestBook()
        } else {
          console.log(res.data)
          that.booklistBol = true
          that.searchbookName = that.searchInput
          that.searchList = res.data.data
          that.searchsrore = res.data.score
          that.searchdoc = res.data.doc
          that.searchshardIndex = res.data.shardIndex
          that.totalPage = res.data.totalPage
          that.currentPage = res.data.currentPage
          that.totalNum = res.data.totalNum
          that.PreviouspageArray.push({score: res.data.score, doc: res.data.doc, shardIndex: res.data.shardIndex})
        }
        document.documentElement.scrollTop = document.body.scrollTop = 0
      })
    },
    // 获取作品相关数据
    getbookAbout (searchcontent) {
      const that = this
      Axios({
        url: '/auth/bookSearch/bookAbout',
        method: 'get',
        params: {
          search: searchcontent
        }
      }).then(function (res) {
        console.log(res.data.data)
        that.bookAbout = res.data.data
      })
    },
    // 点击搜索按钮
    gosearchHandler () {
      this.getsearchList(this.searchInput, 10, 1, '', '', '')
      this.getbookAbout(this.searchInput)
      this.$router.push({name: 'searchlist', query: {sc: this.searchInput}})
    },
    // 获取最热作品
    gethottestBook () {
      const that = this
      Axios({
        url: '/auth/bookSearch/recommend',
        method: 'get'
      }).then(function (res) {
        console.log(res.data.data)
        that.hottestBooklist = res.data.data
      })
    },
    // 点击进入作品详情
    gohome (a) {
      this.$router.push({name: 'home', params: {id: a}})
    },
    // 上传url函数
    uploadUrl () {
      const that = this
      Axios({
        url: '/auth/upload/url',
        methd: 'get',
        params: {
          url: this.inputLink
        }
      }).then(function (res) {
        console.log(res.data.code)
        if (res.data.code === '200') {
          that.$confirm('此操作将跳转至个人中心查看文本分析状态, 是否继续?', '搜索成功', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            that.$router.push({name: 'personalcenter'})
          }).catch(() => {
          })
        } else if (res.data.data === '201') {
          that.$alert('该地址不知支持文本分析）', '搜索失败', {
            confirmButtonText: '确定',
            callback: action => {
            }
          })
        }
      })
    },
    // 上传txt的相关函数(判断文件的大小格式)
    beforeAvatarUpload (file) {
      const extension = file.name.split('.')[1] === 'txt'
      const isLt2M = file.size / 1024 / 1024 < 15
      const islt1M = file.size / 1024 / 1024 > 0.15
      if (!extension) {
        console.log('上传模板只能是 txt 格式!')
        this.$alert('上传文本为txt格式（文件格式错误请重新上传）', '上传失败', {
          confirmButtonText: '确定',
          callback: action => {
          }
        })
        return false
      }
      if (!isLt2M) {
        this.$alert('上传文本不能超过15mb（文件过大请重新上传）', '上传失败', {
          confirmButtonText: '确定',
          callback: action => {
          }
        })
        return false
      }
      if (!islt1M) {
        this.$alert('请上传超过150kb的txt文件）', '上传失败', {
          confirmButtonText: '确定',
          callback: action => {
          }
        })
        return false
      }
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件`)
    },
    uploadsuccess (response, file, fileList) {
      console.log(response)
      if (response.code === '200') {
        this.$confirm('此操作将跳转至个人中心查看文本分析状态, 是否继续?', '上传成功', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$router.push({name: 'personalcenter'})
        }).catch(() => {
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search{
  width: 100%;
  min-width: 1000px;
  background-image: url("../images/bg.png");
  background-size: 100% 250px;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.home_header{
  width: 90%;
  height: 100px;
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
.home_center_navDIV{
  text-decoration: none;
  font-size: 1rem;
  color: #fff;
  line-height: 45px;
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
.home_header_nav_login{
  width: 10%;
  min-width: 100px;
  color: white;
  cursor: pointer;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
/***********搜索框部分*/
.search_box{
  width: 50%;
}
.official_header_bookinfo_search{
  margin-top: 10px;
  width: 100%;
  height: 140px;
}
.search_box .official_header_bookinfo_search_title{
  width: 6%;
  max-width: 45px;
  height: 25px;
  background-image: url("../images/searchtitle1_03.png");
  background-size: 100% 100%;
  font-size: 12px;
  color: #666666;
  line-height: 30px;
  text-align: left;
  padding-left: 3%;
  padding-right: 2%;
  font-weight: 800;
}
.official_header_bookinfo_search_center{
  width: 100%;
  height: 40px;
  background-color: white;
  display: flex;
}
.updataICON{
  width: 23px;
  margin-left: 20px;
  margin-top: 10px;
  height: 18px;
  background-image: url("../images/updataSearch_03.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.search_box .searchICON{
  width: 20px;
  margin-left: 20%;
  margin-top: 10px;
  height: 20px;
  background-image: url("../images/searchicon_03.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.official_header_bookinfo_search_InputDiv{
  width: 75%;
  height: 40px;
}
.official_header_bookinfo_search_Input{
  margin-top: 5px;
  width: 95%;
  padding-left: 5%;
  height: 30px;
  border: none;
}
/**********搜索列表部分*/
  .search_list{
    width: 80%;
    min-width: 1080px;
    margin-top: 20px;
  }
  .search_list_info{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    text-align: left;
    padding-bottom: 20px;
    border-bottom: solid 1px #efefef;
    color: #959595;
  }
  .search_list_center{
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  .searchCenter_left{
    width: 65%;
  }
  .search_item{
    margin-top: 40px;
    width: 95%;
    height: 160px;
    display: flex;
    justify-content: space-between;
  }
  .search_item_left{
    width: 90%;
    display: flex;
    padding-bottom: 25px;
    border-bottom: solid 1px #E1E1E1;
  }
  .search_item_bookCover{
    width: 20%;
    max-width: 100px;
    height: 140px;
    background-color: black;
  }
  .search_item_bookInfo{
    width: 75%;
    margin-left: 3%;
  }
  .search_item_bookCover img{
    width: 100%;
    height: 100%;
  }
  .search_item_bookInfo_bookname{
    margin-top: 10px;
    font-size: 16px;
    color: #5E5E5E;
    text-align: left;
  }
  .search_item_bookInfo_stars{
    margin-top: 10px;
    text-align: left;
  }
  .search_item_bookInfo_Authors{
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .search_item_bookInfoBlock{
    margin-left: 8px;
    margin-right: 8px;
    width: 1px;
    height: 15px;
    /*border: solid 1px #979797;*/
    background-color: #D8D8D8;
  }
  .search_item_bookAuthor{
    color: #B2B2B2;
    font-size: 12px;
  }
  .search_item_bookInfo_bookintroduce{
    margin-top: 10px;
    width: 95%;
    height: 40px;
    font-size: 12px;
    line-height: 20px;
    overflow:hidden;
    color: #696969;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;

  }
  .search_item_right{
    width: 20%;
    max-width: 100px;
    height: 100px;
    color: #5E5E5E;
  }
  .search_item_rightTitle{
    margin-top: 30px;
    font-size: 12px;
    color: #5E5E5E;
    line-height: 12px;
  }
  .search_item_rightNum{
    margin-top: 15px;
    font-size: 50px;
    font-weight: 800;
    line-height: 50px;
    color: #5E5E5E;
  }
  .search_page{
    width: 75%;
    padding-left: 20%;
    margin-top: 40px;
    text-align: left;
    margin-bottom: 30px;
  }
  .search_list_info_searchICON{
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  .search_list_info_searchICON img{
    width: 100%;
    height: 100%;
  }
  .searchCenter_right{
    margin-top: 40px;
    width: 35%;
    min-width: 380px;
    height: 570px;
  }
  .searchCenter_right_title{
    height: 60px;
    width: 100%;
    text-align: left;
    margin-bottom: 10px;
    border-bottom: solid 1px #D3D3D3;
  }
  .searchCenter_right_titleBookName{
    padding-left: 10px;
    margin-top: 5px;
    font-size: 16px;
    line-height: 30px;
    color: #474747;
  }
  .searchCenter_right_titleCenter{
    padding-left: 10px;
    color: #39527F;
    font-size: 10px;
  }
  .searchCenter_right_link_header{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .searchCenter_right_linktitle{
    width: 80px;
    margin-left: 8px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #474747;
  }
  .searchCenter_right_linkimg{
    margin-top: -2px;
    width: 15px;
    height: 15px;
  }
  .searchCenter_right_linkimg img {
    width: 100%;
    height: 100%;
  }
  .searchCenter_right_linkBlock{
    margin-left: 3%;
    margin-top: 20px;
    width: 90%;
    height: 1px;
    background-color: #efefef;
  }
  .el-icon-upload{
    font-size: 20px;
    margin: 8px 0 5px;
  }
  .searchCenter_right_related{
    margin-top: 40px;
    width: 100%;
    height: 200px;
  }
  .searchCenter_right_related_title{
    width: 100%;
    height: 20px;
    text-align: left;
    font-size: 14px;
    color: #474747;
    margin-bottom: 10px;
  }
  .searchCenter_right_related_center{
    width: 35%;
    min-width: 380px;
    display: flex;
    justify-content: space-between;
  }
  .searchCenter_right_related_item{
    width: 22%;
    height: 150px;
  }
  .searchCenter_right_related_bookcover{
    width: 90%;
    height: 100px;
  }
  .searchCenter_right_related_bookcover img {
    width: 100%;
    height: 100%;
  }
  .searchCenter_right_related_bookName{
    width: 100%;
    height: auto;
    max-height: 32px;
    margin-top: 5px;
    margin-bottom: 5px;
    line-height: 16px;
    font-size: 12px;
    color: #791010;
    text-align: left;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
  }
  .searchCenter_right_related_star{
    width: 100%;
    text-align: left;
    font-size: 12px;
    line-height: 12px;
    color: #5E5E5E;
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
  /***************没有搜索结果后发生的样式*/
  .NosearchCenter{
    margin-top: 40px;
    width: 75%;
    min-width: 380px;
    height: 470px;
    display: flex;
    justify-content: space-between;
  }
  .NosearchCenter_left{
    width: 60%;
    min-width: 380px;
    height: auto;
    border: solid 1px #D3D3D3;
    margin-bottom: 20px;
    padding-bottom: -50px;
  }
  .NosearchCenter_left_title {
    height: 60px;
    width: 100%;
    text-align: left;
    margin-bottom: 10px;
    border-bottom: solid 1px #D3D3D3;
  }
  .NosearchCenter_left_titleBookName {
    padding-left: 10px;
    margin-top: 5px;
    font-size: 16px;
    line-height: 30px;
    color: #474747;
  }
  .NosearchCenter_left_titleCenter {
    padding-left: 10px;
    color: #39527F;
    font-size: 10px;
  }
  .NosearchCenter_left_link_header {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .NosearchCenter_left_linktitle {
    width: 80px;
    margin-left: 8px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #474747;
  }
  .NosearchCenter_left_linkimg {
    margin-top: -2px;
    width: 15px;
    height: 15px;
  }
  .NosearchCenter_left_linkimg img {
    width: 100%;
    height: 100%;
  }
  .NosearchCenter_left_linkBlock {
    margin-left: 3%;
    margin-top: 25px;
    margin-bottom: 10px;
    width: 90%;
    height: 1px;
    background-color: #efefef;
  }
  .NosearchCenter_right {
    width: 30%;
    min-width: 350px;
    height: 380px;
  }
  .NosearchCenter_right_Center_title {
    width: 100%;
    height: 20px;
    text-align: left;
    font-size: 14px;
    color: #474747;
    margin-bottom: 10px;
  }
  .NosearchCenter_right_Center{
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .NosearchCenter_right_item {
    margin-bottom: 20px;
    width: 22%;
    height: 150px;
  }
  .NosearchCenter_right_item_bookCover{
      width: 90%;
      height: 100px;
    }
  .NosearchCenter_right_item_bookCover img {
    width: 100%;
    height: 100%;
  }
  .NosearchCenter_right_item_bookName{
    width: 100%;
    height: auto;
    max-height: 32px;
    margin-top: 5px;
    margin-bottom: 5px;
    line-height: 16px;
    font-size: 12px;
    color: #791010;
    text-align: left;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
  }
  .NosearchCenter_right_item_bookStar{
    width: 100%;
    text-align: left;
    font-size: 12px;
    line-height: 12px;
    color: #5E5E5E;
  }
</style>
