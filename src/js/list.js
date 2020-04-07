//准备一个变量
var flag = true
// 准备一个变量接收数组
var list2 = []
// 第一次渲染页面
data()
function data() {
  $.ajax({
    url: '../lib/list.json',
    dataType: 'json',
    success: function (res) {
      // console.log(res)
      $('.pagi').pagination({
        pageCount: Math.ceil(res.length / 9), // 总页数
        current: 1, // 当前页
        jump: true,
        coping: true,
        homePage: '首页', 
        endPage: '末页', 
        prevContent: '上页',
        nextContent: '下页',
        callback: function (api) { // 当你切换页面的时候会触发
          // api.getCurrent() 获取当前是第几页
          let curr = api.getCurrent()
          // 根据是第几页, 从总数组里面筛选出一部分数据
          var list = res.slice((curr - 1) * 9, curr * 9)
          // console.log(list)
          // 每次使用分页器切换的时候渲染一次
          bindHtml(list)
        }
      })
      // 先把第一页的数据渲染一次
      bindHtml(res.slice(0, 9))
      
      //给全局变量赋值
      list2 = res
    }
  })
}

function bindHtml(list) {
//   console.log(list)
  // 根据 list 数组渲染页面就可以了
  let str = ''
  // 渲染
  list.forEach(item => {
    str += `
    <li data-id="${ item.list_id }">
        <img src="${item.list_url}" alt="">
        <p>${item.list_name}</p>
        <p>${item.list_desc}</p>
        <p>${item.list_price}</p>
        <p>${item.list_gwc}</p>
      </li>
    `
  })

  //  填充数据
  $('.box > ul').html(str) 
}

    // 分页器
    $('.pagi').pagination({
    pageCount: 50, // 总页数
    current: 1, // 当前页
    jump: true,
    coping: true,
    homePage: '首页', // 首页按钮的文本
    endPage: '末页', // 末页按钮的文本
    prevContent: '上页',
    nextContent: '下页',
    callback: function (api) { // 当你切换页面的时候会触发
        // api.getCurrent() 获取当前是第几页
        console.log(api.getCurrent())
    }
    })


// 排序
var btn = document.querySelector('.btn')
btn.onclick = function () {
  // 让准备好的变量改变
  flag = !flag

  // 把数组重组
  list2.sort(function (a, b) {
    if (flag === true) {
      return a.list_price - b.list_price
    } else {
      return b.list_price - a.list_price
    }
  })

  // console.log(list)

  $('.pagi').pagination({
    pageCount: Math.ceil(list2.length / 9), // 总页数
    current: 1, // 当前页
    jump: true,
    coping: true,
    homePage: '首页', // 首页按钮的文本
    endPage: '末页', // 末页按钮的文本
    prevContent: '上页',
    nextContent: '下页',
    callback: function (api) { // 当你切换页面的时候会触发
      let curr = api.getCurrent()
      // console.log(curr)
      var list = list2.slice((curr - 1) * 9, curr * 9)
      // 3-2. 每次使用分页器切换的时候渲染一次
      bindHtml(list)
    }
  })

  // 先把第一页的数据渲染一次
  bindHtml(list2.slice(0, 9))
}

$('.box > ul').on('click','li',function(){
  // console.log(this);
  
  const id = $(this).data('id')
  // console.log(id);

  // 从总的数据里面找到 id 配套的哪一个数据
    let data = {}

    for (let i = 0; i < list2.length; i++) {
      if (list2[i].list_id === id) {
        data = list2[i]
        break
      }
    }
    // console.log(data);
    localStorage.setItem('goods_info',JSON.stringify(data));
    window.location.href='./detail.html'
    
})