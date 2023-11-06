import { login } from "./login";

describe('login', () => {

    it('Deve autenticar com sucesso quando o email e a senha são válidos', async() => {
        const validEmail = 'nath@dio.bank';
        const validPassword = 'senhaSecreta';
        const response = await login(validEmail, validPassword);
        expect(response).toBeFalsy();
    });

    it('Deve exibir um erro quando o email é válido, mas a senha é inválida', async() => {
        const validEmail = 'nath@dio.bank';
        const invalidPassword = 'senhaIncorreta';
        const response = await login(validEmail, invalidPassword);
        expect(response).toBeFalsy();
    });

    it('Deve exibir um erro quando o email é inválido', async() => {
        const invalidEmail = 'email@invalido.com';
        const validPassword = 'senhaSecreta';
        const response = await login(invalidEmail, validPassword);
        expect(response).toBeFalsy();
    });

    it('Deve exibir um erro quando tanto o email quanto a senha são inválidos', async() => {
        const invalidEmail = 'email@invalido.com';
        const invalidPassword = 'senhaIncorreta';
        const response = await login(invalidEmail, invalidPassword);
        expect(response).toBeFalsy();
    });
});
