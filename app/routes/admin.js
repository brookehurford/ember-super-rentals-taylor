import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('announcement');
  },
  actions: {
    sendAnnouncement(announcement) {
      var newAnnouncement = this.store.createRecord('announcement', announcement);
      newAnnouncement.save();
      this.transitionTo('index');
    }
  }
});
