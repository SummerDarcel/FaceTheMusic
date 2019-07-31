
 function giphyFunction() {

    event.preventDefault();     

      var giphy = $("#silly").val().trim();
      
      console.log(giphy);

      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        giphy + "&api_key=oGtMo5Kd45OXskKdOuMmP0GolQoPOa9Z&limit=10"; // limit = 10 to limit the amount of gifs 
      // console.log(queryURL);
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {
        console.log(queryURL);
        console.log(response);


        var results = response.data;
        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div>");
          
          var gifImage = $("<img>");
          gifImage.addClass('gif');

          gifImage.attr("src", results[i].images.original.url);

          gifDiv.append();
          gifDiv.append(gifImage);
          $("#divForGif").prepend(gifDiv);

        } 


      }); // to close response funtion
     
    
  } // to close button function


  $("#silly").on("click", giphyFunction) 

