package com.ololos.api;

import com.ololos.domain.Client;
import org.jongo.MongoCollection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class ResourceController {

    @Autowired
    private MongoCollection users;

    @RequestMapping("/api/resource")
    public Map<String, Object> home(@AuthenticationPrincipal UserDetails userDetails) {
        Client client = users.findOne("{#: #}", Client.USERNAME, userDetails.getUsername()).as(Client.class);
        Map<String, Object> model = new HashMap<>();
        model.put("roles", client.getRoles());
        return model;
    }
}