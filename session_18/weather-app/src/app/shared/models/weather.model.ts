export interface Weather {
    location: {
        name: string
    }
    current : {
        temp_c: number,
        condition: {
            text: string
        },
        humidity: number
    }
}