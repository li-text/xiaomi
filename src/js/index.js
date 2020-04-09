// 第一块区域渲染，导航栏区域
getList()

function getList() {
  $.ajax({
    url: '../lib/nav_top.json',
    dataType: 'json',
    success: function (res) {
      // console.log(res)
      let str = ''
      // 渲染一级的 li
      res.forEach(item => {
        str += `<li>${ item.name }</li>`
      })
      // 填充到 nav_top 里面的 ul 里面
      $('.nav_top > ul')
        .html(str)
        .on({
          mouseenter: () => $('.nav_box').stop().slideDown(),
          mouseleave: () => $('.nav_box').stop().slideUp()
        })
        .children('li') // 找到所有的一级菜单下的 li
        .on('mouseover', function () {
          // 知道自己移入的时哪一个 li
          const index = $(this).index()
          //找到要渲染的数组
          const list = res[index].list
          let str = ''
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
          // 填充到页面里面
          $('.nav_box > ul').html(str)
        })
      // 给 nav_box 添加一个移入移出事件
      $('.nav_box')
        .on({
          mouseover: function () { $(this).finish().show() },
          mouseout: function () { $(this).finish().slideUp() }
        })
    }
  })
}
// 轮播图右边的
get_left()

function get_left() {
  $.ajax({
    url: '../lib/right.json',
    dataType: 'json',
    success: function (res) {
      // console.log(res)
      // 准备一个空字符串
      let str = ''
      // 渲染一级的 li
      res.forEach(item => {
        str += `<li>${ item.name }</li>`
      })
      // 填充到 nav_top 里面的 ul 里面
      $('.lbt_l > ul')
        .html(str)
        .on({
          mouseenter: () => $('.lbt_r').stop().slideDown(),
          mouseleave: () => $('.lbt_r').stop().slideUp()
        })
        .children('li') // 找到所有的一级菜单下的 li
        .on('mouseover', function () {
          // 知道自己移入的时哪一个 li
          const index = $(this).index()
          //找到要渲染的数组
          const list = res[index].list
          // console.log(list)
          let str = ''
          // 进行组装
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
          //  填充到页面里面
          $('.lbt_r > ul').html(str)
        })
      // 给 nav_box 添加一个移入移出事件
      $('.lbt_r')
        .on({
          mouseover: function () { $(this).finish().show() },
          mouseout: function () { $(this).finish().slideUp() }
        })
    }
  })
}
$('.lbt_r>ul').on('click','li',function(){
  window.location.href='http://www.liling.com:5000/pages/list.html';
})

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


//倒计时
//声明未来时间
var future_time=new Date('2020-4-10 12:00:00');
//获取页面元素
var nums=document.querySelectorAll('.num');
function print_time(){
  var now=new Date();
  //剩余时间
  var shengyu=Math.ceil((future_time-now)/1000);
  //判断剩余时间
  if(shengyu>=0){
    var hour=Math.floor(shengyu/3600);
    var min=Math.floor(shengyu%3600/60);
    var sec=shengyu%60;
    var str=''+gtwo(hour)+gtwo(min)+gtwo(sec);
    for(var i=0;i<str.length;i++){
      nums[i].innerText=str.charAt(i);
    }
  }
}
//保持两位数
function gtwo(n){
  return n>10?n:"0"+n;
}
//定时
var timer=setInterval(print_time,1000);

//右边的轮播图
var mySwiper = new Swiper ('.small1', {
  // direction: 'vertical', // 垂直切换选项
  loop: true, // 循环模式选项
  
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

//手机图片渲染
function phone(){
  $.ajax({
    url:'../lib/main1.json',
    dataType:'json',
    success:function(res){
      // console.log(res);
      let str='';
      res.forEach(item=>{
        str+=`
       <li>
        <img src="${item.list_url}" alt="">
        <p>${item.list_name}</p>
        <span>${item.list_js}</span>
        <h6>${item.list_price}</h6>
      </li> 
        `
      })
      $('.m52>ul').html(str);  
    }
  })
}

phone();

//渲染家电
function getList1(){
  $.ajax({
      url:"../lib/jiadian.json",
      dataType:'json',
      success:function(res){
          // console.log(res);
       let str=''  
       res.forEach(item => {
        //  console.log(item);
         
           str+=
           `
           <li>
           <img src="${item.url}" alt="">
         </li>
         `
       });

          $('.a1>ul').html(str);

       }
      
  })
}
getList1()

//电视
function getList2(){
  $.ajax({
    url:'../lib/remen.json',
    dataType:'json',
    success:function(res){
      // console.log(res);
      let str=''
     res.forEach(function(item){
      // console.log(item);
      str+=`
      <li>
        <img src="${item.url}" alt="">
        <p>${item.name}</p>
        <p>${item.js}</p>
        <div class='money'>${item.price}</div>

      </li>
      `
     })
      $('.a2>ul').html(str)
      
    }
  })
}
getList2();
//影音
function getList3(){
  $.ajax({
    url:'../lib/yinying.json',
    dataType:'json',
    success:function(res){
      // console.log(res);
      let str=''
     res.forEach(function(item){
      // console.log(item);
      str+=`
      <li>
        <img src="${item.url}" alt="">
        <p>${item.name}</p>
        <p>${item.js}</p>
        <div class='money'>${item.price}</div>

      </li>
      `
     })
      $('.a3>ul').html(str)
      
    }
  })
}
getList3();

//点击事件热门，电视影音
$('.d1').mouseover(function(){
  $('.a2').show();
  $('.a3').hide() 
  $('.d1').css('color',"orange").css('text-decoration','underline')
})

$('.d1').mouseout(function(){
  $('.a2').finish();
  $('.d1').css('text-decoration','none').css('color',"black");
})

$('.d2').mouseover(function(){
  $('.a2').hide();
  $('.a3').show()
  $('.d2').css('color',"orange").css('text-decoration','underline').css('display','block')
})

$('.d2').mouseout(function(){
  $('.a3').finish();
  $('.d2').css('text-decoration','none').css('color',"black");
})

//回到顶部
$(window).scroll(()=>{
  if($(window).scrollTop()>=200){
    $('.back_top').show()
  }
  else{
    $('.back_top').hide()
  }
})
$('.back_top').click(function(){
  $('html').animate({
    scrollTop:0
  },1000)
})