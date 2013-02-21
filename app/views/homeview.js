define([
    'backbone',
    'hbs',
    'jquery',
    //'jquerymobile',
    'views/itemcollectionview',
    'text!templates/home.tpl.html'
   ], function(  Backbone, Handlebars, $, ItemsCollectionView, homeTemplate ){
      var HomeView = Backbone.View.extend({

      template: Handlebars.compile(homeTemplate),

      items: null,

      itemsView: null,

      events: {
      },

      initialize: function() {
        this.items = this.options.items;

        this.itemsView = new ItemsCollectionView({
          collection: this.items
        });
      },

      render: function() {
        this.$el.html(this.template());
        this.itemsView.setElement('div.items-container');
        this.itemsView.render();
        return this;
      }

    });

    return HomeView;
});