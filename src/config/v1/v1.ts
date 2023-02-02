import {TMethodGroup} from "../dataTypes";
import {user} from "./entities/user/group";
import {post} from "./entities/post/group";
import {source} from "./entities/source/group";
import {postType} from "./entities/postType/group";
import {comment} from "./entities/comment/group";
import {img} from "./entities/img/group";
import { offer } from "./entities/offer/group";

export const navConfig : TMethodGroup[] = [
    user,
    post,
    source,
    postType,
    comment,
    img,
    offer,
]