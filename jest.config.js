module.exports = {
    verbose: true,
    roots: ['<rootDir>/src'],
    moduleNameMapper: {
        '\\.(css|less|scss)$': 'identity-obj-proxy',
        '^src$': '<rootDir>/src/index.tsx',
        '^src(.*)$': '<rootDir>/src/$1',
    },
    testRegex: '(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    preset: 'ts-jest',
    testPathIgnorePatterns: ['/node_modules/', '/lib/', '/esm/', '/dist/'],
    testEnvironment: 'jsdom'
}