package vn.duck.be_instagram.services.implement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.duck.be_instagram.entities.Story;
import vn.duck.be_instagram.entities.User;
import vn.duck.be_instagram.exceptions.StoryException;
import vn.duck.be_instagram.exceptions.UserException;
import vn.duck.be_instagram.repositories.StoryRepository;
import vn.duck.be_instagram.repositories.UserRepostory;
import vn.duck.be_instagram.services.StoryService;
import vn.duck.be_instagram.services.UserService;
import vn.duck.be_instagram.services.dto.UserDto;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class StoryServiceImpl implements StoryService {

    @Autowired
    private StoryRepository storyRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private UserRepostory userRepostory;

    @Override
    public Story createStory(Story story, Long userId) throws UserException {
        User user = userService.findUserById(userId);
        UserDto userDto = new UserDto();
        userDto.setEmail(user.getEmail());
        userDto.setUserImage(user.getImage());
        userDto.setId(user.getId());
        userDto.setUsername(user.getUserName());
        userDto.setName(user.getName());

        story.setUser(userDto);
        story.setTimestamp(LocalDateTime.now());
        user.getStories().add(story);
        return storyRepository.save(story);
    }

    @Override
    public List<Story> findStoryByUserId(Long userId) throws UserException, StoryException {
        User user=userService.findUserById(userId);
        List<Story> stories=user.getStories();
        if (stories.size()==0){
            throw new StoryException("this user doesn's have any story");
        }
        return stories;
    }
}
