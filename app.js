var enterButton = document.querySelector("#button-enter");
var enterAmount = document.querySelector("#amount-enter");
var outputAmount = document.querySelector(".output-div");
var tenderDivAppear = document.querySelector("#tender-div");
var balanceAppear = document.querySelector("#change-returned")




//array of notes available
var notesAvailable = [1, 5, 10, 20, 100, 500, 2000];
//array to store result
var CurrencyDisplay = [];

var userBill = 0;
var userTender = 0;
var balance = 0;


// function to take in bill value and trigger change button
function enterClickHandler() {
    userBill = parseInt(enterAmount.value);
    tenderDivAppear.innerHTML = "<input type=text name=Tendered id=amount-tendered placeholder=Amount_Received>  <button id=button-tender>Calculate Change</button> "
    var tenderButton = document.querySelector("#button-tender");
    tenderButton.addEventListener("click", enterTenderHandler);
};

//function to take amount given by user and calculate change to be given back and also trigger balace and output on being pressed
function enterTenderHandler() {
    var tenderAmount = document.querySelector("#amount-tendered");
    userTender = parseInt(tenderAmount.value);
    balance = (userTender - userBill);
    balanceAppear.innerHTML = "<span id=balance-box></span>";
    var balanceDisplay = document.querySelector("#balance-box");
    if (balance < 0) {                                                  //when amount given is less
        balanceDisplay.innerText = "Please collect more money"
    } else if (balance === 0) {                                        //when amount given is the same as billed amount
        balanceDisplay.innerText = "Payment settled"
    } else {                                                           //when amount given is more then billed amount
        balanceDisplay.innerText = balance + " to be returned"
        if (notesAvailable.includes(balance)) {
            CurrencyDisplay.push("give 1 note of " + balance);
        } else {
            for (i = 0; i < notesAvailable.length; i++) {           //for loop to go over the currency present in the array, compare and find the least number of notes required
                if (balance < notesAvailable[i]) {
                    var first = (balance) / (notesAvailable[i - 1])
                    first = first.toString().split(".")[0]
                    CurrencyDisplay.push("give " + first + " notes of " + notesAvailable[i - 1]);   //storing values generated into a new array to use later
                    balance = (balance) % (notesAvailable[i - 1]);
                    if (balance === 0) {
                        break
                    } else {
                        i = 0;
                    }

                } else if (balance > notesAvailable[(notesAvailable.length - 1)]) {
                    var first = (balance) / (notesAvailable[notesAvailable.length - 1])
                    first = first.toString().split(".")[0]
                    CurrencyDisplay.push("give " + first + " notes of " + notesAvailable[notesAvailable.length - 1]);
                    balance = (balance) % (notesAvailable[notesAvailable.length - 1]);
                };
            };
        };
    };
    outputAmount.innerHTML = CurrencyDisplay;   // calling array with data of change to be given
};

enterButton.addEventListener("click", enterClickHandler);