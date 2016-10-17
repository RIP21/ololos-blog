package com.losmoney.api

import com.ololos.OlolosWebappApplication
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.SpringApplicationConfiguration
import org.springframework.data.mongodb.core.MongoOperations
import spock.lang.Specification
/**
 * Created by puha2 on 17.10.2016.
 */

@SpringApplicationConfiguration(classes = [OlolosWebappApplication])
class PostResourceSpec extends Specification{

    @Autowired
    MongoOperations mongoOperations;

}
