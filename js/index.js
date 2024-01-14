// 柱状图
(function() {
    // 1实例化对象
    var myChart = echarts.init(document.querySelector(".bar .chart"));
    // 2.指定配置项
   var option = {
    color:'#2f89cf',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    // 修改图标大小
    grid: {
        left: "0%",
        top: "10px",
        right: "0%",
        bottom: "4%",
        containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        // x轴中更换data数据
        data: [ "旅游行业","教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业" ],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
            // color: "rgba(255,255,255,.6)",
            color:'green',
            fontSize: "12"
          },
        //   不显示x坐标轴样式
        axisLine : {
            show:false
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
         // y 轴文字标签样式
        axisLabel:{
        color: "rgba(255,255,255,.6)",
        fontSize: 12
     },
// y轴线条样式
        axisLine: {
        lineStyle: {
        color: "rgba(255,255,255,.1)",
        width: 2
    }
},
// y 轴分隔线样式
        splitLine: {
         lineStyle: {
         color: "rgba(255,255,255,.1)"
   }
}
      },
    ],
    series: [
      {
        name: 'Direct',
        type: 'bar',
        barWidth: '60%',
        // series 更换数据
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
            // 修改柱子圆角
            barBorderRadius: 5
          }
      }
    ]
  };
    //   把配置项给实例对象
    myChart.setOption(option)
    // 让图表跟随屏幕自动去改变
    window.addEventListener('resize',function(){
        myChart.resize();
    })
})();
// 柱状图2
(function() {
    //实例化对象
    var myChart = echarts.init(document.querySelector(".bar2 .chart"));
    // 声明颜色数组
    var myColor = ["green", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    // 配置对象和数据
    var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {},
        grid: {
            top: "10%",
            left: "22%",
            bottom: "10%",
        //   containLabel: true
        },
        xAxis: {
            show: false
        },
        yAxis: [
            {
            type: 'category',
            // 坐标轴反向
            inverse:true,
            // y轴更换第一个对象更换data数据
            data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
            //不显示y轴线条
            axisLine: {
            show: false
          },
            // 不显示刻度
             axisTick: {
             show: false
        }, 
             axisLabel: {
              color: "green"
        },
    },
          {
             // 坐标轴反向
            inverse:true,
            show: true,
            data: [702, 350, 610, 793, 664],
           // 不显示y轴的线
            axisLine: {
            show: false
      },
           // 不显示刻度
            axisTick: {
            show: false
      },
            axisLabel: {
            textStyle: {
            fontSize: 12,
            color: "#fff"
          }
        }
      }
        ],
        series: [
          {
            name: '条',
            type: 'bar',
            name: "条",
            name: "条",
            // 柱子之间的距离
            barCategoryGap: 50,
            //柱子的宽度
            barWidth: 10,
           // series 第一个对象里面的data
            data: [70, 34, 60, 78, 69],
            // 给series  第一个对象里面的 添加 
            yAxisIndex: 0,
           // 柱子设为圆角
            itemStyle: {
                  barBorderRadius: 20, 
            // params 传进来是柱子对象 ,dataIndex是当前柱子的索引号
                  color:function(params){
                    return myColor[params.dataIndex];
                  }
            },
            // 图形上的文本标签
             label: {
               normal: {
               show: true,
               // 图形内显示
               position: "inside",
               // 文字的显示格式
            // {c}会自动解析data里数据
                formatter: "{c}%"
     }
},
          },
          {
            name: '框',
            type: 'bar',
            barCategoryGap: 50,
            barWidth: 15,
           // series 第二个对象里面的data
            data: [100, 100, 100, 100, 100],
            // 给series  第一个对象里面的 添加 
            yAxisIndex: 1,
            itemStyle: {
                color: "none",
                borderColor: "#00c1de",
                borderWidth: 3,
                barBorderRadius: 15
            },
          }
        ]
      };
    //   将配置对象给实例对象
    myChart.setOption(option);
    // 让图像随页面大小而改动
    window.addEventListener('resize',function(){
        myChart.resize();
    })
})();

