package vn.duck.be_instagram.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import lombok.Data;
import org.springframework.stereotype.Service;
import vn.duck.be_instagram.config.SercurityContext;

import javax.crypto.SecretKey;

@Service
@Data
public class JwtTokenProvider {

    public JwtTokenClaims getClaimsFromToken(String token) {

        SecretKey key = Keys.hmacShaKeyFor(SercurityContext.JWT_KEY.getBytes());
        Claims claims = Jwts.parser().setSigningKey(key).parseClaimsJws(token).getBody();
        String username = String.valueOf(claims.get("username"));
        JwtTokenClaims jwtTokenClaims = new JwtTokenClaims();
        jwtTokenClaims.setUserName(username);
        return jwtTokenClaims;
    }
}

