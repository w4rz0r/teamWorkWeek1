const model = {

    //app
    state:
    {
        page: 'rewards',
        silentMode: false,
        currentWorkoutId: null,
        currentUser: null
    },

    // inputs
    inputs:
    {
        currentWorkoutInput:
        {
            searchText: '',
            reps: null,
            weekNo: 12
        },

        rewardInput:
        {
            searchText: '',
            nftId: null,
            itemId: null
        },
    },


    // data
    workouts: [
        {
            id: 1,
            name: 'pushup',
            img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470',
        },
        {
            id: 2,
            name: 'situps',
            img: 'https://cdn.shopify.com/s/files/1/1876/4703/articles/shutterstock_1201684204_2000x.jpg?v=1595509682',
        },
        {
            id: 3,
            name: 'squats',
            img: 'https://images.unsplash.com/photo-1567598508481-65985588e295?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470',
        },
        {
            id: 4,
            name: 'planking',
            img: 'https://images.unsplash.com/photo-1626444231642-6bd985bca16a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469',
        },
        {
            id: 5,
            name: 'wallSit',
            img: 'https://images.shape.mdpcdn.com/sites/shape.com/files/styles/slide/public/exercise/2B-wall-sit.jpg',
        },
        {
            id: 6,
            name: 'jumpingJacks',
            img: 'https://images.unsplash.com/photo-1514994667787-b48ca37155f0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480',
        },

    ],


    data: {
        rewards:
        [
            { rewardId: 1, image: '#', value: 1200, type: 'nft' },
            { rewardId: 2, image: '#', value: 1200, type: 'nft' },
            { rewardId: 3, image: '#', value: 1200, type: 'nft' },
            { rewardId: 4, image: '#', value: 1200, type: 'nft' },
            { rewardId: 5, image: '#', value: 1200, type: 'nft' },
            { rewardId: 6, image: '#', value: 1200, type: 'nft' },
            { rewardId: 7, image: '#', value: 1200, type: 'nft' },
            { rewardId: 8, image: '#', value: 1200, type: 'nft' },
            { rewardId: 9, image: '#', value: 1200, type: 'nft' },
            { rewardId: 10, image: '#', value: 1200, type: 'coupons' },
            { rewardId: 11, image: '#', value: 1200, type: 'coupons' },
            { rewardId: 12, image: '#', value: 1200, type: 'coupons' },
            { rewardId: 13, image: '#', value: 1200, type: 'coupons' },
            { rewardId: 14, image: '#', value: 1200, type: 'coupons' },
            { rewardId: 15, image: '#', value: 1200, type: 'coupons' },
            { rewardId: 16, image: '#', value: 1200, type: 'coupons' },
            { rewardId: 17, image: '#', value: 1200, type: 'coupons' },
            { rewardId: 18, image: '#', value: 1200, type: 'coupons' }
        ],

        users:
        [
            {
                id: 7,
                name: 'kong Terje',
                // doneExercises:
                // [
                //     { exerciseId: 1, reps: 12, weekNo: 12 },
                //     { exerciseId: 1, reps: 3, weekNo: 12 },
                //     { exerciseId: 1, reps: 21, weekNo: 12 },
                //     { exerciseId: 2, reps: 21, weekNo: 12 }
                // ],
                // inventory: [],
            },

            {
                id: 8,
                name: 'Benjamin',
            },
            
            {
                id: 13,
                name: 'aristoteles'
            },
        ],

        doneExercises:
        [
            { exerciseId: 1, reps: 12, weekNo: 12, userId: 7, repsPerOneCurrency: 6 },
            { exerciseId: 2, reps: 12, weekNo: 12, userId: 8, repsPerOneCurrency: 6 },
            { exerciseId: 3, reps: 12, weekNo: 12, userId: 13, repsPerOneCurrency: 6 }
        ],
        inventory:
        [
            { userId: 7, rewardId: 9, currency: 377, inventoryid: 4 },
            { userId: 8, rewardId: 6, currency: 913, inventoryid: 7 },
            { userId: 13, rewardId: 23, currency: 17, inventoryid: 15 }
        ],
    },


}