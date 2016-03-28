import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  creationDate: DS.attr(),
  expirationDate: DS.attr(),
  title: DS.attr(),
  content: DS.attr()
});
