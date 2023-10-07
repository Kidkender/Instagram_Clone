package vn.duck.be_instagram.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.duck.be_instagram.entities.User;
import vn.duck.be_instagram.exceptions.UserException;
import vn.duck.be_instagram.services.UserService;
import vn.duck.be_instagram.services.dto.response.MessageResponse;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user")
@RequiredArgsConstructor
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("id/{id}")
    public ResponseEntity<User> findUserByIdHandler(@PathVariable Long id) throws UserException {
        User user = userService.findUserById(id);
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    @GetMapping("username/{username}")
    public ResponseEntity<User> findUserByUsernameHandler(@PathVariable String username) throws UserException {
        User user = userService.findUserByUsername(username);
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }

    @PutMapping("follow/{followUserId}")
    public ResponseEntity<MessageResponse> followUserHandler(@PathVariable Long followUserId) throws UserException {

//MessageResponse res= userService.followUser()

        return null;
    }

    @PutMapping("unfollow/{userId}")
    public ResponseEntity<MessageResponse> unFollowUserHandler(@PathVariable Long userId) throws UserException {
        return null;
    }

    @PutMapping("req")
    public ResponseEntity<MessageResponse> findUserProfileHandler(@RequestHeader("Authorization") String token) throws UserException {

        return null;
    }

    @GetMapping("m/{userIds}")
    public ResponseEntity<List<User>> findUserByIdsHandler(@PathVariable List<Long> userIds) throws UserException {
        List<User> users = userService.findUserByIds(userIds);
        return new ResponseEntity<List<User>>(users, HttpStatus.OK);
    }

    @GetMapping("search")
    public ResponseEntity<List<User>> searchUserHandler(@RequestParam("q") String query) throws UserException {
        List<User> users =userService.searchUser(query);
        return new ResponseEntity<List<User>>(users,HttpStatus.OK);
    }

     public ResponseEntity<User> updateUserHandler(@RequestHeader(
             "Authorization") String token,@RequestBody User user) throws UserException {
//        User reqUser
//        User updateUser=userService.updateUserDetails(user,user);

         return null;
     }
}
