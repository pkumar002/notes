(function () {
    'use strict';

    console.log("Hello World!");
    function abc() {
        console.log("Abc function!", this);
    }

    const user = {
        name: "Pradeep",
    };

    abc.call(user);

})();
