(function() {

    define(["underscore", "backbone"], function(_, Backbone) {

    var View;

    View = Backbone.View.extend({
        tagName: 'div',
        className: "view test",

        events: {
            "click .fetch": "fetch",
            "click .edit": "edit",
            "click .delete": "delete",
            "click .close": "close"
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
            htmls = [
                "<span>id = " + (this.model.id || 0) + "</span>",
                "<span class='fetch'>fetch</close>",
                "<span class='edit'>edit</close>",
                "<span class='delete'>delete</close>",
                "<span class='close'>close</close>"
            ]
            this.$el.empty().append(htmls.join(" / "));
            return this;
        },

        fetch: function () {
            if (this.model) {
                this.model.fetch();
            }
        },

        edit: function () {
            if (this.model) {
                this.model.set("id", 1);
                this.model.set("dummy", false);
                this.model.save();
            }
        },

        delete: function () {
            if (this.model) {
                this.model.destroy();
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
