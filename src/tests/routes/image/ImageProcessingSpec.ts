import supertest from "supertest";
import app from "../../../app";

const request = supertest(app);

describe("Resize Controller", () => {
    it("should return a message if image does not exist", async (done) => {
        const response = await request.get(
          "/api/img/resize?filename=filenotFound&width=400&height=300"
        );
        expect(response.status).toBe(403);
        expect(response.body.ok).toBe("failed");
        expect(response.body.message).toBe("Input file is missing");
        done();
      });
});