function calArea(base, altura, tipo) {
    switch (tipo) {
        case 'triangulo':
            return (base * altura) / 2;
        case 'retangulo':
            return base * altura;
        case 'quadrado':
            return base * base;
        default:
            return null;
    }
}

// Testando a função calArea
console.log(calArea(10, 5, 'triangulo')); // 25
console.log(calArea(10, 5, 'retangulo')); // 50
console.log(calArea(5, 5, 'quadrado'));   // 25
console.log(calArea(10, 5, 'circulo'));   // null