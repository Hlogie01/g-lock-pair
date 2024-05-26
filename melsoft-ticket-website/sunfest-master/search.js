document.getElementById("searchButton").addEventListener("click", function () {
  // Get the value entered in the search input
  var searchTerm = document.getElementById("searchInput").value.toLowerCase();

  // Redirect based on search term
  switch (searchTerm) {
    case "ticket":
      window.location.href = "signup.html";
      break;
    case "cottonfest":
      window.location.href = "cottonfest.html";
      break;
    case "burna boy":
      window.location.href = "burna.html";
      break;
    case "wine and dine":
      window.location.href = "wine-events-page.html";
      break;
    case "artists":
      window.location.href = "#artists-homepage-section";
    default:
      // If search term doesn't match any predefined case, you can handle it accordingly
      alert("No match found for the search term.");
      break;
  }
});
