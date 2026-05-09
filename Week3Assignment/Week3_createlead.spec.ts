import { test } from "@playwright/test";

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
  await page.locator('//a[(text()= "Leads")]').click();
  await page.locator('//a [contains (text(), "Create Lead")]').click();

  await page.locator('//input [@id="createLeadForm_companyName"]').fill("HCL");
  await page.locator('//input [@id="createLeadForm_firstName"]').fill("Srividhya");
  await page.locator('//input [@id="createLeadForm_lastName"]').fill("Srinivasan");
  await page.locator('//input [@id="createLeadForm_firstNameLocal"]').fill("Sri");
  await page.locator('//input [@id="createLeadForm_lastNameLocal"]').fill("Srini");
  await page.locator('//input [@id="createLeadForm_personalTitle"]').fill("Mrs");
  await page.locator('//input [@id="createLeadForm_generalProfTitle"]').fill("Test Manager");
  await page.locator('//input [@id="createLeadForm_departmentName"]').fill("QA");
  await page.locator('//input [@value="Create Lead"]').click();
 
});


