package vn.duck.be_instagram.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.duck.be_instagram.entities.Story;
import vn.duck.be_instagram.entities.User;
import vn.duck.be_instagram.exceptions.StoryException;
import vn.duck.be_instagram.exceptions.UserException;
import vn.duck.be_instagram.services.StoryService;
import vn.duck.be_instagram.services.UserService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/story")
public class StoryController {

    @Autowired
    private StoryService storyService;

    @Autowired
    private UserService userService;

    @PostMapping("/create")
    public ResponseEntity<Story> createStoryHandler(@RequestHeader(
            "Authorization") String token, @RequestBody Story story) throws UserException {
        User user = userService.findUserProfile(token);
        Story createStory = storyService.createStory(story, user.getId());
        return new ResponseEntity<Story>(createStory, HttpStatus.CREATED);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<Story>> findAllStoryByUserIdHandler(@PathVariable Long userId) throws UserException, StoryException {
        User user = userService.findUserById(userId);
        List<Story> stories = storyService.findStoryByUserId(user.getId());
        return new ResponseEntity<List<Story>>(stories, HttpStatus.OK);
    }
}
