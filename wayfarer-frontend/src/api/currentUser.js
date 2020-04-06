let currentUser = (function () {
    let user = {};

    let getUser = function () {
        return user;
    };

    let setUser = function (data) {
        user = data;
    };

    return {
        getUser: getUser,
        setUser: setUser
    }

})();

export default currentUser;