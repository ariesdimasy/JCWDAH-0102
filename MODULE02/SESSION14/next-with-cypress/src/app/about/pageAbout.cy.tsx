import About from "./page";

describe("<About />", () => {
  it("should render and display expected content", () => {
    cy.mount(<About />);

    cy.get("h1").contains("About");

    cy.get('a[href="/"]').should("be.visible");
  });
});
