// Simple banner rotator
// (c) spyka Web Group 2008
// version info: 1.1.2
// Download & support: http://www.spyka.net
// Forums: http://www.spyka.net/forums
// Please keep this notice in place


function banner(name, url, image, border)
{
	this.name	= name;
	this.url	= url;
	this.image	= image;
	this.border	= border;
}

function banner_blurb( blurb )
{
	this.blurb = blurb;
}

var banners = new Array();
var blurbs = new Array();

///////////////////////////////////////////////////////////////////////////////////
//
//         						START EDITS HERE
//
///////////////////////////////////////////////////////////////////////////////////

// Full documentation & support: http://www.spyka.net/forums

// if 1, all images will be resized to img_width and img_height, else images will display their correct size
var force_size	= 1;
// desired height and width of images, only takes affect if above is = 1
var img_width	= 468;
var img_height	= 65;

// banner list syntax: banners[x] = new banner(website_name, website_url, website_image_url, show_until_date);  DATE FORMAT: dd/mm/yyyy
//banners[0] = new banner( 'Emcore Magazine', 'http://www.emcore-magazine.com/', '/banner-images/emcore-magazine-banner-1.png', "0");
//blurbs[0] = new banner_blurb( '<br><a href="RTOS-contact-and-support.html#advertising" target="basefrm"><small>Advertise here?</small></a>' );

banners[0] = new banner( 'FreeRTOS documentation', '/Documentation/RTOS_book.html', '/banner-images/FreeRTOS-book.png', "0");
blurbs[0] = new banner_blurb( '<br><a href="RTOS-contact-and-support.html#advertising" target="basefrm"><small>Advertise here?</small></a>' );


banners[1] = new banner( 'FreeRTOS documentation', 'http://www.highintegritysystems.com/safertos', '/banner-images/safertosbanner.gif', "1");
blurbs[1] = new banner_blurb( '<br><a href="RTOS-contact-and-support.html#advertising" target="basefrm"><small>Advertise here?</small></a>' );

//banners[2] = new banner( 'FreeRTOS training', '/training/RTOS-tutorial-and-training.html', '/banner-images/freertos-training-top-banner.png', "0");
//blurbs[2] = new banner_blurb( '<br><a href="RTOS-contact-and-support.html#advertising" target="basefrm"><small>Advertise here?</small></a>' );

banners[2] = new banner( 'FreeRTOS+ Ecosystem Showcase', 'http://www.highintegritysystems.com/middleware', '/banner-images/connectbanner.gif', "1");
blurbs[2] = new banner_blurb( '<br><a href="RTOS-contact-and-support.html#advertising" target="basefrm"><small>Advertise here?</small></a>' );


banners[3] = new banner( 'FreeRTOS+ Ecosystem Showcase', 'http://www.highintegritysystems.com/middleware', '/banner-images/connectbanner.gif', "1");
blurbs[3] = new banner_blurb( '<br><a href="RTOS-contact-and-support.html#advertising" target="basefrm"><small>Advertise here?</small></a>' );

banners[4] = new banner( 'FreeRTOS paperbacks', '/Documentation/RTOS_book.html', '/banner-images/FreeRTOS-book-title-large.png', "0");
blurbs[4] = new banner_blurb( '<br><small>5 book editions are available, <a href="Documentation/RTOS_book.html" target="_blank"><b>eBook</b></a> &amp; <a href="http://bit.ly/duJ9R0" target="_blank"><b>paperback</b></a> - includes 16 <b>simple</b> examples' );

banners[5] = new banner( 'Connect', 'http://www.highintegritysystems.com/openrtos', '/banner-images/openrtosbanner.gif', "1");
blurbs[5] = new banner_blurb( '<br><a href="RTOS-contact-and-support.html#advertising" target="basefrm"><small>Advertise here?</small></a>' );

//banners[6] = new banner( 'FreeRTOS training', '/training/RTOS-tutorial-and-training.html', '/banner-images/freertos-training-top-banner.png', "0");
//blurbs[6] = new banner_blurb( '<br><a href="RTOS-contact-and-support.html#advertising" target="basefrm"><small>Advertise here?</small></a>' );

banners[6] = new banner( 'FreeRTOS paperbacks', '/Documentation/RTOS_book.html', '/banner-images/FreeRTOS-book-title-large.png', "0");
blurbs[6] = new banner_blurb( '<br><small>5 book editions are available, <a href="Documentation/RTOS_book.html" target="_blank"><b>eBook</b></a> &amp; <a href="http://bit.ly/duJ9R0" target="_blank"><b>paperback</b></a> - includes 16 <b>simple</b> examples' );

