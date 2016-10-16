package com.losmoney.auth

import com.losmoney.AbstractMvcSpec
import org.springframework.http.HttpStatus
import org.springframework.security.test.context.support.WithMockUser


class AuthenticationSpec extends AbstractMvcSpec {

    def "unauthenticated users cannot get resource"() {
        when:
            def res = get("/api/posts")

        then:
            res.status == HttpStatus.FORBIDDEN
    }

    @WithMockUser(roles = "ADMIN")
    def "authenticated users can get resource"() {
        when:
            def res = get("/api/posts")

        then:
            res.status == HttpStatus.OK
    }
}