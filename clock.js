const clock = ()=>{
    
    const d = new Date();
    
    let sec = d.getSeconds();

    
    if((sec -1) % 3 == 0 || sec == 0 || sec == 1){
        var target = document.getElementById("target");
        target.className = "img2";

        var toumei = document.getElementById("toumei");
        toumei.className = "toumei";
    }
    

    else if(sec % 3 == 0){
        var target = document.getElementById("target");
        target.className = "img";

        var toumei = document.getElementById("toumei");
        toumei.className = "toumei3";

        

    }else{
        var target = document.getElementById("target");
        target.className = "img";

        var toumei = document.getElementById("toumei");
        toumei.className = "toumei2";

        
    }
      







    
  
};


setInterval(clock, 1000);

