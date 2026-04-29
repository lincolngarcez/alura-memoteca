const api = {
    async buscarPensamento() {
        try {
            const response = await fetch('http://localhost:3000/pensamentos')
            return await response.json()
        } catch {
            alert('Erro ao busca pensamentos')
            throw error
        }
    }
}

export default api;