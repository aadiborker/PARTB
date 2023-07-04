<!DOCTYPE html>
<html>
<head>
  <title> Validation</title>
</head>
<body>
  <h1> Validation</h1>

  <label for="usnInput">Enter email address:</label>
  <input type="text" id="usnInput">
  <button onclick="validate()">Validate</button>

  <script>
    
    function validate() {
      var em = document.getElementById("usnInput").value;
      var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (pattern.test(em)) {
        alert("Valid email");
      } else {
        alert("Invalid email");
      }
    }
  </script>
</body>
</html>
