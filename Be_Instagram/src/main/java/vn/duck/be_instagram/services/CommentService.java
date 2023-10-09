package vn.duck.be_instagram.services;

import vn.duck.be_instagram.entities.Comment;
import vn.duck.be_instagram.exceptions.CommentException;
import vn.duck.be_instagram.exceptions.PostException;
import vn.duck.be_instagram.exceptions.UserException;

public interface CommentService {
    public Comment createComment(Comment comment, Long postId, Long userId) throws UserException, PostException;

    public Comment findCommentById(Long commentId) throws CommentException;

    public Comment likeComment(Long commentId, Long userId) throws CommentException, UserException;

    public Comment unLikeComment(Long commentId, Long userId) throws CommentException, UserException;

}
