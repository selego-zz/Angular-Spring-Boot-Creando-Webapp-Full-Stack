package com.users.usersApp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.users.usersApp.entities.User;
import com.users.usersApp.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	private UserRepository repository;
	
	
	public UserServiceImpl(UserRepository repository) {
		super();
		this.repository = repository;
	}

	@Override
	@Transactional(readOnly = true)
	public List<User> findAll() {
		return (List<User>)this.repository.findAll();
	}

	@Override
	@Transactional(readOnly = true)
	public Optional<User> findById(Long id) {
		return this.repository.findById(id);
	}

	@Override
	@Transactional
	public User save(User user) {
		return this.repository.save(user);
	}

	@Override
	@Transactional
	public void deleteById(Long id) {
		this.repository.deleteById(id);

	}

}
