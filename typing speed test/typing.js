const clickchange=()=>{
    location.href="typingui.html"
}

const setofwords=[ 
    "I woke up early in the morning and read the newspaper.",
    "I came back from school and completed my homework.",
    "I went for a walk in the park with my friends in the evening.",
    "Upon returning home from the park.",
    "I went out for dinner with my family.",
];

let msg=document.getElementById('msg')
let btn=document.getElementById('btn');
let typedwords=document.getElementById('my_words');
let startTime,endTime;

function startplay() {
    let random_number = Math.floor(Math.random() * setofwords.length);
    msg.innerText = setofwords[random_number];

    let date = new Date();
    startTime=date.getTime();
    btn.innerText = "Done";
}

let endplay=()=>{
    let date= new Date();
    endTime=date.getTime();
    let totalTime=((endTime-startTime)/1000)

    let totalstr=typedwords.value
    let wordcount=wordCounter(totalstr);

    let speed=(Math.round(wordcount/totalTime)*60)
    let wordcheck=Countwords(msg.innerText,totalstr)


    let finalmsg=`You typed ${speed} words per minute. `;
    finalmsg+=wordcheck
    msg.innerText=finalmsg;
}
let wordCounter=(str1)=>{
    let response=str1.split(" ").length;
    return response;
}

let Countwords=(str1,str2)=>{
    let word1=str1.split(" ")
    let word2=str2.split(" ")
    count=0;

    word1.forEach(function(value,index){
        if(value==word2[index]){
            count+=1;
        }   
    });
    let errorcount=(word1.length-count)
        return(`${count} out of ${word1.length} words are correct and ${errorcount} words are incorrect.`)

        
}

btn.addEventListener('click',function(){
    if(this.innerText=="Start"){
        typedwords.disabled=false;
        startplay();
    }else if(this.innerText=="Done"){
        typedwords.disabled=true;
        endplay();
        btn.innerText="Start";
    }
})