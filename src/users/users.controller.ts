import { Controller, Get, Post, Param, Query, Body } from '@nestjs/common';

@Controller('users')
export class UsersController {
  // Handle /users (all users)
  // Optional query params: /users?name=John&age=25
  @Get()
  public getAllUsers(@Query('name') name?: string, @Query('age') age?: string) {
    console.log('Getting all users', { name, age });
    return {
      message: 'You sent a GET request to /users endpoint (all users)',
      queryParams: { name: name || 'not provided', age: age || 'not provided' },
    };
  }

  // Handle /users/:id (specific user)
  // Optional query params: /users/123?include=profile&format=json
  @Get(':id')
  public getUser(
    @Param('id') id: string,
    @Query('include') include?: string,
    @Query('format') format?: string,
  ) {
    console.log(id, { include, format });
    return {
      message: `You sent a GET request to /users/${id}`,
      queryParams: {
        include: include || 'not provided',
        format: format || 'not provided',
      },
    };
  }

  @Post()
  public createUser(@Body() request: any) {
    console.log(request);
    return 'You sent a POST request to /users endpoint';
  }
}
