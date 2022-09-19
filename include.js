function header(){
    $.ajax({
        url: "common/header.html",
        cache: false,
        success: function(html){
            document.write(html);
        }
    });
}
function footer(){
    $.ajax({
        url: "common/footer.html",
        cache: false,
        success: function(html){
            document.write(html);
        }
    });
}
