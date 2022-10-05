class salaryCalculator {

    get role() {
        return $("//input[@id='mui-2']")

    }

get roleOptions () {
    return $("//div[contains(text(),'QA Engineer')]")
}

get country () {
    return $("//input[@id='mui-4']")
}

get countryOptions () {
    return $("//div[@id='mui-4-option-0']")
}

get searchBTn () {
    return $("//button[contains(text(),'Search')]")
}
//methods
async clickRole () {
    await this.role.waitForDisplayed()
    await browser.pause(5000)
    await this.role.setValue("QA Engineer")


}

async clickRoleOptions () {
    await this.roleOptions.waitForDisplayed()
    await this.roleOptions.click()
}

async clickCountry () {
    await this.country.waitForDisplayed()
    await browser.pause(5000)
    await this.country.setValue("Canada")
}

async clickCountryOptions () {
    await this.countryOptions.waitForDisplayed()
    await this.countryOptions.click()
}

async clickSearchBTN () {
    await this.searchBTn.click()
}

}

module.exports = new salaryCalculator();