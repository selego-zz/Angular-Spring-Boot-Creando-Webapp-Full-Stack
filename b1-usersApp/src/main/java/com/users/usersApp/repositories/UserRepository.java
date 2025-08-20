package com.users.usersApp.repositories;

import org.springframework.data.repository.CrudRepository;

import com.users.usersApp.entities.User;

public interface UserRepository extends CrudRepository<User, Long> {

}
