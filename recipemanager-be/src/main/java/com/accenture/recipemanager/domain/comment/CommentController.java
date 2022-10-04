package com.accenture.recipemanager.domain.comment;

import com.accenture.recipemanager.core.generic.AbstractEntityController;
import com.accenture.recipemanager.core.generic.AbstractEntityService;
import com.accenture.recipemanager.core.generic.DTOMapper;
import com.accenture.recipemanager.domain.comment.dto.CommentDTO;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/comment")
public class CommentController extends AbstractEntityController<Comment, CommentDTO> {
    public CommentController(AbstractEntityService<Comment> service, DTOMapper<Comment, CommentDTO> mapper) {
        super(service, mapper);
    }
}
