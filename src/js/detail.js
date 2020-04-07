// 获取 localStorage 里面的数据
const goodsInfo = JSON.parse(localStorage.getItem('goods_info'))
// console.log(goodsInfo);

// 判断一下数据
if (goodsInfo === null) {
    alert('您查看的商品详情不存在了')
    window.location.href='./list.html'
  } 

//渲染数据
let str = "";

str += `
<div class="left">
    <img src="${goodsInfo.list_url}" alt="Image To Zoom" class="example">
</div>
<div class="right">
    <p>${goodsInfo.list_name}</p>
    <p>${goodsInfo.list_desc}</p>
    <p>￥: ${goodsInfo.list_price} 元</p>
    <p>发货地址：南京市千锋教育</p>
    <p class="addCart">加入购物车</p>
    <span class="go_cart ">我的购物车 ==></span>
</div>
`

$('.box').html(str)

$('.addCart').click(() => {
    // 加入到购物车数组里面
    // 先拿到 localStorage 里面的那个数组信息
    const cartList = JSON.parse(localStorage.getItem('cartList')) || []
    // console.log(cartList.length);
    // 判断有没有这个数据
   
    //  true: 表示数组里面有这个信息
    //  false: 表示数组里面没有这个信息
    let exits = cartList.some(item => {
      // 数组里面每一个的 id === 本页面的这条数据的 id
    //   console.log(item.list_id);  
      return item.list_id === goodsInfo.list_id
    })
    // console.log(exits)
    if (exits) {
      // 表示有这个信息了, 我们要 number ++
      let data = null
      for (let i = 0; i < cartList.length; i++) {
        if (cartList[i].list_id === goodsInfo.list_id) {
          data = cartList[i]
          break
        }
      }
     console.log(data);
     data.number++;
     data.xiaoji=data.number*data.list_price
    }
    else{
        goodsInfo.number=1;
        goodsInfo.xioaji=goodsInfo.list_price ;
        goodsInfo.isSelect = false // 默认不选中
       cartList.push(goodsInfo)
    }
     // 在存储到 localStorage 里面
     localStorage.setItem('cartList', JSON.stringify(cartList))
})
$('.go_cart').on('click',function(){
    window.location.href='./cart.html'
})
// 放大镜
$(function(){
    $(".example").imagezoomsl();
});