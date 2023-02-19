import request from "supertest";
import { createApp } from "../app";
import {appDataSource} from "../src/models/data-source";

describe("GET Products", () => {
    let app;

    beforeAll(async () => {
        app = createApp();
        await appDataSource.initialize();
    });

    afterAll(async () => {
        await appDataSource.destroy();
    });

    test("FAILED: getProductById", async () => {
        await request(app)
            .get("/products/-")
            .expect(400)
            .expect({ error: true, message: 'CANNOT_GET_PRODUCT' });
    });

    test("SUCCESS: getProductById", async () => {
        await request(app)
            .get("/products/1")
            .expect(200);
    });

    test("SUCCESS: getAllProducts", async () => {
        await request(app)
            .get("/products")
            .expect(200);
    });

    test("SUCCESS: filters", async () => {
        await request(app)
            .get("/products?size=230&categoryId=1&sortBy=releaseDate")
            .expect(200);
    });
})

