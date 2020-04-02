// 第一块区域渲染，导航栏区域
getList()

function getList() {
  $.ajax({
    url: '../lib/nav_top.json',
    dataType: 'json',
    success: function (res) {
      console.log(res)

      // 4-1. 准备一个空字符串
      let str = ''

      // 4-2. 渲染一级的 li
      res.forEach(item => {
        str += `<li>${ item.name }</li>`
      })

      // 4-3. 填充到 nav_top 里面的 ul 里面
      $('.nav_top > ul')
        .html(str)
        .on({
          mouseenter: () => $('.nav_box').stop().slideDown(),
          mouseleave: () => $('.nav_box').stop().slideUp()
        })
        .children('li') // 找到所有的一级菜单下的 li
        .on('mouseover', function () {
          // 5-1. 知道自己移入的时哪一个 li
          const index = $(this).index()
          // 5-2. 找到要渲染的数组
          const list = res[index].list
          // 5-3. 用我们找到的数组把 nav_box 位置渲染了就可以了
          let str = ''

          // 5-4. 进行组装
          list.forEach(item => {
            str += `
              <li>
                <div>
                  <img src="${ item.list_url }" alt="">
                </div>
                <p class="title">${ item.list_name }</p>
                <span class="price">${ item.list_price }</span>
              </li>
            `
          })

          // 5-5. 填充到页面里面
          $('.nav_box > ul').html(str)
        })

      // 4-4. 给 nav_box 添加一个移入移出事件
      $('.nav_box')
        .on({
          mouseover: function () { $(this).finish().show() },
          mouseout: function () { $(this).finish().slideUp() }
        })
    }
  })
}


// 第二块区域渲染，轮播图右边的
get_left()

function get_left() {
  $.ajax({
    url: '../lib/right.json',
    dataType: 'json',
    success: function (res) {
      console.log(res)

      // 4-1. 准备一个空字符串
      let str = ''

      // 4-2. 渲染一级的 li
      res.forEach(item => {
        str += `<li>${ item.name }</li>`
      })

      // 4-3. 填充到 nav_top 里面的 ul 里面
      $('.lbt_l > ul')
        .html(str)
        .on({
          mouseenter: () => $('.lbt_r').stop().slideDown(),
          mouseleave: () => $('.lbt_r').stop().slideUp()
        })
        .children('li') // 找到所有的一级菜单下的 li
        .on('mouseover', function () {
          // 5-1. 知道自己移入的时哪一个 li
          const index = $(this).index()
          // 5-2. 找到要渲染的数组
          const list = res[index].list
          // console.log(list)
          // 5-3. 用我们找到的数组把 nav_box 位置渲染了就可以了
          let str = ''

          // 5-4. 进行组装
          list.forEach(item => {
            str += `
              <li>
                <div>
                  <img src="${ item.list_url }" alt="">
                </div>
                <span class="title">${ item.list_name }</span>
              </li>
            `
          })

          // 5-5. 填充到页面里面
          $('.lbt_r > ul').html(str)
        })

      // 4-4. 给 nav_box 添加一个移入移出事件
      $('.lbt_r')
        .on({
          mouseover: function () { $(this).finish().show() },
          mouseout: function () { $(this).finish().slideUp() }
        })
    }
  })
}


// 轮播图
var mySwiper = new Swiper ('.lbt_big', {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay:true, //自动播放
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
  })   
  //鼠标覆盖停止自动切换
mySwiper.el.onmouseover = function(){
    mySwiper.autoplay.stop();
}
  
  //鼠标离开开始自动切换
mySwiper.el.onmouseout = function(){
    mySwiper.autoplay.start();
}     