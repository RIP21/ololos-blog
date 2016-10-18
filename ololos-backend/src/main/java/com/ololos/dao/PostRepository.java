package com.ololos.dao;

import com.ololos.domain.Post;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

/**
 * Created by Andrii_Los on 10/17/2016.
 */
@Repository
@RepositoryRestResource(collectionResourceRel = "posts", path = "posts")
public interface PostRepository extends MongoRepository<Post, String> {
}
