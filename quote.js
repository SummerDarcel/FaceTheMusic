    function quoteFunction() {
 

    // event.preventDefault();     

    var quote = $("#get-quote-button").val().trim();
    
    console.log(quote);


    var queryURL = "http://quotes.rest/qod.json?category=inspire";
    
       // limit = 10 to limit the amount of gifs 
    // console.log(queryURL);
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(queryURL);
      console.log(response.contents.quotes[0].quote);


      var quote = response.contents.quotes[0].quote;
      var author = response.contents.quotes[0].author;

      var results = quote+ " - " + author
        // var quoteDiv = $("");
        
        // var quoteDiv = $("<img>");
        // gifImage.addClass('gif');

        // gifImage.attr("src", results[i].images.original.url);

        
        $("#quote-content").prepend(results);

       


    }); // to close response funtion
   
  
} // to close button function

$("#get-quote-button").on("click", quoteFunction)