window.onload = function() {
  showPanel()
  showNormalNvaPannel()

  initBanner()
  liveHover()
  window.onscroll = function() {
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
    let searchBars = document.getElementsByName('searchBar')
    if (scrollTop >= 600) {
      for (var i = 0; i < searchBars.length; i++) {
        if (!/\bshow\b/.test(searchBars[i].className)) {
          searchBars[i].className += " show"
        }
      }
    }
    if (scrollTop <= 580) {
      for (var i = 0; i < searchBars.length; i++) {
        searchBars[i].className = searchBars[i].className.replace(/\bshow\b/, '')
      }
    }
  }
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
  nurmalNva.addEventListener('mouseleave', function(e) {
    const toElemnt = e.toElement || e.relatedTarget
    // 当浏览器失去焦点的时候，toElement为null
    if (! toElemnt) {
      pannelWapper.style.display = 'none'
    }

  }, false);

  pannelWapper.addEventListener('mouseleave', function() {
    pannelWapper.style.display = 'none'
  })
  nurmalNva.addEventListener('mouseleave', function(e) {
    if (e.toElement && e.toElement.className.toUpperCase() !== 'PANNEL-CON') {
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
      if (!e.toElement || (pannelEle && e.toElement.className !== 'pannel-con')) {
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

/**
 * 初始化banner
 * @param  {[type]} info [description]
 * @return {[type]}      [description]
 */
function initBanner(info) {
  let index = 0;
  let bannerInfo = info || [{
      'bgcolor': 'rgb(136, 3, 227)',
      'url': 'https://img.alicdn.com/tps/TB1pMPLPXXXXXcTXpXXXXXXXXXX-1130-500.jpg_q100.jpg'
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
      'url': 'https://img.alicdn.com/imgextra/i4/126/TB2doVedNtmpuFjSZFqXXbHFpXa_!!126-0-yamato.jpg_q100.jpg'
    },
    {
      'bgcolor': 'rgb(220, 30, 30)',
      'url': 'https://img.alicdn.com/imgextra/i2/12/TB2qxdJbMxlpuFjy0FoXXa.lXXa_!!12-0-yamato.jpg_q100.jpg'
    },
  ]
  let pannels = document.getElementsByClassName('slider-pannel')
  let banners = document.getElementsByClassName('blg-banner')
  let nvas = []

  // for (item of document.getElementsByClassName('slider-nav')[0].childNodes) {
  //   if (item.nodeName !== '#text') {
  //     nvas.push(item)
  //   }
  // }
  nvas = getNodeChildrens(document.getElementsByClassName('slider-nav')[0].childNodes)
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

function liveHover() {
  let liveSlides = document.getElementsByClassName('live-slide-list')[0]
  let currentEle = liveSlides.getElementsByClassName('above-cover')[0]

  liveSlides.addEventListener('mouseover', function(e) {
    let fromEle, btnNode, bigLiveBtn, bigLiveTitle

    e = window.e || e
    fromEle = e.fromElement || e.relatedTarget
    bigLiveBtn = document.getElementsByClassName('big-live-cover')[0]
    bigLiveTitle = document.getElementsByClassName('big-live-title')[0]
    // 如果鼠标移入封面
    if (/\babove-cover\b/.test(e.target.className)) {
      if (currentEle === e.target) {
        return
      }

      if (document.all) { //判断浏览器是否为IE,如果存在document.all则为IE
        if (!e.target.contains(fromEle)) { // 判断调用onmouseover的对象(this)是否包含自身或子级，如果包含，则不执行
          console.log('IE will over');
        }
      } else { //标准浏览器下的方法
        var reg = e.target.compareDocumentPosition(fromEle);
        if (!(reg == 20 || reg == 0)) {
          if (!/\bslide-selected\b/.test(e.target.className)) {
            currentEle.className = currentEle.className.replace(/\b slide-selected\b/,'')
            getNodeChildrens(currentEle.childNodes)[0].style.display = 'none'

            e.target.className += ' slide-selected'
            btnNode = getNodeChildrens(e.target.childNodes)
            btnNode[0].style.display = 'block'

            bigLiveBtn.src = e.target.parentNode.getElementsByTagName('img')[0].src
            bigLiveTitle.innerHTML = btnNode[1].innerHTML
            // console.log(btnNode[0].getElementsByTagName('img')[0].src);
            currentEle = e.target
          }
        }
      }
    }

  }, false)

}

/**
 * 获取节点下的子节点，去除空格
 * @param  {[type]} elements [description]
 * @return {[type]}          [description]
 */
function getNodeChildrens(elements) {
  let nvas =[]
  for (item of elements) {
    if (item.nodeType === 1) {
      nvas.push(item)
    }
  }
  return nvas
}

function nextOrPerv(element) {
  let parentElement = element.parentNode
  let btns = parentElement.getElementsByTagName('a')
  if (/\bslide-page-next\b/.test(element.className)) {
    // debugger
    parentElement.style['margin-left'] = '-492px'
    element.style.display = 'none'
    btns[7].style.display = 'block'
  }else {
    element.parentNode.style['margin-left'] = '0'
    element.style.display = 'none'
    btns[6].style.display = 'block'
  }
}

function brandFresh() {
  let freshBtn = document.getElementById('brandFreshBtn')
  let brandItems = document.getElementsByClassName('brand-item')
  let i = 0
// 增加babel转换成Es5
  for (item of brandItems) {
    if (/\bbrand-fresh-animation\b/.test(item.className)) {
      item.className = item.className.replace(/\bbrand-fresh-animation\b/, '')
      item.className = item.className.replace(/\s/g,'')
    }
  }

  setTimeout(function (){
    for (item of brandItems) {
      item.className += " brand-fresh-animation"
      item.style['animation-delay'] = `${i/10}s`
      i = i === 6 ? 0 : i+1
      // ++i;
      // 同时进行数据替换操作就实现刷新了
    }
  },50)

}
