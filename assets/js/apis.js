async function solicitarQR() {
    const myHeaders = new Headers();
    myHeaders.append("x-api-secret", "70aa3a0caa6341f88b67ebb167ef7a50");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("x-api-key", "9fd4ac9c11b6455fa7270dba42a135ff");
    
    const raw = JSON.stringify({
      "pointOfSale": "4121565",
      "qrType": "dynamic",
      "amount": 5.19,
      "detail": "test postman GEO",
      "internalTransactionReference": "IXWAHROMYSCEZWQ",
      "format": "2"
    });
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    fetch("https://apis-merchant.qa.deunalab.com/merchant/v1/payment/request", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
}

async function preguntarPorPago() {
    const myHeaders = new Headers();
    myHeaders.append("x-api-secret", "70aa3a0caa6341f88b67ebb167ef7a50");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("x-api-key", "9fd4ac9c11b6455fa7270dba42a135ff");

    const raw = JSON.stringify({
    "idTransacionReference": "21f10448-0c6c-4b6b-9664-f23b897b58d1",
    "idType": "0"
    });

    const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
    };

    fetch("https://apis-merchant.qa.deunalab.com/merchant/v1/payment/info", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}