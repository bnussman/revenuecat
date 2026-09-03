# `@banksnussman/revenuecat`


A TypeScript client for the [RevenueCat](https://www.revenuecat.com/docs/api-v1) REST API.


## Install

```bash
bun add @banksnussman/revenuecat
```

## Usage (API v1)

```typescript
import { subscribers } from "@banksnussman/revenuecat/v1";

const { data, error } = await subscribers({ path: { app_user_id: "123" }})

console.log(data, error)
```

## Usage (API v2)

```typescript
import { listPurchases } from "@banksnussman/revenuecat/v2";

const { data, error } = await listPurchases({
  path: {
    customer_id: "1",
    project_id: "1",
  }
});

console.log(data, error)
```
