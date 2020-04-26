module.exports = (env) => {
    console.info('--> ./webpack.${env}.js');
    process.env.NODE_ENV = env === 'dev' ? 'development' : 'production';
    return require(`./webpack.${env}.js`)
}
