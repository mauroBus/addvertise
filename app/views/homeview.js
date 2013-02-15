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

        console.log($('.places-list'));

        var placesView = new PlacesCollectionView({
          el: 'ul.places-list',
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