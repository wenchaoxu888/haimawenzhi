<template>
  <!-- 数据表现-->
  <div class="PublicOpinion">
    <!-- 舆论概览-->
    <div class="PublicOverview">
      <div class="overview_title">
        <div class="plot_block"></div>
        <div class="overview_title_first">舆论情绪</div>
        <div class="overview_title_second">大众对该作品情绪分布</div>
      </div>
      <div class="PublicOverview_data">
        <div class="PublicOverview_center">
          <!-- 得分-->
          <div class="PublicOverview_ranking">
            <div class="PublicOverview_rankingNum">
              <div class="PublicOverview_rankingNumber" v-if="PublicData.socre">{{PublicData.socre}}</div>
              <div class="PublicOverview_rankingNumber" v-else="">--</div>
              <div class="PublicOverview_rankingsmallText">分</div>
            </div>
            <div class="PublicOverview_rankingStar">
              <div class="PublicOverview_rankingStarComponent">
                <star :size="48" :score="PublicData.socre * 1"></star>
              </div>
              <div class="PublicOverview_rankingStarCommet" v-if="PublicData.num">{{PublicData.num}}人评论</div>
              <div class="PublicOverview_rankingStarCommet" v-else="">--人评论</div>
            </div>
          </div>
          <div class="PublicOverview_emotion">
            <div class="PublicOverview_emotion_item">
              <div class="PublicOverview_emotion_itemtitle">愤怒</div>
              <div class="PublicOverview_emotion_itemtitleprogress">
                <el-progress :percentage='Panger' :show-text="false"></el-progress>
              </div>
            </div>
            <div class="PublicOverview_emotion_item">
              <div class="PublicOverview_emotion_itemtitle">期待</div>
              <div class="PublicOverview_emotion_itemtitleprogress">
                <el-progress :percentage='Pexpect' :show-text="false"></el-progress>
              </div>
            </div>
            <div class="PublicOverview_emotion_item">
              <div class="PublicOverview_emotion_itemtitle">喜悦</div>
              <div class="PublicOverview_emotion_itemtitleprogress">
                <el-progress :percentage='Pjoy' :show-text="false"></el-progress>
              </div>
            </div>
            <div class="PublicOverview_emotion_item">
              <div class="PublicOverview_emotion_itemtitle">悲伤</div>
              <div class="PublicOverview_emotion_itemtitleprogress">
                <el-progress :percentage='Psad' :show-text="false"></el-progress>
              </div>
            </div>
            <div class="PublicOverview_emotion_item">
              <div class="PublicOverview_emotion_itemtitle">惊讶</div>
              <div class="PublicOverview_emotion_itemtitleprogress">
                <el-progress :percentage='Psurprise' :show-text="false"></el-progress>
              </div>
            </div>
          </div>
        </div>
        <div class="PublicOverview_introduce">
          <div class="PublicOverview_introduce_title">
            评分说明
          </div>
          <div class="PublicOverview_introduce_center">
            <div class="PublicOverview_introduce_item1">
              1. 提取于该作品的网络舆论，计算大众对该作品情绪分布；
            </div>
            <div class="PublicOverview_introduce_item1">2. 根据海量的评论以及评论对象情绪分布，生成对该作品的口碑评分</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 角色讨论-->
    <div class="RoleDiscussion">
      <div class="overview_title">
        <div class="plot_block"></div>
        <div class="overview_title_first">角色讨论</div>
        <div class="overview_title_second">关于核心角色在舆论中的高质量评论内容</div>
      </div>
      <div class="RoleDiscussion_center" >
        <el-tabs v-if="discussbol" v-model="activeName" @tab-click="handleClick">
          <el-tab-pane v-for="(item, key) in Parray" :key="key" :label="item.character" :name="`${key}`">
            <div class="RoleDiscussion_center_items">
              <div v-for="(itemsmall, keys) in item.content" :key="keys" class="RoleDiscussion_center_item">
                <div v-if="keys < 4">
                  <div class="RoleDiscussion_center_item_imgAndCenter">
                    <div class="RoleDiscussion_center_item_img">
                      <img src="http://img.lkong.cn/avatar/000/79/40/43_avatar_small.jpg" onerror="this.src='http://img.lkong.cn/avatar/noavatar_small.png';this.onerror=null;">
                    </div>
                    <div class="RoleDiscussion_center_item_center">
                      <div class="RoleDiscussion_center_item_center_title">
                        {{itemsmall.title}}
                      </div>
                      <div class="RoleDiscussion_center_item_center_authors">
                        <div class="RoleDiscussion_center_item_center_name">{{itemsmall.nickname}}</div>
                        <div class="RoleDiscussion_center_item_center_authorblockstyle"></div>
                        <div class="RoleDiscussion_center_item_center_name_platform">
                          {{itemsmall.platform}}
                        </div>
                      </div>

                    </div>
                  </div>
                  <div class="RoleDiscussion_center_information">
                    {{itemsmall.content}}
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
        <div v-else="">
          <div class="RoleDiscussion_center_noitem">
            <div class="RoleDiscussion_center_noitem_title"></div>
            <div class="RoleDiscussion_center_noitem_center">
              <div class="RoleDiscussion_center_noitem_center_title">
              </div>
              <div class="RoleDiscussion_center_noitem_center_authors">
                <div class="RoleDiscussion_center_noitem_center_name"></div>
                <div class="RoleDiscussion_center_noitem_center_authorblockstyle"></div>
                <div class="RoleDiscussion_center_noitem_center_name_platform">
                </div>
              </div>
              <div class="RoleDiscussion_center_noinformation"></div>
              <div class="RoleDiscussion_center_noinformation1"></div>
            </div>
          </div>
          <div class="RoleDiscussion_center_noitem">
            <div class="RoleDiscussion_center_noitem_title"></div>
            <div class="RoleDiscussion_center_noitem_center">
              <div class="RoleDiscussion_center_noitem_center_title">
              </div>
              <div class="RoleDiscussion_center_noitem_center_authors">
                <div class="RoleDiscussion_center_noitem_center_name"></div>
                <div class="RoleDiscussion_center_noitem_center_authorblockstyle"></div>
                <div class="RoleDiscussion_center_noitem_center_name_platform">
                </div>
              </div>
              <div class="RoleDiscussion_center_noinformation"></div>
              <div class="RoleDiscussion_center_noinformation1"></div>
            </div>
          </div>
          <div class="RoleDiscussion_center_noitem">
            <div class="RoleDiscussion_center_noitem_title"></div>
            <div class="RoleDiscussion_center_noitem_center">
              <div class="RoleDiscussion_center_noitem_center_title">
              </div>
              <div class="RoleDiscussion_center_noitem_center_authors">
                <div class="RoleDiscussion_center_noitem_center_name"></div>
                <div class="RoleDiscussion_center_noitem_center_authorblockstyle"></div>
                <div class="RoleDiscussion_center_noitem_center_name_platform">
                </div>
              </div>
              <div class="RoleDiscussion_center_noinformation"></div>
              <div class="RoleDiscussion_center_noinformation1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 口碑词云-->
    <div class="WordCloud">
      <div class="overview_title">
        <div class="plot_block"></div>
        <div class="overview_title_first">相关热区</div>
        <div class="overview_title_second">该作品的粉丝讨论热点分析</div>
      </div>
      <div class="WordCloud_RelevantAndEcharts">
        <div class="WordCloudRelevant">
          <div id="WordCloudRelevantEcharts"></div>
        </div>
        <div id="WordCloudEcharts"></div>
      </div>
    </div>
    <!-- 高质量评论-->
    <div class="QualityReviews">
      <div class="overview_title">
        <div class="plot_block"></div>
        <div class="overview_title_first">高质量评论</div>
        <div class="overview_title_second">关于作品的优质话题和精品评论</div>
      </div>
      <div class="RoleDiscussion_center">
        <div class="RoleDiscussion_center_items" v-if="discussbol">
          <div v-for="(item, key) in quality" :key="key" class="RoleDiscussion_center_item">
            <div v-if="key < 5">
              <div class="RoleDiscussion_center_item_imgAndCenter">
                <div class="RoleDiscussion_center_item_img">
                  <img src="http://img.lkong.cn/avatar/000/79/40/43_avatar_small.jpg" onerror="this.src='http://img.lkong.cn/avatar/noavatar_small.png';this.onerror=null;">
                </div>
                <div class="RoleDiscussion_center_item_center">
                  <div class="RoleDiscussion_center_item_center_title">
                    {{item.title}}
                  </div>
                  <div class="RoleDiscussion_center_item_center_authors">
                    <div class="RoleDiscussion_center_item_center_name">{{item.nickname}}</div>
                    <div class="RoleDiscussion_center_item_center_authorblockstyle"></div>
                    <div class="RoleDiscussion_center_item_center_name_platform">
                      {{item.platform}}
                    </div>
                  </div>

                </div>
              </div>
              <div class="RoleDiscussion_center_information">
                {{item.content}}
              </div>
            </div>
          </div>
        </div>
        <div v-else="">
          <div class="RoleDiscussion_center_noitem">
            <div class="RoleDiscussion_center_noitem_title"></div>
            <div class="RoleDiscussion_center_noitem_center">
              <div class="RoleDiscussion_center_noitem_center_title">
              </div>
              <div class="RoleDiscussion_center_noitem_center_authors">
                <div class="RoleDiscussion_center_noitem_center_name"></div>
                <div class="RoleDiscussion_center_noitem_center_authorblockstyle"></div>
                <div class="RoleDiscussion_center_noitem_center_name_platform">
                </div>
              </div>
              <div class="RoleDiscussion_center_noinformation"></div>
              <div class="RoleDiscussion_center_noinformation1"></div>
            </div>
          </div>
          <div class="RoleDiscussion_center_noitem">
            <div class="RoleDiscussion_center_noitem_title"></div>
            <div class="RoleDiscussion_center_noitem_center">
              <div class="RoleDiscussion_center_noitem_center_title">
              </div>
              <div class="RoleDiscussion_center_noitem_center_authors">
                <div class="RoleDiscussion_center_noitem_center_name"></div>
                <div class="RoleDiscussion_center_noitem_center_authorblockstyle"></div>
                <div class="RoleDiscussion_center_noitem_center_name_platform">
                </div>
              </div>
              <div class="RoleDiscussion_center_noinformation"></div>
              <div class="RoleDiscussion_center_noinformation1"></div>
            </div>
          </div>
          <div class="RoleDiscussion_center_noitem">
            <div class="RoleDiscussion_center_noitem_title"></div>
            <div class="RoleDiscussion_center_noitem_center">
              <div class="RoleDiscussion_center_noitem_center_title">
              </div>
              <div class="RoleDiscussion_center_noitem_center_authors">
                <div class="RoleDiscussion_center_noitem_center_name"></div>
                <div class="RoleDiscussion_center_noitem_center_authorblockstyle"></div>
                <div class="RoleDiscussion_center_noitem_center_name_platform">
                </div>
              </div>
              <div class="RoleDiscussion_center_noinformation"></div>
              <div class="RoleDiscussion_center_noinformation1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from 'axios'
