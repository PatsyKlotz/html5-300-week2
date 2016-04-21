//create an array variable to hold data


/*var worldLeaders = ["Gandi", "Nelson Mandela", "Martin Luther King, Jr.", "Winston Churchill", "Mother Teresa"];
document.getElementById("t01").innerHTML = worldLeaders;*/
  
  

//write a function that creates a table row for each object in the array, with a cell for each property to be displayed. Append each of the rows to the table body.

$(document).ready(function(){
  
   function myFunction() {
    var x = document.createElement("TR");
    x.setAttribute("id", "myTr");
    document.getElementById("t01").appendChild(x);

    var y = document.createElement("TD");
    var t = document.createTextNode("new cell");
    y.appendChild(t);
    document.getElementById("myTr").appendChild(y);
}

});
                  
//Write an event handler for the new-item button. It should hide the table and show the form.
  
/*$(document).ready(function() {

$("#t01").hide();
  
});*/
                   
                   
                  
