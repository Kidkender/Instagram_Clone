package vn.duck.be_instagram.entities;


import jakarta.persistence.*;
import lombok.*;
import vn.duck.be_instagram.services.dto.UserDto;

import java.util.*;

@Entity
@Table(name = "t_user")
@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String userName;
    private String name;
    private String email;
    private String mobile;
    private String website;
    private String bio;
    private String gender;
    private String image;

    private String password;

    private Set<UserDto> follower = new HashSet<UserDto>();
    private Set<UserDto> following = new HashSet<UserDto>();
    private List<Story> stories = new ArrayList<>();

    private List<Post> savePost = new ArrayList<>();

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(id, user.id) && Objects.equals(userName, user.userName) && Objects.equals(name, user.name) && Objects.equals(email, user.email) && Objects.equals(mobile, user.mobile) && Objects.equals(website, user.website) && Objects.equals(bio, user.bio) && Objects.equals(gender, user.gender) && Objects.equals(image, user.image) && Objects.equals(password, user.password) && Objects.equals(follower, user.follower) && Objects.equals(following, user.following) && Objects.equals(stories, user.stories) && Objects.equals(savePost, user.savePost);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, userName, name, email, mobile, website, bio, gender, image, password, follower, following, stories, savePost);
    }
}
