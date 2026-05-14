import { test, expect } from "@playwright/test";

test("To launch a browser", async ({ page }) => {
  /* const browserInstance = await chromium.launch({headless: false,
    channel: "chrome"});

  const browserContext = await browserInstance.newContext();

  const page = await browserContext.newPage(); */

  await page.goto("http://leaftaps.com/opentaps/control/main");

  await page.locator('[id="username"]').fill("democsr2");
  await page.locator(`[id="password"]`).fill("crmsfa");
  await page.locator('[class="decorativeSubmit"]').click();
  await page.setDefaultTimeout(5000);
  await page.locator('//a [contains (text(), "CRM")]').click();
 //Lead Creation
  await page.locator('//a[(text()= "Leads")]').click();
  await page.locator('//a [contains (text(), "Create Lead")]').click();
  const companyName = "HCL";
  await page.locator('//input [@id="createLeadForm_companyName"]').fill(companyName);
  const firstName = "Srividhya";
  await page.locator('//input [@id="createLeadForm_firstName"]').fill(firstName);
  const lastName = "Srinivasan";
  await page.locator('//input [@id="createLeadForm_lastName"]').fill(lastName);
  await page.locator('//input [@id="createLeadForm_firstNameLocal"]').fill("Sri");
  await page.locator('//input [@id="createLeadForm_lastNameLocal"]').fill("Srini");
  await page.locator('//input [@id="createLeadForm_personalTitle"]').fill("Mrs");
  await page.locator('//input [@id="createLeadForm_generalProfTitle"]').fill("Test Manager");
  await page.locator('//input [@id="createLeadForm_departmentName"]').fill("QA");
  await page.locator('//input [@id="createLeadForm_annualRevenue"]').fill("100000");
  await page.locator('//input[@id="createLeadForm_primaryPhoneNumber"]').fill("4704614932");
  await page.locator('//input [@value="Create Lead"]').click();
 //Validation Post Lead Creation
  const createdcompanyName1 = page.locator('//span[@id="viewLead_companyName_sp"]');
  await expect(createdcompanyName1).toContainText(companyName);
  console.log("Company Name Matches with given Company Name");
  const createdfirstName = page.locator('//span [@id="viewLead_firstName_sp"]');
  await expect(createdfirstName).toHaveText(firstName);
  console.log("First Name matches with given First Name");
 const createdlastName = page.locator('//span [@id="viewLead_lastName_sp"]');
 await expect(createdlastName).toHaveText(lastName);
 console.log("Last Name matches with given Last Name");

});


