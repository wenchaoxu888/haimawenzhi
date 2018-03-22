<template>
  <!--  剧情解析-->
  <div class="plot">
    <!-- 剧情概览-->
    <div class="overview">
      <div class="overview_title">
        <div class="plot_block"></div>
        <div class="overview_title_first">剧情概览（前3万字）</div>
        <div class="overview_title_second">情节识别和划分来自剧情曲线</div>
      </div>
      <div class="overview_center">
        <div class="overview_center_item">
          <div class="overview_center_item_title">
            <div  v-if="plotdata.totalPlot" style="display: flex ;flex-direction: row; align-items: baseline;">
              <div class="overview_center_item_titleNum">{{plotdata.totalPlot}}</div>
              <div class="overview_center_item_title_smallfontsize">处</div>
            </div>
            <div v-else="">
              <div class="overview_center_item_txt">运算中</div>
            </div>
          </div>
          <div class="overview_center_item_first">
            冲突较为明显的情节片段
          </div>
          <div class="overview_center_item_second">通过剧情值的起伏和走势</div>
          <div class="overview_center_item_second">由海马智能识别</div>
        </div>
        <div class="overview_center_item">
          <div class="overview_center_item_title">
            <div class="overview_center_item_txt" v-if="plotdata.plotGradient">{{plotdata.plotGradient}}</div>
            <div class="overview_center_item_txt" v-else="">运算中</div>
          </div>
          <div class="overview_center_item_first">整个故事的行文紧凑度</div>
          <div class="overview_center_item_second">海马累计海量作品紧凑度数据</div>
          <div class="overview_center_item_second">与平均数据比较评定</div>
        </div>
        <div class="overview_center_item">
          <div class="overview_center_item_title">
            <div class="overview_center_item_txt" v-if="plotdata.leadCharacter">{{plotdata.leadCharacter}}</div>
            <div class="overview_center_item_txt" v-else="">运算中</div>
          </div>
          <div class="overview_center_item_first">故事中的核心角色</div>
          <div class="overview_center_item_second">通过分析作品前三万字</div>
          <div class="overview_center_item_second">行为比重最高的角色</div>
        </div>
      </div>
    </div>
    <!-- 剧情曲线-->
    <div class="curve">
      <div class="curve_title">
        <div class="plot_block"></div>
        <div class="overview_title_first">剧情曲线（前3万字）</div>
        <div class="overview_title_second">算法绘制故事剧情曲线</div>
      </div>
      <div class="curve_center">
        <div id="curveChart" ></div>
        <div class="curveintroduction">
          <div class="curveintroduction_title">曲线说明</div>
          <div class="curveintroduction_center_item1">1. 剧情曲线中每组波峰和波谷的组合由海</div>
          <div class="curveintroduction_center_item">马算法定义为一个剧情:</div>
          <div class="curveintroduction_center_item1">2. 剧情定义有一定概率在500字范围内出</div>
          <div class="curveintroduction_center_item">现误差；</div>
          <div class="curveintroduction_center_item1">3. 剧情中抖动剧情可定性为该大剧情中</div>
          <div class="curveintroduction_center_item">的一系列铺垫和转折；</div>
          <div class="curveintroduction_center_item1">4.高质量剧情满足高度差较大、铺垫和转</div>
          <div class="curveintroduction_center_item">折较多、剧情跨度适中等更多细节标准；</div>
        </div>
      </div>
    </div>
    <!-- 重要剧情-->
    <div class="important_plot">
      <div class="important_plot_title">
        <div class="plot_block"></div>
        <div class="overview_title_first">重要剧情（前3万字）</div>
        <div class="overview_title_second">对划分的剧情片段进行相关文本提取</div>
      </div>
      <div class="important_plot_center">
        <div class="important_plot_center_detailed" :class="{important_plot_center_detailed_class : imdetailed_itemarry === [] || imdetailed_itemarry === undefined}">
          <div class="important_plot_detailed_item" v-for="(item, itemindex) in imdetailed_itemarry" :key="itemindex">
            <div class="important_plot_detailed_title">
              <div class="important_plot_detailed_titleName">
                <div class="important_plot_detailed_icon">
                  <img src="../images/Shapeicon.png"/>
                </div>
                <div class="important_plot_detailed_Name">
                  {{item.name}}
                </div>
              </div>
              <div class="important_plot_detailed_NumWords" v-if="item.start || item.end">{{item.start}}字 ~ {{item.end}}字</div>
              <div class="important_plot_detailed_NumWords" style="color: #C3C3C3" v-else="">暂无数据</div>
            </div>
            <div class="important_plot_detailed_tags" >
              <div class="important_plot_detailed_tag_fortag" v-if="itemindex2 === itemindex">
                <div class="important_plot_detailed_tag" :class="{ important_plot_detailed_tag_isActive: btnbol === index }" v-for="(item, index) in item.tags" :key="index" @click="ImportBTn(index, itemindex)">
                  {{item.tag}}
                </div>
              </div>
              <div class="important_plot_detailed_tag_fortag" v-else="">
                <div class="important_plot_detailed_tag" :class="{ important_plot_detailed_tag_isActive:  defaultbtnbolarray[itemindex] === index }" v-for="(item, index) in item.tags" :key="index" @click="ImportBTn(index, itemindex)">
                  {{item.tag}}
                </div>
              </div>
              <div class="important_plot_detailed_tagandcontent" v-if="itemindex2 === itemindex">
                <div class="important_plot_detailed_tag_content_style">
                  <img src="../images/importanticon.png"/>
                </div>
                <div class="important_plot_detailed_tag_content" v-if="index === imIndex" v-for="(item, index) in item.tags" :key="index">{{item.content}}</div>
                <div class="important_plot_detailed_tag_content_style2">
                  <img src="../images/importanticon2.png"/>
                </div>
              </div>
              <div class="important_plot_detailed_tagandcontent" v-else="">
                <div class="important_plot_detailed_tag_content_style">
                  <img src="../images/importanticon.png"/>
                </div>
                <div class="important_plot_detailed_tag_content" v-if="index === defaultbtnbolarray[itemindex]" v-for="(item, index) in item.tags" :key="index">{{item.content}}</div>
                <div class="important_plot_detailed_tag_content_style2">
                  <img src="../images/importanticon2.png"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="important_plot_center_introduction">
          <div class="curveintroduction_title">剧情说明</div>
          <div class="curveintroduction_center_item1">1. 剧情曲线的剧情识别以及提取；
          </div>
          <div class="curveintroduction_center_item1">2. 按照500字为单位进行情节起始的定位</div>
          <div class="curveintroduction_center_item">展示；</div>
          <div class="curveintroduction_center_item1">3. 单个剧情中的核心关键词，以及该词</div>
          <div class="curveintroduction_center_item">所在的文本关键句展示；</div>
        </div>
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
      plotdata: {
        totalPlot: '--',
        plotGradient: '--',
        leadCharacter: '--'
      },
      tabPosition: 0,
      msg: 'Welcome to Your Vue.js App',
      categories: [0, 2],
      imarry: [],
      imdetailed_itemarry: [ {
        name: '剧情一',
        start: 0,
        end: 10000,
        tags: [
          {
            tag: '关键词一',
            content: '关键词一相关文本正在运算中'
          },
          {
            tag: '关键词二',
            content: '关键词二相关文本正在运算中'
          },
          {
            tag: '关键词三',
            content: '关键词三相关文本正在运算中'
          },
          {
            tag: '关键词四',
            content: '关键词四相关文本正在运算中'
          },
          {
            tag: '关键词五',
            content: '关键词五相关文本正在运算中'
          },
          {
            tag: '关键词六',
            content: '关键词六相关文本正在运算中'
          }
        ]
      }, {
        name: '剧情二',
        start: 10000,
        end: 20000,
        tags: [
          {
            tag: '关键词一',
            content: '关键词一相关文本正在运算中'
          },
          {
            tag: '关键词二',
            content: '关键词二相关文本正在运算中'
          },
          {
            tag: '关键词三',
            content: '关键词三相关文本正在运算中'
          },
          {
            tag: '关键词四',
            content: '关键词四相关文本正在运算中'
          },
          {
            tag: '关键词五',
            content: '关键词五相关文本正在运算中'
          },
          {
            tag: '关键词六',
            content: '关键词六相关文本正在运算中'
          }
        ]
      }, {
        name: '剧情三',
        start: 20000,
        end: 30000,
        tags: [
          {
            tag: '关键词一',
            content: '关键词一相关文本正在运算中'
          },
          {
            tag: '关键词二',
            content: '关键词二相关文本正在运算中'
          },
          {
            tag: '关键词三',
            content: '关键词三相关文本正在运算中'
          },
          {
            tag: '关键词四',
            content: '关键词四相关文本正在运算中'
          },
          {
            tag: '关键词五',
            content: '关键词五相关文本正在运算中'
          },
          {
            tag: '关键词六',
            content: '关键词六相关文本正在运算中'
          }
        ]
      }],
      imIndex: '0',
      itemindex2: '0',
      btnbol: '',
      defaultbtnbolarray: [],
      isimportdata: false
    }
  },
  created () {
    let arrlength = this.imdetailed_itemarry.length
    for (let i = 0; i < arrlength; i++) {
      this.defaultbtnbolarray.push(0)
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    //  剧情分析数据
    drawLine () {
      const that = this
      Axios({
        url: '/auth/plotAnalysis/plot',
        method: 'post',
        params: {
          bookId: this.$route.params.id
        }
      }).then(function (res) {
        that.plotdata = res.data.data
        that.plotfun(res.data.data.data.data, res.data.data.data.label)
        that.imdetailed_itemarry = res.data.data.importantPlots
        let arrlength = that.imdetailed_itemarry.length
        for (let i = 0; i < arrlength; i++) {
          that.defaultbtnbolarray.push(0)
        }
      })
    },
    // 剧情曲线的echarts
    plotfun (a, b) {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('curveChart'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: '横坐标为作品字数，纵坐标为剧情值',
          textStyle: {
            coloe: '#767B8E',
            fontSize: '13',
            fontWeight: 300
          },
          top: 18,
          left: 12
        },
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          show: true,
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
          borderColor: '#EFEFEF'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: b,
          axisLine: {
            show: false,
            lineStyle: {
              color: '#767B8E'
            }
          },
          axisTick: {
            show: false,
            lineStyle: {
              color: '#767B8E'
            }
          },
          axisLabel: {
            interval: 9
          }
        },
        yAxis: {
          type: 'value',
          nameGap: 100,
          axisLine: {
            show: false,
            lineStyle: {
              color: '#767B8E'
            }
          },
          axisTick: {
            show: false,
            lineStyle: {
              color: '#fff'
            }
          },
          splitLine: {
            lineStyle: {
              // 使用深浅的间隔色
              color: ['#efefef']
            }
          }
        },
        series: [
          {
            name: '剧情曲线',
            type: 'line',
            stack: '总量',
            data: a,
            showSymbol: false,
            lineStyle: {
              color: '#0F99F8'
            },
            smooth: false
          }
        ],
        color: '#5ABDF5'
      })
    },
    // 点击重要剧情角色执行的函数
    ImportBTn (index, itemindex) {
      this.btnbol = index
      this.imIndex = index
      this.itemindex2 = itemindex
      this.defaultbtnbolarray.splice(itemindex, 1, index)
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
    color: #292929;
  }
  .overview_title_second{
    font-size: 0.5rem;
    color: #767B8E;
  }
  .overview_center{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    }
  .overview_center_item{
    width: 30%;
    height: 185px;
    margin-left: 0.5%;
    margin-right: 0.5%;
    border-radius: 3px;
    box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.03);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .overview_center_item_title{
    height: 90px;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    font-size: 3.5rem;
    line-height: 120px;
    font-weight: bolder;
    color: #5ABDF5;
  }
  .overview_center_item_titleNum{
    height: 90px;
    font-weight: 500;
    font-size: 2.5rem
  }
  .overview_center_item_txt{
    font-size: 2.2rem !important;
  }
  .overview_center_item_title_smallfontsize{
    font-size: 1.5rem !important;
    line-height: 1.5rem;
  }
  .overview_center_item_first{
    line-height: 40px;
    font-size: 1rem;
    font-weight: 600;
    color: #4C4C4C;
  }
  .overview_center_item_second{
    font-size: 0.8rem;
    line-height: 1rem;
    color: #B6C3CD;
  }
  .curve{
    margin-top: 30px;
  }
  .curve_title{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .curve_center{
    margin-top: 20px;
    height: 330px;
    width: 99%;
    padding-left: 0.5%;
    padding-right: 0.5%;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
  }
  #curveChart{
    width: 72%;
    height: 330px;
    border-radius: 3px;
    box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.03);
    background-image: url("../images/plotbg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .curveintroduction{
    width: 25%;
    height: 330px;
    border-radius: 3px;
    box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.03);
    display: flex;
    flex-direction: column;
  }
  .curveintroduction_title{
    background-color: #FAFCFF;
    line-height: 45px;
    height: 45px;
    text-align: left;
    font-size: 0.95rem;
    padding-left: 4%;
    color: #292929;
  }
  .curveintroduction_center_item{
    margin-left: 4%;
    text-align: left;
    font-size: 0.5rem;
    color: #767B8E;
  }
  .curveintroduction_center_item1{
    margin-left: 4%;
    text-align: left;
    margin-top: 15px;
    font-size: 0.5rem;
    color: #767B8E;
  }
  .important_plot{
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .important_plot_title{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .important_plot_center{
    margin-top: 20px;
    width: 99%;
    padding-left: 0.5%;
    padding-right: 0.5%;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
  }
  .important_plot_center_detailed{
    width: 72%;
    border-radius: 3px;
    min-height: 450px;
    box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.03);
  }
  .important_plot_center_detailed_class{
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url("../images/important_plotbg.png");
  }
  .important_plot_center_introduction{
    width: 25%;
    height: 330px;
    border-radius: 3px;
    box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.03);
    display: flex;
    flex-direction: column;
  }
  .important_plot_detailed_item{
    min-height: 180px;
    margin-top: 30px;
    width: 92%;
    margin-left: 4%;
    margin-bottom: 40px;
  }
  .important_plot_detailed_title{
    display: flex;
    justify-content: space-between;
  }
  .important_plot_detailed_titleName{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .important_plot_detailed_icon{
    width: 26px;
    height: 15px;
  }
  .important_plot_detailed_icon img{
    width: 100%;
    height: 100%;
  }
  .important_plot_detailed_Name{
    margin-left: 10px;
    font-size: 1rem;
  }
  .important_plot_detailed_NumWords{
    font-size: 1rem;
    font-weight: 700;
    color: #4C4C4C;
  }
  .important_plot_detailed_tagandcontent{
    margin-top: 25px;
  }
  .important_plot_detailed_tags{
    margin-top: 25px;
  }
  .important_plot_detailed_tag_fortag{
    display: flex;
  }
  .important_plot_detailed_tag{
    margin-left: 20px;
    padding: 5px 13px;
    border: solid 1px #fff;
    background-color: #F6F6F6;
    color: #17BCC9;
    border-radius: 50px;
    font-size: 0.5rem ;
  }
  .important_plot_detailed_tag:hover{
    background-color: #5ABDF5;
    color: #fff;
  }
  .important_plot_detailed_tag_isActive{
    background-color: #5ABDF5;
    color: #fff;
  }
  .important_plot_detailed_tag_content{
    width: 95%;
    color: #B6C3CD;
    font-size: 0.5rem;
    text-indent: 2em;
  }
  .important_plot_detailed_tag_content_style{
    width: 20px;
    height: 16px;
  }
  .important_plot_detailed_tag_content_style2{
    width: 20px;
    height: 16px;
    float: right;
  }
  .important_plot_detailed_tag_content_style2 img{
    width: 100%;
    height: 100%;
  }
  .important_plot_detailed_tag_content_style img{
    width: 100%;
    height: 100%;
  }
</style>
