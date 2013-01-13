function initProjectSlideShow()
{
    $(".project-slideshow li div").click(
	function()
	{
	    var parent_li = $(this).parent();
	    $(".project-slideshow li").attr("class","");
	    parent_li.attr("class","selected");
	}
    );
};
