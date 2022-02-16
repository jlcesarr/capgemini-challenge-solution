import { password } from "../modules/password";

var minimumPasswordLength;
describe("Password", () => {


    beforeAll(() => {
        minimumPasswordLength = password.minimumLength;
    })

    it("Should return the remaining length to reach the minimum password length", () => {
        let passwordInput = "Ya3";
        const result = password.validate(passwordInput);

        expect(result.error).toBeTruthy();
        expect(result.remaining).toBe(minimumPasswordLength - passwordInput.length)
    })

    it("Should return true for valid password input", () => {
        let passwordInput = "Safepass1@";
        const result = password.validate(passwordInput);


        expect(result).toBe(true)
    })


    it("Should return false for password input without special char", () => {
        let passwordInput = "UnsafePass1";
        const result = password.validate(passwordInput);


        expect(result).toBe(false)
    })

    it("Should return false for password input without numeric char", () => {
        let passwordInput = "Unsafe@";
        const result = password.validate(passwordInput);


        expect(result).toBe(false)
    })

    it("Should return false for password input without upper case char", () => {
        const passwordInput = "unsafepass1@";
        const result = password.validate(passwordInput);


        expect(result).toBe(false)
    })

    it("Should return false for password input without lower case char", () => {
        let passwordInput = "UNSAFEPASSE1@";
        const result = password.validate(passwordInput);


        expect(result).toBe(false)
    })
})