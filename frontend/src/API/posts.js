import API from './index'

export const getPosts = async () => {
    let posts = []

    try {
        const result = await API.get('posts')
        posts = result.data
    } catch(e) {
        console.log(e)
        console.log('Erro ao buscar os posts')
    }

    return posts
};

export const updatePost = async (id, data) => {
    try  {
        await API.put(`posts/${id}`, data)
    } catch(e) {
        console.log(e)
        console.log('Erro ao criar o post')
    }
};
