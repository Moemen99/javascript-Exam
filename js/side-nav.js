export function close(){
    let sideNavWidh=$(".nav-menu .side-nav").outerWidth();
        $(".nav-menu").animate({ left : -sideNavWidh},500) 
        $(".accordion").addClass("fa-align-justify")
        $(".accordion").removeClass("fa-x")
        $("ul li").animate({top:300},500)
}

export function open(){
    $(".nav-menu").animate({ left : 0},500)
    $(".accordion").removeClass("fa-align-justify")
    $(".accordion").addClass("fa-x")
    for(let i=0 ;i<5 ;i++){
        $("ul li").eq(i).animate({top:0},((i+6)*100))
    }
}