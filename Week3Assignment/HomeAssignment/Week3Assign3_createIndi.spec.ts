import {test, expect  } from "@playwright/test";
test ("Create Individuals in Salesforce", async ({ page, context }) => {
  // Grant geolocation permission
  await context.grantPermissions(["geolocation"]);
  await page.goto("https://login.salesforce.com/");
  await page
    .getByRole("textbox", { name: "Username" })
    .fill("dilipkumar.rajendran@testleaf.com");

  await page.getByLabel("Password", { exact: true }).fill("TestLeaf@2025");
  await page.getByRole("button", { name: "Log In" }).click();
    await page.waitForTimeout(3000); 
  await page.getByTitle("App Launcher", { exact: true }).click();
  await page.waitForTimeout(3000); 
 const viewAllBtn = page.getByRole("button", { name: "View All Applications" });
await expect(viewAllBtn).toBeInViewport({ timeout: 4000 });
await viewAllBtn.click();
await (page.getByRole("combobox", { name: "Search apps or items..." })).fill("indi");

await page.getByRole("link", {name: "Individuals"}).click();

await page.locator('//div[@title="New"]').click();
await page.getByRole("textbox", { name: "Last Name" }).fill("Srivatsan");

await page.locator('//span[text()="Save"]').click();

    
//Check for succesful Individual creation from the created table
//Toast locator
const toast = page.locator(".forceToastMessage, .slds-notify_toast");

await expect(toast.first()).toBeVisible({ timeout: 15000 });
await expect(toast.first()).toContainText("created");
  console.log("Individual Created Successfully");
  
})
  