// 折线图
(function() {
    // 1实例化对象
    var myChart = echarts.init(document.querySelector(".line .chart"));
    // 2.指定配置项
   var option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
      textStyle: {
        color: '#4c9bfd' // 图例文字颜色
      },
      right: '20%' // 距离右边10%
    },
    grid: {
        top: '20%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        show: true,// 显示边框
        borderColor: '#012f4a',// 边框颜色
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: '#4c9bfd' // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      boundaryGap: false  // 去除轴内间距
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false  // 去除刻度
      },
      axisLabel: {
        color: '#4c9bfd' // 文字颜色
      },
      splitLine: {
        lineStyle: {
          color: '#012f4a' // 分割线颜色
        }
      }
    },
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        smooth: true,
        name:'新增粉丝',
        data:  [24, 140, 301, 134, 90, 330, 210, 230, 220, 230, 210, 120],
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        smooth: true,
        name:'新增游客',
        data: [40, 164, 391, 324, 290, 430, 310, 213, 280, 200, 380, 279],
      },
      {
        name: 'Video Ads',
        type: 'line',
        stack: 'Total',
        smooth: true,
        name:'直接访问',
        data: [150, 232, 401, 154, 590, 530, 410, 520, 670, 320, 690, 600]
      }
    ]
  };
    //   把配置项给实例对象
    myChart.setOption(option);
    // 让图表跟随屏幕自动去改变
    window.addEventListener('resize',function(){
        myChart.resize();
    })
})();

// 折线图2
(function() {
    // 1实例化对象
   var myChart = echarts.init(document.querySelector(".line2 .chart"));
    // 2.指定配置项
   var  option = {
    color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['营销', '搜索', '访问', '视频', '广告'],
      top: "0%",
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
        left: "10",
        top: "30",
        right: "10",
        bottom: "10",
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12
            }
          },
           // x轴线的颜色为   rgba(255,255,255,.2)
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.2)"
            }
          },
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
	   // 修改分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: '营销',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(128, 255, 165)'
            },
            {
              offset: 1,
              color: 'rgb(1, 191, 236)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: [140, 232, 101, 264, 90, 340, 250]
      },
      {
        name: '搜索',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(0, 221, 255)'
            },
            {
              offset: 1,
              color: 'rgb(77, 119, 255)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: [120, 282, 111, 234, 220, 340, 310]
      },
      {
        name: '访问',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(55, 162, 255)'
            },
            {
              offset: 1,
              color: 'rgb(116, 21, 219)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: [320, 132, 201, 334, 190, 130, 220]
      },
      {
        name: '视频',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(255, 0, 135)'
            },
            {
              offset: 1,
              color: 'rgb(135, 0, 157)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: [220, 402, 231, 134, 190, 230, 120]
      },
      {
        name: '广告',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        label: {
          show: true,
          position: 'top'
        },
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(255, 191, 0)'
            },
            {
              offset: 1,
              color: 'rgb(224, 62, 76)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: [220, 302, 181, 234, 210, 290, 150]
      }
    ]
  };
    //   把配置项给实例对象
    myChart.setOption(option);
    // 让图表跟随屏幕自动去改变
    window.addEventListener('resize',function(){
        myChart.resize();
    })
})();

// 饼状图
(function() {
    // 1实例化对象
   var myChart = echarts.init(document.querySelector(".pie .chart"));
    // 2.指定配置项
    var option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: '访问' },
              { value: 735, name: '营销' },
              { value: 580, name: '广告' },
              { value: 484, name: '视频' },
              { value: 300, name: '搜索' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
     //   把配置项给实例对象
    myChart.setOption(option);
    // 让图表跟随屏幕自动去改变
    window.addEventListener('resize',function(){
        myChart.resize();
    })
})();

