import dotenv from "dotenv";

dotenv.config();


export const Constant = {
    MONGO_URL:process.env.MONGO_URL,
    PORT:process.env.PORT,
    AccessTokenSecretKey:process.env.ACCESS_TOKEN_SECRET_KEY,
    RefreshTokenSecretKey:process.env.REFRESH_TOKEN_SECRET_KEY,
    AccessTokenExpirationTime:process.env.ACCESS_TOKEN_EXPIRATION_TIME,
    RefreshTokenExpirationTime:process.env.REFRESH_TOKEN_EXPIRATION_TIME,
}

export const String = {
    USER_MODEL:"users",
    ROLE_USER: "User",
    ROLE_ADMIN: "Admin",
}