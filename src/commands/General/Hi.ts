/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
  constructor(client: WAClient, handler: MessageHandler) {
    super(client, handler, {
      command: "hi",
      description: "Generally used to check if bot is Up",
      category: "general",
      usage: `${client.config.prefix}hi`,
      baseXp: 10,
    });
  }

  run = async (M: ISimplifiedMessage): Promise<void> => {
    const buttons = [
      {
        buttonId: "help",
        buttonText: { displayText: `${this.client.config.prefix}help` },
        type: 1,
      },
    ];

    const buttonMessage: any = {
      contentText: `_ℍ𝔼𝕃𝕃𝕆 𝕄𝔸ℝ𝕀ℕ 𝕀𝕊 ℍ𝔼ℝ𝔼 (⑅ᵒ̴̶̷᷄ωᵒ̴̶̷᷅⊞ོॢ)fෆr yෆu⋆*⋆✩*_`,
      footerText: "🎀𝓜𝓐𝓡𝓘𝓝𝓔🎀",
      buttons: buttons,
      headerType: 1,
    };
    await M.reply(buttonMessage, MessageType.buttonsMessage);
  };
}
