package com.ololos.dao;

import com.ololos.domain.Item;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@Repository
@RepositoryRestResource
public interface ItemRepository extends MongoRepository<Item, String> {

}
