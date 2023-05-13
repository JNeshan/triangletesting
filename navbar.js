window.onload = function() {
    console.log("JavaScript code is running...");
    // Open and close the side navigation menu
    function openNav() {
        document.getElementById("sideNav").style.width = "250px";
      }
      
      function closeNav() {
        document.getElementById("sideNav").style.width = "0";
      }
      
      // Event listener for the navigation button
      document.getElementById("navButton").addEventListener("click", openNav);
      
      // Event listener for the close button in the side navigation menu
      document.getElementById("closeNavButton").addEventListener("click", closeNav);
  }