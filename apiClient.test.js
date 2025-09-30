const {
  fetchUsers,
  fetchUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("./apiClient");

describe("ApiClient", () => {
  let fetchSpy;

  beforeEach(() => {
    fetchSpy = jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: async () => ({}),
        status: 200,
      })
    );
  });

  afterEach(() => {
    fetchSpy.mockRestore();
  });

  describe("fetchUsers()", () => {
    it("should fetch a list of users", async () => {
      const mockUsers = [
        { id: 1, name: "User 1", email: "user1@example.com" },
        { id: 2, name: "User 2", email: "user2@example.com" },
      ];

      fetchSpy.mockResolvedValue({
        json: async () => mockUsers,
      });

      const users = await fetchUsers();
      expect(Array.isArray(users)).toBe(true);
      expect(users.length).toBeGreaterThan(0);
    });
  });

  describe("fetchUserById()", () => {
    it("should fetch a single user by ID", async () => {
      const mockUser = {
        id: 1,
        name: "vamsi",
        email: "vamsi@example.com",
      };

      fetchSpy.mockResolvedValue({
        json: async () => mockUser,
      });

      const user = await fetchUserById(1);
      expect(user).toHaveProperty("id", 1);
      expect(user).toHaveProperty("name");
      expect(user).toHaveProperty("email");
    });
  });

  describe("createUser()", () => {
    it("should create a new user", async () => {
      const mockUsers = [
        { id: 1, name: "User 1", email: "user1@example.com" },
        { id: 2, name: "User 2", email: "user2@example.com" },
      ];

      fetchSpy.mockResolvedValue({
        json: async () => mockUsers,
      });

      const newUser = {
        name: "Rohan N",
        username: "Rohan N",
        email: "Rohan.N@example.com",
      };

      const createdUser = await createUser(newUser);
      expect(createdUser).toHaveProperty("id");
      expect(createdUser).toMatchObject(newUser);
    });
  });

  describe("updateUser()", () => {
    it("should update a user by ID", async () => {
      const mockUsers = [
        { id: 1, name: "User 1", email: "user1@example.com" },
        { id: 2, name: "User 2", email: "user2@example.com" },
      ];

      fetchSpy.mockResolvedValue({
        json: async () => mockUsers,
      });

      const updatedData = {
        name: "Uday Simha",
        username: "UdaySimha",
        email: "Uday.Simha@example.com",
      };

      const updatedUser = await updateUser(1, updatedData);
      expect(updatedUser).toHaveProperty("id", 1);
      expect(updatedUser).toMatchObject(updatedData);
    });
  });

  describe("deleteUser()", () => {
    it("should delete a user by ID", async () => {
      const mockUsers = [
        { id: 1, name: "User 1", email: "user1@example.com" },
        { id: 2, name: "User 2", email: "user2@example.com" },
      ];

      fetchSpy.mockResolvedValue({
        json: async () => mockUsers,
      });

      const response = await deleteUser(1);
      expect(response.status).toBe(200);
    });
  });
});
