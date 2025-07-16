// ~~~~~~~ LANDING PAGE COMPONENTS ~~~~~~~ //

describe('Landing Page', () =>{ // view all applications button works correctly
    it('clicks links successfully', () =>{
        cy.visit("http://localhost:5173/")
        cy.contains("View All Applications").click()
        cy.url().should('include', '/all')
    })
})

describe("Mobile navigation", () =>{ // burger menu opens on smaller screens
    it("opens the burger menu" , () =>{
        cy.viewport('iphone-6')
         cy.visit("http://localhost:5173/")
         cy.get('[data-cy=burger-button]').click()
    })
})


describe('Hero', () =>{ // landing page renders correctly
    it('image loads successfully', () =>{
        cy.visit("http://localhost:5173/")
        cy.contains("Ua mau ke ea o ka aina i ka pono").should('be.visible')
    })
} )

describe('Footer', () =>{
    it('navigates to About Us',() =>{
        cy.visit("http://localhost:5173/")
        cy.contains('About Us').click()
        cy.url().should('include', '/about')
        cy.go('back')
    })

    it('navigates to Contrbute page', ()=>{
        cy.visit("http://localhost:5173/")
        cy.contains('Contribute').click()
        cy.url().should('include', '/contribute')
        cy.go('back')
    })
    it('navigates to Contact Us', ()=>{
        cy.visit("http://localhost:5173/")
        cy.contains('Contact Us').click()
        cy.get('input[name="first-name"]').type('test')
        cy.get('input[name="last-name"]').type("test")
        cy.get('input[name="email"]').type("test123@gmail.com")
        cy.get('textarea[name="message"]').type("This is a test")
        cy.get('input[name="agree-to-policies"]').click()
        cy.get('button[data-cy="send-btn"]').click()
        
    })
})

describe("Resources section", () =>{
    it('navigates to DHHL website', ()=>{
        cy.visit("http://localhost:5173/")
        cy.contains('Apply For Hawaiian Homes').click()
    })
    it('navigates to inform page', () =>{
      cy.visit("http://localhost:5173/")
      cy.contains('Be Informed').click()
    })
    it('navigates to assistance directory', ()=>{
        cy.visit("http://localhost:5173/")
        cy.contains('Assistance Directory').click()
    })
    it('navigates to website updates page', ()=>{
        cy.visit("http://localhost:5173/")
        cy.contains('Website Updates').click()
    })
})