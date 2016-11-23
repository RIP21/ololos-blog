package com.ololos.mongo

import com.ololos.AbstractMvcSpec
import com.ololos.dao.ItemRepository
import com.ololos.dao.UserRepository
import com.ololos.domain.Item
import org.springframework.beans.factory.annotation.Autowired
/**
 * Created by Andrii_Los on 10/17/2016.
 */

class MongoTestDataInserting extends AbstractMvcSpec {

    @Autowired
    ItemRepository itemRepository;
    @Autowired
    UserRepository userRepository;

    def "Insert test data"() {
        given:
            itemRepository.deleteAll()

        when:
            itemRepository.save(new Item("1","Item name 1"))
            itemRepository.save(new Item("2","Item name 2"))

        then:
            itemRepository.findAll().size() == 2;


    }
}
