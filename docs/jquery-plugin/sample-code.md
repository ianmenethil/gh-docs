---
id: sample-code
title: Sample Code
---
<!-- F:\ZenDocs\docusaurus-2\docs\jquery-plugin\sample-code.md -->
# Sample Code

**Include the following in your code**

Stylesheet:
```https://cdn.<<PROGRAM DOMAIN>>.com.au/css/zenpay.payment.css```

JavaScript:
```https://cdn.<<PROGRAM DOMAIN>>.com.au/js/zenpay.payment.js```

The implementation depends on jQuery version 3.4.1 and requires jQuery to be included in your code.

Execute the following jQuery code on the click of your ”Pay Now” button.


```html title="src/components/zenpay.js"
var payment = $.zpPayment({
    url: 'https://<<PROGRAM SUB-DOMAIN>>.<<PROGRAM DOMAIN>>/online/v4',
    merchantCode: '<<MERCHANT-CODE>>',
    apiKey: '<<API-KEY>>',
    fingerprint: '<<FINGERPRINT>>',
    redirectUrl: '<<Your Redirect URL>>',
    mode: 0,
    customerName: 'Customer Name',
    customerReference: 'Reference 1',
    paymentAmount: 100.00
});
payment.open();
```

PROGRAM DOMAIN, PROGRAM SUB-DOMAIN, and API-KEY will be provided by Zenith Payments. (Note that these will be different for each environment i.e. Live and UAT )
For FINGERPRINT refer to the parameter details below.

