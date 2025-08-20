package com.users.usersApp.services;

import java.util.List;
import java.util.Optional;

import com.users.usersApp.entities.User;

public interface UserService {
	List<User> findAll();
	
	Optional<User> findById(Long id);
	
	User save(User user);
	
	void deleteById(Long id);
}
