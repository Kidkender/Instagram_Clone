package vn.duck.be_instagram.services;

import vn.duck.be_instagram.entities.Story;
import vn.duck.be_instagram.exceptions.StoryException;
import vn.duck.be_instagram.exceptions.UserException;

import java.util.List;

public interface StoryService {
    public Story createStory(Story story,Long userId) throws UserException;

    public List<Story> findStoryByUserId(Long userId) throws UserException,
            StoryException;
}
