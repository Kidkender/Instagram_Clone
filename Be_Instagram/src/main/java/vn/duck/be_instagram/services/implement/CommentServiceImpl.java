package vn.duck.be_instagram.services.implement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.duck.be_instagram.entities.Comment;
import vn.duck.be_instagram.entities.Post;
import vn.duck.be_instagram.entities.User;
import vn.duck.be_instagram.exceptions.CommentException;
import vn.duck.be_instagram.exceptions.PostException;
import vn.duck.be_instagram.exceptions.UserException;
import vn.duck.be_instagram.repositories.CommentRepository;
import vn.duck.be_instagram.repositories.PostReposity;
import vn.duck.be_instagram.services.CommentService;
import vn.duck.be_instagram.services.PostService;
import vn.duck.be_instagram.services.UserService;
import vn.duck.be_instagram.services.dto.UserDto;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private PostReposity postReposity;
    @Autowired
    private PostService postService;

    @Override
    public Comment createComment(Comment comment, Long postId, Long userId) throws UserException, PostException {
        User user = userService.findUserById(userId);
        Post post = postService.findPostById(postId);
        UserDto userDto = new UserDto();

        userDto.setEmail(user.getEmail());
        userDto.setId(user.getId());
        userDto.setName(user.getName());
        userDto.setUserImage(user.getImage());
        userDto.setUsername(user.getUserName());

        comment.setUser(userDto);
        comment.setCreatedAt(LocalDateTime.now());
        Comment createdComment = commentRepository.save(comment);
        post.getComments().add(createdComment);

        postReposity.save(post);
        return createdComment;
    }

    @Override
    public Comment findCommentById(Long commentId) throws CommentException {
        Optional<Comment> opt = commentRepository.findById(commentId);
        if (opt.isPresent()) {
            return opt.get();
        }
        throw new CommentException("Comment is not exist with id: " + commentId);
    }

    @Override
    public Comment likeComment(Long commentId, Long userId) throws CommentException, UserException {

        User user = userService.findUserById(userId);
        Comment comment = findCommentById(commentId);

        UserDto userDto = new UserDto();
        userDto.setEmail(user.getEmail());
        userDto.setId(user.getId());
        userDto.setUserImage(user.getImage());
        userDto.setUsername(user.getUserName());
        userDto.setName(user.getName());
        comment.getLikedByUsers().add(userDto);
        return commentRepository.save(comment);
    }

    @Override
    public Comment unLikeComment(Long commentId, Long userId) throws CommentException, UserException {

        User user = userService.findUserById(userId);
        Comment comment = findCommentById(commentId);

        UserDto userDto = new UserDto();
        userDto.setEmail(user.getEmail());
        userDto.setId(user.getId());
        userDto.setUserImage(user.getImage());
        userDto.setUsername(user.getUserName());
        userDto.setName(user.getName());
        comment.getLikedByUsers().remove( userDto);
        return commentRepository.save(comment);
    }
}
