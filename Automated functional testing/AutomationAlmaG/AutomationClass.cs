using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Firefox;
using System.Threading;
using OpenQA.Selenium.Interactions;

namespace AutomationAlmaG
{
    class AutomationClass
    {
        IWebDriver driver;

        [SetUp] //This is a NUnit method
        public void startBrowser()
        {
            //Location of the chromedriver
            driver = new ChromeDriver("C:/Users/macarbajal/Documents/chromedriver_win32");
        }

        /*
        //This is the way to declare a test for it to be available at the test explorer.
        [Test]
        public void Explore_and_submit_form() //Name of the test
        {
            driver.Url = "http://www.practiceselenium.com/"; //Url to load

            //Below we locate the element and assign a name
            IWebElement herbalTeaCollection = driver.FindElement(By.XPath("//a[@id='wsb-button-00000000-0000-0000-0000-000450914890']/span"));
            //Interaction with the located element
            herbalTeaCollection.Click();
            //Using thread to wait the desired amount of miliseconds
            Thread.Sleep(3000); 
            //Locating another element and interacting again below
            IWebElement letsTalkTea = driver.FindElement(By.XPath("//div[@id='wsb-nav-00000000-0000-0000-0000-000450914915']/ul/li[4]/a"));
            letsTalkTea.Click();
            // A final wait to visualize the actions of the automations
            Thread.Sleep(4000);


            //We can use Click action most of the time, also to send information in a textbox we can use SendKeys. You can read more about it looking for "Selenium webdriver commands"

        }*/

        [Test]
        public void Registration()
        {
            driver.Url = "http://automationpractice.com/index.php?controller=authentication&back=my-account"; 

            IWebElement emailInput = driver.FindElement(By.XPath("//input[@id='email_create']"));
            emailInput.SendKeys("topollillo@sciodev.com");
            Thread.Sleep(3000);

            IWebElement btnCreate = driver.FindElement(By.Id("SubmitCreate"));
            btnCreate.Click();
            Thread.Sleep(3000);

            IWebElement genderInput = driver.FindElement(By.Id("id_gender1"));
            genderInput.Click();
            Thread.Sleep(2000);

            IWebElement nameInput = driver.FindElement(By.Id("customer_firstname"));
            nameInput.SendKeys("Topollillo");
            Thread.Sleep(3000);

            IWebElement lastNameInput = driver.FindElement(By.Id("customer_lastname"));
            lastNameInput.SendKeys("TopollilloDosLaVenganza");
            Thread.Sleep(3000);

            IWebElement password = driver.FindElement(By.Id("passwd"));
            password.SendKeys("Topollillo3AhoraEsPersonal");
            Thread.Sleep(3000);

            //Select day
            IWebElement day = driver.FindElement(By.XPath("//div[@id='uniform-days']/select//option[@value=26]"));
            day.Click();
            Thread.Sleep(2000);

            //Select month
            IWebElement month = driver.FindElement(By.XPath("//div[@id='uniform-months']/select//option[@value=1]"));
            month.Click();
            Thread.Sleep(2000);

            //Select year
            IWebElement year = driver.FindElement(By.XPath("//div[@id='uniform-years']/select//option[@value=2020]"));
            year.Click();
            Thread.Sleep(2000);

            IWebElement checkBox1 = driver.FindElement(By.Id("newsletter"));
            checkBox1.Click();
            Thread.Sleep(2000);

            IWebElement checkBox2 = driver.FindElement(By.Id("optin"));
            checkBox2.Click();
            Thread.Sleep(2000);

            //------------------------Address---------------------------
            IWebElement inputCompany = driver.FindElement(By.Id("company"));
            inputCompany.SendKeys("Topollillo4MasTopollilloQueNunca");
            Thread.Sleep(3000);

            IWebElement inputAddress = driver.FindElement(By.Id("address1"));
            inputAddress.SendKeys("La grieta del Topollillo #57");
            Thread.Sleep(3000);

            IWebElement inputAddress2 = driver.FindElement(By.Id("address2"));
            inputAddress2.SendKeys("La gruta del Topollillo #72");
            Thread.Sleep(3000);

            IWebElement inputCity = driver.FindElement(By.Id("city"));
            inputCity.SendKeys("Topollillo`s Land");
            Thread.Sleep(3000);

            //Select State
            IWebElement state = driver.FindElement(By.XPath("//div[@id='uniform-id_state']/select//option[@value=3]"));
            state.Click();
            Thread.Sleep(2000);

            IWebElement inputPostal = driver.FindElement(By.Id("postcode"));
            inputPostal.SendKeys("58220");
            Thread.Sleep(3000);

            IWebElement country = driver.FindElement(By.XPath("//div[@id='uniform-id_country']/select//option[@value=21]"));
            country.Click();
            Thread.Sleep(1000);

            IWebElement inputAdditional = driver.FindElement(By.Id("other"));
            inputAdditional.SendKeys("20 pesos a que alma no leera esto.");
            Thread.Sleep(1000);

            IWebElement inputPhoneH = driver.FindElement(By.Id("phone"));
            inputPhoneH.SendKeys("4431736858");
            Thread.Sleep(1000);

            IWebElement inputPhone = driver.FindElement(By.Id("phone_mobile"));
            inputPhone.SendKeys("4431736858");
            Thread.Sleep(3000);

            IWebElement inputAlias = driver.FindElement(By.Id("alias"));
            inputAlias.Clear();
            inputAlias.SendKeys("La casa del Topollillo");
            Thread.Sleep(3000);

            IWebElement btnSubmit = driver.FindElement(By.Id("submitAccount"));
            btnSubmit.Click();
            Thread.Sleep(3000);

            Thread.Sleep(15000);
        }

