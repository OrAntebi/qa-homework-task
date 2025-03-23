# Test Standard

## **Test Purpose**
The goal of this test is to verify the user registration and purchasing workflow on the Demo Web Shop website. The test ensures that a user can successfully register, log in, add a product to the cart, and validate the cart contents.

## **Preconditions**
- Access to **[Demo Web Shop](https://demowebshop.tricentis.com)**.
- The test should use a **unique email ID** for each registration.
- Browser and network connectivity must be **stable**.

## **Steps to Execute**
1. Navigate to **[Demo Web Shop](https://demowebshop.tricentis.com)**.
2. Click on **"Register"**.
3. Fill in personal details (**First Name, Last Name, Email**).
4. Enter a **password** and confirm it.
5. Click on **"Register"**.
6. Click on **"Continue"**.
7. Verify that the **registered email** appears in the header.
8. Click on **"Digital Downloads"**.
9. Select a **random product** and click **"Add to Cart"**.
10. Click on **"Shopping Cart"**.
11. Verify that the **product name** in the cart matches the one selected.

## **Post-Conditions**
- The **registered account should be unique** to avoid duplicate registration issues.
- The **shopping cart should be emptied** to maintain test integrity.
- **Close the browser session**.

## **Validation Criteria**
- **Successful registration** should display the **registered email** in the header.
- The **selected product** should be present in the shopping cart.
- The **product name** in the cart should match the **selected product**.

