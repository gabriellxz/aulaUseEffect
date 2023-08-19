const produtos = [
    {
        id: 1,
        nome: "Televisão",
        imgUrl: "https://imgs.search.brave.com/u1d30bciOIngvo2KOMtTlvNIOM1KD2lwuCzC4litIvU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMucGNkaWdhLmNv/bS9tZWRpYS9jYXRh/bG9nL3Byb2R1Y3Qv/Y2FjaGUvYjBhZmU5/MjIzODRhNWVkN2U3/YzAyYWRjZGNhYzZh/N2UvcC80L3A0M18y/LmpwZw",
        price: 2000.0
    },
    {
        id: 2,
        nome: "Celular",
        imgUrl: "https://imgs.search.brave.com/svoPPkwaVavh8ESvmGxbGM-vRW_8ricTTk1Hk-3zytE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kM2Fs/djdla2RhY2p5cy5j/bG91ZGZyb250Lm5l/dC9DdXN0b20vQ29u/dGVudC9Qcm9kdWN0/cy8xMS84Ny8xMTg3/MjIzX3NtYXJ0cGhv/bmUtbW90b3JvbGEt/bW90by1nMjItMTI4/Z2ItNGdiLXJhbS1j/YW1lcmEtcXVhZHJ1/cGxhLWZyb250YWwt/MTZtcC10ZWxhLTYt/NS1henVsX20xXzYz/ODIxOTAzNzI4NzE3/MDQ4NS5qcGc",
        price: 3500.0
    }
]

export default function FindProduto(id: number) {
    return produtos.find(p => p.id === id)
}