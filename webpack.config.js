module.exports = (env) => {
    process.env.NODE_ENV = (env === 'dev') ? 'development' : 'production';
    return require(`./webpack.${env}.js`)
}
