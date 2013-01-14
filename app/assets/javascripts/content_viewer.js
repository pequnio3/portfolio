function initContentViewers()
{
    $(".content_viewer").each(
	function()
	{
	    var viewer=$(this);
	    viewer.find(".selectable_nav").each(
		function() {
		    var nav= $(this);
		    nav.find("li").each(
			function()
			{
			    var list_item = $(this);
			    list_item.click(
				function()
				{
				    nav.find("li").removeClass("selected");
				    viewer.find(".viewable_content").removeClass("selected");

				    list_item.addClass("selected");
				    var classes = list_item.attr("class")

				    var regexp = /select-(\w+)/g;
				    var matches = regexp.exec(classes);
				    if(matches)
				    {
					for (var i=1; i< matches.length; i++)
					{
					    var match = matches[i];

					    viewer.find(".viewable_content.".concat(match)).addClass("selected");
					}
				    }
				}
			    );
			}
		    );
		}
	    );
	}
    );
}
