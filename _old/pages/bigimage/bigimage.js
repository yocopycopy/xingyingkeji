function onClick() {
  history.back();
}

/* 当前节点没有 JS */
document.addEventListener('DOMContentLoaded', function() {
  // 获取所有需要添加效果的section元素
  const sections = document.querySelectorAll('.section, .section_2, .section_3, .section_4, .section_5');
  
  // 为每个section添加鼠标移入和移出事件
  sections.forEach(section => {
    // 鼠标移入时放大
    section.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.1)'; // 放大到1.1倍
      this.style.transition = 'transform 0.5s ease'; // 添加平滑过渡效果
      this.style.zIndex = '10'; // 提高z-index确保放大时不会被其他元素遮挡
    });
    
    // 鼠标移出时恢复
    section.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)'; // 恢复原始大小
      this.style.zIndex = 'auto'; // 恢复z-index
    });
  });
});