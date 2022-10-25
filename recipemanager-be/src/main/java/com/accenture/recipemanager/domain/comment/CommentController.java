package com.accenture.recipemanager.domain.comment;

import com.accenture.recipemanager.core.generic.AbstractEntityController;
import com.accenture.recipemanager.core.generic.AbstractEntityService;
import com.accenture.recipemanager.core.generic.DTOMapper;
import com.accenture.recipemanager.domain.comment.dto.CommentDTO;

import com.accenture.recipemanager.domain.comment.dto.CommentReplyDTO;
import com.accenture.recipemanager.domain.comment.dto.CommentReplyMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/comment")
public class CommentController extends AbstractEntityController<Comment, CommentDTO> {

    private CommentReplyMapper replyMapper;

    public CommentController(AbstractEntityService<Comment> service, DTOMapper<Comment, CommentDTO> mapper,
                             CommentReplyMapper replyMapper) {
        super(service, mapper);
        this.replyMapper = replyMapper;
    }

    @PostMapping("/reply")
    public ResponseEntity<CommentDTO> createReply(@RequestBody CommentReplyDTO dto) {
        if (dto == null || dto.getReferenceComment() == null) return new ResponseEntity<>(HttpStatus.BAD_REQUEST);

        Comment comment = ((CommentService) service).createReply(replyMapper.fromDTO(dto), dto.getReferenceComment());

        return new ResponseEntity<>(mapper.toDTO(comment), HttpStatus.CREATED);
    }
}
