import { Controller, Get, Post, Patch, Put, Delete } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  public getUsers() {
    return 'You sent a GET request to /users endpoint';
  }

  @Post()
  public postUsers() {
    return 'You sent a POST request to /users endpoint';
  }
  @Patch()
  public patchUsers() {
    return 'You sent a PATCH request to /users endpoint';
  }

  @Put()
  public putUsers() {
    return 'You sent a PUT request to /users endpoint';
  }

  @Delete()
  public deleteUsers() {
    return 'You sent a DELETE request to /users endpoint';
  }
}
