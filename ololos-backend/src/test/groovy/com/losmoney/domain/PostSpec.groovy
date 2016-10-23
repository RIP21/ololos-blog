package com.losmoney.domain

import com.ololos.domain.Post
import spock.lang.Specification
/**
 * Created by puha2 on 23.10.2016.
 */
class PostSpec extends Specification{

    def "ID setter remove all special characters and form proper ID"() {
        given:
            def given = new Post();
        when:
            given.setId("&%##@!@#-/***/Title Normal_One, Shit*((*)(*)( post, crap&*(*&(*&(*%")
        then: "Removed all multispaces left from special characters replacements via spaces forming correct ID"
            given.id == "title-normal-one-shit-post-crap"
    }
}
