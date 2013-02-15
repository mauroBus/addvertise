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
        _.bindAll(this, 'render', 'appendPlace');
        this.collection.bind('add', this.appendPlace);

        console.log($('ul.places-list'));
        $('ul.places-list').append('<div>holaa</div>');
        this.$el.append('<div class="123">NADA HERE</div>');
        //if (this.collection.length > 0) {
          //this.render();
        //}
      },

      render: function() {
        for (var place in this.collection.models) {
          this.appendPlace(place);
        }
        return this;
      },

      appendPlace: function(place) {
        console.log('adding a new place - new view');
        var newPlaceView = new PlaceView({model: place});
        $(this.el).append(newPlaceView.render().el);
      }
    });

    return PlacesCollectionView;
});