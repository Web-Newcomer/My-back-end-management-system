import Mock from 'mockjs'

// 图表数据
let List = []
export default {
  getStatisticalData: () => {
    for (let i = 0; i < 7; i++) {
      List.push(
        Mock.mock({
          苹果: Mock.Random.float(2000, 8000, 0, 2),
          vivo: Mock.Random.float(2000, 8000, 0, 2),
          oppo: Mock.Random.float(2000, 8000, 0, 2),
          魅族: Mock.Random.float(2000, 8000, 0, 2),
          三星: Mock.Random.float(2000, 8000, 0, 2),
          小米: Mock.Random.float(2000, 8000, 0, 2)
        })
      )
    }
    return {
      code: 20000,
      data: {
        // 饼图
        mallData: [
          {
            name: '小米',
            value: Mock.Random.float(2000, 8000, 0, 2)
          },
          {
            name: '苹果',
            value: Mock.Random.float(2000, 8000, 0, 2)
          },
          {
            name: 'vivo',
            value: Mock.Random.float(2000, 8000, 0, 2)
          },
          {
            name: 'oppo',
            value: Mock.Random.float(2000, 8000, 0, 2)
          },
          {
            name: '魅族',
            value: Mock.Random.float(2000, 8000, 0, 2)
          },
          {
            name: '三星',
            value: Mock.Random.float(2000, 8000, 0, 2)
          }
        ],
        // 柱状图
        userData: [
          {
            date: '周一',
            new: 5,
            active: 200
          },
          {
            date: '周二',
            new: 10,
            active: 500
          },
          {
            date: '周三',
            new: 12,
            active: 550
          },
          {
            date: '周四',
            new: 60,
            active: 800
          },
          {
            date: '周五',
            new: 65,
            active: 550
          },
          {
            date: '周六',
            new: 53,
            active: 770
          },
          {
            date: '周日',
            new: 33,
            active: 170
          }
        ],
        // 折线图
        orderData: {
          date: ['2021-12-01', '2021-12-02', '2021-12-03', '2021-12-04', '2021-12-05', '2021-12-06', '2021-12-07'],
          data: List
        },
        tableData: [
          {
            name: 'oppo',
            todayBuy: Mock.Random.float(2000, 8000, 0, 2),
            monthBuy: Mock.Random.float(3000, 5000, 0, 2),
            totalBuy: Mock.Random.float(40000, 1000000, 0, 2)
          },
          {
            name: 'vivo',
            todayBuy: Mock.Random.float(2000, 8000, 0, 2),
            monthBuy: Mock.Random.float(3000, 5000, 0, 2),
            totalBuy: Mock.Random.float(40000, 1000000, 0, 2)
          },
          {
            name: '苹果',
            todayBuy: Mock.Random.float(2000, 8000, 0, 2),
            monthBuy: Mock.Random.float(3000, 5000, 0, 2),
            totalBuy: Mock.Random.float(40000, 1000000, 0, 2)
          },
          {
            name: '小米',
            todayBuy: Mock.Random.float(2000, 8000, 0, 2),
            monthBuy: Mock.Random.float(3000, 5000, 0, 2),
            totalBuy: Mock.Random.float(40000, 1000000, 0, 2)
          },
          {
            name: '三星',
            todayBuy: Mock.Random.float(2000, 8000, 0, 2),
            monthBuy: Mock.Random.float(3000, 5000, 0, 2),
            totalBuy: Mock.Random.float(40000, 1000000, 0, 2)
          },
          {
            name: '魅族',
            todayBuy: Mock.Random.float(2000, 8000, 0, 2),
            monthBuy: Mock.Random.float(3000, 5000, 0, 2),
            totalBuy: Mock.Random.float(40000, 1000000, 0, 2)
          }
        ]
      }
    }
  }
}