// 饼状图2
(function() {
    // 1实例化对象
   var myChart = echarts.init(document.querySelector(".pie2 .chart"));
    // 2.指定配置项
    var option = {
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        legend: {
          top: 'bottom',
          bottom:'0%',
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: "12"
          }
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: '地区分布',
            type: 'pie',
            radius: ['10%', '70%'],
            center: ['50%', '50%'],
            // 显示模式为半径模式
            roseType: "radius",
            itemStyle: {
              borderRadius: 8
            },
            // 视觉引导线长度
            labelLine :{
                // 连接图形的线条
                 length:6,
                // 连接文字的线条
                 length2:8
            },
            data: [
                { value: 30, name: '云南' },
                { value: 26, name: '北京' },
                { value: 24, name: '山东' },
                { value: 30, name: '四川' },
                { value: 42, name: '湖北' }
            ]
          }
        ]
      };
     //   把配置项给实例对象
    myChart.setOption(option);
    // 让图表跟随屏幕自动去改变
    window.addEventListener('resize',function(){
        myChart.resize();
    })
})();

// 模拟百度地图
(function() {
  // 1实例化对象
  var myChart = echarts.init(document.querySelector(".map .chart"));
  var chinaGeoCoordMap = {
    '黑龙江': [127.9688, 45.368],
    '内蒙古': [110.3467, 41.4899],
    "吉林": [125.8154, 44.2584],
    '北京市': [116.4551, 40.2539],
    "辽宁": [123.1238, 42.1216],
    "河北": [114.4995, 38.1006],
    "天津": [117.4219, 39.4189],
    "山西": [112.3352, 37.9413],
    "陕西": [109.1162, 34.2004],
    "甘肃": [103.5901, 36.3043],
    "宁夏": [106.3586, 38.1775],
    "青海": [101.4038, 36.8207],
    "新疆": [87.9236, 43.5883],
    "西藏": [91.11, 29.97],
    "四川": [103.9526, 30.7617],
    "重庆": [108.384366, 30.439702],
    "山东": [117.1582, 36.8701],
    "河南": [113.4668, 34.6234],
    "江苏": [118.8062, 31.9208],
    "安徽": [117.29, 32.0581],
    "湖北": [114.3896, 30.6628],
    "浙江": [119.5313, 29.8773],
    "福建": [119.4543, 25.9222],
    "江西": [116.0046, 28.6633],
    "湖南": [113.0823, 28.2568],
    "贵州": [106.6992, 26.7682],
    "云南": [102.9199, 25.4663],
    "广东": [113.12244, 23.009505],
    "广西": [108.479, 23.1152],
    "海南": [110.3893, 19.8516],
    '上海': [121.4648, 31.2891]
};
var chinaDatas = [
    [{
        name: '黑龙江',
        value: 0
    }],	[{
        name: '内蒙古',
        value: 0
    }],	[{
        name: '吉林',
        value: 0
    }],	[{
        name: '辽宁',
        value: 0
    }],	[{
        name: '河北',
        value: 0
    }],	[{
        name: '天津',
        value: 0
    }],	[{
        name: '山西',
        value: 0
    }],	[{
        name: '陕西',
        value: 0
    }],	[{
        name: '甘肃',
        value: 0
    }],	[{
        name: '宁夏',
        value: 0
    }],	[{
        name: '青海',
        value: 0
    }],	[{
        name: '新疆',
        value: 0
    }],[{
        name: '西藏',
        value: 0
    }],	[{
        name: '四川',
        value: 0
    }],	[{
        name: '重庆',
        value: 0
    }],	[{
        name: '山东',
        value: 0
    }],	[{
        name: '河南',
        value: 0
    }],	[{
        name: '江苏',
        value: 0
    }],	[{
        name: '安徽',
        value: 0
    }],	[{	
        name: '湖北',
        value: 0
    }],	[{
        name: '浙江',
        value: 0
    }],	[{
        name: '福建',
        value: 0
    }],	[{
        name: '江西',
        value: 0
    }],	[{
        name: '湖南',
        value: 0
    }],	[{
        name: '贵州',
        value: 0
    }],[{
        name: '广西',
        value: 0
    }],	[{
        name: '海南',
        value: 0
    }],	[{
        name: '上海',
        value: 1
    }]
];

var convertData = function(data) {
    var res = [];
    for(var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = chinaGeoCoordMap[dataItem[0].name];
        var toCoord = [116.4551,40.2539];
        if(fromCoord && toCoord) {
            res.push([{
                coord: fromCoord,
                value: dataItem[0].value
            }, {
                coord: toCoord,
            }]);
        }
    }
    return res;
};
var series = [];
[['北京市', chinaDatas]].forEach(function(item, i) {
    console.log(item)
    series.push({
            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
                period: 4, //箭头指向速度，值越小速度越快
                trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: 'arrow', //箭头图标
                symbolSize: 5, //图标大小
            },
            lineStyle: {
                normal: {
                    width: 1, //尾迹线条宽度
                    opacity: 1, //尾迹线条透明度
                    curveness: .3 //尾迹线条曲直度
                }
            },
            data: convertData(item[1])
        }, {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: { //涟漪特效
                period: 4, //动画时间，值越小速度越快
                brushType: 'stroke', //波纹绘制方式 stroke, fill
                scale: 4 //波纹圆环最大限制，值越大波纹越大
            },
            label: {
                normal: {
                    show: true,
                    position: 'right', //显示位置
                    offset: [5, 0], //偏移设置
                    formatter: function(params){//圆环显示文字
                        return params.data.name;
                    },
                    fontSize: 13
                },
                emphasis: {
                    show: true
                }
            },
            symbol: 'circle',
            symbolSize: function(val) {
                return 5+ val[2] * 5; //圆环大小
            },
            itemStyle: {
                normal: {
                    show: false,
                    color: '#f00'
                }
            },
            data: item[1].map(function(dataItem) {
                return {
                    name: dataItem[0].name,
                    value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                };
            }),
        },
        //被攻击点
        {
            type: 'scatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                period: 4,
                brushType: 'stroke',
                scale: 4
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    //offset:[5, 0],
                    color: '#0f0',
                    formatter: '{b}',
                    textStyle: {
                        color: "#0f0"
                    }
                },
                emphasis: {
                    show: true,
                    color: "#f60"
                }
            },
            symbol: 'pin',
            symbolSize: 50,
            data: [{
                name: item[0],
                value: chinaGeoCoordMap[item[0]].concat([10]),
            }],
        }
    );
});

