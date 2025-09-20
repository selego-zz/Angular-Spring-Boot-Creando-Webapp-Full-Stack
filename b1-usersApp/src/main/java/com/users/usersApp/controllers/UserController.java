package com.users.usersApp.controllers;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
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

import jakarta.validation.Valid;

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
	public ResponseEntity<?> create(@Valid @RequestBody User user, BindingResult result) {
		if (result.hasErrors()) {
			return validation(result);
		}
		user.setId(null);
		return ResponseEntity
				.status(HttpStatus.CREATED)
				.body(service.save(user));
	}

	@PutMapping("/{id}")
	public ResponseEntity<?> update(@Valid @RequestBody User user,
			BindingResult result,
			@PathVariable Long id) {
		if(result.hasErrors()) {
			return validation(result);
		}
		Optional<User> userOptional = service.findById(id);
		if (userOptional.isPresent()) {
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

	private ResponseEntity<?> validation(BindingResult result) {
		Map<String, String> errors = new HashMap<>();
		
		result.getFieldErrors().forEach(error -> errors.put(error.getField(), 
				"Error en el campo " + error.getField() + ": " + error.getDefaultMessage()));
		return ResponseEntity.badRequest().body(errors);
	}
	
}
