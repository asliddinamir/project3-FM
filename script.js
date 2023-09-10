const nums = document.querySelectorAll('.num')
const btn = document.querySelector('.submit')
const backBtn = document.querySelector('.back')
const selectedNumber = document.querySelector('.selected-number');
const selectedNumber2 = document.querySelector('.selected-number2');
const container1 = document.getElementById('container1')
const container2 = document.getElementById('container2')


const selected = nums.forEach((num) => {
    num.addEventListener('click', () => {
        // Remove 'active' class from all nums elements
        nums.forEach((otherNum) => {
            otherNum.classList.remove('active');
        });

        // Add 'active' class to the clicked num element
        num.classList.add('active');
    });
});

btn.addEventListener('click', () => {
    const activeNum = document.querySelector('.num.active');

    if (activeNum) {
        container1.classList.add('hidden');
        container2.classList.remove('hidden')
        selectedNumber2.textContent = `You selected ${activeNum.innerText} out of 5`;
    } else {
        selectedNumber.textContent = 'Please select a number first.';
    }
});

backBtn.addEventListener('click', () => {
    container2.classList.add('hidden');
    container1.classList.remove('hidden');

    const activeNum2 = document.querySelector('.num.active')

    activeNum2.classList.remove('active')
})



