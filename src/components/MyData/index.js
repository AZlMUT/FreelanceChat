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
      text: "Какую фотку поставить на аву?",
      date: "2020-12-04 16:15:00",
      isMe: true,
      readed: true,
      attachments:[
        {
          filename: "1",
          url: ava(10),
        },
        {
          filename: "2",
          url: ava(11),
        },
        {
          filename: "3",
          url: ava(12),
        },
      ]
    },
    {
      avatar: ava(2),
      text: "Сто пудов эту",
      date: "2020-12-04 16:17:00",
      isMe: false,
    },
    {
      avatar: ava(2),
      date: "2020-12-04 16:22:00",
      isMe: false,
      attachments:[
        {
          filename: "1",
          url: ava(12),
        },
      ]
    },
    {
      avatar: ava(2),
      text: "Этот текст сдесь для примера большого и длинного смс. Его не нужно читать.А фотку лчше наверное эту - ",
      date: "2020-12-04 16:17:00",
      isMe: false,
    },
    {
      avatar: ava(2),
      date: "2020-12-04 16:22:00",
      isMe: false,
      attachments:[
        {
          filename: "1",
          url: ava(10),
        },
      ]
    },
    
    
    {
      avatar: ava(1),
      readed: false,
      text: "Договорились)))",
      date: "2020-12-04 16:25:00",
      isMe: true,
    },
    {
      avatar: ava(2),
      isMe: false,
      isTyping:true
    }
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
    }
  ]
};

export default MyData;
