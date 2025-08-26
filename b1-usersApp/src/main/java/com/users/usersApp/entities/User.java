package com.users.usersApp.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import static jakarta.persistence.GenerationType.*;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Entity
@Table(name = "users")
@Data
public class User {
	
	@Id
	@GeneratedValue(strategy = IDENTITY)
	private Long id;
	
	@NotBlank
	private String name;

	@NotBlank
	private String lastname;

	@NotBlank
	@Email
	private String email;

	@NotBlank
	@Size(min = 4, max = 12)
	private String username;

	@NotBlank
	private String password;
}
