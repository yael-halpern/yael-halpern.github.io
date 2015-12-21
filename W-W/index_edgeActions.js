/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_videosbtn}", "click", function(sym, e) {
         sym.play("videosbtnon");
         
         // Use this to target events and elements inside a symbol.
         // For example:
         // var mySymbolObject = sym.getSymbol("Symbol2");
         // mySymbolObject.play(); will play the timeline of Symbol2. Another example:
         // mySymbolObject.$("myElement").hide(); will hide "myElement" inside of Symbol2.
         var player = sym.getSymbol("player");
         
         // Get the value of a Symbol variable
         var playVideo = player.getVariable("playVideo");
         
         playVideo();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'videos'
   (function(symbolName) {   
   
   })("videos");
   //Edge symbol end:'videos'

   //=========================================================
   
   //Edge symbol: 'videoon'
   (function(symbolName) {   
   
   })("videoon");
   //Edge symbol end:'videoon'

   //=========================================================
   
   //Edge symbol: 'video'
   (function(symbolName) {   
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         
         var tag = document.createElement('script');
         
         tag.src = "https://www.youtube.com/iframe_api";
         var firstScriptTag = document.getElementsByTagName('script')[0];
         firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
         
         var player;
         
         window.onYouTubeIframeAPIReady = function() {
         	player = new YT.Player('Stage_player_video', {
         		height: '933',
         		width: '1680',
         		videoId: 'pYS-rbq4t1o',
         		events: {
         		'onReady': onPlayerReady,
         		'onStateChange': onPlayerStateChange
         		}
         	});
         };
         
         
         function onPlayerReady(event) {
            sym.setVariable("playVideo", function() {
               event.target.playVideo();
            });
         	//event.target.playVideo();
         }
         
         var done = false;
         function onPlayerStateChange(event) {
         //	if (event.data == YT.PlayerState.PLAYING && !done) {
         //		setTimeout(stopVideo, 6000);
         //		done = true;
         //	}
         }
         function stopVideo() {
         	player.stopVideo();
         }

      });
      //Edge binding end

   })("player");
   //Edge symbol end:'player'

})(jQuery, AdobeEdge, "EDGE-17420496");