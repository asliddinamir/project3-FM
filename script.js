const nums = document.querySelectorAll('.num')
const btn = document.querySelector('.submit')
const selectedNumber = document.querySelector('.selected-number');

const selected = nums.forEach((num) => {
    num.addEventListener('click', () => {
        // Remove 'active' class from all nums elements
        nums.forEach((otherNum) => {
            otherNum.classList.remove('active');
        });

        // Add 'active' class to the clicked num element
        num.classList.add('active');

        console.log(num.innerText);
    });
});

btn.addEventListener('click', () => {
    const activeNum = document.querySelector('.num.active');

    if (activeNum) {
        selectedNumber.textContent = `You selected: ${activeNum.innerText} out of 5`;
    } else {
        selectedNumber.textContent = 'Please select a number first.';
    }
});



