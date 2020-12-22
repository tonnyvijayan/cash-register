var enterButton=document.querySelector("#button-enter");
var enterAmount=document.querySelector("#amount-enter");
var tenderButton=document.querySelector("#button-tender");
var tenderAmount=document.querySelector("#amount-tendered");



var notesAvailable=[1, 5, 10, 20, 100, 500, 2000];

var userBill=0;
var userTender=0;
var balance=0;


function enterClickHandler(){
    userBill=parseInt(enterAmount.value);
    console.log("Clicked")
    console.log(userBill)
}
function enterTenderHandler(){
    userTender=parseInt(tenderAmount.value);
    console.log("Clicked")
    console.log(userTender)
    balance=(userTender-userBill)
    console.log("balance",balance)
    if(notesAvailable.includes(balance)){
        console.log("give one note of ", balance);
    } else {
            for(i=0;i<notesAvailable.length;i++){
            if(balance<notesAvailable[i]){
                
                var first=(balance)/(notesAvailable[i-1])
                console.log("give "+ first + " notes of", notesAvailable[i-1])
                balance=(balance)%(notesAvailable[i-1]);
                console.log("remaining balance",balance)
                if(balance===0){
                    break
                }else{
                    i=0;
                }
                
            }else if(balance>notesAvailable[(notesAvailable.length-1)]){
                var first=(balance)/(notesAvailable[notesAvailable.length-1])
                console.log("give "+ first + " notes of", notesAvailable[notesAvailable.length-1])
                balance=(balance)%(notesAvailable[notesAvailable.length-1]);
                console.log("remaining balance",balance)
                

            }
              
        }
    }    
}


function balanceSplitter(){

}


tenderButton.addEventListener("click",enterTenderHandler);
enterButton.addEventListener("click",enterClickHandler);