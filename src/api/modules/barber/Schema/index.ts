const barberSchema = {
    type: "object",
    required: ["key", "daysOfWork"],
    properties: {
        key: { type: "string" },
        daysOfWork: { type: "object" }
    }
}

export const createBarberSchema = {
    body: {
        type: "object",
        required: ["barber"],
        properties: {
            barber: barberSchema
        }
    }
};

export const findBarberSchema = {
    params: {
        type: "object",
        required: ["id"],
        properties: {
            id: { type: "string" }
        }
    }
};

export const updateBarberSchema = {
    params: {
        type: "object",
        required: ["id"],
        properties: {
            id: { type: "string" }
        }
    },
    body: {
        type: "object",
        additionalProperties: true
    }
};