import Star from '../components/star/star.vue'
require('echarts-wordcloud')
export default {
  components: {
    Star
  },
  data () {
    return {
      discussbol: false,
      activeName: '0',
      AnalysisArray: [],
      adata: false,
      RoleDiscussion_center: '0',
      PublicData: {},
      Panger: 0,
      Pexpect: 0,
      Pjoy: 0,
      Psad: 0,
      Psurprise: 0,
      Parray: [{}, {}, {}, {}, {}],
      quality: [],
      relateWords: []
    }
  },
  created () {
    this.PcommentA()
    this.PcommentB()
  },
  mounted () {
    this.PublicData_FUN()
  },
  methods: {
    // 获取词云数据
    PublicData_FUN () {
      const that = this
      Axios({
        url: '/auth/publicOpinion/opinion',
        method: 'post',
        params: {
          bookId: this.$route.params.id
        }
      }).then(function (res) {
        that.PublicData = res.data.data
        that.relateWords = res.data.data.relateWords
        that.RelevantEcharts_FUN()
        that.Panger = parseInt(res.data.data.publicOpinionOrverView.anger)
        that.Pexpect = parseInt(res.data.data.publicOpinionOrverView.expect)
        that.Pjoy = parseInt(res.data.data.publicOpinionOrverView.joy)
        that.Psad = parseInt(res.data.data.publicOpinionOrverView.sorrow)
        that.Psurprise = parseInt(res.data.data.publicOpinionOrverView.surprise)
        that.WordCloudEcharts_FUN(res.data.data.publicOpinionWordsCloud)
      })
    },
    // 角色讨论数据
    PcommentA () {
      const that = this
      Axios({
        url: '/auth/publicOpinion/comment',
        method: 'post',
        params: {
          bookId: this.$route.params.id,
          type: 'character'
        }
      }).then(function (res) {
        if (res.data.data.opinion.content) {
          that.discussbol = true
          that.Parray = res.data.data.opinion.content
        } else {
          that.discussbol = false
        }
      })
    },
    // 高质量评论
    PcommentB () {
      const that = this
      Axios({
        url: '/auth/publicOpinion/comment',
        method: 'post',
        params: {
          bookId: this.$route.params.id,
          type: 'quality'
        }
      }).then(function (res) {
        if (res.data.data.opinion.content) {
          that.discussbol = true
          that.quality = res.data.data.opinion.content
        } else {
          that.discussbol = false
        }
      })
    },
    // 词云echarts
    WordCloudEcharts_FUN (a) {
      this.$nextTick(function () {
        let myChart = this.$echarts.init(document.getElementById('WordCloudEcharts'))
        myChart.setOption(
          {
            title: {
              text: '口碑词云',
              textStyle: {
                fontSize: '14',
                fontWeight: 'normal',
                lineHeight: '50',
                Height: '50'
              }
            },
            tooltip: {},
            series: [{
              type: 'wordCloud',
              gridSize: 1,
              sizeRange: [12, 50],
              rotationRange: [0, 0],
              shape: 'circle',
              textStyle: {
                normal: {
                  color: function () {
                    return 'rgb(' + [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160)
                    ].join(',') + ')'
                  }
                },
                emphasis: {
                  shadowBlur: 10,
                  shadowColor: '#333'
                }
              },
              data: a
            }]
          }
        )
      })
    },
    //  相关热区echart函数
    roundDatas (num, size, starname, color) {
      var datas = []
      for (var i = 0; i < num; i++) {
        datas.push({
          name: 'circle' + i
        })
      }
      var mark = Math.floor(Math.random() * num)
      datas[mark] = {
        name: 'circle' + mark,
        symbolSize: size,
        itemStyle: {
          normal: {
            color: color
          }
        },
        label: {
          normal: {
            show: true,
            formatter: starname,
            position: 'top'

          }
        }
      }
      return datas
    },
    linkDatas (num) {
      var ldatas = []
      for (var i = 0; i < num; i++) {
        ldatas.push({
          source: 'circle' + i,
          target: 'circle' + (i + 1)
        })
      }
      ldatas.push({
        source: 'circle' + (i - 1),
        target: 'circle0'
      })
      return ldatas
    },
    starSeries (circlesize, data, link, flag) {
      var star = {
        type: 'graph',
        layout: 'circular',
        circular: {
          rotateLabel: flag
        },
        lineStyle: {
          normal: {
            color: '#efefef',
            width: 1,
            type: 'solid'
          }
        },
        symbol: 'circle',
        symbolSize: 0,
        width: circlesize,
        height: circlesize,
        data: data,
        links: link
      }
      return star
    },
    RelevantEcharts_FUN () {
      const that = this
      let seriesitem = []
      let circleSize = ['10%', '15%', '25%', '55%', '35%', '55%', '85%']
      let colors = ['#dc665d', '#f4c384', '#6bd492', '#767197', '#f3ab65', '#406694', '#5a9aa2']
      let roundData = [30, 30, 40, 50, 60, 60, 60]
      let linkData = [20, 40, 40, 60, 60, 70, 70]
      for (let i = 0; i < that.relateWords.length; i++) {
        seriesitem[i] = that.starSeries(circleSize[i], that.roundDatas(roundData[i], that.relateWords[i].power, that.relateWords[i].query, colors[i]), that.linkDatas(linkData[i]), false)
      }
      that.$nextTick(function () {
        let myChart = that.$echarts.init(document.getElementById('WordCloudRelevantEcharts'))
        myChart.setOption(
          {
            backgroundColor: '#fff',
            series: seriesitem
          }
        )
      })
    },
    handleClick () {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .overview_title{
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
    margin-right: 5px;
    color: #292929;
  }
  .overview_title_second{
    font-size: 0.5rem;
    color: #767B8E;
  }
  .RoleDiscussion_center{
    margin-top: 20px;
    margin-bottom: 30px;
    width: 95%;
    min-height: 350px;
    margin-left: 0.5%;
    border-radius: 3px;
    box-shadow: 0 1px 5px 2px rgba(0,0,0,0.03);
    padding-left: 3%;
    padding-top: 20px;
    padding-right: 0.5%;
  }
  .RoleDiscussion_center_item{
    margin-bottom: 20px;
    margin-top: 15px;
  }
  .RoleDiscussion_center_item_imgAndCenter{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .RoleDiscussion_center_item_img{
    width: 40px;
    height: 40px;
    margin-right: 10px;
    background-color: red;
    border-radius: 20px;
  }
  .RoleDiscussion_center_item_img img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .RoleDiscussion_center_item_center_title{
    color: #5E5E5E;
    font-size: 12px;
    font-weight: 800;
  }
  .RoleDiscussion_center_item_center_authors{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .RoleDiscussion_center_item_center_name, .RoleDiscussion_center_item_center_name_platform{
    font-size: 12px;
    line-height: 2rem;
    color: #9B9B9B;
  }
  .RoleDiscussion_center_item_center_authorblockstyle{
    margin: 0 5px;
    width: 25px;
    height: 1px;
    margin-top: 2px;
    background-color: #9B9B9B;
  }
  .RoleDiscussion_center_information{
    width: 90%;
    height: 60px;
    margin-left: 50px;
    font-size: 12px;
    line-height: 20px;
    color: #9B9B9B;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:3;
  }
  /***************缺省样式*/
  .RoleDiscussion_center_noitem{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 25px;
  }
  .RoleDiscussion_center_noitem_title{
    width: 40px;
    height: 40px;
    margin-right: 10px;
    background-color: #efefef;
    border-radius: 20px;
  }
  .RoleDiscussion_center_noitem_center{
    width: 100%;
  }
  .RoleDiscussion_center_noitem_center_title{
    width: 200px;
    height: 12px;
    color: #5E5E5E;
    font-size: 12px;
    font-weight: 800;
    background-color: #efefef;
    margin-bottom: 10px;
  }
  .RoleDiscussion_center_noitem_center_authors{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .RoleDiscussion_center_noitem_center_name, .RoleDiscussion_center_noitem_center_name_platform{
    width: 7%;
    height: 12px;
    font-size: 12px;
    line-height: 2rem;
    color: #9B9B9B;
    background-color: #efefef;
    margin-bottom: 10px;
  }
  .RoleDiscussion_center_noinformation{
    width: 95%;
    height: 12px;
    background-color: #efefef;
  }
  .RoleDiscussion_center_noinformation1{
    width: 75%;
    height: 12px;
    margin-top: 10px;
    background-color: #efefef;
  }
  /********************************/
  .WordCloud_RelevantAndEcharts{
    margin-top: 20px;
    margin-bottom: 30px;
    height: 330px;
    width: 99%;
    padding-left: 0.5%;
    padding-right: 0.5%;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
  }
  .WordCloudRelevant{
    width: 67%;
    height: 330px;
  }
  #WordCloudEcharts{
    width: 15rem;
    height: 330px;
    border-radius: 3px;
    box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.03);
  }
  #WordCloudRelevantEcharts{
    width: 40rem;
    height: 330px;
    border-radius: 3px;
    box-shadow: 0 1px 5px 2px rgba(0,0,0,0.03);
  }
  .PublicOverview_center{
    margin-top: 20px;
    margin-bottom: 30px;
    width: 70%;
    min-height: 300px;
    margin-left: 0.5%;
    border-radius: 3px;
    box-shadow: 0 1px 5px 2px rgba(0,0,0,0.03);
    padding-left: 3%;
    padding-right: 0.5%;
  }
  .PublicOverview_ranking{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .PublicOverview_rankingNum{
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: baseline;
  }
  .PublicOverview_rankingNumber{
    font-size: 2.75rem;
    line-height: 2.75rem;
    color: #369ED9;
  }
  .PublicOverview_rankingStar{
    margin-top: 20px;
    margin-left: 3%;
  }
  .PublicOverview_rankingStarComponent{
    margin-top: 10px;
  }
  .PublicOverview_rankingStarCommet{
    font-size: 14px;
    color: #9B9B9B;
    line-height: 30px;
  }
  .PublicOverview_rankingsmallText{
    font-size: 1.5rem;
    line-height: 1.5rem;
    color: #369ED9;
  }
  .PublicOverview_data{
    display: flex;
    justify-content: space-between;
  }
  .PublicOverview_emotion{
    margin-top: 10px;
  }
  .PublicOverview_emotion_item{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .PublicOverview_emotion_itemtitle{
    width: 15%;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    color: #5B5A5A;
  }
  .PublicOverview_emotion_itemtitleprogress{
    width: 75%;
    height: 20px;
    line-height: 40px;
  }
  .PublicOverview_introduce{
    margin-top: 20px;
    width: 22%;
    height: 300px;
    border-radius: 3px;
    box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.03);
    display: flex;
    margin-right: 1%;
    flex-direction: column;
  }
  .PublicOverview_introduce_title{
    background-color: #FAFCFF;
    line-height: 45px;
    height: 45px;
    text-align: left;
    font-size: 0.95rem;
    padding-left: 4%;
    color: #292929;
  }
  .PublicOverview_introduce_item1{
    margin-top: 15px;
    margin-left: 4%;
    text-align: left;
    font-size: 0.5rem;
    color: #767B8E;
  }
</style>
