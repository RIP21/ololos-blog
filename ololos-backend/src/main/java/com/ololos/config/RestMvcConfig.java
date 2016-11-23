package com.ololos.config;

import com.ololos.domain.Item;
import com.ololos.domain.User;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;

@Configuration
public class RestMvcConfig extends RepositoryRestConfigurerAdapter {

    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(Item.class);
        config.exposeIdsFor(User.class);
        config.setBasePath("/api");
        config.setReturnBodyForPutAndPost(true);
    }

}

