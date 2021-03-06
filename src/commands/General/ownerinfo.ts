import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'ownerinfo',
            description: 'Displays info about โด๐๐๐๐ก๐๐๐๐โด.',
            category: 'general',
            usage: `${client.config.prefix}ownerinfo`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://i.pinimg.com/564x/e5/ab/cc/e5abcca9633085d2b54b31362017b9ec.jpg',
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: rin }, MessageType.image, {quoted:M.WAMessage,
            mimetype: Mimetype.jpeg,
            caption: `Hello  !๐This is โด๐๐๐๐ก๐๐๐๐โด , And here is the info about my owners talk with them nicely and dont forget to follow their instagram.
            
๐ซ๐๐๐๐ฉ๐จ๐ผ๐ฅ๐ฅ;
Wa.me/+919574584820
Wa.me/+918130784851
โญ๐๐๐ฉ๐๐ช๐;
https://github.com/monarch21
๐ฎ๐๐ฃ๐จ๐ฉ๐๐๐ง๐๐ข;
https://instagram.com/at.__010
https://instagram.com/Bts.bigghitofficial7
๐ธ๐๐๐ก๐๐๐ง๐๐ข;
https://t.me/kim_Ayush
๐๐ฟ๐๐จ๐๐ค๐ง๐;
>> https://discord.gg/Gkevahetaq <<
โชผ๐ฒ๐พ๐พ ๐๐บ๐ ๐` }
        )
    }
}
