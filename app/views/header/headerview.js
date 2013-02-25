define([
    'backbone',
    'hbs',
    'jquery',
    //'jquerymobile',
    'text!templates/header.tpl.html'
   ], function(Backbone, Handlebars, $, headerTemplate ){
      var HeaderView = Backbone.View.extend({

      template: Handlebars.compile(headerTemplate),

      events: {
      },

      initialize: function() {
      },

      render: function() {
        this.$el.html(this.template());
        return this;
      }
    });

    return HeaderView;
});