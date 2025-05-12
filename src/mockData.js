import johnPic from './assets/images/john.jpg';
import alicePic from './assets/images/alice.jpg';
import bobPic from './assets/images/bob.jpg';
import charliePic from './assets/images/charlie.jpg';
import dianaPic from './assets/images/diana.jpg';


const mockData = {
    currentUser: {
      id: "user0",
      name: "You",
      profilePic: johnPic,
    },
    friends: [
      {
        id: "friend1",
        name: "Alice",
        profilePic: alicePic,
        messages: [
          { id: "msg1", senderId: "friend1", text: "Hey there! How's it going?", timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString() },
          { id: "msg2", senderId: "user0", text: "Hi Alice! Doing well, thanks. You?", timestamp: new Date(Date.now() - 1000 * 60 * 50).toISOString() },
          { id: "msg3", senderId: "friend1", text: "Pretty good! Just working on a new project.", timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString() },
        ],
      },
      {
        id: "friend2",
        name: "Bob",
        profilePic: bobPic,
        messages: [
          { id: "msg4", senderId: "user0", text: "Hey Bob, are you free later?", timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString() },
          { id: "msg5", senderId: "friend2", text: "Hi! Yeah, I should be. What's up?", timestamp: new Date(Date.now() - 1000 * 60 * 55).toISOString() },
        ],
      },
      {
        id: "friend3",
        name: "Charlie",
        profilePic: charliePic,
        messages: [
          { id: "msg6", senderId: "friend3", text: "Good morning!", timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString() },
        ],
      },
       {
        id: "friend4",
        name: "Diana",
        profilePic: dianaPic, // Placeholder
        messages: [], // No messages yet
      },
    ],
  };
  
  export default mockData;