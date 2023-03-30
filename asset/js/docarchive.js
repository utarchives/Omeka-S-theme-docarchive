// 資料群階層表示状態
let hideSideDivFlg = false;
// ボタン定義
let btn = $("<button>");
$(document).ready( function() {
    $("#show-children-button").click(function(){
        var url = $(this).data('url');
        location.href = url;
    });
    $("#show-directory-search-button").click(function(){
        var url = $(this).data('url');
        location.href = url;
    });
    $("#media-jump-button").click(function(){
        var url = $(this).data('url');
        location.href = url;
    });
    // 資料群階層表示ボタン
    $("#chBtnDiv").append(btn);
    btn.attr("id", "chBtn");
    btn.attr("class", "btn-sm btn-secondary")
    btn.attr("style", "margin-left: 15px")
    hideSideDivFlg = localStorage.getItem('hideSideDivFlg') == 1 ? false : true;
    // 資料群階層初期設定
    toggleSideDiv();
    // ボタンクリック
    $('#chBtn').on('click', function() {
        toggleSideDiv()
    });
});
/**
 * 資料群階層表示非表示
 */
function toggleSideDiv(){
    // 表示
    if(hideSideDivFlg){
        $("#side_div").show();
        $("#main_div").attr("class", "col-md-8");
        $('#chBtn').html('<i class="fas fa-angle-double-left"></i> 資料群階層を閉じる')
        btn.attr("style", "")
        hideSideDivFlg = false;
        localStorage.setItem('hideSideDivFlg', 0);
    }
    // 非表示
    else {
        $("#side_div").hide();
        $("#main_div").attr("class", "col-md-12");
        btn.attr("style", "margin-left: 15px")
        $('#chBtn').html('資料群階層を開く <i class="fas fa-angle-double-right"></i>')
        hideSideDivFlg = true;
        localStorage.setItem('hideSideDivFlg', 1);
    }
}