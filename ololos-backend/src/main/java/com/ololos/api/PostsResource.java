package com.ololos.api;

import com.ololos.domain.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/api/posts")
public class PostsResource {

    final private MongoOperations mongoOperations;

    @Autowired
    public PostsResource(MongoOperations mongoOperations) {
        this.mongoOperations = mongoOperations;
    }

    @RequestMapping(method = RequestMethod.POST)
    public void save(@RequestBody Post post) {
        mongoOperations.save(post);
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<Post> getAll() {
        return mongoOperations.findAll(Post.class);
    }

    @RequestMapping(method = RequestMethod.DELETE)
    public void remove(@RequestBody Post post) {
        mongoOperations.remove(post);
    }
}
