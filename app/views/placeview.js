define([
    'backbone',
    'hbs',
    'jquery',
    //'jquerymobile',
    'text!templates/place.tpl.html'
   ], function(  Backbone, Handlebars, $, placeTemplate ){
      var HomeView = Backbone.View.extend({

      template: Handlebars.compile(placeTemplate),

      events: {
        'mouseover': 'highlightPlace',
        'mouseout': 'showNormalPlace'
      },

      initialize: function(){
        _.bindAll(this, 'render', 'highlightPlace', 'showNormalPlace');
        this.model.bind('change', this.render());
      },

      render: function(){
        this.$el.html( this.template( this.model.toJSON() ) );
        return this;
      },

      highlightPlace: function() {
        this.$el.css({'border': '5px solid blue'});
      },

      showNormalPlace: function() {
        this.$el.css({'border': '1px solid black'});
      }

    });

    return HomeView;
});