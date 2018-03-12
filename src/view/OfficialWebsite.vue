<template>
  <div class="OfficialWebsite">
    <div class="official_header">
      <div class="home_header">
        <div class="home_header_logo">
        </div>
        <div class="home_center_navDIV">
          <div class="home_header_nav"><a href="http://book.haimaqingfan.com/library?category=-1&channel=-1&status=-1&word=-1&update=-1&sort=popularity">书城</a></div>
          <div class="home_header_nav"><a href='http://book.haimaqingfan.com'>关于</a></div>
        </div>
      </div>
      <div class="official_header_bookinfo">
        <div class="official_header_bookinfo_titleinfo">
          <div class="official_header_bookinfo_title">
            海马轻帆
          </div>
          <div class="official_header_bookinfo_title">
            文学智慧分析平台
          </div>
          <div class="official_header_bookinfo_nav">
            <div>提供针对小说故事内容的详细数据分析服务</div>
          </div>
        </div>
        <div class="official_header_bookinfo_bookcover">
          <div class="official_header_bookinfo_bookcover_items">
            <el-carousel :interval="4000" type="card" height="330px">
              <el-carousel-item v-for="(item, index) in listImg" :key="index">
                <div class="official_header_bookinfo_bookcover_item" @click="gohome(item.bookId)">
                  <img :src="item.url" />
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
    </div>
    <div class="official_center1">
      <div class="official_center1_title">
        文学作品价值全面分析
      </div>
      <div class="official_center1_info">
        <div class="official_center1_info_left">
          <div class="official_center1_info_left_item" :class="{official_center1_info_left_itemisActive : isActive1}" @click="centerisActive1()">剧情节奏</div>
          <div class="official_center1_info_left_item" :class="{official_center1_info_left_itemisActive : isActive2}" @click="centerisActive2()">角色分析</div>
          <div class="official_center1_info_left_item" :class="{official_center1_info_left_itemisActive : isActive3}" @click="centerisActive3()">作品数据</div>
          <div class="official_center1_info_left_item" :class="{official_center1_info_left_itemisActive : isActive4}" @click="centerisActive4()">舆论分析</div>
        </div>
        <div class="official_center1_info_right">
          <div v-if="isActive1" class="official_center1_info_right_item">
            <div class="official_center1_info_right_title">
              海马专利算法，打破文学作品数据化壁垒
            </div>
            <div class="official_center1_info_right_center">
              <div class="official_center1_info_right_centeritem">
                <div class="official_center1_info_right_centeritemIMG">
                  <img src="../images/icon1.png"/>
                </div>
                <div class="official_center1_info_right_centeritem_info">
                  <div class="official_center1_info_right_centeritem_infotitle">节奏曲线</div>
                  <div class="official_center1_info_right_centeritem_infoconter">绘制故事节奏推进曲线，观察该曲线</div>
                  <div class="official_center1_info_right_centeritem_infoconter">可轻易明确故事发展速度</div>
                </div>
              </div>
              <div class="official_center1_info_right_centeritem">
                <div class="official_center1_info_right_centeritemIMG">
                  <img src="../images/icon2.png"/>
                </div>
                <div class="official_center1_info_right_centeritem_info">
                  <div class="official_center1_info_right_centeritem_infotitle">剧情量化</div>
                  <div class="official_center1_info_right_centeritem_infoconter">切割节奏曲线，展示固定篇幅内的剧</div>
                  <div class="official_center1_info_right_centeritem_infoconter">情数量</div>
                </div>
              </div>
              <div class="official_center1_info_right_centeritem">
                <div class="official_center1_info_right_centeritemIMG">
                  <img src="../images/icon3.png"/>
                </div>
                <div class="official_center1_info_right_centeritem_info">
                  <div class="official_center1_info_right_centeritem_infotitle">情节定位</div>
                  <div class="official_center1_info_right_centeritem_infoconter">定位每个剧情的起始和结束点，效率</div>
                  <div class="official_center1_info_right_centeritem_infoconter">回顾所需情节点</div>
                </div>
              </div>
              <div class="official_center1_info_right_centeritem">
                <div class="official_center1_info_right_centeritemIMG">
                  <img src="../images/icon4.png"/>
                </div>
                <div class="official_center1_info_right_centeritem_info">
                  <div class="official_center1_info_right_centeritem_infotitle">情节关键词句</div>
                  <div class="official_center1_info_right_centeritem_infoconter">提取指定情节内的关键词和关键语句</div>
                  <div class="official_center1_info_right_centeritem_infoconter">描写，轻松读懂情节内容</div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="isActive2" class="official_center1_info_right_item">
            <div class="official_center1_info_right_title">
              海马专利算法，打破文学作品数据化壁垒
            </div>
            <div class="official_center1_info_right_center">
              <div class="official_center1_info_right_centeritem">
                <div class="official_center1_info_right_centeritemIMG">
                  <img src="../images/icon5.png"/>
                </div>
                <div class="official_center1_info_right_centeritem_info">
                  <div class="official_center1_info_right_centeritem_infotitle">角色识别</div>
                  <div class="official_center1_info_right_centeritem_infoconter">对作品中角色进行算法提取，快速了</div>
                  <div class="official_center1_info_right_centeritem_infoconter">解人物构成</div>
                </div>
              </div>
              <div class="official_center1_info_right_centeritem">
                <div class="official_center1_info_right_centeritemIMG">
                  <img src="../images/icon6.png"/>
                </div>
                <div class="official_center1_info_right_centeritem_info">
                  <div class="official_center1_info_right_centeritem_infotitle">人物关系网络</div>
                  <div class="official_center1_info_right_centeritem_infoconter">多人物的复杂关系网直观展现；角色</div>
                  <div class="official_center1_info_right_centeritem_infoconter">聚类，角色亲密度等可靠数据</div>
                </div>
              </div>
              <div class="official_center1_info_right_centeritem">
                <div class="official_center1_info_right_centeritemIMG">
                  <img src="../images/icon7.png"/>
                </div>
                <div class="official_center1_info_right_centeritem_info">
                  <div class="official_center1_info_right_centeritem_infotitle">角色情绪走势</div>
                  <div class="official_center1_info_right_centeritem_infoconter">核心角色的心理情绪变化趋势监控，</div>
                  <div class="official_center1_info_right_centeritem_infoconter">方便知悉角色的故事发展情况</div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="isActive3" class="official_center1_info_right_item">
            <div class="official_center1_info_right_title">
              海马专利算法，打破文学作品数据化壁垒
            </div>
            <div class="official_center1_info_right_center">
              <div class="official_center1_info_right_centeritem">
                <div class="official_center1_info_right_centeritemIMG">
                  <img src="../images/icon8.png"/>
                </div>
                <div class="official_center1_info_right_centeritem_info">
                  <div class="official_center1_info_right_centeritem_infotitle">全网热度</div>
                  <div class="official_center1_info_right_centeritem_infoconter">记录该作品在全网每日的热度，可有</div>
                  <div class="official_center1_info_right_centeritem_infoconter">效反应作品的发展轨迹</div>
                </div>
              </div>
              <div class="official_center1_info_right_centeritem">
                <div class="official_center1_info_right_centeritemIMG">
                  <img src="../images/icon9.png"/>
                </div>
                <div class="official_center1_info_right_centeritem_info">
                  <div class="official_center1_info_right_centeritem_infotitle">平台数据</div>
                  <div class="official_center1_info_right_centeritem_infoconter">监控作品早期于连载平台的相关数</div>
                  <div class="official_center1_info_right_centeritem_infoconter">据，回溯其粉丝增长情况</div>
                </div>
              </div>
              <div class="official_center1_info_right_centeritem">
                <div class="official_center1_info_right_centeritemIMG">
                  <img src="../images/icon10.png"/>
                </div>
                <div class="official_center1_info_right_centeritem_info">
                  <div class="official_center1_info_right_centeritem_infotitle">粉丝活跃情况</div>
                  <div class="official_center1_info_right_centeritem_infoconter">监控该作品读者自发为其生产的UGC</div>
                  <div class="official_center1_info_right_centeritem_infoconter">内容，以判断该作品的粉丝凝聚力和</div>
                  <div class="official_center1_info_right_centeritem_infoconter">向心力</div>
                </div>
              </div>
              <div class="official_center1_info_right_centeritem">
                <div class="official_center1_info_right_centeritemIMG">
                  <img src="../images/icon11.png"/>
                </div>
                <div class="official_center1_info_right_centeritem_info">
                  <div class="official_center1_info_right_centeritem_infotitle">读者画像</div>
                  <div class="official_center1_info_right_centeritem_infoconter">分析读者的相关信息，了解作品真实</div>
                  <div class="official_center1_info_right_centeritem_infoconter">市场状况</div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="isActive4" class="official_center1_info_right_item" >
            <div class="official_center1_info_right_title">
              海马专利算法，打破文学作品数据化壁垒
            </div>
            <div class="official_center1_info_right_center">
              <div class="official_center1_info_right_centeritem">
                <div class="official_center1_info_right_centeritemIMG">
                  <img src="../images/icon12.png"/>
                </div>
                <div class="official_center1_info_right_centeritem_info">
                  <div class="official_center1_info_right_centeritem_infotitle">舆论得分</div>
                  <div class="official_center1_info_right_centeritem_infoconter">舆论的声音不会撒谎，对读者留在互</div>
                  <div class="official_center1_info_right_centeritem_infoconter">联网的声音进行信息提取，生成真实</div>
                  <div class="official_center1_info_right_centeritem_infoconter">可靠的舆论评价</div>
                </div>
              </div>
              <div class="official_center1_info_right_centeritem">
                <div class="official_center1_info_right_centeritemIMG">
                  <img src="../images/icon13.png"/>
                </div>
                <div class="official_center1_info_right_centeritem_info">
                  <div class="official_center1_info_right_centeritem_infotitle">关键热区</div>
                  <div class="official_center1_info_right_centeritem_infoconter">分析读者在舆论中提及的高频观点，</div>
                  <div class="official_center1_info_right_centeritem_infoconter">对IP开发可起到试错性支持</div>
                </div>
              </div>
              <div class="official_center1_info_right_centeritem">
                <div class="official_center1_info_right_centeritemIMG">
                  <img src="../images/icon14.png"/>
                </div>
                <div class="official_center1_info_right_centeritem_info">
                  <div class="official_center1_info_right_centeritem_infotitle">舆论分类</div>
                  <div class="official_center1_info_right_centeritem_infoconter">清洗优质评论，摘取关于剧情讨论的</div>
                  <div class="official_center1_info_right_centeritem_infoconter">相关舆论，并按照角色讨论，剧情讨</div>
                  <div class="official_center1_info_right_centeritem_infoconter">论等维度输出高质量评论</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="official_center2">
      <div class="official_center2bg">
        <div class="official_center2_first">
          <div class="official_center2_macpc">
            <img src="../images/macpc.png"/>
          </div>
          <div class="official_center2_text">
            <div class="official_center2_textNum">1,000,000</div>
            <div class="official_center2_textNumAdd">+</div>
            <div class="official_center2_textNumtxt">作品分析</div>
          </div>
        </div>
      </div>
    </div>
    <div class="official_center3">
      <div class="official_center3_title">核心优势</div>
      <div class="official_center3_pic">
        <div class="official_center3_picImg">
          <img src="../images/coreicon_05.png"/>
          <div>深入理解</div>
        </div>
        <div class="official_center3_picImg">
          <img src="../images/coreicon_07.png"/>
          <div>良好口碑</div>
        </div>
        <div class="official_center3_picImg">
          <img src="../images/coreicon_09.png"/>
          <div>领先技术</div>
        </div>
      </div>
      <div class="official_center3_text">
        <div class="official_center3_text_comma">
          <img src="../images/comma1.png"/>
        </div>
        <div class="official_center3_text_info">
          <div>海马利用对行业的深入理解，结合全新的算法提出利用标准化的数据模型对叙事性文学作品进行客观理性的解构</div>
        </div>
        <div class="official_center3_text_comma1">
          <img src="../images/comma2.png"/>
        </div>
      </div>
    </div>
    <div class="official_center4">
      <div class="official_center4Txt">文娱IP的数据化分析价值</div>
      <div class="official_center4Img">
        <div class="official_center4ImgDiv">
          <img src="../images/yk.png"/>
        </div>
        <div class="official_center4ImgDiv">
          <img src="../images/qq.png"/>
        </div>
        <div class="official_center4ImgDiv">
          <img src="../images/nf.png"/>
        </div>
        <div class="official_center4ImgDiv">
          <img src="../images/mg.png"/>
        </div>
        <div class="official_center4ImgDiv">
          <img src="../images/kd.png"/>
        </div>
      </div>
    </div>
    <div class="official_center5">
      <div class="official_center5_title">NETFLIX</div>
      <div class="official_center5_block"></div>
      <div class="official_center5_Subtitle">美国最大的在线影像租赁公司</div>
      <div class="official_center5_text">
        <div class="official_center5_text_comma">
          <img src="../images/comma1.png"/>
        </div>
        <div class="official_center5_text_info">
          <div style="text-indent: 2em">Netflix上的电影和电视节目被贴上了数以百计的标签，它们都是受委托对演员、情节、基调、类型，以及其他</div>
          <div>很多很多方面进行描述的观众加上去的。现在，Netflix开始制作原创内容，因为它能够先于观众知道他们想要什么</div>
        </div>
        <div class="official_center5_text_comma1">
          <img src="../images/comma2.png"/>
        </div>
      </div>
    </div>
    <div class="official_center6">
        <div class="official_center6_btn" @click="toTop()">立刻体验</div>
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
export default {
  name: 'OfficialWebsite',
  data () {
    return {
      toBottom: 0,
      bookinfoCover: true,
      isActive1: true,
      isActive2: false,
      isActive3: false,
      isActive4: false,
      activeName: 'first',
      listImg: [
        {url: 'https://qidian.qpic.cn/qdbimg/349573/2019/180', bookId: '1_2019'},
        {url: 'https://qidian.qpic.cn/qdbimg/349573/86464/180', bookId: '21_86464'},
        {url: 'http://s11.static.jjwxc.net/frontcover/000/316/316358.jpg', bookId: '7_316358'}],
      msg: 'Welcome to Your Vue.js App',
      input5: '',
      select: '',
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
    }
  },
  mounted () {
    document.querySelector('.OfficialWebsite').style.bottom = this.toBottom
  },
  methods: {
    gohome (a) {
      this.$router.push({name: 'home', params: {id: a}})
    },
    centerisActive1 () {
      this.isActive1 = true
      this.isActive2 = false
      this.isActive3 = false
      this.isActive4 = false
    },
    centerisActive2 () {
      this.isActive1 = false
      this.isActive2 = true
      this.isActive3 = false
      this.isActive4 = false
    },
    centerisActive3 () {
      this.isActive1 = false
      this.isActive2 = false
      this.isActive3 = true
      this.isActive4 = false
    },
    centerisActive4 () {
      this.isActive1 = false
      this.isActive2 = false
      this.isActive3 = false
      this.isActive4 = true
    },
    toTop () {
      document.documentElement.scrollTop = document.body.scrollTop = 0
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
  .OfficialWebsite{
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 1024px;
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
  }
  .home_header_nav{
    width: 50%;
    height: 60px;
    margin-left: 2%;
    line-height: 20px;
    margin-top: 18px;
    font-size: 1rem;
    color: #fff;
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
  .official_header_nav_logo img {
    width: 100%;
    height: 100%;
  }
  .official_header_bookinfo{
    margin-top: 140px;
    text-align: center;
    width: 60%;
    max-width: 1280px;
    min-width: 900px;
    height: 300px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .official_header_bookinfo_titleinfo{

    width: 50%;
  }
  .official_header_bookinfo_title{
    text-align: left;
    width: 100%;
    height: 50px;
    font-size: 2.8rem;
    line-height: 2.3rem;
    color: #fff;
    letter-spacing: 3px;
  }
  .official_header_bookinfo_nav{
    width: 100%;
    text-align: left;
    font-size: 1.1rem;
    color: #fff;
  }
  .official_header_bookinfo_bookcover{
    width: 50%;
    display: flex;
    min-width: 500px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .official_header_bookinfo_bookcover .block{
    width: 80%;
  }
  .official_header_bookinfo_bookcover_items {
    margin-left: 20%;
    width: 80%;
  }
  .official_header_bookinfo_bookcover_item {
    width: 100%;
    height: 330px;
  }
  .official_header_bookinfo_bookcover_item img{
    width: 100%;
    height: 100%;
  }
  /**************************/
  .official_center1{
    margin-top: 50px;
    text-align: center;
    width: 60%;
    max-width: 1280px;
    min-width: 900px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .official_center1_title{
    font-size: 2.2rem;
    letter-spacing: 0.1rem;
    color: rgba(56, 56, 56, 0.7);
  }
  .official_center1_info{
    margin-top: 80px;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  .official_center1_info_left{
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgba(56, 56, 56, 0.6);
    font-size: 1rem;
  }
  .official_center1_info_left_item{
    border-radius: 2px;
    width: 80%;
    line-height: 3.2rem;
    border-bottom: solid 1px rgba(56, 56, 56, 0.2);
  }
  .official_center1_info_left_item:hover{
    background-color: #369ED9;
    color: white;
  }
  .official_center1_info_left_itemisActive{
    background-color: rgba(54, 158, 217, 1);
    color: white;
  }
  .official_center1_info_right{
    width: 70%;
    text-align: left;
  }
  .official_center1_info_right_item{
    display: flex;
    flex-direction: column;
  }
  .official_center1_info_right_title{
    text-align: center;
    font-size: 1.1rem;
    color: rgba(56, 56, 56, 0.7);
  }
  .official_center1_info_right_center{
    margin-left: 10%;
    margin-top: 35px;
    display: flex;
    flex-wrap: wrap;
  }
  .official_center1_info_right_centeritem{
    margin-top: 20px;
    margin-bottom: 30px;
    display: flex;
    width: 50%;
  }
  .official_center1_info_right_centeritemIMG{
    width: 30px;
    height: 30px;
    margin-right: 20px;
  }
  .official_center1_info_right_centeritemIMG img {
    width: 100% ;
    height: 100%;
  }
  .official_center1_info_right_centeritem_infotitle{
    font-size: 0.875rem;
    color: rgba(54, 54, 54, 0.6);
  }
  .official_center1_info_right_centeritem_infoconter{
    font-size: 12px;
    color: rgba(54, 54, 54, 0.6);
  }
  /****************/
  .official_center2{
    margin-top: 50px;
    text-align: center;
    width: 100%;
    height: 120px;
    background-image: url("../images/centerbg_02.png");
    background-size: 100% ;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .official_center2bg{
    width: 60%;
    max-width: 1280px;
    min-width: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .official_center2_first{
    display: flex;
    justify-content: space-between;
    margin-top: -50px;
    width: 90%;
  }
  .official_center2_macpc{
    width: 30%;
    min-width: 300px;
    max-width: 310px;
    height: 170px;
  }
  .official_center2_macpc img {
    width: 100%;
    height: 100%;
  }
  .official_center2_text{
    text-align: right;
    margin-top: 60px;
  }
  .official_center2_textNum{
    font-size: 2rem;
    color: white;
    letter-spacing: 1.5px;
  }
  .official_center2_textNumAdd{
    font-size: 2rem;
    font-weight: 800;
    color: rgba(255, 255, 255, 0.5);
  }
  .official_center2_text{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
   .official_center2_textNumtxt{
     margin-left: 20px;
     font-size: 1.5rem;
     color: rgba(255, 255, 255, 0.8);
   }
  /*********************************/
  .official_center3{
    margin-top: 80px;
    text-align: center;
    width: 60%;
    max-width: 1280px;
    min-width: 900px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .official_center3_title{
    margin-top: -10px;
    margin-bottom: 70px;
    font-size: 2.2rem;
    letter-spacing: 0.1rem;
    color: rgba(56, 56, 56, 0.7);
  }
  .official_center3_pic{
    width: 90%;
    height: 200px;
    display: flex;
    justify-content: space-between;
  }
  .official_center3_picImg img {
    width: 170px;
    height: 170px;
  }
  .official_center3_picImg div{
    margin-top: 50px;
    font-size: 1.5rem;
    font-weight: 800;
    color: rgba(56, 56, 56, 0.8) ;
  }
  .official_center3_text{
    margin-top: 160px;
    display: flex;
    flex-direction: row;
  }
  .official_center3_text_info{
    text-align: center;
    width: 80%;
    min-width: 700px;
    font-size: 0.87rem;
    color: rgba(31, 26, 26, 0.6);
  }
  .official_center3_text_info div{
    text-align: left;
    padding: 0 6%;
    /*background-color: red;*/
  }
  .official_center3_text_comma{
    width: 20px;
    height: 20px;
  }
  .official_center3_text_comma img{
    width: 100%;
    height: 100%;
  }
  .official_center3_text_comma1{
    margin-top: 30px;
    width: 20px;
    height: 20px;
  }
  .official_center3_text_comma1 img{
    width: 100%;
    height: 100%;
  }
  /*****************************/
  .official_center4{
    margin-top: 80px;
    text-align: center;
    width: 100%;
    min-width: 900px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url("../images/GROUP_14.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .official_center4{
    color: white;
    font-size: 2rem;
    letter-spacing: 1.5px;
  }
  .official_center4Img{
    margin-top: 90px;
    width: 60%;
    max-width: 1280px;
    min-width: 900px;
    display: flex;
    justify-content: space-between;
  }
  .official_center4Img div{
    width: 15%;
    min-width: 200px;
    height: 55px;
  }
  .official_center4ImgDiv img{
    width: 100%;
    height: 100%;
  }
  .official_center4Txt{
    margin-top: 80px;
  }
  @media screen and (max-width: 1024px) {
    .official_center4{
      height: 300px;
    }
    .official_header{
      height: 700px;
    }
  }
  /***************************/
  .official_center5{
    text-align: center;
    width: 100%;
    min-width: 900px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .official_center5_title{
    margin-top: 40px;
    font-size: 1rem;
    font-weight: 800;
    color: rgba(54, 158, 217, 0.8);
  }
  .official_center5_block{
    margin: 10px;
    width: 30px;
    height: 1px;
    background-color: rgba(56, 56, 56, 0.4);
  }
  .official_center5_Subtitle{
    margin-bottom: 40px;
    font-size: 0.85rem;
    color: rgba(56, 56, 56, 0.4);
  }
  .official_center5_text{
    display: flex;
    flex-direction: row;
  }
  .official_center5_text_info{
    width: 80%;
    min-width: 750px;
    margin-left: 30px;
    font-size: 0.87rem;
    color: rgba(31, 26, 26, 0.6);
  }
  .official_center5_text_info div{
    text-align: left;
  }
  .official_center5_text_comma{
    width: 20px;
    height: 20px;
  }
  .official_center5_text_comma img{
    width: 100%;
    height: 100%;
  }
  .official_center5_text_comma1{
    margin-top: 30px;
    width: 20px;
    height: 20px;
  }
  .official_center5_text_comma1 img{
    width: 100%;
    height: 100%;
  }
  .official_center6{
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .official_center6_btn{
    cursor:pointer;
    margin-bottom: 20px;
    width: 20%;
    min-width: 100px;
    border-radius: 4px;
    background-color: rgba(54, 158, 217, 0.8);
    height: 40px;
    color: white;
    line-height: 40px;
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
