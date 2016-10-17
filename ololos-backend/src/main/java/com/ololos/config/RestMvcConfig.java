package com.ololos.config;

import com.ololos.domain.Author;
import com.ololos.domain.Post;
import com.ololos.domain.User;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestMvcConfiguration;

/**
 * Created by Andrii_Los on 10/17/2016.
 */
@Configuration
public class RestMvcConfig extends RepositoryRestMvcConfiguration {

    protected void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(Post.class);
        config.exposeIdsFor(Author.class);
        config.exposeIdsFor(User.class);
    }
}

