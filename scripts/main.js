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

var PeopleView = Backbone.View.extend({
  tagName: 'ul',

  initialize: function () {
    console.log(this.collection);
  },
  render: function () {
    console.log(this);
    // loop over all the person objects
    this.collection.each(function(person){
      // should call render for the person objects
      var personView = new PersonView({model: person});
      // display a collection as HTML
      this.$el.append(personView.el);
    }, this);

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

var personCollection = new PersonCollection([
  {
      name: 'Mohit Jain',
      age: 26
  },
  {
      name: 'Taroon Tyagi',
      age: 25,
      occupation: 'web designer'
  },
  {
      name: 'Rahul Narang',
      age: 26,
      occupation: 'Java Developer'
  }
]);

var peopleView = new PeopleView( {collection: personCollection} );
peopleView.render();
console.log(peopleView.el);
