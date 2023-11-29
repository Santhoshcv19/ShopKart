import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { UserService } from '../user.service';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../api.service';
import { AlertDialogComponentComponent } from '../alert-dialog-component/alert-dialog-component.component';

@Component({
  selector: 'app-home-appliances',
  templateUrl: './home-appliances.component.html',
  styleUrls: ['./home-appliances.component.scss']
})
export class HomeAppliancesComponent implements OnInit {
  result: string = '';
  // homeProducts: any[] = [
  //   {
  //     title: 'Panasonic Refrigerator',
  //     img: '../../assets/images/homeproduct1.webp',
  //     img2: '../../assets/images/panasonic2.png',
  //     img3: '../../assets/images/panasonic3.png',
  //     ratings: '4.2/5',
  //     reviews: '19 Ratings',
  //     Offerprice: '32,990',
  //     MRP: '43,000',
  //     Detail: 'Panasonic 336 L <br>Frost Free Double Door <br>3 Star Refrigerator  <br>(Grey, NR-BG343VGG3)',
  //     Specs: '336 L : Good for families of 3-5 members'+
  //     '<br>Inverter Compressor'+
  //     '<br>3 Star : For Energy savings up to 35%'+
  //     '<br>Frost Free : Auto fridge defrost to stop ice-build up'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;',
  //     Specs1heading: 'General',
  //     Specs1: 'In The Box: '+
  //     '1 Refrigerator Unit, Ice Cube Tray, Egg Tray, User Manual, Warranty Card'+
  //     '<br>Type: '+
  //     'Double Door'+
  //     '<br>Refrigerator Type: '+
  //     'Top Mount'+
  //     '<br>Defrosting Type: '+
  //     'Frost Free'+
  //     '<br>Compressor Type: '+
  //     'Inverter Compressor'+
  //     '<br>Capacity: '+
  //     '336 L'+
  //     '<br>Number of Doors: '+
  //     '2'+
  //     '<br>Star Rating: '+
  //     '3'+
  //     '<br>Coolpad: '+
  //     'No'+
  //     '<br>Toughened Glass: '+
  //     'Yes'+
  //     '<br>Built-in Stabilizer: '+
  //     'Yes',
  //     Specs2heading: 'Dimensions',
  //     Specs2: 'Net Height :'+
  //     '1747 mm'+
  //     '<br>Net Depth: '+
  //     '681 mm'+
  //     '<br>Net Width: '+
  //     '600 mm'+
  //     '<br>Weight: '+
  //     '56 kg',
  //     Specs3heading: 'Additional Feature',
  //     Specs3: 'This refrigerator makes use of the AG Clean technology to prevent the growth of harmful organisms, bacteria, and mould so that your food retains its flavour and essential nutrients. <br>The Silver Air Filter helps remove up to 99.9% of bacteria and mould in the appliance. <br>The AG filter effectively cleans the air circulating in the appliance so that the bacteria and mould are deactivated. <br>It also helps reduce odours.',
  //     Specs4heading: 'Warranty',
  //     Specs4: 'Warranty Summary: '+
  //     '1 Year Brand Warranty of Termite / 10 Days For Manufacturing Defect'+
  //     '<br>Covered in Warranty: '+
  //     'Termites & Fungus (This Item Is Eligible For Replacement, Within 10 Days Of Delivery, In An Unlikely Event Of Damaged, Defective Or Different/Wrong Item Delivered To You. Please Keep The Item In Its Original Condition, Original Packaging, With User Manual, Warranty Cards, And Original Accessories In Manufacturer Packaging For A Successful Return Pick-Up). (If Customer want to claim warranty against Termite & Fungus. Customer will have to bear Shipping charges).',
  //     Specs5heading: 'Disclaimer',
  //     Specs5: 'The color of the product may vary slightly from the picture displayed on your screen: this is due to lighting, pixel quality and color settings. Please check the product dimensions to ensure the product will fit in the desired location. Also, check if the product will fit through the entrance(s) and door(s) of the premises. And if there is no elevator in a multi-storey building, we might be unable to deliver the item to your doorstep. Please expect an unevenness of up to 5 mm in the product due to differences in surfaces and floor levels. Flipkart, or the Seller delivering the product, will not take up any type of civil work, such as drilling holes in the wall to mount the product. The product will only be assembled if carpentry-assembly is required. In case the product appears to lack shine, wiping the surface with a cloth will help clear the surface of dust particles.',
  //   },
  //   {
  //     title: 'Voltas AC',
  //     img: '../../assets/images/homeproduct2.webp',
  //     img2: '../../assets/images/votlas2.png',
  //     img3: '../../assets/images/voltas3.png',
  //     ratings: '4.1/5',
  //     reviews: '2,395 Ratings',
  //     Offerprice: '39,490',
  //     MRP: '75,990',
  //     Detail: 'Voltas 2023 Model <br>1.5 Ton <br>5 Star Split Inverter AC - White  <br>(185V Vectra Elite(4503617), Copper Condenser)',
  //     Specs: '1.5 Ton'+
  //     '<br>5 Star BEE Rating 2023 : For energy savings upto 25% (compared to Non-Inverter 1 Star)'+
  //     '<br>Auto Restart: No need to manually reset the settings post power-cut'+
  //     '<br>Copper : Energy efficient, best in class cooling with easy maintenance.'+
  //     '<br>Sleep Mode: Auto-adjusts the temperature to ensure comfort during your sleep'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;',
  //     Specs1heading: 'General',
  //     Specs1: 'In The Box: '+
  //     '1 Indoor Unit, 1 Outdoor Unit, Remote, Connecting Pipes, User Manual,Copper wire-3 Meter'+
  //     '<br>Brand: '+
  //     'Voltas'+
  //     '<br>Model Name: '+
  //     '185V Vectra Elite(4503617)'+
  //     '<br>Type: '+
  //     'Split'+
  //     '<br>Capacity in Tons: '+
  //     '1.5 Ton'+
  //     '<br>Star Rating: '+
  //     '5 Star BEE Rating'+
  //     '<br>BEE Rating Year: '+
  //     '2023'+
  //     '<br>Color: '+
  //     'White'+
  //     '<br>Cooling Capacity: '+
  //     '4850 W'+
  //     '<br>Compressor: '+
  //     'High EER Rotary- BLDC'+
  //     '<br>Dehumidification: '+
  //     'Yes'+
  //     '<br>Remote Control: '+
  //     'Yes'+
  //     '<br>Refrigerant: '+
  //     'R-32'+
  //     '<br>Operating Modes: '+
  //     'Turbo Mode, Sleep Mode, Energy Saver Mode'+
  //     '<br>Condenser Coil: '+
  //     'Copper',
  //     Specs2heading: 'Dimensions',
  //     Specs2: 'Indoor W x H x D: '+
  //     '96 cm x 31.7 cm x 23.5 cm'+
  //     '<br>Indoor Unit Weight: '+
  //     '11.1 kg'+
  //     '<br>Outdoor W x H x D: '+
  //     '83.5 cm x 55.5 cm x 29.5 cm'+
  //     '<br>Outdoor Unit Weight: '+
  //     '27.6 kg',
  //     Specs3heading: 'Additonal Features',
  //     Specs3: 'Indoor Temperature Indicator: '+
  //     'Yes'+
  //     '<br>Cooling Coverage Area: '+
  //     '154.007 sq ft'+
  //     '<br>Turbo Mode: '+
  //     'Yes'+
  //     '<br>Anti-bacteria Filter: '+
  //     'Yes'+
  //     '<br>Dust Filter: '+
  //     'Yes',
  //     Specs4heading: 'Power & Other features',
  //     Specs4: 'Auto Restart: '+
  //     'Yes'+
  //     '<br>Timer: '+
  //     'Yes'+
  //     '<br>Child Lock: '+
  //     'Yes'+
  //     '<br>Sleep Mode: '+
  //     'Yes'+
  //     '<br>Self Diagnosis: '+
  //     'Yes'+
  //     '<br>Power Requirement: '+
  //     'AC 230 V, 50 Hz'+
  //     '<br>Annual Electricity Consumption: '+
  //     '751.28 kWh',
  //     Specs5heading: 'Disclaimer',
  //     Specs5: 'The color of the product may vary slightly from the picture displayed on your screen: this is due to lighting, pixel quality and color settings. Please check the product dimensions to ensure the product will fit in the desired location. Also, check if the product will fit through the entrance(s) and door(s) of the premises. And if there is no elevator in a multi-storey building, we might be unable to deliver the item to your doorstep. Please expect an unevenness of up to 5 mm in the product due to differences in surfaces and floor levels. Flipkart, or the Seller delivering the product, will not take up any type of civil work, such as drilling holes in the wall to mount the product. The product will only be assembled if carpentry-assembly is required. In case the product appears to lack shine, wiping the surface with a cloth will help clear the surface of dust particles.',
  //   },
  //   {
  //     title: 'Crompton Geyser',
  //     img: '../../assets/images/crompton1.png',
  //     img2: '../../assets/images/crompton2.webp',
  //     img3: '../../assets/images/crompton3.webp',
  //     ratings: '4.1/5',
  //     reviews: '12,136 Ratings',
  //     Offerprice: '4,999',
  //     MRP: '9,200',
  //     Detail: 'Crompton <br>10 L Storage <br>Water Geyser <br>(CROMPTON 10 L Storage Water Geyser, White)',
  //     Specs: 'Storage Useful for Bathroom, can store heated water'+
  //     '<br>10 L Greater the Capacity, more the users can be served for bath/wash'+
  //     '<br>8 Bar : Pressure rating >8 bar is suitable for High Rise buildings'+
  //     '<br>Vertical : Suitable for large wall spaces'+
  //     '<br>&nbsp'+
  //     '<br>&nbsp'+
  //     '<br>&nbsp'+
  //     '<br>&nbsp;',
  //     Specs1heading: 'General',
  //     Specs1: 'Brand: '+
  //     'Crompton'+
  //     '<br>Model Name: '+
  //     'ASWH-3010 (ARNO NEO 5S)'+
  //     '<br>Capacity: '+
  //     '10 L'+
  //     '<br>Color: '+
  //     'White'+
  //     '<br>Type: '+
  //     'Storage'+
  //     '<br>Mount Type: '+
  //     'Vertical'+
  //     '<br>Star Rating: '+
  //     '5'+
  //     '<br>Suitable For: '+
  //     'High Rise Buildings, Bathroom'+
  //     '<br>Technology Used: '+
  //     'Powerful Heating Element',
  //     Specs2heading: 'Dimensions',
  //     Specs2: 'Width: '+
  //     '28.3 cm'+
  //     '<br>Height: '+
  //     '33 cm'+
  //     '<br>Depth: '+
  //     '29.8 cm'+
  //     '<br>Weight: '+
  //     '4.8 kg'+
  //     '<br>Other Dimensions: '+
  //     '31.5 x 33 x 36.2 Centimeters',
  //     Specs3heading: 'Performance Features',
  //     Specs3: 'Rated Pressure: '+
  //     '8 Bar'+
  //     '<br>Temperature Range: '+
  //     '30 - 80 DegreeC'+
  //     '<br>Adjustable Thermostat: '+
  //     'Yes'+
  //     '<br>Earth Leakage Circuit Breaker: '+
  //     'No'+
  //     '<br>Thermal Cutoff: '+
  //     'Yes'+
  //     '<br>Heating Element: '+
  //     'Copper HE'+
  //     '<br>Multi Function Valve: '+
  //     'Yes',
  //     Specs4heading: 'Warranty',
  //     Specs4: 'Warranty Summary: '+
  //     '1 Year Brand Warranty of Termite / 10 Days For Manufacturing Defect'+
  //     '<br>Covered in Warranty: '+
  //     'Termites & Fungus (This Item Is Eligible For Replacement, Within 10 Days Of Delivery, In An Unlikely Event Of Damaged, Defective Or Different/Wrong Item Delivered To You. Please Keep The Item In Its Original Condition, Original Packaging, With User Manual, Warranty Cards, And Original Accessories In Manufacturer Packaging For A Successful Return Pick-Up). (If Customer want to claim warranty against Termite & Fungus. Customer will have to bear Shipping charges).',
  //     Specs5heading: 'Body & Convenience Features',
  //     Specs5: 'Body Material: '+
  //     'Metal Sheet'+
  //     '<br>Tank Material: '+
  //     'Mild Steel'+
  //     '<br>Tank Insulation Material: '+
  //     'PUF'+
  //     '<br>Indicators: '+
  //     'Power and Heating Indicator'+
  //     '<br>Timer: '+
  //     'No'+
  //     '<br>Automatic Shut Off: '+
  //     'Yes'+
  //     '<br>Adjustable Temperature Knob: '+
  //     'Yes',
  //   },
  //   {
  //     title: 'Skyland Water Filter',
  //     img: '../../assets/images/skyland1.png',
  //     img2: '../../assets/images/skyland2.webp',
  //     img3: '../../assets/images/skyland3.png',
  //     ratings: '4.0/5',
  //     reviews: '2,706 Ratings',
  //     Offerprice: '3,989',
  //     MRP: '14,500',
  //     Detail: 'AQUA Skyland Combo Model <br>18 Ltr Copper filter + Alkaline Vitamin B12 + RO + UF + TDS Water filter <br>Copper filter +Alkaline Vitamin B12 15 L RO + UF + TDS Water Purifier  <br>(White)',
  //     Specs: 'Electrical & Storage : Electric purification - suitable for areas with water shortage'+
  //     '<br>15 L : More the capacity, more the users can be served with drinking water'+
  //     '<br>RO + UF + TDS'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;',
  //     Specs1heading: 'General',
  //     Specs1: 'Model Name: '+
  //     'Skyland Combo Model 18 Ltr Copper filter + Alkaline Vitamin B12 + RO + UF + TDS Water filter Copper filter +Alkaline Vitamin B12'+
  //     '<br>Series: '+
  //     'Skyland model'+
  //     '<br>Color: '+
  //     'White'+
  //     '<br>Total Capacity: '+
  //     '15 L'+
  //     '<br>Purifying Technology: '+
  //     'RO + UF + TDS'+
  //     '<br>In The Box: '+
  //     '1 main unit, 1 prefilter set, 1 membrane, Accessory'+
  //     '<br>Power Requirement: '+
  //     'Single Phase 100-250 V AC,50 Hz'+
  //     '<br>Operating Voltage: '+
  //     '24 V'+
  //     '<br>Electrical Type: '+
  //     'Electric'+
  //     '<br>Purification Features: '+
  //     'ALKALINE VITAMIN B12 + COPPER FILTER + RO + UF + TDS',
  //     Specs2heading: 'Dimensions',
  //     Specs2: 'Width: '+
  //     '40 cm'+
  //     '<br>Height: '+
  //     '56 cm'+
  //     '<br>Depth: '+
  //     '22 cm'+
  //     '<br>Weight: '+
  //     '7 kg',
  //     Specs3heading: 'Performance Features',
  //     Specs3: 'Filtration Capacity: '+
  //     '18 L/hr'+
  //     '<br>Purification Capacity: '+
  //     '3000 L'+
  //     '<br>Cold Water Capacity: '+
  //     '0 L'+
  //     '<br>Cold Water Dispenser: '+
  //     'No'+
  //     '<br>Hot Water Capacity: '+
  //     '0 L'+
  //     '<br>Hot Water Dispenser: '+
  //     'No'+
  //     '<br>Installation Type: '+
  //     'Wall mounting,table top,Manual Installation,take support Mechanic and call 8769114059'+
  //     '<br>Purification Stages: '+
  //     '7'+
  //     '<br>Total Dissolved Solids (TDS) Levels: '+
  //     '2000 ppm'+
  //     '<br>Water Flow Rate: '+
  //     '.500 l/min',
  //     Specs4heading: 'Product Details',
  //     Specs4: 'Detachable Storage Tank: '+
  //     'Yes'+
  //     '<br>Auto Shut Off: '+
  //     'Yes'+
  //     '<br>Auto Start: '+
  //     'Yes'+
  //     '<br>Overflow Protection: '+
  //     'Yes'+
  //     '<br>Child Lock: '+
  //     'No'+
  //     '<br>Filter Life: '+
  //     '3000 L'+
  //     '<br>Filter Type: '+
  //     'Copper filter, Sediment, Pre filter, UF Filter'+
  //     '<br>Membrane Type: '+
  //     'Earth 75 GPD Membrane(RO Membrane will cover standard TDS of water (upto 1500-2000TDS)'+
  //     '<br>Storage Tank Material: '+
  //     'ABS FOOD grade plastic'+
  //     '<br>Indicators: '+
  //     'No'+
  //     '<br>Other Body Features: '+
  //     'fully automatic'+
  //     '<br>Alarms: '+
  //     'NO',
  //     Specs5heading: 'Installation & Demo',
  //     Specs5: 'The installation and demo for this product are done free of cost as part of this purchase (valid only for Knock Down products). We will share the installation date at the time of order, according to which our service partner will visit your location.',
  //   },
  //   {
  //     title: 'Agaro Vacuum Cleaner',
  //     img: '../../assets/images/agaro1.png',
  //     img2: '../../assets/images/agaro2.webp',
  //     img3: '../../assets/images/agaro3.webp',
  //     ratings: '4.1/5',
  //     reviews: '5,178 Ratings',
  //     Offerprice: '5,999',
  //     MRP: '9,999',
  //     Detail: 'AGARO Ace <br>1600W <br>Wet & Dry Vacuum Cleaner with Reusable Dust Bag  <br>(Yellow)',
  //     Specs: 'Wet & Dry Cleaner'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;',
  //     Specs1heading: 'General',
  //     Specs1: 'Type: '+
  //     'Wet & Dry Cleaner'+
  //     '<br>WiFi Connectivity: '+
  //     'No',
  //     Specs2heading: 'Dimensions',
  //     Specs2: 'W x H x D: '+
  //     '40 x 50 x 40 cm'+
  //     '<br>Net Weight: '+
  //     '7 kg',
  //     Specs3heading: 'Additional features',
  //     Specs3: 'Reusable Dust Bag',
  //     Specs4heading: 'Warranty',
  //     Specs4: 'Warranty Summary: '+
  //     '1 Year Brand Warranty of Termite / 10 Days For Manufacturing Defect'+
  //     '<br>Covered in Warranty: '+
  //     'Termites & Fungus (This Item Is Eligible For Replacement, Within 10 Days Of Delivery, In An Unlikely Event Of Damaged, Defective Or Different/Wrong Item Delivered To You. Please Keep The Item In Its Original Condition, Original Packaging, With User Manual, Warranty Cards, And Original Accessories In Manufacturer Packaging For A Successful Return Pick-Up). (If Customer want to claim warranty against Termite & Fungus. Customer will have to bear Shipping charges).',
  //     Specs5heading: 'Installation & Demo',
  //     Specs5: 'The installation and demo for this product are done free of cost as part of this purchase (valid only for Knock Down products). We will share the installation date at the time of order, according to which our service partner will visit your location.',
  //   },
  //   {
  //     title: 'Kent Water Purifier',
  //     img: '../../assets/images/kent1.png',
  //     img2: '../../assets/images/kent2.webp',
  //     img3: '../../assets/images/kent3.webp',
  //     ratings: '3.8/5',
  //     reviews: '21,508 Ratings',
  //     Offerprice: '1,629',
  //     MRP: '2,000',
  //     Detail: 'KENT Gold Optima (11016) <br>10 L Gravity Based + UF Water Purifier  <br>(White, Blue)',
  //     Specs: 'Non - Electrical & Storage : Gravitational purification - suitable for areas with water shortage'+
  //     '<br>10 L : More the capacity, more the users can be served with drinking water'+
  //     '<br>Gravity Based + UF'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;',
  //     Specs1heading: 'General',
  //     Specs1: 'Model Name: '+
  //     'Gold Optima (11016)'+
  //     '<br>Color: '+
  //     'White, Blue'+
  //     '<br>Total Capacity: '+
  //     '10 L'+
  //     '<br>Purifying Technology: '+
  //     'Gravity Based + UF'+
  //     '<br>In The Box: '+
  //     '1 Water Purifier'+
  //     '<br>Electrical Type: '+
  //     'Non - Electrical and Storage'+
  //     '<br>Purification Features: '+
  //     'Gravity Based + UF',
  //     Specs2heading: 'Dimensions',
  //     Specs2: 'Width: '+
  //     '23 cm'+
  //     '<br>Height: '+
  //     '28 cm'+
  //     '<br>Depth: '+
  //     '52 cm'+
  //     '<br>Weight: '+
  //     '3.56 kg',
  //     Specs3heading: 'Product Details',
  //     Specs3: 'Detachable Storage Tank: '+
  //     'Yes'+
  //     '<br>Auto Shut Off: '+
  //     'Yes'+
  //     '<br>Filter Life: '+
  //     '4000 L'+
  //     '<br>Filter Type: '+
  //     'SS Mesh, Sediment, Activated Carbon'+
  //     '<br>Membrane Type: '+
  //     'UF Membrane'+
  //     '<br>Storage Tank Material: '+
  //     'Food Grade and Non-breakable Plastic'+
  //     '<br>Other Body Features: '+
  //     'ABS Food Grade Plastic with Germ Block Technology'+
  //     '<br>Alarms: '+
  //     'No'+
  //     '<br>Other Convenience Features: '+
  //     'Suitable for Low TDS Water, Hollow Fiber Hydrophilic UF Membrane with 0.1 Microns, NSF, WQA, Swiss Certification'+
  //     '<br>Other Features: '+
  //     'in-Built Infrared Sensor',
  //     Specs4heading: 'Performance Features',
  //     Specs4: 'Purification Capacity: '+
  //     '10 L'+
  //     '<br>Hot Water Dispenser: '+
  //     'No'+
  //     '<br>Maximum Input Water Temperature: '+
  //     '35 degreeC'+
  //     '<br>Minimum Input Water Temperature: '+
  //     '10 degreeC'+
  //     '<br>Installation Type: '+
  //     'Table Top'+
  //     '<br>Purification Stages: '+
  //     '2',
  //     Specs5heading: 'Installation & Demo',
  //     Specs5: 'The installation and demo for this product are done free of cost as part of this purchase (valid only for Knock Down products). We will share the installation date at the time of order, according to which our service partner will visit your location.',
  //   },
  //   {
  //     title: 'Faber Air Fryer',
  //     img: '../../assets/images/faber.png',
  //     img2: '../../assets/images/faber2.jpg',
  //     img3: '../../assets/images/faber3.jpg',
  //     ratings: '3.3/5',
  //     reviews: '11 Ratings',
  //     Offerprice: '4,749',
  //     MRP: '17,990',
  //     Detail: 'Faber 6L 1500W Air Fryer <br> Fry, Bake, Roast, Toast, Defrost, Grill & Reheat <br> 360° Rapid Air Cooking, 85% Less Oil <br> Temperature & Time Control, Non-Stick Fryer Pan, Auto-Off <br> Sleek Design <br> (Black)',
  //     Specs: 'Special Feature:	Temperature Control'+
  //     '<br>Product Dimensions:	25.3D x 34.8W x 29.7H Centimeters'+
  //     '<br>Colour:	Black'+
  //     '<br>Material:	Acrylonitrile Butadiene Styrene (ABS)'+
  //     '<br>Output Wattage:	1500 Watts'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;',
  //     Specs1heading: 'General',
  //     Specs1: 'Food cooked in the Faber 1500W Manual Air Fryer with 6L Capacity contains up to 85% less fat than traditionally fried foods without losing the delicious tastes and crispy textures.'+
  //     '<br>The 360° Rapid Air Technology and Swirl Cooking Method used by this Faber air fryer cooks your food in a wholesome and even manner, which is more quick than ovens and with a minuscule amount of oil compared to deep-fried foods.'+
  //     '<br>Additionally, this Faber Air fryer is equipped with a Non-Stick Sliding Pan that allows food to be crispy and brown without sticking to the pan. And, the Temperature & Time Control Feature also allows manual setting of Time & Temperature based on the user’s need.',
  //     Specs2heading: 'Dimensions:',
  //     Specs2: 'Length (25.3 cm) <br>Width (34.8 cm) <br>Height (29.7 cm)',
  //     Specs3heading: 'Material & Color',
  //     Specs3: 'Material: Acrylonitrile Butadiene Styrene (ABS) <br>Color: Black <br>Output Wattage: 1500 Watts',
  //     Specs4heading: 'Warranty',
  //     Specs4: 'Warranty Summary: '+
  //     '1 Year Brand Warranty of Termite / 10 Days For Manufacturing Defect'+
  //     '<br>Covered in Warranty: '+
  //     'Termites & Fungus (This Item Is Eligible For Replacement, Within 10 Days Of Delivery, In An Unlikely Event Of Damaged, Defective Or Different/Wrong Item Delivered To You. Please Keep The Item In Its Original Condition, Original Packaging, With User Manual, Warranty Cards, And Original Accessories In Manufacturer Packaging For A Successful Return Pick-Up). (If Customer want to claim warranty against Termite & Fungus. Customer will have to bear Shipping charges).',
  //     Specs5heading: 'Installation & Demo',
  //     Specs5: 'The installation and demo for this product are done free of cost as part of this purchase (valid only for Knock Down products). We will share the installation date at the time of order, according to which our service partner will visit your location.',
  //   },
  //   {
  //     title: 'Inalsa Vacuum Cleaner',
  //     img: '../../assets/images/inalsa1.png',
  //     img2: '../../assets/images/inalsa2.jpg',
  //     img3: '../../assets/images/inalsa3.jpg',
  //     ratings: '3.9/5',
  //     reviews: '9,145 Ratings',
  //     Offerprice: '3,195',
  //     MRP: '11,895',
  //     Detail: 'Inalsa Vacuum Cleaner <br>Wet and Dry Micro WD10 <br>With 3in1 Multifunction Wet/Dry/Blowing <br> 14KPA Suction and Impact Resistant Polymer Tank <br>(Yellow/Black)',
  //     Specs: 'Primary Material: Plastic'+
  //     '<br>W x H x D: 60 cm x 9 cm x 12 cm (1 ft 11 in x 3 in x 4 in)'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;',
  //     Specs1heading: 'General',
  //     Specs1: 'Brand:	Inalsa'+
  //     '<br>Special Feature:	Wet/Dry, Lightweight, Wheels, Compact, Bagless'+
  //     '<br>Filter Type:	Cloth'+
  //     '<br>Included Components:	Extension pipe - 3nos, Flexible hose pipe, Dry & Wet Squezzing Brush, Crevice nozzle cum Brush, Small Round BrushExtension pipe - 3nos, Flexible hose pipe, Dry & Wet Squezzing Brush, Crevice nozzle cum Brush, Small Round Brush'+
  //     '<br>Is It Cordless?:	No'+
  //     '<br>Capacity:	10 litres'+
  //     '<br>Wattage:	1000 Watts'+
  //     '<br>Hose Length:	7 Metres'+
  //     '<br>Form Factor:	Cannister'+
  //     '<br>Colour:	Micro WD10',
  //     Specs2heading: 'About this item',
  //     Specs2: 'Wet or dry, bagged or bagless - No matter it is dust, hair, daily waste, the device can clean the dirt perfectly. You dont need to change filter during operation. Please take out the cloth dust filter and use sponge filter when sucking liquid'+
  //     '<br>Blower function- The blower function is suitable for drying and cleaning of narrow and hard- to-reach indoor or outdoor areas. For effective blowing results, do not use any filter in vacuum cleaner. To hold a large amount of waste, this vacuum cleaner boasts a container capacity of 10 litres'+
  //     '<br>Powerful and durable – Equipped with powerful motor delivers 14KPA strong suction power and ensures long time operation. The vacuum cleaner has an impact resistant polymer tank for longer usage life',
  //     Specs3heading: 'Other Features',
  //     Specs3: 'Safe buoy technology – Safe Buoy technology immediately stops sucking water when the liquid capacity reaches the critical point. This protects the machine from being damaged and guarantees superior lifetime. This device ensures low-noise operation'+
  //     '<br>Flexible and convenient - With ergonomically carry handle, along with four 360° rotating wheels enable it to move flexibly to anywhere you need. Its compact and lightweight is easy to store without occupying much space',
  //     Specs4heading: 'Warranty',
  //     Specs4: 'Warranty Summary: '+
  //     '1 Year Brand Warranty of Termite / 10 Days For Manufacturing Defect'+
  //     '<br>Covered in Warranty: '+
  //     'Termites & Fungus (This Item Is Eligible For Replacement, Within 10 Days Of Delivery, In An Unlikely Event Of Damaged, Defective Or Different/Wrong Item Delivered To You. Please Keep The Item In Its Original Condition, Original Packaging, With User Manual, Warranty Cards, And Original Accessories In Manufacturer Packaging For A Successful Return Pick-Up). (If Customer want to claim warranty against Termite & Fungus. Customer will have to bear Shipping charges).',
  //     Specs5heading: 'Installation & Demo',
  //     Specs5: 'The installation and demo for this product are done free of cost as part of this purchase (valid only for Knock Down products). We will share the installation date at the time of order, according to which our service partner will visit your location.',
  //   },
  //   {
  //     title: 'Lifelong Grinder',
  //     img: '../../assets/images/lifelong1.png',
  //     img2: '../../assets/images/lifelong2.jpg',
  //     img3: '../../assets/images/lifelong3.jpg',
  //     ratings: '3.9/5',
  //     reviews: '43,704 Ratings',
  //     Offerprice: '1,099',
  //     MRP: '3,500',
  //     Detail: 'Lifelong LLMG23 Power Pro <br>500-Watt Mixer Grinder with 3 Jars <br>(Liquidizing, Wet Grinding and Chutney Jar), <br>Stainless Steel blades, 1 Year Warranty <br>(Black)',
  //     Specs: 'Material Subtype: Stainless Steel'+
  //     '<br>Width x Height: 20 cm x 46 cm'+
  //     '<br>Delivery Condition: DIY - Basic assembly to be done with simple tools by the customer, comes with instructions.'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;',
  //     Specs1heading: 'General',
  //     Specs1: 'Brand:	Lifelong'+
  //     '<br>Colour:	Black'+
  //     '<br>Product Dimensions:	11.5D x 13.8W x 7.9H Centimeters'+
  //     '<br>Blade Material:	Stainless Steel'+
  //     '<br>Special Feature:	Adjustable Speed Control, Anti-Skid'+
  //     '<br>Capacity:	1.5 litres'+
  //     '<br>Controls Type:	Knob Control'+
  //     '<br>Item Weight:	2760 Grams'+
  //     '<br>Model Name:	LLMG23'+
  //     '<br>Is Dishwasher Safe:	No',
  //     Specs2heading: 'Dimensions',
  //     Specs2: 'Width: '+
  //     '20 cm'+
  //     '<br>Height: '+
  //     '46 cm'+
  //     '<br>Depth: '+
  //     '30 cm'+
  //     '<br>Weight: '+
  //     '2.70 kg',
  //     Specs3heading: 'About this item',
  //     Specs3: '3 jars liquidizing jar (1.5 liters), dry or wet grinding jar (0.8 liters), chutney jar (0.35 liters)'+
  //     '<br>Operating Voltage: 220 - 240 volts, Frequency: 50Hz 1Phase'+
  //     '<br>The mixer has three blades at the bottom that grinds all your ingredients to a smooth paste or powder ; Revolutions: 18000 RPM ; Material: Stainless Steel'+
  //     '<br>3 speed control motor; Multi-functional blade system'+
  //     '<br>Operating noise levels between 80-90 dB; Initial burning smell is to be expected due to evaporating varnish, which is normal'+
  //     '<br>Lifelong LLMG23 Power Pro Mixer Grinder comes with 1 Year Domestic Warranty from the date of purchase',
  //     Specs4heading: 'Warranty',
  //     Specs4: 'Warranty Summary: '+
  //     '1 Year Brand Warranty of Termite / 10 Days For Manufacturing Defect'+
  //     '<br>Covered in Warranty: '+
  //     'Termites & Fungus (This Item Is Eligible For Replacement, Within 10 Days Of Delivery, In An Unlikely Event Of Damaged, Defective Or Different/Wrong Item Delivered To You. Please Keep The Item In Its Original Condition, Original Packaging, With User Manual, Warranty Cards, And Original Accessories In Manufacturer Packaging For A Successful Return Pick-Up). (If Customer want to claim warranty against Termite & Fungus. Customer will have to bear Shipping charges).',
  //     Specs5heading: 'Installation & Demo',
  //     Specs5: 'The installation and demo for this product are done free of cost as part of this purchase (valid only for Knock Down products). We will share the installation date at the time of order, according to which our service partner will visit your location.',
  //   },
  //   {
  //     title: 'Agaro Mixer',
  //     img: '../../assets/images/agaros1.png',
  //     img2: '../../assets/images/agaros2.jpg',
  //     img3: '../../assets/images/agaros3.jpg',
  //     ratings: '4.3/5',
  //     reviews: '1,528 Ratings',
  //     Offerprice: '5,999',
  //     MRP: '11,495',
  //     Detail: 'AGARO Royal Stand Mixer <br>1000W with 5L SS Bowl and 8 Speed Setting <br> Includes Whisking Cone, Mixing Beater & Dough Hook, and Splash Guard, <br>2 Years Warranty, <br>(Black)',
  //     Specs: 'Blade Material: Stainless Steel'+
  //     '<br>Length: 24 cms'+
  //     '<br> Width: 37 cms'+
  //     '<br> Height: 35 cms'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;',
  //     Specs1heading: 'General',
  //     Specs1: 'Brand:	AGARO'+
  //     '<br>Colour:	Black'+
  //     '<br>Product Dimensions:	24D x 37W x 35H Centimeters'+
  //     '<br>Blade Material:	Stainless Steel'+
  //     '<br>Special Feature:	Adjustable speed Control, Splash Resistant'+
  //     '<br>Capacity:	5 litres'+
  //     '<br>Controls Type:	Stainless Steel'+
  //     '<br>Item Weight:	3630 Grams'+
  //     '<br>Is Dishwasher Safe:	No',
  //     Specs2heading: 'Dimensions',
  //     Specs2: '24D x 37W x 35H Centimeters',
  //     Specs3heading: 'About this item',
  //     Specs3: '1000W Motor with 100% copper winding which multi functional feature to cater to your all kitchen need'+
  //     '<br>8 Speed level with stylish led indicator with pulse function makes your stand mixer and robust companion for all beating, whisking and doughing needs of your kitchen'+
  //     '<br>The product comes splash guard which enables to keep your kitchen clean and non-messy while mixer does its perfect blending, doughing or whisking'+
  //     '<br>The stand mixer comes with overheating protection along with safety lock to avoid working hazards'+
  //     '<br>Included Components 1 main unit I 1 dough hook I 1 beater I1 whisker I 5 liter mixing bowl'+
  //     '<br>2 Years warranty I capacity 5 liters',
  //     Specs4heading: 'Warranty',
  //     Specs4: 'Warranty Summary: '+
  //     '1 Year Brand Warranty of Termite / 10 Days For Manufacturing Defect'+
  //     '<br>Covered in Warranty: '+
  //     'Termites & Fungus (This Item Is Eligible For Replacement, Within 10 Days Of Delivery, In An Unlikely Event Of Damaged, Defective Or Different/Wrong Item Delivered To You. Please Keep The Item In Its Original Condition, Original Packaging, With User Manual, Warranty Cards, And Original Accessories In Manufacturer Packaging For A Successful Return Pick-Up). (If Customer want to claim warranty against Termite & Fungus. Customer will have to bear Shipping charges).',
  //     Specs5heading: 'Installation & Demo',
  //     Specs5: 'The installation and demo for this product are done free of cost as part of this purchase (valid only for Knock Down products). We will share the installation date at the time of order, according to which our service partner will visit your location.',
  //   },
  //   {
  //     title: 'Bajaj Dry Iron',
  //     img: '../../assets/images/bajaj1.png',
  //     img2: '../../assets/images/bajaj2.png',
  //     img3: '../../assets/images/bajaj3.jpg',
  //     ratings: '4.1/5',
  //     reviews: '29,057 Ratings',
  //     Offerprice: '599',
  //     MRP: '1,400',
  //     Detail: 'Bajaj DX-6 1000W Dry Iron <br>With Advance Soleplate and Anti-bacterial German Coating Technology, <br>White',
  //     Specs: 'Brand:	Bajaj'+
  //     '<br>Special Feature:	Heavy'+
  //     '<br>Colour:	White'+
  //     '<br>Item Dimensions LxWxH:	20 x 12 x 0.1 Centimeters'+
  //     '<br>Model Name:	DX 6'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;',
  //     Specs1heading: 'Brand',
  //     Specs1: 'Brand:	Bajaj'+
  //     '<br>Special Feature:	Heavy'+
  //     '<br>Colour:	White'+
  //     '<br>Model Name:	DX 6'+
  //     '<br>Frequency:	50 Hz'+
  //     '<br>Product Dimensions:	27L x 11W Centimeters'+
  //     '<br>Manufacturer:	Bajaj'+
  //     '<br>Country of Origin:	India'+
  //     '<br>Item model number:	440195',
  //     Specs2heading: 'Dimensions',
  //     Specs2: 'Width: '+
  //     '12 cm'+
  //     '<br>Length: '+
  //     '20 cm'+
  //     '<br>Height: '+
  //     '0.1 cm'+
  //     '<br>Weight: 1.2 kg',
  //     Specs3heading: 'Customer Rating By Features Out of 5',
  //     Specs3: 'Light weight:  4.2'+
  //     '<br>Easy to use: '+
  //     '4.2'+
  //     '<br>Value for money: '+
  //     '4.0'+
  //     '<br>Temperature control: '+
  //     '3.9',
  //     Specs4heading: 'Warranty',
  //     Specs4: 'Warranty Summary: '+
  //     '1 Year Brand Warranty of Termite / 10 Days For Manufacturing Defect'+
  //     '<br>Covered in Warranty: '+
  //     'Termites & Fungus (This Item Is Eligible For Replacement, Within 10 Days Of Delivery, In An Unlikely Event Of Damaged, Defective Or Different/Wrong Item Delivered To You. Please Keep The Item In Its Original Condition, Original Packaging, With User Manual, Warranty Cards, And Original Accessories In Manufacturer Packaging For A Successful Return Pick-Up). (If Customer want to claim warranty against Termite & Fungus. Customer will have to bear Shipping charges).',
  //     Specs5heading: 'Installation & Demo',
  //     Specs5: 'The installation and demo for this product are done free of cost as part of this purchase (valid only for Knock Down products). We will share the installation date at the time of order, according to which our service partner will visit your location.',
  //   },
  //   {
  //     title: 'Pigeon Kettle',
  //     img: '../../assets/images/pigeon1.png',
  //     img2: '../../assets/images/pigeon2.jpg',
  //     img3: '../../assets/images/pigeon3.jpg',
  //     ratings: '3.9/5',
  //     reviews: '152,239 Rating',
  //     Offerprice: '544',
  //     MRP: '1,245',
  //     Detail: 'Pigeon by Stovekraft Amaze Plus <br>Electric Kettle (14289) with Stainless Steel Body, 1.5 litre, <br>Used for boiling Water, making tea and coffee, instant noodles, soup etc. <br>1500 Watt (Silver)',
  //     Specs: 'Colour:	Silver, Black'+
  //     '<br>Brand:	Pigeon'+
  //     '<br>Finish Type:	Shiny'+
  //     '<br>Package Information:	Kettle'+
  //     '<br>Assembly Required:	No'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;',
  //     Specs1heading: 'General',
  //     Specs1: 'Brand:	Pigeon'+
  //     '<br>Colour:	Silver, Balck'+
  //     '<br>Special Feature:	Indicator Light, Portable, Durable, Automatic Shut-Off'+
  //     '<br>Package Information:	Kettle'+
  //     '<br>Finish Type:	Shiny'+
  //     '<br>Product Dimensions:	7.3L x 7.3W x 8.3H Centimeters'+
  //     '<br>Included Components	1 - Pigeon amaze electric kettle (1.5 Litre)'+
  //     '<br>Product Care Instructions:	Hand Wash and Dishwasher Safe'+
  //     '<br>Model Name:	Amaze Plus 1.5 Litre Electric Kettle'+
  //     '<br>Item Weight:	656.4 Grams',
  //     Specs2heading: 'Dimensions',
  //     Specs2: 'Length: 7.3 cms <br>Width: 7.3 cms <br>Height: 8.3 cms',
  //     Specs3heading: 'About this item',
  //     Specs3: 'Classic Design: The classical mirror polish of the appearance makes your electric kettle 1.5 Litre unique and aesthetic, which can match any type of kitchen design and 360° swivel base is connected with standard power cord for safe usage and convenient storage'+
  //     '<br>Cordless Pouring: The electric kettle 1.5 Litre can be easily lifts from its swivel base for easy filling at the sink and graceful serving without the hassle of a power cord; it can also be returned to its power source from any direction, great for right and left-handed users.'+
  //     '<br>Convenient: The cordless & BPA-Free electric kettle 1.5 Litre makes a striking presence on any kitchen counter or buffet in preparing and serving and it is easy for storage',
  //     Specs4heading: 'Warranty',
  //     Specs4: 'Warranty Summary: '+
  //     '1 Year Brand Warranty of Termite / 10 Days For Manufacturing Defect'+
  //     '<br>Covered in Warranty: '+
  //     'Termites & Fungus (This Item Is Eligible For Replacement, Within 10 Days Of Delivery, In An Unlikely Event Of Damaged, Defective Or Different/Wrong Item Delivered To You. Please Keep The Item In Its Original Condition, Original Packaging, With User Manual, Warranty Cards, And Original Accessories In Manufacturer Packaging For A Successful Return Pick-Up). (If Customer want to claim warranty against Termite & Fungus. Customer will have to bear Shipping charges).',
  //     Specs5heading: 'Other Features',
  //     Specs5: 'Fast Boil: This 1500 Watt electric kettle has concealed heating elements and can boil up to 1.5 litres of water in 5 to 7 minutes, quicker and safer. Start your day with a cup of instant lemon tea, green tea, hot water.'+
  //     '<br>Easy Clean: Use white vinegar, baking soda, water, cleaning bottle brush and microfiber cloth to clean your electric kettle 1.5 litre and keep it looking new.'+
  //     '<br>Water Level Indicator: No; Colour: Silver; Capacity: 1.8 Litre'+
  //     '<br>Warranty: 1 year Warranty from the Brand',
  //   },
  // ]
  homeProducts: any[] = [];
  constructor(private router: Router, public dialog: MatDialog, private userService: UserService, private cookieService:CookieService, private apiService: ApiService) { }

