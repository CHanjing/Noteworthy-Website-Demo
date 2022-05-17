pages = ["home-page", "contact-page", "members-page", "alumni-page", "officers-page", "performances-page"];

function hide(str){
    document.getElementById(str).style.display = "none";
}

function unhide(str){
    document.getElementById(str).style.display = "block";
}

function show(str){
    for(i=0; i<pages.length; i++){
        if(str !== pages[i]){
            hide(pages[i]);
            console.log(`hid ${pages[i]}`);
        }
    }
    unhide(str);
}

function loadFooter(){
    alert(typeof jQuery);
}

function red(){
    $(document).ready(function(){ 
        $("div").css("border", "3px solid red");
    });
}