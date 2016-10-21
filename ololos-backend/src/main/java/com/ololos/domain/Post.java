package com.ololos.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Document(collection = "posts")
@Data @AllArgsConstructor
public class Post {

    @Id
    @Getter
    private String id;
    private String title;
    private String body;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private Date postdate;
    private Author author;

    public void setId(String postTitle) {
        this.id = postTitle.replace(' ', '-').toLowerCase();
    }
}
