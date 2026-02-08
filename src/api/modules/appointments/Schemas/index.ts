const clientSchema = {
    type: "object",
    required: ["clientName", "procces"],
    properties: {
        clientName: { type: "string" },
        procces: { type: "string" }
    }
}

const appointmentSchema = {
    type: "object",
    required: ["barberId", "client"],
    properties: {
        barberId: { type: "string" },
        client: clientSchema
    }
}
export const createAppointmentSchema = {
    body: {
        type: "object",
        required: ["appointment"],
        properties: {
            appointment: appointmentSchema
        }
    }
};

export const findAppointmentSchema = {
  params: {
    type: "object",
    required: ["barberId"],
    properties: {
      barberId: { type: "string" }
    }
  }
};