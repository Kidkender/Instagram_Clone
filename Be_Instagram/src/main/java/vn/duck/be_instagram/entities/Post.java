package vn.duck.be_instagram.entities;

import jakarta.persistence.*;
import lombok.*;
import vn.duck.be_instagram.services.dto.UserDto;

import javax.xml.stream.events.Comment;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "t_post")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    private String caption;
    private String location;
    private LocalDateTime createAt;

    @Embedded
    @AttributeOverrides({
            @AttributeOverride(name = "id", column = @Column(name = "user_id")),
            @AttributeOverride(name = "email", column = @Column(name = "user_email"))
    })
    private UserDto user;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Comment> comments = new ArrayList<Comment>();
    private Set<UserDto> likedbyUsers = new HashSet<>();
}
