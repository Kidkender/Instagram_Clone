package vn.duck.be_instagram.services.implement;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.duck.be_instagram.entities.User;
import vn.duck.be_instagram.exceptions.UserException;
import vn.duck.be_instagram.repositories.UserRepostory;
import vn.duck.be_instagram.services.UserService;
import vn.duck.be_instagram.services.dto.UserDto;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor

public class UserImplement implements UserService {
    @Autowired
    private UserRepostory userRepostory;

    @Override
    public User registerUser(User user) throws UserException {
        Optional<User> isEmailExist = userRepostory.findByEmail(user.getEmail());
        if (isEmailExist.isPresent()) {
            throw new UserException("Email is Already Exist");
        }
        Optional<User> isUserNameExist =
                userRepostory.findByUserName(user.getUserName());

        if (isUserNameExist.isPresent()) {
            throw new UserException("User name is already taken...");
        }
        if (user.getEmail().isEmpty() || user.getPassword().isEmpty() || user.getName().isEmpty()) {
            throw new UserException("All files are required");
        }
        User newUser = new User();

        newUser.setEmail(user.getEmail());
        newUser.setPassword(user.getPassword());
        newUser.setName(user.getName());
        newUser.setName(user.getName());

        return userRepostory.save(new User());
    }

    @Override
    public User findUserById(Long id) throws UserException {
        Optional<User> opt = userRepostory.findById(id);
        if (opt.isPresent()) {
            return opt.get();
        }

        throw new UserException("user not exist with id" + id);
    }

    @Override
    public User findUserProfile(String token) throws UserException {
        return null;
    }

    @Override
    public User findUserByUsername(String username) throws UserException {
        Optional<User> user=userRepostory.findByUserName(username);
        if (user.isPresent())
        {
            return  user.get();
        }
        throw new UserException("user not exist with username" + username);
    }

    @Override
    public String followUser(Long reqUserId, Long followUserId) throws UserException {

        User reqUser = findUserById(reqUserId);
        User followUser = findUserById(followUserId);

        UserDto follower = new UserDto();
        follower.setEmail(reqUser.getEmail());
        follower.setId(reqUser.getId());
        follower.setUserImage(reqUser.getImage());
        follower.setName(reqUser.getName());
        follower.setUsername(reqUser.getUserName());

        UserDto following = new UserDto();
        following.setUsername(follower.getUsername());
        following.setId(follower.getId());
        following.setName(follower.getName());
        following.setUserImage(follower.getUserImage());
        following.setEmail(follower.getEmail());

        reqUser.getFollowing().add(following);
        followUser.getFollower().add(follower);

        userRepostory.save(followUser);
        userRepostory.save(reqUser);
        return "you are following " + followUser.getUserName();
    }

    @Override
    public String unFollowUser(Long reqUserId, Long followUserId) throws UserException {
        User reqUser = findUserById(reqUserId);
        User followUser = findUserById(followUserId);

        UserDto follower = new UserDto();
        follower.setEmail(reqUser.getEmail());
        follower.setId(reqUser.getId());
        follower.setUserImage(reqUser.getImage());
        follower.setName(reqUser.getName());
        follower.setUsername(reqUser.getUserName());

        UserDto following = new UserDto();
        following.setUsername(follower.getUsername());
        following.setId(follower.getId());
        following.setName(follower.getName());
        following.setUserImage(follower.getUserImage());
        following.setEmail(follower.getEmail());

        reqUser.getFollowing().remove(following);
        followUser.getFollower().remove(follower);

        userRepostory.save(followUser);
        userRepostory.save(reqUser);
        return "You have unfollowed" + followUser.getUserName();
    }

    @Override
    public List<User> findUserByIds(List<Long> userIds) throws UserException {

        List<User> users = userRepostory.findAllUsersByIds(userIds);
        return users;
    }

    @Override
    public List<User> searchUser(String query) throws UserException {
        List<User> users = userRepostory.findByQuery(query);
        if (users.size() == 0) {
            throw new UserException("User not found");
        }
        return users;
    }

    @Override
    public User updateUserDetails(User updateUser, User existingUser) throws UserException {
        if (updateUser.getEmail() != null) {
            existingUser.setEmail(updateUser.getEmail());
        }
        if (updateUser.getBio() != null) {
            existingUser.setBio(updateUser.getBio());
        }
        if (updateUser.getName() != null) {
            existingUser.setName(updateUser.getName());
        }
        if (updateUser.getUserName() != null) {
            existingUser.setUserName(updateUser.getUserName());
        }
        if (updateUser.getMobile() != null) {
            existingUser.setMobile(updateUser.getMobile());
        }
        if (updateUser.getGender() != null) {
            existingUser.setGender(updateUser.getGender());
        }
        if (updateUser.getWebsite() != null) {
            existingUser.setWebsite(updateUser.getWebsite());
        }
        if (updateUser.getImage() != null) {
            existingUser.setImage(updateUser.getImage());
        }
        if (updateUser.getId() != null) {
            existingUser.setId(updateUser.getId());
        }
        throw new UserException("You cant update this user");
    }

}
