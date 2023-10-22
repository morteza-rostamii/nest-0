import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from './dtos/CreateUser.dto';

// base route: /users
@Controller('users')
export class UsersController {
  
  // Get /users
  @Get()
  getUsers() {
    return {
      username: 'sara',
      email: 'sara@gmail.com',
    }
  }

  // Get /users/posts
  @Get('posts')
  getUsersPosts() {
    return {
      username: 'ali',
      posts: [
        {
          id: 0, 
          title: 'lover in the wind!',
        },
      ]
    }
  }

  // Post /users
  @Post()
  createUser(
    //@Req() request: Request,
    @Res() response: Response,
    // request.body
    @Body() data: CreateUserDto,
  ) {
    //console.log(request.body);

    console.log(data);

    return response.json({
      msg: 'user has been created!',
    });
  }
}
