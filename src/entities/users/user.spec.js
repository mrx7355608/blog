import makeUser from "./buildUserEntity.js";

const data = {
    name: "Mr. Depp",
    email: "biwiKaminiHai@gmail.com",
    password: "DisnepNeBhiChordia_sadmusic123456",
};

describe("Testing name", () => {
    it("throws error when name is not provided or is null", () => {
        expect(() => {
            makeUser({ ...data, name: "" });
        }).toThrow("Name is required!");
    });
    it("throws error when name is shorter than required", () => {
        expect(() => {
            makeUser({ ...data, name: "abc" });
        }).toThrow("Name should be 4 characters long at least");
    });
    it("sanitizes name", () => {
        const user = makeUser({
            ...data,
            name: "Jhonny Depp<script>document.cookie</script>",
        });
        expect(user.getName()).toBe("Jhonny Depp");
    });
});

describe("Testing email", () => {
    it("throws error when email is not provided or is null", () => {
        expect(() => {
            makeUser({ ...data, email: null });
        }).toThrow("Email is required!");
    });
    it("throws error when invalid email is given", () => {
        expect(() => {
            makeUser({ ...data, email: "some@invaliEmail" });
        }).toThrow("Invalid email");
    });
});

describe("Testing password", () => {
    it("throws error when password is not provided or is null", () => {
        expect(() => {
            makeUser({ ...data, password: null });
        }).toThrow("Password is required!");
    });
    it("throws error when password is shorter than required", () => {
        expect(() => {
            makeUser({ ...data, password: "short" });
        }).toThrow("Password should be 10 characters long at least");
    });
    it("hashes password", async () => {
        const user = makeUser({
            ...data,
            password: "aStrongPasswordLikeAChad123",
        });
        await user.hashPassword();
        expect(user.getPassword()).toEqual(expect.any(String));
    });
});
