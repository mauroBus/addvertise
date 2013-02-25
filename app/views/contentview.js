define([
    'backbone',
    'hbs',
    'jquery'
   ], function(Backbone, $) {
      var ContentView = Backbone.View.extend({

      initialize: function() {
        _.bindAll(this, 'render', 'transitionIn', 'transitionOut');
      },

      /* To be implemented by the subviews
       */
      render: function() {
      },

      transitionIn: function() {
        console.log('transitioning in...');
        //this.$el.hide(100);
        this.render();
        this.$el.show(500);
        // this.$el.show(500);
        // var view = this.$el;
        /*
        view.animate({'left': '1000px'}, 500, function() {
          view.animate({'left': '-1000px'}, 500);
        });
        */
        //this.$el.show('slide', {direction: 'left'}, 200);

        //view.animate({
        //  marginLeft: parseInt(view.css('marginLeft'),10) == 0 ? view.outerWidth() : 0
        //});
      },

      transitionOut: function(callback) {
        this.$el.fadeOut(500, callback);
      }
    });

    return ContentView;
});