define([
    'backbone',
    'hbs',
    'jquery',
    //'jquerymobile',
    'text!templates/item.tpl.html'
   ], function(  Backbone, Handlebars, $, itemTemplate ){
      var HomeView = Backbone.View.extend({

      template: Handlebars.compile(itemTemplate),

      tagName: 'li',

      events: {
        'mouseover': 'highlightItem',
        'mouseout': 'showNormalItem'
      },

      initialize: function(){
        _.bindAll(this, 'render', 'highlightItem', 'showNormalItem');
        this.model.bind('change', this.render());
        this.showNormalItem();
      },

      render: function(){
        this.$el.html( this.template(this.model.toJSON()) );
        return this;
      },

      highlightItem: function() {
        this.$el.css({'border': '5px solid blue'});
      },

      showNormalItem: function() {
        this.$el.css({'border': '1px solid black'});
      }

    });

    return HomeView;
});