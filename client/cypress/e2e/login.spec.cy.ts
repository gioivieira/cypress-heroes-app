import { LoginPage } from '../../src/pages/loginPage'

describe('Login - Testes', () => {
    const loginPage = new LoginPage()

    it('Testar login com dados válidos', () => {
        loginPage.loginValidInfos("test@test.com", "test123")
    })

    it('Testar ogin com dados inválidos', () => {
        loginPage.loginInvalidInfos("test@test.com.br", "test1234")
    })
})