package com.ololos.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Document(collection = "posts")
@Data @AllArgsConstructor @NoArgsConstructor
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
        this.id = postTitle
                .replaceAll("[^a-zA-Z0-9]", " ") //Filters all special symbols making them spaces
                .trim()
                .replaceAll("\\s+"," ") //Replace all multispaces with single
                .replace(' ', '-') //Make them dashes and lowercase forming correct ID
                .toLowerCase();
    }
}
