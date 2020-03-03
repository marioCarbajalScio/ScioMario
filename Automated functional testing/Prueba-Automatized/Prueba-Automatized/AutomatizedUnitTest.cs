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
    class AutomatizedUnitTest
    {
        IWebDriver driver;
        int seconds = 5000;
        int wait = 3000;

        [SetUp]
        public void startBrowser()
        {
            driver = new FirefoxDriver("C:/Users/jmreyes/Documents/Selenium-manny");

        }

        [Test]
        public void AutoLogin()
        {
            driver.Url = "http://automationpractice.com/index.php";

            //navigating to login page
            Thread.Sleep(seconds);

            IWebElement loginBtn = driver.FindElement(By.ClassName("login"));
            loginBtn.Click();

            //fill email register
            Thread.Sleep(seconds);
            IWebElement emailAdd = driver.FindElement(By.Id("email_create"));
            Actions emailActions = new Actions(driver);
            emailActions.Click(emailAdd)
                .SendKeys("manuoracle707@gmail.com" + Keys.Tab)
                .SendKeys(Keys.Enter)
                .Build()
                .Perform();

            //fill inputs
            Thread.Sleep(seconds);
            driver.FindElement(By.Id("id_gender1")).Click();
            driver.FindElement(By.Id("customer_firstname")).SendKeys("Manuel");
            driver.FindElement(By.Id("customer_lastname")).SendKeys("Reyes");
            driver.FindElement(By.Id("passwd")).SendKeys("serQAeslomaximo707");
            driver.FindElement(By.Id("company")).SendKeys("Naipe");
            driver.FindElement(By.Id("address1")).SendKeys("Calle nose #405");
            driver.FindElement(By.Id("address2")).SendKeys("Colonia tampocose");
            driver.FindElement(By.Id("city")).SendKeys("Morelia");
            driver.FindElement(By.Id("postcode")).SendKeys("10101");
            driver.FindElement(By.Id("other")).SendKeys("No soy un bot jeje");
            driver.FindElement(By.Id("phone")).SendKeys("444444444444");
            driver.FindElement(By.Id("phone_mobile")).SendKeys("555555555555");
            driver.FindElement(By.Id("alias")).SendKeys("Cynet");


            //fill selects
            // Bday
            Thread.Sleep(3000);
            IWebElement Bday = driver.FindElement(By.XPath("//option[27]"));
            Bday.Click();
            IWebElement Bmonth = driver.FindElement(By.XPath("(//option[@value='4'])[2]"));
            Bmonth.Click();
            IWebElement Byear = driver.FindElement(By.XPath("//option[@value='1997']"));
            Byear.Click();

            //state
            Thread.Sleep(3000);
            IWebElement state = driver.FindElement(By.XPath("(//option[@value='3'])[3]"));
            state.Click();


            Thread.Sleep(seconds);
            IWebElement sendButton = driver.FindElement(By.Id("submitAccount"));
            sendButton.Click();


        }

        [TearDown]
        public void closeBrowser()
        {
            Thread.Sleep(seconds);
            driver.Close();
        }
 

    }
}
