package vn.duck.be_instagram.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vn.duck.be_instagram.entities.Comment;
import vn.duck.be_instagram.entities.User;
import vn.duck.be_instagram.exceptions.CommentException;
import vn.duck.be_instagram.exceptions.PostException;
import vn.duck.be_instagram.exceptions.UserException;
import vn.duck.be_instagram.services.CommentService;
import vn.duck.be_instagram.services.UserService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/comment")
public class CommnentController {

    @Autowired
    private CommentService commentService;
    @Autowired
    private UserService userService;

    @PostMapping("/create/{postId}")
    public ResponseEntity<Comment> createCommentHandler(@RequestBody Comment comment, @PathVariable Long postId, @RequestHeader("Authorization") String token)
            throws UserException, PostException {
        User user = userService.findUserProfile(token);
        Comment createComment = commentService.createComment(comment, postId, user.getId());
        return new ResponseEntity<Comment>(createComment, HttpStatus.CREATED);
    }

    @PutMapping("/like/{commentId}")
    public ResponseEntity<Comment> likeCommentHandler(@RequestHeader(
            "Authorization") String token, @PathVariable Long commentId) throws UserException, CommentException {
        User user = userService.findUserProfile(token);
        Comment comment = commentService.likeComment(commentId, user.getId());
        return new ResponseEntity<Comment>(comment, HttpStatus.OK);
    }

    @PutMapping("/unlike/{commentId}")
    public ResponseEntity<Comment> unLikeCommentHandler(@RequestHeader(
            "Authorization") String token, @PathVariable Long commentId) throws UserException, CommentException {
        User user = userService.findUserProfile(token);
        Comment comment = commentService.unLikeComment(commentId, user.getId());
        return new ResponseEntity<Comment>(comment, HttpStatus.OK);
    }


}
