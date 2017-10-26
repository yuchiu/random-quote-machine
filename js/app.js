$('#quoteBtn').click(() => {
    changeQuote();
})

function changeQuote() {
    const jokeApi = "https://api.icndb.com/jokes/random";
    $.get(jokeApi, (data) => {
        $('#quote').html(data["value"]["joke"]);
    });
}

$('#tweetBtn').bind('click', function() {
    const twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&text"
    let quote = $('#quote').innerHTML();
    $('#tweetBtn').attr("href", twitterLink + encodeURIComponent(quote));
});
