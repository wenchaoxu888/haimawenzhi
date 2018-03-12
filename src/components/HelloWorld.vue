<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
    <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
    <div id="youChart"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      categories: [0, 2],
      graph: {nodes: [{category: 0, symbolSize: 39.97, value: 39.97, name: "\u51c0\u6708"}, {category: 0, symbolSize: 24.01, value: 24.01, name: "\u5b64\u6cf7"}, {category: 0, symbolSize: 12.45, value: 12.45, name: "\u6d6e\u77e5"}, {category: 0, symbolSize: 11.48, value: 11.48, name: "\u6cb3\u631a"}, {category: 0, symbolSize: 9.38, value: 9.38, name: "\u84dd\u72d0"}, {category: 0, symbolSize: 2.27, value: 2.27, name: "\u949f\u4e88"}, {category: 0, symbolSize: 1.58, value: 1.58, name: "\u5b64\u5578\u82cd"}, {category: 1, symbolSize: 1.45, value: 1.45, name: "\u8001\u592b"}, {category: 0, symbolSize: 1.11, value: 1.11, name: "\u6728\u8001"}, {category: 0, symbolSize: 0.64, value: 0.64, name: "\u5b64\u747e"}, {category: 0, symbolSize: 0.59, value: 0.59, name: "\u5e08\u5085"}, {category: 0, symbolSize: 0.32, value: 0.32, name: "\u5c01\u5370"}, {category: 0, symbolSize: 0.29, value: 0.29, name: "\u660e\u767d"}, {category: 0, symbolSize: 0.28, value: 0.28, name: "\u590f\u4e25\u57ce"}, {category: 0, symbolSize: 0.21, value: 0.21, name: "\u5b89\u9759"}, {category: 0, symbolSize: 0.16, value: 0.16, name: "\u9633\u5149"}, {category: 0, symbolSize: 0.14, value: 0.14, name: "\u82b1\u5a9a"}, {category: 0, symbolSize: 0.14, value: 0.14, name: "\u4f2f\u4f2f"}, {category: 0, symbolSize: 0.14, value: 0.14, name: "\u53f8\u8001"}, {category: 0, symbolSize: 0.14, value: 0.14, name: "\u5c0f\u59d0"}], edges: [{source: "\u4f2f\u4f2f", target: "\u660e\u767d", value: 2}, {source: "\u4f2f\u4f2f", target: "\u6728\u8001", value: 1}, {source: "\u4f2f\u4f2f", target: "\u6d6e\u77e5", value: 5}, {source: "\u4f2f\u4f2f", target: "\u84dd\u72d0", value: 36}, {source: "\u4f2f\u4f2f", target: "\u949f\u4e88", value: 2}, {source: "\u4f2f\u4f2f", target: "\u53f8\u8001", value: 1}, {source: "\u4f2f\u4f2f", target: "\u51c0\u6708", value: 25}, {source: "\u4f2f\u4f2f", target: "\u5c01\u5370", value: 2}, {source: "\u4f2f\u4f2f", target: "\u9633\u5149", value: 1}, {source: "\u4f2f\u4f2f", target: "\u6cb3\u631a", value: 8}, {source: "\u4f2f\u4f2f", target: "\u5b64\u6cf7", value: 25}, {source: "\u4f2f\u4f2f", target: "\u8001\u592b", value: 2}, {source: "\u4f2f\u4f2f", target: "\u5e08\u5085", value: 5}, {source: "\u51c0\u6708", target: "\u5b64\u747e", value: 94}, {source: "\u51c0\u6708", target: "\u82b1\u5a9a", value: 7}, {source: "\u51c0\u6708", target: "\u5e08\u5085", value: 121}, {source: "\u51c0\u6708", target: "\u5b89\u9759", value: 52}, {source: "\u51c0\u6708", target: "\u6d6e\u77e5", value: 1568}, {source: "\u51c0\u6708", target: "\u5b64\u6cf7", value: 2722}, {source: "\u51c0\u6708", target: "\u6728\u8001", value: 144}, {source: "\u51c0\u6708", target: "\u5b64\u5578\u82cd", value: 209}, {source: "\u51c0\u6708", target: "\u5c01\u5370", value: 57}, {source: "\u51c0\u6708", target: "\u6cb3\u631a", value: 1260}, {source: "\u51c0\u6708", target: "\u9633\u5149", value: 44}, {source: "\u51c0\u6708", target: "\u949f\u4e88", value: 323}, {source: "\u51c0\u6708", target: "\u84dd\u72d0", value: 1192}, {source: "\u51c0\u6708", target: "\u660e\u767d", value: 108}, {source: "\u51c0\u6708", target: "\u8001\u592b", value: 306}, {source: "\u51c0\u6708", target: "\u590f\u4e25\u57ce", value: 1}, {source: "\u51c0\u6708", target: "\u5c0f\u59d0", value: 22}, {source: "\u51c0\u6708", target: "\u53f8\u8001", value: 40}, {source: "\u53f8\u8001", target: "\u84dd\u72d0", value: 11}, {source: "\u53f8\u8001", target: "\u5c01\u5370", value: 2}, {source: "\u53f8\u8001", target: "\u5b64\u5578\u82cd", value: 21}, {source: "\u53f8\u8001", target: "\u5b64\u747e", value: 4}, {source: "\u53f8\u8001", target: "\u5e08\u5085", value: 10}, {source: "\u53f8\u8001", target: "\u9633\u5149", value: 1}, {source: "\u53f8\u8001", target: "\u6728\u8001", value: 29}, {source: "\u53f8\u8001", target: "\u5b64\u6cf7", value: 29}, {source: "\u590f\u4e25\u57ce", target: "\u660e\u767d", value: 3}, {source: "\u590f\u4e25\u57ce", target: "\u5b89\u9759", value: 2}, {source: "\u590f\u4e25\u57ce", target: "\u6cb3\u631a", value: 1}, {source: "\u590f\u4e25\u57ce", target: "\u5b64\u6cf7", value: 10}, {source: "\u590f\u4e25\u57ce", target: "\u5b64\u5578\u82cd", value: 1}, {source: "\u590f\u4e25\u57ce", target: "\u84dd\u72d0", value: 9}, {source: "\u590f\u4e25\u57ce", target: "\u5c0f\u59d0", value: 2}, {source: "\u5b64\u5578\u82cd", target: "\u84dd\u72d0", value: 78}, {source: "\u5b64\u5578\u82cd", target: "\u5e08\u5085", value: 13}, {source: "\u5b64\u5578\u82cd", target: "\u9633\u5149", value: 2}, {source: "\u5b64\u5578\u82cd", target: "\u660e\u767d", value: 12}, {source: "\u5b64\u5578\u82cd", target: "\u949f\u4e88", value: 1}, {source: "\u5b64\u5578\u82cd", target: "\u5b64\u6cf7", value: 230}, {source: "\u5b64\u5578\u82cd", target: "\u5b89\u9759", value: 5}, {source: "\u5b64\u5578\u82cd", target: "\u6cb3\u631a", value: 73}, {source: "\u5b64\u5578\u82cd", target: "\u51c0\u6708", value: 209}, {source: "\u5b64\u5578\u82cd", target: "\u6d6e\u77e5", value: 17}, {source: "\u5b64\u5578\u82cd", target: "\u5c0f\u59d0", value: 1}, {source: "\u5b64\u5578\u82cd", target: "\u5c01\u5370", value: 6}, {source: "\u5b64\u5578\u82cd", target: "\u5b64\u747e", value: 20}, {source: "\u5b64\u5578\u82cd", target: "\u6728\u8001", value: 56}, {source: "\u5b64\u6cf7", target: "\u6cb3\u631a", value: 1472}, {source: "\u5b64\u6cf7", target: "\u6728\u8001", value: 81}, {source: "\u5b64\u6cf7", target: "\u660e\u767d", value: 81}, {source: "\u5b64\u6cf7", target: "\u5e08\u5085", value: 154}, {source: "\u5b64\u6cf7", target: "\u5b64\u747e", value: 103}, {source: "\u5b64\u6cf7", target: "\u949f\u4e88", value: 163}, {source: "\u5b64\u6cf7", target: "\u8001\u592b", value: 113}, {source: "\u5b64\u6cf7", target: "\u6d6e\u77e5", value: 740}, {source: "\u5b64\u6cf7", target: "\u5c0f\u59d0", value: 36}, {source: "\u5b64\u6cf7", target: "\u9633\u5149", value: 32}, {source: "\u5b64\u6cf7", target: "\u84dd\u72d0", value: 970}, {source: "\u5b64\u6cf7", target: "\u5b89\u9759", value: 41}, {source: "\u5b64\u6cf7", target: "\u5c01\u5370", value: 29}, {source: "\u5b64\u747e", target: "\u9633\u5149", value: 1}, {source: "\u5b64\u747e", target: "\u6cb3\u631a", value: 1}, {source: "\u5b64\u747e", target: "\u84dd\u72d0", value: 34}, {source: "\u5b64\u747e", target: "\u5e08\u5085", value: 3}, {source: "\u5b64\u747e", target: "\u6728\u8001", value: 13}, {source: "\u5b64\u747e", target: "\u5c0f\u59d0", value: 1}, {source: "\u5b64\u747e", target: "\u660e\u767d", value: 3}, {source: "\u5b64\u747e", target: "\u6d6e\u77e5", value: 1}, {source: "\u5b64\u747e", target: "\u5b89\u9759", value: 3}, {source: "\u5b89\u9759", target: "\u5c01\u5370", value: 1}, {source: "\u5b89\u9759", target: "\u5c0f\u59d0", value: 1}, {source: "\u5b89\u9759", target: "\u9633\u5149", value: 1}, {source: "\u5b89\u9759", target: "\u6cb3\u631a", value: 23}, {source: "\u5b89\u9759", target: "\u5e08\u5085", value: 2}, {source: "\u5b89\u9759", target: "\u84dd\u72d0", value: 24}, {source: "\u5b89\u9759", target: "\u949f\u4e88", value: 3}, {source: "\u5b89\u9759", target: "\u660e\u767d", value: 4}, {source: "\u5b89\u9759", target: "\u82b1\u5a9a", value: 2}, {source: "\u5b89\u9759", target: "\u5b64\u747e", value: 3}, {source: "\u5b89\u9759", target: "\u6728\u8001", value: 1}, {source: "\u5b89\u9759", target: "\u6d6e\u77e5", value: 24}, {source: "\u5b89\u9759", target: "\u8001\u592b", value: 7}, {source: "\u5c01\u5370", target: "\u5e08\u5085", value: 4}, {source: "\u5c01\u5370", target: "\u6728\u8001", value: 5}, {source: "\u5c01\u5370", target: "\u84dd\u72d0", value: 22}, {source: "\u5c01\u5370", target: "\u660e\u767d", value: 3}, {source: "\u5c01\u5370", target: "\u5b64\u6cf7", value: 29}, {source: "\u5c01\u5370", target: "\u6cb3\u631a", value: 31}, {source: "\u5c01\u5370", target: "\u8001\u592b", value: 4}, {source: "\u5c01\u5370", target: "\u6d6e\u77e5", value: 20}, {source: "\u5c0f\u59d0", target: "\u6cb3\u631a", value: 12}, {source: "\u5c0f\u59d0", target: "\u6d6e\u77e5", value: 2}, {source: "\u5c0f\u59d0", target: "\u84dd\u72d0", value: 12}, {source: "\u5e08\u5085", target: "\u8001\u592b", value: 5}, {source: "\u5e08\u5085", target: "\u6cb3\u631a", value: 38}, {source: "\u5e08\u5085", target: "\u84dd\u72d0", value: 40}, {source: "\u5e08\u5085", target: "\u6728\u8001", value: 9}, {source: "\u5e08\u5085", target: "\u949f\u4e88", value: 12}, {source: "\u5e08\u5085", target: "\u9633\u5149", value: 4}, {source: "\u5e08\u5085", target: "\u660e\u767d", value: 7}, {source: "\u5e08\u5085", target: "\u6d6e\u77e5", value: 20}, {source: "\u660e\u767d", target: "\u8001\u592b", value: 10}, {source: "\u660e\u767d", target: "\u82b1\u5a9a", value: 1}, {source: "\u660e\u767d", target: "\u6728\u8001", value: 13}, {source: "\u660e\u767d", target: "\u949f\u4e88", value: 3}, {source: "\u660e\u767d", target: "\u590f\u4e25\u57ce", value: 3}, {source: "\u660e\u767d", target: "\u9633\u5149", value: 3}, {source: "\u660e\u767d", target: "\u6cb3\u631a", value: 45}, {source: "\u660e\u767d", target: "\u84dd\u72d0", value: 37}, {source: "\u660e\u767d", target: "\u6d6e\u77e5", value: 38}, {source: "\u6728\u8001", target: "\u84dd\u72d0", value: 54}, {source: "\u6728\u8001", target: "\u8001\u592b", value: 2}, {source: "\u6728\u8001", target: "\u6d6e\u77e5", value: 13}, {source: "\u6728\u8001", target: "\u9633\u5149", value: 1}, {source: "\u6728\u8001", target: "\u6cb3\u631a", value: 13}, {source: "\u6cb3\u631a", target: "\u84dd\u72d0", value: 410}, {source: "\u6cb3\u631a", target: "\u5c01\u5370", value: 31}, {source: "\u6cb3\u631a", target: "\u949f\u4e88", value: 88}, {source: "\u6cb3\u631a", target: "\u5b64\u6cf7", value: 1472}, {source: "\u6cb3\u631a", target: "\u82b1\u5a9a", value: 4}, {source: "\u6cb3\u631a", target: "\u8001\u592b", value: 119}, {source: "\u6cb3\u631a", target: "\u9633\u5149", value: 14}, {source: "\u6cb3\u631a", target: "\u6d6e\u77e5", value: 713}, {source: "\u6d6e\u77e5", target: "\u660e\u767d", value: 38}, {source: "\u6d6e\u77e5", target: "\u84dd\u72d0", value: 339}, {source: "\u6d6e\u77e5", target: "\u8001\u592b", value: 195}, {source: "\u6d6e\u77e5", target: "\u82b1\u5a9a", value: 29}, {source: "\u6d6e\u77e5", target: "\u9633\u5149", value: 16}, {source: "\u6d6e\u77e5", target: "\u949f\u4e88", value: 87}, {source: "\u8001\u592b", target: "\u9633\u5149", value: 4}, {source: "\u8001\u592b", target: "\u51c0\u6708", value: 306}, {source: "\u8001\u592b", target: "\u84dd\u72d0", value: 66}, {source: "\u84dd\u72d0", target: "\u9633\u5149", value: 15}, {source: "\u84dd\u72d0", target: "\u6d6e\u77e5", value: 339}, {source: "\u84dd\u72d0", target: "\u949f\u4e88", value: 53}, {source: "\u84dd\u72d0", target: "\u660e\u767d", value: 37}, {source: "\u84dd\u72d0", target: "\u590f\u4e25\u57ce", value: 9}, {source: "\u949f\u4e88", target: "\u9633\u5149", value: 5}, {source: "\u949f\u4e88", target: "\u5e08\u5085", value: 12}, {source: "\u9633\u5149", target: "\u8001\u592b", value: 4}, {source: "\u9633\u5149", target: "\u5b64\u5578\u82cd", value: 2}, {source: "\u9633\u5149", target: "\u51c0\u6708", value: 44}]}}
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    drawLine () {
      const that = this
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: 'Les Miserables',
          subtext: 'Default layout',
          top: 'bottom',
          left: 'right'
        },
        tooltip: {},
        series: [{
          name: 'Les Miserables',
          type: 'graph',
          layout: none,
          data: that.graph.nodes,
          links: that.graph.edges,
          categories: that.categories,
          roam: true,
          force: {
            repulsion: 1000
          },
          label: {
            normal: {
              position: 'right',
              formatter: '{b}'
            }
          },
          lineStyle: {
            normal: {
              curveness: 0.3
            }
          },
          animation: false
        }]
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
