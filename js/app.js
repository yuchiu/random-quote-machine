const $quote = document.getElementById('quote');

$('#quoteBtn').click(() => {
    changeQuote();
})

function changeQuote() {
    const jokeApi = "https://api.icndb.com/jokes/random";
    try {
        $.get(jokeApi, (data) => {
            $('#quote').html(data["value"]["joke"]);
            $('#quote').append("<span id='line'>&#9646;</span>");
        });
    } catch (err) {
        console.log(err)
    }
    typingAnimation();
}

$('#tweetBtn').bind('click', function () {
    const twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&text"
    let quote = $('#quote').innerHTML();
    $('#tweetBtn').attr("href", twitterLink + encodeURIComponent(quote));
});

let typingAnimation = (function typing() {
    $quote.classList.add('typing-animation');
    timer = setTimeout(function () {
        $quote.classList.remove('typing-animation');
    }, 3000);
    return typing
}())