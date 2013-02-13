/**
 * Place Model
 *
 */

define([
    'backbone'
  ], function(Backbone) {

    var PlaceModel = Backbone.Model.extend({

      defaults:{
        points : null
      },
      url : function () {
        var url = '/tools/proxy.php?url=%s&mode=native'
                      .replace('%s', escape('http://personal-apmov.dev.globant.com/auxfiles/PuntosWap.html'));
        return url;
      },

      /**
       * Loads the model with user points fetched from the server when the model is instantiated
       *
       */
      initialize : function(){
        this.fetch({dataType : 'html'});

        function wait(ms) {
          var start = new Date();
          while (new Date() - start < ms);
        }

        console.log('user points model working for 1.2 sescs...');
        wait(1200);
        console.log('and... user points model done!');
      },

      parse : function(response){
        var points = $(($(response).find('font'))[0]).text();
        var aux = points.split('son ');
        var aux2 = {};
        aux2['points'] = parseInt(aux[1]);
        return  aux2;
      }

    });

    return PlaceModel;
  }
);
