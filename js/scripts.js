$(document).ready(function(){
    $(".dev-con").click(function(){
        $(".dev-img").toggle(function(){
            $(".paragraph-dev").toggle();
        });
    });
});
$(document).ready(function(){
    $(".design-con").click(function(){
        $(".paragraph-des").toggle(function(){
            $(".design-img").toggle();
        });
    });
});


$(document).ready(function(){
    $(".product-con").click(function(){
        $(".paragraph-prod").toggle(function(){
            $(".prod-img").toggle();
        });
    });
});