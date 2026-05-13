import {test, expect} from '@playwright/test'
test("Edit Lead in Salesforce", async ({ page, context }) => {
  // Grant geolocation permission
  await context.grantPermissions(["geolocation"]);
  await page.goto("https://login.salesforce.com/");
await page
    .getByRole("textbox", { name: "Username" })
    .fill("dilipkumar.rajendran@testleaf.com");

  await page.getByLabel("Password", { exact: true }).fill("TestLeaf@2025");
  await page.getByRole("button", { name: "Log In" }).click();
  await page.getByTitle("App Launcher", { exact: true }).click();
   await page.waitForTimeout(3000); 
  
const viewAllBtn = page.getByRole("button", { name: "View All Applications" });
await expect(viewAllBtn).toBeInViewport({ timeout: 4000 });
await viewAllBtn.click();
await expect(page.getByRole("combobox", { name: "Search apps or items..." })).toBeInViewport({ timeout: 4000 });
await expect (page.getByRole("combobox", { name: "Search apps or items..." })).toBeAttached();
await page.locator('//p[contains(text(),"Manage your sales")]').click();

await page.waitForSelector(".slds-spinner", {
  state: "hidden",
});
const sales = page.locator('//p[text()="Sales"]');
await sales.click({force:true});

//Click Leads and Edit the recently created Lead. When you test, please give the name of the recently creaeted lead from previous test
await page.getByTitle("Leads", { exact: true }).click();
page.getByRole("link", {name: "SriniSri", exact:true}).nth(0).click();
await page.getByRole("button", { name: "Edit", exact: true }).click();
await page.locator('input[name="lastName"]').fill("SriniPalani");
await page.locator('input[name="Company"]').fill("HCL");
await page.getByRole("button", { name: /^Save$/ }).click();
await page.getByRole("link", { name: "Leads" }).click();

//Check for succesful Lead creation from recent Leads table
  const listOfLeads = page.locator("//table/tbody/tr");
   const countofLeads = await listOfLeads.count();

  for (let index = 0; index < countofLeads; index++) {
    const leadLocator = listOfLeads.nth(index);
    const leadText = await leadLocator.innerText();
    if (leadText.includes("SriniPalani")) {
      console.log("Lead Edited Successfully", index);
      break;
    }
  }

})
