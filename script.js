// This script is displayed on Home page

 <button onclick="myFunction()">Click Me!</button>

<p id="demo"></p>

<script>
function myFunction() {
    var person = prompt("Please enter your name", "");
    if (person != null) {
        document.getElementById("demo").innerHTML =
        "Hello " + person + "! How are you today?";
    }
}
</script>



// This script is on the Contact Page of Website
document.getElementById("demo").innerHTML = Date();

