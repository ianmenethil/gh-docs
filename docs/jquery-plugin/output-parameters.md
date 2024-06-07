---
id: output-parameters
title: Output Parameters
---
<!-- F:\ZenDocs\docusaurus-2\docs\jquery-plugin\output-parameters.md -->
# Output Parameters
The following parameters are returned in mode 0 and 2. Same payload is also delivered in JSON format if callback URL is provided.

| Parameter                   | Value                                                                 |
|-----------------------------|-----------------------------------------------------------------------|
| CustomerName                | Same as input parameter.                                              |
| CustomerReference           | Same as input parameter.                                              |
| MerchantUniquePaymentId     | Same as input parameter.                                              |
| AccountOrCardNo             | Account or card number used to process payment.                       |
| PaymentReference            | Payment reference.                                                    |
| ProcessorReference          | Processor reference.                                                  |
| PaymentStatus               | Possible values:                                                      |
|                             | 0 => (Pending)                                                        |
|                             | 1 => (Error)                                                          |
|                             | 3 => (Successful)                                                     |
|                             | 4 => (Failed)                                                         |
|                             | 5 => (Cancelled)                                                      |
|                             | 6 => (Suppressed)                                                     |
|                             | 7 => (InProgress)                                                     |
| PaymentStatusString         | Possible values:                                                      |
|                             | Pending                                                               |
|                             | Error                                                                 |
|                             | Successful                                                            |
|                             | Failed                                                                |
|                             | Cancelled                                                             |
|                             | Suppressed                                                            |
|                             | InProgress                                                            |
| TransactionSource           | Possible values 36 => (Public_OnlineOneOffPayment)                    |
| TransactionSourceString     | Possible values Public_OnlineOneOffPayment                            |
| ProcessingDate              | The date and time when the payment is processed. format: yyyy-MM-ddTHH:mm:ss |
| SettlementDate              | The date when the payment is settled to the merchant. format: yyyy-MM-dd |
| IsPaymentSettledToMerchant  | Flag to indicate whether the funds are settled to the merchant or not. |
| BaseAmount                  | Same as payment amount.                                               |
| CustomerFee                 | Fee charged to the customer to process the payment.                   |
| ProcessedAmount             | Base amount + Customer fee.                                           |
| FundsToMerchant             | Base amount - Merchant fee, if applicable.                            |
| MerchantCode                | Merchant code.                                                        |
| FailureCode                 | Populated only when payment is not successful.                        |
| FailureReason               | Populated only when payment is not successful.                        |
| Token                       | Returned only if payment is processed using cardProxy input parameter. The value will be same as cardProxy. |
| PayId                       | Returned only if payment is processed using PayID.                    |
| PayIdName                   | Returned only if payment is processed using PayID. Display name for the PayID |


Field Name | Data Type | Conditional | Remarks
--- | --- | --- | ---
url | string | Required | Plugin access url. We strongly recommend v4 integration.
merchantCode | string | Required | As provided by Zenith.
apiKey | string | Required | As provided by Zenith
fingerprint | string | Required | The Fingerprint is a SHA3 (SHA512) hash (v4) or SHA1 hash (v3) of the fields in the following order with a pipe (\|) as a separator. Credentials provided by Zenith Payments are case sensitive. apiKey|userName|password|mode|paymentAmount|merchantUniquePaymentId|timestamp
apiKey: refer apiKey parameter
userName: provided by Zenith Payments
password: provided by Zenith Payments
mode: refer mode parameter
paymentAmount: provide payment amount in cents without symbol. e.g. for $150.53 pass 15053. Pass 0 when mode is 2.
merchantUniquePaymentId: refer merchantUniquePaymentId parameter
timestamp: : provide current datetime in UTC ISO 8601 format as timestamp. format: yyyy-MM-ddTHH:mm:ss
To generate SHA3 (applicable for v4) to test your key on ths page you can use this online SHA3 generator For methods of generating a SHA1 hash (applicable for v3) in your language refer this web site
To generate SHA1 (applicable for v3) to test your key on ths page you can use this online SHA1 generator
redirectUrl | string | Required | The page will redirect to this URL with the result in the query string. Refer the return parameters section below.
mode | int | Optional | Must be one of the following three values
0 - Make Payment
1 - Tokenise
2 - Custom Payment

Defaults to 0 if not provided.
customerName | string | Conditional | Required if mode is set to 0 or 2.
customerReference | string | Conditional | Required if mode is set to 0 or 2.
paymentAmount | number | Conditional | Required if mode is set to 0 or 2.



# Markdown Features

Docusaurus supports **[Markdown](https://daringfireball.net/projects/markdown/syntax)** and a few **additional features**.

## Front Matter

Markdown documents have metadata at the top called [Front Matter](https://jekyllrb.com/docs/front-matter/):

```text title="my-doc.md"
// highlight-start
---
id: my-doc-id
title: My document title
description: My document description
slug: /my-custom-url
---
// highlight-end

## Markdown heading

Markdown text with [links](./hello.md)
```

## Links

Regular Markdown links are supported, using url paths or relative file paths.

```md
Let's see how to [Create a page]
```

```md
Let's see how to [Create a page](
```

**Result:** Let's see how to [Create a page]

## Images

Regular Markdown images are supported.

You can use absolute paths to reference images in the static directory (`static/img/docusaurus.png`):

[Docusaurus logo](/img/docusaurus.png)


You can reference images relative to the current file as well, as shown in [the extra guides]

## Code Blocks

Markdown code blocks are supported with Syntax highlighting.

    ```jsx title="src/components/HelloDocusaurus.js"
    function HelloDocusaurus() {
        return (
            <h1>Hello, Docusaurus!</h1>
        )
    }
    ```

```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
  return <h1>Hello, Docusaurus!</h1>;
}
```

## Admonitions

Docusaurus has a special syntax to create admonitions and callouts:

    :::tip My tip

    Use this awesome feature option

    :::

    :::danger Take care

    This action is dangerous

    :::

:::tip My tip

Use this awesome feature option

:::

:::danger Take care

This action is dangerous

:::

## MDX and React Components

[MDX](https://mdxjs.com/) can make your documentation more **interactive** and allows using any **React components inside Markdown**:

```jsx
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`)
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight>

This is <Highlight color="#1877F2">Facebook blue</Highlight>
```

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`);
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> ! -->
