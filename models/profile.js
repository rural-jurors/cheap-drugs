module.exports = function (sequelize, Sequelize) {
    const UserProfile = sequelize.define("UserProfile", {
        firstName: {
            type: Sequelize.STRING,
            required: true,
        },
        lastName: {
            type: Sequelize.STRING,
            required: true
        },
        email: {
            type: Sequelize.STRING,
            required: true,
        },
        userPassword: {
            type: Sequelize.STRING,
            required: true
        },
        zipcode: {
            type: Sequelize.INTEGER,
            required: true
        }

    });
    return UserProfile;
};

// -- CREATE TABLE `userProfile` (
//     --     id int NOT NULL AUTO_INCREMENT, 
//     --     firstName varchar(250) NOT NULL, 
//     --     lastName varchar(250) NOT NULL, 
//     --     email varchar(320) NOT NULL, 
//     --     userPassword varchar (255) NOT NULL,
//     --     zipcode varchar(5) NOT NULL, 
//     --     time_created DATETIME NOT NULL, 
//     --     PRIMARY KEY (id)
//     -- );


// paranoid: true statement

// created_at - column needed?