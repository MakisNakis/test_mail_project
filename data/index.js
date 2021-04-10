import { Pdf } from '../public/icons'

const letters = [
    {
        id: 'letter1',
        title: 'Design Language',
        recieveDate: '08:00 PM',
        senderName: 'Salman Shah',
        senderEmail: 'shah.salman4@gmail.com',
        content:
            'Hello kjhnmgdaf, \n\nRedux is a predictable state container for JavaScript apps.  \n\nIt helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger. \n\n\nCheers \n\nDesignAvenger',
        opened: false,
        files: [
            {
                id: 'file1',
                title: 'lala.pdf',
                icon: <Pdf />,
            },
        ],
    },
    {
        id: 'letter2',
        title: 'Nextmail New Look',
        recieveDate: '11:00 AM',
        senderName: 'Salman Shah',
        senderEmail: 'shah.salman4@gmail.com',
        content:
            'Hello Adithya, \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. \n\n\nCheers \n\nDesignAvenger',
        opened: false,
        files: [
            {
                id: 'file1',
                title: 'Sample.pdf',
                icon: <Pdf />,
            },
            {
                id: 'file2',
                title: 'aaa.pdf',
                icon: <Pdf />,
            },
        ],
    },
    {
        id: 'letter3',
        title: 'Interview with Shopi',
        recieveDate: '12:05 PM',
        senderName: 'Aisha Dialo',
        senderEmail: 'alisha@gmail.com',
        content: 'hello',
        opened: false,
        files: [],
    },
    {
        id: 'letter4',
        title: 'Narcos Season 2',
        recieveDate: '07:35 PM',
        senderName: 'Netflix',
        senderEmail: 'netflix@gmail.com',
        content:
            'RTK includes utilities that help simplify many common use cases, including store setup, creating reducers and writing immutable update logic, and even creating entire "slices" of state at once. \n\nWhether you\'re a brand new Redux user setting up your first project, or an experienced user who wants to simplify an existing application, Redux Toolkit can help you make your Redux code better. \n\nRedux Toolkit is available as a package on NPM for use with a module bundler or in a Node application:',
        opened: false,
        files: [
            {
                id: 'file1',
                title: 'warning.pdf',
                icon: <Pdf />,
            },
        ],
    },
    {
        id: 'letter5',
        title: 'Top Stories of the D',
        recieveDate: 'Yesterday',
        senderName: 'TechCrunch',
        senderEmail: 'techcrunch@gmail.com',
        content:
            'The whole global state of your app is stored in an object tree inside a single store. The only way to change the state tree is to create an action, an object describing what happened, and dispatch it to the store. To specify how state gets updated in response to an action, you write pure reducer functions that calculate a new state based on the old state and the action.',
        opened: false,
        files: [],
    },
    {
        id: 'letter6',
        title: 'Updates from Kevin',
        recieveDate: 'Yesterday',
        senderName: 'Goodreads',
        senderEmail: 'goodreads@gmail.com',
        content: `function counterReducer(state = { value: 0 }, action) {
            switch (action.type) {
              case 'counter/incremented':
                return { value: state.value + 1 }
              case 'counter/decremented':
                return { value: state.value - 1 }
              default:
                return state
            }
          }`,
        opened: false,
        files: [],
    },
    {
        id: 'letter7',
        title: 'Startup 2016',
        recieveDate: '09 Oct, 16',
        senderName: 'Maxime Messer',
        senderEmail: 'maxxx@gmail.com',
        content: 'aaaaaa bbbbb cccccc dddddd',
        opened: false,
        files: [],
    },
]

export default letters
