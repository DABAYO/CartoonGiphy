$("button").on("click", function() {
    var toon = $(this).attr("cartoon");
  
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      toon + "&api_key=nQe1Lc5ctWi9AXcvYbLPKZbgMxPKwhF9&limit=10";
  
    $.ajax({
        url: queryURL,
        method: "GET"
      })

      .then(function(response) {
        var results = response.data;
  
        for (var i = 0; i < results.length; i++) {
  
          if (results[i].rating !== "r" && results[i].rating !== "pg-13") {

            var toonGif = $("<div class='item'>");
  
            var rating = results[i].rating;
  
            var p = $("<p>").text("Rating: " + rating);
  
            var toonImage = $("<img>");
  
            toonImage.attr("src", results[i].images.fixed_height.url);
  
            toonGif.append(p);
            toonGif.append(toonImage);
  
            $("#cartoonGifs").prepend(toonGif);
          }
        }
      });
  });

$("cartoon-buttons").append("Some appended text.");

$(".gif").on("click", function() {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });