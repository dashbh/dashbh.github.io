module.exports = (env) => {
    console.info('--> ./webpack.${env}.js');
    return require(`./webpack.${env}.js`)
}
