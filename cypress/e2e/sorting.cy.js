//This page contains test related to sorting of items based on different criteria availale to choose from dropdown

describe('Sorting functionality', () => {
  beforeEach(() => {
    //Load webpage
    cy.visit('/')

    //Enter valid credentials
    cy.get("input[id='user-name']").type('standard_user')
    cy.get("input[id='password']").type('secret_sauce')
    
    //Click on Login button
    cy.contains('Login').click()
    
    //Verify products after successful login
    cy.contains('Products')
  })

  it('check dropdown option', () => {
    // Select the First sorting option "Name (A to Z)"
    cy.get('.product_sort_container')
      .select(0)
    cy.wait(2000);
    getListValues().then(list => {
      let actual = list.slice();
      cy.wrap(actual).should("deep.eq", list.sort());
    });

    //select second sorting option "Name (Z to A)"
    cy.get('.product_sort_container')
      .select(1)
    cy.wait(2000);

    let arr2 = new Array()
    cy.get('.inventory_item_name')
      .each($div => arr2.push($div.text()))
      .then(() => {
        cy.wrap(arr2).should('deep.equal', [...arr2].sort().reverse())
      })

    //select third sorting option "Price (Low to High)"
    cy.get('.product_sort_container')
      .select(2)
    cy.wait(2000);
    getProductPrice().then((ascList) => {
      let actual = ascList;
      //cy.log("actual list", actual.toString());
      //cy.log("sorted list list.sort((a, b) => a - b)", ascList.sort((a, b) => a - b).toString());
      //list.should('have.ordered.members',list);
      //cy.wrap(actual).should("deep.eq", [7.99, 15.99,9.99 , 15.99, 29.99, 49.99]);
      cy.wrap(actual.toString()).should("deep.eq", ascList.sort((a, b) => a - b).toString());
    })

    //select fourth sorting option "Price (High to Low)"
    cy.get('.product_sort_container')
      .select(3)
    cy.wait(2000);
    getProductPrice().then((descList) => {
      let actual = descList;
      //cy.log("actual list", actual.toString());
      //cy.log("sorted list list.sort((a, b) => a - b)", descList.sort((a, b) => b - a).toString());
      //cy.wrap(actual).should("deep.eq", [7.99, 9.99, 15.99, 15.99, 29.99, 49.99]);
      cy.wrap(actual.toString()).should("deep.eq", descList.sort((a, b) => b - a).toString());
    })

  });

})

function getListValues() {
  let list = []
  return cy.get('.inventory_item_name').each(($div) => {
    list.push($div.text())
  }).wrap(list);
}
function getProductPrice() {
  let list = []
  return cy.get('.inventory_item_price').each(($div) => {
    list.push(parseFloat($div.text().replace('$', '')))
  }).wrap(list)
}
