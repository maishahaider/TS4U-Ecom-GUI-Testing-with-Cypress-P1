// tag#id #header
// tag.class
// tag[attribute="value"]
// tag.class[attribute="value"].input[placeholder="search for..."]

// tag is not mandatory

describe("Getting locators for the ecommerce website", () => {
  it("Find a product with slim keyword", () => {
    cy.visit("https://staging-ecom.techserve4u.com/");
    cy.get(
      "#header > div.main_nav_container > nav.main_nav > div > div.search_wrapper > input"
    ).type("Slim");
    cy.get(
      "#header > div.main_nav_container > nav.main_nav > div > div.search_wrapper > i"
    ).click();
    cy.get(
      "#search > div > div > div.col-lg-9.col-md-12 > div.shop_by > div.shop_by_content > div:nth-child(1) > a > div > h5"
    ).contains("Denim Slim Fit Jeans Pant for Men");
    cy.log("Ran successfully");
  });
});
