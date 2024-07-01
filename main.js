
////////////////////////////////////            CALCULATOR                 ///////////////////////////////

const choice = prompt("Which type of calculation do you need? is it a simple operation? press 1, or scientifc operation press 2, or conversion based operation press 3.");

    // The below section is for simple operations

    if(choice==="1"){
        simpleOperation(choice);
    }  

    // The below section is for scientific operations
    else if(choice == "2")
        {
            scientifcOperation(choice);
        }
    
    // The below section is for Conversion Operations
    else if(choice=="3")
        {
           conversionOperation(choice);
        }

            ///////////////////////////////////////////////////////////////////////////////////////////////////
        
        //Function 1
        function simpleOperation(choice)
        {
            const firstOperand = Number(prompt("Enter first operand : "));  //Ref 1:    learned typecasting from google and implented here
            const operator = prompt("Enter operator : ");
            const secondOperand = Number(prompt("Enter second operand : "));
            if(operator=="+"){
                console.log(firstOperand + secondOperand);
            }
            else if(operator=="-"){
                console.log(firstOperand - secondOperand);
            }
            else if(operator=="*" || operator=="x" || operator=="X"){
                console.log(firstOperand * secondOperand);
            }
            else if(operator=="/" || operator=="%"){
                console.log(firstOperand / secondOperand);
            }
            else
            {
                console.log("Invalid Input!");
            }
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////

    //Function 2
    function scientifcOperation(choice)
    {
        const option = prompt(
            "In scientific calculator , \n press T for trignometric functions \n press H for hyperbolic functions, \n press F for factorial of a number \n press C to find cube /\n press L for logarthmic functions \n press E for exponential function "
          );
          const opt = option.toLowerCase();

          //Trignometry section starts...

          if (opt == "t") {
            const trig = prompt(
              "press s for sin \n press c for cos \n press t for tan"
            );
            if (trig.toLowerCase() == "s") {
                const angle = Number(prompt("Enter angle in degrees : "));
                result = Math.sin(angle);
                console.log(`${Math.round(result)}°C`);
            } 
            else if (trig.toLowerCase() == "c") {
                const angle = Number(prompt("Enter angle in degrees : "));
                result = Math.cos(angle);
                console.log(`${Math.round(result)}°C`);
            } 
            else if (trig.toLowerCase() == "t") {
              const angle = Number(prompt("Enter angle in degrees : "));
              result = Math.tan(angle);
              console.log(`${Math.round(result)}°C`);
            }
            else 
            {
              console.log("Invalid input");
            }
          }

          //Hyperbolic section starts
          else if (opt == "h") 
            {
                const hyper = prompt("press s for sinh \n press c for cosh \n press t for tanh");

                if (hyper.toLowerCase() == "s") 
                    {
                        const angle = Number(prompt("Enter angle in degrees : "));
                        result = Math.sinh(angle); //Ref 2: function of sinh() got from google
                        const exactResult = Math.round(result);
                        console.log(`${exactResult}°C`);
                    } 
                else if (hyper.toLowerCase() == "c") 
                    {
                        const angle = Number(prompt("Enter angle in degrees : "));
                        result = Math.cosh(angle);
                        const exactResult = Math.round(result);
                        console.log(`${exactResult}°C`);
                    }
                else if (hyper.toLowerCase() == "t") 
                    {
                        const angle = Number(prompt("Enter angle in degrees : "));
                        result = Math.tanh(angle);
                        const exactResult = Math.round(result);
                        console.log(`${exactResult}°C`);
                    } 
                else 
                    {
                        console.log("Invalid input");
                    }
          } 

          // Finding Factorial of a number
          else if (opt == "f") {
            const number = Number(prompt("Enter a positive integer: ")); //Ref 3:  Got the logic from programiz pro website

            if (number < 0) {
              console.log(
                "Error! Factorial for negative number does not exist."
              );
            } else if (number === 0) {
              console.log(`The factorial of ${number} is 1.`);
            } else {
              let fact = 1,
                i = 1;
              while (i <= number) {
                fact = fact * i;
                i++;
              }
              console.log(`The factorial of ${number} is ${fact}.`);
            }
          }

          //  Finding the Cube of a number
          else if (opt == "c") {
            const number = Number(
              prompt("Enter a number to find cube of it : ")
            );
            const result = number * number * number;
            console.log(`The cube of ${number} is ${result}.`);
          }

          //finding logarithm of a number with the base 10
          else if (opt == "l") {
            const number = Number(
              prompt("Enter a number to find log of it : ")
            );
            const result = Math.log10(number);
            const exactResult = Math.round(result);
            console.log(`The log of ${number} is ${exactResult}`);
          }

          // Finding the exponential of a number
          else if (opt == "e") {
            const number = Number(
              prompt("Enter a number to find exponential of it : ")
            );
            const result = Math.exp(number); //THis function was missed from me so cheated from mdn documentation xD
            console.log(`The exponential of ${number} is ${result}`);
          } else {
            console.log("Invalid option");
          }
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Function 3 => used for Conversion
    function conversionOperation(choice)
        {
            const opt= prompt("Choose the conversion you want to do :- \n1. for temperature conversion\n2. for length conversion \n3. for weight conversion ");
        
                
            if (opt == "1") 
                {
                    const opt2 = prompt("Conversion from :\n1. Celcius to Farenhiet \n2. Celcius to Kelvin \n3. Farenhiet to Celcius \n4. Farenhiet to Kelvin \n5. Kelvin to Celcius \n6. Kelvin to Farenhiet");
                    if (opt2 == "1")  //Celciust to Farenhiet
                        {
                            const number = Number(prompt("Enter the temperature in Celcius : "));
                            const result = (number * 9/5) + 32;                                     //Ref 4: from Google
                            console.log(`${number} Celcius is equal to ${Math.round(result)} Farenhiet`);
                        }
                    else if(opt2=="2") //Celcius to Kelvin
                        {
                            const number = Number(prompt("Enter the temperature in celcius : "));
                            const result = number + 273.15;                                        //Ref 5: From Google
                            console.log(`${number} Celcius is equal to ${Math.round(result)} kelvin`);
                        }
                    else if (opt2 == "3") //Farenhiet to Celcius
                        {
                            const number = Number(prompt("Enter the temperature in Farenhiet : "));
                            const result = (number - 32) * 5/9;                                     //Ref 6: From Google
                            console.log(`${number} Farenhiet is equal to ${Math.round(result)} Celcius`);
                        }
                    else if(opt2 == "4") //Farenhiet to Kelvin
                        {
                            const number = Number(prompt("Enter the Temperature in Farenhiet : "));
                            const result = (number - 32) * (5 / 9) + 273.15;
                            console.log(`${number} Farenhiet is equal to ${Math.round(result)} Kelvin`);
                        }
                    else if(opt2 == "5") //Kelvin to Celcius
                        {
                            const number = Number(prompt("Enter the Temperature in Kelvin : "));
                            const result = number - 273.15;
                            console.log(`${number} Kelvin = ${Math.round(result)} Celsius`);
                        }
                    else if(opt2 == "6") //Kelvin to fareniet
                        {
                            const number = Number(prompt("Enter the Temperature in Kelvin : "));
                            const result = (number - 273.15) * 1.8 + 32;
                            console.log(`${number} Kelvin = ${Math.round(result)} Farenhiet`);
                        }
                    else
                    {
                        console.log("Invalid Input");
                    }
                }
                ////// For LENGTH CONVERSION
                else if(opt=="2")
                    {
                            const options = Number(prompt("Choose the conversion you want to do: \n1.Kilometer to meter \n2.meter to centimeter \n3.centimeter to meter"));
                            if(options=="1")
                                {
                                    const length = Number(prompt("Enter the length in Kiloemters : "));
                                    const convertedLength = length * 1000;
                                    console.log(`${length} km = ${convertedLength} m`);
                                }
                            else if(options == "2")
                                {
                                    const length = Number(prompt("Enter the length in meters : "));
                                    const convertedLength = length * 100;
                                    console.log(`${length} m = ${convertedLength} cm`);
                                }
                            else if(options == "3")
                                {
                                    const length = Number(prompt("Enter the length in centi-meters : "));
                                    const convertedLength = length * 10;
                                    console.log(`${length} cm = ${convertedLength} mm`);
                                }
                    }

                ////// For weight CONVERSION
                else if(opt=="3")
                    {
                            const options = Number(prompt("Choose the conversion you want to do: \n1.Tonnes to Kilogram \n2.Kilogram to gram \n3.gram to miligram"));
                            if(options=="1")
                                {
                                    const weight = Number(prompt("Enter the weight in tonnes : "));
                                    const convertedWeight = weight * 1000;
                                    console.log(`${weight} tonne = ${convertedWeight} kg`);
                                }
                            else if(options == "2")
                                {
                                    const weight = Number(prompt("Enter the weight in kilogram : "));
                                    const convertedWeight = weight * 100;
                                    console.log(`${weight} kg = ${convertedWeight} g`);
                                }
                            else if(options == "3")
                                {
                                    const weight = Number(prompt("Enter the weight in grams : "));
                                    const convertedWeight = weight * 10;
                                    console.log(`${weight} g = ${convertedLength} mg`);
                                }
                    }
                    else{
                        console.log("Invalid Input");
                    }
        }
   
