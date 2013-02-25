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
      class: 'item',
      MAX_STARS: 5,
      showDetails: null,
      detailedView: null,

      events: {
        'mouseenter': 'highlightItem',
        'mouseenter .item-options': 'viewMoreDetails',
        'mouseleave .item-options': 'cancelViewMoreDetails',
        'mouseleave .item-image': 'displayNormalItem'
      },

      attributes: function () {
        return {
          class : 'item'
        };
      },

      initialize: function() {
        _.bindAll(this, 'render', 'highlightItem', 'displayNormalItem', 'viewMoreDetails',
          'cancelViewMoreDetails', 'createDetailsView', 'removeView');
        this.model.bind('change', this.render);
        this.model.bind('dispose', this.removeView);
        this.displayNormalItem();
      },

      render: function() {
        this.$el.html( this.template(this.model.toJSON()) );

        var itemStars = this.model.get('stars');
        if (itemStars) {
          this.$el.find('.icon-stared').addClass('item-stars-width' + this.model.get('stars'));
          this.$el.find('.icon-stars-off').addClass('item-stars-width' + (this.MAX_STARS - itemStars));
        }

        if (this.detailedView) {
          this.detailedView.setElement(this.$el.find('.item-detailed-view'));
        }

        return this;
      },

      highlightItem: function() {
        //this.$el.css(ItemConfig.highlightStyle);

        var img = this.$el.find('.item-image img');

        if (!img.is(':animated')) {
          //img.slideUp(1000);
          img.animate({'width': '96%', 'height': 'auto'}, 200, function() {
            img.animate({'width': '100%', 'height': 'auto'}, 200);
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
                this.createDetailsView();
              }
            }
          }, this
        ), 500);
      },

      createDetailsView: function() {
        var left = this.$el.find('.item-view-more').offset().left - 42;
        var top = this.$el.find('.item-view-more').offset().top;
        this.detailedView = new ItemDetailedView({
          top: top,
          left: left,
          model: this.model,
          el: this.$el.find('.item-detailed-view')
        });
        //this.ItemDetailedView.setElement(this.$el.find('.item-detailed-view'));
        this.detailedView.render();
      },

      cancelViewMoreDetails: function() {
        this.showDetails = false;
      },

      removeView: function() {
        delete tagName;
        delete MAX_STARS;
        delete showDetails;
        if (this.detailedView) {
          this.detailedView.remove();
        }
        this.remove();
      }

    });

    return HomeView;
});