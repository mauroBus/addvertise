define([
    'backbone',
    'hbs',
    'jquery',
    //'jquerymobile',
    'text!templates/item.tpl.html',
    'config/item.interaction'
   ], function(Backbone, Handlebars, $, itemTemplate, ItemConfig) {
      var HomeView = Backbone.View.extend({

      template: Handlebars.compile(itemTemplate),

      tagName: 'li',

      events: {
        'mouseover': 'highlightItem',
        'mouseout': 'displayNormalItem'
      },

      initialize: function() {
        _.bindAll(this, 'render', 'highlightItem', 'displayNormalItem');
        this.model.bind('change', this.render());
        this.displayNormalItem();
      },

      render: function() {
        this.$el.html( this.template(this.model.toJSON()) );

        var itemStars = this.model.get('stars');
        if (itemStars) {
          // console.log('element:    ' + this.$el.find('.icon-stared'));
          this.$el.find('.icon-stared').addClass('item-stars-width' + this.model.get('stars'));
          this.$el.find('.icon-stars-off').addClass('item-stars-width' + (5 - itemStars));
        }
        return this;
      },

      highlightItem: function() {
        //this.$el.css(ItemConfig.highlightStyle);
      },

      displayNormalItem: function() {
        this.$el.css(ItemConfig.normalDisplay);
      }
    });

    return HomeView;
});