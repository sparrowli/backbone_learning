var Person = Backbone.Model.extend({
  defaults: {
    name: 'Guest User',
    age: 23,
    occupation: 'Workser'
  }
});

var PersonView = Backbone.View.extend({
  tagName: 'li',
  className: 'person',
  id: 'person-id',

  template: _.template(" () - "),

  initialize: function () {
    this.render();
  },

  render: function() {
    // anti-pattern
    this.$el.html( this.model.get('name') + ' (' + this.model.get('age') + ') - ' + this.model.get('occupation') );
  }
});

var sparrow = new Person({name: 'sparrow', age: '28', occupation: 'dev'});
var personView = new PersonView({model: sparrow});

console.log(personView.el);
console.log(personView.$el);
