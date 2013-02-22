define([
    'backbone',
    'hbs',
    'jquery',
    'views/itemdetailedview',
    'text!templates/item.tpl.html',
    'config/item.interaction'
   ], function(Backbone, Handlebars, $, ItemDetailedView, itemTemplate, ItemConfig) {
      var HomeView = Backbone.View.extend({

      template: Handlebars.compile(itemTemplate),

      tagName: 'li',
      MAX_STARS: 5,
      showDetails: null,
      detailedView: null,

      events: {
        'mouseenter .item': 'highlightItem',
        'mouseenter .item-options': 'viewMoreDetails',
        'mouseleave .item-options': 'cancelViewMoreDetails',
        'mouseleave .item-image': 'displayNormalItem'
      },

      initialize: function() {
        _.bindAll(this, 'render', 'highlightItem', 'displayNormalItem', 'viewMoreDetails', 'cancelViewMoreDetails');
        this.model.bind('change', this.render);
        this.displayNormalItem();
      },

      render: function() {
        this.$el.html( this.template(this.model.toJSON()) );

        var itemStars = this.model.get('stars');
        if (itemStars) {
          this.$el.find('.icon-stared').addClass('item-stars-width' + this.model.get('stars'));
          this.$el.find('.icon-stars-off').addClass('item-stars-width' + (this.MAX_STARS - itemStars));
        }

        return this;
      },

      highlightItem: function() {
        //this.$el.css(ItemConfig.highlightStyle);
        //this.$el.find('.item-image').animate({'position': 'relative', 'top': '10px'}, 1500);

        var img = this.$el.find('.item-image');

        if (!img.is(':animated')) {
          //img.slideUp(1000);
          img.animate({'width': '110%', 'height': 'auto'}, 500, function() {
            img.animate({'width': '100%', 'height': 'auto'}, 500);
          });
        }
      },

      displayNormalItem: function() {
        //this.$el.css(ItemConfig.normalDisplay);
        //this.$el.animate({'border': 'none'}, 1000);
        //this.$el.find('.item-image').slideDown();
        //this.$el.find('.item-image').toggle(1000);
      },

      viewMoreDetails: function() {
        this.showDetails = true;

        setTimeout(
          _.bind(function() {
            if (this.showDetails) {
              if (this.detailedView) {
                this.detailedView.fadeIn();
              }
              else {
                this.detailedView = new ItemDetailedView({
                  model: this.model,
                  el: this.$el.find('.item-detailed-view')
                });
                //this.ItemDetailedView.setElement(this.$el.find('.item-detailed-view'));
                this.detailedView.render();
              }
            }
          }, this
        ), 500);
      },

      cancelViewMoreDetails: function() {
        this.showDetails = false;
      }

    });

    return HomeView;
});