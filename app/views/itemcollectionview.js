define([
    'backbone',
    'hbs',
    'jquery',
    //'jquerymobile',
    'views/itemview',
    'text!templates/items.tpl.html'
   ], function(Backbone, Handlebars, $, ItemView, itemsTemplate) {
      var ItemsCollectionView = Backbone.View.extend({

      template: Handlebars.compile(itemsTemplate),

      events: {
      },

      initialize: function() {
        _.bindAll(this, 'render', 'appendItem', 'clearElements');
        this.collection.bind('add', this.appendItem);
        this.collection.bind('reset', this.clearElements);
      },

      clearElements: function() {
        this.$el.html('');
      },

      render: function() {
        this.$el.html(this.template());
        for (var item in this.collection.models) {
          this.appendItem(item);
        }
        return this;
      },

      appendItem: function(item) {
        var newItemView = new ItemView({model: item});
        this.$el.find('ul.items-list').append(newItemView.render().el);
      }
    });

    return ItemsCollectionView;
});