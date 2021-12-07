function themeChanger ( theme )
{
  var getLinks = document.getElementsByTagName("link");
  for (var i = 0 ; i < getLinks.length ; i++ ) {
    if ((getLinks[i].rel.indexOf( "stylesheet" ) != -1) && getLinks[i].title) {
      getLinks[i].disabled = true ;
      if (getLinks[i].title == theme) {
        getLinks[i].disabled = false ;
      }
    }
  }
}