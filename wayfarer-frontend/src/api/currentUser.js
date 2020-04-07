const currentUser = (function () {
    let user = {};
    let posts = [];

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

    return {
        getUser: getUser,
        setUser: setUser,
        getUserId: getUserId,
        getPosts: getPosts,
        setPosts: setPosts,
    }

})();

export default currentUser;