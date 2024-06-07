"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[967],{18753:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>a,toc:()=>l});var s=t(74848),n=t(28453);const d={id:"return-parameters",title:"Return Parameters"},i="Return Parameters",a={id:"jquery-plugin/return-parameters",title:"Return Parameters",description:"Mode 0 and 2",source:"@site/docs/jquery-plugin/return-parameters.md",sourceDirName:"jquery-plugin",slug:"/jquery-plugin/return-parameters",permalink:"/gh-docs/docs/jquery-plugin/return-parameters",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/jquery-plugin/return-parameters.md",tags:[],version:"current",frontMatter:{id:"return-parameters",title:"Return Parameters"},sidebar:"tutorialSidebar",previous:{title:"Output Parameters",permalink:"/gh-docs/docs/jquery-plugin/output-parameters"},next:{title:"Error Codes",permalink:"/gh-docs/docs/jquery-plugin/error-codes"}},c={},l=[{value:"Mode 0 and 2",id:"mode-0-and-2",level:2},{value:"Mode 1",id:"mode-1",level:2}];function o(e){const r={h1:"h1",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"return-parameters",children:"Return Parameters"}),"\n",(0,s.jsx)(r.h2,{id:"mode-0-and-2",children:"Mode 0 and 2"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"The following parameters are returned in mode 0 and 2. Same payload is also delivered in JSON format if callback URL is provided."})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Value"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"CustomerName"}),(0,s.jsx)(r.td,{children:"Same as input parameter."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"CustomerReference"}),(0,s.jsx)(r.td,{children:"Same as input parameter."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"MerchantUniquePaymentId"}),(0,s.jsx)(r.td,{children:"Same as input parameter."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"AccountOrCardNo"}),(0,s.jsx)(r.td,{children:"Account or card number used to process payment."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"PaymentReference"}),(0,s.jsx)(r.td,{children:"Payment reference."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"ProcessorReference"}),(0,s.jsx)(r.td,{children:"Processor reference."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"PaymentStatus"}),(0,s.jsx)(r.td,{children:"Possible values 0 => (Pending) 1 => (Error) 3 => (Successful) 4 => (Failed) 5 => (Cancelled) 6 => (Suppressed) 7 => (InProgress)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"PaymentStatusString"}),(0,s.jsx)(r.td,{children:"Possible values Pending Error Successful Failed Cancelled Suppressed InProgress"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"TransactionSource"}),(0,s.jsx)(r.td,{children:"Possible values 36 => (Public_OnlineOneOffPayment)"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"TransactionSourceString"}),(0,s.jsx)(r.td,{children:"Possible values Public_OnlineOneOffPayment"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"ProcessingDate"}),(0,s.jsxs)(r.td,{children:["The date and time when the payment is processed. format: yyyy-MM-ddTHH:mm",":ss"]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"SettlementDate"}),(0,s.jsx)(r.td,{children:"The date when the payment is settled to the merchant. format: yyyy-MM-dd"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"IsPaymentSettledToMerchant"}),(0,s.jsx)(r.td,{children:"Flag to indicate whether the funds are settled to the merchant or not."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"BaseAmount"}),(0,s.jsx)(r.td,{children:"Same as payment amount."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"CustomerFee"}),(0,s.jsx)(r.td,{children:"Fee charged to the customer to process the payment."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"ProcessedAmount"}),(0,s.jsx)(r.td,{children:"Base amount + Customer fee."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"FundsToMerchant"}),(0,s.jsx)(r.td,{children:"Base amount - Merchant fee, if applicable."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"MerchantCode"}),(0,s.jsx)(r.td,{children:"Merchant code."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"FailureCode"}),(0,s.jsx)(r.td,{children:"Populated only when payment is not successful."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"FailureReason"}),(0,s.jsx)(r.td,{children:"Populated only when payment is not successful."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Token"}),(0,s.jsx)(r.td,{children:"Returned only if payment is processed using cardProxy input parameter. The value will be same as cardProxy."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"PayId"}),(0,s.jsx)(r.td,{children:"Returned only if payment is processed using PayID."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"PayIdName"}),(0,s.jsx)(r.td,{children:"Returned only if payment is processed using PayID. Display name for the PayID"})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"mode-1",children:"Mode 1"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"The following parameters are returned in mode 1. Same payload is also delivered in JSON format if callback URL is provided."})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Parameter"}),(0,s.jsx)(r.th,{children:"Value"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Token"}),(0,s.jsx)(r.td,{children:"The proxy that can be saved and then use to process payment using API or payment plugin."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"CardType"}),(0,s.jsx)(r.td,{children:"Type of card i.e. Visa, MasterCards, American Express Or Bank Account."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"CardHolderName"}),(0,s.jsx)(r.td,{children:"Card holder name provided by the user. Returned only if user selects credit / debit card."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"CardNumber"}),(0,s.jsx)(r.td,{children:"Obfuscated card number provided by the user. Returned only if user selects credit / debit card."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"CardExpiry"}),(0,s.jsx)(r.td,{children:"Card expiry date. Returned only if user selects credit / debit card. format: MM/CCYY"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"AccountName"}),(0,s.jsx)(r.td,{children:"Account name provided by the user. Returned only if user selects bank account."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"AccountNumber"}),(0,s.jsx)(r.td,{children:"Obfuscated account number provided by the user. Returned only if user selects bank account."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"PayId"}),(0,s.jsx)(r.td,{children:"Returned only if payment is processed using PayID."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"PayIdName"}),(0,s.jsx)(r.td,{children:"Returned only if payment is processed using PayID. Display name for the PayID"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"IsRestrictedCard"}),(0,s.jsx)(r.td,{children:"Flag to indicate whether the card is restricted or not."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"PaymentAmount"}),(0,s.jsx)(r.td,{children:"Same as input parameter."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"CustomerFee"}),(0,s.jsx)(r.td,{children:"Customer fee applicable to process a payment of amount specified in PaymentAmount input parameter."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"MerchantFee"}),(0,s.jsx)(r.td,{children:"Merchant fee applicable to process a payment of amount specified in PaymentAmount input parameter."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"ProcessingAmount"}),(0,s.jsx)(r.td,{children:"The total amount that will be processed i.e. PaymentAmount + CustomerFee."})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>a});var s=t(96540);const n={},d=s.createContext(n);function i(e){const r=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(d.Provider,{value:r},e.children)}}}]);