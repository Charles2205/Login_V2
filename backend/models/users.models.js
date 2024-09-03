import mongoose from "mongoose";

const UsersSchema = mongoose.Schema(
    {
        username:{
            type:String,
            require:[true,"Enter your username"]
        },

        password:{
            type:String,
            require: true
        },

    },
    {
        Timestamp: true
    }
)

const Users = mongoose.model('User', UsersSchema)
export default Users