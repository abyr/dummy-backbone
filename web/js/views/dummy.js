(function() {

    define(["underscore", "backbone"], function(_, Backbone) {

    var View;

    View = Backbone.View.extend({
        tagName: 'div',
        className: "view dummy",

        events: {
            "click .close": "close"
        },

        initialize: function() {
            this.model.on("change", this.render, this);
            this.collection.on("reset", this.render, this);

            return this;
        },

        render: function() {
            return void 0;
        },

        close: function() {
            this.remove();
            this.unbind();
            return void 0;
        }
        });

        return View;

    });

}).call(this);
