var Person = Backbone.Model.extend({
  defaults: {
    name: 'Guest User',
    age: 23,
    occupation: 'Workser'
  }
});

var PersonCollection = Backbone.Collection.extend({
  model: Person
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

var personCollection = new PersonCollection();

var user = new Person();
var userView = new PersonView({model: user});

var sparrow = new Person({name: 'sparrow', age: '28', occupation: 'dev'});
var personView = new PersonView({model: sparrow});

personCollection.add(user);
personCollection.add(sparrow);

console.log(personCollection);
console.log(personCollection.toJSON());
$(document.body).html(personView.el);
