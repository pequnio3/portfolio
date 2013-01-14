function initProjectSlideShow()
{
    $(".project-slideshow li div").click(
	function()
	{
	    var parent_li = $(this).parent();
	    var parent_ps = parent_li.parent();
	    parent_ps.find("li").attr("class","");
	    parent_li.attr("class","selected");
	}
    );
};
