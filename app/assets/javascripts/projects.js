
function initTiles()
{
    $("#projects .selectable_nav li").each(
	function()
	{

	    var classes = $(this).attr("class")

	    var regexp = /select-(\w+)/g;
	    var matches = regexp.exec(classes);
	    if(matches)
	    {
		for (var i=1; i< matches.length; i++)
		{
		    var match = matches[i];

		    $("#projects .selectable_nav .select-".concat(match," span")).click(
			function()
			{
			    tileIn(match);
			}
		    );


		}
	    }






	}
    );
}

function tileIn(pclass)
{
    $($('#projects #project_list .all').get().reverse()).each(
	function(i)
	{
	    $(this).delay(i*50).fadeOut(500);
	}
    );
    $('#projects #project_list .all').promise().done(
	function()
	{
	    $("#projects #project_list .".concat(pclass)).each(
		function(i)
		{
		    
		    $(this).delay(i*50).fadeIn(500);
		    

		}
	    );

	}
    )
}
