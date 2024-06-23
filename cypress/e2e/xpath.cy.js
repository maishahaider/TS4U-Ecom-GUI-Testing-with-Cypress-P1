describe('Locator with xpath', ()=>{
    it("Find the total list of the menu", () =>{
        cy.visit("https://staging-ecom.techserve4u.com/")

        cy.xpath("//div[@class='pages_list']/li").should("have.length",5)
        cy.log("The total menus lenght are five")
    })
})