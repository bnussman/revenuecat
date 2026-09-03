import { listPurchases } from "./v2";

const { data, error } = await listPurchases({
  path: {
    customer_id: "1",
    project_id: "1",
  }
});

if (error) {
  throw new Error(error.message);
}

console.log(data)