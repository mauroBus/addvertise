define([
    'views/contentview',
    'hbs',
    'jquery',
    'text!templates/fullitem.tpl.html'
   ], function(ContentView, Handlebars, $, fullItemTemplate) {
      var FullItemView = ContentView.extend({

      template: Handlebars.compile(fullItemTemplate),

      initialize: function() {
        _.bindAll(this, 'render');
      },

      render: function() {
        console.log('rendering full item');
        this.$el.html( this.template(this.model.toJSON()) );
        return this;
      }
    });

    return FullItemView;
});