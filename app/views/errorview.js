define([
    'views/contentview',
    'hbs',
    'jquery',
    'text!templates/error.tpl.html'
   ], function(ContentView, Handlebars, $, errorTemplate) {
      var FullItemView = ContentView.extend({

      template: Handlebars.compile(errorTemplate),

      initialize: function() {
        _.bindAll(this, 'render');
      },

      render: function() {
        this.$el.html(this.template());
        return this;
      }
    });

    return FullItemView;
});