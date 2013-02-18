define([
    'backbone',
    'hbs',
    'jquery',
    //'jquerymobile',
    'views/placeview',
    'text!templates/places.tpl.html'
   ], function(Backbone, Handlebars, $, PlaceView, placesTemplate) {
      var PlacesCollectionView = Backbone.View.extend({

      template: Handlebars.compile(placesTemplate),

      events: {
      },

      initialize: function() {
        _.bindAll(this, 'render', 'appendPlace', 'clearElements');
        this.collection.bind('add', this.appendPlace);
        this.collection.bind('reset', this.clearElements);

        if (this.collection.length > 0) {
          this.render();
        }
      },

      clearElements: function() {
        console.log('clearing elements');
        this.$el.html('');
      },

      render: function() {
        for (var place in this.collection.models) {
          this.appendPlace(place);
        }
        return this;
      },

      appendPlace: function(place) {
        var newPlaceView = new PlaceView({model: place});
        this.$el.append(newPlaceView.render().el);
      }
    });

    return PlacesCollectionView;
});