package com.selenium.test;

import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class TestApplicationTests {

	@Test
    void TableIsDisplayed() {
        WebDriver driver = new ChromeDriver();
        driver.get("http://localhost:3000/");


        driver.findElement(By.className("table-produtos")).isDisplayed();
        driver.quit();
    }


}
