window.onload = function() {
  showPanel()
}

function showPanel() {
  const topNavList = document.getElementById('top-nav-list')
  let currentMenu, menuPanel
  topNavList.addEventListener('mouseover', function(e){
    isShow(e, 'mouseover')
  }, false)
  topNavList.addEventListener('mouseout', function(e){
    isShow(e, 'mouseout')
  }, false)
  //通过事件代理实现菜单的显示
  function isShow (e, flag){
    if (e.target) {
      const targetClass = e.target.className.toUpperCase(),
            targetName = e.target.nodeName.toUpperCase()
      if (flag === 'mouseover') {
        if (targetClass === 'MENU-HD' && targetName === 'A') {
          e.target.className = "menu-hd hover"
          currentMenu = e.target
          menuPanel = currentMenu.nextElementSibling
        }
      }
      else {
        if ((menuPanel && window.getComputedStyle(menuPanel, null).display === 'none')) {
          currentMenu.className = "menu-hd"
        }
      }
    }

  }
}
