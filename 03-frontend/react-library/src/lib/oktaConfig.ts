export const oktaConfig = {
    clientId: '0oai46xncvL1UXHN15d7',
    issuer: 'https://dev-21510312.okta.com/oauth2/default',
    redirectUri: 'https://libraray-app-front-end.onrender.com/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}