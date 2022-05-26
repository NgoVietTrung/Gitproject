class shape{
    static AreaCircle(radius){
        return Math.PI*radius**2;
    }
    static PerimeterCircle(radius){
        return Math.PI*radius*2;
    }
    static AreaRectagle(long,short){
        return long*short;
    }
    static PerimeterRectagle(long,short){
        return (long+short)*2
    }
    static AreaSquare(border){
        return border**2;
    }
    static PerimeterSquare(border){
        return border*4;
    }
}
console.log(shape.AreaCircle(3));