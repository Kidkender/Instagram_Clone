package vn.duck.be_instagram.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import vn.duck.be_instagram.entities.User;
import vn.duck.be_instagram.exceptions.UserException;
import vn.duck.be_instagram.repositories.UserRepostory;
import vn.duck.be_instagram.services.UserService;

import java.util.Optional;

@RestController
public class AuthController {

    @Autowired
    UserService userService;
    @Autowired
    UserRepostory userRepository;

    @PostMapping("/signup")
    public ResponseEntity<User> registerUserHandler(@RequestBody User user) throws UserException{

        User createUser = userService.registerUser(user);
        return new ResponseEntity<User>(createUser , HttpStatus.CREATED);
    }

    @GetMapping("/signin")
    public ResponseEntity<User> signinHandler(Authentication auth )throws BadCredentialsException{
        Optional<User> opt = userRepository.findByEmail(auth.getName());
        if (opt.isPresent()) {
            return new ResponseEntity<User>(opt.get(),HttpStatus.ACCEPTED);
        }
        throw new BadCredentialsException("invalid username or password" );
    }

}
