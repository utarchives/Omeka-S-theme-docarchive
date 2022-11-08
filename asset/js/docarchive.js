$(document).ready( function() {
    $("#show-children-button").click(function(){
        var url = $(this).data('url');
        window.open(url);
        // location.href = url;
    });
    $("#show-directory-search-button").click(function(){
        var url = $(this).data('url');
        location.href = url;
    });
    $("#media-jump-button").click(function(){
        var url = $(this).data('url');
        location.href = url;
    });
});