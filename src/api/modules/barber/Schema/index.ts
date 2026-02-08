const dayWorkSchema = {
  type: "object",
  required: ["itWorks", "startTime", "endTime"],
  properties: {
    itWorks: { type: "boolean" },
    startTime: { type: "string" },
    endTime:   { type: "string" }
  }
};

const daysOfWorkSchema = {
  type: "object",
  properties: {
    monday: dayWorkSchema,
    tuesday: dayWorkSchema,
    wednesday: dayWorkSchema,
    thursday: dayWorkSchema,
    friday: dayWorkSchema,
    saturday: dayWorkSchema,
    sunday: dayWorkSchema
  },
  additionalProperties: false
};

export const barberSchema = {
  type: "object",
  required: ["key", "daysOfWork"],
  properties: {
    key: { type: "string" },
    daysOfWork: daysOfWorkSchema
  }
};

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

