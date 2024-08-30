import { app } from "./app.js";

const PORT = 3333;

app.listen(PORT, () => {
    console.log(`Servidor Express rodando na porta ${PORT}`);
});
