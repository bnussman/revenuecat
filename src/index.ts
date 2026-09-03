import { subscribers } from "./v1";

const me = await subscribers({ path: {app_user_id: "banks" }})

const t = me.data?.subscriber?.non_subscriptions['my-thing'][0];

const p = t;