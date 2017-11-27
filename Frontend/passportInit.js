const LocalStrategy = require("passport-local");
const userRepository = require("./usersRepository");

exports.initialize = function(passport) {
    passport.use(new LocalStrategy(function (username, password, done) {
        const user = userRepository.getUserByNameAndPassword(username, password);
        return user ? done(null, user)
            : done(null, false, {message: 'Incorrect password'});
    }));

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        const user = userRepository.getUserById(id);
        if(user) return done(null, user);
        done("Failure on deserialize");
    });
};