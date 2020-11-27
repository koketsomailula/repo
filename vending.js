const price = 12.5;
var change = 0;
var moneyInserted = 0;
var totalPaid = 0;
var drinks = ["Coke", "Orange", "Grape", "Water"];
var msg = "";
var messageEl = document.getElementById("message")

const currency_fiftycent = 0.5;
const currency_onerand = 1;
const currency_tworand = 2;
const currency_fiverand = 5;

function getTotal() {
    var currency_fiftycents = Number(document.getElementById("fiftycents").value);
    var currency_onerands = Number(document.getElementById("onerands").value);
    var currency_tworands = Number(document.getElementById("tworands").value);
    var currency_fiverands = Number(document.getElementById("fiverands").value);

    if(currency_fiftycents > 0){
        currency_fiftycents = currency_fiftycents * currency_fiftycent;
    }

    if(currency_onerands > 0){
        currency_onerands = currency_onerands * currency_onerand;
    }

    if(currency_tworands > 0){
        currency_tworands = currency_tworands * currency_tworand;
    }

    if(currency_fiverands > 0){
        currency_fiverands = currency_fiverands * currency_fiverand;
    }
    //Add Coins
    totalPaid =
        currency_fiftycents +
        currency_onerands +
        currency_tworands +
        currency_fiverands;

    return totalPaid.toFixed(2);
}

function tally(){
    moneyInserted = getTotal();
    document.getElementById("paid").innerHTML = moneyInserted;
}

function clearTally(){
    moneyInserted = 0;
    document.getElementById("paid").innerHTML = moneyInserted;
}

function clearForm(){
    document.getElementById("fiftycents").value = 0;
    document.getElementById("onerands").value = 0;
    document.getElementById("tworands").value = 0;
    document.getElementById("fiverands").value = 0;
}

function cancel(){
    getTotal();

    if(totalPaid > 0){
        msg = "Transection cancelled. R" + totalPaid.toFixed(2) + " has been returned."
        clearForm();
        clearTally();

        messageEl.innerHTML = msg;
    } else if(totalPaid == 0){

        msg = "Insert money first and select Drink.";

        messageEl.innerHTML = msg;
    }
}

function calculateChange(){
    var tempChange = 0;

    if(getTotal() != 0){
        return (tempChange = (getTotal() - price).toFixed(2));
    }

    return tempChange.toFixed(2);
}
function dispenseDrink(drink){
    messageEl.innerHTML = "";
    change = 0;

    var selectedDrink = drinks[drink];

    change = calculateChange();

    if(change < 0 ){
        msg = "You did not pay enough money. Your money 'R" + totalPaid.toFixed(2) + "' has been returned to the coin trey.";

        totalPaid = 0;
        change = 0;
        clearForm();
        clearTally();

        messageEl.innerHTML = msg;

    } else if(change > 0) {
        msg = selectedDrink + " has been dispensed. Your change R" + change + " has been returned to the coin trey.";

        totalPaid = 0;
        change = 0;
        clearForm();
        clearTally();

        messageEl.innerHTML = msg;

    } else if (totalPaid == 0){
        msg = "Please pay before selecting a drink.";

        messageEl.innerHTML = msg;

    } else if (change == 0) {
        msg = selectedDrink + " has been dispensed.";

        totalPaid = 0;
        change = 0;
        clearForm();
        clearTally();

        messageEl.innerHTML = msg;
    }
}
