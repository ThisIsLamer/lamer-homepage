import axios from 'axios';

export async function loadDiscordInfo() {
  const response = await axios.get(`https://discord.com/api/v9/users/@me`, {
    headers: {
      Authorization: process.env.DISCORD_USER_TOKEN,
    },
  });

  return {
    avatar: `https://cdn.discordapp.com/avatars/${response.data.id}/${response.data.avatar}.jpg?size=128`,
    nickname: response.data.username,
    status: response.data.bio.split('\n\n')[1],
    backgroundColor: response.data.banner_color,
  };
}

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
