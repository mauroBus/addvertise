/**
 * Application router
 */
define([
    'backbone',
    // models
    'models/placemodel',
    // collections
    'collections/placecollection',
    // views
    'views/homeview',
    'views/placeview',
    'views/collectionview'
  ],
  function(Backbone, PlaceModel, PlaceCollection, HomeView, PlaceView, PlaceCollectionView) {

    var AppRouter = Backbone.Router.extend({

      routes : {
        '*actions' : 'landingPage'
      },

      landingPage : function() {

        new HelloWorldView();

        var benefitsCol = new BenefitsCollection();
        var poisCol = new PoisCollection();
        var prizesCol = new PrizesCollection();
        var businessesCol = new BusinessesCollection();
        var fieldsCol = new FieldsCollection();

        benefitsCol.on('reset', function() {
          console.log('reset size ' + this.length);
        });

        benefitsCol.on('add', function() {
          console.log('+size ' + this.length);
        });

        //find benefits
        benefitsCol.find('ranking');
        benefitsCol.find('destacados');
        benefitsCol.find('buscar',{'filtro':'1'});

        // find POIs:
        poisCol.find('get',{'longitude':'5','latitude':'6'});

        // find prizes:
        prizesCol.find( 'get' );
        prizesCol.find( 'destacados' );
        prizesCol.find( 'disponibles', {'puntos': 5000});
        prizesCol.find( 'cercanos', {'puntos': 5000});

        //find businesses
        businessesCol.find('rubro', {'id':'1', 'longitude':'-48.365303','latitude':'-34.621689'});
        businessesCol.find('beneficio',  {'id':'117', 'longitude':'-60.666500','latitude':'-32.950741'});
        businessesCol.find('id', {'id':'117', 'longitude':'-60.666500','latitude':'-32.950741'});

        //find field
        fieldsCol.find('get');

        //get user data
        var user = new UserModel();

        //user points
        var upm = new UserPointsModel();


        //prize collection view:
        var colView = new CollectionView({collection: prizesCol, el:"#prize-list" });
        prizesCol.find( 'get' );
      }

    });

    var init = function() {
      new AppRouter();
      Backbone.history.start();
    };

    return {
      init : init
    };
  }
);
