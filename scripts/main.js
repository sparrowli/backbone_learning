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

  template: _.template($('#personTemplate').html()),

  initialize: function () {
    this.render();
  },

  render: function() {
    // anti-pattern
    this.$el.html( this.template(this.model.toJSON()));
  }
});

var sparrow = new Person({name: 'sparrow', age: '28', occupation: 'dev'});
var personView = new PersonView({model: sparrow});

console.log(personView.el);
console.log(personView.$el);
$(document.body).html(personView.el);
