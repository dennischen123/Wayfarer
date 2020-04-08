const currentUser = (function () {
    let user = {};
    let posts = [];
    let cities = [];

    const getUser = () => {
        return user;
    };

    const getUserId = () => {
        return user._id;
    };

    const setUser = (data) => {
        user = data;
    };

    const getPosts = () => {
        return posts;
    }

    const setPosts = (data) => {
        posts = data;
    }

    const setCities = (data) => {
        cities = data;
    }

    const getCities = () => {
        return cities;
    }


    return {
        getUser: getUser,
        setUser: setUser,
        getUserId: getUserId,
        getPosts: getPosts,
        setPosts: setPosts,
        getCities: getCities,
        setCities: setCities,
    }

})();

export default currentUser;