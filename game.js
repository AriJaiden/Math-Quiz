P1=localStorage.getItem("name1");
P2=localStorage.getItem("name2");

var P1score= 0;
var P2score= 0;

document.getElementById("p1").innerHTML=P1;
document.getElementById("p2").innerHTML=P2;
document.getElementById("p1-score").innerHTML=P1score;
document.getElementById("p2-score").innerHTML=P2score;
document.getElementById("Qturn").innerHTML="Question Turn-"+P1;
document.getElementById("Aturn").innerHTML="Answer Turn-"+P2;

function Send() {
    number1= document.getElementById("N1").value;
    number2= document.getElementById("N2").value;
    correct= Number(number1)+Number(number2)
    question="<label> Q. "+number1+"+"+number2+"</label>";
    answer="<br>Answer- <input type='text' id='The-Answer'>";
    Finish="<br> <button onclick='Check()'>Check</button>";
    document.getElementById("The-Game").innerHTML=question+answer+Finish;
    document.getElementById("N1").value="";
    document.getElementById("N2").value="";
}
Qturn= "player1";
Aturn= "player2";
    function Check(){
        answer=document.getElementById("The-Answer").value;
        if(correct==answer){
         console.log("-it worked- correct answer"+Qturn+Aturn);
            if(Aturn=="player1"){
                P1score=P1score+1;
                console.log("player 1 score "+P1score);
                document.getElementById("p1-score").innerHTML=P1score;
                window.alert("You guessed the answer correctly "+P1);
            }
            else{
                P2score=P2score+1;
                console.log("player 2 score"+P2score);
                document.getElementById("p2-score").innerHTML=P2score;
                window.alert("You guessed the answer correctly "+P2);
            }
        }
        else{
            window.alert("You guessed the answer wrong, Better luck next time");
        }
        if(Qturn=="player1"){
            Qturn="player2";
            document.getElementById("Qturn").innerHTML="Question Turn-"+P2;
        }
        else{
            Qturn="player1";
            document.getElementById("Qturn").innerHTML="Question Turn-"+P1;
        }
        if(Aturn=="player1"){
            Aturn="player2";
            document.getElementById("Aturn").innerHTML="Answer Turn-"+P2;
        }
        else{
            Aturn="player1";
            document.getElementById("Aturn").innerHTML="Answer Turn-"+P1;
        }
        document.getElementById("The-Game").innerHTML=""
    }
