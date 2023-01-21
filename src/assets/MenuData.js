const data = [
    {
        id: 1,
        label: "Orders",
        link: "/orders",
        icon: "order.svg",
        subitems: null
    },
    {
        id: 3,
        label: "Storage",
        link: "/storage",
        icon: "machine.svg",
        subitems: null
    },
    {
        id: 4,
        label: "Workstations",
        link: "/workstations",
        icon: "manufacturing.svg",
        subitems: null
    },
    {
        id: 2,
        label: "Production",
        link: null,
        icon: "planning.svg",
        subitems: [
            {
                id: 21,
                label: "Production overview",
                link: "/production-overview",
                icon: "conveyor-belt.svg",
            },{
                id: 22,
                label: "Design process",
                link: "/design-process",
                icon: "3d-printer.svg",
            }
        ]
    },
]

export default data