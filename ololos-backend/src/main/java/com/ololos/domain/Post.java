package com.ololos.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Document(collection = "posts")
public class Post {

    @Id
    private String id;
    private String title;
    private String body;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private Date postdate;
    private Author author;

    public Post() {
    }

    public Post(String title, String body, Date postdate, Author author) {
        this.title = title;
        this.body = body;
        this.postdate = postdate;
        this.author = author;
    }

    public Post(String id, String title, String body, Date postdate, Author author) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.postdate = postdate;
        this.author = author;
    }



    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public Date getPostdate() {
        return postdate;
    }

    public void setPostdate(Date postdate) {
        this.postdate = postdate;
    }

    public Author getAuthor() {
        return author;
    }

    public void setAuthor(Author author) {
        this.author = author;
    }

}
