var block = document.getElementById("block");
var hole = document.getElementById("hole");
var cha = document.getElementById("charac");
var score=0;
var jumping=0;


hole.addEventListener( 'animationiteration' , () => { 
	var rp =  -((Math.random()*300)+250) ;
	hole.style.top = rp + 'px';
	score++;  // score = score + 1;
 }  );
 
  var move=	setInterval( function () { 
		 var chartop = parseFloat(window.getComputedStyle(cha).getPropertyValue("top"));
		 
		 if (jumping==0) 
		 {
		 		cha.style.top = (chartop+2) + 'px';
		 }
		 
		 var blockleft = parseFloat(window.getComputedStyle(block).getPropertyValue("left"));
		 var holetop = parseFloat(window.getComputedStyle(hole).getPropertyValue("top"));
		 var ctop = -( 630 - chartop );
		 
		 if ( (chartop>530)	|| ( (blockleft<100) && (blockleft>-100) && (( ctop<=holetop ) || (chtop >= (holetop+250) ) ) )) 
		 {
		 		block.style.animationPlayState="paused";
		 		hole.style.animationPlayState="paused";
		 		clearInterval(move);
		 		alert("The game is over. SCORE: "+score);
		 }
 	 } , 30 );

function Jump() 
{
	jumping=1;
	let jumpcount=0;
	var jumpInterval = setInterval( function () 
	{
		var chartop = parseFloat(window.getComputedStyle(cha).getPropertyValue("top"));
		if (chartop>=100) 
		{
			cha.style.top = (chartop-4) + 'px';
		}
		if (jumpcount>40) 
		{
			clearInterval( jumpInterval ); 
			jumping=0;
			jumpcount = 0;
		}
		jumpcount++;
	}, 30 );
}	

















