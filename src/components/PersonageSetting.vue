<template>
  <!-- 人设分析-->
  <div class="Personage">
    <!-- 角色关系图谱-->
    <div class="Relation">
      <div class="Relation_title">
        <div class="plot_block"></div>
        <div class="overview_title_first">角色关系图谱</div>
        <div class="overview_title_second">通过分析文中重要角色以及相关度计算生成</div>
      </div>
      <div class="Relation_center">
        <div id="Relation_Echarts" ></div>
        <div class="Relation_center_right">
          <div class="important_plot_center_introduction">
            <div class="curveintroduction_title">角色关系图谱说明</div>
            <div class="curveintroduction_center_item1">1、通过对作品非收费章节的所有正文进行</div>
            <div class="curveintroduction_center_item">角色权重计算，取15位高权重角色进行展</div>
            <div class="curveintroduction_center_item">示；</div>
            <div class="curveintroduction_center_item1">2、人物关系通过角色于文本中的对话和行</div>
            <div class="curveintroduction_center_item">为分析生成；</div>
            <div class="curveintroduction_center_item1">3、各人物之间的亲近疏远关系会被系统进</div>
            <div class="curveintroduction_center_item">行色块分类</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 角色情绪-->
    <div class="Analysis">
      <div class="Analysis_title">
        <div class="plot_block"></div>
        <div class="overview_title_first">角色情绪（前3万字）</div>
        <div class="overview_title_second">高权重人物多情绪走势</div>
      </div>
      <div class="Analysis_echartsitem" style="width: 1000px; height: 340px" v-for="(item, index) in AnalysisArray" :key="index" :id="`Analysis${index}`"></div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      AnalysisArray: [{character: '角色一', data: [name]}]
    }
  },
  mounted () {
    this.Relationdata_FUN()
  },
  methods: {
    //  认识分析数据
    Relationdata_FUN () {
      const that = this
      Axios({
        url: 'auth/personAnalysis/person',
        method: 'POST',
        params: {
          bookId: this.$route.params.id
        }
      }).then(function (res) {
        that.Relationechats_FUN(res.data.data.person_analysis.relationship)
        that.AnalysisArray = res.data.data.person_analysis.analysis
        let analysislength = that.AnalysisArray.length
        for (let i = 0; i < analysislength; i++) {
          that.Analysisechats_FUN(res.data.data.person_analysis.analysis[i], i)
        }
      })
    },
    //    角色关系图（echarts）
    Relationechats_FUN (a) {
      let myChart = this.$echarts.init(document.getElementById('Relation_Echarts'))
      // 绘制图表
      myChart.hideLoading()
      var categories = []
      for (let i = 0; i < a.categories.length; i++) {
        categories[i] = {
          // name: a.categories[i].toString()
          name: a.categoryNames[i]
        }
      }
      a.nodes.forEach(function (node) {
        node.label = {
          normal: {
            show: true
          }
        }
      })
      myChart.setOption({
        title: {
          text: '',
          subtext: '',
          top: 'bottom',
          left: 'right'
        },
        tooltip: {},
        legend: [{
          type: 'plain',
          show: true,
          top: '5%',
          left: '80%',
          orient: 'vertical',
          align: 'right',
          data: categories.map(function (a) {
            return a.name
          })
        }],
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        backgroundColor: '#fff',
        series: [
          {
            name: '',
            type: 'graph',
            layout: 'circular',
            circular: {
              rotateLabel: true
            },
            roam: false,
            data: a.nodes,
            links: a.edges,
            categories: categories,
            label: {
              normal: {
                position: 'right',
                formatter: '{b}'
              }
            },
            lineStyle: {
              normal: {
                color: 'source',
                curveness: 0.3
              }
            }
          }
        ]
      })
    },
    //    角色情绪图（echarts）
    Analysisechats_FUN (a, i) {
      console.log(a)
      // 基于准备好的dom，初始化echarts实例
      this.$nextTick(function () {
        let myChart = this.$echarts.init(document.getElementById(`Analysis${i}`))
        let series = []
        //        let label = []
        let nameARRAY = []
        //   遍历x坐标轴
        //        for (let j = 0; j < a.data[0].data.length; j++) {
        //          label[j] = j + 1
        //        }
        for (let j = 0; j < a.data.length; j++) {
          nameARRAY[j] = a.data[j].name
        }
        for (let i = 0; i < 5; i++) {
          series[i] = {
            name: a.data[i].name,
            type: 'line',
            data: a.data[i].data,
            showSymbol: false
          }
        }
        myChart.setOption({
          title: {
            text: a.character,
            textStyle: {
              color: '#4C4C4C'
            },
            left: '2%'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: nameARRAY,
            left: '60%'
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: a.label
          },
          yAxis: {
            type: 'value'
          },
          backgroundColor: '#fff',
          series: series
        })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Relation_title{
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
  .Relation_center{
    display: flex;
    width: 1000px;
    margin-bottom: 30px;
    justify-content: space-between;
  }
  #Relation_Echarts{
    margin-top: 20px;
    margin-left: 0.5%;
    width: 42.5rem;
    height: 35rem;
    border-radius: 3px;
    box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.03);
    background-image: url("../images/personBG.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .Relation_center_right{
    margin-top: 20px;
    width: 17rem;
    height: 35rem;
    border-radius: 3px;
    margin-left: 0.5%;
    box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.03);
  }
  .Analysis_title{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .Analysis_echartsitem{
    margin-top: 20px;
    margin-bottom: 30px;
    width: 1000px;
    height: 350px;
    margin-left: 0.5%;
    border-radius: 3px;
    box-shadow: 0 1px 5px 2px rgba(0,0,0,0.03);
    padding-top: 20px;
    background-image: url("../images/plotbg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
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
</style>
