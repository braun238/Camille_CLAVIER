var answers=new Array();
var validAnswers=new Array();
var points=0;
var number=1;
var numberAnswers=0;
let image=document.getElementById("img")

function changeAnswer(Element){
    if (document.getElementById(Element).classList.contains("activeAnswer")){
        document.getElementById(Element).classList.add("passiveAnswer");
        document.getElementById(Element).classList.remove("activeAnswer");
        answers.splice(answers.indexOf(parseInt(getNumber(Element))),1);
    }
    else{
        document.getElementById(Element).classList.remove("passiveAnswer");
        document.getElementById(Element).classList.add("activeAnswer");
        answers.push(parseInt(getNumber(Element)));
    }
}

function resetAnswers(){
    var mydata = JSON.parse(questions);
    for (let step = 1; step <=5; step++){
        document.getElementById("answer"+step).classList.add("passiveAnswer");
        document.getElementById("answer"+step).classList.remove("activeAnswer");
    };
    validAnswers=[];
    answers=[];
}

function checkAnswers(){
    for (let step = 0; step < answers.length; step++){
        if(validAnswers.includes(answers[step])){
            points+=1;
        }
        if(!(validAnswers.includes(answers[step]))){
            points-=1;
        }
    };
    nextQuestion()
}

function getNumber(Element){
    let lenghtElement=Element.length;
    return(Element[lenghtElement-1]);
}

function readQuestions(){
    var mydata = JSON.parse(questions);
    if(number<=mydata.length){
        document.getElementById("question").innerHTML= mydata[number-1]["question"];
        document.getElementById("answer1").innerHTML= mydata[number-1]["answers"][0];
        document.getElementById("answer2").innerHTML= mydata[number-1]["answers"][1];
        document.getElementById("answer3").innerHTML= mydata[number-1]["answers"][2];
        document.getElementById("answer4").innerHTML= mydata[number-1]["answers"][3];
        document.getElementById("answer5").innerHTML= mydata[number-1]["answers"][4];

        
        if (mydata[number-1]["picture"]){
            let adress=mydata[number-1]['picture'];
            let instruction="url('."+adress+"')";
            if(!(document.getElementById("img"))){
                document.getElementById("window").insertAdjacentElement('afterbegin',image);
            };
            document.getElementById("img").style.backgroundImage = instruction;
            document.getElementById("img").style.visibility="visible";
            
        }
        else{
            /*document.getElementById("img").style.visibility="hidden";*/
            if((document.getElementById("img"))){
                document.getElementById("window").removeChild(image);
            };
        }

        for (let step = 0; step < mydata[number-1]["validAnswers"].length; step++){
            validAnswers.push(mydata[number-1]["answers"].indexOf(mydata[number-1]["validAnswers"][step])+1)
        };
    }
}

function nextQuestion(){
    var mydata = JSON.parse(questions);
    number+=1;
    resetAnswers();
    readQuestions();
    if (number>mydata.length){
        document.getElementById("textScoreScreen").innerHTML= "Votre score est de "+points+"/"+getMaxPoints();
        document.getElementById("scoreScreen").style.visibility = "visible";
        points=0;
    }
}

function reload(){
    number=1;
    points=0;
    answers=[];
    validAnswers=[];
    document.getElementById("scoreScreen").style.visibility = "hidden";
    readQuestions();
}

function getMaxPoints(){
    numberAnswers=0;
    var mydata = JSON.parse(questions);
    for (let step = 0; step < mydata.length; step++){
        console.log("in1")
        numberAnswers+=mydata[step]["validAnswers"].length;
    }
    return(numberAnswers);
}