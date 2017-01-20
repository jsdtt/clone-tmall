window.onload = function() {
  showPanel()
  showNormalNvaPannel()
}

/**
 * 事件代理实现li的监听，显示子菜单
 */
function showPanel() {
  const topNavList = document.getElementById('top-nav-list')
  let currentMenu, menuPanel
  topNavList.addEventListener('mouseover', function(e) {
    isShow(e, 'mouseover')
  }, false)
  topNavList.addEventListener('mouseout', function(e) {
    isShow(e, 'mouseout')
  }, false)
  /**
   * 动态给元素添加hover class
   * @param  {[Object]}  e    [MouseEvent]
   * @param  {[string]}  flag [description]
   */
  function isShow(e, flag) {
    if (e.target) {
      const targetClass = e.target.className.toUpperCase(),
        targetName = e.target.nodeName.toUpperCase()
      if (flag === 'mouseover') {
        if (targetClass === 'MENU-HD' && targetName === 'A') {
          e.target.className = "menu-hd hover"
          currentMenu = e.target
          menuPanel = currentMenu.nextElementSibling
        }
      } else {
        if ((menuPanel && window.getComputedStyle(menuPanel, null).display === 'none')) {
          currentMenu.className = "menu-hd"
        }
      }
    }

  }
}

/**
 * 当鼠标移动到左侧分类导航栏时显示右侧具体项目
 * - -感觉这样写好像会有性能问题呢
 */
function showNormalNvaPannel() {
  const nurmalNva = document.getElementById('normal-nva')

  nurmalNva.addEventListener('mouseover', function(e) {
    if (e.target.nodeName.toUpperCase() === 'LI') {
      isShow(e.target)
    }
  }, false);

  function isShow(element) {
    let pannelEle, nvaEle
    let pannel, className
    const pannelCon = document.getElementsByClassName('pannel-con')[0]

    className = element.className
    element.className += ' nva-item-hover'
    pannel = `pannel-${className.substring(18, 20)}`
    pannelEle = document.getElementsByClassName(pannel)[0]
    element.addEventListener('mouseenter', function functionName() {
      if (pannelEle) {
        pannelEle.style.display = 'block'
      }
    })
    element.addEventListener('mouseleave', function functionName(e) {
      if (pannelEle && e.toElement.className !== 'pannel-con') {
        pannelEle.style.display = 'none'
        element.className = element.className.substring(0, 20)
      }
    })
    pannelCon.addEventListener('mouseleave', function () {
      pannelEle.style.display = 'none'
      element.className = element.className.substring(0, 20)
    })
  }
}
