"use strict";
/**
 * Created by laurence-ho on 21/07/17.
 */
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');
var db = require('./database/db.service');
module.exports = function (passport) {
    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session
    // used to serialize the user for the session
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });
    // used to deserialize the user
    passport.deserializeUser(function (id, done) {
        db.getConnection(function (err, connection) {
            if (err) {
                console.error('error', err);
                return done(err);
            }
            else {
                connection.query('SELECT * FROM users WHERE id = ?', [id], function (err, rows) {
                    connection.release();
                    if (err) {
                        console.error('error', err);
                        return done(err);
                    }
                    else {
                        done(null, rows[0]);
                    }
                });
            }
        });
    });
    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'
    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    }, function (req, username, password, done) {
        console.log('---- User Signup: ' + username + ' ----');
        db.getConnection(function (err, connection) {
            if (err) {
                console.error('error', err);
                return done(err);
            }
            else {
                connection.query('SELECT * FROM users WHERE username = ?', [username], function (err, rows) {
                    if (err) {
                        console.error('error', err);
                        return done(err);
                    }
                    if (rows.length) {
                        return done(err, false, { message: 'This username is already taken.' });
                    }
                    else {
                        // if there is no user with that username, create the user
                        var newUserMysql_1 = {
                            username: username,
                            password: bcrypt.hashSync(password, null, null) // use the generateHash function in our user model
                        };
                        var insertQuery = 'INSERT INTO users ( username, password ) values (?,?)';
                        connection.query(insertQuery, [newUserMysql_1.username, newUserMysql_1.password], function (err, rows) {
                            connection.release();
                            if (err) {
                                console.error('error', err);
                                return done(err);
                            }
                            newUserMysql_1 = rows;
                            return done(null, newUserMysql_1);
                        });
                    }
                });
            }
        });
    }));
    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'
    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    }, function (req, username, password, done) {
        console.log('---- User login: ' + username + ' ----');
        db.getConnection(function (err, connection) {
            if (err) {
                console.error('error', err);
                return done(err);
            }
            else {
                connection.query('SELECT * FROM users WHERE username = ?', [username], function (err, rows) {
                    connection.release();
                    if (err) {
                        console.error('error', err);
                        return done(err);
                    }
                    if (rows.length) {
                        // if the user is found but the password is wrong
                        if (!bcrypt.compareSync(password, rows[0].password)) {
                            return done(err, false, { message: 'User name or password is wrong' });
                        }
                        else {
                            // all is well, return successful user
                            return done(null, rows[0]);
                        }
                    }
                    else {
                        return done(err, false, { message: 'User name or password is wrong' });
                    }
                });
            }
        });
    }));
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QyxXQUFXLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3JELE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFDLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBQyxDQUFDLENBQUM7d0JBQ3RFLENBQUM7d0JBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ1Asc0NBQXNDOzRCQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDNUIsQ0FBQztvQkFDRixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFDLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBQyxDQUFDLENBQUM7b0JBQ3RFLENBQUM7Z0JBQ0YsQ0FBQyxDQUFDLENBQUM7WUFDSixDQUFDO1FBQ0YsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO0FBQ0gsQ0FBQyxDQUFDIiwiZmlsZSI6InBhc3Nwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgbGF1cmVuY2UtaG8gb24gMjEvMDcvMTcuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgUGFzc3BvcnQgfSBmcm9tICdwYXNzcG9ydCc7XHJcblxyXG5sZXQgTG9jYWxTdHJhdGVneSA9IHJlcXVpcmUoJ3Bhc3Nwb3J0LWxvY2FsJykuU3RyYXRlZ3k7XHJcblxyXG5sZXQgYmNyeXB0ID0gcmVxdWlyZSgnYmNyeXB0LW5vZGVqcycpO1xyXG5sZXQgZGIgPSByZXF1aXJlKCcuL2RhdGFiYXNlL2RiLnNlcnZpY2UnKTtcclxuXHJcbmV4cG9ydCA9IChwYXNzcG9ydDogUGFzc3BvcnQpID0+IHtcclxuXHQvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblx0Ly8gcGFzc3BvcnQgc2Vzc2lvbiBzZXR1cCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cdC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHQvLyByZXF1aXJlZCBmb3IgcGVyc2lzdGVudCBsb2dpbiBzZXNzaW9uc1xyXG5cdC8vIHBhc3Nwb3J0IG5lZWRzIGFiaWxpdHkgdG8gc2VyaWFsaXplIGFuZCB1bnNlcmlhbGl6ZSB1c2VycyBvdXQgb2Ygc2Vzc2lvblxyXG5cclxuXHQvLyB1c2VkIHRvIHNlcmlhbGl6ZSB0aGUgdXNlciBmb3IgdGhlIHNlc3Npb25cclxuXHRwYXNzcG9ydC5zZXJpYWxpemVVc2VyKCh1c2VyOiBhbnksIGRvbmU6IGFueSkgPT4ge1xyXG5cdFx0ZG9uZShudWxsLCB1c2VyLmlkKTtcclxuXHR9KTtcclxuXHJcblx0Ly8gdXNlZCB0byBkZXNlcmlhbGl6ZSB0aGUgdXNlclxyXG5cdHBhc3Nwb3J0LmRlc2VyaWFsaXplVXNlcigoaWQsIGRvbmUpID0+IHtcclxuXHRcdGRiLmdldENvbm5lY3Rpb24oKGVycjogYW55LCBjb25uZWN0aW9uOiBhbnkpID0+IHtcclxuXHRcdFx0aWYgKGVycikge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ2Vycm9yJywgZXJyKTtcclxuXHRcdFx0XHRyZXR1cm4gZG9uZShlcnIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNvbm5lY3Rpb24ucXVlcnkoJ1NFTEVDVCAqIEZST00gdXNlcnMgV0hFUkUgaWQgPSA/JywgW2lkXSwgKGVycjogYW55LCByb3dzOiBhbnkpID0+IHtcclxuXHRcdFx0XHRcdGNvbm5lY3Rpb24ucmVsZWFzZSgpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChlcnIpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcignZXJyb3InLCBlcnIpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZG9uZShlcnIpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0ZG9uZShudWxsLCByb3dzWzBdKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSk7XHJcblxyXG5cdC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHQvLyBMT0NBTCBTSUdOVVAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblx0Ly8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cdC8vIHdlIGFyZSB1c2luZyBuYW1lZCBzdHJhdGVnaWVzIHNpbmNlIHdlIGhhdmUgb25lIGZvciBsb2dpbiBhbmQgb25lIGZvciBzaWdudXBcclxuXHQvLyBieSBkZWZhdWx0LCBpZiB0aGVyZSB3YXMgbm8gbmFtZSwgaXQgd291bGQganVzdCBiZSBjYWxsZWQgJ2xvY2FsJ1xyXG5cclxuXHRwYXNzcG9ydC51c2UoJ2xvY2FsLXNpZ251cCcsXHJcblx0XHRuZXcgTG9jYWxTdHJhdGVneSh7XHJcblx0XHRcdFx0Ly8gYnkgZGVmYXVsdCwgbG9jYWwgc3RyYXRlZ3kgdXNlcyB1c2VybmFtZSBhbmQgcGFzc3dvcmQsIHdlIHdpbGwgb3ZlcnJpZGUgd2l0aCBlbWFpbFxyXG5cdFx0XHRcdHVzZXJuYW1lRmllbGQ6ICd1c2VybmFtZScsXHJcblx0XHRcdFx0cGFzc3dvcmRGaWVsZDogJ3Bhc3N3b3JkJyxcclxuXHRcdFx0XHRwYXNzUmVxVG9DYWxsYmFjazogdHJ1ZSAvLyBhbGxvd3MgdXMgdG8gcGFzcyBiYWNrIHRoZSBlbnRpcmUgcmVxdWVzdCB0byB0aGUgY2FsbGJhY2tcclxuXHRcdFx0fSxcclxuXHRcdFx0KHJlcTogYW55LCB1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBkb25lOiBhbnkpID0+IHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnLS0tLSBVc2VyIFNpZ251cDogJyArIHVzZXJuYW1lICsgJyAtLS0tJyk7XHJcblxyXG5cdFx0XHRcdGRiLmdldENvbm5lY3Rpb24oKGVycjogYW55LCBjb25uZWN0aW9uOiBhbnkpID0+IHtcclxuXHRcdFx0XHRcdGlmIChlcnIpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcignZXJyb3InLCBlcnIpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZG9uZShlcnIpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0Y29ubmVjdGlvbi5xdWVyeSgnU0VMRUNUICogRlJPTSB1c2VycyBXSEVSRSB1c2VybmFtZSA9ID8nLCBbdXNlcm5hbWVdLCAoZXJyOiBhbnksIHJvd3M6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChlcnIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ2Vycm9yJywgZXJyKTtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBkb25lKGVycik7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRpZiAocm93cy5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBkb25lKGVyciwgZmFsc2UsIHttZXNzYWdlOiAnVGhpcyB1c2VybmFtZSBpcyBhbHJlYWR5IHRha2VuLid9KTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gaWYgdGhlcmUgaXMgbm8gdXNlciB3aXRoIHRoYXQgdXNlcm5hbWUsIGNyZWF0ZSB0aGUgdXNlclxyXG5cdFx0XHRcdFx0XHRcdFx0bGV0IG5ld1VzZXJNeXNxbCA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dXNlcm5hbWU6IHVzZXJuYW1lLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwYXNzd29yZDogYmNyeXB0Lmhhc2hTeW5jKHBhc3N3b3JkLCBudWxsLCBudWxsKSAvLyB1c2UgdGhlIGdlbmVyYXRlSGFzaCBmdW5jdGlvbiBpbiBvdXIgdXNlciBtb2RlbFxyXG5cdFx0XHRcdFx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRsZXQgaW5zZXJ0UXVlcnkgPSAnSU5TRVJUIElOVE8gdXNlcnMgKCB1c2VybmFtZSwgcGFzc3dvcmQgKSB2YWx1ZXMgKD8sPyknO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdGNvbm5lY3Rpb24ucXVlcnkoaW5zZXJ0UXVlcnksIFtuZXdVc2VyTXlzcWwudXNlcm5hbWUsIG5ld1VzZXJNeXNxbC5wYXNzd29yZF0sIChlcnI6IGFueSwgcm93czogYW55KSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbm5lY3Rpb24ucmVsZWFzZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoZXJyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcignZXJyb3InLCBlcnIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBkb25lKGVycik7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdG5ld1VzZXJNeXNxbCA9IHJvd3M7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZG9uZShudWxsLCBuZXdVc2VyTXlzcWwpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSlcclxuXHQpO1xyXG5cclxuXHQvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblx0Ly8gTE9DQUwgTE9HSU4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cdC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHQvLyB3ZSBhcmUgdXNpbmcgbmFtZWQgc3RyYXRlZ2llcyBzaW5jZSB3ZSBoYXZlIG9uZSBmb3IgbG9naW4gYW5kIG9uZSBmb3Igc2lnbnVwXHJcblx0Ly8gYnkgZGVmYXVsdCwgaWYgdGhlcmUgd2FzIG5vIG5hbWUsIGl0IHdvdWxkIGp1c3QgYmUgY2FsbGVkICdsb2NhbCdcclxuXHJcblx0cGFzc3BvcnQudXNlKCdsb2NhbC1sb2dpbicsXHJcblx0XHRuZXcgTG9jYWxTdHJhdGVneSh7XHJcblx0XHRcdFx0Ly8gYnkgZGVmYXVsdCwgbG9jYWwgc3RyYXRlZ3kgdXNlcyB1c2VybmFtZSBhbmQgcGFzc3dvcmQsIHdlIHdpbGwgb3ZlcnJpZGUgd2l0aCBlbWFpbFxyXG5cdFx0XHRcdHVzZXJuYW1lRmllbGQ6ICd1c2VybmFtZScsXHJcblx0XHRcdFx0cGFzc3dvcmRGaWVsZDogJ3Bhc3N3b3JkJyxcclxuXHRcdFx0XHRwYXNzUmVxVG9DYWxsYmFjazogdHJ1ZSAvLyBhbGxvd3MgdXMgdG8gcGFzcyBiYWNrIHRoZSBlbnRpcmUgcmVxdWVzdCB0byB0aGUgY2FsbGJhY2tcclxuXHRcdFx0fSxcclxuXHRcdFx0KHJlcTogYW55LCB1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBkb25lOiBhbnkpID0+IHsgLy8gY2FsbGJhY2sgd2l0aCBlbWFpbCBhbmQgcGFzc3dvcmQgZnJvbSBvdXIgZm9ybVxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tIFVzZXIgbG9naW46ICcgKyB1c2VybmFtZSArICcgLS0tLScpO1xyXG5cclxuXHRcdFx0XHRkYi5nZXRDb25uZWN0aW9uKChlcnI6IGFueSwgY29ubmVjdGlvbjogYW55KSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoZXJyKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ2Vycm9yJywgZXJyKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGRvbmUoZXJyKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGNvbm5lY3Rpb24ucXVlcnkoJ1NFTEVDVCAqIEZST00gdXNlcnMgV0hFUkUgdXNlcm5hbWUgPSA/JywgW3VzZXJuYW1lXSwgKGVycjogYW55LCByb3dzOiBhbnkpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb25uZWN0aW9uLnJlbGVhc2UoKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0aWYgKGVycikge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcignZXJyb3InLCBlcnIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGRvbmUoZXJyKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdGlmIChyb3dzLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gaWYgdGhlIHVzZXIgaXMgZm91bmQgYnV0IHRoZSBwYXNzd29yZCBpcyB3cm9uZ1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFiY3J5cHQuY29tcGFyZVN5bmMocGFzc3dvcmQsIHJvd3NbMF0ucGFzc3dvcmQpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBkb25lKGVyciwgZmFsc2UsIHttZXNzYWdlOiAnVXNlciBuYW1lIG9yIHBhc3N3b3JkIGlzIHdyb25nJ30pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gYWxsIGlzIHdlbGwsIHJldHVybiBzdWNjZXNzZnVsIHVzZXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGRvbmUobnVsbCwgcm93c1swXSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBkb25lKGVyciwgZmFsc2UsIHttZXNzYWdlOiAnVXNlciBuYW1lIG9yIHBhc3N3b3JkIGlzIHdyb25nJ30pO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pXHJcblx0KTtcclxufTtcclxuIl19
