package vn.duck.be_instagram.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import vn.duck.be_instagram.services.dto.UserDto;

import java.time.LocalDateTime;

@Entity
@Table(name = "t_story")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
public class Story {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Embedded
    @AttributeOverrides({
            @AttributeOverride(name="id",column = @Column(name="user_id")),
            @AttributeOverride(name="email",column = @Column(name="user_email"))
    })

    private UserDto user;
    @NotNull
    private String image;
    private String caption;
    private LocalDateTime timestamp;
}
