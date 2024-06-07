---
id: error-codes
title: Error Codes
---
<!-- F:\ZenDocs\docusaurus-2\docs\jquery-plugin\error-codes.md -->
# Error Codes

**The following table illustrates the meaning of error codes returned.**

| Error Code | Description |
|------------|-------------|
| E01 | Make sure fingerprint and apikey are passed. |
| E02-* | MerchantUniquePaymentId cannot be empty. |
| E03-* | The fingerprint should be unique every time. This can be achieved by using new MerchantUniquePaymentId and current Timestamp every time the plugin is opened. |
| E04 | Invalid Credentials. Applicable for V1 and V2 (V1 and V2 are deprecated). |
| E05 | Make sure fingerprint and apikey are passed. |
| E06 | Account is not active. Contact administrator. |
| E07 | Provided endpoint is not supported. |
| E08 | Invalid Credentials. Make sure fingerprint is correctly generated, refer to fingerprint generation logic. |
| E09 | Security violation. Close and open the plugin with fresh fingerprint. |
| E10 | Security violation. Close and open the plugin with fresh fingerprint. |
| E11 | Timestamp cannot be empty. Make sure to pass same timestamp as in generated fingerprint. |
| E13 | MerchantCode provided does not match with the provided credentials. |
| E14 | Security violation. Close and open the plugin with fresh fingerprint. |
| E15 | MerchantCode cannot be empty (V4 onwards). |
| E16 | Version cannot be empty. |
| E17 | CustomerEmail cannot be empty (V4 onwards). |
