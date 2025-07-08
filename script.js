const alertBox = document.getElementById("alertBox");

// 특정 요소가 뜨는지 주기적으로 감지
setInterval(() => {
  const target = document.querySelector('.target-alert');

  if (target) {
    alertBox.textContent = '⚠️ 알림: 감지되었습니다!';
  } else {
    alertBox.textContent = '';
  }
}, 1000); // 1초마다 감지

// 테스트용: 버튼 클릭 시 타겟 요소 생성
function showTarget() {
  const container = document.getElementById('container');
  const exists = document.querySelector('.target-alert');
  if (!exists) {
    const div = document.createElement('div');
    div.className = 'target-alert';
    div.textContent = '이건 감지 대상입니다!';
    container.appendChild(div);
  }
}
