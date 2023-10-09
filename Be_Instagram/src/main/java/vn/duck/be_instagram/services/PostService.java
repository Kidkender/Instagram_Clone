package vn.duck.be_instagram.services;

import vn.duck.be_instagram.entities.Post;
import vn.duck.be_instagram.exceptions.PostException;
import vn.duck.be_instagram.exceptions.UserException;

import java.util.List;

public interface PostService {
    public Post createPost(Post post,Long userId) throws UserException;

    public String deletePost(Long postId, Long userId) throws UserException,
            PostException;

    public List<Post> findPostByUserId(Long userId) throws UserException;

    public Post findPostById(Long postId) throws PostException;

    public List<Post> findAllPostByUserIds(List<Long> userIds) throws UserException, PostException;

    public String savePost(Long postId, Long userId) throws UserException,
            PostException;
    public String unSavePost(Long postId, Long userId) throws UserException,
            PostException;

    public Post likePost(Long postId,Long userId) throws UserException,
            PostException;

    public Post unlikePost(Long postId,Long userId) throws UserException,
            PostException;

}
