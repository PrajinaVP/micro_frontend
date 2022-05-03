import { Product } from "./Product";


const API_SERVER = "http://localhost:8080";

export const getProducts = (): Promise<Product[]> => {
    return fetch(`${API_SERVER}/products`)
        .then((res) => res.json());
}

export const getProductById = (id): Promise<any> => {
    return fetch(`${API_SERVER}/products/${id}`)
        .then((res) => res.json())
        //.then(data => console.log("prod ts data :: " + JSON.stringify(data)))
        //.catch(err => console.log("error :: " + err));
}

export const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});