        [Test]
        public void Login_Add_address()
        {
            driver.Url = "http://automationpractice.com/index.php?controller=authentication&back=my-account";

            Actions actions = new Actions(driver);

            IWebElement emailInput = driver.FindElement(By.Id("email"));
            emailInput.SendKeys("topollillo@sciodev.com");
            Thread.Sleep(2000);

            IWebElement password = driver.FindElement(By.Id("passwd"));
            password.SendKeys("Topollillo3AhoraEsPersonal");
            Thread.Sleep(2000);

            IWebElement btnSing = driver.FindElement(By.Id("SubmitLogin"));
            btnSing.Click();
            Thread.Sleep(3000);

            IWebElement aAddress = driver.FindElement(By.XPath("//a[@title='Addresses']"));
            aAddress.Click();
            Thread.Sleep(3000);

            IWebElement aAddAddress = driver.FindElement(By.XPath("//a[@title='Add an address']"));
            aAddAddress.Click();
            Thread.Sleep(3000);

            //-------------------------------Address---------------------------

            IWebElement inputAddress = driver.FindElement(By.Id("address1"));
            inputAddress.SendKeys("La grieta del Topollillo #75");
            Thread.Sleep(2000);

            IWebElement inputAddress2 = driver.FindElement(By.Id("address2"));
            inputAddress2.SendKeys("La gruta del Topollillo #27");
            Thread.Sleep(2000);

            IWebElement inputCity = driver.FindElement(By.Id("city"));
            inputCity.SendKeys("Topollillo`s Land");
            Thread.Sleep(2000);

            //Select State
            IWebElement state = driver.FindElement(By.XPath("//div[@id='uniform-id_state']/select//option[@value=3]"));
            state.Click();
            Thread.Sleep(2000);

            IWebElement inputPostal = driver.FindElement(By.Id("postcode"));
            inputPostal.SendKeys("58220");
            Thread.Sleep(2000);

            IWebElement country = driver.FindElement(By.XPath("//div[@id='uniform-id_country']/select//option[@value=21]"));
            country.Click();
            Thread.Sleep(1000);

            IWebElement inputAdditional = driver.FindElement(By.Id("other"));
            inputAdditional.SendKeys("20 pesos a que alma no leera esto.");
            Thread.Sleep(1000);

            IWebElement inputPhoneH = driver.FindElement(By.Id("phone"));
            inputPhoneH.SendKeys("4431736858");
            Thread.Sleep(1000);

            IWebElement inputPhone = driver.FindElement(By.Id("phone_mobile"));
            inputPhone.SendKeys("4431736858");
            Thread.Sleep(2000);

            IWebElement btnSubmit = driver.FindElement(By.Id("submitAddress"));
            btnSubmit.Click();

            Thread.Sleep(15000);
        }


