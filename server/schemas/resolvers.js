const { AuthenticationError } = require("apollo-server-express");
const { User, Book } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userInfo =  User.findOne({ _id: context.user._id }).populate('savedBooks');
            
                return userInfo;
            }

            throw new AuthenticationError('No user with this id found!')
        }
    }
}