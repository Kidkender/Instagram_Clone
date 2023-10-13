package vn.duck.be_instagram.config;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.crypto.SecretKey;
import java.io.IOException;
import java.util.Collection;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Log4j2
public class JwtTokenGeneratorFilter extends OncePerRequestFilter {
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        // TODO Auto-generated method stub
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication != null) {
            SecretKey key =
                    Keys.hmacShaKeyFor(SercurityContext.JWT_KEY.getBytes());
            String jwt = Jwts.builder()
                    .setIssuer("instagram")
                    .setIssuedAt(new Date())
                    .claim("authorities", populateAuthorities(authentication.getAuthorities()))
                    .claim("username", authentication.getName())
                    .setExpiration(new Date(new Date().getTime() + 3600000))
                    .signWith(key).compact();
            logger.info("token user : " + jwt);

            response.setHeader(SercurityContext.HEADER, jwt);
//            response.addHeader(SercurityContext.HEADER, jwt);
//            response.setHeader("custom-token-header",jwt);
//           String jsonResponse = "{\"token\": \"Bearer " + jwt + "\"}";
//            response.getWriter().write(jsonResponse);
//            response.getWriter().flush();
//            return;
        }
        filterChain.doFilter(request, response);
    }

    public String populateAuthorities(Collection<? extends GrantedAuthority> collection) {

        Set<String> authorities = new HashSet<>();

        for (GrantedAuthority authority : collection) {
            authorities.add(authority.getAuthority());
        }
        return String.join(",", authorities);

    }

    protected boolean shoudNotFilter(HttpServletRequest req) throws ServletException {
        return !req.getServletPath().equals("/signin");
    }
}




