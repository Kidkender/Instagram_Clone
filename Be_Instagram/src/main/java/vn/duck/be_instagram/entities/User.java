package vn.duck.be_instagram.entities;


import jakarta.persistence.*;
import lombok.*;
import vn.duck.be_instagram.services.dto.UserDto;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor @ToString
@Table(name = "t_users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

//    @Column(name = "user_name")
    private String userName;
//    @Column(name = "name")
    private String name;
//    @Column(name = "email")
    private String email;
//    @Column(name = "mobile")
    private String mobile;
//    @Column(name = "website")
    private String website;
//    @Column(name = "bio")
    private String bio;
//    @Column(name = "gender")
    private String gender;
//    @Column(name = "image")
    private String image;

//    @Column(name = "password")
    private String password;

    @Embedded
    @ElementCollection
    private Set<UserDto> follower = new HashSet<UserDto>();
    @Embedded
    @ElementCollection
    private Set<UserDto> following = new HashSet<UserDto>();

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Story> stories = new ArrayList<>();

    @ManyToMany
    private List<Post> savedPost = new ArrayList<>();
}