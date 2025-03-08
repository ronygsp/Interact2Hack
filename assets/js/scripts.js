async function createPaymentRequest() {
    try {
        const response = await fetch("https://cors-anywhere.herokuapp.com/https://apis-merchant.qa.deunalab.com/merchant/v1/payment/request", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "9fd4ac9c11b6455fa7270dba42a135ff",
                "x-api-secret": "70aa3a0caa6341f88b67ebb167ef7a50"
            },
            body: JSON.stringify({
                "idTransacionReference": "21f10448-0c6c-4b6b-9664-f23b897b58d1",
                "idType": "0"
            })
        });

        const data = await response.json();

        // Check if the response was successful
        if (response.ok) {
            console.log("Payment request created successfully:", data);

            // Handle the QR code and deeplink from the response
            const qrCode = data.qr; // The QR code in base64 format
            const deeplink = data.deeplink; // The deeplink URL

            // You can display the QR code by setting it as the `src` for an image tag
            const qrImage = document.createElement("img");
            qrImage.src = qrCode;
            document.body.appendChild(qrImage); // Append to body or any container you'd like

            // Display the deeplink
            console.log("Payment deeplink:", deeplink);

            // Optionally, open the deeplink in a new tab
            window.open(deeplink, "_blank");
        } else {
            console.error("Failed to create payment request:", data);
        }
    } catch (error) {
        console.error("Error creating payment request:", error);
    }
}



async function getPaymentInfo() {
    const response = await fetch("https://apis-merchant.qa.deunalab.com/merchant/v1/payment/info", {
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
    console.log(data);
}
