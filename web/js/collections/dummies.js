(function() {

    define(["underscore", "backbone", "models/dummy"], function(_, Backbone, Dummy) {
        var Dummies;

        Dummies = Backbone.Collection.extend({
            model: Dummy,

            url: false,

            initialize: function() {
                return this.on("add", this.onModelWasAddedd, this);
            },

            onModelWasAddedd: function(model, collection, options) {
                return model.save();
            }
        });

        return Dummies;
    });

}).call(this);