        [Test]
        public void Login_Buy()
        {
            driver.Url = "http://automationpractice.com/index.php?controller=authentication&back=my-account";

            Actions actions = new Actions(driver);

            IWebElement emailInput = driver.FindElement(By.Id("email"));
            emailInput.SendKeys("topollillo@sciodev.com");
            Thread.Sleep(3000);

            IWebElement password = driver.FindElement(By.Id("passwd"));
            password.SendKeys("Topollillo3AhoraEsPersonal");
            Thread.Sleep(3000);

            IWebElement btnSing = driver.FindElement(By.Id("SubmitLogin"));
            btnSing.Click();
            Thread.Sleep(3000);

            IWebElement aWomen = driver.FindElement(By.XPath("//a[@title='Women']"));
            aWomen.Click();
            Thread.Sleep(3000);

            IWebElement aDresses = driver.FindElement(By.XPath("//div/a[@title='Dresses']"));
            actions.MoveToElement(aDresses);
            Thread.Sleep(1000);
            aDresses.Click();
            Thread.Sleep(3000);

            //Add dress 1
            IWebElement aChooseDresses = driver.FindElement(By.XPath("//a[@title='Add to cart'][@data-id-product='3']"));
            actions.MoveToElement(aChooseDresses);
            Thread.Sleep(1000);
            aChooseDresses.Click();
            Thread.Sleep(3000);

            IWebElement aCheckout = driver.FindElement(By.XPath("//a[@title='Proceed to checkout']"));
            actions.MoveToElement(aCheckout);
            Thread.Sleep(1000);
            aCheckout.Click();
            Thread.Sleep(3000);
            //---------------//

            IWebElement aContinue = driver.FindElement(By.XPath("//a[@title='Continue shopping']"));
            actions.MoveToElement(aContinue);
            Thread.Sleep(1000);
            aContinue.Click();
            Thread.Sleep(3000);

            //Add dress 2
            IWebElement aChooseDresses2 = driver.FindElement(By.XPath("//a[@title='Add to cart'][@data-id-product='4']"));
            actions.MoveToElement(aChooseDresses2);
            Thread.Sleep(1000);
            aChooseDresses2.Click();
            Thread.Sleep(3000);

            IWebElement aCheckout2 = driver.FindElement(By.XPath("//a[@title='Proceed to checkout']"));
            actions.MoveToElement(aCheckout2);
            Thread.Sleep(1000);
            aCheckout2.Click();
            Thread.Sleep(3000);
            //---------------//

            IWebElement aBuy = driver.FindElement(By.XPath("//a[@title='Proceed to checkout'][@class='button btn btn-default standard-checkout button-medium']/span"));
            actions.MoveToElement(aBuy);
            Thread.Sleep(1000);
            aBuy.Click();
            Thread.Sleep(3000);

            IWebElement aBuyAddress = driver.FindElement(By.XPath("//button[@name='processAddress']"));
            actions.MoveToElement(aBuyAddress);
            Thread.Sleep(1000);
            aBuyAddress.Click();
            Thread.Sleep(3000);
            
            IWebElement checkBox = driver.FindElement(By.Id("cgv"));
            actions.MoveToElement(checkBox);
            Thread.Sleep(1000);
            checkBox.Click();
            Thread.Sleep(2000);

            IWebElement aBuyShipping = driver.FindElement(By.XPath("//button[@name='processCarrier']"));
            actions.MoveToElement(aBuyShipping);
            Thread.Sleep(1000);
            aBuyShipping.Click();
            Thread.Sleep(3000);

            IWebElement aBuyPayment = driver.FindElement(By.XPath("//a[@title='Pay by bank wire']"));
            actions.MoveToElement(aBuyPayment);
            Thread.Sleep(1000);
            aBuyPayment.Click();
            Thread.Sleep(3000);

            IWebElement aFinish = driver.FindElement(By.XPath("//button[@type='submit'][@class='button btn btn-default button-medium']//span"));
            actions.MoveToElement(aFinish);
            Thread.Sleep(1000);
            aFinish.Click();
            Thread.Sleep(10000);

        }


        [TearDown] //This is another NUnit method
        public void closeBrowser()
        {
            driver.Close();
        }
    }
}
