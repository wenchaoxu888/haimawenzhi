<template>
  <!-- 数据表现-->
  <div class="representation">
    <!-- 搜索数据-->
    <div class="searchData">
      <div class="overview_title">
        <div class="plot_block"></div>
        <div class="overview_title_first">搜索数据</div>
        <div class="overview_title_second">监控各大平台的作品搜索指数</div>
      </div>
      <div class="searchDataTableAndDiv">
        <div class="searchDataTable">
          <el-table
            :data="tableData"
            stripe
            size="small"
            style="width: 100%"
            height="310px">
            <el-table-column
              prop="date"
              label="日期"
              width="150%">
              <template slot-scope="scope" >
                <span style="margin-left: 10px" >{{ scope.row.updateAt | data }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="搜索指数"
              width="350">
              <template slot-scope="scope" >
                <div class="search_index">
                  <div class="search_index_first" style=" margin-right: 10px">{{ scope.row.soIndex }}</div>
                  <div style="width: 250px"><el-progress :show-text="false" :percentage="parseInt(scope.row.soIndexScale)"></el-progress></div>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              prop="address"
              label="搜索涨幅">
              <template slot-scope="scope" >
                <div class="search_index">
                  <div style="margin-right: 10px">{{ scope.row.soIndexRatio }}%</div>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="searchDataDiv">
            <div class="overview_center_item_title">
              <div>{{heatRank}}</div>
              <div class="overview_center_item_title_smallfontsize">名</div>
            </div>
            <div class="overview_center_item_first">
              优质作品热度排名
            </div>
            <div class="overview_center_item_second">监控所有优质作品</div>
            <div class="overview_center_item_second">对全网社交网络读者行为排名</div>
        </div>
      </div>
    </div>
    <!-- 平台数据-->
    <div class="platformData">
      <div class="overview_title">
        <div class="plot_block"></div>
        <div class="overview_title_first">平台数据</div>
        <div class="overview_title_second">统计作品被浏览，被购买，被点击等日消费行为</div>
      </div>
      <div class="platformDataDiv">
        <div class="platformDatatitle">
          <!-- 总点击-->
          <div class="platformDatatitle_clickNum">
            <div class="platformDatatitle_clickNum_title">总点击</div>
            <div class="platformDatatitle_clickNum_center" v-if="TotalData.totalClick>10000">
              <div class="platformDatatitle_clickNum_centerNum">{{parseInt(TotalData.totalClick * 0.0001)}}</div>
              <div class="platformDatatitle_clickNum_centersmall">万</div>
            </div>
            <div class="platformDatatitle_clickNum_center" v-else="">
              <div class="platformDatatitle_clickNum_centerNum">{{parseInt(TotalData.totalClick)}}</div>
            </div>
          </div>
          <!-- 总打赏-->
          <div class="platformDatatitle_clickNum"  v-if="TotalData.totalMonthTicket === -1">
            <div class="platformDatatitle_clickNum_title">打赏</div>
            <div class="platformDatatitle_clickNum_center">
              <div class="platformDatatitle_clickNum_centerNum">--</div>
            </div>
          </div>
          <div class="platformDatatitle_clickNum"  v-else="">
            <div class="platformDatatitle_clickNum_title">打赏</div>
            <div class="platformDatatitle_clickNum_center" v-if="TotalData.totalReward>10000">
              <div class="platformDatatitle_clickNum_centerNum">{{TotalData.totalReward * 0.0001}}</div>
              <div class="platformDatatitle_clickNum_centersmall">万</div>
            </div>
            <div class="platformDatatitle_clickNum_center" v-else="">
              <div class="platformDatatitle_clickNum_centerNum">{{TotalData.totalReward}}</div>
            </div>
          </div>
          <!-- 总月票-->
          <div class="platformDatatitle_clickNum" v-if="TotalData.totalMonthTicket === -1">
            <div class="platformDatatitle_clickNum_title">月票</div>
            <div class="platformDatatitle_clickNum_center" >
              <div class="platformDatatitle_clickNum_centerNum">--</div>
              <!--<div class="platformDatatitle_clickNum_centersmall">万</div>-->
            </div>
          </div>
          <div class="platformDatatitle_clickNum" v-else="">
            <div class="platformDatatitle_clickNum_title">月票</div>
            <div class="platformDatatitle_clickNum_center" v-if="TotalData.totalMonthTicket>10000">
              <div class="platformDatatitle_clickNum_centerNum">{{parseInt(TotalData.totalMonthTicket * 0.0001)}}</div>
              <div class="platformDatatitle_clickNum_centersmall">万</div>
            </div>
            <div class="platformDatatitle_clickNum_center" v-else="">
              <div class="platformDatatitle_clickNum_centerNum">{{parseInt(TotalData.totalMonthTicket)}}</div>
            </div>
          </div>
          <!-- 总评论-->
          <div class="platformDatatitle_clickNum">
            <div class="platformDatatitle_clickNum_title">总评论</div>
            <div class="platformDatatitle_clickNum_center" v-if="TotalData.totalComment>10000">
              <div class="platformDatatitle_clickNum_centerNum">{{parseInt(TotalData.totalComment * 0.0001)}}</div>
              <div class="platformDatatitle_clickNum_centersmall">万</div>
            </div>
            <div class="platformDatatitle_clickNum_center" v-else="">
              <div class="platformDatatitle_clickNum_centerNum">{{parseInt(TotalData.totalComment)}}</div>
            </div>
          </div>
        </div>
        <div class="platformDataEchartsStyle">
          <el-tabs v-model="activeName" >
            <el-tab-pane class="clickstyle" label="点击" name="first">
              <div id="clickEcharts"></div>
            </el-tab-pane>
            <el-tab-pane class="clickstyle" label="打赏" name="second">
              <div id="rewardEcharts"></div>
            </el-tab-pane>
            <el-tab-pane class="clickstyle" label="月票" name="third">
              <div id="TicketEcharts"></div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
    <!-- 粉丝活跃-->
    <div class="VermicelliActive">
      <div class="overview_title">
        <div class="plot_block"></div>
        <div class="overview_title_first">粉丝活跃</div>
        <div class="overview_title_second">作品粉丝在网络中为该作品的发声量</div>
      </div>
      <div class="VermicelliActive_center">
        <div class="VermicelliActive_Echarts">
          <div class="VermicelliActive_Echarts_title">
            <!-- 网友打分-->
            <div class="VermicelliActive_Echarts_title_item">
              <div class="platformDatatitle_clickNum_title">网友打分</div>
              <div class="platformDatatitle_clickNum_center">
                <div class="platformDatatitle_clickNum_centerNum">{{parseInt(TotalData.netScore)}}</div>
              </div>
            </div>
            <!-- 讨论贴-->
            <div class="VermicelliActive_Echarts_title_item">
              <div class="platformDatatitle_clickNum_title">讨论帖</div>
              <div class="platformDatatitle_clickNum_center" v-if="TotalData.totalTiebaComment > 10000 && TotalData.totalTiebaComment>0">
                <div class="platformDatatitle_clickNum_centerNum">{{parseInt(TotalData.totalTiebaComment * 0.0001)}}</div>
                <div class="platformDatatitle_clickNum_centersmall">万</div>
              </div>
              <div class="platformDatatitle_clickNum_center" v-else="">
                <div class="platformDatatitle_clickNum_centerNum">{{parseInt(TotalData.totalTiebaComment)}}</div>
              </div>
            </div>
            <!-- 参与粉丝-->
            <div class="VermicelliActive_Echarts_title_item">
              <div class="platformDatatitle_clickNum_title">参与粉丝</div>
              <div class="platformDatatitle_clickNum_center" v-if="TotalData.totalTiebaFans>10000 && TotalData.totalTiebaFans>0">
                <div class="platformDatatitle_clickNum_centerNum">{{parseInt(TotalData.totalTiebaFans * 0.0001)}}</div>
                <div class="platformDatatitle_clickNum_centersmall">万</div>
              </div>
              <div class="platformDatatitle_clickNum_center" v-else="">
                <div class="platformDatatitle_clickNum_centerNum">{{parseInt(TotalData.totalTiebaFans)}}</div>
              </div>
            </div>
          </div>
          <div style="margin-top: 20px; padding-left: 7%">
            <el-tabs v-model="VermicelliactiveName" >
              <el-tab-pane  label="每日新增帖子" name="first">
                <div id="VermicelliActive_EchartDiv1" style="width: 40rem; height: 200px ;"></div>
              </el-tab-pane>
              <el-tab-pane  label="每日人均发表帖子" name="second">
                <div id="VermicelliActive_EchartDiv2" style="width: 40rem; height: 200px ;"></div>
              </el-tab-pane>
            </el-tabs>
          </div>
          <!--<div id="VermicelliActive_EchartDiv" style="width: 35rem; height: 200px ;background-color: red" ></div>-->
        </div>
        <div class="VermicelliActive_CommentsAndPosts">
          <div class="VermicelliActive_CommentsAndPosts_title">
            <div class="VermicelliActive_Comments" :class="{ VermicelliActive_Comments_active: CommentsisActive }" @click="CommentsisActive_FUN()">精品书评</div>
            <!--<div class="VermicelliActive_Posts"  :class="{ VermicelliActive_Comments_active: PostsisActive }" @click="PostsisActive_FUN()">热评发帖</div>-->
          </div>
          <div class="VermicelliActive_Comments_items" v-if="CommentsisActive">
            <div v-if="index < 5" v-for="(item, index) in specialdata" :key="index" class="VermicelliActive_Comments_item">
              {{item.content}}
            </div>
          </div>
          <div v-if="PostsisActive">1111</div>
        </div>
      </div>
    </div>
    <!-- 粉丝画像-->
    <div class="VermicelliData">
      <div class="overview_title">
        <div class="plot_block"></div>
        <div class="overview_title_first">粉丝画像</div>
        <div class="overview_title_second">综合地域和人群属性，衡量市场传播情况</div>
      </div>
      <div class="VericellData_Echarts">
        <div class="VermicelliData_Echarts_map">
          <div id="mapEcharts"></div>
        </div>
        <div class="VermicelliActive_Echarts_bar">
          <div id="VermicelliActive_Echarts_Piebar"></div>
          <div id="VermicelliActive_Echarts_yearbar"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import 'echarts/map/js/china.js'
import Axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      TotalData: '',
      AnalysisArray: [],
      tableData: [],
      adata: false,
      VermicelliactiveName: 'first',
      CommentsisActive: true,
      PostsisActive: false,
      activeName: 'first',
      VermicelliActive: 'first',
      specialdata: []
    }
  },
  created () {
    this.PcommentC()
  },
  props: ['heatRank'],
  mounted () {
    this.searchData()
    this.Relationdata_FUN()
    this.platformTotalData()
    this.VericellDataMap_FUN()
    this.VericelEchartsbar_FUN()
  },
  methods: {
    searchData () {
      const that = this
      Axios({
        url: '/dataRepresentation/searchData',
        method: 'get',
        params: {
          bookId: this.$route.params.id
        }
      }).then(function (res) {
        that.tableData = res.data.data
        console.log(that.tableData)
      })
    },
    platformTotalData () {
      const that = this
      Axios({
        url: '/dataRepresentation/platformTotalData',
        method: 'get',
        params: {
          bookId: this.$route.params.id
        }
      }).then(function (res) {
        that.TotalData = res.data.data
      })
    },
    Relationdata_FUN () {
      const that = this
      Axios({
        url: '/dataRepresentation/platformHistoryData',
        method: 'get',
        params: {
          bookId: this.$route.params.id
        }
      }).then(function (res) {
        that.clickechats_FUN(res.data.data.dailyClick, res.data.data.updateAt)
        that.rewardechats_FUN(res.data.data.dailyReward, res.data.data.updateAt)
        that.ticketechats_FUN(res.data.data.dailyTicket, res.data.data.updateAt)
        that.Vermicelliactiv_FUN1(res.data.data.dailyTiebaComment, res.data.data.updateAt)
        that.Vermicelliactiv_FUN2(res.data.data.avgTiebaComment, res.data.data.updateAt)
      })
    },
    // 精品书评
    PcommentC () {
      const that = this
      Axios({
        url: '/publicOpinion/comment',
        method: 'post',
        params: {
          bookId: this.$route.params.id,
          type: 'special'
        }
      }).then(function (res) {
        that.specialdata = res.data.data.opinion.content
      })
    },
    VericellDataMap_FUN () {
      const that = this
      Axios({
        url: '/dataRepresentation/fansDistrbution',
        method: 'get',
        params: {
          bookId: '11_1001304536'
        }
      }).then(function (res) {
        that.Vericellsexecharts_FUN(res.data.data.gender)
        that.VericellDataecharts_FUN(res.data.data)
        that.VericelEchartsbar_FUN(res.data.data)
      })
    },
    clickechats_FUN (a, b) {
      this.$nextTick(function () {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('clickEcharts'))
        // 绘制图表
        myChart.setOption({
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
            data: b.map(function (str) {
              return str.replace('2018-', '')
            }).map(function (str) {
              return str.replace('-', ':')
            }),
            axisLine: {
              show: true,
              lineStyle: {
                color: '#EFEFEF'
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#EFEFEF'
              }
            },
            axisTick: {
              show: false,
              lineStyle: {
                color: '#767B8E'
              }
            },
            axisLabel: {
              interval: 1,
              align: 'left',
              color: '#767B8E'
            }
          },
          yAxis: {
            type: 'value',
            nameGap: 100,
            axisLine: {
              show: false,
              lineStyle: {
                color: '#EFEFEF'
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#EFEFEF'
              }
            },
            axisTick: {
              show: false,
              lineStyle: {
                color: '#fff'
              }
            },
            axisLabel: {
              show: false
            }
          },
          series: [
            {
              name: '每日点击',
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
      })
    },
    rewardechats_FUN (a, b) {
      this.$nextTick(function () {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('rewardEcharts'))
        // 绘制图表
        myChart.setOption({
          title: {
            text: '',
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
            data: b.map(function (str) {
              return str.replace('2018-', '')
            }).map(function (str) {
              return str.replace('-', ':')
            }),
            axisLine: {
              show: true,
              lineStyle: {
                color: '#EFEFEF'
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#EFEFEF'
              }
            },
            axisTick: {
              show: false,
              lineStyle: {
                color: '#767B8E'
              }
            },
            axisLabel: {
              interval: 1,
              align: 'left',
              color: '#767B8E'
            }
          },
          yAxis: {
            type: 'value',
            nameGap: 100,
            axisLine: {
              show: false,
              lineStyle: {
                color: '#EFEFEF'
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#EFEFEF'
              }
            },
            axisTick: {
              show: false,
              lineStyle: {
                color: '#fff'
              }
            },
            axisLabel: {
              show: false
            }
          },
          series: [
            {
              name: '每日打赏',
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
      })
    },
    ticketechats_FUN (a, b) {
      this.$nextTick(function () {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('TicketEcharts'))
        // 绘制图表
        myChart.setOption({
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
            data: b.map(function (str) {
              return str.replace('2018-', '')
            }).map(function (str) {
              return str.replace('-', ':')
            }),
            axisLine: {
              show: true,
              lineStyle: {
                color: '#EFEFEF'
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#EFEFEF'
              }
            },
            axisTick: {
              show: false,
              lineStyle: {
                color: '#767B8E'
              }
            },
            axisLabel: {
              interval: 1,
              align: 'left',
              color: '#767B8E'
            }
          },
          yAxis: {
            type: 'value',
            nameGap: 100,
            axisLine: {
              show: false,
              lineStyle: {
                color: '#EFEFEF'
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#EFEFEF'
              }
            },
            axisTick: {
              show: false,
              lineStyle: {
                color: '#fff'
              }
            },
            axisLabel: {
              show: false
            }
          },
          series: [
            {
              name: '每日点击',
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
      })
    },
    // 粉丝活跃(每日新增帖子)
    Vermicelliactiv_FUN1 (a, c) {
      this.$nextTick(function () {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('VermicelliActive_EchartDiv1'))
        // 绘制图表
        myChart.setOption({
          title: {
            text: '',
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
            data: c.map(function (str) {
              return str.replace('2018-', '')
            }).map(function (str) {
              return str.replace('-', ':')
            }),
            axisLine: {
              show: true,
              lineStyle: {
                color: '#EFEFEF'
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#EFEFEF'
              }
            },
            axisTick: {
              show: false,
              lineStyle: {
                color: '#767B8E'
              }
            },
            axisLabel: {
              interval: 1,
              align: 'left',
              color: '#767B8E'
            }
          },
          yAxis: {
            type: 'value',
            nameGap: 100,
            axisLine: {
              show: false,
              lineStyle: {
                color: '#EFEFEF'
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#EFEFEF'
              }
            },
            axisTick: {
              show: false,
              lineStyle: {
                color: '#fff'
              }
            },
            axisLabel: {
              show: false
            }
          },
          series: [
            {
              name: '每日新增帖子',
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
      })
    },
    // 粉丝活跃 (每日人均发表帖子)
    Vermicelliactiv_FUN2 (a, c) {
      this.$nextTick(function () {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('VermicelliActive_EchartDiv2'))
        // 绘制图表
        myChart.setOption({
          title: {
            text: '',
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
            data: c.map(function (str) {
              return str.replace('2018-', '')
            }).map(function (str) {
              return str.replace('-', ':')
            }),
            axisLine: {
              show: true,
              lineStyle: {
                color: '#EFEFEF'
              }
            },
            axisTick: {
              show: false,
              lineStyle: {
                color: '#767B8E'
              }
            },
            axisLabel: {
              interval: 1,
              align: 'left',
              color: '#767B8E'
            }
          },
          yAxis: {
            type: 'value',
            nameGap: 100,
            axisLine: {
              show: false,
              lineStyle: {
                color: '#EFEFEF'
              }
            },
            splitLine: {
              lineStyle: {
                // 使用深浅的间隔色
                color: ['#efefef']
              }
            },
            axisTick: {
              show: false,
              lineStyle: {
                color: '#fff'
              }
            },
            axisLabel: {
              show: false
            }
          },
          series: [
            {
              name: '每日新增帖子',
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
      })
    },
    // 粉丝分布地图
    VericellDataecharts_FUN (b) {
      this.$nextTick(function () {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('mapEcharts'))
        // 绘制图表
        myChart.setOption(
          {
            title: {
              subtext: '地域分布',
              left: 'left',
              textStyle: {
                color: '#4A4A4A'
              }
            },
            tooltip: {
              trigger: 'item'
            },
            visualMap: {
              min: 0,
              max: b.maxValue,
              left: 'left',
              top: 'bottom',
              text: ['最高数值', '最低数值'],
              calculable: true,
              inRange: {
                color: ['#e0ffff', '#369ED9']
              }
            },
            series: [
              {
                name: '粉丝',
                type: 'map',
                mapType: 'china',
                label: {
                  normal: {
                    show: false
                  },
                  emphasis: {
                    show: true
                  }
                },
                data: b.province
              }
            ]
          }
        )
      })
    },
    // 粉丝性别分布
    Vericellsexecharts_FUN (a) {
      this.$nextTick(function () {
        let womanNum = a[0]
        let manNum = a[1]
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('VermicelliActive_Echarts_Piebar'))
        // 绘制图表
        myChart.setOption(
          {
            backgroundColor: '#fff',
            title: {
              text: '',
              subtext: '性别分布',
              left: 'left',
              top: 20,
              textStyle: {
                color: '#ccc'
              }
            },
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : ({d}%)'
            },
            series: [
              {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                center: ['50%', '50%'],
                data: [
                  {value: manNum.percent, name: '男'},
                  {value: womanNum.percent, name: '女'}
                ],
                roseType: 'radius',
                label: {
                  normal: {
                    textStyle: {
                      color: '#369ED9'
                    }
                  }
                },
                labelLine: {
                  normal: {
                    lineStyle: {
                      color: '#369ED9'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                  }
                },
                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                  return Math.random() * 200
                }
              }
            ],
            color: ['#dddddd', '#91CAEA']
          }
        )
      })
    },
    CommentsisActive_FUN () {
      this.CommentsisActive = true
      this.PostsisActive = false
    },
    PostsisActive_FUN () {
      this.CommentsisActive = false
      this.PostsisActive = true
    },
    VericelEchartsbar_FUN (a) {
      console.log(a)
      this.$nextTick(function () {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('VermicelliActive_Echarts_yearbar'))
        // 绘制图表
        myChart.setOption(
          {
            legend: {
              data: ['标准分布', '本书分布']
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: [
              {
                type: 'category',
                data: ['18以下', '19-24', '25-34', '35~49', '50以上'],
                nameTextStyle: {
                  color: '#414040'
                },
                axisTick: {
                  show: false
                }
              }
            ],
            yAxis: [
              {
                show: false,
                type: 'value'
              }
            ],
            series: [
              {
                name: '标准分布',
                type: 'bar',
                data: [8, 39, 42, 9, 2]
              },
              {
                name: '本书分布',
                type: 'bar',
                data: a.ageYAxis
              }],
            color: ['#dddde6', '#5ABDF5']
          }
        )
      })
    }
  },
  filters: {
    // 添加日期转换的过滤器
    data (input) {
      if (input === null) {
        return ''
      } else {
        var d = new Date(input)
        var year = d.getFullYear()
        var month = d.getMonth() + 1
        var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate()
        //        var hour = d.getHours()
        //        var minutes = d.getMinutes()
        //        var seconds = d.getSeconds()
        return year + '-' + month + '-' + day + ' '
      }
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
  .searchDataTableAndDiv{
    margin-bottom: 30px;
    margin-top: 20px;
    height: 310px;
    width: 99%;
    padding-left: 0.5%;
    padding-right: 0.5%;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
  }
  .searchDataTable{
    width: 70%;
    /*text-align: center;*/
    border-radius: 3px;
    min-height: 250px;
    box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.03);
  }
  .searchDataDiv{
    width: 23%;
    height: 310px;
    margin-left: 0.5%;
    margin-right: 0.5%;
    border-radius: 3px;
    box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.03);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .search_index_first{
    width: 3.2rem;
  }
  .overview_center_item_title{
    height: 180px;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    font-size: 3.5rem;
    line-height: 250px;
    font-weight: bolder;
    color: #5ABDF5;
  }
  .overview_center_item_title_smallfontsize{
    font-size: 1.5rem !important;
    line-height: 1rem;
  }
  .overview_center_item_first{
    line-height: 40px;
    font-size: 1rem;
    font-weight: 600;
    color: #4C4C4C;
  }
  .overview_center_item_second{
    font-size: 0.8rem;
    line-height: 1.2rem;
    color: #B6C3CD;
  }
  .search_index{
  display: flex;
  flex-direction: row;
  align-items: center;
}
  .platformDataDiv{
    margin-top: 20px;
    margin-bottom: 30px;
    width: 98%;
    height: 320px;
    margin-left: 0.5%;
    border-radius: 3px;
    box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.03);
  }
  .platformDatatitle{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .platformDatatitle_clickNum{
    width: 20%;
    padding-left: 5%;
    height: 120px;
  }
  .platformDatatitle_clickNum_title{
    margin-top: 30px;
    font-size: 0.95rem;
    line-height: 2rem;
    color: #4A4A4A;
  }
  .platformDatatitle_clickNum_centerNum{
    margin-top: 10px;
    line-height: 1rem;
    font-size: 1.5rem;
    color: #4A4A4A;
  }
  .platformDatatitle_clickNum_center{
    display: flex;
    flex-direction: row;
    color: #4A4A4A;
    align-items: baseline;
  }
  .platformDatatitle_clickNum_centersmall{
    font-size: 12px;
  }
  .platformDataEchartsStyle{
    font-size: 0.5rem!important;
    margin-left: 5%;
  }
  #clickEcharts{
    margin-top: -57px;
    margin-left: -24px;
    width: 59rem;
    height: 200px;
  }
  #rewardEcharts{
    margin-top: -57px;
    margin-left: -24px;
    width: 59rem;
    height: 200px;
  }
  #TicketEcharts{
    margin-top: -57px;
    margin-left: -24px;
    width: 59rem;
    height: 200px;
  }
  .VermicelliActive_center{
    margin-bottom: 30px;
    margin-top: 20px;
    height: 310px;
    width: 99%;
    padding-left: 0.5%;
    padding-right: 0.5%;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
  }
  .VermicelliActive_Echarts{
    width: 70%;
    border-radius: 3px;
    min-height: 250px;
    box-shadow: 0 1px 5px 2px rgba(0,0,0,0.03);
  }
  #VermicelliActive_EchartDiv1 {
    margin-top: -60px;
    margin-left: -15px;
  }
  #VermicelliActive_EchartDiv2 {
    margin-top: -60px;
    margin-left: -15px;
  }
  .VermicelliActive_CommentsAndPosts{
    width: 23%;
    height: 310px;
    margin-left: 0.5%;
    margin-right: 0.5%;
    border-radius: 3px;
    box-shadow: 0 1px 5px 2px rgba(0,0,0,0.03);
  }
  .VermicelliActive_CommentsAndPosts_title{
    width: 100%;
    height: 45px;
    line-height: 25px;
    font-size: 0.95rem;
    color: #292929;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #FAFCFF;
    padding-left: 2%;
  }
  .VermicelliActive_Comments{
    margin-left: 5px;
    cursor:pointer;
  }
  .VermicelliActive_Comments_active{
    /*border-bottom: solid 1px #00A69D;*/
    cursor:pointer;
  }
  .VermicelliActive_Posts{
    margin-left: 20px;
    cursor:pointer;
  }
  .VermicelliActive_Comments_items{
    margin-top: 7px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .VermicelliActive_Comments_items a {
    display: block;
    margin-left: 5%;
    margin-bottom: 20px;
    text-decoration: none;
  }
  .VermicelliActive_Comments_item{
    width: 90%;
    height: 34px;
    text-align: left;
    font-size: 12px;
    color: #383838;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    margin-bottom: 20px;
  }
  .VermicelliActive_Echarts_title{
    margin-left: 4%;
    display: flex;
  }
  .VermicelliActive_Echarts_title_item{
    width: 30%;
    padding-left:3%;
  }
  .VericellData_Echarts{
    margin-top: 20px;
    margin-bottom: 30px;
    width: 98%;
    height: 450px;
    margin-left: 0.5%;
    border-radius: 3px;
    box-shadow: 0 1px 5px 2px rgba(0,0,0,0.03);
    padding-left: 0.5%;
    padding-right: 0.5%;
    display: flex;
    justify-content: space-between;
  }
  .VermicelliData_Echarts_map{
    width: 70%;
    height: 450px;
  }
  #mapEcharts{
    margin-top: 10px;
    margin-left: 20px;
    width: 700px;
    height: 400px;
  }
  .VermicelliActive_Echarts_bar{
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #VermicelliActive_Echarts_Piebar {
    width: 300px;
    height: 250px;
  }
  #VermicelliActive_Echarts_yearbar{
    width: 18.75rem;
    height: 180px;
   }
</style>
