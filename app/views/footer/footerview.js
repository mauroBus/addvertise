define([
    'backbone',
    'hbs',
    'jquery',
    //'jquerymobile',
    'text!templates/footer.tpl.html'
   ], function(Backbone, Handlebars, $, footerTemplate ){
      var FooterView = Backbone.View.extend({

      template: Handlebars.compile(footerTemplate),

      events: {
      },

      initialize: function() {
      },

      render: function() {
        this.$el.html(this.template());
        return this;
      }
    });

    return FooterView;
});