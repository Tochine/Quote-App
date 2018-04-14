

var quotes = ['Engage the mind and soul with classic quotations featuring authors from the ages, with wit, \n wisdom, and words that inspire.',
 'When you reach the end of your rope, tie a knot in it and hang on.', 'Let us sacrifice our today so that our children can have a better tomorrow.',
  'Lord, make me an instrument of thy peace. Where there is hatred, let me sow love.']

//images in array
  var images = ['\'https://wallpaperscraft.com/image/starry_sky_stars_space_glitter_120044_602x339.jpg\'',
      '\'https://images.pexels.com/photos/8633/nature-tree-green-pine.jpg?h=350&auto=compress&cs=tinysrgb\'',
      '\'https://wallpaperscraft.com/image/spruce_branches_needles_green_120002_602x339.jpg\''

  ]

  function allQuote() {
  	var randomNumber = Math.floor(Math.random() * (quotes.length));
  	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];

//image function
  	var randomImg = Math.floor(Math.random() * (images.length));
  	//document.body.style.backgroundImage = 'url(${images[randomImg]})';
 	document.getElementById('img').style.backgroundImage = "url(" + images[randomImg] + ")"
  	
  }

  function entNewQuote() {

  	
  	
  	var newquotehere = document.getElementById('new_quote_here');

  	
  		newquotehere.style.display = "block";
  	
  		
  	
  }

  function addquote()
  {
  	var newquotehere = document.getElementById('new_quote_here');
  	var quoteDisplay = document.getElementById('quoteDisplay');
  	var newQuote = document.getElementById('addquote');
  	

  	quotes.push(newQuote.value);
  	quoteDisplay.innerHTML = newQuote.value;
	  newquotehere.style.display = "none";

  	//alert(quotes);
  }


  