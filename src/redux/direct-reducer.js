const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE'

const initialState = {

};

const directReducer = (state = initialState, action) => {

  switch (action.type) {
    // case SEND_MESSAGE: {
    //   if (state.newMessage.trim() === '') {
    //     let stateCopy = {...state};
    //     stateCopy.newMessage = '';
    //     return stateCopy;
    //   }
    //   let stateCopy = {
    //     ...state,
    //     messages: [...state.messages]
    //   };
    //   const newMessage = {
    //     senderId: 0,
    //     receiverId: 24,
    //     message: state.newMessage
    //   }
    //   stateCopy.messages.push(newMessage);
    //   stateCopy.newMessage = '';
    //   return stateCopy;
    // }
    // case UPDATE_NEW_MESSAGE: {
    //   let stateCopy = {
    //     ...state
    //   };
    //   stateCopy.newMessage = action.newMessage;
    //   return stateCopy;
    // }
    default:
      return state;
  };
}

export const sendMessage = () => ({type: SEND_MESSAGE});
export const updateNewMessage = (text) =>
  ({ type: UPDATE_NEW_MESSAGE, newMessage: text });

export default directReducer;



// const initialState = {
//   dialogs: [
//     {id: 5, name: 'xenia.lau', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum reiciendis, distinctio doloribus, ullam quisquam enim adipisci dolorem in nihil necessitatibus ipsam facere neque at blanditiis recusandae voluptates culpa nisi fugit!', image: 'https://scontent-arn2-1.cdninstagram.com/vp/4ad747e283125381f54e4fd0e521ef91/5E1978F1/t51.2885-19/s320x320/52387796_368175857099669_624491676517269504_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com'},
//     {id: 3, name: 'carladoyle.exe', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste.', image: 'https://scontent-arn2-1.cdninstagram.com/vp/edf02019fcced63d15eb0426b5ed41b0/5E34E784/t51.2885-19/s320x320/69646050_959515534396220_1262456626787385344_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com'},
//     {id: 6, name: 'aanas.tasia_', text: 'Lorem, ipsum dolor.', image: 'https://scontent-arn2-1.cdninstagram.com/vp/19a2269eea63ec62b72ef26c46a8f3c9/5E276BF1/t51.2885-19/s320x320/69840932_2368558003472726_2812477132406521856_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com'},
//     {id: 12, name: 'marinaariasq', text: 'Lorem.', image: 'https://scontent-arn2-1.cdninstagram.com/vp/98ea09d4c5b30cd2317acb7229315fa7/5E2BAA59/t51.2885-19/s320x320/57280553_391964378059002_6778963130585186304_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com'},
//     {id: 24, name: 'loren_photo_studio', text: 'Lorem ipsum dolor sit amet consectetur adipisicing.', image: 'https://scontent-arn2-1.cdninstagram.com/vp/3aa1e01a6fa71a6943ce2012889c9abc/5E369E76/t51.2885-19/s320x320/26867378_326994371147632_3970620037345050624_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com'},
//     {id: 24, name: 'loren_photo_studio', text: 'Lorem ipsum dolor sit amet consectetur adipisicing.', image: 'https://scontent-arn2-1.cdninstagram.com/vp/3aa1e01a6fa71a6943ce2012889c9abc/5E369E76/t51.2885-19/s320x320/26867378_326994371147632_3970620037345050624_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com'},
//     {id: 24, name: 'loren_photo_studio', text: 'Lorem ipsum dolor sit amet consectetur adipisicing.', image: 'https://scontent-arn2-1.cdninstagram.com/vp/3aa1e01a6fa71a6943ce2012889c9abc/5E369E76/t51.2885-19/s320x320/26867378_326994371147632_3970620037345050624_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com'},
//     {id: 24, name: 'loren_photo_studio', text: 'Lorem ipsum dolor sit amet consectetur adipisicing.', image: 'https://scontent-arn2-1.cdninstagram.com/vp/3aa1e01a6fa71a6943ce2012889c9abc/5E369E76/t51.2885-19/s320x320/26867378_326994371147632_3970620037345050624_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com'},
//     {id: 24, name: 'loren_photo_studio', text: 'Lorem ipsum dolor sit amet consectetur adipisicing.', image: 'https://scontent-arn2-1.cdninstagram.com/vp/3aa1e01a6fa71a6943ce2012889c9abc/5E369E76/t51.2885-19/s320x320/26867378_326994371147632_3970620037345050624_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com'},
//     {id: 24, name: 'loren_photo_studio', text: 'Lorem ipsum dolor sit amet consectetur adipisicing.', image: 'https://scontent-arn2-1.cdninstagram.com/vp/3aa1e01a6fa71a6943ce2012889c9abc/5E369E76/t51.2885-19/s320x320/26867378_326994371147632_3970620037345050624_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com'},
//     {id: 24, name: 'loren_photo_studio', text: 'Lorem ipsum dolor sit amet consectetur adipisicing.', image: 'https://scontent-arn2-1.cdninstagram.com/vp/3aa1e01a6fa71a6943ce2012889c9abc/5E369E76/t51.2885-19/s320x320/26867378_326994371147632_3970620037345050624_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com'},
//     {id: 24, name: 'loren_photo_studio', text: 'Lorem ipsum dolor sit amet consectetur adipisicing.', image: 'https://scontent-arn2-1.cdninstagram.com/vp/3aa1e01a6fa71a6943ce2012889c9abc/5E369E76/t51.2885-19/s320x320/26867378_326994371147632_3970620037345050624_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com'},
//     {id: 24, name: 'loren_photo_studio', text: 'Lorem ipsum dolor sit amet consectetur adipisicing.', image: 'https://scontent-arn2-1.cdninstagram.com/vp/3aa1e01a6fa71a6943ce2012889c9abc/5E369E76/t51.2885-19/s320x320/26867378_326994371147632_3970620037345050624_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com'},
//     {id: 24, name: 'loren_photo_studio', text: 'Lorem ipsum dolor sit amet consectetur adipisicing.', image: 'https://scontent-arn2-1.cdninstagram.com/vp/3aa1e01a6fa71a6943ce2012889c9abc/5E369E76/t51.2885-19/s320x320/26867378_326994371147632_3970620037345050624_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com'}
//   ],
//   messages: [
//     {senderId: 0, receiverId: 24, message: 'Lorem adipisicing.'},
//     {senderId: 24, receiverId: 0, message: 'Lorem ectetur adipisicing.'},
//     {senderId: 0, receiverId: 3, message: 'Lorem  amet consectetur adipisicing.'},
//     {senderId: 24, receiverId: 0, message: 'Lorem ipsum dolor sit amet consectetur adipisicing.'},
//     {senderId: 0, receiverId: 6, message: 'Lorem'},
//     {senderId: 0, receiverId: 24, message: 'Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing.'},
//     {senderId: 12, receiverId: 0, message: 'Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing.'},
//     {senderId: 12, receiverId: 0, message: 'Lorem consectetur adipisicing.'},
//     {senderId: 5, receiverId: 0, message: 'Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur adipisicing.'},
//     {senderId: 0, receiverId: 3, message: 'Lorem ipsum dolor sit amet cong.Lorem ipsum dolor sit amet consectetur adipisicing.'},
//     {senderId: 6, receiverId: 0, message: 'Lorem ipsum dolo adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing.'},
//     {senderId: 6, receiverId: 0, message: 'Lorem ipsum dolor sit amet consectetur adipisicing.'},
//     {senderId: 3, receiverId: 0, message: 'Lorem onsectetur adipisicing.'},
//     {senderId: 0, receiverId: 5, message: 'Lorem ipsum dolor sit amet consectetur adipisicing.'},
//     {senderId: 0, receiverId: 3, message: 'olor sit amet cons.'},
//     {senderId: 0, receiverId: 12, message: 'Lorem ipsum dolor sit amet consectetur adipisicing.'},
//     {senderId: 0, receiverId: 12, message: 'Lorem ipamet consectetur adipisicing.'},
//     {senderId: 0, receiverId: 5, message: 'Lorem tur adipisicing.'},
//     {senderId: 0, receiverId: 24, message: 'Lorem ipsum dolor sit amet consectetur adipisicing.'},
//     {senderId: 3, receiverId: 0, message: 'Lorem ctetur adipisicing.'},
//     {senderId: 0, receiverId: 24, message: 'Lorem ipsum dolor sit amet consectetur adipisiciLorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing.ng.'},
//     {senderId: 12, receiverId: 0, message: 'Lorem ipsum dolo'},
//     {senderId: 5, receiverId: 0, message: 'Lorem sectetur adipisicing.'},
//     {senderId: 0, receiverId: 5, message: 'Lorem ipsum dot consectetur adipisicing.'},
//     {senderId: 3, receiverId: 0, message: 'Lorem ipsum dolor sit amet consectetur adipisicing.'},
//     {senderId: 0, receiverId: 12, message: 'Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing.'}
//   ],
//   newMessage: ''
// };