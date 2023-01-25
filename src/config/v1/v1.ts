import {TMethodGroup} from "../dataTypes";
import {user} from "./entities/user/group";
import {source} from "./entities/source/group";
import {postType} from "./entities/postType/group";
import {comment} from "./entities/comment/group";

export const navConfig : TMethodGroup[] = [
    user,
    source,
    postType,
    comment,
]