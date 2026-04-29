import dotenv from "dotenv"
dotenv.config()

if(! process.env.JWT_SECRET){
    throw new Error("jwt secret is not defined")
}
if(! process.env.MONGO_URI){
    throw new Error("mongo uri is not defined")
}

const config = {
    JWT_SECRET: process.env.JWT_SECRET,
    MONGO_URI: process.env.MONGO_URI
}

export default config