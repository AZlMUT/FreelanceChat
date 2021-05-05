const ava = (id) => {
  return `https://source.unsplash.com/100x100/?random=${id}&face,portrait,family,girl`;
};

const myProps = {
  currentChat: "125"
}




const MyData = {
  msg: [
    {
      avatar: ava(1),
      text: "Привет Солнце, чем занимаешься, как день прошел?",
      date: "2020-01-05 22:30:00",
      isMe: true,
    },

    {
      avatar: ava(2),
      text:
        "Кукусику))) Вот сижу пишу чат для нас двоих, день прошел хорошо, но с тобой он был бы лучше)",
      date: "2020-01-05 22:32:00",
      isMe: false,
    },

    {
      avatar: ava(1),
      text: "Не сомневаюсь😘😘😘",
      date: "2020-01-05 22:34:00",
      isMe: true,
    },

    {
      avatar: ava(2),
      text: "Угу)",
      date: "2020-01-05 22:37:00",
      isMe: false,
    },

    {
      avatar: ava(1),
      text: "Часто бывает такое что не знаю, что сказать, и первое что приходит на ум, это спросить какие планы на завтра)",
      date: "2020-01-05 22:40:00",
      isMe: true,
    },

    {
      avatar: ava(2),
      text: "Знаешь... писать переписку самим с собой это очень увлекательное занятие. Лучше бы я писал тебе(",
      date: "2020-01-05 22:41:00",
      isMe: false,
    },

    {
      avatar: ava(1),
      text: "Ты чего, все хорошо) , продолжай работать",
      date: "2020-01-05 22:45:00",
      isMe: true,
    },

    {
      avatar: ava(2),
      isMe: false,
      isTyping:true
    },
  ],












  dialogs: [
    {
      _id: "123",
      undread: 5,
      text:"Ты же говорил, что не хочешь ехать",
      isMe: true,
      currentDialogId: myProps.currentChat,
      partner: {
        isOnline: false,
        fullname: "Валерончик",
        avatar: ava(3),
        isReaded:false,
      },
      isReaded:false,
      lastMessage: {isReaded:false, unread: 10 },
      userId: "123",
      _id: "123",
      author: { _id: "123", isOnline: false },
      isOnline: false,
    },
    {
      _id: "124",
      undread: 5,
      text: "А я ведь говорил, что будут читать))))",
      isMe: true,
      currentDialogId: myProps.currentChat,
      partner: {
        isOnline: false,
        fullname: "Русик Соло",
        avatar: ava(4),
      },
      lastMessage: { unread: 10 },
      userId: "124",
      _id: "124",
      author: { _id: "124", isOnline: false },
      isOnline: false,
    },
    {
      _id: "125",
      undread: 5,
      text: "Сладких снов родная❤️❤️❤️ И удачи в завтрашнем дне😘🔥",
      isMe: true,
      currentDialogId: myProps.currentChat,
      partner: {
        isOnline: true,
        fullname: "❤️Моё солнышко❤️",
        avatar: ava(2),
      },
      lastMessage: { unread: 10 },
      userId: "125",
      _id: "125",
      author: { _id: "125", isOnline: true },
      isOnline: true,
    },
    {
      _id: "127",
      undread: 5,
      text: "Звони хоть иногда)",
      isMe: true,
      currentDialogId: myProps.currentChat,
      partner: { isOnline: true, fullname: "Папка", avatar: ava(99) },
      lastMessage: { unread: 10 },
      userId: "127",
      _id: "127",
      author: { _id: "127", isOnline: true },
      isOnline: true,
    },
    {
      _id: "126",
      undread: 5,
      text: "Приятно иметь дело😉",
      isMe: true,
      currentDialogId: myProps.currentChat,
      partner: { isOnline: false, fullname: "Маман", avatar: ava(25) },
      lastMessage: { unread: 10 },
      userId: "126",
      _id: "126",
      author: { _id: "126", isOnline: true },
      isOnline: true,
    },
  ]
};

export default MyData;
