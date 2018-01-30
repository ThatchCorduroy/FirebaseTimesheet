$(document).ready(function() {
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

// database.ref().on("value", function(snapshot) {
//     var data = snapshot.val();
//     console.log("here");
// });


// database.ref().on("value", function(snapshot) {
//     var data = snapshot.val();

//     if (data.child("name").exists() && data.child("highestPrice").exists()) {
//         highPrice = data.price;
//         highBidder = data.bidder;

//         $("#highest-price").text(data.price);
//         $("#highest-bidder").text(data.bidder);
        
//         console.log("New highPrice", highPrice, "New highBidder", highBidder);
//     } else { 
//         $("#highest-price").text(initialBid);
//         $("#highest-bidder").text(initialBidder);
  
//         console.log("No new highPrice", highPrice, "No new highBidder", highBidder);
//     }
// });

// --------------------------------------------------------------


    $("#submit-btn").on("click", function(event) {

        console.log(firebase.database.ServerValue.TIMESTAMP);
        
        
        event.preventDefault();
        console.log("sawClick");    

        name = $("#name-input").val().trim();
        role = $("#role-input").val().trim();
        startdate = $("#start-date").val().trim();
        monthrate = $("#monthly-rate").val().trim();
        dateAdded = firebase.database.ServerValue.TIMESTAMP;

        database.ref().push({
            name: name,
            role: role,
            startdate: startdate,
            monthrate: monthrate,
            dateAdded: dateAdded
        });

        $("#name-input").text(name);
        $("#role-input").text(role);
        $("#start-date").text(startdate);
        $("#monthly-rate").text(monthrate);
    });




// database.ref().push({

// });

// database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function() {
//     var sv = snapshot.val()


// });

// database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
//     // Change the HTML to reflect
//     $("#name-display").text(snapshot.val().name);
//     $("#email-display").text(snapshot.val().email);
//     $("#age-display").text(snapshot.val().age);
//     $("#comment-display").text(snapshot.val().comment);
//   });

    database.ref().on("child_added", function(childSnapshot) {
        console.log(childSnapshot.val());

        newTr = $("<tr>");

        nametd = $("<td>");
        emailtd = $("<td>");
        startdatetd = $("<td>");
        monthratetd = $("<td>");
        dateAddedtd = $("<td>");

        nametd.text(childSnapshot.val().name);
        emailtd.text(childSnapshot.val().email);
        startdatetd.text(childSnapshot.val().startdate);
        monthratetd.text(childSnapshot.val().monthrate);
        dateAddedtd.text(childSnapshot.val().dateAdded);

        newTr.append(nametd);
        newTr.append(emailtd);
        newTr.append(startdatetd);
        newTr.append(monthratetd);
        
        $("#table").append(newTr);
    })
});