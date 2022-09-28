let open_sidebar_button=document.getElementById("side_bar_button");
let close_sidebar_button=document.getElementById("close_sidebar_button");
let sidebar_panel_content=document.getElementById("sidebar_panel");
window.onresize=function(){
    if(screen.width>=730)
    sidebar_panel_content.style.right='-90%';
    
}
open_sidebar_button.onclick=function(){    
    if(sidebar_panel_content.style.right < '0'){
        sidebar_panel_content.style.right='0';
        
    }
}
close_sidebar_button.onclick=function(){
    if(sidebar_panel_content.style.right >='0'){
        sidebar_panel_content.style.right='-90%';
        
    }
}