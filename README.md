# `@banksnussman/revenuecat`


A TypeScript client for the [RevenueCat](https://www.revenuecat.com/docs/api-v1) REST API.


## Install

```bash
bun add @banksnussman/revenuecat
```

## Usage

### API v1

You can use RevenueCat's v1 API by importing from `@banksnussman/revenuecat/v1`.

```typescript
import { subscribers } from "@banksnussman/revenuecat/v1";

const { data, error } = await subscribers({ path: { app_user_id: "123" }})

console.log(data, error)
```

### API v2

You can use RevenueCat's v2 API by importing from `@banksnussman/revenuecat/v2`.

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

### Webhooks

The package also provides some TypeScript types that represent the payload RevenueCat sends to your server.

```typescript
import type { Webhook } from "@banksnussman/revenuecat/webhook";

export async function handlePaymentWebook(request: Request) {
  const data: Webhook = await request.json();

  try {
    await syncUserPayments(data.event.app_user_id);
  } catch (error) {
    Sentry.captureException(error);
    return new Response("Internal Server Error", { status: 500 });
  }

  return new Response("Success");
}

Bun.serve({
  port: 3000,
  routes: {
    "/payments/webhook": handlePaymentWebook,
  },
});
```
