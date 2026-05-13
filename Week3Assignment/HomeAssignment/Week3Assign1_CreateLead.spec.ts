import {test, expect} from "@playwright/test";
test("To create a lead in Salesforce", async ({ page, context}) => {
  
  // Grant geolocation permission
  await context.grantPermissions(["geolocation"]);

  await page.goto("https://login.salesforce.com/");
//Login, Pwd and Login 
  await page
    .getByRole("textbox", { name: "Username" })
    .fill("dilipkumar.rajendran@testleaf.com");
  await page.getByLabel("Password", { exact: true }).fill("TestLeaf@2025");
  await page.getByRole("button", { name: "Log In" }).click();
  await page.waitForTimeout(3000); 
//App Launcher
  await page.getByTitle("App Launcher", { exact: true }).click();
  await page.waitForTimeout(5000);
  //Leads Application and Lead creation
  await page.getByTitle("Leads", { exact: true }).click();
  await page.getByRole("button", { name: "New" }).click();
  await page.waitForTimeout(2000);
  await  page.getByRole("combobox", { name: "Salutation" }).click(); 
  await page.getByText("Mrs.", { exact: true }).click();
  await page.locator('input[name="lastName"]').fill("SriniSri");
  await page.locator('input[name="Company"]').fill("TestLeaf");
  await page.getByRole("button", { name: /^Save$/ }).click();
  await page.getByRole("link", { name: "Leads" }).click();

  //Check for succesful Lead creation from recent Leads table
  const listOfLeads = page.locator("//table/tbody/tr");
   const countofLeads = await listOfLeads.count();

  for (let index = 0; index < countofLeads; index++) {
    const leadLocator = listOfLeads.nth(index);
    const leadText = await leadLocator.innerText();
    if (leadText.includes("SriniSri")) {
      console.log("Lead created Successfully");
      break;
    }
  }
});
