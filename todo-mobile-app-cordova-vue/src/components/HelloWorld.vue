<template>
  <div id='talkjs-container' style='width: 90% margin: 10px;'>
    <i>Carregando chat...</i>
  </div>
</template>

<script>
import Talk from 'talkjs'

export default {
  name: 'Inbox',
  props: {
    currentUser: {
      type: Object,
      required: true
    }
  },
  mounted: function () {
    Talk.ready.then(function () {
      var me = new Talk.User({
        id: parseInt(106 * 500000).toString(),
        name: 'Matheus',
        email: 'demo@talkjs.com',
        photoUrl: 'todo-mobile-app-cordova-vue/src/assets/logo.png',
        welcomeMessage: 'Hey there! How are you? :-)',
        role: 'booker'
      })
      var talkSession = new Talk.Session({
        appId: 'Hku1c4Pt',
        me: me
      })
      var other = new Talk.User({
        id: parseInt(84 * 500000).toString(),
        name: 'User2',
        email: 'demo@talkjs.com',
        photoUrl: 'todo-mobile-app-cordova-vue/src/assets/logo.png',
        welcomeMessage: 'Hey, how can I help?',
        role: 'booker'
      })
      var conversation = talkSession.getOrCreateConversation(
        Talk.oneOnOneId(me, other)
      )
      conversation.setParticipant(me)
      conversation.setParticipant(other)
      var inbox = talkSession.createInbox({ selected: conversation })
      inbox.mount(document.getElementById('talkjs-container'))
    })
  }
}
</script>

<style scoped>
  #talkjs-container{
    height: 80vh;
    width: 100%;
    position: absolute;
    top: 35px;
    left: 0;
  }
</style>
