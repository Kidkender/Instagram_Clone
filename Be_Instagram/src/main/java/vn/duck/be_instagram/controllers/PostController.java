package vn.duck.be_instagram.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.duck.be_instagram.entities.Post;
import vn.duck.be_instagram.entities.User;
import vn.duck.be_instagram.exceptions.PostException;
import vn.duck.be_instagram.exceptions.UserException;
import vn.duck.be_instagram.services.PostService;
import vn.duck.be_instagram.services.UserService;
import vn.duck.be_instagram.services.dto.response.MessageResponse;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/post")
public class PostController {
    @Autowired
    private PostService postService;

    @Autowired
    private UserService userService;

    @PostMapping("/create")
    public ResponseEntity<Post> createPostHandler(@RequestBody Post post,
                                                  @RequestHeader("Authorization") String token)
            throws UserException {
        User user = userService.findUserProfile(token);
        Post createPost = postService.createPost(post, user.getId());
        return new ResponseEntity<Post>(createPost, HttpStatus.OK);
    }

    @GetMapping("/all/{id}")
    public ResponseEntity<List<Post>> findPostByUserIdHandler(@PathVariable(
            "id") Long userId) throws UserException {
        List<Post> posts = postService.findPostByUserId(userId);
        return new ResponseEntity<List<Post>>(posts, HttpStatus.OK);
    }

    @GetMapping("/following/{ids}")
    public ResponseEntity<List<Post>> findAllPostByUserIdsHandler(@PathVariable(
            "ids") List<Long> ids)
            throws UserException, PostException {
        List<Post> posts = postService.findAllPostByUserIds(ids);
        return new ResponseEntity<List<Post>>(posts, HttpStatus.OK);
    }

    @GetMapping("/{postId}")
    public ResponseEntity<Post> findPostByIdsHandler(@PathVariable Long postId) throws PostException {
        Post post = postService.findPostById(postId);
        return new ResponseEntity<Post>(post, HttpStatus.OK);
    }

    @PutMapping("/like/{postId}")
    public ResponseEntity<Post> likePostHandler(@PathVariable Long postId,
                                                @RequestHeader("Authorization") String token) throws UserException, PostException {
        User user = userService.findUserProfile(token);
        Post likePost = postService.likePost(postId, user.getId());
        return new ResponseEntity<Post>(likePost, HttpStatus.OK);
    }

    @PutMapping("/unlike/{postId}")
    public ResponseEntity<Post> unlikePostHandler(@PathVariable Long postId,
                                                  @RequestHeader("Authorization") String token) throws UserException, PostException {
        User user = userService.findUserProfile(token);
        Post unlikePost = postService.unlikePost(postId, user.getId());
        return new ResponseEntity<Post>(unlikePost, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{postId}")
    public ResponseEntity<MessageResponse> deletePostHandler(@PathVariable Long postId,
                                                             @RequestHeader(
                                                                     "Authorization") String token) throws PostException, UserException {
        User user = userService.findUserProfile(token);
        String message = postService.deletePost(postId, user.getId());
        MessageResponse res = new MessageResponse(message);
        return new ResponseEntity<MessageResponse>(res, HttpStatus.ACCEPTED);
    }

    @PutMapping("/save_post/{postId}")
    public ResponseEntity<MessageResponse> savedPostHandler(@PathVariable Long postId,
                                                            @RequestHeader(
                                                                    "Authorization") String token) throws UserException, PostException {
        User user = userService.findUserProfile(token);
        String message = postService.savePost(postId, user.getId());

        MessageResponse res = new MessageResponse(message);
        return new ResponseEntity<MessageResponse>(res, HttpStatus.ACCEPTED);

    }

    @PutMapping("/unsave_post/{postId}")
    public ResponseEntity<MessageResponse> unsavePostHandler(@PathVariable Long postId, @RequestHeader("Authorization") String token) throws UserException, PostException {
        User user = userService.findUserProfile(token);
        String message = postService.unSavePost(postId, user.getId());
        MessageResponse res = new MessageResponse(message);
        return new ResponseEntity<MessageResponse>(res, HttpStatus.ACCEPTED);
    }

}
