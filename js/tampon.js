$(document).ready(function(){
	
	
	$("body").tooltip({
		selector: '[rel=tooltip]',
		animation: false
	});
	
	
	$("ul.timeline").sortable({
		items: "li.update",
		placeholder: "ui-state-highlight",
		handle: ".sort-handle"
	});
	
	
	$("#addtoposts").click(function(){
		
		var post = {
			id: "jhkkkjhkhkjhk",
			time: "5:30 PM",
			content: randomQuote()
		};
		
		var output = Mustache.render($("#tpl-post").html(), post);
		$(".timeline").append(output);
	});
	
	
	var randomQuote = function(){
		var quotes = [
			"All wrong-doing arises because of mind. If mind is transformed can wrong-doing remain?",
			"Ambition is like love, impatient both of delays and rivals.",
			"An idea that is developed and put into action is more important than an idea that exists only as an idea.",
			"Thousands of candles can be lit from a single candle, and the life of the candle will not be shortened.",
			"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
			"Do not overrate what you have received, nor envy others. He who envies others does not obtain peace of mind.",
			"The mind is everything. What you think you become.",
			"No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.",
			"Peace comes from within. Do not seek it without.",
			"The only real failure in life is not to be true to the best one knows.",
			"The way is not in the sky. The way is in the heart.",
			"There are only two mistakes one can make along the road to truth; not going all the way, and not starting.",
			"There has to be evil so that good can prove its purity above it."
		];
		
		quotes = _.map(quotes, function(quote){
			quote += " ~ via @TamponApp";
			return quote;
		});
		
		return quotes[Math.floor(Math.random()*quotes.length)];
	};
	
});


