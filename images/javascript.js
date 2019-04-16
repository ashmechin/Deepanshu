//Common Variables
var xmlDoc;
var albumName;
var xmlObj;
var moz;
var ie;
var divHTML;
var xmlloaded = false;
//Variables specific to Gallery
var totalNumber;
var pageCount;
var iFirstIndex=0;
var iLastIndex = 0;
var pageSize=24;
var currentPage =0;
//Variables specific to Albums
var totalAlbums;
var albumsPageCount;
var iAlbumsFirstIndex=0;
var iAlbumsLastIndex = 0;
var albumsPageSize=8;
var albumsCurrentPage =0;
// Variables specific to Slide Show
var interval = 1500;
var random_display = 0;
var imageNum = 0;
var imageArray = new Array();
var totalImages;

//************************************************
//Common Functions Start
//************************************************
function loadXML(type) {
	var mediaType = "images/gallery.xml";
	if (type == "video") {
		mediaType = "images/gallery.xml";
	}
	try
	{
        moz = (typeof document.implementation != 'undefined') && (typeof document.implementation.createDocument != 'undefined');
        ie = (typeof window.ActiveXObject != 'undefined');
        var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET", mediaType, false);
    }
    catch (Exception) {
        //ie = (typeof window.ActiveXObject != 'undefined');
        if (ie) {
            xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
            xmlDoc.async = false;
			alert(xmlDoc.readyState);
            while (xmlDoc.readyState != 4) { };
            xmlDoc.load("images/gallery.xml");
            xmlloaded = true;
        }
        else {
            xmlDoc = document.implementation.createDocument("", "", null);
            xmlDoc.onload = readXML;
            xmlDoc.load("images/gallery.xml");
            xmlloaded = true;
        }
    }

    if (!xmlloaded) {
	    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
        xmlhttp.send();
        xmlDoc = xmlhttp.responseXML;
        xmlloaded = true;
    }

//    moz = (typeof document.implementation != 'undefined') && (typeof document.implementation.createDocument != 'undefined'); 
//    ie = (typeof window.ActiveXObject != 'undefined'); 
//    if (ie) 
//    {
//        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
//        xmlDoc.async="false";
//        xmlDoc.onreadystatechange=verify;
//        xmlDoc.load("gallery.xml");
//    }
//    else 
//    { // the mozilla way
//        xmlDoc = document.implementation.createDocument("", "doc", null); 
//        xmlDoc.async=false;
//        xmlDoc.load("gallery.xml");
//    }
    loadCSS();
}
function verify()
{
  // 0 Object is not initialized
  // 1 Loading object is loading data
  // 2 Loaded object has loaded data
  // 3 Data from object can be worked with
  // 4 Object completely initialized
  if (xmlDoc.readyState != 4)
  {
      return false;
  }
}
function loadCSS()
{
    var gallery = xmlDoc.getElementsByTagName("Gallery");
    var cssName = gallery[0].getAttribute("css");
//alert(cssName);
    var headID = document.getElementsByTagName("head")[0];         
    var cssNode = document.createElement('link');
    cssNode.type = 'text/css';
    cssNode.rel = 'stylesheet';
    cssNode.href = cssName;
    cssNode.media = 'screen';
    headID.appendChild(cssNode);

	var d = new Date();
	var curr_year = d.getFullYear(); 
    var divRights = document.getElementById("rights");
    var rightName = gallery[0].getAttribute("rights");
	divRights.innerHTML = "&copy; 2010 - " + curr_year + rightName;

    var divHeader = document.getElementById("headertext");
    var headerText = gallery[0].getAttribute("headertext");
    divHeader.innerHTML = headerText;
}

//************************************************
//Common Functions End
//************************************************

