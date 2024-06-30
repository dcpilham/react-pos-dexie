import { useLiveQuery } from "dexie-react-hooks"
import { db } from "../db"

const getProducts = async () => {
    const products = await db.products.toArray();
    return products;
}

export {getProducts};