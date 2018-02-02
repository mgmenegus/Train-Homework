 var config = {
    apiKey: "AIzaSyAABGC9edTiKN4lGIA8auqRt6cg-y2LY2A",
    authDomain: "employee-database-bcs.firebaseapp.com",
    databaseURL: "https://employee-database-bcs.firebaseio.com",
    projectId: "employee-database-bcs",
    storageBucket: "employee-database-bcs.appspot.com",
    messagingSenderId: "363408932150"
  };
  firebase.initializeApp(config);
  var database =firebase.database();
  var name="";
  var role="";
  var sData="";
  var monthsWorked="";
  var rate="";
  var tBilled="";
  $("#add-employee").on("click",function(){
    event.preventDefault();
    console.log("hell yeah")
    name=$("#employee-name").val().trim();
    role=$("#employee-role").val().trim();
    sDate=$("#employee-start-date").val().trim();
    rate=$("#employee-monthly-rate").val().trim();
    database.ref().push({
      name: name,
      role: role,
      sDate: sDate,
      rate: rate,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

  })
  function calcTime(date){
    return moment().diff(new Date(date), 'months');
};
  database.ref().on("child_added",function(childSnapshot){
    //add childSnapshot to table
    var newEmployee=childSnapshot.val();
    console.log(newEmployee);
    var table = $("#employees");
    var newRow = $("<tr>")
    var neName = $("<td>").text(newEmployee.name);
    var nrole = $("<td>").text(newEmployee.role);
    var nsDate = $("<td>").text(newEmployee.sDate);
    var nmonthsWorked = $("<td>").text(calcTime(newEmployee.sDate));
    var nrate = $("<td>").text(newEmployee.rate);
    var ntBilled = $("<td>").text(calcTime(newEmployee.sDate)*newEmployee.rate);
    table.append(newRow).append(neName).append(nrole).append(nsDate).append(nmonthsWorked).append(nrate).append(ntBilled);
  })
