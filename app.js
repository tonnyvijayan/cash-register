var enterButton=document.querySelector("#button-enter");
var enterAmount=document.querySelector("#amount-enter");
var tenderButton=document.querySelector("#button-tender");
var tenderAmount=document.querySelector("#amount-tendered");
var outputAmount=document.querySelector(".output-div");
var tenderDivAppear=document.querySelector("#tender-div");



var notesAvailable=[1, 5, 10, 20, 100, 500, 2000];
var CurrencyDisplay=[];

var userBill=0;
var userTender=0;
var balance=0;

function resultDisplay(){
    for(i=0;i<CurrencyDisplay.length;i++){
    outputAmount.innerHTML=CurrencyDisplay[i]
    }
}

function enterClickHandler(){
    userBill=parseInt(enterAmount.value);
    console.log("Clicked")
    console.log(userBill)
    // tenderDivAppear.innerHTML="<input type=text name=Tendered id=amount-tendered placeholder=Note Tendered>  <button id=button-tender>Tender balance</button>"
    // tenderButton.addEventListener("click",enterTenderHandler);
}
function enterTenderHandler(){
    userTender=parseInt(tenderAmount.value);
    console.log("Clicked")
    console.log(userTender)
    balance=(userTender-userBill)
    console.log("balance",balance)
    if(notesAvailable.includes(balance)){
        CurrencyDisplay.push("give 1 note of " + balance);
        console.log("give one note of ", balance);
        // outputAmount.innerHTML=CurrencyDisplay
    } else {
            for(i=0;i<notesAvailable.length;i++){
            if(balance<notesAvailable[i]){
                
                var first=(balance)/(notesAvailable[i-1])
                first=first.toString().split(".")[0]
                console.log("give "+ first + " notes of", notesAvailable[i-1])
                CurrencyDisplay.push("give "+ first + " notes of " + notesAvailable[i-1]);
                // outputAmount.innerHTML=CurrencyDisplay
                // console.log(CurrencyDisplay)
                balance=(balance)%(notesAvailable[i-1]);
                console.log("remaining balance",balance)
                if(balance===0){
                    break
                }else{
                    i=0;
                }
                
            }else if(balance>notesAvailable[(notesAvailable.length-1)]){
                var first=(balance)/(notesAvailable[notesAvailable.length-1])
                first=first.toString().split(".")[0]
                console.log("give "+ first + " notes of", notesAvailable[notesAvailable.length-1])
                CurrencyDisplay.push("give "+ first + " notes of " + notesAvailable[notesAvailable.length-1]);
                // outputAmount.innerHTML=CurrencyDisplay
                balance=(balance)%(notesAvailable[notesAvailable.length-1]);
                console.log("remaining balance",balance)
                

            }
              
        }
    } 
    outputAmount.innerHTML=CurrencyDisplay;  
}






tenderButton.addEventListener("click",enterTenderHandler);
enterButton.addEventListener("click",enterClickHandler);