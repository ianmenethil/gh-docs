---
sidebar_position: 1
id: introduction
title: Introduction
---
<!-- F:\ZenDocs\docusaurus-2\docs\apis\introduction.md -->
# API Introduction

This is the introduction to the Zenith Payments API.

Welcome to the Zenith Payments API documentation. Here you will find details on how to use our APIs, including endpoint descriptions, request/response schemas, and interactive examples via the embedded Swagger UI.

The Zenith Payments API allows you to:
- Manage batch payments
- Generate and manage card proxies
- Create and retrieve customers
- Process payments
- Send requests to pay

# API Reference

## Endpoints
### `POST /payments`
- **Description:** Create a new payment.
- **Parameters:**
  - `url`: Plugin access URL.
  - `merchantCode`: As provided by Zenith.
  - ...

