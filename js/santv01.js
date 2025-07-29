
  document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".dark");

    elements.forEach(function (element) {
      element.addEventListener("click", function (event) {
        event.preventDefault();
        // 执行
		gtagok();
      });
    });
  });

  function gtagok(url) {
	  gtag_report_conversion('https://www.googlalab.com/V32CA5'); 
  }
  document.addEventListener('DOMContentLoaded', function () {
    const privacyModal = document.getElementById('privacyPolicyModal');
    const privacyLink = document.getElementById('privacyPolicyLink');
    const closePrivacyBtn = document.getElementById('closePrivacyBtn');
    const closePrivacyFooterBtn = document.getElementById('closePrivacyFooterBtn');

    // 打开隐私政策弹窗
    privacyLink.addEventListener('click', function () {
        privacyModal.classList.add('show');
    });

    // 关闭按钮点击
    closePrivacyBtn.addEventListener('click', function () {
        privacyModal.classList.remove('show');
    });

    // 点击遮罩层关闭
    privacyModal.addEventListener('click', function (e) {
        if (e.target === privacyModal) {
            privacyModal.classList.remove('show');
        }
    });

    // 底部关闭按钮
    closePrivacyFooterBtn.addEventListener('click', function () {
        privacyModal.classList.remove('show');
    });
});
