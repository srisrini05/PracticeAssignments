import { test, expect} from "@playwright/test";
test("Edit Individuals in Salesforce", async ({ page, context }) => {
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
  const viewAllBtn = page.getByRole("button", {
    name: "View All Applications",
  });
  await expect(viewAllBtn).toBeInViewport({ timeout: 4000 });
  await viewAllBtn.click();
  await page
    .getByRole("combobox", { name: "Search apps or items..." })
    .fill("indi");
//Click Individual Link and Get the Required Record from the table
  await page.getByRole("link", { name: "Individuals" }).click();
  const individual = "Harivatsans"
  const searchIndividual = await page.locator("table tbody tr", {hasText: individual}).nth(2);
//Select the dropdown arrow for Edit
   await expect(searchIndividual).toBeVisible();
   await page.waitForTimeout(3000);
   const actionsBtn = searchIndividual.getByRole("button", {name: /show.*actions/i});
   await expect(actionsBtn).toBeVisible({ timeout: 10000 });
   await actionsBtn.click();
   await page.locator('a[role="menuitem"]', { hasText: "Edit" }).click();
//Enter First Name 
await page
  .getByRole("textbox", { name: "First Name" })
  .fill("Selvam");

//Click Salutation and Provide the entry from dropdown
await page.getByRole("button",{name: "Salutation"}).click();
await page.locator('//a[@title="Mr."]').click();

//Save the Record
await page.locator('//span[text()="Save"]').click();
console.log("Individual Edited Successfully");



})
