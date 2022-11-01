import ReplyCommentDTO from '../types/Comment/ReplyCommentDTO';
import ApiService from './ApiService';

const baseURL = "/comment/"

const CommentService = () => ({
  addReply:async (replyCommentDTO:ReplyCommentDTO) => {
    return ApiService.post(baseURL + "reply", {...replyCommentDTO})
  }
})

export default CommentService
