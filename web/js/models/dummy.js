(function() {

    define(["underscore", "backbone"], function(_, Backbone) {
        var Dummy;

        Dummy = Backbone.Model.extend({
            idAttribute: "id",

            urlRoot: "http://localhost:8080/dummies",

            defaults: {
                dummy: true
            }
        });

        return Dummy;
    });

}).call(this);
