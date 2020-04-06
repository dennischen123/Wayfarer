const currentUser = (function () {
    let user = {};

    const getUser = () => {
        return user;
    };

    const setUser = (data) => {
        user = data;
    };

    return {
        getUser: getUser,
        setUser: setUser
    }

})();

export default currentUser;