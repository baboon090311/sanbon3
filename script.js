
document.addEventListener('DOMContentLoaded', function() {
    const drawButton = document.getElementById('drawButton');
    const resetButton = document.getElementById('resetButton');
    const resultContainer = document.getElementById('result');
    const numbersDisplay = document.getElementById('selectedNumbers');
    
    drawButton.addEventListener('click', drawCleaningDuty);
    resetButton.addEventListener('click', resetSelection);
    
    function drawCleaningDuty() {
        // 1부터 25까지의 숫자 배열 생성
        const numbers = Array.from({length: 25}, (_, i) => i + 1);
        
        // 피셔-예이츠 셔플 알고리즘으로 배열 섞기
        for (let i = numbers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
        }
        
        // 처음 5개 숫자 선택하고 정렬
        const selectedNumbers = numbers.slice(0, 5).sort((a, b) => a - b);
        
        // 결과 표시
        displayResults(selectedNumbers);
    }
    
    function displayResults(numbers) {
        // 기존 결과 초기화
        numbersDisplay.innerHTML = '';
        
        // 각 번호를 카드로 표시
        numbers.forEach((number, index) => {
            setTimeout(() => {
                const numberCard = document.createElement('div');
                numberCard.className = 'number-card';
                numberCard.textContent = number + '번';
                numbersDisplay.appendChild(numberCard);
            }, index * 100); // 순차적으로 나타나는 애니메이션
        });
        
        // 결과 컨테이너 표시
        resultContainer.classList.add('show');
        
        // 다시 뽑기 버튼 표시
        setTimeout(() => {
            resetButton.classList.add('show');
        }, numbers.length * 100 + 300);
        
        // 뽑기 버튼 비활성화 (선택사항)
        drawButton.style.opacity = '0.7';
        drawButton.style.pointerEvents = 'none';
    }
    
    function resetSelection() {
        // 결과 숨기기
        resultContainer.classList.remove('show');
        resetButton.classList.remove('show');
        
        // 뽑기 버튼 다시 활성화
        drawButton.style.opacity = '1';
        drawButton.style.pointerEvents = 'auto';
        
        // 결과 초기화
        setTimeout(() => {
            numbersDisplay.innerHTML = '';
        }, 500);
    }
});
