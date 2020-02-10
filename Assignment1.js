
var inputBox = document.getElementById("favoriteDrink");
    inputBox.onkeyup = function() {
     
      document.getElementById('display').innerHTML = inputBox.value;
    }
    
    function displayFunction() {
      
      favoriteFood = document.getElementById("favoriteFood").value;
      favoriteDrink = document.getElementById("favoriteDrink").value;
      
      document.getElementById("display").innerHTML = favoriteFood +", "+ favoriteDrink;
    }
    
    function myFunction() {
      document.getElementById("demo").innerHTML = Date();
    }
      
        
    function showData() {
        var theSelect = demoForm.demoSelect;
        var firstP = document.getElementById('firstP');
        var secondP = document.getElementById('secondP');
        var thirdP = document.getElementById('thirdP');
        
      secondP.innerHTML = ('Population is: ' + theSelect[theSelect.selectedIndex].value);
      
    }
      //IF Else
    function ageFunction() {
        var message;
        var age = prompt("What is your age")
        if (age < 18) {      
    message = "You are Not an adult.";
            
    }   else if (age >= 18) {
    message = "You are an adult.";
  }
  
  document.getElementById("cheese").innerHTML = message;
}
        //Array
      var gisSoftware = [
        "Arc Pro",
        " Arc Online",
        " ArcMap Desktop",
        " QGIS"
];
document.getElementById("software").innerHTML = gisSoftware;
      
      //LOOP
      var software = ["GRASS GIS", "FalconView", "MapWindow", "SAGA GIS"];
        var i, len, text;
        for (i = 0, len = software.length, text = ""; i < len; i++) {
            text += software[i] + "<br>";
}
document.getElementById("software2").innerHTML = text;
      
      
      var person = {
        firstName: "Matt",
        lastName: "Theisen",
        major: "Animal Ecology",
        institution: "Iowa State University",
        academicYear: "fifth year",
        homeTown: "Maple Grove, MN"
    };

      //Object
        document.getElementById("me").innerHTML =
            person.firstName + " is studying " + person.major + " at " + person.institution + ". " + "He is from " + person.homeTown + " and is in his " + person.academicYear + ".";
      