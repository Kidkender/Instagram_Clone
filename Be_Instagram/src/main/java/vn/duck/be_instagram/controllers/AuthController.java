package vn.duck.be_instagram.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import vn.duck.be_instagram.entities.User;
import vn.duck.be_instagram.exceptions.UserException;
import vn.duck.be_instagram.services.UserService;

@RestController
@RequiredArgsConstructor
public class AuthController {

    @Autowired
    private final UserService userService;


    @PostMapping("/signup")
    public ResponseEntity<User> registerUserHandler(@RequestBody User user) throws UserException{

        User createUser = userService.registerUser(user);
        return new ResponseEntity<User>(createUser , HttpStatus.CREATED);
    }


}
