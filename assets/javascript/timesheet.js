var config = {
    apiKey: "AIzaSyAHCh5a-sDrq8RjLQG1yppDEhtkJPtssxY",
    authDomain: "fir-timesheet.firebaseapp.com",
    databaseURL: "https://fir-timesheet.firebaseio.com",
    projectId: "fir-timesheet",
    storageBucket: "",
    messagingSenderId: "152686991934"
  };
  firebase.initializeApp(config);

var database = firebase.database();

var name = "noneya"
var role = "na"
var startdate = "01/01/70"
var monthrate = 0
var dateAdded = firebase.database.ServerValue.TIMESTAMP


database.ref().on("value", function(snapshot) {
    var data = snapshot.val();

    if (data.child("name").exists() && data.child("highestPrice").exists()) {
        highPrice = data.price;
        highBidder = data.bidder;

        $("#highest-price").text(data.price);
        $("#highest-bidder").text(data.bidder);
        
        console.log("New highPrice", highPrice, "New highBidder", highBidder);
    } else { 
        $("#highest-price").text(initialBid);
        $("#highest-bidder").text(initialBidder);
  
        console.log("No new highPrice", highPrice, "No new highBidder", highBidder);
    }
});

// --------------------------------------------------------------
$("#submit").on("click", function() {
    event.preventDefault();

    var name = $("#name-input").val().trim();
    var role = $("#role-input").val().trim();
    var startdate = $("#start-date").val().trim();
    var monthrate = $("#monthly-rate").val().trim();
    var dateAdded = firebase.database.ServerValue.TIMESTAMP

    database.ref().push({
        name: name,
        role: role,
        startdate: startdate,
        monthrate: monthrate
    });

    $("#name-input").text(name);
    $("#role-input").text(role);
    $("#start-date").text(startdate);
    $("#monthly-rate").text(monthrate);
});


database.ref().push({

});

database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function() {
    var sv = snapshot.val()


})

