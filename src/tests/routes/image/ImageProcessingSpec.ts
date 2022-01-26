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

      it("should return an error message if width is not a number", async (done) => {
        const response = await request.get(
          "/api/img/resize?filename=test&width=hello&height=200"
        );
        expect(response.text).toBe("Please provide a positive numerical value for the 'width' query segment.");
        done();
      });
      it("should return an error message if height is not a number", async (done) => {
        const response = await request.get(
          "/api/img/resize?filename=test&width=200&height=hello"
        );
        expect(response.text).toBe("Please provide a positive numerical value for the 'height' query segment.");
        done();
      });
});