define([
    'backbone',
    'hbs',
    'jquery',
    //'jquerymobile',
    'views/placecollectionview',
    'text!templates/home.tpl.html'
   ], function(  Backbone, Handlebars, $, PlacesCollectionView, homeTemplate ){
      var HomeView = Backbone.View.extend({

      template: Handlebars.compile(homeTemplate),

      places: null,

      events: {
      },

      initialize: function() {
        this.render();

        this.places = places;
        var placesView = new PlacesCollectionView({
          el: '.places-container',
          collection: places
        });
      },

      render: function() {
        this.$el.html( this.template() );
        return this;
      }

    });

    return HomeView;
});