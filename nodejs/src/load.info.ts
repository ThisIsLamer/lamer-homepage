import axios from 'axios';

export async function loadDiscordInfo() {
  const response = await axios.get(`https://discord.com/api/v9/users/${process.env.USER_ID}`, {
    headers: {
      Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
    },
  });

  return {
    avatar: `https://cdn.discordapp.com/avatars/${process.env.USER_ID}/${response.data.avatar}.jpg?size=128`,
    nickname: response.data.username,
    // * TODO: Сделать получение статуза из дискорда
    status: 'Обмазываюсь жабаскриптом каждый день',
  };
}
console.log();
export function loadInfo() {
  return {
    title: 'Lamer',
    social: {
      discord: {
        text: 'Discord',
        link: 'https://discord.com',
      },
      telegram: {
        text: 'Telegram',
        link: 'https://t.me/Lamer13',
      },
      githab: {
        text: 'Github',
        link: 'https://github.com/thisislamer',
      },
      gitlab: {
        text: 'Gitlab',
        link: 'https://gitlab.com/thisislamer13',
      },
    },
  };
}
