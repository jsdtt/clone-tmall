window.onload = function() {
  addHover()
}

function addHover() {
  let mytb = document.getElementById('myTaobao')
  let myTaobaoPanel = document.getElementById('menubd'),
      myFavority = document.getElementById('myFavority'),
      myFavorityPanel = document.getElementById('myFavorityPanel'),
      seller = document.getElementById('seller'),
      sellerPanel = document.getElementById('sellerPanel')
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

  seller.addEventListener('mouseover', function() {
    seller.className = "menu-hd hover"
  })
  sellerPanel.addEventListener('mouseover', function() {
    seller.className = "menu-hd hover"
  })
  sellerPanel.addEventListener('mouseout', function() {
    seller.className = "menu-hd";
  })
  seller.addEventListener('mouseout', function() {
    seller.className = "menu-hd";
  })
}
