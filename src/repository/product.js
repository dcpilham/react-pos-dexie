import { useLiveQuery } from "dexie-react-hooks"
import { db } from "../db"

const getProducts = () => {
    const products = useLiveQuery(() => db.products.toArray());
    return products;
}

export {getProducts};