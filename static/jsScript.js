 //THe js script has and click event for seach button and sends get request to the API we create .
// It will send the endpoint and it will add the result ot the link once the search is done.

$(document).ready(function() {

  $("#search").click(function() {
    var searchReq = $.get("/sendRequest/" + $("#query").val());  //  The event takes the query and get the send request to API
    searchReq.done(function(data) {
      console.log(data.result)
      $("#url").attr("href", data.result); // the result is added to the link here
    });
  });
});
