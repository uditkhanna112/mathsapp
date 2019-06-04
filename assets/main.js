 var playing=false;
    var score;
    var correct;
    document.getElementById("start").onclick=function(){
        if(playing==true){
            location.reload();
        }
        else{
            score=0;
    playing=true;
                                    document.getElementById("start").innerHTML="Reset Game" ;
            document.getElementById("timeremain").style.display="block";
            timeremain=60; 
            document.getElementById("timeremaining").innerHTML=timeremain;
                        document.getElementById("gameover").style.display="none";
            startCountDown();
            
            generateQA();
            
            for(j=1;j<5;j++){
            document.getElementById("box"+j).onclick=function(){
                if(playing==true){
                    if(this.innerHTML==correct){
                        score=score+4; 
        document.getElementById("scorevalue").innerHTML=score;
                
                        document.getElementById("wrong").style.display="none";
                        document.getElementById("correct").style.display="block";                                                setTimeout(function(){
                        document.getElementById("correct").style.display="none";
                            
                        },1000);
                        generateQA();
                    }
                    else{
                        score--;
                        document.getElementById("scorevalue").innerHTML=score;
        
                        generateQA();
                        document.getElementById("correct").style.display="none";
                        document.getElementById("wrong").style.display="block";
                                                setTimeout(function(){
                        document.getElementById("wrong").style.display="none";
                            
                        },1000);
                    }
                }
            }
            }
        }
        
    }
    function startCountDown(){
        action=setInterval(function(){
            timeremain-=1;
            document.getElementById("timeremaining").innerHTML=timeremain;
            
        if(timeremain == 0){
            stopCountDown();
            if(score>100){
            document.getElementById("gameover").style.display="block";
   document.getElementById("gameover").innerHTML="<h1>Grade:Excellent</h1><h2>Game Over!</h2><p>Your Score is"+score+"</p>";
            }
            
            if((score>50)&&(score<100)){
            document.getElementById("gameover").style.display="block";
                
   document.getElementById("gameover").innerHTML="<h1>Grade:-Good</h1><h2>Game Over!</h2><p>Your Score is"+score+"</p>";
            }if(score<50){
            document.getElementById("gameover").style.display="block";
   document.getElementById("gameover").innerHTML="<h1>Grade:-Poor</h1><h2>Game Over!</h2><p>Your Score is"+score+"</p>";
            }
            
         document.getElementById("timeremain").style.display="none";
             document.getElementById("wrong").style.display="none";
             document.getElementById("correct").style.display="none";
            playing=false;
                document.getElementById("start").innerHTML="Start Game" ;
        }
        },1000);
    }
    function stopCountDown(){
        clearInterval(action)
    }
    function generateQA(){
                var x = 1+Math.round(9*Math.random())
         var y = 1+Math.round(9*Math.random())
         document.getElementById("question").innerHTML=x+"X"+y;
         var pos=1+Math.round(3*Math.random())
         correct=x*y;
        var answers=[correct];
        document.getElementById("box"+pos).innerHTML=correct;
        for(i=1;i<5;i++){
            if(i!=pos){
                var wrong;
                do{
                    wrong=(1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
                }
                while(answers.indexOf(wrong)>-1)
                    document.getElementById("box"+i).innerHTML=wrong;
                answers.push(wrong);
            }
        }
        
    }