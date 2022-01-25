import supertest from "supertest";
import app from "./index";

const request = supertest(app);
console.log('request', request);

describe("Server API", () => {
  it("should return a message", async (done) => {
    const response = await request.get("/");
    expect(response.text).toBe("Image processing started");
    done();
  });

  it("should should return a status of 200", async (done) => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
    done();
  });
});