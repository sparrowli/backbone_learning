var Person = Backbone.Model.extend({
  defaults: {
    name: 'Guest User',
    age: 23,
    occupation: 'Workser'
  },
  work: function () {
    return this.get('name') + ' is working.';
  }
});
