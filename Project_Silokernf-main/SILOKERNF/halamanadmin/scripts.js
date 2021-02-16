// form search
$(".fas").click(function(){
    $(".form-control").val("");
})

// login
let state = false;
$('.span').click(function(){
    if (state) {
        $('#defaultForm-pass').attr('type', 'password');
        state = false;
    } else {
        $('#defaultForm-pass').attr('type', 'text');
        state = true
    }
});

$('.log').click(function(){
    $('.validate').val('');
})

// table
$(".delete1").click(function(){
    $('#myTableRow1').remove();
})
$(".delete2").click(function(){
    $('#myTableRow2').remove();
})
$(".delete3").click(function(){
    $('#myTableRow3').remove();
})