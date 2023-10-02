import { Body, Controller, Get, Param, Post, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';
MessagesService


@Controller('messages')
export class MessagesController {

    messagesService: MessagesService

    constructor() {
        // don't do this in real app 
        //use dependency injection
        this.messagesService = new MessagesService()
    }

    @Get()
    listMessages() {
        return this.messagesService.findAll();
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto) {
        return this.messagesService.create(body.content)
    }

    @Get('/:id')
    async getMessage(@Param('id') id: string) {
        const message= await this.messagesService.findOne(id)

        if(!message) {
            throw new NotFoundException('Message Not Found')
        }

        return message
    }
}
