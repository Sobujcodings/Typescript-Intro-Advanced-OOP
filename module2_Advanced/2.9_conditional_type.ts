{

    // conditional types 
    // (jodi akta type onno akta type r opor depend kore konoakta condition r opor vhitti kore taholei sheta conditional type)
    // In TypeScript, the extends keyword in a conditional type is used to test whether one type is assignable to another.


    // type a1 = number;   // number kore condional change hoye false hoye jabe x r;
    type a1 = null;        // now x = true (coz a1 extends/assingle value is null)
    type b1 = undefined;

    // mane a1 ta null assingle kora ache kina, thakle ata na thakle ata.
    type x = a1 extends null ? true : false;


    // we can also write nested constional type like here (if else 2tai hobe main, aktar vhitore nested if else hobe ai)
    type y = a1 extends null ? true : b1 extends undefined ? undefined : null;




    // another important example
    type sheikh = {
        bike : string;
        car : string;
        ship : string;
    }

    // car ache kina/bike/ship/tractore ache kina dekhte chai (hardcode na kore keyof use kora jay ekahne)
    type CheckVehicle<T> = T extends 'bike'| 'car'|'ship' ? true : false;

    // ekhane ami dekhte chacchi (jei T ta k padhabo sheta ki 'bike'/car/ship) if then true;
    type HasBike = CheckVehicle<'bike'>;
    // false hobe jodi oi 3tar moddhe akta na hoy
    type HasBike2 = CheckVehicle<'emni'>;



    // we can use keyof here also (extend mane assign kora kina ai value te ata)
    // car ache kina/bike/ship/tractore ache kina dekhte chai
    // keyof sheikh mane sheikhn r kono akta key T hishebe ashlei true pabo (she union literal type toyri kore felbe)
    type CheckVehicle2<T> = T extends keyof sheikh ? true : false;
    //
    type HasAttr = CheckVehicle2<'ship'>;       // true
    type HasAtt2 = CheckVehicle2<'tractor'>;       // false (boz sheikh keyof/key doesnt have emni)


}