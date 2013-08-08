(function() {

    require.config({
        paths: {
            'jquery': 'vendor/jquery/jquery',
            'underscore': 'vendor/underscore-amd/underscore',
            'backbone': 'vendor/backbone-amd/backbone',
        },
        shim: {
            backbone: {
                deps: ["underscore", "jquery"],
                exports: "Backbone"
            },

            underscore: {
                exports: "_"
            }
        },
        urlArgs: "bust=" + (new Date().getTime())
    });

    require(["underscore", "backbone", "router"], function(_, Backbone, Router) {});

}).call(this);