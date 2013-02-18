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

      placesView: null,

      events: {
      },

      initialize: function() {
        this.places = this.options.places;

        this.placesView = new PlacesCollectionView({
          el: 'ul.places-list',
          collection: places
        });

        this.render();
      },

      render: function() {
        this.$el.html(this.template());
        this.placesView.setElement('ul.places-list');
        return this;
      }

    });

    return HomeView;
});