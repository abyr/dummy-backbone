(function() {

    define(["underscore", "backbone"], function(_, Backbone) {
        var Dummy;

        Dummy = Backbone.Model.extend({
            idAttribute: "id",

            urlRoot: false,

            defaults: {
                dummy: true
            }
        });

        return Dummy;
    });

}).call(this);
