//function say(){
    //let name="Javascript"
    //console.log("my name is varshika");
    //console.log("within the function"+name);
//}
//say()//
//function Voting(age){
   // if(age>=18){
       // let iscloudy=true;
       // var israining=true;
       // console.log("eligible");
        //console.log(iscloudy);
    //}
//}
//Voting(18)
function text(){
    console.log("message");
}
text();
function send(callback){
    console.log("message sended");
    setInterval(callback,1000);
}
send(text);
let count=0;
let Interval=()=>{
    count++;
    console.log(count);
    if(count<5){
        Interval();
    }
}
Interval();
