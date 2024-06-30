import Dexie from "dexie";

export const db = new Dexie("SegariPOSDatabase");

db.version(1).stores({
    products: "++id, name, skuId, imageUrl, sellingUnit, price"
});

db.version(2).stores({
    orders: "++id, customerName, total"
});

db.on("populate", async () => {
    await initProducts();
});

const initProducts = async () => {
    db.products.add({skuId: "1", name: "Telur Ayam Negeri Segari", imageUrl: "https://assets-cloudflare.segari-ops.id/products/30000100005_1_05012024025548.webp", sellingUnit: "10 butir / pack", price: 19900});
    db.products.add({skuId: "2", name: "Paha Ayam Boneless", imageUrl: "https://assets-cloudflare.segari-ops.id/products/60000100018_4_15052024104811.webp", sellingUnit: "450 - 500 gram / pack", price: 27900});
    db.products.add({skuId: "3", name: "Daging Sapi Import Sengkel", imageUrl: "https://assets-cloudflare.segari-ops.id/products/50000100021_2_21062024100014.webp", sellingUnit: "450 - 500 gram / pack", price: 62000});
    db.products.add({skuId: "4", name: "Golden Farm Jagung Manis Biji 500 gr", imageUrl: "https://assets-cloudflare.segari-ops.id/products/80800400038_2_10102023100653.webp", sellingUnit: "500 gr / pack", price: 19900});
    db.products.add({skuId: "5", name: "Kanzler Nugget Ayam Stick Crispy 450 gr", imageUrl: "https://assets-cloudflare.segari-ops.id/products/71741000214_1_31102023020537.webp", sellingUnit: "450 gr / pack", price: 44300});
}

console.log(db.verno);