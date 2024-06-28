import Dexie from "dexie";

export const db = new Dexie("SegariPOSDatabase");

db.version(1).stores({
    products: "++id, name, skuId, imageUrl, price"
});