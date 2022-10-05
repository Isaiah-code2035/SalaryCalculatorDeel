const salaryCalculatorPage = require("../pages/salary-calculator-Page")

describe("Salary Calculator", () =>{

    it("Navigate to the URL", async () =>{
        await browser.maximizeWindow()
        await browser.url("https://growth.deel.training/dev/salary-insights")
    })

  
it("slect role", async() =>{
    await salaryCalculatorPage.clickRole()
    await browser.pause(5000)
     await salaryCalculatorPage.clickRoleOptions()
     await browser.pause(5000)
})

it("select country", async () =>{
    await salaryCalculatorPage.clickCountry()
    await browser.pause(5000)
    await salaryCalculatorPage.clickCountryOptions()
    await browser.pause(5000)
})

it("Seearch and assert the heading text", async () => {
    await salaryCalculatorPage.clickSearchBTN()

    const textH2 = $("//body/div[@id='__next']/div[@id='main']/div[@id='content']/div[3]/div[1]/div[1]/div[2]/div[1]/div[2]/h2[1]")
    await expect(textH2).toHaveTextContaining("QA Engineer")
})
})