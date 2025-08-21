package com.users.usersApp.controllers;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.users.usersApp.entities.User;
import com.users.usersApp.services.UserService;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/api/users")
public class UserController {

	@Autowired
	UserService service;
	
	@GetMapping
	public List<User> findAll() {
		return service.findAll();
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> findById(@PathVariable Long id) {
		Optional<User> userOptional = service.findById(id);
		if(userOptional.isPresent()) 
			return ResponseEntity
					.status(HttpStatus.OK)
					.body(userOptional.orElseThrow());
		return ResponseEntity
				.status(HttpStatus.NOT_FOUND)
				.body(Collections
						.singletonMap("Error", "Usuario no encontrado"));
	}

	@PostMapping
	public ResponseEntity<User> create(@RequestBody User user) {
		return ResponseEntity
				.status(HttpStatus.CREATED)
				.body(service.save(user));
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<User> update(@PathVariable Long id, 
			@RequestBody User user) {
		Optional<User> userOptional = service.findById(id);
		if (userOptional.isPresent()) {
			
/*			if(user.getEmail()    != null) userOptional.orElseThrow().setEmail   (user.getEmail());
			if(user.getLastname() != null) userOptional.orElseThrow().setLastname(user.getLastname());
			if(user.getName()     != null) userOptional.orElseThrow().setName    (user.getName());
			if(user.getPassword() != null) userOptional.orElseThrow().setPassword(user.getPassword());
			if(user.getUsername() != null) userOptional.orElseThrow().setUsername(user.getUsername());
			return ResponseEntity.ok(service.save(user));

	*/		
			User userDb = userOptional.orElseThrow();
			userDb.setEmail   (user.getEmail());
			userDb.setLastname(user.getLastname());
			userDb.setName    (user.getName());
			userDb.setPassword(user.getPassword());
			userDb.setUsername(user.getUsername());
			return ResponseEntity.ok(service.save(userDb));
		}

		return ResponseEntity.notFound().build();
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteById(@PathVariable Long id) {
		//esto es solo si queremos controlar si encuentra algo que borrar o no
		Optional<User> userOptional = service.findById(id);
		if (userOptional.isPresent()) {
			service.deleteById(id);
			return ResponseEntity.noContent().build();
		}
		
		return ResponseEntity.notFound().build();
	}

}
