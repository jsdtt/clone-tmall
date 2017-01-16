window.onload = function() {
  addHover()
}

function addHover() {
  let mytb = document.getElementById('myTaobao')
  let myTaobaoPanel = document.getElementById('menubd'),
      myFavority = document.getElementById('myFavority'),
      myFavorityPanel = document.getElementById('myFavorityPanel')
  let onPlam = false
  mytb.addEventListener('mouseover', function() {
    mytb.className = "menu-hd hover"
  })
  myTaobaoPanel.addEventListener('mouseover', function() {
    mytb.className = "menu-hd hover"
  })
  myTaobaoPanel.addEventListener('mouseout', function() {
    mytb.className = "menu-hd";
  })
  mytb.addEventListener('mouseout', function() {
    mytb.className = "menu-hd";
  })

  myFavority.addEventListener('mouseover', function() {
    myFavority.className = "menu-hd hover"
  })
  myFavorityPanel.addEventListener('mouseover', function() {
    myFavority.className = "menu-hd hover"
  })
  myFavorityPanel.addEventListener('mouseout', function() {
    myFavority.className = "menu-hd";
  })
  myFavority.addEventListener('mouseout', function() {
    myFavority.className = "menu-hd";
  })
}
