(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

    console.log("Hello World!");
    function abc() {
        console.log("Abc function!", this);
    }

    const user = {
        name: "Pradeep",
    };

    abc.call(user);

}));
