export const oktaConfig = {
    clientId: '0oai46xncvL1UXHN15d7',
    issuer: 'https://dev-21510312.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}