---
id: input-parameters
title: Input Parameters
---
<!-- F:\ZenDocs\docusaurus-2\docs\jquery-plugin\input-parameters.md -->
:::tip
Fields marked with <span class="required">*</span> are required when the mode is set to 0 or 2.
:::
## Input Parameters

| Field Name | Data Type | Conditional | Remarks |
|------------|-----------|-------------|---------|
| `url` | string | Required | Plugin access url. We strongly recommend v4 integration. |
| `merchantCode` | string | Required | As provided by Zenith. |
| `apiKey` | string | Required | As provided by Zenith |
| `fingerprint` | string | Required | The Fingerprint is a SHA3 (SHA512) hash (v4) or SHA1 hash (v3) of the fields in the following order with a pipe (|) as a separator. |
| `redirectUrl` | string | Required | The page will redirect to this URL with the result in the query string. Refer the return parameters section below. |
| `mode` | int | Optional | Must be one of the following three values: 0 - Make Payment, 1 - Tokenise, 2 - Custom Payment. Defaults to 0 if not provided. |
| `customerName` <span class="required">*</span> | string    | Conditional | Required if mode is set to 0 or 2. |
| `customerReference` <span class="required">*</span> | string    | Conditional | Required if mode is set to 0 or 2. |
| `paymentAmount` | number | Conditional | Required if mode is set to 0 or 2. Returns applicable fee if provided with mode 1. |
| `allowBankAcOneOffPayment` | boolean | Conditional | Required if mode is set to 0 or 2. Show bank account option only if the option is enabled for the merchant. Default is false. |
| `allowPayIdOneOffPayment` | boolean | Conditional | Required if mode is set to 0 or 2. Show PayID option only if the option is enabled for the merchant. Default is false. |
| `allowApplePayOneOffPayment` | boolean | Conditional | Required if mode is set to 0. Show Apple Pay option only if the option is enabled for the merchant. Default is false. |
| `allowGooglePayOneOffPayment` | boolean | Conditional | Required if mode is set to 0. Show Google Pay option only if the option is enabled for the merchant. Default is false. |
| `allowLatitudePayOneOffPayment` | boolean | Conditional | Required if mode is set to 0. Show Latitude Pay option only if the option is enabled for the merchant. Default is false. |
| `showFeeOnTokenising` | boolean | Conditional | Required if mode is set to 1. Show the applicable fees for the token at the end of the process. Default is false. |
| `showFailedPaymentFeeOnTokenising` | boolean | Conditional | Optional if mode is set to 1. Show the applicable failed payment fees for the token at the end of the process. Default is false. |
| `merchantUniquePaymentId` | string | Required | Payment id provided by the merchant. Must be unique and cannot be reused if a transaction is processed using this id. |
| `timestamp` | string | Conditional | Timestamp is required for v4 and optional for v3. Provide current datetime in UTC ISO 8601 format as timestamp. format: yyyy-MM-ddTHH:mm:ss |
| `cardProxy` | string | Optional | Use this parameter to make a payment using a card proxy which is generated using mode '1'. |
| `callbackUrl` | string | Optional | The URL will be called with HTTP POST method to submit the result. Refer the return parameters section below. |
| `hideTermsAndConditions` | boolean | Optional | This will hide the Terms and Conditions. Defaults to 'false' if not provided. |
| `sendConfirmationEmailToMerchant` | boolean | Optional | This will send confirmation email to merchant. Defaults to 'false' if not provided. |
| `additionalReference` | string | Optional | Additional reference to identify customer. This will be passed on to the merchant reconciliation file (PDF & CSV). |
| `contactNumber` | string | Optional | Contact number. |
| `abn` | string | Optional | Australian Business Number. Used for reward programs if the Program is enabled to provide reward points. |
| `companyName` | string | Optional | Customer company name. |
| `title` | string | Optional | Plugin Title. Defaults to 'Process Payment' if not provided. |
| `hideHeader` | boolean | Optional | This will hide the program header including program logo. Defaults to 'true' if not provided. |
| `hideMerchantLogo` | boolean | Optional | This will hide the merchant logo if any. Defaults to 'false' if not provided. |
| `overrideFeePayer` | boolean | Optional | Must be one of the following three values: 0 - Default (based on pricing profile), 1 - Merchant (Merchant will pay the fee regardless of pricing profile setting), 2 - Customer (Customer will pay the fee regardless of pricing profile setting). Defaults to 0 if not provided. |
| `userMode` | int | Optional | Must be one of the following two values: 0 - Customer Facing - default (cardholder must enter CCV or 3DS), 1 - Merchant Facing (for merchant use only - no CCV or 3DS) - if supported by merchant options. |
| `minHeight` | int | Optional | For Mode 0 and 2 height defaults to 725px, for mode 1 height defaults to 450px if not provided. |
| `onPluginClose` | function | Optional | Javascript callback function to execute when plug-in is closed. |
| `sendConfirmationEmailToCustomer` | boolean | Optional | This will send confirmation email to customer. Defaults to 'false' if not provided. |
