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
    class AutomatizedShoppingTest
    {
        IWebDriver driver;
        int seconds = 5000;
        int wait = 3000;

        [SetUp]
        public void StartBrowser()
        {
            driver = new FirefoxDriver("C:/Users/jmreyes/Documents/Selenium-manny");
        }

        [Test]
        public void ShoppingTest()
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

            PurchaseTest();

        }
        public void PurchaseTest()
        {
            Thread.Sleep(seconds);
            Actions builder = new Actions(driver);
            IWebElement shopBtn = driver.FindElement(By.XPath("//div[@id='block_top_menu']/ul/li/a"));
            shopBtn.Click();


            Thread.Sleep(seconds + 2);
            driver.FindElement(By.XPath("//img[@alt='Printed Summer Dress']")).Click();
            Thread.Sleep(wait);
            driver.FindElement(By.XPath("//option[@value='2']")).Click();
            Thread.Sleep(wait);
            driver.FindElement(By.XPath("//a[@id='color_13']")).Click();
            //life hack - selecting 2 items (quantity)
            Thread.Sleep(wait);
            driver.FindElement(By.XPath("//p[@id='quantity_wanted_p']/a[2]/span")).Click();
            Thread.Sleep(wait);
            driver.FindElement(By.XPath("//p[@id='add_to_cart']/button/span")).Click();
            Thread.Sleep(wait);
            driver.FindElement(By.XPath("//div[@id='layer_cart']/div/div[2]/div[4]/a/span")).Click();
            Thread.Sleep(wait);
            driver.FindElement(By.XPath("//div[@id='center_column']/p[2]/a/span")).Click();
            Thread.Sleep(wait);
            driver.FindElement(By.XPath("//div[@id='center_column']/form/p/button/span")).Click();
            Thread.Sleep(wait);
            driver.FindElement(By.XPath("//p[2]/div/span/input")).Click();
            Thread.Sleep(wait);
            driver.FindElement(By.XPath("//form[@id='form']/p/button/span")).Click();
            Thread.Sleep(wait);
            driver.FindElement(By.XPath("//div[@id='HOOK_PAYMENT']/div[2]/div/p/a/span")).Click();
            Thread.Sleep(wait);
            driver.FindElement(By.XPath("//p[@id='cart_navigation']/button/span")).Click();


            Thread.Sleep(seconds);
        }

        [TearDown]
        public void closeBrowser()
        {
            Thread.Sleep(seconds);
            driver.Close();
        }
    }
}
