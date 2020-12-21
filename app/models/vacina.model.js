module.exports = mongoose => {
    const Vacina = mongoose.model(
        "vacina",
        mongoose.Schema(
            {
                nomePaciente: String,
                nomeVacina: String,
                numeroDose: Number,
                data: Date,
                lote: Number,
                local: String
                

            },
            {timestamps: true}
        )
    );
    return Vacina;
};