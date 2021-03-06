define([
    'views/contentview',
    'hbs',
    'jquery',
    //'jquerymobile',
    'views/itemview',
    'text!templates/items.tpl.html'
   ], function(ContentView, Handlebars, $, ItemView, itemsTemplate) {
      var ItemsCollectionView = ContentView.extend({

      template: Handlebars.compile(itemsTemplate),

      listEl: 'ul.items-list',

      initialize: function() {
        _.bindAll(this, 'render', 'appendItem', 'clearElements');
        this.collection.bind('add', this.appendItem);
        this.collection.bind('reset', this.clearElements);
      },

      clearElements: function() {
        this.$el.find(this.listEl).html('');
      },

      render: function() {
        this.$el.html(this.template());
        var models = this.collection.models;
        for (var item in models) {
          this.appendItem(models[item]);
        }
        return this;
      },

      appendItem: function(item) {
        var newItemView = new ItemView({model: item});
        this.$el.find(this.listEl).append(newItemView.render().el);
      }
    });

    return ItemsCollectionView;
});