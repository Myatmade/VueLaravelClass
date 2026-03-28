<?php 

class Car {
    private $wheels = 4;

    public function drive() {
        echo "The car is driving.";
    }
}

$car1 = new Car();
$car1->drive(); // Output: The car is driving.

$car2 = new Car();
$car2->wheels = 8; // set
echo $car2->wheels; // get, Output: 8