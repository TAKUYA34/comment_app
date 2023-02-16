import consumer from "./consumer"

if(location.pathname.match(/\/items\/\d/)){
  
  consumer.subscriptions.create("CommentChannel", {
    connected() {
      // Called when the subscription is ready for use on the server
    },

    disconnected() {
      // Called when the subscription has been terminated by the server
    },

    received(data) {
      console.log(data) //追加
      // Called when there's incoming data on the websocket for this channel
    }
  });
}
