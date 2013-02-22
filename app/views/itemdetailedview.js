define([
    'backbone',
    'hbs',
    'jquery',
    'text!templates/itemdetailed.tpl.html'
   ], function(Backbone, Handlebars, $, itemDetailedTemplate) {
      var ItemDetailedView = Backbone.View.extend({

      template: Handlebars.compile(itemDetailedTemplate),

      events: {
        'mouseleave': 'fadeOut'
      },

      initialize: function() {
        _.bindAll(this, 'render', 'fadeIn', 'fadeOut');
        this.model.bind('change', this.render);
      },

      render: function() {
        this.$el.hide();
        this.$el.html( this.template(this.model.toJSON()) );
        this.fadeIn();
        return this;
      },

      fadeIn: function() {
        this.$el.fadeIn();
      },

      fadeOut: function() {
        this.$el.fadeOut();
      }

    });

    return ItemDetailedView;
});