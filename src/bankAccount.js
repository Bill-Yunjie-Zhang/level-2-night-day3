var account = {
    id: 123456,
    fName: "Bill",
    lName: "Zhang",
    phoneNumber: 12345432132454,
    balance: 0,
    active: true,
    deposit: function(amt) {
        var newBalance = this.balance + amt;
        this.balance = newBalance;
        console.log("You have deposited" + amt)
    },
    withdraw: function(amt) {
        if(amt < this.balance){
            var newBalance = this.balance - amt;
            this.balance = newBalance;
            console.log("You have withdrew " + amt)
        } else {
            console.log("Sorry, you do not have enough money.")
        }
    }
}

console.log(account)