//************************************************
//Functions specific to albums loading Start
//************************************************
function loadAlbums()
{
    loadXML("images");
    var gallery = xmlDoc.getElementsByTagName("Gallery");
    var albums=gallery[0].getElementsByTagName("Album");   

    totalAlbums = albums.length;
    if(totalAlbums<albumsPageSize)
    {
        iAlbumsLastIndex=totalAlbums;
    }
    else
    {
        iAlbumsLastIndex = (albumsPageSize * (albumsCurrentPage + 1));
    }
    albumsPageCount= Math.ceil(totalAlbums/albumsPageSize); 
    loadAlbumsHTML();
}
function loadAlbumsHTML()
{
    divHTML = "<ul>";
    var liHTML = "";
    
    var gallery = xmlDoc.getElementsByTagName("Gallery");
    var albums=gallery[0].getElementsByTagName("Album");
    var counter = iAlbumsFirstIndex;

    for(counter;counter<iAlbumsLastIndex;counter++) 
    {
        if(liHTML=="")
        {
			liHTML = "<li><a href='gallery.htm?a=" + albums[counter].getAttribute("name") + "'><b><img src='" + albums[counter].getAttribute("url") + "'/></b></a><span>" + albums[counter].getAttribute("name") + "</span></li>";
        }
        else
        {
			liHTML = liHTML + "<li><a href='gallery.htm?a=" + albums[counter].getAttribute("name") + "'><b><img src='" + albums[counter].getAttribute("url") + "'/></b></a><span>" + albums[counter].getAttribute("name") + "</span></li>";
        }
    }
    divHTML = divHTML + liHTML + "</ul>" + loadAlbumsNumbering();
    var div = document.getElementById("albums");
    div.innerHTML = divHTML;
}
function loadAlbumsNumbering()
{
    var numberHTML = "";
    if(albumsPageCount>1)
    {
        numberHTML = "<div id='divnumber'><a href='#nogo' onclick='javascript:backAlbumImages();'>Prev</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='#nogo' onclick='javascript:nextAlbumImages();'>Next</a></div>";
        if(iAlbumsLastIndex==totalAlbums)
        {
            numberHTML = "<div id='divnumber'><a href='#nogo' onclick='javascript:backAlbumImages();'>Prev</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>";
        }
        if(albumsCurrentPage==0)
        {
            numberHTML = "<div id='divnumber'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='#nogo' onclick='javascript:nextAlbumImages();'>Next</a></div>";            
        }
    }
    else
    {
        //numberHTML = "</ul>";
    }
    return numberHTML;
}
function nextAlbumImages()
{
    albumsCurrentPage = albumsCurrentPage+1;
    iAlbumsFirstIndex = iAlbumsLastIndex;
    iAlbumsLastIndex = (albumsPageSize * (albumsCurrentPage + 1));
    if((albumsPageSize * (albumsCurrentPage + 1)) > totalAlbums)
    {
        iAlbumsLastIndex= totalAlbums;
    }
    loadAlbumsHTML();
}
function backAlbumImages()
{
    albumsCurrentPage = albumsCurrentPage-1;
    iAlbumsLastIndex = (albumsPageSize * (albumsCurrentPage + 1));
    iAlbumsFirstIndex = iAlbumsLastIndex - albumsPageSize;
    loadAlbumsHTML();
}

//************************************************
//Functions specific to albums loading End
//************************************************