  loadhomeProducts() {
    const homeCategoryId = 3;
    this.apiService.getcategoryProductDetails(homeCategoryId).subscribe(
      (data) => {
        console.log('Cloth Products:', data);
        this.homeProducts = data as any[];
      },
      (error) => {
        console.error('Error fetching cloth products:', error);
      }
    );
  }

  selectProduct(product: any) {
    this.apiService.getProductDetails(product).subscribe(
      (productData)=>{
        this.userService.setSelectedProduct(productData);
        this.router.navigate(['/shop/product']);
      }
    )
  }

  ngOnInit(): void {
    if(this.userService.isLoggedIn()){
      if(this.loggedInUsername && this.phone){
        const expirationDate = new Date();
        expirationDate.setFullYear(expirationDate.getFullYear() + 1);
        this.cookieService.set('username', this.loggedInUsername, expirationDate);
        this.cookieService.set('phone', this.phone, expirationDate);
      }
    }
    console.log(this.cookieService.get('username'));
    if(!this.cookieService.check('username')){
      this.loginnav();
    }
    this.loadhomeProducts()
  }
  isloginav = true;
  isHelloVisible = false;
  ispop = false;
  loggedInUsername: string | null = null;
  phone: string | null = null;

  toggleHello() {
    this.isHelloVisible = !this.isHelloVisible;
  }

