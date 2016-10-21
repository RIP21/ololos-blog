package com.ololos.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.List;

@Document(collection = "users")
@Data @AllArgsConstructor
public class User {

    @Id
    private
    String id;

    private String username;

    @JsonIgnore
    private String password;
    private List<SimpleGrantedAuthority> roles;

}
