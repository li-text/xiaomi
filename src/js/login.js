var nameInp = document.querySelector('.username')
var passInp = document.querySelector('.password')
var errorInfo = document.querySelector('span')
// 1-1. 绑定登录事件
$('.btn_dl').on('click',function(e){

    e = e || window.event
    e.preventDefault()
    // 2. 获取用户输入的内容
    // var uname = $('.username')
    var uname = nameInp.value
    var upass = passInp.value

    console.log(uname);
    
    // 3. 表单验证
    if (!uname || !upass) {
    // 你没有填写 uname 或者 没有填写 upass
    // 就会执行这个 if 条件
    alert('请完整填写表单')
    // 这里表示没有完整填写表单, 后面的代码就没有必要执行了
    return
    }

    // 4. 发送请求
    //   把用户名和密码发送到后端
    // 4-1. 创建 ajax 对象
    var xhr = new XMLHttpRequest()

    // 4-2. 配置本次请求的信息
    xhr.open('POST', '/login')

    // 4-3. 接受响应
    xhr.onload = function () {
        console.log( xhr.responseText);
        // console.log(res);
        var res = JSON.parse(xhr.responseText)
        
        if (res.code === 0) {
            // 清空表单
            $('#listForm')[0].reset();
            // 提示错误
            // 让这个 span 标签显示出来就可以了
            errorInfo.style.display = 'block'
            
        } else {
            //登录成功之后去到主页
            window.location.href = './index.html'
        }
    }
    // 4-4. 设置请求头
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')

    // 4-5. 发送请求
    //      在 () 里面携带参数
    // xhr.send('username=' + uname + '&password=' + upass)
    xhr.send(`username=${uname}&password=${upass}`)
})





// 绑定注册事件
$('.btn_zc').on('click',function(e){
    e = e || window.event
    e.preventDefault()
    // 2. 获取用户输入的内容
    // var uname = $('.username')
    var uname = nameInp.value
    var upass = passInp.value

    console.log(uname);
    
    // 3. 表单验证
    if (!uname || !upass) {
    // 你没有填写 uname 或者 没有填写 upass
    // 就会执行这个 if 条件
    alert('请完整填写表单')
    // 这里表示没有完整填写表单, 后面的代码就没有必要执行了
    return
    }

    // 4. 发送请求
    //   把用户名和密码发送到后端
    // 4-1. 创建 ajax 对象
    var xhr = new XMLHttpRequest()

    // 4-2. 配置本次请求的信息
    xhr.open('POST', '/zhuce')

    // 4-3. 接受响应
    xhr.onload = function () {
        console.log( xhr.responseText);
        // console.log(res);
        // var res = JSON.parse(xhr.responseText)
        // 清空表单
        window.location.reload()

        alert('注册成功，请登录')
    }

    // 4-4. 设置请求头
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')

  
    xhr.send(`username=${uname}&password=${upass}`)
})



