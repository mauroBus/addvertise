define([
    'backbone',
    'hbs',
    'jquery',
    //'jquerymobile',
    'text!templates/filter.tpl.html'
   ], function(Backbone, Handlebars, $, filterTemplate ){
      var FilterView = Backbone.View.extend({

      template: Handlebars.compile(filterTemplate),

      events: {
      },

      initialize: function() {
      },

      render: function() {
        this.$el.html(this.template());
        return this;
      }
    });

    return FilterView;
});