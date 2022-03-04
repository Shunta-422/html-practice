$(function () {
    $("#profile").hover(function () {
        $("#profile").text("プロフィール");
    }, function () {
        $("#profile").text("PROFILE");
    });
});

// $(function () {
//     $("#prodacts").hover(function () {
//         $("#prodacts").text("成果物").on("click", function () {
//             $(".is-open").slideToggle();
//         });
//     }, function () {
//         $("#prodacts").text("PRODACTS");
//     });
// });
$(function(){
    $("#prodacts").on("click", function(){
        $(".is-open").slideToggle();
    });
})


$(function () {
    $("#github").hover(function () {
        $("#github").text("https://github.com/Shunta-422/html-practice")
            .css(p_props);
    }, function () {
        $("#github").text("Github")
            .css(init_set);
    });
});

$(function () {
    $("#qiita").hover(function () {
        $("#qiita").text("https://qiita.com/aizawa_PG")
            .css(p_props);
    }, function () {
        $("#qiita").text("Qiita")
            .css(init_set);
    });
});
var init_set = {
    "color": "palevioletred",
    "font-size": "30px",
    "font-weight": "300",
    "letter-spacing": ".4em"
}
var p_props = {
    "color": "deeppink",
    "font-size": "15px",
    "font-weight": "100",
    "letter-spacing": "0.2em"
}

