
export const claims = [
    {
        key: 1,
        num: `T${(new Date(Date.now() + ((3600 * 1000 * 24) * 1))).toLocaleDateString().replace(/[.]/g, '')}1`,
        createdAt: '2022-08-24 12:00:00',
        pointA: {  
            id: 1,
            name: "point-1",
            point: [51.162350, 71.441414]
        },
        pointB: {
            id: 2,
            name: "point-2",
            point: [51.138122, 71.443731]
        }
    }, 

    {
        key: 2,
        num: `T${(new Date(Date.now() + ((3600 * 1000 * 24) * 2))).toLocaleDateString().replace(/[.]/g, '')}2`,
        createdAt: '2022-08-25 12:00:00',
        pointA: {
            id: 4,
            name: "point-4",
            point: [51.125357, 71.448795]
        },
        pointB: {
            id: 3,
            name: "point-3",
            point: [51.132305, 71.405365]
        }
    }, 

    {
        key: 3,
        num: `T${(new Date(Date.now() + ((3600 * 1000 * 24) * 3))).toLocaleDateString().replace(/[.]/g, '')}3`,
        createdAt: '2022-08-26 12:00:00',
        pointA: {
            id: 5,
            name: "point-5",
            point: [51.088496, 71.416780]
        },
        pointB: {
            id: 1,
            name: "point-1",
            point: [51.162350, 71.441414]
        }
    }, 

    {
        key: 4,
        num: `T${(new Date(Date.now() + ((3600 * 1000 * 24) * 4))).toLocaleDateString().replace(/[.]/g, '')}4`,
        createdAt: '2022-08-27 12:00:00',
        pointA: {
            id: 3,
            name: "point-3",
            point: [51.132305, 71.405365]
        },
        pointB: {
            id: 2,
            name: "point-2",
            point: [51.138122, 71.443731]
        }
    }, 

]
