"use strict";var flag=!0,list2=[];function data(){$.ajax({url:"../lib/list.json",dataType:"json",success:function(i){$(".pagi").pagination({pageCount:Math.ceil(i.length/9),current:1,jump:!0,coping:!0,homePage:"首页",endPage:"末页",prevContent:"上页",nextContent:"下页",callback:function(t){var n=t.getCurrent();bindHtml(i.slice(9*(n-1),9*n))}}),bindHtml(i.slice(0,9)),list2=i}})}function bindHtml(t){var n="";t.forEach(function(t){n+='\n    <li data-id="'.concat(t.list_id,'">\n        <img src="').concat(t.list_url,'" alt="">\n        <p>').concat(t.list_name,"</p>\n        <p>").concat(t.list_desc,"</p>\n        <p>").concat(t.list_price,"</p>\n        <p>").concat(t.list_gwc,"</p>\n      </li>\n    ")}),$(".box > ul").html(n)}data(),$(".pagi").pagination({pageCount:50,current:1,jump:!0,coping:!0,homePage:"首页",endPage:"末页",prevContent:"上页",nextContent:"下页",callback:function(t){console.log(t.getCurrent())}});var btn=document.querySelector(".btn");btn.onclick=function(){flag=!flag,list2.sort(function(t,n){return!0===flag?t.list_price-n.list_price:n.list_price-t.list_price}),$(".pagi").pagination({pageCount:Math.ceil(list2.length/9),current:1,jump:!0,coping:!0,homePage:"首页",endPage:"末页",prevContent:"上页",nextContent:"下页",callback:function(t){var n=t.getCurrent();bindHtml(list2.slice(9*(n-1),9*n))}}),bindHtml(list2.slice(0,9))},$(".box > ul").on("click","li",function(){for(var t=$(this).data("id"),n={},i=0;i<list2.length;i++)if(list2[i].list_id===t){n=list2[i];break}localStorage.setItem("goods_info",JSON.stringify(n)),window.location.href="./detail.html"});