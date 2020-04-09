"use strict";var cartList=JSON.parse(localStorage.getItem("cartList"));function bindHtml(){var t=cartList.every(function(t){return!0===t.isSelect}),n='\n    <div class="top">\n      <input class="selectAll" type="checkbox" '.concat(t?"checked":"",'>   全选\n    </div>\n    <ul class="center">\n  ');cartList.forEach(function(t){n+='\n      <li>\n        <div class="select">\n          <input data-id='.concat(t.list_id,' class="selectOne" type="checkbox" ').concat(t.isSelect?"checked":"",'>\n        </div>\n        <div class="info">\n          <img src="').concat(t.list_url,'" alt="">\n          <p>').concat(t.list_name,'</p>\n        </div>\n        <p class="price">').concat(t.list_price,'</p>\n        <div class="number">\n          <button class="sub btn-info" data-id=').concat(t.list_id,'>-</button>\n          <input type="text" value="').concat(t.number,'">\n          <button class="add btn-info" data-id=').concat(t.list_id,'>+</button>\n        </div>\n        <p class="xiaoji">￥： ').concat(t.xiaoji,'</p>\n        <button  class="del btn btn-danger" data-id=').concat(t.list_id,">删除</button>\n      </li>\n    ")});var c=cartList.filter(function(t){return t.isSelect}),i=0,a=0;c.forEach(function(t){i+=t.number,a+=t.xiaoji}),n+='\n    </ul>\n    <div class="bottom">\n      <p>选中商品数量  <span>'.concat(i,"</span></p>\n      <p>总价： <span>￥： ").concat(a,'</span></p>\n      <button class="pay btn-success" ').concat(c.length?"":"disabled",'>去支付</button>\n      <button class="clear btn-warning">清空购物车</button>\n    </div>\n  '),$(".cart").html(n)}function bindEvent(){$(".cart").on("change",".selectAll",function(){var n=this;cartList.forEach(function(t){t.isSelect=n.checked}),bindHtml(),localStorage.setItem("cartList",JSON.stringify(cartList))}),$(".cart").on("change",".selectOne",function(){var n=$(this).data("id");cartList.forEach(function(t){t.list_id===n&&(t.isSelect=!t.isSelect)}),bindHtml(),localStorage.setItem("cartList",JSON.stringify(cartList))}),$(".cart").on("click",".sub",function(){var n=$(this).data("id");cartList.forEach(function(t){t.list_id===n&&(1<t.number?t.number--:alert("不能再减了"),t.xiaoji=t.number*t.list_price)}),bindHtml(),localStorage.setItem("cartList",JSON.stringify(cartList))}),$(".cart").on("click",".add",function(){var n=$(this).data("id");cartList.forEach(function(t){t.list_id===n&&(t.number++,t.xiaoji=t.number*t.list_price)}),bindHtml(),localStorage.setItem("cartList",JSON.stringify(cartList))}),$(".cart").on("click",".del",function(){var n=$(this).data("id"),t=JSON.parse(localStorage.getItem("cartList"));t=t.filter(function(t){return t.list_id!==n}),localStorage.setItem("cartList",JSON.stringify(t)),bindHtml(),window.location.reload()}),$(".cart").on("click",".clear",function(){localStorage.removeItem("cartList"),bindHtml(),window.location.reload()})}cartList?(bindHtml(),bindEvent()):alert("您的购物车为空, 快去选购把");