  loginnav(){
    this.isloginav = !this.isloginav;
  }

  openAlertDialogComponentComponent() {
    this.dialog.open(AlertDialogComponentComponent, {
      data: {
        icon: 'Error',
        message: `Username: ${this.cookieService.get('username')}`,
        message2: `Contact: ${this.cookieService.get('phone')}`,
        buttonText: 'Okay'
      }
    });
  }

  onSearchKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
      if (searchTerm === 'electronics' || searchTerm === 'electronic' || searchTerm === 'elec' || searchTerm === 'ele') {
        this.toggleelecform();
      }
      else if(searchTerm === 'home appliances' || searchTerm === 'home' || searchTerm === 'home appliance' || searchTerm === 'home app'){
        this.togglehomeform();
      }
      else if(searchTerm === 'furnitures' || searchTerm === 'furniture' || searchTerm === 'fur'){
        this.togglefurform();
      }
      else if(searchTerm === 'clothes' || searchTerm === 'clothe' || searchTerm === 'cloth'){
        this.toggledecform();
      }
      else{
        this.togglenoneform();
      }
    }
  }
  
  

  ismain1 = true;
  iselec1 = false;
  ishome1 = false;
  isDec1 = false;
  isFur1 = false;
  isnone1 = false;
  toggleelecform(){
    this.router.navigate(['/shop/electronics-devices']);
  }
  togglehomeform(){
    this.router.navigate(['/shop/home-appliances']);
  }
  togglefurform(){
    this.router.navigate(['/shop/furnitures']);
  }
  toggledecform(){
    this.router.navigate(['/shop/clothes']);
  }
  togglenoneform(){
    const hm = document.getElementById("sidebar") as HTMLElement | null;
    if(hm){
      hm.style.marginTop = "-222px";
    }
    this.ismain1 = false;
    this.iselec1 = false;
    this.ishome1 = false;
    this.isFur1 = false;
    this.isDec1 = false;
    this.isnone1 = true;
  }
  toggleloginform(){
    this.cookieService.deleteAll();
    this.router.navigate(['/login'])
  }
  confirmDialog(): void {
    const message = `Are you sure you want Logout?`;

    const dialogData = new ConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      if(dialogResult == true){
        this.router.navigate(['/login']);
      }
    });
  }

}
