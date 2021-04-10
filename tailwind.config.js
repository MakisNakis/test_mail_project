module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                button: '#00B96E',
                border: {
                    primary: '#979797',
                },
                fill: {
                    primary: '#FBFDFD',
                    secondary: '#EDEDED',
                    tertiary: '#FFFAFA',
                },
                font: {
                    primary: '#8e8e93',
                    secondary: '#4C4F59',
                    tertiary: '#8F929D',
                    quarternary: '#323232',
                    quinary: '#A3A3A8',
                    senary: '#484C51',
                    septenary: '#999EB1',
                },
            },
            fontSize: {
                xxs: ['0.625rem', '1rem'],
            },
            height: {
                '45px': '45px',
            },
            margin: {
                '1px': '1px',
            },
            padding: {
                '29px': '29px',
            },
            width: {
                '334px': '334px',
                '45px': '45px',
            },
        },
    },
    variants: {
        extend: {
            borderWidth: ['hover', 'active', 'focus', 'last'],
            margin: ['last'],
            padding: ['first'],
        },
    },
    plugins: [],
}