option = {
    tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(166, 200, 76, 0.82)',
        borderColor: '#FFFFCC',
        showDelay: 0,
        hideDelay: 0,
        enterable: true,
        transitionDuration: 0,
        extraCssText: 'z-index:100',
        formatter: function(params, ticket, callback) {
            //根据业务自己拓展要显示的内容
            var res = "";
            var name = params.name;
            var value = params.value[params.seriesIndex + 1];
            res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
            return res;
        }
    },
    // backgroundColor:"#013954",
    visualMap: { //图例值控制
        min: 0,
        max: 1,
        calculable: true,
        show: true,
        color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: 'china',
        zoom: 1.2,
        label: {
            emphasis: {
                show: false
            }
        },
        // roam: true, //是否允许缩放
        itemStyle: {
            normal: {

                color: 'rgba(51, 69, 89, .5)', //地图背景色
                borderColor: '#516a89', //省市边界线00fcff 516a89
                borderWidth: 1
            },
            emphasis: {
                color: 'rgba(37, 43, 61, .5)' //悬浮背景
            }
        }
    },
    series: series
};
        
  //   把配置项给实例对象
  myChart.setOption(option);
  // 让图表跟随屏幕自动去改变
  window.addEventListener('resize',function(){
      myChart.resize();
  })
})()