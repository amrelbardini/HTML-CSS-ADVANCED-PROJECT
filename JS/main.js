$(document).ready(function(){  
   //load more button
    let loadMore_btn=$("#load_more");
    loadMore_btn.click(function(){
        let hiddenItem=$(".item.hidden");
        hiddenItem.fadeToggle();
    });
});




