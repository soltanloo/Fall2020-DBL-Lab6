import { Controller, Post, Body, Get, Header, Query } from '@nestjs/common';
import { HelloService } from './hello.service';
import { PersonDto } from './dto/person.dto';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Post('welcome')
  @Header('Content-Type', 'application/json')
  async sayWelcome(@Body() personDto: PersonDto): Promise<{ data: string }> {
    const msg = await this.helloService.welcome(personDto);
    return { data: msg };
  }

  @Get('welcome')
  async sayWelcome2(
    @Query('name') name,
    @Query('year') year,
  ): Promise<{ data: string }> {
    const msg = await this.helloService.welcome({ name: name, year: year });
    return { data: msg };
  }
}
