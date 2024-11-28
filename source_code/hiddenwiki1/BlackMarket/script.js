// script.js

// Показать модальное окно
function openModal() {
    document.getElementById('registrationModal').classList.remove('hidden');
}

// Закрыть модальное окно
function closeModal() {
    document.getElementById('registrationModal').classList.add('hidden');
}

// Показать/скрыть детали лота
function toggleDetails(detailsId) {
    const detailsElement = document.getElementById(detailsId);
    if (detailsElement.classList.contains('hidden')) {
        detailsElement.classList.remove('hidden');
    } else {
        detailsElement.classList.add('hidden');
    }
}

// Отправка формы
document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    alert(`Welcome, ${username}! Your email: ${email}`);
    closeModal();
});


// Обработка формы покупки
document.getElementById('purchaseForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const lotId = document.getElementById('lotId').value.trim();
    const email = document.getElementById('email').value.trim();
    const purchaseResult = document.getElementById('purchaseResult');

    if (lotId && email) {
        purchaseResult.textContent = `Thank you for leaving request of the lot with ID ${lotId}! We will send the details to the mail: ${email}`;
    } else {
        purchaseResult.textContent = `Error: Please fill in all fields.`;
    }
});