import request from "supertest";

let server;

beforeAll(async () => {
  const imported = await import("../src/index.js");
  server = imported.default.server;
});

describe("User API", () => {
  it("should create a new user", async () => {
    const res = await request(server)
      .post("/api/users")
      .send({
        username: "John Doe",
        email: "john.doe@example.com",
        password: "joshdoe",
      });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.username).toBe("John Doe");
    expect(res.body.email).toBe("john.doe@example.com");
  });
});
