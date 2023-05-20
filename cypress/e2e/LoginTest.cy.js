import LoginPage from "../pages/LoginPage"

describe("Login Functionality",()=>{

    const loginPage=new LoginPage();

    beforeEach(()=>{
        
        cy.viewport(1920,1080);
    })

    it("Login with Invalid creds",()=>{

        loginPage.userLogin("Mihir","WrongPassword");
        loginPage.invalidAssertion();
    })

    it("Login with valid creds",()=>{

         loginPage.userLogin("John Doe","ThisIsNotAPassword");
         loginPage.validAssertion();

    })
})