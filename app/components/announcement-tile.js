import Ember from 'ember';

export default Ember.Component.extend({
  sendAnnouncement() {
    var announcement = {
      sales: this.get('sales') ? this.get('sales'): "",
      weather: this.get('weather') ? this.get('weather'): "",
      news: this.get('news') ? this.get('news'): ""
    };
    this.sendAction('sendAnnouncement', announcement);
  }
});
