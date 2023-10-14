package vn.duck.be_instagram.services.implement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.duck.be_instagram.entities.Post;
import vn.duck.be_instagram.entities.User;
import vn.duck.be_instagram.exceptions.PostException;
import vn.duck.be_instagram.exceptions.UserException;
import vn.duck.be_instagram.repositories.PostReposity;
import vn.duck.be_instagram.repositories.UserRepostory;
import vn.duck.be_instagram.services.PostService;
import vn.duck.be_instagram.services.UserService;
import vn.duck.be_instagram.services.dto.UserDto;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class PostServiceImpl implements PostService {
    @Autowired
    private PostReposity postReposity;
    @Autowired
    private UserService userService;
    @Autowired
    private UserRepostory userRepostory;

    @Override
    public Post createPost(Post post, Long userId) throws UserException {
        User user = userService.findUserById(userId);

        UserDto userDto = new UserDto();
        userDto.setEmail(user.getEmail());
        userDto.setId(user.getId());
        userDto.setName(user.getName());
        userDto.setUserImage(user.getUserName());
        userDto.setUsername(user.getUserName());

        post.setUser(userDto);
        post.setCreatedAt(LocalDateTime.now());
        return postReposity.save(post);
    }

    @Override
    public String deletePost(Long postId, Long userId) throws UserException, PostException {
        Post post = findPostById(postId);
        User user = userService.findUserById(userId);
        if (post.getUser().getId().equals(user.getId())) {
            postReposity.deleteById(post.getId());
            return "Post deleted successfully";
        }
        throw new PostException("You can't delete other user's post");
    }

    @Override
    public List<Post> findPostByUserId(Long userId) throws UserException {
        List<Post> posts = postReposity.findByUserId(userId);
        if (posts.size() == 0) {
            throw new UserException("This user does not have any post");
        }

        return posts;
    }

    @Override
    public Post findPostById(Long postId) throws PostException {
        Optional<Post> opt = postReposity.findById(postId);
        if (opt.isPresent()) {
            return opt.get();
        }
        throw new PostException("Post not found with id" + postId);
    }

    @Override
    public List<Post> findAllPostByUserIds(List<Long> userIds)
            throws UserException, PostException {
        List<Post> posts = postReposity.findAllPostByUserIds(userIds);
        if (posts.size() == 0) {
            throw new PostException("No post available");
        }
        return posts;
    }

    @Override
    public String savePost(Long postId, Long userId) throws UserException, PostException {
        Post post = findPostById(postId);
        User user = userService.findUserById(userId);

        if (!user.getSavedPost().contains(post)) {
            user.getSavedPost().add(post);
            userRepostory.save(user);
        }
        return "Post saved successfully";
    }

    @Override
    public String unSavePost(Long postId, Long userId) throws UserException, PostException {
        Post post = findPostById(postId);
        User user = userService.findUserById(userId);

        if (user.getSavedPost().contains(post)) {
            user.getSavedPost().remove(post);
            userRepostory.save(user);
        }
        return "Post remove successfully";
    }

    @Override
    public Post likePost(Long postId, Long userId) throws UserException, PostException {
        Post post = findPostById(postId);
        User user = userService.findUserById(userId);

        UserDto userDto = new UserDto();
        userDto.setEmail(user.getEmail());
        userDto.setId(user.getId());
        userDto.setName(user.getName());
        userDto.setUserImage(user.getImage());
        userDto.setUsername(user.getUserName());
        post.getLikedByUsers().add(userDto);

        return postReposity.save(post);

    }

    @Override
    public Post unlikePost(Long postId, Long userId) throws UserException, PostException {

        Post post = findPostById(postId);
        User user = userService.findUserById(userId);

        UserDto userDto = new UserDto();
        userDto.setId(user.getId());
        userDto.setName(user.getName());
        userDto.setUserImage(user.getImage());
        userDto.setEmail(user.getEmail());
        userDto.setUsername(user.getUserName());

        post.getLikedByUsers().remove(userDto);
        return postReposity.save(post);
    }
}
