debugger;
console.log('you\'r in the world of content.js');
var url="http://labs.bible.org/api/?passage=votd&type=json"

$.getJSON(url, function(data) {
    // Get the element with id summary and set the inner text to the result.
    $('#book').html("<h3>Book  : "+data[0].bookname +"</h3>") ;
    $('#chapter').html("<h3>Chapter : " +data[0].chapter +" Verse : "+ data[0].verse + "</h3>");
    $('#text').html(data[0].text);

});
