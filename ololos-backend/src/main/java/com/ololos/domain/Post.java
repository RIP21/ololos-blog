package com.ololos.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Document(collection = "posts")
public class Post {

    @Id
    private String id;

    String title;
    String body;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    Date postdate;

    @DBRef
    User author;


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

    public User getAuthor() {
        return author;
    }

    public void setAuthor(User author) {
        this.author = author;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Post post = (Post) o;

        if (!id.equals(post.id)) return false;
        if (!title.equals(post.title)) return false;
        if (body != null ? !body.equals(post.body) : post.body != null) return false;
        if (!postdate.equals(post.postdate)) return false;
        return author.equals(post.author);

    }

    @Override
    public int hashCode() {
        int result = id.hashCode();
        result = 31 * result + title.hashCode();
        result = 31 * result + (body != null ? body.hashCode() : 0);
        result = 31 * result + postdate.hashCode();
        result = 31 * result + author.hashCode();
        return result;
    }
}
