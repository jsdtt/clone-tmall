window.onload = function() {
  showPanel()
  showNormalNvaPannel()

  initBanner()

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
  const pannelWapper = document.getElementsByClassName('pannel-con')[0]

  nurmalNva.addEventListener('mouseover', function(e) {
    pannelWapper.style.display = 'block'
    if (e.target.nodeName.toUpperCase() === 'LI') {
      isShow(e.target)
    }
  }, false);
  pannelWapper.addEventListener('mouseleave', function() {
    pannelWapper.style.display = 'none'
  })
  nurmalNva.addEventListener('mouseleave', function(e) {
    if (e.toElement.className.toUpperCase() !== 'PANNEL-CON') {
      pannelWapper.style.display = 'none'
    }
  })

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
      if (!e.toElement) {
        return
      }
      if (pannelEle && e.toElement.className !== 'pannel-con') {
        pannelEle.style.display = 'none'
        element.className = element.className.substring(0, 20)
      }
    })
    pannelCon.addEventListener('mouseleave', function() {
      pannelEle.style.display = 'none'
      element.className = element.className.substring(0, 20)
    })
  }
}


function initBanner(info) {
  let index = 0;
  let bannerInfo = info || [{
      'bgcolor': 'rgb(136, 3, 227)',
      'url': 'https://img.alicdn.com/tps/TB1pMPLPXXXXXcTXpXXXXXXXXXX-1130-500.jpg_q100.jpg_.webp'
    },
    {
      'bgcolor': 'rgb(232, 232, 232)',
      'url': 'https://img.alicdn.com/simba/img/TB1XtWfPXXXXXaRaXXXSutbFXXX.jpg'
    },
    {
      'bgcolor': 'rgb(254, 89, 25)',
      'url': 'https://img.alicdn.com/tps/i4/TB1LT_KPXXXXXc6XVXXSutbFXXX.jpg'
    },
    {
      'bgcolor': 'rgb(232, 232, 232)',
      'url': 'https://img.alicdn.com/simba/img/TB1nGu6PXXXXXbAXVXXSutbFXXX.jpg'
    },
    {
      'bgcolor': 'rgb(5, 119, 201)',
      'url': 'https://img.alicdn.com/imgextra/i4/126/TB2doVedNtmpuFjSZFqXXbHFpXa_!!126-0-yamato.jpg_q100.jpg_.webp'
    },
    {
      'bgcolor': 'rgb(220, 30, 30)',
      'url': 'https://img.alicdn.com/imgextra/i2/12/TB2qxdJbMxlpuFjy0FoXXa.lXXa_!!12-0-yamato.jpg_q100.jpg_.webp'
    },
  ]
  let pannels = document.getElementsByClassName('slider-pannel')
  let banners = document.getElementsByClassName('blg-banner')
  let nvas = []

  for (item of document.getElementsByClassName('slider-nav')[0].childNodes) {
    if (item.nodeName !== '#text') {
      nvas.push(item)
    }
  }
  for (var i = 0; i < pannels.length; i++) {
    if (i !== 0) {
      pannels[i].style.opacity = 0
      pannels[i].style.display = 'none'
    }
    pannels[i].style.background = bannerInfo[i].bgcolor
    banners[i].style.background = `url('${bannerInfo[i].url}') no-repeat center center`
  }
  nvas[0].className = 'selected'

  let timer = setInterval(function() {
    index = index + 1 === pannels.length ? 0 : index + 1
    let pro = index - 1 < 0 ? banners.length - 1 : index - 1
    pannels[pro].style.opacity = 0
    pannels[index].style.display = 'block'
    nvas[pro].className = ''
    setTimeout(function() {
      pannels[index].style.opacity = 1
      nvas[index].className = 'selected'
    }, 400);
  }, 5000)

}
