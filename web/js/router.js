(function() {

    var resources;

    resources = [
        "underscore", "backbone",
        "models/dummy",
        "collections/dummies",
        "views/dummy",
        "views/test", "views/tests"

    ];

    define(resources, function(_, Backbone, Dummy, Dummies, DummyView,
        TestView, TestsView) {

        var Router;

        Backbone.emulateHTTP = true;
        Backbone.emulateJSON = true;

        Router = Backbone.Router.extend({

            routes: {
                "": "blank",
                "dummy": "dummy",
                "test": "test"
            },

            blank: function  () {
                return void 0;
            },

            dummy: function() {
                var view, model, collection;

                model = new Dummy({ dummy: true });

                collection = new Dummies([
                    {
                        id: 1,
                        dummy: true
                    }
                ]);

                if (collection.url) {
                    collection.fetch({reset: true});
                }

                view = new DummyView({
                    model: model,
                    collection: collection
                });

                return void 0;
            },

            test: function () {
                var model, collection, testView, testsView;

                model = new Dummy();
                collection = new Dummies();

                testView = new TestView({
                    el: "#model",
                    model: model
                });
                testView.render();

                testsView = new TestsView({
                   el: "#collection",
                   collection: collection
                });
                testsView.render();

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