define([
    'backbone',
    'hbs',
    'jquery',
    //'jquerymobile',
    'views/itemcollectionview',
    'views/header/headerview',
    'views/footer/footerview',
    'views/filter/filterview',
    'text!templates/home.tpl.html'
   ], function(Backbone, Handlebars, $, ItemsCollectionView, HeaderView, FooterView,
               FilterView, homeTemplate){
      var HomeView = Backbone.View.extend({

      template: Handlebars.compile(homeTemplate),

      items: null,

      contentView: null,
      mainContent: null,
      oldContentView: null,
      headerView: null,
      footerView: null,
      filterView: null,

      contentContainer: 'div.content-container',
      headerContainer: 'div.header-container',
      footerContainer: 'div.footer-container',
      filterContainer: 'div.filter-container',

      events: {
      },

      initialize: function() {
        this.items = this.options.items;

        this.contentView = new ItemsCollectionView({
          collection: this.items
        });
        this.mainContent = this.contentView;
        this.headerView = new HeaderView();
        this.footerView = new FooterView();
        this.filterView = new FilterView();
      },

      render: function() {
        this.$el.html(this.template());
        this.contentView.setElement(this.contentContainer);
        this.headerView.setElement(this.headerContainer);
        this.footerView.setElement(this.footerContainer);
        this.filterView.setElement(this.filterContainer);

        this.contentView.render();
        this.headerView.render();
        this.footerView.render();
        this.filterView.render();

        return this;
      },

      contentTransition: function(newContentView) {
        var _this = this;
        this.contentView.transitionOut(function() {
          newContentView.setElement(_this.contentContainer);
          newContentView.transitionIn();
          _this.oldContentView = _this.contentView;
          _this.contentView = newContentView;
        });
      },

      showMainContent: function() {
        this.contentTransition(this.mainContent);
      }

    });

    return HomeView;
});