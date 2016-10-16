package com.losmoney.api

import com.ololos.OlolosWebappApplication
import com.ololos.domain.Post
import com.ololos.domain.User
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.SpringApplicationConfiguration
import org.springframework.data.mongodb.core.MongoOperations
import org.springframework.data.mongodb.core.query.Criteria
import org.springframework.data.mongodb.core.query.Query
import spock.lang.Specification
/**
 * Created by puha2 on 17.10.2016.
 */

@SpringApplicationConfiguration(classes = [OlolosWebappApplication])
class PostResourceSpec extends Specification{

    @Autowired
    MongoOperations mongoOperations;

    def "Post test"() {
        when:
            mongoOperations.dropCollection("posts")
            def post = new Post()
            post.setBody("# Body")
            post.setPostdate(new Date())
            post.setTitle("Title")
            post.setAuthor(mongoOperations.findOne(new Query(Criteria.where("username").is("RIP21")), User.class))

            mongoOperations.save(post)
            Post post1 = mongoOperations.findAll(Post.class).first()

        then:
              println post1.toString()

    }
}
