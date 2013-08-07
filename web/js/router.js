(function() {

    var resources;

    resources = [
        "underscore", "backbone",
        "models/dummy",
        "collections/dummies",
        "views/dummy"
    ];

    define(resources, function(_, Backbone, Dummy, Dummies, DummyView) {

        var Router;

        Backbone.emulateHTTP = true;

        Router = Backbone.Router.extend({

            routes: {
                "": "dummy",
            },

            dummy: function() {
                var view, model, collection;

                model = new Dummy();
                collection = new Dummies();

                if (collection.url) {
                    collection.fetch({reset: true});
                }

                view = new DummyView({
                    model: model,
                    collection: collection
                });

                return void 0;
            }
        });

        return (function() {
            var router;
            router = new Router();
            Backbone.history.start();
            return router;
        })();

    });

}).call(this);