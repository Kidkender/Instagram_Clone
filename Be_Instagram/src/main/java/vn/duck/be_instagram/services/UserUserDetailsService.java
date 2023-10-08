package vn.duck.be_instagram.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import vn.duck.be_instagram.repositories.UserRepostory;

import java.util.ArrayList;

import java.util.List;
import java.util.Optional;

@Service
public class UserUserDetailsService implements UserDetailsService {

    @Autowired
    UserRepostory userRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // TODO Auto-generated method stub

        Optional<vn.duck.be_instagram.entities.User> opt = userRepository.findByEmail(username);

        if (opt.isPresent()) {
            vn.duck.be_instagram.entities.User user = opt.get();

            List<GrantedAuthority> authorities = new ArrayList<>();


            return new User(user.getEmail(), user.getPassword(), authorities);
        }
        throw new BadCredentialsException("User Not Found With username" + username);
    }

}
