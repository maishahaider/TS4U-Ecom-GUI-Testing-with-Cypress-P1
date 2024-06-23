describe("Using assertions", () => {
  it("Implicit assertion (built-in)", () => {
    cy.visit("https://staging-ecom.techserve4u.com/");
    // //should,and
    // cy.url().should('include','techserve4u.com');
    // cy.url().should('eq','https://staging-ecom.techserve4u.com/');
    // cy.url().should('contain','staging');

    // //chaining
    // cy.url().should('include','techserve4u.com')
    // .should('eq','https://staging-ecom.techserve4u.com/')
    // .should('contain','staging');

    //chaining, negative assertion
    // cy.url()
    //   .should("include", "techserve4u.com")
    //   .and("eq", "https://staging-ecom.techserve4u.com/")
    //   .and("contain", "staging")
    //   .and("not.contain", "stagifng");

    // //logo visibility
    // cy.get(
    //   "#header > div.main_nav_container > nav.main_nav > div > div.logo > a > img"
    // ).should("be.visible");
    // cy.get(
    //   "#header > div.main_nav_container > nav.main_nav > div > div.logo > a > img"
    // ).should("exist");
    // cy.log("Logo is visible");

    cy.xpath("//a").should("have.length",169)
  });

  //it.skip
  //it.only
  it.only("Explicit assertion",() =>{
    cy.visit("https://staging-ecom.techserve4u.com/");


    //  expect,assert
    cy.get("#header > div.main_nav_container > nav.main_nav > div > div.header_info > span:nth-child(2) > i").click();

    cy.get("#normal_login_email").type("haider23maisha@gmail.com")
    cy.get("#normal_login_password").type("haiderM123@")
    cy.get("#normal_login > div.g_auth > button").click()

const expectedResult="Maisha"

    cy.get("#header > div.main_nav_container > nav.main_nav > div > div.header_info > span:nth-child(3) > i").click()
    cy.get("body > div.MuiDrawer-root.MuiDrawer-modal > div.MuiPaper-root.MuiDrawer-paper.MuiDrawer-paperAnchorLeft.MuiPaper-elevation16 > div.user_drawer_header > div.avatar > div > p")
    .then((name) => {
        let result = name.text();
        expect(expectedResult).to.equal(result)
        cy.log("Value matched!")

        assert.equal(result,expectedResult)
        cy.log("Value Matched assert keyword")
    })
  })
});
