---
id: return-parameters
title: Return Parameters
---
<!-- F:\ZenDocs\docusaurus-2\docs\jquery-plugin\return-parameters.md -->
# Return Parameters

## Mode 0 and 2

**The following parameters are returned in mode 0 and 2. Same payload is also delivered in JSON format if callback URL is provided.**

| Parameter | Value |
|-----------|-------|
| CustomerName | Same as input parameter. |
| CustomerReference | Same as input parameter. |
| MerchantUniquePaymentId | Same as input parameter. |
| AccountOrCardNo | Account or card number used to process payment. |
| PaymentReference | Payment reference. |
| ProcessorReference | Processor reference. |
| PaymentStatus | Possible values 0 => (Pending) 1 => (Error) 3 => (Successful) 4 => (Failed) 5 => (Cancelled) 6 => (Suppressed) 7 => (InProgress) |
| PaymentStatusString | Possible values Pending Error Successful Failed Cancelled Suppressed InProgress |
| TransactionSource | Possible values 36 => (Public_OnlineOneOffPayment) |
| TransactionSourceString | Possible values Public_OnlineOneOffPayment |
| ProcessingDate | The date and time when the payment is processed. format: yyyy-MM-ddTHH:mm:ss |
| SettlementDate | The date when the payment is settled to the merchant. format: yyyy-MM-dd |
| IsPaymentSettledToMerchant | Flag to indicate whether the funds are settled to the merchant or not. |
| BaseAmount | Same as payment amount. |
| CustomerFee | Fee charged to the customer to process the payment. |
| ProcessedAmount | Base amount + Customer fee. |
| FundsToMerchant | Base amount - Merchant fee, if applicable. |
| MerchantCode | Merchant code. |
| FailureCode | Populated only when payment is not successful. |
| FailureReason | Populated only when payment is not successful. |
| Token | Returned only if payment is processed using cardProxy input parameter. The value will be same as cardProxy. |
| PayId | Returned only if payment is processed using PayID. |
| PayIdName | Returned only if payment is processed using PayID. Display name for the PayID |

## Mode 1

**The following parameters are returned in mode 1. Same payload is also delivered in JSON format if callback URL is provided.**

| Parameter | Value |
|-----------|-------|
| Token | The proxy that can be saved and then use to process payment using API or payment plugin. |
| CardType | Type of card i.e. Visa, MasterCards, American Express Or Bank Account. |
| CardHolderName | Card holder name provided by the user. Returned only if user selects credit / debit card. |
| CardNumber | Obfuscated card number provided by the user. Returned only if user selects credit / debit card. |
| CardExpiry | Card expiry date. Returned only if user selects credit / debit card. format: MM/CCYY |
| AccountName | Account name provided by the user. Returned only if user selects bank account. |
| AccountNumber | Obfuscated account number provided by the user. Returned only if user selects bank account. |
| PayId | Returned only if payment is processed using PayID. |
| PayIdName | Returned only if payment is processed using PayID. Display name for the PayID |
| IsRestrictedCard | Flag to indicate whether the card is restricted or not. |
| PaymentAmount | Same as input parameter. |
| CustomerFee | Customer fee applicable to process a payment of amount specified in PaymentAmount input parameter. |
| MerchantFee | Merchant fee applicable to process a payment of amount specified in PaymentAmount input parameter. |
| ProcessingAmount | The total amount that will be processed i.e. PaymentAmount + CustomerFee. |
