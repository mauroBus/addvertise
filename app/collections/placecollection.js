/**
 */
define([
    'backbone',
    'models/placemodel',
    'config/config'
  ],
  function(Backbone, PlaceModel, Config) {
    var PlaceCollection = Backbone.Collection.extend({

      model: PlaceModel,

      // parameters for all the services
      defaultParameters : {
        plataforma : Config.platform,
        encoding : Config.encoding
      },

      url : function () {
        var baseUrl = '';
        return baseUrl;
      }

    });

    return PlaceCollection;
  }
);
