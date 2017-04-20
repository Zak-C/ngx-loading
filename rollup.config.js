export default {
    entry: 'dist/index.js',
    dest: 'dist/bundles/ngx-loading.umd.js',
    sourceMap: false,
    format: 'umd',
    moduleName: 'ng.ngx-loading',
    globals: {
        '@angular/core': 'ng.core',
        '@angular/common': 'ng.common'
    }
}