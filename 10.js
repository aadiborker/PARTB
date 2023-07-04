]<!DOCTYPE html>
<html>
<body>
   <button id="my-button">Click Me</button>
   <div id="count">Button clicked: 0 times</div>
   <script>
      let button = document.getElementById("my-button");
      let clickCount = 0;
      let display = document.getElementById("count");
      if (localStorage.getItem("clickCount")) {
         clickCount = parseInt(localStorage.getItem("clickCount"));
      }
      button.addEventListener("click", sample) 
         function sample() {
         clickCount++;
         display.innerHTML = "Button clicked: " +  clickCount + " times";
         localStorage.setItem("clickCount", clickCount);
    }
   </script>
</body>
</html>
