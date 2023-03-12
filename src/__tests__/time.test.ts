import { describe, it } from "node:test";
import supertest from "supertest";
import createServer from "../utils/server";

const app = createServer();

describe("GET TIME"),
  () => {
    describe("Incorrect Token", () => {
      it("Should return http 403", async () => {
        await supertest(app).get("/time").expect(403);
      });
    });
  };

describe("GET METRICS"),
  () => {
    describe("Incorrect Token", () => {
      it("Should return http 403", async () => {
        await supertest(app).get("/metrics").expect(403);
      });
    });
  };