banners[6] = new banner( 'FreeRTOS documentation', '/Documentation/RTOS_book.html', '/banner-images/FreeRTOS-book.png', "0");
blurbs[6] = new banner_blurb( '<br><a href="RTOS-contact-and-support.html#advertising" target="basefrm"><small>Advertise here?</small></a>' );

banners[7] = new banner( 'FreeRTOS documentation', '/Documentation/RTOS_book.html', '/banner-images/FreeRTOS-book.png', "0");
blurbs[7] = new banner_blurb( '<br><a href="RTOS-contact-and-support.html#advertising" target="basefrm"><small>Advertise here?</small></a>' );

//banners[6] = new banner( 'SafeRTOS in ROM', 'http://www.highintegritysystems.com/index.php?option=com_content&view=article&id=93&Itemid=97', '/banner-images/SafeRTOS_in_ROM_banner.jpg', "0");
//blurbs[6] = new banner_blurb( '<br><a href="RTOS-contact-and-support.html#advertising" target="basefrm"><small>Advertise here?</small></a>' );

banners[8] = new banner( 'Connect Demo', 'http://www.highintegritysystems.com/safertos', '/banner-images/safertosbanner.gif', "1");
blurbs[8] = new banner_blurb( '<br><a href="RTOS-contact-and-support.html#advertising" target="basefrm"><small>Advertise here?</small></a>' );

banners[9] = new banner( 'FreeRTOS paperbacks', '/Documentation/RTOS_book.html', '/banner-images/FreeRTOS-book-title-large.png', "0");
blurbs[9] = new banner_blurb( '<br><small>5 book editions are available, <a href="Documentation/RTOS_book.html" target="_blank"><b>eBook</b></a> &amp; <a href="http://bit.ly/duJ9R0" target="_blank"><b>paperback</b></a> - includes 16 <b>simple</b> examples' );

banners[10] = new banner( 'FreeRTOS+ Ecosystem Showcase', 'http://www.highintegritysystems.com/middleware', '/banner-images/connectbanner.gif', "1");
blurbs[10] = new banner_blurb( '<br><a href="RTOS-contact-and-support.html#advertising" target="basefrm"><small>Advertise here?</small></a>' );

banners[11] = new banner( 'FreeRTOS paperbacks', '/Documentation/RTOS_book.html', '/banner-images/FreeRTOS-book-title-large.png', "0");
blurbs[11] = new banner_blurb( '<br><small>5 book editions are available, <a href="Documentation/RTOS_book.html" target="_blank"><b>eBook</b></a> &amp; <a href="http://bit.ly/duJ9R0" target="_blank"><b>paperback</b></a> - includes 16 <b>simple</b> examples' );

banners[12] = new banner( 'FreeRTOS paperbacks', '/Documentation/RTOS_book.html', '/banner-images/FreeRTOS-book-title-large.png', "0");
blurbs[12] = new banner_blurb( '<br><small>5 book editions are available, <a href="Documentation/RTOS_book.html" target="_blank"><b>eBook</b></a> &amp; <a href="http://bit.ly/duJ9R0" target="_blank"><b>paperback</b></a> - includes 16 <b>simple</b> examples' );

///////////////////////////////////////////////////////////////////////////////////
//
//         						END EDITS HERE
//
///////////////////////////////////////////////////////////////////////////////////

function show_banners2()
{
	var am		= banners.length;

	if(top == self)
	{
		if( typeof this.index == 'undefined' )
		{
			this.index = Math.floor(Math.random()*am);
		}

		var bn 		= banners[this.index];
		var bl		= blurbs[this.index];

		/*var image_size 	= (force_size == 1) ? ' height="' + img_height + 'px"' : '';*/
		/* With blurb var html 		= '<a href="' + bn.url + '" title="' + bn.name + '" target="_blank"><img border="0" src="' + bn.image + '"' + image_size + ' alt="' + bn.name+ '" /></a>' + bl.blurb; */
		var html = '<a href="' + bn.url + '" title="' + bn.name + '" target="_blank"><img src="' + bn.image + '" alt="' + bn.name+ '" style="border: ' + bn.border + 'px solid silver; padding: 0px; max-height:65px;"/></a>';
		this.index++;
		if( this.index >= am )
		{
			this.index = 0;
		}

		return html;
	}
	else
	{
		/* In case old frames pages are loading this, go to a page that does
		not exist in the old site. */
		top.location.href = document.location.href;
	}
}


