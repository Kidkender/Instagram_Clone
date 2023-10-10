package vn.duck.be_instagram.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@Configuration
public class AppConfig {
    @Bean
    public SecurityFilterChain securityConfigration(HttpSecurity http) throws Exception {
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and().cors().configurationSource(request -> {
                    CorsConfiguration corsConfig=new CorsConfiguration();
                    corsConfig.applyPermitDefaultValues();
                    corsConfig.addAllowedOrigin("*");
//                    corsConfig.addAllowedMethod(HttpMethod.OPTIONS);
//                    corsConfig.addAllowedMethod(HttpMethod.GET);
//                    corsConfig.addAllowedMethod(HttpMethod.POST);
//                    corsConfig.addAllowedMethod(HttpMethod.PUT);
//                    corsConfig.addAllowedMethod(HttpMethod.DELETE);
//                    corsConfig.addAllowedHeader("Authorization");
                    return corsConfig;
                })
                .and()
                .authorizeHttpRequests()
                .requestMatchers(HttpMethod.POST,"/signup").permitAll()
                .anyRequest().authenticated()
                .and()
                .addFilterAfter(new JwtTokenGeneratorFilter(), BasicAuthenticationFilter.class)
                .addFilterBefore(new JwtTokenValidationFilter(), BasicAuthenticationFilter.class)
                .csrf().disable()
                .formLogin().and().httpBasic();
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
        configuration.setExposedHeaders(Arrays.asList("Authorization"));
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);

        return source;
    }
}
