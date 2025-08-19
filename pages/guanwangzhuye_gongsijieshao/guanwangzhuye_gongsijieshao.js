function onClick() {
  location.href = '../../pages/guanwangzhuye_shouye/guanwangzhuye_shouye.html';
}

function onClick_1() {
  location.href = '../../pages/guanwangzhuye_chanpinzhongxin/guanwangzhuye_chanpinzhongxin.html';
}

function onClick_2() {
  location.href = '../../pages/guanwangzhuye_anlizhongxin/guanwangzhuye_anlizhongxin.html';
}

function onClick_3() {
  location.href = '../../pages/guanwangzhuye_ziyuanzhongxin/guanwangzhuye_ziyuanzhongxin.html';
}

function onClick_4() {
  location.href = '../../pages/guanwangzhuye_shouhoufuwu/guanwangzhuye_shouhoufuwu.html';
}

function onClick_5() {
  location.href = '../../pages/guanwangzhuye_guanyuwomen/guanwangzhuye_guanyuwomen.html';
}

function onClick_6() {
  location.href = '../../pages/guanwangzhuye_caigouhezuo/guanwangzhuye_caigouhezuo.html';
}

function onClick_7() {
  location.href = '../../pages/guanwangzhuye_mianfeishiyong/guanwangzhuye_mianfeishiyong.html';
}


function showContent(contentType) {
  // 隐藏所有内容区域
  document.getElementById('company-content').style.display = 'none';
  document.getElementById('service-content').style.display = 'none';
  document.getElementById('team-content').style.display = 'none';
  
  // 隐藏所有菜单项的活动状态
  document.getElementById('company-menu').classList.remove('active');
  document.getElementById('service-menu').classList.remove('active');
  document.getElementById('team-menu').classList.remove('active');
  
  // 隐藏所有logo图片
  document.getElementById('company-logo-img').style.display = 'none';
  document.getElementById('service-logo-img').style.display = 'none';
  document.getElementById('team-logo-img').style.display = 'none';
  
  // 显示对应的内容和图片
  if (contentType === 'company') {
    document.getElementById('company-content').style.display = 'block';
    document.getElementById('company-menu').classList.add('active');
    document.getElementById('company-logo-img').style.display = 'block';
  } else if (contentType === 'service') {
    document.getElementById('service-content').style.display = 'block';
    document.getElementById('service-menu').classList.add('active');
    document.getElementById('service-logo-img').style.display = 'block';
  } else if (contentType === 'team') {
    document.getElementById('team-content').style.display = 'block';
    document.getElementById('team-menu').classList.add('active');
    document.getElementById('team-logo-img').style.display = 'block';
  }
}