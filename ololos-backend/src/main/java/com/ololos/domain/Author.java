package com.ololos.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Created by puha2 on 17.10.2016.
 */
@Document(collection = "authors")
public class Author {

    @Id
    String id;

    String authorName;

    public Author(String id, String authorName) {
        this.id = id;
        this.authorName = authorName;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getAuthorName() {
        return authorName;
    }

    public void setAuthorName(String authorName) {
        this.authorName = authorName;
    }

    @Override
    public String toString() {
        return "Author{" +
                "id='" + id + '\'' +
                ", authorName='" + authorName + '\'' +
                '}';
    }
}
