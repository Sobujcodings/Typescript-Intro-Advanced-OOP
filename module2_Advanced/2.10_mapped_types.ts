{
  // mapped types (jokhon map diye traversal korbo tokhon amr iccha onujayi map r type define korte parbo)
  // important and dynamic

  // ekhane janlam j map diye amra ebhabe type change korte pari, normal type alias diye
  const arrofNumbers: number[] = [1, 2, 5];
  //   const arrofString : string[] = ['1','2','3'];
  const arrofString: string[] = arrofNumbers.map((number) => number.toString());



  // akhn janbo ts e kibhabe map kaj kore (map loop r motoi kaj kore lets see)
  type areaNumber = {
    height: number;
    width: number;
  };
  //   type areaString = {
  //     height: string;
  //     width: string;
  //   }
  // ekhane akbar number akbar string howar jonno 2ta k alada kore declare kora lagche
  // atake amra map r shahajje dynamically change korte pari j kontar ta number/string hobe
  // tahole (key) nam dilam variable r jeta akbar height r jonno akbr width r jonno string type declare korbe
  // ekhane ata loop r moto kaj kortece.(we can add any attr here she attr gula niyei type toyri hobe)
  type areaString = {
    // [key in "height" | "width"]: string;
    // [key in "height" | "width" | "depth"]: string;
    [key in "height" | "width" | "depth"]: boolean;
  };


  // ata hardcode bhabe likhchi atar sathe areaNumber kono realation nai lets make it dynamically
  // tokhon ekhane ata r ata ak e kotha just (static & dynamic)
  //   type areaString2 = {
  //     height: string;
  //     width: string;
  // }
  type areaString2 = {
    [key in keyof areaNumber]: string;
  };


  // look-up type example
  type areaNumber2 = {
    height: number;
    width: number;
  };
  // obj['height']   // obj hole ebhebe height k get kortam but type theke korbo ebhabe
  type height = areaNumber2['height'];



  // !important -> akhn ai map k aktu generic bhabe(dynamically paramter) dynamically use korbo
  // area1 theke data(obj) pass korlam (shei obj use kore shetar type o ber kore felbo dynamically)
  // here T = {height: string; width: number}
  // akhn key gula nibo T(paramter theke)
  // T[key] = T['height]    
  // tokhon height r type tao she boshiye dibe T[key] ekhane same for width
  type areaString3<T> = {
    // [key in keyof T]: string;  // ekhane ager moto string na diye(dynamic korbo T[key] diye taholei T r key r type gula peye jabo, jeta padhabo shetai)
    [key in keyof T]: T[key];
  };

  // ekhane theke value gula pass korbo areaString3 e (shei onujayi type declare hobe)
  // <> dynamically pass korbo ami jeta jeta chai (ekhane ullokh korbo oikhane use korbo)
  // just ullekh korboi na, type change korleo jate sheta kaj kore tai fully dynamic korbo areaString3 k
  const area1 : areaString3<{height: string; width: number}> = {
    height : '100',
    width: 10,
  }

}
