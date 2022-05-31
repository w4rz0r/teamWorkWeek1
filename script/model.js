const model = {

    //app
    state:
    {
        page: 'inventory',
        silentMode: false,
        currentWorkoutId: null,
        currentUser: null
    },

    // inputs
    inputs:
    {
        currentWorkoutInput:
        {
            id: null,
            name: '',
            img: ''
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
            name: 'Pushup',
            img: 'http://www.stack.com/wp-content/uploads/2012/10/Flex_o001_2_-e1350409352620.jpg',
            rep: 10,
            description: 'Do 10 pushups with or without having your knees down.',
        },
        {
            id: 2,
            name: 'Situps',
            img: 'https://cdn.shopify.com/s/files/1/1876/4703/articles/shutterstock_1201684204_2000x.jpg?v=1595509682',
            rep: 10,
            description:'Do 10 situps.',
        },
        {
            id: 3,
            name: 'Squats',
            img: 'https://images.unsplash.com/photo-1567598508481-65985588e295?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470',
            rep: 10,
            description:'Do 10 squats.',
        },
        {
            id: 4,
            name: 'Planking',
            img: 'https://chicagohealthonline.com/wp-content/uploads/2020/06/premium-health-planking-20200610-1170x700.jpg.webp',
            rep: 40,
            description:'Plank for 40 seconds.',
        },
        {
            id: 5,
            name: 'Wall sit',
            img: 'https://images.shape.mdpcdn.com/sites/shape.com/files/styles/slide/public/exercise/2B-wall-sit.jpg',
            rep: 40,
            description:'Wall sit for 40 seconds.',
        },
        {
            id: 6,
            name: 'Jumping jacks',
            img: 'https://www.researchgate.net/profile/Mohammed-Abou-Elmagd/publication/341734848/figure/fig1/AS:896516470362114@1590757591713/Sample-of-Jumping-Jacks-Exercise-4_Q640.jpg',
            rep: 10,
            description:'Do 10 jumping jacks.',
        },

    ],


    data: {
        rewards:
        [
            { rewardId: 1, image: '/images/nft/monkey1.png', cost: 1200, type: 'nft', name: 'nft 1' },
            { rewardId: 2, image: '/images/nft/monkey2.png', cost: 1200, type: 'nft', name: 'nft 2' },
            { rewardId: 4, image: '/images/nft/monkey4.png', cost: 1200, type: 'nft', name: 'nft 4' },
            { rewardId: 5, image: '/images/nft/monkey5.png', cost: 1200, type: 'nft', name: 'nft 5' },
            { rewardId: 6, image: '/images/nft/monkey6.png', cost: 1200, type: 'nft', name: 'nft 6' },
            { rewardId: 7, image: '/images/nft/monkey7.png', cost: 1200, type: 'nft', name: 'nft 7' },
            { rewardId: 8, image: '/images/nft/monkey8.png', cost: 1200, type: 'nft', name: 'nft 8' },
            { rewardId: 9, image: '/images/nft/monkey9.png', cost: 1200, type: 'nft', name: 'nft 9' },
            { rewardId: 10, image: '/images/coupon/coupon1.png', cost: 1200, type: 'coupons', name: 'popcorn' },
            { rewardId: 11, image: '/images/coupon/coupon2.png', cost: 1200, type: 'coupons', name: 'cookies and cream' },
            { rewardId: 12, image: '/images/coupon/coupon3.png', cost: 1200, type: 'coupons', name: 'a bag of skittles' },
            { rewardId: 13, image: '/images/coupon/coupon4.png', cost: 1200, type: 'coupons', name: 'bag of chips' },
            { rewardId: 14, image: '/images/coupon/coupon5.png', cost: 1200, type: 'coupons', name: 'bag of donuts' },
            { rewardId: 15, image: '/images/coupon/coupon6.png', cost: 1200, type: 'coupons', name: 'berries and chocolate' },
            { rewardId: 16, image: '/images/coupon/coupon7.png', cost: 1200, type: 'coupons', name: 'chocolate chips' },
            { rewardId: 17, image: '/images/coupon/coupon8.png', cost: 1200, type: 'coupons', name: 'slice of cake' },
            { rewardId: 18, image: '/images/coupon/coupon9.png', cost: 1200, type: 'coupons', name: 'coco with cream' }
        ],

        users:
        [
            {
                id: 7,
                name: 'kong Terje',
                currency: 377
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
                currency: 913,
            },
            
            {
                id: 13,
                name: 'aristoteles',
                currency: 17,
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