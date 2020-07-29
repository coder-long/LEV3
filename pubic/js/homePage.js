/* ---------登录框显示------------ */
$('.uc-my').on('click', function() {
    $('.pop-box').show();
});
/* ---------登录框隐藏------------ */
$('.pop-close').on('click', function() {
    $('.pop-box').hide();
});
/* ----------注册框显示-------------------- */
$('.uc-zhuce').on('click', function() {
    $('.zhuce-box').show();
});
/* ----------注册框隐藏--------------------- */
$('.pop-close').on('click', function() {
    $('.zhuce-box').hide();
});

let url = '/api/res'
$('.zhuce-btn').on('click', function() {
    let username = $('.username').val()

    let pwd = $('.pwd').val()

    $.post(url, {
            username,
            pwd
        }, (res) => {
            console.log(res);
        })
        // if (username.length == 0 || ) {
        //     alert('账号不能为空')
        // } else {
        //     $.post(url, {
        //         username,
        //         pwd
        //     }, (res) => {
        //         console.log(res);
        //     })
        // }
})