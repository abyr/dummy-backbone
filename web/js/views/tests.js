(function() {

    define(["underscore", "backbone"], function(_, Backbone) {

    var View;

    View = Backbone.View.extend({
        tagName: 'div',
        className: "view tests",

        events: {
            "click .close": "close",
            "click .add": "add",
            "click .fetch": "fetch"
        },

        initialize: function() {
            if (this.model) {
                this.model.on("change", this.render, this);
            }
            if (this.collection) {
                this.collection.on("reset", this.render, this);
            }

            return void 0;
        },

        render: function() {
            var htmls;

            if (this.collection) {
                this.add({
                    dummy : true
                });
            }

            htmls = [
                "<span>length = " + (this.collection.length || 0) + "</span>",
                "<span class='add'>add</close>",
                "<span class='fetch'>fetch</close>",
                "<span class='close'>close</close>"
            ]
            this.$el.empty().append(htmls.join(" / "));
            return void 0;
        },

        add: function () {
            if (this.collection) {
                this.collection.add({
                    dummy: true
                })
                this.collection.at(this.collection.length-1).save();
            }
        },

        fetch: function () {
            if (this.collection) {
                this.collection.fetch({
                    reset: true
                })
            }
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