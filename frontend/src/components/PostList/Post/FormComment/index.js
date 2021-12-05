import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { updatePost } from 'API/posts'
import Context from 'context';

const Comment = ({ post, setComments }) => {
    const { register, handleSubmit } = useForm();
    const context = useContext(Context);

    const onSubmit = async ({ comment }) => {
        const comments =  [
            ...post.comments,
            {
                username: context.data.username,
                text: comment
            }
        ]

        await updatePost(post.id, { ...post, comments }).then(() => {
            setComments(comments)
        })
    }

    return (
        <>
            {context.data?.username && 
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row">
                        <div className="form-group col-md-10 col-sm-8">
                            <input 
                                placeholder="comentário"
                                className="form-control"
                                {...register("comment")} 
                            />
                        </div>

                        <div className="form-group col-md-2 col-sm-4">
                            <button className="btn btn-primary form-control">Enviar</button>
                        </div>
                    </div>
                </form>
            }
        </>
    );
};

export default Comment;