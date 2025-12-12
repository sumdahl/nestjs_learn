import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  Headers,
  Ip,
  ParseIntPipe,
  DefaultValuePipe,
} from '@nestjs/common';

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
  @Get('/:id')
  public getUser(
    @Param('id', ParseIntPipe) id: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log(limit);
    console.log(page);
    return {
      message: `You sent a GET request to /users/${id}`,
      queryParams: {
        limit: limit || 'not provided',
        page: page || 'not provided',
      },
    };
  }

  @Post()
  public createUser(
    @Body() request: any,
    @Headers() headers: any,
    @Ip() ip: string,
  ) {
    console.log(request);
    console.log(headers);
    console.log('Request from IP:', ip);
    return 'You sent a POST request to /users endpoint';
  }
}
