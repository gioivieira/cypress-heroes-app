import { LoginPage } from '../../src/pages/loginPage'
import { HomePage } from '../../src/pages/homePage'

describe('Home - Testes', () => {
    const loginPage = new LoginPage()
    const homePage = new HomePage()

    it('Testar curtida sem estar logado', () => {
        homePage.likeWithoutLoggedIn()
    })

    it('Testar curtida estando logado', () => {
        loginPage.loginValidInfos("test@test.com", "test123")
        homePage.likeLoggedIn()
    })
})