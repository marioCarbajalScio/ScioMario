using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Firefox;
using OpenQA.Selenium.Interactions;

namespace Prueba_Automatized
{
    class AutomatizedLoginTest
    {
        IWebDriver driver;
        int seconds = 5000;
        int wait = 3000;

        [SetUp]
        public void StartBrowser ()
        {
            driver = new FirefoxDriver("C:/Users/jmreyes/Documents/Selenium-manny");
        }

        [Test]
        public void LoginTest()
        {
            driver.Url = "http://automationpractice.com/index.php?controller=authentication&back=my-account";

            //login
            Thread.Sleep(seconds);
            IWebElement loginForm = driver.FindElement(By.Id("email"));

            Actions loginActions = new Actions(driver);
            loginActions.Click(loginForm)
                .SendKeys("manuoracle707@gmail.com" + Keys.Tab)
                .SendKeys("serQAeslomaximo707" + Keys.Tab + Keys.Tab)
                .SendKeys(Keys.Enter)
                .Build()
                .Perform();

            AddAddress();

        }

        public void AddAddress()
        {
            Thread.Sleep(seconds);
            Thread.Sleep(seconds + 2);
            driver.FindElement(By.XPath("//div[@id='center_column']/div/div/ul/li[3]/a/span")).Click();
            Thread.Sleep(wait);
            driver.FindElement(By.XPath("//div[@id='center_column']/div[2]/a/span")).Click();
            Thread.Sleep(wait);

            //fill form again
            Thread.Sleep(seconds);
            driver.FindElement(By.Id("firstname")).SendKeys("Juan");
            driver.FindElement(By.Id("lastname")).SendKeys("Perez");
            driver.FindElement(By.Id("company")).SendKeys("Naipe");
            driver.FindElement(By.Id("address1")).SendKeys("Calle nose #407");
            driver.FindElement(By.Id("address2")).SendKeys("Colonia eltampocosabe");
            driver.FindElement(By.Id("city")).SendKeys("Porallánose");
            driver.FindElement(By.Id("postcode")).SendKeys("10102");
            driver.FindElement(By.Id("other")).SendKeys("No soy un bot jeje");
            driver.FindElement(By.Id("phone")).SendKeys("444444444444");
            driver.FindElement(By.Id("phone_mobile")).SendKeys("555555555555");
            driver.FindElement(By.Id("alias")).SendKeys("ekisdeeee");

            //state
            Thread.Sleep(wait);
            IWebElement state = driver.FindElement(By.XPath("//option[@value='11']"));
            state.Click();

            //send
            driver.FindElement(By.XPath("//button[@id='submitAddress']/span/i")).Click();
            
        }


        [TearDown]
        public void closeBrowser()
        {
            Thread.Sleep(seconds+2);
            driver.Close();
        }

    }
}
