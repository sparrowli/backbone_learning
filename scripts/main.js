(function() {

window.App = {
  Models: {},
  Collections: {},
  Views: {}
};

window.template = function(id) {
  return _.template( $('#' + id).html() );
};


// Person Model
App.Models.Person = Backbone.Model.extend({
  defaults: {
    name: 'Guest User',
    age: 30,
    occupation: 'worker'
  }
});

// A List of People
App.Collections.People = Backbone.Collection.extend({
  model: App.Models.Person
});


// View for all people
App.Views.People = Backbone.View.extend({
  tagName: 'ul',

  render: function() {
    this.collection.each(function(person) {
      var personView = new App.Views.Person({ model: person });
      this.$el.append(personView.render().el);
    }, this);

    return this;
  }
});

// The View for a Person
App.Views.Person = Backbone.View.extend({
  tagName: 'li',

  events: {
   'click .edit' : 'editPerson',
   'click .delete' : 'DestroyPerson'
  },

  initialize: function(){
      this.model.on('change', this.render, this);
      this.model.on('destroy', this.remove, this); 
  },

  editPerson: function(){
    var newName = prompt("Please enter the new name", this.model.get('name'));
    if (!newName)return;
    this.model.set('name', newName);
  },

  DestroyPerson: function(){
      this.model.destroy();
  },

  remove: function(){
      this.$el.remove();
  },

  template: template('personTemplate'), 
  render: function() {
    this.$el.html( this.template(this.model.toJSON()) );
    return this;
  }
});

var peopleCollection = new App.Collections.People([
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


var peopleView = new App.Views.People({ collection: peopleCollection });
$(document.body).append(peopleView.render().el);
})();
