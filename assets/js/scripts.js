const proxyUrl = 'https://cors-anywhere.herokuapp.com/'

async function createPaymentRequest() {
    const apiUrl = 'https://apis-merchant.qa.deunalab.com/merchant/v1/payment/request';
    const response = await fetch(proxyUrl + apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': '9fd4ac9c11b6455fa7270dba42a135ff',
            'x-api-secret': '70aa3a0caa6341f88b67ebb167ef7a50'
        },
        body: JSON.stringify({
            'pointOfSale': '4121565',
            'qrType': 'dynamic',
            'amount': 5.19,
            'detail': 'test postman GEO',
            'internalTransactionReference': 'IXWAHROMYSCEZWQ',
            'format': '2'
        })
    });

    const data = await response.json();
    const qrData = data.qr;
    const img = document.getElementById('qr-image');
    img.src = qrData;
    img.style.display = 'block';
}


async function getPaymentInfo() {
    const apiUrl = 'https://apis-merchant.qa.deunalab.com/merchant/v1/payment/info';
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // Ensure this is added for CORS proxy

    const response = await fetch(proxyUrl + apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-api-key": "9fd4ac9c11b6455fa7270dba42a135ff",
            "x-api-secret": "70aa3a0caa6341f88b67ebb167ef7a50"
        },
        body: JSON.stringify({
            idTransacionReference: "21f10448-0c6c-4b6b-9664-f23b897b58d1",
            idType: "0"
        })
    });

    const data = await response.json();
    const status = data.status || "Unknown status";
    const description = data.description || "No description available";
    showNotification(status, description);
}

function showNotification(status, description) {
    const notification = document.getElementById("notification");
    const notificationContent = document.getElementById("notification-content");
    const notificationBar = document.getElementById("notification-bar");

    notificationContent.innerHTML = `<strong>Status:</strong> ${status}<br><strong>Description:</strong> ${description}`;
    notificationBar.style.width = "0%";
    notification.style.display = "block";

    let width = 0;
    const interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                notification.style.display = "none";
            }, 500);
        } else {
            width++;
            notificationBar.style.width = width + "%";
        }
    }, 50);

    setTimeout(() => {
        notification.style.display = "none";
    }, 5500);
}

function selectToggle(option) {
    const misElem = document.getElementById('misEmprendimientos');
    const explorarElem = document.getElementById('explorarEmprendimientos');
    if (option === 'mis') {
        misElem.classList.add('active');
        misElem.classList.remove('inactive');
        explorarElem.classList.add('inactive');
        explorarElem.classList.remove('active');
        // Maintain existing view for Mis Emprendimientos (additional actions can go here)
    } else if (option === 'explorar') {
        misElem.classList.remove('active');
        misElem.classList.add('inactive');
        explorarElem.classList.remove('inactive');
        explorarElem.classList.add('active');
        // Future functionality for exploring emprendimientos can be added here
    }
}