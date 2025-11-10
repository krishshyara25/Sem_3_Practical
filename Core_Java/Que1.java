
class Box {
    double width;
    double height;
    double depth;

    Box() {
        width = 1;
        height = 1;
        depth = 1;
    }

    Box(double size) {
        width = size;
        height = size;
        depth = size;
    }

    Box(double w, double h, double d) {
        width = w;
        height = h;
        depth = d;
    }

    double volume() {
        return width * height * depth;
    }

    public static void main(String[] args) {
        Box box1 = new Box();
        System.out.println("Volume of box1 (no-arg): " + box1.volume());

        Box box2 = new Box(3);
        System.out.println("Volume of box2 (one-arg): " + box2.volume());

        Box box3 = new Box(2, 3, 4);
        System.out.println("Volume of box3 (parameterized): " + box3.volume());
    }
}

public class Que1 {
    public static void main(String[] args) {
        Box box1 = new Box();
        System.out.println("Volume of box1: " + box1.volume());

        Box box2 = new Box(5);
        System.out.println("Volume of box2: " + box2.volume());

        Box box3 = new Box(2, 3, 4);
        System.out.println("Volume of box3: " + box3.volume());
    }
}