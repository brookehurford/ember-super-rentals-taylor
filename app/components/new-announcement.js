import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  sendAnnouncement() {
    var params = {
      sales: this.get('sales') ? this.get('sales'):"None",
      weather: this.get('weather') ? this.get('weather'):"None",
      news: this.get('news') ? this.get('news'):"None"
    };
    this.sendAction('sendAnnouncement', params);
    }
  }
});
