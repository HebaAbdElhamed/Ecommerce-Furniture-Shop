function question(x){
    var y= document.getElementsByClassName("hidden");
    for(var i=0;i<y.length;i++){
        y[i].style.display = "none";
        document.getElementsByClassName("questi")[i].style.color= "black";
    }
    switch(x.id){
        case "one" :
            y[0].style.display = "block";
            x.parentElement.style.color= "#c19a83";
            x.style.color= "#c19a83";
            break;
        case "two" :
            y[1].style.display = "block";
            x.parentElement.style.color= "#c19a83";
            x.style.color= "#c19a83";
            break;
        case "three" :
            y[2].style.display = "block";
            x.parentElement.style.color= "#c19a83";
            x.style.color= "#c19a83";
            break;
        case "four" :
            y[3].style.display = "block";
            x.parentElement.style.color= "#c19a83";
            x.style.color= "#c19a83";
            break;        
        case "five" :
            y[4].style.display = "block";
            x.parentElement.style.color= "#c19a83";
            x.style.color= "#c19a83";
            break;
        case "six" :
            y[5].style.display = "block";
            x.parentElement.style.color= "#c19a83";
            x.style.color= "#c19a83";
            break;
        default:
            break;

    }

}