function getRandomInt( min, max ) 
{
  return Math.floor( Math.random() * (max - min + 1) )  
         + min;
}


function showRandomQuotes() 
{

  var quotes = jQuery( ".quote-container" );

  var no_of_quotes = quotes.length;

  function showNextQuote() 
  {
    var fade_in_and_out_delay = 2000;

    var reading_time = 15000;

    var quote_index = getRandomInt( 0, no_of_quotes-1 );

    quotes.eq( quote_index ).fadeIn( fade_in_and_out_delay )
        .delay( reading_time )
        .fadeOut( fade_in_and_out_delay, showNextQuote );

  }

  showNextQuote();

}




