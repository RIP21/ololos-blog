package com.losmoney;

import com.ololos.OlolosWebappApplication;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(
        classes = OlolosWebappApplication.class,
        webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)

public class LosmoneyWebappApplicationTests {

    @Test
    public void contextLoads() {
    }

}
