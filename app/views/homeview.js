define([
    'backbone',
    'hbs',
    'jquery',
    //'jquerymobile',
    'text!templates/home.tpl.html'
   ], function(  Backbone, Handlebars, $, homeTemplate ){
      var HomeView = Backbone.View.extend({

      template: Handlebars.compile(prizeTemplate),

      events: {
        "mouseover" : "highlightPlace"
      },

      initialize: function(){
        _.bindAll(this, 'render', 'highlightPlace');
        this.model.bind('change', this.render() );
      },

      render: function(){
        this.$el.html( this.template( this.model.toJSON() ) );
        return this;
      },

      highlightPlace: function() {
        alert(this.model.get('place') + ' -> on mouse over!');
      }

    });

    return HomeView;
});