/**
 * Created by TTND on 6/7/2018.
 */
import { REQUEST_METHOD } from '../constants';
import ENV_CONFIG from './environment/index';


export const requestConfig = {
    login: () => ({
        url: 'https://hdfc-beta-kong.tothenew.net/authorization/v1/oauth/token',
        options: {
            method: REQUEST_METHOD.POST
        },
        auth: false
    }),
}