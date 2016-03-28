import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('announcement');
  },
  actions: {
    sendAnnouncement(params) {
      var newAnnouncement = this.store.createRecord('announcement', params);
      newAnnouncement.save();
      this.transitionTo('admin');
    },
    destroyAnnouncement(announcement) {
      announcement.destroyRecord();
      this.transitionTo('admin');
    }
  }
});
