package com.ololos.security;

import com.ololos.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MongoDBUserDetailsService implements UserDetailsService {


    private final MongoOperations mongoOperations;

    @Autowired
    public MongoDBUserDetailsService(MongoOperations mongoOperations) {
        this.mongoOperations = mongoOperations;
    }


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserDetails loadedUser;
        try {
            User user = mongoOperations.findOne(new Query().addCriteria(Criteria.where("username").is(username)), User.class);
            loadedUser = new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), user.getRoles());
            } catch (Exception repositoryProblem) {
            throw new InternalAuthenticationServiceException(repositoryProblem.getMessage(), repositoryProblem);
        }
        return loadedUser;
    }


}


