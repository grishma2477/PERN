import {ModelManager} from '../../database/utils/modelManager.js';
import { UserQueryManager } from './userQueryManager.js';
import { USER_MODEL } from '../../constant/constant.js';


const User = ModelManager.createModel(UserQueryManager.createUserTableQuery, USER_MODEL);

export default User;