//************************************************
//Functions specific to gallery loading Start
//************************************************
function loadGallery()
{
    loadXML("images");
    var fullURL = parent.document.URL ;
    albumName = fullURL.substring(fullURL.indexOf('?')+3, fullURL.length);
    albumName = albumName.replace("#nogo", "");
    albumName = unescape(albumName);
    var xPath = '/Gallery/Album[@name="' + albumName + '"]';
    
    if (ie) 
    {
        xmlObj = xmlDoc.selectSingleNode(xPath);
    }
    else 
    { // the mozilla way
        xmlObj = xmlDoc.evaluate( xPath, xmlDoc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue;
    }
    var images=xmlObj.getElementsByTagName("image");
    totalNumber = images.length;
    if(totalNumber<pageSize)
    {
        iLastIndex=totalNumber;
    }
    else
    {
        iLastIndex = (pageSize * (currentPage + 1));
    }
    
    pageCount= Math.ceil(totalNumber/pageSize);  
    loadHTML();
}
function loadHTML()
{
    divHTML = "<b class='default'><img src='" + xmlObj.getAttribute("url") + "'/><span>" + xmlObj.getAttribute("name") + "</span></b><ul>";
    var images=xmlObj.getElementsByTagName("image");
    var liHTML = "";
    var counter = iFirstIndex;
    for(counter;counter<iLastIndex;counter++) 
    {
        var headertext;
        if(images[counter].firstChild)
        {
            headertext = images[counter].firstChild.nodeValue;
        }
        else
        {
            headertext = "";
        }
        if(liHTML=="")
        {
            liHTML = "<li><a href='#nogo'><b><img src='" + images[counter].getAttribute("url") + "'/><span>" + headertext + "</span></b></a></li>";
        }
        else
        {
            liHTML = liHTML + "<li><a href='#nogo'><b><img src='" + images[counter].getAttribute("url") + "'/><span>" + headertext + "</span></b></a></li>";
        }
    }
    divHTML = divHTML + liHTML + loadNumbering();
    var div = document.getElementById("gallery");
    document.getElementById("albumname").innerHTML = xmlObj.getAttribute("name");
    div.innerHTML = divHTML;
    
    var lnkSlide = document.getElementById("lnkSlide");
    lnkSlide.href = 'slide.htm?a=' + albumName;
}
function loadNumbering()
{
    var numberHTML;
    if(pageCount>1)
    {
        numberHTML = "<div id='divnumber'><a href='#nogo' onclick='javascript:backImages();'>Prev</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='#nogo' onclick='javascript:nextImages();'>Next</a></div></ul>";
        if(iLastIndex==totalNumber)
        {
            numberHTML = "<div id='divnumber'><a href='#nogo' onclick='javascript:backImages();'>Prev</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div></ul>";
        }
        if(currentPage==0)
        {
            numberHTML = "<div id='divnumber'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='#nogo' onclick='javascript:nextImages();'>Next</a></div></ul>";            
        }
    }
    else
    {
        numberHTML = "</ul>";
    }
    return numberHTML;
}
function nextImages()
{
    currentPage = currentPage+1;
    iFirstIndex = iLastIndex;
    iLastIndex = (pageSize * (currentPage + 1));
    if((pageSize * (currentPage + 1)) > totalNumber)
    {
        iLastIndex= totalNumber;
    }
    loadHTML();
}
function backImages()
{
    currentPage = currentPage-1;
    iLastIndex = (pageSize * (currentPage + 1));
    iFirstIndex = iLastIndex - pageSize;
    loadHTML();
}
//************************************************
//Functions specific to gallery loading End
//************************************************

//************************************************
//Functions specific to slide show Start
//************************************************
function CreateImageArray()
{
    loadXML("images");
    var fullURL = parent.document.URL ;
    albumName = fullURL.substring(fullURL.indexOf('?')+3, fullURL.length);
    albumName = albumName.replace("#nogo", "");
    albumName = unescape(albumName);
    var xPath = '/Gallery/Album[@name="' + albumName + '"]';
    
    if (ie) 
    {
        xmlObj = xmlDoc.selectSingleNode(xPath);
    }
    else 
    { // the mozilla way
        xmlObj = xmlDoc.evaluate( xPath, xmlDoc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null ).singleNodeValue;
    }
    var images=xmlObj.getElementsByTagName("image");
    var liHTML = "";
    var counter = 0;
    for(counter;counter<images.length;counter++) 
    {
        imageArray[imageNum++] = new imageItem(images[counter].getAttribute("url"));
    }
    totalImages = imageArray.length;
    document.getElementById("albumname").innerHTML = albumName;
    
    showDefaultImage('slideImg');
}
function showDefaultImage(place)
{
    imageNum = 0;
    var new_image = get_ImageItemLocation(imageArray[imageNum]);
    document[place].src = new_image;
}
function imageItem(image_location) 
{
    this.image_item = new Image();
    this.image_item.src = image_location;
}
function get_ImageItemLocation(imageObj) 
{
    return(imageObj.image_item.src)
}
function randNum(x, y) 
{
    var range = y - x + 1;
    return Math.floor(Math.random() * range) + x;
}
function getNextImage() 
{
    if (random_display) 
    {
        imageNum = randNum(0, totalImages-1);
    }
    else 
    {
    imageNum = (imageNum+1) % totalImages;
    }
    var new_image = get_ImageItemLocation(imageArray[imageNum]);
    return(new_image);
}
function getPrevImage() 
{
    imageNum = (imageNum-1) % totalImages;
    var new_image = get_ImageItemLocation(imageArray[imageNum]);
    return(new_image);
} 
function prevImage(place) 
{
    var new_image = getPrevImage();
    document[place].src = new_image;
    var recur_call = "switchImage('"+place+"')";
    timerID = setTimeout(recur_call, interval);
}
function switchImage(place) 
{
    var new_image = getNextImage();
    document[place].src = new_image;
    var recur_call = "switchImage('"+place+"')";
    timerID = setTimeout(recur_call, interval);
}
//************************************************
//Functions specific to slide show End
//************************************************

//************************************************
//Functions specific to albums loading Start
//************************************************
function loadVideos() {
	loadXML("videos");
	var gallery = xmlDoc.getElementsByTagName("Gallery");
	var albums = gallery[0].getElementsByTagName("Album");

	totalAlbums = albums.length;
	if (totalAlbums < albumsPageSize) {
		iAlbumsLastIndex = totalAlbums;
	}
	else {
		iAlbumsLastIndex = (albumsPageSize * (albumsCurrentPage + 1));
	}
	albumsPageCount = Math.ceil(totalAlbums / albumsPageSize);
	loadAlbumsHTML();
}
function loadAlbumsHTML() {
	divHTML = "<ul>";
	var liHTML = "";

	var gallery = xmlDoc.getElementsByTagName("Gallery");
	var albums = gallery[0].getElementsByTagName("Album");
	var counter = iAlbumsFirstIndex;

	for (counter; counter < iAlbumsLastIndex; counter++) {
		if (liHTML == "") {
			liHTML = "<li><a href='gallery.htm?a=" + albums[counter].getAttribute("name") + "'><b><img src='" + albums[counter].getAttribute("url") + "'/></b></a><span>" + albums[counter].getAttribute("name") + "</span></li>";
		}
		else {
			liHTML = liHTML + "<li><a href='gallery.htm?a=" + albums[counter].getAttribute("name") + "'><b><img src='" + albums[counter].getAttribute("url") + "'/></b></a><span>" + albums[counter].getAttribute("name") + "</span></li>";
		}
	}
	divHTML = divHTML + liHTML + "</ul>" + loadAlbumsNumbering();
	var div = document.getElementById("albums");
	div.innerHTML = divHTML;
}
function loadAlbumsNumbering() {
	var numberHTML = "";
	if (albumsPageCount > 1) {
		numberHTML = "<div id='divnumber'><a href='#nogo' onclick='javascript:backAlbumImages();'>Prev</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='#nogo' onclick='javascript:nextAlbumImages();'>Next</a></div>";
		if (iAlbumsLastIndex == totalAlbums) {
			numberHTML = "<div id='divnumber'><a href='#nogo' onclick='javascript:backAlbumImages();'>Prev</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>";
		}
		if (albumsCurrentPage == 0) {
			numberHTML = "<div id='divnumber'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='#nogo' onclick='javascript:nextAlbumImages();'>Next</a></div>";
		}
	}
	else {
		//numberHTML = "</ul>";
	}
	return numberHTML;
}
function nextAlbumImages() {
	albumsCurrentPage = albumsCurrentPage + 1;
	iAlbumsFirstIndex = iAlbumsLastIndex;
	iAlbumsLastIndex = (albumsPageSize * (albumsCurrentPage + 1));
	if ((albumsPageSize * (albumsCurrentPage + 1)) > totalAlbums) {
		iAlbumsLastIndex = totalAlbums;
	}
	loadAlbumsHTML();
}
function backAlbumImages() {
	albumsCurrentPage = albumsCurrentPage - 1;
	iAlbumsLastIndex = (albumsPageSize * (albumsCurrentPage + 1));
	iAlbumsFirstIndex = iAlbumsLastIndex - albumsPageSize;
	loadAlbumsHTML();
}

//************************************************
//Functions specific to albums loading End
//************************************************

function GetCurrentdate()
{
    var m_names = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    var d = new Date();
    var curr_date = d.getDate();
    var sup = "";
    if (curr_date == 1 || curr_date == 21 || curr_date ==31)
       {
       sup = "st";
       }
    else if (curr_date == 2 || curr_date == 22)
       {
       sup = "nd";
       }
    else if (curr_date == 3 || curr_date == 23)
       {
       sup = "rd";
       }
    else
       {
       sup = "th";
       }
    var curr_month = d.getMonth();
	var curr_year = d.getFullYear();
    document.write(curr_date + "<SUP>" + sup + "</SUP> " + m_names[curr_month] + " " + curr_year);
}