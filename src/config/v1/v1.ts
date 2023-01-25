import {TMethodGroup} from "../dataTypes";
import {user} from "./user/group";
import {source} from "./source/group";
import {postType} from "./postType/group";
import {comment} from "./comment/group";

export const navConfig : TMethodGroup[] = [
    user,
    source,
    postType,
    comment,
]