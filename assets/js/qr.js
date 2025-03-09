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
}

window.onload = function() {
    createPaymentRequest();
};