var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var dollarOutput = document.getElementById("dollar");
var viewsOutput = document.getElementById("views");

output.innerHTML = slider.value; // Display the default slider value
dollarOutput.innerHTML = (slider.value)/10 * 4;
viewsOutput.innerHTML = "100K";

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  // list the condition 
  dollarOutput.innerHTML = (((slider.value)/ 10) * 4);

  if (dollarOutput.innerHTML === "8") {
    viewsOutput.innerHTML = "10K";
  } else if(dollarOutput.innerHTML === "12") {
    viewsOutput.innerHTML = "50K";
  } else if(dollarOutput.innerHTML === "16") {
    viewsOutput.innerHTML = "100K";
  } else if(dollarOutput.innerHTML === "20") {
    viewsOutput.innerHTML = "250K";
  } else if(dollarOutput.innerHTML === "24") {
    viewsOutput.innerHTML = "500K";
  } else if(dollarOutput.innerHTML === "28") {
    viewsOutput.innerHTML = "600K";
  } else if(dollarOutput.innerHTML === "32") {
    viewsOutput.innerHTML = "700K";
  } else if(dollarOutput.innerHTML === "36") {
    viewsOutput.innerHTML = "1M";
  }


} 

