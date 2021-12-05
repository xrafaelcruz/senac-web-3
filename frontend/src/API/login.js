import API from './index'
import { NotificationManager } from 'react-notifications';

export const login = async (username, password) => {
    try  {
        const result = await API.post('login', { username, password })

        if (!result.data.success) {
            return Promise.reject()
        }

        NotificationManager.success('', 'Login efetuado com Sucesso!');
    } catch(e) {
        console.log(e)
        console.log('Erro ao logar')
        return Promise.reject()
    }
};
