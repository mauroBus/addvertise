define([
    'backbone',
    'hbs',
    'jquery',
    'text!templates/fullitem.tpl.html'
   ], function(Backbone, Handlebars, $, fullItemTemplate) {
      var FullItemView = Backbone.View.extend({

      template: Handlebars.compile(fullItemTemplate),

      initialize: function() {
        _.bindAll(this, 'render', 'animationIn', 'animationOut');
      },

      render: function() {
        console.log('rendering full item');
        this.$el.hide();
        this.$el.html( this.template(this.model.toJSON()) );
        this.animationIn();
        return this;
      },

      animationIn: function() {
        this.$el.fadeIn(10);
        var view = this.$el;
        /*
        view.animate({'left': '1000px'}, 500, function() {
          view.animate({'left': '-1000px'}, 500);
        });
        */
        //this.$el.show("slide", { direction: "left" }, 5000);
        view.animate({
          left: parseInt(view.css('left'), 10) == 0 ? view.outerWidth() : 0
        });
      },

      animationOut: function() {
        this.$el.fadeOut();
      }
    });

    return FullItemView;
});