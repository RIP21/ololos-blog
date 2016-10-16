package com.ololos.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

/**
 * Created by puha2 on 17.10.2016.
 */
@Document(collection = "authors")
public class Author {

    @Id
    String id;

    String authorName;

    @DBRef
    List<Post> posts;


}
